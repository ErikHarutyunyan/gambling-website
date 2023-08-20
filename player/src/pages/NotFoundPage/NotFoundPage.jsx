import { Link } from "react-router-dom";
const NotFoundPage = () => {
   return (
     <div>
       This page doesn't exist. Go <Link to="/">home</Link>
     </div>
   );
};

export default NotFoundPage;
