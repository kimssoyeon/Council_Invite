import GreyL from "../assets/images/Arrow_Grey_L.png";
import GreyR from "../assets/images/Arrow_Grey.png";
import blackL from "../assets/images/Arrow_black_L.png";
import blackR from "../assets/images/Arrow_black.png";
import styled from "styled-components";
import { ImageDummy } from "../assets/ImageDummy";
import { useState } from "react";

const Whole = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClickArrow = () => {
    if (currentImage == 0) return;
    setCurrentImage(currentImage - 1);
  };

  const handleNextClickArrow = () => {
    if (currentImage == ImageDummy.length - 1) return;
    setCurrentImage(currentImage + 1);
  };

  return (
    <>
      <WholeDiv>
        <Arrow
          src={currentImage == 0 ? GreyL : blackL}
          style={{
            cursor: currentImage == 0 ? "default" : "pointer",
            left: "50px",
          }}
          onClick={handlePrevClickArrow}
        />
        <EachImage src={ImageDummy[currentImage].imageSrc} />
        <Arrow
          src={currentImage == ImageDummy.length - 1 ? GreyR : blackR}
          style={{
            cursor:
              currentImage == ImageDummy.length - 1 ? "default" : "pointer",
            right: "50px",
          }}
          onClick={handleNextClickArrow}
        />
      </WholeDiv>
    </>
  );
};

export default Whole;

const WholeDiv = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  height: 100vh;
  background-color: black;
`;

const EachImage = styled.img`
  display: flex;
  margin: 0 auto;
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  width: 50px;
  height: 50px;
`;
