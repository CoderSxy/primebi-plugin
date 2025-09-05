/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useEffect, createRef } from "react";
import { styled } from "@superset-ui/core";
import { {{PLUGIN_CLASS_NAME}}Props, {{PLUGIN_CLASS_NAME}}StylesProps } from "./types";

const Styles = styled.div<{{PLUGIN_CLASS_NAME}}StylesProps>`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;

  .header {
    font-size: ${({ theme, headerFontSize }) => theme.typography.sizes[headerFontSize]}px;
    font-weight: ${({ theme, boldText }) => theme.typography.weights[boldText ? "bold" : "normal"]};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.gridUnit * 3}px;
  }
`;

export default function {{PLUGIN_CLASS_NAME}}(props: {{PLUGIN_CLASS_NAME}}Props) {
  const { data, height, width, headerText } = props;
  const rootElem = createRef<HTMLDivElement>();

  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    root.innerHTML = `
      <div class="header">${headerText}</div>
      <div>Data points: ${data.length}</div>
    `;
  });

  return (
    <Styles
      ref={rootElem}
      height={height}
      width={width}
      headerFontSize="l"
      boldText
    />
  );
}
