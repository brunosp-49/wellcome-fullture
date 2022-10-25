import { MainContainer, Modal } from "./SecundStyle";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Emoji = React.memo(({ className, label, symbol }) => (
  <span className={className} role="img" aria-label={label}>
    {String.fromCodePoint(symbol)}
  </span>
));

export default function Second() {
  const [color, setColor] = useState("#1b1919");
  const { name } = useParams();
  const [isTheModalOpen, setIsTheModalOpen] = useState(false);

  return (
    <MainContainer style={{ backgroundColor: `${color}` }}>
      <h3
        style={{
          color: "#fe692a",
          border: "1px solid #fe692a",
          padding: "10px",
          marginBottom: "10%",
        }}
      >
        Brinque com os códigos
      </h3>
      <div className="subContainer">
        <LiveProvider
          code={`<div className="preview">${name} become a fullturist</div>`}
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
          marginBottom: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "80vw",
            height: "20vw",
            marginBottom: "5%",
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
          <AiOutlineInfoCircle
            className="icon"
            color="#fe692a"
            fontSize={25}
            onClick={() => setIsTheModalOpen(true)}
          />
        </div>
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
      <div
        className="container"
        style={{ marginBottom: "10%" }}
        id="containerColor"
      >
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
        style={{
          width: "20vw",
          marginBottom: "5%",
        }}
      />
      <div
        style={{
          height: "10vw",
          width: "60vw",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <a href="https://www.facebook.com/fulltureschool" target="_blank">
        <FaFacebookF fontSize={30} color="#fff"/>
        </a>
        <a href="https://www.instagram.com/fulltureschool/" target="_blank">
        <FaInstagram fontSize={30} color="#fff"/>
        </a>
        <a href="https://www.youtube.com/channel/UCKKcnkhZv50ESUjRI0LuCug" target="_blank">
        <FaYoutube fontSize={30} color="#fff"/>
        </a>
        <a href="https://www.linkedin.com/company/fulltureschool/" target="_blank">
        <IoLogoLinkedin fontSize={30} color="#fff"/>
        </a>
      </div>
      {!isTheModalOpen ? null : (
        <Modal>
          <div
            style={{
              alignItems: "center",
              justifyContent: "end",
              display: "flex",
              width: "100%",
            }}
          >
            <RiCloseFill
              color="#fe692a"
              fontSize={30}
              className="icon"
              onClick={() => setIsTheModalOpen(false)}
            />
          </div>
          <div
            style={{
              height: "34vw",
              width: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingTop: "5px"
            }}
          >
            <p>
              As cores podem ser escritas de duas formas, em inglês, por
              exemplo:{" "}
              <span style={{ color: "#2c87c9" }}>
                <strong>"blue"</strong>
              </span>
              ,{" "}
              <span style={{ color: "#d2464d" }}>
                <strong>"red"</strong>
              </span>
              ,{" "}
              <span style={{ color: "#56a643" }}>
                <strong>"green"</strong>
              </span>
              , e também em hexadecimal, por exemplo: <strong>#fff</strong>,{" "}
              <span style={{ color: "#d2464d" }}>
                <strong>#d2464d</strong>
              </span>
              ,{" "}
              <span style={{ color: "#d5ab32" }}>
                <strong>#d5ab32</strong>
              </span>
              , para mais cores clique{" "}
              <a
                href="https://celke.com.br/artigo/tabela-de-cores-html-nome-hexadecimal-rgb"
                target="_blank"
              >
                <strong>aqui.</strong>
              </a>
            </p>
          </div>
        </Modal>
      )}
    </MainContainer>
  );
}
