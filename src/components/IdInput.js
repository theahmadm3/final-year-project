import React, { useState } from 'react';

const IdInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setValue(event.target.value);
    }
    console.log(event.target.value);
  };

  return (
    <input
      name="idNumber"
      type="text"
      className="pa2 shadow-1 tc bn mb2 grow"
      placeholder="Your ID"
      maxLength={12}
      value={value}
      onChange={handleChange}
    />
  );
};




export default IdInput;
