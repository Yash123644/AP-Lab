const fs = require('fs');
const path = require('path');

// Load the compiled data
const dataModule = require('./compile/ap-biology-data.js');
const originalData = dataModule.apBiologyData;

// Define consolidation mapping with updated YouTube video IDs
const mapping = {
  1: [
    { newId: "1.1", title: "Water Chemistry and the Elements of Life", originalIds: ["1.1", "1.2"], youtubeId: "3jwAGWky98c" },
    { newId: "1.2", title: "Structure and Properties of Biological Macromolecules", originalIds: ["1.3", "1.4"], youtubeId: "QWf2jcznLsY" },
    { newId: "1.3", title: "Nucleic Acids: Structure, Chemistry, and Information", originalIds: ["1.5"], youtubeId: "NNASRkIU5Fw" }
  ],
  2: [
    { newId: "2.1", title: "Subcellular Components and Cell Size Optimization", originalIds: ["2.1", "2.2", "2.3"], youtubeId: "URUJD5NEXC8" },
    { newId: "2.2", title: "Cell Membrane Structure and Transport Mechanisms", originalIds: ["2.4", "2.5", "2.6", "2.8"], youtubeId: "Ptmlvtei8hw" },
    { newId: "2.3", title: "Tonicity, Osmoregulation, and Cell Compartmentalization", originalIds: ["2.7", "2.9", "2.10"], youtubeId: "rMa9MzP19zI" }
  ],
  3: [
    { newId: "3.1", title: "Enzyme Structure, Catalysis, and Regulation", originalIds: ["3.1", "3.2", "3.3"], youtubeId: "OK5SqJ5yY8g" },
    { newId: "3.2", title: "Cellular Energy, ATP, and Photosynthesis", originalIds: ["3.4", "3.5"], youtubeId: "g78utcLQrJ4" },
    { newId: "3.3", title: "Cellular Respiration, Fermentation, and Fitness", originalIds: ["3.6", "3.7"], youtubeId: "4Eo7JtRA7lg" }
  ],
  4: [
    { newId: "4.1", title: "Cell Communication and Signal Transduction Pathways", originalIds: ["4.1", "4.2", "4.3", "4.4"], youtubeId: "qYVPZl8-92c" },
    { newId: "4.2", title: "Feedback Mechanisms and Homeostasis", originalIds: ["4.5"], youtubeId: "Iz0Q9nTZCw4" },
    { newId: "4.3", title: "Cell Cycle, Mitosis, and Regulation", originalIds: ["4.6", "4.7"], youtubeId: "L0k-enzoeOM" }
  ],
  5: [
    { newId: "5.1", title: "Meiosis and the Origins of Genetic Diversity", originalIds: ["5.1", "5.2"], youtubeId: "VzDMG7ke69g" },
    { newId: "5.2", title: "Mendelian, Non-Mendelian, and Environmental Genetics", originalIds: ["5.3", "5.4", "5.5"], youtubeId: "q6qtSeWp0Yw" },
    { newId: "5.3", title: "Chromosomal Inheritance, Linkage, and Recombination", originalIds: ["5.6"], youtubeId: "KaxSDryqB6M" }
  ],
  6: [
    { newId: "6.1", title: "DNA/RNA Structure and Replication Mechanisms", originalIds: ["6.1", "6.2"], youtubeId: "8kK2zwjRV0M" },
    { newId: "6.2", title: "Transcription, RNA Processing, and Translation", originalIds: ["6.3", "6.4"], youtubeId: "oefAI2x2CQM" },
    { newId: "6.3", title: "Regulation of Gene Expression, Mutations, and Biotechnology", originalIds: ["6.5", "6.6", "6.7", "6.8"], youtubeId: "hD1-9e7G4Wk" }
  ],
  7: [
    { newId: "7.1", title: "Principles of Natural Selection and Population Genetics", originalIds: ["7.1", "7.2", "7.3", "7.4"], youtubeId: "7VM9YxmULuo" },
    { newId: "7.2", title: "Hardy-Weinberg Equilibrium and Evolution", originalIds: ["7.5"], youtubeId: "oG7ob-MtO8c" },
    { newId: "7.3", title: "Evidence of Evolution, Common Ancestry, and Phylogeny", originalIds: ["7.6", "7.7", "7.8", "7.9"], youtubeId: "iT1J9_2_L_s" },
    { newId: "7.4", title: "Speciation, Extinction, and the Origin of Life", originalIds: ["7.10", "7.11", "7.12", "7.13"], youtubeId: "rlfe-ID_GxY" }
  ],
  8: [
    { newId: "8.1", title: "Responses to the Environment and Ecosystem Energy Flow", originalIds: ["8.1", "8.2"], youtubeId: "swYvnMXi58I" },
    { newId: "8.2", title: "Population and Community Ecology", originalIds: ["8.3", "8.4", "8.5"], youtubeId: "rXlyYFXyfIM" },
    { newId: "8.3", title: "Biodiversity, Resilience, and Ecosystem Disruptions", originalIds: ["8.6", "8.7"], youtubeId: "GxE1SSqbSn4" }
  ]
};

