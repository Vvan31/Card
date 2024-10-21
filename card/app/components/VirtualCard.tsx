'use client';

import React from 'react';
import Image from 'next/image';
import TextReveal from "@/components/magicui/text-reveal";
import styles from './VirtualCard.module.css';
import { ConfettiDemo } from './ConfettiDemo';

interface VirtualCardProps {
  title: string;
  content: string[];
  images?: string[];
}

const VirtualCard: React.FC<VirtualCardProps> = ({ title, content, images = [] }) => {
  return (
    <div className={styles.cardContainer}>
      {content.map((text, index) => (
        <div key={index} className={styles.cardSection}>
          {images[index] && (
            <Image
              src={images[index]}
              alt="Imagen relacionada"
              className={styles.cardImage}
              width={400}
              height={200}
            />
          )}
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
