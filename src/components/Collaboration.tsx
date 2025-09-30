import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Users, Globe, Lightbulb, Rocket, Network, Heart, Zap, Star } from 'lucide-react';

export default function Collaboration() {
  const initiatives = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Global Consciousness Network",
      description: "Connect with fellow seekers worldwide through our quantum-entangled communication platform.",
      participants: "2,847",
      status: "Active",
      type: "Platform"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Interdimensional Research Labs",
      description: "Collaborative research spaces where scientists and artists co-create breakthrough innovations.",
      participants: "156",
      status: "Recruiting",
      type: "Research"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Cosmic Innovation Incubator",
      description: "Nurture consciousness-driven startups that aim to transform human potential and planetary well-being.",
      participants: "89",
      status: "Active",
      type: "Incubator"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Unity Through Art Project",
      description: "Global art installation connecting human hearts through synchronized creative expression.",
      participants: "5,432",
      status: "Growing",
      type: "Art"
    }
  ];

  const partnerOrgs = [
    {
      name: "Quantum Consciousness Institute",
      type: "Research Partner",
      description: "Joint exploration of quantum effects in consciousness"
    },
    {
      name: "Sacred Geometry Society",
      type: "Educational Alliance",
      description: "Mathematical mysticism and artistic expression"
    },
    {
      name: "International Biofield Council",
      type: "Scientific Collaboration",
      description: "Human energy field research and applications"
    },
    {
      name: "Cosmic Artists Collective",
      type: "Creative Partnership",
      description: "Art that bridges dimensions and consciousness"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Recruiting": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Growing": return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-black to-purple-950/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Connection lines animation */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-cyan-400"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Iteration & Collaboration
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Where conscious minds unite to co-create the future of human potential
          </p>
        </motion.div>

        {/* Collaboration Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Global Collaborators", value: "8,524", icon: <Users className="w-6 h-6" /> },
            { label: "Countries Connected", value: "127", icon: <Globe className="w-6 h-6" /> },
            { label: "Active Projects", value: "234", icon: <Zap className="w-6 h-6" /> },
            { label: "Consciousness Nodes", value: "1,891", icon: <Star className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/40 border-purple-500/30 backdrop-blur-sm text-center hover:border-purple-400/60 transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-purple-400 mb-3 flex justify-center"
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

        {/* Collaboration Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-cyan-200">Active Collaborations</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-cyan-900/40 via-purple-900/30 to-blue-900/40 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-cyan-400"
                        >
                          {initiative.icon}
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl text-cyan-200 group-hover:text-cyan-100 transition-colors">
                            {initiative.title}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge className={`${getStatusColor(initiative.status)} text-xs`}>
                              {initiative.status}
                            </Badge>
                            <Badge variant="outline" className="border-purple-500 text-purple-300 text-xs">
                              {initiative.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-cyan-200">Active Participants: </span>
                        <span className="text-white">{initiative.participants}</span>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
                        Join Initiative
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 text-purple-200">Partner Organizations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerOrgs.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/40 border-purple-500/30 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg text-purple-200 group-hover:text-purple-100 transition-colors">
                        {org.name}
                      </h4>
                      <Badge variant="outline" className="border-cyan-500 text-cyan-300 text-xs">
                        {org.type}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {org.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-cyan-900/60 via-purple-900/40 to-blue-900/60 border-cyan-500/40 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-16 h-16 mx-auto mb-6 text-cyan-400"
              >
                <Network size={64} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl mb-6 text-cyan-200">
                Join the Consciousness Revolution
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Become part of a global network of conscious creators, researchers, and visionaries. 
                Together, we're iterating towards a future where science, art, and consciousness unite 
                to unlock humanity's infinite potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4">
                  Start Collaborating
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4">
                  Explore Network
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}