import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["faster", "smarter", "better"];

function HeroTitle() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="hero-title text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[rgba(0,0,0,.8)] to-black text-center">
      Build{" "}
      <TextTransition
        inline
        springConfig={presets.wobbly}
        className="animation-element text-7xl font-extrabold text-blue-500"
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>{" "}
      websites with us.
    </h1>
  );
}

export default HeroTitle;
