import { MainContainer } from "./SecundStyle";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Emoji = React.memo(({ className, label, symbol }) =>
    <span className={className} role="img" aria-label={label}>
        {String.fromCodePoint(symbol)}
    </span>)

export default function Second() {
  const [color, setColor] = useState("#1b1919");
  const { name } = useParams();
  return (
    <MainContainer style={{ backgroundColor: `${color}` }}>
      <h3
        style={{
          color: "#fe692a",
          border: "1px solid #fe692a",
          padding: "10px"
        }}
      >
        Brinque com os códigos
      </h3>
      <div className="subContainer">
        <LiveProvider
          code={`<div className="preview">${name} became a fullturist</div>`}
        >
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            color: "#fe692a",
            border: "1px solid #fe692a",
            padding: "10px",
          }}
        >
          Mude a cor do background
        </h3>
        <div className="container" id="containerColor">
          <p>
            <span style={{ color: "#d0949e" }}>{`<div`}</span>{" "}
            <span style={{ color: "#bde052" }}>style</span>
            <span style={{ color: "#d0949e" }}>
              ={`{{`}backgroundColor:{" "}
              <input
                style={{
                  border: 0,
                  width: "55px",
                  color: "#fe692a",
                  fontWeight: "bold",
                  justifySelf: "center",
                }}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              {`}}`} {`>`}
            </span>
            <span style={{ color: "#d0949e" }}>{`</div>`}</span>
          </p>
        </div>
      </div>
      <div className="container" id="containerColor">
        <p>
          <span style={{ color: "#d0949e" }}>
            {`<div>`}
            <br />
          </span>
          <span style={{ color: "#c5c8c6" }}>
            <strong> {name}</strong> <br />
            isso é só o início, venha viver o mundo fullture{" "}
            <Emoji symbol={"0x1F47E"} />
            <Emoji symbol={"0x1F389"} />
            <br />
          </span>
          <span style={{ color: "#d0949e" }}>{` </div>`}</span>
        </p>
      </div>
      <img
        src="https://www.fullture.com/wp-content/uploads/2020/11/LogoFullture-White.svg"
        style={{ border: "1px solid #fff", width: "25vw", padding: 20 }}
      />
    </MainContainer>
  );
}
