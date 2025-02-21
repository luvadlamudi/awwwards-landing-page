'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  const fifthText = useRef(null);
  const sixthText = useRef(null);

  const unoText = useRef(null);
  const dosText = useRef(null);
  const tresText = useRef(null);
  const quatroText = useRef(null);
  const cincoText = useRef(null);
  const siesText = useRef(null);

  const sliderz = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderz.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    gsap.set(thirdText.current, {xPercent: xPercent})
    gsap.set(fourthText.current, {xPercent: xPercent})
    gsap.set(fifthText.current, {xPercent: xPercent})
    gsap.set(sixthText.current, {xPercent: xPercent})

    gsap.set(unoText.current, {xPercent: xPercent})
    gsap.set(dosText.current, {xPercent: xPercent})
    gsap.set(tresText.current, {xPercent: xPercent})
    gsap.set(quatroText.current, {xPercent: xPercent})
    gsap.set(cincoText.current, {xPercent: xPercent})
    gsap.set(siesText.current, {xPercent: xPercent})

    requestAnimationFrame(animate);
    xPercent += 0.019 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>

      <div className={styles.img}>
        <Image 
            src="/images/faces.svg"
            fill
            
          /> 
      </div>
        
      <div>
        <div className={styles.sliderContainer}>
          
          <div ref={sliderz} className={styles.slider}>
            <p ref={fifthText}>ENGINEER DESIGNER PROGRAMMER ‎ </p>
            <p ref={sixthText}>ENGINEER DESIGNER PROGRAMMER ‎ </p>
          </div>

          
          
        </div>
      </div>

      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        
      </div>
    </motion.main>
  )
}
