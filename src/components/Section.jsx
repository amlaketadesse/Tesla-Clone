import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import down from "../down-arrow.svg"


function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  console.log();
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src={down}></DownArrow>
      </Buttons>
    </Wrap>
  );
}
// background-image: url({"/images/${backgroundImg}"});
export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
  color: black;
  margin-bottom: 8px;
  }

  p {
  color: black;
  font-weight: 500;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: #393c41;
  height: 40px;
  width: 256px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  margin: 8px;

`;

const RightButton = styled(LeftButton)`
  background: #e3e3e2;
  color: #393c41;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  margin-bottom: 16px;
  @media (max-width: )
`;

const Buttons = styled.div``;
