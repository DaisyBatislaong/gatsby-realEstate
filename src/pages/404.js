import React from "react";
import { Link } from "gatsby";

const error = () => {
   return (
      <div>
         Error
         <Link to="index">Go Back Home</Link>
      </div>
   );
};

export default error;
