import  styled  from "styled-components";

export const ColoredDiv = styled.div`
  height: ${({ height }) => `${height}vh`};
  width: ${({ width }) => `${width}%`};
  background-color: ${({ color }) => `${color}`};
`;
