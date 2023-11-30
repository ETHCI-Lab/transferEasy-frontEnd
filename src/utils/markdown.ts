import Markdown from "markdown-it";

const mdOptions: Markdown.Options = {
  linkify: true,
  typographer: false,
  breaks: false,
  langPrefix: "language-",
};

export const md = new Markdown(mdOptions);