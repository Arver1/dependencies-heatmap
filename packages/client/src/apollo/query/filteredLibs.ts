import { BaseResolver } from "../resolvers";
import debug from "debug";
import { getItem, STORE_KEYS } from "../../localStorage";

const log = {
  filteredLibs: debug("resolvers:query:filteredLibs")
};

export const filteredLibs: BaseResolver = () => {
  log.filteredLibs("called");

  // const libs = ["react", "react-dom", "arui-scripts", "eslint", "typescript"];
  const libs = getItem<string[]>(STORE_KEYS.filteredLibs) || null;

  return libs;
};
