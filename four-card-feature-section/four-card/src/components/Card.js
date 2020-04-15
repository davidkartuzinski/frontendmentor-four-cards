import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  border-top: solid 4px;
  border-radius: 6px;
  line-height: 1.8;
  padding: 1.4rem 1.6rem;
  /* 	h sl(0, 0%, 100%) */
  background-color: hsl(0, 0%, 100%);
  -webkit-box-shadow: 0px 15px 24px 1px rgba(217,225,235,1);
  -moz-box-shadow: 0px 15px 24px 1px rgba(217,225,235,1);
  box-shadow: 0px 15px 24px 1px rgba(217,225,235,1);
  position: relative;
  
  p {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    width: 90%;
    max-width: 280px;
  }

  img {
    position: absolute;
    bottom: 1.4rem;
    right: 1.6rem;
    width: 3.5rem;
  }
  @media (min-width: 36em) {
    padding: 1.4rem 1.8rem;

    img {
      @media (min-width: 36em) { 
        bottom: 1.8rem;
        right: 1.8rem;
        width: 4rem;
    }
  }
`;

const Card = (props) => {
  const topBorderColor = (color) => {
    if (color === "red") {
      return `hsl(0, 78%, 62%)`;
    } else if (color === "green") {
      return `hsl(180, 62%, 55%)`;
    } else if (color === "yellow") {
      return `hsl(34, 97%, 64%)`;
    } else if (color === "blue") {
      return `hsl(212, 86%, 64%)`;
    } else {
      return `black`;
    }
  };

  return (
    <StyledCard
      style={{ borderTopColor: `${topBorderColor(props.borderColor)}` }}
    >
      <h2>{props.header}</h2>
      <p>{props.paragraph}</p>
      <img src={props.icon} alt={props.altText} />
    </StyledCard>
  );
};

export default Card;
