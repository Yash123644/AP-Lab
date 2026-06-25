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
          },
          {
            id: "1.1.3",
            text: "Which property explains why water has a much higher boiling point than H2S (similar size)?",
            options: [
              "H2S has more electrons",
              "Water forms extensive H-bonds requiring more energy to vaporize",
              "Water has stronger covalent O-H bonds",
              "H2S is denser"
            ],
            correctIndex: 1,
            explanation: "Water molecules form multiple H-bonds. Breaking them during vaporization requires substantially more energy than vaporizing H2S, which cannot H-bond.",
            unitId: 1
          },
          {
            id: "1.1.4",
            text: "Oil and water do not mix. This is BEST explained by water being:",
            options: [
              "unable to form covalent bonds",
              "polar, excluding nonpolar oil via the hydrophobic effect",
              "denser than oil",
              "a gas at room temperature"
            ],
            correctIndex: 1,
            explanation: "Water is polar; oil is nonpolar. Polar H2O excludes nonpolar molecules via the hydrophobic effect.",
            unitId: 1
          },
          {
            id: "1.1.5",
            text: "What ecological benefit does water's high specific heat provide?",
            options: [
              "Aquatic environments fluctuate rapidly",
              "Water resists temperature change, buffering aquatic habitats",
              "Water cools organisms by evaporating instantly",
              "Aquatic organisms need no thermoregulation"
            ],
            correctIndex: 1,
            explanation: "High specific heat means water absorbs large energy before its temperature rises, keeping aquatic habitats thermally stable.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.2",
        title: "Elements of Life",
        description: "Analyze the biological acquisition and use of carbon, nitrogen, phosphorus, and sulfur.",
        youtubeId: "c7niqHFOa-A",
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
          },
          {
            id: "1.2.3",
            text: "Which element is found in proteins/nucleic acids but NOT in glucose?",
            options: [
              "Oxygen",
              "Carbon",
              "Nitrogen",
              "Hydrogen"
            ],
            correctIndex: 2,
            explanation: "Nitrogen is in amino groups of amino acids and nitrogenous bases. Glucose (C6H12O6) contains only C, H, and O.",
            unitId: 1
          },
          {
            id: "1.2.4",
            text: "Phosphorus is essential mainly because it is a structural component of:",
            options: [
              "amino acids and triglycerides",
              "nucleic acids and phospholipids",
              "monosaccharides and polysaccharides",
              "fatty acids and steroids"
            ],
            correctIndex: 1,
            explanation: "Phosphate groups form the sugar-phosphate backbone of DNA/RNA and the hydrophilic head of phospholipids.",
            unitId: 1
          },
          {
            id: "1.2.5",
            text: "What structural function does sulfur serve in proteins via cysteine residues?",
            options: [
              "Forms disulfide bridges stabilizing tertiary structure",
              "Provides negative charge that binds DNA",
              "Forms peptide bonds between amino acids",
              "Makes proteins water-soluble"
            ],
            correctIndex: 0,
            explanation: "Cysteine residues form covalent disulfide (-S-S-) bonds between R-groups, stabilizing the 3D folded protein.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.3",
        title: "Introduction to Biological Macromolecules",
        description: "Differentiate between monomer subunits and polymers formed by dehydration synthesis.",
        youtubeId: "H8WJ2KL0g0o",
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
          },
          {
            id: "1.3.3",
            text: "A polypeptide of 150 amino acids is fully hydrolyzed. How many water molecules are consumed?",
            options: [
              "148",
              "149",
              "150",
              "151"
            ],
            correctIndex: 1,
            explanation: "A chain of 150 amino acids has 149 peptide bonds. Hydrolysis consumes one H2O per bond: 149 total.",
            unitId: 1
          },
          {
            id: "1.3.4",
            text: "Which of the following is NOT a monomer-polymer pair?",
            options: [
              "Glucose-Starch",
              "Amino acid-Polypeptide",
              "Nucleotide-DNA",
              "Glycerol-Triglyceride"
            ],
            correctIndex: 3,
            explanation: "Triglycerides form from glycerol + 3 fatty acids via ester bonds, but are NOT polymers (no repeating monomer chain).",
            unitId: 1
          },
          {
            id: "1.3.5",
            text: "A cell forms 200 peptide bonds synthesizing a protein. How many water molecules are released?",
            options: [
              "199",
              "200",
              "201",
              "400"
            ],
            correctIndex: 1,
            explanation: "Dehydration synthesis releases one H2O per peptide bond formed. Forming 200 bonds releases 200 H2O molecules.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.4",
        title: "Properties of Biological Macromolecules",
        description: "Compare structural differences and functions of carbohydrates, lipids, proteins, and nucleic acids.",
        youtubeId: "qdNAtRO2SkQ",
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
          },
          {
            id: "1.4.3",
            text: "Heat denatures a protein by disrupting H-bonds and hydrophobic interactions. Which structural levels are lost?",
            options: [
              "Primary only",
              "Primary and secondary",
              "Secondary and tertiary",
              "Secondary, tertiary, and quaternary"
            ],
            correctIndex: 3,
            explanation: "Denaturation disrupts secondary (helices/sheets), tertiary (3D shape), and quaternary (multi-subunit) structure. Primary sequence is unaffected.",
            unitId: 1
          },
          {
            id: "1.4.4",
            text: "What property makes phospholipids capable of forming biological membrane bilayers?",
            options: [
              "Entirely hydrophobic",
              "Entirely hydrophilic",
              "Amphipathic: hydrophilic phosphate head and hydrophobic fatty acid tails",
              "Covalent bonding with water"
            ],
            correctIndex: 2,
            explanation: "Amphipathic phospholipids self-assemble: hydrophilic heads face water; hydrophobic tails face inward away from water.",
            unitId: 1
          },
          {
            id: "1.4.5",
            text: "Both plant starch and animal glycogen are composed of which monomer?",
            options: [
              "Fructose",
              "Ribose",
              "Glucose",
              "Galactose"
            ],
            correctIndex: 2,
            explanation: "Starch (plants) and glycogen (animals) are both storage polysaccharides made of glucose monomers linked by alpha-glycosidic bonds.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.5",
        title: "Structure of Nucleic Acids",
        description: "Examine DNA and RNA structural differences, directionality, and coding differences.",
        youtubeId: "NNASRkIU5Fw",
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
            text: "A double-stranded DNA has 30% thymine. What percentage is cytosine?",
            options: [
              "20%",
              "30%",
              "40%",
              "60%"
            ],
            correctIndex: 0,
            explanation: "By Chargaff's rules (A=T, G=C): T=30% so A=30%. Remaining 40% = G+C equally split: C=20%.",
            unitId: 1
          },
          {
            id: "1.5.4",
            text: "Which feature distinguishes deoxyribose (DNA) from ribose (RNA)?",
            options: [
              "5 carbons vs 4 carbons",
              "Deoxyribose lacks the -OH at the 2' carbon",
              "Deoxyribose has uracil",
              "Deoxyribose is a double-ring"
            ],
            correctIndex: 1,
            explanation: "Deoxyribose has only -H at the 2' carbon (where ribose has -OH), making it more stable.",
            unitId: 1
          },
          {
            id: "1.5.5",
            text: "If one DNA strand is 5'-ATCG-3', the complementary strand written 5' to 3' is:",
            options: [
              "TAGC",
              "CGAT",
              "ATCG",
              "GCTA"
            ],
            correctIndex: 1,
            explanation: "Complementary strand (antiparallel) is 3'-TAGC-5'. Read 5' to 3', this is CGAT.",
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
          },
          {
            id: "2.1.3",
            text: "Which observation provides STRONGEST support for endosymbiotic theory?",
            options: [
              "Mitochondria are found in all eukaryotes",
              "Mitochondria have 80S ribosomes like the cytoplasm",
              "Mitochondria contain circular DNA and 70S ribosomes similar to bacteria",
              "Mitochondria produce ATP"
            ],
            correctIndex: 2,
            explanation: "Circular DNA, 70S ribosomes (prokaryotic type), and binary fission are all bacterial characteristics supporting endosymbiotic origin.",
            unitId: 2
          },
          {
            id: "2.1.4",
            text: "A cell secreting large amounts of digestive enzymes would have an abundance of:",
            options: [
              "Chloroplasts and vacuoles",
              "Rough ER and Golgi apparatus",
              "Smooth ER and peroxisomes",
              "Central vacuoles"
            ],
            correctIndex: 1,
            explanation: "Secretory proteins are made on rough ER ribosomes, packaged there, then modified and shipped by the Golgi.",
            unitId: 2
          },
          {
            id: "2.1.5",
            text: "Which combination of structures is UNIQUE to plant cells?",
            options: [
              "Ribosomes and mitochondria",
              "Cell wall, large central vacuole, and chloroplasts",
              "Nucleus and endoplasmic reticulum",
              "Golgi apparatus and lysosomes"
            ],
            correctIndex: 1,
            explanation: "Plant cells have a cellulose cell wall, large central vacuole, and chloroplasts - none found in typical animal cells.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.2",
        title: "Cell Structure and Function",
        description: "Examine how internal membranes coordinate cellular tasks and export products.",
        youtubeId: "aTHhB_5X3Fk",
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
          },
          {
            id: "2.2.3",
            text: "A toxin blocks ER transport vesicles. Which process is MOST directly disrupted?",
            options: [
              "DNA replication",
              "ATP synthesis",
              "Secretion of proteins to the extracellular environment",
              "Lipid synthesis in smooth ER"
            ],
            correctIndex: 2,
            explanation: "Proteins for secretion must travel in vesicles from rough ER to Golgi to plasma membrane. Blocking ER exit halts secretion.",
            unitId: 2
          },
          {
            id: "2.2.4",
            text: "Mitochondria and chloroplasts are semi-autonomous because they:",
            options: [
              "can move between cells",
              "contain their own DNA and ribosomes, replicating independently",
              "are made of a single membrane",
              "receive all proteins from the Golgi"
            ],
            correctIndex: 1,
            explanation: "Both organelles carry circular DNA and prokaryotic-type ribosomes, allowing them to produce some of their own proteins.",
            unitId: 2
          },
          {
            id: "2.2.5",
            text: "During autophagy, which organelle provides hydrolytic enzymes to digest old organelles?",
            options: [
              "Golgi apparatus",
              "Smooth ER",
              "Lysosome",
              "Peroxisome"
            ],
            correctIndex: 2,
            explanation: "Lysosomes contain acid hydrolases. Autophagosomes fuse with lysosomes, digesting their damaged contents.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.3",
        title: "Cell Size",
        description: "Calculate surface area-to-volume ratios and analyze their impact on transport efficiency.",
        youtubeId: "p9RWaFHuMrY",
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
          },
          {
            id: "2.3.3",
            text: "A cube-shaped cell has side length 3 um. What is its surface area-to-volume ratio?",
            options: [
              "2",
              "3",
              "6",
              "9"
            ],
            correctIndex: 0,
            explanation: "SA = 6x(3^2) = 54 um^2. V = 3^3 = 27 um^3. SA/V = 54/27 = 2.",
            unitId: 2
          },
          {
            id: "2.3.4",
            text: "Which adaptation BEST solves the low SA/V ratio in large metabolically active cells?",
            options: [
              "Spherical shape to maximize volume",
              "Highly folded internal membranes increasing functional surface area",
              "Dormancy to reduce metabolic needs",
              "Larger nucleus"
            ],
            correctIndex: 1,
            explanation: "Cristae in mitochondria, microvilli in intestinal cells, and thylakoids in chloroplasts all increase surface area without proportionally increasing volume.",
            unitId: 2
          },
          {
            id: "2.3.5",
            text: "If a spherical cell radius doubles, its SA/V ratio:",
            options: [
              "doubles",
              "stays the same",
              "is halved",
              "quadruples"
            ],
            correctIndex: 2,
            explanation: "SA proportional to r^2; V proportional to r^3; so SA/V proportional to 1/r. Doubling r halves SA/V.",
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
          },
          {
            id: "2.4.3",
            text: "A protein spanning the entire bilayer with hydrophobic transmembrane segments is classified as:",
            options: [
              "A peripheral membrane protein",
              "An integral (transmembrane) protein",
              "A glycolipid",
              "A soluble receptor"
            ],
            correctIndex: 1,
            explanation: "Integral proteins span the lipid bilayer. Hydrophobic regions interact with fatty acid tails; hydrophilic ends face aqueous environments.",
            unitId: 2
          },
          {
            id: "2.4.4",
            text: "Unsaturated fatty acid tails INCREASE membrane fluidity because:",
            options: [
              "They pack more tightly",
              "They prevent cholesterol integration",
              "Double bonds create kinks reducing tight packing",
              "They form stronger bonds with membrane proteins"
            ],
            correctIndex: 2,
            explanation: "Carbon-carbon double bonds in unsaturated tails create kinks, preventing tight phospholipid packing and increasing fluidity.",
            unitId: 2
          },
          {
            id: "2.4.5",
            text: "Glycoproteins on the extracellular membrane surface primarily function as:",
            options: [
              "energy storage molecules",
              "barriers blocking protein transport",
              "cell-identity markers and receptor sites",
              "structures replacing membrane proteins"
            ],
            correctIndex: 2,
            explanation: "Glycoproteins form the glycocalyx, involved in cell recognition, immune identification, and receptor-ligand interactions.",
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
            text: "The Na+/K+ ATPase pumps 3 Na+ out and 2 K+ in against their gradients. This is:",
            options: [
              "Passive transport",
              "Facilitated diffusion",
              "Primary active transport using ATP hydrolysis",
              "Osmosis"
            ],
            correctIndex: 2,
            explanation: "Moving ions against concentration gradients requires energy from ATP hydrolysis - this is primary active transport.",
            unitId: 2
          },
          {
            id: "2.5.4",
            text: "A cell in hypertonic solution loses water by which mechanism?",
            options: [
              "Active transport requiring ATP",
              "Endocytosis",
              "Osmosis through aquaporins",
              "Exocytosis"
            ],
            correctIndex: 2,
            explanation: "Water moves by osmosis (facilitated diffusion through aquaporins) from high water potential inside to low water potential outside.",
            unitId: 2
          },
          {
            id: "2.5.5",
            text: "Which substance crosses the phospholipid bilayer MOST easily by simple diffusion?",
            options: [
              "Na+ ion",
              "Glucose",
              "O2 gas",
              "DNA"
            ],
            correctIndex: 2,
            explanation: "O2 is small and nonpolar, dissolving readily in the hydrophobic lipid bilayer core without protein assistance.",
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
          },
          {
            id: "2.6.3",
            text: "GLUT2 transport rate plateaus despite rising blood glucose. This is because:",
            options: [
              "The cell no longer needs glucose",
              "All GLUT2 transporters are saturated with substrate",
              "Glucose concentration inside exceeds outside",
              "ATP is depleted"
            ],
            correctIndex: 1,
            explanation: "Facilitated diffusion rate is limited by the number of transport proteins. Once all are occupied, transport rate cannot increase (saturation).",
            unitId: 2
          },
          {
            id: "2.6.4",
            text: "Aquaporin channels allow water but block ions due to:",
            options: [
              "The channel being too large for ions",
              "Precise size, charge, and polarity lining of the channel pore",
              "Aquaporins being made of lipids",
              "The channel requiring ATP to open for ions"
            ],
            correctIndex: 1,
            explanation: "Aquaporin pores have specific electrostatic properties allowing water in single file while excluding hydrated ions.",
            unitId: 2
          },
          {
            id: "2.6.5",
            text: "Why do cells need facilitated diffusion proteins for glucose even though it moves down its gradient?",
            options: [
              "Glucose has a negative charge",
              "Glucose is large and polar, unable to cross the hydrophobic bilayer alone",
              "Glucose requires phosphorylation first",
              "High internal glucose pushes it out"
            ],
            correctIndex: 1,
            explanation: "Glucose (MW 180) is a large polar molecule. The hydrophobic bilayer core blocks polar molecules; GLUT proteins provide a hydrophilic channel.",
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
          },
          {
            id: "2.7.3",
            text: "A red blood cell in 3% NaCl (hypertonic) will:",
            options: [
              "swell and lyse",
              "remain unchanged",
              "crenate (shrivel) as water exits by osmosis",
              "actively pump ions to maintain shape"
            ],
            correctIndex: 2,
            explanation: "In hypertonic solution, solute concentration outside exceeds inside. Water exits by osmosis causing crenation.",
            unitId: 2
          },
          {
            id: "2.7.4",
            text: "What prevents a plant cell in hypotonic solution from lysing unlike an animal cell?",
            options: [
              "Membrane becomes thicker",
              "The rigid cell wall resists expansion, generating wall pressure",
              "Chloroplasts absorb excess water",
              "The vacuole exports water"
            ],
            correctIndex: 1,
            explanation: "The plant cell wall provides mechanical resistance (wall pressure) that counterbalances osmotic water uptake, preventing lysis.",
            unitId: 2
          },
          {
            id: "2.7.5",
            text: "Which solution causes NO net water movement in animal cells?",
            options: [
              "Hypertonic (higher solute than cell)",
              "Hypotonic (lower solute than cell)",
              "Isotonic (same solute concentration as cell)",
              "Distilled water"
            ],
            correctIndex: 2,
            explanation: "In isotonic solution, solute concentrations are equal inside and outside. Water potential is equal so there is no net osmosis.",
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
          },
          {
            id: "2.8.3",
            text: "Co-transport of glucose and Na+ into intestinal cells is driven by the Na+ gradient maintained by:",
            options: [
              "Facilitated diffusion of Na+ back in",
              "Glycolysis producing more Na+",
              "The Na+/K+ ATPase continuously exporting Na+",
              "Osmosis from the intestinal lumen"
            ],
            correctIndex: 2,
            explanation: "The Na+/K+ ATPase (primary active transport) pumps Na+ out, maintaining low intracellular Na+ that drives secondary active co-transport of glucose.",
            unitId: 2
          },
          {
            id: "2.8.4",
            text: "During receptor-mediated endocytosis, a cell internalizes specific molecules by:",
            options: [
              "diffusion through gated ion channels",
              "forming a membrane vesicle after receptor-ligand binding",
              "using ATP to pump molecules across",
              "excreting enzymes to digest molecules"
            ],
            correctIndex: 1,
            explanation: "Ligands bind receptors in coated pits. The pit invaginates and pinches off, forming an endocytic vesicle inside the cell.",
            unitId: 2
          },
          {
            id: "2.8.5",
            text: "How does exocytosis contribute to plasma membrane regulation?",
            options: [
              "It pumps ions out against their gradient",
              "Vesicle fusion simultaneously releases contents AND adds membrane material",
              "It breaks down organelles with enzymes",
              "It allows DNA to exit the nucleus"
            ],
            correctIndex: 1,
            explanation: "When secretory vesicles fuse with the plasma membrane, they release their contents AND add their lipid/protein membrane material, maintaining membrane surface area.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.9",
        title: "Cell Compartmentalization",
        description: "Investigate how membrane-bound organelles localize and optimize eukaryotic reactions.",
        youtubeId: "G3yB-jjPjlI",
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
          },
          {
            id: "2.9.3",
            text: "Why does compartmentalization by internal membranes benefit eukaryotic cells?",
            options: [
              "It prevents all chemical reactions",
              "Incompatible reactions can occur simultaneously in separate compartments",
              "It removes the need for DNA in the nucleus",
              "It reduces metabolic rate"
            ],
            correctIndex: 1,
            explanation: "Without compartmentalization, incompatible reactions (e.g., protein synthesis and degradation) would interfere. Membranes allow simultaneous, efficient parallel processing.",
            unitId: 2
          },
          {
            id: "2.9.4",
            text: "The nuclear envelope separates transcription from translation. Why is this important?",
            options: [
              "Allows pre-mRNA to be processed (spliced, capped) before translation",
              "Prevents the nucleus from being degraded",
              "Increases translation speed",
              "Ensures DNA replicates more easily"
            ],
            correctIndex: 0,
            explanation: "In eukaryotes, pre-mRNA is processed (5' cap, splicing, poly-A tail) in the nucleus before export. Simultaneous transcription/translation would prevent this processing.",
            unitId: 2
          },
          {
            id: "2.9.5",
            text: "A drug dissolves all inner mitochondrial membranes. Which process is MOST immediately disrupted?",
            options: [
              "DNA replication",
              "Calvin cycle",
              "Oxidative phosphorylation and ATP synthesis",
              "Protein synthesis on ribosomes"
            ],
            correctIndex: 2,
            explanation: "The inner mitochondrial membrane houses ETC complexes and ATP synthase. Destroying it prevents the proton gradient needed for oxidative phosphorylation.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.10",
        title: "Origins of Cell Compartmentalization",
        description: "Analyze the endosymbiotic theory for the evolution of mitochondria and chloroplasts.",
        youtubeId: "OATPVQAa1g4",
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
          },
          {
            id: "2.10.3",
            text: "Which observation provides STRONGEST evidence for endosymbiotic theory?",
            options: [
              "Mitochondria are found in all eukaryotes",
              "Mitochondria have circular DNA and 70S ribosomes similar to bacteria",
              "Mitochondria have a double membrane",
              "Mitochondria produce ATP"
            ],
            correctIndex: 1,
            explanation: "Circular DNA, 70S ribosomes (prokaryotic type), and binary fission are all bacterial characteristics - the strongest evidence.",
            unitId: 2
          },
          {
            id: "2.10.4",
            text: "Chloroplasts most likely originated from which type of organism?",
            options: [
              "Heterotrophic archaean",
              "Free-living photosynthetic cyanobacterium",
              "Thermophilic bacterium",
              "Non-photosynthetic purple bacterium"
            ],
            correctIndex: 1,
            explanation: "Chloroplasts resemble cyanobacteria in photosynthetic machinery, thylakoid membranes, circular DNA, and 70S ribosomes.",
            unitId: 2
          },
          {
            id: "2.10.5",
            text: "Why do prokaryotic antibiotics like tetracycline target mitochondria but not cytoplasmic ribosomes?",
            options: [
              "Mitochondria have 70S ribosomes - the same target as bacterial ribosomes",
              "Mitochondria lack a protective outer membrane",
              "Mitochondrial DNA replicates too quickly",
              "Mitochondrial DNA has no promoter regions"
            ],
            correctIndex: 0,
            explanation: "Mitochondrial ribosomes are 70S (prokaryotic type), targets of antibiotics like tetracycline. Cytoplasmic ribosomes are 80S and unaffected.",
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
          },
          {
            id: "3.1.3",
            text: "An enzyme active site complementary to its substrate supports which model?",
            options: [
              "Lock-and-key: active site is rigid and perfectly fits substrate",
              "Induced fit: active site changes shape upon binding",
              "Both models equally",
              "Fluid mosaic model"
            ],
            correctIndex: 0,
            explanation: "The lock-and-key model proposes a pre-existing perfectly shaped active site. The induced-fit model proposes conformational change upon substrate binding.",
            unitId: 3
          },
          {
            id: "3.1.4",
            text: "A mutation changes one amino acid IN the active site. The most likely effect is:",
            options: [
              "Unchanged enzyme function",
              "Ability to bind any substrate",
              "Reduced or eliminated substrate specificity",
              "Increased optimum temperature"
            ],
            correctIndex: 2,
            explanation: "The active site shape determines substrate specificity. Even one changed active site amino acid can disrupt the complementary fit required for binding.",
            unitId: 3
          },
          {
            id: "3.1.5",
            text: "Enzymes speed up reactions by:",
            options: [
              "providing energy to break the activation energy barrier",
              "being consumed in the reaction",
              "lowering the activation energy by stabilizing the transition state",
              "changing the reaction equilibrium"
            ],
            correctIndex: 2,
            explanation: "Enzymes lower activation energy (Ea) by stabilizing the transition state. They are neither consumed nor do they shift equilibrium.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.2",
        title: "Enzyme Catalysis",
        description: "Analyze factors affecting enzyme function, denaturation, and mechanisms of inhibition.",
        youtubeId: "zLVFzgFmKd0",
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
          },
          {
            id: "3.2.3",
            text: "The induced-fit model proposes that:",
            options: [
              "The enzyme has a rigid active site",
              "The enzyme changes shape slightly when substrate binds",
              "The substrate changes shape to fit the enzyme",
              "No enzyme-substrate complex forms"
            ],
            correctIndex: 1,
            explanation: "In induced fit, substrate binding induces a conformational change in the active site, creating a snugger, more precise complementary fit.",
            unitId: 3
          },
          {
            id: "3.2.4",
            text: "A competitive inhibitor works by:",
            options: [
              "covalently modifying the active site permanently",
              "binding to the active site, competing with substrate for the same binding site",
              "changing enzyme shape at an allosteric site",
              "increasing the activation energy"
            ],
            correctIndex: 1,
            explanation: "Competitive inhibitors resemble the substrate and bind reversibly to the active site. Their inhibition can be overcome by adding more substrate.",
            unitId: 3
          },
          {
            id: "3.2.5",
            text: "Adding excess substrate to a reaction with a competitive inhibitor will:",
            options: [
              "have no effect",
              "decrease reaction rate further",
              "increase reaction rate back toward normal",
              "permanently denature the inhibitor"
            ],
            correctIndex: 2,
            explanation: "Competitive inhibition is reversible. High substrate concentrations outcompete the inhibitor for the active site, restoring enzyme activity.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.3",
        title: "Environmental Impacts on Enzyme Function",
        description: "Study how temperature, pH, and inhibitors impact enzyme conformation and rates.",
        youtubeId: "0DwVBOvGVg8",
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
          },
          {
            id: "3.3.3",
            text: "Pepsin has maximum activity at pH 2. At pH 8 activity falls sharply because:",
            options: [
              "Substrate is destroyed at high pH",
              "pH change alters ionization of active site amino acids, disrupting its 3D shape",
              "Water concentration increases, diluting the enzyme",
              "Substrate becomes more polar at high pH"
            ],
            correctIndex: 1,
            explanation: "pH affects ionic charges on R-groups in the active site. Deviation from optimum alters these charges, disrupting the active site shape and substrate binding.",
            unitId: 3
          },
          {
            id: "3.3.4",
            text: "A noncompetitive inhibitor binds an allosteric site. Unlike competitive inhibition, this:",
            options: [
              "can be reversed by adding excess substrate",
              "cannot be overcome by adding excess substrate",
              "is always permanent",
              "only affects substrate binding affinity"
            ],
            correctIndex: 1,
            explanation: "Noncompetitive inhibitors change enzyme shape allosterically. Since they do not block the active site directly, adding more substrate does not help.",
            unitId: 3
          },
          {
            id: "3.3.5",
            text: "Heavy metals (Hg2+) inhibit enzymes by binding to cysteine sulfhydryl groups. This is:",
            options: [
              "Competitive inhibition",
              "Irreversible noncompetitive inhibition",
              "Feedback inhibition",
              "Allosteric activation"
            ],
            correctIndex: 1,
            explanation: "Heavy metals bind irreversibly to enzyme R-groups, permanently altering 3D structure - a form of irreversible noncompetitive inhibition.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.4",
        title: "Cellular Energy",
        description: "Understand the thermodynamics of ATP hydrolysis and energy coupling in cells.",
        youtubeId: "sQK3Yr4Sc_k",
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
          },
          {
            id: "3.4.3",
            text: "ATP hydrolysis coupled to active transport is an example of:",
            options: [
              "Feedback inhibition",
              "Energy coupling: exergonic ATP hydrolysis drives endergonic work",
              "Competitive inhibition of ATPase",
              "Allosteric regulation"
            ],
            correctIndex: 1,
            explanation: "Energy coupling: free energy released by exergonic ATP hydrolysis (delta-G negative) powers endergonic cellular processes.",
            unitId: 3
          },
          {
            id: "3.4.4",
            text: "In pathway A->B->C->D, product D inhibits the A->B enzyme. This is:",
            options: [
              "Substrate activation",
              "Competitive inhibition",
              "Feedback (end-product) inhibition",
              "Allosteric activation"
            ],
            correctIndex: 2,
            explanation: "Feedback inhibition: end product inhibits an early enzyme, preventing overproduction. A common metabolic regulatory mechanism.",
            unitId: 3
          },
          {
            id: "3.4.5",
            text: "Which is an ANABOLIC reaction?",
            options: [
              "Breaking glycogen into glucose during exercise",
              "Oxidizing glucose to produce ATP",
              "Synthesizing a polypeptide from amino acids",
              "Hydrolyzing triglycerides into glycerol and fatty acids"
            ],
            correctIndex: 2,
            explanation: "Anabolic reactions build larger molecules from smaller ones, requiring energy input. Polypeptide synthesis is anabolic (dehydration synthesis).",
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
          },
          {
            id: "3.5.3",
            text: "What is the PRIMARY role of splitting water (photolysis) in light-dependent reactions?",
            options: [
              "Produce CO2 for Calvin cycle",
              "Provide electrons to replace those lost by oxidized chlorophyll",
              "Create proton gradient via substrate-level phosphorylation",
              "Provide NADPH directly to Calvin cycle"
            ],
            correctIndex: 1,
            explanation: "Photolysis (2H2O -> 4H+ + 4e- + O2) provides electrons to replace those lost by photoexcited chlorophyll.",
            unitId: 3
          },
          {
            id: "3.5.4",
            text: "During the Calvin cycle, CO2 is fixed by RuBisCO onto:",
            options: [
              "G3P",
              "RuBP (ribulose-1,5-bisphosphate)",
              "Oxaloacetate",
              "Pyruvate"
            ],
            correctIndex: 1,
            explanation: "RuBisCO catalyzes CO2 addition to RuBP (5C), producing an unstable 6C compound that splits into two 3-PGA molecules.",
            unitId: 3
          },
          {
            id: "3.5.5",
            text: "A plant is exposed to light with H2-18O (heavy oxygen water). The 18O would appear in:",
            options: [
              "CO2 released from the plant",
              "O2 released from the plant",
              "Glucose from the Calvin cycle",
              "ATP made in the stroma"
            ],
            correctIndex: 1,
            explanation: "O2 released during photosynthesis comes directly from photolysis of water. Heavy 18O in water leads to 18O2 gas.",
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
          },
          {
            id: "3.6.3",
            text: "What is the FINAL electron acceptor in the electron transport chain?",
            options: [
              "NAD+",
              "CO2",
              "Pyruvate",
              "O2"
            ],
            correctIndex: 3,
            explanation: "In aerobic respiration, O2 is the terminal electron acceptor. It combines with electrons and protons to form H2O.",
            unitId: 3
          },
          {
            id: "3.6.4",
            text: "ATP synthase using the proton gradient to make ATP is called:",
            options: [
              "Substrate-level phosphorylation",
              "Chemiosmosis",
              "Dehydration synthesis",
              "Oxidative deamination"
            ],
            correctIndex: 1,
            explanation: "Chemiosmosis: protons flow down their gradient through ATP synthase, driving ADP + Pi -> ATP. Produces the majority of aerobic ATP.",
            unitId: 3
          },
          {
            id: "3.6.5",
            text: "Cyanide blocks complex IV of the ETC. The MOST immediate consequence is:",
            options: [
              "Glycolysis immediately stops",
              "Proton gradient collapses, halting ATP synthesis",
              "Krebs cycle accelerates",
              "Fermentation is permanently inhibited"
            ],
            correctIndex: 1,
            explanation: "Blocking complex IV stops electron flow. Without electron flow, the proton gradient cannot be maintained and ATP synthase cannot function.",
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
          },
          {
            id: "3.7.3",
            text: "During fermentation, pyruvate is converted to lactate. The PRIMARY purpose is to:",
            options: [
              "Produce more ATP beyond glycolysis",
              "Regenerate NAD+ so glycolysis can continue",
              "Convert glucose to amino acids",
              "Generate CO2"
            ],
            correctIndex: 1,
            explanation: "Fermentation regenerates NAD+ from NADH. Without NAD+, glycolysis (requiring NAD+ as electron acceptor) cannot continue producing ATP anaerobically.",
            unitId: 3
          },
          {
            id: "3.7.4",
            text: "Chemosynthetic organisms obtain energy from:",
            options: [
              "Sunlight via chlorophyll",
              "Chemical oxidation of inorganic compounds (H2S, NH3, Fe2+)",
              "Consuming organic molecules",
              "Radioactive decay"
            ],
            correctIndex: 1,
            explanation: "Chemoautotrophs oxidize inorganic compounds as their energy source to fix CO2 into organic matter, without using light.",
            unitId: 3
          },
          {
            id: "3.7.5",
            text: "During one Krebs cycle turn, where do the 2 carbons from acetyl-CoA end up?",
            options: [
              "Converted to ethanol",
              "Released as 2 CO2 molecules during oxidation steps",
              "Left as part of oxaloacetate",
              "Stored as glycogen"
            ],
            correctIndex: 1,
            explanation: "The 2 carbons from acetyl-CoA are released as CO2 at the isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase steps.",
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
            text: "Steroid hormones cross the plasma membrane but peptide hormones cannot because steroids are:",
            options: [
              "larger, requiring active transport",
              "lipid-soluble (nonpolar), dissolving through the hydrophobic membrane",
              "charged molecules using ion channels",
              "too large for receptors"
            ],
            correctIndex: 1,
            explanation: "Being lipid-derived, steroid hormones are hydrophobic and dissolve in the phospholipid bilayer. Peptide hormones are polar/charged and cannot cross.",
            unitId: 4
          },
          {
            id: "4.1.4",
            text: "A cell releasing signals that bind to its OWN receptors exemplifies:",
            options: [
              "Paracrine signaling",
              "Endocrine signaling",
              "Autocrine signaling",
              "Juxtacrine signaling"
            ],
            correctIndex: 2,
            explanation: "Autocrine signaling: a cell secretes signals that bind to its own receptors. Important in immune responses and cancer biology.",
            unitId: 4
          },
          {
            id: "4.1.5",
            text: "Neurotransmitters signal only the adjacent postsynaptic cell. This is:",
            options: [
              "Endocrine (long-distance) signaling",
              "Autocrine signaling",
              "Paracrine signaling over a short distance",
              "Direct contact via gap junctions"
            ],
            correctIndex: 2,
            explanation: "Paracrine signaling: local chemical signals affect nearby cells. Neurotransmitters diffuse across the synaptic cleft (short distance) to the postsynaptic cell.",
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
          },
          {
            id: "4.2.3",
            text: "Signal amplification in transduction occurs because:",
            options: [
              "One receptor binds many ligands simultaneously",
              "One activated receptor activates many G-proteins, each producing many second messengers",
              "Second messengers cross membranes to other cells",
              "cAMP is more potent than the original hormone"
            ],
            correctIndex: 1,
            explanation: "Amplification cascade: 1 ligand -> 1 receptor -> many G-proteins -> many adenylyl cyclases -> MANY cAMP molecules -> massive effect.",
            unitId: 4
          },
          {
            id: "4.2.4",
            text: "A drug permanently activates the G-protein alpha subunit (blocking GTP hydrolysis). The result is:",
            options: [
              "All signal transduction ceases",
              "The signaling pathway is constitutively (continuously) active",
              "cAMP is continuously degraded",
              "Receptor is immediately internalized"
            ],
            correctIndex: 1,
            explanation: "G-proteins turn off when alpha subunit hydrolyzes GTP to GDP. Blocking this hydrolysis keeps G-protein permanently active, continuously stimulating downstream signaling.",
            unitId: 4
          },
          {
            id: "4.2.5",
            text: "In the cascade: ligand -> receptor -> G-protein -> adenylyl cyclase -> cAMP -> PKA -> target, cAMP is best classified as:",
            options: [
              "Primary signal (first messenger)",
              "A second messenger relaying signal inside the cell",
              "An enzyme phosphorylating target proteins",
              "A transcription factor"
            ],
            correctIndex: 1,
            explanation: "cAMP is a classic second messenger - an intracellular relay molecule generated by an extracellular signal that amplifies it inside the cell.",
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
          },
          {
            id: "4.3.3",
            text: "Protein kinases in signaling cascades function by:",
            options: [
              "Hydrolyzing cAMP to terminate signaling",
              "Adding phosphate groups to proteins, activating or deactivating them",
              "Removing phosphate groups from RTKs",
              "Synthesizing second messengers like IP3"
            ],
            correctIndex: 1,
            explanation: "Protein kinases transfer phosphate from ATP to serine, threonine, or tyrosine residues on target proteins, causing conformational changes that alter activity.",
            unitId: 4
          },
          {
            id: "4.3.4",
            text: "Which molecule terminates cAMP-mediated signaling?",
            options: [
              "G-protein beta-gamma subunit",
              "Phosphodiesterase, which converts cAMP to 5'-AMP",
              "Adenylyl cyclase",
              "Protein phosphatase"
            ],
            correctIndex: 1,
            explanation: "Phosphodiesterase breaks down cAMP into inactive 5'-AMP, terminating the second messenger signal and stopping PKA activity.",
            unitId: 4
          },
          {
            id: "4.3.5",
            text: "Receptor tyrosine kinases (RTKs) are activated by:",
            options: [
              "Binding lipid-soluble hormones inside the cell",
              "Ligand binding causing dimerization and autophosphorylation of tyrosine residues",
              "Opening an ion channel",
              "Activation by a G-protein alpha subunit"
            ],
            correctIndex: 1,
            explanation: "When growth factors bind RTKs, two receptor monomers dimerize and phosphorylate each other's tyrosines (autophosphorylation), activating downstream signaling.",
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
          },
          {
            id: "4.4.3",
            text: "A proto-oncogene mutates into an oncogene that sends growth signals without ligand. This contributes to cancer by:",
            options: [
              "causing the cell to stop dividing",
              "causing constitutive (uncontrolled) cell proliferation",
              "upregulating tumor suppressor genes",
              "attracting more immune cells"
            ],
            correctIndex: 1,
            explanation: "Oncogenes encode proteins that promote division. A constitutively active receptor bypasses normal signaling requirements, driving continuous cell proliferation.",
            unitId: 4
          },
          {
            id: "4.4.4",
            text: "Receptor downregulation after prolonged hormone exposure reduces:",
            options: [
              "Number of hormone molecules in the bloodstream",
              "Cell sensitivity to the hormone (desensitization)",
              "Rate of hormone synthesis",
              "Intracellular second messenger levels"
            ],
            correctIndex: 1,
            explanation: "Fewer surface receptors mean the cell becomes less responsive to the hormone. This prevents overstimulation during prolonged exposure.",
            unitId: 4
          },
          {
            id: "4.4.5",
            text: "Cells in multicellular organisms do not respond to ALL bloodstream signals because:",
            options: [
              "All signals are destroyed before reaching most cells",
              "Cells only respond to signals for which they have specific receptors",
              "All cells have identical receptors activated by different tissues",
              "Signals cannot cross the lipid bilayer"
            ],
            correctIndex: 1,
            explanation: "Receptor specificity determines cellular response. A cell can only respond to a signal if it expresses the complementary receptor protein.",
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
          },
          {
            id: "4.5.3",
            text: "Blood clotting involves positive feedback. How does this loop ultimately stop?",
            options: [
              "Negative feedback from platelets inhibits the cascade",
              "The positive feedback continues indefinitely",
              "The clot seals the wound, removing the stimulus for clotting",
              "Clotting factors are replenished too slowly"
            ],
            correctIndex: 2,
            explanation: "Positive feedback amplifies until the stimulus is removed. Once the wound is sealed and tissue repaired, the clotting stimulus disappears, stopping the cascade.",
            unitId: 4
          },
          {
            id: "4.5.4",
            text: "High blood glucose triggers insulin release, which lowers glucose. This is:",
            options: [
              "Positive feedback amplifying the stimulus",
              "Homeostatic negative feedback returning glucose toward set point",
              "Autocrine signaling within pancreatic cells",
              "Receptor downregulation in liver cells"
            ],
            correctIndex: 1,
            explanation: "Negative feedback systems oppose the original stimulus to maintain homeostasis. Insulin reduces blood glucose back toward the set point.",
            unitId: 4
          },
          {
            id: "4.5.5",
            text: "In pathway A->B->C->D, product D accumulates and inhibits the A->B enzyme. The result is:",
            options: [
              "D production accelerates because D activates the pathway",
              "D production slows as the inhibited enzyme reduces pathway flux",
              "The pathway shuts down permanently",
              "The enzyme becomes more active in the presence of D"
            ],
            correctIndex: 1,
            explanation: "Feedback inhibition: when D accumulates, it inhibits early enzyme activity, slowing D production. When D is consumed, inhibition is relieved - preventing overproduction.",
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
          },
          {
            id: "4.6.3",
            text: "DNA replication occurs during which specific phase of the cell cycle?",
            options: [
              "G1 phase",
              "S (Synthesis) phase of interphase",
              "G2 phase",
              "M (Mitotic) phase"
            ],
            correctIndex: 1,
            explanation: "The S phase (synthesis phase) of interphase is when the cell duplicates its entire genome in preparation for division.",
            unitId: 4
          },
          {
            id: "4.6.4",
            text: "A diploid human cell (2n=46) has completed S phase. How many total DNA molecules does it contain?",
            options: [
              "23",
              "46",
              "92",
              "184"
            ],
            correctIndex: 2,
            explanation: "Before S phase: 46 chromosomes, each = 1 DNA molecule. After S phase: each chromosome = 2 sister chromatids. So 46 x 2 = 92 DNA molecules.",
            unitId: 4
          },
          {
            id: "4.6.5",
            text: "Which event marks the transition from G2 phase to mitosis?",
            options: [
              "Completion of DNA replication",
              "Activation of the cyclin B-CDK1 complex (MPF)",
              "Chromosome decondensation",
              "Formation of the spindle checkpoint"
            ],
            correctIndex: 1,
            explanation: "The cyclin B-CDK1 complex (MPF) drives entry into mitosis. When cyclin B accumulates in G2 and binds CDK1, the complex phosphorylates proteins needed for mitosis.",
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
          },
          {
            id: "4.7.3",
            text: "The p53 tumor suppressor protein (guardian of the genome) responds to DNA damage by:",
            options: [
              "Stimulating cell division by activating cyclins",
              "Halting the cell cycle at G1 and initiating DNA repair or apoptosis",
              "Producing growth factors for tissue repair",
              "Activating telomerase"
            ],
            correctIndex: 1,
            explanation: "p53 is activated by DNA damage. It halts the cell cycle at G1 checkpoint (via p21/CDK inhibitor), allowing DNA repair. If repair fails, p53 triggers apoptosis.",
            unitId: 4
          },
          {
            id: "4.7.4",
            text: "Cancer cells often lack contact inhibition. This means they:",
            options: [
              "lose the ability to form gap junctions",
              "continue to divide even when touching neighboring cells",
              "cannot migrate to other tissues",
              "have reduced DNA replication rates"
            ],
            correctIndex: 1,
            explanation: "Normal cells stop dividing when contacting neighbors (contact inhibition), preventing overgrowth. Cancer cells lose this mechanism and form tumors.",
            unitId: 4
          },
          {
            id: "4.7.5",
            text: "CDK enzymes require cyclin binding to become active. This requirement ensures:",
            options: [
              "CDKs function only during interphase",
              "CDKs are activated only when cyclin levels rise at the appropriate cell cycle stage",
              "CDKs are degraded after each stage",
              "CDKs function independently without growth signals"
            ],
            correctIndex: 1,
            explanation: "Cyclin levels fluctuate cyclically. CDKs are only active when bound to their partner cyclin, ensuring checkpoints are passed only when conditions are correct.",
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
          },
          {
            id: "5.1.3",
            text: "A cell with 2n=8 completes meiosis I. Each daughter cell contains:",
            options: [
              "8 chromosomes (4 pairs of sister chromatids)",
              "4 chromosomes, each consisting of 2 sister chromatids",
              "2 chromosomes",
              "16 unpaired chromatids"
            ],
            correctIndex: 1,
            explanation: "Meiosis I separates homologous chromosomes. Starting with 8 chromosomes (4 pairs), each cell after meiosis I has 4 chromosomes, each still consisting of 2 joined sister chromatids.",
            unitId: 5
          },
          {
            id: "5.1.4",
            text: "Crossing over during prophase I increases genetic diversity by:",
            options: [
              "Increasing chromosome number",
              "Exchanging segments between non-sister chromatids of homologous chromosomes",
              "Randomly sorting chromosomes into gametes",
              "Mutating the DNA sequence of individual genes"
            ],
            correctIndex: 1,
            explanation: "During prophase I, non-sister chromatids of homologous chromosomes exchange segments at chiasmata, reshuffling alleles and producing new genetic combinations.",
            unitId: 5
          },
          {
            id: "5.1.5",
            text: "Why is meiosis necessary for sexually reproducing organisms?",
            options: [
              "It repairs damaged DNA before fertilization",
              "It reduces chromosome number by half so fertilization restores the diploid number",
              "It ensures all gametes receive identical genetic information",
              "It prevents crossing over in somatic cells"
            ],
            correctIndex: 1,
            explanation: "Without meiosis, chromosome number would double each generation upon fertilization. Meiosis produces haploid gametes (n) so fertilization restores the diploid number (2n).",
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
          },
          {
            id: "5.2.3",
            text: "Independent assortment during meiosis I means that:",
            options: [
              "All chromosomes assort into the same cell",
              "The orientation of one homologous pair does not affect the orientation of any other pair",
              "Crossing over cannot occur",
              "Sister chromatids are separated during independent assortment"
            ],
            correctIndex: 1,
            explanation: "Independent assortment (Mendel's Law) states different gene pairs segregate independently during gamete formation, contributing to genetic diversity.",
            unitId: 5
          },
          {
            id: "5.2.4",
            text: "A species with 3 chromosome pairs (n=3). How many different gametes can be produced by independent assortment alone?",
            options: [
              "3",
              "6",
              "8",
              "9"
            ],
            correctIndex: 2,
            explanation: "Number of possible gametes = 2^n. With n=3: 2^3 = 8 different gamete types from independent assortment alone.",
            unitId: 5
          },
          {
            id: "5.2.5",
            text: "A child has 47 chromosomes with extra chromosome 21 (trisomy 21). This most likely arose from:",
            options: [
              "A point mutation in a single gene",
              "Nondisjunction during meiosis where chromosome 21 failed to separate",
              "Crossing over between non-homologous chromosomes",
              "Deletion of a chromosome in early embryo"
            ],
            correctIndex: 1,
            explanation: "Nondisjunction produces gametes with an extra chromosome (n+1). If fertilized by a normal gamete, the result is trisomy 21 (Down syndrome).",
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
            text: "An AaBb plant (A and B on different chromosomes) is self-fertilized. What fraction of offspring will be aabb?",
            options: [
              "1/4",
              "1/8",
              "1/16",
              "3/16"
            ],
            correctIndex: 2,
            explanation: "P(aa) = 1/4; P(bb) = 1/4. Genes assort independently: P(aabb) = 1/4 x 1/4 = 1/16.",
            unitId: 5
          },
          {
            id: "5.3.4",
            text: "A tall pea plant (Tt) crossed with a short plant (tt). The expected phenotypic ratio is:",
            options: [
              "3 tall : 1 short",
              "1 tall : 1 short",
              "All tall",
              "All short"
            ],
            correctIndex: 1,
            explanation: "Tt x tt produces Tt (tall) and tt (short) in 1:1 ratio. This is a testcross result.",
            unitId: 5
          },
          {
            id: "5.3.5",
            text: "A man with blood type A (IAi) and a woman with blood type B (IBi) have children. Which blood types are possible?",
            options: [
              "A and B only",
              "A, B, AB, and O",
              "AB only",
              "B and O only"
            ],
            correctIndex: 1,
            explanation: "Cross IAi x IBi produces: IAIB (AB), IAi (A), IBi (B), and ii (O). All four blood types are possible.",
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
          },
          {
            id: "5.4.3",
            text: "A red (CRCR) crossed with white (CWCW) produces offspring with red AND white patches. What genotype is this?",
            options: [
              "CRCR",
              "CWCW",
              "CRCW",
              "CRcw"
            ],
            correctIndex: 2,
            explanation: "In codominance, both alleles are expressed. The CRCW offspring display both red and white patches simultaneously.",
            unitId: 5
          },
          {
            id: "5.4.4",
            text: "A carrier woman (X^N X^n) has children with a normal-vision man (X^N Y). Probability a son is color blind:",
            options: [
              "0%",
              "25%",
              "50%",
              "100%"
            ],
            correctIndex: 2,
            explanation: "Sons receive their X from their mother. She is X^N X^n: 50% of her X chromosomes carry X^n. Sons receiving X^n will be color blind (X^n Y).",
            unitId: 5
          },
          {
            id: "5.4.5",
            text: "Which describes a polygenic trait?",
            options: [
              "Controlled by a single gene with two alleles",
              "Controlled by multiple genes, each contributing to a continuous range of phenotypes",
              "Where one allele is completely dominant",
              "Determined exclusively by the environment"
            ],
            correctIndex: 1,
            explanation: "Polygenic traits (height, skin color) are controlled by many genes with additive effects, producing a continuous distribution of phenotypes.",
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
          },
          {
            id: "5.5.3",
            text: "A gene for height is expressed differently in nutrient-rich vs. nutrient-poor soil. This demonstrates that:",
            options: [
              "The genotype is determined by the environment",
              "The environment can influence how genotype is expressed, producing different phenotypes",
              "Height genes are only expressed in favorable conditions",
              "Natural selection acts on genotype, not phenotype"
            ],
            correctIndex: 1,
            explanation: "Phenotype = genotype x environment. Even with the same genetic potential, environmental conditions can dramatically alter the expressed phenotype.",
            unitId: 5
          },
          {
            id: "5.5.4",
            text: "Identical twins with identical genotypes raised in different environments show different health outcomes. This is best explained by:",
            options: [
              "Different mutation rates in each twin",
              "Epigenetic modifications and environmental influences on gene expression",
              "Random DNA replication errors after twin separation",
              "Immune system differences from birth"
            ],
            correctIndex: 1,
            explanation: "Epigenetics: heritable changes in gene expression without DNA sequence changes (e.g., DNA methylation, histone modification) from environmental experiences.",
            unitId: 5
          },
          {
            id: "5.5.5",
            text: "A Himalayan rabbit expresses dark fur only on its cool extremities due to a temperature-sensitive pigment enzyme. This is an example of:",
            options: [
              "Incomplete dominance between pigment alleles",
              "X-linked inheritance of a recessive pigment gene",
              "Environmental (temperature) regulation of gene expression",
              "Codominance between dark and light alleles"
            ],
            correctIndex: 2,
            explanation: "The Himalayan coat pattern shows how temperature influences enzyme activity and thereby gene expression. The phenotype depends on environmental temperature.",
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
          },
          {
            id: "5.6.3",
            text: "Turner syndrome (45, X) most likely arose from:",
            options: [
              "A point mutation in the X chromosome",
              "Nondisjunction of sex chromosomes during meiosis",
              "Recombination between X and Y chromosomes",
              "Deletion of an autosome"
            ],
            correctIndex: 1,
            explanation: "Nondisjunction can produce gametes lacking a sex chromosome (O). An egg with no sex chromosome fertilized by X sperm = 45,X (Turner syndrome).",
            unitId: 5
          },
          {
            id: "5.6.4",
            text: "A female with 47,XXX syndrome has how many Barr bodies in somatic cells?",
            options: [
              "0",
              "1",
              "2",
              "3"
            ],
            correctIndex: 2,
            explanation: "Barr bodies = (number of X chromosomes) - 1. A 47,XXX female has 3 X chromosomes; 2 are inactivated as Barr bodies.",
            unitId: 5
          },
          {
            id: "5.6.5",
            text: "The Philadelphia chromosome in CML results from a segment of chromosome 9 transferred to chromosome 22. This is:",
            options: [
              "A point mutation causing a frameshift",
              "A chromosomal translocation creating an oncogenic fusion gene (BCR-ABL1)",
              "Nondisjunction resulting in gain of chromosomes",
              "A deletion removing a tumor suppressor gene"
            ],
            correctIndex: 1,
            explanation: "The t(9;22) translocation fuses BCR (chr 22) with ABL1 (chr 9), creating the BCR-ABL1 fusion oncogene that drives uncontrolled proliferation in CML.",
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
          },
          {
            id: "6.1.3",
            text: "The central dogma of molecular biology states information flows as:",
            options: [
              "Protein -> RNA -> DNA",
              "DNA -> RNA -> Protein",
              "RNA -> Protein -> DNA",
              "Protein -> DNA -> RNA"
            ],
            correctIndex: 1,
            explanation: "Central dogma: DNA is transcribed into RNA (transcription), which is translated into protein (translation). Information flows from nucleic acids to proteins.",
            unitId: 6
          },
          {
            id: "6.1.4",
            text: "Which correctly describes the antiparallel nature of double-stranded DNA?",
            options: [
              "Both strands have identical sequences",
              "One strand runs 5'->3' while the complementary strand runs 3'->5'",
              "Both strands run in the same direction",
              "The strands wrap in parallel"
            ],
            correctIndex: 1,
            explanation: "In double-stranded DNA, the two strands are antiparallel: one runs 5'->3' while the complementary strand runs 3'->5'.",
            unitId: 6
          },
          {
            id: "6.1.5",
            text: "Which correctly identifies all three structural differences of RNA from DNA?",
            options: [
              "RNA is double-stranded; RNA uses uracil; RNA has deoxyribose",
              "RNA is single-stranded; RNA uses uracil instead of thymine; RNA contains ribose",
              "RNA is circular; RNA uses thymine; RNA has no phosphate backbone",
              "RNA contains adenine; RNA is always shorter; RNA has ribose"
            ],
            correctIndex: 1,
            explanation: "RNA differs from DNA: typically single-stranded, contains ribose (not deoxyribose), and uses uracil (U) instead of thymine (T).",
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
          },
          {
            id: "6.2.3",
            text: "DNA replication is semi-conservative. This means:",
            options: [
              "Half the DNA strands are destroyed and rebuilt",
              "Each new double helix has one original strand and one newly synthesized strand",
              "Both strands of original DNA are fully replicated as new strands",
              "Each replication produces two completely new double helices"
            ],
            correctIndex: 1,
            explanation: "Semi-conservative replication: each parental strand serves as template. Result: two daughter double helices, each with one parental and one new strand.",
            unitId: 6
          },
          {
            id: "6.2.4",
            text: "Okazaki fragments are necessary because:",
            options: [
              "DNA polymerase can only add nucleotides to a free 3'-OH end, requiring lagging strand synthesis in short fragments",
              "RNA primers need to be replaced with short DNA sequences",
              "Replication can only proceed linearly",
              "Okazaki fragments prevent replication errors"
            ],
            correctIndex: 0,
            explanation: "DNA polymerase synthesizes only 5'->3'. On the lagging strand template (3'->5'), synthesis must proceed away from the fork in short discontinuous fragments.",
            unitId: 6
          },
          {
            id: "6.2.5",
            text: "DNA is labeled with 15N. After one replication in 14N medium, what will the molecules look like?",
            options: [
              "All heavy (15N/15N)",
              "All hybrid (15N/14N)",
              "Half heavy, half light",
              "All light (14N/14N)"
            ],
            correctIndex: 1,
            explanation: "Meselson-Stahl result: after one replication in 14N, each new double helix has one 15N parental strand and one new 14N strand - all molecules are hybrid.",
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
          },
          {
            id: "6.3.3",
            text: "Which is NOT a eukaryotic pre-mRNA processing step?",
            options: [
              "Addition of 5' methyl-guanosine cap",
              "Addition of poly-A tail at 3' end",
              "Splicing out introns by the spliceosome",
              "Addition of a start codon at the 5' end"
            ],
            correctIndex: 3,
            explanation: "Pre-mRNA processing includes 5' capping, 3' poly-A tail addition, and intron splicing. The start codon (AUG) is already part of the mRNA sequence.",
            unitId: 6
          },
          {
            id: "6.3.4",
            text: "After splicing removes introns and joins exons, the result is:",
            options: [
              "The leader sequence of the ribosome",
              "Mature mRNA ready for translation",
              "A complementary DNA (cDNA) strand",
              "Ribosomal RNA (rRNA)"
            ],
            correctIndex: 1,
            explanation: "After splicing, the joined exons form a mature mRNA that is exported to the cytoplasm for translation.",
            unitId: 6
          },
          {
            id: "6.3.5",
            text: "Which RNA polymerase transcribes protein-coding genes in eukaryotes?",
            options: [
              "RNA polymerase I",
              "RNA polymerase II",
              "RNA polymerase III",
              "DNA polymerase I"
            ],
            correctIndex: 1,
            explanation: "In eukaryotes, RNA polymerase II transcribes protein-coding genes (mRNA precursors). RNA pol I makes rRNA; RNA pol III makes tRNA and small RNAs.",
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
            text: "The genetic code is degenerate (redundant). This means:",
            options: [
              "The same amino acid can be encoded by multiple different codons",
              "The same codon can encode multiple amino acids",
              "The genetic code varies between species",
              "Each codon encodes exactly one amino acid with no redundancy"
            ],
            correctIndex: 0,
            explanation: "Multiple codons can specify the same amino acid (e.g., six codons for leucine). With 64 codons and only 20 amino acids, redundancy is necessary.",
            unitId: 6
          },
          {
            id: "6.4.4",
            text: "During elongation, a new aminoacyl-tRNA enters the ribosome's:",
            options: [
              "E site",
              "P site",
              "A site",
              "Either P or A site"
            ],
            correctIndex: 2,
            explanation: "A new aminoacyl-tRNA (carrying the next amino acid) enters the A (aminoacyl) site. P site holds the growing chain; E site is where deacylated tRNA exits.",
            unitId: 6
          },
          {
            id: "6.4.5",
            text: "A missense mutation changes codon AAA (Lys) to AGA (Arg). The likely effect on protein function is:",
            options: [
              "No effect since only DNA changed",
              "Possible function change depending on the amino acid role in the protein",
              "Complete loss of function in all cases",
              "Destruction of mRNA by nonsense-mediated decay"
            ],
            correctIndex: 1,
            explanation: "Missense mutations change one amino acid. Effect depends on location and chemical properties. Active site change may destroy function; peripheral change may have little effect.",
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
          },
          {
            id: "6.5.3",
            text: "In E. coli lac operon, transcription is repressed without lactose because:",
            options: [
              "RNA polymerase is absent",
              "The lac repressor binds the operator, blocking RNA polymerase from transcribing structural genes",
              "The promoter is destroyed",
              "Lactose acts as an activator"
            ],
            correctIndex: 1,
            explanation: "Without lactose, the lac repressor (encoded by lacI) binds to the operator between the promoter and structural genes, physically blocking RNA polymerase.",
            unitId: 6
          },
          {
            id: "6.5.4",
            text: "DNA methylation of CpG islands near promoters typically:",
            options: [
              "Activates gene expression by recruiting transcription factors",
              "Silences gene expression by preventing transcription machinery from binding",
              "Changes the coding sequence of the gene",
              "Increases mRNA splicing rate"
            ],
            correctIndex: 1,
            explanation: "CpG methylation is associated with transcriptional silencing. It recruits proteins that compact chromatin into heterochromatin, repressing transcription.",
            unitId: 6
          },
          {
            id: "6.5.5",
            text: "Which describes post-translational regulation of gene expression?",
            options: [
              "Regulation of mRNA transcription rates by transcription factors",
              "Regulation of mRNA stability by microRNAs",
              "Protein modification after translation, such as phosphorylation or ubiquitination",
              "Alternative splicing of pre-mRNA"
            ],
            correctIndex: 2,
            explanation: "Post-translational regulation occurs after translation. Phosphorylation (activates/deactivates proteins) and ubiquitination (targets for proteasome degradation) control protein activity.",
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
          },
          {
            id: "6.6.3",
            text: "All somatic cells contain the same DNA, yet liver cells differ from neurons. This is best explained by:",
            options: [
              "Different cell types have different DNA sequences from somatic mutations",
              "Different cell types express different subsets of genes via differential gene expression",
              "Liver cells replicate DNA more frequently",
              "Neurons lack the genes for liver-specific proteins"
            ],
            correctIndex: 1,
            explanation: "Cell specialization is driven by differential gene expression - specific combinations of transcription factors and epigenetic marks activate different gene sets in different cell types.",
            unitId: 6
          },
          {
            id: "6.6.4",
            text: "Transcription factors in cell differentiation function by:",
            options: [
              "Directly converting one cell type to another by rewriting DNA",
              "Binding regulatory regions to activate or repress transcription of specific genes in specific cell types",
              "Modifying translation efficiency of all mRNAs equally",
              "Signaling neighboring cells to differentiate"
            ],
            correctIndex: 1,
            explanation: "Transcription factors bind specific DNA sequences in gene promoters/enhancers to regulate transcription. Their combination in a cell determines its gene expression profile and identity.",
            unitId: 6
          },
          {
            id: "6.6.5",
            text: "A mutation inactivating a Hox gene during embryonic development could result in:",
            options: [
              "Increased DNA replication rate in all cells",
              "Development of the wrong body structure in a particular region (homeotic transformation)",
              "Loss of all gene expression in the affected segment",
              "Increased apoptosis throughout the organism"
            ],
            correctIndex: 1,
            explanation: "Hox genes specify segment identity during development. Mutations cause homeotic transformations (e.g., legs growing where antennae should be in Drosophila).",
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
          },
          {
            id: "6.7.3",
            text: "A frameshift mutation results from:",
            options: [
              "Substituting one base pair for another",
              "Inserting or deleting base pairs not divisible by three, altering the reading frame",
              "Duplicating a large chromosomal segment",
              "Replacing a codon with a stop codon"
            ],
            correctIndex: 1,
            explanation: "The genetic code is read in triplets. Insertion or deletion of bases not divisible by 3 shifts ALL downstream codons, usually producing a nonfunctional protein.",
            unitId: 6
          },
          {
            id: "6.7.4",
            text: "Which mutation is LEAST likely to affect protein function?",
            options: [
              "Missense mutation changing an amino acid in the active site",
              "Nonsense mutation introducing a premature stop codon",
              "Silent mutation changing a codon to a synonymous one coding for the same amino acid",
              "Frameshift mutation near the start of the gene"
            ],
            correctIndex: 2,
            explanation: "Silent mutations change the codon but not the amino acid sequence due to genetic code redundancy. They typically have no effect on protein function.",
            unitId: 6
          },
          {
            id: "6.7.5",
            text: "UV radiation causes thymine dimers. If unrepaired during replication:",
            options: [
              "Thymine is replaced with uracil",
              "Errors are introduced or replication stalls, potentially causing mutations or cell death",
              "DNA is immediately destroyed by restriction enzymes",
              "Extra chromosomes are produced"
            ],
            correctIndex: 1,
            explanation: "Thymine dimers distort the DNA helix, blocking DNA polymerase. Unrepaired errors can lead to mutations in genes like p53, contributing to skin cancer.",
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
          },
          {
            id: "6.8.3",
            text: "CRISPR-Cas9 gene editing directs Cas9 to specific sequences using:",
            options: [
              "A restriction enzyme cutting at palindromic sequences",
              "A guide RNA (gRNA) complementary to the target DNA sequence",
              "A primer sequence similar to those used in PCR",
              "A protein-DNA binding domain recognizing promoters"
            ],
            correctIndex: 1,
            explanation: "The CRISPR-Cas9 system uses a guide RNA (gRNA) complementary to the target DNA sequence. The gRNA directs Cas9 nuclease to cut at that specific location.",
            unitId: 6
          },
          {
            id: "6.8.4",
            text: "Each PCR cycle begins with which condition?",
            options: [
              "High temperature (94-98 degrees C) to denature double-stranded DNA into single strands",
              "Low temperature (4 degrees C) to preserve DNA",
              "Addition of restriction enzymes",
              "The presence of reverse transcriptase"
            ],
            correctIndex: 0,
            explanation: "PCR cycles: denaturation (~95 degrees C separates strands), annealing (primers bind template), and extension (DNA polymerase synthesizes new strands).",
            unitId: 6
          },
          {
            id: "6.8.5",
            text: "Gel electrophoresis separates DNA fragments by:",
            options: [
              "Their specific base pair sequence",
              "Their size (number of base pairs) as they migrate through gel in an electric field",
              "Their charge (different bases have different charges)",
              "Their origin (prokaryotic vs eukaryotic)"
            ],
            correctIndex: 1,
            explanation: "DNA (negatively charged from phosphate groups) migrates toward the positive pole. Smaller fragments move faster through the gel, separating by size.",
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
          },
          {
            id: "7.1.3",
            text: "Which is a prerequisite for natural selection?",
            options: [
              "All individuals have identical phenotypes",
              "Heritable phenotypic variation exists in the population",
              "The environment must remain constant",
              "Mutations occur at a fixed rate"
            ],
            correctIndex: 1,
            explanation: "Natural selection requires: heritable variation in phenotype, some variants have greater reproductive success, and those variants pass traits to offspring.",
            unitId: 7
          },
          {
            id: "7.1.4",
            text: "Over generations, deer mice in a sandy desert with lighter coat color survive and reproduce better. This is:",
            options: [
              "Genetic drift since coat color is random",
              "Natural selection favoring light coat as an adaptive phenotype",
              "Artificial selection by human breeders",
              "Neutral evolution with no fitness consequences"
            ],
            correctIndex: 1,
            explanation: "Natural selection favors phenotypes improving survival and reproduction. Light coat provides camouflage against sandy soil, reducing predation - directional selection.",
            unitId: 7
          },
          {
            id: "7.1.5",
            text: "Which of the following would NOT cause evolution (change in allele frequency)?",
            options: [
              "Natural selection",
              "Mutation",
              "Genetic drift",
              "An individual adapting its traits through use and disuse during its lifetime"
            ],
            correctIndex: 3,
            explanation: "Evolution acts at the population level, not the individual. An organism cannot evolve - only its population can. Lamarck's use-and-disuse is not a mechanism of evolution.",
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
          },
          {
            id: "7.2.3",
            text: "Which type of natural selection increases frequency of EXTREME phenotypes while decreasing intermediate ones?",
            options: [
              "Stabilizing selection",
              "Directional selection",
              "Disruptive (diversifying) selection",
              "Sexual selection"
            ],
            correctIndex: 2,
            explanation: "Disruptive selection favors both extremes against the intermediate phenotype. This can lead to bimodal distributions and potentially speciation.",
            unitId: 7
          },
          {
            id: "7.2.4",
            text: "Stabilizing selection acts to:",
            options: [
              "Increase the most extreme phenotype's frequency",
              "Reduce phenotypic variance by favoring intermediate phenotypes over extremes",
              "Produce two distinct phenotypic peaks",
              "Favor sexual selection regardless of survival value"
            ],
            correctIndex: 1,
            explanation: "Stabilizing selection favors the intermediate phenotype and acts against extremes. Classic example: human birth weight (very small and very large babies have higher mortality).",
            unitId: 7
          },
          {
            id: "7.2.5",
            text: "Antibiotic resistance in bacteria develops rapidly due to natural selection. Which BEST explains this?",
            options: [
              "Bacteria mutate their DNA in response to encountering antibiotics",
              "Bacteria with pre-existing resistance mutations survive and reproduce, increasing resistance allele frequency",
              "All bacteria become resistant through phenotypic plasticity",
              "Antibiotics induce new resistance genes de novo"
            ],
            correctIndex: 1,
            explanation: "Natural selection acts on pre-existing variation. Rare bacteria with resistance mutations survive antibiotic exposure; susceptible ones die. Resistant bacteria reproduce rapidly.",
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
          },
          {
            id: "7.3.3",
            text: "Artificial selection differs from natural selection in that:",
            options: [
              "Artificial selection only slows evolution",
              "Humans (not environmental pressures) choose which individuals reproduce based on desired traits",
              "Artificial selection does not involve heritable variation",
              "Artificial selection results in random allele frequency changes"
            ],
            correctIndex: 1,
            explanation: "In artificial selection, humans act as the selective agent, choosing individuals with desired traits to breed. Natural selection uses environmental pressures.",
            unitId: 7
          },
          {
            id: "7.3.4",
            text: "Dog breeds show extreme phenotypic diversity despite being the same species. This resulted from:",
            options: [
              "Random genetic drift over thousands of years",
              "Thousands of years of artificial selection by humans for specific traits",
              "Repeated hybridization with wolves",
              "Natural selection acting on wolf populations"
            ],
            correctIndex: 1,
            explanation: "Dog breeds were developed through thousands of years of selective breeding, drastically altering allele frequencies in domesticated dog populations.",
            unitId: 7
          },
          {
            id: "7.3.5",
            text: "Artificial selection in crops can have unintended negative consequences because:",
            options: [
              "Crops evolve to require less human care",
              "Selecting for yield may inadvertently eliminate genetic diversity and natural pest resistance",
              "Artificial selection creates new genetic material de novo",
              "Crop plants cannot undergo heritable changes"
            ],
            correctIndex: 1,
            explanation: "Focusing on a single desired trait can reduce overall genetic diversity and eliminate other useful alleles (like disease resistance), making crops vulnerable.",
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
          },
          {
            id: "7.4.3",
            text: "Genetic drift has a MORE significant effect on small populations than large ones because:",
            options: [
              "Small populations have more mutations per generation",
              "Small populations show greater random fluctuations in allele frequency due to chance",
              "Natural selection is absent in small populations",
              "Large populations have lower reproductive rates"
            ],
            correctIndex: 1,
            explanation: "Genetic drift is random change in allele frequencies. In small populations, chance events have a proportionally larger effect. In large populations, random fluctuations average out.",
            unitId: 7
          },
          {
            id: "7.4.4",
            text: "The founder effect occurs when:",
            options: [
              "A large population suddenly lacks food",
              "A small subset of individuals establishes a new population, limiting genetic diversity",
              "A dominant allele reaches fixation due to natural selection",
              "A population decreases catastrophically from a natural disaster"
            ],
            correctIndex: 1,
            explanation: "Founder effect: a new population established by few founders carries only a subset of original genetic variation, making certain alleles very common or absent.",
            unitId: 7
          },
          {
            id: "7.4.5",
            text: "10 individuals survive a random event killing 7 of 10 in a population, and 3 survivors all carry recessive allele (a). After reproduction, this allele may become fixed. This is:",
            options: [
              "Natural selection favoring the recessive phenotype",
              "The bottleneck effect - dramatic population size reduction leading to reduced genetic diversity",
              "Sexual selection against heterozygotes",
              "Directional selection toward the recessive allele"
            ],
            correctIndex: 1,
            explanation: "Bottleneck effect: genetic drift from drastic population reduction. Survivors may not represent original genetic diversity; alleles may be lost or fixed by chance, not selection.",
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
          },
          {
            id: "7.5.3",
            text: "Which condition would VIOLATE Hardy-Weinberg equilibrium?",
            options: [
              "Random mating in the population",
              "Large population size",
              "No net migration",
              "Natural selection acting on a phenotype"
            ],
            correctIndex: 3,
            explanation: "H-W equilibrium (no evolution) requires: no natural selection, no mutations, no gene flow, random mating, and large population size. Natural selection violates this.",
            unitId: 7
          },
          {
            id: "7.5.4",
            text: "In a H-W population, if frequency of dominant allele (A) is 0.6, frequency of recessive allele (a) is:",
            options: [
              "0.2",
              "0.4",
              "0.6",
              "0.36"
            ],
            correctIndex: 1,
            explanation: "In H-W equilibrium, p + q = 1. If p = 0.6, then q = 1 - 0.6 = 0.4.",
            unitId: 7
          },
          {
            id: "7.5.5",
            text: "In a H-W population with p=0.7 and q=0.3, the expected frequency of heterozygotes (Aa) is:",
            options: [
              "0.09",
              "0.21",
              "0.42",
              "0.49"
            ],
            correctIndex: 2,
            explanation: "Frequency of heterozygotes = 2pq = 2 x 0.7 x 0.3 = 0.42.",
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
          },
          {
            id: "7.6.3",
            text: "Homologous structures (like forelimbs of whales, bats, and humans) suggest:",
            options: [
              "Independent evolution to solve the same problems (convergent evolution)",
              "These organisms share a common ancestor who had the basic limb structure",
              "These organisms have identical DNA sequences",
              "These organisms live in the same ecological niche"
            ],
            correctIndex: 1,
            explanation: "Homologous structures share anatomy from a common ancestor (divergent evolution). They may have different functions but share the same underlying bone arrangement.",
            unitId: 7
          },
          {
            id: "7.6.4",
            text: "Vestigial structures like the human coccyx or whale pelvis provide evidence for evolution because they:",
            options: [
              "Serve no function, showing poor design",
              "Are remnants of functional structures in ancestral organisms, showing evolutionary history",
              "Will disappear in the next generation due to disuse",
              "Are analogous structures shared with living organisms"
            ],
            correctIndex: 1,
            explanation: "Vestigial structures are evolutionary remnants. The whale pelvis is a remnant of the ancestral land-dwelling limb structure, evidence that whales evolved from terrestrial ancestors.",
            unitId: 7
          },
          {
            id: "7.6.5",
            text: "Humans and chimpanzees share ~98% of their DNA sequence. The MOST direct conclusion is:",
            options: [
              "Humans and chimpanzees are the same species",
              "Humans and chimpanzees diverged from a recent common ancestor relatively recently",
              "DNA similarities are coincidental",
              "They share the same ecological niche"
            ],
            correctIndex: 1,
            explanation: "DNA sequence similarity is proportional to evolutionary relatedness. ~98% similarity indicates a recent common ancestor compared to other mammals.",
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
          },
          {
            id: "7.7.3",
            text: "Cladistics groups organisms based on:",
            options: [
              "Overall phenotypic similarity including convergent features",
              "Shared derived characteristics (synapomorphies) indicating common ancestry",
              "Ecological roles and habitat preferences",
              "Geographical proximity and distribution"
            ],
            correctIndex: 1,
            explanation: "Cladistics groups by shared derived characters (synapomorphies) - features that evolved in a common ancestor and are shared by all its descendants, reflecting phylogeny.",
            unitId: 7
          },
          {
            id: "7.7.4",
            text: "On a phylogenetic tree, an outgroup is a taxon that:",
            options: [
              "Is most recently derived in the clade",
              "Diverged BEFORE the lineage under investigation, providing reference for ancestral character states",
              "Has the most derived traits",
              "Is placed at the longest branch tip"
            ],
            correctIndex: 1,
            explanation: "An outgroup diverged before the ingroup. It is used to determine which character states are ancestral (plesiomorphic) vs. derived (apomorphic) within the ingroup.",
            unitId: 7
          },
          {
            id: "7.7.5",
            text: "The universal genetic code shared by all life suggests:",
            options: [
              "The code is the most thermodynamically stable configuration",
              "All life on Earth shares a common ancestor from whom the genetic code was inherited",
              "Different species evolved identical codes independently",
              "The code is too simple to have evolved differently"
            ],
            correctIndex: 1,
            explanation: "The universality of the genetic code is powerful evidence for common descent. The extreme complexity makes independent evolution of an identical system astronomically unlikely.",
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
          },
          {
            id: "7.8.3",
            text: "Allopatric speciation occurs when:",
            options: [
              "Two populations in the same area evolve reproductive isolation",
              "A geographic barrier separates a population, leading to independent evolution and eventual reproductive isolation",
              "One phenotype becomes more common over time",
              "One species splits into two without geographic separation"
            ],
            correctIndex: 1,
            explanation: "Allopatric speciation requires geographic isolation. A physical barrier separates a population; isolated subpopulations accumulate genetic differences, eventually becoming reproductively isolated.",
            unitId: 7
          },
          {
            id: "7.8.4",
            text: "The biological species concept defines a species as:",
            options: [
              "A group defined by morphological similarity",
              "A group of actually or potentially interbreeding natural populations reproductively isolated from other groups",
              "A lineage with the same ecological role",
              "A lineage sharing a common ancestor"
            ],
            correctIndex: 1,
            explanation: "Biological species concept (Mayr): members of a species interbreed with each other but not with other species to produce fertile offspring.",
            unitId: 7
          },
          {
            id: "7.8.5",
            text: "Coevolution between predator and prey (both evolving faster running speed) is an example of:",
            options: [
              "Convergent evolution",
              "Parallel evolution",
              "Reciprocal evolutionary arms race",
              "Allopatric speciation"
            ],
            correctIndex: 2,
            explanation: "The predator-prey arms race is classic coevolution: as prey evolve better defenses (speed, camouflage), predators evolve better hunting traits, driving reciprocal adaptation.",
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
          },
          {
            id: "7.9.3",
            text: "A cladogram groups organisms based on:",
            options: [
              "Overall phenotypic similarity",
              "Shared derived characters (synapomorphies) indicating common ancestry",
              "Ecological roles and habitats",
              "Geographic distribution"
            ],
            correctIndex: 1,
            explanation: "Cladistics groups by shared derived characters that evolved in a common ancestor and are shared by all descendants, reflecting evolutionary relationships.",
            unitId: 7
          },
          {
            id: "7.9.4",
            text: "On a phylogenetic tree, the node (branching point) represents:",
            options: [
              "An extant (living) species",
              "A hypothetical common ancestor of all lineages diverging from that point",
              "A geographic barrier causing speciation",
              "A mass extinction event"
            ],
            correctIndex: 1,
            explanation: "Each node (branching point) on a phylogenetic tree represents a hypothetical common ancestor from which two or more lineages diverged.",
            unitId: 7
          },
          {
            id: "7.9.5",
            text: "Parsimony in phylogenetic analysis means selecting the tree that:",
            options: [
              "Has the most branches and highest species diversity",
              "Requires the fewest evolutionary changes to explain the observed data",
              "Includes the most molecular data",
              "Is most consistent with fossil records"
            ],
            correctIndex: 1,
            explanation: "The principle of parsimony selects the phylogenetic tree requiring the fewest evolutionary changes (substitutions, character state changes) to explain the observed data.",
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
          },
          {
            id: "7.10.3",
            text: "Sympatric speciation occurs when:",
            options: [
              "A geographic barrier separates two populations",
              "Two populations in the SAME geographic area evolve reproductive isolation",
              "A small founder group establishes a new population",
              "A catastrophic event reduces population size"
            ],
            correctIndex: 1,
            explanation: "Sympatric speciation: new species form within the same geographic area without physical separation. Polyploidy in plants is a common mechanism.",
            unitId: 7
          },
          {
            id: "7.10.4",
            text: "Pre-zygotic reproductive isolating mechanisms prevent:",
            options: [
              "Hybrid offspring from developing into fertile adults",
              "Members of different species from mating or the formation of a zygote",
              "Allele frequency changes in either population",
              "Gene flow between isolated but fertile populations"
            ],
            correctIndex: 1,
            explanation: "Pre-zygotic mechanisms prevent mating or fertilization (temporal, behavioral, habitat, mechanical, gametic isolation). Post-zygotic mechanisms act after a zygote forms.",
            unitId: 7
          },
          {
            id: "7.10.5",
            text: "Polyploidy (having multiple sets of chromosomes) most often leads to immediate speciation in:",
            options: [
              "Animals (most common in vertebrates)",
              "Plants (where polyploids can self-fertilize and establish new populations)",
              "Fungi (asexual reproducers)",
              "Bacteria (through binary fission)"
            ],
            correctIndex: 1,
            explanation: "Polyploid plants can self-fertilize, immediately establishing a reproductively isolated population. This is a common mechanism of sympatric speciation in flowering plants.",
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
          },
          {
            id: "7.11.3",
            text: "Mass extinctions are distinguished from background extinctions by:",
            options: [
              "Occurring at the same rate as background extinctions",
              "Eliminating more than 75% of species in a geologically short time period",
              "Affecting only marine organisms",
              "Being caused exclusively by asteroid impacts"
            ],
            correctIndex: 1,
            explanation: "Mass extinctions eliminate >75% of species in a short geological time. Five major mass extinctions are recognized in Earth's history, with various causes.",
            unitId: 7
          },
          {
            id: "7.11.4",
            text: "Following a mass extinction, surviving lineages often diversify rapidly into many new ecological niches. This is called:",
            options: [
              "Convergent evolution",
              "Coevolution",
              "Adaptive radiation",
              "Stabilizing selection"
            ],
            correctIndex: 2,
            explanation: "Adaptive radiation: following a mass extinction, surviving species rapidly diversify into many ecological niches vacated by extinct species, producing many new species.",
            unitId: 7
          },
          {
            id: "7.11.5",
            text: "Which of the following correctly describes a consequence of species extinction?",
            options: [
              "Keystone species extinction has minimal ecosystem impact",
              "Extinction of one species can trigger cascading extinctions through trophic levels",
              "All extinctions are reversed by evolution on short timescales",
              "Extinction only affects local populations, not global biodiversity"
            ],
            correctIndex: 1,
            explanation: "Extinction of a keystone species can trigger trophic cascades. Eliminating one critical species can cause collapse of dependent species and food webs.",
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
          },
          {
            id: "7.12.3",
            text: "A population with HIGH genetic diversity is more resilient to environmental change because:",
            options: [
              "High diversity means more individuals reproduce per generation",
              "Some individuals are likely to have alleles conferring resistance to new environmental challenges",
              "Genetic diversity prevents mutations from occurring",
              "High diversity reduces competition between individuals"
            ],
            correctIndex: 1,
            explanation: "Genetic diversity ensures that when the environment changes, some individuals are likely to possess alleles that confer survival advantage, preventing population extinction.",
            unitId: 7
          },
          {
            id: "7.12.4",
            text: "Inbreeding in small populations reduces genetic diversity by:",
            options: [
              "Increasing the frequency of heterozygous individuals",
              "Increasing the frequency of homozygous individuals, often exposing deleterious recessive alleles",
              "Increasing mutation rate",
              "Preventing genetic drift"
            ],
            correctIndex: 1,
            explanation: "Inbreeding (mating between relatives) increases homozygosity. Deleterious recessive alleles that were hidden in heterozygotes become expressed in homozygotes, reducing fitness.",
            unitId: 7
          },
          {
            id: "7.12.5",
            text: "Which of the following human activities MOST directly reduces genetic variation in crop plants?",
            options: [
              "Crop rotation between different plant species",
              "Monoculture farming and selective breeding for uniform traits",
              "Application of pesticides",
              "Irrigation of farmland"
            ],
            correctIndex: 1,
            explanation: "Monoculture farming and artificial selection for uniform traits reduces genetic diversity, making crops vulnerable to new diseases or pests because all individuals have the same genotype.",
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
          },
          {
            id: "7.13.3",
            text: "The RNA World hypothesis proposes that early life used RNA rather than DNA because:",
            options: [
              "RNA is more stable than DNA under primitive Earth conditions",
              "RNA can both store genetic information AND catalyze chemical reactions (ribozymes)",
              "RNA can self-replicate without any enzymes",
              "RNA is less prone to mutation than DNA"
            ],
            correctIndex: 1,
            explanation: "RNA is a plausible early molecule because it can store genetic information (like DNA) and catalyze reactions (ribozymes). This dual role makes it a candidate for the first self-replicating molecule.",
            unitId: 7
          },
          {
            id: "7.13.4",
            text: "Stanley Miller and Harold Urey's experiment (1953) demonstrated that:",
            options: [
              "Living cells could spontaneously generate from nonliving matter",
              "Organic molecules (amino acids) can form abiotically from inorganic gases under early Earth conditions",
              "DNA was the first genetic molecule on Earth",
              "Proteins evolved before nucleic acids"
            ],
            correctIndex: 1,
            explanation: "The Miller-Urey experiment simulated early Earth's atmosphere (CH4, NH3, H2O, H2) with electrical sparks and produced amino acids - showing organic molecules can arise abiotically.",
            unitId: 7
          },
          {
            id: "7.13.5",
            text: "The first cellular membranes likely formed from:",
            options: [
              "Cellulose from early plant cells",
              "Protein complexes that spontaneously aggregated into vesicles",
              "Phospholipids and fatty acids that spontaneously form bilayers and vesicles in water",
              "DNA double helices that folded into spherical structures"
            ],
            correctIndex: 2,
            explanation: "Fatty acids and phospholipids spontaneously self-assemble into lipid bilayers and vesicles in water (protocells). This could have created the first compartmentalized chemical systems.",
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
          },
          {
            id: "8.1.3",
            text: "Behavioral responses (migration) and physiological responses (thicker fur in winter) both serve to:",
            options: [
              "Permanently change the organism's genotype",
              "Maintain homeostasis and increase survival fitness in changing conditions",
              "Reduce genetic diversity",
              "Increase competition between individuals"
            ],
            correctIndex: 1,
            explanation: "Both behavioral and physiological responses are adaptive strategies that help organisms survive and maintain homeostasis, ultimately increasing fitness.",
            unitId: 8
          },
          {
            id: "8.1.4",
            text: "A plant closing stomata during the hottest part of the day is responding to:",
            options: [
              "Low CO2 triggering stomatal closure",
              "High temperature and potential water loss, conserving water by reducing transpiration",
              "Increased oxygen levels inhibiting photosynthesis",
              "Lack of sunlight due to cloud cover"
            ],
            correctIndex: 1,
            explanation: "Plants close stomata in response to drought stress and high temperatures. Guard cells lose turgor pressure and the stomatal pore closes to reduce transpiration.",
            unitId: 8
          },
          {
            id: "8.1.5",
            text: "A bacterium swimming toward a glucose gradient is displaying:",
            options: [
              "Kinesis (undirected change in speed)",
              "Positive chemotaxis toward an attractant",
              "Negative phototaxis away from light",
              "Homeostatic regulation of internal glucose"
            ],
            correctIndex: 1,
            explanation: "Chemotaxis is movement directed by a chemical gradient. Positive chemotaxis is movement toward an attractant. The bacterium uses its flagella and chemoreceptors to bias swimming toward glucose.",
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
          },
          {
            id: "8.2.3",
            text: "Approximately what percentage of energy transfers from one trophic level to the next?",
            options: [
              "1%",
              "10%",
              "50%",
              "90%"
            ],
            correctIndex: 1,
            explanation: "The 10% rule (ecological efficiency): ~10% of energy in one trophic level transfers to the next. The remaining 90% is lost as heat, respiration, and waste.",
            unitId: 8
          },
          {
            id: "8.2.4",
            text: "Primary production in an ecosystem refers to:",
            options: [
              "Total energy consumed by primary consumers",
              "Rate at which producers convert inorganic energy into organic matter (biomass)",
              "Total biomass of all organisms",
              "Energy flow from detritivores to decomposers"
            ],
            correctIndex: 1,
            explanation: "Primary production is the rate at which producers (photosynthesizers/chemoautotrophs) capture energy and store it as organic compounds.",
            unitId: 8
          },
          {
            id: "8.2.5",
            text: "Decomposers are critical to ecosystem energy flow because they:",
            options: [
              "Serve as a top trophic level receiving the most energy",
              "Break down dead organic matter, releasing nutrients back to producers and channeling energy through detritus food chains",
              "Synthesize organic matter from inorganic sources using sunlight",
              "Transfer energy with 100% efficiency between trophic levels"
            ],
            correctIndex: 1,
            explanation: "Decomposers (bacteria, fungi) break down dead organisms and waste, releasing stored nutrients (N, P, C) back for reuse by producers and channeling energy through the detritus web.",
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
          },
          {
            id: "8.3.3",
            text: "A population of rabbits with low predator populations and ample food grows rapidly. This best describes:",
            options: [
              "Logistic growth with a defined carrying capacity",
              "Exponential growth when resources are not limiting",
              "Linear growth at a constant rate",
              "Geometric growth limited by intraspecific competition"
            ],
            correctIndex: 1,
            explanation: "Exponential growth (J-curve) occurs when resources are unlimited and population size is far below carrying capacity. Growth rate is maximal.",
            unitId: 8
          },
          {
            id: "8.3.4",
            text: "In logistic growth, as population approaches carrying capacity (K), the growth rate:",
            options: [
              "Continues to accelerate",
              "Approaches zero as population nears maximum the environment can support",
              "Becomes negative causing decline below K",
              "Remains constant throughout"
            ],
            correctIndex: 1,
            explanation: "In logistic growth, as N approaches K, dN/dt approaches zero. The term (K-N)/K acts as a brake on growth.",
            unitId: 8
          },
          {
            id: "8.3.5",
            text: "Which is a density-INDEPENDENT factor regulating population size?",
            options: [
              "Competition for limited food resources",
              "Disease transmission increasing with crowding",
              "A catastrophic blizzard killing a fixed fraction regardless of population density",
              "Predation increasing as prey becomes more abundant"
            ],
            correctIndex: 2,
            explanation: "Density-independent factors affect the same proportion of the population regardless of density. Natural disasters (blizzards, floods) kill individuals regardless of crowding.",
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
          },
          {
            id: "8.4.3",
            text: "Which is a density-DEPENDENT limiting factor?",
            options: [
              "A volcanic eruption destroying all organisms in its path",
              "A drought reducing food for all organisms equally",
              "Intraspecific competition for territories intensifying as population density rises",
              "A random cold snap killing temperature-sensitive individuals"
            ],
            correctIndex: 2,
            explanation: "Density-dependent factors have greater limiting effects as density increases. Intraspecific competition for territories intensifies as more individuals crowd an area.",
            unitId: 8
          },
          {
            id: "8.4.4",
            text: "As deer population density increases, fertility decreases and disease mortality increases. This demonstrates:",
            options: [
              "Positive feedback promoting growth",
              "Density-dependent regulation controlling population size near carrying capacity",
              "The Allee effect where large populations have lower fitness",
              "Exponential growth exceeding carrying capacity"
            ],
            correctIndex: 1,
            explanation: "These are density-dependent regulatory mechanisms. As density increases, competition intensifies and disease spreads more easily, reducing birth rates and increasing death rates.",
            unitId: 8
          },
          {
            id: "8.4.5",
            text: "The Allee effect states that populations below a certain minimum size may have reduced fitness because:",
            options: [
              "Predation pressure decreases, reducing natural selection",
              "Inbreeding and difficulty finding mates reduce reproductive success in small populations",
              "Resource availability increases disproportionately",
              "Genetic drift accelerates evolution"
            ],
            correctIndex: 1,
            explanation: "Allee effect: small population individuals have reduced fitness due to fewer mating opportunities, inbreeding depression, or reduced cooperative behaviors.",
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
          },
          {
            id: "8.5.3",
            text: "In a predator-prey cycle, when hare populations crash, lynx populations:",
            options: [
              "Crash simultaneously with hares",
              "Crash with a time delay after the hare crash, due to starvation",
              "Increase as competition among lynx decreases",
              "Switch to alternative prey and maintain population"
            ],
            correctIndex: 1,
            explanation: "Predator-prey cycles show time-delayed oscillations. When prey (hare) crash from overhunting, predator (lynx) subsequently crashes from starvation, allowing hare to recover.",
            unitId: 8
          },
          {
            id: "8.5.4",
            text: "Two bird species foraging in different tree zones when co-occurring (but foraging throughout when alone) demonstrates:",
            options: [
              "Predator-prey coevolution",
              "Character displacement reducing interspecific competition",
              "Commensalism between species",
              "Sympatric speciation"
            ],
            correctIndex: 1,
            explanation: "Character displacement: competing species evolve different phenotypes when co-occurring, reducing interspecific competition by partitioning resources (niche partitioning).",
            unitId: 8
          },
          {
            id: "8.5.5",
            text: "Mycorrhizal fungi grow in plant roots. Fungi receive carbohydrates; plants gain improved mineral absorption. This is:",
            options: [
              "Parasitism, where fungi harm the plant",
              "Commensalism, where only fungi benefit",
              "Mutualism, where both organisms benefit",
              "Competition for soil resources"
            ],
            correctIndex: 2,
            explanation: "Mutualism (+/+): both species benefit. Mycorrhizal fungi receive photosynthate (sugars) from plants; plants gain improved mineral uptake (especially phosphorus) from the fungi's hyphal network.",
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
          },
          {
            id: "8.6.3",
            text: "According to island biogeography, which island has the HIGHEST species richness?",
            options: [
              "Small island far from mainland",
              "Large island close to the mainland",
              "Small island close to the mainland",
              "Large island far from the mainland"
            ],
            correctIndex: 1,
            explanation: "Island biogeography (MacArthur and Wilson): highest richness on large islands (low extinction) close to mainland (high immigration). Large and near = optimal combination.",
            unitId: 8
          },
          {
            id: "8.6.4",
            text: "A Simpson's Diversity Index value close to 1 indicates:",
            options: [
              "Very low diversity with one dominant species",
              "High diversity with many species of roughly equal abundance",
              "Complete loss of all species",
              "Dominance by a single keystone species"
            ],
            correctIndex: 1,
            explanation: "Simpson's Index: close to 1 = high diversity (many species, similar abundance); close to 0 = low diversity (dominated by few species).",
            unitId: 8
          },
          {
            id: "8.6.5",
            text: "Which would have the GREATEST negative impact on global biodiversity?",
            options: [
              "A single hurricane destroying one coral reef",
              "Widespread deforestation of tropical rainforests containing highest biodiversity concentrations",
              "Introduction of one invasive species to a lake",
              "Overhunting one large mammal species"
            ],
            correctIndex: 1,
            explanation: "Tropical rainforests harbor ~50-80% of Earth's terrestrial species. Widespread deforestation destroys irreplaceable habitat at a scale unmatched by local disturbances.",
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
          },
          {
            id: "8.7.3",
            text: "Which sequence correctly describes eutrophication leading to dead zones?",
            options: [
              "Algae die -> Nutrients increase -> Algae bloom -> Oxygen decreases",
              "Nutrient runoff -> Algae bloom -> Algae die -> Decomposers consume O2 -> Dead zone",
              "Predators increase -> Algae decrease -> Nutrients increase -> Oxygen increases",
              "Oxygen decreases -> Algae bloom -> Nutrients increase -> Fish increase"
            ],
            correctIndex: 1,
            explanation: "Eutrophication: agricultural runoff increases N and P -> massive algae bloom -> algae die -> aerobic decomposers consume all dissolved O2 -> hypoxic dead zones form.",
            unitId: 8
          },
          {
            id: "8.7.4",
            text: "Habitat fragmentation is harmful to biodiversity primarily because:",
            options: [
              "Fragmented habitats have higher temperatures",
              "Small, isolated patches support smaller populations with higher extinction risk and prevent migration",
              "Fragmentation allows easier invasive species control",
              "Fragmentation increases species richness by creating more microhabitats"
            ],
            correctIndex: 1,
            explanation: "Fragmentation divides habitats into small, isolated patches. This reduces population size (increasing extinction risk), prevents gene flow, and blocks migration routes.",
            unitId: 8
          },
          {
            id: "8.7.5",
            text: "A flower blooms two weeks earlier due to warming, but its specific pollinator has not shifted its emergence date. This is an example of:",
            options: [
              "Adaptation to climate change",
              "A phenological mismatch that disrupts a mutualistic relationship",
              "Convergent evolution between plant and pollinator",
              "Disruptive selection acting on flowering time"
            ],
            correctIndex: 1,
            explanation: "A phenological mismatch: interdependent species respond differently to climate change, disrupting their synchronized timing and potentially reducing reproductive success for both.",
            unitId: 8
          }
        ]
      }
    ]
  }
];
