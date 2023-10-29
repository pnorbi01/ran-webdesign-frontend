import React from "react";
import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";
import cardImg from "./images/card-img.jpg";
import casarLogo from "./images/projects/casar-logo.png";
import react from "./images/react.png";
import java from "./images/java.png";
import { useTranslation } from 'react-i18next';

function Project() {

    const [t, i18n] = useTranslation('global');

    return (
    <section className="project flex w-full flex-row justify-center items-center mt-20 text-slate-100 flex-wrap">
        <div className="flex flex-col justify-center items-center gap-2 w-full p-3">
            <div className="content flex flex-col justify-center items-center gap-2 w-1/2 p-5 relative">
                <div className="pseudo-element-project before:content-['3'] absolute py-2 px-3.5 -top-8 text-white rounded-full font-bold"></div>
                <div className="project-pseudo-line before:content-[''] rounded-lg absolute -top-32 h-24 w-px bg-secondary-500"></div>
                <h3 className="project-section-title font-extrabold text-xl text-center">{t('project.section-title')}</h3>
                <h1 className="description-title text-gray-800 font-extrabold text-3xl text-center">{t('project.description-title')}</h1>
                <span className="description text-gray-400 font-normal text-base text-center">{t('project.description')}</span>
            </div>
            <div className="flex flex-row justify-center items-center flex-wrap gap-3">
                <Card isFooterBlurred className="w-[270] h-[300px] col-span-12 sm:col-span-7 shadow-2xl">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">{t('project.used-technologies')}</p>
                        <div className="flex flex-row">
                            <img src={react} alt="React logo" width={30} height={30} />
                            <img src={java} alt="Java logo" width={30} height={30} />
                        </div>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Casar landing page"
                        className="z-0 w-full h-full object-cover"
                        src={cardImg}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Casar logo"
                            className="rounded-full w-10 h-11"
                            src={casarLogo}
                        />
                        <div className="flex flex-col">
                            <p className="text-tiny text-white/60">Casar App</p>
                        </div>
                        </div>
                        <a href="https://casar.rs"><Button radius="full" size="sm" className="button">{t('project.button-title')}</Button></a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </section>
  );
}

export default Project;
