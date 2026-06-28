import { apChemistryData } from "./ap-chemistry-data";
import { apBiologyData } from "./ap-biology-data";
import { apPhysicsData } from "./ap-physics-data";
import { apUshData } from "./ap-ush-data";
import { apPsychData } from "./ap-psychology-data";

export interface CourseQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  hint?: string;
  explanation: string;
  unitId: number;
}

export interface CourseTopic {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  article: string; // Markdown with LaTeX and optional <vocab> tags
  questions: CourseQuestion[];
  image?: string;
}

export interface CourseUnit {
  id: number;
  title: string;
  masteryWeight: string; // e.g. "8–11%"
  topics: CourseTopic[];
}

export interface CourseMetadata {
  slug: string;
  name: string;
  category: string;
  accentColor: string; // Hex color
  glowColor: string; // Hex color with opacity
  textColor: string; // Tailwind text class
  bgGlow: string; // Tailwind bg class
  gradientFrom: string; // Tailwind from class
  gradientTo: string; // Tailwind to class
  bgGradient: string; // Tailwind from/to gradient classes
  masteryPrefix: string; // Prefix used for progress keys, e.g. ap-chem
  units: CourseUnit[];
}

const apChemistryUnits: CourseUnit[] = apChemistryData.map((unit) => ({
  id: unit.id,
  title: unit.title,
  masteryWeight: unit.masteryWeight,
  topics: unit.topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    youtubeId: topic.youtubeId,
    article: topic.article,
    image: topic.image,
    questions: topic.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      correctIndex: q.correctIndex,
      hint: q.hint,
      explanation: q.explanation,
      unitId: q.unitId,
    })),
  })),
}));

const apBiologyUnits: CourseUnit[] = apBiologyData.map((unit) => ({
  id: unit.id,
  title: unit.title,
  masteryWeight: unit.masteryWeight,
  topics: unit.topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    youtubeId: topic.youtubeId,
    article: topic.article,
    image: topic.image,
    questions: topic.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      correctIndex: q.correctIndex,
      hint: "Recall the core biological definition.",
      explanation: q.explanation,
      unitId: q.unitId,
    })),
  })),
}));

const apPhysicsUnits: CourseUnit[] = apPhysicsData.map((unit) => ({
  id: unit.id,
  title: unit.title,
  masteryWeight: unit.masteryWeight,
  topics: unit.topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    youtubeId: topic.youtubeId,
    article: topic.article,
    image: topic.image,
    questions: topic.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      correctIndex: q.correctIndex,
      hint: q.hint,
      explanation: q.explanation,
      unitId: q.unitId,
    })),
  })),
}));
const apUshUnits: CourseUnit[] = apUshData.map((unit) => ({
  id: unit.id,
  title: unit.title,
  masteryWeight: unit.masteryWeight,
  topics: unit.topics.map((topic) => ({
    id: topic.id,
    title: topic.title,
    description: topic.description,
    youtubeId: topic.youtubeId,
    article: topic.article,
    image: topic.image,
    questions: topic.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      correctIndex: q.correctIndex,
      hint: q.hint,
      explanation: q.explanation,
      unitId: q.unitId,
    })),
  })),
}));

const apPsychUnits: CourseUnit[] = apPsychData;

const apEngLangUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Rhetorical Analysis",
    masteryWeight: "33%",
    topics: [
      {
        id: "1.1",
        title: "The Rhetorical Situation",
        description: "Analyze how writers create messages for specific audiences and contexts.",
        youtubeId: "vo4pMVb0R6M",
        article: `
# The Rhetorical Situation

A writer's choices are guided by the Rhetorical Situation:
- **Exigence**: The immediate catalyst or trigger for the speech/text.
- **Audience**: The targeted group of readers or listeners.
- **Purpose**: What the author wants to achieve.
- **Context**: The historical and cultural backdrop.
`,
        questions: [
          {
            id: "q_eng_1.1.1",
            unitId: 1,
            text: "What term describes the urgent need or spark that prompts an author to write or speak?",
            options: ["Purpose", "Exigence", "Ethos", "Context"],
            correctIndex: 1,
            hint: "Derived from Latin meaning 'demand'.",
            explanation: "Exigence is the event, problem, or issue that inspires or stimulates a writer to create a message."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Argumentation & Synthesis",
    masteryWeight: "33%",
    topics: [
      {
        id: "2.1",
        title: "Structuring Logical Claims",
        description: "Evaluate source evidence and construct coherent synthesis essays.",
        youtubeId: "pM70cPYnsQs",
        article: `
# Argumentation and Synthesis

Strong academic writing relies on structured claims supported by evidence:
- **Thesis Statement**: A defensible opinion or position that establishes the essay's path.
- **Synthesis**: Integrating perspectives from multiple sources to support a central argument.
- **Logical Fallacies**: Errors in reasoning that weaken arguments (e.g. straw man, ad hominem).
`,
        questions: [
          {
            id: "q_eng_2.1.1",
            unitId: 2,
            text: "Which fallacy attacks the character of an opponent rather than address the substance of their argument?",
            options: ["Straw Man", "Ad Hominem", "Slippery Slope", "False Dilemma"],
            correctIndex: 1,
            hint: "Latin for 'to the person'.",
            explanation: "An ad hominem fallacy directly attacks the arguer personally rather than addressing their actual point."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Style and Rhetorical Choice",
    masteryWeight: "34%",
    topics: [
      {
        id: "3.1",
        title: "Tone, Diction, and Syntax",
        description: "Analyze stylistic strategies used to affect reader responses.",
        youtubeId: "vo4pMVb0R6M",
        article: `
# Tone, Diction, and Syntax

Stylistic strategies allow authors to refine their rhetorical impact:
- **Diction**: Choice of words to establish precise connotations.
- **Syntax**: Sentence structures (e.g., parallelisms, periodic sentences) that guide pacing.
- **Tone**: The writer's attitude toward the subject, expressed through diction.
`,
        questions: [
          {
            id: "q_eng_3.1.1",
            unitId: 3,
            text: "Which syntactic device involves the repetition of a chosen grammatical pattern across sentences?",
            options: ["Anaphora", "Parallelism", "Asyndeton", "Hyperbole"],
            correctIndex: 1,
            hint: "Creates balance, rhythm, and clarity in prose.",
            explanation: "Parallelism is the use of matching structures in series to create a balanced, rhythmic delivery."
          }
        ]
      }
    ]
  }
];

const apCalcUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Limits and Continuity",
    masteryWeight: "10–12%",
    topics: [
      {
        id: "1.1",
        title: "Limits at Infinity and Continuity",
        description: "Understand limits, formal definitions, and continuity.",
        youtubeId: "riXcZT2ICjA",
        article: `
# Limits and Continuity

A limit describes the behavior of a function near a point:
$$\\lim_{x \\to a} f(x) = L$$

## Continuity
A function $f(x)$ is continuous at $x = a$ if and only if:
1. $f(a)$ is defined.
2. $\\lim_{x \\to a} f(x)$ exists.
3. $\\lim_{x \\to a} f(x) = f(a)$.
`,
        questions: [
          {
            id: "q_calc_1.1.1",
            unitId: 1,
            text: "Evaluate the limit: $\\lim_{x \\to \\infty} \\frac{3x^2 + 5}{2x^2 - x}$.",
            options: ["$0$", "$3/2$", "$\\infty$", "$5$"],
            correctIndex: 1,
            hint: "Divide numerator and denominator by the highest power, $x^2$.",
            explanation: "Dividing by $x^2$, we get $\\lim_{x \\to \\infty} \\frac{3 + 5/x^2}{2 - 1/x} = \\frac{3 + 0}{2 - 0} = 3/2$."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Infinite Sequences and Series",
    masteryWeight: "15–18%",
    topics: [
      {
        id: "2.1",
        title: "Taylor and Maclaurin Series",
        description: "Construct power series approximations for transcendental functions.",
        youtubeId: "riXcZT2ICjA",
        article: `
# Taylor and Maclaurin Series

A Taylor series represents a smooth function as an infinite sum of polynomial terms centered at $x = c$:
$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(c)}{n!} (x - c)^n$$

A **Maclaurin Series** is centered at $c = 0$:
$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$$
`,
        questions: [
          {
            id: "q_calc_2.1.1",
            unitId: 2,
            text: "What is the Maclaurin series expansion for $e^x$?",
            options: [
              "$\\sum \\frac{x^n}{n!}$",
              "$\\sum (-1)^n \\frac{x^n}{n!}$",
              "$\\sum \\frac{x^{2n}}{(2n)!}$",
              "$\\sum \\frac{x^{2n+1}}{(2n+1)!}$"
            ],
            correctIndex: 0,
            hint: "All derivatives of $e^x$ evaluated at $0$ are $1$.",
            explanation: "Since $f^{(n)}(0) = e^0 = 1$ for all $n$, the expansion is $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\dots$"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Integration Applications",
    masteryWeight: "12–15%",
    topics: [
      {
        id: "3.1",
        title: "Area and Volumes of Revolution",
        description: "Determine area between intersecting curves and volumes using disk/washer methods.",
        youtubeId: "riXcZT2ICjA",
        article: `
# Integration Applications

Integrals determine areas and volumes:
- **Area Between Curves**:
  $$A = \\int_{a}^{b} [f(x) - g(x)] dx$$

- **Volume of Revolution (Disk/Washer)**:
  $$V = \\pi \\int_{a}^{b} [R(x)^2 - r(x)^2] dx$$
`,
        questions: [
          {
            id: "q_calc_3.1.1",
            unitId: 3,
            text: "What is the area of the region bounded by $y = x^2$ and $y = x$ from $x=0$ to $x=1$?",
            options: ["$1/2$", "$1/3$", "$1/6$", "$5/6$"],
            correctIndex: 2,
            hint: "Evaluate the integral: integral of (x - x^2) from 0 to 1.",
            explanation: "Area is $\\int_{0}^{1} (x - x^2) dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Parametric, Vector & Polar",
    masteryWeight: "10–12%",
    topics: [
      {
        id: "4.1",
        title: "Calculus of Polar Curves",
        description: "Analyze arc length and polar area integration.",
        youtubeId: "riXcZT2ICjA",
        article: `
# Parametric, Vector, and Polar Functions

Integrate polar curves:
- **Area in Polar Coordinates**:
  $$A = \\frac{1}{2} \\int_{\\alpha}^{\\beta} r(\\theta)^2 d\\theta$$

- **Arc Length of Parametric Curves**:
  $$L = \\int_{a}^{b} \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2} dt$$
`,
        questions: [
          {
            id: "q_calc_4.1.1",
            unitId: 4,
            text: "Evaluate the integral representing the area of a circle defined by $r(\\theta) = 4$ from $\\theta=0$ to $\\theta=2\\pi$.",
            options: ["$4\\pi$", "$8\\pi$", "$16\\pi$", "$32\\pi$"],
            correctIndex: 2,
            hint: "Use the polar area formula: 1/2 * integral of r^2.",
            explanation: "Area is $\\frac{1}{2} \\int_{0}^{2\\pi} 16 d\\theta = 8 [\\theta]_0^{2\\pi} = 16\\pi$."
          }
        ]
      }
    ]
  }
];

const apStatsUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Exploring One-Variable Data",
    masteryWeight: "15–23%",
    topics: [
      {
        id: "1.1",
        title: "Normal Distributions and Z-Scores",
        description: "Calculate standard scores and find percentiles.",
        youtubeId: "V1Ypy8B9n_I",
        article: `
# Normal Distributions and Z-Scores

The Normal Distribution is symmetric, single-peaked, and bell-shaped. It is described by its mean $\\mu$ and standard deviation $\\sigma$:
$$N(\\mu, \\sigma)$$

## The Z-Score Formula
A $z$-score measures how many standard deviations a data point lies from the mean:
$$z = \\frac{x - \\mu}{\\sigma}$$
`,
        questions: [
          {
            id: "q_stats_1.1.1",
            unitId: 1,
            text: "A student scores 85 on a test with a class mean of 75 and a standard deviation of 5. What is the student's z-score?",
            options: ["1.0", "2.0", "-2.0", "1.5"],
            correctIndex: 1,
            hint: "Use the formula $z = (x - \\mu) / \\sigma$.",
            explanation: "$z = (85 - 75) / 5 = 10 / 5 = 2.0$."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Exploring Two-Variable Data",
    masteryWeight: "10–15%",
    topics: [
      {
        id: "2.1",
        title: "Regression & Correlation Coefficient",
        description: "Calculate least-squares regression lines and analyze scatterplots.",
        youtubeId: "V1Ypy8B9n_I",
        article: `
# Exploring Two-Variable Data

Examine linear relationships between two variables:
- **Correlation Coefficient ($r$)**: Measures the strength and direction of a linear relationship ($-1 \\le r \\le 1$).
- **Coefficient of Determination ($r^2$)**: Explains the proportion of variation in $y$ explained by the regression line.
- **Least-Squares Regression Line**:
  $$\\hat{y} = a + bx$$
`,
        questions: [
          {
            id: "q_stats_2.1.1",
            unitId: 2,
            text: "If $r = -0.8$, what is the value of the coefficient of determination $r^2$?",
            options: ["-0.64", "0.64", "0.80", "0.16"],
            correctIndex: 1,
            hint: "Square the value of r.",
            explanation: "$r^2 = (-0.8)^2 = 0.64$."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Collecting Data & Probability",
    masteryWeight: "15–20%",
    topics: [
      {
        id: "3.1",
        title: "Sampling and General Probability",
        description: "Compare surveys, experiments, and evaluate probability unions and intersections.",
        youtubeId: "V1Ypy8B9n_I",
        article: `
# Collecting Data and Probability

How we collect and model random data:
- **Sampling Methods**: Simple Random Sample (SRS), Stratified Sample, Cluster Sample.
- **General Addition Rule**:
  $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
- **Conditional Probability**:
  $$P(A | B) = \\frac{P(A \\cap B)}{P(B)}$$
`,
        questions: [
          {
            id: "q_stats_3.1.1",
            unitId: 3,
            text: "If $P(A) = 0.5$, $P(B) = 0.3$, and A and B are independent events, what is $P(A \\cap B)$?",
            options: ["0.8", "0.2", "0.15", "0.6"],
            correctIndex: 2,
            hint: "For independent events, multiply their individual probabilities.",
            explanation: "For independent events, $P(A \\cap B) = P(A) \\times P(B) = 0.5 \\times 0.3 = 0.15$."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Statistical Inference",
    masteryWeight: "20–30%",
    topics: [
      {
        id: "4.1",
        title: "Confidence Intervals & Significance Tests",
        description: "Perform hypothesis tests for proportions and means.",
        youtubeId: "V1Ypy8B9n_I",
        article: `
# Statistical Inference

We draw conclusions about populations from sample statistics:
- **Confidence Interval**:
  $$\\text{Estimate} \\pm \\text{Margin of Error}$$
- **Significance Testing**: Evaluate a null hypothesis $H_0$ against an alternative hypothesis $H_a$.
- **P-Value**: The probability of obtaining results at least as extreme as observed, assuming $H_0$ is true. If P-value $\\le \\alpha$, reject $H_0$.
`,
        questions: [
          {
            id: "q_stats_4.1.1",
            unitId: 4,
            text: "A study reports a P-value of 0.03. If the significance level is alpha = 0.05, what is the appropriate decision?",
            options: ["Reject Ho", "Fail to reject Ho", "Accept Ho", "Increase sample size"],
            correctIndex: 0,
            hint: "Compare the P-value directly with the significance level.",
            explanation: "Since the P-value (0.03) is less than alpha (0.05), we reject the null hypothesis $H_0$."
          }
        ]
      }
    ]
  }
];

const apCsaUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Primitive Types & Objects",
    masteryWeight: "10%",
    topics: [
      {
        id: "1.1",
        title: "Primitive Types and String Objects",
        description: "Understand Java variables, basic arithmetic, and String operations.",
        youtubeId: "O5nskjZ_GoI",
        article: `
# Primitive Types and Strings

Java is strongly typed. It supports primitives:
- \`int\`: Integer values (e.g. \`4\`).
- \`double\`: Decimals (e.g. \`4.5\`).
- \`boolean\`: \`true\` or \`false\`.

## String Objects
Strings are immutable sequences of characters. Standard operations:
- \`length()\`: returns integer length.
- \`substring(int start, int end)\`: returns substring from \`start\` to \`end - 1\`.
`,
        questions: [
          {
            id: "q_csa_1.1.1",
            unitId: 1,
            text: "What is returned by the expression \`\"hello\".substring(1, 4)\` in Java?",
            options: ["\"ell\"", "\"ello\"", "\"llo\"", "\"he\""],
            correctIndex: 0,
            hint: "substring starts at index 1 and goes up to index 3 (exclusive of 4).",
            explanation: "Indices are: h(0), e(1), l(2), l(3), o(4). Indices 1 to 3 represent 'ell'."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Arrays & ArrayLists",
    masteryWeight: "15%",
    topics: [
      {
        id: "2.1",
        title: "Iterating 1D Arrays",
        description: "Learn standard loops and enhanced for-loops.",
        youtubeId: "O5nskjZ_GoI",
        article: `
# Iterating 1D Arrays

Java arrays are fixed-size structures. We can iterate using index-based \`for\` loops or enhanced \`for-each\` loops:

## Example
\`\`\`java
int[] nums = {1, 2, 3};
for(int i = 0; i < nums.length; i++) {
    System.out.println(nums[i]);
}
\`\`\`
`,
        questions: [
          {
            id: "q_csa_2.1.1",
            unitId: 2,
            text: "Which index refers to the last element of an array named \`arr\`?",
            options: ["\`arr.length\`", "\`arr.length()\`", "\`arr.length - 1\`", "\`arr[arr.length]\`"],
            correctIndex: 2,
            hint: "Indices are 0-indexed, so the max index is length minus 1.",
            explanation: "Arrays are 0-indexed, so the index of the last element is \`arr.length - 1\`."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Conditional Logic",
    masteryWeight: "15%",
    topics: [
      {
        id: "3.1",
        title: "Boolean Expressions & Conditional Statements",
        description: "Formulate compound statements using logical AND/OR and structure nesting.",
        youtubeId: "O5nskjZ_GoI",
        article: `
# Conditional Logic

Conditional statements control code execution:
- **Logical AND (\`&&\`)**: Evaluates to true only if both operands are true.
- **Logical OR (\`||\`)**: Evaluates to true if at least one operand is true.
- **Logical NOT (\`!\`)**: Inverts boolean values.
- **De Morgan's Laws**:
  - \`!(A && B)\` is equivalent to \`!A || !B\`
  - \`!(A || B)\` is equivalent to \`!A && !B\`
`,
        questions: [
          {
            id: "q_csa_3.1.1",
            unitId: 3,
            text: "According to De Morgan's Laws, the expression \`!(x > 3 && y == 4)\` is equivalent to which of the following?",
            options: [
              "\`x <= 3 && y != 4\`",
              "\`x <= 3 || y != 4\`",
              "\`x > 3 || y != 4\`",
              "\`x <= 3 || y == 4\`"
            ],
            correctIndex: 1,
            hint: "Distribute the NOT operator, flipping the AND to an OR.",
            explanation: "De Morgan's Laws dictate that \`!(A && B)\` becomes \`!A || !B\`. Since \`!(x > 3)\` is \`x <= 3\` and \`!(y == 4)\` is \`y != 4\`, the result is \`x <= 3 || y != 4\`."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Classes & Inheritance",
    masteryWeight: "15%",
    topics: [
      {
        id: "4.1",
        title: "Constructors, Methods & Polymorphism",
        description: "Formulate sub-classes and implement method overriding.",
        youtubeId: "O5nskjZ_GoI",
        article: `
# Classes and Inheritance

Inheritance establishes a superclass/subclass relationship ("is-a" relationship):
- **Super Keyword**: Calls constructors or overridden methods of the parent class:
  \`\`\`java
  super(); // calls parent constructor
  \`\`\`
- **Method Overriding**: Declaring a method in a subclass that has the same signature as a method in the superclass.
- **Polymorphism**: An object of a subclass can be assigned to a reference variable of the superclass.
`,
        questions: [
          {
            id: "q_csa_4.1.1",
            unitId: 4,
            text: "Which keyword is used to call a superclass constructor from inside a subclass constructor?",
            options: ["\`this\`", "\`super\`", "\`parent\`", "\`extends\`"],
            correctIndex: 1,
            hint: "Must be the very first statement inside the subclass constructor.",
            explanation: "The \`super\` keyword is used to call the superclass's constructor."
          }
        ]
      }
    ]
  }
];

export const courseRegistry: Record<string, CourseMetadata> = {
  "ap-biology": {
    slug: "ap-biology",
    name: "AP Biology",
    category: "STEM & Sciences",
    accentColor: "#22c55e",
    glowColor: "rgba(34, 197, 148, 0.2)",
    textColor: "text-medical-teal",
    bgGlow: "bg-medical-teal/20",
    gradientFrom: "from-[#008080]",
    gradientTo: "to-[#004d4d]",
    bgGradient: "from-[#008080] to-[#004d4d]",
    masteryPrefix: "ap-bio",
    units: apBiologyUnits,
  },
  "ap-chemistry": {
    slug: "ap-chemistry",
    name: "AP Chemistry",
    category: "STEM & Sciences",
    accentColor: "#00f2ff",
    glowColor: "rgba(0, 242, 255, 0.2)",
    textColor: "text-blue-400",
    bgGlow: "bg-blue-400/20",
    gradientFrom: "from-[#60a5fa]",
    gradientTo: "to-[#1e40af]",
    bgGradient: "from-[#60a5fa] to-[#1e40af]",
    masteryPrefix: "ap-chem",
    units: apChemistryUnits,
  },
  "ap-physics-c": {
    slug: "ap-physics-c",
    name: "AP Physics C",
    category: "STEM & Sciences",
    accentColor: "#818cf8",
    glowColor: "rgba(129, 140, 248, 0.2)",
    textColor: "text-indigo-400",
    bgGlow: "bg-indigo-400/20",
    gradientFrom: "from-[#818cf8]",
    gradientTo: "to-[#312e81]",
    bgGradient: "from-[#818cf8] to-[#312e81]",
    masteryPrefix: "ap-phys",
    units: apPhysicsUnits,
  },
  "ap-ush": {
    slug: "ap-ush",
    name: "AP US History",
    category: "Humanities & Arts",
    accentColor: "#fbbf24",
    glowColor: "rgba(251, 191, 36, 0.2)",
    textColor: "text-amber-400",
    bgGlow: "bg-amber-400/20",
    gradientFrom: "from-[#fbbf24]",
    gradientTo: "to-[#78350f]",
    bgGradient: "from-[#fbbf24] to-[#78350f]",
    masteryPrefix: "ap-ush",
    units: apUshUnits,
  },
  "ap-psych": {
    slug: "ap-psych",
    name: "AP Psychology",
    category: "Humanities & Arts",
    accentColor: "#7b39fc",
    glowColor: "rgba(123, 57, 252, 0.2)",
    textColor: "text-primary-purple",
    bgGlow: "bg-primary-purple/20",
    gradientFrom: "from-[#7b39fc]",
    gradientTo: "to-[#2b2344]",
    bgGradient: "from-[#7b39fc] to-[#2b2344]",
    masteryPrefix: "ap-psych",
    units: apPsychUnits,
  },
  "ap-eng-lang": {
    slug: "ap-eng-lang",
    name: "AP English Lang",
    category: "Humanities & Arts",
    accentColor: "#fb7185",
    glowColor: "rgba(251, 113, 133, 0.2)",
    textColor: "text-rose-400",
    bgGlow: "bg-rose-400/20",
    gradientFrom: "from-[#fb7185]",
    gradientTo: "to-[#881337]",
    bgGradient: "from-[#fb7185] to-[#881337]",
    masteryPrefix: "ap-eng",
    units: apEngLangUnits,
  },
  "ap-calc-bc": {
    slug: "ap-calc-bc",
    name: "AP Calculus BC",
    category: "Mathematical Logic",
    accentColor: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.2)",
    textColor: "text-emerald-400",
    bgGlow: "bg-emerald-400/20",
    gradientFrom: "from-[#34d399]",
    gradientTo: "to-[#064e3b]",
    bgGradient: "from-[#34d399] to-[#064e3b]",
    masteryPrefix: "ap-calc",
    units: apCalcUnits,
  },
  "ap-stats": {
    slug: "ap-stats",
    name: "AP Statistics",
    category: "Mathematical Logic",
    accentColor: "#38bdf8",
    glowColor: "rgba(56, 189, 248, 0.2)",
    textColor: "text-sky-400",
    bgGlow: "bg-sky-400/20",
    gradientFrom: "from-[#38bdf8]",
    gradientTo: "to-[#0c4a6e]",
    bgGradient: "from-[#38bdf8] to-[#0c4a6e]",
    masteryPrefix: "ap-stats",
    units: apStatsUnits,
  },
  "ap-csa": {
    slug: "ap-csa",
    name: "AP Comp Sci A",
    category: "Mathematical Logic",
    accentColor: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.2)",
    textColor: "text-violet-400",
    bgGlow: "bg-violet-400/20",
    gradientFrom: "from-[#a78bfa]",
    gradientTo: "to-[#4c1d95]",
    bgGradient: "from-[#a78bfa] to-[#4c1d95]",
    masteryPrefix: "ap-csa",
    units: apCsaUnits,
  },
};

export function getCourseData(slug: string): CourseMetadata | undefined {
  return courseRegistry[slug];
}
