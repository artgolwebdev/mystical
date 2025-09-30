import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Sparkles, Atom, Palette, Eye } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Mystical Learning",
      description: "Explore the hidden connections between science and art through ancient wisdom and modern innovation."
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Scientific Discovery",
      description: "Unlock the secrets of the universe through alternative research methodologies and interdisciplinary approaches."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Artistic Expression",
      description: "Channel cosmic creativity into tangible forms that bridge the gap between imagination and reality."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Inner Vision",
      description: "Develop intuitive perception and expanded consciousness to see beyond conventional boundaries."
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1D5D9B]/40 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1D5D9B]/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#75C2F6]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#75C2F6] via-[#F4D160] to-[#FBEEAC] bg-clip-text text-transparent font-bold">
            About Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are pioneers at the intersection of scientific inquiry and artistic creation, 
            exploring alternative pathways that transcend traditional educational boundaries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1D5D9B]/30 via-[#1D5D9B]/20 to-[#75C2F6]/30 border-[#75C2F6]/20 backdrop-blur-sm hover:border-[#75C2F6]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#75C2F6]/20">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="text-[#75C2F6] mb-4 flex justify-center"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl mb-4 text-[#75C2F6] group-hover:text-[#FBEEAC] transition-colors font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#1D5D9B]/40 via-[#1D5D9B]/30 to-[#75C2F6]/40 border-[#75C2F6]/30 backdrop-blur-sm max-w-4xl mx-auto shadow-xl shadow-[#75C2F6]/10">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl mb-6 text-[#75C2F6] font-bold">
                The Convergence of Science and Art
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our institution serves as a bridge between the analytical mind and the creative soul. 
                We believe that the greatest breakthroughs come from the synthesis of seemingly opposing forces—
                logic and intuition, structure and chaos, known and unknown.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our alternative pathways, students embark on transformative journeys that challenge 
                conventional thinking and unlock new dimensions of understanding.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}