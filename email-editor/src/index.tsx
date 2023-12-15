import React, { useRef } from "react";
import styled from "styled-components";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import sample from "./sample.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #60BDBE;
  color: #000;
  padding: 10px;
  font-family: inter
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: transparent;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = () => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design) => {
      console.log("saveDesign", design);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { html } = data;
      const blob = new Blob([html], { type: "text/html" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "download.html";
      link.click();
    });
  };

  const onDesignLoad = (data) => {
    // console.log("onDesignLoad", data);
  };

  const onLoad: EmailEditorProps["onLoad"] = (unlayer) => {
    // console.log("onLoad", unlayer);
    unlayer.addEventListener("design:loaded", onDesignLoad);
    unlayer.loadDesign(sample);
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    // console.log("onReady", unlayer);
  };

  const editorOptions = {
    features: {
      stockImages: { enabled: false },
      colorPicker: {
        presets: [
          "#3D2873",
          "#60489B",
          "#886FC7",
          "#B19DE4",
          "#DCCFFD",
          "#BF5840",
          "#FA7354",
          "#FB957E",
          "#FCB8A8",
          "#FDDBD2",
          "#F5C8BF",
          "#FDE2DC",
          "#FDF0ED",
          "#E8E8E8",
          "#F4F4F4",
          "#3B8C8D",
          "#60BDBE",
          "#86CDCD",
          "#ADDDDE",
          "#D5EDEE",
          "#141020",
          "#2F2A43",
          "#635E71",
          "#9693A0",
          "#9693A0",
        ],
      },
    },
    customCSS: [
      "::-webkit-scrollbar-track {background: #293039;border-radius: 10px;}",
      "::-webkit-scrollbar-thumb {background: #808080;border-radius: 10px;}",
      "::-webkit-scrollbar-thumb:hover {background: #ffffff;}",
      "::-webkit-scrollbar {width: 5px;height: 5px;}",
      ".ljQvKj { overflow-x: hidden }",
      ".nav-tabs  { background: #60BDBE !important}",
      ".tab-content, .bAOYJq, .bGUBB .nav-tabs, .pt-2 { background: #FDE2DC !important  }",
      ".nav-tabs .nav-item .nav-link.active { background: #FDE2DC !important }",
    ],
    customJS: [
      "https://cdn.jsdelivr.net/gh/maxt41/unlayer-tools@d874675d04fcf4942f7eef264119af8afc362f1d/LinkCaptureTool.js",
      "https://cdn.jsdelivr.net/gh/maxt41/unlayer-tools@d874675d04fcf4942f7eef264119af8afc362f1d/UnsubscribeTool.js",
    ],
    appearance: {
      theme: "dark",
      panels: {
        tools: {
          dock: "left",
        },
        design: {
          dock: "right",
        },
      },
    },
  };

  return (
    <Container>
      <Bar>
        <button onClick={saveDesign}>Save</button>
        <button onClick={exportHtml}>Export</button>
      </Bar>
      <React.StrictMode>
        <EmailEditor
          editorId="email-editor"
          projectId={1}
          ref={emailEditorRef}
          onLoad={onLoad}
          options={editorOptions}
          onReady={onReady}
        />
      </React.StrictMode>
    </Container>
  );
};

export default Example;
