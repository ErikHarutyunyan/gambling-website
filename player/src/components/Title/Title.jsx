import React, { memo } from 'react'
// Styles
import {Wrapper} from "./Title.styles"

function titlePropsAreEqual(prevMovie, nextMovie) {
  return (
    prevMovie.title === nextMovie.title
  );
}
const Title = memo((props) => {
  const { title } = props;
  return <Wrapper {...props}>{title}</Wrapper>;
}, titlePropsAreEqual);

export default Title