import Image from "next/image";
import React from "react";

const ImageComponent = () => {
  return (
    <div>
      <Image src="/Image.png" alt="/Image.png" width={300} height={300} />
    </div>
  );
};

export default ImageComponent;
