import Editor, { loader } from '@monaco-editor/react';
import type { Compiler } from 'libhanzzok';
import { editor } from 'monaco-editor';
import { NextPage } from 'next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ColorScheme,
  usePreferredColorScheme,
} from '../lib/hooks/use-preferred-color-scheme';
import { styled } from '../stitches.config';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRerender } from '../lib/hooks/use-rerender';

const libhanzzokPromise = import('libhanzzok');
type libhanzzok = typeof libhanzzokPromise extends Promise<infer U> ? U : never;

const TotalWrap = styled('div', {
  flexDirection: 'row',
  variants: {
    isLoading: {
      true: {
        overflow: 'hidden',
        maxHeight: '100vh',
      },
      false: {
        display: 'flex',
      },
    },
  },
});

const EditorWrap = styled('div', {
  width: '50vw',
  height: '100vh',
  overflow: 'hidden',
});

const StyledEditor = dynamic(async () => {
  return styled(Editor, {
    variants: {
      isLoading: {
        true: {
          display: 'none',
        },
      },
    },
  });
});

const ResultWrap = styled('div', {
  width: '50vw',
  maxHeight: '100vh',

  overflowY: 'scroll',

  padding: '1em 3em',

  lineHeight: 1.75,
  fontSize: '1.25em',

  '& h1, & h2, & h3, & h4, & h5, & h6': {
    margin: '0.5rem 0',
  },

  '& p, & ul, & ol': {
    marginBottom: '1em',
  },

  variants: {
    isLoading: {
      true: {
        display: 'none',
      },
    },
  },
});

const DefaultSource = `
# Hello!

Welcome to the [Hanzzok Playground .bold]!
Hanzzok is a brand-new document markup language. Let's take a look at this.

## Block Constructor

Block Constructor is a rule for creating a block element. It is separated into 4 forms: Basic, Shortened, Bookend, and Leading.

### Basic Form

\`\`\` ebnf
block-constructor-basic-form = "|", identifier, { inline-object }, [ "{, hzdata, "}" ]
\`\`\`

`.trim();

const LoadingOverlayWrap = styled('div', {
  fontSize: '2rem',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const LoadingOverlay = (): JSX.Element => {
  return <LoadingOverlayWrap>Loading Hanzzok Playground...</LoadingOverlayWrap>;
};

const Playground: NextPage = () => {
  const colorScheme = usePreferredColorScheme();

  const libhanzzokRef = useRef<libhanzzok>();
  const compilerRef = useRef<Compiler>();
  const monacoRef = useRef<editor.IEditor>();

  const rerender = useRerender();

  const [result, setResult] = useState('');

  const isLoading = !compilerRef.current || !monacoRef.current;

  useEffect(() => {
    libhanzzokPromise.then((libhanzzok) => {
      libhanzzokRef.current = libhanzzok;
      compilerRef.current?.free();
      compilerRef.current = libhanzzok.Compiler.new()
        .with(libhanzzok.code_plugin())
        .with(libhanzzok.emphasize_plugin())
        .with(libhanzzok.heading_plugin())
        .with(libhanzzok.icon_plugin())
        .with(libhanzzok.input_guide_plugin())
        .with(libhanzzok.link_plugin())
        .with(libhanzzok.list_plugin())
        .with(libhanzzok.math_plugin())
        .with(libhanzzok.quotation_plugin())
        .with(libhanzzok.youtube_plugin());
      rerender();
    });
  }, [rerender]);

  useEffect(() => {
    return () => {
      compilerRef.current?.free();
    };
  }, []);

  function handleEditorMount(editor: editor.IEditor) {
    monacoRef.current = editor;
    rerender();
  }

  const acceptSource = useCallback((source: string) => {
    const libhanzzok = libhanzzokRef.current;
    const compiler = compilerRef.current;
    if (libhanzzok && compiler) {
      const tokenized = libhanzzok.w_tokenize(source);
      const parsed = libhanzzok.w_parse_root(tokenized, compiler);
      const rendered = libhanzzok.w_compile_html(parsed, compiler);

      setResult(rendered);
    }
  }, []);

  function handleEditorChange(
    value: string | undefined,
    _event: editor.IModelContentChangedEvent
  ) {
    const source = value ?? '';
    acceptSource(source);
  }

  useEffect(() => {
    if (!isLoading) {
      acceptSource(DefaultSource);
    }
  }, [isLoading, acceptSource]);

  return (
    <>
      <Head>
        <title>Hanzzok Playground</title>
      </Head>
      <TotalWrap isLoading={isLoading}>
        {isLoading && <LoadingOverlay />}
        <EditorWrap>
          <StyledEditor
            theme={
              colorScheme === ColorScheme.Dark
                ? 'vs-dark'
                : colorScheme === ColorScheme.Light
                ? 'light'
                : undefined
            }
            onChange={handleEditorChange}
            onMount={handleEditorMount}
            isLoading={isLoading}
            loading=""
            defaultValue={DefaultSource}
            options={{
              cursorBlinking: 'expand',
              scrollBeyondLastLine: false,
              padding: {
                bottom: 24,
                top: 24,
              },
            }}
          />
        </EditorWrap>
        <ResultWrap
          isLoading={isLoading}
          dangerouslySetInnerHTML={isLoading ? undefined : { __html: result }}
        />
      </TotalWrap>
    </>
  );
};

export default Playground;
