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
        article: `
# Structure of Water and Hydrogen Bonding

Water ($H_2O$) is the fundamental solvent of life. Its unique properties arise from its polar molecular geometry and the resulting hydrogen bonds it forms.

## Molecular Polarity
In a water molecule, the oxygen atom is highly <vocab term="Electronegativity" definition="A measure of the tendency of an atom to attract a bonding pair of electrons.">electronegative</vocab> compared to the hydrogen atoms. This difference pulls shared electrons closer to the oxygen, creating a partial negative charge ($\delta^-$) near the oxygen and partial positive charges ($\delta^+$) near the hydrogens. This unequal distribution establishes a polar covalent bond.

## Hydrogen Bonding
A **hydrogen bond** is a weak electrostatic attraction between the $\delta^+$ hydrogen of one water molecule and the $\delta^-$ oxygen of another. Although individual hydrogen bonds are transient, their abundance grants water unique properties:
- **Cohesion**: Water molecules stick to each other, creating a high <vocab term="Surface Tension" definition="The resistance of a liquid surface to stretch or break due to cohesive forces.">surface tension</vocab>.
- **Adhesion**: Water molecules form hydrogen bonds with other polar substances, driving capillary action (e.g., pulling water up plant xylem).
- **High Specific Heat**: Water absorbs a significant amount of heat energy before changing temperature because energy must first break hydrogen bonds. This buffers climates and maintains stable cellular temperatures.
- **Evaporative Cooling**: High kinetic energy water molecules evaporate first, carrying heat away.
- **Density Expansion**: Water is less dense as a solid (ice) than a liquid because hydrogen bonds lock molecules into a spacious crystalline lattice, allowing ice to float and insulate aquatic environments.
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
          }
        ]
      },
      {
        id: "1.2",
        title: "Elements of Life",
        description: "Analyze the biological acquisition and use of carbon, nitrogen, phosphorus, and sulfur.",
        youtubeId: "vQdzKdu-L5c",
        article: `
# Elements of Life

Organisms must exchange matter with the environment to grow, reproduce, and maintain organization. The molecular building blocks of life require specific elements:

## Core Biological Elements
- **Carbon** ($C$): Used to build biological macromolecules (carbohydrates, proteins, lipids, nucleic acids). Carbon can form four covalent bonds, making it the backbone of all organic molecules.
- **Nitrogen** ($N$): Required to build proteins and nucleic acids.
- **Phosphorus** ($P$): Required to build nucleic acids and certain lipids (phospholipids).
- **Sulfur** ($S$): Required to build proteins (specifically the amino acids methionine and cysteine).

## Biogeochemical Cycles
Plants and other autotrophs capture these inorganic elements from the environment (soil, air, water) and incorporate them into organic molecules. Heterotrophs then consume these organic molecules to obtain these essential nutrients.
`,
        questions: [
          {
            id: "1.2.1",
            text: "A researcher analyzes a biological macromolecule and finds it contains carbon, hydrogen, oxygen, nitrogen, and phosphorus. Which of the following is the molecule most likely to be?",
            options: [
              "A triglyceride",
              "A polypeptide",
              "A nucleic acid",
              "A starch molecule"
            ],
            correctIndex: 2,
            explanation: "Nucleic acids (DNA/RNA) contain carbon, hydrogen, oxygen, nitrogen, and phosphorus. Proteins contain S, but rarely P. Carbohydrates and lipids contain C, H, O (and sometimes P in phospholipids, but not nitrogen).",
            unitId: 1
          },
          {
            id: "1.2.2",
            text: "Which element acts as the primary structural backbone for all biological macromolecules due to its ability to form four stable covalent bonds?",
            options: [
              "Nitrogen",
              "Oxygen",
              "Carbon",
              "Phosphorus"
            ],
            correctIndex: 2,
            explanation: "Carbon has four valence electrons, allowing it to form four covalent bonds and construct complex, branched, or ring-shaped molecular backbones.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.3",
        title: "Introduction to Biological Macromolecules",
        description: "Differentiate between monomer subunits and polymers formed by dehydration synthesis.",
        youtubeId: "vQdzKdu-L5c",
        article: `
# Introduction to Biological Macromolecules

Biological macromolecules are large molecules built from smaller organic subunits.

## Monomers and Polymers
- **Monomer**: A single molecular subunit (e.g., monosaccharides, amino acids, nucleotides).
- **Polymer**: A long chain of monomers linked by covalent bonds (e.g., polysaccharides, polypeptides, nucleic acids).

## Chemical Reactions
The synthesis and breakdown of polymers are mediated by two complementary reactions:
1. **<vocab term="Dehydration Synthesis" definition="A chemical reaction in which two molecules are covalently bonded together with the removal of a water molecule.">Dehydration Synthesis</vocab>**: One monomer provides a hydroxyl group ($-OH$) and the other provides a hydrogen ($-H$), releasing a water molecule ($H_2O$) and forming a covalent bond. This reaction requires energy.
2. **<vocab term="Hydrolysis" definition="A chemical reaction that breaks bonds between molecules by the addition of water.">Hydrolysis</vocab>**: A water molecule is added to cleave a covalent bond, separating a polymer into individual monomers. This reaction releases energy.
`,
        questions: [
          {
            id: "1.3.1",
            text: "Which of the following best describes the chemical reaction that joins two amino acids together to form a dipeptide?",
            options: [
              "Hydrolysis, which adds a water molecule and breaks a covalent bond.",
              "Dehydration synthesis, which releases a water molecule and forms a covalent peptide bond.",
              "Ionic bonding, which occurs when electrons are transferred between R-groups.",
              "Hydrogen bonding between nitrogenous bases."
            ],
            correctIndex: 1,
            explanation: "Dehydration synthesis links monomers (like amino acids) by removing a hydroxyl group from one and a hydrogen from another, releasing water and forming a covalent bond.",
            unitId: 1
          },
          {
            id: "1.3.2",
            text: "If a starch polymer consisting of 100 glucose monomers is completely broken down into individual glucose molecules, how many water molecules are consumed in the process?",
            options: [
              "99",
              "100",
              "101",
              "50"
            ],
            correctIndex: 0,
            explanation: "Breaking down a polymer of 100 monomers requires cleaving 99 covalent bonds. Each cleavage consumes one water molecule during hydrolysis.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.4",
        title: "Properties of Biological Macromolecules",
        description: "Compare structural differences and functions of carbohydrates, lipids, proteins, and nucleic acids.",
        youtubeId: "vQdzKdu-L5c",
        article: `
# Properties of Biological Macromolecules

The structure of a macromolecule directly determines its function:

## 1. Carbohydrates
Consist of carbon, hydrogen, and oxygen in a $1:2:1$ ratio. Monomers are monosaccharides (e.g., glucose). Polymers like starch and glycogen store energy, while cellulose provides structural support in plant cell walls. The bonding configuration (alpha vs. beta linkages) determines digestibility.

## 2. Lipids
Nonpolar, hydrophobic macromolecules. They do not form true polymers:
- **Fats (Triglycerides)**: Glycerol bonded to three fatty acids. Fatty acids can be **saturated** (no double bonds, packed tightly, solid at room temperature) or **unsaturated** (contain double bonds creating kinks, liquid at room temperature).
- **Phospholipids**: Glycerol bonded to a polar phosphate head and two nonpolar fatty acid tails. This amphipathic nature forms biological membranes.
- **Steroids**: Four fused carbon rings (e.g., cholesterol, hormones).

## 3. Proteins
Polymers of amino acids linked by peptide bonds. Every amino acid has an amino group, a carboxyl group, a hydrogen, and a variable **R-group** (side chain). R-groups can be polar, nonpolar, acidic, or basic, dictating protein folding.
- **Primary**: Sequence of amino acids.
- **Secondary**: Local folding ($\alpha$-helices, $\beta$-sheets) via backbone hydrogen bonds.
- **Tertiary**: 3D shape driven by R-group interactions (hydrophobic effects, disulfide bridges, ionic bonds).
- **Quaternary**: Multi-polypeptide complexes.

## 4. Nucleic Acids
Store and transmit genetic information. Polymers of nucleotides.
`,
        questions: [
          {
            id: "1.4.1",
            text: "What makes saturated fatty acids solid at room temperature compared to unsaturated fatty acids?",
            options: [
              "They contain ionic bonds that strengthen their structures.",
              "They lack carbon-carbon double bonds, allowing their straight hydrocarbon chains to pack tightly together.",
              "They contain hydrophilic phosphate groups that bind water.",
              "They form extensive disulfide bridges between R-groups."
            ],
            correctIndex: 1,
            explanation: "Saturated fatty acids have straight tails because they contain no double bonds, enabling them to pack tightly and remain solid at room temperature. Unsaturated fatty acids have kinks due to double bonds.",
            unitId: 1
          },
          {
            id: "1.4.2",
            text: "Which level of protein structure is characterized by alpha helices and beta pleated sheets formed by hydrogen bonds along the polypeptide backbone?",
            options: [
              "Primary structure",
              "Secondary structure",
              "Tertiary structure",
              "Quaternary structure"
            ],
            correctIndex: 1,
            explanation: "Secondary structure is formed by hydrogen bonding between the amine and carboxyl groups of the polypeptide backbone, creating alpha helices and beta sheets.",
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
A series of flattened membrane sacs (cisternae). The Golgi modifies, sorts, and packages proteins from the ER into transport vesicles destined for the cell membrane, lysosomes, or secretion.

## Mitochondria
Mitochondria have a double-membrane structure. The outer membrane is smooth, while the inner membrane is highly folded into <vocab term="Cristae" definition="The folds of the inner mitochondrial membrane that house electron transport chain proteins.">cristae</vocab> to maximize surface area for ATP synthesis during cellular respiration. The fluid matrix contains mitochondrial DNA and ribosomes.

## Lysosomes and Vacuoles
- **Lysosomes**: Acidic membrane-bound sacs containing hydrolytic enzymes to digest macromolecules, old organelles, or foreign invaders.
- **Vacuoles**: Membrane-bound sacs. In plants, a large central vacuole maintains turgor pressure and stores water/nutrients.

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
          }
        ]
      },
      {
        id: "2.2",
        title: "Cell Structure and Function",
        description: "Examine how internal membranes coordinate cellular tasks and export products.",
        youtubeId: "1Z9pqST72is",
        article: `
# Cell Structure and Function

The structural components of a cell work cooperatively to perform metabolic functions:

## The Endomembrane System
This system coordinates protein synthesis, processing, and export:
1. **Ribosomes** assemble a polypeptide chain using genetic code from mRNA.
2. The **Rough ER** folds the polypeptide into its native 3D shape and packages it into a transport vesicle.
3. The **Golgi Complex** receives the vesicle, modifies the carbohydrate tags on the protein, and packages it into a secretory vesicle.
4. The secretory vesicle fuses with the **Plasma Membrane** to release the protein outside the cell via exocytosis.

## Energy Organelles
Mitochondria and chloroplasts function independently of the endomembrane system. They contain their own ribosomes and DNA, dividing autonomously inside the cell.
`,
        questions: [
          {
            id: "2.2.1",
            text: "Which of the following is the correct pathway for a protein destined for secretion from the cell?",
            options: [
              "Lysosome -> Golgi -> Rough ER -> Plasma Membrane",
              "Rough ER -> Transport Vesicle -> Golgi -> Secretory Vesicle -> Plasma Membrane",
              "Golgi -> Rough ER -> Ribosome -> Plasma Membrane",
              "Smooth ER -> Rough ER -> Golgi -> Lysosome"
            ],
            correctIndex: 1,
            explanation: "Proteins are synthesized on the ribosomes of the Rough ER, transported in vesicles to the Golgi for packaging and sorting, and then carried in secretory vesicles to the plasma membrane.",
            unitId: 2
          },
          {
            id: "2.2.2",
            text: "Which cellular component is structurally responsible for the degradation of worn-out organelles and cellular debris?",
            options: [
              "The Smooth ER, because it detoxifies substances.",
              "The Golgi Complex, because it sorts cellular products.",
              "The Lysosome, because it contains acidic hydrolytic enzymes.",
              "The Mitochondrion, because it burns waste to release energy."
            ],
            correctIndex: 2,
            explanation: "Lysosomes are membrane-bound sacs of hydrolytic enzymes that fuse with vesicles containing old organelles or waste to digest and recycle their components.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.3",
        title: "Cell Size",
        description: "Calculate surface area-to-volume ratios and analyze their impact on transport efficiency.",
        youtubeId: "1Z9pqST72is",
        article: `
# Cell Size

Cells must remain small to maintain a high efficiency of nutrient exchange and waste elimination.

## The Surface Area-to-Volume Ratio
The rate of transport across the membrane depends on **Surface Area** ($SA$), while the metabolic demands of the cell depend on its **Volume** ($V$).
- For a sphere:
  $$SA = 4\pi r^2 \quad \text{and} \quad V = \frac{4}{3}\pi r^3$$
- As a cell increases in size, its volume increases much faster than its surface area:
  $$\frac{SA}{V} \propto \frac{1}{r}$$
- A smaller cell has a **higher** $SA/V$ ratio, which increases the rate of diffusion.

