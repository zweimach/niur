import { h } from "../h";

describe("h", () => {
  it('creates <h1 id="title">Title</h1>', () => {
    const $Title = {
      name: "h1",
      props: {
        id: "title",
      },
      children: ["Title"],
    };

    const vTitle = h("h1", { id: "title" }, "Title");

    expect(vTitle).toEqual($Title);
  });

  it('creates <div id="container"></div>', () => {
    const $Container = {
      name: "div",
      props: {
        id: "container",
      },
      children: [],
    };

    const vContainer = h("div", { id: "container" });

    expect(vContainer).toEqual($Container);
  });
});
