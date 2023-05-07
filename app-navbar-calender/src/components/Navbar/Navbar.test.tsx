import { render } from "@testing-library/react";

import { Navbar } from ".";

describe("ResponsiveDrawer", () => {
  it("should render ResponsiveDrawer correctly", () => {
    const { asFragment } = render(<Navbar />);

    expect(asFragment()).toMatchSnapshot();
  });
});
