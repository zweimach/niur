// @flow

import type { nProps, nChild, nElementNode } from "./types";

export function h(
  name: string,
  props: nProps,
  ...children: nChild[]
): nElementNode {
  const vElement = {};
  Object.assign(vElement, {
    name,
    props,
    children,
  });
  return vElement;
}
