export interface Topic {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  content: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Unit {
  id: number;
  title: string;
  mastery: number; // 0 to 100
  topics: Topic[];
}

export const chemistryData: Unit[] = [
  {
    id: 1,
    title: "Atomic Structure and Properties",
    mastery: 15,
    topics: [
      {
        id: "1.1",
        title: "Moles and Molar Mass",
        description: "Understanding the fundamental unit of measurement in chemistry.",
        content: "The mole is the SI unit of amount of substance. One mole contains exactly $6.02214076 \\times 10^{23}$ elementary entities. This number is the fixed numerical value of the Avogadro constant, $N_A$, when expressed in the unit $mol^{-1}$.",
        questions: [
          {
            id: "q1.1.1",
            text: "How many grams are in 2.0 moles of Carbon (atomic mass ~12.01 g/mol)?",
            options: ["12.01 g", "24.02 g", "6.00 g", "48.04 g"],
            correctIndex: 1,
            explanation: "Mass = Moles × Molar Mass. So, $2.0 \\text{ mol} \\times 12.01 \\text{ g/mol} = 24.02 \\text{ g}$."
          },
          {
            id: "q1.1.2",
            text: "What is the molar mass of $H_2O$?",
            options: ["10.01 g/mol", "16.00 g/mol", "18.02 g/mol", "2.02 g/mol"],
            correctIndex: 2,
            explanation: "$2 \\times \\text{H} (1.01) + 1 \\times \\text{O} (16.00) = 18.02 \\text{ g/mol}$."
          },
          {
            id: "q1.1.3",
            text: "How many moles are in 36.04 g of $H_2O$?",
            options: ["1.0 mol", "2.0 mol", "3.0 mol", "0.5 mol"],
            correctIndex: 1,
            explanation: "$\text{Moles} = \frac{\text{Mass}}{\text{Molar Mass}}$. So, $\frac{36.04 \text{ g}}{18.02 \text{ g/mol}} = 2.0 \text{ mol}$."
          }
        ]
      },
      { id: "1.2", title: "Mass Spectroscopy of Elements", description: "", content: "", questions: [] },
      { id: "1.3", title: "Elemental Composition of Pure Substances", description: "", content: "", questions: [] },
      { id: "1.4", title: "Composition of Mixtures", description: "", content: "", questions: [] },
      { id: "1.5", title: "Atomic Structure and Electron Configuration", description: "", content: "", questions: [] },
    ]
  },
  {
    id: 2,
    title: "Molecular and Ionic Compound Structure and Properties",
    mastery: 0,
    topics: [
      { id: "2.1", title: "Types of Chemical Bonds", description: "", content: "", questions: [] },
      { id: "2.2", title: "Intramolecular Force and Potential Energy", description: "", content: "", questions: [] },
    ]
  },
  { id: 3, title: "Intermolecular Forces and Properties", mastery: 0, topics: [] },
  { id: 4, title: "Chemical Reactions", mastery: 0, topics: [] },
  { id: 5, title: "Kinetics", mastery: 0, topics: [] },
  { id: 6, title: "Thermodynamics", mastery: 0, topics: [] },
  { id: 7, title: "Equilibrium", mastery: 0, topics: [] },
  { id: 8, title: "Acids and Bases", mastery: 0, topics: [] },
  { id: 9, title: "Applications of Thermodynamics", mastery: 0, topics: [] },
];
