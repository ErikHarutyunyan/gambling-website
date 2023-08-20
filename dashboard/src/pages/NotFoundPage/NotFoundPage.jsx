import { Link } from "react-router-dom";
import { Wrapper } from "./NotFoundPage.styles";
const NotFoundPage = () => {
   return (
     <Wrapper>
       <p>This page doesn't exist.</p>
       <Link to="/"> Go Home</Link>
     </Wrapper>
   );
};

export default NotFoundPage;
