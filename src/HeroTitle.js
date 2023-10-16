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
    <h1 className="text-6xl font-bold text-gray-500 text-center">
      Build{" "}
      <TextTransition
        inline
        springConfig={presets.wobbly}
        className="text-6xl text-blue-500"
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>{" "}
      websites with us.
    </h1>
  );
}

export default HeroTitle;
