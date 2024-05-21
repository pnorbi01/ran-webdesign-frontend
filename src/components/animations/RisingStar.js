import React from "react";

function RisingStar({
  animDurationFirst,
  animDurationSecond,
  animDurationThird,
}) {
  return (
    <>
      <div
        className="animate-[rising_100s_ease-in-out_infinite] w-[2px] h-[2px]"
        style={{
          animationDuration: { animDurationFirst },
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="animate-[rising_100s_ease-in-out_infinite] w-[1px] h-[1px]"
        style={{
          animationDuration: { animDurationSecond },
          animationFillMode: "forwards",
        }}
      ></div>
      <div
        className="animate-[rising_100s_ease-in-out_infinite] w-[1px] h-[1px]"
        style={{
          animationDuration: { animDurationThird },
          animationFillMode: "forwards",
        }}
      ></div>
    </>
  );
}

export default RisingStar;
