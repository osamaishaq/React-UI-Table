import React from "react";
import Aux from "../../../../hoc/Aux";

const tableHeader = (props) => {
  //console.log(props.tblData);
  let header = Object.keys(props.tblData[0]);
  let headers = header.map((key, index) => {
    //console.log(key);
    return <th key={index}>{key.toUpperCase()}</th>;
  });
  return (
    <Aux>
      <thead>
        <tr>{headers}</tr>
      </thead>
    </Aux>
  );
};

export default tableHeader;
