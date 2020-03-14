import React from "react";

const ArticleContext = React.createContext({
  picture: "",
  firstname: "",
  lastname: "",
  username: "",
  city: ""
});

export default ArticleContext;
