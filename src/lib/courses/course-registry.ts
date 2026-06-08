import { apChemistryData } from "./ap-chemistry-data";
import { apBiologyData } from "./ap-biology-data";

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

// High-yield Mock Course Data for the 7 new subjects
const apPhysicsUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Kinematics",
    masteryWeight: "14–20%",
    topics: [
      {
        id: "1.1",
        title: "Motion in One Dimension",
        description: "Analyze velocity, acceleration, and position as derivatives.",
        youtubeId: "mN22tL1vY4k",
        article: `
# Motion in One Dimension

Kinematics describes motion without considering its forces. In calculus-based physics, position $x(t)$, velocity $v(t)$, and acceleration $a(t)$ are linked by derivatives and integrals:

## Differential Kinematics
- Velocity is the first derivative of position:
  $$v(t) = \\frac{dx}{dt}$$
- Acceleration is the first derivative of velocity and the second derivative of position:
  $$a(t) = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$$

## Integral Kinematics
- To find velocity from acceleration:
  $$v(t) = v_0 + \\int_{0}^{t} a(t') dt'$$
- To find position from velocity:
  $$x(t) = x_0 + \\int_{0}^{t} v(t') dt'$$
`,
        questions: [
          {
            id: "q_phys_1.1.1",
            unitId: 1,
            text: "A particle's position is given by $x(t) = 3t^2 - 4t + 2$. What is its velocity at $t = 2$ seconds?",
            options: ["4 m/s", "6 m/s", "8 m/s", "10 m/s"],
            correctIndex: 2,
            hint: "Differentiate $x(t)$ with respect to $t$.",
            explanation: "Velocity is $v(t) = \\frac{dx}{dt} = 6t - 4$. At $t = 2$, $v(2) = 6(2) - 4 = 8\\text{ m/s}$."
          },
          {
            id: "q_phys_1.1.2",
            unitId: 1,
            text: "Which derivative of position yields acceleration?",
            options: ["First derivative", "Second derivative", "Third derivative", "Integral of position"],
            correctIndex: 1,
            hint: "Acceleration is the rate of change of velocity.",
            explanation: "Acceleration is the second derivative of position, $a(t) = \\frac{d^2x}{dt^2}$."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Newton's Laws of Motion",
    masteryWeight: "17–23%",
    topics: [
      {
        id: "2.1",
        title: "Systems and Friction",
        description: "Analyze force interactions, static and kinetic friction, and inclined planes.",
        youtubeId: "x0S1h4a0x9U",
        article: `
# Systems and Friction

Newton's Second Law state that the net force on a system equals the mass times acceleration:
$$\\Sigma \\vec{F} = m \\vec{a}$$

## Friction Forces
Friction is modeled as proportional to the Normal force $F_N$:
- **Static Friction**: Resists initial movement, variable up to a maximum:
  $$F_f \\le \\mu_s F_N$$
- **Kinetic Friction**: Occurs when surfaces slide:
  $$F_f = \\mu_k F_N$$
`,
        questions: [
          {
            id: "q_phys_2.1.1",
            unitId: 2,
            text: "A block of mass $m$ sits at rest on a rough inclined plane of angle $\\theta$. What is the magnitude of the static friction force?",
            options: ["$mg \\cos\\theta$", "$mg \\sin\\theta$", "$\\mu_s mg$", "$\\mu_s mg \\cos\\theta$"],
            correctIndex: 1,
            hint: "Consider the forces parallel to the incline.",
            explanation: "Since the block is at rest, the static friction force balances the component of gravity down the incline, which is $mg \\sin\\theta$."
          }
        ]
      }
    ]
  }
];

const apUshUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Period 1: 1491–1607",
    masteryWeight: "5%",
    topics: [
      {
        id: "1.1",
        title: "Demographics and Native Societies",
        description: "Native American cultures prior to European contact.",
        youtubeId: "r2T1F4bH50s",
        article: `
# Demographics and Native Societies

Prior to European arrival in 1492, the Americas were home to diverse indigenous societies:
- **Great Plains/Great Basin**: Mobile lifestyles due to lack of resources.
- **Southwest**: Pueblo societies with complex irrigation and maize cultivation.
- **Northeast/Atlantic Seaboard**: Mix of agricultural and hunter-gatherer economies, notably the Iroquois Confederacy.
`,
        questions: [
          {
            id: "q_ush_1.1.1",
            unitId: 1,
            text: "Which region's native societies relied heavily on maize cultivation and advanced irrigation systems prior to European arrival?",
            options: ["Great Basin", "Southwest", "Great Plains", "Northwest coast"],
            correctIndex: 1,
            hint: "Pueblo peoples are highly famous for this cultivation.",
            explanation: "Southwest Native societies developed complex irrigation systems to support maize cultivation in arid climates."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Period 2: 1607–1754",
    masteryWeight: "10%",
    topics: [
      {
        id: "2.1",
        title: "Colonial Development patterns",
        description: "Compare Spanish, French, Dutch, and British colonization schemes.",
        youtubeId: "D7i81Xk3H-o",
        article: `
# Colonial Development Patterns

European powers had diverse motives and colonial structures:
- **Spanish**: Extract mineral wealth and convert natives via the Encomienda system.
- **French & Dutch**: Focused on the fur trade, establishing peaceful trade relations.
- **British**: Sought permanent agricultural settlement, resulting in demographic growth and conflicts with natives.
`,
        questions: [
          {
            id: "q_ush_2.1.1",
            unitId: 2,
            text: "Which European power's colonial strategy focused primarily on trade alliances and intermarriage to control the fur trade?",
            options: ["Spain", "Great Britain", "France", "Portugal"],
            correctIndex: 2,
            hint: "This power established Quebec and traded along the Mississippi.",
            explanation: "The French focused heavily on trade alliances, particularly in fur trading, and maintained amicable relations with Native tribes."
          }
        ]
      }
    ]
  }
];

const apPsychUnits: CourseUnit[] = [
  {
    id: 1,
    title: "Scientific Foundations",
    masteryWeight: "10–14%",
    topics: [
      {
        id: "1.1",
        title: "Research Methods in Psychology",
        description: "Understand experimental design, correlation, and ethical variables.",
        youtubeId: "hFV71QPvX2I",
        article: `
# Research Methods in Psychology

Psychology uses scientific methods to investigate behavior:
- **Experiments**: The only method that establishes **cause-and-effect** by manipulating an independent variable.
- **Correlational Studies**: Measure relationships, but **correlation does not imply causation**.
- **Case Studies**: In-depth analysis of a single individual or small group.
`,
        questions: [
          {
            id: "q_psych_1.1.1",
            unitId: 1,
            text: "Which research design is the only one capable of proving cause-and-effect relationships?",
            options: ["Naturalistic Observation", "Correlational Study", "Controlled Experiment", "Survey Method"],
            correctIndex: 2,
            hint: "Requires manipulation of variables and random assignment.",
            explanation: "Controlled experiments isolate and manipulate independent variables to establish cause-and-effect."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Biological Bases of Behavior",
    masteryWeight: "8–10%",
    topics: [
      {
        id: "2.1",
        title: "Neural Transmission and the Brain",
        description: "Structure of neurons and synaptic communication.",
        youtubeId: "VyT9vKxMwXY",
        article: `
# Neural Transmission and the Brain

Information travels through a neuron electrically and between neurons chemically:
- **Action Potential**: An all-or-none electrical impulse that travels down the axon.
- **Neurotransmitters**: Chemical messengers released into the synapse (e.g., Dopamine, Serotonin).
`,
        questions: [
          {
            id: "q_psych_2.1.1",
            unitId: 2,
            text: "What is the primary electrical signal that propagates down the axon of a neuron?",
            options: ["Resting Potential", "Action Potential", "Synaptic Cleft", "Neurotransmitter Release"],
            correctIndex: 1,
            hint: "Follows an 'all-or-none' law.",
            explanation: "The action potential is the brief electrical charge that travels down an axon."
          }
        ]
      }
    ]
  }
];

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
        youtubeId: "o58pQk2k0m0",
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
        youtubeId: "mN22tL1vY4k",
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
        youtubeId: "3d6DsjIBzJ4",
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
        youtubeId: "x0S1h4a0x9U",
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
        youtubeId: "4ekASokKgT0",
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
        youtubeId: "EowJsC7phzw",
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
