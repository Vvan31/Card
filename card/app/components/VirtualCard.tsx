"use client";
import React from 'react';
import { useRef } from "react";

import TextReveal from "@/components/magicui/text-reveal";

import styles from './VirtualCard.module.css';
import Image from 'next/image';
import carro from '../../public/carro.jpeg';
import cumple from '../../public/cumple.jpeg';
import navidad from '../../public/navidad.jpeg';
import small from '../../public/small.jpeg';
import tec from '../../public/tec.jpeg';
import snow from '../../public/snow.jpeg';
import parrot from '../../public/parrot.jpeg';
import bici from '../../public/bici.jpeg';
import hug from '../../public/hug.jpeg';

import { ConfettiDemo } from './ConfettiDemo';

const textContent = [
  "Siempre voy a apreciar la invaluable experiencia de tenerte a mi lado mientras crecía y descubría el mundo por primera vez, solo para descubrir, en cada nueva experiencia, lo asombroso que eres y lo afortunadas que somos de tenerte.",
  "Mi parte favorita de mi trabajo es poder estar contigo.",
  "Puedo ver cómo eres un asombroso líder que ha cambiado la vida de mucha gente. Inspiras a todos los que están a tu alrededor y contagias tu determinación y pasión.",
  "Me enorgullece mucho ser tu hija y no hay mejor cumplido que pueda recibir que “Te pareces a tu papá”.",
  "Esto todavía no se acaba. La vida es difícil, pero sé que siempre puedo contar contigo y quiero que sepas que tú puedes contar conmigo.",
  "Hoy no pudimos ir a abrazarte, pero te mandamos mucho, mucho... mucho amor.",
  "Mientras, hay que contar nuestras bendiciones pero, sobre todo, disfrutarlas. Así que disfruta mucho tu día, tus regalos y tu familia. Te amo.",
  "Feliz cumpleaños, papá."
];

const imageUrls = [
  small,
  carro,
  bici,
  tec,
  snow,
  navidad,
  hug,
  cumple
];


const VirtualCard = () => {
  return (
    <div className={styles.cardContainer}>
      {textContent.map((text, index) => (
        <div key={index} className={styles.cardSection}>
          <Image src={imageUrls[index]} alt="Imagen relacionada" className={styles.cardImage} width={400} height={200} />
          <div className={styles.textContainer}>
            <TextReveal text={text} />
          </div>
        </div>
      ))}
      <ConfettiDemo />
    </div>
  );
};
VirtualCard.displayName = 'VirtualCard';
export default VirtualCard;
