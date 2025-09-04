// @ts-nocheck
import { ControlPanelConfig } from "@superset-ui/core";

const config: ControlPanelConfig = {
  controlPanelSections: [
    {
      label: "Query",
      expanded: true,
      controlSetRows: [
        ["metrics"],
        ["groupby"],
        ["adhoc_filters"],
        ["row_limit"],
      ],
    },
  ],
};

export default config;
