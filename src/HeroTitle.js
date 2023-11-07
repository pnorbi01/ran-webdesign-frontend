import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { useTranslation } from 'react-i18next';

const TEXTS = ["faster", "smarter", "better"];

function HeroTitle() {
  const [index, setIndex] = React.useState(0);
  const [t, i18n] = useTranslation('global');

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="hero-title text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[rgba(0,0,0,.7)] to-black text-center p-1">
      {t('hero.first-part-title')}{" "}
      <TextTransition
        inline
        springConfig={presets.wobbly}
        className="animation-element text-6xl font-extrabold text-blue-500"
      >
        {t(`hero.${TEXTS[index % TEXTS.length]}`)}
      </TextTransition>{" "}
      {t('hero.last-part-title')}
    </h1>
  );
}

export default HeroTitle;
