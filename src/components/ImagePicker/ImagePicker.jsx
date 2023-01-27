import React, { useState } from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";
import { Image } from "../Image/Image";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ImagePicker = ({
  images,
  multiple,
  onPick,
  maxPicks,
  onMaxPicks,
}) => {
  const [picked, setPicked] = useState(Map());

  const handleImageClick = (image) => {
    const pickedImage = multiple ? picked : Map();
    let newerPickedImage;

    if (pickedImage.has(image.value)) {
      newerPickedImage = pickedImage.delete(image.value);
    } else {
      if (typeof maxPicks === "undefined") {
        newerPickedImage = pickedImage.set(image.value, image.src);
      } else {
        if (pickedImage.size < maxPicks) {
          newerPickedImage = pickedImage.set(image.value, image.src);
        } else {
          onMaxPicks(image);
        }
      }
    }

    if (newerPickedImage) {
      setPicked(newerPickedImage);

      const pickedImageToArray = [];
      newerPickedImage.map((image, i) =>
        pickedImageToArray.push({ src: image, value: i })
      );

      onPick(multiple ? pickedImageToArray : pickedImageToArray[0]);
    }
  };

  const renderImage = (image, i) => {
    return (
      <Image
        src={image.src}
        isSelected={picked.has(image.value)}
        onImageClick={() => handleImageClick(image)}
        key={i}
      />
    );
  };

  return <Container>{images.map(renderImage)}</Container>;
};

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func,
  maxPicks: PropTypes.number,
  onMaxPicks: PropTypes.func,
};
