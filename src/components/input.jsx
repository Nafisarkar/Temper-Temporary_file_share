import React from "react";

function Input() {
  return (
    <div>
      <label
        className="
    bg-gray-300/6
    rounded-full
    backdrop-blur-[12.7px]
    border
    border-blue-400/20
    h-12
    flex items-center justify-center
    px-6
    cursor-pointer
    text-center
    text-sm
    shadow-2xl
  "
      >
        Upload Your File
        <input type="file" className="hidden" />
      </label>
    </div>
  );
}

export default Input;