// Define 5 additional questions for the single-origin topics so they have at least 10 questions in total
const extraQuestions = {
  "1.3": [
    {
      text: "Which of the following best describes the structural differences between DNA and RNA?",
      options: [
        "DNA contains uracil and ribose, whereas RNA contains thymine and deoxyribose.",
        "DNA contains thymine and deoxyribose, whereas RNA contains uracil and ribose.",
        "DNA is single-stranded and contains adenine, whereas RNA is double-stranded and contains guanine.",
        "DNA contains a phosphate group, whereas RNA lacks a phosphate group."
      ],
      correctIndex: 1,
      explanation: "DNA features deoxyribose sugar and thymine nitrogenous base, while RNA features ribose sugar and uracil nitrogenous base."
    },
    {
      text: "During DNA replication, which enzyme is responsible for unwinding the double helix at the replication fork?",
      options: [
        "DNA Polymerase",
        "RNA Primase",
        "DNA Ligase",
        "DNA Helicase"
      ],
      correctIndex: 3,
      explanation: "DNA Helicase breaks the hydrogen bonds between the complementary base pairs to unwind and separate the two strands of DNA."
    },
    {
      text: "What type of chemical bond holds the complementary nitrogenous bases together across the double helix of a DNA molecule?",
      options: [
        "Covalent peptide bonds",
        "Nonpolar covalent bonds",
        "Hydrogen bonds",
        "Ionic phosphodiester bonds"
      ],
      correctIndex: 2,
      explanation: "Hydrogen bonds form between complementary nitrogenous bases (adenine to thymine, guanine to cytosine) to stabilize the double-stranded structure of DNA."
    },
    {
      text: "If a double-stranded DNA sample is found to consist of 30% adenine, what is the expected percentage of cytosine in this sample?",
      options: [
        "20%",
        "30%",
        "40%",
        "70%"
      ],
      correctIndex: 0,
      explanation: "Under Chargaff's rules, Adenine = Thymine (30% each = 60% total). The remaining 40% is split equally between Guanine and Cytosine (20% each)."
    },
    {
      text: "Which of the following describes the directionality and orientation of the two complementary strands of DNA?",
      options: [
        "They are parallel, both running in the 5' to 3' direction.",
        "They are parallel, both running in the 3' to 5' direction.",
        "They are antiparallel, with one strand running 5' to 3' and the other 3' to 5'.",
        "They are perpendicular, forming a cross-braced structure."
      ],
      correctIndex: 2,
      explanation: "DNA strands are antiparallel, meaning they run in opposite directions relative to one another (one 5'-to-3', the other 3'-to-5')."
    }
  ],
  "4.2": [
    {
      text: "Which of the following physiological processes is governed by a positive feedback loop?",
      options: [
        "Thermoregulation via sweating and vasodilation",
        "Blood glucose regulation via insulin release",
        "Oxytocin release leading to uterine contractions during childbirth",
        "Osmoregulation via antidiuretic hormone (ADH) secretion"
      ],
      correctIndex: 2,
      explanation: "Uterine contractions trigger the release of oxytocin, which stimulates further contractions in an amplifying loop until childbirth is complete."
    },
    {
      text: "How does the body maintain homeostasis in response to a drop in external temperature via negative feedback?",
      options: [
        "It initiates sweating and vasodilation to dump heat.",
        "It triggers shivering and vasoconstriction to conserve and generate heat.",
        "It slows down metabolic rate to conserve cellular energy.",
        "It releases glucagon to break down fat reserves."
      ],
      correctIndex: 1,
      explanation: "Shivering generates metabolic heat and vasoconstriction reduces blood flow to the skin, buffering body temperature back to the set point."
    },
    {
      text: "In blood glucose regulation, what is the action of insulin released by beta cells in response to high blood sugar?",
      options: [
        "It signals liver cells to release stored glycogen into the bloodstream.",
        "It signals body cells and the liver to take up glucose, lowering blood glucose levels.",
        "It stimulates glucagon production in the liver.",
        "It triggers adrenaline release to speed up respiration."
      ],
      correctIndex: 1,
      explanation: "Insulin promotes the uptake of glucose by somatic cells and the conversion of glucose into glycogen in the liver, bringing blood sugar down."
    },
    {
      text: "What is the primary characteristic of a negative feedback mechanism in biological systems?",
      options: [
        "It amplifies deviations from a set point, driving the system to an extreme.",
        "It shuts down the system entirely when a set point is reached.",
        "It counters deviations from a set point, bringing the variable back toward the normal range.",
        "It operates only under highly stressful environmental conditions."
      ],
      correctIndex: 2,
      explanation: "Negative feedback acts to reverse or dampen a stimulus, returning the variable (like body temperature or pH) back to its set point."
    },
    {
      text: "Which hormone is secreted by the pancreas when blood glucose levels fall below the homeostatic set point?",
      options: [
        "Insulin",
        "Thyroxine",
        "Glucagon",
        "Epinephrine"
      ],
      correctIndex: 2,
      explanation: "Alpha cells of the pancreas secrete glucagon, which signals the liver to break down glycogen into glucose and release it into the blood."
    }
  ],
  "5.3": [
    {
      text: "What does a recombination frequency of 50% between two genes on a chromosome indicate?",
      options: [
        "The two genes are extremely close together and always inherit together.",
        "The two genes behave as if they are unlinked, either on different chromosomes or very far apart on the same chromosome.",
        "A lethal mutation has occurred during crossing over.",
        "The genes are sex-linked and located on the X chromosome."
      ],
      correctIndex: 1,
      explanation: "A recombination frequency of 50% is the maximum possible, indicating that independent assortment occurs and the genes are physically unlinked."
    },
    {
      text: "A cross between a red-eyed female fruit fly and a white-eyed male results in all red-eyed offspring. What does this suggest about the red-eye allele?",
      options: [
        "The red-eye allele is recessive and sex-linked.",
        "The red-eye allele is dominant and autosomal or sex-linked.",
        "The white-eye allele is codominant.",
        "Both alleles are autosomal codominant."
      ],
      correctIndex: 1,
      explanation: "Because all offspring are red-eyed, the red-eye phenotype is dominant over white-eyes."
    },
    {
      text: "Why are sex-linked recessive genetic disorders (like hemophilia) significantly more common in human males than females?",
      options: [
        "Males have two X chromosomes, increasing their chance of expressing the trait.",
        "Males have only one X chromosome, so they express whichever allele is present on it.",
        "The Y chromosome contains a dominant inhibitor gene.",
        "Spermatogenesis is more susceptible to genetic mutations."
      ],
      correctIndex: 1,
      explanation: "Males are hemizygous (XY). Since they only inherit one X chromosome, they do not have a backup allele to mask a recessive trait on it."
    },
    {
      text: "What molecular event during meiosis I is responsible for the recombination of alleles between linked genes?",
      options: [
        "Independent assortment during Metaphase I",
        "Sister chromatid segregation during Anaphase II",
        "Crossing over between homologous chromosomes during Prophase I",
        "Centromere cleavage by enzyme separase"
      ],
      correctIndex: 2,
      explanation: "Crossing over (synapses) in Prophase I allows homologous chromatids to break and swap corresponding segments, separating alleles of linked genes."
    },
    {
      text: "If two genes A and B show a recombination frequency of 12% in testcross offspring, how many map units (centimorgans) apart are they on the chromosome?",
      options: [
        "6 map units",
        "12 map units",
        "24 map units",
        "50 map units"
      ],
      correctIndex: 1,
      explanation: "Recombination frequency is directly proportional to map units; 1% recombination frequency equals 1 map unit (cM). Hence, 12% equals 12 map units."
    }
  ],
  "7.2": [
    {
      text: "Which of the following is NOT one of the five conditions required for a population to remain in Hardy-Weinberg equilibrium?",
      options: [
        "No mutation",
        "Random mating",
        "Small population size",
        "No natural selection"
      ],
      correctIndex: 2,
      explanation: "An extremely LARGE population size is required to minimize the effects of genetic drift (random sampling changes)."
    },
    {
      text: "In a population in Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.4. What is the expected frequency of heterozygous individuals (2pq)?",
      options: [
        "0.16",
        "0.36",
        "0.48",
        "0.60"
      ],
      correctIndex: 2,
      explanation: "Since p + q = 1, p = 0.6. The frequency of heterozygotes is 2pq = 2(0.6)(0.4) = 0.48."
    },
    {
      text: "If the frequency of the dominant phenotype in a Hardy-Weinberg population is 84%, what is the frequency of the recessive allele (q)?",
      options: [
        "0.16",
        "0.40",
        "0.60",
        "0.84"
      ],
      correctIndex: 1,
      explanation: "The frequency of the recessive phenotype (q^2) is 100% - 84% = 16% (0.16). Taking the square root gives the recessive allele frequency q = 0.4."
    },
    {
      text: "If a researcher monitors a wild population and finds that allele frequencies shift significantly over three generations, what can be concluded?",
      options: [
        "The population is in genetic equilibrium.",
        "The population is undergoing evolutionary changes.",
        "Mutations have ceased completely.",
        "Natural selection is selecting for heterozygous individuals exclusively."
      ],
      correctIndex: 1,
      explanation: "Hardy-Weinberg equilibrium means allele frequencies stay constant. A change in frequencies over generations is the literal definition of evolution."
    },
    {
      text: "Which evolutionary mechanism describes a sudden, drastic reduction in population size due to a natural disaster, leading to randomized allele frequency changes?",
      options: [
        "Founder effect",
        "Bottleneck effect",
        "Gene flow",
        "Directional selection"
      ],
      correctIndex: 1,
      explanation: "A bottleneck effect occurs when a population size is severely reduced by an event, leaving a small sample of survivors that is unrepresentative of original allele frequencies."
    }
  ]
};

