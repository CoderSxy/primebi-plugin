// @ts-nocheck
import React from "react";
import { ChartProps } from "@superset-ui/core";

export default function ReactComponent(props: ChartProps) {
  return (
    <div style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
      <strong>{"{{PLUGIN_LABEL}}"}</strong>
      <div>{JSON.stringify(props, null, 2)}</div>
    </div>
  );
}
