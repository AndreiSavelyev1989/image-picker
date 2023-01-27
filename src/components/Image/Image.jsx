import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5px;
  margin: 0 15px;
  opacity: 1;
  border: 4px solid transparent;
  &:hover {
    cursor: pointer;
    border: 4px solid #f3be00;
  }
  border: ${({ isSelected }) =>
    isSelected ? "4px solid #f3be00" : "4px solid transparent"};
  background: ${({ isSelected }) => (isSelected ? "#ffe68b" : "none")};
`;

const Figure = styled.img`
  border-radius: 5px;
`;

const Text = styled.div`
  font-size: 16px;
`;

export const Image = ({ src, isSelected, onImageClick }) => {
  return (
    <Container isSelected={isSelected} onClick={onImageClick}>
      <Figure src={src} alt={"some figure"} />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </Container>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool,
};
