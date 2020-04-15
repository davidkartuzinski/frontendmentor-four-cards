import React from "react";
import styled from "styled-components";

const StyledLayout = styled.main`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  row-gap: 1.5rem;
  justify-items: center;

  section {
    min-height: 175px;
    max-width: 300px;
  }
  @media (min-width: 90em) {
    section {
      min-height: 200px;
      width: 290px;
      max-width: 300px;
    }
    section:first-child {
      grid-column: 2;
      grid-row: 2 / 3;
    }
    section:nth-child(2) {
      grid-column: 3;
      grid-row: 1 / 2;
    }

    section:nth-child(3) {
      grid-column: 3;
      grid-row: 3 / 4;
    }

    section:nth-child(4) {
      grid-column: 4;
      grid-row: 2 / 3;
    }

    grid-gap: 40px;
    grid-template-columns: auto 350px 350px 350px auto;
    grid-template-rows: 110px 110px 110px 110px;
  }
`;

const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
