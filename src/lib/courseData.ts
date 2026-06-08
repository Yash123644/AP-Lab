import { Dna, Beaker, Atom, History, Brain, BookOpen, Sigma, BarChart3, Binary, LucideIcon } from "lucide-react";

export interface APSubject {
  name: string;
  icon: LucideIcon;
  color: string;
  bgGlow: string;
  category: string;
  slug: string;
  lessons: string;
  modules: string;
  gradient: string;
  image: string;
}

export const courses: APSubject[] = [
  {
    name: "AP Biology",
    slug: "ap-biology",
    icon: Dna,
    color: "text-medical-teal",
    bgGlow: "bg-medical-teal/20",
    category: "STEM & Sciences",
    lessons: "1,248",
    modules: "24",
    gradient: "from-[#008080] to-[#004d4d]",
    image: "/courses/ap_biology_bg.png"
  },
  {
    name: "AP Chemistry",
    slug: "ap-chemistry",
    icon: Beaker,
    color: "text-blue-400",
    bgGlow: "bg-blue-400/20",
    category: "STEM & Sciences",
    lessons: "1,152",
    modules: "18",
    gradient: "from-[#60a5fa] to-[#1e40af]",
    image: "/courses/ap_chemistry_bg.png"
  },
  {
    name: "AP Physics C",
    slug: "ap-physics-c",
    icon: Atom,
    color: "text-indigo-400",
    bgGlow: "bg-indigo-400/20",
    category: "STEM & Sciences",
    lessons: "984",
    modules: "12",
    gradient: "from-[#818cf8] to-[#312e81]",
    image: "/courses/ap_physics_c_bg.png"
  },
  {
    name: "AP US History",
    slug: "ap-ush",
    icon: History,
    color: "text-amber-400",
    bgGlow: "bg-amber-400/20",
    category: "Humanities & Arts",
    lessons: "2,415",
    modules: "42",
    gradient: "from-[#fbbf24] to-[#78350f]",
    image: "/courses/ap_ush_bg.png"
  },
  {
    name: "AP Psychology",
    slug: "ap-psych",
    icon: Brain,
    color: "text-primary-purple",
    bgGlow: "bg-primary-purple/20",
    category: "Humanities & Arts",
    lessons: "862",
    modules: "10",
    gradient: "from-[#7b39fc] to-[#2b2344]",
    image: "/courses/ap_psych_bg.png"
  },
  {
    name: "AP English Lang",
    slug: "ap-eng-lang",
    icon: BookOpen,
    color: "text-rose-400",
    bgGlow: "bg-rose-400/20",
    category: "Humanities & Arts",
    lessons: "1,520",
    modules: "28",
    gradient: "from-[#fb7185] to-[#881337]",
    image: "/courses/ap_eng_lang_bg.png"
  },
  {
    name: "AP Calculus BC",
    slug: "ap-calc-bc",
    icon: Sigma,
    color: "text-emerald-400",
    bgGlow: "bg-emerald-400/20",
    category: "Mathematical Logic",
    lessons: "1,842",
    modules: "32",
    gradient: "from-[#34d399] to-[#064e3b]",
    image: "/courses/ap_calc_bc_bg.png"
  },
  {
    name: "AP Statistics",
    slug: "ap-stats",
    icon: BarChart3,
    color: "text-sky-400",
    bgGlow: "bg-sky-400/20",
    category: "Mathematical Logic",
    lessons: "1,102",
    modules: "16",
    gradient: "from-[#38bdf8] to-[#0c4a6e]",
    image: "/courses/ap_stats_bg.png"
  },
  {
    name: "AP Comp Sci A",
    slug: "ap-csa",
    icon: Binary,
    color: "text-violet-400",
    bgGlow: "bg-violet-400/20",
    category: "Mathematical Logic",
    lessons: "1,345",
    modules: "20",
    gradient: "from-[#a78bfa] to-[#4c1d95]",
    image: "/courses/ap_csa_bg.png"
  }
];
