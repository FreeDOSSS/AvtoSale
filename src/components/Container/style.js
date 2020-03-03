import styled, { createGlobalStyle } from "styled-components";

export const GlobalContainer = createGlobalStyle`
    .container {
        margin: auto;
        padding-left: 10px;
        padding-right: 10px;
        width: 300px;
    }

    @media (min-width: 748px) {
     .container {
         width: 728px;
        }   
    }

    @media (min-width: 1200px) {
    .container {
        min-width: 1180px;
        width: 65%;
        }
    }
`;

export const Section = styled.section`
  width: 100%;
`;

export const Wrp = styled.div`
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 300px;

  @media (min-width: 748px) {
    width: 728px;
  }

  @media (min-width: 1200px) {
    min-width: 1180px;
    width: 65%;
  }
`;
