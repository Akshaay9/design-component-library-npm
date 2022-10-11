import React, { useEffect, useState } from "react";
import { ColoredDiv } from "./style";
import * as styled from "styled-components";

export const Card = ({ color, height, width, content }) => {
  const [divHeight, setDivHeight] = useState(height);

  console.log(styled);

  useEffect(() => {
    setDivHeight(() => Number(height));
  }, [height]);

  return (
    <>
      <ColoredDiv width={width} height={divHeight} color={color}>
        lorem200
      </ColoredDiv>
    </>
  );
};
