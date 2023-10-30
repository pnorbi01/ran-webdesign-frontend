import { Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

function Hero() {

  const [t, i18n] = useTranslation('global');

  const scrollToContent = (div) => {
    const section = document.querySelector(`${div}`);
    if(section) {
      const yOffset = section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  const handleClickOnWeb = (scrollTo, event) => {
    scrollToContent(scrollTo);
    event.preventDefault();
  };

  return (
    <section className="hero flex absolute top-0 left-0 h-full w-full flex-col gap-4 justify-center items-center text-slate-100 relative">
      <div className="hero-bg-blur absolute w-full"></div>
      <div className="hero-text flex flex-row justify-center items-center gap-1 flex-wrap">
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          {t('chip.1')}
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          {t('chip.2')}
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          {t('chip.3')}
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          {t('chip.4')}
        </Chip>
      </div>
      <HeroTitle />
      <p className="hero-description text-xl text-gray-500 text-center">{t('hero.description')}</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          className="shadow-xl font-bold bg-blue-500 text-blue-500 text-white rounded-full transition-all px-20"
          size="lg"
          variant="flat"
          onClick={(e) => handleClickOnWeb('.contact', e)}
        >
          {t('hero.button')}
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
