// @flow

export function mount(
  $Element: HTMLElement | Text,
  targetNode: HTMLElement
): HTMLElement | Text {
  targetNode.replaceWith($Element);
  return $Element;
}
