import { Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero flex absolute top-0 left-0 h-full w-full flex-col gap-4 justify-center items-center text-slate-100">
      <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          Secure
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          Modern
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          Precise
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="primary"
        >
          User-Friendly
        </Chip>
      </div>
      <HeroTitle />
      <p className="text-xl text-gray-500 text-center">Unlock the power of swift and collaborative web development.</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          className="shadow-xl font-bold bg-blue-500 text-blue-500 text-white rounded-full transition-all px-20"
          size="lg"
          variant="flat"
        >
          Get started
        </Button>
      </motion.div>
    </section>
  );
}

export default Hero;
