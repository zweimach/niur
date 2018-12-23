import { h } from "../h";
import { mount } from "../mount";
import { render } from "../render";

beforeEach(() => {
  document.body.innerHTML = `
    <div id="root"></div>
  `;
});

describe("mount", () => {
  it('mounts <h1 id="title">Title</h1>', () => {
    const vTitle = render(h("h1", { id: "title" }, "Title"));

    const $Root = document.getElementById("root");

    mount(vTitle, $Root);

    const $Title = document.getElementById("title");

    expect($Title.innerHTML).toEqual("Title");
  });
});
