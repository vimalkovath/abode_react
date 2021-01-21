import styled from "styled-components";
import { Col, Row, Modal } from "react-bootstrap";
import { Link } from "@reach/router";
export const Header = styled.h3`
  margin-left: 30px;
  margin-bottom: 4%;
`;


export const Column = styled(Col)`
  ${({ padding, width, justifyContent, flex }) => `
 
  width:${width};
  padding: ${padding};
  justify-content:${justifyContent || "unset"}

`}
`;
export const LoaderCol = styled(Col)`
  display: flex;

  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const Roww = styled(Row)`
  ${({ padding, justify, width }) => `

justify-content: ${justify || "space-between"}
  padding: ${padding};
  width: ${width || "unset"}
`}
`;

export const Linkage = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const RotatingGif = styled.div`
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const LinkP = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`;
