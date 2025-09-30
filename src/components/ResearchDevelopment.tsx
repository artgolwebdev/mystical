import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Atom, Dna, Brain, Sparkles, Telescope, Microscope } from 'lucide-react';

export default function ResearchDevelopment() {
  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Consciousness Computing",
      description: "Developing algorithms that interface directly with human consciousness, creating technology that responds to thought and intention.",
      progress: 78,
      status: "Active",
      papers: 12,
      researchers: 8
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum Biology",
      description: "Exploring quantum effects in biological systems and their implications for understanding life at the deepest levels.",
      progress: 65,
      status: "Active",
      papers: 15,
      researchers: 6
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Sacred Geometry in Nature",
      description: "Investigating mathematical patterns in natural phenomena and their connection to universal consciousness.",
      progress: 90,
      status: "Publishing",
      papers: 20,
      researchers: 10
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Epigenetic Consciousness",
      description: "Studying how consciousness and intention can influence gene expression and cellular behavior.",
      progress: 45,
      status: "Early Stage",
      papers: 8,
      researchers: 5
    },
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Cosmic Resonance Fields",
      description: "Mapping the relationship between celestial movements and human consciousness patterns.",
      progress: 55,
      status: "Active",
      papers: 11,
      researchers: 7
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Nano-Consciousness",
      description: "Investigating consciousness at the molecular level and developing nano-scale awareness technologies.",
      progress: 30,
      status: "Conceptual",
      papers: 4,
      researchers: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Publishing": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Early Stage": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Conceptual": return "bg-[#F4D160]/20 text-[#F4D160] border-[#F4D160]/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#75C2F6]/30 to-[#1D5D9B]/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1D5D9B]/20 via-transparent to-transparent"></div>
      
      {/* DNA helix animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-[#75C2F6] to-[#F4D160]"
            style={{
              left: `${20 + i * 30}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              rotateZ: [0, 360],
              y: [-50, 50, -50],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#F4D160] to-[#75C2F6] bg-clip-text text-transparent">
            Research & Development
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pushing the boundaries of human knowledge through interdisciplinary research
          </p>
        </motion.div>

        {/* Research Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Active Research Areas", value: "6", icon: <Atom className="w-6 h-6" /> },
            { label: "Published Papers", value: "70+", icon: <Microscope className="w-6 h-6" /> },
            { label: "Researchers", value: "39", icon: <Brain className="w-6 h-6" /> },
            { label: "Breakthrough Discoveries", value: "12", icon: <Sparkles className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#75C2F6]/40 via-[#1D5D9B]/30 to-[#1D5D9B]/40 border-[#75C2F6]/30 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-[#75C2F6] mb-3 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl mb-2 text-white">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Areas */}
        <div className="grid lg:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1D5D9B]/40 via-[#1D5D9B]/30 to-[#75C2F6]/40 border-[#F4D160]/30 backdrop-blur-sm hover:border-[#F4D160]/60 transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#F4D160]"
                      >
                        {area.icon}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl text-[#75C2F6] group-hover:text-[#FBEEAC] transition-colors">
                          {area.title}
                        </CardTitle>
                        <Badge className={`${getStatusColor(area.status)} text-xs mt-1`}>
                          {area.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[#75C2F6]">Research Progress</span>
                        <span className="text-[#75C2F6]">{area.progress}%</span>
                      </div>
                      <Progress value={area.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-[#1D5D9B]/30 rounded-lg border border-[#F4D160]/20">
                        <div className="text-xl text-[#F4D160]">{area.papers}</div>
                        <div className="text-gray-400">Papers</div>
                      </div>
                      <div className="text-center p-3 bg-[#75C2F6]/30 rounded-lg border border-[#75C2F6]/20">
                        <div className="text-xl text-[#75C2F6]">{area.researchers}</div>
                        <div className="text-gray-400">Researchers</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#1D5D9B]/60 via-[#1D5D9B]/40 to-[#75C2F6]/60 border-[#75C2F6]/40 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl md:text-3xl mb-6 text-[#75C2F6]">
                Join Our Research Community
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We welcome researchers, students, and consciousness explorers who are passionate about 
                pushing the boundaries of human understanding. Join us in unraveling the mysteries 
                that lie at the intersection of science and consciousness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#F4D160] to-[#75C2F6] hover:from-[#F4D160] hover:to-[#1D5D9B] text-white px-8 py-3 rounded-lg"
                >
                  Apply for Research Position
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[#75C2F6] text-[#75C2F6] hover:bg-[#75C2F6] hover:text-black px-8 py-3 rounded-lg transition-colors"
                >
                  View Research Publications
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}