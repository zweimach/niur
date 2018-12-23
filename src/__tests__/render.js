import { h } from "../h";
import { render } from "../render";

describe("render", () => {
  it('renders <h1 id="title">Title</h1>', () => {
    const $Title = document.createElement("h1");
    $Title.setAttribute("id", "title");
    $Title.innerHTML = "Title";

    const vTitle = render(h("h1", { id: "title" }, "Title"));

    expect(vTitle).toEqual($Title);
  });
});
