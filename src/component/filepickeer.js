import React, { useRef } from "react";

export default function InputRef() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <button onClick={handleClick}>Pick the File</button>
     
      <input type="file" ref={fileInputRef} />
    </div> 
  );
}