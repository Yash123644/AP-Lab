export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "top-3-mistakes-students-make-on-ap-exam-test-day",
    title: "Top 3 Mistakes Students Make on AP Exam Test Day",
    excerpt: "Every May, thousands of high-achieving AP scholars lose crucial points not because of a lack of preparation, but because of preventable test day traps. Here is how to avoid them.",
    category: "Exam Strategy",
    date: "May 2, 2026",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80",
    author: {
      name: "Yash Patil",
      role: "Founder, AP Lab",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
    },
    content: `
      <p className="text-lg text-white/80 leading-relaxed mb-6">After months of studying AP Biology, Calculus, Chemistry, and History, test day finally arrives. You've reviewed your flashcards, completed practice modules, and mastered key units. Yet every single year, exceptionally bright students walk out of the exam hall feeling defeated. Why?</p>
      
      <p className="text-lg text-white/80 leading-relaxed mb-8">It rarely comes down to intelligence or lack of knowledge. Instead, it stems from psychological and tactical mistakes made during the exam itself. Here are the <strong className="text-white">top 3 mistakes students make on AP exam test day</strong> and exact strategies to guarantee you don't fall into the same trap.</p>
      
      <h3 className="text-2xl font-bold text-white mt-10 mb-4">1. Spending 25+ Minutes on a Single FRQ Sub-Part</h3>
      <p className="text-white/80 leading-relaxed mb-4">Free-Response Questions (FRQs) are graded according to strict College Board rubrics. Each part (a, b, c, d) has specific points assigned to it. The single biggest trap students fall into is getting stuck on part (a) or (b) of a multi-part question and spending 25 minutes trying to solve it, leaving parts (c) and (d) completely blank.</p>
      <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 my-6">
        <p className="text-emerald-400 font-semibold mb-1">The Fix:</p>
        <p className="text-white/80 text-sm leading-relaxed">Allocate strict time budgets per question. If a sub-part takes longer than 3–4 minutes without progress, skip it immediately, earn the easy points in parts (c) and (d), and return to it only if time permits. Blank answers yield zero partial credit—never leave easy points on the table.</p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-10 mb-4">2. Second-Guessing Initial Multiple-Choice Answers During Fatigue</h3>
      <p className="text-white/80 leading-relaxed mb-4">Near the middle of Section I, decision fatigue sets in. When reviewing flagged multiple-choice questions, cognitive research shows students are 3 times more likely to change a correct initial instinct to an incorrect distractor answer.</p>
      <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 my-6">
        <p className="text-emerald-400 font-semibold mb-1">The Fix:</p>
        <p className="text-white/80 text-sm leading-relaxed">Trust your first instinct unless you find concrete, unambiguous textual or mathematical evidence that proves your original choice was wrong. Never change an answer simply out of self-doubt or fatigue.</p>
      </div>

      <h3 className="text-2xl font-bold text-white mt-10 mb-4">3. Cramming New Formulas & Vocab the Morning Of</h3>
      <p className="text-white/80 leading-relaxed mb-4">Trying to memorize new formulas or historical dates 30 minutes before entering the testing room floods your brain with cortisol and disrupts active working memory. It heightens anxiety and impairs neural recall during the exam.</p>
      <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 my-6">
        <p className="text-emerald-400 font-semibold mb-1">The Fix:</p>
        <p className="text-white/80 text-sm leading-relaxed">Stop studying at 8:00 PM the night before. Prioritize 8 hours of sleep, a high-protein breakfast, and hydration. Test day is about clear execution and calm focus, not last-second panic cramming.</p>
      </div>

      <hr className="my-10 border-white/10" />

      <p className="text-lg text-white/90 font-medium leading-relaxed">Mastering the College Board AP exams is as much about strategy and mental composure as it is about content. Practice timed conditions, trust your preparation, and step into the test room with confidence.</p>
    `
  }
];
