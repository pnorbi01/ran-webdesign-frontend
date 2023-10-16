import { Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CheckIcon } from "./CheckIcon";
import HeroTitle from "./HeroTitle";

function Hero() {
  return (
    <section className="hero flex absolute top-0 left-0 h-full w-full flex-col gap-4 justify-center items-center text-slate-100">
      <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="danger"
        >
          Secure
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="warning"
        >
          Modern
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="secondary"
        >
          Precise
        </Chip>
        <Chip
          endContent={<CheckIcon size={18} />}
          variant="flat"
          color="success"
        >
          User-Friendly
        </Chip>
      </div>
      <HeroTitle />
      <p className="text-xl text-gray-500 text-center">Unlock the power of swift and collaborative web development.</p>
      <Button
        className="shadow-xl font-bold text-blue-500 hover:bg-blue-300 rounded-full transition-all"
        size="xl"
        color="primary"
        variant="flat"
      >
        Get started
      </Button>
    </section>
  );
}

export default Hero;
