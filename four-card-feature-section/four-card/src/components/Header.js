import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    padding: 0 1rem;
    max-width: 20em;
  }

  @media (min-width: 36em) {
    p {
      max-width: 35em;
      font-size: 16px;
    }
  }
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <div className="h1">{props.subheading}</div>
      <h1>{props.heading}</h1>
      <p>{props.intro}</p>
    </StyledHeader>
  );
};

export default Header;
