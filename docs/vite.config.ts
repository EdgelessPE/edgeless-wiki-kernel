import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
const options = {
  previewLength: 62,
  buttonLabel: "搜索",
  placeholder: "在此文档中搜索",
  encode: false,
  tokenize: 'full'
};

export default defineConfig({
  //@ts-ignore
  plugins: [SearchPlugin(options)],
});