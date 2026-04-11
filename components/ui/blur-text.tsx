'use client';

import { motion } from 'motion/react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  duration?: number;
  visible?: boolean;
  gradientFrom?: number; // índice a partir do qual as palavras recebem gradient-text
};

function BlurWords({
  text, delay, className, animateBy, direction, duration, gradientFrom,
}: Required<Omit<BlurTextProps, 'visible'>>) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const yVal = direction === 'top' ? -20 : 20;

  return (
    <p className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((word, i) => {
        const isGradient = gradientFrom >= 0 && i >= gradientFrom;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: yVal }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: (i * delay) / 1000,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={isGradient ? 'gradient-text glow-text' : 'text-foreground'}
            style={{ display: 'inline-block' }}
          >
            {word}{animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
}

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 150,
  className = '',
  animateBy = 'words',
  direction = 'top',
  duration = 0.5,
  visible = true,
  gradientFrom = -1,
}) => {
  if (!visible) {
    return (
      <p className={className} aria-hidden="true"
        style={{ display: 'flex', flexWrap: 'wrap', opacity: 0, pointerEvents: 'none' }}>
        <span style={{ visibility: 'hidden' }}>{text}</span>
      </p>
    );
  }

  return (
    <BlurWords
      text={text} delay={delay} className={className}
      animateBy={animateBy} direction={direction}
      duration={duration} gradientFrom={gradientFrom}
    />
  );
};

export default BlurText;
