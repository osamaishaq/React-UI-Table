import React from "react";

import Aux from "../../../hoc/Aux";
import TableHeader from "./TableHeader/TableHeader";
import TableData from "./TableData/TableData";

const table = (props) => {
  return (
    <Aux>
      <table className="table table-striped">
        <TableHeader tblData={props.data} />
        <TableData tblData={props.data} />
      </table>
    </Aux>
  );
};

export default table;
