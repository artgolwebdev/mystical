import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';

export default function ContactSupport() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Mystical Messages",
      value: "connect@alternative-pathways.edu",
      description: "Send us your cosmic inquiries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepathic Line",
      value: "+1 (555) MYSTICAL",
      description: "Direct consciousness connection"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Sacred Location",
      value: "Observatory Hills, Consciousness Valley",
      description: "Where earth meets cosmos"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Cosmic Hours",
      value: "24/7 Universal Time",
      description: "We exist beyond time"
    }
  ];

  const supportCategories = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "General Inquiries",
      description: "Questions about our programs and philosophy"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "International Students",
      description: "Support for consciousness explorers worldwide"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Research Collaboration",
      description: "Partner with us in pushing boundaries"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1D5D9B]/30 to-[#75C2F6]/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#75C2F6]/20 via-transparent to-transparent"></div>
      
      {/* Floating communication symbols */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#75C2F6]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random()}rem`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {['✦', '◊', '○', '△', '☽', '☾'][Math.floor(Math.random() * 6)]}
          </motion.div>
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
            Contact & Support
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Reach out through the cosmic channels and connect with our mystical support team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-8 text-[#75C2F6]">Get In Touch</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-[#1D5D9B]/40 via-[#1D5D9B]/30 to-[#75C2F6]/40 border-[#75C2F6]/30 backdrop-blur-sm hover:border-[#75C2F6]/60 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="text-[#75C2F6] mt-1"
                          >
                            {method.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-lg text-[#75C2F6] mb-1 group-hover:text-[#FBEEAC] transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-white mb-2">{method.value}</p>
                            <p className="text-gray-300 text-sm">{method.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Support Categories */}
            <div>
              <h4 className="text-2xl mb-6 text-[#F4D160]">Support Categories</h4>
              <div className="space-y-4">
                {supportCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-[#1D5D9B]/30 rounded-lg border border-[#F4D160]/20 hover:border-[#F4D160]/40 transition-colors"
                  >
                    <div className="text-[#F4D160]">
                      {category.icon}
                    </div>
                    <div>
                      <h5 className="text-[#F4D160]">{category.title}</h5>
                      <p className="text-gray-300 text-sm">{category.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[#75C2F6]/40 via-[#1D5D9B]/30 to-[#1D5D9B]/40 border-[#75C2F6]/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-[#75C2F6]">Send a Mystical Message</CardTitle>
                <p className="text-gray-300">Let your consciousness reach ours through this cosmic form</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#75C2F6] text-sm mb-2 block">First Name</label>
                    <Input 
                      placeholder="Your mystical name" 
                      className="bg-[#1D5D9B]/20 border-[#75C2F6]/30 text-white placeholder-gray-400 focus:border-[#F4D160]"
                    />
                  </div>
                  <div>
                    <label className="text-[#75C2F6] text-sm mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Family essence" 
                      className="bg-[#1D5D9B]/20 border-[#75C2F6]/30 text-white placeholder-gray-400 focus:border-[#F4D160]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-[#75C2F6] text-sm mb-2 block">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="your.cosmic.address@universe.com" 
                    className="bg-[#1D5D9B]/20 border-[#75C2F6]/30 text-white placeholder-gray-400 focus:border-[#F4D160]"
                  />
                </div>
                
                <div>
                  <label className="text-[#75C2F6] text-sm mb-2 block">Subject</label>
                  <Input 
                    placeholder="The essence of your inquiry" 
                    className="bg-[#1D5D9B]/20 border-[#75C2F6]/30 text-white placeholder-gray-400 focus:border-[#F4D160]"
                  />
                </div>
                
                <div>
                  <label className="text-[#75C2F6] text-sm mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Share your thoughts, dreams, and cosmic questions with us..."
                    rows={6}
                    className="bg-[#1D5D9B]/20 border-[#75C2F6]/30 text-white placeholder-gray-400 focus:border-[#F4D160]"
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-[#75C2F6] to-[#F4D160] hover:from-[#75C2F6] hover:to-[#F4D160] text-white py-3">
                    Send Cosmic Message
                  </Button>
                </motion.div>
                
                <p className="text-center text-gray-400 text-sm">
                  Your message will be transmitted through quantum channels and received by our conscious support team
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-cyan-900/60 border-cyan-500/40 backdrop-blur-sm max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-12 h-12 mx-auto mb-4 text-cyan-400"
              >
                <MessageCircle size={48} />
              </motion.div>
              <h3 className="text-xl md:text-2xl mb-4 text-cyan-200">
                Cosmic Response Promise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We commit to responding to all inquiries within 24 Earth hours. Our support team operates 
                across multiple dimensions to ensure your questions reach the right consciousness at the perfect moment.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}