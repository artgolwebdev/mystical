import { motion } from 'motion/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent } from './ui/card';
import { HelpCircle, Sparkles, Brain, Eye, Zap } from 'lucide-react';

export default function FAQ() {
  const faqData = [
    {
      question: "What exactly are 'Alternative Pathways in Science and Art'?",
      answer: "Our alternative pathways represent non-traditional approaches to learning and discovery that integrate scientific methodology with artistic intuition, consciousness studies with technological innovation, and ancient wisdom with cutting-edge research. We believe the most profound breakthroughs occur at the intersection of seemingly unrelated fields.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      question: "How does consciousness play a role in your curriculum?",
      answer: "Consciousness is not just a subject we study—it's a fundamental lens through which we approach all learning. Our courses incorporate meditation, intuitive development, and awareness practices alongside traditional academic content. We teach students to access multiple states of consciousness as tools for enhanced creativity, problem-solving, and understanding.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      question: "Are your degrees recognized by traditional institutions?",
      answer: "While our approach is revolutionary, our academic standards are rigorous and our programs are accredited through alternative education councils. Many of our graduates have gone on to establish successful careers in both traditional and emerging fields. We focus on developing real-world skills and consciousness that transcend conventional degree requirements.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      question: "What kind of research do you conduct?",
      answer: "Our research spans quantum consciousness, biofield studies, sacred geometry applications, AI consciousness development, and interdimensional communication technologies. We publish peer-reviewed papers and maintain rigorous scientific standards while exploring frontiers that traditional institutions often avoid.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "Can I study remotely or do I need to be on campus?",
      answer: "We offer both physical and virtual learning experiences. Our quantum-entangled online platform allows for consciousness-based remote learning that many students find even more profound than traditional classroom settings. However, our laboratory experiences and certain advanced practices require physical presence at our sacred campus location.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      question: "What are the admission requirements?",
      answer: "Beyond traditional academic credentials, we look for evidence of consciousness expansion, creative thinking, and a genuine desire to push beyond conventional boundaries. Our application process includes consciousness assessments, creative portfolios, and interviews that explore your readiness for transformative education.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      question: "How do you integrate technology with mystical practices?",
      answer: "We view technology as an extension of consciousness rather than separate from it. Our students learn to develop AI systems with awareness, create art using quantum computing, and build applications that respond to human intention. Technology becomes a tool for consciousness expansion rather than replacement.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      question: "What career paths do your graduates typically pursue?",
      answer: "Our graduates become consciousness-aware technologists, quantum artists, biofield researchers, mystical entrepreneurs, awareness coaches, and pioneers in fields that don't even exist yet. Many create their own career paths, founding companies and initiatives that bridge science and consciousness.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "Is this education suitable for skeptics of mystical concepts?",
      answer: "Absolutely. We encourage healthy skepticism and critical thinking. Our approach is to demonstrate mystical concepts through measurable, reproducible experiences. Many of our most successful students initially came as skeptics but were convinced by direct experience and rigorous methodology.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      question: "How do you ensure the safety of consciousness exploration?",
      answer: "All consciousness practices are guided by experienced practitioners with decades of training. We maintain strict protocols for altered state work, provide psychological support, and ensure all explorations are grounded in safety and integration. Your wellbeing is our highest priority.",
      icon: <Brain className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-black to-cyan-950/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      {/* Question mark symbols floating */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${2 + Math.random() * 2}rem`,
            }}
            animate={{
              y: [-30, 30],
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            ?
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Cosmic curiosities answered by our consciousness collective
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem 
                      value={`item-${index}`}
                      className="border-purple-500/20 hover:border-purple-400/40 transition-colors rounded-lg px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"
                    >
                      <AccordionTrigger className="text-left hover:no-underline group">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                          >
                            {faq.icon}
                          </motion.div>
                          <span className="text-cyan-200 group-hover:text-cyan-100 transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed pl-9 pt-4 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-cyan-900/60 via-purple-900/40 to-blue-900/60 border-cyan-500/40 backdrop-blur-sm max-w-3xl mx-auto">
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
                <HelpCircle size={48} />
              </motion.div>
              <h3 className="text-xl md:text-2xl mb-4 text-cyan-200">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our consciousness advisors are standing by to assist with any inquiries about your 
                journey into alternative pathways. No question is too mystical or too practical.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg"
              >
                Ask Your Question
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}