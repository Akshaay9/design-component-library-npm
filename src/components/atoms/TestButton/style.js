import { createGlobalStyle } from "styled-components";

const btnSize = (size) => {
  switch (size) {
    case "small":
      return { padding: "0px 8px", fontSize: "14px", lineHeight: "22px" };
    case "medium":
      return { padding: "4px 12px", fontSize: "14px", lineHeight: "22px" };
    case "large":
      return { padding: "7px 16px", fontSize: "16px", lineHeight: "24px" };
    default:
      return { padding: "4px 12px", fontSize: "14px", lineHeight: "" };
  }
};

export const ClearDefaultStyle = createGlobalStyle`
    *{
        padding: 0%;
        margin: 0%;
        box-sizing: border-box;
        font-weight: 500;
    }
    .ant-btn{
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    border-radius: 2px;
      ${({ size }) => {
        const { padding, fontSize, lineHeight } = btnSize(size);
        return `
    padding:${padding} !important;
    font-size:${fontSize};
    line-height:${lineHeight};
    `;
      }}
    }
    /* primary */
    .ant-btn-primary{
      background:#0062ff ;
    }
    .ant-btn-primary:hover{
      background:#1A72FF ;
    }
    
    /* Danger */
    .ant-btn-dangerous{
      ${({ type, danger }) => {
        if (type === "primary" && danger) {
          return `
          background:#E50707 !important;
          `;
        }
        if (type === "secondary") {
          return `
          border:1px solid #E50707"  

          `;
        }
        return "";
      }}
  
    }
    .ant-btn-dangerous:hover{
      ${({ danger, type }) =>
        type === "primary" && danger && `background:#ED5151 !important`}
  
    }

    //Secondary 
    .ant-btn-secondary:hover{
      ${({ danger }) =>
        !danger &&
        `color :  #1A72FF;
      border:1px solid #1A72FF`}
    }

    //Dashed
    .ant-btn-dashed:hover{
      ${({ danger }) =>
        !danger &&
        `color :  #1A72FF;
      border:1px dashed #1A72FF`}
    }
    /* Link */
    .ant-btn-link, .ant-btn-link:hover {
      ${({ danger }) => !danger && ` color : #1A72FF;`}
    }
    .ant-btn.ant-btn-loading::before{
      pointer-events:none;
      cursor:not-allowed;
      display:contents
    }
    .ant-btn-loading{
      cursor:not-allowed
    }
  
`;

// export const StyledButton = styled.button`
//   border: none;
//   cursor: pointer;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 500;
//   border-radius: 2px;
//   background: ${({ danger }) => (danger ? "#E50707" : "#0062ff")};
//   border: 1px dotted ${({ danger }) => (danger ? "#E50707" : "#1a72ff")};
//   color: white;
//   &:hover {
//     ${({ type, danger, disabled }) => {
//       if (disabled) return "";
//       if (type === "primary") {
//         return `
//         background: ${danger ? "#ED5151" : "#1A72FF"}
//         `;
//       }
//       if (type === "secondary" || type === "dashed") {
//         return `
//           border : 1px ${type === "dashed" ? "dashed" : "solid"} ${
//           danger ? "#ED5151" : "#1A72FF"
//         };
//           color : ${danger ? "#ED5151" : "#1A72FF"}
//         `;
//       }
//       return "";
//     }}
//   }
//   &:active {
//     ${({ type, danger, disabled }) => {
//       if (disabled) return "";
//       if (type === "primary") {
//         return `
//         background: ${danger ? "#ED5151" : "#0058E6"}
//         `;
//       }
//       if (type === "secondary" || type === "dashed") {
//         return `
//           border : 1px ${type === "dashed" ? "dashed" : "solid"} ${
//           danger ? "#ED5151" : "#0058E6"
//         };
//           color : ${danger ? "#ED5151" : "#0058E6"}
//         `;
//       }
//       if (type === "text") {
//         return "background:#FAFAFA";
//       }

//       return "";
//     }}
//   }

//   ${({ type, danger }) => {
//     if (type === "secondary" || type === "dashed") {
//       return `
//       background: white;
//       color:${danger ? "#E50707" : "black"}}
//       border: 1px ${type === "dashed" ? "dashed" : "solid"} ${
//         danger ? "#E50707" : "#D9D9D9"
//       };
//       &:hover {
//     background: white;
//   }
//   `;
//     }
//     if (type === "link") {
//       return `
//         border:none;
//         background:none;
//         color:${danger ? "#E50707" : "#0062FF"}}
//       `;
//     }
//     if (type === "text") {
//       return `
//         border:none;
//         background:none;
//         color:${danger ? "#E50707" : "black"}}
//       `;
//     }
//     return "";
//   }}

//   ${({ size }) => {
//     const { padding, fontSize, lineHeight } = btnSize(size);
//     return `
//     padding:${padding};
//     font-size:${fontSize};
//     line-height:${lineHeight}
//     `;
//   }}

//   ${({ disabled, type }) => {
//     const typeLinkText = type === "link" || type === "text";
//     return (
//       disabled &&
//       `
//     pointer-events: none;
//     cursor: not-allowed;
//     background: ${typeLinkText ? "none" : "#F5F5F5"};
//     border: ${typeLinkText ? "none" : "1px solid #D9D9D9"} ;
//     color: #D9D9D9;
//       `
//     );
//   }}
// `;