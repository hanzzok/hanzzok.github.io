import Editor from '@monaco-editor/react';
import type { Compiler } from 'libhanzzok';
import { editor } from 'monaco-editor';
import { NextPage } from 'next';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import {
  ColorScheme,
  usePreferredColorScheme,
} from '../lib/hooks/use-preferred-color-scheme';
import { styled } from '../stitches.config';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRerender } from '../lib/hooks/use-rerender';
import { getHighlighter, Highlighter, Lang, setCDN } from 'shiki';
import 'katex/dist/katex.min.css';
import { debounce } from 'lodash';
// Because of unstable resolution of yarn 2 pnp
const katex = require('katex');

setCDN('https://unpkg.com/shiki@0.9.12/');
// setOnigasmWASM('https://unpkg.com/shiki@0.9.12/dist/onigasm.wasm');

const shikiPromise = getHighlighter({
  theme: 'nord',
  // If we leave this array empty, it will be all bundled languages.
  langs: ['js'],
});

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
  maxHeight: 'calc(100vh - 2em)',

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

  '& blockquote': {
    margin: 0,
    border: '4px dashed $fgLight',
    borderLeft: '8px solid $fgLight',
    borderRadius: '0 16px 16px 0',
    background: '#88888844',
    paddingLeft: '1em',
  },

  '& .code-block > pre': {
    padding: '0.5rem',
    overflowX: 'auto',
  },
  '& .code-block > pre::after': {
    borderRadius: '0.2em',
  },

  '& .icon': {
    width: '1em',
    verticalAlign: 'middle',
    display: 'inline',
  },

  '& .table-of-contents': {
    fontSize: '0.9em',
    lineHeight: 1.5,
  },
  '& .table-of-contents ol': {
    marginBottom: 0,
  },

  '& kbd.system-text > samp': {
    fontWeight: 'bold',
    fontFamily: 'inherit',
    display: 'inline-block',
  },
  '& kbd.system-text > samp::first-letter': {
    textDecoration: 'underline',
  },
  '& kbd.key': {
    padding: '0.1em 0.5em',

    position: 'relative',
    '&::after': {
      content: '',
      zIndex: -1,
      borderRadius: '0.2em',
      background: '$bgLight',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    },
  },

  '& a': {
    color: 'hsl(210 65% 70%)',
  },
  '& a:visited': {
    color: 'hsl(210 0% 70%)',
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

[Hanzzok 놀이터 .bold]에 오신 것을 환영합니다!
Hanzzok은 새로운 문서 마크업 언어입니다. 같이 둘러봅시다.
Welcome to the [Hanzzok Playground .bold]!
Hanzzok is a brand-new document markup language. Let's take a look at this.

주의: 현재로서는, 편집 시 렉을 경험할 수 있습니다. 불편함에 사과드립니다.
Warning: As of now, editing would be laggy. Sorry for inconvenience.

## Block Constructor

블록 생성자는 블록 요소를 생성합니다. 기본, 축약, 수미상관(책표지), 앞섬의 4가지 형태로 나뉘어 있습니다.
플러그인 개발자는 각 규칙 별로 형태를 적절히 설정해 사용에 편의성을 더할 수 있습니다.
Block Constructor creating a block element. It is separated into 4 forms: Basic, Shortened, Bookend, and Leading.
Plugin developers can improve convenience by applying an appropriate form on a rule.

### Basic Form

기본 형태는 세로 줄 뒤에 이름, 인라인 객체, 그리고 설정을 순서대로 전달해 사용할 수 있습니다.
You can use Basic Form by putting vertical bar, name, inline object, and settings in order.

\`\`\` ebnf
block-constructor-basic-form = "|", name, { inline-object }, [ "{", hzdata, "}" ]
\`\`\`

Example:

\`\`\` hanzzok
| youtube hOzbco2EcYQ
| manual { name = "bold", type = "decorator", from = "emphasize" }
\`\`\`

### Shortened Form

축약 형태는 기본 형태에서 세로줄이 빠진 문법적 설탕입니다. 이름은 특수문자로만 구성되어야 합니다.
Shortened Form is a syntactic sugar that removed vertical bar. Name should be composed of special characters.

\`\`\` ebnf
block-constructor-shortened-form = name, { inline-object }, [ "{", hzdata, "}" ]
\`\`\`

Example:

\`\`\` hanzzok
# Heading 1
## Heading 2 { toc = false }
\`\`\`

### Bookend Form

수미상관(책표지) 형태는 시작과 끝을 같은 특수문자로 두르는 형태입니다.
Bookend form is a form covering the begin and end with same special characters.

\`\`\` ebnf
block-constructor-bookend-form = name, { inline-object }, [ "{", hzdata, "}" ], "\\n" { { inline-object }, "\\n" }, name
\`\`\`

Example:

\`\`\` hanzzok
\\\`\`\` hanzzok
A code
\\\`\`\`

$$
e^{\\pi i} + 1 = 0
$$
\`\`\`

### Leading Form

앞섬 형태는 여러 줄에 걸친 인라인 객체 앞에 매번 앞선 특수 문자가 있는 형태입니다. 설정은 건넬 수 없습니다.
Leading form is a form with leading special characters on multiline inline objects. You cannot pass configuration.

\`\`\` ebnf
block-constructor-leading-form = { name, { inline-object } }
\`\`\`

Example:

\`\`\` hanzzok
> "Was it a cat I saw?"
>
> Probably not.
\`\`\`

## Inline Object

인라인 객체는 인라인 요소를 나타냅니다. 인라인 객체는 인라인 생성자, 꾸미개, 그리고 글로 나눌 수 있습니다.
Inline Object represents a inline element. Inline Objects can divided to Inline Constructor, Decorator, and Text.

### Inline Constructor

인라인 생성자는 꾸미개 안에서만 나올 수 있고, 글이 아닌(이미지 등) 종류의 인라인 요소를 생성합니다.
Inline Constructor, can only appear in Decorator, creates a inline elements which is not a text(e.g. image).

\`\`\` ebnf
inline-constructor = "#", name, [ "(", hzdata, ")" ]
\`\`\`

Example:

\`\`\` hanzzok
#icon("https://.../icon.svg")
#keycombo(["Alt", "F4"])
\`\`\`

### Decorator

꾸미개는 인라인 생성자나 글을 꾸밉니다. 꾸미개를 중첩할 수는 없지만 꾸미개 함수를 연쇄할 수 있습니다.
Decorator decorates Inline Constructor or Text. You cannot stack Decorator but you can chain Decorator Functions.

\`\`\` ebnf
decorator = "[", inline-constructor-or-text, { ".", name, [ "(", hzdata, ")" ] } "]"
\`\`\`

Example:

\`\`\` hanzzok
[Text .bold .link("https://example.com/")]
\`\`\`

### Text

글은 위에서 언급한 문법을 만족시키지 않는 모든 문자열을 말합니다.
Text is a string does not satisfying all above syntaxes.

Example:

\`\`\` hanzzok
The quick brown fox jumps over a lazy dog.
\`\`\`

#### Escaped Text

역슬래시를 사용해 특수문자나 단어를 문법 요소에서 탈출시킬 수 있습니다.
You can escape special characters or a word by using backslash.

Example:
\`\`\`
a \\word escape
\\| not a block constructor
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
  const shikiRef = useRef<Highlighter>();

  const rerender = useRerender();

  const [result, setResult] = useState(['']);

  const isLoading =
    !compilerRef.current || !monacoRef.current || !shikiRef.current;

  useEffect(() => {
    shikiPromise.then((highlighter) => {
      shikiRef.current = highlighter;
      rerender();
    });
  }, [rerender]);

  useEffect(() => {
    const highlighter = shikiRef.current;
    if (!highlighter) {
      return;
    }
    (async () => {
      const targetContainer = document.getElementById('result')!;
      for (const target of Array.from(
        targetContainer.getElementsByClassName('code-block')
      )) {
        if (target.classList.contains('evaluated')) {
          continue;
        }
        const lang = (
          target instanceof HTMLElement
            ? target.dataset['language'] ?? 'text'
            : 'text'
        ) as Lang;
        let code: string = target.textContent ?? '';
        try {
          if (!highlighter.getLoadedLanguages().includes(lang)) {
            await highlighter.loadLanguage(lang);
          }
          code = highlighter.codeToHtml(code, lang);
        } catch {
          code = highlighter.codeToHtml(code, 'text');
        }
        target.innerHTML = code;
        const pre = target.children[0] as HTMLPreElement;
        pre.style.color = pre.style.backgroundColor;
        pre.style.backgroundColor = '';
        target.classList.add('evaluated');
      }
    })();
  }, [isLoading, result]);

  useEffect(() => {
    for (const element of document.getElementsByClassName('math-block')) {
      if (element.classList.contains('evaluated')) {
        continue;
      }
      katex.render(element.textContent, element, {
        throwOnError: false,
      });
      element.classList.add('evaluated');
    }
    for (const element of document.getElementsByClassName('math-inline')) {
      if (element.classList.contains('evaluated')) {
        continue;
      }
      katex.render(element.textContent, element, {
        throwOnError: false,
        display: false,
      });
      element.classList.add('evaluated');
    }
  }, [isLoading, result]);

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const acceptSource = useCallback(
    debounce((source: string) => {
      const libhanzzok = libhanzzokRef.current;
      const compiler = compilerRef.current;
      if (libhanzzok && compiler) {
        const tokenized = libhanzzok.w_tokenize(source);
        const parsed = libhanzzok.w_parse_root(tokenized, compiler);
        const renderedNodes = libhanzzok.w_compile_html_nodes(parsed, compiler);
        const newResult = [];
        let current: string | undefined;
        do {
          current = renderedNodes.next();
          if (current) {
            newResult.push(current);
          }
        } while (current !== undefined);

        renderedNodes.free();

        setResult(newResult);
      }
    }, 300),
    []
  );

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
        <ResultWrap id="result" isLoading={isLoading}>
          {result.map((text) => (
            <div key={text} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </ResultWrap>
      </TotalWrap>
    </>
  );
};

export default Playground;
