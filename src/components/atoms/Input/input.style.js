import { createGlobalStyle } from "styled-components";

export const InputStyle = createGlobalStyle`
.ant-input,.ant-input-number-affix-wrapper{
   width:${({ width }) => `${width || 100}% !important`}
}
 
`;