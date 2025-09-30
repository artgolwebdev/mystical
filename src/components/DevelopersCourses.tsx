import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, Brain, Wand2, Microscope, Star, Zap } from 'lucide-react';

export default function DevelopersCourses() {
  const courses = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Quantum Programming",
      description: "Learn to code with quantum consciousness, developing applications that bridge digital and metaphysical realms.",
      level: "Advanced",
      duration: "12 weeks",
      technologies: ["Quantum Computing", "Consciousness APIs", "Reality Simulation"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Art Generation",
      description: "Master AI-assisted creativity, training neural networks to generate art that resonates with human consciousness.",
      level: "Intermediate",
      duration: "8 weeks",
      technologies: ["Machine Learning", "Generative Art", "Consciousness Mapping"]
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Mystical Web Development",
      description: "Create websites infused with sacred geometry and energy patterns that influence user consciousness.",
      level: "Beginner",
      duration: "6 weeks",
      technologies: ["Sacred Geometry", "Energy Programming", "Intuitive UX"]
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Biofield Data Science",
      description: "Analyze and visualize human energy fields using advanced sensors and consciousness-aware algorithms.",
      level: "Advanced",
      duration: "10 weeks",
      technologies: ["Biofield Sensors", "Energy Analytics", "Consciousness Data"]
    }
  ];

  const developers = [
    {
      name: "Dr. Luna Starweaver",
      role: "Quantum Consciousness Engineer",
      speciality: "Bridging quantum mechanics with consciousness studies",
      avatar: "LS"
    },
    {
      name: "Prof. Orion Mysticcode",
      role: "Sacred Geometry Developer",
      speciality: "Infusing ancient wisdom into modern technology",
      avatar: "OM"
    },
    {
      name: "Sage Aurora Mindbridge",
      role: "Neural Art Architect",
      speciality: "Creating AI systems with soul and purpose",
      avatar: "AM"
    },
    {
      name: "Master Cosmic Dataflow",
      role: "Biofield Analytics Guru",
      speciality: "Translating energy patterns into digital insights",
      avatar: "CD"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1D5D9B]/30 to-[#1D5D9B]/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#75C2F6]/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#F4D160] to-[#75C2F6] bg-clip-text text-transparent">
            Developers & Courses
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Learn from mystical masters who blend cutting-edge technology with ancient wisdom
          </p>
        </motion.div>

        {/* Featured Developers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-[#75C2F6]">Our Mystical Developers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#1D5D9B]/40 via-[#1D5D9B]/30 to-[#75C2F6]/40 border-[#F4D160]/30 backdrop-blur-sm hover:border-[#F4D160]/60 transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotateY: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#75C2F6] to-[#F4D160] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl"
                    >
                      {dev.avatar}
                    </motion.div>
                    <h4 className="text-xl mb-2 text-[#75C2F6]">{dev.name}</h4>
                    <p className="text-[#F4D160] mb-3">{dev.role}</p>
                    <p className="text-gray-300 text-sm">{dev.speciality}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-[#75C2F6]">Transformative Courses</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#75C2F6]/40 via-[#1D5D9B]/30 to-[#1D5D9B]/40 border-[#75C2F6]/30 backdrop-blur-sm hover:border-[#75C2F6]/60 transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#75C2F6]"
                      >
                        {course.icon}
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-[#75C2F6] group-hover:text-[#FBEEAC] transition-colors">
                          {course.title}
                        </CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline" className="border-[#F4D160] text-[#F4D160]">
                            {course.level}
                          </Badge>
                          <Badge variant="outline" className="border-[#75C2F6] text-[#75C2F6]">
                            {course.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mb-6">
                      <h5 className="text-sm text-[#75C2F6] mb-2">Technologies & Concepts:</h5>
                      <div className="flex flex-wrap gap-2">
                        {course.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#1D5D9B]/50 text-[#F4D160] px-2 py-1 rounded-full border border-[#F4D160]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#F4D160] to-[#75C2F6] hover:from-[#F4D160] hover:to-[#1D5D9B] text-white">
                      Enroll in Journey
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}