// Function to process and combine articles
function combineArticles(originalTopics, newTitle) {
  let combined = `# ${newTitle}\n\n`;

  originalTopics.forEach((topic, idx) => {
    let art = topic.article.trim();
    let lines = art.split('\n');
    let titleHeader = '';
    if (lines[0].startsWith('# ')) {
      titleHeader = lines[0].substring(2).trim();
      lines.shift();
    } else if (lines[0].trim() === '' && lines[1] && lines[1].startsWith('# ')) {
      titleHeader = lines[1].substring(2).trim();
      lines.splice(0, 2);
    }
    
    let processedArt = lines.join('\n').trim();
    processedArt = processedArt.replace(/## /g, '### ');
    
    if (titleHeader) {
      combined += `## ${titleHeader}\n\n${processedArt}\n\n`;
    } else {
      combined += `${processedArt}\n\n`;
    }
  });

  return combined.trim();
}

// Function to select exactly 10 questions per topic
function selectQuestions(originalTopics, newTopicId, newUnitId) {
  let allQs = [];
  originalTopics.forEach(t => {
    if (t.questions && Array.isArray(t.questions)) {
      allQs.push(...t.questions);
    }
  });

  let selected = [];
  if (allQs.length <= 10) {
    selected = [...allQs];
  } else {
    // Select 10 questions evenly spread out
    let step = allQs.length / 10;
    for (let i = 0; i < 10; i++) {
      let idx = Math.min(Math.floor(i * step), allQs.length - 1);
      selected.push(allQs[idx]);
    }
  }

  // Inject extra questions if topic has less than 10 questions
  if (selected.length < 10 && extraQuestions[newTopicId]) {
    const extra = extraQuestions[newTopicId];
    selected = [...selected, ...extra].slice(0, 10);
  }

  // Map to format
  return selected.map((q, idx) => ({
    id: `${newTopicId}.${idx + 1}`,
    text: q.text,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    unitId: newUnitId
  }));
}

// Perform consolidation
const consolidatedUnits = originalData.map(unit => {
  const unitMapping = mapping[unit.id];
  if (!unitMapping) {
    console.warn(`No mapping for unit ${unit.id}`);
    return unit;
  }

  const consolidatedTopics = unitMapping.map(mapConfig => {
    const matchedTopics = mapConfig.originalIds.map(origId => {
      const topic = unit.topics.find(t => t.id === origId);
      return topic;
    }).filter(Boolean);

    const description = matchedTopics.map(t => t.description).join(' ');
    const article = combineArticles(matchedTopics, mapConfig.title);
    const questions = selectQuestions(matchedTopics, mapConfig.newId, unit.id);

    const imageTopic = matchedTopics.find(t => t.image);
    const image = imageTopic ? imageTopic.image : undefined;

    return {
      id: mapConfig.newId,
      title: mapConfig.title,
      description: description,
      youtubeId: mapConfig.youtubeId,
      image: image,
      article: article,
      questions: questions
    };
  });

  return {
    id: unit.id,
    title: unit.title,
    masteryWeight: unit.masteryWeight,
    topics: consolidatedTopics
  };
});

// Write the output back into TypeScript format
let tsOutput = `export interface APBioQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  unitId: number;
}

export interface APBioTopic {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  image?: string;
  article: string;
  questions: APBioQuestion[];
}

export interface APBioUnit {
  id: number;
  title: string;
  masteryWeight: string;
  topics: APBioTopic[];
}

export const apBiologyData: APBioUnit[] = [\n`;

consolidatedUnits.forEach((unit, uIdx) => {
  tsOutput += `  {\n`;
  tsOutput += `    id: ${unit.id},\n`;
  tsOutput += `    title: ${JSON.stringify(unit.title)},\n`;
  tsOutput += `    masteryWeight: ${JSON.stringify(unit.masteryWeight)},\n`;
  tsOutput += `    topics: [\n`;

  unit.topics.forEach((topic, tIdx) => {
    tsOutput += `      {\n`;
    tsOutput += `        id: ${JSON.stringify(topic.id)},\n`;
    tsOutput += `        title: ${JSON.stringify(topic.title)},\n`;
    tsOutput += `        description: ${JSON.stringify(topic.description)},\n`;
    tsOutput += `        youtubeId: ${JSON.stringify(topic.youtubeId)},\n`;
    if (topic.image) {
      tsOutput += `        image: ${JSON.stringify(topic.image)},\n`;
    }
    
    let escapedArticle = topic.article
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`');

    tsOutput += `        article: \`\n${escapedArticle}\n\`,\n`;
    
    tsOutput += `        questions: [\n`;
    topic.questions.forEach((q, qIdx) => {
      tsOutput += `          {\n`;
      tsOutput += `            id: ${JSON.stringify(q.id)},\n`;
      tsOutput += `            text: ${JSON.stringify(q.text)},\n`;
      tsOutput += `            options: ${JSON.stringify(q.options)},\n`;
      tsOutput += `            correctIndex: ${q.correctIndex},\n`;
      tsOutput += `            explanation: ${JSON.stringify(q.explanation)},\n`;
      tsOutput += `            unitId: ${q.unitId}\n`;
      tsOutput += `          }${qIdx < topic.questions.length - 1 ? ',' : ''}\n`;
    });
    tsOutput += `        ]\n`;

    tsOutput += `      }${tIdx < unit.topics.length - 1 ? ',' : ''}\n`;
  });

  tsOutput += `    ]\n`;
  tsOutput += `  }${uIdx < consolidatedUnits.length - 1 ? ',' : ''}\n`;
});

tsOutput += `];\n`;

fs.writeFileSync('src/lib/courses/ap-biology-data.ts', tsOutput);
console.log("Successfully consolidated AP Biology data file with disjoint questions!");
