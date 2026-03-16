'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: "How Fever Scaled Quality\nand Training in a Fast-\nGrowth Environment",
    logo: "fever",
    image: "https://picsum.photos/id/1018/800/600",
  },
  {
    id: 2,
    title: "Ryanair's approach to\ncustomer service training",
    logo: "RYANAIR",
    image: "https://picsum.photos/id/1015/800/600",
  },
  {
    id: 3,
    title: "Scaling support\nwith Three",
    logo: "Three",
    image: "https://picsum.photos/id/1036/800/600",
  },
  {
    id: 4,
    title: "Crypto.com's global\ntraining program",
    logo: "crypto.com",
    image: "https://picsum.photos/id/1043/800/600",
  }
];

export default function ExpandableCards() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const springTransition = { type: 'spring' as const, stiffness: 120, damping: 20, mass: 0.9 };

  return (
    <div className="flex gap-4 w-full max-w-5xl mx-auto h-[500px]">
      {cards.map((card, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <motion.div
            key={card.id}
            className="relative z-0 rounded-[2rem] overflow-hidden cursor-pointer flex flex-col justify-between p-8 group"
            initial={false}
            animate={{
              flex: isExpanded ? 3.5 : 1,
            }}
            transition={springTransition}
            onMouseEnter={() => setExpandedIndex(index)}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Progressive blur and gradient overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
              <div 
                className="absolute inset-0 backdrop-blur-[12px]"
                style={{
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0) 60%)',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0) 60%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Top section: Read more */}
            <div className="flex justify-end h-8 relative z-10">
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, x: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: 10, filter: 'blur(4px)', transition: { duration: 0.2, ease: "easeIn" } }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="flex items-center gap-2 text-white text-sm font-medium"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom section: Title and Logo */}
            <div className="flex items-end w-full mt-auto h-32 relative z-10">
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 10, filter: 'blur(4px)', transition: { duration: 0.2, ease: "easeIn" } }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute left-0 bottom-0"
                  >
                    <h3 className="text-white text-2xl font-semibold leading-snug whitespace-pre-line w-[280px]">
                      {card.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={`w-full flex ${isExpanded ? 'justify-end' : 'justify-center'}`}>
                <motion.div
                  layout
                  transition={springTransition}
                  className="text-white font-bold text-xl whitespace-nowrap"
                >
                  {card.logo}
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
