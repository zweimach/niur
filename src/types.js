// @flow

export type nTextNode = string;

export type nChild = nElementNode | nTextNode;

export type nProps = {
  [key: string]: string,
};

export type nElementNode = {
  name: string,
  props: nProps,
  children: nChild[],
};
