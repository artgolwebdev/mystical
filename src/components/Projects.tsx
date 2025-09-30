import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Sparkles, Atom, Eye, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Projects() {
  const projects = [
    {
      title: "Consciousness Mapping Engine",
      description: "An AI system that visualizes human consciousness patterns through advanced brainwave analysis and sacred geometry.",
      image: "https://images.unsplash.com/photo-1741997699658-d37ee7a2e010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY29zbWljJTIwc3BhY2UlMjBzdGFyc3xlbnwxfHx8fDE3NTkyNTg1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Neural Networks", "Sacred Geometry", "Biofield Sensors"],
      status: "Active Research",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "Quantum Art Generator",
      description: "A revolutionary platform that creates art by harnessing quantum entanglement patterns and translating them into visual masterpieces.",
      image: "https://images.unsplash.com/photo-1758627506826-0658170e5cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjBjcmVhdGl2ZSUyMHNwYWNlfGVufDF8fHx8MTc1OTI1ODUyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Quantum Computing", "Generative Art", "Consciousness APIs"],
      status: "Beta Testing",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Biofield Resonance Laboratory",
      description: "An immersive environment where students explore the intersection of human energy fields and scientific measurement.",
      image: "https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc1OTE5NDMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Energy Analytics", "VR/AR", "Biometric Sensors"],
      status: "In Development",
      icon: <Atom className="w-5 h-5" />
    },
    {
      title: "Mystical Learning Network",
      description: "A decentralized platform connecting seekers worldwide through consciousness-aware educational experiences.",
      image: "https://images.unsplash.com/photo-1741997699658-d37ee7a2e010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY29zbWljJTIwc3BhY2UlMjBzdGFyc3xlbnwxfHx8fDE3NTkyNTg1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Blockchain", "P2P Networks", "Collective Intelligence"],
      status: "Conceptual",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Research": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Beta Testing": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "In Development": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Conceptual": return "bg-[#F4D160]/20 text-[#F4D160] border-[#F4D160]/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D5D9B]/50 via-black to-[#75C2F6]/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1D5D9B]/20 via-transparent to-transparent"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#75C2F6]/30 transform rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [45, 405],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#75C2F6] to-[#F4D160] bg-clip-text text-transparent">
            Mystical Projects
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering initiatives that bridge the gap between science and consciousness
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1D5D9B]/40 via-[#1D5D9B]/30 to-[#75C2F6]/40 border-[#75C2F6]/30 backdrop-blur-sm hover:border-[#75C2F6]/60 transition-all duration-300 group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} backdrop-blur-sm`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-[#75C2F6]"
                    >
                      {project.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-[#75C2F6] group-hover:text-[#FBEEAC] transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="text-sm text-[#75C2F6] mb-3">Core Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#1D5D9B]/50 text-[#F4D160] px-3 py-1 rounded-full border border-[#F4D160]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#75C2F6] to-[#F4D160] hover:from-[#75C2F6] hover:to-[#F4D160] text-white flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Explore Project
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#75C2F6] text-[#75C2F6] hover:bg-[#75C2F6] hover:text-black"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-gradient-to-r from-[#F4D160] to-[#75C2F6] hover:from-[#F4D160] hover:to-[#1D5D9B] text-white px-8 py-4">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}