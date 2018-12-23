// @flow

export function mount($Element: HTMLElement | Text, targetNode: HTMLElement) {
  targetNode.replaceWith($Element);
  return $Element;
}
