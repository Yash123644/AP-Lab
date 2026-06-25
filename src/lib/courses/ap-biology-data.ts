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
        youtubeId: "3jwAGWky98c",
        image: "/images/biology/water_diagram.png",
        article: `
# Structure of Water and Hydrogen Bonding

Water ($H_2O$) is the fundamental solvent of life. Its unique properties arise from its polar molecular geometry and the resulting hydrogen bonds it forms.

## Molecular Polarity
In a water molecule, the oxygen atom is highly <vocab term="Electronegativity" definition="A measure of the tendency of an atom to attract a bonding pair of electrons.">electronegative</vocab> compared to the hydrogen atoms. This difference in electronegativity pulls shared electrons closer to the oxygen, creating a partial negative charge ($\delta^-$) near the oxygen and partial positive charges ($\delta^+$) near the hydrogens. This unequal distribution of charge establishes a polar covalent bond.

## Hydrogen Bonding
A **hydrogen bond** is a weak electrostatic attraction between the $\delta^+$ hydrogen of one water molecule and the $\delta^-$ oxygen of another. Although individual hydrogen bonds are transient and weak, their collective abundance grants water several unique properties:
- **Cohesion**: Water molecules stick to each other, creating a high <vocab term="Surface Tension" definition="The resistance of a liquid surface to stretch or break due to cohesive forces.">surface tension</vocab> that allows some organisms to walk on water.
- **Adhesion**: Water molecules form hydrogen bonds with other polar substances, facilitating capillary action (e.g., pulling water up plant xylem).
- **High Specific Heat**: Water absorbs a significant amount of heat energy before changing temperature because energy must first break hydrogen bonds. This buffers climates and maintains stable cellular temperatures.
- **Evaporative Cooling**: High kinetic energy water molecules evaporate first, carrying heat away and cooling the organism.
- **Density Expansion**: Water is less dense as a solid (ice) than a liquid. When water freezes, hydrogen bonds lock molecules into a crystalline lattice, spreading them apart. Floating ice insulates aquatic environments below.
`,
        questions: [
          {
            id: "1.1.1",
            text: "Which property of water is most responsible for the movement of water from the roots to the leaves of a tall redwood tree?",
            options: [
              "High specific heat capacity",
              "Combined cohesion and adhesion driving capillary action",
              "Density expansion upon freezing",
              "High heat of vaporization"
            ],
            correctIndex: 1,
            explanation: "Cohesion holds water molecules together in a continuous column, while adhesion pulls water molecules up the polar walls of xylem vessels against gravity.",
            unitId: 1
          },
          {
            id: "1.1.2",
            text: "Why does ice float on top of liquid water?",
            options: [
              "Covalent bonds become longer when water freezes.",
              "Stable hydrogen bonds lock molecules in a spacious crystalline lattice that is less dense than liquid water.",
              "Molecules move faster in ice, pushing each other apart.",
              "Air pockets trapped inside ice lower its atomic mass."
            ],
            correctIndex: 1,
            explanation: "As liquid water freezes, hydrogen bonds stabilize and position the molecules further apart in a crystalline lattice, making solid ice less dense than liquid water.",
            unitId: 1
          },
          {
            id: "1.1.3",
            text: "Which property of water prevents coastal environments from experiencing extreme temperature fluctuations compared to inland environments?",
            options: [
              "High surface tension",
              "Universal solvent properties",
              "High specific heat capacity",
              "High heat of fusion"
            ],
            correctIndex: 2,
            explanation: "Water has a high specific heat capacity, meaning it absorbs or releases large quantities of heat before changing its own temperature, thereby buffering local climates.",
            unitId: 1
          },
          {
            id: "1.1.4",
            text: "Which molecular characteristic allows water to act as an effective solvent for salts and sugars?",
            options: [
              "Its neutral pH of 7.0",
              "The high kinetic energy of its molecules",
              "Its polar nature which forms hydration shells around ions and polar molecules",
              "The presence of strong nonpolar covalent bonds"
            ],
            correctIndex: 2,
            explanation: "Water is polar; its partial charges attract ionic charges (like salts) and other polar molecules (like sugars), surrounding them to form hydration shells and dissolve them.",
            unitId: 1
          },
          {
            id: "1.1.5",
            text: "What type of chemical bond forms between the oxygen atom of one water molecule and the hydrogen atom of a neighboring water molecule?",
            options: [
              "Nonpolar covalent bond",
              "Ionic bond",
              "Hydrogen bond",
              "Polar covalent bond"
            ],
            correctIndex: 2,
            explanation: "The partial negative charge of oxygen on one water molecule is attracted to the partial positive charge of hydrogen on another water molecule, forming a hydrogen bond.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.5",
        title: "Structure of Nucleic Acids",
        description: "Examine DNA and RNA structural differences, directionality, and coding differences.",
        youtubeId: "vQdzKdu-L5c",
        article: `
# Structure of Nucleic Acids

Nucleic acids (DNA and RNA) are polymers constructed from monomer subunits called **nucleotides**.

## Nucleotide Structure
Each nucleotide contains three components:
1. A **5-carbon sugar** (pentose).
2. A **phosphate group**.
3. A **nitrogenous base** (Adenine, Thymine, Cytosine, Guanine, or Uracil).

## DNA vs. RNA
The structural differences between DNA and RNA reflect their specialized functions:
- **Sugar**: DNA contains deoxyribose (lacking an oxygen on the 2' carbon); RNA contains ribose.
- **Bases**: DNA uses Thymine ($T$); RNA uses Uracil ($U$) instead. Both use Adenine ($A$), Cytosine ($C$), and Guanine ($G$).
- **Strandedness**: DNA is typically double-stranded, forming an antiparallel double helix; RNA is usually single-stranded.

## Directionality
Nucleic acids are synthesized and read with strict <vocab term="Directionality" definition="The structural asymmetry of a nucleic acid strand, running from the 5' phosphate end to the 3' hydroxyl end.">directionality</vocab>. One end has a free 5' phosphate group, and the other has a free 3' hydroxyl ($-OH$) group. During synthesis, new nucleotides are added exclusively to the 3' hydroxyl group of the growing strand. In double-stranded DNA, the two strands are **antiparallel**, meaning they run in opposite directions relative to their 5' and 3' ends.
`,
        questions: [
          {
            id: "1.5.1",
            text: "During replication or transcription, new nucleotides can only be appended to which part of the growing strand?",
            options: [
              "The 5' phosphate group",
              "The nitrogenous base ring",
              "The 3' hydroxyl group",
              "The 2' carbon of the sugar ring"
            ],
            correctIndex: 2,
            explanation: "DNA and RNA polymerases synthesize in the 5' to 3' direction, meaning they catalyze the formation of a phosphodiester bond by adding a nucleotide to the free 3' hydroxyl group.",
            unitId: 1
          },
          {
            id: "1.5.2",
            text: "Which of the following describes a key structural difference between DNA and RNA?",
            options: [
              "DNA contains Uracil instead of Thymine.",
              "DNA has a ribose sugar, whereas RNA has a deoxyribose sugar.",
              "DNA contains deoxyribose sugar and is double-stranded, whereas RNA contains ribose sugar and is typically single-stranded.",
              "DNA nucleotides are joined by peptide bonds, whereas RNA nucleotides use ester linkages."
            ],
            correctIndex: 2,
            explanation: "DNA has deoxyribose sugar and forms a double helix, while RNA has ribose sugar and is single-stranded. Additionally, DNA uses Thymine and RNA uses Uracil.",
            unitId: 1
          },
          {
            id: "1.5.3",
            text: "If a DNA sample contains 20% Adenine, what percentage of Cytosine would you expect it to contain based on Chargaff's rules?",
            options: [
              "20%",
              "30%",
              "40%",
              "80%"
            ],
            correctIndex: 1,
            explanation: "By Chargaff's rules, A matches T (20% A = 20% T, total 40%). The remaining 60% is split equally between G and C (60% / 2 = 30% Cytosine).",
            unitId: 1
          },
          {
            id: "1.5.4",
            text: "What holds the two antiparallel strands of a DNA molecule together in a double helix?",
            options: [
              "Covalent bonds between complementary sugar molecules",
              "Hydrogen bonds between complementary nitrogenous bases",
              "Ionic bonds between phosphate groups",
              "Disulfide bridges between nucleotides"
            ],
            correctIndex: 1,
            explanation: "The double helix is stabilized by hydrogen bonds between complementary bases: Adenine pairs with Thymine (2 bonds) and Guanine pairs with Cytosine (3 bonds).",
            unitId: 1
          },
          {
            id: "1.5.5",
            text: "Which structural feature of DNA is directly responsible for its replication fidelity?",
            options: [
              "The negatively charged phosphate backbone",
              "The specific complementary base pairing between purines and pyrimidines",
              "The presence of deoxyribose sugar instead of ribose",
              "Its helical twist which hides genetic information inside"
            ],
            correctIndex: 1,
            explanation: "Complementary base pairing (A-T and G-C) ensures that each single strand can serve as an exact template for synthesis of a new complementary strand.",
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
        id: "2.1",
        title: "Cell Structure: Subcellular Components",
        description: "Study the correlation between eukaryotic organelle structure and metabolic function.",
        youtubeId: "1Z9pqST72is",
        article: `
# Cell Structure: Subcellular Components

Eukaryotic cells are compartmentalized into internal, membrane-bound organelles that partition diverse metabolic processes.

## Ribosomes
Ribosomes consist of ribosomal RNA (rRNA) and proteins. They translate mRNA sequences into polypeptide chains. Ribosomes are found free in the cytosol (synthesizing intracellular proteins) or bound to the **rough endoplasmic reticulum**.

## Endoplasmic Reticulum (ER)
- **Rough ER**: Studded with ribosomes; synthesizes and packages proteins for export or membrane insertion.
- **Smooth ER**: Lacks ribosomes; functions in lipid synthesis, carbohydrate metabolism, and detoxification of poisons.

## Golgi Complex
A series of flattened membrane sacs (cisternae). The Golgi modifications, sorts, and packages proteins from the ER into transport vesicles destined for the cell membrane, lysosomes, or secretion.

## Mitochondria
Mitochondria have a double-membrane structure. The outer membrane is smooth, while the inner membrane is highly folded into <vocab term="Cristae" definition="The folds of the inner mitochondrial membrane that house electron transport chain proteins.">cristae</vocab> to maximize surface area for ATP synthesis during cellular respiration. The fluid matrix contains mitochondrial DNA and ribosomes.

## Lysosomes and Vacuoles
- **Lysosomes**: Acidic membrane-bound sacs containing hydrolytic enzymes to digest macromolecules, old organelles, or foreign invaders.
- **Vacuoles**: Membrane bound sacs. In plants, a large central vacuole maintains turgor pressure and stores water/nutrients.

## Chloroplasts
Double-membrane organelles in photosynthetic eukaryotes. Inside, thylakoid membranes stack into grana, containing chlorophyll to capture light. The surrounding fluid is the stroma.
`,
        questions: [
          {
            id: "2.1.1",
            text: "Which organelle would be highly abundant in mammalian liver cells responsible for metabolizing toxins and drugs?",
            options: [
              "Rough Endoplasmic Reticulum",
              "Lysosomes",
              "Smooth Endoplasmic Reticulum",
              "Golgi Complex"
            ],
            correctIndex: 2,
            explanation: "The smooth endoplasmic reticulum is responsible for the detoxification of drugs and poisons, lipid synthesis, and calcium storage.",
            unitId: 2
          },
          {
            id: "2.1.2",
            text: "How does the structural folding of the inner mitochondrial membrane support its physiological function?",
            options: [
              "It isolates genetic information in the matrix.",
              "It increases surface area for housing electron transport chain proteins and ATP synthase complexes.",
              "It allows the mitochondria to swell and store excess water.",
              "It blocks transport of oxygen to keep respiration anaerobic."
            ],
            correctIndex: 1,
            explanation: "The folding of the inner membrane (cristae) increases the surface area available for oxidative phosphorylation, permitting higher ATP output.",
            unitId: 2
          },
          {
            id: "2.1.3",
            text: "Which pathway represents the correct flow of a secreted protein through the endomembrane system?",
            options: [
              "Rough ER -> Golgi complex -> Transport vesicle -> Plasma membrane",
              "Smooth ER -> Rough ER -> Lysosome -> Plasma membrane",
              "Ribosome -> Golgi complex -> Rough ER -> Plasma membrane",
              "Golgi complex -> Rough ER -> Transport vesicle -> Lysosome"
            ],
            correctIndex: 0,
            explanation: "Secretory proteins are synthesized on the rough ER, transported via vesicles to the Golgi for sorting and modification, and then shipped in vesicles to fuse with the plasma membrane.",
            unitId: 2
          },
          {
            id: "2.1.4",
            text: "What occurs inside a plant cell if its central vacuole loses a significant volume of water?",
            options: [
              "The cell wall dissolves to shrink the cell.",
              "Turgor pressure decreases, causing the plant to wilt.",
              "Photosynthesis accelerates in the stroma to produce water.",
              "Lysosomes digest the chloroplasts to release fluids."
            ],
            correctIndex: 1,
            explanation: "The central vacuole maintains turgor pressure by pressing the cell membrane against the rigid cell wall. Loss of water decreases this pressure, causing plasmolysis and wilting.",
            unitId: 2
          },
          {
            id: "2.1.5",
            text: "Which organelle contains hydrolytic enzymes that function at an acidic pH to recycle organic materials?",
            options: [
              "Peroxisome",
              "Glyoxysome",
              "Lysosome",
              "Central Vacuole"
            ],
            correctIndex: 2,
            explanation: "Lysosomes contain acid hydrolases that break down foreign pathogens, damaged organelles, and cellular waste in an acidic internal environment.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.5",
        title: "Membrane Transport",
        description: "Analyze selective permeability, passive diffusion, active transport, and bulk vesicular movement.",
        youtubeId: "dPKvHrD1eS4",
        article: `
# Membrane Transport

Cell membranes are **selectively permeable**, dictating which substances can cross and regulating internal concentrations.

## Selective Permeability
The phospholipid bilayer features a hydrophobic core. Small, nonpolar molecules (such as $O_2, CO_2, N_2$) dissolve in the lipid bilayer and cross easily. Large, polar molecules (like glucose) and charged ions (like $Na^+, K^+$) cannot cross the hydrophobic core without assist proteins.

## Passive Transport
Passive transport is the net movement of molecules down their concentration gradient without cellular energy (ATP):
- **Simple Diffusion**: Solutes migrate directly through the lipid bilayer.
- **Facilitated Diffusion**: Polar or charged substances traverse the membrane via transport proteins:
  - *Channel Proteins*: Hydrophilic corridors (e.g., **Aquaporins** for water).
  - *Carrier Proteins*: Undergo shape changes to move solutes across.

## Active Transport
Active transport requires energy (usually from ATP hydrolysis) to pump molecules **against** their concentration gradient:
- **Sodium-Potassium Pump**: Pumps $3\ Na^+$ out and $2\ K^+$ in, establishing electrochemical gradients across the membrane.

## Bulk Transport
Large particles cross via packaging into membrane vesicles:
- **Endocytosis**: The cell takes in macromolecules by forming new vesicles from the plasma membrane.
- **Exocytosis**: Secretory vesicles fuse with the membrane to release waste or products.
`,
        questions: [
          {
            id: "2.5.1",
            text: "Which of the following substances can cross the plasma membrane via simple diffusion without a transport protein?",
            options: [
              "Sodium ion (Na+)",
              "Carbon dioxide (CO2)",
              "Glucose",
              "Water"
            ],
            correctIndex: 1,
            explanation: "Carbon dioxide is a small, nonpolar gas that easily dissolves in and diffuses across the hydrophobic core of the lipid bilayer.",
            unitId: 2
          },
          {
            id: "2.5.2",
            text: "What is the primary function of aquaporins in cell membranes?",
            options: [
              "To pump water molecules against their concentration gradient using ATP",
              "To facilitate the rapid passive diffusion of polar water molecules across the hydrophobic membrane core",
              "To act as gated channels that open only during active transport",
              "To bind ions and prevent them from entering hydration shells"
            ],
            correctIndex: 1,
            explanation: "Aquaporins are specialized channel proteins that allow polar water molecules to pass rapidly through the cell membrane down their concentration gradient (osmosis).",
            unitId: 2
          },
          {
            id: "2.5.3",
            text: "The sodium-potassium pump uses ATP to transport which of the following?",
            options: [
              "3 Na+ ions out of the cell and 2 K+ ions into the cell",
              "2 Na+ ions into the cell and 3 K+ ions out of the cell",
              "3 Na+ ions and 3 K+ ions out of the cell simultaneously",
              "3 water molecules and 2 Na+ ions into the cell"
            ],
            correctIndex: 0,
            explanation: "The Na+/K+ ATPase pump actively exports 3 sodium ions and imports 2 potassium ions for every ATP hydrolyzed, maintaining the cell's resting membrane potential.",
            unitId: 2
          },
          {
            id: "2.5.4",
            text: "If a cell is treated with a metabolic poison that halts all ATP production, which transport mechanism will stop operating?",
            options: [
              "Osmosis through aquaporins",
              "Facilitated diffusion of glucose",
              "Active transport of calcium ions out of the cell",
              "Simple diffusion of oxygen"
            ],
            correctIndex: 2,
            explanation: "Active transport requires cellular energy (ATP) to move substances against their gradient, while simple and facilitated diffusion are passive and rely solely on kinetic energy.",
            unitId: 2
          },
          {
            id: "2.5.5",
            text: "Which vesicular process is used by white blood cells to engulf whole bacterial cells?",
            options: [
              "Exocytosis",
              "Pinocytosis",
              "Phagocytosis",
              "Receptor-mediated exocytosis"
            ],
            correctIndex: 2,
            explanation: "Phagocytosis is a form of endocytosis ('cell eating') where large particles or whole cells are engulfed by pseudopodia and brought into a food vacuole.",
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
        description: "Analyze factors affecting enzyme function, denaturation, and mechanisms of inhibition.",
        youtubeId: "qgVFkRn8f10",
        image: "/images/biology/enzyme_structure.png",
        article: `
# Enzyme Catalysis

Enzymes are protein catalysts that accelerate chemical reactions by lowering the activation energy barrier.

## Enzyme-Substrate Complexes
The **substrate** binds to a pocket on the enzyme called the **active site**. This interaction is highly specific. When binding occurs, the enzyme undergoes an **induced fit**—a minor shape change that holds the substrate securely.
- **Activation Energy ($E_a$)**: The thermodynamic energy required to distort reactant bonds into the transitional state. Enzymes lower $E_a$ by orienting substrates, stressing bonds, or providing favorable charges. They do not alter the overall free energy change ($\Delta G$) of the reaction.

## Factors Affecting Reaction Rates
1. **Temperature**: Elevating temperature increases kinetic energy and molecular collisions, increasing activity. However, temperatures above the optimum cause thermal vibrations that break intramolecular bonds, **denaturing** the enzyme (disrupting secondary/tertiary structures and destroying active site configuration).
2. **pH**: Shifts outside the optimum pH alter the ionization states of amino acid side chains, disrupting ionic bonds and denaturing the enzyme.
3. **Concentration**: Increasing substrate or enzyme concentration increases reaction velocity until it reaches saturation ($V_{max}$), where all active sites are occupied.

## Inhibition
- **<vocab term="Competitive Inhibition" definition="An inhibitor binds directly to the active site, physically blocking substrate access.">Competitive Inhibitor</vocab>**: Competes for the active site. Can be overcome by increasing substrate concentration.
- **<vocab term="Noncompetitive Inhibition" definition="An inhibitor binds to an allosteric site, changing the enzyme shape so the active site is nonfunctional.">Noncompetitive (Allosteric) Inhibitor</vocab>**: Binds elsewhere, rendering the active site inactive. Increasing substrate has no effect.
`,
        questions: [
          {
            id: "3.2.1",
            text: "Which of the following describes how an enzyme accelerates a chemical reaction?",
            options: [
              "It increases the kinetic energy of the reactants.",
              "It lowers the activation energy of the transition state.",
              "It makes the reaction endergonic.",
              "It alters the total free energy change (delta G) of the reaction."
            ],
            correctIndex: 1,
            explanation: "Enzymes act by lowering the activation energy (Ea) barrier, which allows more reactant molecules to reach the transition state faster. They do not change delta G.",
            unitId: 3
          },
          {
            id: "3.2.2",
            text: "What happens when an enzyme is exposed to a pH far outside its native range?",
            options: [
              "The primary structure of the polypeptide chain is hydrolyzed.",
              "The change in H+ concentration disrupts ionic bonds, denaturing the tertiary structure and active site.",
              "Competitive inhibitors bind to the active site to block protons.",
              "Activation energy is lowered even further, causing extreme reaction speeds."
            ],
            correctIndex: 1,
            explanation: "Extreme pH changes alter the charge of amino acid R-groups, breaking ionic and hydrogen bonds that stabilize tertiary structure. This denatures the active site.",
            unitId: 3
          },
          {
            id: "3.2.3",
            text: "How can you distinguish a competitive inhibitor from a noncompetitive inhibitor in a laboratory assay?",
            options: [
              "Competitive inhibitors can be outcompeted by adding excess substrate, restoring Vmax.",
              "Noncompetitive inhibitors only function at freezing temperatures.",
              "Competitive inhibitors bind to the allosteric site to speed up the reaction.",
              "Only noncompetitive inhibitors denature the primary sequence of the enzyme."
            ],
            correctIndex: 0,
            explanation: "Competitive inhibitors bind to the active site. Adding excess substrate increases the likelihood that a substrate binds instead of the inhibitor, recovering enzyme velocity.",
            unitId: 3
          },
          {
            id: "3.2.4",
            text: "An enzyme is saturated when which of the following is true?",
            options: [
              "Its temperature is raised above 60 degrees Celsius.",
              "All of its active sites are constantly occupied by substrate molecules.",
              "It has been fully digested by lysosomes.",
              "The noncompetitive inhibitor has permanently detached."
            ],
            correctIndex: 1,
            explanation: "Saturation occurs when all available enzyme active sites are occupied by substrate, meaning the reaction rate has reached its maximum velocity (Vmax).",
            unitId: 3
          },
          {
            id: "3.2.5",
            text: "Which level of protein structure is NOT destroyed when an enzyme denatures?",
            options: [
              "Primary",
              "Secondary",
              "Tertiary",
              "Quaternary"
            ],
            correctIndex: 0,
            explanation: "Denaturation disrupts the non-covalent interactions (hydrogen bonds, ionic attractions, hydrophobic effects) that hold 3D shapes, leaving covalent peptide bonds (primary sequence) intact.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.5",
        title: "Photosynthesis and the Calvin Cycle",
        description: "Study light-dependent conversion of photons to ATP/NADPH, and light-independent carbon fixation.",
        youtubeId: "sQK3Yr4Sc_k",
        image: "/images/biology/calvin_cycle.png",
        article: `
# Photosynthesis and the Calvin Cycle

Photosynthesis converts solar energy into chemical energy stored in sugars:
$$6\ CO_2 + 6\ H_2O + \text{light} \rightarrow C_6H_{12}O_6 + 6\ O_2$$

## Light-Dependent Reactions
These reactions occur in the **thylakoid membranes** of chloroplasts:
- **Light Absorption**: Photosystems II and I absorb photons, exciting chlorophyll electrons.
- **Photolysis**: Water is split ($H_2O \rightarrow 2\ H^+ + \frac{1}{2}\ O_2 + 2\ e^-$) to replace lost PSII electrons. This releases oxygen gas ($O_2$) as a byproduct.
- **Electron Transport Chain (ETC)**: Excited electrons flow down an ETC, driving the pumping of protons ($H^+$) into the thylakoid lumen.
- **Photophosphorylation**: The resulting proton gradient powers **ATP Synthase** as protons diffuse back into the stroma, creating ATP from ADP.
- **NADPH Formation**: Electrons at the end of the ETC reduce $NADP^+$ to $NADPH$.

## The Calvin Cycle (Light-Independent)
Occurs in the **stroma**, using ATP and NADPH from the light reactions to fix carbon:
1. **Carbon Fixation**: The enzyme **RuBisCO** fixes $CO_2$ by attaching it to RuBP, forming 3-PGA.
2. **Reduction**: ATP and NADPH reduce 3-PGA to form the 3-carbon sugar **G3P**.
3. **Regeneration**: One G3P exits the cycle to build sugars, while the remaining G3P use ATP to regenerate RuBP.
`,
        questions: [
          {
            id: "3.5.1",
            text: "What is the direct purpose of the photolysis of water in the light-dependent reactions of photosynthesis?",
            options: [
              "To generate carbon dioxide for the Calvin Cycle",
              "To provide replacement electrons for Photosystem II",
              "To synthesize glucose directly in the thylakoid space",
              "To act as the final electron acceptor of the ETC"
            ],
            correctIndex: 1,
            explanation: "Photolysis splits water to yield protons, oxygen gas, and electrons. These electrons replace those excited and lost by the reaction center of Photosystem II.",
            unitId: 3
          },
          {
            id: "3.5.2",
            text: "Where is the electrochemical proton gradient established in the chloroplast during the light reactions?",
            options: [
              "Across the outer membrane into the cytoplasm",
              "Inside the stroma of the chloroplast",
              "In the thylakoid lumen (space) across the thylakoid membrane",
              "Within the mitochondrial matrix"
            ],
            correctIndex: 2,
            explanation: "As electrons move down the ETC, protons are actively pumped from the stroma into the thylakoid lumen, building a high concentration gradient inside.",
            unitId: 3
          },
          {
            id: "3.5.3",
            text: "The enzyme RuBisCO facilitates which phase of the Calvin Cycle?",
            options: [
              "The regeneration of RuBP from G3P",
              "The covalent fixation of gaseous CO2 to RuBP",
              "The reduction of 3-PGA to G3P using NADPH",
              "The splitting of water molecules"
            ],
            correctIndex: 1,
            explanation: "RuBisCO catalyzes the first step of the Calvin Cycle, attaching carbon dioxide to the 5-carbon sugar RuBP.",
            unitId: 3
          },
          {
            id: "3.5.4",
            text: "If a mutant plant has thylakoid membranes that are permeable to protons, what is the most direct consequence?",
            options: [
              "No NADPH will be formed at the end of the ETC.",
              "Photolysis of water will completely stop.",
              "ATP synthesis will be severely reduced because the proton gradient cannot be maintained.",
              "RuBisCO will begin fixing oxygen instead of carbon dioxide."
            ],
            correctIndex: 2,
            explanation: "ATP synthesis depends on a proton gradient driving protons through ATP synthase. Permeable membranes prevent gradient formation, halting photophosphorylation.",
            unitId: 3
          },
          {
            id: "3.5.5",
            text: "How many net G3P molecules exit the Calvin Cycle for every six carbon dioxide molecules fixed?",
            options: [
              "1",
              "2",
              "3",
              "6"
            ],
            correctIndex: 1,
            explanation: "Each G3P is a 3-carbon sugar. Fixing 6 CO2 molecules provides 6 carbons, which yields 2 net G3P molecules to construct a 6-carbon glucose molecule.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.6",
        title: "Cellular Respiration and the Electron Transport Chain",
        description: "Harvest energy from glucose via glycolysis, the Krebs cycle, and oxidative phosphorylation.",
        youtubeId: "00jbG_cfGuQ",
        image: "/images/biology/etc_diagram.png",
        article: `
# Cellular Respiration and the ETC

Cellular respiration extracts chemical energy from sugars to synthesize ATP:
$$C_6H_{12}O_6 + 6\ O_2 \rightarrow 6\ CO_2 + 6\ H_2O + \text{ATP}$$

## Key Stages
1. **Glycolysis** (Cytosol): Anaerobic pathway that cleaves glucose into two pyruvate molecules, producing a net of $2\ \text{ATP}$ and $2\ \text{NADH}$.
2. **Pyruvate Oxidation & Krebs Cycle** (Mitochondrial Matrix): Converts pyruvate to acetyl-CoA, producing $CO_2$ waste, $2\ \text{ATP}$, $6\ \text{NADH}$, and $2\ \text{FADH}_2$.
3. **Electron Transport Chain (ETC)** (Inner Mitochondrial Membrane):
   - $NADH$ and $FADH_2$ donate electrons to membrane complexes.
   - Electron flow powers the pumping of protons ($H^+$) from the matrix into the **intermembrane space**.
   - Oxygen ($O_2$) acts as the **final electron acceptor**, combining with protons and spent electrons to form water ($H_2O$).

## Chemiosmosis
The accumulated proton gradient represents a proton-motive force. Protons flow back into the matrix through **ATP Synthase**. This flow drives the rotation of the synthase catalytic domain, coupling mechanical energy with the phosphorylation of ADP to generate 26-28 ATP.
`,
        questions: [
          {
            id: "3.6.1",
            text: "What is the primary function of oxygen in the process of aerobic cellular respiration?",
            options: [
              "To oxidize glucose directly in glycolysis",
              "To act as the terminal electron acceptor in the Electron Transport Chain",
              "To serve as a source of carbon atoms for the Krebs Cycle",
              "To pump protons into the intermembrane space"
            ],
            correctIndex: 2,
            explanation: "Oxygen is the terminal electron acceptor of the ETC. It accepts spent electrons and protons to form water, keeping the transport chain active.",
            unitId: 3
          },
          {
            id: "3.6.2",
            text: "In which region of the mitochondrion do electron transport chain proteins pump protons to establish the gradient?",
            options: [
              "The mitochondrial matrix",
              "The outer membrane pores",
              "The intermembrane space",
              "The cytoplasm"
            ],
            correctIndex: 2,
            explanation: "ETC proteins pump protons from the matrix into the intermembrane space, creating a high concentration of protons relative to the matrix.",
            unitId: 3
          },
          {
            id: "3.6.3",
            text: "Which stage of cellular respiration is metabolic carbon dioxide (CO2) released as waste?",
            options: [
              "Glycolysis in the cytosol",
              "Pyruvate oxidation and the Krebs Cycle in the matrix",
              "Oxidative phosphorylation across the inner membrane",
              "Chemiosmosis through ATP Synthase"
            ],
            correctIndex: 1,
            explanation: "Decarboxylation reactions occur during pyruvate oxidation and the citric acid (Krebs) cycle, converting carbons from glucose into CO2 waste.",
            unitId: 3
          },
          {
            id: "3.6.4",
            text: "What is the net yield of ATP and NADH from the anaerobic breakdown of one glucose molecule in glycolysis?",
            options: [
              "2 ATP, 2 NADH",
              "4 ATP, 2 NADH",
              "2 ATP, 6 NADH",
              "32 ATP, 2 FADH2"
            ],
            correctIndex: 0,
            explanation: "Glycolysis breaks down glucose into 2 pyruvates, consuming 2 ATP and producing 4 ATP (net 2 ATP) and 2 NADH.",
            unitId: 3
          },
          {
            id: "3.6.5",
            text: "Which of the following directly drives the rotation of the ATP synthase rotor during chemiosmosis?",
            options: [
              "The hydrolysis of ATP into ADP",
              "The direct oxidation of NADH",
              "The passive diffusion of protons down their concentration gradient into the matrix",
              "The splitting of water molecules"
            ],
            correctIndex: 2,
            explanation: "Protons flow down their concentration gradient from the intermembrane space back into the matrix through the channels of ATP Synthase, causing the rotor to spin and synthesize ATP.",
            unitId: 3
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cell Communication and Cell Cycle",
    masteryWeight: "10–15%",
    topics: [
      {
        id: "4.1",
        title: "Cell Communication",
        description: "Study mechanisms of cellular signal reception, transduction cascades, and cellular responses.",
        youtubeId: "5M22VCEmJd0",
        article: `
# Cell Communication

Cells communicate with one another using chemical signaling molecules (ligands).

## Types of Signaling
- **Direct Contact**: Gap junctions in animals or plasmodesmata in plants allow ions/molecules to pass directly between adjacent cells.
- **Local (Paracrine/Synaptic)**: Ligands diffuse short distances (e.g., neurotransmitters across a synapse).
- **Long-Distance (Endocrine)**: Hormones travel through the circulatory system to target distant cells.

## Three Stages of Signal Transduction
1. **Reception**: A ligand binds to a specific membrane or intracellular receptor. This binding is highly specific and induces a conformational change in the receptor.
2. **Transduction**: The signal is converted into a form that can trigger a cellular response. This typically involves:
   - **Phosphorylation Cascades**: Enzymes called **kinases** transfer phosphate groups from ATP to proteins, amplifying the signal.
   - **Second Messengers**: Small, non-protein molecules (like **cyclic AMP (cAMP)** or $Ca^{2+}$ ions) that distribute the signal inside the cytoplasm.
3. **Response**: The final action triggered by the signaling pathway, such as activating target genes in the nucleus or opening ion channels.
`,
        questions: [
          {
            id: "4.1.1",
            text: "Which of the following represents the correct sequence of phases in a cell signaling pathway?",
            options: [
              "Transduction -> Response -> Reception",
              "Reception -> Transduction -> Response",
              "Amplification -> Reception -> Phosphorylation",
              "Response -> Reception -> Transcription"
            ],
            correctIndex: 1,
            explanation: "First, a ligand binds to a receptor (reception); next, intracellular molecules relay and amplify the signal (transduction); finally, the target cell executes a change (response).",
            unitId: 4
          },
          {
            id: "4.1.2",
            text: "What is the primary function of protein kinases during signal transduction cascades?",
            options: [
              "To synthesize ligands in endocrine glands",
              "To add phosphate groups to target proteins, activating or inactivating them and amplifying the signal",
              "To degrade second messengers like cAMP to shut down the pathway",
              "To export ions out of the cytoplasm"
            ],
            correctIndex: 1,
            explanation: "Protein kinases transfer phosphate groups from ATP to proteins (phosphorylation). This often activates the protein, cascading the signal down the line.",
            unitId: 4
          },
          {
            id: "4.1.3",
            text: "Which of the following is considered a hydrophobic ligand that binds to intracellular receptors rather than membrane-bound receptors?",
            options: [
              "Insulin",
              "Epinephrine",
              "Testosterone (a steroid hormone)",
              "Sodium ions"
            ],
            correctIndex: 2,
            explanation: "Steroid hormones like testosterone are lipid-soluble (hydrophobic) and easily diffuse across the plasma membrane to bind to receptors inside the cytosol or nucleus.",
            unitId: 4
          },
          {
            id: "4.1.4",
            text: "What would occur if a mutation permanently inactivates the GTPase activity of a G-protein coupled receptor (GPCR) pathway G-protein?",
            options: [
              "The G-protein will remain active, continuously transducing the signal even in the absence of the ligand.",
              "The ligand will never bind to the extracellular receptor.",
              "Second messengers like cAMP will cease to be produced.",
              "The pathway will immediately shut down permanently."
            ],
            correctIndex: 0,
            explanation: "GTPase activity hydrolyzes GTP to GDP, turning the G-protein off. If inactivated, the G-protein remains bound to GTP, staying active and signaling indefinitely.",
            unitId: 4
          },
          {
            id: "4.1.5",
            text: "Which of the following is a common second messenger in eukaryotic cells?",
            options: [
              "RNA Polymerase",
              "Cyclic AMP (cAMP)",
              "ATPase",
              "Sodium-potassium pump"
            ],
            correctIndex: 1,
            explanation: "Cyclic AMP is a key hydrophilic second messenger that diffuses rapidly through the cytosol to activate downstream kinases (like Protein Kinase A).",
            unitId: 4
          }
        ]
      },
      {
        id: "4.6",
        title: "Cell Cycle",
        description: "Explore the eukaryotic cell cycle, mitosis, and cyclin-dependent cell cycle regulation.",
        youtubeId: "QVCjdNxJreE",
        article: `
# Cell Cycle

The cell cycle is an ordered series of events that coordinates cell growth and division.

## Stages of the Cell Cycle
- **Interphase**: The growth phase, comprising 90% of the cycle:
  - **$G_1$ (Gap 1)**: Cell grows and prepares for DNA synthesis.
  - **S (Synthesis)**: DNA replication occurs, producing identical sister chromatids.
  - **$G_2$ (Gap 2)**: Final growth and preparation for division.
- **M-Phase**: Cell division:
  - **Mitosis**: Nuclear division (Prophase, Metaphase, Anaphase, Telophase).
  - **Cytokinesis**: Cytoplasmic division.

## Regulation of the Cell Cycle
Strict internal checkpoints govern progression through the cycle, preventing errors:
- **$G_1$ Checkpoint**: The restriction point. If approved, the cell commits to division; if denied, it enters a non-dividing state ($G_0$).
- **$G_2$ Checkpoint**: Verifies that DNA has replicated accurately.
- **M (Spindle) Checkpoint**: Metaphase checkpoint that checks if chromosomes are attached to spindle fibers.

## Molecular Control
Cell cycle progression relies on two key families of regulatory proteins:
- **Cyclins**: Proteins whose concentrations fluctuate throughout the cycle.
- **CDKs (Cyclin-Dependent Kinases)**: Kinases that must bind to a cyclin to become active. Once active, CDKs phosphorylate targets to initiate cell cycle transitions.
- **Cancer**: Disruption of these checkpoints leads to uncontrolled cell division.
`,
        questions: [
          {
            id: "4.6.1",
            text: "During which phase of the cell cycle is DNA replicated?",
            options: [
              "G1 Phase",
              "S Phase",
              "G2 Phase",
              "Prophase"
            ],
            correctIndex: 1,
            explanation: "The Synthesis (S) phase is the specific window during interphase where the genome is replicated.",
            unitId: 4
          },
          {
            id: "4.6.2",
            text: "What is the biological consequence if a cell fails to satisfy the spindle checkpoint during mitosis?",
            options: [
              "DNA will duplicate a second time.",
              "Sister chromatids will separate unevenly, leading to aneuploid daughter cells.",
              "The cell will immediately enter the G0 state.",
              "Cytokinesis will proceed before mitosis is finished."
            ],
            correctIndex: 1,
            explanation: "The spindle checkpoint ensures chromosomes are aligned on the metaphase plate and attached to spindles. Failure leads to unequal chromosome distribution (nondisjunction).",
            unitId: 4
          },
          {
            id: "4.6.3",
            text: "Which of the following describes the relationship between cyclins and Cyclin-Dependent Kinases (CDKs)?",
            options: [
              "CDK concentrations fluctuate, whereas cyclin levels remain constant.",
              "Cyclin binds to CDK to activate it, allowing the complex to phosphorylate target proteins.",
              "CDK degrades cyclin to prevent the cell from ever dividing.",
              "Cyclins are kinases that activate CDKs by removing phosphate groups."
            ],
            correctIndex: 1,
            explanation: "CDK concentrations are stable, but they require fluctuating cyclins to bind and activate them. The active cyclin-CDK complex then phosphorylates cell cycle targets.",
            unitId: 4
          },
          {
            id: "4.6.4",
            text: "Eukaryotic cells that exit the cell cycle and enter a stable, non-dividing state are said to be in which phase?",
            options: [
              "S Phase",
              "G0 Phase",
              "G2 Checkpoint",
              "Anaphase"
            ],
            correctIndex: 1,
            explanation: "Cells that do not receive the G1 go-ahead signal exit the cycle and enter G0, a quiescent state where metabolic work continues but division does not.",
            unitId: 4
          },
          {
            id: "4.6.5",
            text: "What genes code for proteins that normally inhibit cell division, acting like brakes on the cell cycle?",
            options: [
              "Oncogenes",
              "Proto-oncogenes",
              "Tumor suppressor genes",
              "Ribosomal genes"
            ],
            correctIndex: 2,
            explanation: "Tumor suppressor genes code for proteins (like p53) that halt the cell cycle if DNA damage is detected. Mutations can cause uncontrolled cell growth (cancer).",
            unitId: 4
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
        id: "5.1",
        title: "Meiosis & Genetic Diversity",
        description: "Trace homologous chromosome segregation and mechanisms driving eukaryotic genetic variation.",
        youtubeId: "nMEyeKQClqI",
        article: `
# Meiosis and Genetic Diversity

Meiosis is a specialized form of cell division that reduces the chromosome number by half, producing haploid gametes ($n$) from a diploid cell ($2n$).

## Stages of Meiosis
Meiosis involves one round of DNA replication followed by two successive nuclear divisions:
- **Meiosis I**: Homologous chromosomes pair up and separate. This division reduces the ploidy from diploid to haploid.
- **Meiosis II**: Sister chromatids separate, analogous to mitosis.

## Mechanisms of Genetic Variation
Meiosis generates genetic diversity through three primary processes:
1. **Crossing Over** (Prophase I): Homologous chromosomes align in synapsis to form tetrads. Nonsister chromatids swap segments at regions called chiasmata, producing recombinant chromosomes.
2. **Independent Assortment** (Metaphase I): Homologous pairs align randomly along the metaphase plate. The orientation of maternal and paternal chromosomes is random, yielding $2^n$ possible combinations in gametes.
3. **Random Fertilization**: Any sperm can fuse with any egg, creating unique zygotes.
`,
        questions: [
          {
            id: "5.1.1",
            text: "At what specific stage of meiosis does crossing over occur?",
            options: [
              "Metaphase I",
              "Prophase I",
              "Anaphase II",
              "Prophase II"
            ],
            correctIndex: 1,
            explanation: "Crossing over occurs during Prophase I, when homologous chromosomes align closely (synapsis) to exchange genetic material.",
            unitId: 5
          },
          {
            id: "5.1.2",
            text: "Which of the following describes the difference between Anaphase I and Anaphase II of meiosis?",
            options: [
              "Homologous chromosomes separate in Anaphase I, whereas sister chromatids separate in Anaphase II.",
              "Chromosomes replicate in Anaphase I, but dissolve in Anaphase II.",
              "Ploidy is reduced in Anaphase II but doubled in Anaphase I.",
              "Crossing over occurs in Anaphase I, while independent assortment occurs in Anaphase II."
            ],
            correctIndex: 0,
            explanation: "In Anaphase I, homologous chromosomes are pulled to opposite poles, while sister chromatids remain attached. In Anaphase II, sister chromatids separate.",
            unitId: 5
          },
          {
            id: "5.1.3",
            text: "If an organism's diploid number is 8 (2n = 8), how many unique maternal/paternal chromosome combinations can result from independent assortment alone?",
            options: [
              "4",
              "8",
              "16",
              "64"
            ],
            correctIndex: 2,
            explanation: "The number of combinations is 2^n, where n is the haploid number. Since 2n = 8, n = 4. Thus, 2^4 = 16 unique combinations.",
            unitId: 5
          },
          {
            id: "5.1.4",
            text: "What is the biological advantage of generating high genetic diversity via meiosis?",
            options: [
              "It ensures all offspring are phenotypic clones of the parents.",
              "It increases the likelihood that a population can survive environmental changes.",
              "It prevents somatic mutations from accumulating in somatic cells.",
              "It speeds up the rate of mitosis."
            ],
            correctIndex: 1,
            explanation: "Genetic diversity creates phenotypic variation in a population. If environmental pressures shift, some individuals will possess traits that allow them to survive.",
            unitId: 5
          },
          {
            id: "5.1.5",
            text: "Which event restores the diploid chromosome number in the life cycle of sexually reproducing organisms?",
            options: [
              "Meiosis II",
              "Synapsis",
              "Fertilization",
              "Cytokinesis"
            ],
            correctIndex: 2,
            explanation: "Fertilization combines two haploid gametes (n + n) to restore the diploid state (2n) in the resulting zygote.",
            unitId: 5
          }
        ]
      },
      {
        id: "5.3",
        title: "Mendelian Genetics",
        description: "Apply laws of segregation and independent assortment to predict inheritance probabilities.",
        youtubeId: "i-0rSv6oxSY",
        article: `
# Mendelian Genetics

Gregor Mendel derived the fundamental laws of inheritance through breeding experiments.

## Mendelian Laws
1. **Law of Segregation**: An individual inherits two alleles for each gene. These alleles segregate during gamete formation, so each gamete carries only one allele.
2. **Law of Independent Assortment**: Alleles for different genes assort independently of one another during gamete division, provided the genes are on different chromosomes or located far apart.

## Genetic Crosses
- **Monohybrid Cross** ($Aa \times Aa$): Yields a **3:1** phenotypic ratio and a **1:2:1** genotypic ratio.
- **Dihybrid Cross** ($AaBb \times AaBb$): Yields a **9:3:3:1** phenotypic ratio, confirming independent assortment.

## Probability Rules
- **Multiplication Rule** ("AND"): Probability of independent events occurring together is the product of their individual probabilities:
  $$P(A \text{ and } B) = P(A) \times P(B)$$
- **Addition Rule** ("OR"): Probability of mutually exclusive events is the sum of their individual probabilities:
  $$P(A \text{ or } B) = P(A) + P(B)$$
`,
        questions: [
          {
            id: "5.3.1",
            text: "In a cross between two individuals heterozygous for a single trait (Aa x Aa), what is the expected genotypic ratio of the offspring?",
            options: [
              "3:1",
              "1:2:1",
              "9:3:3:1",
              "1:1"
            ],
            correctIndex: 1,
            explanation: "The expected genotypic ratio is 1 AA : 2 Aa : 1 aa, while the phenotypic ratio is 3 dominant : 1 recessive.",
            unitId: 5
          },
          {
            id: "5.3.2",
            text: "What is the probability of obtaining an offspring with the genotype aabbcc from parents with genotypes AaBbCc x AaBbCc?",
            options: [
              "1/8",
              "1/16",
              "1/64",
              "1/256"
            ],
            correctIndex: 2,
            explanation: "For each gene, the probability of getting homozygous recessive is 1/4. Since the genes assort independently, P(aabbcc) = 1/4 * 1/4 * 1/4 = 1/64.",
            unitId: 5
          },
          {
            id: "5.3.3",
            text: "A geneticist crosses a black-furred mouse of unknown genotype with a brown-furred homozygous recessive mouse (bb). Half the offspring are black and half are brown. What is the genotype of the black parent?",
            options: [
              "BB",
              "Bb",
              "bb",
              "Incomplete dominant"
            ],
            correctIndex: 1,
            explanation: "This is a test cross. Crossing the unknown dominant (B_) with homozygous recessive (bb) yielding a 1:1 ratio reveals the parent is heterozygous (Bb).",
            unitId: 5
          },
          {
            id: "5.3.4",
            text: "Mendel's Law of Independent Assortment is structurally driven by which meiotic event?",
            options: [
              "The replication of DNA during S-phase of Interphase",
              "The random orientation of homologous chromosome pairs along the metaphase plate in Metaphase I",
              "The condensation of sister chromatids in Prophase II",
              "The active pumping of ions out of the gamete membrane"
            ],
            correctIndex: 1,
            explanation: "Independent assortment occurs because homologous chromosome pairs align and separate randomly at Metaphase I.",
            unitId: 5
          },
          {
            id: "5.3.5",
            text: "What is the expected phenotypic ratio among offspring from a cross between two individuals heterozygous for two traits (AaBb x AaBb) that assort independently?",
            options: [
              "1:1:1:1",
              "3:1",
              "9:3:3:1",
              "1:2:1"
            ],
            correctIndex: 2,
            explanation: "A dihybrid cross of two heterozygotes yields the classic Mendelian phenotypic ratio of 9 dominant/dominant : 3 dominant/recessive : 3 recessive/dominant : 1 recessive/recessive.",
            unitId: 5
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Gene Expression and Regulation",
    masteryWeight: "12–16%",
    topics: [
      {
        id: "6.3",
        title: "Transcription and RNA Processing",
        description: "Analyze the synthesis of pre-mRNA and subsequent modifications in eukaryotic cells.",
        youtubeId: "WsofKzY_K50",
        article: `
# Transcription and RNA Processing

Transcription is the process of synthesizing RNA from a DNA template.

## Transcription Mechanisms
- **Initiation**: **RNA Polymerase** binds to DNA at a specific promoter sequence (like the eukaryotic **TATA box**), catalyzed by transcription factors. RNA polymerase does not require a primer.
- **Elongation**: RNA polymerase moves down the template strand in the 3' to 5' direction, synthesizing a complementary RNA molecule in the **5' to 3'** direction.
- **Termination**: The polymerase transcribes a termination sequence, releasing the pre-mRNA.

## Eukaryotic RNA Processing
Before eukaryotic pre-mRNA leaves the nucleus, it undergoes three modifications:
1. **5' Cap**: A modified guanine nucleotide is added to the 5' end. This protects the transcript from enzymatic degradation and helps ribosomes attach.
2. **3' Poly-A Tail**: A string of Adenines is appended to the 3' end, facilitating nuclear export and stabilizing the mRNA in the cytoplasm.
3. **<vocab term="Alternative Splicing" definition="A process where different combinations of exons are joined, allowing a single gene to code for multiple proteins.">Alternative Splicing</vocab>**: Non-coding regions called **introns** are excised by **spliceosomes**, and coding regions called **exons** are spliced back together. This mechanism allows a single gene to encode multiple protein isoforms.
`,
        questions: [
          {
            id: "6.3.1",
            text: "Which enzyme is directly responsible for synthesizing mRNA from a DNA template?",
            options: [
              "DNA Polymerase III",
              "RNA Polymerase",
              "Helicase",
              "Ligase"
            ],
            correctIndex: 1,
            explanation: "RNA Polymerase catalyzes transcription, binding to promoters and assembling ribonucleotides in a complementary 5' to 3' sequence.",
            unitId: 6
          },
          {
            id: "6.3.2",
            text: "Which of the following modifications occurs at the 5' end of eukaryotic pre-mRNA during processing?",
            options: [
              "Addition of a poly-A tail",
              "Addition of a modified guanine nucleotide cap",
              "Removal of exon segments",
              "Attachment of amino acids"
            ],
            correctIndex: 1,
            explanation: "A modified guanine cap is added to the 5' end of pre-mRNA to protect the transcript and guide ribosome binding.",
            unitId: 6
          },
          {
            id: "6.3.3",
            text: "What is the function of introns within eukaryotic pre-mRNA transcripts?",
            options: [
              "They code for the active site of the target enzyme.",
              "They are non-coding segments that are cut out during RNA splicing.",
              "They guide RNA polymerase back to the TATA promoter.",
              "They serve as codons during translation."
            ],
            correctIndex: 1,
            explanation: "Introns are non-coding regions that are excised from the transcript during RNA splicing, leaving only the coding exons.",
            unitId: 6
          },
          {
            id: "6.3.4",
            text: "Which mechanism allows a single eukaryotic gene to encode several distinct polypeptide structures?",
            options: [
              "Alternative RNA splicing",
              "Polycistronic translation",
              "Frame-shift mutagenesis",
              "Reverse transcription"
            ],
            correctIndex: 0,
            explanation: "Alternative splicing joins different combinations of exons from a single pre-mRNA, allowing one gene to yield multiple protein structures.",
            unitId: 6
          },
          {
            id: "6.3.5",
            text: "If a DNA template strand runs 3'-TACTGA-5', what is the complementary mRNA sequence produced?",
            options: [
              "5'-ATGACT-3'",
              "5'-AUGACU-3'",
              "3'-AUGACU-5'",
              "5'-UACUGA-3'"
            ],
            correctIndex: 1,
            explanation: "The template strand is complementary to the RNA transcript. A pairs with U, T pairs with A, C pairs with G, and G pairs with C. The RNA runs 5' to 3', yielding 5'-AUGACU-3'.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.4",
        title: "Translation",
        description: "Study codon translation, ribosome machinery, and translation steps.",
        youtubeId: "TfYf_rPWUdY",
        article: `
# Translation

Translation is the synthesis of a polypeptide chain from an mRNA transcript, occurring at ribosomes in the cytoplasm.

## Molecular Machinery
- **mRNA**: Carries genetic codons (triplet bases).
- **Ribosomes**: Eukaryotic ribosomes consist of a small subunit (which reads mRNA) and a large subunit (which contains tRNA binding sites: **A, P, and E**).
- **tRNA**: Transfer RNA molecules transport specific amino acids to the ribosome. Each tRNA features an **anticodon** loop complementary to an mRNA codon.

## Translation Stages
1. **Initiation**: The small ribosomal subunit binds near the 5' end of mRNA and locates the start codon (**AUG**). An initiator tRNA carrying Methionine binds, and the large ribosomal subunit attaches.
2. **Elongation**:
   - *A-site (Aminoacyl)*: Incoming tRNA carrying the next amino acid binds.
   - *P-site (Peptidyl)*: A peptide bond is catalyzed between the polypeptide and the new amino acid.
   - *E-site (Exit)*: Uncharged tRNA shifts to the E-site and exits.
3. **Termination**: The ribosome encounters a stop codon ($UAA, UAG, UGA$). A release factor binds to the A-site, releasing the completed polypeptide.
`,
        questions: [
          {
            id: "6.4.1",
            text: "What is the codon sequence that initiates the translation of almost all eukaryotic mRNA transcripts?",
            options: [
              "UAA",
              "AUG",
              "UGA",
              "UAG"
            ],
            correctIndex: 1,
            explanation: "AUG is the universal start codon, coding for the amino acid Methionine.",
            unitId: 6
          },
          {
            id: "6.4.2",
            text: "Which site on the ribosome accepts the incoming tRNA carrying a new amino acid during elongation?",
            options: [
              "A-site",
              "P-site",
              "E-site",
              "T-site"
            ],
            correctIndex: 0,
            explanation: "The A (Aminoacyl) site holds the incoming tRNA carrying the next amino acid to be added to the chain.",
            unitId: 6
          },
          {
            id: "6.4.3",
            text: "What occurs when the ribosome encounters a stop codon (such as UAA) on the mRNA transcript?",
            options: [
              "A tRNA carrying a stop amino acid attaches.",
              "A release factor binds to the A-site, triggering the release of the polypeptide chain.",
              "The ribosome reverses direction to transcribe the gene again.",
              "The mRNA molecule is immediately degraded by spliceosomes."
            ],
            correctIndex: 1,
            explanation: "Stop codons do not code for amino acids. Instead, they are recognized by release factors that hydrolyze the bond holding the polypeptide to the tRNA, freeing the chain.",
            unitId: 6
          },
          {
            id: "6.4.4",
            text: "If a codon on mRNA reads 5'-GCA-3', what is the complementary anticodon sequence on the corresponding tRNA?",
            options: [
              "5'-CGT-3'",
              "3'-CGU-5'",
              "5'-CGU-3'",
              "3'-TGC-5'"
            ],
            correctIndex: 1,
            explanation: "The anticodon must align antiparallel to the 5'-GCA-3' codon. Complementary bases yield 3'-CGU-5'.",
            unitId: 6
          },
          {
            id: "6.4.5",
            text: "Which molecule functions to bridge genetic codons with physical amino acids during translation?",
            options: [
              "tRNA",
              "rRNA",
              "Spliceosome",
              "RNA Polymerase"
            ],
            correctIndex: 0,
            explanation: "tRNA molecules carry specific amino acids and use complementary anticodons to bind to codons on mRNA, linking the genetic code to the growing polypeptide.",
            unitId: 6
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
        id: "7.5",
        title: "Hardy-Weinberg Equilibrium",
        description: "Solve population genetics problems using the Hardy-Weinberg mathematical equations.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Hardy-Weinberg Equilibrium

Hardy-Weinberg equilibrium is a mathematical model that describes a non-evolving population where allele frequencies remain constant over generations.

## Conditions for Equilibrium
For a population to remain in Hardy-Weinberg equilibrium, five conditions must be met:
1. **No Mutations**: No new alleles can be introduced.
2. **Random Mating**: No sexual selection.
3. **No Natural Selection**: All phenotypes must have equal reproductive success.
4. **Extremely Large Population**: Minimizes genetic drift.
5. **No Gene Flow**: No migration in or out.

## Mathematical Equations
If these conditions are satisfied, allele and genotype frequencies can be calculated using two equations:
- **Allele Frequencies**:
  $$p + q = 1$$
  where $p$ is the frequency of the dominant allele, and $q$ is the frequency of the recessive allele.
- **Genotype Frequencies**:
  $$p^2 + 2pq + q^2 = 1$$
  where $p^2$ is the frequency of homozygous dominant individuals, $2pq$ is the frequency of heterozygous individuals, and $q^2$ is the frequency of homozygous recessive individuals.
`,
        questions: [
          {
            id: "7.5.1",
            text: "In a population in Hardy-Weinberg equilibrium, 16% of the individuals display the homozygous recessive phenotype. What is the frequency of the recessive allele (q)?",
            options: [
              "0.16",
              "0.40",
              "0.60",
              "0.84"
            ],
            correctIndex: 1,
            explanation: "The frequency of homozygous recessive individuals (q^2) is 0.16. Taking the square root of 0.16 yields q = 0.40.",
            unitId: 7
          },
          {
            id: "7.5.2",
            text: "Using the population from the previous question (q = 0.40), what is the expected frequency of heterozygous individuals (2pq) in the population?",
            options: [
              "0.24",
              "0.36",
              "0.48",
              "0.60"
            ],
            correctIndex: 2,
            explanation: "Since p + q = 1, p = 1 - 0.40 = 0.60. The frequency of heterozygotes is 2pq = 2 * (0.60) * (0.40) = 0.48.",
            unitId: 7
          },
          {
            id: "7.5.3",
            text: "Which of the following conditions is required to maintain Hardy-Weinberg equilibrium in a natural population?",
            options: [
              "Small population size to encourage genetic drift",
              "Non-random mating to select the strongest partners",
              "A high mutation rate to introduce new alleles",
              "No gene flow (no migration into or out of the population)"
            ],
            correctIndex: 3,
            explanation: "Gene flow (migration) introduces or removes alleles from a population, changing allele frequencies and disrupting equilibrium.",
            unitId: 7
          },
          {
            id: "7.5.4",
            text: "If the frequency of the dominant allele in a population is 0.7, what percentage of the population is expected to express the dominant phenotype?",
            options: [
              "49%",
              "70%",
              "91%",
              "99%"
            ],
            correctIndex: 2,
            explanation: "Here, p = 0.7, so q = 0.3. The dominant phenotype is expressed by p^2 (homozygous dominant) + 2pq (heterozygous). p^2 = 0.49, and 2pq = 2 * 0.7 * 0.3 = 0.42. 0.49 + 0.42 = 0.91 (91%).",
            unitId: 7
          },
          {
            id: "7.5.5",
            text: "Which evolutionary force is driven by chance events causing unpredictable fluctuations in allele frequencies in small populations?",
            options: [
              "Natural Selection",
              "Genetic Drift",
              "Gene Flow",
              "Mutational pressure"
            ],
            correctIndex: 1,
            explanation: "Genetic drift refers to changes in the gene pool due to chance events, primarily affecting small populations.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.9",
        title: "Phylogeny",
        description: "Reconstruct evolutionary relationships using cladograms and molecular phylogenetic trees.",
        youtubeId: "fIv3gM8w2Fw",
        article: `
# Phylogeny

Phylogeny is the study of evolutionary relationships among species.

## Cladograms and Phylogenetic Trees
These diagrams illustrate hypothesized evolutionary histories:
- **Nodes**: Branching points that represent a shared common ancestor from which lineages diverged.
- **Sister Taxa**: Organisms that share an immediate common ancestor not shared by other groups.
- **Outgroup**: A reference taxon that diverged earlier than the other groups, serving as a basis of comparison.

## Construction and Evidence
Modern trees are constructed using morphological features, fossil records, and molecular data:
- **derived characters**: Novel traits that evolved in a lineage and are shared by its descendants.
- **Molecular Data**: Comparing DNA or protein sequences provides the most accurate measure of evolutionary relationships. Fewer sequence differences indicate a more recent common ancestor.
`,
        questions: [
          {
            id: "7.9.1",
            text: "What does a node (branch point) on a phylogenetic tree represent?",
            options: [
              "The extinction of a lineage",
              "The common ancestor of the lineages that diverge from that point",
              "The arrival of a homologous trait",
              "The geographical location of speciation"
            ],
            correctIndex: 1,
            explanation: "Each node represents a speciation event where a single ancestral lineage split into two or more descendant lineages.",
            unitId: 7
          },
          {
            id: "7.9.2",
            text: "Which source of evidence is considered the most reliable for constructing accurate phylogenetic trees today?",
            options: [
              "Comparing anatomical similarities in fossil records",
              "Analyzing similarities in behaviors",
              "Comparing homologous DNA or protein sequence alignments",
              "Geographic distributions of modern species"
            ],
            correctIndex: 2,
            explanation: "Molecular sequence comparison provides quantitative data on genomic mutations, yielding highly precise evolutionary relationships.",
            unitId: 7
          },
          {
            id: "7.9.3",
            text: "What is the function of an outgroup in a cladogram?",
            options: [
              "To identify the most evolved member of the clade",
              "To serve as a baseline for comparison, as it diverged prior to the shared history of the ingroup",
              "To show which organism went extinct first",
              "To prove that crossing over occurred"
            ],
            correctIndex: 1,
            explanation: "An outgroup is a taxon known to have diverged before the lineage containing the species being studied, helping determine derived vs ancestral characters.",
            unitId: 7
          },
          {
            id: "7.9.4",
            text: "If species A and B have 2 differences in their cytochrome c gene, while species A and C have 15 differences, what can be inferred?",
            options: [
              "Species A and C are sister taxa.",
              "Species A shared a more recent common ancestor with species B than with species C.",
              "Species C evolved directly from species B.",
              "Species B has a higher mutation rate than species C."
            ],
            correctIndex: 1,
            explanation: "Fewer sequence differences indicate that species A and B split more recently, sharing a more recent common ancestor than species A and C.",
            unitId: 7
          },
          {
            id: "7.9.5",
            text: "Which term describes traits in different species that look similar due to convergent evolution rather than shared ancestry?",
            options: [
              "Homologous structures",
              "Analogous structures",
              "Vestigial structures",
              "Recombinant structures"
            ],
            correctIndex: 1,
            explanation: "Analogous structures result from convergent evolution, where different species face similar environmental pressures and develop similar adaptations independently.",
            unitId: 7
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Ecology",
    masteryWeight: "10–15%",
    topics: [
      {
        id: "8.2",
        title: "Energy Flow Through Ecosystems",
        description: "Analyze photosynthetic efficiency, trophic levels, and the 10% rule of thermodynamic transfer.",
        youtubeId: "h-P8_O2C8Hw",
        article: `
# Energy Flow Through Ecosystems

Ecosystems require a continuous input of energy, which flows unidirectionally through trophic levels.

## Trophic Levels
- **Primary Producers (Autotrophs)**: Capture solar energy (via photosynthesis) or chemical energy (via chemosynthesis) to synthesize organic compounds.
- **Consumers (Heterotrophs)**: Obtain energy by consuming other organisms:
  - *Primary Consumers (Herbivores)*: Feed directly on producers.
  - *Secondary Consumers*: Feed on primary consumers.
  - *Tertiary Consumers*: Apex predators.
- **Decomposers (Detritivores)**: Break down non-living organic matter, recycling chemical nutrients back to the environment.

## The 10% Rule of Energy Transfer
Energy transfer between trophic levels is highly inefficient due to the laws of thermodynamics:
- **10% Rule**: On average, only **10%** of the energy stored at one trophic level is transferred to the next level.
- **Thermodynamic Loss**: The remaining 90% of energy is lost as metabolic heat, utilized for respiration, or remains undigested as waste.
- **Ecological Pyramids**: Because of this loss, ecosystems rarely support more than four or five trophic levels, and the biomass of producers is vastly larger than that of top predators.
`,
        questions: [
          {
            id: "8.2.1",
            text: "If the primary producers in an ecosystem store 10,000 Joules of energy, approximately how much energy is available to secondary consumers?",
            options: [
              "10,000 J",
              "1,000 J",
              "100 J",
              "10 J"
            ],
            correctIndex: 2,
            explanation: "Applying the 10% rule: Primary producers (10,000 J) -> Primary consumers (1,000 J) -> Secondary consumers (100 J).",
            unitId: 8
          },
          {
            id: "8.2.2",
            text: "Why are food chains in natural ecosystems rarely longer than four or five trophic levels?",
            options: [
              "Top predators are hunted by humans.",
              "Thermodynamic energy loss at each transfer leaves insufficient energy to support viable populations at higher levels.",
              "Organisms at higher levels have smaller metabolic needs.",
              "Decomposers consume all top level species before they can reproduce."
            ],
            correctIndex: 1,
            explanation: "Since only about 10% of energy is transferred between levels, energy is depleted rapidly, making longer food chains energetically unsustainable.",
            unitId: 8
          },
          {
            id: "8.2.3",
            text: "Which organism in a forest ecosystem functions to recycle chemical nutrients back into the soil?",
            options: [
              "Oak tree (producer)",
              "White-tailed deer (herbivore)",
              "Fungi and bacteria (decomposers)",
              "Red-tailed hawk (carnivore)"
            ],
            correctIndex: 2,
            explanation: "Decomposers break down dead organic matter, releasing essential inorganic nutrients back into the biogeochemical cycle.",
            unitId: 8
          },
          {
            id: "8.2.4",
            text: "What happens to the 90% of energy that is NOT transferred to the next trophic level?",
            options: [
              "It is destroyed according to the first law of thermodynamics.",
              "It is stored in the soil as fossil fuels indefinitely.",
              "It is lost as metabolic heat, spent on cellular respiration, or remains in undigested waste.",
              "It is converted into chemical oxygen."
            ],
            correctIndex: 2,
            explanation: "The energy not passed on is used for the organism's daily metabolic activities, lost as heat, or excreted in undigested feces.",
            unitId: 8
          },
          {
            id: "8.2.5",
            text: "Which of the following ecosystems is likely to have the highest net primary productivity (NPP)?",
            options: [
              "Desert",
              "Open Ocean",
              "Tropical Rainforest",
              "Tundra"
            ],
            correctIndex: 2,
            explanation: "Tropical rainforests have abundant sunlight, warm temperatures, and consistent water, which leads to high rates of photosynthesis and primary productivity.",
            unitId: 8
          }
        ]
      },
      {
        id: "8.3",
        title: "Population Ecology",
        description: "Understand population growth curves, carrying capacity, and density-dependent pressures.",
        youtubeId: "mN2-67-m22s",
        article: `
# Population Ecology

Population ecology studies how biotic and abiotic factors influence population size, density, and growth.

## Population Growth Models
- **Exponential Growth**: Occurs under idealized conditions with unlimited resources. The growth rate accelerates, producing a J-shaped curve:
  $$\frac{dN}{dt} = rN$$
  where $N$ is population size, $t$ is time, and $r$ is the intrinsic per capita growth rate.
- **Logistic Growth**: Occurs when resources become limiting. The growth rate slows as the population approaches its carrying capacity ($K$), producing an S-shaped curve:
  $$\frac{dN}{dt} = rN \left(\frac{K - N}{K}\right)$$

## Carrying Capacity ($K$)
Carrying capacity is the maximum population size that a specific environment can sustainably support.

## Limiting Factors
- **Density-Dependent Factors**: Have an increasing impact as population density rises (e.g., competition for food, disease transmission, predation, accumulation of toxic waste).
- **Density-Independent Factors**: Affect population size regardless of density (e.g., weather events, fires, natural disasters).
`,
        questions: [
          {
            id: "8.3.1",
            text: "Which of the following equations represents logistic population growth?",
            options: [
              "dN/dt = rN",
              "dN/dt = rN * ((K - N)/K)",
              "dN/dt = K * ((N - r)/r)",
              "dN/dt = r"
            ],
            correctIndex: 1,
            explanation: "The term (K - N)/K acts as a scaling factor that slows population growth as the population size (N) approaches carrying capacity (K).",
            unitId: 8
          },
          {
            id: "8.3.2",
            text: "What happens to the growth rate of a population as the population size (N) exactly equals its carrying capacity (K)?",
            options: [
              "The growth rate accelerates exponentially.",
              "The growth rate drops to zero.",
              "The population immediately goes extinct.",
              "The per capita birth rate increases."
            ],
            correctIndex: 1,
            explanation: "When N = K, the term (K - N)/K becomes (K - K)/K = 0. Multiplying by 0 gives a growth rate (dN/dt) of zero.",
            unitId: 8
          },
          {
            id: "8.3.3",
            text: "Which of the following is a density-dependent limiting factor that regulates population size?",
            options: [
              "A sudden volcanic eruption",
              "An unusually cold winter storm",
              "Increased rate of disease transmission within a crowded habitat",
              "A forest fire triggered by lightning"
            ],
            correctIndex: 2,
            explanation: "Disease spreads more easily in dense populations, making it a density-dependent limiting factor. Weather and natural disasters are density-independent.",
            unitId: 8
          },
          {
            id: "8.3.4",
            text: "A population of rabbits is introduced to an island with abundant food and no natural predators. Initially, the population growth curve will resemble which of the following?",
            options: [
              "S-shaped (logistic) curve",
              "J-shaped (exponential) curve",
              "A flat horizontal line",
              "A declining diagonal line"
            ],
            correctIndex: 1,
            explanation: "With unlimited resources and no predators, the population grows exponentially, producing a J-shaped curve, before eventually running out of resources.",
            unitId: 8
          },
          {
            id: "8.3.5",
            text: "What does the term carrying capacity (K) represent in ecological terms?",
            options: [
              "The maximum speed at which a species can run",
              "The total number of offspring a single female can produce in her lifetime",
              "The maximum population size that an environment can sustainably support with its available resources",
              "The minimum population size required to avoid genetic drift"
            ],
            correctIndex: 2,
            explanation: "Carrying capacity (K) is the maximum number of individuals of a species that an environment's resources can support without degrading the habitat.",
            unitId: 8
          }
        ]
      }
    ]
  }
];
