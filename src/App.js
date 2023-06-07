import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import VConSquare from "./pages/VConSquare";

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: grey;
`;

const App = () => {
  const [cheerMode, setCheerMode] = useState(true);
  return (
    <BackGround>
      <h2>asdf</h2>
      <VConSquare cheermode={true}></VConSquare>;
    </BackGround>
  );
};
export default App;
