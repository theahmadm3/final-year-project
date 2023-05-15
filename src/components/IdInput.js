import React, { useState } from 'react';

const IdInput = ({ handleChange }) => {

  return (
    <input
      name="idNumber"
      type="text"
      className="pa2 shadow-1 tc bn mb2 grow"
      placeholder="Your ID Number"
      maxLength={12}
      onChange={handleChange}
    />
  );
};




export default IdInput;
