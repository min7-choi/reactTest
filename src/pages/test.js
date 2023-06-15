import styled, { keyframes, css } from "styled-components";
import BgImg from "../assets/vcon_square_bg.png";
import gifImg_ from "../assets/emotion1.png";
import gifImg from "../assets/1.gif";
import React, { useState, useEffect } from "react";

const cheerModeOn = keyframes`
  from {
    height : 0%;
    margin-top : 0px;
  }
  to {
    height: 20%;
    margin-top: 0px;
  }
`;

const cheerModeOff = keyframes`
  from {
    height : 15%;
    margin-top : 15px;
  }
  to {
    height: 0%;
    margin-top: 0px;
  }
`;

const VConSquareArea = styled.div`
  width: 100%;
  height: 20%;
  margin-top: 0px;
  margin-left: 30px;
  ${(props) =>
    props.cheermode ||
    css`
      animation: ${cheerModeOn} 0.5s ease forwards;
    `};
  ${(props) =>
    props.cheermode ||
    css`
      animation: ${cheerModeOff} 0.5s ease forwards;
    `};
`;

const VConSquareContainer = styled.div`
  width: calc(100% - 472px);
  height: 100%;
  background-image: url(${BgImg});
  background-size: contain;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
`;

const VConSquareUpRow = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  flex: 1;
`;

const VConSquareDownRow = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;

const boxFade = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const boxFade2 = keyframes`
0% {
  opacity: 1;
}
40% {
  opacity: 0;
  transform: rotateY(180deg);
}
80% {
  opacity: 1;
}
100% {
  opacity: 1;
  transform: rotate(180deg);
}
`;

const VConSquareItem = styled.div`
  width: calc(
    10% - 10px
  ); /* 가로로 10개로 균등 분할하되 양 옆에 10px 여백을 주기 위한 계산 */
  height: 100%; /* 상하로 나눈 영역의 높이 조정 */
  //background-color: white; /* 각 아이템의 배경색 지정 (테스트용) */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${({ animate }) =>
    animate &&
    css`
      animation: ${boxFade} ${({ delay }) => delay}s 2s linear infinite;
    `}
`;

const VConSquare = ({ cheermode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "1") {
      console.log("=====");
      setIsAnimating((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const numItems = 10;

  const getRandomDelay = () => {
    return Math.random() * 2.5 + 0.5; // 0.5부터 3까지의 랜덤한 숫자 반환
  };

  const renderItems = (num) => {
    const items = [];
    for (let i = 0; i < num; i++) {
      items.push(
        <VConSquareItem key={i}>
          <Image
            src={gifImg}
            animate={isAnimating}
            delay={getRandomDelay()}
            alt="GIF"
          />
        </VConSquareItem>
      );
    }
    return items;
  };

  return (
    <VConSquareArea cheermode={cheermode}>
      <VConSquareContainer>
        <VConSquareUpRow>{renderItems(numItems)}</VConSquareUpRow>
        <VConSquareDownRow>{renderItems(numItems - 1)}</VConSquareDownRow>
      </VConSquareContainer>
    </VConSquareArea>
  );
};

export default VConSquare;
