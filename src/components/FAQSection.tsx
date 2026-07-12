import { motion } from "framer-motion";
import { FAQCard } from "./FAQCard";

const faqs = [
  {
    question: "How does the AI personalize my learning experience?",
    answer: "Rather than using a black-box algorithm to force you down a fixed track, AP Lab puts you in control. You can open our Gemini-powered AI Tutor at any time during a lesson for custom topic breakdowns, key term clarifications, or on-demand practice quizzes. You can also highlight any text on the page to instantly ask the AI for a contextual explanation or diagnostic question."
  },
  {
    question: "Are the practice exams aligned with the real AP tests?",
    answer: "Yes. Our practice exams draw from curated, Unit-by-Unit question banks designed to match the curriculum, formatting, and style of the College Board's official AP course guidelines, helping you practice the exact concepts you need."
  },
  {
    question: "Can I track my progress over time?",
    answer: "Yes, you can track your study journey. The dashboard monitors your lesson completion progress, quiz scores, overall XP, user level, and daily study streaks, saving them locally or to your cloud profile so you always know where you stand."
  },
  {
    question: "What subjects are currently supported on AP Lab?",
    answer: "We currently support nine courses: AP Biology, AP Chemistry, AP Physics C, AP US History, AP Psychology, AP English Language, AP Calculus BC, AP Statistics, and AP Computer Science A."
  },
  {
    question: "Is there a community or tutor support feature?",
    answer: "We do not offer live human tutoring or student forums at this time. Instead, our interactive AI Tutor is built directly into every course dashboard, providing 24/7 support for explaining tricky problems or building custom review sheets."
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
