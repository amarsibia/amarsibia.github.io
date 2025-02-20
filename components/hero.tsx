"use client"

import { FC } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero: FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)',
            'linear-gradient(45deg, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-2xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Building the Future
              </span>
            </motion.h1>
            
            <div className="text-2xl text-purple-600">
              <TypeAnimation
                sequence={[
                  'Engineering Leader',
                  2000,
                  'Innovation Driver',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Engineering leader with a passion for building high-performing teams and delivering innovative solutions. Transforming complex challenges into scalable, efficient systems.
            </motion.p>

            <Button 
              variant="default"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* <motion.div 
            className="relative w-64 h-64 md:w-96 md:h-96 mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src="/images/profile.png"
              alt="Professional headshot"
              fill
              className="rounded-2xl object-cover shadow-2xl"
              priority
            />
          </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