## Evolutionary Adaptations
Cells that specialize in absorption (e.g., intestinal microvilli, root hairs) develop highly folded membranes or elongated shapes to maximize surface area without increasing volume.
`,
        questions: [
          {
            id: "2.3.1",
            text: "Why is a high surface area-to-volume ratio advantageous for a cell?",
            options: [
              "It increases the distance molecules must travel to reach the nucleus.",
              "It maximizes the membrane surface available for diffusion relative to the metabolic volume being serviced.",
              "It decreases the rate of heat loss to the environment.",
              "It allows the cell to store more waste products."
            ],
            correctIndex: 1,
            explanation: "A high SA/V ratio means there is a large amount of membrane area to import nutrients and export wastes quickly relative to the cell's metabolic volume.",
            unitId: 2
          },
          {
            id: "2.3.2",
            text: "Which of the following cells would be most efficient at diffusing oxygen into its center?",
            options: [
              "A spherical cell with a diameter of 10 micrometers",
              "A spherical cell with a diameter of 100 micrometers",
              "A spherical cell with a diameter of 2 micrometers",
              "A spherical cell with a diameter of 50 micrometers"
            ],
            correctIndex: 2,
            explanation: "Smaller cells have a higher surface area-to-volume ratio than larger cells of the same shape, making the 2-micrometer cell the most efficient at diffusion.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.4",
        title: "Plasma Membranes",
        description: "Examine the fluid mosaic model, membrane proteins, and selective permeability.",
        youtubeId: "dPKvHrD1eS4",
        article: `
# Plasma Membranes

Cell membranes are selectively permeable barriers described by the **Fluid Mosaic Model**.

## Membrane Structure
- **Phospholipid Bilayer**: Hydrophilic (polar) phosphate heads face the aqueous external and internal environments, while hydrophobic (nonpolar) fatty acid tails face inward, avoiding water.
- **Fluidity**: Cholesterol regulates fluidity, preventing packing at cold temperatures and stabilizing the membrane at high temperatures.
- **Proteins**: 
  - *Integral Proteins*: Span the bilayer; hydrophobic middle regions, hydrophilic ends.
  - *Peripheral Proteins*: Loosely bound to the membrane surface.
- **Carbohydrates**: Glycoproteins and glycolipids act as cell recognition markers.
`,
        questions: [
          {
            id: "2.4.1",
            text: "Which of the following molecules forms the primary structural matrix of the plasma membrane, organizing into a bilayer due to its amphipathic nature?",
            options: [
              "Glycoproteins",
              "Cholesterol",
              "Phospholipids",
              "Triglycerides"
            ],
            correctIndex: 2,
            explanation: "Phospholipids are amphipathic (polar heads, nonpolar tails), causing them to self-assemble into a bilayer in an aqueous environment.",
            unitId: 2
          },
          {
            id: "2.4.2",
            text: "What role does cholesterol play in the plasma membrane of animal cells?",
            options: [
              "It actively pumps sodium ions out of the cell.",
              "It binds to hormones to trigger transduction cascades.",
              "It regulates membrane fluidity across varying temperatures.",
              "It forms the rigid cell wall of animal cells."
            ],
            correctIndex: 2,
            explanation: "Cholesterol prevents fatty acid tails from packing too tightly at low temperatures and restrains their movement at high temperatures, preserving membrane stability.",
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
          }
        ]
      },
      {
        id: "2.6",
        title: "Facilitated Diffusion",
        description: "Study how transport proteins facilitate passive movement of polar and charged molecules.",
        youtubeId: "dPKvHrD1eS4",
        article: `
# Facilitated Diffusion

Facilitated diffusion is a form of passive transport that uses membrane proteins to transport polar or charged substances down their concentration gradients.

## Transport Proteins
Because the hydrophobic core of the membrane blocks hydrophilic substances, they require assistance:
- **Channel Proteins**: Act as open tunnels through the membrane. Many are gated (open or close in response to electrical or chemical signals). Examples include **aquaporins** and **ion channels**.
- **Carrier Proteins**: Bind to specific molecules and change shape to carry them across. Example: the glucose transporter (GLUT).

## Features of Passive Facilitated Transport
- **No Energy Required**: Solutes move from high concentration to low concentration.
- **Saturation**: The rate of transport is limited by the number of transport proteins available in the membrane.
`,
        questions: [
          {
            id: "2.6.1",
            text: "Which of the following is a characteristic of facilitated diffusion?",
            options: [
              "It requires the hydrolysis of ATP.",
              "It transports molecules against their concentration gradient.",
              "It uses membrane proteins to transport polar molecules down their concentration gradient.",
              "It occurs only in prokaryotic cells."
            ],
            correctIndex: 2,
            explanation: "Facilitated diffusion is passive (no ATP, down gradient) and utilizes channel or carrier proteins to help hydrophilic/polar molecules cross the hydrophobic lipid bilayer.",
            unitId: 2
          },
          {
            id: "2.6.2",
            text: "What limits the rate of facilitated diffusion when substrate concentration is extremely high?",
            options: [
              "The cell running out of ATP",
              "The complete saturation of all available transport proteins",
              "The denaturation of the lipid bilayer",
              "Feedback inhibition from the cell wall"
            ],
            correctIndex: 1,
            explanation: "Since facilitated diffusion relies on transport proteins, once all transport proteins are bound and actively working (saturated), the rate of transport reaches a maximum and cannot increase.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.7",
        title: "Tonicity and Osmoregulation",
        description: "Analyze water movement across membranes using tonicity and water potential equations.",
        youtubeId: "dPKvHrD1eS4",
        article: `
# Tonicity and Osmoregulation

**Osmosis** is the diffusion of free water molecules across a selectively permeable membrane from regions of low solute concentration to high solute concentration.

## Tonicity
Tonicity describes the ability of an extracellular solution to cause a cell to gain or lose water:
- **Hypertonic**: Extracellular solute concentration is higher than inside the cell. Water exits the cell. Animal cells shrivel; plant cells undergo **plasmolysis**.
- **Hypotonic**: Extracellular solute concentration is lower than inside the cell. Water enters the cell. Animal cells swell and burst (lyse); plant cells gain turgor pressure (turgid), which is their normal state.
- **Isotonic**: Concentrations are equal. No net water movement.

## Water Potential ($\Psi$)
Water moves from areas of high water potential to low water potential. The equation is:
$$\Psi = \Psi_p + \Psi_s$$
where $\Psi_p$ is pressure potential and $\Psi_s$ is solute potential:
$$\Psi_s = -iCRT$$
- $i$: Ionization constant (e.g., 1 for sucrose, 2 for NaCl).
- $C$: Molar concentration.
- $R$: Pressure constant ($0.0831 \text{ L bar/mol K}$).
- $T$: Temperature in Kelvin ($^\circ\text{C} + 273$).
`,
        questions: [
          {
            id: "2.7.1",
            text: "A red blood cell is placed in a beaker containing a 10% NaCl solution, which is hypertonic to the cell's cytoplasm. What will happen to the cell?",
            options: [
              "Water will enter the cell, causing it to swell and lyse.",
              "Water will exit the cell, causing the cell to shrivel.",
              "There will be no net movement of water, and the cell will remain normal.",
              "Sodium ions will pump water into the cell."
            ],
            correctIndex: 1,
            explanation: "In a hypertonic solution, the water concentration is higher inside the cell than outside, so water moves down its gradient out of the cell, causing it to shrivel.",
            unitId: 2
          },
          {
            id: "2.7.2",
            text: "Which of the following represents the solute potential (Psi_s) of a 0.5 M sucrose solution at 27 degrees Celsius (300 K) open to the atmosphere (ionization constant i = 1)?",
            options: [
              "-12.46 bars",
              "-24.93 bars",
              "0 bars",
              "-1.25 bars"
            ],
            correctIndex: 0,
            explanation: "Using the formula Psi_s = -iCRT: Psi_s = -(1) * (0.5 mol/L) * (0.0831 L bar/mol K) * (300 K) = -12.465 bars, which rounds to -12.46 bars.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.8",
        title: "Mechanisms of Transport",
        description: "Examine active transport, cotransport, and bulk transport mechanisms.",
        youtubeId: "dPKvHrD1eS4",
        article: `
# Mechanisms of Transport

Cells utilize active processes to import or export large molecules, or to establish concentration gradients.

## Primary and Secondary Active Transport
- **Primary Active Transport**: Uses energy from ATP hydrolysis to pump solutes against their gradient. The **Sodium-Potassium Pump** ($Na^+/K^+$ ATPase) is a classic example.
- **Secondary Active Transport (Cotransport)**: A pump uses ATP to establish an electrochemical gradient of an ion (e.g., $H^+$). The diffusion of this ion back down its gradient is coupled with the transport of another substance (e.g., glucose) against its gradient.

## Bulk Transport
Large polar molecules or whole cells cross via vesicular transport:
- **Exocytosis**: Internal vesicles fuse with the plasma membrane to release cargo.
- **Endocytosis**: Cell takes in matter:
  - *Phagocytosis*: Engulfing large particles ('cell eating').
  - *Pinocytosis*: Non-specific fluid intake ('cell drinking').
  - *Receptor-Mediated Endocytosis*: Specific binding to receptor proteins triggers vesicle formation.
`,
        questions: [
          {
            id: "2.8.1",
            text: "Which transport mechanism uses the energy stored in an electrochemical gradient, established by a primary active transport pump, to drive the uptake of another solute?",
            options: [
              "Simple diffusion",
              "Facilitated diffusion",
              "Cotransport (Secondary active transport)",
              "Receptor-mediated exocytosis"
            ],
            correctIndex: 2,
            explanation: "Cotransport couples the downhill diffusion of a solute (like protons) to the uphill transport of another substance (like sucrose or glucose).",
            unitId: 2
          },
          {
            id: "2.8.2",
            text: "Which process is utilized by a cell to import highly specific macromolecules by binding them to extracellular membrane proteins before engulfing them?",
            options: [
              "Pinocytosis",
              "Phagocytosis",
              "Receptor-mediated endocytosis",
              "Exocytosis"
            ],
            correctIndex: 2,
            explanation: "Receptor-mediated endocytosis relies on specific cell-surface receptor proteins binding target ligands before pinching off into a coated vesicle.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.9",
        title: "Cell Compartmentalization",
        description: "Investigate how membrane-bound organelles localize and optimize eukaryotic reactions.",
        youtubeId: "1Z9pqST72is",
        article: `
# Cell Compartmentalization

Internal membrane-bound organelles partition eukaryotic cells into distinct compartments.

## Benefits of Compartmentalization
1. **Reaction Efficiency**: Substrates and enzymes are concentrated within a small volume (e.g., hydrolytic enzymes in the lysosome).
2. **Protection**: Toxic metabolic byproducts are isolated (e.g., hydrogen peroxide is broken down inside peroxisomes).
3. **Optimized Environments**: Different organelles maintain specific chemical conditions (e.g., low pH in lysosomes).
4. **Simultaneous Processes**: Conflicting metabolic pathways (like fatty acid synthesis and breakdown) can run simultaneously in different compartments.

## Prokaryotes vs. Eukaryotes
Prokaryotes lack membrane-bound organelles and internal compartmentalization. Their metabolic reactions occur in the cytoplasm or along specialized foldings of the cell membrane.
`,
        questions: [
          {
            id: "2.9.1",
            text: "How does compartmentalization protect a cell from its own digestive enzymes?",
            options: [
              "By distributing the enzymes evenly throughout the cytoplasm.",
              "By enclosing hydrolytic enzymes inside lysosomes, keeping them isolated from the cytosol.",
              "By neutralizing the enzymes using mitochondrial ATP.",
              "By translating the enzymes only during cell division."
            ],
            correctIndex: 1,
            explanation: "Enclosing hydrolytic enzymes inside the membrane of the lysosome protects the rest of the cell from self-digestion.",
            unitId: 2
          },
          {
            id: "2.9.2",
            text: "Which of the following is true regarding cellular compartmentalization?",
            options: [
              "Prokaryotes contain extensive membrane-bound compartments to run photosynthesis.",
              "Eukaryotes utilize internal membranes to separate conflicting chemical reactions.",
              "Compartmentalization reduces the surface area of internal membranes.",
              "All eukaryotic organelles share identical pH levels."
            ],
            correctIndex: 1,
            explanation: "Eukaryotic compartmentalization isolates incompatible chemical reactions, such as the synthesis of lipids in the ER and the breakdown of wastes in lysosomes.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.10",
        title: "Origins of Cell Compartmentalization",
        description: "Analyze the endosymbiotic theory for the evolution of mitochondria and chloroplasts.",
        youtubeId: "1Z9pqST72is",
        article: `
# Origins of Cell Compartmentalization

The **Endosymbiotic Theory** explains how eukaryotic cells acquired membrane-bound organelles, specifically mitochondria and chloroplasts.

## The Theory
An ancestral prokaryote folded its outer membrane to create the endomembrane system (nucleus, ER). Later, it engulfed an aerobic, nonphotosynthetic prokaryote (which became the **mitochondrion**) and a photosynthetic prokaryote (which became the **chloroplast**). Instead of digesting them, a mutualistic relationship was established.

