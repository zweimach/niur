// @flow

import type { nProps, nChild, nElementNode } from "./types";

export function h(
  name: string,
  props: nProps,
  ...children: nChild[]
): nElementNode {
  return { name, props, children };
}
