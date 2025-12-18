import { codeToHtml } from "shiki";

const THEME = "github-dark-default";

export async function highlightSnippet(code: string, lang: string) {
  return codeToHtml(code, {
    lang,
    theme: THEME,
  });
}
