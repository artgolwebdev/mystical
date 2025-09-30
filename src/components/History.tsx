import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Calendar, Star, Zap, Eye, Crown, Sparkles } from 'lucide-react';

export default function History() {
  const timelineEvents = [
    {
      year: "1987",
      title: "The Mystical Foundation",
      description: "Founded by visionary Dr. Celestia Starwhisper after a profound consciousness experience during a solar eclipse. The first classes were held in an ancient observatory.",
      icon: <Star className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "1992",
      title: "Quantum Arts Laboratory",
      description: "Established the world's first laboratory dedicated to studying the intersection of quantum physics and artistic creation.",
      icon: <Zap className="w-6 h-6" />,
      highlight: false
    },
    {
      year: "1998",
      title: "Consciousness Studies Department",
      description: "Pioneered the academic study of consciousness, introducing courses that bridged neuroscience, philosophy, and mystical traditions.",
      icon: <Eye className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "2003",
      title: "International Recognition",
      description: "Received the Global Innovation Award for Alternative Education, marking our emergence as a leading institution in consciousness-based learning.",
      icon: <Crown className="w-6 h-6" />,
      highlight: false
    },
    {
      year: "2010",
      title: "Digital Transformation",
      description: "Launched the first virtual reality consciousness exploration platforms, allowing students to experience altered states of awareness safely.",
      icon: <Sparkles className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "2018",
      title: "AI Consciousness Research",
      description: "Began groundbreaking research into artificial consciousness, developing the first AI systems with measurable awareness indicators.",
      icon: <Zap className="w-6 h-6" />,
      highlight: false
    },
    {
      year: "2023",
      title: "Quantum Computing Integration",
      description: "Integrated quantum computing into consciousness studies, opening new pathways for understanding the nature of reality and awareness.",
      icon: <Star className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "2025",
      title: "Present Day",
      description: "Continuing to push the boundaries of human potential, with over 10,000 graduates now leading transformative initiatives worldwide.",
      icon: <Crown className="w-6 h-6" />,
      highlight: true
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D5D9B]/50 via-black to-[#75C2F6]/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1D5D9B]/20 via-transparent to-transparent"></div>
      
      {/* Cosmic spirals */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-[#75C2F6]/30 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#75C2F6] to-[#F4D160] bg-clip-text text-transparent">
            Our Mystical History
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A journey through time, chronicling our evolution from a visionary dream to a beacon of consciousness
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#75C2F6] via-[#F4D160] to-[#75C2F6] opacity-30"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-md">
                  <Card className={`${
                    event.highlight
                      ? 'bg-gradient-to-br from-[#75C2F6]/60 via-[#1D5D9B]/40 to-[#1D5D9B]/60 border-[#F4D160]/50'
                      : 'bg-gradient-to-br from-[#1D5D9B]/40 via-[#1D5D9B]/30 to-[#75C2F6]/40 border-[#75C2F6]/30'
                  } backdrop-blur-sm hover:border-[#F4D160]/60 transition-all duration-300 group`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`${event.highlight ? 'text-[#F4D160]' : 'text-[#75C2F6]'}`}
                        >
                          {event.icon}
                        </motion.div>
                        <div className={`text-2xl ${event.highlight ? 'text-[#F4D160]' : 'text-[#75C2F6]'}`}>
                          {event.year}
                        </div>
                      </div>
                      <h3 className={`text-xl mb-3 ${event.highlight ? 'text-[#FBEEAC]' : 'text-[#FBEEAC]'} group-hover:text-white transition-colors`}>
                        {event.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline node */}
                <div className="relative z-20">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 rounded-full border-4 ${
                      event.highlight
                        ? 'bg-[#F4D160] border-[#F4D160] shadow-lg shadow-[#F4D160]/50'
                        : 'bg-[#75C2F6] border-[#75C2F6] shadow-lg shadow-[#75C2F6]/50'
                    }`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full ${
                        event.highlight ? 'bg-[#F4D160]' : 'bg-[#75C2F6]'
                      } opacity-30`}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 max-w-md hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-[#1D5D9B]/60 via-[#1D5D9B]/40 to-[#75C2F6]/60 border-[#75C2F6]/40 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 text-[#F4D160]"
              >
                <Calendar size={64} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl mb-6 text-[#75C2F6]">
                The Future Unfolds
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our journey continues as we explore new frontiers of consciousness and push the boundaries 
                of what's possible when science and art unite. The next chapter of our mystical odyssey 
                awaits, and we invite you to be part of this extraordinary adventure.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}