## Evidence for Endosymbiosis
Mitochondria and chloroplasts share several traits with modern free-living prokaryotes:
- **Double Membrane**: The inner membrane belongs to the original prokaryote; the outer membrane formed during engulfment.
- **Circular DNA**: Both organelles have their own circular DNA genomes, separate from the nuclear genome.
- **Prokaryotic Ribosomes**: Their internal ribosomes are $70S$, matching bacterial size and composition rather than eukaryotic $80S$ ribosomes.
- **Binary Fission**: They divide independently within the cell using a process similar to bacterial binary fission.
`,
        questions: [
          {
            id: "2.10.1",
            text: "Which of the following features of mitochondria provides the strongest evidence for the endosymbiotic theory?",
            options: [
              "They contain their own circular DNA molecule and prokaryotic-like ribosomes.",
              "They are the primary site of ATP synthesis.",
              "They can fuse with lysosomes to recycle nutrients.",
              "They rely on nuclear genes for all of their structural proteins."
            ],
            correctIndex: 0,
            explanation: "Mitochondria contain circular DNA genomes and 70S ribosomes, both of which are hallmark characteristics of prokaryotic cells, supporting their origin as engulfed bacteria.",
            unitId: 2
          },
          {
            id: "2.10.2",
            text: "According to the endosymbiotic theory, what was the ancestral organism that evolved into the modern chloroplast?",
            options: [
              "An aerobic archaeon",
              "An anaerobic eukaryotic yeast cell",
              "A photosynthetic bacterium (cyanobacterium)",
              "A free-living virus"
            ],
            correctIndex: 2,
            explanation: "The chloroplast evolved from an engulfed photosynthetic prokaryote, similar to modern cyanobacteria, which entered into a mutualistic relationship with the host cell.",
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
        id: "3.1",
        title: "Enzyme Structure",
        description: "Understand the structural properties of enzymes and substrate specificity.",
        youtubeId: "qgVFkRn8f10",
        article: `
# Enzyme Structure

Enzymes are biological catalysts, typically proteins, that speed up biochemical reactions.

## The Active Site
An enzyme's function is determined by its three-dimensional conformation. The **active site** is a specific cleft or pocket on the enzyme where the **substrate** binds.
- **Specificity**: The shape and chemical properties of the active site match only specific substrates. This is determined by the local arrangement of amino acid R-groups (side chains).
- **Induced Fit**: When a substrate binds, the enzyme undergoes a slight conformational change to clamp down on the substrate, aligning catalytic groups and stabilizing the transition state.
`,
        questions: [
          {
            id: "3.1.1",
            text: "Which level of protein folding is directly responsible for forming the unique three-dimensional active site of an enzyme?",
            options: [
              "Primary structure",
              "Secondary structure",
              "Tertiary structure",
              "Quaternary structure"
            ],
            correctIndex: 2,
            explanation: "Tertiary structure refers to the overall 3D folding of a single polypeptide chain, which positions specific amino acid R-groups to create the functional active site.",
            unitId: 3
          },
          {
            id: "3.1.2",
            text: "What occurs during an 'induced fit' when a substrate binds to an enzyme?",
            options: [
              "The substrate changes its chemical identity before binding.",
              "The active site undergoes a slight shape change to bind the substrate more securely.",
              "The enzyme permanently denatures.",
              "Covalent peptide bonds in the primary sequence are cleaved."
            ],
            correctIndex: 1,
            explanation: "Induced fit describes how an enzyme adjusts its conformation slightly upon substrate binding to establish a tighter, more active catalytic fit.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.2",
        title: "Enzyme Catalysis",
        description: "Analyze factors affecting enzyme function, denaturation, and mechanisms of inhibition.",
        youtubeId: "qgVFkRn8f10",
        article: `
# Enzyme Catalysis

Enzymes accelerate chemical reactions by lowering the activation energy barrier.

## Activation Energy ($E_a$)
The **activation energy** ($E_a$) is the initial input of energy required to destabilize reactant bonds and start a reaction.
- Enzymes **lower** $E_a$ by orienting substrates, bending bonds to facilitate breakage, or providing a microenvironment with a favorable pH or charge.
- Enzymes **do not** alter the overall free energy change ($\Delta G$) of the reaction.

## Factors Affecting Reaction Rates
1. **Temperature**: Elevating temperature increases kinetic energy and molecular collisions, increasing activity. However, temperatures above the optimum cause thermal vibrations that break intramolecular bonds, **denaturing** the enzyme (disrupting secondary/tertiary structures and destroying active site configuration).
2. **pH**: Shifts outside the optimum pH alter the ionization states of amino acid side chains, disrupting ionic bonds and denaturing the enzyme.
3. **Concentration**: Increasing substrate or enzyme concentration increases reaction velocity until it reaches saturation ($V_{max}$), where all active sites are occupied.

