import React from "react";
const errorMessage = () => {
  return (
    <div>
      <h2 class="validation--errors--label">Validation errors</h2>
      <div class="validation-errors">
        <ul>
          <li>Please provide a value for "Title"</li>
          <li>Please provide a value for "Description"</li>
        </ul>
      </div>
    </div>
  );
};

export default errorMessage;
