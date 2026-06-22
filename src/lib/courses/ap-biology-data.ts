export interface APBioQuestion {
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

export const apBiologyData: APBioUnit[] = [
  {
    id: 1,
    title: "Chemistry of Life",
    masteryWeight: "8–11%",
    topics: [
      {
        id: "1.1",
        title: "Structure of Water and Hydrogen Bonding",
        description: "Explore the molecular structure of water and its life-sustaining properties.",
        youtubeId: "ASLUY2U1krc",
        image: "/images/biology/water_diagram.png",
        article: `
# Structure of Water and Hydrogen Bonding

Water ($H_2O$) is the fundamental solvent of life. Its unique properties arise from its <vocab term="Polarity" definition="The unequal distribution of electron density in a molecule, resulting in partial positive and negative charges.">polarity</vocab> and the resulting **hydrogen bonding**.

## Molecular Polarity
In a water molecule, the oxygen atom is more <vocab term="Electronegativity" definition="A measure of the tendency of an atom to attract a bonding pair of electrons.">electronegative</vocab> than the hydrogen atoms. This causes an unequal distribution of electrons, resulting in a partial negative charge ($\\delta^-$) near the oxygen and partial positive charges ($\\delta^+$) near the hydrogens.

## Hydrogen Bonding
A hydrogen bond is a weak attraction between the $\\delta^+$ hydrogen of one water molecule and the $\\delta^-$ oxygen of another. While individual hydrogen bonds are weak, their collective strength gives water remarkable properties:
- **Cohesion**: Water molecules stick to each other.
- **Adhesion**: Water molecules stick to other polar surfaces.
- **Surface Tension**: The resistance of a liquid surface to external force.
- **High Specific Heat**: Water resists changes in temperature, stabilizing climates and internal environments.
- **Evaporative Cooling**: The hottest molecules leave as gas, cooling the remaining surface.
`,
        questions: [
          {
            id: "1.1.1",
            text: "Which property of water is most responsible for the movement of water from the roots to the leaves of a tall tree?",
            options: ["High specific heat", "Adhesion and cohesion", "Less dense as a solid", "Universal solvent"],
            correctIndex: 1,
            explanation: "Cohesion (water-water) and adhesion (water-xylem walls) work together through capillary action to pull water up against gravity.",
            unitId: 1
          },
          {
            id: "1.1.2",
            text: "Why does ice float on liquid water?",
            options: ["Ice is more dense", "Hydrogen bonds are more stable in ice", "Ice molecules move faster", "Covalent bonds break"],
            correctIndex: 1,
            explanation: "In ice, hydrogen bonds are stable and hold molecules in a crystalline lattice that is less dense than liquid water.",
            unitId: 1
          },
          {
            id: "1.1.3",
            text: "Which property allows water to resist drastic temperature changes?",
            options: ["Low density", "High specific heat", "Surface tension", "Solvent ability"],
            correctIndex: 1,
            explanation: "High specific heat means water absorbs much energy before increasing in temperature, protecting biological systems.",
            unitId: 1
          },
          {
            id: "1.1.4",
            text: "A water strider can walk on water due to:",
            options: ["Adhesion", "Cohesion and surface tension", "Specific heat", "Hydrolysis"],
            correctIndex: 1,
            explanation: "Surface tension, caused by cohesive hydrogen bonds, creates a 'skin' on the water surface.",
            unitId: 1
          },
          {
            id: "1.1.5",
            text: "What type of bond forms between two different water molecules?",
            options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Peptide bond"],
            correctIndex: 2,
            explanation: "Hydrogen bonds form between the partial charges of adjacent water molecules.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.5",
        title: "Structure of Nucleic Acids",
        description: "DNA and RNA structural differences and directionality.",
        youtubeId: "032sCo86Eew",
        article: `
# Structure of Nucleic Acids

Nucleic acids like DNA and RNA are polymers of nucleotides.

## Directionality
Nucleic acids have a 3' end and a 5' end. DNA is antiparallel, meaning the strands run in opposite directions.

## Differences
- **DNA**: Deoxyribose sugar, Thymine, double-stranded.
- **RNA**: Ribose sugar, Uracil, single-stranded.
`,
        questions: [
          {
            id: "1.5.1",
            text: "Which sugar is found in DNA?",
            options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"],
            correctIndex: 1,
            explanation: "DNA uses deoxyribose, which lacks one oxygen atom compared to ribose.",
            unitId: 1
          },
          {
            id: "1.5.2",
            text: "Which nitrogenous base is NOT found in RNA?",
            options: ["Adenine", "Guanine", "Thymine", "Uracil"],
            correctIndex: 2,
            explanation: "RNA uses Uracil instead of Thymine.",
            unitId: 1
          },
          {
            id: "1.5.3",
            text: "DNA strands are described as:",
            options: ["Parallel", "Antiparallel", "Unidirectional", "Weak"],
            correctIndex: 1,
            explanation: "They run in opposite 5' to 3' directions.",
            unitId: 1
          },
          {
            id: "1.5.4",
            text: "How many hydrogen bonds form between Guanine and Cytosine?",
            options: ["1", "2", "3", "4"],
            correctIndex: 2,
            explanation: "G-C pairs have 3 hydrogen bonds.",
            unitId: 1
          },
          {
            id: "1.5.5",
            text: "Which group is at the 3' end of a nucleic acid?",
            options: ["Phosphate", "Hydroxyl", "Nitrogen base", "Sugar"],
            correctIndex: 1,
            explanation: "The 3' carbon has a free -OH group.",
            unitId: 1
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Cell Structure and Function",
    masteryWeight: "10–13%",
    topics: [
      {
        id: "2.5",
        title: "Membrane Transport",
        description: "Passive and active mechanisms for moving molecules.",
        youtubeId: "dPKvHrD1eS4",
        article: `
# Membrane Transport

Molecules move across membranes via passive or active processes.

## Passive Transport
Movement down the concentration gradient without energy.
- **Simple Diffusion**: Small non-polar molecules.
- **Facilitated Diffusion**: Uses channel or carrier proteins for polar molecules.

## Active Transport
Movement against the gradient requiring energy (ATP).
- **Sodium-Potassium Pump**: Maintains membrane potential.
`,
        questions: [
          {
            id: "2.5.1",
            text: "Which process requires ATP?",
            options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"],
            correctIndex: 2,
            explanation: "Active transport moves molecules against their gradient.",
            unitId: 2
          },
          {
            id: "2.5.2",
            text: "The movement of water across a membrane is called:",
            options: ["Active transport", "Osmosis", "Taxis", "Exocytosis"],
            correctIndex: 1,
            explanation: "Osmosis is the diffusion of water.",
            unitId: 2
          },
          {
            id: "2.5.3",
            text: "Large polar molecules enter the cell via:",
            options: ["Simple diffusion", "Facilitated diffusion", "Endocytosis", "Either B or C"],
            correctIndex: 3,
            explanation: "They need help from proteins or membrane vesicles.",
            unitId: 2
          },
          {
            id: "2.5.4",
            text: "Oxygen enters a cell through:",
            options: ["Simple diffusion", "Active transport", "A pump", "Phagocytosis"],
            correctIndex: 0,
            explanation: "O2 is small and non-polar.",
            unitId: 2
          },
          {
            id: "2.5.5",
            text: "The Na+/K+ pump moves ions:",
            options: ["Down their gradient", "Against their gradient", "Without energy", "Into the nucleus"],
            correctIndex: 1,
            explanation: "Pumps are active transport mechanisms.",
            unitId: 2
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Cellular Energetics",
    masteryWeight: "12–16%",
    topics: [
      {
        id: "3.2",
        title: "Enzyme Catalysis",
        description: "Factors affecting the rate of biological reactions.",
        youtubeId: "qkUvD4gLscY",
        image: "/images/biology/enzyme_structure.png",
        article: `
# Enzyme Catalysis & Molecular Mechanisms

Enzymes are highly specialized proteins that act as biological catalysts. They accelerate chemical reactions by lowering the activation energy barrier without being consumed by the reaction itself.

## Enzyme-Substrate Mechanics
The reactant an enzyme acts upon is the **substrate**. It binds to a specific region on the enzyme called the **active site**, which is shaped and chemically tuned specifically for that substrate.
- **Induced Fit**: When a substrate binds, the enzyme undergoes a subtle conformational change, wrapping more tightly around the substrate to catalyze the reaction.
- **Activation Energy ($E_a$)**: The initial input of energy needed to start a reaction. Enzymes lower $E_a$ by aligning substrates, bending bonds, or providing a microenvironment favorable for catalysis. Crucially, they do not change the net free energy ($\\Delta G$) of the reaction.

## Factors Affecting Catalysis Rate
1. **Temperature**: Increasing temperature increases kinetic energy, causing more collisions between enzymes and substrates. However, exceeding the optimal temperature causes the enzyme to **denature** (lose its 3D shape and active site conformation).
2. **pH**: Deviations from the optimal pH alter the ionization of amino acid side chains, disrupting ionic bonds and denaturing the enzyme.
3. **Concentration**: Higher substrate or enzyme concentration increases reaction rate up to a **saturation point**, where all active sites are constantly occupied.

## Inhibition Mechanisms
- **<vocab term="Competitive Inhibition" definition="A form of enzyme inhibition where the inhibitor binds to the active site, preventing the substrate from binding.">Competitive Inhibitors</vocab>**: Molecules that compete directly with the substrate for binding at the active site. This can be overcome by increasing substrate concentration.
- **<vocab term="Non-competitive Inhibition" definition="Inhibition where the inhibitor binds to an allosteric site, changing the active site shape so the substrate cannot bind effectively.">Non-competitive (Allosteric) Inhibitors</vocab>**: Molecules that bind to a different location (allosteric site) and change the active site conformation, preventing catalysis regardless of substrate concentration.
`,
        questions: [
          {
            id: "3.2.1",
            text: "What happens to an enzyme's rate as substrate concentration increases indefinitely?",
            options: ["It increases forever", "It decreases", "It levels off (saturation)", "It stops"],
            correctIndex: 2,
            explanation: "At saturation, all active sites are busy.",
            unitId: 3
          },
          {
            id: "3.2.2",
            text: "Optimal pH for a stomach enzyme like pepsin is likely:",
            options: ["2", "7", "10", "14"],
            correctIndex: 0,
            explanation: "The stomach is highly acidic.",
            unitId: 3
          },
          {
            id: "3.2.3",
            text: "Denaturation disrupts which level of protein structure?",
            options: ["Primary", "Secondary/Tertiary", "Quaternary", "None"],
            correctIndex: 1,
            explanation: "The 3D shape is lost, but the amino acid sequence remains.",
            unitId: 3
          },
          {
            id: "3.2.4",
            text: "Competitive inhibitors bind to:",
            options: ["The active site", "An allosteric site", "The substrate", "The product"],
            correctIndex: 0,
            explanation: "They 'compete' for the active site.",
            unitId: 3
          },
          {
            id: "3.2.5",
            text: "Non-competitive inhibitors bind to:",
            options: ["The active site", "An allosteric site", "The substrate", "The product"],
            correctIndex: 1,
            explanation: "They change the enzyme's shape from elsewhere.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.5",
        title: "Photosynthesis and the Calvin Cycle",
        description: "Transforming light energy into chemical energy through light-dependent and light-independent processes.",
        youtubeId: "sQK3Yr4Sc_k",
        image: "/images/biology/calvin_cycle.png",
        article: `
# Photosynthesis & The Calvin Cycle

Photosynthesis converts solar energy into chemical energy stored in organic molecules. The overall balanced equation is:
$$6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2$$

## Light-Dependent Reactions
These reactions occur within the **thylakoid membranes** of chloroplasts:
- **Light Absorption**: Pigments (chlorophyll a and b) in Photosystems II and I absorb photons, exciting electrons.
- **Photolysis**: Water is split ($H_2O \\rightarrow 2H^+ + \\frac{1}{2}O_2 + 2e^-$) to replace lost electrons in Photosystem II, generating Oxygen ($O_2$) as a waste product.
- **Proton Gradient & ATP**: Excited electrons travel down an Electron Transport Chain (ETC). As they pass, protons are pumped into the thylakoid space. This electrochemical proton gradient drives the synthesis of ATP via **ATP Synthase** (photophosphorylation).
- **NADPH Production**: The final electron acceptor of the ETC is NADP+, which reduces to NADPH.

## Light-Independent Reactions (The Calvin Cycle)
This occurs in the **stroma** and uses the ATP and NADPH produced in the light reactions:
1. **Carbon Fixation**: The enzyme **RuBisCO** attaches $CO_2$ to a 5-carbon sugar (RuBP). The resulting 6-carbon intermediate splits into two 3-carbon molecules (3-PGA).
2. **Reduction**: ATP and NADPH reduce 3-PGA into **G3P** (a 3-carbon carbohydrate). For every six G3P produced, one leaves to form glucose.
3. **Regeneration**: The remaining five G3P molecules use ATP to regenerate RuBP, completing the cycle.
`,
        questions: [
          {
            id: "3.5.1",
            text: "Where do the light-dependent reactions of photosynthesis take place?",
            options: ["Stroma", "Thylakoid membrane", "Outer membrane", "Cytosol"],
            correctIndex: 1,
            explanation: "The light-dependent reactions happen in the thylakoid membrane where photosystems are located.",
            unitId: 3
          },
          {
            id: "3.5.2",
            text: "What is the primary role of water in the light-dependent reactions?",
            options: ["To provide carbon atoms", "To act as the final electron acceptor", "To provide electrons to replace those lost by PSII", "To absorb photons"],
            correctIndex: 2,
            explanation: "Water photolysis provides electrons to replace those excited out of Photosystem II.",
            unitId: 3
          },
          {
            id: "3.5.3",
            text: "Which enzyme is responsible for fixing carbon dioxide in the Calvin Cycle?",
            options: ["ATP Synthase", "RuBisCO", "Amylase", "PEP Carboxylase"],
            correctIndex: 1,
            explanation: "RuBisCO fixes CO2 by attaching it to RuBP in the stroma.",
            unitId: 3
          },
          {
            id: "3.5.4",
            text: "What are the primary products of the light reactions used to drive the Calvin Cycle?",
            options: ["Oxygen and Glucose", "Carbon Dioxide and Water", "ATP and NADPH", "NADP+ and ADP"],
            correctIndex: 2,
            explanation: "ATP and NADPH act as chemical energy inputs that drive the reduction and regeneration phases of the Calvin Cycle.",
            unitId: 3
          },
          {
            id: "3.5.5",
            text: "How many cycles of the Calvin Cycle (fixing one CO2 each) are required to produce one net G3P molecule?",
            options: ["1", "3", "6", "12"],
            correctIndex: 1,
            explanation: "G3P is a 3-carbon sugar, meaning 3 fixed CO2 molecules (and thus 3 turns of the cycle) are needed to produce one net G3P.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.6",
        title: "Cellular Respiration and the Electron Transport Chain",
        description: "Harvesting chemical energy from glucose through glycolysis, the Krebs cycle, and oxidative phosphorylation.",
        youtubeId: "00jbG_cfGuQ",
        image: "/images/biology/etc_diagram.png",
        article: `
# Cellular Respiration & Chemiosmosis

Cellular respiration extracts chemical energy from glucose and stores it in ATP. The overall balanced equation is:
$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{ATP}$$

## Key Stages
1. **Glycolysis** (Cytoplasm): Splits 1 glucose into 2 pyruvates, yielding a net of 2 ATP and 2 NADH. This process is anaerobic (does not require oxygen).
2. **Krebs Cycle** (Mitochondrial Matrix): Converts pyruvate to Acetyl-CoA, which enters the cycle. Releasing $CO_2$, the cycle yields 2 ATP, 6 NADH, and 2 $FADH_2$ per glucose molecule.
3. **Electron Transport Chain (ETC)** (Inner Mitochondrial Membrane):
   - NADH and $FADH_2$ deliver high-energy electrons to ETC protein complexes.
   - As electrons pass through the ETC, protons ($H^+$) are pumped from the matrix to the intermembrane space, creating an electrochemical gradient (proton motive force).
   - Oxygen ($O_2$) acts as the **final electron acceptor**, combining with protons and electrons to form water ($H_2O$).

## Chemiosmosis & ATP Synthesis
Protons flow back down their concentration gradient into the matrix through **ATP Synthase**. This proton flow causes the ATP Synthase rotor to spin, converting mechanical energy into chemical energy to phosphorylate ADP into ATP, yielding approximately 30-32 ATP per glucose molecule.
`,
        questions: [
          {
            id: "3.6.1",
            text: "Which stage of cellular respiration does NOT require oxygen?",
            options: ["Glycolysis", "Krebs Cycle", "Electron Transport Chain", "Oxidative Phosphorylation"],
            correctIndex: 0,
            explanation: "Glycolysis occurs in the cytosol and is anaerobic, not requiring oxygen.",
            unitId: 3
          },
          {
            id: "3.6.2",
            text: "What is the final electron acceptor in the mitochondrial electron transport chain?",
            options: ["NAD+", "FAD", "Oxygen (O2)", "Water (H2O)"],
            correctIndex: 2,
            explanation: "Oxygen acts as the terminal electron acceptor, combining with electrons and protons to form water.",
            unitId: 3
          },
          {
            id: "3.6.3",
            text: "Where are protons pumped to create the gradient that drives ATP Synthase?",
            options: ["Mitochondrial matrix", "Intermembrane space", "Inner membrane", "Cytosol"],
            correctIndex: 1,
            explanation: "Protons are pumped out of the matrix into the intermembrane space, establishing a high proton concentration there.",
            unitId: 3
          },
          {
            id: "3.6.4",
            text: "During chemiosmosis, protons flow back into the matrix through which complex?",
            options: ["Cytochrome c", "ATP Synthase", "NADH dehydrogenase", "Ubiquinone"],
            correctIndex: 1,
            explanation: "ATP Synthase acts as the channel through which protons diffuse down their gradient to make ATP.",
            unitId: 3
          },
          {
            id: "3.6.5",
            text: "Which molecule donates electrons directly to the first complex of the Electron Transport Chain?",
            options: ["FADH2", "NADH", "Pyruvate", "Glucose"],
            correctIndex: 1,
            explanation: "NADH donates its electrons at Complex I, while FADH2 donates at Complex II.",
            unitId: 3
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Heredity",
    masteryWeight: "8–11%",
    topics: [
      {
        id: "5.3",
        title: "Mendelian Genetics",
        description: "Laws of inheritance and Punnett square probability.",
        youtubeId: "WYW0533-Z14",
        article: `
# Mendelian Genetics

Gregor Mendel established the fundamental laws of heredity.

## Law of Segregation
The two alleles for a trait separate during gamete formation.

## Law of Independent Assortment
Alleles for different traits are distributed to gametes independently of one another.

## Probability
Punnett squares predict the likely outcomes of genetic crosses.
`,
        questions: [
          {
            id: "5.3.1",
            text: "A cross between two heterozygotes (Aa x Aa) yields what genotypic ratio?",
            options: ["3:1", "1:2:1", "1:1", "9:3:3:1"],
            correctIndex: 1,
            explanation: "1 AA, 2 Aa, 1 aa.",
            unitId: 5
          },
          {
            id: "5.3.2",
            text: "What is the phenotypic ratio of a dihybrid cross (AaBb x AaBb)?",
            options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
            correctIndex: 2,
            explanation: "Mendel's classic ratio for independent assortment.",
            unitId: 5
          },
          {
            id: "5.3.3",
            text: "A 'test cross' involves crossing an unknown dominant individual with a:",
            options: ["Homozygous dominant", "Heterozygote", "Homozygous recessive", "Wild type"],
            correctIndex: 2,
            explanation: "Recessive phenotype reveals the hidden allele.",
            unitId: 5
          },
          {
            id: "5.3.4",
            text: "Which law states that alleles for one gene don't affect alleles for another?",
            options: ["Segregation", "Independent Assortment", "Dominance", "Unit Inheritance"],
            correctIndex: 1,
            explanation: "Unless the genes are linked on the same chromosome.",
            unitId: 5
          },
          {
            id: "5.3.5",
            text: "Probability of getting an 'aa' offspring from Aa x Aa is:",
            options: ["1/2", "1/4", "3/4", "1"],
            correctIndex: 1,
            explanation: "1/2 (a from mother) * 1/2 (a from father) = 1/4.",
            unitId: 5
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Natural Selection",
    masteryWeight: "13–20%",
    topics: [
      {
        id: "7.9",
        title: "Phylogeny",
        description: "Reconstructing evolutionary history using cladograms and phylogenetic trees.",
        youtubeId: "fIv3gM8w2Fw",
        article: `
# Phylogeny

Phylogeny is the evolutionary history of a species or group of related species.

## Cladograms
A diagram used to show relations among organisms. It uses **derived characters** to determine branching points (nodes).

## Interpreting Trees
- **Nodes**: Represent a common ancestor.
- **Sister Taxa**: Groups that share an immediate common ancestor.
`,
        questions: [
          {
            id: "7.9.1",
            text: "What does a node on a phylogenetic tree represent?",
            options: ["Extinction", "Common ancestor", "Mutation", "Divergent trait"],
            correctIndex: 1,
            explanation: "The point where two lineages split.",
            unitId: 7
          },
          {
            id: "7.9.2",
            text: "Groups that share a more recent common ancestor are called:",
            options: ["Outgroups", "Sister taxa", "Polyphyletic", "Homoplasies"],
            correctIndex: 1,
            explanation: "They are each other's closest relatives.",
            unitId: 7
          },
          {
            id: "7.9.3",
            text: "Which type of data is most reliable for building modern trees?",
            options: ["Morphology", "Behavior", "DNA/Protein sequences", "Geographic range"],
            correctIndex: 2,
            explanation: "Molecular data provides precise quantitative differences.",
            unitId: 7
          },
          {
            id: "7.9.4",
            text: "A trait shared by all members of a clade is called a:",
            options: ["Derived trait", "Ancestral trait", "Vestigial trait", "Analogous trait"],
            correctIndex: 0,
            explanation: "Derived traits define specific groups.",
            unitId: 7
          },
          {
            id: "7.9.5",
            text: "What is an outgroup used for in a cladogram?",
            options: ["To show the most evolved species", "To provide a basis for comparison", "To prove extinction", "To show migration"],
            correctIndex: 1,
            explanation: "The outgroup is closely related but lacks the derived traits of the ingroup.",
            unitId: 7
          }
        ]
      }
    ]
  }
];
