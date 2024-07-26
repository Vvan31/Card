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
  "Hi appa :)",
  "You are the shining star of our lives. We are so thankful to have you as our father.",
  "I miss you every day. You taught me to be strong and brave enough to reach for success and to keep working hard.",
  "Amma, Chechi, vakkunni and I love you very much. And we hope you find all the happiness in the world because you deserve it and more.",
  "You’re a great leader and a great dad. You’re a ubc dad, a Berkeley dad, and a Nagoya dad. We are so proud of you.",
  "May god bless you with a long healthy life with many more successes. Love, Achu.",

  "Happy Birthday to my dearest, who I met 30 years ago. My caring and understanding life partner. Words are not enough to express my love and appreciation for you. I love you to the moon and back. With endless love, Joice.",
  "Happy Birthday Appa. I love you so much. Thank you for being there for me in every step of my life. Thank you for being an incredible father and role model. Love Ellu.",
  "Happy Birthday Appa. I love you. You’ve always been so cool, dedicating time to teaching me so much about everything. Thank you so much for coming to visit me in Nagoya every now and then. Once again, Happy Birthday, Appa. Love, Vakhan",
  "Umma",
  "Happy birthday appa. We love you!!!",
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
