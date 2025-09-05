import React from "react";
import { render, screen } from "@@testing-library/react";
import {{PLUGIN_CLASS_NAME}} from "../src/{{PLUGIN_CLASS_NAME}}";

describe("{{PLUGIN_CLASS_NAME}}", () => {
  it("renders", () => {
    render(
      <{{PLUGIN_CLASS_NAME}}
        width={400}
        height={300}
        data={[]}
        headerText="Test"
        headerFontSize="l"
        boldText={true}
      />
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
