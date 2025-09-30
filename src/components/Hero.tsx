import { motion } from 'motion/react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/06e56a91c9ab8ee08ca328ed915e7bfb56252e9c.png';
import bgVideo from '../assets/bg-video.mp4';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Modern overlay with new color palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D5D9B]/90 via-[#1D5D9B]/70 to-black/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#75C2F6]/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4D160]/5 to-transparent"></div>
      </div>

      {/* Modern floating elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full opacity-40 ${
              i % 3 === 0 ? 'w-2 h-2 bg-[#75C2F6]' : 
              i % 3 === 1 ? 'w-1 h-1 bg-[#F4D160]' : 
              'w-1.5 h-1.5 bg-[#FBEEAC]'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30],
              x: [-10, 10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12 pt-24 md:pt-32 lg:pt-40"
        >
          <div className="relative inline-block">
            <img
              src={logoImage}
              alt="International School Logo"
              className="mt-20 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-8 drop-shadow-2xl filter brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#75C2F6]/20 to-[#F4D160]/20 rounded-full blur-xl"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#75C2F6] via-[#F4D160] to-[#FBEEAC] bg-clip-text text-transparent">
              International School
            </span>
            <br />
            <span className="text-white">
              of Alternative Pathways
            </span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl lg:text-3xl mb-12 text-[#75C2F6] font-medium"
        >
          in Science and Art
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-base md:text-lg lg:text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Discover the mystical fusion of scientific innovation and artistic expression. 
          Embark on a transformative journey where alternative pathways lead to extraordinary discoveries 
          and unlock new dimensions of understanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#1D5D9B] to-[#75C2F6] hover:from-[#75C2F6] hover:to-[#F4D160] text-white px-10 py-4 text-lg font-semibold shadow-2xl shadow-[#75C2F6]/30 transition-all duration-300 group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Explore Our Universe
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-[#75C2F6] text-[#75C2F6] hover:bg-[#75C2F6] hover:text-black px-10 py-4 text-lg font-semibold transition-all duration-300 group"
          >
            Join Our Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#75C2F6] hover:text-[#F4D160] transition-colors duration-300 cursor-pointer"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs mb-2 text-gray-400 font-medium tracking-wider">SCROLL</span>
            <ChevronDown size={28} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}