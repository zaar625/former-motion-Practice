import React from 'react';
import { animate, motion } from 'framer-motion';

const svgVariants ={
  hidden:{rotate:-180},
  visible:{
    rotate:0,
    transition: {duration: 1}
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible:{
    opacity: 1,
    pathLength:1,
    transition: {
      duration:2,
      ease:"easeInOut",
    },
    animate:{
      AnimationTimeline:'infinite'
    }
  },

  
}

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        >
          <motion.path
          variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
          variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <motion.div className="title"
      initial={{y:-250}}//from
      animate={{y:-10}}//to
      transition={{delay:0.2, type:'spring', stiffness:500}}//튕기고 튕기는 정도
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;