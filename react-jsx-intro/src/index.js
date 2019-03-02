// // 1st Example
// import React from "react";
// import ReactDOM from "react-dom";
// const variable = "Zonayed Ahmed";
//
// ReactDOM.render(<h1>My Name is {variable}</h1>,document.getElementById("root"));

// // 2nd Example
// import React from "react";
// import ReactDOM from "react-dom";
//
// const aFunc = () => {
//    return "Zonayed Ahmed";
// };
//
// ReactDOM.render(<h1>My Name is {aFunc()}</h1>, document.getElementById("root"));

// 3rd Example
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>My Name is {true ? 'Zonayed Ahmed' : 'Ahmed Zonayed'}</h1>, document.getElementById("root"));
