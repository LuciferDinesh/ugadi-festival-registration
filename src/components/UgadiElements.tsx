
import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sun, Leaf, Sparkles, PartyPopper } from 'lucide-react';

const UgadiElements = () => {
  const elements = [
    { 
      icon: <Flower className="w-full h-full" />, 
      color: "text-pink-500",
      size: "w-10 h-10",
      position: "top-[15%] left-[5%]",
      animation: { 
        y: [0, -15, 0],
        rotate: [0, 5, 0]
      },
      duration: 5,
      delay: 0
    },
    { 
      icon: <Sun className="w-full h-full" />, 
      color: "text-yellow-500",
      size: "w-12 h-12",
      position: "top-[10%] right-[10%]",
      animation: { 
        y: [0, -10, 0],
        rotate: [0, 10, 0]
      },
      duration: 6,
      delay: 1.2
    },
    { 
      icon: <Leaf className="w-full h-full" />, 
      color: "text-green-500",
      size: "w-8 h-8",
      position: "top-[40%] left-[7%]",
      animation: { 
        y: [0, -12, 0],
        rotate: [0, -8, 0]
      },
      duration: 7,
      delay: 0.5
    },
    { 
      icon: <Sparkles className="w-full h-full" />, 
      color: "text-purple-500",
      size: "w-9 h-9",
      position: "top-[30%] right-[5%]",
      animation: { 
        y: [0, -8, 0],
        rotate: [0, -5, 0]
      },
      duration: 4.5,
      delay: 1.8
    },
    { 
      icon: <PartyPopper className="w-full h-full" />, 
      color: "text-orange-500",
      size: "w-11 h-11",
      position: "top-[60%] left-[3%]",
      animation: { 
        y: [0, -14, 0],
        rotate: [0, 6, 0]
      },
      duration: 5.5,
      delay: 2.2
    },
    { 
      icon: <Flower className="w-full h-full" />, 
      color: "text-red-500",
      size: "w-10 h-10",
      position: "top-[50%] right-[4%]",
      animation: { 
        y: [0, -10, 0],
        rotate: [0, -10, 0]
      },
      duration: 6.5,
      delay: 1
    },
    { 
      icon: <Leaf className="w-full h-full" />, 
      color: "text-emerald-500",
      size: "w-7 h-7",
      position: "top-[80%] left-[8%]",
      animation: { 
        y: [0, -8, 0],
        rotate: [0, 15, 0]
      },
      duration: 5,
      delay: 0.7
    },
    { 
      icon: <Sun className="w-full h-full" />, 
      color: "text-amber-500",
      size: "w-9 h-9",
      position: "top-[75%] right-[7%]",
      animation: { 
        y: [0, -12, 0],
        rotate: [0, 8, 0]
      },
      duration: 7,
      delay: 1.5
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} ${element.color} ${element.size} opacity-20`}
          animate={element.animation}
          transition={{ 
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: element.delay
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Pulse rings */}
      <div className="absolute top-1/4 left-1/4 opacity-10">
        <div className="pulse-ring w-40 h-40 rounded-full border-4 border-orange-400"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-10">
        <div className="pulse-ring w-60 h-60 rounded-full border-4 border-yellow-400"></div>
      </div>

      {/* Sparkle elements */}
      {[...Array(15)].map((_, index) => (
        <motion.div 
          key={`sparkle-${index}`}
          className="absolute sparkle bg-white rounded-full w-2 h-2"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

export default UgadiElements;
