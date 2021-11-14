import {
  code_plugin,
  Compiler,
  emphasize_plugin,
  heading_plugin,
  icon_plugin,
  input_guide_plugin,
  link_plugin,
  list_plugin,
  math_plugin,
  quotation_plugin,
  w_compile_html_nodes,
  w_parse_root,
  w_tokenize,
  youtube_plugin,
} from 'libhanzzok';

const compiler = Compiler.new()
  .with(code_plugin())
  .with(emphasize_plugin())
  .with(heading_plugin())
  .with(icon_plugin())
  .with(input_guide_plugin())
  .with(link_plugin())
  .with(list_plugin())
  .with(math_plugin())
  .with(quotation_plugin())
  .with(youtube_plugin());

function compile(source: string): string[] {
  const tokenized = w_tokenize(source);
  const parsed = w_parse_root(tokenized, compiler);
  const renderedNodes = w_compile_html_nodes(parsed, compiler);
  const newResult = [];
  let current: string | undefined;
  do {
    current = renderedNodes.next();
    if (current) {
      newResult.push(current);
    }
  } while (current !== undefined);

  renderedNodes.free();

  return newResult;
}

addEventListener('message', (event) => {
  const source = event.data as string;
  const result = compile(source);
  postMessage(result);
});
