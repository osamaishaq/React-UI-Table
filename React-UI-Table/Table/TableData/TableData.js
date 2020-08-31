import React from "react";
import Aux from "../../../../hoc/Aux";

const tableData = (props) => {
  let tableData = props.tblData.map((student, index) => {
    const { firstName, lastName, phoneNumber, email, id } = student; //destructuring
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
      </tr>
    );
  });
  return <tbody className="text-left">{tableData}</tbody>;
};

export default tableData;
