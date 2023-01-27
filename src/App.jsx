import React, { useState } from "react";
import { ImagePicker } from "./components/ImagePicker/ImagePicker";
import "./index.css";

const img1 =
  "https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg";

const imageList = [
  { id: 1, src: img1 },
  { id: 2, src: img1 },
  { id: 3, src: img1 },
  { id: 4, src: img1 },
];

export const App = () => {
  const [selectedImages, setSelectedImages] = useState(null);

  const onPick = (images) => {
    setSelectedImages(images);
  };

  return (
    <div>
      <ImagePicker
        images={imageList.map((image, i) => ({ ...image, value: i }))}
        onPick={onPick}
        multiple
      />
      <button type="button" onClick={() => console.log(selectedImages)}>
        OK
      </button>
    </div>
  );
};
