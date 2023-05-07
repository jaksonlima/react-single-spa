import React from "react";
import { render } from "@testing-library/react";

import Root from "./root.component";

describe("Root component", () => {
  it("should render Root component correctly", () => {
    const { asFragment } = render(<Root />);

    expect(asFragment()).toMatchSnapshot();
  });
});