## Inhibition
- **Competitive Inhibitor**: Competes for the active site. Can be overcome by increasing substrate concentration.
- **Noncompetitive (Allosteric) Inhibitor**: Binds elsewhere, rendering the active site inactive. Increasing substrate has no effect.
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
          }
        ]
      },
      {
        id: "3.3",
        title: "Environmental Impacts on Enzyme Function",
        description: "Study how temperature, pH, and inhibitors impact enzyme conformation and rates.",
        youtubeId: "qgVFkRn8f10",
        article: `
# Environmental Impacts on Enzyme Function

The environment surrounding an enzyme determines its conformation and rate of activity.

## Denaturation
When an enzyme loses its native 3D shape, it is **denatured**. The active site is altered, rendering it unable to bind substrate. Denaturation is usually irreversible.
- **High Temperature**: Adds kinetic energy, breaking weak hydrogen and ionic bonds.
- **pH Extremes**: Shifts in hydrogen ion ($H^+$) or hydroxide ion ($OH^-$) concentrations alter the charge of R-groups, disrupting ionic attractions.
- **Low Temperature**: Does **not** denature enzymes. Instead, it decreases kinetic energy, slowing molecular movement and reducing collision rates.

## Inhibitors and Rates
- **Competitive Inhibitor**: Binds to the active site. Adding more substrate outcompetes the inhibitor, restoring the normal $V_{max}$.
- **Noncompetitive Inhibitor**: Binds to an allosteric site. The shape change is permanent, lowering the maximum rate of the reaction ($V_{max}$) regardless of substrate concentration.
`,
        questions: [
          {
            id: "3.3.1",
            text: "How does a cold environment (e.g., 4 degrees Celsius) affect the rate of an enzyme-catalyzed reaction?",
            options: [
              "It denatures the enzyme's active site.",
              "It slows the reaction by reducing the kinetic energy and collision rates of enzymes and substrates.",
              "It increases the activation energy of the reaction.",
              "It acts as a noncompetitive inhibitor."
            ],
            correctIndex: 1,
            explanation: "Cold temperatures do not denature enzymes. Instead, they reduce molecular speed, meaning enzymes and substrates collide less frequently, slowing the reaction rate.",
            unitId: 3
          },
          {
            id: "3.3.2",
            text: "If you double the substrate concentration of a reaction inhibited by a competitive inhibitor, what is the effect on the rate of reaction?",
            options: [
              "The rate will decrease further.",
              "The rate will remain completely unchanged.",
              "The rate of reaction will increase because the excess substrate outcompetes the inhibitor for the active site.",
              "The enzyme will denature due to substrate overload."
            ],
            correctIndex: 2,
            explanation: "Competitive inhibitors bind to the active site. Increasing the substrate concentration increases the probability that substrate will occupy the active site rather than the inhibitor, overcoming the inhibition.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.4",
        title: "Cellular Energy",
        description: "Understand the thermodynamics of ATP hydrolysis and energy coupling in cells.",
        youtubeId: "qgVFkRn8f10",
        article: `
# Cellular Energy

Living systems require constant inputs of energy to maintain order and power life processes.

## Thermodynamics
- **First Law**: Energy cannot be created or destroyed, only transformed.
- **Second Law**: Every energy transfer increases the entropy (disorder) of the universe. Cells must use energy to offset this natural drive toward entropy.

## ATP: The Energy Currency
**Adenosine Triphosphate** ($ATP$) stores energy in its unstable phosphate bonds.
- **ATP Hydrolysis**: Breaking the terminal phosphate bond is highly exergonic ($\Delta G = -30.5 \text{ kJ/mol}$):
  $$\text{ATP} + H_2O \rightarrow \text{ADP} + P_i + \text{energy}$$
- **Energy Coupling**: Cells power endergonic reactions (e.g., active transport, muscle contraction) by coupling them with the exergonic hydrolysis of ATP.
`,
        questions: [
          {
            id: "3.4.1",
            text: "Which of the following is the best example of energy coupling in a cell?",
            options: [
              "The synthesis of ATP using energy released during cellular respiration.",
              "Using the exergonic hydrolysis of ATP to drive the endergonic transport of sodium ions across the cell membrane.",
              "The passive diffusion of oxygen down its concentration gradient.",
              "Breaking down glycogen into glucose during fasting."
            ],
            correctIndex: 1,
            explanation: "Energy coupling pairs an exergonic reaction (ATP hydrolysis) with an endergonic reaction (pumping ions against their gradient) to make the overall process favorable.",
            unitId: 3
          },
          {
            id: "3.4.2",
            text: "Why is the hydrolysis of ATP an exergonic reaction?",
            options: [
              "It requires a large input of heat energy to break the ribose ring.",
              "The products (ADP and inorganic phosphate) are more stable and have less free energy than the reactant (ATP).",
              "It decreases the entropy of the surroundings.",
              "It converts carbon dioxide into glucose."
            ],
            correctIndex: 1,
            explanation: "ATP hydrolysis releases free energy (exergonic) because the repulsion of the three adjacent negative phosphate groups in ATP is relieved, resulting in more stable ADP and Pi products.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.5",
        title: "Photosynthesis",
        description: "Study light-dependent conversion of photons to ATP/NADPH, and light-independent carbon fixation.",
        youtubeId: "sQK3Yr4Sc_k",
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
          }
        ]
      },
      {
        id: "3.6",
        title: "Cellular Respiration",
        description: "Harvest energy from glucose via glycolysis, the Krebs cycle, and oxidative phosphorylation.",
        youtubeId: "00jbG_cfGuQ",
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
              "To serve as a source of carbon atoms for the Krebs Cycle",
              "To act as the terminal electron acceptor in the Electron Transport Chain",
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
          }
        ]
      },
      {
        id: "3.7",
        title: "Fitness",
        description: "Analyze how molecular variation within cells provides a selective advantage.",
        youtubeId: "00jbG_cfGuQ",
        article: `
# Fitness

At the organismal level, fitness is the ability to survive and reproduce. At the cellular and molecular levels, **fitness** is supported by variation in molecular structures.

## Molecular Variation
Organisms with molecular diversity are better suited to survive shifting environmental conditions:
- **Chlorophyll**: Different types of chlorophyll molecules ($\text{chlorophyll } a$ and $b$) absorb different wavelengths of light, allowing plants to maximize light capture.
- **Phospholipids**: Adjusting saturated vs. unsaturated fatty acid ratios in membrane phospholipids prevents membranes from freezing or melting in extreme climates.
- **Hemoglobin**: Fetal hemoglobin has a higher affinity for oxygen than adult hemoglobin, allowing the fetus to extract oxygen from maternal blood.
`,
        questions: [
          {
            id: "3.7.1",
            text: "Why is having multiple types of chlorophyll pigments advantageous for a photosynthetic plant?",
            options: [
              "It allows the plant to synthesize different types of glucose molecules.",
              "It increases the range of light wavelengths the plant can absorb to power the light reactions.",
              "It prevents the plant from losing water via transpiration.",
              "It allows the plant to run the Calvin Cycle without ATP."
            ],
            correctIndex: 1,
            explanation: "Different pigments absorb different light wavelengths. Diverse pigments (chlorophyll a, chlorophyll b, carotenoids) expand the light absorption spectrum, increasing photosynthetic efficiency.",
            unitId: 3
          },
          {
            id: "3.7.2",
            text: "How does the higher oxygen affinity of fetal hemoglobin support the survival of a developing mammalian fetus?",
            options: [
              "It allows the fetus to survive in an entirely anaerobic environment.",
              "It enables the fetal blood to extract oxygen across the placenta from the mother's lower-affinity hemoglobin.",
              "It speeds up the rate of cellular respiration in fetal muscle tissues.",
              "It prevents carbon dioxide from dissolving in fetal plasma."
            ],
            correctIndex: 1,
            explanation: "Because fetal hemoglobin has a higher oxygen affinity, it can bind oxygen molecules released by the mother's adult hemoglobin, securing oxygen for fetal growth.",
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
          }
        ]
      },
      {
        id: "4.2",
        title: "Introduction to Signal Transduction",
        description: "Learn how extracellular signals are recognized and converted into intracellular messages.",
        youtubeId: "5M22VCEmJd0",
        article: `
# Introduction to Signal Transduction

Signal transduction pathways link signal reception with cellular responses.

## Receptors
Receptors are classified by their cellular location:
1. **Cell Membrane Receptors**: Transmembrane proteins that bind polar, hydrophilic ligands (e.g., G-Protein Coupled Receptors (GPCRs), Tyrosine Kinases, Ion Channels).
2. **Intracellular Receptors**: Cytoplasmic or nuclear proteins that bind small, nonpolar, hydrophobic ligands (e.g., steroid hormones like estrogen or testosterone).

## Conformational Change
A ligand acts as an allosteric regulator. Upon binding to the extracellular side of a transmembrane receptor, the receptor changes shape on the cytoplasmic side, exposing a binding site or activating catalytic activity.
`,
        questions: [
          {
            id: "4.2.1",
            text: "Which type of signaling ligand would bind to an intracellular receptor rather than a cell membrane receptor?",
            options: [
              "A large hydrophilic protein hormone like insulin",
              "A small hydrophobic steroid hormone like testosterone",
              "A charged sodium ion",
              "A polar neurotransmitter like acetylcholine"
            ],
            correctIndex: 1,
            explanation: "Hydrophobic ligands (like steroid hormones) diffuse easily through the lipid bilayer, allowing them to bind to intracellular receptors in the cytoplasm or nucleus.",
            unitId: 4
          },
          {
            id: "4.2.2",
            text: "What is the immediate molecular event that occurs after a ligand binds to a G-protein coupled receptor (GPCR)?",
            options: [
              "The receptor is degraded by lysosomes.",
              "The receptor undergoes a conformational change, allowing it to bind and activate an inactive G-protein.",
              "The ligand enters the cell to act as a transcription factor.",
              "The cell membrane immediately depolarizes."
            ],
            correctIndex: 1,
            explanation: "Ligand binding induces a shape change in the GPCR, enabling it to interact with and activate a G-protein by causing it to swap GDP for GTP.",
            unitId: 4
          }
        ]
      },
      {
        id: "4.3",
        title: "Signal Transduction",
        description: "Analyze details of signaling cascades, amplification, and second messengers.",
        youtubeId: "5M22VCEmJd0",
        article: `
# Signal Transduction

Intracellular cascades relay signals from receptors to target proteins, amplifying the message along the way.

## Signal Amplification
A single ligand binding to a receptor can activate multiple G-proteins, which activate multiple adenylyl cyclase enzymes, generating thousands of **cyclic AMP (cAMP)** molecules. Each cAMP activates a kinase, which phosphorylates many target proteins. This exponential cascade is called **signal amplification**.

## Second Messengers
Second messengers are small, non-protein, water-soluble molecules or ions that spread rapidly throughout the cell by diffusion:
- **cAMP**: Synthesized from ATP by adenylyl cyclase; activates Protein Kinase A (PKA).
- **Calcium Ions ($Ca^{2+}$)**: Released from the ER into the cytosol to trigger muscle contraction, vesicle release, or transcription.
`,
        questions: [
          {
            id: "4.3.1",
            text: "What is the evolutionary advantage of having a multi-step signal transduction cascade?",
            options: [
              "It decreases the rate of mutation in the target genes.",
              "It allows for signal amplification and multiple points of pathway regulation.",
              "It bypasses the need for membrane receptors.",
              "It guarantees that the cell will undergo apoptosis."
            ],
            correctIndex: 1,
            explanation: "Multi-step pathways allow a tiny extracellular signal to be amplified into a massive cellular response, and offer multiple checkpoints where the pathway can be controlled or turned off.",
            unitId: 4
          },
          {
            id: "4.3.2",
            text: "Which of the following describes the molecular role of cyclic AMP (cAMP) in signal transduction?",
            options: [
              "It is an extracellular ligand that binds to membrane receptors.",
              "It is a second messenger that diffuses within the cytoplasm to activate kinases.",
              "It is a transmembrane channel that pumps sodium ions.",
              "It is a nuclear transcription factor that directly transcribes DNA."
            ],
            correctIndex: 1,
            explanation: "cAMP is a common intracellular second messenger that rapidly relays signals from membrane receptors (like GPCRs) to internal target proteins (like PKA).",
            unitId: 4
          }
        ]
      },
      {
        id: "4.4",
        title: "Changes in Signal Transduction Pathways",
        description: "Evaluate how mutations or chemical inhibitors block or hyperactivate signaling.",
        youtubeId: "5M22VCEmJd0",
        article: `
# Changes in Signal Transduction Pathways

Alterations in any component of a signal transduction pathway can disrupt the entire downstream response.

## Mutations in Receptors or Relay Proteins
- **Loss of Function**: A mutation that prevents a receptor from binding its ligand, or prevents a kinase from phosphorylating its target, blocks the downstream pathway (e.g., type I diabetes, where insulin receptors are nonfunctional).
- **Gain of Function**: A mutation that locks a relay protein in the active state leads to continuous signaling even in the absence of a ligand (e.g., the *Ras* oncogene protein, which remains active and drives cancer cell division).

## Chemical Disruptions
Toxins and drugs can block or trigger pathways:
- **Cholera Toxin**: Modifies G-proteins so they cannot hydrolyze GTP, keeping the pathway permanently active and causing severe diarrhea.
- **Antihistamines**: Competitive inhibitors that block histamine receptors, preventing allergic inflammatory responses.
`,
        questions: [
          {
            id: "4.4.1",
            text: "What would occur if a mutation permanently inactivates the GTPase activity of a G-protein, preventing it from hydrolyzing GTP to GDP?",
            options: [
              "The pathway will immediately shut down permanently.",
              "The G-protein will remain active, continuously relaying signals to downstream targets.",
              "The ligand will no longer be able to bind to the receptor.",
              "The cell will immediately undergo lysosomal digestion."
            ],
            correctIndex: 1,
            explanation: "GTPase activity is the off-switch that converts active GTP-bound G-protein into inactive GDP-bound G-protein. Without it, the G-protein remains locked in the active state, signaling continuously.",
            unitId: 4
          },
          {
            id: "4.4.2",
            text: "Which of the following best describes the effect of a competitive antagonist drug that binds to and blocks a cell-surface hormone receptor?",
            options: [
              "It increases the concentration of hormones in the blood.",
              "It prevents the hormone from binding, thereby blocking signal transduction and the cellular response.",
              "It triggers a phosphorylation cascade without a ligand.",
              "It causes the cell to secrete more hormones."
            ],
            correctIndex: 1,
            explanation: "A receptor antagonist binds to the receptor without activating it, physically preventing the actual hormone from binding and halting the signal transduction pathway.",
            unitId: 4
          }
        ]
      },
      {
        id: "4.5",
        title: "Feedback",
        description: "Differentiate between positive and negative feedback loops in biological regulation.",
        youtubeId: "5M22VCEmJd0",
        article: `
# Feedback Loops

Organisms use feedback mechanisms to maintain homeostasis or amplify physiological processes.

## Negative Feedback
**Negative feedback** loops maintain dynamic homeostasis by returning a variable back to a target set point:
- If a system deviates from the set point, the response works to **reverse** the direction of change.
- Examples: 
  - *Thermoregulation*: Sweating cools the body when hot; shivering warms the body when cold.
  - *Blood Glucose*: Insulin lowers blood sugar when high; glucagon raises it when low.

## Positive Feedback
**Positive feedback** loops amplify responses, driving a variable further away from the set point:
- The output of the system increases the activity of the input, creating an amplification loop.
- Examples:
  - *Labor Contractions*: Oxytocin stimulates uterine contractions, which push the baby's head against the cervix, signaling the release of more oxytocin.
  - *Fruit Ripening*: Ripe fruit releases ethylene gas, which triggers neighboring fruit to ripen and release even more ethylene.
`,
        questions: [
          {
            id: "4.5.1",
            text: "Which of the following is a classic example of a negative feedback loop?",
            options: [
              "Uterine contractions during childbirth driven by oxytocin release",
              "Ethylene gas release stimulating fruit ripening across an orchard",
              "The regulation of blood glucose levels by insulin and glucagon",
              "Platelet accumulation forming a blood clot"
            ],
            correctIndex: 2,
            explanation: "Blood glucose regulation is negative feedback because insulin and glucagon act to counteract deviations from the blood sugar set point, restoring homeostasis.",
            unitId: 4
          },
          {
            id: "4.5.2",
            text: "How does a positive feedback loop differ from a negative feedback loop?",
            options: [
              "Positive feedback maintains a variable at a rigid set point.",
              "Positive feedback amplifies the initial change, driving the system further from its baseline until a final event is reached.",
              "Negative feedback requires no receptors or sensors.",
              "Only positive feedback is used to regulate body temperature."
            ],
            correctIndex: 1,
            explanation: "Positive feedback amplifies a stimulus, moving the parameter further from the original state (like increasing contractions), whereas negative feedback reverses deviations to maintain stability.",
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

## Mitosis Phases
1. **Prophase**: Chromosomes condense, spindle fibers form, nuclear envelope breaks down.
2. **Metaphase**: Chromosomes line up along the metaphase plate.
3. **Anaphase**: Sister chromatids are pulled apart by spindle fibers to opposite poles.
4. **Telophase**: Nuclear envelopes reform around the two new nuclei, and chromosomes decondense.
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
          }
        ]
      },
      {
        id: "4.7",
        title: "Regulation of Cell Cycle",
        description: "Analyze checkpoints, cyclins, CDKs, and the molecular basis of cancer.",
        youtubeId: "QVCjdNxJreE",
        article: `
# Regulation of Cell Cycle

The eukaryotic cell cycle is regulated by internal and external checkpoints.

## Checkpoints
- **$G_1$ Checkpoint**: The primary 'go-ahead' checkpoint. If approved, the cell divides. If denied, it exits the cycle into a non-dividing state ($G_0$).
- **$G_2$ Checkpoint**: Verifies that DNA has replicated completely and accurately without damage.
- **M Checkpoint**: Occurs during metaphase; checks that spindle fibers are correctly attached to kinetochores.

## Regulatory Proteins
Progress is driven by two proteins:
- **Cyclins**: Proteins whose concentrations fluctuate.
- **CDKs (Cyclin-Dependent Kinases)**: Kinases that must bind to cyclins to be activated. Once active, CDKs phosphorylate target proteins to push the cell to the next phase.

## Cancer
Cancer results from uncontrolled cell division caused by mutations in checkpoint genes:
- **Proto-oncogenes**: Normally stimulate division; mutations turn them into hyperactive **oncogenes**.
- **Tumor Suppressor Genes**: Normally inhibit division; mutations deactivate them (e.g., mutated *p53*).
`,
        questions: [
          {
            id: "4.7.1",
            text: "Which of the following best describes the relationship between cyclins and CDKs?",
            options: [
              "CDK concentrations fluctuate, while cyclin levels remain constant.",
              "Cyclins bind to and activate CDKs, which then phosphorylate target proteins to advance the cell cycle.",
              "CDKs degrade cyclins to prevent the cell from entering interphase.",
              "Cyclins are lipids that block CDK activity."
            ],
            correctIndex: 1,
            explanation: "CDK concentrations are stable, but they must bind to fluctuating cyclin proteins to form an active complex that phosphorylates target proteins to advance the cell cycle.",
            unitId: 4
          },
          {
            id: "4.7.2",
            text: "What type of gene codes for proteins that normally act to prevent cell division if DNA damage is detected?",
            options: [
              "Oncogenes",
              "Proto-oncogenes",
              "Tumor suppressor genes",
              "Ribosomal genes"
            ],
            correctIndex: 2,
            explanation: "Tumor suppressor genes (like p53) code for proteins that halt the cell cycle or trigger DNA repair/apoptosis if errors or damages are detected.",
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
        title: "Meiosis",
        description: "Analyze the process of meiosis and the reduction of ploidy.",
        youtubeId: "nMEyeKQClqI",
        article: `
# Meiosis

Meiosis is a specialized form of cell division that reduces the chromosome number by half, producing haploid gametes ($n$) from a diploid cell ($2n$).

## Diploid vs. Haploid
- **Diploid ($2n$)**: Cells containing two full sets of chromosomes (one maternal, one paternal). Somatic cells are diploid.
- **Haploid ($n$)**: Cells containing a single set of chromosomes. Gametes (sperm and egg) are haploid.

## The Divisions of Meiosis
Meiosis consists of one DNA replication cycle followed by two successive nuclear divisions:
1. **Meiosis I (Reduction Division)**:
   - **Prophase I**: Homologous chromosomes pair up to form tetrads.
   - **Metaphase I**: Homologous pairs line up double-file on the metaphase plate.
   - **Anaphase I**: Homologous chromosomes separate to opposite poles (sister chromatids remain attached).
2. **Meiosis II (Equational Division)**:
   - Sister chromatids separate, analogous to mitosis, yielding four genetically unique haploid cells.
`,
        questions: [
          {
            id: "5.1.1",
            text: "Which of the following events occurs during Meiosis I but NOT during mitosis?",
            options: [
              "Sister chromatids are pulled apart to opposite poles.",
              "Homologous chromosomes pair up and align on the metaphase plate.",
              "DNA replication occurs during interphase.",
              "The nuclear membrane breaks down."
            ],
            correctIndex: 1,
            explanation: "During Meiosis I, homologous chromosomes pair up (synapsis) and align on the metaphase plate to separate, reducing ploidy. Mitosis separates sister chromatids.",
            unitId: 5
          },
          {
            id: "5.1.2",
            text: "If an animal's muscle cells contain 40 chromosomes, how many chromosomes will be present in its sperm cells after meiosis?",
            options: [
              "40",
              "80",
              "20",
              "10"
            ],
            correctIndex: 2,
            explanation: "Muscle cells are somatic (diploid, 2n = 40). Sperm cells are gametes (haploid, n), which contain half the somatic number: 40 / 2 = 20.",
            unitId: 5
          }
        ]
      },
      {
        id: "5.2",
        title: "Meiosis and Genetic Diversity",
        description: "Trace homologous chromosome segregation and mechanisms driving eukaryotic genetic variation.",
        youtubeId: "nMEyeKQClqI",
        article: `
# Meiosis and Genetic Diversity

Meiosis generates genetic variation, which drives evolution by natural selection.

## Three Mechanisms of Variation
1. **Crossing Over** (Prophase I): Homologous chromosomes align in synapsis. Non-sister chromatids exchange segments at the **chiasmata**, producing **recombinant chromosomes** with new combinations of maternal and paternal alleles.
2. **Independent Assortment** (Metaphase I): Homologous chromosome pairs align randomly at the metaphase plate. The sorting of maternal and paternal chromosomes into gametes is independent:
   $$\text{Possible combinations} = 2^n$$
   where $n$ is the haploid number.
3. **Random Fertilization**: Any sperm can fertilize any egg, creating a unique zygote.
`,
        questions: [
          {
            id: "5.2.1",
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
            id: "5.2.2",
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
          }
        ]
      },
      {
        id: "5.4",
        title: "Non-Mendelian Genetics",
        description: "Analyze inheritance patterns that deviate from Mendelian ratios, including linkage and sex-linkage.",
        youtubeId: "i-0rSv6oxSY",
        article: `
# Non-Mendelian Genetics

Many traits deviate from simple dominant-recessive Mendelian inheritance:

## Non-Mendelian Patterns
- **Incomplete Dominance**: The F1 hybrid has a phenotype intermediate between the parents (e.g., pink flowers).
- **Codominance**: Both alleles are expressed simultaneously in the heterozygote (e.g., AB blood type).
- **Multiple Alleles**: Genes exist in more than two allelic forms (e.g., ABO blood type).
- **Sex-Linked Genes**: Located on sex chromosomes ($X$ chromosome). Males ($XY$) are hemizygous and express X-linked recessive traits far more often than females ($XX$).
- **Gene Linkage**: Genes located close together on the same chromosome tend to be inherited together. Crossing over occasionally breaks this linkage:
  $$\text{Recombination Frequency} = \frac{\text{Recombinant Offspring}}{\text{Total Offspring}} \times 100\%$$
`,
        questions: [
          {
            id: "5.4.1",
            text: "A red-flowered plant is crossed with a white-flowered plant, and all F1 offspring have pink flowers. What inheritance pattern does this display?",
            options: [
              "Codominance",
              "Incomplete dominance",
              "Multiple alleles",
              "Sex-linkage"
            ],
            correctIndex: 1,
            explanation: "Incomplete dominance occurs when the heterozygous phenotype is an intermediate blend of the two homozygous phenotypes.",
            unitId: 5
          },
          {
            id: "5.4.2",
            text: "A carrier female for an X-linked recessive disorder (X^A X^a) has children with a normal male (X^A Y). What percentage of their sons are expected to have the disorder?",
            options: [
              "0%",
              "25%",
              "50%",
              "100%"
            ],
            correctIndex: 2,
            explanation: "Sons inherit their Y chromosome from the father and their X chromosome from the mother. There is a 50% chance the mother passes the recessive allele (X^a) to a son, making him affected.",
            unitId: 5
          }
        ]
      },
      {
        id: "5.5",
        title: "Environmental Effects on Phenotype",
        description: "Understand how environmental factors interact with genotypes to determine phenotype.",
        youtubeId: "i-0rSv6oxSY",
        article: `
# Environmental Effects on Phenotype

An organism's phenotype is not determined solely by its genotype. The environment interacts with the genome to shape traits.

## Examples of Environmental Influence
- **Soil pH and Hydrangeas**: Hydrangea plants produce blue flowers in acidic soils (pH $< 5.5$) because aluminum is soluble and absorbed. They produce pink flowers in alkaline soils where aluminum is insoluble.
- **Temperature and Fur Color**: Himalayan rabbits carry a temperature-sensitive allele for melanin production. Melanin is only active in cooler body extremities, resulting in dark fur on ears, paws, and tail.
`,
        questions: [
          {
            id: "5.5.1",
            text: "Identical twin plants are grown in different soils: one in soil with a pH of 5.5 and the other in soil with a pH of 7.0. The first plant produces blue flowers, while the second produces pink. What does this demonstrate?",
            options: [
              "High rates of somatic mutation",
              "Phenotypic plasticity due to environmental interaction with the genotype",
              "Nondisjunction during meiosis",
              "Incomplete dominance of the flower color alleles"
            ],
            correctIndex: 1,
            explanation: "Phenotypic plasticity is the ability of an organism to alter its phenotype in response to environmental conditions (like soil pH) without changing its genotype.",
            unitId: 5
          },
          {
            id: "5.5.2",
            text: "Why do Siamese cats have dark fur specifically on their ears, paws, and tails?",
            options: [
              "Those areas contain different genes than the rest of the body.",
              "The enzyme responsible for producing dark pigment is temperature-sensitive and active only in cooler body extremities.",
              "They experience high rates of mitotic crossing over in their paws and tail.",
              "The dark pigment is deposited by rubbing against external objects."
            ],
            correctIndex: 1,
            explanation: "Siamese cats express a mutated, temperature-sensitive tyrosinase enzyme that only functions at cool temperatures, causing pigment synthesis to occur only in the cooler extremities of the body.",
            unitId: 5
          }
        ]
      },
      {
        id: "5.6",
        title: "Chromosomal Inheritance",
        description: "Examine nondisjunction, chromosomal abnormalities, and non-nuclear organelle inheritance.",
        youtubeId: "i-0rSv6oxSY",
        article: `
# Chromosomal Inheritance

Chromosomes carry genetic material, and anomalies in chromosome division lead to genetic disorders.

## Nondisjunction
**Nondisjunction** occurs when homologous chromosomes fail to separate in Meiosis I, or sister chromatids fail to separate in Meiosis II.
- This results in gametes with abnormal numbers of chromosomes (**aneuploidy**).
- If fertilized, the zygote may have a missing chromosome (**monosomy**) or an extra chromosome (**trisomy**). Example: Down Syndrome (Trisomy 21).

## Non-Nuclear Inheritance
- **Mitochondria and Chloroplasts**: Contain circular genomes.
- **Maternal Inheritance**: In animals, mitochondria are transmitted entirely via the egg cytoplasm. Mitochondrial traits are inherited exclusively from the **mother**.
`,
        questions: [
          {
            id: "5.6.1",
            text: "If a human zygote is diagnosed with Down Syndrome (Trisomy 21), which meiotic error is most likely responsible?",
            options: [
              "DNA replication failure in S-phase",
              "Nondisjunction during meiosis in one of the parents",
              "Alternative splicing of chromatin fibers",
              "Disulfide bridge cleavage in histone proteins"
            ],
            correctIndex: 1,
            explanation: "Nondisjunction during meiosis results in gametes with an extra chromosome 21, leading to a trisomy (three copies) upon fertilization.",
            unitId: 5
          },
          {
            id: "5.6.2",
            text: "A pedigree analysis reveals that a rare genetic disorder is passed from affected mothers to all of their children, but affected fathers never pass it to their offspring. What is the mode of inheritance?",
            options: [
              "X-linked recessive",
              "Autosomal dominant",
              "Mitochondrial (non-nuclear) inheritance",
              "Y-linked"
            ],
            correctIndex: 2,
            explanation: "Mitochondria are inherited maternally because the egg cell provides all the cytoplasm and organelles to the zygote. Affected mothers pass mitochondrial mutations to all offspring, fathers pass to none.",
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
        id: "6.1",
        title: "DNA and RNA Structure",
        description: "Differentiate between DNA and RNA nucleotide structures and nitrogenous bases.",
        youtubeId: "WsofKzY_K50",
        article: `
# DNA and RNA Structure

DNA and RNA are polymers of nucleotides specialized in storing and transmitting genetic information.

## Nucleotide Structure
Every nucleotide consists of:
1. A **5-carbon sugar**: deoxyribose in DNA; ribose in RNA.
2. A **phosphate group**.
3. A **nitrogenous base**:
   - **Purines** (double-ring): Adenine ($A$) and Guanine ($G$).
   - **Pyrimidines** (single-ring): Cytosine ($C$), Thymine ($T$, DNA only), and Uracil ($U$, RNA only).

## Base Pairing
In double-stranded DNA, bases pair via hydrogen bonds:
- **A-T**: 2 hydrogen bonds.
- **G-C**: 3 hydrogen bonds (requires more energy to melt).
`,
        questions: [
          {
            id: "6.1.1",
            text: "Which of the following describes a structural difference between purines and pyrimidines?",
            options: [
              "Purines have a single-ring structure, whereas pyrimidines have a double-ring structure.",
              "Purines contain deoxyribose, whereas pyrimidines contain ribose.",
              "Purines (A, G) have a double-ring structure, whereas pyrimidines (C, T, U) have a single-ring structure.",
              "Purines contain phosphate groups, while pyrimidines do not."
            ],
            correctIndex: 2,
            explanation: "Purines (Adenine and Guanine) consist of a double carbon-nitrogen ring, while pyrimidines (Cytosine, Thymine, Uracil) consist of a single ring.",
            unitId: 6
          },
          {
            id: "6.1.2",
            text: "A double-stranded DNA sample is found to consist of 30% Guanine. According to Chargaff's rules, what percentage of the sample is Thymine?",
            options: [
              "30%",
              "20%",
              "40%",
              "70%"
            ],
            correctIndex: 1,
            explanation: "If G = 30%, then C = 30% (total G-C = 60%). The remaining 40% must be split equally between A and T, meaning T = 20%.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.2",
        title: "Replication",
        description: "Analyze the semi-conservative replication process and enzymology at the replication fork.",
        youtubeId: "WsofKzY_K50",
        article: `
# DNA Replication

DNA replication is a **semi-conservative** process: each parent strand serves as a template for a new complementary strand.

## Enzymology of Replication
- **Helicase**: Unwinds the DNA double helix at the origin of replication.
- **Topoisomerase**: Relieves supercoiling strain ahead of the replication fork.
- **Primase**: Lays down an RNA primer to provide a free 3'-OH group.
- **DNA Polymerase III**: Synthesizes DNA in the **5' to 3'** direction by adding complementary nucleotides.
- **Leading vs. Lagging Strand**:
  - *Leading Strand*: Synthesized continuously toward the replication fork.
  - *Lagging Strand*: Synthesized discontinuously away from the fork, forming **Okazaki fragments**.
- **DNA Polymerase I**: Replaces RNA primers with DNA.
- **DNA Ligase**: Joins Okazaki fragments together.
`,
        questions: [
          {
            id: "6.2.1",
            text: "Which enzyme is responsible for linking Okazaki fragments together on the lagging strand during replication?",
            options: [
              "Helicase",
              "DNA Ligase",
              "Topoisomerase",
              "DNA Polymerase I"
            ],
            correctIndex: 1,
            explanation: "DNA Ligase catalyzes the formation of covalent phosphodiester bonds to join the sugar-phosphate backbones of adjacent Okazaki fragments.",
            unitId: 6
          },
          {
            id: "6.2.2",
            text: "Why is replication of the lagging strand discontinuous, occurring in short Okazaki fragments?",
            options: [
              "The lagging strand template runs 5' to 3', and DNA polymerase can only synthesize in the 5' to 3' direction.",
              "Helicase only unwinds one strand at a time.",
              "RNA primers cannot attach to the leading strand.",
              "DNA ligase degrades the DNA template during replication."
            ],
            correctIndex: 0,
            explanation: "DNA Polymerase can only add nucleotides to a free 3'-OH group, synthesizing in the 5' to 3' direction. Because the lagging strand template runs in the opposite direction of the unwinding fork, it must be synthesized in segments.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.3",
        title: "Transcription and RNA Processing",
        description: "Analyze the synthesis of pre-mRNA and subsequent modifications in eukaryotic cells.",
        youtubeId: "WsofKzY_K50",
        article: `
# Transcription and RNA Processing

Transcription is the process of synthesizing RNA from a DNA template.

## Transcription Mechanisms
- **Initiation**: **RNA Polymerase** binds to DNA at a promoter sequence (TATA box), catalyzed by transcription factors. It does not require a primer.
- **Elongation**: RNA polymerase transcribes the template strand in the 3' to 5' direction, synthesizing RNA in the **5' to 3'** direction.
- **Termination**: The polymerase transcribes a termination sequence, releasing pre-mRNA.

## Eukaryotic RNA Processing
Eukaryotic pre-mRNA undergoes three modifications before leaving the nucleus:
1. **5' Cap**: A modified guanine nucleotide protects the transcript from degradation and guides ribosome binding.
2. **3' Poly-A Tail**: A string of Adenines facilitates nuclear export and stabilizes mRNA.
3. **<vocab term="Alternative Splicing" definition="A process where different combinations of exons are joined, allowing a single gene to code for multiple proteins.">Alternative Splicing</vocab>**: Non-coding regions called **introns** are cut out by **spliceosomes**, and coding regions called **exons** are joined together.
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
          }
        ]
      },
      {
        id: "6.5",
        title: "Regulation of Gene Expression",
        description: "Examine prokaryotic operons and eukaryotic epigenetic/transcription factor controls.",
        youtubeId: "TfYf_rPWUdY",
        article: `
# Regulation of Gene Expression

Cells regulate gene expression to respond to environmental shifts and drive cell specialization.

## Eukaryotic Gene Regulation
1. **Epigenetics (Chromatin Structure)**:
   - **Histone Acetylation**: Adds acetyl groups, loosening chromatin and **increasing** transcription.
   - **DNA Methylation**: Adds methyl groups to DNA bases, tightening chromatin and **blocking** transcription.
2. **Transcription Factors**: Proteins that bind to enhancers (distal) or promoters (proximal) to help or block RNA polymerase assembly.

## Prokaryotic Operons
An **operon** is a cluster of genes controlled by a single promoter:
- **Repressible Operon (e.g., *trp* operon)**: Normally active. High levels of the product (tryptophan) bind to the repressor, activating it to block transcription (feedback inhibition).
- **Inducible Operon (e.g., *lac* operon)**: Normally inactive. The presence of an inducer (allolactose) deactivates the repressor, allowing transcription to digest lactose when glucose is low.
`,
        questions: [
          {
            id: "6.5.1",
            text: "Which of the following chromatin modifications is associated with chromatin loosening, making DNA accessible to RNA polymerase and promoting transcription?",
            options: [
              "DNA Methylation",
              "Histone Acetylation",
              "Spliceosome assembly",
              "Guanine capping"
            ],
            correctIndex: 1,
            explanation: "Histone acetylation neutralizes the positive charge of histones, reducing their attraction to negatively charged DNA, which loosens chromatin and permits transcription.",
            unitId: 6
          },
          {
            id: "6.5.2",
            text: "Under which of the following conditions is the lac operon transcribed at the maximum rate?",
            options: [
              "High Glucose, High Lactose",
              "Low Glucose, High Lactose",
              "Low Glucose, Low Lactose",
              "High Glucose, Low Lactose"
            ],
            correctIndex: 1,
            explanation: "Lactose must be present to bind and deactivate the repressor. Glucose must be low to elevate cAMP levels, activating the CAP activator protein to recruit RNA polymerase.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.6",
        title: "Gene Expression and Specialization",
        description: "Study how differential gene expression drives cell differentiation and specialization.",
        youtubeId: "TfYf_rPWUdY",
        article: `
# Gene Expression and Specialization

Multicellular organisms contain cells with identical genomes, yet these cells exhibit vastly different structures and functions. This is achieved through **differential gene expression**.

## Differential Expression Mechanisms
A cell's identity is determined by the specific genes that are transcribed:
- **Transcription Factor Combinations**: Different cell types express unique combinations of activator proteins. A gene will only be transcribed if the specific set of transcription factors it requires is active.
- **Cytoplasmic Determinants**: Maternal substances distributed unevenly in the unfertilized egg guide early embryonic cell differentiation as the zygote divides.
- **Inductive Signals**: Surrounding cells release signal ligands that trigger transduction cascades, inducing neighboring cells to specialize.
`,
        questions: [
          {
            id: "6.6.1",
            text: "If all somatic cells in a multicellular organism contain identical genomic DNA, how do muscle cells and neurons develop different structures and functions?",
            options: [
              "They transcribe different subsets of genes due to cell-specific transcription factors.",
              "They delete unnecessary chromosomes during division.",
              "Neurons lack ribosomes for translation.",
              "Muscle cells use a different genetic code than neurons."
            ],
            correctIndex: 0,
            explanation: "Differential gene expression (transcribing specific genes while leaving others silent) is driven by cell-type specific transcription factors and activators, determining cell shape and function.",
            unitId: 6
          },
          {
            id: "6.6.2",
            text: "What term describes the maternal substances (proteins and RNAs) placed in the egg cell that influence early embryonic development by directing cell specialization?",
            options: [
              "Operons",
              "Cytoplasmic determinants",
              "Okazaki fragments",
              "Promoter sequences"
            ],
            correctIndex: 1,
            explanation: "Cytoplasmic determinants are maternal components distributed unevenly in the egg cell. After division, different embryonic cells inherit different determinants, initiating differentiation.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.7",
        title: "Mutations",
        description: "Classify nucleotide mutations and analyze their impact on polypeptide folding.",
        youtubeId: "WsofKzY_K50",
        article: `
# Mutations

A mutation is a change in the nucleotide sequence of an organism's genome.

## Types of Point Mutations
Point mutations alter a single nucleotide base pair:
1. **Silent Mutation**: Alters a codon but codes for the **same** amino acid (due to genetic code redundancy). No phenotypic impact.
2. **Missense Mutation**: Changes a codon, substituting a **different** amino acid. Can alter protein folding depending on R-group properties.
3. **Nonsense Mutation**: Changes an amino acid codon into a **stop** codon, causing premature translation termination and resulting in a truncated, nonfunctional protein.

## Frameshift Mutations
The **insertion** or **deletion** of nucleotides (not in multiples of 3) shifts the reading frame. This changes every codon downstream of the mutation, leading to massive missense and premature stop codons.
`,
        questions: [
          {
            id: "6.7.1",
            text: "Which of the following point mutations is most likely to result in a completely nonfunctional, truncated protein?",
            options: [
              "A silent mutation near the 5' end",
              "A nonsense mutation introducing an early stop codon",
              "A missense mutation replacing a nonpolar R-group with another nonpolar R-group",
              "An alternative splicing event"
            ],
            correctIndex: 1,
            explanation: "A nonsense mutation converts a codon into a premature stop codon, terminating translation early and deleting the remaining protein structure.",
            unitId: 6
          },
          {
            id: "6.7.2",
            text: "What is the consequence of deleting a single nucleotide within the coding region of a gene?",
            options: [
              "A single amino acid will be deleted, but the rest of the protein remains normal.",
              "It alters the reading frame of the ribosome, causing a frameshift mutation that alters all downstream codons.",
              "The gene will undergo epigenetic histone acetylation.",
              "DNA replication will permanently halt at that locus."
            ],
            correctIndex: 1,
            explanation: "Because codons are read in groups of three, deleting one nucleotide shifts the reading frame, rendering all downstream codons completely altered.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.8",
        title: "Biotechnology",
        description: "Analyze PCR, gel electrophoresis, bacterial transformation, and DNA sequencing.",
        youtubeId: "WsofKzY_K50",
        article: `
# Biotechnology

Biotechnology uses natural cellular mechanisms to manipulate DNA for research, agriculture, and medicine.

## Key Techniques
- **Polymerase Chain Reaction (PCR)**: Amplifies specific DNA sequences in vitro. Uses three thermal steps:
  1. *Denaturation*: High heat ($95^\circ\text{C}$) breaks hydrogen bonds to separate strands.
  2. *Annealing*: Cool temperature ($55^\circ\text{C}$) allows DNA primers to bind to templates.
  3. *Extension*: Warm temperature ($72^\circ\text{C}$) activates heat-stable **Taq Polymerase** to synthesize new strands.
- **Gel Electrophoresis**: Separates DNA fragments by size. DNA has a negative charge (from phosphate groups) and migrates toward the positive anode. **Smaller** fragments move faster through the porous agarose gel matrix, traveling further than larger fragments.
- **Bacterial Transformation**: Introduces a foreign plasmid into competent bacteria (often using heat shock). Selecting for transformed bacteria relies on **antibiotic resistance genes** inside the plasmid.
`,
        questions: [
          {
            id: "6.8.1",
            text: "Why do DNA fragments migrate toward the positive electrode during gel electrophoresis?",
            options: [
              "DNA is positively charged due to its nitrogenous bases.",
              "DNA is negatively charged due to its phosphate groups.",
              "DNA molecules are highly hydrophobic.",
              "The agarose gel is positively charged, pulling the DNA fragments."
            ],
            correctIndex: 1,
            explanation: "The phosphate groups in the DNA backbone are negatively charged. In an electric field, they are pulled toward the positive anode.",
            unitId: 6
          },
          {
            id: "6.8.2",
            text: "What is the significance of using Taq polymerase, isolated from Thermus aquaticus, in PCR?",
            options: [
              "It does not require an RNA primer to initiate synthesis.",
              "It is heat-stable and remains functional after the high-temperature denaturation step.",
              "It actively excises introns from eukaryotic DNA templates.",
              "It seals Okazaki fragments together without ATP."
            ],
            correctIndex: 1,
            explanation: "PCR requires heating samples to 95 degrees C to separate DNA strands. Standard enzymes would denature, but Taq Polymerase evolved in hot springs and remains stable at high temperatures.",
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
        id: "7.1",
        title: "Introduction to Natural Selection",
        description: "Analyze Darwinian premises and how environmental pressures shift populations.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Introduction to Natural Selection

Natural selection is the primary mechanism of evolution, proposed by Charles Darwin.

## Core Premises
Natural selection operates under specific ecological conditions:
1. **Overproduction of Offspring**: Populations produce more offspring than the environment can support, creating competition.
2. **Inherited Variation**: Individuals display phenotypic variations that are genetically heritable.
3. **Differential Survival**: Environmental pressures selectively favor individuals with traits that increase their chance of survival and reproduction.
4. **Adaptation**: Over time, these advantageous alleles become more common in the population, increasing the population's fitness.
`,
        questions: [
          {
            id: "7.1.1",
            text: "Which of the following is a necessary prerequisite for natural selection to operate on a population's phenotypic trait?",
            options: [
              "The trait must be entirely acquired during the organism's lifetime.",
              "There must be genetic variation for the trait within the population, and it must be heritable.",
              "The population must be in Hardy-Weinberg equilibrium.",
              "The organism must have a small population size."
            ],
            correctIndex: 1,
            explanation: "For natural selection to change a trait's frequency, the trait must vary within the population and be heritable (passable to offspring via genes).",
            unitId: 7
          },
          {
            id: "7.1.2",
            text: "How does the overproduction of offspring contribute to the process of natural selection?",
            options: [
              "It guarantees that all offspring will survive to reproduce.",
              "It creates a struggle for existence, leading to competition for limited resources where only the fittest survive.",
              "It increases the mutation rate in gametes.",
              "It causes organisms to migrate to new environments."
            ],
            correctIndex: 1,
            explanation: "Overproduction leads to competition. Individuals with traits that make them better competitors survive and pass those traits on, driving selection.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.2",
        title: "Natural Selection",
        description: "Examine selective pressures, adaptation, and evolutionary fitness.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Natural Selection

Natural selection alters allele frequencies by favoring adaptations that match environmental demands.

## Selective Pressures
Biotic and abiotic factors act as **selective pressures**:
- **Abiotic**: Climate, temperature, salinity, soil nutrients.
- **Biotic**: Predators, pathogens, food availability, mates.

## Evolutionary Fitness
Fitness is measured by **reproductive success**:
$$\text{Fitness} \propto \text{Number of surviving, fertile offspring}$$
An individual can be physically strong, but if it fails to pass its genes to the next generation, its evolutionary fitness is zero.
`,
        questions: [
          {
            id: "7.2.1",
            text: "In evolutionary biology, how is the fitness of an individual organism measured?",
            options: [
              "By its physical size and muscle mass",
              "By its lifespan and age at death",
              "By its relative reproductive success in passing fertile genes to the next generation",
              "By the rate at which it metabolizes glucose into ATP"
            ],
            correctIndex: 2,
            explanation: "Evolutionary fitness is determined solely by reproductive success—how many viable, fertile offspring an organism leaves in subsequent generations.",
            unitId: 7
          },
          {
            id: "7.2.2",
            text: "A population of peppered moths shifted from mostly light-colored to dark-colored following the Industrial Revolution due to coal soot darkening tree trunks. What was the selective pressure?",
            options: [
              "The cold temperature of the soot",
              "Visual predation by birds",
              "A decrease in the atmospheric oxygen concentration",
              "Mutagenic chemicals in the coal dust"
            ],
            correctIndex: 1,
            explanation: "The soot darkened trees, making light moths visible to predatory birds. Visual predation was the selective pressure that favored dark moths.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.3",
        title: "Artificial Selection",
        description: "Compare artificial selection and domestic breeding with natural selection.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Artificial Selection

**Artificial Selection** is a human-directed form of selection.

## Mechanism
Unlike natural selection, where the environment dictates which traits are favored, humans act as the selective agent:
- Humans choose individuals with desirable traits (e.g., higher crop yield, docility, aesthetic appeal) and breed them.
- Repeated over generations, this alters allele frequencies and phenotypes.

## Examples
- **Crop Domestication**: Modern corn (maize) was bred from the wild grass *teosinte*.
- **Animal Husbandry**: All modern dog breeds evolved from a common wolf ancestor via human selection.
`,
        questions: [
          {
            id: "7.3.1",
            text: "What is the primary difference between natural selection and artificial selection?",
            options: [
              "Artificial selection occurs much more slowly than natural selection.",
              "In artificial selection, humans act as the selective agent, whereas in natural selection, the environment determines which traits are favored.",
              "Artificial selection does not require genetic variation.",
              "Only natural selection changes the allele frequencies of a population."
            ],
            correctIndex: 1,
            explanation: "In artificial selection, humans choose which traits are propagated. In natural selection, environmental factors (biotic/abiotic pressures) dictate differential reproductive success.",
            unitId: 7
          },
          {
            id: "7.3.2",
            text: "Which of the following domestic species evolved from the wild grass teosinte through thousands of years of human-directed breeding?",
            options: [
              "Wheat",
              "Rice",
              "Corn (maize)",
              "Potato"
            ],
            correctIndex: 2,
            explanation: "Indigenous farmers in Mesoamerica selectively bred wild teosinte plants with larger, softer kernels, ultimately domesticating modern corn.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.4",
        title: "Population Genetics",
        description: "Study genetic drift, mutations, gene flow, and population bottlenecks.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Population Genetics

Population genetics studies allele frequencies and genetic changes inside populations.

## Evolutionary Forces
Aside from natural selection, three forces drive evolution:
1. **Mutations**: Random changes in DNA that introduce new alleles.
2. **Gene Flow**: Migration of individuals between populations, exchanging alleles.
3. **Genetic Drift**: Random fluctuations in allele frequencies due to chance events. Drift has a massive impact on **small populations**:
   - **Bottleneck Effect**: A disaster decimates a population, leaving a tiny surviving cohort whose gene pool does not represent the original population.
   - **Founder Effect**: A few individuals colonize a new area, establishing a gene pool with low genetic diversity.
`,
        questions: [
          {
            id: "7.4.1",
            text: "A sudden wildfire kills 95% of a pine forest population. The surviving trees happen to have a much higher frequency of a rare cone trait than the original forest. What evolutionary mechanism does this illustrate?",
            options: [
              "Founder Effect",
              "Bottleneck Effect",
              "Gene Flow",
              "Stabilizing Selection"
            ],
            correctIndex: 1,
            explanation: "A bottleneck occurs when a random disaster drastically reduces population size, leaving survivors whose allele frequencies differ from the original population due to chance alone.",
            unitId: 7
          },
          {
            id: "7.4.2",
            text: "In which of the following populations will genetic drift have the most significant evolutionary impact?",
            options: [
              "A population of 50 endangered island iguanas",
              "A population of 500,000 wildflowers in a meadow",
              "A population of 10,000 migratory geese",
              "A population in Hardy-Weinberg equilibrium"
            ],
            correctIndex: 0,
            explanation: "Genetic drift is driven by random sampling error. Its effects are much stronger in small populations, where chance events can easily eliminate or fix alleles.",
            unitId: 7
          }
        ]
      },
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
          }
        ]
      },
      {
        id: "7.6",
        title: "Evidence of Evolution",
        description: "Analyze homologous, analogous, molecular, and fossil evidence of common descent.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Evidence of Evolution

Evolutionary theory is supported by extensive evidence across scientific disciplines.

## Forms of Evidence
1. **The Fossil Record**: Illustrates transitions over geological time, showing the appearance of new traits and lineages.
2. **Homology**: 
   - **Homologous Structures**: Anatomical features in different species that share a common layout due to shared ancestry (e.g., human arm and bat wing bones).
   - **Vestigial Structures**: Remnants of features that served functions in ancestors but are now nonfunctional (e.g., whale pelvis).
3. **Analogy (Convergent Evolution)**: Similar structures that evolved independently in unrelated lineages due to similar environmental pressures (e.g., bird wing and butterfly wing).
4. **Biogeography**: Geographic distribution of species reflecting continental drift (Pangea).
5. **Molecular Homology**: DNA, RNA, and protein sequence alignments.
`,
        questions: [
          {
            id: "7.6.1",
            text: "Which of the following describes homologous structures?",
            options: [
              "Structures that look similar but have different internal anatomy and arose independently.",
              "Anatomical features in different species that share a common ancestral origin, even if their current functions differ.",
              "Structures that have been completely lost due to selective pressures.",
              "DNA sequences that code for entirely different proteins."
            ],
            correctIndex: 1,
            explanation: "Homologous structures share an anatomical framework because they evolved from a common ancestor, even if they have been modified for different functions (e.g., human hands vs. whale flippers).",
            unitId: 7
          },
          {
            id: "7.6.2",
            text: "Which structure represents a vestigial trait in modern whales?",
            options: [
              "Dorsal fin",
              "Blowhole",
              "Internal pelvic and hindlimb bones",
              "Echolocation organs"
            ],
            correctIndex: 2,
            explanation: "Whales evolved from four-legged terrestrial mammalian ancestors. Modern whales retain small, nonfunctional pelvic and leg bones buried in their body wall.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.7",
        title: "Common Ancestry",
        description: "Examine shared molecular and cellular features that link all life to a common ancestor.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Common Ancestry

All eukaryotic and prokaryotic organisms share core characteristics that point to a single common ancestor.

## Shared Cellular and Molecular Homologies
- **The Genetic Code**: All organisms share the same universal triplet codon system (DNA and RNA) and synthesize proteins using the same 20 amino acids.
- **Metabolic Pathways**: Core chemical reactions, like glycolysis, are conserved across all domains of life (Bacteria, Archaea, Eukarya).
- **Ribosomes**: Every cell utilizes ribosomes to translate mRNA into proteins.
- **Eukaryotic Conservation**: Eukaryotes share additional complex features:
  - Membrane-bound organelles.
  - Linear chromosomes wrapped around histone proteins.
  - Cytoskeletons and endomembrane systems.
`,
        questions: [
          {
            id: "7.7.1",
            text: "Which of the following biological processes is highly conserved and shared across all three domains of life (Bacteria, Archaea, Eukarya)?",
            options: [
              "Mitotic spindle assembly",
              "Glycolysis",
              "Epigenetic histone acetylation",
              "RNA splicing via spliceosomes"
            ],
            correctIndex: 1,
            explanation: "Glycolysis is the ancient, anaerobic metabolic pathway that breaks down glucose. It is conserved across all living cells, pointing to a shared evolutionary origin.",
            unitId: 7
          },
          {
            id: "7.7.2",
            text: "What molecular feature is shared by all known organisms, supporting the hypothesis of a single universal common ancestor?",
            options: [
              "The presence of a double membrane around the nucleus",
              "The use of DNA/RNA as genetic material and the universal genetic code",
              "The use of oxygen as the final electron acceptor in respiration",
              "The possession of cellulose cell walls"
            ],
            correctIndex: 1,
            explanation: "The universal genetic code—where the same mRNA codons specify the exact same amino acids in bacteria, plants, and animals—provides strong evidence of a common ancestry.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.8",
        title: "Continuing Evolution",
        description: "Analyze observed examples of modern evolution in real time.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Continuing Evolution

Evolution is not just a historical event; populations continue to evolve in response to changing environments in real time.

## Observed Real-Time Evolution
- **Antibiotic Resistance**: The overuse of antibiotics acts as a strong selective pressure on bacterial populations. Random mutations that grant resistance allow those bacteria to survive and multiply, creating resistant strains (e.g., MRSA).
- **Pesticide Resistance**: Insect populations exposed to chemical pesticides quickly evolve resistance as sensitive insects die off, leaving only resistant individuals to breed.
- **Viral Evolution**: Emergent viral strains (like Influenza or SARS-CoV-2) mutate their surface proteins to evade host immune memory.
`,
        questions: [
          {
            id: "7.8.1",
            text: "Which of the following explains why bacterial populations can evolve antibiotic resistance so rapidly?",
            options: [
              "Antibiotics directly trigger mutations in the bacterial genome to protect them.",
              "Bacteria have rapid reproductive rates, and antibiotics select for pre-existing resistant mutants by killing susceptible competitors.",
              "Bacteria reproduce sexually, generating vast recombinant genomes.",
              "Bacteria incorporate the antibiotic molecules into their cell walls."
            ],
            correctIndex: 1,
            explanation: "Antibiotics do not cause resistance mutations. Rather, random mutations occur naturally; when antibiotics are applied, they kill susceptible bacteria, leaving the pre-existing resistant mutants to multiply rapidly.",
            unitId: 7
          },
          {
            id: "7.8.2",
            text: "Why must a new flu vaccine be developed and administered every year?",
            options: [
              "Flu viruses mutate their surface antigen proteins rapidly, escaping recognition by memory antibodies created by the previous vaccine.",
              "Human antibody proteins dissolve after exactly twelve months.",
              "The active ingredients in the flu vaccine evaporate inside the body.",
              "Flu viruses undergo binary fission to become bacteria."
            ],
            correctIndex: 0,
            explanation: "Influenza viruses undergo rapid mutation (antigenic drift), changing their surface proteins. These mutations prevent memory antibodies from recognizing the new strains, requiring annual updates.",
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
- **Derived Characters**: Novel traits that evolved in a lineage and are shared by its descendants.
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
          }
        ]
      },
      {
        id: "7.10",
        title: "Speciation",
        description: "Differentiate between allopatric and sympatric speciation and reproductive isolation.",
        youtubeId: "fIv3gM8w2Fw",
        article: `
# Speciation

Speciation is the evolutionary process by which a single ancestral species splits into two or more distinct species. This requires **reproductive isolation**.

## Allopatric vs. Sympatric Speciation
- **Allopatric Speciation**: Occurs when a population is split by a physical **geographic barrier** (e.g., river, mountain range). The isolated populations diverge due to selection, drift, and mutations until they can no longer interbreed.
- **Sympatric Speciation**: Occurs without geographic isolation, within the same habitat. Often driven by:
  - *Polyploidy* (accidental extra chromosome sets, common in plants).
  - *Habitat Differentiation* (specializing in different niches).
  - *Sexual Selection*.

## Reproductive Isolating Mechanisms
- **Prezygotic Barriers** (prevent fertilization): Habitat, temporal (breed at different times), behavioral (different courtship calls), mechanical (incompatible genitalia), gametic isolation.
- **Postzygotic Barriers** (prevent fertile offspring): Reduced hybrid viability (hybrid dies early), reduced hybrid fertility (hybrid is sterile, e.g., mule).
`,
        questions: [
          {
            id: "7.10.1",
            text: "Which of the following is an example of a prezygotic barrier that leads to reproductive isolation?",
            options: [
              "Two species of frogs lay eggs that fertilize, but the hybrid tadpoles die before reaching adulthood.",
              "Two species of birds live in the same forest but use completely different courtship songs to attract mates.",
              "A horse and a donkey mate to produce a sterile mule.",
              "A hybrid seed germinates but cannot produce pollen."
            ],
            correctIndex: 1,
            explanation: "Behavioral isolation (using different courtship songs) is a prezygotic barrier because it prevents mating and fertilization from occurring in the first place.",
            unitId: 7
          },
          {
            id: "7.10.2",
            text: "How does allopatric speciation differ from sympatric speciation?",
            options: [
              "Allopatric speciation occurs only in plants via polyploidy.",
              "Allopatric speciation requires a physical geographic barrier to block gene flow, whereas sympatric speciation occurs in the same geographic area.",
              "Sympatric speciation requires millions of years, while allopatric occurs in one generation.",
              "Only sympatric speciation involves reproductive isolation."
            ],
            correctIndex: 1,
            explanation: "Allopatric speciation is driven by geographic separation (mountains, oceans, rivers), while sympatric speciation occurs within the parent population's range without spatial separation.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.11",
        title: "Extinction",
        description: "Analyze mass extinctions and subsequent adaptive radiation events.",
        youtubeId: "fIv3gM8w2Fw",
        article: `
# Extinction

Extinction occurs when a species is completely eliminated from the biosphere, often driven by rapid environmental changes.

## Mass Extinctions
Earth has experienced five major mass extinction events (e.g., the Permian and Cretaceous extinctions):
- These events are caused by catastrophic environmental disruptions (asteroid impacts, massive volcanism, climate shifts).
- Mass extinctions decimate dominant lineages, opening up ecological niches.

## Adaptive Radiation
Following a mass extinction, the surviving lineages diversify rapidly to fill the vacant niches. This burst of diversification is called **adaptive radiation** (e.g., mammals diversifying rapidly after the extinction of non-avian dinosaurs).
`,
        questions: [
          {
            id: "7.11.1",
            text: "What evolutionary event typically occurs in the wake of a mass extinction, as surviving lineages diversify to occupy newly vacant ecological niches?",
            options: [
              "Allopatric hybridization",
              "Adaptive radiation",
              "Hardy-Weinberg equilibrium",
              "Denaturation of the gene pool"
            ],
            correctIndex: 1,
            explanation: "Adaptive radiation is a process where organisms diversify rapidly from an ancestral species into a multitude of new forms, particularly when environmental changes open up new niches.",
            unitId: 7
          },
          {
            id: "7.11.2",
            text: "Which Cretaceous event is hypothesized to have triggered the mass extinction of non-avian dinosaurs approximately 66 million years ago?",
            options: [
              "The collision of a massive asteroid with Earth, causing global dust clouds that blocked sunlight",
              "The sudden accumulation of oxygen in the atmosphere",
              "A worldwide plague caused by eukaryotic viruses",
              "The splitting of Pangea into separate continents"
            ],
            correctIndex: 0,
            explanation: "An asteroid impact in the Yucatan Peninsula kicked up immense soot and dust, blocking solar radiation, halting photosynthesis, and collapsing food webs globally.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.12",
        title: "Variations in Populations",
        description: "Analyze how genetic diversity protects populations from environmental catastrophes.",
        youtubeId: "fIv3gM8w2Fw",
        article: `
# Variations in Populations

Genetic diversity within a population is essential for its long-term survival and resilience.

## Importance of Diversity
A population with high genetic variation contains a broad array of alleles:
- If the environment shifts (e.g., a new disease emerges, or temperatures drop), it is highly likely that some individuals will possess alleles that grant tolerance or resistance.
- These individuals survive, reproduce, and prevent population extinction.

## Risks of Low Diversity
Monocultures (populations with near-zero genetic diversity, like cloned agricultural crops) are highly vulnerable. A single pathogen can wipe out the entire population since no individuals possess alleles for resistance (e.g., the Irish Potato Famine).
`,
        questions: [
          {
            id: "7.12.1",
            text: "Why are genetically uniform agricultural crops (monocultures) highly vulnerable to ecological collapse?",
            options: [
              "They undergo rapid genetic drift.",
              "They lack genetic variation, meaning a single disease or pest can kill all individuals since none possess resistance alleles.",
              "They accumulate mutations at a higher rate.",
              "They are unable to run the light-dependent reactions."
            ],
            correctIndex: 1,
            explanation: "Because there is no genetic diversity, every individual is equally susceptible to a pathogen. If one dies, they can all die, leading to crop collapse.",
            unitId: 7
          },
          {
            id: "7.12.2",
            text: "How does genetic variation within a wild population of organisms support its survival when a new viral epidemic strikes?",
            options: [
              "It increases the physical strength of the pack.",
              "Some individuals will likely possess alleles that grant resistance, allowing them to survive and rebuild the population.",
              "It triggers a positive feedback loop that halts viral entry.",
              "It encourages the virus to mutate into a harmless form."
            ],
            correctIndex: 1,
            explanation: "Diverse populations harbor different alleles. Individuals carrying genetic variations that make them resistant to the virus will survive the epidemic and pass those alleles to offspring.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.13",
        title: "Origin of Life on Earth",
        description: "Analyze prebiotic chemical evolution and the RNA World hypothesis.",
        youtubeId: "xPkOWGSGYyc",
        article: `
# Origin of Life on Earth

Scientific hypotheses suggest that life on Earth arose through chemical evolution over billions of years.

## Steps of Prebiotic Evolution
1. **Synthesis of Organic Monomers**: Inorganic gases reacted under reducing conditions to form organic monomers (amino acids, nucleotides). This was demonstrated by the **Miller-Urey Experiment**.
2. **Polymerization**: Monomers joined on hot clay or sand surfaces to form complex polymers (proteins, nucleic acids).
3. **Protocells**: Polymers were encapsulated in lipid membranes, creating isolated internal environments.
4. **Self-Replication**: The emergence of inheritance molecules.

## The RNA World Hypothesis
Hypothesizes that **RNA** was the first genetic material. Unlike DNA, RNA can:
- Store genetic information.
- Catalyze chemical reactions (acting as enzymes called **ribozymes**). This dual function allowed prebiotic systems to replicate before the evolution of DNA and proteins.
`,
        questions: [
          {
            id: "7.13.1",
            text: "What did the classic Miller-Urey experiment demonstrate regarding the origin of life?",
            options: [
              "Eukaryotic cells evolved from engulfed bacteria.",
              "Organic monomers (like amino acids) could form spontaneously from inorganic gases under simulated primitive Earth conditions.",
              "RNA molecules can act as ribozymes to splice introns.",
              "DNA is more stable than RNA in aqueous environments."
            ],
            correctIndex: 1,
            explanation: "The Miller-Urey experiment showed that simulating primitive Earth atmosphere and energy sources (sparks) could produce organic molecules from inorganic precursors, proving chemical evolution is possible.",
            unitId: 7
          },
          {
            id: "7.13.2",
            text: "Which of the following support the 'RNA World' hypothesis?",
            options: [
              "RNA contains deoxyribose sugar which is highly stable.",
              "RNA can store genetic information and catalyze biochemical reactions (as ribozymes), unlike DNA which requires protein enzymes to replicate.",
              "All viruses carry double-stranded RNA genomes.",
              "RNA is only found in eukaryotic nuclei."
            ],
            correctIndex: 1,
            explanation: "RNA has both informational (genetic) and catalytic (enzymatic) properties, meaning it could have run prebiotic metabolism and self-replication prior to the evolution of DNA and proteins.",
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
        id: "8.1",
        title: "Responses to the Environment",
        description: "Analyze behavioral and physiological responses of organisms to environmental changes.",
        youtubeId: "h-P8_O2C8Hw",
        article: `
# Responses to the Environment

Organisms respond to environmental cues to maintain homeostasis and maximize survival.

## Behavioral Responses
- **Taxis**: Directed movement toward (positive) or away from (negative) a stimulus (e.g., phototaxis in insects toward light).
- **Kinesis**: Undirected, random movement in response to a stimulus (e.g., sowbugs speeding up in dry environments to find moisture).
- **Communication**: Organisms exchange signals to alter behavior (e.g., honeybee waggle dance, pheromones, warning calls).

## Physiological Responses
- **Photoperiodism**: Changes in growth, flowering, or behavior in response to day length (e.g., plants flowering only when night length exceeds a threshold).
- **Thermoregulation**: Conserving or dissipating heat (e.g., vasodilation in rabbits, hibernation).
`,
        questions: [
          {
            id: "8.1.1",
            text: "A woodlouse placed in a dry environment accelerates its movement randomly until it encounters a damp area, where it slows down. What type of response is this?",
            options: [
              "Chemotaxis",
              "Kinesis",
              "Phototaxis",
              "Operant conditioning"
            ],
            correctIndex: 1,
            explanation: "Kinesis is a non-directional change in activity rate in response to a stimulus. The woodlouse moves randomly but faster in dry conditions, increasing its chances of finding moisture.",
            unitId: 8
          },
          {
            id: "8.1.2",
            text: "How do short-day plants determine when to flower in seasonal climates?",
            options: [
              "They measure the intensity of solar radiation.",
              "They measure the duration of continuous darkness (night length) using phytochrome photoreceptors.",
              "They sense the water potential of the soil.",
              "They respond to the accumulation of ethylene gas."
            ],
            correctIndex: 1,
            explanation: "Short-day (long-night) plants require a continuous critical period of darkness to flower. If this dark period is interrupted by a flash of light, they will not flower.",
            unitId: 8
          }
        ]
      },
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
          }
        ]
      },
      {
        id: "8.4",
        title: "Effect of Density of Populations",
        description: "Differentiate between density-dependent and density-independent factors that regulate populations.",
        youtubeId: "mN2-67-m22s",
        article: `
# Effect of Density of Populations

Populations are regulated by factors that limit their growth. These factors are classified based on their relationship to population density.

## Limiting Factors
- **Density-Dependent Factors**: Factors whose impact scales with population density (having a stronger limiting effect as density increases):
  - *Competition*: Limited food, space, or nesting sites.
  - *Disease*: Pathogens transmit faster in crowded conditions.
  - *Predation*: Predators focus on species that are abundant.
  - *Waste Accumulation*: Toxic waste products build up in high density.
- **Density-Independent Factors**: Factors that limit population size regardless of how crowded it is:
  - *Weather/Climate*: Severe freezes, droughts, heatwaves.
  - *Natural Disasters*: Volcanic eruptions, forest fires, floods.
`,
        questions: [
          {
            id: "8.4.1",
            text: "Which of the following is a density-independent factor that can limit population size?",
            options: [
              "Spread of a bacterial skin infection",
              "Intraspecific competition for nest sites",
              "A sudden volcanic eruption covering a habitat in ash",
              "Accumulation of toxic metabolic waste"
            ],
            correctIndex: 2,
            explanation: "A volcanic eruption kills individuals regardless of population density, making it a density-independent factor. Disease, competition, and waste are density-dependent.",
            unitId: 8
          },
          {
            id: "8.4.2",
            text: "Why does disease act as a density-dependent regulator of population size?",
            options: [
              "Pathogens mutate faster when a population is small.",
              "Close physical proximity in crowded populations facilitates rapid transmission of pathogens.",
              "Diseases only infect organisms that are in starvation.",
              "Pathogens are density-independent factors."
            ],
            correctIndex: 1,
            explanation: "Disease spreads more rapidly in high-density populations because host individuals are in closer contact, increasing transmission rates.",
            unitId: 8
          }
        ]
      },
      {
        id: "8.5",
        title: "Community Ecology",
        description: "Analyze species interactions, niche partitioning, and trophic cascades.",
        youtubeId: "h-P8_O2C8Hw",
        article: `
# Community Ecology

An ecological community consists of all the interacting populations of different species in a shared habitat.

## Species Interactions
Interactions shape community structures and can be positive ($+$), negative ($-$), or neutral ($0$):
- **Competition** ($-/-$): Organisms fight for a shared, limiting resource. To survive, species undergo **niche partitioning** (sharing different parts of a resource).
- **Predation and Herbivory** ($+/-$): One organism consumes another.
- **Symbiosis**: Close long-term physical associations:
  - *Mutualism* ($+/+$): Both benefit (e.g., bees and flowers).
  - *Parasitism* ($+/-$): Parasite benefits at the expense of host.
  - *Commensalism* ($+/0$): One benefits, the other is unaffected.

## Trophic Cascades
A **trophic cascade** occurs when the removal or addition of a top predator ripples down to affect multiple lower trophic levels (e.g., wolves in Yellowstone limiting deer, which allows vegetation to regrow).
`,
        questions: [
          {
            id: "8.5.1",
            text: "What ecological interaction is characterized as mutualism?",
            options: [
              "A tick sucking blood from a dog (+/-)",
              "A shark swimming alongside a pilot fish (+/0)",
              "A pollinating bee gathering nectar from a flower (+/+)",
              "Two species of beetles feeding on the same tree bark (-/-)"
            ],
            correctIndex: 2,
            explanation: "Mutualism is a (+/+) relationship. Both the bee (gets food) and the flower (gets pollinated) benefit from the interaction.",
            unitId: 8
          },
          {
            id: "8.5.2",
            text: "What occurs in a trophic cascade when the apex predator is completely removed from an ecosystem?",
            options: [
              "Primary producer populations will immediately collapse due to lack of nutrients.",
              "Herbivore populations will explode in size, overconsuming primary producers.",
              "Decomposers will cease to function.",
              "The food web will remain unchanged."
            ],
            correctIndex: 1,
            explanation: "Without the apex predator controlling their numbers, herbivore populations grow unchecked, overgrazing the plants and altering the physical landscape.",
            unitId: 8
          }
        ]
      },
      {
        id: "8.6",
        title: "Biodiversity",
        description: "Analyze species richness, Simpson's index, and the value of keystone species.",
        youtubeId: "h-P8_O2C8Hw",
        article: `
# Biodiversity

Biodiversity describes the variety of life in an area, measured at the genetic, species, and ecosystem levels.

## Species Diversity
Consists of two components:
1. **Species Richness**: The number of different species in the community.
2. **Relative Abundance**: The proportion each species represents of all individuals.
- **Simpson's Diversity Index**: Used to quantify biodiversity:
  $$\text{Simpson's Index} = 1 - \sum \left(\frac{n}{N}\right)^2$$
  where $n$ is the number of individuals of a specific species, and $N$ is the total number of all individuals.

## Keystone Species
A **keystone species** is a species that has an exceptionally large impact on its community structure relative to its abundance (e.g., sea otters, which control urchin populations to preserve kelp forests). If removed, the community collapses.
`,
        questions: [
          {
            id: "8.6.1",
            text: "Which of the following defines a keystone species?",
            options: [
              "The most abundant species in a community by biomass",
              "A species that has a disproportionately large impact on community structure relative to its low abundance",
              "The first species to colonize a bare rock environment",
              "A non-native species that invades and damages food webs"
            ],
            correctIndex: 1,
            explanation: "Keystone species (like sea otters or wolves) maintain community balance. Their removal triggers a collapse in species diversity, even though they represent a small fraction of the ecosystem's biomass.",
            unitId: 8
          },
          {
            id: "8.6.2",
            text: "Ecosystems with high biodiversity are characteristically:",
            options: [
              "More vulnerable to diseases and climatic shifts.",
              "More resilient and stable when environmental changes occur.",
              "Lacking in primary producer trophic levels.",
              "Dominated entirely by a single generalist species."
            ],
            correctIndex: 1,
            explanation: "Higher biodiversity provides functional redundancy. If one species declines, others can perform similar ecological roles, making the community stable and resilient.",
            unitId: 8
          }
        ]
      },
      {
        id: "8.7",
        title: "Disruptions to Ecosystems",
        description: "Examine the ecological impact of invasive species and human-driven disruptions.",
        youtubeId: "h-P8_O2C8Hw",
        article: `
# Disruptions to Ecosystems

Ecosystems are dynamically balanced systems that can be severely altered by natural or human disruptions.

## Invasive Species
An **invasive species** is a non-native species introduced to a new environment, where it lacks natural predators or pathogens:
- Without limiting factors, its population grows exponentially.
- It outcompetes native species for food or space, disrupting food webs and reducing native biodiversity.

## Human-Driven Disruptions
- **Eutrophication**: Runoff of agricultural fertilizers (nitrogen/phosphorus) into waterways causes massive algae blooms. When the algae dies, decomposers consume all oxygen during respiration, creating hypoxic **dead zones** that suffocate aquatic life.
- **Habitat Fragmentation**: Splitting habitats into smaller, isolated patches, reducing gene flow.
`,
        questions: [
          {
            id: "8.7.1",
            text: "Why are invasive species often able to expand their populations exponentially in a new environment?",
            options: [
              "They mutate at higher rates than native species.",
              "They lack natural predators, competitors, or pathogens in the new habitat to limit their growth.",
              "They reproduce only via binary fission.",
              "They increase the carrying capacity of their hosts."
            ],
            correctIndex: 1,
            explanation: "In their native habitats, predators and disease keep invasive species checked. When introduced to a new area without these checks, they outcompete native species and grow unchecked.",
            unitId: 8
          },
          {
            id: "8.7.2",
            text: "What occurs during the process of eutrophication in an aquatic ecosystem?",
            options: [
              "Acid rain lowers the pH of lakes, dissolving the shells of mollusks.",
              "Nutrient runoff triggers algae blooms; subsequent decomposition of dead algae consumes oxygen, suffocating fish.",
              "Ozone depletion warms water temperatures, lowering oxygen solubility.",
              "Invasive predators consume all primary consumers."
            ],
            correctIndex: 1,
            explanation: "Fertilizer runoff spikes nutrients, causing an algae bloom. When the algae dies, aerobic decomposers break it down, consuming dissolved oxygen and creating a dead zone.",
            unitId: 8
          }
        ]
      }
    ]
  }
];
