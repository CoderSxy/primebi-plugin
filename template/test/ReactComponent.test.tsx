import React from "react";
import { render, screen } from "@testing-library/react";
import ReactComponent from "../src/plugin/ReactComponent";

describe("ReactComponent", () => {
  it("renders label", () => {
    render(
      <ReactComponent
        width={400}
        height={300}
        formData={{}}
        queriesData={[]}
        datasource={undefined as any}
        hooks={{} as any}
        onAddFilter={() => {}}
        setControlValue={() => {}}
        behaviors={[]}
        rawFormData={{} as any}
        appContainer={document.body as any}
        emitFilter={() => {}}
      />
    );
    expect(screen.getByText("{{PLUGIN_LABEL}}")).toBeInTheDocument();
  });
});
