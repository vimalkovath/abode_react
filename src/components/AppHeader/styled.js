import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  width: auto;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 8vh;
  background: #0095da;
  padding: 0 10px 0;
  align-items: center;
  color: #ffffff;
`;

export const IconContainer = styled.div`
  height: 8vh;
  margin-top: 8px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-width: 30px;
  cursor: pointer;
  padding: 0 0.15vw 0;

  :hover {
    position: relative;
    transform: translateY(-2px);
    transition: all 0.5s;
    opacity: 1;
  }
`;
