import React from 'react'
// Styles
import casinoBanner from "../../assets/images/casinoBanner.webp";
import { useState } from 'react'
import { useEffect } from 'react'
import { Blurhash } from 'react-blurhash'
import { BlurWrap } from './ImageBlur.styles';
const ImageBlur = ({src,alt, loading}) => {
  const [imgLoaded,setImgLoaded] = useState(false)
  const [imgError,setImgError] = useState(false)
  useEffect(()=> {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true)
    }
    img.onerror = (e) => {
      e.target.src = casinoBanner;
      setImgError(true);
    }
    img.src=src
  },[src])
  return (
    <>
      <BlurWrap style={{ display: imgLoaded ? "none" : "inline" }}>
        {true && (
          <Blurhash
            hash="L9Evvt[t0NF[}A$6EhJR9]SgOUr@"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </BlurWrap>
      {imgLoaded &&
        !imgError &&(
          <img
            src={src}
            alt={alt}
            onLoad={() => setImgLoaded(true)}
            style={{ display: !imgLoaded ? "none" : "inline" }}
          />
        )}
      {imgError && (
        <img src={casinoBanner} alt={alt}  />
      )}
    </>
  );
}

export default ImageBlur