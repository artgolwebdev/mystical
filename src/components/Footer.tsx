import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import logoImage from 'figma:asset/06e56a91c9ab8ee08ca328ed915e7bfb56252e9c.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Academic": [
      "Programs & Courses",
      "Research Centers",
      "Faculty Directory",
      "Academic Calendar",
      "Student Resources"
    ],
    "Community": [
      "Global Network",
      "Alumni Association",
      "Collaboration Hub",
      "Events & Workshops",
      "Consciousness Circle"
    ],
    "Resources": [
      "Digital Library",
      "Research Publications",
      "Consciousness Tools",
      "Virtual Labs",
      "Student Portal"
    ]
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", url: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", url: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", url: "#" },
    { icon: <Facebook size={20} />, label: "Facebook", url: "#" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-purple-950/30 to-black border-t border-cyan-500/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
      
      {/* Floating cosmic elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
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
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img
                src={logoImage}
                alt="International School Logo"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                International School of Alternative Pathways
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Bridging the mystical and the scientific, we guide consciousness explorers toward 
                breakthrough discoveries that transform both individual potential and planetary awareness.
              </p>
            </motion.div>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-cyan-400" />
                <span>connect@alternative-pathways.edu</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-cyan-400" />
                <span>+1 (555) MYSTICAL</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-cyan-400" />
                <span>Observatory Hills, Consciousness Valley</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg mb-6 text-cyan-200">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/40 via-blue-900/30 to-cyan-900/40 border border-cyan-500/30 rounded-xl p-8 mb-12 backdrop-blur-sm"
        >
          <div className="text-center mb-6">
            <h4 className="text-xl mb-3 text-cyan-200">Join Our Cosmic Newsletter</h4>
            <p className="text-gray-400">
              Receive updates on consciousness research, mystical discoveries, and transformative courses
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.cosmic.address@universe.com"
              className="flex-1 px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-center md:text-left"
            >
              <p>© {currentYear} International School of Alternative Pathways in Science and Art.</p>
              <p className="text-sm mt-1">All consciousness rights reserved across dimensions.</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}