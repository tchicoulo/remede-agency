import React from "react";

const EditButton = (props) => {
  return (
    <div className="edit-input">
      <input type="text" placeholder={props.placeholder} ref={props.ref} />
    </div>
  );
};

export default EditButton;
