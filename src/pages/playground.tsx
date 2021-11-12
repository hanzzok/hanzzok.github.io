import Editor from '@monaco-editor/react';
import type { Compiler } from 'libhanzzok';
import { editor } from 'monaco-editor';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
  ColorScheme,
  usePreferredColorScheme,
} from '../lib/hooks/use-preferred-color-scheme';
import { styled } from '../stitches.config';
import dynamic from 'next/dynamic';

const libhanzzokPromise = import('libhanzzok');
type libhanzzok = typeof libhanzzokPromise extends Promise<infer U> ? U : never;

const TotalWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

const EditorWrap = styled('div', {
  width: '50vw',
  height: '100vh',
});

const StyledEditor = dynamic(async () => {
  return styled(Editor, {
    height: '100%',
  });
});

const ResultWrap = styled('div', {
  width: '50vw',
  height: '100vh',
});

const Playground: NextPage = () => {
  const colorScheme = usePreferredColorScheme();
  const [result, setResult] = useState('Loading...');
  const [libhanzzok, setLibhanzzok] = useState<libhanzzok | null>(null);
  const [compiler, setCompiler] = useState<Compiler | null>(null);

  useEffect(() => {
    libhanzzokPromise.then((value) => setLibhanzzok(value));
  }, []);

  useEffect(() => {
    if (libhanzzok) {
      setCompiler(() =>
        libhanzzok.Compiler.new()
          .with(libhanzzok.code_plugin())
          .with(libhanzzok.emphasize_plugin())
          .with(libhanzzok.heading_plugin())
          .with(libhanzzok.icon_plugin())
          .with(libhanzzok.input_guide_plugin())
          .with(libhanzzok.link_plugin())
          .with(libhanzzok.list_plugin())
          .with(libhanzzok.math_plugin())
          .with(libhanzzok.quotation_plugin())
          .with(libhanzzok.youtube_plugin())
      );
    }
    return () => {
      compiler?.free();
    };
  }, [libhanzzok, compiler]);

  function handleEditorChange(
    value: string | undefined,
    event: editor.IModelContentChangedEvent
  ) {
    const source = value ?? '';

    if (libhanzzok && compiler) {
      const tokenized = libhanzzok.w_tokenize(source);
      const parsed = libhanzzok.w_parse_root(tokenized, compiler);
      const rendered = libhanzzok.w_compile_html(parsed, compiler);

      setResult(rendered);
    }
  }

  return (
    <>
      <TotalWrap>
        <EditorWrap>
          <StyledEditor
            theme={
              colorScheme === ColorScheme.Dark
                ? 'vs-dark'
                : colorScheme === ColorScheme.Light
                ? 'vs'
                : undefined
            }
            onChange={handleEditorChange}
          />
        </EditorWrap>
        <ResultWrap dangerouslySetInnerHTML={{ __html: result }} />
      </TotalWrap>
    </>
  );
};

export default Playground;
