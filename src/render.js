// @flow

import type { nElementNode, nTextNode } from "./types";

export function render(vElement: nElementNode | nTextNode): HTMLElement | Text {
  if (typeof vElement === "string") {
    return document.createTextNode(vElement);
  }
  const $Element: HTMLElement = document.createElement(vElement.name);
  for (const [key, value] of Object.entries(vElement.props)) {
    if (typeof value === "string") {
      $Element.setAttribute(key, value);
    }
  }
  for (const child of vElement.children) {
    $Element.appendChild(render(child));
  }
  return $Element;
}
