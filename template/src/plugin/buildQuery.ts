// @ts-nocheck
import {
  buildQueryContext,
  QueryFormData,
  QueryObject,
} from "@superset-ui/core";

export default function buildQuery(formData: QueryFormData) {
  return buildQueryContext(
    formData,
    (baseQueryObject: QueryObject) =>
      ({
        ...baseQueryObject,
      } as QueryObject)
  );
}
