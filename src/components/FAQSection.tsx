import { motion } from "framer-motion";
import { FAQCard } from "./FAQCard";

const faqs = [
  {
    question: "How does the AI personalize my learning experience?",
    answer: "Our AI engine analyzes your performance across quizzes and practice exams, identifying precise knowledge gaps. It then generates custom study plans and practice questions tailored to strengthen your weak points, ensuring efficient mastery."
  },
  {
    question: "Are the practice exams aligned with the real AP tests?",
    answer: "Yes. Our content team continuously updates the question banks to reflect the latest College Board course and exam descriptions, matching the difficulty, format, and weighting of the actual AP exams."
  },
  {
    question: "Can I track my progress over time?",
    answer: "Absolutely. Your Dashboard features a comprehensive analytics suite that visualizes your mastery percentage per unit, retention index, and study streaks, giving you a clear picture of your exam readiness."
  },
  {
    question: "What subjects are currently supported on AP Lab?",
    answer: "We currently offer comprehensive materials for STEM & Sciences (AP Biology, Chemistry, Physics C), Humanities (AP US History, Psychology, English Language), and Math (AP Calculus BC, Statistics, Computer Science A)."
  },
  {
    question: "Is there a community or tutor support feature?",
    answer: "While our core product is self-paced AI-driven learning, you can always utilize our 'Ask AI' feature for immediate, detailed explanations on any topic. Community features are on our roadmap for upcoming releases."
  }
];

export function FAQSection() {
  return (
    <section className="relative w-full py-[160px] px-6 md:px-12 bg-deep-navy z-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-deep-navy to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-navy to-transparent pointer-events-none z-10" />
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-inter font-extrabold text-white text-3xl md:text-5xl tracking-tight mb-4 select-none"
          >
            Included FAQs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed select-none"
          >
            Everything you need to know about AP Lab, our methodology, and how we help you achieve the 5.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
