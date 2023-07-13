
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
    render(<Card />);
  });

it("matches the snapshot", function () {
    const { asFragment, debug } = render(<Card />);
    debug();
    expect(asFragment()).toMatchSnapshot();
});