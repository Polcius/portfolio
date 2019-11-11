import React, { useEffect } from 'react';
import Draggable from 'gsap/Draggable';
import { TweenMax, Sine, TimelineLite } from 'gsap/TweenMax';

const Intro = () => {
  useEffect(() => {
    Draggable.create('.draggable-hand', {
      type: 'x,y',
      edgeResistance: 0.65,
      throwProps: true,
      autoScroll: true,
      inertia: true,
    });
    const tl = new TimelineLite();
    tl.to(
      '.draggable-hand',
      0.2,
      {
        rotation: 35,
        yoyo: true,
        repeat: 10,
        ease: Sine.easeOut,
      },
      1
    );
  });

  return (
    <section className="font-display mb-12">
      <h1 className="text-4xl leading-tight">
        <span className="inline-block draggable-hand">👋</span>
        Hi! I’m <span className="text-lime">Pol.</span> A Senior Front-End
        Engineer from Barcelona.{' '}
        <span className="text-lime">Nice to meet you!</span>
      </h1>
    </section>
  );
};

export default Intro;
