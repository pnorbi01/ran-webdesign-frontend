import React from "react";

function StarLight() {
  return (
    <div className="relative w-full h-full">
      <div
        className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute left-[10%] bottom-0 h-12 w-[1px] bg-white/50"
        style={{
          animationDelay: "3s",
        }}
      ></div>
      <div
        className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute left-[20%] bottom-0 h-12 w-[1px] bg-white/50"
        style={{
          animationDelay: "5s",
        }}
      ></div>
      <div
        className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute left-1/2 bottom-0 h-12 w-[1px] bg-white/50"
        style={{
          animationDelay: "5s",
        }}
      ></div>
      <div
        className="animate-[starlight_7s_ease-in-out_infinite] opacity-0 absolute right-[20%] bottom-0 h-12 w-[1px] bg-white/50"
        style={{
          animationDelay: "6s",
        }}
      ></div>
    </div>
  );
}

export default StarLight;
