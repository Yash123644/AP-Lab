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
        title: "Water Chemistry and the Elements of Life",
        description: "Explore the molecular structure of water and its life-sustaining properties. Analyze the biological acquisition and use of carbon, nitrogen, phosphorus, and sulfur.",
        youtubeId: "3jwAGWky98c",
        article: `
# Water Chemistry and the Elements of Life

## Structure of Water and Hydrogen Bonding

<div class="flex justify-center my-8">
<svg width="350" height="200" viewBox="0 0 350 200" class="max-w-full">
<!-- Water Molecule 1 (Top) -->
<g transform="translate(100, 30)">
<!-- Oxygen -->
<circle cx="50" cy="30" r="22" fill="#ef4444" />
<text x="50" y="34" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">O</text>
<text x="50" y="12" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">δ⁻</text>
<!-- Hydrogens -->
<circle cx="20" cy="65" r="12" fill="#3b82f6" />
<text x="20" y="69" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">H</text>
<text x="10" y="82" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">δ⁺</text>
<circle cx="80" cy="65" r="12" fill="#3b82f6" />
<text x="80" y="69" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">H</text>
<text x="90" y="82" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">δ⁺</text>
<!-- Covalent bonds -->
<line x1="40" y1="42" x2="28" y2="56" stroke="#ffffff" stroke-width="3" />
<line x1="60" y1="42" x2="72" y2="56" stroke="#ffffff" stroke-width="3" />
</g>
<!-- Hydrogen Bond (Dashed line) -->
<line x1="180" y1="95" x2="180" y2="135" stroke="#10b981" stroke-width="3" stroke-dasharray="6,6" />
<text x="195" y="120" fill="#10b981" font-size="10" font-weight="bold">Hydrogen Bond</text>
<!-- Water Molecule 2 (Bottom) -->
<g transform="translate(100, 110)">
<!-- Oxygen -->
<circle cx="80" cy="45" r="22" fill="#ef4444" />
<text x="80" y="49" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">O</text>
<text x="95" y="32" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">δ⁻</text>
<!-- Hydrogens -->
<circle cx="50" cy="80" r="12" fill="#3b82f6" />
<text x="50" y="84" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">H</text>
<text x="40" y="97" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">δ⁺</text>
<circle cx="110" cy="80" r="12" fill="#3b82f6" />
<text x="110" y="84" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">H</text>
<text x="120" y="97" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">δ⁺</text>
<!-- Covalent bonds -->
<line x1="70" y1="57" x2="58" y2="71" stroke="#ffffff" stroke-width="3" />
<line x1="90" y1="57" x2="102" y2="71" stroke="#ffffff" stroke-width="3" />
</g>
</svg>
</div>

Water ($H_2O$) is the **fundamental solvent of life**. Every chemical reaction in a living cell occurs in an aqueous environment, making water's unique properties essential to biology.

### Molecular Geometry and Polarity

The water molecule is **bent** (V-shaped) with a bond angle of approximately 104.5°. The oxygen atom is highly <vocab term="Electronegativity" definition="A measure of an atom's tendency to attract shared electrons toward itself in a covalent bond; oxygen is highly electronegative.">electronegative</vocab> compared to the two hydrogen atoms, pulling the shared electrons closer to its nucleus.

This unequal electron distribution creates a **polar covalent bond**: the oxygen end carries a partial negative charge ($\\delta^-$) and each hydrogen end carries a partial positive charge ($\\delta^+$). The molecule is an electric **dipole**.

### Hydrogen Bonding

A <vocab term="Hydrogen Bond" definition="A weak electrostatic attraction between a partially positive hydrogen atom on one molecule and a partially negative atom (usually N, O, or F) on another.">hydrogen bond</vocab> forms when the $\\delta^+$ hydrogen of one water molecule is attracted to the $\\delta^-$ oxygen of a neighboring molecule. Each water molecule can form up to **4 hydrogen bonds** simultaneously.

### Emergent Properties of Water

The collective strength of millions of simultaneous hydrogen bonds gives water its remarkable properties:

| Property | Explanation | Biological Importance |
|---|---|---|
| <vocab term="Cohesion" definition="Attraction between molecules of the same substance due to hydrogen bonding.">Cohesion</vocab> | Water molecules stick to each other | Creates surface tension; pulls water up xylem in plants |
| <vocab term="Adhesion" definition="Attraction between water molecules and other polar surfaces.">Adhesion</vocab> | Water molecules cling to polar surfaces | Capillary action in xylem vessels |
| High <vocab term="Specific Heat Capacity" definition="The energy needed to raise 1 gram of a substance by 1°C; buffers aquatic temperatures.">Specific Heat</vocab> | Hydrogen bonds must break before temperature rises | Buffers aquatic temperatures; stabilizes body heat |
| Evaporative Cooling | High-KE molecules evaporate, removing heat | Sweating and leaf transpiration cool organisms |
| Ice Floats | Solid water is LESS dense than liquid water | Ice insulates aquatic environments in winter |

### The Density Anomaly of Ice

In liquid water, hydrogen bonds constantly break and reform. When water freezes, hydrogen bonds lock molecules into a **spacious hexagonal lattice** — holding molecules **farther apart** than in the liquid state. This makes ice ~9% less dense than liquid water — which is why ice floats. Floating ice insulates the liquid water beneath, allowing aquatic life to survive winter.

### Water as the Universal Solvent

Water is an excellent <vocab term="Solvent" definition="The dissolving medium in a solution; water is the universal biological solvent.">solvent</vocab> because its polar molecules surround and separate ionic compounds and other polar solutes, forming <vocab term="Hydration Shell" definition="The sphere of water molecules surrounding a dissolved ion or polar molecule.">hydration shells</vocab>. Nonpolar substances (like oils) cannot form hydrogen bonds with water and are excluded — the basis of the **hydrophobic effect** that shapes biological membranes.

### AP Exam Focus

- Calculate SA:V ratios for cubes or spheres in FRQs
- Smaller cells have higher SA:V = more efficient exchange per unit volume
- Microvilli and cristae are adaptations that increase functional SA:V
- Light microscopy: live cells, ~200 nm resolution; TEM: dead/fixed, less than 1 nm resolution

## Elements of Life

<div class="flex justify-center my-8">
<svg width="400" height="200" viewBox="0 0 400 200" class="max-w-full">
<!-- Atmosphere (Carbon) -->
<rect x="20" y="20" width="100" height="40" rx="4" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="1.5" />
<text x="70" y="44" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Atmospheric CO₂</text>
<!-- Soil (Nitrogen and Phosphorus) -->
<rect x="250" y="130" width="130" height="50" rx="4" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" stroke-width="1.5" />
<text x="315" y="150" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Soil Ions: NO₃⁻, NH₄⁺</text>
<text x="315" y="168" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Phosphate: PO₄³⁻</text>
<!-- Organism (Plant/Tree in center) -->
<path d="M 185 140 L 185 100 L 175 100 L 185 85 L 180 85 L 190 70 L 200 85 L 195 85 L 205 100 L 195 100 L 195 140 Z" fill="#22c55e" stroke="#15803d" stroke-width="1.5" />
<text x="190" y="160" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Producers (Plants)</text>
<!-- Absorption Arrows -->
<path d="M 70 65 L 140 100" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#bio-cycle-arrow)" />
<text x="85" y="90" fill="#22c55e" font-size="9" font-weight="bold">Carbon Fixation</text>
<path d="M 280 130 L 210 110" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#bio-cycle-arrow)" />
<text x="260" y="105" fill="#22c55e" font-size="9" font-weight="bold">Assimilation</text>
<defs>
<marker id="bio-cycle-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
</marker>
</defs>
</svg>
</div>

Living organisms are built from a select set of chemical elements. Although over 90 elements occur naturally, life uses roughly 25, with just four dominating biological molecules.

### The CHNOPS Elements

The six most abundant elements in living matter form the acronym **CHNOPS**:

| Element | Symbol | Role in Life |
|---|---|---|
| Carbon | C | Backbone of ALL organic molecules; forms 4 bonds |
| Hydrogen | H | Found in all organic molecules; key in energy transfer (NADH, FADH2) |
| Nitrogen | N | In amino groups of <vocab term="Amino Acids" definition="The monomer units of proteins, containing an amino group (-NH2), carboxyl group (-COOH), and a variable R-group.">amino acids</vocab> and nitrogenous bases of DNA/RNA |
| Oxygen | O | In most biological molecules; terminal electron acceptor in cellular respiration |
| Phosphorus | P | In the sugar-phosphate backbone of DNA/RNA and in ATP |
| Sulfur | S | In cysteine and methionine amino acids; forms disulfide bridges in proteins |

### Carbon: The Backbone of Life

Carbon has four valence electrons, allowing it to form four stable <vocab term="Covalent Bonds" definition="A strong chemical bond formed when two atoms share electrons; carbon forms 4 covalent bonds.">covalent bonds</vocab>. This tetravalency enables the synthesis of diverse carbon skeletons that can be linear, branched, or ring-shaped. Functional groups (hydroxyl, carbonyl, carboxyl, amino, sulfhydryl, phosphate, methyl) attach to these skeletons, giving molecules their unique chemical properties.

### Nitrogen and Phosphorus

- **Nitrogen** is assimilated by plants as nitrate ($NO_3^-$) or ammonium ($NH_4^+$) and is used to build proteins and nucleic acids.
- **Phosphorus** is absorbed as phosphate ($PO_4^{3-}$) and is used to build nucleic acids, phospholipids (which make up cell membranes), and ATP.

### Biogeochemical Cycles

Elements cycle through the biosphere via biogeochemical cycles:
- **Carbon cycle**: Carbon is fixed from the atmosphere by photosynthesis and returned via cellular respiration and combustion.
- **Nitrogen cycle**: Nitrogen gas ($N_2$) is converted to organic forms by nitrogen-fixing bacteria, assimilated by plants, and returned by decomposers and denitrifying bacteria.
- **Phosphorus cycle**: Phosphorus cycles locally through soil, rocks, and water (no atmospheric component).

### AP Exam Focus

- Identify which elements are found in each macromolecule class (CARB: C, H, O; LIPID: C, H, O, P in phospholipids; PROTEIN: C, H, O, N, S; NUCLEIC ACID: C, H, O, N, P)
- Recognize functional groups and how they alter molecular properties (e.g., carboxyl is acidic, amino is basic)
- Explain the role of biogeochemical cycles in providing the elements needed for life
`,
        questions: [
          {
            id: "1.1.1",
            text: "Which property of water is most responsible for the movement of water from the roots to the leaves of a tall redwood tree?",
            options: ["High specific heat capacity","Combined cohesion and adhesion driving capillary action","Density expansion upon freezing","High heat of vaporization"],
            correctIndex: 1,
            explanation: "Cohesion holds water molecules together in a continuous column, while adhesion pulls water molecules up the polar walls of xylem vessels against gravity.",
            unitId: 1
          },
          {
            id: "1.1.2",
            text: "Why does ice float on top of liquid water?",
            options: ["Covalent bonds become longer when water freezes.","Stable hydrogen bonds lock molecules in a spacious crystalline lattice that is less dense than liquid water.","Molecules move faster in ice, pushing each other apart.","Air pockets trapped inside ice lower its atomic mass."],
            correctIndex: 1,
            explanation: "As liquid water freezes, hydrogen bonds stabilize and position the molecules further apart in a crystalline lattice, making solid ice less dense than liquid water.",
            unitId: 1
          },
          {
            id: "1.1.3",
            text: "Which property explains why water has a much higher boiling point than H2S (similar size)?",
            options: ["H2S has more electrons","Water forms extensive H-bonds requiring more energy to vaporize","Water has stronger covalent O-H bonds","H2S is denser"],
            correctIndex: 1,
            explanation: "Water molecules form multiple H-bonds. Breaking them during vaporization requires substantially more energy than vaporizing H2S, which cannot H-bond.",
            unitId: 1
          },
          {
            id: "1.1.4",
            text: "Oil and water do not mix. This is BEST explained by water being:",
            options: ["unable to form covalent bonds","polar, excluding nonpolar oil via the hydrophobic effect","denser than oil","a gas at room temperature"],
            correctIndex: 1,
            explanation: "Water is polar; oil is nonpolar. Polar H2O excludes nonpolar molecules via the hydrophobic effect.",
            unitId: 1
          },
          {
            id: "1.1.5",
            text: "What ecological benefit does water's high specific heat provide?",
            options: ["Aquatic environments fluctuate rapidly","Water resists temperature change, buffering aquatic habitats","Water cools organisms by evaporating instantly","Aquatic organisms need no thermoregulation"],
            correctIndex: 1,
            explanation: "High specific heat means water absorbs large energy before its temperature rises, keeping aquatic habitats thermally stable.",
            unitId: 1
          },
          {
            id: "1.1.6",
            text: "A researcher analyzes a biological macromolecule and finds it contains carbon, hydrogen, oxygen, nitrogen, and phosphorus. Which of the following is the molecule most likely to be?",
            options: ["A triglyceride","A polypeptide","A nucleic acid","A starch molecule"],
            correctIndex: 2,
            explanation: "Nucleic acids (DNA/RNA) contain carbon, hydrogen, oxygen, nitrogen, and phosphorus. Proteins contain S, but rarely P. Carbohydrates and lipids contain C, H, O (and sometimes P in phospholipids, but not nitrogen).",
            unitId: 1
          },
          {
            id: "1.1.7",
            text: "Which element acts as the primary structural backbone for all biological macromolecules due to its ability to form four stable covalent bonds?",
            options: ["Nitrogen","Oxygen","Carbon","Phosphorus"],
            correctIndex: 2,
            explanation: "Carbon has four valence electrons, allowing it to form four covalent bonds and construct complex, branched, or ring-shaped molecular backbones.",
            unitId: 1
          },
          {
            id: "1.1.8",
            text: "Which element is found in proteins/nucleic acids but NOT in glucose?",
            options: ["Oxygen","Carbon","Nitrogen","Hydrogen"],
            correctIndex: 2,
            explanation: "Nitrogen is in amino groups of amino acids and nitrogenous bases. Glucose (C6H12O6) contains only C, H, and O.",
            unitId: 1
          },
          {
            id: "1.1.9",
            text: "Phosphorus is essential mainly because it is a structural component of:",
            options: ["amino acids and triglycerides","nucleic acids and phospholipids","monosaccharides and polysaccharides","fatty acids and steroids"],
            correctIndex: 1,
            explanation: "Phosphate groups form the sugar-phosphate backbone of DNA/RNA and the hydrophilic head of phospholipids.",
            unitId: 1
          },
          {
            id: "1.1.10",
            text: "What structural function does sulfur serve in proteins via cysteine residues?",
            options: ["Forms disulfide bridges stabilizing tertiary structure","Provides negative charge that binds DNA","Forms peptide bonds between amino acids","Makes proteins water-soluble"],
            correctIndex: 0,
            explanation: "Cysteine residues form covalent disulfide (-S-S-) bonds between R-groups, stabilizing the 3D folded protein.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.2",
        title: "Structure and Properties of Biological Macromolecules",
        description: "Differentiate between monomer subunits and polymers formed by dehydration synthesis. Compare structural differences and functions of carbohydrates, lipids, proteins, and nucleic acids.",
        youtubeId: "QWf2jcznLsY",
        article: `
# Structure and Properties of Biological Macromolecules

## Introduction to Biological Macromolecules

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Monomer 1 -->
<rect x="20" y="45" width="80" height="40" rx="6" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="1.5" />
<text x="60" y="68" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Monomer 1</text>
<text x="95" y="68" fill="#ef4444" font-size="10" font-weight="bold">-OH</text>
<!-- Plus Sign -->
<text x="120" y="70" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">+</text>
<!-- Monomer 2 -->
<text x="135" y="68" fill="#3b82f6" font-size="10" font-weight="bold">H-</text>
<rect x="150" y="45" width="80" height="40" rx="6" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="1.5" />
<text x="190" y="68" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Monomer 2</text>
<!-- Forward Arrow (Dehydration) -->
<path d="M 245 55 L 295 55" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#dimer-arrow)" />
<text x="270" y="47" fill="#22c55e" font-size="8" font-weight="bold" text-anchor="middle">- H₂O</text>
<!-- Reverse Arrow (Hydrolysis) -->
<path d="M 295 75 L 245 75" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#dimer-arrow)" />
<text x="270" y="90" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">+ H₂O</text>
<!-- Dimer Product -->
<g transform="translate(315, 45)">
<rect x="0" y="0" width="110" height="40" rx="6" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="55" y="23" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Dimer</text>
</g>
<defs>
<marker id="dimer-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" />
</marker>
</defs>
</svg>
</div>

Biological macromolecules are large, complex molecules essential for life. They are built from smaller organic subunits called monomers, which are linked together to form polymers.

### Monomers vs. Polymers

- A <vocab term="Monomer" definition="A simple compound whose molecules can join together to form polymers; e.g. amino acids, monosaccharides.">monomer</vocab> is a small, single structural unit that acts as a building block.
- A <vocab term="Polymer" definition="A large molecule consisting of many repeating monomer units linked by covalent bonds.">polymer</vocab> is a long chain of repeating monomer units joined by covalent bonds.

### Dehydration Synthesis

Polymers are synthesized through a chemical reaction called **dehydration synthesis** (or condensation):
- One monomer provides a hydroxyl group ($-OH$), and the other provides a hydrogen ($-H$).
- A water molecule ($H_2O$) is removed, forming a covalent bond between the monomers.
- This process is **anabolic** (builds molecules) and requires energy.

$$\\text{Monomer}_1 + \\text{Monomer}_2 \\xrightarrow{\\text{Dehydration}} \\text{Polymer} + H_2O$$

### Hydrolysis

Polymers are broken down into monomers through **hydrolysis**:
- A water molecule is added to break the covalent bond between monomers.
- The hydrogen from water attaches to one monomer, and the hydroxyl group attaches to the other.
- This process is **catabolic** (breaks down molecules) and releases energy.

$$\\text{Polymer} + H_2O \\xrightarrow{\\text{Hydrolysis}} \\text{Monomer}_1 + \\text{Monomer}_2$$

### Covalent Linkages

Each class of macromolecules uses specific covalent bonds to link monomers:

| Macromolecule | Monomer | Covalent Bond | Example |
|---|---|---|---|
| Carbohydrates | Monosaccharides | **Glycosidic linkage** | Starch, glycogen |
| Proteins | Amino acids | **Peptide bond** | Enzymes, hemoglobin |
| Nucleic Acids | Nucleotides | **Phosphodiester bond** | DNA, RNA |
| Lipids (Triglycerides) | Glycerol + Fatty acids | **Ester linkage** | Fats, oils |

### AP Exam Focus

- Distinguish between dehydration synthesis (releases water, builds polymers) and hydrolysis (consumes water, breaks down polymers)
- Identify the type of covalent linkage formed in each macromolecule class
- Analyze how changes in these reactions affect macromolecule assembly and degradation

## Properties of Biological Macromolecules

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Carbohydrate (Hexagon) -->
<g transform="translate(10, 10)">
<polygon points="40,25 65,40 65,70 40,85 15,70 15,40" fill="none" stroke="#60a5fa" stroke-width="2" />
<text x="40" y="110" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Carbohydrate (Ring)</text>
</g>
<!-- Lipid (Glycerol + 3 tails) -->
<g transform="translate(120, 10)">
<!-- Glycerol backbone -->
<line x1="20" y1="30" x2="20" y2="80" stroke="#f59e0b" stroke-width="3" />
<!-- Fatty acid tails -->
<path d="M 20 35 L 75 35 L 85 45 L 95 35" fill="none" stroke="#f59e0b" stroke-width="2" />
<path d="M 20 55 L 75 55 L 85 65 L 95 55" fill="none" stroke="#f59e0b" stroke-width="2" />
<path d="M 20 75 L 75 75 L 85 85 L 95 75" fill="none" stroke="#f59e0b" stroke-width="2" />
<text x="50" y="110" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Lipid (Triglyceride)</text>
</g>
<!-- Protein (Amino acid skeleton) -->
<g transform="translate(230, 10)">
<rect x="15" y="35" width="20" height="20" fill="none" stroke="#ef4444" stroke-width="1.5" />
<text x="25" y="48" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">N</text>
<line x1="35" y1="45" x2="50" y2="45" stroke="#ffffff" stroke-width="2" />
<circle cx="60" cy="45" r="10" fill="none" stroke="#ffffff" stroke-width="1.5" />
<text x="60" y="48" fill="#ffffff" font-size="8" text-anchor="middle">C</text>
<line x1="70" y1="45" x2="85" y2="45" stroke="#ef4444" stroke-width="2" />
<rect x="85" y="35" width="20" height="20" fill="none" stroke="#ef4444" stroke-width="1.5" />
<text x="95" y="48" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">C</text>
<text x="60" y="110" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Protein (Amino Acid)</text>
</g>
<!-- Nucleic Acid (Nucleotide) -->
<g transform="translate(340, 10)">
<!-- Phosphate -->
<circle cx="20" cy="35" r="10" fill="none" stroke="#10b981" stroke-width="1.5" />
<text x="20" y="38" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">P</text>
<!-- Pentose sugar (Pentagon) -->
<polygon points="45,45 60,35 75,45 68,65 52,65" fill="none" stroke="#ffffff" stroke-width="1.5" />
<!-- Base -->
<rect x="80" y="35" width="22" height="18" rx="2" fill="none" stroke="#3b82f6" stroke-width="1.5" />
<text x="91" y="47" fill="#3b82f6" font-size="8" font-weight="bold" text-anchor="middle">B</text>
<line x1="30" y1="35" x2="45" y2="40" stroke="#ffffff" stroke-width="1.5" />
<line x1="75" y1="45" x2="80" y2="45" stroke="#ffffff" stroke-width="1.5" />
<text x="60" y="110" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Nucleic Acid</text>
</g>
</svg>
</div>

The structural properties of biological macromolecules dictate their function. The four primary classes of macromolecules are carbohydrates, lipids, proteins, and nucleic acids.

### Carbohydrates

Carbohydrates are composed of carbon, hydrogen, and oxygen in a $1:2:1$ ratio:
- **Monosaccharides**: Simple sugars like glucose and fructose; serve as immediate energy sources.
- **Disaccharides**: Sucrose, lactose, maltose; used for short-term energy storage.
- **Polysaccharides**: Long chains of glucose used for energy storage (starch in plants, glycogen in animals) or structural support (cellulose in plant cell walls, chitin in fungal walls and arthropod exoskeletons).
- Structural variations: Cellulose is linear and unbranched ($\\beta$-linkages, indigestible by most animals), while starch/glycogen are branched ($\\alpha$-linkages, highly digestible).

### Lipids

Lipids are hydrophobic, nonpolar molecules composed primarily of hydrocarbons:
- **Triglycerides**: Glycerol linked to three fatty acids; used for long-term energy storage and insulation.
- **Saturated fatty acids**: Contain only single carbon-carbon bonds; straight chains pack tightly (solid at room temperature; animal fats).
- **Unsaturated fatty acids**: Contain one or more double carbon-carbon bonds; bent chains (kinks from cis-double bonds) prevent tight packing (liquid at room temp; plant oils).
- <vocab term="Phospholipids" definition="Amphipathic lipids with a polar phosphate head and two nonpolar fatty acid tails; form the cell membrane bilayer.">Phospholipids</vocab>: Amphipathic molecules with a polar, hydrophilic head and two nonpolar, hydrophobic tails. They form cell membranes.
- **Steroids**: Lipids with a carbon skeleton of four fused rings (e.g., cholesterol, estrogen, testosterone); regulate membrane fluidity and act as hormones.

### Proteins

Proteins are polymers of amino acids linked by peptide bonds. Their function is determined by their 3D shape, which is organized into four levels of structure:
1. **Primary structure**: Unique sequence of amino acids in a polypeptide chain.
2. **Secondary structure**: Hydrogen bonding between backbone atoms, forming $\\alpha$-helices and $\\beta$-pleated sheets.
3. **Tertiary structure**: 3D folding driven by R-group interactions (hydrophobic interactions, hydrogen bonds, ionic bonds, disulfide bridges).
4. **Quaternary structure**: Assembly of multiple polypeptide chains (e.g., hemoglobin).

### Nucleic Acids

Nucleic acids (DNA and RNA) are polymers of nucleotides. They store, transmit, and express genetic information.

### AP Exam Focus

- Contrast the structural and functional properties of saturated vs. unsaturated fatty acids
- Explain how the amphipathic nature of phospholipids drives the self-assembly of the cell membrane bilayer
- Analyze how changes in amino acid sequence (primary structure) can lead to protein misfolding and loss of function (e.g., sickle cell hemoglobin)
`,
        questions: [
          {
            id: "1.2.1",
            text: "Which of the following best describes the chemical reaction that joins two amino acids together to form a dipeptide?",
            options: ["Hydrolysis, which adds a water molecule and breaks a covalent bond.","Dehydration synthesis, which releases a water molecule and forms a covalent peptide bond.","Ionic bonding, which occurs when electrons are transferred between R-groups.","Hydrogen bonding between nitrogenous bases."],
            correctIndex: 1,
            explanation: "Dehydration synthesis links monomers (like amino acids) by removing a hydroxyl group from one and a hydrogen from another, releasing water and forming a covalent bond.",
            unitId: 1
          },
          {
            id: "1.2.2",
            text: "If a starch polymer consisting of 100 glucose monomers is completely broken down into individual glucose molecules, how many water molecules are consumed in the process?",
            options: ["99","100","101","50"],
            correctIndex: 0,
            explanation: "Breaking down a polymer of 100 monomers requires cleaving 99 covalent bonds. Each cleavage consumes one water molecule during hydrolysis.",
            unitId: 1
          },
          {
            id: "1.2.3",
            text: "A polypeptide of 150 amino acids is fully hydrolyzed. How many water molecules are consumed?",
            options: ["148","149","150","151"],
            correctIndex: 1,
            explanation: "A chain of 150 amino acids has 149 peptide bonds. Hydrolysis consumes one H2O per bond: 149 total.",
            unitId: 1
          },
          {
            id: "1.2.4",
            text: "Which of the following is NOT a monomer-polymer pair?",
            options: ["Glucose-Starch","Amino acid-Polypeptide","Nucleotide-DNA","Glycerol-Triglyceride"],
            correctIndex: 3,
            explanation: "Triglycerides form from glycerol + 3 fatty acids via ester bonds, but are NOT polymers (no repeating monomer chain).",
            unitId: 1
          },
          {
            id: "1.2.5",
            text: "A cell forms 200 peptide bonds synthesizing a protein. How many water molecules are released?",
            options: ["199","200","201","400"],
            correctIndex: 1,
            explanation: "Dehydration synthesis releases one H2O per peptide bond formed. Forming 200 bonds releases 200 H2O molecules.",
            unitId: 1
          },
          {
            id: "1.2.6",
            text: "What makes saturated fatty acids solid at room temperature compared to unsaturated fatty acids?",
            options: ["They contain ionic bonds that strengthen their structures.","They lack carbon-carbon double bonds, allowing their straight hydrocarbon chains to pack tightly together.","They contain hydrophilic phosphate groups that bind water.","They form extensive disulfide bridges between R-groups."],
            correctIndex: 1,
            explanation: "Saturated fatty acids have straight tails because they contain no double bonds, enabling them to pack tightly and remain solid at room temperature. Unsaturated fatty acids have kinks due to double bonds.",
            unitId: 1
          },
          {
            id: "1.2.7",
            text: "Which level of protein structure is characterized by alpha helices and beta pleated sheets formed by hydrogen bonds along the polypeptide backbone?",
            options: ["Primary structure","Secondary structure","Tertiary structure","Quaternary structure"],
            correctIndex: 1,
            explanation: "Secondary structure is formed by hydrogen bonding between the amine and carboxyl groups of the polypeptide backbone, creating alpha helices and beta sheets.",
            unitId: 1
          },
          {
            id: "1.2.8",
            text: "Heat denatures a protein by disrupting H-bonds and hydrophobic interactions. Which structural levels are lost?",
            options: ["Primary only","Primary and secondary","Secondary and tertiary","Secondary, tertiary, and quaternary"],
            correctIndex: 3,
            explanation: "Denaturation disrupts secondary (helices/sheets), tertiary (3D shape), and quaternary (multi-subunit) structure. Primary sequence is unaffected.",
            unitId: 1
          },
          {
            id: "1.2.9",
            text: "What property makes phospholipids capable of forming biological membrane bilayers?",
            options: ["Entirely hydrophobic","Entirely hydrophilic","Amphipathic: hydrophilic phosphate head and hydrophobic fatty acid tails","Covalent bonding with water"],
            correctIndex: 2,
            explanation: "Amphipathic phospholipids self-assemble: hydrophilic heads face water; hydrophobic tails face inward away from water.",
            unitId: 1
          },
          {
            id: "1.2.10",
            text: "Both plant starch and animal glycogen are composed of which monomer?",
            options: ["Fructose","Ribose","Glucose","Galactose"],
            correctIndex: 2,
            explanation: "Starch (plants) and glycogen (animals) are both storage polysaccharides made of glucose monomers linked by alpha-glycosidic bonds.",
            unitId: 1
          }
        ]
      },
      {
        id: "1.3",
        title: "Nucleic Acids: Structure, Chemistry, and Information",
        description: "Examine DNA and RNA structural differences, directionality, and coding differences.",
        youtubeId: "NNASRkIU5Fw",
        article: `
# Nucleic Acids: Structure, Chemistry, and Information

## Structure of Nucleic Acids

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Left Side: DNA Double Helix -->
<g transform="translate(20, 10)">
<text x="80" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DNA (Double-Stranded)</text>
<!-- Strands -->
<path d="M 30 30 Q 55 120, 80 30 T 130 30" fill="none" stroke="#60a5fa" stroke-width="2.5" />
<path d="M 30 110 Q 55 20, 80 110 T 130 110" fill="none" stroke="#f59e0b" stroke-width="2.5" />
<!-- Base pairs -->
<line x1="42" y1="55" x2="42" y2="85" stroke="#ef4444" stroke-width="1.5" />
<line x1="55" y1="70" x2="55" y2="70" stroke="#10b981" stroke-width="1.5" />
<line x1="68" y1="55" x2="68" y2="85" stroke="#3b82f6" stroke-width="1.5" />
<line x1="92" y1="85" x2="92" y2="55" stroke="#ef4444" stroke-width="1.5" />
<line x1="105" y1="70" x2="105" y2="70" stroke="#10b981" stroke-width="1.5" />
<line x1="118" y1="85" x2="118" y2="55" stroke="#3b82f6" stroke-width="1.5" />
<!-- Directionality labels -->
<text x="20" y="30" fill="#60a5fa" font-size="9" font-weight="bold">5'</text>
<text x="140" y="30" fill="#60a5fa" font-size="9" font-weight="bold">3'</text>
<text x="20" y="115" fill="#f59e0b" font-size="9" font-weight="bold">3'</text>
<text x="140" y="115" fill="#f59e0b" font-size="9" font-weight="bold">5'</text>
<text x="80" y="150" fill="#a1a1aa" font-size="9" text-anchor="middle">Antiparallel Strands</text>
</g>
<!-- Vertical separator -->
<line x1="220" y1="20" x2="220" y2="170" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
<!-- Right Side: RNA Single Strand -->
<g transform="translate(250, 10)">
<text x="80" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">RNA (Single-Stranded)</text>
<!-- Single Strand -->
<path d="M 50 30 Q 75 120, 100 30 T 150 30" fill="none" stroke="#10b981" stroke-width="2.5" />
<!-- Exposed Bases -->
<line x1="62" y1="55" x2="80" y2="55" stroke="#ef4444" stroke-width="2" />
<circle cx="80" cy="55" r="3" fill="#ef4444" />
<line x1="75" y1="70" x2="95" y2="70" stroke="#3b82f6" stroke-width="2" />
<circle cx="95" cy="70" r="3" fill="#3b82f6" />
<line x1="88" y1="55" x2="105" y2="55" stroke="#f59e0b" stroke-width="2" />
<circle cx="105" cy="55" r="3" fill="#f59e0b" />
<line x1="112" y1="35" x2="130" y2="35" stroke="#8b5cf6" stroke-width="2" />
<circle cx="130" cy="35" r="3" fill="#8b5cf6" />
<text x="40" y="30" fill="#10b981" font-size="9" font-weight="bold">5'</text>
<text x="160" y="30" fill="#10b981" font-size="9" font-weight="bold">3'</text>
<text x="80" y="150" fill="#a1a1aa" font-size="9" text-anchor="middle">Single Ribose-Phosphate Backbone</text>
</g>
</svg>
</div>

Nucleic acids are the molecular blueprints of life. The two primary types of nucleic acids are deoxyribonucleic acid (DNA) and ribonucleic acid (RNA).

### Nucleotide Structure

The monomer of nucleic acids is the <vocab term="Nucleotide" definition="The monomer unit of nucleic acids, consisting of a pentose sugar, a nitrogenous base, and one or more phosphate groups.">nucleotide</vocab>. Each nucleotide consists of three components:
1. **A pentose sugar**: Deoxyribose in DNA; Ribose in RNA (ribose has a hydroxyl group on carbon 2', while deoxyribose has a hydrogen).
2. **A phosphate group**: Attaches to the 5' carbon of the sugar.
3. **A nitrogenous base**: Attaches to the 1' carbon of the sugar.
   - **Purines**: Double-ring structure; Adenine (A) and Guanine (G).
   - **Pyrimidines**: Single-ring structure; Cytosine (C), Thymine (T) in DNA, and Uracil (U) in RNA.

### DNA vs. RNA

| Feature | DNA | RNA |
|---|---|---|
| Pentose Sugar | Deoxyribose | Ribose |
| Nitrogenous Bases | A, G, C, T | A, G, C, U |
| Number of Strands | Double-stranded | Single-stranded (usually) |
| 3D Structure | Double helix | Varied (tRNA, rRNA, mRNA) |
| Stability | Highly stable | Relatively unstable / transient |

### Directionality of Nucleic Acids

Nucleic acids have a distinct directionality:
- The **5' end** terminates with a free phosphate group on the 5' carbon of the sugar.
- The **3' end** terminates with a free hydroxyl group ($-OH$) on the 3' carbon of the sugar.
- Nucleotides are linked by **phosphodiester bonds** formed between the 3' hydroxyl of one nucleotide and the 5' phosphate of the next.
- Synthesis occurs in the **5' to 3'** direction.

### The Double Helix and Base Pairing

DNA consists of two strands wrapped in a double helix:
- The strands are **antiparallel**: they run in opposite directions (one 5' to 3', the other 3' to 5').
- The sugar-phosphate backbones are on the outside, and the nitrogenous bases point inward.
- The strands are held together by hydrogen bonds between complementary bases:
  - Adenine pairs with Thymine (2 hydrogen bonds).
  - Guanine pairs with Cytosine (3 hydrogen bonds; harder to break).

### AP Exam Focus

- Explain how directionality affects DNA replication and transcription (polymerases only synthesize 5' to 3')
- Contrast the structural characteristics of DNA and RNA
- Predict how differences in hydrogen bonding (A-T vs. G-C) affect the stability of DNA double helices (higher G-C content = higher melting point)
`,
        questions: [
          {
            id: "1.3.1",
            text: "During replication or transcription, new nucleotides can only be appended to which part of the growing strand?",
            options: ["The 5' phosphate group","The nitrogenous base ring","The 3' hydroxyl group","The 2' carbon of the sugar ring"],
            correctIndex: 2,
            explanation: "DNA and RNA polymerases synthesize in the 5' to 3' direction, meaning they catalyze the formation of a phosphodiester bond by adding a nucleotide to the free 3' hydroxyl group.",
            unitId: 1
          },
          {
            id: "1.3.2",
            text: "Which of the following describes a key structural difference between DNA and RNA?",
            options: ["DNA contains Uracil instead of Thymine.","DNA has a ribose sugar, whereas RNA has a deoxyribose sugar.","DNA contains deoxyribose sugar and is double-stranded, whereas RNA contains ribose sugar and is typically single-stranded.","DNA nucleotides are joined by peptide bonds, whereas RNA nucleotides use ester linkages."],
            correctIndex: 2,
            explanation: "DNA has deoxyribose sugar and forms a double helix, while RNA has ribose sugar and is single-stranded. Additionally, DNA uses Thymine and RNA uses Uracil.",
            unitId: 1
          },
          {
            id: "1.3.3",
            text: "A double-stranded DNA has 30% thymine. What percentage is cytosine?",
            options: ["20%","30%","40%","60%"],
            correctIndex: 0,
            explanation: "By Chargaff's rules (A=T, G=C): T=30% so A=30%. Remaining 40% = G+C equally split: C=20%.",
            unitId: 1
          },
          {
            id: "1.3.4",
            text: "Which feature distinguishes deoxyribose (DNA) from ribose (RNA)?",
            options: ["5 carbons vs 4 carbons","Deoxyribose lacks the -OH at the 2' carbon","Deoxyribose has uracil","Deoxyribose is a double-ring"],
            correctIndex: 1,
            explanation: "Deoxyribose has only -H at the 2' carbon (where ribose has -OH), making it more stable.",
            unitId: 1
          },
          {
            id: "1.3.5",
            text: "If one DNA strand is 5'-ATCG-3', the complementary strand written 5' to 3' is:",
            options: ["TAGC","CGAT","ATCG","GCTA"],
            correctIndex: 1,
            explanation: "Complementary strand (antiparallel) is 3'-TAGC-5'. Read 5' to 3', this is CGAT.",
            unitId: 1
          },
          {
            id: "1.3.6",
            text: "Which of the following best describes the structural differences between DNA and RNA?",
            options: ["DNA contains uracil and ribose, whereas RNA contains thymine and deoxyribose.","DNA contains thymine and deoxyribose, whereas RNA contains uracil and ribose.","DNA is single-stranded and contains adenine, whereas RNA is double-stranded and contains guanine.","DNA contains a phosphate group, whereas RNA lacks a phosphate group."],
            correctIndex: 1,
            explanation: "DNA features deoxyribose sugar and thymine nitrogenous base, while RNA features ribose sugar and uracil nitrogenous base.",
            unitId: 1
          },
          {
            id: "1.3.7",
            text: "During DNA replication, which enzyme is responsible for unwinding the double helix at the replication fork?",
            options: ["DNA Polymerase","RNA Primase","DNA Ligase","DNA Helicase"],
            correctIndex: 3,
            explanation: "DNA Helicase breaks the hydrogen bonds between the complementary base pairs to unwind and separate the two strands of DNA.",
            unitId: 1
          },
          {
            id: "1.3.8",
            text: "What type of chemical bond holds the complementary nitrogenous bases together across the double helix of a DNA molecule?",
            options: ["Covalent peptide bonds","Nonpolar covalent bonds","Hydrogen bonds","Ionic phosphodiester bonds"],
            correctIndex: 2,
            explanation: "Hydrogen bonds form between complementary nitrogenous bases (adenine to thymine, guanine to cytosine) to stabilize the double-stranded structure of DNA.",
            unitId: 1
          },
          {
            id: "1.3.9",
            text: "If a double-stranded DNA sample is found to consist of 30% adenine, what is the expected percentage of cytosine in this sample?",
            options: ["20%","30%","40%","70%"],
            correctIndex: 0,
            explanation: "Under Chargaff's rules, Adenine = Thymine (30% each = 60% total). The remaining 40% is split equally between Guanine and Cytosine (20% each).",
            unitId: 1
          },
          {
            id: "1.3.10",
            text: "Which of the following describes the directionality and orientation of the two complementary strands of DNA?",
            options: ["They are parallel, both running in the 5' to 3' direction.","They are parallel, both running in the 3' to 5' direction.","They are antiparallel, with one strand running 5' to 3' and the other 3' to 5'.","They are perpendicular, forming a cross-braced structure."],
            correctIndex: 2,
            explanation: "DNA strands are antiparallel, meaning they run in opposite directions relative to one another (one 5'-to-3', the other 3'-to-5').",
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
        title: "Subcellular Components and Cell Size Optimization",
        description: "Study the correlation between eukaryotic organelle structure and metabolic function. Examine how internal membranes coordinate cellular tasks and export products. Calculate surface area-to-volume ratios and analyze their impact on transport efficiency.",
        youtubeId: "URUJD5NEXC8",
        article: `
# Subcellular Components and Cell Size Optimization

## Cell Structure: Subcellular Components

<div class="flex justify-center my-8">
<svg width="400" height="280" viewBox="0 0 400 280" class="max-w-full">
<!-- Outer Membrane -->
<circle cx="200" cy="140" r="110" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="3" />
<text x="200" y="270" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Eukaryotic Cell Compartments</text>
<!-- Nucleus -->
<circle cx="160" cy="120" r="35" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2" />
<text x="160" y="124" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Nucleus</text>
<!-- Rough ER -->
<path d="M 125 120 Q 95 110, 110 90 T 130 75" fill="none" stroke="#f59e0b" stroke-width="3" />
<circle cx="115" cy="105" r="2" fill="#ef4444" />
<circle cx="108" cy="95" r="2" fill="#ef4444" />
<circle cx="120" cy="85" r="2" fill="#ef4444" />
<text x="95" y="80" fill="#f59e0b" font-size="8" font-weight="bold">Rough ER (Ribosomes)</text>
<!-- Golgi Apparatus -->
<path d="M 220 90 C 240 90, 240 100, 220 100" fill="none" stroke="#10b981" stroke-width="3" />
<path d="M 215 105 C 245 105, 245 115, 215 115" fill="none" stroke="#10b981" stroke-width="3" />
<path d="M 220 120 C 240 120, 240 130, 220 130" fill="none" stroke="#10b981" stroke-width="3" />
<text x="260" y="112" fill="#10b981" font-size="8" font-weight="bold">Golgi Body</text>
<!-- Vesicle transport -->
<path d="M 195 125 L 210 125" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2,2" />
<!-- Mitochondrion -->
<ellipse cx="230" cy="180" rx="25" ry="15" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="2" />
<path d="M 212 180 Q 220 170, 230 180 T 248 180" fill="none" stroke="#ef4444" stroke-width="1.5" />
<text x="230" y="210" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">Mitochondria</text>
</svg>
</div>

Cells are the basic structural and functional units of all living organisms. Eukaryotic cells are characterized by internal compartmentalization, containing distinct membrane-bound organelles that coordinate cellular activities.

### Ribosomes

Ribosomes are complexes of ribosomal RNA (rRNA) and proteins:
- They are the site of **protein synthesis**.
- **Free ribosomes** float in the cytosol and synthesize proteins that function within the cytoplasm.
- **Bound ribosomes** are attached to the endoplasmic reticulum and synthesize proteins destined for membranes, packaging, or export.
- Found in BOTH prokaryotes and eukaryotes (evolutionary conservation).

### Endoplasmic Reticulum (ER)

The ER is a network of membranous tubules and sacs continuous with the nuclear envelope:
- **Rough ER**: Studded with ribosomes. It folds and packages newly synthesized proteins into transport vesicles.
- **Smooth ER**: Lacks ribosomes. It synthesizes lipids (phospholipids, steroids), metabolizes carbohydrates, detoxifies drugs and poisons, and stores calcium ions ($Ca^{2+}$).

### Golgi Complex

The Golgi apparatus consists of flattened membranous sacs (cisternae):
- It has a distinct directionality: the **cis face** receives transport vesicles from the ER, and the **trans face** ships processed vesicles.
- It modifies (e.g., glycosylation), sorts, and packages proteins for secretion or delivery to other organelles.

### Energy Organelles

Mitochondria and chloroplasts specialize in energy conversion:
- **Mitochondria**: Site of cellular respiration. They have a double membrane: the outer membrane is smooth, and the inner membrane is folded into **cristae** to maximize surface area for the electron transport chain. The inner space is the matrix.
- **Chloroplasts**: Site of photosynthesis in plants and algae. They contain thylakoid sacs stacked into **grana** (where light reactions occur) and a fluid stroma (where the Calvin cycle occurs).

### Lysosomes and Vacuoles

- **Lysosomes**: Membrane-bound sacs of hydrolytic enzymes that digest macromolecules, engulfed pathogens (phagocytosis), and damaged organelles (autophagy).
- **Vacuoles**: Large membrane-bound vesicles. In plants, the **central vacuole** stores water, pigments, and toxins, and maintains **turgor pressure** to keep the cell rigid.

### AP Exam Focus

- Relate organelle structure to functional capacity (e.g., highly folded inner mitochondrial membrane increases surface area for ATP synthesis)
- Predict the effect of organelle dysfunction on cell survival (e.g., lysosomal enzyme deficiency causes Tay-Sachs disease)
- Compare the subcellular components of prokaryotic vs. eukaryotic cells

## Cell Structure and Function

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Nucleus -->
<rect x="10" y="50" width="70" height="80" rx="35" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="2" />
<text x="45" y="95" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Nucleus</text>
<!-- ER -->
<path d="M 80 70 C 100 50, 110 95, 130 75" fill="none" stroke="#f59e0b" stroke-width="3" />
<circle cx="95" cy="65" r="2" fill="#ef4444" /><circle cx="115" cy="80" r="2" fill="#ef4444" />
<text x="105" y="110" fill="#f59e0b" font-size="8" font-weight="bold" text-anchor="middle">ER</text>
<!-- Transport Vesicle -->
<circle cx="160" cy="80" r="8" fill="none" stroke="#ffffff" stroke-width="1.5" />
<path d="M 135 80 L 148 80" fill="none" stroke="#ffffff" stroke-width="1" marker-end="url(#sec-path-arrow)" />
<!-- Golgi -->
<path d="M 190 60 C 205 60, 205 100, 190 100" fill="none" stroke="#10b981" stroke-width="3" />
<path d="M 200 65 C 215 65, 215 105, 200 105" fill="none" stroke="#10b981" stroke-width="3" />
<text x="195" y="120" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">Golgi</text>
<path d="M 172 80 L 183 80" fill="none" stroke="#ffffff" stroke-width="1" marker-end="url(#sec-path-arrow)" />
<!-- Secretory Vesicle -->
<circle cx="250" cy="80" r="8" fill="none" stroke="#ffffff" stroke-width="1.5" />
<path d="M 215 80 L 238 80" fill="none" stroke="#ffffff" stroke-width="1" marker-end="url(#sec-path-arrow)" />
<!-- Cell Membrane -->
<path d="M 310 30 L 310 170" fill="none" stroke="#60a5fa" stroke-width="4" />
<text x="345" y="105" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle">Plasma Membrane</text>
<path d="M 262 80 L 302 80" fill="none" stroke="#ffffff" stroke-width="1" marker-end="url(#sec-path-arrow)" />
<!-- Exocytosis -->
<circle cx="310" cy="80" r="6" fill="#ef4444" opacity="0.7" />
<text x="225" y="160" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Protein Secretory Pathway</text>
<defs>
<marker id="sec-path-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
</marker>
</defs>
</svg>
</div>

The <vocab term="Endomembrane System" definition="A network of membrane-bound organelles in eukaryotic cells including the ER, Golgi, and vesicles that coordinate protein synthesis, modification, and secretion.">endomembrane system</vocab> and energy organelles work cooperatively to sustain all cellular activities.

### The Protein Secretory Pathway

Proteins destined for secretion, the plasma membrane, or lysosomes travel through the endomembrane system:

1. **Nucleus** - DNA transcribed to mRNA; exits through nuclear pores
2. **Ribosomes on Rough ER** - mRNA translated; polypeptide threaded into ER lumen and folded with <vocab term="Chaperone Proteins" definition="Proteins that assist correct folding of newly synthesized polypeptides and prevent misfolding aggregation.">chaperones</vocab>
3. **Transport vesicles** - bud from ER and travel to Golgi cis face
4. **Golgi apparatus** - modifies carbohydrate chains, sorts and packages cargo; material flows cis to trans
5. **Secretory or lysosomal vesicles** - delivered to plasma membrane or lysosomes
6. **Exocytosis** - secretory vesicles fuse with plasma membrane; contents released

| Compartment | Function | Receives From | Sends To |
|---|---|---|---|
| Rough ER | Protein folding, packaging | Cytoplasm (ribosomes) | Golgi via transport vesicle |
| Smooth ER | Lipid synthesis, detoxification | - | Golgi, plasma membrane |
| Golgi (cis to trans) | Glycosylation, sorting | ER vesicles | Lysosomes, PM, secretion |
| Lysosomes | Hydrolytic digestion | Golgi | Cytoplasm (products) |

### Golgi Apparatus: The Molecular Post Office

The Golgi cisternae receive, modify, and redistribute cargo. <vocab term="Glycosylation" definition="The addition and modification of carbohydrate chains to proteins and lipids; occurs in the ER and Golgi apparatus.">Glycosylation</vocab> (adding sugar chains) identifies proteins for their destination. Signal sequences in proteins determine routing.

### Energy Organelles: Autonomous Systems

<vocab term="Endosymbiotic Theory" definition="The theory that mitochondria and chloroplasts evolved from free-living prokaryotes that were engulfed by a host cell; supported by their double membranes, own DNA, and 70S ribosomes.">Endosymbiotic theory</vocab> explains why mitochondria and chloroplasts:
- Have **double membranes** (outer from host, inner from original prokaryote)
- Contain **circular DNA** (like prokaryotes)
- Have **70S ribosomes** (prokaryotic type, not 80S eukaryotic)
- Divide by **binary fission** independently of the cell cycle

### Cytoskeleton: Internal Scaffolding

| Component | Size | Material | Functions |
|---|---|---|---|
| Microfilaments | 7 nm | Actin | Cell shape, cytokinesis, amoeboid movement |
| Intermediate filaments | 8-12 nm | Keratin/vimentin | Mechanical stability, nuclear lamina |
| Microtubules | 25 nm | Tubulin | Spindle fibers, cilia/flagella, vesicle tracks |

<vocab term="Motor Proteins" definition="Proteins such as kinesin and dynein that use ATP hydrolysis to move vesicles and organelles along cytoskeletal tracks.">Motor proteins</vocab> (kinesin, dynein) use ATP to transport vesicles along microtubule tracks.

### AP Exam Focus

- Trace secreted protein: ribosome on rough ER -> transport vesicle -> Golgi -> secretory vesicle -> exocytosis
- Mitochondria and chloroplasts have their own DNA and 70S ribosomes (endosymbiotic evidence)
- Cytoskeletal components: microfilaments (actin), microtubules (tubulin), intermediate filaments

## Cell Size

<div class="flex justify-center my-8">
<svg width="400" height="200" viewBox="0 0 400 200" class="max-w-full">
<!-- Eukaryotic Cell -->
<rect x="20" y="20" width="150" height="150" rx="8" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="2" />
<text x="95" y="90" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">Eukaryotic Cell</text>
<text x="95" y="110" fill="#a1a1aa" font-size="9" text-anchor="middle">10 - 100 μm</text>
<!-- Prokaryotic Cell -->
<rect x="200" y="50" width="70" height="40" rx="20" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" stroke-width="2" />
<text x="235" y="70" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Bacterium</text>
<text x="235" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">1 - 5 μm</text>
<!-- Virus -->
<polygon points="330,65 340,70 340,80 330,85 320,80 320,70" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.5" />
<text x="330" y="105" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Virus</text>
<text x="330" y="120" fill="#a1a1aa" font-size="8" text-anchor="middle">20 - 400 nm</text>
<text x="200" y="160" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Cell Size Scale (Not to scale)</text>
</svg>
</div>

Cell size is fundamentally constrained by the <vocab term="Surface Area-to-Volume Ratio" definition="The ratio of a cell's surface area to its volume; as cells grow, volume increases faster than surface area, reducing exchange efficiency.">surface area-to-volume (SA:V) ratio</vocab>. This mathematical relationship determines whether diffusion can adequately supply nutrients and remove wastes from the cell interior.

### The Mathematics of SA:V Ratio

For a sphere of radius r: $SA = 4\\pi r^2$ and $V = \\frac{4}{3}\\pi r^3$

$$\\frac{SA}{V} = \\frac{3}{r}$$

As cell radius doubles, volume increases 8-fold but surface area only 4-fold:

| Sphere Radius | Surface Area | Volume | SA:V Ratio |
|---|---|---|---|
| 1 unit | 12.6 sq units | 4.2 cu units | 3.0 |
| 2 units | 50.3 sq units | 33.5 cu units | 1.5 |
| 4 units | 201 sq units | 268 cu units | 0.75 |
| 8 units | 804 sq units | 2144 cu units | 0.375 |

### Why SA:V Ratio Matters

<vocab term="Diffusion" definition="The passive movement of molecules from regions of high concentration to low; the primary means of intracellular transport, with time proportional to distance squared.">Diffusion</vocab> time scales with the square of distance:

$$t \\propto d^2$$

Doubling cell radius quadruples the time for nutrients to reach the center. Cells larger than ~100 micrometers cannot supply interior regions fast enough by diffusion alone. This is why multicellular organisms evolved circulatory systems to deliver nutrients to cells that cannot afford larger SA:V ratio.

### Structural Adaptations to Maximize SA:V

| Adaptation | Location | Effect |
|---|---|---|
| Microvilli | Intestinal epithelium | Increases absorptive area ~20-fold |
| Cristae (inner membrane folds) | Mitochondria | Maximizes ETC surface area |
| Root hair extensions | Plant root cells | Increases water and mineral absorption |
| Alveolar surface area | Lung | Maximizes O2/CO2 exchange |
| Thylakoid membrane folds | Chloroplasts | Maximizes light capture area |

### Cell Size Reference Ranges

| Cell Type | Size | Notes |
|---|---|---|
| Mycoplasma (smallest bacterium) | 0.1-0.3 micrometer | No cell wall |
| Typical bacterium (E. coli) | 1-2 micrometers | Similar size to mitochondria |
| Typical eukaryotic cell | 10-100 micrometers | Visible with light microscope |
| Human egg (oocyte) | ~100 micrometers | Barely visible to naked eye |
| Nerve cell axon | Up to 1 meter long! | Thin diameter maintains SA:V |

### Microscopy: Visualizing Cells

<vocab term="Resolution" definition="The minimum distance between two points that can be distinguished as separate; electron microscopes achieve approximately 1 nm vs 200 nm for light microscopes.">Resolution</vocab> determines what structures are visible:

| Microscope Type | Resolution | Key Use |
|---|---|---|
| Human eye | 0.2 mm | Gross anatomy |
| Light (compound) | ~200 nm | Live cells, cell-level structures |
| Scanning Electron (SEM) | 1-20 nm | 3D surface topography |
| Transmission Electron (TEM) | less than 1 nm | Internal organelle ultrastructure |

<vocab term="Electron Microscope" definition="A microscope using electron beams instead of light, achieving resolution of less than 1 nm; specimens must be fixed (dead) and placed in a vacuum.">Electron microscopes</vocab> cannot image living cells because the specimen must be fixed and placed in a vacuum.

### AP Exam Focus

- Calculate SA:V ratios for cubes or spheres in FRQs
- Smaller cells have higher SA:V = more efficient exchange per unit volume
- Microvilli and cristae are adaptations that increase functional SA:V
- Light microscopy: live cells, ~200 nm resolution; TEM: dead/fixed, less than 1 nm resolution
`,
        questions: [
          {
            id: "2.1.1",
            text: "Which organelle would be highly abundant in mammalian liver cells responsible for metabolizing toxins and drugs?",
            options: ["Rough Endoplasmic Reticulum","Lysosomes","Smooth Endoplasmic Reticulum","Golgi Complex"],
            correctIndex: 2,
            explanation: "The smooth endoplasmic reticulum is responsible for the detoxification of drugs and poisons, lipid synthesis, and calcium storage.",
            unitId: 2
          },
          {
            id: "2.1.2",
            text: "How does the structural folding of the inner mitochondrial membrane support its physiological function?",
            options: ["It isolates genetic information in the matrix.","It increases surface area for housing electron transport chain proteins and ATP synthase complexes.","It allows the mitochondria to swell and store excess water.","It blocks transport of oxygen to keep respiration anaerobic."],
            correctIndex: 1,
            explanation: "The folding of the inner membrane (cristae) increases the surface area available for oxidative phosphorylation, permitting higher ATP output.",
            unitId: 2
          },
          {
            id: "2.1.3",
            text: "A cell secreting large amounts of digestive enzymes would have an abundance of:",
            options: ["Chloroplasts and vacuoles","Rough ER and Golgi apparatus","Smooth ER and peroxisomes","Central vacuoles"],
            correctIndex: 1,
            explanation: "Secretory proteins are made on rough ER ribosomes, packaged there, then modified and shipped by the Golgi.",
            unitId: 2
          },
          {
            id: "2.1.4",
            text: "Which combination of structures is UNIQUE to plant cells?",
            options: ["Ribosomes and mitochondria","Cell wall, large central vacuole, and chloroplasts","Nucleus and endoplasmic reticulum","Golgi apparatus and lysosomes"],
            correctIndex: 1,
            explanation: "Plant cells have a cellulose cell wall, large central vacuole, and chloroplasts - none found in typical animal cells.",
            unitId: 2
          },
          {
            id: "2.1.5",
            text: "Which cellular component is structurally responsible for the degradation of worn-out organelles and cellular debris?",
            options: ["The Smooth ER, because it detoxifies substances.","The Golgi Complex, because it sorts cellular products.","The Lysosome, because it contains acidic hydrolytic enzymes.","The Mitochondrion, because it burns waste to release energy."],
            correctIndex: 2,
            explanation: "Lysosomes are membrane-bound sacs of hydrolytic enzymes that fuse with vesicles containing old organelles or waste to digest and recycle their components.",
            unitId: 2
          },
          {
            id: "2.1.6",
            text: "A toxin blocks ER transport vesicles. Which process is MOST directly disrupted?",
            options: ["DNA replication","ATP synthesis","Secretion of proteins to the extracellular environment","Lipid synthesis in smooth ER"],
            correctIndex: 2,
            explanation: "Proteins for secretion must travel in vesicles from rough ER to Golgi to plasma membrane. Blocking ER exit halts secretion.",
            unitId: 2
          },
          {
            id: "2.1.7",
            text: "During autophagy, which organelle provides hydrolytic enzymes to digest old organelles?",
            options: ["Golgi apparatus","Smooth ER","Lysosome","Peroxisome"],
            correctIndex: 2,
            explanation: "Lysosomes contain acid hydrolases. Autophagosomes fuse with lysosomes, digesting their damaged contents.",
            unitId: 2
          },
          {
            id: "2.1.8",
            text: "Why is a high surface area-to-volume ratio advantageous for a cell?",
            options: ["It increases the distance molecules must travel to reach the nucleus.","It maximizes the membrane surface available for diffusion relative to the metabolic volume being serviced.","It decreases the rate of heat loss to the environment.","It allows the cell to store more waste products."],
            correctIndex: 1,
            explanation: "A high SA/V ratio means there is a large amount of membrane area to import nutrients and export wastes quickly relative to the cell's metabolic volume.",
            unitId: 2
          },
          {
            id: "2.1.9",
            text: "A cube-shaped cell has side length 3 um. What is its surface area-to-volume ratio?",
            options: ["2","3","6","9"],
            correctIndex: 0,
            explanation: "SA = 6x(3^2) = 54 um^2. V = 3^3 = 27 um^3. SA/V = 54/27 = 2.",
            unitId: 2
          },
          {
            id: "2.1.10",
            text: "Which adaptation BEST solves the low SA/V ratio in large metabolically active cells?",
            options: ["Spherical shape to maximize volume","Highly folded internal membranes increasing functional surface area","Dormancy to reduce metabolic needs","Larger nucleus"],
            correctIndex: 1,
            explanation: "Cristae in mitochondria, microvilli in intestinal cells, and thylakoids in chloroplasts all increase surface area without proportionally increasing volume.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.2",
        title: "Cell Membrane Structure and Transport Mechanisms",
        description: "Examine the fluid mosaic model, membrane proteins, and selective permeability. Analyze selective permeability, passive diffusion, active transport, and bulk vesicular movement. Study how transport proteins facilitate passive movement of polar and charged molecules. Examine active transport, cotransport, and bulk transport mechanisms.",
        youtubeId: "Ptmlvtei8hw",
        article: `
# Cell Membrane Structure and Transport Mechanisms

## Plasma Membranes

<div class="flex justify-center my-8">
<svg width="450" height="220" viewBox="0 0 450 220" class="max-w-full">
<!-- Phospholipid bilayer -->
<circle cx="30" cy="60" r="6" fill="#60a5fa" /><line x1="30" y1="66" x2="27" y2="85" stroke="#a1a1aa" stroke-width="1.5" /><line x1="30" y1="66" x2="33" y2="85" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="50" cy="60" r="6" fill="#60a5fa" /><line x1="50" y1="66" x2="47" y2="85" stroke="#a1a1aa" stroke-width="1.5" /><line x1="50" y1="66" x2="53" y2="85" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="70" cy="60" r="6" fill="#60a5fa" /><line x1="70" y1="66" x2="67" y2="85" stroke="#a1a1aa" stroke-width="1.5" /><line x1="70" y1="66" x2="73" y2="85" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Channel Protein -->
<rect x="90" y="45" width="40" height="90" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2" />
<path d="M 110 30 L 110 150" fill="none" stroke="#10b981" stroke-width="2.5" marker-end="url(#mem-arrow)" />
<text x="110" y="25" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Channel</text>
<!-- Phospholipids -->
<circle cx="150" cy="60" r="6" fill="#60a5fa" /><line x1="150" y1="66" x2="147" y2="85" stroke="#a1a1aa" stroke-width="1.5" /><line x1="150" y1="66" x2="153" y2="85" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="170" cy="60" r="6" fill="#60a5fa" /><line x1="170" y1="66" x2="167" y2="85" stroke="#a1a1aa" stroke-width="1.5" /><line x1="170" y1="66" x2="173" y2="85" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Active Pump -->
<rect x="190" y="45" width="50" height="90" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="2" />
<path d="M 215 150 L 215 30" fill="none" stroke="#ef4444" stroke-width="2.5" marker-end="url(#mem-arrow)" />
<text x="215" y="25" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Active Pump</text>
<text x="250" y="155" fill="#f59e0b" font-size="8" font-weight="bold">Requires ATP</text>
<!-- Phospholipids Bottom -->
<circle cx="30" cy="120" r="6" fill="#60a5fa" /><line x1="30" y1="114" x2="27" y2="95" stroke="#a1a1aa" stroke-width="1.5" /><line x1="30" y1="114" x2="33" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="50" cy="120" r="6" fill="#60a5fa" /><line x1="50" y1="114" x2="47" y2="95" stroke="#a1a1aa" stroke-width="1.5" /><line x1="50" y1="114" x2="53" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="70" cy="120" r="6" fill="#60a5fa" /><line x1="70" y1="114" x2="67" y2="95" stroke="#a1a1aa" stroke-width="1.5" /><line x1="70" y1="114" x2="73" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="150" cy="120" r="6" fill="#60a5fa" /><line x1="150" y1="114" x2="147" y2="95" stroke="#a1a1aa" stroke-width="1.5" /><line x1="150" y1="114" x2="153" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
<circle cx="170" cy="120" r="6" fill="#60a5fa" /><line x1="170" y1="114" x2="167" y2="95" stroke="#a1a1aa" stroke-width="1.5" /><line x1="170" y1="114" x2="173" y2="95" stroke="#a1a1aa" stroke-width="1.5" />
<defs>
<marker id="mem-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

The plasma membrane is the selectively permeable barrier that separates the interior of a cell from its environment, controlling all traffic of materials in and out.

### The Fluid Mosaic Model

The plasma membrane is described by the **Fluid Mosaic Model** (Singer & Nicolson, 1972):
- **Fluid**: Phospholipids and proteins move laterally within the membrane (2D fluid).
- **Mosaic**: Diverse proteins, carbohydrates, and lipids are embedded throughout the phospholipid bilayer.

### Membrane Lipids and Fluidity

Membrane fluidity is regulated by temperature and lipid composition:
- **Cholesterol**: Acts as a temperature buffer. At warm temperatures, it restrains lipid movement; at cold temperatures, it prevents tight packing, keeping the membrane fluid.
- **Saturated vs. Unsaturated tails**: Unsaturated fatty acids have kinks that prevent tight packing, increasing fluidity at lower temperatures.

### Membrane Proteins

Proteins determine most of the membrane's specific functions:
- **Integral proteins**: Penetrate the hydrophobic core (transmembrane proteins span the entire membrane).
- **Peripheral proteins**: Loosely bound to the membrane surface.
- **Glycoproteins & Glycolipids**: Carbohydrates attached to proteins or lipids; essential for cell-cell recognition (e.g., immune response, tissue rejection).

### Cell-to-Cell Junctions

In multicellular organisms, cells are organized into tissues through specialized junctions:
- **Tight junctions**: Seal adjacent cell membranes to prevent leakage of extracellular fluid (e.g., in the intestinal lining).
- **Desmosomes**: Fasten cells together into strong sheets like rivets (e.g., in muscle tissue).
- **Gap junctions**: Provide cytoplasmic channels between adjacent cells for direct communication (e.g., cardiac muscle).
- **Plasmodesmata**: Open channels through plant cell walls, connecting the cytoplasm of adjacent cells for transport of water, solutes, and signaling molecules.

| Junction Type | Function | Organism | Example Location |
|---|---|---|---|
| Tight Junction | Seals cells, prevents leaking | Animals | Intestinal epithelium, bladder |
| Desmosome | Mechanically anchors cells | Animals | Skin cells, cardiac muscle |
| Gap Junction | Cytoplasmic channel for signals | Animals | Cardiac muscle, embryos |
| Plasmodesmata | Cytoplasmic channel through walls | Plants | All living plant tissues |

### Selective Permeability

The membrane's structure determines what can cross:
- **Cross freely**: Small, nonpolar, hydrophobic molecules ($O_2$, $CO_2$, $N_2$, steroid hormones) pass directly through the bilayer via passive diffusion.
- **Require assistance**: Hydrophilic substances (polar molecules like glucose, ions like $Na^+$ and $K^+$, water) cannot cross the hydrophobic core easily. They require transport proteins (channels or carriers) to cross.

### AP Exam Focus

- Explain how cell membrane components (phospholipids, proteins, cholesterol) maintain fluid properties across changing environments
- Relate membrane structure to its selective permeability
- Predict how changes in membrane protein structure affect transport capability

## Membrane Transport

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Membrane bilayer line in center -->
<line x1="225" y1="20" x2="225" y2="180" stroke="#60a5fa" stroke-width="6" stroke-dasharray="10,5" />
<!-- Left (Outside) -->
<text x="100" y="25" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">High Permeability</text>
<circle cx="50" cy="65" r="8" fill="#22c55e" />
<text x="50" y="68" fill="#ffffff" font-size="8" text-anchor="middle">O₂</text>
<path d="M 65 65 L 350 65" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#select-perm-arrow)" />
<!-- Right (Inside) -->
<text x="350" y="25" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Low Permeability</text>
<rect x="30" y="110" width="30" height="20" fill="#ef4444" />
<text x="45" y="123" fill="#ffffff" font-size="8" text-anchor="middle">Gluc</text>
<path d="M 65 120 L 210 120" fill="none" stroke="#ef4444" stroke-width="2" />
<path d="M 210 110 L 200 130" fill="none" stroke="#ef4444" stroke-width="3" />
<path d="M 200 110 L 210 130" fill="none" stroke="#ef4444" stroke-width="3" />
<defs>
<marker id="select-perm-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
</marker>
</defs>
</svg>
</div>

The <vocab term="Selective Permeability" definition="The property of cell membranes allowing certain substances to cross while restricting others; maintains distinct intracellular chemical environments.">selectively permeable</vocab> plasma membrane governs all traffic into and out of the cell. Transport is categorized as passive (no ATP) or active (requires ATP).

### The Barrier: Phospholipid Bilayer Permeability

**Cross freely (simple diffusion):** O2, CO2, N2, small nonpolar molecules, steroid hormones

**Require transport proteins:** Ions (Na+, K+, Cl-, Ca2+), large polar molecules (glucose), water (aquaporins speed up 10 million-fold)

### Passive Transport: Moving With the Gradient

#### Simple Diffusion
Small nonpolar molecules dissolve in and cross the lipid bilayer. No proteins required. Rate governed by Fick's law: proportional to concentration gradient, inversely proportional to molecule size.

#### Osmosis
<vocab term="Osmosis" definition="The diffusion of water across a selectively permeable membrane from lower solute concentration (higher water concentration) to higher solute concentration (lower water concentration).">Osmosis</vocab> is water movement through <vocab term="Aquaporins" definition="Specialized water channel proteins that dramatically increase membrane permeability to water; found in kidney tubules, plant guard cells, and red blood cells.">aquaporins</vocab>. Water moves from hypotonic (more water) to hypertonic (less water) side.

$$\\Psi = \\Psi_s + \\Psi_p \\text{ (water potential drives osmosis)}$$

#### Facilitated Diffusion
Polar/charged molecules cross via integral membrane proteins:
- **Channel proteins** - gated or open pores for ions and water (still passive)
- **Carrier proteins** - bind solute, change shape, release on other side (still passive)

### Active Transport: Against the Gradient

<vocab term="Active Transport" definition="Energy-requiring movement of substances against their concentration gradient; uses ATP directly or indirectly via ion gradients.">Active transport</vocab> requires ATP to pump molecules from low to high concentration.

#### Na+/K+ ATPase (Primary Active Transport)
The most important pump in animal cells:
- Pumps **3 Na+ OUT** and **2 K+ IN** per ATP hydrolyzed
- Creates electrochemical gradients essential for nerve impulse transmission
- Accounts for ~30% of ATP consumption in human body

#### Secondary Active Transport (Cotransport)
Uses Na+ gradient (made by Na+/K+ ATPase) to drive other molecules against their gradient:
- **Symport** - Na+ and cargo move same direction (Na+/glucose in intestinal cells)
- **Antiport** - Na+ and cargo move opposite directions (Na+/H+ exchanger)

| Transport Type | ATP Used? | Direction | Example |
|---|---|---|---|
| Simple diffusion | No | High to low | O2, CO2, N2 |
| Osmosis | No | High to low water potential | Water |
| Facilitated diffusion | No | High to low | Glucose (GLUT), ions |
| Primary active transport | Yes (directly) | Low to high | Na+/K+ pump, Ca2+ pump |
| Secondary active transport | Yes (indirectly via Na+) | Low to high | Na+/glucose cotransport |

### Bulk Transport

#### Endocytosis
<vocab term="Endocytosis" definition="Bulk transport into the cell; the plasma membrane folds inward to form an intracellular vesicle enclosing extracellular material.">Endocytosis</vocab> types:
- **Phagocytosis** - "cell eating" of solid particles (macrophages engulf bacteria)
- **Pinocytosis** - "cell drinking" of extracellular fluid
- **Receptor-mediated endocytosis** - specific receptor binds ligand; highly selective (LDL uptake)

#### Exocytosis
Vesicles fuse with plasma membrane; contents released outside cell:
- Neurotransmitter release at synapses (Ca2+-triggered)
- Insulin secretion from pancreatic beta cells (glucose-triggered)
- Digestive enzyme secretion from pancreatic acinar cells

### AP Exam Focus

- Passive transport: no ATP, moves with gradient (simple diffusion, osmosis, facilitated diffusion)
- Active transport: requires ATP, moves against gradient
- Na+/K+ pump: 3 Na+ out, 2 K+ in per ATP - memorize this!
- Receptor-mediated endocytosis is highly specific; relevant to LDL/cholesterol pathology

## Facilitated Diffusion

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="50" y="50" width="350" height="30" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" />
<text x="225" y="40" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">Lipid Bilayer</text>
<!-- Simple Diffusion -->
<path d="M 100 20 L 100 160" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#trans-arrow)" />
<text x="100" y="180" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Simple Diffusion</text>
<!-- Facilitated via Channel -->
<rect x="200" y="45" width="30" height="40" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
<path d="M 215 20 L 215 160" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#trans-arrow)" />
<text x="215" y="180" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Facilitated (Channel)</text>
<!-- Facilitated via Carrier -->
<path d="M 320 40 Q 330 65, 320 90" fill="none" stroke="#f59e0b" stroke-width="3" />
<path d="M 330 20 L 330 160" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#trans-arrow)" />
<text x="330" y="180" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">Facilitated (Carrier)</text>
<defs>
<marker id="trans-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Facilitated Diffusion" definition="Passive transport using integral membrane proteins (channels or carriers) to move molecules down their concentration gradient across the membrane; requires no ATP.">Facilitated diffusion</vocab> is passive — no ATP required — but uses specialized membrane proteins for molecules that cannot cross the hydrophobic bilayer unassisted.

### Why Molecules Need Protein Assistance

The phospholipid bilayer blocks:
- **Ions**: Na+, K+, Ca2+, Cl- (electrically charged, repelled by hydrophobic core)
- **Large polar molecules**: glucose, amino acids, nucleotides
- **Water**: can cross slowly; aquaporins increase rate by 10-100 million-fold

### Channel Proteins: Rapid Passive Pores

<vocab term="Ion Channels" definition="Membrane proteins forming water-filled pores that allow specific ions to diffuse rapidly when open; can be voltage-gated, ligand-gated, mechanically-gated, or always open (leak channels).">Ion channels</vocab> create hydrophilic tunnels through the bilayer. Highly selective by pore diameter and charge.

**Gating types:**
- **Leak channels** - always open; K+ leak channels maintain resting membrane potential
- **Voltage-gated** - open in response to changes in membrane potential; essential for action potentials
- **Ligand-gated** - open when specific molecule binds (neurotransmitter receptors at synapses)
- **Mechanically-gated** - respond to physical deformation (hearing, touch)

**Aquaporins (water channels):**
- Discovered by Peter Agre (Nobel Prize 2003)
- Allow ~10^9 water molecules/second per channel
- Critical in kidney tubules (water reabsorption), plant guard cells (stomatal regulation)
- AQP2 mutations cause nephrogenic diabetes insipidus

### Carrier Proteins: Shape-Changing Transporters

<vocab term="Carrier Proteins" definition="Transport proteins that bind a specific solute and undergo conformational change to move it across the membrane down its gradient; exhibit saturation kinetics similar to enzymes.">Carrier proteins</vocab> alternate conformations:
1. Binding site exposed to high-concentration side
2. Substrate binds, inducing conformational change
3. Substrate now faces low-concentration side and is released
4. Carrier resets to original conformation

| Property | Channel Proteins | Carrier Proteins |
|---|---|---|
| Transport rate | 10^6-10^8 molecules/sec | 10^2-10^4 molecules/sec |
| Mechanism | Open pore (no shape change) | Conformational change |
| Selectivity | High (size + charge) | Very high (specific binding) |
| Saturation | No | Yes (Vmax reached) |
| Competitive inhibition | Rare | Yes (similar molecules compete) |

### GLUT Glucose Transporters: Clinical Importance

| GLUT Type | Tissue | Affinity | Key Role |
|---|---|---|---|
| GLUT1 | Most tissues, RBCs, brain | High | Basal glucose uptake |
| GLUT2 | Liver, pancreatic beta cells | Low | "Glucose sensor" - high capacity |
| GLUT3 | Neurons | Very high | Ensures brain glucose supply |
| GLUT4 | Muscle, adipose | Moderate | Insulin-stimulated uptake |
| GLUT5 | Small intestine | Fructose | Fructose absorption |

**Type 2 Diabetes connection**: Insulin normally triggers GLUT4 vesicles to fuse with plasma membrane, enabling glucose uptake. Insulin resistance prevents GLUT4 insertion -> cells cannot take up glucose -> blood glucose remains high (hyperglycemia).

### Distinguishing Facilitated Diffusion from Active Transport

A common AP exam challenge:

| Feature | Facilitated Diffusion | Active Transport |
|---|---|---|
| Energy required | No (passive) | Yes (ATP) |
| Direction | High to low concentration | Low to high concentration |
| Reaches equilibrium | Yes (when concentrations equalize) | No (maintains gradient) |
| Examples | GLUT transporters, ion channels | Na+/K+ pump, Ca2+ pump |

**Key insight**: GLUT transporters use protein carriers but are still facilitated diffusion because glucose moves WITH its gradient (from blood where it is high into cells where it is lower, especially after meals).

### AP Exam Focus

- Facilitated diffusion: passive, uses transport proteins, moves with concentration gradient
- Channel proteins: faster, no saturation; carrier proteins: slower, show Vmax saturation
- GLUT4 is insulin-stimulated; impaired in Type 2 diabetes
- Aquaporins greatly increase water permeability; still passive osmosis

## Mechanisms of Transport

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Endocytosis -->
<g transform="translate(10, 10)">
<text x="100" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Endocytosis (In)</text>
<path d="M 20 60 C 60 60, 80 50, 90 80 C 100 110, 60 110, 20 110" fill="none" stroke="#60a5fa" stroke-width="3" />
<circle cx="85" cy="80" r="8" fill="#ef4444" />
<path d="M 120 80 L 150 80" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#bulk-arrow)" />
</g>
<!-- Exocytosis -->
<g transform="translate(240, 10)">
<text x="100" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Exocytosis (Out)</text>
<path d="M 160 60 C 120 60, 100 65, 90 80 C 80 95, 120 110, 160 110" fill="none" stroke="#60a5fa" stroke-width="3" />
<circle cx="70" cy="80" r="8" fill="#ef4444" opacity="0.5" />
<path d="M 50 80 L 20 80" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#bulk-arrow)" />
</g>
<defs>
<marker id="bulk-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
</marker>
</defs>
</svg>
</div>

Transport across the plasma membrane encompasses passive diffusion, protein-mediated transport, and bulk membrane-enclosed movement. Understanding which mechanism is used depends on the molecule's size, polarity, and whether it moves with or against its gradient.

### Electrochemical Gradients

Charged ions do not simply follow concentration gradients - they respond to both concentration AND electrical charge. The combined driving force is the <vocab term="Electrochemical Gradient" definition="The combined influence of concentration gradient and electrical charge gradient that determines the net direction of ion movement across a membrane.">electrochemical gradient</vocab>.

For each ion:
$$\\Delta G = RT\\ln\\frac{[C]_{in}}{[C]_{out}} + zF\\Delta V$$

Where z = ion charge, F = Faraday's constant, V = membrane voltage.

The **resting membrane potential** (~-70 mV in neurons) is maintained by:
1. Na+/K+ ATPase pump (3 Na+ out, 2 K+ in per ATP)
2. K+ leak channels (K+ flows out, leaving cell more negative)
3. Negatively charged proteins trapped inside cell

### Cotransport Mechanisms

<vocab term="Cotransport" definition="A form of secondary active transport in which the movement of one molecule (typically Na+) down its gradient drives the active transport of another molecule against its gradient.">Cotransport</vocab> links two transport events:

#### Symporters (Same Direction)
Both molecules move in the same direction:
- **Na+/glucose symporter** in intestinal cells - Na+ flowing in pulls glucose in against its gradient
- **Na+/amino acid symporter** - absorbs amino acids from intestinal lumen
- Net effect: glucose and amino acids absorbed even when cellular concentration is higher

#### Antiporters (Opposite Directions)
Molecules move in opposite directions:
- **Na+/H+ antiporter** - exchanges Na+ in for H+ out; regulates intracellular pH
- **Na+/Ca2+ antiporter** - removes Ca2+ from cells in exchange for Na+

### Endocytosis: Bringing Material In

Three types of <vocab term="Endocytosis" definition="Bulk transport INTO the cell; the plasma membrane folds inward to form a vesicle enclosing extracellular material.">endocytosis</vocab>:

| Type | Mechanism | Selectivity | Example |
|---|---|---|---|
| Phagocytosis | Large pseudopods engulf solid particles | Low | Macrophages eating bacteria |
| Pinocytosis | Small vesicles take up fluid | Very low (nonspecific) | Nutrient sampling |
| Receptor-mediated | Receptors bind specific ligands, form coated pits | Very high | LDL uptake, iron uptake |

#### Receptor-Mediated Endocytosis (Detailed)
1. Extracellular ligand binds specific receptor protein in plasma membrane
2. Ligand-receptor complexes cluster into <vocab term="Clathrin-Coated Pits" definition="Specialized regions of the plasma membrane coated with the protein clathrin that pinch off as vesicles during receptor-mediated endocytosis.">clathrin-coated pits</vocab>
3. Clathrin pit pinches off as coated vesicle
4. Clathrin coat removed; vesicle fuses with endosome, then lysosome
5. Ligand digested or repurposed; receptor recycled to membrane

**AP Biology example**: Familial hypercholesterolemia - defective LDL receptor prevents cellular uptake of cholesterol from blood; LDL accumulates, causing cardiovascular disease.

### Exocytosis: Releasing Material Out

<vocab term="Exocytosis" definition="Bulk transport OUT of the cell; secretory vesicles fuse with the plasma membrane to release contents extracellularly.">Exocytosis</vocab> occurs via fusion of secretory vesicles with the plasma membrane. Examples:
- Neurotransmitter release from synaptic vesicles (triggered by Ca2+ influx)
- Insulin secretion from pancreatic beta cells (triggered by glucose)
- Digestive enzyme secretion from pancreatic acinar cells
- Collagen secretion from fibroblasts

### Comparing All Transport Mechanisms

| Mechanism | Energy | Protein? | Cargo Size | Example |
|---|---|---|---|---|
| Simple diffusion | None | No | Small nonpolar | O2, CO2 |
| Osmosis | None | Aquaporin | Water | Water across membranes |
| Facilitated diffusion | None | Yes | Polar, ions | Glucose, Na+ |
| Primary active transport | ATP (direct) | Yes (pump) | Ions, small molecules | Na+/K+ pump |
| Secondary active transport | ATP (indirect) | Yes (cotransporter) | Polar molecules | Na+/glucose |
| Endocytosis | ATP | No (membrane) | Large particles/molecules | Phagocytosis |
| Exocytosis | ATP | No (membrane) | Large particles/molecules | Secretion |

### AP Exam Focus

- Electrochemical gradient drives ion movement (both concentration AND charge matter)
- Cotransporters use Na+ gradient (made by Na+/K+ ATPase) to drive secondary active transport
- Receptor-mediated endocytosis is highly specific; familial hypercholesterolemia results from defective LDL receptors
- Exocytosis is triggered by Ca2+ for neurotransmitters; glucose for insulin
`,
        questions: [
          {
            id: "2.2.1",
            text: "Which of the following molecules forms the primary structural matrix of the plasma membrane, organizing into a bilayer due to its amphipathic nature?",
            options: ["Glycoproteins","Cholesterol","Phospholipids","Triglycerides"],
            correctIndex: 2,
            explanation: "Phospholipids are amphipathic (polar heads, nonpolar tails), causing them to self-assemble into a bilayer in an aqueous environment.",
            unitId: 2
          },
          {
            id: "2.2.2",
            text: "A protein spanning the entire bilayer with hydrophobic transmembrane segments is classified as:",
            options: ["A peripheral membrane protein","An integral (transmembrane) protein","A glycolipid","A soluble receptor"],
            correctIndex: 1,
            explanation: "Integral proteins span the lipid bilayer. Hydrophobic regions interact with fatty acid tails; hydrophilic ends face aqueous environments.",
            unitId: 2
          },
          {
            id: "2.2.3",
            text: "Glycoproteins on the extracellular membrane surface primarily function as:",
            options: ["energy storage molecules","barriers blocking protein transport","cell-identity markers and receptor sites","structures replacing membrane proteins"],
            correctIndex: 2,
            explanation: "Glycoproteins form the glycocalyx, involved in cell recognition, immune identification, and receptor-ligand interactions.",
            unitId: 2
          },
          {
            id: "2.2.4",
            text: "What is the primary function of aquaporins in cell membranes?",
            options: ["To pump water molecules against their concentration gradient using ATP","To facilitate the rapid passive diffusion of polar water molecules across the hydrophobic membrane core","To act as gated channels that open only during active transport","To bind ions and prevent them from entering hydration shells"],
            correctIndex: 1,
            explanation: "Aquaporins are specialized channel proteins that allow polar water molecules to pass rapidly through the cell membrane down their concentration gradient (osmosis).",
            unitId: 2
          },
          {
            id: "2.2.5",
            text: "A cell in hypertonic solution loses water by which mechanism?",
            options: ["Active transport requiring ATP","Endocytosis","Osmosis through aquaporins","Exocytosis"],
            correctIndex: 2,
            explanation: "Water moves by osmosis (facilitated diffusion through aquaporins) from high water potential inside to low water potential outside.",
            unitId: 2
          },
          {
            id: "2.2.6",
            text: "Which of the following is a characteristic of facilitated diffusion?",
            options: ["It requires the hydrolysis of ATP.","It transports molecules against their concentration gradient.","It uses membrane proteins to transport polar molecules down their concentration gradient.","It occurs only in prokaryotic cells."],
            correctIndex: 2,
            explanation: "Facilitated diffusion is passive (no ATP, down gradient) and utilizes channel or carrier proteins to help hydrophilic/polar molecules cross the hydrophobic lipid bilayer.",
            unitId: 2
          },
          {
            id: "2.2.7",
            text: "GLUT2 transport rate plateaus despite rising blood glucose. This is because:",
            options: ["The cell no longer needs glucose","All GLUT2 transporters are saturated with substrate","Glucose concentration inside exceeds outside","ATP is depleted"],
            correctIndex: 1,
            explanation: "Facilitated diffusion rate is limited by the number of transport proteins. Once all are occupied, transport rate cannot increase (saturation).",
            unitId: 2
          },
          {
            id: "2.2.8",
            text: "Why do cells need facilitated diffusion proteins for glucose even though it moves down its gradient?",
            options: ["Glucose has a negative charge","Glucose is large and polar, unable to cross the hydrophobic bilayer alone","Glucose requires phosphorylation first","High internal glucose pushes it out"],
            correctIndex: 1,
            explanation: "Glucose (MW 180) is a large polar molecule. The hydrophobic bilayer core blocks polar molecules; GLUT proteins provide a hydrophilic channel.",
            unitId: 2
          },
          {
            id: "2.2.9",
            text: "Which process is utilized by a cell to import highly specific macromolecules by binding them to extracellular membrane proteins before engulfing them?",
            options: ["Pinocytosis","Phagocytosis","Receptor-mediated endocytosis","Exocytosis"],
            correctIndex: 2,
            explanation: "Receptor-mediated endocytosis relies on specific cell-surface receptor proteins binding target ligands before pinching off into a coated vesicle.",
            unitId: 2
          },
          {
            id: "2.2.10",
            text: "During receptor-mediated endocytosis, a cell internalizes specific molecules by:",
            options: ["diffusion through gated ion channels","forming a membrane vesicle after receptor-ligand binding","using ATP to pump molecules across","excreting enzymes to digest molecules"],
            correctIndex: 1,
            explanation: "Ligands bind receptors in coated pits. The pit invaginates and pinches off, forming an endocytic vesicle inside the cell.",
            unitId: 2
          }
        ]
      },
      {
        id: "2.3",
        title: "Tonicity, Osmoregulation, and Cell Compartmentalization",
        description: "Analyze water movement across membranes using tonicity and water potential equations. Investigate how membrane-bound organelles localize and optimize eukaryotic reactions. Analyze the endosymbiotic theory for the evolution of mitochondria and chloroplasts.",
        youtubeId: "rMa9MzP19zI",
        article: `
# Tonicity, Osmoregulation, and Cell Compartmentalization

## Tonicity and Osmoregulation

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Hypotonic -->
<g transform="translate(10, 10)">
<rect x="0" y="20" width="100" height="80" rx="4" fill="rgba(255,255,255,0.01)" stroke="#a1a1aa" />
<circle cx="50" cy="60" r="22" fill="#22c55e" opacity="0.3" stroke="#22c55e" stroke-width="2" />
<text x="50" y="63" fill="#ffffff" font-size="8" text-anchor="middle">Swollen/Lysed</text>
<text x="50" y="115" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Hypotonic (H₂O In)</text>
<path d="M 10 60 Q 30 60, 40 60" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#ton-arrow)" />
</g>
<!-- Isotonic -->
<g transform="translate(160, 10)">
<rect x="0" y="20" width="100" height="80" rx="4" fill="rgba(255,255,255,0.01)" stroke="#a1a1aa" />
<circle cx="50" cy="60" r="18" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="2" />
<text x="50" y="63" fill="#ffffff" font-size="8" text-anchor="middle">Normal</text>
<text x="50" y="115" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Isotonic (No Net)</text>
<path d="M 10 50 Q 30 50, 45 50" fill="none" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#ton-arrow)" />
<path d="M 55 70 Q 70 70, 90 70" fill="none" stroke="#60a5fa" stroke-width="1.5" marker-end="url(#ton-arrow)" />
</g>
<!-- Hypertonic -->
<g transform="translate(310, 10)">
<rect x="0" y="20" width="100" height="80" rx="4" fill="rgba(255,255,255,0.01)" stroke="#a1a1aa" />
<path d="M 35 48 C 45 42, 55 42, 65 48 C 75 58, 65 72, 50 78 C 35 72, 25 58, 35 48" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2" />
<text x="50" y="63" fill="#ffffff" font-size="8" text-anchor="middle">Shriveled</text>
<text x="50" y="115" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Hypertonic (H₂O Out)</text>
<path d="M 50 60 Q 70 60, 90 60" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#ton-arrow)" />
</g>
<defs>
<marker id="ton-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
</marker>
</defs>
</svg>
</div>

<vocab term="Tonicity" definition="The ability of an extracellular solution to cause osmotic water movement across a cell membrane relative to the cell's internal solute concentration.">Tonicity</vocab> describes how a surrounding solution affects cell volume via osmosis. Three conditions exist: hypertonic, isotonic, and hypotonic.

### Three Tonicity Conditions

#### Hypotonic (Fewer Solutes Outside Than Inside)
Water moves INTO the cell (lower solute concentration outside = higher water concentration outside):
- **Animal cells** - swell and may undergo <vocab term="Cytolysis" definition="The bursting of an animal cell in a hypotonic environment due to osmotic water intake; also called lysis.">cytolysis</vocab> (lysis/bursting) - no cell wall to resist
- **Plant cells** - become <vocab term="Turgid" definition="The firm, swollen state of a plant cell in a hypotonic solution when the vacuole is full of water and turgor pressure presses outward against the cell wall.">turgid</vocab>; cell wall resists, creating turgor pressure; this is the normal, healthy state for plants

#### Isotonic (Equal Solutes Inside and Outside)
No net water movement; cells remain normal size:
- **Animal cells** - normal biconcave shape (0.9% NaCl is isotonic to human blood cells)
- **Plant cells** - become <vocab term="Flaccid" definition="The limp state of a plant cell in isotonic conditions when turgor pressure is lost; can lead to wilting.">flaccid</vocab> (limp); no turgor pressure = wilting

#### Hypertonic (More Solutes Outside Than Inside)
Water moves OUT of the cell:
- **Animal cells** - undergo <vocab term="Crenation" definition="The shriveling of an animal cell in a hypertonic solution as water leaves by osmosis, creating a scalloped membrane surface.">crenation</vocab> (shrivel, scalloped shape)
- **Plant cells** - undergo <vocab term="Plasmolysis" definition="The shrinking of a plant cell's cytoplasm away from the cell wall in a hypertonic solution; can be lethal if prolonged.">plasmolysis</vocab> (cytoplasm pulls away from cell wall); occurs when plants are severely dehydrated

### Comparison Table

| Solution | Solute Conc. | Net H2O Movement | Animal Cell | Plant Cell |
|---|---|---|---|---|
| Hypotonic | Lower outside | Into cell | Swells / lyses | Turgid (firm) - healthy |
| Isotonic | Equal | None (equilibrium) | Normal | Flaccid (limp) |
| Hypertonic | Higher outside | Out of cell | Crenates (shrivels) | Plasmolyzed |

### Water Potential in Plants

Water moves from high to low water potential ($\\Psi$):

$$\\Psi = \\Psi_s + \\Psi_p$$

- $\\Psi_s$ = solute potential = $-iCRT$ (always negative; more solutes = more negative = lower $\\Psi$)
- $\\Psi_p$ = pressure potential = turgor pressure in plant cells (positive in turgid cells)
- Pure water: $\\Psi = 0$ (reference)

Water moves toward more negative (lower) water potential.

### Osmoregulation Strategies

Organisms maintain internal osmolarity against environmental gradients:

| Organism Group | Strategy | Mechanism |
|---|---|---|
| Freshwater fish | Osmoregulator (body hypertonic to water) | Drink little water; produce large volumes dilute urine; gills actively absorb salts |
| Marine bony fish | Osmoregulator (body hypotonic to seawater) | Drink lots of seawater; excrete salt via gills; produce small amounts concentrated urine |
| Marine invertebrates | Osmoconformer | Internal osmolarity matches seawater; no regulation needed |
| Freshwater protists | Active pumping | Contractile vacuoles use ATP to pump out excess water |
| Desert mammals | Osmoregulator | Kidneys with long loops of Henle produce highly concentrated urine |

<vocab term="Osmoregulation" definition="The physiological control of water and solute balance to maintain internal osmolarity against environmental osmotic gradients; requires energy expenditure.">Osmoregulation</vocab> requires energy because it works against osmotic gradients.

### AP Exam Focus

- Plant cells: hypotonic = turgid (healthy); hypertonic = plasmolyzed; isotonic = flaccid (wilting)
- Animal cells: hypotonic = lysis; isotonic = normal; hypertonic = crenation
- Calculate water potential: $\\Psi = \\Psi_s + \\Psi_p$; water moves from high to low $\\Psi$
- Contractile vacuoles (freshwater protists) use ATP to prevent lysis in hypotonic freshwater

## Cell Compartmentalization

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Prokaryote (Left) -->
<g transform="translate(10, 10)">
<rect x="10" y="20" width="180" height="130" rx="20" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="2" />
<text x="100" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Prokaryote (No Compartments)</text>
<!-- DNA floating in nucleoid region -->
<path d="M 70 80 Q 90 60, 110 80 T 130 80" fill="none" stroke="#ef4444" stroke-width="1.5" />
<text x="100" y="105" fill="#ef4444" font-size="9" text-anchor="middle">Free Floating DNA</text>
<!-- Ribosomes -->
<circle cx="50" cy="50" r="2" fill="#ffffff" /><circle cx="150" cy="110" r="2" fill="#ffffff" />
</g>
<!-- Eukaryote (Right) -->
<g transform="translate(240, 10)">
<rect x="10" y="20" width="180" height="130" rx="10" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="2" />
<text x="100" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Eukaryote (Compartmentalized)</text>
<!-- Membrane bound Nucleus -->
<circle cx="60" cy="85" r="25" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="60" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Nucleus</text>
<!-- Mitochondria -->
<ellipse cx="140" cy="65" rx="15" ry="10" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="1.5" />
<!-- Lysosome -->
<circle cx="130" cy="115" r="10" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="130" y="118" fill="#10b981" font-size="7" text-anchor="middle">Lysosome</text>
</g>
</svg>
</div>

<vocab term="Compartmentalization" definition="The organization of eukaryotic cells into membrane-bound compartments (organelles), each with a distinct chemical environment that allows specialized biochemical reactions to occur simultaneously without interference.">Compartmentalization</vocab> is one of the defining features of eukaryotic cells. By dividing the cell into membrane-enclosed compartments, different chemical conditions (pH, ion concentrations, enzyme activities) can be maintained simultaneously in the same cell.

### Why Compartmentalization Matters

Without compartmentalization:
- Digestive enzymes (in lysosomes, pH ~4.5) would destroy cellular components
- DNA transcription and protein translation would be unseparated
- Incompatible biochemical reactions would interfere with each other
- Metabolites would dilute into the entire cytoplasm

With compartmentalization:
- Enzymes are concentrated with their substrates in the same compartment
- Reaction products are concentrated for efficient processing
- Toxic byproducts are isolated from sensitive cellular machinery
- Opposing reactions can occur simultaneously in different compartments

### Key Compartments and Their Specialized Environments

| Organelle | pH | Key Contents | Primary Function |
|---|---|---|---|
| Nucleus | ~7.2 | DNA, RNA polymerase, histones | Genetic information storage and expression |
| Cytosol | ~7.2 | Ribosomes, glycolytic enzymes | Protein synthesis, glycolysis |
| Mitochondrial matrix | ~8.0 | TCA cycle enzymes, mitochondrial DNA | Aerobic respiration |
| Intermembrane space | ~7.0 | H+ ions (proton gradient) | ATP synthesis via proton gradient |
| Lysosome | ~4.5 | Acid hydrolases | Intracellular digestion |
| Vacuole (plant) | ~5.5 | Water, pigments, toxins | Storage, turgor, waste isolation |
| ER lumen | ~7.0 | Chaperones, disulfide isomerase | Protein folding and modification |

### The Lysosome: Isolated Digestion

<vocab term="Lysosomes" definition="Membrane-bound organelles containing acid hydrolases (digestive enzymes) that function at pH ~4.5 to break down macromolecules, old organelles, and pathogens.">Lysosomes</vocab> exemplify compartmentalization's importance. Their pH ~4.5 environment:
- Activates acid hydrolases (proteases, lipases, nucleases, carbohydrases)
- Denatures and inactivates most cytosolic proteins (safety mechanism)
- If lysosomal membrane breaks, enzymes are inactivated at cytosolic pH ~7.2

Lysosomal functions:
- **Autophagy** - digesting worn-out organelles; components recycled
- **Phagocytosis digestion** - breaking down bacteria and debris in immune cells
- **Cellular senescence** - lysosomal pathway in apoptosis (programmed cell death)

### Mitochondrial Compartmentalization for ATP Synthesis

The mitochondrion has two compartments created by the double membrane:

**Intermembrane space** (between outer and inner membranes):
- Accumulates H+ ions pumped out by electron transport chain
- High H+ concentration = low pH (~7.0 vs. matrix ~8.0)
- Creates the <vocab term="Proton Motive Force" definition="The electrochemical gradient of protons (H+) across the inner mitochondrial membrane, consisting of both a pH gradient and a charge gradient, that drives ATP synthesis through ATP synthase.">proton motive force</vocab> that drives ATP synthase

**Matrix** (inside inner membrane):
- Contains TCA (Krebs) cycle enzymes
- Contains mitochondrial DNA and ribosomes
- Site of pyruvate oxidation

### Endoplasmic Reticulum: The Folding Compartment

The ER lumen is a distinct compartment optimized for protein folding:
- High concentration of <vocab term="Molecular Chaperones" definition="Proteins that assist in the correct folding of newly synthesized or stress-denatured proteins, preventing inappropriate aggregation.">molecular chaperones</vocab> (BiP/GRP78, calnexin, calreticulin)
- Oxidizing environment promotes disulfide bond formation (unlike reducing cytosol)
- Quality control: misfolded proteins are retained and eventually degraded

### Nucleus: Genetic Information Isolated

The nuclear envelope creates a crucial compartment separating transcription (in nucleus) from translation (in cytoplasm). This separation allows:
- Pre-mRNA processing (5' capping, intron splicing, 3' poly-A tail) before export
- Regulation of gene expression at nuclear pore level
- Protection of DNA from cytoplasmic enzymes

### AP Exam Focus

- Compartmentalization allows incompatible reactions to occur simultaneously in one cell
- Lysosomes maintain pH ~4.5; if membrane ruptures, acid hydrolases are inactivated in cytosol (safety mechanism)
- Mitochondrial inner and outer membrane create two compartments: intermembrane space (high H+) and matrix
- ER lumen is oxidizing (promotes disulfide bonds); cytosol is reducing

## Origins of Cell Compartmentalization

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Engulfing process -->
<!-- Aerobic bacterium -->
<rect x="20" y="65" width="40" height="25" rx="12" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.5" />
<text x="40" y="80" fill="#ffffff" font-size="8" text-anchor="middle">Aerobic</text>
<!-- Arrow -->
<path d="M 75 77 L 115 77" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#endo-theory-arrow)" />
<!-- Ancestral Host cell engulfing -->
<g transform="translate(130, 20)">
<path d="M 50 10 C 20 10, 10 40, 10 70 C 10 100, 20 130, 50 130 C 80 130, 90 100, 90 70 Z" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" />
<rect x="25" y="55" width="40" height="25" rx="12" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.5" />
<text x="45" y="115" fill="#60a5fa" font-size="8" font-weight="bold" text-anchor="middle">Engulfment</text>
</g>
<!-- Arrow -->
<path d="M 235 77 L 275 77" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#endo-theory-arrow)" />
<!-- Modern Eukaryote with Mitochondrion -->
<g transform="translate(290, 20)">
<circle cx="65" cy="70" r="55" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" />
<ellipse cx="65" cy="50" rx="18" ry="11" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.5" />
<text x="65" y="53" fill="#ffffff" font-size="7" text-anchor="middle">Mito</text>
<!-- Nucleus -->
<circle cx="65" cy="95" r="16" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="1" />
<text x="65" y="115" fill="#60a5fa" font-size="8" font-weight="bold" text-anchor="middle">Endosymbiont</text>
</g>
<text x="225" y="175" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Endosymbiotic Origins of Mitochondria</text>
<defs>
<marker id="endo-theory-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" />
</marker>
</defs>
</svg>
</div>

The <vocab term="Endosymbiotic Theory" definition="The scientific theory proposing that mitochondria and chloroplasts arose from free-living prokaryotes that were engulfed by a larger host cell and evolved into permanent intracellular organelles through mutual benefit.">endosymbiotic theory</vocab>, developed and championed by Lynn Margulis in 1967, explains how eukaryotic cells acquired their membrane-bound organelles. It proposes that mitochondria and chloroplasts were once free-living prokaryotes that were engulfed by larger host cells.

### Evidence Supporting Endosymbiotic Theory

Multiple independent lines of evidence support this theory:

| Evidence | Details | Implication |
|---|---|---|
| Double membrane | Both organelles have inner and outer membranes | Outer from host cell membrane; inner is original prokaryote membrane |
| Own circular DNA | Mitochondria and chloroplasts have circular chromosomes | Like prokaryotic chromosomes (not linear like eukaryotic) |
| 70S ribosomes | Both have prokaryotic-type (70S) ribosomes | Distinct from eukaryotic 80S ribosomes |
| Binary fission | Both divide by binary fission | Not by mitosis like eukaryotic organelles |
| Sensitivity to antibiotics | Mitochondrial/chloroplast ribosomes inhibited by bacterial antibiotics | Not eukaryotic ribosomes |
| Phylogenetic similarity | Mitochondria related to Alphaproteobacteria; chloroplasts to Cyanobacteria | Matches modern prokaryotic groups |

### The Proposed Sequence of Events

1. An ancestral prokaryote evolved the ability to engulf other cells (<vocab term="Phagocytosis" definition="The engulfment of large particles or other cells by a cell, forming an intracellular vesicle; the mechanism by which endosymbiosis likely began.">phagocytosis</vocab>)
2. An aerobic bacterium was engulfed but not digested - became the **proto-mitochondrion**
3. This partnership was advantageous: host provided protection and carbon compounds; endosymbiont provided ATP via aerobic respiration
4. Later, a cyanobacterium was similarly engulfed - became the **proto-chloroplast** in the plant/algae lineage
5. Over millions of years, genes transferred from organellar DNA to the nuclear genome (most organellar proteins are now nuclear-encoded)

### Gene Transfer from Organelles to Nucleus

The primary evidence for endosymbiotic evolution is the gradual transfer of genes:
- Original free-living bacterium had ~3,000 genes
- Modern mitochondria retain only 13-37 genes (depending on species)
- Remaining ~99% of mitochondrial proteins are encoded by nuclear DNA and imported

<vocab term="Protein Import" definition="The process by which nuclear-encoded mitochondrial and chloroplast proteins are synthesized in the cytosol and transported into the organelle via translocon complexes.">Protein import</vocab> into mitochondria uses translocon complexes (TOM/TIM complexes) that recognize signal sequences on imported proteins.

### Origins of Other Membranes

The endomembrane system (ER, Golgi, nuclear envelope) likely arose differently - by **infolding** of the plasma membrane:

1. Ancestral prokaryote's plasma membrane began to invaginate inward
2. Pockets of membrane formed internal compartments
3. Nuclear envelope evolved to protect DNA from cytoplasm
4. ER, Golgi, and vesicle systems evolved from further membrane specialization

This explains why the endomembrane system is interconnected, while mitochondria and chloroplasts are separate.

### Prokaryotic vs. Eukaryotic Origins: Two Pathways

| Organelle | Origin | Evidence |
|---|---|---|
| Nucleus | Membrane infolding | Connected to ER; no own ribosomes or DNA |
| Endoplasmic Reticulum | Membrane infolding | Continuous with nuclear envelope |
| Golgi Apparatus | Membrane infolding | Derived from ER membranes |
| Mitochondria | Endosymbiosis (alpha-proteobacterium) | Own circular DNA, 70S ribosomes, double membrane |
| Chloroplasts | Endosymbiosis (cyanobacterium) | Own circular DNA, 70S ribosomes, double membrane, thylakoids |

### Significance for Biology

Understanding endosymbiosis explains:
- Why antibiotics that target bacterial ribosomes (streptomycin, chloramphenicol) also affect mitochondria
- Why mitochondria and chloroplasts cannot be created de novo - they must divide from pre-existing organelles
- The tree of life: eukaryotes are a chimeric combination of archaeal host cell and bacterial endosymbionts

### AP Exam Focus

- Endosymbiotic theory: mitochondria from alpha-proteobacteria; chloroplasts from cyanobacteria
- Key evidence: own circular DNA, 70S ribosomes, double membranes, binary fission division
- Bacterial antibiotics affect mitochondrial ribosomes (70S) but not cytoplasmic ribosomes (80S)
- Most mitochondrial proteins are now encoded by nuclear DNA and imported
`,
        questions: [
          {
            id: "2.3.1",
            text: "A red blood cell is placed in a beaker containing a 10% NaCl solution, which is hypertonic to the cell's cytoplasm. What will happen to the cell?",
            options: ["Water will enter the cell, causing it to swell and lyse.","Water will exit the cell, causing the cell to shrivel.","There will be no net movement of water, and the cell will remain normal.","Sodium ions will pump water into the cell."],
            correctIndex: 1,
            explanation: "In a hypertonic solution, the water concentration is higher inside the cell than outside, so water moves down its gradient out of the cell, causing it to shrivel.",
            unitId: 2
          },
          {
            id: "2.3.2",
            text: "Which of the following represents the solute potential (Psi_s) of a 0.5 M sucrose solution at 27 degrees Celsius (300 K) open to the atmosphere (ionization constant i = 1)?",
            options: ["-12.46 bars","-24.93 bars","0 bars","-1.25 bars"],
            correctIndex: 0,
            explanation: "Using the formula Psi_s = -iCRT: Psi_s = -(1) * (0.5 mol/L) * (0.0831 L bar/mol K) * (300 K) = -12.465 bars, which rounds to -12.46 bars.",
            unitId: 2
          },
          {
            id: "2.3.3",
            text: "What prevents a plant cell in hypotonic solution from lysing unlike an animal cell?",
            options: ["Membrane becomes thicker","The rigid cell wall resists expansion, generating wall pressure","Chloroplasts absorb excess water","The vacuole exports water"],
            correctIndex: 1,
            explanation: "The plant cell wall provides mechanical resistance (wall pressure) that counterbalances osmotic water uptake, preventing lysis.",
            unitId: 2
          },
          {
            id: "2.3.4",
            text: "Which solution causes NO net water movement in animal cells?",
            options: ["Hypertonic (higher solute than cell)","Hypotonic (lower solute than cell)","Isotonic (same solute concentration as cell)","Distilled water"],
            correctIndex: 2,
            explanation: "In isotonic solution, solute concentrations are equal inside and outside. Water potential is equal so there is no net osmosis.",
            unitId: 2
          },
          {
            id: "2.3.5",
            text: "Which of the following is true regarding cellular compartmentalization?",
            options: ["Prokaryotes contain extensive membrane-bound compartments to run photosynthesis.","Eukaryotes utilize internal membranes to separate conflicting chemical reactions.","Compartmentalization reduces the surface area of internal membranes.","All eukaryotic organelles share identical pH levels."],
            correctIndex: 1,
            explanation: "Eukaryotic compartmentalization isolates incompatible chemical reactions, such as the synthesis of lipids in the ER and the breakdown of wastes in lysosomes.",
            unitId: 2
          },
          {
            id: "2.3.6",
            text: "Why does compartmentalization by internal membranes benefit eukaryotic cells?",
            options: ["It prevents all chemical reactions","Incompatible reactions can occur simultaneously in separate compartments","It removes the need for DNA in the nucleus","It reduces metabolic rate"],
            correctIndex: 1,
            explanation: "Without compartmentalization, incompatible reactions (e.g., protein synthesis and degradation) would interfere. Membranes allow simultaneous, efficient parallel processing.",
            unitId: 2
          },
          {
            id: "2.3.7",
            text: "A drug dissolves all inner mitochondrial membranes. Which process is MOST immediately disrupted?",
            options: ["DNA replication","Calvin cycle","Oxidative phosphorylation and ATP synthesis","Protein synthesis on ribosomes"],
            correctIndex: 2,
            explanation: "The inner mitochondrial membrane houses ETC complexes and ATP synthase. Destroying it prevents the proton gradient needed for oxidative phosphorylation.",
            unitId: 2
          },
          {
            id: "2.3.8",
            text: "Which of the following features of mitochondria provides the strongest evidence for the endosymbiotic theory?",
            options: ["They contain their own circular DNA molecule and prokaryotic-like ribosomes.","They are the primary site of ATP synthesis.","They can fuse with lysosomes to recycle nutrients.","They rely on nuclear genes for all of their structural proteins."],
            correctIndex: 0,
            explanation: "Mitochondria contain circular DNA genomes and 70S ribosomes, both of which are hallmark characteristics of prokaryotic cells, supporting their origin as engulfed bacteria.",
            unitId: 2
          },
          {
            id: "2.3.9",
            text: "Which observation provides STRONGEST evidence for endosymbiotic theory?",
            options: ["Mitochondria are found in all eukaryotes","Mitochondria have circular DNA and 70S ribosomes similar to bacteria","Mitochondria have a double membrane","Mitochondria produce ATP"],
            correctIndex: 1,
            explanation: "Circular DNA, 70S ribosomes (prokaryotic type), and binary fission are all bacterial characteristics - the strongest evidence.",
            unitId: 2
          },
          {
            id: "2.3.10",
            text: "Chloroplasts most likely originated from which type of organism?",
            options: ["Heterotrophic archaean","Free-living photosynthetic cyanobacterium","Thermophilic bacterium","Non-photosynthetic purple bacterium"],
            correctIndex: 1,
            explanation: "Chloroplasts resemble cyanobacteria in photosynthetic machinery, thylakoid membranes, circular DNA, and 70S ribosomes.",
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
        title: "Enzyme Structure, Catalysis, and Regulation",
        description: "Understand the structural properties of enzymes and substrate specificity. Analyze factors affecting enzyme function, denaturation, and mechanisms of inhibition. Study how temperature, pH, and inhibitors impact enzyme conformation and rates.",
        youtubeId: "OK5SqJ5yY8g",
        article: `
# Enzyme Structure, Catalysis, and Regulation

## Enzyme Structure

<div class="flex justify-center my-8">
<svg width="400" height="220" viewBox="0 0 400 220" class="max-w-full">
<line x1="50" y1="30" x2="50" y2="180" stroke="#a1a1aa" stroke-width="2" />
<line x1="50" y1="180" x2="370" y2="180" stroke="#a1a1aa" stroke-width="2" />
<text x="210" y="210" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reaction Coordinate</text>
<text x="15" y="105" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 105)">Free Energy (G)</text>
<line x1="50" y1="130" x2="100" y2="130" stroke="#ffffff" stroke-width="2" />
<text x="90" y="125" fill="#ffffff" font-size="9">Reactants</text>
<line x1="280" y1="160" x2="350" y2="160" stroke="#ffffff" stroke-width="2" />
<text x="310" y="150" fill="#ffffff" font-size="9">Products</text>
<path d="M 100 130 C 140 130, 160 40, 200 40 C 240 40, 250 160, 280 160" fill="none" stroke="#ef4444" stroke-width="2.5" />
<text x="200" y="32" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Uncatalyzed Ea</text>
<path d="M 100 130 C 140 130, 160 85, 200 85 C 240 85, 250 160, 280 160" fill="none" stroke="#10b981" stroke-width="2.5" />
<text x="200" y="78" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Catalyzed Ea</text>
</svg>
</div>

<vocab term="Enzymes" definition="Biological catalysts (mostly proteins) that lower the activation energy of chemical reactions without being consumed; highly specific for their substrates due to the complementary shape of their active site.">Enzymes</vocab> are biological catalysts that accelerate chemical reactions by lowering the activation energy. Understanding enzyme structure explains their remarkable specificity and catalytic power.

### Protein Structure and Enzyme Function

Enzymes are proteins, and their function depends critically on their 3D shape:

- **Primary structure** - amino acid sequence (encoded by gene)
- **Secondary structure** - alpha helices and beta sheets formed by hydrogen bonds
- **Tertiary structure** - overall 3D folding; creates the **active site**
- **Quaternary structure** - multiple polypeptide subunits (e.g., hemoglobin, rubisco)

The <vocab term="Active Site" definition="The specific region of an enzyme where substrates bind and the catalytic reaction occurs; its shape is complementary to the substrate, providing high specificity.">active site</vocab> is a precisely shaped pocket in the enzyme, usually representing only ~1-2% of the total enzyme volume.

### Two Models of Enzyme-Substrate Interaction

#### Lock-and-Key Model (Fischer, 1894)
- Active site has a rigid, fixed shape
- Substrate fits perfectly (like key in lock)
- Explains specificity but oversimplifies the mechanism

#### Induced-Fit Model (Koshland, 1958) - More Accurate
<vocab term="Induced Fit" definition="The dynamic model of enzyme action in which the active site changes shape upon substrate binding, improving the fit and facilitating catalysis.">Induced fit</vocab>: the active site subtly changes shape when the substrate binds, creating a tighter interaction and positioning catalytic amino acid residues optimally.

Evidence: X-ray crystallography shows active sites have slightly different conformations when substrate-bound vs. empty.

### How Enzymes Lower Activation Energy

Enzymes use several mechanisms:

| Mechanism | How It Works | Example |
|---|---|---|
| Substrate proximity and orientation | Holds reactants in optimal position for reaction | All enzymes |
| Transition state stabilization | Active site binds and stabilizes the transition state | Lysozyme |
| Acid-base catalysis | Active site residues donate/accept protons | Chymotrypsin (His57) |
| Covalent catalysis | Transient covalent bond with substrate | Serine proteases |
| Metal ion catalysis | Metal cofactor positions substrates or stabilizes charges | Carbonic anhydrase (Zn2+) |

### Cofactors and Coenzymes

Many enzymes require non-protein helpers:

<vocab term="Cofactors" definition="Non-protein molecules or ions required for enzyme activity; inorganic cofactors include metal ions like Zn2+, Mg2+, and Fe2+.">Cofactors</vocab> - inorganic: metal ions (Zn2+, Fe2+, Mg2+, Ca2+)

<vocab term="Coenzymes" definition="Organic non-protein molecules required for enzyme activity, often derived from vitamins; they transfer chemical groups between reactions (e.g., NAD+, FAD, Coenzyme A).">Coenzymes</vocab> - organic: NAD+, FAD, CoA (derived from vitamins B3, B2, B5)

| Type | Chemical Nature | Example | Function |
|---|---|---|---|
| Cofactor | Metal ion | Zn2+ in carbonic anhydrase | Catalytic or structural role |
| Cofactor | Metal ion | Fe2+ in hemoglobin | Oxygen binding |
| Coenzyme | Organic molecule | NAD+ (from niacin/B3) | Electron carrier in redox reactions |
| Coenzyme | Organic molecule | FAD (from riboflavin/B2) | Electron carrier in redox reactions |
| Coenzyme | Organic molecule | Coenzyme A (from pantothenate/B5) | Acyl group transfer |

An enzyme without its required cofactor/coenzyme is an <vocab term="Apoenzyme" definition="The protein portion of an enzyme without its cofactor; inactive without the cofactor. The complete enzyme with cofactor is called a holoenzyme.">apoenzyme</vocab> (inactive); with cofactor it is a **holoenzyme** (active).

### Enzyme Specificity

Enzymes exhibit different levels of substrate specificity:
- **Absolute specificity** - only one substrate (urease: only urea)
- **Group specificity** - act on similar chemical groups (hexokinase: any hexose sugar)
- **Bond specificity** - act on a particular chemical bond type (lipases: ester bonds)
- **Stereochemical specificity** - act on only one stereoisomer (L-amino acid oxidase)

### AP Exam Focus

- Enzymes lower activation energy but do not change Delta-G (free energy change) of the reaction
- Induced-fit model is more accurate than lock-and-key: active site changes shape upon substrate binding
- Cofactors (inorganic) and coenzymes (organic) are required by many enzymes; often from vitamins
- Active site shape complementarity to substrate explains enzyme specificity

## Enzyme Catalysis

<div class="flex justify-center my-8">
<svg width="400" height="220" viewBox="0 0 400 220" class="max-w-full">
<line x1="50" y1="30" x2="50" y2="180" stroke="#a1a1aa" stroke-width="2" />
<line x1="50" y1="180" x2="370" y2="180" stroke="#a1a1aa" stroke-width="2" />
<text x="210" y="210" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reaction Coordinate</text>
<text x="15" y="105" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 105)">Free Energy (G)</text>
<line x1="50" y1="130" x2="100" y2="130" stroke="#ffffff" stroke-width="2" />
<text x="90" y="125" fill="#ffffff" font-size="9">Reactants</text>
<line x1="280" y1="160" x2="350" y2="160" stroke="#ffffff" stroke-width="2" />
<text x="310" y="150" fill="#ffffff" font-size="9">Products</text>
<path d="M 100 130 C 140 130, 160 40, 200 40 C 240 40, 250 160, 280 160" fill="none" stroke="#ef4444" stroke-width="2.5" />
<text x="200" y="32" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Uncatalyzed Ea</text>
<path d="M 100 130 C 140 130, 160 85, 200 85 C 240 85, 250 160, 280 160" fill="none" stroke="#10b981" stroke-width="2.5" />
<text x="200" y="78" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Catalyzed Ea</text>
</svg>
</div>

<vocab term="Enzyme Catalysis" definition="The acceleration of a chemical reaction by an enzyme through lowering the activation energy; enzymes are not consumed and can catalyze the same reaction millions of times.">Enzyme catalysis</vocab> dramatically increases reaction rates - enzymes typically increase reaction rates by 10^6 to 10^12 fold compared to uncatalyzed reactions. This is essential because biological reactions must occur at mild temperatures and physiological pH.

### The Activation Energy Concept

Every chemical reaction has an energy barrier called the <vocab term="Activation Energy" definition="The minimum energy required for a chemical reaction to proceed; enzymes function by lowering this barrier, enabling reactions to occur at physiological temperatures.">activation energy (Ea)</vocab>:

- Without enzyme: high Ea, reaction proceeds very slowly
- With enzyme: lower Ea, same reaction proceeds much faster
- Delta-G (free energy change) is **unchanged** by the enzyme
- Enzymes do NOT shift the equilibrium - they help both forward and reverse reactions equally

#### Energy Diagram

\`\`\`
              High Ea (uncatalyzed)
Energy         |        /               |       /                 |      / Ea                |     /      \\     Low Ea (with enzyme)
               |    /        \\ _ /\\____
Reactants  ____|   /           \\/      \\_____ Products
               |                                    Time
\`\`\`

Both curves start at same reactant energy and end at same product energy. Enzyme only lowers the peak.

### The Enzyme Kinetics: Michaelis-Menten Model

Rate of enzyme-catalyzed reactions follows the **Michaelis-Menten** equation:

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

Where:
- $v$ = reaction velocity
- $V_{max}$ = maximum velocity (all enzyme active sites occupied)
- $[S]$ = substrate concentration
- $K_m$ = Michaelis constant = substrate concentration at half-Vmax

| Parameter | Meaning | Significance |
|---|---|---|
| Vmax | Maximum reaction rate | Proportional to enzyme concentration |
| Km | Substrate concentration for half-Vmax | Inverse of enzyme-substrate affinity (low Km = high affinity) |
| Kcat | Catalytic rate constant (turnover number) | Reactions per enzyme per second |
| Kcat/Km | Catalytic efficiency | Approaches diffusion limit for fastest enzymes |

#### Saturation
At high substrate concentrations, all active sites are occupied - increasing [S] further does not increase rate. The enzyme is **saturated**.

### Types of Inhibition

<vocab term="Enzyme Inhibition" definition="The reduction of enzyme activity by specific molecules that bind to the enzyme and reduce or prevent substrate binding or catalysis.">Enzyme inhibitors</vocab> regulate metabolic pathways:

#### Competitive Inhibition
- Inhibitor structurally similar to substrate
- Competes for the active site
- Can be overcome by increasing [S]
- Effect on kinetics: Vmax unchanged, Km increased

#### Noncompetitive Inhibition
- Inhibitor binds **allosteric site** (different from active site)
- Changes enzyme shape; reduces catalytic efficiency
- Cannot be overcome by adding more substrate
- Effect on kinetics: Vmax decreased, Km unchanged

#### Irreversible Inhibition
- Inhibitor covalently bonds to active site
- Permanently inactivates enzyme
- Examples: nerve agents (sarin inhibits acetylcholinesterase), aspirin (acetylates COX enzymes), penicillin (inhibits transpeptidase)

| Inhibition Type | Binding Site | Effect on Vmax | Effect on Km | Reversible? |
|---|---|---|---|---|
| Competitive | Active site | None | Increased | Yes |
| Noncompetitive | Allosteric site | Decreased | None | Yes |
| Uncompetitive | ES complex only | Decreased | Decreased | Yes |
| Irreversible | Active site (covalent) | Decreased | N/A | No |

### Allosteric Regulation

<vocab term="Allosteric Regulation" definition="The regulation of enzyme activity by binding of molecules at sites other than the active site; these conformational changes either activate or inhibit the enzyme.">Allosteric regulation</vocab> is a key mechanism for metabolic control:

- **Allosteric activators** - bind and stabilize active conformation
- **Allosteric inhibitors** - bind and stabilize inactive conformation
- **Feedback inhibition** - end product of a pathway inhibits an early enzyme in the pathway (prevents overproduction; highly efficient regulation)

Example: Threonine deaminase (first enzyme in isoleucine synthesis) is inhibited by isoleucine (the final product). When isoleucine is abundant, it binds allosterically to threonine deaminase, shutting down its own synthesis pathway.

### Enzymes in Medicine

| Disease/Application | Enzyme Involved | Clinical Significance |
|---|---|---|
| Heart attack diagnosis | Troponin, CK-MB released into blood | Detected in blood tests to confirm MI |
| Statins (cholesterol drugs) | Competitively inhibit HMG-CoA reductase | Reduce cholesterol synthesis |
| HIV treatment | Inhibit viral protease and reverse transcriptase | Block viral replication |
| PKU (phenylketonuria) | Deficient phenylalanine hydroxylase | Amino acid metabolism disorder |
| Lactose intolerance | Insufficient lactase | Cannot digest lactose |

### AP Exam Focus

- Enzymes lower Ea but do not change Delta-G or shift equilibrium
- Competitive inhibitors increase Km, do not affect Vmax; overcome by more substrate
- Noncompetitive inhibitors decrease Vmax; cannot be overcome by more substrate
- Feedback inhibition: product of pathway allosterically inhibits early enzyme

## Environmental Impacts on Enzyme Function

<div class="flex justify-center my-8">
<svg width="400" height="220" viewBox="0 0 400 220" class="max-w-full">
<line x1="50" y1="30" x2="50" y2="180" stroke="#a1a1aa" stroke-width="2" />
<line x1="50" y1="180" x2="370" y2="180" stroke="#a1a1aa" stroke-width="2" />
<text x="210" y="210" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reaction Coordinate</text>
<text x="15" y="105" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 105)">Free Energy (G)</text>
<line x1="50" y1="130" x2="100" y2="130" stroke="#ffffff" stroke-width="2" />
<text x="90" y="125" fill="#ffffff" font-size="9">Reactants</text>
<line x1="280" y1="160" x2="350" y2="160" stroke="#ffffff" stroke-width="2" />
<text x="310" y="150" fill="#ffffff" font-size="9">Products</text>
<path d="M 100 130 C 140 130, 160 40, 200 40 C 240 40, 250 160, 280 160" fill="none" stroke="#ef4444" stroke-width="2.5" />
<text x="200" y="32" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Uncatalyzed Ea</text>
<path d="M 100 130 C 140 130, 160 85, 200 85 C 240 85, 250 160, 280 160" fill="none" stroke="#10b981" stroke-width="2.5" />
<text x="200" y="78" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Catalyzed Ea</text>
</svg>
</div>

Enzyme function is exquisitely sensitive to environmental conditions because <vocab term="Enzyme Denaturation" definition="The unfolding and loss of enzyme structure (and thus activity) caused by extremes of temperature, pH, or other denaturing agents; disrupts hydrogen bonds, ionic bonds, and hydrophobic interactions that maintain 3D shape.">denaturation</vocab> disrupts the precise 3D structure that enzymes require to function. Any environmental factor that alters protein shape affects enzyme activity.

### Temperature Effects on Enzyme Activity

Temperature has a **biphasic effect** on enzyme activity:

**Below optimal temperature:**
- Lower kinetic energy -> fewer effective collisions between enzyme and substrate
- Slower reaction rate
- Very low temperatures (near freezing) - enzyme-substrate binding still occurs, just slowly

**At optimal temperature:**
- Maximum reaction rate
- Most enzymes of organisms functioning optimally
- Human enzymes: optimum ~37 degrees C (body temperature)
- Thermophilic bacteria: optimum ~70-90 degrees C

**Above optimal temperature:**
- Thermal energy disrupts hydrogen bonds, ionic interactions, and hydrophobic interactions holding enzyme in shape
- Denaturation: active site loses its precise geometry -> substrate cannot bind
- Most human enzymes denature significantly above 40-45 degrees C

**Q10 rule**: For every 10 degrees C increase (below denaturation threshold), reaction rate approximately doubles (Q10 ~2).

| Temperature Condition | Molecular Basis | Effect on Rate |
|---|---|---|
| Too cold | Low kinetic energy, fewer collisions | Rate decreases |
| Optimal | Maximum effective collisions + proper enzyme shape | Maximum rate |
| Too hot | Disruption of weak bonds -> denaturation | Rate drops sharply |

### pH Effects on Enzyme Activity

Each enzyme has an optimal pH range based on the ionization state of critical amino acid residues in the active site:

| Enzyme | Location | Optimal pH | Reason |
|---|---|---|---|
| Pepsin | Stomach | ~2.0 | Functions in acidic gastric environment |
| Salivary amylase | Mouth | ~7.0 | Functions at neutral oral pH |
| Trypsin/chymotrypsin | Small intestine | ~8.0 | Functions in alkaline intestinal environment |
| Catalase | Cells (liver) | ~7.0 | Functions at physiological pH |
| Arginase | Liver | ~9.5-10 | Unusual alkaline optimum |

**pH extremes cause denaturation:**
- H+ and OH- ions disrupt ionic bonds and hydrogen bonds in the enzyme
- Protonation/deprotonation of active site residues changes their charge and shape
- Histidine (pKa ~6) and cysteine (pKa ~8) are common catalytic residues sensitive to pH

<vocab term="pH Optimum" definition="The specific pH at which an enzyme shows maximum catalytic activity; reflects the ionization state of active site amino acid residues needed for substrate binding and catalysis.">pH optimum</vocab> varies dramatically between enzymes due to their different locations and catalytic mechanisms.

### Substrate Concentration Effects

As substrate concentration increases:
1. At low [S]: rate is proportional to [S] (linear region)
2. At medium [S]: rate begins to plateau as more active sites become occupied
3. At high [S]: enzyme is saturated; maximum rate (Vmax) reached; no increase with more substrate

This saturation curve (rectangular hyperbola) is described by the Michaelis-Menten equation: $v = \\frac{V_{max}[S]}{K_m + [S]}$

### Salinity and Ionic Environment

High salt concentrations disrupt ionic bonds in enzyme structure:
- Ionic bonds maintain tertiary structure
- High [NaCl] can interfere with these bonds -> denaturation
- Halophilic (salt-loving) archaea have evolved enzymes stabilized by high salt

### Enzyme Concentration Effects

When substrate is in excess:
- Rate is proportional to enzyme concentration (more enzyme = faster overall rate)
- This is why enzyme concentration determines overall metabolic capacity

### Reversibility of Denaturation

- **Mild denaturation** - often reversible when conditions are restored (renaturation)
- **Severe denaturation** (cooked egg white, boiled enzyme) - irreversible aggregation
- Classic example: Anfinsen's ribonuclease A experiment showed that protein refolding from primary structure is possible (Nobel Prize 1972)

### Evolutionary Adaptation of Enzyme Optima

Natural selection has optimized enzyme characteristics for each organism's environment:

<vocab term="Thermophiles" definition="Organisms that thrive at extremely high temperatures (typically 60-80 degrees C or more); their enzymes have extra disulfide bonds, increased ionic interactions, and rigid structures resistant to thermal denaturation.">Thermophiles</vocab> (hot spring bacteria like Thermus aquaticus) - Taq polymerase:
- Stable at 72 degrees C (PCR reaction temperature)
- Worth billions of dollars annually due to PCR applications

**Psychrophiles** (cold-loving organisms) - enzymes:
- Active at near-freezing temperatures
- More flexible structures to maintain activity at low temperatures

### AP Exam Focus

- Temperature: below optimum = slower rate; above optimum = denaturation (irreversible)
- pH: each enzyme has a specific optimum; extremes cause denaturation
- Know: pepsin (pH 2, stomach), salivary amylase (pH 7, mouth), trypsin (pH 8, intestine)
- Denaturation disrupts weak bonds (H-bonds, ionic, hydrophobic) but NOT peptide bonds
- Substrate saturation: above Vmax, more substrate does not increase reaction rate
`,
        questions: [
          {
            id: "3.1.1",
            text: "Which level of protein folding is directly responsible for forming the unique three-dimensional active site of an enzyme?",
            options: ["Primary structure","Secondary structure","Tertiary structure","Quaternary structure"],
            correctIndex: 2,
            explanation: "Tertiary structure refers to the overall 3D folding of a single polypeptide chain, which positions specific amino acid R-groups to create the functional active site.",
            unitId: 3
          },
          {
            id: "3.1.2",
            text: "What occurs during an 'induced fit' when a substrate binds to an enzyme?",
            options: ["The substrate changes its chemical identity before binding.","The active site undergoes a slight shape change to bind the substrate more securely.","The enzyme permanently denatures.","Covalent peptide bonds in the primary sequence are cleaved."],
            correctIndex: 1,
            explanation: "Induced fit describes how an enzyme adjusts its conformation slightly upon substrate binding to establish a tighter, more active catalytic fit.",
            unitId: 3
          },
          {
            id: "3.1.3",
            text: "A mutation changes one amino acid IN the active site. The most likely effect is:",
            options: ["Unchanged enzyme function","Ability to bind any substrate","Reduced or eliminated substrate specificity","Increased optimum temperature"],
            correctIndex: 2,
            explanation: "The active site shape determines substrate specificity. Even one changed active site amino acid can disrupt the complementary fit required for binding.",
            unitId: 3
          },
          {
            id: "3.1.4",
            text: "Enzymes speed up reactions by:",
            options: ["providing energy to break the activation energy barrier","being consumed in the reaction","lowering the activation energy by stabilizing the transition state","changing the reaction equilibrium"],
            correctIndex: 2,
            explanation: "Enzymes lower activation energy (Ea) by stabilizing the transition state. They are neither consumed nor do they shift equilibrium.",
            unitId: 3
          },
          {
            id: "3.1.5",
            text: "What happens when an enzyme is exposed to a pH far outside its native range?",
            options: ["The primary structure of the polypeptide chain is hydrolyzed.","The change in H+ concentration disrupts ionic bonds, denaturing the tertiary structure and active site.","Competitive inhibitors bind to the active site to block protons.","Activation energy is lowered even further, causing extreme reaction speeds."],
            correctIndex: 1,
            explanation: "Extreme pH changes alter the charge of amino acid R-groups, breaking ionic and hydrogen bonds that stabilize tertiary structure. This denatures the active site.",
            unitId: 3
          },
          {
            id: "3.1.6",
            text: "The induced-fit model proposes that:",
            options: ["The enzyme has a rigid active site","The enzyme changes shape slightly when substrate binds","The substrate changes shape to fit the enzyme","No enzyme-substrate complex forms"],
            correctIndex: 1,
            explanation: "In induced fit, substrate binding induces a conformational change in the active site, creating a snugger, more precise complementary fit.",
            unitId: 3
          },
          {
            id: "3.1.7",
            text: "Adding excess substrate to a reaction with a competitive inhibitor will:",
            options: ["have no effect","decrease reaction rate further","increase reaction rate back toward normal","permanently denature the inhibitor"],
            correctIndex: 2,
            explanation: "Competitive inhibition is reversible. High substrate concentrations outcompete the inhibitor for the active site, restoring enzyme activity.",
            unitId: 3
          },
          {
            id: "3.1.8",
            text: "How does a cold environment (e.g., 4 degrees Celsius) affect the rate of an enzyme-catalyzed reaction?",
            options: ["It denatures the enzyme's active site.","It slows the reaction by reducing the kinetic energy and collision rates of enzymes and substrates.","It increases the activation energy of the reaction.","It acts as a noncompetitive inhibitor."],
            correctIndex: 1,
            explanation: "Cold temperatures do not denature enzymes. Instead, they reduce molecular speed, meaning enzymes and substrates collide less frequently, slowing the reaction rate.",
            unitId: 3
          },
          {
            id: "3.1.9",
            text: "Pepsin has maximum activity at pH 2. At pH 8 activity falls sharply because:",
            options: ["Substrate is destroyed at high pH","pH change alters ionization of active site amino acids, disrupting its 3D shape","Water concentration increases, diluting the enzyme","Substrate becomes more polar at high pH"],
            correctIndex: 1,
            explanation: "pH affects ionic charges on R-groups in the active site. Deviation from optimum alters these charges, disrupting the active site shape and substrate binding.",
            unitId: 3
          },
          {
            id: "3.1.10",
            text: "A noncompetitive inhibitor binds an allosteric site. Unlike competitive inhibition, this:",
            options: ["can be reversed by adding excess substrate","cannot be overcome by adding excess substrate","is always permanent","only affects substrate binding affinity"],
            correctIndex: 1,
            explanation: "Noncompetitive inhibitors change enzyme shape allosterically. Since they do not block the active site directly, adding more substrate does not help.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.2",
        title: "Cellular Energy, ATP, and Photosynthesis",
        description: "Understand the thermodynamics of ATP hydrolysis and energy coupling in cells. Study light-dependent conversion of photons to ATP/NADPH, and light-independent carbon fixation.",
        youtubeId: "g78utcLQrJ4",
        article: `
# Cellular Energy, ATP, and Photosynthesis

## Cellular Energy

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Adenosine box -->
<rect x="30" y="60" width="90" height="40" rx="6" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2" />
<text x="75" y="85" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Adenosine</text>
<!-- Ribbon / link -->
<line x1="120" y1="80" x2="150" y2="80" stroke="#a1a1aa" stroke-width="2" />
<!-- Phosphate 1 -->
<circle cx="170" cy="80" r="16" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="2" />
<text x="170" y="84" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">P</text>
<!-- link -->
<line x1="186" y1="80" x2="206" y2="80" stroke="#a1a1aa" stroke-width="2" />
<!-- Phosphate 2 -->
<circle cx="222" cy="80" r="16" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="2" />
<text x="222" y="84" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">P</text>
<!-- High energy bond (wavy line) -->
<path d="M 238 80 Q 243 73 248 80 T 258 80" fill="none" stroke="#ef4444" stroke-width="2.5" />
<!-- Phosphate 3 (breaking away) -->
<circle cx="295" cy="65" r="16" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="2" />
<text x="295" y="69" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">P</text>
<!-- Energy burst starburst on the broken bond -->
<path d="M 248 80 L 243 65 L 248 70 L 253 65 L 248 80 Z" fill="#fbbf24" stroke="#fbbf24" stroke-width="1" />
<path d="M 248 80 L 263 70 L 258 80 L 263 90 L 248 80 Z" fill="#fbbf24" stroke="#fbbf24" stroke-width="1" />
<!-- Labels -->
<text x="250" y="50" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Energy Released!</text>
<text x="200" y="145" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ATP Hydrolysis: ATP → ADP + Pi</text>
</svg>
</div>

All living cells require energy to perform work. The primary energy currency of life is <vocab term="ATP" definition="Adenosine triphosphate; the universal energy currency of cells, consisting of adenosine attached to three phosphate groups; hydrolysis of the terminal phosphate releases ~7.3 kcal/mol of free energy.">ATP (adenosine triphosphate)</vocab>, which couples energy-releasing reactions (catabolism) to energy-requiring reactions (anabolism).

### ATP: The Universal Energy Currency

ATP consists of:
- Adenosine (adenine base + ribose sugar)
- Three phosphate groups (alpha, beta, gamma)

The key energy-releasing step:
$$ATP + H_2O \\rightarrow ADP + P_i \\quad \\Delta G = -7.3 \\text{ kcal/mol}$$

This hydrolysis is coupled to cellular work:
- **Mechanical work** - muscle contraction, ciliary movement
- **Chemical work** - biosynthesis of macromolecules
- **Transport work** - active transport against gradients

<vocab term="Energy Coupling" definition="The linking of exergonic (energy-releasing) reactions to endergonic (energy-requiring) reactions through shared intermediates like ATP.">Energy coupling</vocab> links ATP hydrolysis to otherwise unfavorable reactions.

### Free Energy and Thermodynamics

<vocab term="Free Energy (Delta G)" definition="The amount of energy available to do work; reactions with negative Delta G (exergonic) release usable energy; positive Delta G (endergonic) require energy input.">Gibbs free energy (Delta-G)</vocab> determines reaction spontaneity:

$$\\Delta G = \\Delta H - T\\Delta S$$

- **Delta-G negative** (exergonic): spontaneous, releases free energy (e.g., cellular respiration)
- **Delta-G positive** (endergonic): non-spontaneous, requires energy input (e.g., protein synthesis, active transport)
- **Delta-G = 0**: equilibrium; no net reaction

#### ATP as Energy Currency

ATP has a high phosphate-transfer potential because:
- Phosphate groups are negatively charged -> electrostatic repulsion
- Hydrolysis relieves this strain
- ADP and Pi have lower energy states (more stable)

### Catabolism vs. Anabolism

| Process | Type | Delta-G | Example | ATP Result |
|---|---|---|---|---|
| Glycolysis | Catabolic | Negative | Glucose -> pyruvate | 2 ATP net produced |
| TCA cycle | Catabolic | Negative | Acetyl-CoA -> CO2 | 2 ATP + NADH/FADH2 |
| Oxidative phosphorylation | Catabolic | Negative | O2 -> H2O | ~32 ATP |
| Protein synthesis | Anabolic | Positive | Amino acids -> protein | ATP consumed |
| Active transport | Anabolic | Positive | Ion pumping against gradient | ATP consumed |

### Redox Reactions: Electron Transfer

Cellular respiration and photosynthesis involve <vocab term="Redox Reactions" definition="Chemical reactions involving the transfer of electrons; oxidation loses electrons, reduction gains electrons (OIL RIG: Oxidation Is Loss, Reduction Is Gain).">redox reactions</vocab>:

- **Oxidation** = loss of electrons (and often H atoms); releases energy
- **Reduction** = gain of electrons; stores energy
- "OIL RIG" - Oxidation Is Loss, Reduction Is Gain

Electron carriers in cells:

| Carrier | Oxidized Form | Reduced Form | Function |
|---|---|---|---|
| Nicotinamide dinucleotide | NAD+ | NADH | Carries electrons in respiration |
| Flavin adenine dinucleotide | FAD | FADH2 | Carries electrons in respiration |
| Nicotinamide phosphate | NADP+ | NADPH | Carries electrons in photosynthesis |

### Enzymes and Energy

All metabolic reactions are catalyzed by enzymes. Enzymes:
- Lower activation energy (Ea) without changing Delta-G
- Cannot make a thermodynamically unfavorable reaction favorable
- Are regulated to balance energy supply and demand

#### ATP Synthase: The Most Important Enzyme

<vocab term="ATP Synthase" definition="The enzyme that synthesizes ATP from ADP and inorganic phosphate using the proton motive force generated by the electron transport chain; found in inner mitochondrial membrane and thylakoid membrane.">ATP synthase</vocab> (Complex V) in mitochondria couples proton flow to ATP synthesis:
- Protons flow through the F0 domain (proton channel) driven by proton motive force
- This drives rotation of the F1 domain, which catalyzes ATP synthesis
- Every 3 protons -> 1 ATP synthesized

### Energy Storage: Beyond ATP

Cells store energy in various forms:
- **ATP** - immediate use (seconds)
- **Creatine phosphate** - rapid ATP regeneration in muscles (seconds)
- **Glycogen** - glucose polymer; liver and muscle short-term storage (hours)
- **Triglycerides** - long-term energy storage in adipose tissue (days-weeks)

Energy density comparison: glucose = 4 kcal/g; fat = 9 kcal/g (fats store >2x the energy per gram)

### AP Exam Focus

- ATP hydrolysis: ATP -> ADP + Pi releases ~7.3 kcal/mol of free energy
- Exergonic reactions: Delta-G negative, spontaneous; endergonic: Delta-G positive, requires energy input
- Redox: OIL RIG; NAD+/NADH and FAD/FADH2 are electron carriers
- ATP synthase uses proton gradient (proton motive force) to synthesize ATP

## Photosynthesis

<div class="flex justify-center my-8">
<svg width="450" height="180" viewBox="0 0 450 180" class="max-w-full">
<rect x="20" y="15" width="410" height="150" rx="12" fill="rgba(34,197,94,0.02)" stroke="#22c55e" stroke-width="1.5" />
<g transform="translate(40, 30)">
<rect x="0" y="10" width="130" height="90" rx="8" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="1.5" />
<text x="65" y="35" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Light Reactions</text>
<text x="65" y="55" fill="#60a5fa" font-size="9" text-anchor="middle">H₂O ➔ O₂</text>
<text x="65" y="75" fill="#ffffff" font-size="9" text-anchor="middle">in Thylakoid</text>
</g>
<path d="M 180 50 L 250 50" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#photo-arrow)" />
<text x="215" y="42" fill="#f59e0b" font-size="8" font-weight="bold" text-anchor="middle">ATP & NADPH</text>
<path d="M 250 90 L 180 90" fill="none" stroke="#a1a1aa" stroke-width="1.5" marker-end="url(#photo-arrow)" />
<text x="215" y="105" fill="#a1a1aa" font-size="8" text-anchor="middle">ADP & NADP⁺</text>
<g transform="translate(270, 30)">
<circle cx="65" cy="55" r="45" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="3,3" />
<text x="65" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Calvin Cycle</text>
<text x="65" y="60" fill="#f59e0b" font-size="9" text-anchor="middle">CO₂ ➔ Sugar</text>
<text x="65" y="75" fill="#ffffff" font-size="9" text-anchor="middle">in Stroma</text>
</g>
<defs>
<marker id="photo-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Photosynthesis is the process that converts solar energy into chemical energy, driving the biosphere. It occurs in two stages: the light-dependent reactions and the Calvin cycle.

The overall summary equation is:

$$6CO_2 + 6H_2O + \\text{light energy} \\rightarrow C_6H_{12}O_6 + 6O_2$$

### Chloroplast Structure

Photosynthesis occurs in the chloroplast:
- **Thylakoids**: Membranous sacs stacked into grana; contain chlorophyll and photosystems (site of light reactions).
- **Stroma**: Fluid surrounding the thylakoids; contains enzymes for the Calvin cycle.

### The Light-Dependent Reactions

The light reactions convert solar energy to chemical energy (ATP and NADPH) in the thylakoid membrane:
1. **Light absorption**: Light excites electrons in chlorophyll within Photosystem II (PSII) and Photosystem I (PSI).
2. **Photolysis**: Water is split at PSII, releasing electrons, protons ($H^+$), and oxygen gas ($O_2$):
   $$2H_2O \\rightarrow 4H^+ + 4e^- + O_2$$
3. **Electron Transport Chain (ETC)**: Excited electrons flow from PSII down an ETC to PSI, generating a proton gradient across the thylakoid membrane.
4. **Chemiosmosis**: Protons diffuse back to the stroma through **ATP synthase**, driving the synthesis of ATP.
5. **NADPH production**: Electrons excited at PSI flow down a second ETC and reduce $NADP^+$ to NADPH via $NADP^+$ reductase.

### The Calvin Cycle

The Calvin cycle uses ATP and NADPH from the light reactions to convert $CO_2$ into sugars in the stroma:
1. **Carbon Fixation**: $CO_2$ is attached to RuBP by the enzyme **Rubisco**, forming 3-phosphoglycerate (3-PGA).
2. **Reduction**: 3-PGA is phosphorylated by ATP and reduced by NADPH to form G3P (a 3-carbon sugar).
3. **Regeneration**: RuBP is regenerated from G3P using ATP, allowing the cycle to continue.
- Two turns of the cycle (fixing 6 $CO_2$) are required to produce one net glucose molecule.

| Stage | Location | Inputs | Outputs |
|---|---|---|---|
| Light-Dependent | Thylakoid membrane | Light, $H_2O$, $NADP^+$, ADP | $O_2$, ATP, NADPH |
| Calvin Cycle | Stroma | $CO_2$, ATP, NADPH | G3P (sugar), $NADP^+$, ADP |

### AP Exam Focus

- Trace the flow of electrons through the light reactions (Water -> PSII -> ETC -> PSI -> NADPH)
- Explain how the proton gradient across the thylakoid membrane drives ATP synthesis
- Describe the coordination between the light-dependent reactions and the Calvin cycle
`,
        questions: [
          {
            id: "3.2.1",
            text: "Which of the following is the best example of energy coupling in a cell?",
            options: ["The synthesis of ATP using energy released during cellular respiration.","Using the exergonic hydrolysis of ATP to drive the endergonic transport of sodium ions across the cell membrane.","The passive diffusion of oxygen down its concentration gradient.","Breaking down glycogen into glucose during fasting."],
            correctIndex: 1,
            explanation: "Energy coupling pairs an exergonic reaction (ATP hydrolysis) with an endergonic reaction (pumping ions against their gradient) to make the overall process favorable.",
            unitId: 3
          },
          {
            id: "3.2.2",
            text: "Why is the hydrolysis of ATP an exergonic reaction?",
            options: ["It requires a large input of heat energy to break the ribose ring.","The products (ADP and inorganic phosphate) are more stable and have less free energy than the reactant (ATP).","It decreases the entropy of the surroundings.","It converts carbon dioxide into glucose."],
            correctIndex: 1,
            explanation: "ATP hydrolysis releases free energy (exergonic) because the repulsion of the three adjacent negative phosphate groups in ATP is relieved, resulting in more stable ADP and Pi products.",
            unitId: 3
          },
          {
            id: "3.2.3",
            text: "ATP hydrolysis coupled to active transport is an example of:",
            options: ["Feedback inhibition","Energy coupling: exergonic ATP hydrolysis drives endergonic work","Competitive inhibition of ATPase","Allosteric regulation"],
            correctIndex: 1,
            explanation: "Energy coupling: free energy released by exergonic ATP hydrolysis (delta-G negative) powers endergonic cellular processes.",
            unitId: 3
          },
          {
            id: "3.2.4",
            text: "In pathway A->B->C->D, product D inhibits the A->B enzyme. This is:",
            options: ["Substrate activation","Competitive inhibition","Feedback (end-product) inhibition","Allosteric activation"],
            correctIndex: 2,
            explanation: "Feedback inhibition: end product inhibits an early enzyme, preventing overproduction. A common metabolic regulatory mechanism.",
            unitId: 3
          },
          {
            id: "3.2.5",
            text: "Which is an ANABOLIC reaction?",
            options: ["Breaking glycogen into glucose during exercise","Oxidizing glucose to produce ATP","Synthesizing a polypeptide from amino acids","Hydrolyzing triglycerides into glycerol and fatty acids"],
            correctIndex: 2,
            explanation: "Anabolic reactions build larger molecules from smaller ones, requiring energy input. Polypeptide synthesis is anabolic (dehydration synthesis).",
            unitId: 3
          },
          {
            id: "3.2.6",
            text: "What is the direct purpose of the photolysis of water in the light-dependent reactions of photosynthesis?",
            options: ["To generate carbon dioxide for the Calvin Cycle","To provide replacement electrons for Photosystem II","To synthesize glucose directly in the thylakoid space","To act as the final electron acceptor of the ETC"],
            correctIndex: 1,
            explanation: "Photolysis splits water to yield protons, oxygen gas, and electrons. These electrons replace those excited and lost by the reaction center of Photosystem II.",
            unitId: 3
          },
          {
            id: "3.2.7",
            text: "Where is the electrochemical proton gradient established in the chloroplast during the light reactions?",
            options: ["Across the outer membrane into the cytoplasm","Inside the stroma of the chloroplast","In the thylakoid lumen (space) across the thylakoid membrane","Within the mitochondrial matrix"],
            correctIndex: 2,
            explanation: "As electrons move down the ETC, protons are actively pumped from the stroma into the thylakoid lumen, building a high concentration gradient inside.",
            unitId: 3
          },
          {
            id: "3.2.8",
            text: "What is the PRIMARY role of splitting water (photolysis) in light-dependent reactions?",
            options: ["Produce CO2 for Calvin cycle","Provide electrons to replace those lost by oxidized chlorophyll","Create proton gradient via substrate-level phosphorylation","Provide NADPH directly to Calvin cycle"],
            correctIndex: 1,
            explanation: "Photolysis (2H2O -> 4H+ + 4e- + O2) provides electrons to replace those lost by photoexcited chlorophyll.",
            unitId: 3
          },
          {
            id: "3.2.9",
            text: "During the Calvin cycle, CO2 is fixed by RuBisCO onto:",
            options: ["G3P","RuBP (ribulose-1,5-bisphosphate)","Oxaloacetate","Pyruvate"],
            correctIndex: 1,
            explanation: "RuBisCO catalyzes CO2 addition to RuBP (5C), producing an unstable 6C compound that splits into two 3-PGA molecules.",
            unitId: 3
          },
          {
            id: "3.2.10",
            text: "A plant is exposed to light with H2-18O (heavy oxygen water). The 18O would appear in:",
            options: ["CO2 released from the plant","O2 released from the plant","Glucose from the Calvin cycle","ATP made in the stroma"],
            correctIndex: 1,
            explanation: "O2 released during photosynthesis comes directly from photolysis of water. Heavy 18O in water leads to 18O2 gas.",
            unitId: 3
          }
        ]
      },
      {
        id: "3.3",
        title: "Cellular Respiration, Fermentation, and Fitness",
        description: "Harvest energy from glucose via glycolysis, the Krebs cycle, and oxidative phosphorylation. Analyze how molecular variation within cells provides a selective advantage.",
        youtubeId: "4Eo7JtRA7lg",
        article: `
# Cellular Respiration, Fermentation, and Fitness

## Cellular Respiration

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<rect x="10" y="45" width="110" height="60" rx="6" fill="rgba(255,255,255,0.02)" stroke="#a1a1aa" stroke-width="1.5" />
<text x="65" y="65" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Glycolysis</text>
<text x="65" y="80" fill="#a1a1aa" font-size="8" text-anchor="middle">Cytosol (2 ATP)</text>
<path d="M 120 75 L 150 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#resp-arrow)" />
<rect x="160" y="45" width="110" height="60" rx="6" fill="rgba(239,68,68,0.05)" stroke="#ef4444" stroke-width="1.5" />
<text x="215" y="65" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Krebs Cycle</text>
<text x="215" y="80" fill="#ef4444" font-size="8" text-anchor="middle">Matrix (2 ATP)</text>
<path d="M 270 75 L 300 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#resp-arrow)" />
<rect x="310" y="45" width="130" height="60" rx="6" fill="rgba(16,185,129,0.05)" stroke="#10b981" stroke-width="1.5" />
<text x="375" y="65" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ETC & Chemiosmosis</text>
<text x="375" y="80" fill="#10b981" font-size="8" text-anchor="middle">Cristae (~32 ATP)</text>
<defs>
<marker id="resp-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Cellular respiration is the process by which cells harvest chemical energy from organic molecules (like glucose) to produce ATP. The overall summary equation is:

$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\sim30\\text{-}32\\text{ ATP}$$

### Glycolysis

Glycolysis occurs in the cytoplasm and does not require oxygen (anaerobic):
- Glucose (6C) is broken down into two molecules of pyruvate (3C).
- Inputs: Glucose, 2 $NAD^+$, 2 ADP.
- Outputs: 2 Pyruvate, 2 NADH, 2 net ATP (produced via substrate-level phosphorylation).

### Pyruvate Oxidation and the Krebs Cycle

Under aerobic conditions, pyruvate enters the mitochondrial matrix:
- **Pyruvate Oxidation**: Pyruvate is converted to Acetyl-CoA (2C), releasing $CO_2$ and generating NADH.
- **Krebs (Citric Acid) Cycle**: Acetyl-CoA is oxidized. In two turns of the cycle (one per glucose):
  - Inputs: 2 Acetyl-CoA, 6 $NAD^+$, 2 FAD, 2 ADP.
  - Outputs: 4 $CO_2$, 6 NADH, 2 $FADH_2$, 2 ATP.

### Oxidative Phosphorylation

Oxidative phosphorylation occurs across the inner mitochondrial membrane and yields the most ATP:
1. **Electron Transport Chain (ETC)**: NADH and $FADH_2$ donate electrons to the ETC. As electrons flow down the chain to the final electron acceptor ($O_2$), energy is released to pump protons ($H^+$) from the matrix into the intermembrane space.
2. **Chemiosmosis**: The proton gradient creates a **proton-motive force**. Protons flow back into the matrix through **ATP synthase**, driving the phosphorylation of ADP to ATP.
3. **Water Formation**: $O_2$ accepts electrons and protons, forming water:
   $$O_2 + 4H^+ + 4e^- \\rightarrow 2H_2O$$

### Substrate-Level vs. Oxidative Phosphorylation

Energy is transferred to ATP through two distinct mechanisms:
- **Substrate-Level Phosphorylation**: Direct transfer of a phosphate group from an organic substrate to ADP by an enzyme (occurs in glycolysis and Krebs cycle; produces small ATP yield).
- **Oxidative Phosphorylation**: Indirect synthesis of ATP powered by the redox reactions of the ETC and chemiosmosis (occurs in mitochondria; generates ~90% of cellular ATP).

### Uncoupling Proteins and Thermogenesis

In some cells, protons can bypass ATP synthase and leak back into the matrix:
- **Uncoupling Protein 1 (UCP-1 / Thermogenin)**: Located in the inner membrane of brown adipose tissue.
- It provides a pathway for protons to flow back down their gradient without synthesizing ATP.
- The stored electrochemical energy is released entirely as **heat** instead of ATP.
- This process is essential for thermoregulation in hibernating mammals and newborn humans who cannot shiver.

| Feature | Substrate-Level Phosphorylation | Oxidative Phosphorylation |
|---|---|---|
| Membrane Required? | No (soluble enzymes) | Yes (inner mitochondrial membrane) |
| Oxygen Needed? | No | Yes (drives ETC) |
| Source of Energy | High-energy phosphate bond on substrate | Proton-motive force (electrochemical gradient) |
| Major Locations | Cytoplasm (glycolysis), Matrix (Krebs) | Inner mitochondrial membrane |

### Fermentation

In the absence of oxygen, cells undergo fermentation to regenerate $NAD^+$ so glycolysis can continue:
- **Lactic acid fermentation**: Pyruvate is reduced directly by NADH to form lactate (e.g., in human muscle cells).
- **Alcohol fermentation**: Pyruvate is converted to acetaldehyde and then reduced by NADH to form ethanol and $CO_2$ (e.g., in yeast).

### AP Exam Focus

- Explain the role of oxygen as the terminal electron acceptor in the ETC
- Contrast the ATP yields of substrate-level phosphorylation vs. oxidative phosphorylation
- Explain how decoupling oxidative phosphorylation (e.g., by uncoupling proteins) releases energy as heat instead of ATP (used in thermogenesis)

## Fitness

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<g transform="translate(10, 10)">
<text x="50" y="15" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Directional</text>
<line x1="10" y1="120" x2="110" y2="120" stroke="#a1a1aa" stroke-width="1" />
<path d="M 15 120 C 35 120, 45 40, 55 40 C 65 40, 75 120, 95 120" fill="none" stroke="#a1a1aa" stroke-width="1" stroke-dasharray="2,2" />
<path d="M 35 120 C 55 120, 65 40, 75 40 C 85 40, 95 120, 115 120" fill="none" stroke="#ef4444" stroke-width="2" />
</g>
<g transform="translate(140, 10)">
<text x="50" y="15" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Stabilizing</text>
<line x1="10" y1="120" x2="110" y2="120" stroke="#a1a1aa" stroke-width="1" />
<path d="M 15 120 C 35 120, 45 40, 55 40 C 65 40, 75 120, 95 120" fill="none" stroke="#a1a1aa" stroke-width="1" stroke-dasharray="2,2" />
<path d="M 25 120 C 45 120, 48 20, 55 20 C 62 20, 65 120, 85 120" fill="none" stroke="#10b981" stroke-width="2" />
</g>
<g transform="translate(270, 10)">
<text x="50" y="15" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Disruptive</text>
<line x1="10" y1="120" x2="110" y2="120" stroke="#a1a1aa" stroke-width="1" />
<path d="M 15 120 C 35 120, 45 40, 55 40 C 65 40, 75 120, 95 120" fill="none" stroke="#a1a1aa" stroke-width="1" stroke-dasharray="2,2" />
<path d="M 15 120 C 25 120, 30 50, 40 50 C 50 50, 60 120, 70 50 C 80 50, 85 120, 95 120" fill="none" stroke="#3b82f6" stroke-width="2" />
</g>
</svg>
</div>

In evolutionary biology, <vocab term="Fitness" definition="The relative reproductive success of an organism; a measure of how well an organism is adapted to its environment, quantified by the number of viable, fertile offspring it produces relative to others in the population.">fitness</vocab> is not about physical strength - it is about reproductive success. An organism is fit if it survives and reproduces successfully in its environment, passing its alleles to the next generation.

### Biological vs. Colloquial Fitness

| Common Meaning | Biological Meaning |
|---|---|
| Physical strength or endurance | Reproductive success relative to others |
| Cardiovascular health | Number of surviving, fertile offspring |
| Being "in shape" | How well adapted to current environment |

**Key principle**: A trait that increases survival but reduces reproduction decreases biological fitness. Fitness = passing genes to future generations.

### Relative Fitness

Fitness is always **relative** to other individuals in the same population:

$$w_i = \\frac{\\text{average offspring of genotype i}}{\\text{average offspring of most fit genotype}}$$

- **w = 1** - most fit genotype (reference)
- **w = 0.5** - produces half as many viable offspring as most fit
- **w = 0** - lethal; no offspring survive

### How Metabolism Relates to Fitness

Cellular energetics directly impacts fitness:
- Organisms that efficiently extract energy from food (efficient metabolism) have more energy for growth and reproduction
- Efficient oxidative phosphorylation produces more ATP per glucose
- Organisms with higher metabolic efficiency can:
  - Grow faster (more competitive for resources)
  - Reproduce more (more ATP for egg/sperm production and cell division)
  - Better survive food shortages

### Evolutionary Fitness and Natural Selection

<vocab term="Natural Selection" definition="The differential survival and reproduction of individuals with advantageous heritable traits; the primary mechanism of evolutionary change.">Natural selection</vocab> acts on **phenotype** but changes **allele frequencies** in populations. Traits that increase fitness become more common in each generation.

#### Modes of Selection

| Type | Description | Effect on Variation | Example |
|---|---|---|---|
| Directional | Favors one extreme phenotype | Decreases (shifts mean) | Antibiotic resistance |
| Stabilizing | Favors intermediate phenotype | Decreases (reduces spread) | Human birth weight |
| Disruptive | Favors both extremes | Increases (bimodal distribution) | Darwin's finch beak sizes |
| Sexual | Based on mate choice | Can increase extravagant traits | Peacock tail feathers |

#### Components of Fitness

Fitness can be broken into components:
1. **Survival** - must live long enough to reproduce
2. **Mating success** - ability to attract and secure mates
3. **Fecundity** - number of offspring produced
4. **Offspring viability** - proportion of offspring that survive to reproduce

### Trade-offs in Fitness

Many traits involve evolutionary trade-offs:

<vocab term="Life History Trade-offs" definition="Evolutionary compromises where resources devoted to one fitness component (e.g., reproduction) reduce resources available for another (e.g., survival); exemplified by the trade-off between offspring number and offspring quality.">Life history trade-offs</vocab> include:
- **Quantity vs. quality of offspring** - r-strategists (many small offspring) vs. K-strategists (few, well-cared-for offspring)
- **Current vs. future reproduction** - reproducing now reduces survival; waiting preserves future opportunities
- **Immune function vs. reproduction** - immune investment comes at metabolic cost
- **Growth vs. reproduction** - energy cannot be allocated to both simultaneously

### Inclusive Fitness and Altruism

<vocab term="Inclusive Fitness" definition="An organism's total fitness, including its own reproductive success plus the reproductive success it helps close relatives achieve, weighted by their genetic relatedness.">Inclusive fitness</vocab> (Hamilton's rule) explains altruistic behavior:

$$rB > C$$

Where r = genetic relatedness, B = benefit to recipient, C = cost to altruist

If the benefit to a related individual (weighted by relatedness) exceeds the cost, the altruistic behavior can evolve. This explains:
- Worker bees sacrificing reproduction to help sisters
- Ground squirrels warning relatives of predators (at risk to themselves)
- Parental care and resource investment in offspring

### Hardy-Weinberg Equilibrium: Measuring Fitness

The Hardy-Weinberg principle provides a null model - what allele frequencies would look like WITHOUT selection:

$$p^2 + 2pq + q^2 = 1 \\quad \\text{(genotype frequencies)}$$
$$p + q = 1 \\quad \\text{(allele frequencies)}$$

Conditions for Hardy-Weinberg equilibrium (no evolution):
1. No natural selection (equal fitness)
2. No mutations
3. No gene flow (migration)
4. No genetic drift (very large population)
5. Random mating

Departure from Hardy-Weinberg = evolution is occurring.

### AP Exam Focus

- Biological fitness = relative reproductive success, not physical strength
- Natural selection acts on phenotype, changes allele frequencies
- Three modes: directional (shifts mean), stabilizing (reduces variation), disruptive (creates bimodal)
- Hardy-Weinberg: departure from equilibrium indicates evolution is occurring
- Inclusive fitness explains altruism: rB > C (relatedness x benefit > cost)
`,
        questions: [
          {
            id: "3.3.1",
            text: "What is the primary function of oxygen in the process of aerobic cellular respiration?",
            options: ["To oxidize glucose directly in glycolysis","To serve as a source of carbon atoms for the Krebs Cycle","To act as the terminal electron acceptor in the Electron Transport Chain","To pump protons into the intermembrane space"],
            correctIndex: 2,
            explanation: "Oxygen is the terminal electron acceptor of the ETC. It accepts spent electrons and protons to form water, keeping the transport chain active.",
            unitId: 3
          },
          {
            id: "3.3.2",
            text: "In which region of the mitochondrion do electron transport chain proteins pump protons to establish the gradient?",
            options: ["The mitochondrial matrix","The outer membrane pores","The intermembrane space","The cytoplasm"],
            correctIndex: 2,
            explanation: "ETC proteins pump protons from the matrix into the intermembrane space, creating a high concentration of protons relative to the matrix.",
            unitId: 3
          },
          {
            id: "3.3.3",
            text: "What is the FINAL electron acceptor in the electron transport chain?",
            options: ["NAD+","CO2","Pyruvate","O2"],
            correctIndex: 3,
            explanation: "In aerobic respiration, O2 is the terminal electron acceptor. It combines with electrons and protons to form H2O.",
            unitId: 3
          },
          {
            id: "3.3.4",
            text: "ATP synthase using the proton gradient to make ATP is called:",
            options: ["Substrate-level phosphorylation","Chemiosmosis","Dehydration synthesis","Oxidative deamination"],
            correctIndex: 1,
            explanation: "Chemiosmosis: protons flow down their gradient through ATP synthase, driving ADP + Pi -> ATP. Produces the majority of aerobic ATP.",
            unitId: 3
          },
          {
            id: "3.3.5",
            text: "Cyanide blocks complex IV of the ETC. The MOST immediate consequence is:",
            options: ["Glycolysis immediately stops","Proton gradient collapses, halting ATP synthesis","Krebs cycle accelerates","Fermentation is permanently inhibited"],
            correctIndex: 1,
            explanation: "Blocking complex IV stops electron flow. Without electron flow, the proton gradient cannot be maintained and ATP synthase cannot function.",
            unitId: 3
          },
          {
            id: "3.3.6",
            text: "Why is having multiple types of chlorophyll pigments advantageous for a photosynthetic plant?",
            options: ["It allows the plant to synthesize different types of glucose molecules.","It increases the range of light wavelengths the plant can absorb to power the light reactions.","It prevents the plant from losing water via transpiration.","It allows the plant to run the Calvin Cycle without ATP."],
            correctIndex: 1,
            explanation: "Different pigments absorb different light wavelengths. Diverse pigments (chlorophyll a, chlorophyll b, carotenoids) expand the light absorption spectrum, increasing photosynthetic efficiency.",
            unitId: 3
          },
          {
            id: "3.3.7",
            text: "How does the higher oxygen affinity of fetal hemoglobin support the survival of a developing mammalian fetus?",
            options: ["It allows the fetus to survive in an entirely anaerobic environment.","It enables the fetal blood to extract oxygen across the placenta from the mother's lower-affinity hemoglobin.","It speeds up the rate of cellular respiration in fetal muscle tissues.","It prevents carbon dioxide from dissolving in fetal plasma."],
            correctIndex: 1,
            explanation: "Because fetal hemoglobin has a higher oxygen affinity, it can bind oxygen molecules released by the mother's adult hemoglobin, securing oxygen for fetal growth.",
            unitId: 3
          },
          {
            id: "3.3.8",
            text: "During fermentation, pyruvate is converted to lactate. The PRIMARY purpose is to:",
            options: ["Produce more ATP beyond glycolysis","Regenerate NAD+ so glycolysis can continue","Convert glucose to amino acids","Generate CO2"],
            correctIndex: 1,
            explanation: "Fermentation regenerates NAD+ from NADH. Without NAD+, glycolysis (requiring NAD+ as electron acceptor) cannot continue producing ATP anaerobically.",
            unitId: 3
          },
          {
            id: "3.3.9",
            text: "Chemosynthetic organisms obtain energy from:",
            options: ["Sunlight via chlorophyll","Chemical oxidation of inorganic compounds (H2S, NH3, Fe2+)","Consuming organic molecules","Radioactive decay"],
            correctIndex: 1,
            explanation: "Chemoautotrophs oxidize inorganic compounds as their energy source to fix CO2 into organic matter, without using light.",
            unitId: 3
          },
          {
            id: "3.3.10",
            text: "During one Krebs cycle turn, where do the 2 carbons from acetyl-CoA end up?",
            options: ["Converted to ethanol","Released as 2 CO2 molecules during oxidation steps","Left as part of oxaloacetate","Stored as glycogen"],
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
        title: "Cell Communication and Signal Transduction Pathways",
        description: "Study mechanisms of cellular signal reception, transduction cascades, and cellular responses. Learn how extracellular signals are recognized and converted into intracellular messages. Analyze details of signaling cascades, amplification, and second messengers. Evaluate how mutations or chemical inhibitors block or hyperactivate signaling.",
        youtubeId: "qYVPZl8-92c",
        article: `
# Cell Communication and Signal Transduction Pathways

## Cell Communication

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="0" y="60" width="450" height="25" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" stroke-width="1" />
<text x="35" y="50" fill="#60a5fa" font-size="9" font-weight="bold">Plasma Membrane</text>
<circle cx="80" cy="25" r="8" fill="#ef4444" />
<text x="80" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">L</text>
<path d="M 80 35 L 80 58" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
<rect x="65" y="50" width="30" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5" />
<text x="80" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">GPCR</text>
<circle cx="120" cy="85" r="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
<text x="120" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Gα</text>
<rect x="180" y="50" width="40" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" />
<text x="200" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">AC</text>
<path d="M 98 75 Q 110 75, 115 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<path d="M 132 80 Q 150 72, 175 72" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<circle cx="200" cy="130" r="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="200" y="133" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">cAMP</text>
<path d="M 200 98 L 200 112" fill="none" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<rect x="290" y="115" width="130" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="355" y="133" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Phosphorylation Cascade</text>
<path d="M 218 130 L 285 130" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<defs>
<marker id="sig-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Cells must constantly communicate to coordinate development, metabolism, and response to environmental changes. <vocab term="Cell Communication" definition="The process by which cells receive, process, and respond to signals from other cells or the environment; involves signal molecules (ligands), receptors, and intracellular signaling cascades.">Cell communication</vocab> involves signal molecules (ligands) binding to receptors, triggering intracellular responses.

### Types of Cell Communication by Distance

| Type | Distance | Mechanism | Examples |
|---|---|---|---|
| Direct contact | Same cell or adjacent | Gap junctions, cell-cell adhesion | Embryonic development, heart muscle coordination |
| Paracrine | Short distance (local) | Diffuses through extracellular fluid | Histamine in inflammation, growth factors |
| Endocrine (hormonal) | Long distance (blood) | Travels through circulatory system | Insulin, estrogen, testosterone |
| Synaptic (nervous) | Short gap (synapse) | Neurotransmitter release | Acetylcholine, dopamine, serotonin |
| Autocrine | Same cell | Cell signals itself | Some cancer cells, immune cells |

### The Three Stages of Cell Signaling

Signal transduction occurs in three stages:

#### 1. Reception
<vocab term="Receptor" definition="A protein (usually membrane-bound or intracellular) that specifically binds a signal molecule (ligand) and initiates an intracellular response.">Receptors</vocab> are complementary in shape to their specific ligand. Binding changes the receptor's conformation, initiating signaling.

**Types of receptors by location:**
- **Cell-surface receptors** - for water-soluble signals (peptide hormones, neurotransmitters)
- **Intracellular receptors** - for lipid-soluble signals (steroid hormones like estrogen, progesterone) that cross the plasma membrane

#### 2. Transduction
The signal is converted and amplified through a cascade of molecular changes (see Topic 4.2-4.5 for details).

#### 3. Response
The final cellular response: altered gene expression, enzyme activation, changes in metabolism, cell movement, cell division, or cell death.

### Types of Cell-Surface Receptors

| Receptor Type | Mechanism | First Messenger | Examples |
|---|---|---|---|
| G-protein coupled (GPCR) | Activates G-protein -> second messengers | Epinephrine, glucagon, many odorants | Beta-adrenergic receptor |
| Receptor tyrosine kinase (RTK) | Phosphorylates tyrosines; activates kinase cascade | Growth factors, insulin | EGFR, insulin receptor |
| Ligand-gated ion channels | Opens/closes ion channel | Neurotransmitters | Nicotinic ACh receptor, GABA receptor |

### Intracellular Receptors: Steroid Hormones

<vocab term="Steroid Hormones" definition="Lipid-soluble hormones (derived from cholesterol) that cross the plasma membrane and bind to intracellular receptors; hormone-receptor complexes act as transcription factors.">Steroid hormones</vocab> (estrogen, testosterone, cortisol, aldosterone) cross the lipid bilayer and bind receptors in the cytoplasm or nucleus. The hormone-receptor complex acts as a transcription factor, directly activating or repressing gene expression.

This is why steroid hormones have **direct, long-lasting effects** on gene expression, while peptide hormones (cannot enter cell) have faster but often shorter effects via second messengers.

### Signal Amplification

Cell signaling systems amplify signals enormously:
- 1 epinephrine molecule -> millions of glucose molecules released
- A few surface receptors -> thousands of intracellular second messengers
- Each step in the cascade can amplify the signal 10-1000 fold

### Evolution of Cell Communication

Cell signaling systems are highly conserved across evolution:
- Yeast mating signals use the same GPCR pathway as human cell signaling
- Growth factor receptors (RTKs) are found in all multicellular organisms
- cAMP second messenger system is universal among eukaryotes

This conservation suggests signaling machinery arose early in eukaryotic evolution and was maintained because of its fundamental importance.

### AP Exam Focus

- Three stages: reception -> transduction -> response
- GPCRs: ligand binds -> G-protein activates -> second messenger (cAMP or IP3/DAG)
- RTKs: ligand binds -> dimerization -> tyrosine autophosphorylation -> kinase cascade
- Steroid hormones: lipid-soluble, cross membrane, bind intracellular receptors, directly alter gene expression
- Signal amplification: each signaling step can multiply the signal many times

## Introduction to Signal Transduction

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="0" y="60" width="450" height="25" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" stroke-width="1" />
<text x="35" y="50" fill="#60a5fa" font-size="9" font-weight="bold">Plasma Membrane</text>
<circle cx="80" cy="25" r="8" fill="#ef4444" />
<text x="80" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">L</text>
<path d="M 80 35 L 80 58" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
<rect x="65" y="50" width="30" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5" />
<text x="80" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">GPCR</text>
<circle cx="120" cy="85" r="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
<text x="120" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Gα</text>
<rect x="180" y="50" width="40" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" />
<text x="200" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">AC</text>
<path d="M 98 75 Q 110 75, 115 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<path d="M 132 80 Q 150 72, 175 72" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<circle cx="200" cy="130" r="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="200" y="133" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">cAMP</text>
<path d="M 200 98 L 200 112" fill="none" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<rect x="290" y="115" width="130" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="355" y="133" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Phosphorylation Cascade</text>
<path d="M 218 130 L 285 130" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<defs>
<marker id="sig-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Signal Transduction" definition="The process by which a cell converts an extracellular signal (ligand binding to receptor) into an intracellular response through a cascade of molecular changes involving second messengers and protein modifications.">Signal transduction</vocab> converts extracellular signals into intracellular responses. The signal is often amplified many times through molecular cascades, allowing minute concentrations of hormones to produce large cellular effects.

### The Signal Transduction Cascade Concept

A cascade works like a molecular relay race:

1. **Ligand binds receptor** (reception) -> receptor changes shape
2. **Receptor activates relay molecule** (often G-protein or kinase)
3. **Second messenger formed** (cAMP, IP3, Ca2+)
4. **Protein kinases activated** (phosphorylation relay)
5. **Target proteins modified** -> cellular response

#### Amplification at Each Step

If each step activates 10 molecules:
- Step 1: 1 activated receptor
- Step 2: 10 activated G-proteins
- Step 3: 100 cAMP molecules
- Step 4: 1,000 activated protein kinase A molecules
- Step 5: 10,000 phosphorylated target proteins

**Result**: 1 hormone molecule -> 10,000+ molecular responses!

### G-Protein Coupled Receptors (GPCRs)

GPCRs are the largest family of cell-surface receptors (~800 in humans). They share a 7-transmembrane-helix structure.

#### GPCR Mechanism (Step by Step)

1. Ligand (first messenger) binds to GPCR -> receptor changes conformation
2. Receptor activates <vocab term="G-Protein" definition="A GTP-binding protein that relays signals from GPCRs to downstream effectors; active when GTP-bound, inactive when GDP-bound.">G-protein</vocab> (G-alpha subunit exchanges GDP for GTP -> G-alpha dissociates)
3. Activated G-alpha activates effector enzyme (e.g., adenylyl cyclase)
4. Adenylyl cyclase converts ATP to cAMP (second messenger)
5. cAMP activates <vocab term="Protein Kinase A (PKA)" definition="A serine/threonine kinase activated by cAMP; phosphorylates target proteins to modify their activity; a major downstream effector of GPCR/cAMP signaling.">Protein Kinase A (PKA)</vocab>
6. PKA phosphorylates target proteins -> cellular response
7. G-protein hydrolyzes GTP to GDP -> self-inactivates (built-in off switch)
8. Phosphodiesterase degrades cAMP -> signal terminated

#### Example: Epinephrine and Glycogen Breakdown

Epinephrine (adrenaline) triggers the "fight-or-flight" response:
- Epinephrine -> beta-adrenergic receptor -> Gs protein -> adenylyl cyclase -> cAMP
- cAMP -> PKA -> phosphorylates glycogen phosphorylase -> glycogen broken down to glucose-1-phosphate
- Muscle and liver cells release glucose for energy
- Net: ~10^8 glucose molecules released per epinephrine molecule!

### Receptor Tyrosine Kinases (RTKs)

RTKs have an extracellular ligand-binding domain and an intracellular kinase domain.

#### RTK Mechanism

1. Ligand (growth factor) binds to receptor monomer
2. Two monomers come together -> dimerization
3. Dimerization activates the kinase domain -> cross-phosphorylation of tyrosine residues
4. Phosphotyrosines act as docking sites for relay proteins (containing SH2 domains)
5. Ras (a G-protein) activated -> MAP kinase cascade
6. MAP kinase enters nucleus -> activates transcription factors -> gene expression changes

#### RTK Pathways and Cancer

Mutations that constitutively activate RTKs (or downstream Ras) drive many cancers:
- **Ras oncogene** - mutant Ras locked in GTP-bound (active) state; cannot hydrolyze GTP; found in ~30% of cancers
- **EGFR amplification** - overexpression of epidermal growth factor receptor in many cancers
- **HER2 amplification** - breast cancer; targeted by Herceptin (trastuzumab)

### Second Messengers

<vocab term="Second Messengers" definition="Small, rapidly diffusing intracellular signaling molecules produced in response to receptor activation; amplify and relay signals inside the cell (e.g., cAMP, IP3, DAG, Ca2+).">Second messengers</vocab> are small molecules that amplify and distribute signals inside the cell:

| Second Messenger | Produced by | Activates | Example Pathway |
|---|---|---|---|
| cAMP | Adenylyl cyclase (from ATP) | PKA | Beta-adrenergic, glucagon |
| IP3 | PLC (from PIP2) | Ca2+ release from ER | Angiotensin, thrombin |
| DAG | PLC (from PIP2) | PKC | Same as IP3 |
| Ca2+ | Released from ER or entered from outside | Calmodulin, PKC | Muscle contraction, secretion |
| cGMP | Guanylyl cyclase (from GTP) | PKG | Nitric oxide signaling (blood vessel dilation) |

### AP Exam Focus

- GPCR mechanism: ligand -> GPCR -> G-protein (GDP->GTP) -> adenylyl cyclase -> cAMP -> PKA -> response
- Signal amplification: each step multiplies the signal
- RTKs: dimerization -> cross-phosphorylation -> Ras -> MAP kinase cascade -> gene expression
- Mutant Ras (cannot hydrolyze GTP) causes constitutive signaling -> cancer
- cAMP is degraded by phosphodiesterase; Ca2+ pumped back out to terminate signal

## Signal Transduction Receptors

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="0" y="60" width="450" height="25" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" stroke-width="1" />
<text x="35" y="50" fill="#60a5fa" font-size="9" font-weight="bold">Plasma Membrane</text>
<circle cx="80" cy="25" r="8" fill="#ef4444" />
<text x="80" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">L</text>
<path d="M 80 35 L 80 58" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
<rect x="65" y="50" width="30" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5" />
<text x="80" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">GPCR</text>
<circle cx="120" cy="85" r="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
<text x="120" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Gα</text>
<rect x="180" y="50" width="40" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" />
<text x="200" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">AC</text>
<path d="M 98 75 Q 110 75, 115 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<path d="M 132 80 Q 150 72, 175 72" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<circle cx="200" cy="130" r="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="200" y="133" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">cAMP</text>
<path d="M 200 98 L 200 112" fill="none" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<rect x="290" y="115" width="130" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="355" y="133" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Phosphorylation Cascade</text>
<path d="M 218 130 L 285 130" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<defs>
<marker id="sig-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Cell-surface receptors are the gatekeepers of cell communication. Each receptor type has a distinct structure that determines which signals it can detect and how it initiates downstream signaling.

### Classification of Cell-Surface Receptors

Three major classes of cell-surface receptors in AP Biology:

#### 1. G-Protein Coupled Receptors (GPCRs)

<vocab term="G-Protein Coupled Receptors" definition="The largest family of cell-surface receptors, characterized by 7 transmembrane alpha helices; upon ligand binding, activate heterotrimeric G-proteins that regulate effector enzymes or ion channels.">GPCRs</vocab> are 7-transmembrane proteins found in virtually all eukaryotes. They:
- Respond to diverse ligands: hormones, neurotransmitters, odorants, light (rhodopsin)
- Signal through G-proteins (Gs, Gi, Gq families)
- Activate second messenger pathways (cAMP, IP3/DAG, Ca2+)

**Examples:**
- Epinephrine/beta-adrenergic receptor (fight-or-flight)
- Glucagon receptor (blood glucose regulation)
- Olfactory receptors (smell - ~400 types in humans)
- Rhodopsin (light detection in retina)
- Histamine receptors (allergic response)

#### 2. Receptor Tyrosine Kinases (RTKs)

<vocab term="Receptor Tyrosine Kinases" definition="Cell-surface receptors with an intrinsic kinase domain; ligand binding causes dimerization and cross-phosphorylation of tyrosine residues, activating downstream signaling cascades.">RTKs</vocab> are enzyme-linked receptors that directly catalyze protein phosphorylation. They:
- Respond to polypeptide growth factors and hormones
- Signal through direct kinase activity, Ras, and MAP kinase cascades
- Control cell growth, differentiation, and survival

**Examples:**
- EGF receptor (epidermal growth factor - cell proliferation)
- Insulin receptor (glucose uptake, metabolism)
- PDGF receptor (wound healing)
- VEGF receptor (blood vessel growth)
- FGF receptor (development, wound healing)

#### 3. Ligand-Gated Ion Channels

<vocab term="Ligand-Gated Ion Channels" definition="Receptor proteins that open or close an ion channel pore in response to binding a specific ligand (neurotransmitter); allow rapid (millisecond) ion flow producing changes in membrane potential.">Ligand-gated ion channels</vocab> combine receptor and channel functions:
- Ligand binding directly opens/closes the ion channel
- Extremely fast response (milliseconds - vs. seconds/minutes for GPCR/RTK)
- Critical in neurotransmission and sensory signaling

**Examples:**
- Nicotinic acetylcholine receptor (muscle contraction) - opens Na+ channel
- GABA-A receptor (inhibitory synapse) - opens Cl- channel
- Glycine receptor (inhibitory) - opens Cl- channel
- Ionotropic glutamate receptors (AMPA, NMDA) - open cation channels

### Comparison of Receptor Classes

| Feature | GPCR | RTK | Ligand-Gated Ion Channel |
|---|---|---|---|
| Structure | 7 TM helices | Single TM helix, kinase domain | Multi-subunit pore |
| Ligands | Many types (small molecules, peptides) | Growth factors, peptide hormones | Neurotransmitters |
| Speed of response | Seconds | Minutes-hours | Milliseconds |
| Primary effect | Second messenger production | Protein phosphorylation cascade | Ion flow, membrane potential change |
| Duration | Minutes to hours | Hours (gene expression) | Milliseconds |

### Intracellular Receptors

Not all receptors are at the cell surface. <vocab term="Intracellular Receptors" definition="Receptors located in the cytoplasm or nucleus that bind lipid-soluble signaling molecules (steroid and thyroid hormones); the receptor-ligand complex acts as a transcription factor.">Intracellular receptors</vocab> bind lipid-soluble signals that cross the plasma membrane:

**Ligands:** Steroid hormones (cortisol, estrogen, testosterone, aldosterone), thyroid hormones, vitamin D, retinoic acid (vitamin A derivative)

**Mechanism:**
1. Lipid-soluble hormone diffuses across plasma membrane
2. Binds to receptor in cytoplasm or nucleus
3. Hormone-receptor complex translocates to nucleus (or is already there)
4. Complex binds specific DNA sequences (hormone response elements)
5. Acts as transcription factor: activates or represses specific genes
6. Changes in gene expression -> altered protein synthesis -> cellular response

**Key difference**: Intracellular receptors directly alter gene transcription (slow, hours-days) vs. cell-surface receptors that activate pre-existing proteins (fast, seconds-minutes).

### Receptor Specificity and Ligand Binding

A receptor responds only to its specific ligand(s) because of complementary binding:
- The receptor's binding site has a specific 3D shape and charge distribution
- Only the correct ligand fits and causes the conformational change needed for signaling

**Dose-response relationship**: As ligand concentration increases, more receptors are occupied, and the cellular response increases until all receptors are saturated. This produces the same sigmoidal curve as enzyme saturation.

### AP Exam Focus

- Three major cell-surface receptor types: GPCR, RTK, ligand-gated ion channels
- GPCRs: largest family, 7 TM helices, use G-proteins and second messengers
- RTKs: enzyme-linked, dimerize upon ligand binding, phosphorylate tyrosines
- Ligand-gated ion channels: fastest response (milliseconds), directly open ion pores
- Intracellular receptors: bind steroid/thyroid hormones, act as transcription factors in nucleus

## Signal Integration

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="0" y="60" width="450" height="25" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" stroke-width="1" />
<text x="35" y="50" fill="#60a5fa" font-size="9" font-weight="bold">Plasma Membrane</text>
<circle cx="80" cy="25" r="8" fill="#ef4444" />
<text x="80" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">L</text>
<path d="M 80 35 L 80 58" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
<rect x="65" y="50" width="30" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5" />
<text x="80" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">GPCR</text>
<circle cx="120" cy="85" r="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
<text x="120" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Gα</text>
<rect x="180" y="50" width="40" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" />
<text x="200" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">AC</text>
<path d="M 98 75 Q 110 75, 115 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<path d="M 132 80 Q 150 72, 175 72" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<circle cx="200" cy="130" r="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="200" y="133" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">cAMP</text>
<path d="M 200 98 L 200 112" fill="none" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<rect x="290" y="115" width="130" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="355" y="133" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Phosphorylation Cascade</text>
<path d="M 218 130 L 285 130" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<defs>
<marker id="sig-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Cells rarely receive just one signal at a time. <vocab term="Signal Integration" definition="The process by which cells process multiple simultaneous signals to produce a coordinated response; convergence and divergence of signaling pathways allows sophisticated decision-making at the cellular level.">Signal integration</vocab> allows cells to weigh multiple inputs and produce appropriate, nuanced responses rather than simple on/off reactions.

### Why Integration Is Necessary

A cell must respond appropriately to complex environmental situations:
- Should a cell divide? Only if growth signals are present AND anti-growth signals are absent
- Should a cell survive or die? Integration of survival and death signals determines fate
- Should a neuron fire? Sum of excitatory and inhibitory signals determines threshold

### Convergence and Divergence of Signals

#### Signal Convergence
Multiple different extracellular signals activate the same intracellular pathway:
- Different GPCRs all activate adenylyl cyclase -> cAMP
- Multiple growth factors all activate Ras -> MAP kinase
- Result: different stimuli can produce similar cellular responses

#### Signal Divergence  
One extracellular signal activates multiple downstream pathways:
- Insulin binds RTK -> simultaneously activates PI3K pathway (glucose uptake) AND MAP kinase pathway (gene expression)
- Result: one signal can coordinate multiple cellular processes simultaneously

### Cross-Talk Between Pathways

Different signaling pathways interact:
- PKA (activated by cAMP/GPCR) can phosphorylate and inhibit the Raf kinase (part of MAP kinase/RTK pathway) - competitive pathways
- Ca2+/calmodulin can activate adenylyl cyclase (different isoforms) or inhibit it - context-dependent
- cAMP pathway can enhance or inhibit PI3K pathway depending on cell type

<vocab term="Signaling Crosstalk" definition="The interaction between different signaling pathways, where activation of one pathway modifies the activity of another; allows fine-tuned coordination of cellular responses.">Signaling crosstalk</vocab> creates a complex regulatory network rather than isolated linear pathways.

### Scaffold Proteins: Organizing Signal Complexes

<vocab term="Scaffold Proteins" definition="Proteins that simultaneously bind multiple components of a signaling cascade, increasing specificity and efficiency by holding pathway components in proximity.">Scaffold proteins</vocab> organize signaling complexes:
- Hold multiple kinases of a cascade in physical proximity
- Increase efficiency (no time for diffusion)
- Increase specificity (prevents cross-activation of wrong kinases)
- Example: KSR protein holds Raf, MEK, and ERK kinases together in MAP kinase cascade

### Positive and Negative Feedback in Signaling

**Positive feedback** amplifies a signal:
- Once a threshold is crossed, the signal drives itself stronger
- Creates switch-like "all-or-nothing" responses
- Example: action potential - once threshold is reached, Na+ influx causes more depolarization which opens more channels

**Negative feedback** limits signal duration and magnitude:
- Signal activates its own inhibitor
- Prevents overstimulation
- Example: cAMP activates PKA which phosphorylates and desensitizes the GPCR; phosphodiesterase degrades cAMP

### Receptor Desensitization and Down-Regulation

With prolonged signaling, cells reduce their response:
- **Receptor phosphorylation** - kinases phosphorylate active GPCRs, reducing their activity (desensitization)
- **Beta-arrestin binding** - beta-arrestin binds phosphorylated GPCR -> uncouples from G-protein -> receptor internalization
- **Receptor internalization** - receptor removed from surface by endocytosis (down-regulation)
- **Transcriptional down-regulation** - cell reduces synthesis of receptor mRNA

**Clinical relevance**: Chronic use of drugs (opioids, beta-agonists) causes receptor desensitization and tolerance, requiring higher doses for same effect.

### Integration at the Level of Gene Expression

Many signaling pathways ultimately regulate gene expression. The final integration occurs at the level of **transcription factor phosphorylation and activity**:
- MAP kinase phosphorylates transcription factors (Elk-1, c-fos) in nucleus
- PKA phosphorylates CREB (cAMP response element binding protein) in nucleus
- Multiple phosphorylated transcription factors at a promoter determine whether gene is expressed

This allows: Gene X expressed only when signal A AND signal B are both present (AND gate)
Or: Gene Y expressed when signal A OR signal B is present (OR gate)

| Logic Gate | Cellular Example | Molecular Basis |
|---|---|---|
| AND | Cell divides only with growth factor + ECM contact | Two transcription factors both needed at promoter |
| OR | Cell survives if glucose OR amino acids are available | Alternative promoter elements |
| NOT | Cell doesn't grow when tumor suppressor is active | Repressor transcription factor |

### AP Exam Focus

- Signal integration allows cells to make complex decisions based on multiple inputs
- Convergence: multiple signals -> one pathway; divergence: one signal -> multiple pathways
- Scaffold proteins increase specificity and efficiency of cascades
- Receptor desensitization limits overstimulation (relevant to drug tolerance/addiction)
- Final integration at transcription level: transcription factor combinations determine gene expression
`,
        questions: [
          {
            id: "4.1.1",
            text: "Which of the following represents the correct sequence of phases in a cell signaling pathway?",
            options: ["Transduction -> Response -> Reception","Reception -> Transduction -> Response","Amplification -> Reception -> Phosphorylation","Response -> Reception -> Transcription"],
            correctIndex: 1,
            explanation: "First, a ligand binds to a receptor (reception); next, intracellular molecules relay and amplify the signal (transduction); finally, the target cell executes a change (response).",
            unitId: 4
          },
          {
            id: "4.1.2",
            text: "Steroid hormones cross the plasma membrane but peptide hormones cannot because steroids are:",
            options: ["larger, requiring active transport","lipid-soluble (nonpolar), dissolving through the hydrophobic membrane","charged molecules using ion channels","too large for receptors"],
            correctIndex: 1,
            explanation: "Being lipid-derived, steroid hormones are hydrophobic and dissolve in the phospholipid bilayer. Peptide hormones are polar/charged and cannot cross.",
            unitId: 4
          },
          {
            id: "4.1.3",
            text: "Neurotransmitters signal only the adjacent postsynaptic cell. This is:",
            options: ["Endocrine (long-distance) signaling","Autocrine signaling","Paracrine signaling over a short distance","Direct contact via gap junctions"],
            correctIndex: 2,
            explanation: "Paracrine signaling: local chemical signals affect nearby cells. Neurotransmitters diffuse across the synaptic cleft (short distance) to the postsynaptic cell.",
            unitId: 4
          },
          {
            id: "4.1.4",
            text: "What is the immediate molecular event that occurs after a ligand binds to a G-protein coupled receptor (GPCR)?",
            options: ["The receptor is degraded by lysosomes.","The receptor undergoes a conformational change, allowing it to bind and activate an inactive G-protein.","The ligand enters the cell to act as a transcription factor.","The cell membrane immediately depolarizes."],
            correctIndex: 1,
            explanation: "Ligand binding induces a shape change in the GPCR, enabling it to interact with and activate a G-protein by causing it to swap GDP for GTP.",
            unitId: 4
          },
          {
            id: "4.1.5",
            text: "A drug permanently activates the G-protein alpha subunit (blocking GTP hydrolysis). The result is:",
            options: ["All signal transduction ceases","The signaling pathway is constitutively (continuously) active","cAMP is continuously degraded","Receptor is immediately internalized"],
            correctIndex: 1,
            explanation: "G-proteins turn off when alpha subunit hydrolyzes GTP to GDP. Blocking this hydrolysis keeps G-protein permanently active, continuously stimulating downstream signaling.",
            unitId: 4
          },
          {
            id: "4.1.6",
            text: "What is the evolutionary advantage of having a multi-step signal transduction cascade?",
            options: ["It decreases the rate of mutation in the target genes.","It allows for signal amplification and multiple points of pathway regulation.","It bypasses the need for membrane receptors.","It guarantees that the cell will undergo apoptosis."],
            correctIndex: 1,
            explanation: "Multi-step pathways allow a tiny extracellular signal to be amplified into a massive cellular response, and offer multiple checkpoints where the pathway can be controlled or turned off.",
            unitId: 4
          },
          {
            id: "4.1.7",
            text: "Protein kinases in signaling cascades function by:",
            options: ["Hydrolyzing cAMP to terminate signaling","Adding phosphate groups to proteins, activating or deactivating them","Removing phosphate groups from RTKs","Synthesizing second messengers like IP3"],
            correctIndex: 1,
            explanation: "Protein kinases transfer phosphate from ATP to serine, threonine, or tyrosine residues on target proteins, causing conformational changes that alter activity.",
            unitId: 4
          },
          {
            id: "4.1.8",
            text: "Receptor tyrosine kinases (RTKs) are activated by:",
            options: ["Binding lipid-soluble hormones inside the cell","Ligand binding causing dimerization and autophosphorylation of tyrosine residues","Opening an ion channel","Activation by a G-protein alpha subunit"],
            correctIndex: 1,
            explanation: "When growth factors bind RTKs, two receptor monomers dimerize and phosphorylate each other's tyrosines (autophosphorylation), activating downstream signaling.",
            unitId: 4
          },
          {
            id: "4.1.9",
            text: "Which of the following best describes the effect of a competitive antagonist drug that binds to and blocks a cell-surface hormone receptor?",
            options: ["It increases the concentration of hormones in the blood.","It prevents the hormone from binding, thereby blocking signal transduction and the cellular response.","It triggers a phosphorylation cascade without a ligand.","It causes the cell to secrete more hormones."],
            correctIndex: 1,
            explanation: "A receptor antagonist binds to the receptor without activating it, physically preventing the actual hormone from binding and halting the signal transduction pathway.",
            unitId: 4
          },
          {
            id: "4.1.10",
            text: "Receptor downregulation after prolonged hormone exposure reduces:",
            options: ["Number of hormone molecules in the bloodstream","Cell sensitivity to the hormone (desensitization)","Rate of hormone synthesis","Intracellular second messenger levels"],
            correctIndex: 1,
            explanation: "Fewer surface receptors mean the cell becomes less responsive to the hormone. This prevents overstimulation during prolonged exposure.",
            unitId: 4
          }
        ]
      },
      {
        id: "4.2",
        title: "Feedback Mechanisms and Homeostasis",
        description: "Differentiate between positive and negative feedback loops in biological regulation.",
        youtubeId: "Iz0Q9nTZCw4",
        article: `
# Feedback Mechanisms and Homeostasis

## Feedback Mechanisms

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="0" y="60" width="450" height="25" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" stroke-width="1" />
<text x="35" y="50" fill="#60a5fa" font-size="9" font-weight="bold">Plasma Membrane</text>
<circle cx="80" cy="25" r="8" fill="#ef4444" />
<text x="80" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">L</text>
<path d="M 80 35 L 80 58" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
<rect x="65" y="50" width="30" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5" />
<text x="80" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">GPCR</text>
<circle cx="120" cy="85" r="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
<text x="120" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Gα</text>
<rect x="180" y="50" width="40" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" />
<text x="200" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">AC</text>
<path d="M 98 75 Q 110 75, 115 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<path d="M 132 80 Q 150 72, 175 72" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<circle cx="200" cy="130" r="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="200" y="133" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">cAMP</text>
<path d="M 200 98 L 200 112" fill="none" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<rect x="290" y="115" width="130" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="355" y="133" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Phosphorylation Cascade</text>
<path d="M 218 130 L 285 130" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<defs>
<marker id="sig-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Feedback Mechanisms" definition="Regulatory processes in which the output of a system affects the input; negative feedback maintains homeostasis by reversing deviations, while positive feedback amplifies responses toward a new state.">Feedback mechanisms</vocab> are fundamental to biological regulation, allowing organisms to maintain homeostasis and coordinate complex processes like the cell cycle.

### Negative Feedback: Maintaining Homeostasis

<vocab term="Negative Feedback" definition="A regulatory mechanism where the output of a process inhibits the process itself, maintaining a relatively constant set point; the most common homeostatic mechanism.">Negative feedback</vocab> is the predominant homeostatic mechanism in biology. The response reverses the original stimulus.

#### Classic Examples of Negative Feedback

**Blood glucose regulation:**
1. Blood glucose rises after a meal
2. Pancreatic beta cells detect high glucose -> secrete insulin
3. Insulin promotes glucose uptake by cells (GLUT4 insertion) and glycogen synthesis
4. Blood glucose falls back toward set point (~90 mg/dL)
5. Low glucose -> insulin secretion stops; glucagon secretion begins
6. Glucagon promotes glycogen breakdown and gluconeogenesis -> glucose rises back to set point

**Thyroid hormone regulation (HPT axis):**
1. Hypothalamus secretes TRH (thyrotropin-releasing hormone)
2. TRH -> pituitary secretes TSH (thyroid-stimulating hormone)
3. TSH -> thyroid gland secretes T3/T4 (thyroid hormones)
4. High T3/T4 -> **negative feedback** on hypothalamus and pituitary
5. TRH and TSH secretion decrease -> T3/T4 falls back to set point

**Key principle**: Negative feedback loops have three components:
1. **Receptor/sensor** - detects deviation from set point
2. **Control center** - processes information, determines response
3. **Effector** - carries out the corrective response

### Positive Feedback: Amplifying Responses

<vocab term="Positive Feedback" definition="A regulatory mechanism where the output of a process amplifies the original stimulus, driving the system progressively further from the starting point; used for rapid, decisive responses.">Positive feedback</vocab> amplifies the original signal. Less common than negative feedback; used when a threshold must be crossed rapidly.

#### Examples of Positive Feedback

**Childbirth (parturition):**
1. Baby's head presses on cervix -> stretching stimulates oxytocin release
2. Oxytocin -> uterine contractions
3. Contractions push baby harder -> more stretching -> more oxytocin -> stronger contractions
4. Positive feedback cycle continues until baby is born
5. Once stimulus (cervical pressure) is removed, cycle stops automatically

**Blood clotting:**
1. Vessel injury -> platelet activation
2. Activated platelets release chemicals that activate more platelets
3. Clot forms rapidly (positive feedback ensures complete clot formation)
4. Clot seals wound -> stimulus removed -> clotting terminates

**Action potential:**
1. Membrane depolarization opens a few voltage-gated Na+ channels
2. Na+ influx depolarizes membrane further
3. More Na+ channels open -> more depolarization (positive feedback)
4. Rapid, all-or-nothing spike reaches ~+30 mV
5. Na+ channels inactivate + K+ channels open -> repolarization (terminates the positive feedback)

### Feedback in the Cell Cycle

The <vocab term="Cell Cycle Checkpoints" definition="Quality control mechanisms in the cell cycle where specific conditions must be met before the cycle progresses; G1, G2, and M checkpoints ensure DNA integrity and proper development.">cell cycle checkpoints</vocab> use feedback loops:

| Checkpoint | Location | What Is Checked | Key Proteins |
|---|---|---|---|
| G1 checkpoint | End of G1 | Cell size, DNA damage, growth signals | p53, Rb, Cyclin D/CDK4 |
| G2 checkpoint | End of G2 | DNA replication complete, no damage | p53, Cyclin B/CDK1 |
| Spindle Assembly Checkpoint | During M phase | All chromosomes attached to spindle | APC/C, securin, separase |

**p53 - the guardian of the genome:**
- p53 is a transcription factor activated by DNA damage
- Activates p21 (CDK inhibitor) -> halts cell cycle at G1 checkpoint
- If DNA repair fails, p53 activates apoptosis genes
- p53 is mutated in ~50% of all human cancers (removing this feedback stops tumor suppression)

### Hormone Feedback Systems

Feedback is critical in endocrine regulation:

| System | Hormone | Feedback Type | Disease When Disrupted |
|---|---|---|---|
| Blood glucose | Insulin/glucagon | Negative | Diabetes mellitus (Type 1 and 2) |
| Thyroid hormones | T3/T4 -> TSH | Negative | Hypothyroidism, hyperthyroidism |
| Cortisol (stress) | Cortisol -> ACTH | Negative | Cushing's disease, Addison's disease |
| Reproductive cycle | Estrogen -> LH | Negative (mostly) + Positive (mid-cycle LH surge) | Polycystic ovary syndrome |
| Water balance | ADH (vasopressin) | Negative | Diabetes insipidus |

### Allosteric Feedback Inhibition

At the biochemical level, <vocab term="Feedback Inhibition" definition="A form of negative feedback where the end product of a metabolic pathway allosterically inhibits an early enzyme in the pathway, preventing overproduction of the product.">feedback inhibition</vocab> of metabolic enzymes prevents overproduction:

Pathway: A -> B -> C -> D -> E (final product)

When E accumulates, E binds allosterically to the first enzyme (A -> B step) and inhibits it. This immediately shuts down the pathway. When E is consumed, the enzyme is no longer inhibited, and production resumes.

Example: Isoleucine synthesis - isoleucine inhibits threonine deaminase (first enzyme of the pathway)

### AP Exam Focus

- Negative feedback: most common homeostatic mechanism; response reverses the stimulus
- Positive feedback: amplifies response; used for decisive, threshold-crossing events (childbirth, action potentials, clotting)
- Cell cycle checkpoints: G1, G2, M; p53 is tumor suppressor activated by DNA damage
- Feedback inhibition (biochemical): end product inhibits allosterically an early pathway enzyme
`,
        questions: [
          {
            id: "4.2.1",
            text: "Which of the following is a classic example of a negative feedback loop?",
            options: ["Uterine contractions during childbirth driven by oxytocin release","Ethylene gas release stimulating fruit ripening across an orchard","The regulation of blood glucose levels by insulin and glucagon","Platelet accumulation forming a blood clot"],
            correctIndex: 2,
            explanation: "Blood glucose regulation is negative feedback because insulin and glucagon act to counteract deviations from the blood sugar set point, restoring homeostasis.",
            unitId: 4
          },
          {
            id: "4.2.2",
            text: "How does a positive feedback loop differ from a negative feedback loop?",
            options: ["Positive feedback maintains a variable at a rigid set point.","Positive feedback amplifies the initial change, driving the system further from its baseline until a final event is reached.","Negative feedback requires no receptors or sensors.","Only positive feedback is used to regulate body temperature."],
            correctIndex: 1,
            explanation: "Positive feedback amplifies a stimulus, moving the parameter further from the original state (like increasing contractions), whereas negative feedback reverses deviations to maintain stability.",
            unitId: 4
          },
          {
            id: "4.2.3",
            text: "Blood clotting involves positive feedback. How does this loop ultimately stop?",
            options: ["Negative feedback from platelets inhibits the cascade","The positive feedback continues indefinitely","The clot seals the wound, removing the stimulus for clotting","Clotting factors are replenished too slowly"],
            correctIndex: 2,
            explanation: "Positive feedback amplifies until the stimulus is removed. Once the wound is sealed and tissue repaired, the clotting stimulus disappears, stopping the cascade.",
            unitId: 4
          },
          {
            id: "4.2.4",
            text: "High blood glucose triggers insulin release, which lowers glucose. This is:",
            options: ["Positive feedback amplifying the stimulus","Homeostatic negative feedback returning glucose toward set point","Autocrine signaling within pancreatic cells","Receptor downregulation in liver cells"],
            correctIndex: 1,
            explanation: "Negative feedback systems oppose the original stimulus to maintain homeostasis. Insulin reduces blood glucose back toward the set point.",
            unitId: 4
          },
          {
            id: "4.2.5",
            text: "In pathway A->B->C->D, product D accumulates and inhibits the A->B enzyme. The result is:",
            options: ["D production accelerates because D activates the pathway","D production slows as the inhibited enzyme reduces pathway flux","The pathway shuts down permanently","The enzyme becomes more active in the presence of D"],
            correctIndex: 1,
            explanation: "Feedback inhibition: when D accumulates, it inhibits early enzyme activity, slowing D production. When D is consumed, inhibition is relieved - preventing overproduction.",
            unitId: 4
          },
          {
            id: "4.2.6",
            text: "Which of the following physiological processes is governed by a positive feedback loop?",
            options: ["Thermoregulation via sweating and vasodilation","Blood glucose regulation via insulin release","Oxytocin release leading to uterine contractions during childbirth","Osmoregulation via antidiuretic hormone (ADH) secretion"],
            correctIndex: 2,
            explanation: "Uterine contractions trigger the release of oxytocin, which stimulates further contractions in an amplifying loop until childbirth is complete.",
            unitId: 4
          },
          {
            id: "4.2.7",
            text: "How does the body maintain homeostasis in response to a drop in external temperature via negative feedback?",
            options: ["It initiates sweating and vasodilation to dump heat.","It triggers shivering and vasoconstriction to conserve and generate heat.","It slows down metabolic rate to conserve cellular energy.","It releases glucagon to break down fat reserves."],
            correctIndex: 1,
            explanation: "Shivering generates metabolic heat and vasoconstriction reduces blood flow to the skin, buffering body temperature back to the set point.",
            unitId: 4
          },
          {
            id: "4.2.8",
            text: "In blood glucose regulation, what is the action of insulin released by beta cells in response to high blood sugar?",
            options: ["It signals liver cells to release stored glycogen into the bloodstream.","It signals body cells and the liver to take up glucose, lowering blood glucose levels.","It stimulates glucagon production in the liver.","It triggers adrenaline release to speed up respiration."],
            correctIndex: 1,
            explanation: "Insulin promotes the uptake of glucose by somatic cells and the conversion of glucose into glycogen in the liver, bringing blood sugar down.",
            unitId: 4
          },
          {
            id: "4.2.9",
            text: "What is the primary characteristic of a negative feedback mechanism in biological systems?",
            options: ["It amplifies deviations from a set point, driving the system to an extreme.","It shuts down the system entirely when a set point is reached.","It counters deviations from a set point, bringing the variable back toward the normal range.","It operates only under highly stressful environmental conditions."],
            correctIndex: 2,
            explanation: "Negative feedback acts to reverse or dampen a stimulus, returning the variable (like body temperature or pH) back to its set point.",
            unitId: 4
          },
          {
            id: "4.2.10",
            text: "Which hormone is secreted by the pancreas when blood glucose levels fall below the homeostatic set point?",
            options: ["Insulin","Thyroxine","Glucagon","Epinephrine"],
            correctIndex: 2,
            explanation: "Alpha cells of the pancreas secrete glucagon, which signals the liver to break down glycogen into glucose and release it into the blood.",
            unitId: 4
          }
        ]
      },
      {
        id: "4.3",
        title: "Cell Cycle, Mitosis, and Regulation",
        description: "Explore the eukaryotic cell cycle, mitosis, and cyclin-dependent cell cycle regulation. Analyze checkpoints, cyclins, CDKs, and the molecular basis of cancer.",
        youtubeId: "L0k-enzoeOM",
        article: `
# Cell Cycle, Mitosis, and Regulation

## Cell Cycle

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<g transform="translate(100, 30)">
<path d="M 20 20 L 40 80 M 40 20 L 20 80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Maternal</text>
</g>
<g transform="translate(130, 30)">
<line x1="20" y1="20" x2="40" y2="80" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" />
<line x1="40" y1="20" x2="20" y2="80" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Paternal</text>
</g>
<text x="200" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Crossing Over (Prophase I)</text>
</svg>
</div>

The cell cycle is the ordered sequence of events by which a cell duplicates its genome and divides into two daughter cells. It is divided into Interphase and the Mitotic (M) phase.

### Interphase (~90% of cycle time)

Interphase is the growth and preparation phase:
- **G1 phase (First Gap)**: Cell grows, synthesizes proteins, and duplicates organelles.
- **S phase (Synthesis)**: DNA replication occurs. Each chromosome is duplicated to form two identical **sister chromatids** joined at the **centromere**.
- **G2 phase (Second Gap)**: Further growth and final preparation for cell division.

### Mitosis: Nuclear Division

Mitosis is divided into five distinct stages:
1. **Prophase**: Chromatin condenses into visible chromosomes. The mitotic spindle begins to form.
2. **Prometaphase**: The nuclear envelope breaks down. Spindle microtubules attach to kinetochores on chromosomes.
3. **Metaphase**: Chromosomes align along the **metaphase plate** in the center of the cell.
4. **Anaphase**: Sister chromatids are separated by spindle fibers and pulled to opposite poles of the cell.
5. **Telophase**: Nuclear envelopes reform around the separated sets of chromosomes, and chromosomes decondense.

### Cytokinesis: Cytoplasmic Division

Cytokinesis divides the cytoplasm, forming two distinct cells:
- **Animal cells**: A contractile ring of actin and myosin filaments pinches the cell, forming a **cleavage furrow**.
- **Plant cells**: Vesicles from the Golgi complex fuse in the middle of the cell, forming a **cell plate** that eventually develops into a new cell wall.

### Regulation and Checkpoints

The cell cycle is regulated by internal checkpoints that monitor progress:
- **G1 Checkpoint (Restriction point)**: Assesses cell size, nutrients, DNA damage, and growth factors. Cells that fail this checkpoint exit the cycle and enter a non-dividing **G0 phase** (e.g., mature neurons).
- **G2 Checkpoint**: Verifies that DNA has replicated completely and without errors before entering mitosis.
- **M Checkpoint (Spindle checkpoint)**: Ensures all chromosomes are attached to spindle fibers at metaphase before anaphase begins.

### AP Exam Focus

- Describe the movement of chromosomes and the ploidy of cells at each stage of the cell cycle
- Contrast cytokinesis in animal vs. plant cells
- Predict the consequences of checkpoint failure (e.g., uncontrolled cell division leading to cancer)

## Apoptosis

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<path d="M 20 100 L 180 100 L 300 40 L 420 40" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 20 115 L 180 115 L 300 175 L 420 175" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 380 50 L 190 95" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="280" y="65" fill="#22c55e" font-size="9" font-weight="bold">Leading Strand (➔ 5' to 3')</text>
<path d="M 230 145 L 195 125" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<path d="M 285 170 L 250 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="290" y="145" fill="#ef4444" font-size="9" font-weight="bold">Okazaki Fragments (Lagging)</text>
<text x="350" y="25" fill="#60a5fa" font-size="8" font-weight="bold">Template 3'</text>
<text x="350" y="190" fill="#60a5fa" font-size="8" font-weight="bold">Template 5'</text>
<defs>
<marker id="rep-fork-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Apoptosis" definition="Programmed cell death; an active, genetically regulated process by which a cell destroys itself in an orderly manner without triggering inflammation; essential for development, tissue homeostasis, and immune function.">Apoptosis</vocab> is the cell's built-in suicide program. Unlike necrosis (accidental, chaotic cell death), apoptosis is a controlled, energy-requiring process that benefits the organism.

### Why Cells Commit Apoptosis

Apoptosis serves critical biological functions:

| Function | Example |
|---|---|
| Development and morphogenesis | Removal of interdigital webbing (fingers separate) |
| Removing excess neurons | ~50% of neurons die during brain development; only those that make proper connections survive |
| Eliminating auto-reactive immune cells | T cells that react to self-antigens are deleted in thymus |
| Removing virus-infected cells | Infected cells undergo apoptosis before virus replicates |
| Removing pre-cancerous cells | DNA damage triggers p53 -> apoptosis |
| Removing cells after immune response | Effector T and B cells die after infection is cleared |

### The Two Pathways of Apoptosis

#### Intrinsic Pathway (Mitochondrial)
Triggered by internal signals: DNA damage, oxidative stress, growth factor withdrawal:
1. Pro-apoptotic proteins (BAX, BAK) in mitochondrial outer membrane form pores
2. Cytochrome c released from mitochondria into cytoplasm
3. Cytochrome c + Apaf-1 form the **apoptosome**
4. Apoptosome activates procaspase-9 -> caspase-9
5. Caspase-9 activates executioner caspases (caspase-3, -7)
6. Caspase-3 cleaves hundreds of cellular proteins -> cell dismantled

**Anti-apoptotic proteins** (BCL-2, BCL-XL) prevent cytochrome c release by blocking BAX/BAK:
- BCL-2 is overexpressed in many cancers (prevents apoptosis of cancer cells)
- BCL-2 inhibitors (venetoclax) are cancer drugs that restore apoptosis in cancer cells

#### Extrinsic Pathway (Death Receptor)
Triggered by external death signals:
1. Death ligand (FasL, TRAIL, TNF) binds death receptor (Fas, DR5, TNFR)
2. Receptor trimerizes -> recruits adapter proteins (FADD)
3. Adapter proteins activate procaspase-8 -> caspase-8
4. Caspase-8 activates executioner caspases (caspase-3, -7)
5. Caspase-3 -> cell death

Both pathways converge on **executioner caspases** (primarily caspase-3).

### The Caspase Cascade

<vocab term="Caspases" definition="Cysteine-aspartic proteases that execute apoptosis; initiator caspases (8, 9) activate executioner caspases (3, 7), which cleave hundreds of cellular proteins to dismantle the cell.">Caspases</vocab> (cysteine-aspartate proteases) are the molecular executioners:

| Caspase Type | Caspases | Function |
|---|---|---|
| Initiator | Caspase 8, 9 | Activated by death pathways; activate executioner caspases |
| Executioner | Caspase 3, 6, 7 | Directly cleave cellular proteins; cause cell death |

Executioner caspase-3 cleaves:
- **ICAD** (inhibitor of caspase-activated DNase) -> DNA fragmentation (180 bp "ladder")
- **Cytoskeletal proteins** -> cell shrinkage and blebbing
- **Nuclear lamins** -> nuclear condensation
- **Other caspases** -> amplification

### Morphological Features of Apoptosis

Apoptotic cells show characteristic changes:
- Cell shrinkage and blebbing (membrane bubbles)
- Nuclear condensation and fragmentation
- DNA fragmentation into 180 bp multiples ("DNA ladder" on gel)
- Phosphatidylserine flipped to outer membrane (eat-me signal)
- Phagocytes engulf apoptotic bodies before contents are released

No inflammation occurs because the cell is packaged into apoptotic bodies before they rupture.

### Necrosis vs. Apoptosis

| Feature | Apoptosis | Necrosis |
|---|---|---|
| Cause | Programmed (internal or external signal) | Accidental (toxin, ischemia, trauma) |
| Energy | Requires ATP | Passive |
| Cell volume | Decreases (shrinks) | Increases (swells and bursts) |
| Inflammation | No (anti-inflammatory signals sent) | Yes (cellular contents released) |
| DNA | Fragmented in 180 bp ladder | Random degradation |
| Outcome | Apoptotic bodies phagocytosed cleanly | Cell lysis, inflammation |

### Apoptosis and Disease

| Disease | Apoptosis Connection |
|---|---|
| Cancer | Too little apoptosis; cancer cells avoid programmed death (BCL-2 overexpression, p53 mutation) |
| Neurodegenerative diseases | Too much apoptosis; neurons die inappropriately (Alzheimer, Parkinson) |
| Autoimmune disease | Failure of apoptosis in self-reactive T cells |
| HIV/AIDS | Virus induces apoptosis of CD4+ T helper cells |
| Ischemia-reperfusion injury | Oxygen deprivation triggers inappropriate apoptosis |

### AP Exam Focus

- Apoptosis is programmed, orderly cell death requiring ATP (not same as necrosis)
- Two pathways: intrinsic (mitochondria, cytochrome c, BAX) and extrinsic (death receptors, FasL)
- Both converge on caspase-3 (executioner caspase)
- BCL-2 family: pro-apoptotic (BAX) vs. anti-apoptotic (BCL-2, BCL-XL)
- p53 activates apoptosis in response to DNA damage; mutated in ~50% of cancers
- Development: apoptosis is essential (webbing removal, neuron pruning, T cell selection)
`,
        questions: [
          {
            id: "4.3.1",
            text: "During which phase of the cell cycle is DNA replicated?",
            options: ["G1 Phase","S Phase","G2 Phase","Prophase"],
            correctIndex: 1,
            explanation: "The Synthesis (S) phase is the specific window during interphase where the genome is replicated.",
            unitId: 4
          },
          {
            id: "4.3.2",
            text: "What is the biological consequence if a cell fails to satisfy the spindle checkpoint during mitosis?",
            options: ["DNA will duplicate a second time.","Sister chromatids will separate unevenly, leading to aneuploid daughter cells.","The cell will immediately enter the G0 state.","Cytokinesis will proceed before mitosis is finished."],
            correctIndex: 1,
            explanation: "The spindle checkpoint ensures chromosomes are aligned on the metaphase plate and attached to spindles. Failure leads to unequal chromosome distribution (nondisjunction).",
            unitId: 4
          },
          {
            id: "4.3.3",
            text: "DNA replication occurs during which specific phase of the cell cycle?",
            options: ["G1 phase","S (Synthesis) phase of interphase","G2 phase","M (Mitotic) phase"],
            correctIndex: 1,
            explanation: "The S phase (synthesis phase) of interphase is when the cell duplicates its entire genome in preparation for division.",
            unitId: 4
          },
          {
            id: "4.3.4",
            text: "A diploid human cell (2n=46) has completed S phase. How many total DNA molecules does it contain?",
            options: ["23","46","92","184"],
            correctIndex: 2,
            explanation: "Before S phase: 46 chromosomes, each = 1 DNA molecule. After S phase: each chromosome = 2 sister chromatids. So 46 x 2 = 92 DNA molecules.",
            unitId: 4
          },
          {
            id: "4.3.5",
            text: "Which event marks the transition from G2 phase to mitosis?",
            options: ["Completion of DNA replication","Activation of the cyclin B-CDK1 complex (MPF)","Chromosome decondensation","Formation of the spindle checkpoint"],
            correctIndex: 1,
            explanation: "The cyclin B-CDK1 complex (MPF) drives entry into mitosis. When cyclin B accumulates in G2 and binds CDK1, the complex phosphorylates proteins needed for mitosis.",
            unitId: 4
          },
          {
            id: "4.3.6",
            text: "Which of the following best describes the relationship between cyclins and CDKs?",
            options: ["CDK concentrations fluctuate, while cyclin levels remain constant.","Cyclins bind to and activate CDKs, which then phosphorylate target proteins to advance the cell cycle.","CDKs degrade cyclins to prevent the cell from entering interphase.","Cyclins are lipids that block CDK activity."],
            correctIndex: 1,
            explanation: "CDK concentrations are stable, but they must bind to fluctuating cyclin proteins to form an active complex that phosphorylates target proteins to advance the cell cycle.",
            unitId: 4
          },
          {
            id: "4.3.7",
            text: "What type of gene codes for proteins that normally act to prevent cell division if DNA damage is detected?",
            options: ["Oncogenes","Proto-oncogenes","Tumor suppressor genes","Ribosomal genes"],
            correctIndex: 2,
            explanation: "Tumor suppressor genes (like p53) code for proteins that halt the cell cycle or trigger DNA repair/apoptosis if errors or damages are detected.",
            unitId: 4
          },
          {
            id: "4.3.8",
            text: "The p53 tumor suppressor protein (guardian of the genome) responds to DNA damage by:",
            options: ["Stimulating cell division by activating cyclins","Halting the cell cycle at G1 and initiating DNA repair or apoptosis","Producing growth factors for tissue repair","Activating telomerase"],
            correctIndex: 1,
            explanation: "p53 is activated by DNA damage. It halts the cell cycle at G1 checkpoint (via p21/CDK inhibitor), allowing DNA repair. If repair fails, p53 triggers apoptosis.",
            unitId: 4
          },
          {
            id: "4.3.9",
            text: "Cancer cells often lack contact inhibition. This means they:",
            options: ["lose the ability to form gap junctions","continue to divide even when touching neighboring cells","cannot migrate to other tissues","have reduced DNA replication rates"],
            correctIndex: 1,
            explanation: "Normal cells stop dividing when contacting neighbors (contact inhibition), preventing overgrowth. Cancer cells lose this mechanism and form tumors.",
            unitId: 4
          },
          {
            id: "4.3.10",
            text: "CDK enzymes require cyclin binding to become active. This requirement ensures:",
            options: ["CDKs function only during interphase","CDKs are activated only when cyclin levels rise at the appropriate cell cycle stage","CDKs are degraded after each stage","CDKs function independently without growth signals"],
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
        title: "Meiosis and the Origins of Genetic Diversity",
        description: "Analyze the process of meiosis and the reduction of ploidy. Trace homologous chromosome segregation and mechanisms driving eukaryotic genetic variation.",
        youtubeId: "VzDMG7ke69g",
        article: `
# Meiosis and the Origins of Genetic Diversity

## Meiosis

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<g transform="translate(100, 30)">
<path d="M 20 20 L 40 80 M 40 20 L 20 80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Maternal</text>
</g>
<g transform="translate(130, 30)">
<line x1="20" y1="20" x2="40" y2="80" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" />
<line x1="40" y1="20" x2="20" y2="80" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Paternal</text>
</g>
<text x="200" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Crossing Over (Prophase I)</text>
</svg>
</div>

Meiosis is the specialized cell division that reduces the chromosome number by half, producing haploid gametes (sperm and egg) for sexual reproduction.

### Ploidy: Diploid vs. Haploid

- **Diploid (2n)**: Cells containing two complete sets of chromosomes, one from each parent (e.g., human somatic cells have 46 chromosomes).
- **Haploid (n)**: Cells containing only one set of chromosomes (e.g., human gametes have 23 chromosomes).

### Overview of Meiosis

Meiosis involves one round of DNA replication followed by **two consecutive nuclear divisions** (Meiosis I and Meiosis II), resulting in four genetically unique haploid daughter cells.

#### Meiosis I: Reduction Division

Meiosis I separates **homologous chromosomes**, reducing the cell from diploid to haploid:
- **Prophase I**: Homologous chromosomes pair up side-by-side in synapsis. Non-sister chromatids exchange genetic material via **crossing over** at chiasmata. This creates recombinant chromosomes.
- **Metaphase I**: Homologous pairs (tetrads) align randomly along the metaphase plate (driving **independent assortment**).
- **Anaphase I**: Homologous chromosomes separate and are pulled to opposite poles. Sister chromatids remain attached.
- **Telophase I & Cytokinesis**: Two haploid cells are formed.

#### Meiosis II: Equational Division

Meiosis II separates **sister chromatids** (similar to mitosis):
- No DNA replication occurs between Meiosis I and II.
- **Prophase II - Metaphase II**: Chromosomes align individually along the metaphase plate.
- **Anaphase II**: Sister chromatids are separated and pulled to opposite poles.
- **Telophase II & Cytokinesis**: Four unique haploid gametes are formed.

### Chromosomal Nondisjunction and Aneuploidy

Errors during chromosome separation can have severe consequences:
- <vocab term="Nondisjunction" definition="The failure of homologous chromosomes or sister chromatids to separate properly during cell division, resulting in gametes with abnormal chromosome numbers.">Nondisjunction</vocab> occurs when homologous chromosomes fail to separate in Anaphase I, or sister chromatids fail to separate in Anaphase II.
- This results in gametes with an extra chromosome ($n+1$) or a missing chromosome ($n-1$).
- Fertilization of these gametes produces zygotes with **aneuploidy**:
  - **Trisomy 21 (Down syndrome)**: Three copies of chromosome 21.
  - **Turner syndrome (45, X0)**: Females with only one X chromosome.
  - **Klinefelter syndrome (47, XXY)**: Males with an extra X chromosome.

| Mitotic/Meiotic Stage | Event | Genetic Consequence |
|---|---|---|
| Prophase I | Crossing over between non-sister chromatids | Introduces novel allele combinations (recombinant DNA) |
| Metaphase I | Random alignment of homologous pairs | Independent assortment ($2^{23}$ combinations in humans) |
| Anaphase I/II | Chromosome separation | Ensures correct ploidy; failure leads to nondisjunction |

### Mitosis vs. Meiosis

| Feature | Mitosis | Meiosis |
|---|---|---|
| DNA Replication | Occurs during Interphase | Occurs during Interphase |
| Number of Divisions | 1 | 2 |
| Crossing Over | No | Yes (Prophase I) |
| Daughter Cells | 2 diploid (2n) cells | 4 haploid (n) cells |
| Genetic Identity | Genetically identical | Genetically unique |

### AP Exam Focus

- Explain how meiosis reduces the chromosome number from diploid to haploid
- Contrast the alignment and separation of chromosomes in Mitosis, Meiosis I, and Meiosis II
- Identify the chromosomal events (crossing over, independent assortment) that generate genetic diversity

## Meiosis and Genetic Diversity

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<g transform="translate(100, 30)">
<path d="M 20 20 L 40 80 M 40 20 L 20 80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Maternal</text>
</g>
<g transform="translate(130, 30)">
<line x1="20" y1="20" x2="40" y2="80" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" />
<line x1="40" y1="20" x2="20" y2="80" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Paternal</text>
</g>
<text x="200" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Crossing Over (Prophase I)</text>
</svg>
</div>

<vocab term="Meiosis" definition="A specialized form of cell division producing four haploid (n) daughter cells from a single diploid (2n) parent cell; occurs in reproductive organs; enables sexual reproduction.">Meiosis</vocab> is the specialized cell division that produces haploid gametes (sperm and eggs) from diploid germ cells. It generates remarkable genetic diversity through three key mechanisms.

### Overview: Meiosis vs. Mitosis

| Feature | Mitosis | Meiosis |
|---|---|---|
| Purpose | Growth, repair, asexual reproduction | Gamete production |
| Starting cell | Diploid (2n) | Diploid (2n) |
| Rounds of division | 1 | 2 (meiosis I and II) |
| Daughter cells | 2 diploid (2n) | 4 haploid (n) |
| Genetic identity | Identical to parent | Genetically unique |
| Crossing over | Rare | Yes, in prophase I |
| Chromosome alignment | Individual chromosomes | Homologous pairs (bivalents) |

### Meiosis I: The Reductional Division

Meiosis I separates **homologous chromosomes** (reducing chromosome number by half):

**Prophase I** (most complex phase):
- Homologous chromosomes pair up (synapsis) to form **bivalents** (tetrads)
- <vocab term="Crossing Over" definition="The exchange of DNA segments between non-sister chromatids of homologous chromosomes during prophase I of meiosis; creates new combinations of alleles (recombinant chromosomes).">Crossing over (recombination)</vocab> occurs at **chiasmata**
- Synaptonemal complex holds homologs together during crossover

**Metaphase I:**
- Bivalents line up at metaphase plate
- <vocab term="Independent Assortment" definition="The random orientation of homologous chromosome pairs at metaphase I of meiosis; each pair orients independently, generating 2n possible chromosome combinations in gametes.">Independent assortment</vocab>: each bivalent orients randomly (paternal or maternal to each pole)
- With 23 chromosome pairs: 2^23 = ~8.4 million possible gamete combinations from this alone!

**Anaphase I:** Homologous chromosomes separate (sister chromatids stay together)
**Telophase I/Cytokinesis I:** Two haploid cells formed (each chromosome still consists of 2 sister chromatids)

### Meiosis II: The Equational Division

Meiosis II separates **sister chromatids** (like mitosis but from haploid cells):

**Prophase II - Metaphase II:** No new DNA replication; chromosomes condense again
**Anaphase II:** Sister chromatids separate -> pulled to opposite poles
**Telophase II/Cytokinesis II:** Four haploid daughter cells

### Three Sources of Genetic Variation

#### 1. Crossing Over (Recombination)
Creates new combinations of alleles on a chromosome:
- Occurs at ~25-50 crossovers per human meiosis
- Alleles on the same chromosome are reshuffled
- Creates chromosomes with novel combinations not found in either parent

#### 2. Independent Assortment of Homologs
Random orientation of each bivalent at metaphase I:
- 23 chromosome pairs -> 2^23 = 8,388,608 possible gamete chromosome combinations
- Each gamete gets a unique mix of maternal and paternal chromosomes

#### 3. Random Fertilization
When two gametes unite:
- 8.4 million possible maternal gametes X 8.4 million possible paternal gametes = 70 trillion possible combinations!
- Each individual is genetically unique (except identical twins)

### Gametogenesis: Meiosis in Practice

| Process | Location | Result | Key Features |
|---|---|---|---|
| Spermatogenesis | Testes | 4 sperm per meiosis | All 4 cells functional |
| Oogenesis | Ovaries | 1 egg + 2-3 polar bodies | Unequal cytoplasm division; polar bodies discarded |

**Oogenesis notes:**
- Primary oocyte is arrested in prophase I from fetal development until puberty
- Meiosis I completes just before ovulation
- Meiosis II completes only if fertilization occurs
- One large egg retains most cytoplasm; polar bodies (with little cytoplasm) eventually degenerate

### Errors in Meiosis: Nondisjunction

<vocab term="Nondisjunction" definition="The failure of chromosomes or chromatids to separate properly during cell division; results in gametes with extra or missing chromosomes, leading to aneuploidy in offspring.">Nondisjunction</vocab> during meiosis I or II produces gametes with incorrect chromosome numbers:

| Error | Result | Example |
|---|---|---|
| Nondisjunction in meiosis I | Gametes with 2 copies of a chromosome or 0 copies | Most Down syndrome cases |
| Nondisjunction in meiosis II | Gametes with 2 identical chromatids or 0 | Some cases of trisomy |

**Common aneuploidies:**
- **Trisomy 21 (Down syndrome)** - 3 copies of chromosome 21; most common live-born aneuploidy
- **Klinefelter syndrome (XXY)** - extra X chromosome in males
- **Turner syndrome (X0)** - missing X chromosome in females
- **Trisomy 18 (Edwards syndrome)** - usually fatal in infancy
- **Trisomy 13 (Patau syndrome)** - usually fatal in infancy

### AP Exam Focus

- Meiosis produces 4 haploid cells (gametes) from 1 diploid cell; mitosis produces 2 diploid cells
- Three sources of variation: crossing over, independent assortment, random fertilization
- Independent assortment: 2^23 = ~8.4 million gamete types from chromosome sorting alone
- Nondisjunction: failure to separate chromosomes -> aneuploidy (e.g., trisomy 21)
- Crossing over in prophase I shuffles alleles within chromosomes
`,
        questions: [
          {
            id: "5.1.1",
            text: "Which of the following events occurs during Meiosis I but NOT during mitosis?",
            options: ["Sister chromatids are pulled apart to opposite poles.","Homologous chromosomes pair up and align on the metaphase plate.","DNA replication occurs during interphase.","The nuclear membrane breaks down."],
            correctIndex: 1,
            explanation: "During Meiosis I, homologous chromosomes pair up (synapsis) and align on the metaphase plate to separate, reducing ploidy. Mitosis separates sister chromatids.",
            unitId: 5
          },
          {
            id: "5.1.2",
            text: "If an animal's muscle cells contain 40 chromosomes, how many chromosomes will be present in its sperm cells after meiosis?",
            options: ["40","80","20","10"],
            correctIndex: 2,
            explanation: "Muscle cells are somatic (diploid, 2n = 40). Sperm cells are gametes (haploid, n), which contain half the somatic number: 40 / 2 = 20.",
            unitId: 5
          },
          {
            id: "5.1.3",
            text: "A cell with 2n=8 completes meiosis I. Each daughter cell contains:",
            options: ["8 chromosomes (4 pairs of sister chromatids)","4 chromosomes, each consisting of 2 sister chromatids","2 chromosomes","16 unpaired chromatids"],
            correctIndex: 1,
            explanation: "Meiosis I separates homologous chromosomes. Starting with 8 chromosomes (4 pairs), each cell after meiosis I has 4 chromosomes, each still consisting of 2 joined sister chromatids.",
            unitId: 5
          },
          {
            id: "5.1.4",
            text: "Crossing over during prophase I increases genetic diversity by:",
            options: ["Increasing chromosome number","Exchanging segments between non-sister chromatids of homologous chromosomes","Randomly sorting chromosomes into gametes","Mutating the DNA sequence of individual genes"],
            correctIndex: 1,
            explanation: "During prophase I, non-sister chromatids of homologous chromosomes exchange segments at chiasmata, reshuffling alleles and producing new genetic combinations.",
            unitId: 5
          },
          {
            id: "5.1.5",
            text: "Why is meiosis necessary for sexually reproducing organisms?",
            options: ["It repairs damaged DNA before fertilization","It reduces chromosome number by half so fertilization restores the diploid number","It ensures all gametes receive identical genetic information","It prevents crossing over in somatic cells"],
            correctIndex: 1,
            explanation: "Without meiosis, chromosome number would double each generation upon fertilization. Meiosis produces haploid gametes (n) so fertilization restores the diploid number (2n).",
            unitId: 5
          },
          {
            id: "5.1.6",
            text: "At what specific stage of meiosis does crossing over occur?",
            options: ["Metaphase I","Prophase I","Anaphase II","Prophase II"],
            correctIndex: 1,
            explanation: "Crossing over occurs during Prophase I, when homologous chromosomes align closely (synapsis) to exchange genetic material.",
            unitId: 5
          },
          {
            id: "5.1.7",
            text: "If an organism's diploid number is 8 (2n = 8), how many unique maternal/paternal chromosome combinations can result from independent assortment alone?",
            options: ["4","8","16","64"],
            correctIndex: 2,
            explanation: "The number of combinations is 2^n, where n is the haploid number. Since 2n = 8, n = 4. Thus, 2^4 = 16 unique combinations.",
            unitId: 5
          },
          {
            id: "5.1.8",
            text: "Independent assortment during meiosis I means that:",
            options: ["All chromosomes assort into the same cell","The orientation of one homologous pair does not affect the orientation of any other pair","Crossing over cannot occur","Sister chromatids are separated during independent assortment"],
            correctIndex: 1,
            explanation: "Independent assortment (Mendel's Law) states different gene pairs segregate independently during gamete formation, contributing to genetic diversity.",
            unitId: 5
          },
          {
            id: "5.1.9",
            text: "A species with 3 chromosome pairs (n=3). How many different gametes can be produced by independent assortment alone?",
            options: ["3","6","8","9"],
            correctIndex: 2,
            explanation: "Number of possible gametes = 2^n. With n=3: 2^3 = 8 different gamete types from independent assortment alone.",
            unitId: 5
          },
          {
            id: "5.1.10",
            text: "A child has 47 chromosomes with extra chromosome 21 (trisomy 21). This most likely arose from:",
            options: ["A point mutation in a single gene","Nondisjunction during meiosis where chromosome 21 failed to separate","Crossing over between non-homologous chromosomes","Deletion of a chromosome in early embryo"],
            correctIndex: 1,
            explanation: "Nondisjunction produces gametes with an extra chromosome (n+1). If fertilized by a normal gamete, the result is trisomy 21 (Down syndrome).",
            unitId: 5
          }
        ]
      },
      {
        id: "5.2",
        title: "Mendelian, Non-Mendelian, and Environmental Genetics",
        description: "Apply laws of segregation and independent assortment to predict inheritance probabilities. Analyze inheritance patterns that deviate from Mendelian ratios, including linkage and sex-linkage. Understand how environmental factors interact with genotypes to determine phenotype.",
        youtubeId: "q6qtSeWp0Yw",
        article: `
# Mendelian, Non-Mendelian, and Environmental Genetics

## Mitosis and the Cell Cycle

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<g transform="translate(100, 30)">
<path d="M 20 20 L 40 80 M 40 20 L 20 80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Maternal</text>
</g>
<g transform="translate(130, 30)">
<line x1="20" y1="20" x2="40" y2="80" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" />
<line x1="40" y1="20" x2="20" y2="80" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Paternal</text>
</g>
<text x="200" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Crossing Over (Prophase I)</text>
</svg>
</div>

The <vocab term="Cell Cycle" definition="The ordered sequence of events by which a cell grows and divides into two daughter cells; consists of interphase (G1, S, G2) and mitotic phase (mitosis and cytokinesis).">cell cycle</vocab> is the life cycle of a dividing cell, encompassing growth, DNA replication, and division into two genetically identical daughter cells.

### Phases of the Cell Cycle

#### Interphase (~90% of cell cycle time)

**G1 phase (First Gap):**
- Cell grows in size
- Synthesizes proteins and organelles
- G1 checkpoint: Is the cell ready to replicate? Adequate size, nutrients, growth factors?
- Rb protein blocks progression until growth signals override it

**S phase (Synthesis):**
- DNA replication: entire genome duplicated
- Each chromosome now consists of two identical sister chromatids joined at the centromere
- Histone synthesis occurs simultaneously
- Duration: ~6-8 hours in human cells

**G2 phase (Second Gap):**
- Cell continues to grow
- Synthesizes proteins needed for mitosis (tubulin for spindle, condensins)
- G2 checkpoint: Is DNA fully replicated? Are there any errors?
- DNA repair machinery corrects replication errors

**G0 phase:**
- Cells that exit the cycle permanently (neurons, heart muscle cells) or temporarily
- Can be re-entered from G1 under appropriate signals

#### Mitotic Phase (M phase)

Mitosis (nuclear division) + cytokinesis (cytoplasmic division):

| Phase | Key Events |
|---|---|
| Prophase | Chromatin condenses into visible chromosomes; mitotic spindle begins forming; nuclear envelope breaks down |
| Prometaphase | Spindle fibers attach to kinetochores; chromosomes begin moving |
| Metaphase | Chromosomes aligned at metaphase plate; spindle assembly checkpoint ensures all kinetochores attached |
| Anaphase | Sister chromatids separated; pulled to opposite poles |
| Telophase | Nuclear envelopes reform; chromosomes decondense |
| Cytokinesis | Cytoplasm divided; two daughter cells formed |

### Cell Cycle Regulation

<vocab term="Cyclins" definition="Regulatory proteins whose concentration oscillates throughout the cell cycle; bind to and activate CDKs (cyclin-dependent kinases) to drive cell cycle progression.">Cyclins</vocab> and <vocab term="Cyclin-Dependent Kinases (CDKs)" definition="Kinases that are activated by binding to specific cyclins; phosphorylate target proteins to drive cell cycle transitions; their activity depends on cyclin concentration.">CDKs (cyclin-dependent kinases)</vocab> form the molecular engine of the cell cycle:

| Cyclin-CDK Complex | Phase | Key Target | Function |
|---|---|---|---|
| Cyclin D/CDK4, CDK6 | G1 | Rb (retinoblastoma protein) | Phosphorylates Rb -> releases E2F -> promotes S phase entry |
| Cyclin E/CDK2 | G1/S transition | DNA replication machinery | Initiates DNA replication |
| Cyclin A/CDK2 | S phase | Replication factors | Ensures one-time replication |
| Cyclin B/CDK1 | G2/M | Lamin, condensin, nuclear envelope | Triggers mitosis entry (MPF) |

**MPF (Maturation Promoting Factor)** = Cyclin B/CDK1: the master switch for entering mitosis.

### Cell Cycle Checkpoints

Checkpoints are surveillance mechanisms that halt cell cycle progression if conditions are not met:

**G1 Checkpoint (Restriction Point):**
- Checks: sufficient size, nutrients, growth factors, no DNA damage
- Regulator: Rb protein (tumor suppressor); phosphorylation by CDKs releases it

**G2 Checkpoint:**
- Checks: DNA fully replicated, no DNA damage
- Regulator: p53 activates p21 (CDK inhibitor) -> halts cycle

**Spindle Assembly Checkpoint (M phase):**
- Checks: all chromosomes properly attached to spindle
- Regulator: Mad2 protein monitors unattached kinetochores; inhibits APC/C until all attached
- APC/C (anaphase-promoting complex): triggers anaphase by degrading securin (releasing separase to cleave cohesin)

### Proto-oncogenes, Oncogenes, and Tumor Suppressors

**Proto-oncogenes** (normal cell cycle accelerators) become **oncogenes** when mutated:
- Ras (GTPase signaling), Myc (transcription factor), cyclin D - overactive -> uncontrolled division
- Gain-of-function mutations: even one mutant allele can cause cancer (dominant)

**Tumor suppressor genes** (cell cycle brakes) lose function in cancer:
- Rb (retinoblastoma): blocks G1 progression; mutated in retinoblastoma, many cancers
- p53: activates DNA repair and apoptosis when DNA is damaged; mutated in ~50% of cancers
- APC: regulates beta-catenin in Wnt pathway; mutated in colorectal cancer
- Loss-of-function mutations: both alleles must be lost for cancer (recessive, "two-hit" hypothesis)

### Cytokinesis: Animal vs. Plant Cells

| Feature | Animal Cells | Plant Cells |
|---|---|---|
| Mechanism | Cleavage furrow (actin/myosin ring contracts) | Cell plate forms from inside out (vesicles from Golgi) |
| Structure | Ring of actin pinches cell in two | New cell wall and membranes built inward |
| Outcome | Two identical daughter cells | Two identical daughter cells with new cell wall |

### AP Exam Focus

- Cell cycle phases: G1 (growth), S (DNA replication), G2 (growth + prep), M (mitosis + cytokinesis)
- Cyclins oscillate; CDKs are always present but need cyclin partner to be active
- Checkpoints: G1 (Rb, CDK), G2 (p53), M (spindle assembly checkpoint, APC/C)
- Proto-oncogenes -> oncogenes: dominant gain of function; Tumor suppressors: recessive loss of function
- Cytokinesis: cleavage furrow (animal), cell plate (plant)

## Mendelian Genetics

<div class="flex justify-center my-8">
<svg width="300" height="200" viewBox="0 0 300 200" class="max-w-full">
<line x1="100" y1="50" x2="250" y2="50" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="100" y1="120" x2="250" y2="120" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="100" y1="190" x2="250" y2="190" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="100" y1="50" x2="100" y2="190" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="175" y1="50" x2="175" y2="190" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="250" y1="50" x2="250" y2="190" stroke="#a1a1aa" stroke-width="1.5" />
<text x="137" y="35" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">T</text>
<text x="212" y="35" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">t</text>
<text x="75" y="95" fill="#3b82f6" font-size="14" font-weight="bold" text-anchor="middle">T</text>
<text x="75" y="165" fill="#3b82f6" font-size="14" font-weight="bold" text-anchor="middle">t</text>
<text x="137" y="95" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">TT</text>
<text x="212" y="95" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">Tt</text>
<text x="137" y="165" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">Tt</text>
<text x="212" y="165" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">tt</text>
<text x="175" y="15" fill="#ffffff" font-size="10" text-anchor="middle">Monohybrid Cross (F2 Generation)</text>
</svg>
</div>

<vocab term="Gregor Mendel" definition="19th century Austrian monk who conducted hybridization experiments with pea plants, discovering the fundamental principles of heredity now known as Mendel's Laws.">Gregor Mendel</vocab> discovered the basic rules of inheritance by carefully tracking pea plant traits through multiple generations. His laws remain the foundation of genetics.

### Mendel's Experimental Approach

Mendel used Pisum sativum (garden pea) because:
- Short generation time
- Easy to cross-pollinate (or self-pollinate)
- Many easily distinguishable traits
- Large numbers of offspring possible (statistical significance)

He studied 7 traits, each controlled by a single gene with two variants (alleles):

| Trait | Dominant | Recessive |
|---|---|---|
| Seed shape | Round (R) | Wrinkled (r) |
| Seed color | Yellow (Y) | Green (y) |
| Pod shape | Inflated (I) | Constricted (i) |
| Pod color | Green (G) | Yellow (g) |
| Flower color | Purple (P) | White (p) |
| Flower position | Axial (A) | Terminal (a) |
| Plant height | Tall (T) | Dwarf (t) |

### Mendel's Laws

#### Law of Dominance
When two different alleles are present, one allele (dominant) masks the expression of the other (recessive). The dominant allele produces the dominant phenotype in both homozygous dominant (AA) and heterozygous (Aa) individuals.

#### Law of Segregation
<vocab term="Law of Segregation" definition="Mendel's first law: the two alleles of a gene separate during gamete formation so that each gamete receives only one allele; alleles are reunited at fertilization.">Law of Segregation</vocab>: Each organism has two alleles for each gene, and these alleles separate during gamete formation. Each gamete receives only one allele.

**Monohybrid Cross (Aa x Aa):**
- Parent genotypes: Aa x Aa
- Gametes: 1/2 A and 1/2 a from each parent
- Offspring genotype ratio: 1 AA : 2 Aa : 1 aa (1:2:1)
- Offspring phenotype ratio: 3 dominant : 1 recessive (3:1)

Punnett square:
- AA: homozygous dominant -> dominant phenotype
- Aa: heterozygous -> dominant phenotype
- aa: homozygous recessive -> recessive phenotype

#### Law of Independent Assortment
<vocab term="Law of Independent Assortment" definition="Mendel's second law: alleles of different genes sort independently into gametes (when genes are on different chromosomes); produces a 9:3:3:1 phenotype ratio in dihybrid crosses.">Law of Independent Assortment</vocab>: Alleles of different genes (on different chromosomes) are inherited independently.

**Dihybrid Cross (AaBb x AaBb):**
- Gametes: AB, Ab, aB, ab (each 1/4 frequency)
- Offspring phenotype ratio: 9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb (9:3:3:1)

Note: Independent assortment only applies to genes on **different chromosomes** (or very far apart on same chromosome). Linked genes do NOT assort independently.

### Modern Extensions of Mendelian Genetics

#### Incomplete Dominance
Heterozygote shows intermediate phenotype:
- Example: Red (RR) x White (WW) -> Pink (RW)
- No single dominant allele; both alleles are partially expressed

#### Codominance
Heterozygote shows BOTH phenotypes simultaneously:
- Example: Human blood type (A and B alleles both expressed in AB type)
- Both allele products are present and detectable

#### Multiple Alleles
More than two alleles exist in the population (though each individual still has only two):
- Blood type: three alleles (I^A, I^B, i)
- I^A = codominant with I^B; both dominant to i

| Genotype | Phenotype | Blood Type |
|---|---|---|
| I^A I^A or I^A i | A antigens on RBCs | Type A |
| I^B I^B or I^B i | B antigens on RBCs | Type B |
| I^A I^B | Both A and B antigens | Type AB |
| ii | No ABO antigens | Type O |

#### Polygenic Inheritance
Multiple genes contribute to a single trait:
- Human height, skin color, intelligence, weight
- Produces continuous bell-curve distribution in population

#### Epistasis
One gene masks the expression of another:
- Gene A affects gene B (or vice versa)
- Produces non-standard phenotype ratios (e.g., 12:3:1 or 9:7 instead of 9:3:3:1)

### Probability Rules in Genetics

**Product rule** (AND - both events occur): multiply probabilities
- P(A and B) = P(A) x P(B)
- What is probability of an AaBb offspring? = P(Aa) x P(Bb) from cross

**Sum rule** (OR - either event occurs): add probabilities
- P(A or B) = P(A) + P(B) [if mutually exclusive]

### Pedigree Analysis

Pedigrees show inheritance patterns across generations:
- Autosomal dominant: affects every generation; both sexes equally; affected x unaffected -> 50% affected
- Autosomal recessive: can skip generations; carriers exist; two unaffected parents can have affected child
- X-linked recessive: mainly affects males; females are often carriers; affected father cannot pass to sons
- X-linked dominant: affected father passes to ALL daughters; sons not affected by father's X

### AP Exam Focus

- Law of Segregation: alleles separate during meiosis; each gamete gets one allele
- Law of Independent Assortment: only applies to genes on different chromosomes
- Monohybrid cross: 3:1 phenotype ratio; 1:2:1 genotype ratio
- Dihybrid cross: 9:3:3:1 phenotype ratio
- Blood type is codominance (AB) + dominance (A/B over O)

## Chromosomal Inheritance

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<g transform="translate(100, 30)">
<path d="M 20 20 L 40 80 M 40 20 L 20 80" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">Maternal</text>
</g>
<g transform="translate(130, 30)">
<line x1="20" y1="20" x2="40" y2="80" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" />
<line x1="40" y1="20" x2="20" y2="80" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />
<text x="30" y="100" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Paternal</text>
</g>
<text x="200" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Crossing Over (Prophase I)</text>
</svg>
</div>

Chromosomal inheritance extends Mendelian genetics to explain traits that do not follow simple patterns, including sex-linked traits, linked genes, and chromosomal abnormalities.

### Chromosomal Theory of Inheritance

The chromosomal theory (Sutton and Boveri, ~1902) proposed that genes are carried on chromosomes. This explained:
- Why Mendel's independent assortment law works for some genes (different chromosomes) but not all
- Why inheritance patterns differ between sexes (sex chromosomes)
- Why some traits are inherited together (linkage)

Evidence came from Thomas Hunt Morgan's fruit fly (Drosophila) experiments showing that specific genes are carried on specific chromosomes.

### Sex Determination and Sex Chromosomes

In humans (and most mammals):
- Females: XX (two X chromosomes)
- Males: XY (one X, one Y chromosome)
- Father's sperm determines sex: X-bearing sperm -> daughter; Y-bearing sperm -> son

The Y chromosome carries few genes (mostly involved in male determination), so males are **hemizygous** for X-linked genes (only one copy).

### X-Linked Inheritance

<vocab term="X-Linked Traits" definition="Traits encoded by genes on the X chromosome; males (XY) are hemizygous and show X-linked recessive traits more often than females, who need two copies of the recessive allele.">X-linked traits</vocab> follow distinctive patterns:

**X-linked recessive (e.g., color blindness, hemophilia A, Duchenne muscular dystrophy):**
- Males affected much more often than females (no second X to mask recessive allele)
- Carrier females (X^A X^a) appear unaffected but pass trait to sons
- Affected fathers CANNOT pass X-linked traits to sons (give Y to sons)
- Affected fathers pass X to ALL daughters (daughters are carriers if mother is normal)

**X-linked dominant (e.g., hypophosphatemia, Rett syndrome):**
- Affected fathers pass trait to ALL daughters (give X to daughters)
- Affected fathers pass to NO sons (give Y to sons)

### Gene Linkage and Recombination

Genes on the same chromosome are <vocab term="Linked Genes" definition="Genes located on the same chromosome that tend to be inherited together; the closer they are, the more tightly linked they are and the lower the recombination frequency.">linked</vocab> and tend to be inherited together rather than independently.

**Recombination frequency** (map distance) measures how often crossing over separates two genes:
- Closely linked genes: low recombination frequency (<10 cM)
- Distantly linked genes: approach 50% recombination (behave like unlinked genes)

$$\\text{Map distance (cM)} = \\frac{\\text{Number of recombinant offspring}}{\\text{Total offspring}} \\times 100$$

1 centimorgan (cM) = 1% recombination frequency

### Chromosomal Abnormalities

#### Structural Abnormalities

| Type | Description | Example |
|---|---|---|
| Deletion | Loss of chromosome segment | Cri-du-chat syndrome (5p deletion) |
| Duplication | Extra copy of chromosome segment | Some cancers |
| Inversion | Segment reversed within chromosome | Balanced; may disrupt gene function |
| Translocation | Segment moved to different chromosome | Philadelphia chromosome (BCR-ABL fusion) -> CML |

#### Numerical Abnormalities (Aneuploidy)

Caused by nondisjunction during meiosis:

| Condition | Chromosome | Phenotype | Frequency |
|---|---|---|---|
| Down syndrome | Trisomy 21 | Intellectual disability, characteristic features | 1/700 births |
| Edwards syndrome | Trisomy 18 | Severe abnormalities; usually fatal | 1/5,000 |
| Patau syndrome | Trisomy 13 | Severe abnormalities; usually fatal | 1/12,000 |
| Turner syndrome | 45, X0 | Female, short stature, infertile | 1/2,500 females |
| Klinefelter syndrome | 47, XXY | Male, tall, often infertile | 1/500-1,000 males |
| Triple X syndrome | 47, XXX | Female, usually fertile, normal lifespan | 1/1,000 females |

#### Polyploidy
Having extra complete chromosome sets:
- Rare in animals (usually lethal), but common in plants
- Many crop plants are polyploid: bread wheat (hexaploid, 6n=42), cotton (tetraploid)
- Polyploidization (especially allopolyploidy) drives plant speciation

### Genomic Imprinting

Some genes are expressed only from one parental chromosome (the other is silenced):
- <vocab term="Genomic Imprinting" definition="The epigenetic silencing of one parental allele based on which parent it was inherited from; affected genes show parent-of-origin-specific expression.">Genomic imprinting</vocab> is established by methylation patterns during gamete formation
- Deletions in same region cause different diseases depending on parental origin
- Prader-Willi syndrome: deletion of paternal chromosome 15 region
- Angelman syndrome: deletion of maternal chromosome 15 region (same region - different parent!)

### AP Exam Focus

- X-linked recessive: males affected more; carrier females; affected father gives X to all daughters
- Linked genes violate independent assortment; recombination frequency measures chromosomal distance
- Down syndrome: trisomy 21 from nondisjunction; Turner (45,X), Klinefelter (XXY)
- Polyploidy: multiple chromosome sets; common in plants, rare in animals
- Philadelphia chromosome (translocation 9;22): BCR-ABL fusion oncogene -> CML
`,
        questions: [
          {
            id: "5.2.1",
            text: "In a cross between two individuals heterozygous for a single trait (Aa x Aa), what is the expected genotypic ratio of the offspring?",
            options: ["3:1","1:2:1","9:3:3:1","1:1"],
            correctIndex: 1,
            explanation: "The expected genotypic ratio is 1 AA : 2 Aa : 1 aa, while the phenotypic ratio is 3 dominant : 1 recessive.",
            unitId: 5
          },
          {
            id: "5.2.2",
            text: "What is the probability of obtaining an offspring with the genotype aabbcc from parents with genotypes AaBbCc x AaBbCc?",
            options: ["1/8","1/16","1/64","1/256"],
            correctIndex: 2,
            explanation: "For each gene, the probability of getting homozygous recessive is 1/4. Since the genes assort independently, P(aabbcc) = 1/4 * 1/4 * 1/4 = 1/64.",
            unitId: 5
          },
          {
            id: "5.2.3",
            text: "A tall pea plant (Tt) crossed with a short plant (tt). The expected phenotypic ratio is:",
            options: ["3 tall : 1 short","1 tall : 1 short","All tall","All short"],
            correctIndex: 1,
            explanation: "Tt x tt produces Tt (tall) and tt (short) in 1:1 ratio. This is a testcross result.",
            unitId: 5
          },
          {
            id: "5.2.4",
            text: "A man with blood type A (IAi) and a woman with blood type B (IBi) have children. Which blood types are possible?",
            options: ["A and B only","A, B, AB, and O","AB only","B and O only"],
            correctIndex: 1,
            explanation: "Cross IAi x IBi produces: IAIB (AB), IAi (A), IBi (B), and ii (O). All four blood types are possible.",
            unitId: 5
          },
          {
            id: "5.2.5",
            text: "A carrier female for an X-linked recessive disorder (X^A X^a) has children with a normal male (X^A Y). What percentage of their sons are expected to have the disorder?",
            options: ["0%","25%","50%","100%"],
            correctIndex: 2,
            explanation: "Sons inherit their Y chromosome from the father and their X chromosome from the mother. There is a 50% chance the mother passes the recessive allele (X^a) to a son, making him affected.",
            unitId: 5
          },
          {
            id: "5.2.6",
            text: "A red (CRCR) crossed with white (CWCW) produces offspring with red AND white patches. What genotype is this?",
            options: ["CRCR","CWCW","CRCW","CRcw"],
            correctIndex: 2,
            explanation: "In codominance, both alleles are expressed. The CRCW offspring display both red and white patches simultaneously.",
            unitId: 5
          },
          {
            id: "5.2.7",
            text: "Which describes a polygenic trait?",
            options: ["Controlled by a single gene with two alleles","Controlled by multiple genes, each contributing to a continuous range of phenotypes","Where one allele is completely dominant","Determined exclusively by the environment"],
            correctIndex: 1,
            explanation: "Polygenic traits (height, skin color) are controlled by many genes with additive effects, producing a continuous distribution of phenotypes.",
            unitId: 5
          },
          {
            id: "5.2.8",
            text: "Identical twin plants are grown in different soils: one in soil with a pH of 5.5 and the other in soil with a pH of 7.0. The first plant produces blue flowers, while the second produces pink. What does this demonstrate?",
            options: ["High rates of somatic mutation","Phenotypic plasticity due to environmental interaction with the genotype","Nondisjunction during meiosis","Incomplete dominance of the flower color alleles"],
            correctIndex: 1,
            explanation: "Phenotypic plasticity is the ability of an organism to alter its phenotype in response to environmental conditions (like soil pH) without changing its genotype.",
            unitId: 5
          },
          {
            id: "5.2.9",
            text: "A gene for height is expressed differently in nutrient-rich vs. nutrient-poor soil. This demonstrates that:",
            options: ["The genotype is determined by the environment","The environment can influence how genotype is expressed, producing different phenotypes","Height genes are only expressed in favorable conditions","Natural selection acts on genotype, not phenotype"],
            correctIndex: 1,
            explanation: "Phenotype = genotype x environment. Even with the same genetic potential, environmental conditions can dramatically alter the expressed phenotype.",
            unitId: 5
          },
          {
            id: "5.2.10",
            text: "Identical twins with identical genotypes raised in different environments show different health outcomes. This is best explained by:",
            options: ["Different mutation rates in each twin","Epigenetic modifications and environmental influences on gene expression","Random DNA replication errors after twin separation","Immune system differences from birth"],
            correctIndex: 1,
            explanation: "Epigenetics: heritable changes in gene expression without DNA sequence changes (e.g., DNA methylation, histone modification) from environmental experiences.",
            unitId: 5
          }
        ]
      },
      {
        id: "5.3",
        title: "Chromosomal Inheritance, Linkage, and Recombination",
        description: "Examine nondisjunction, chromosomal abnormalities, and non-nuclear organelle inheritance.",
        youtubeId: "KaxSDryqB6M",
        article: `
# Chromosomal Inheritance, Linkage, and Recombination

## Gene Expression

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<rect x="20" y="45" width="90" height="50" rx="6" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" />
<text x="65" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DNA</text>
<text x="65" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Replication</text>
<path d="M 115 70 L 165 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="140" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Transcription</text>
<rect x="180" y="45" width="90" height="50" rx="6" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="1.5" />
<text x="225" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">mRNA</text>
<text x="225" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Codons</text>
<path d="M 275 70 L 325 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="300" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Translation</text>
<rect x="340" y="45" width="90" height="50" rx="6" fill="rgba(16,185,129,0.05)" stroke="#10b981" stroke-width="1.5" />
<text x="385" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Protein</text>
<text x="385" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Amino Acids</text>
<defs>
<marker id="dog-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Gene Expression" definition="The process by which information encoded in a gene is used to synthesize a functional gene product (usually a protein); involves transcription (DNA to RNA) and translation (RNA to protein).">Gene expression</vocab> converts genetic information into functional proteins through the two-step process of transcription and translation. This is captured in the Central Dogma of Molecular Biology.

### The Central Dogma

$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{RNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$

Originally proposed by Francis Crick (1958), the central dogma states that information flows from DNA to RNA to protein. Reverse transcription (RNA to DNA, done by retroviruses) is the notable exception.

### Transcription: DNA to RNA

<vocab term="Transcription" definition="The synthesis of RNA from a DNA template by RNA polymerase; produces pre-mRNA in eukaryotes, which is processed before being exported from the nucleus.">Transcription</vocab> occurs in the nucleus and has three stages:

**Initiation:**
- Transcription factors and RNA polymerase II bind to the promoter (TATA box)
- RNA polymerase II opens double helix, beginning at +1 start site
- Template strand (3' to 5') read; RNA is synthesized 5' to 3'

**Elongation:**
- RNA polymerase moves along template strand 3' -> 5'
- Synthesizes complementary RNA strand 5' -> 3'
- Uracil (U) instead of Thymine (T) in RNA

**Termination:**
- RNA polymerase reaches termination signal
- RNA transcript released; polymerase dissociates

### RNA Processing (Pre-mRNA to mRNA)

In eukaryotes, the primary transcript (pre-mRNA) must be processed before export:

1. **5' Capping** - Modified guanosine nucleotide added to 5' end
   - Protects from degradation
   - Helps ribosome recognize and bind mRNA

2. **3' Poly-A Tail** - 100-200 adenine nucleotides added to 3' end
   - Protects from degradation
   - Helps export from nucleus
   - Prolongs mRNA half-life

3. **RNA Splicing** - Introns removed; exons joined
   - <vocab term="Introns" definition="Non-coding sequences in eukaryotic pre-mRNA that are removed by the spliceosome during RNA processing; their function is largely regulatory and evolutionary.">Introns</vocab>: non-coding sequences removed by spliceosome (snRNPs)
   - <vocab term="Exons" definition="Coding sequences in eukaryotic pre-mRNA that are retained and joined together to form mature mRNA; translated into protein.">Exons</vocab>: expressed sequences that are joined together

**Alternative splicing**: The same pre-mRNA can be spliced differently to produce different proteins:
- Explains how ~20,000 human genes produce >100,000 different proteins
- Example: Fibronectin gene - different combinations of exons produce tissue-specific isoforms

### Translation: mRNA to Protein

<vocab term="Translation" definition="The synthesis of protein from an mRNA template at ribosomes; involves tRNA bringing amino acids corresponding to codons in the mRNA.">Translation</vocab> occurs at ribosomes (free in cytoplasm or bound to rough ER):

**The Genetic Code:**
- 64 codons (4^3 combinations of 3 nucleotides)
- 61 sense codons (encode 20 amino acids) + 3 stop codons (UAA, UAG, UGA)
- Redundant: most amino acids encoded by multiple codons (e.g., leucine: 6 codons)
- AUG = start codon (Met); also the initiation signal
- Code is nearly universal (same in bacteria and humans - evidence for common ancestry)

**Three stages of translation:**

**Initiation:** Small ribosome subunit binds 5' cap; scans for AUG start codon; large subunit joins

**Elongation (repeated for each codon):**
1. Aminoacyl-tRNA with correct anticodon enters A site
2. Peptide bond forms (peptidyl transferase activity of large subunit rRNA)
3. Ribosome translocates 3 nucleotides (one codon); growing chain moves from A to P site
4. Empty tRNA exits E site

**Termination:** Stop codon (UAA, UAG, UGA) enters A site; release factor binds; polypeptide released

### Gene Regulation

Gene expression is regulated at multiple levels:

| Level | Mechanism | Example |
|---|---|---|
| Chromatin | Histone modification, DNA methylation | Heterochromatin = silenced; euchromatin = active |
| Transcriptional | Transcription factor binding to enhancers/silencers | Steroid hormone-receptor complexes |
| Post-transcriptional | Alternative splicing, mRNA stability | miRNA degrades target mRNAs |
| Translational | Regulation of ribosome assembly/access | Iron regulatory protein controls ferritin |
| Post-translational | Protein modification, degradation | Ubiquitin-proteasome degradation |

### AP Exam Focus

- Central dogma: DNA -> RNA -> Protein (transcription, then translation)
- RNA processing: 5' cap, 3' poly-A tail, splicing (introns out, exons joined)
- Genetic code: 64 codons, redundant, nearly universal
- AUG = start codon (Met); UAA/UAG/UGA = stop codons
- Alternative splicing: one gene -> multiple protein variants
`,
        questions: [
          {
            id: "5.3.1",
            text: "If a human zygote is diagnosed with Down Syndrome (Trisomy 21), which meiotic error is most likely responsible?",
            options: ["DNA replication failure in S-phase","Nondisjunction during meiosis in one of the parents","Alternative splicing of chromatin fibers","Disulfide bridge cleavage in histone proteins"],
            correctIndex: 1,
            explanation: "Nondisjunction during meiosis results in gametes with an extra chromosome 21, leading to a trisomy (three copies) upon fertilization.",
            unitId: 5
          },
          {
            id: "5.3.2",
            text: "A pedigree analysis reveals that a rare genetic disorder is passed from affected mothers to all of their children, but affected fathers never pass it to their offspring. What is the mode of inheritance?",
            options: ["X-linked recessive","Autosomal dominant","Mitochondrial (non-nuclear) inheritance","Y-linked"],
            correctIndex: 2,
            explanation: "Mitochondria are inherited maternally because the egg cell provides all the cytoplasm and organelles to the zygote. Affected mothers pass mitochondrial mutations to all offspring, fathers pass to none.",
            unitId: 5
          },
          {
            id: "5.3.3",
            text: "Turner syndrome (45, X) most likely arose from:",
            options: ["A point mutation in the X chromosome","Nondisjunction of sex chromosomes during meiosis","Recombination between X and Y chromosomes","Deletion of an autosome"],
            correctIndex: 1,
            explanation: "Nondisjunction can produce gametes lacking a sex chromosome (O). An egg with no sex chromosome fertilized by X sperm = 45,X (Turner syndrome).",
            unitId: 5
          },
          {
            id: "5.3.4",
            text: "A female with 47,XXX syndrome has how many Barr bodies in somatic cells?",
            options: ["0","1","2","3"],
            correctIndex: 2,
            explanation: "Barr bodies = (number of X chromosomes) - 1. A 47,XXX female has 3 X chromosomes; 2 are inactivated as Barr bodies.",
            unitId: 5
          },
          {
            id: "5.3.5",
            text: "The Philadelphia chromosome in CML results from a segment of chromosome 9 transferred to chromosome 22. This is:",
            options: ["A point mutation causing a frameshift","A chromosomal translocation creating an oncogenic fusion gene (BCR-ABL1)","Nondisjunction resulting in gain of chromosomes","A deletion removing a tumor suppressor gene"],
            correctIndex: 1,
            explanation: "The t(9;22) translocation fuses BCR (chr 22) with ABL1 (chr 9), creating the BCR-ABL1 fusion oncogene that drives uncontrolled proliferation in CML.",
            unitId: 5
          },
          {
            id: "5.3.6",
            text: "What does a recombination frequency of 50% between two genes on a chromosome indicate?",
            options: ["The two genes are extremely close together and always inherit together.","The two genes behave as if they are unlinked, either on different chromosomes or very far apart on the same chromosome.","A lethal mutation has occurred during crossing over.","The genes are sex-linked and located on the X chromosome."],
            correctIndex: 1,
            explanation: "A recombination frequency of 50% is the maximum possible, indicating that independent assortment occurs and the genes are physically unlinked.",
            unitId: 5
          },
          {
            id: "5.3.7",
            text: "A cross between a red-eyed female fruit fly and a white-eyed male results in all red-eyed offspring. What does this suggest about the red-eye allele?",
            options: ["The red-eye allele is recessive and sex-linked.","The red-eye allele is dominant and autosomal or sex-linked.","The white-eye allele is codominant.","Both alleles are autosomal codominant."],
            correctIndex: 1,
            explanation: "Because all offspring are red-eyed, the red-eye phenotype is dominant over white-eyes.",
            unitId: 5
          },
          {
            id: "5.3.8",
            text: "Why are sex-linked recessive genetic disorders (like hemophilia) significantly more common in human males than females?",
            options: ["Males have two X chromosomes, increasing their chance of expressing the trait.","Males have only one X chromosome, so they express whichever allele is present on it.","The Y chromosome contains a dominant inhibitor gene.","Spermatogenesis is more susceptible to genetic mutations."],
            correctIndex: 1,
            explanation: "Males are hemizygous (XY). Since they only inherit one X chromosome, they do not have a backup allele to mask a recessive trait on it.",
            unitId: 5
          },
          {
            id: "5.3.9",
            text: "What molecular event during meiosis I is responsible for the recombination of alleles between linked genes?",
            options: ["Independent assortment during Metaphase I","Sister chromatid segregation during Anaphase II","Crossing over between homologous chromosomes during Prophase I","Centromere cleavage by enzyme separase"],
            correctIndex: 2,
            explanation: "Crossing over (synapses) in Prophase I allows homologous chromatids to break and swap corresponding segments, separating alleles of linked genes.",
            unitId: 5
          },
          {
            id: "5.3.10",
            text: "If two genes A and B show a recombination frequency of 12% in testcross offspring, how many map units (centimorgans) apart are they on the chromosome?",
            options: ["6 map units","12 map units","24 map units","50 map units"],
            correctIndex: 1,
            explanation: "Recombination frequency is directly proportional to map units; 1% recombination frequency equals 1 map unit (cM). Hence, 12% equals 12 map units.",
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
        title: "DNA/RNA Structure and Replication Mechanisms",
        description: "Differentiate between DNA and RNA nucleotide structures and nitrogenous bases. Analyze the semi-conservative replication process and enzymology at the replication fork.",
        youtubeId: "8kK2zwjRV0M",
        article: `
# DNA/RNA Structure and Replication Mechanisms

## DNA Structure and Replication

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<path d="M 20 100 L 180 100 L 300 40 L 420 40" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 20 115 L 180 115 L 300 175 L 420 175" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 380 50 L 190 95" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="280" y="65" fill="#22c55e" font-size="9" font-weight="bold">Leading Strand (➔ 5' to 3')</text>
<path d="M 230 145 L 195 125" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<path d="M 285 170 L 250 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="290" y="145" fill="#ef4444" font-size="9" font-weight="bold">Okazaki Fragments (Lagging)</text>
<text x="350" y="25" fill="#60a5fa" font-size="8" font-weight="bold">Template 3'</text>
<text x="350" y="190" fill="#60a5fa" font-size="8" font-weight="bold">Template 5'</text>
<defs>
<marker id="rep-fork-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="DNA Replication" definition="The process by which a cell copies its DNA prior to cell division; uses each strand as a template for synthesizing a new complementary strand, producing two identical double-stranded DNA molecules.">DNA replication</vocab> is the fundamental mechanism by which genetic information is duplicated before cell division. Understanding its molecular machinery is essential for AP Biology.

### DNA Double Helix Structure (Review)

Watson and Crick proposed the double helix structure in 1953:
- Two antiparallel strands (one 5'->3', other 3'->5')
- Complementary base pairing: A-T (2 hydrogen bonds), G-C (3 hydrogen bonds)
- Sugar-phosphate backbone on outside; bases pointing inward
- Right-handed helix; 10 base pairs per turn

### Semiconservative Replication

<vocab term="Semiconservative Replication" definition="The mode of DNA replication in which each daughter molecule consists of one original (parental) strand and one newly synthesized strand; demonstrated by the Meselson-Stahl experiment.">Semiconservative replication</vocab> (demonstrated by Meselson-Stahl, 1958):
- Each daughter DNA molecule contains one original strand (template) + one new strand
- Three possible models were considered: semiconservative, conservative, dispersive
- Heavy N-15 / light N-14 density gradient experiment confirmed semiconservative model

### The Replication Fork: Enzymes and Mechanism

DNA replication begins at specific sequences called **origins of replication** (ori):
- Bacteria: 1 origin; replication proceeds bidirectionally
- Human genome: ~30,000 origins; multiple forks proceed simultaneously (essential for 2-3 hour S phase!)

#### Key Enzymes at the Replication Fork

| Enzyme | Function |
|---|---|
| Helicase | Unwinds double helix by breaking hydrogen bonds between base pairs |
| Primase | Synthesizes short RNA primers (provides 3'-OH for DNA polymerase) |
| DNA Polymerase III (prokaryotes) / Pol delta, epsilon (eukaryotes) | Extends new strand in 5' to 3' direction only |
| DNA Polymerase I (prokaryotes) | Removes RNA primers; replaces with DNA |
| DNA Ligase | Joins Okazaki fragments; seals nicks in DNA backbone |
| Topoisomerase | Relieves tension (supercoiling) ahead of replication fork |
| SSB proteins / RPA | Single-stranded binding proteins; prevent reannealing of separated strands |

### Leading vs. Lagging Strand

Since DNA polymerase can only add nucleotides in the 5' to 3' direction:

**Leading strand** (towards replication fork):
- Synthesized continuously in 5' to 3' direction
- Only one RNA primer needed
- Polymerase follows helicase directly

**Lagging strand** (away from replication fork):
- Synthesized in short fragments (<vocab term="Okazaki Fragments" definition="Short DNA fragments (1,000-2,000 nucleotides in prokaryotes, 100-200 in eukaryotes) synthesized on the lagging strand; later joined by DNA ligase.">Okazaki fragments</vocab>, each starting with an RNA primer)
- Polymerase works in discontinuous, backwards manner relative to fork movement
- RNA primers replaced with DNA by DNA Pol I; fragments joined by ligase
- Results in a "back-stitching" synthesis pattern

### DNA Proofreading and Repair

DNA polymerase has a **3' to 5' exonuclease** (proofreading) activity:
- If wrong nucleotide is added, polymerase detects the mismatched base
- Removes the incorrect nucleotide (3' to 5' direction)
- Inserts the correct nucleotide
- Error rate: ~1 mistake per 10 billion nucleotides after proofreading

**DNA repair systems:**
- **Mismatch repair** - corrects remaining post-replication errors (MSH2/MLH1 proteins)
- **Nucleotide excision repair** - removes UV-damaged thymine dimers (XPC proteins; mutated in xeroderma pigmentosum)
- **Base excision repair** - removes damaged/modified bases (glycosylases)
- **Double-strand break repair** - homologous recombination or NHEJ (error-prone)

### Telomeres and Telomerase

**Problem**: DNA polymerase cannot replicate chromosome ends (no primer placement possible at very 3' end)

**Solution**: <vocab term="Telomeres" definition="Repetitive DNA sequences (TTAGGG in humans) at chromosome ends that protect genes from shortening during replication; gradually shorten with each cell division in somatic cells.">Telomeres</vocab> - repetitive sequences (TTAGGG in humans) cap chromosome ends

**Telomerase**: enzyme in stem cells, cancer cells, and germ cells that extends telomeres:
- Contains an RNA template (AAUCCC) that serves as template for adding TTAGGG repeats
- Active in embryonic stem cells, cancer cells, and gametes
- Inactive in most somatic cells -> telomere shortening with each division -> cellular aging (Hayflick limit)
- Reactivated in ~85-90% of cancers (immortalization)

### AP Exam Focus

- Semiconservative replication: each daughter molecule has 1 old + 1 new strand
- DNA polymerase: only extends existing primer 5' to 3'; cannot start new strand alone
- Leading strand: continuous; lagging strand: Okazaki fragments (RNA primer needed for each)
- Helicase (unwinds), primase (makes primers), ligase (joins fragments), topoisomerase (relieves supercoils)
- Telomerase adds TTAGGG repeats to prevent chromosome shortening; active in cancer cells

## Replication

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<path d="M 20 100 L 180 100 L 300 40 L 420 40" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 20 115 L 180 115 L 300 175 L 420 175" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 380 50 L 190 95" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="280" y="65" fill="#22c55e" font-size="9" font-weight="bold">Leading Strand (➔ 5' to 3')</text>
<path d="M 230 145 L 195 125" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<path d="M 285 170 L 250 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="290" y="145" fill="#ef4444" font-size="9" font-weight="bold">Okazaki Fragments (Lagging)</text>
<text x="350" y="25" fill="#60a5fa" font-size="8" font-weight="bold">Template 3'</text>
<text x="350" y="190" fill="#60a5fa" font-size="8" font-weight="bold">Template 5'</text>
<defs>
<marker id="rep-fork-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

DNA replication is the biological process of producing two identical replicas of DNA from one original DNA molecule. It occurs during the S phase of the cell cycle.

### Semiconservative Replication

DNA replication is **semiconservative**: each newly synthesized double-stranded DNA molecule consists of one parental (template) strand and one newly synthesized daughter strand. This was confirmed by the Meselson-Stahl experiment.

### The Replication Fork: Enzymes and Mechanism

Replication begins at **origins of replication**, where the double helix is opened to form replication forks:

1. **Unwinding**: **Helicase** unwinds the double helix by breaking hydrogen bonds between base pairs. **Topoisomerase** relieves torsional strain ahead of the replication fork, and **SSB proteins** keep the single strands separated.
2. **Priming**: **Primase** synthesizes a short RNA primer complementary to the template strand, providing a free 3'-OH group for DNA polymerase to build upon.
3. **Elongation**: **DNA Polymerase III** adds nucleotides complementary to the template strand in the 5' to 3' direction.
   - **Leading strand**: Synthesized continuously towards the replication fork (runs 5' to 3').
   - **Lagging strand**: Synthesized discontinuously away from the replication fork (runs 3' to 5'). It is built in short segments called **Okazaki fragments**.
4. **Ligation**: **DNA Polymerase I** removes the RNA primers and replaces them with DNA. **DNA Ligase** seals the nicks in the sugar-phosphate backbone by joining the Okazaki fragments.

### The End-Replication Problem and Telomeres

Linear chromosomes face a structural challenge during replication:
- When the RNA primer at the very 5' end of the lagging strand is removed, DNA polymerase cannot replace it with DNA because there is no 3'-OH group to extend.
- Consequently, linear chromosomes shorten slightly with each round of replication (the **end-replication problem**).
- To prevent the loss of critical genetic information, eukaryotic chromosomes have **telomeres** at their ends — repetitive, non-coding DNA sequences (TTAGGG in humans).
- **Telomerase** is a specialized enzyme that extends telomeres in germ cells, stem cells, and cancer cells. It contains an RNA template that it uses to synthesize telomeric DNA, maintaining chromosome length.

| Enzyme | Role in Replication | Role in DNA Repair / Processing |
|---|---|---|
| Helicase | Unwinds DNA helix | Involved in nucleotide excision repair |
| DNA Polymerase III | Primary synthesis 5' to 3' | Proofreading (3' to 5' exonuclease activity) |
| DNA Polymerase I | Removes RNA primer, replaces with DNA | Fills gaps during base excision repair |
| Telomerase | Replicates chromosome ends | Reverse transcriptase carrying own RNA template |

### AP Exam Focus

- Memorize the direction of DNA synthesis (always 5' to 3') and read direction (always 3' to 5')
- Identify the roles of all replication enzymes (helicase, primase, DNA polymerase, ligase, topoisomerase)
- Explain why the lagging strand must be synthesized discontinuously in Okazaki fragments
`,
        questions: [
          {
            id: "6.1.1",
            text: "Which of the following describes a structural difference between purines and pyrimidines?",
            options: ["Purines have a single-ring structure, whereas pyrimidines have a double-ring structure.","Purines contain deoxyribose, whereas pyrimidines contain ribose.","Purines (A, G) have a double-ring structure, whereas pyrimidines (C, T, U) have a single-ring structure.","Purines contain phosphate groups, while pyrimidines do not."],
            correctIndex: 2,
            explanation: "Purines (Adenine and Guanine) consist of a double carbon-nitrogen ring, while pyrimidines (Cytosine, Thymine, Uracil) consist of a single ring.",
            unitId: 6
          },
          {
            id: "6.1.2",
            text: "A double-stranded DNA sample is found to consist of 30% Guanine. According to Chargaff's rules, what percentage of the sample is Thymine?",
            options: ["30%","20%","40%","70%"],
            correctIndex: 1,
            explanation: "If G = 30%, then C = 30% (total G-C = 60%). The remaining 40% must be split equally between A and T, meaning T = 20%.",
            unitId: 6
          },
          {
            id: "6.1.3",
            text: "The central dogma of molecular biology states information flows as:",
            options: ["Protein -> RNA -> DNA","DNA -> RNA -> Protein","RNA -> Protein -> DNA","Protein -> DNA -> RNA"],
            correctIndex: 1,
            explanation: "Central dogma: DNA is transcribed into RNA (transcription), which is translated into protein (translation). Information flows from nucleic acids to proteins.",
            unitId: 6
          },
          {
            id: "6.1.4",
            text: "Which correctly describes the antiparallel nature of double-stranded DNA?",
            options: ["Both strands have identical sequences","One strand runs 5'->3' while the complementary strand runs 3'->5'","Both strands run in the same direction","The strands wrap in parallel"],
            correctIndex: 1,
            explanation: "In double-stranded DNA, the two strands are antiparallel: one runs 5'->3' while the complementary strand runs 3'->5'.",
            unitId: 6
          },
          {
            id: "6.1.5",
            text: "Which correctly identifies all three structural differences of RNA from DNA?",
            options: ["RNA is double-stranded; RNA uses uracil; RNA has deoxyribose","RNA is single-stranded; RNA uses uracil instead of thymine; RNA contains ribose","RNA is circular; RNA uses thymine; RNA has no phosphate backbone","RNA contains adenine; RNA is always shorter; RNA has ribose"],
            correctIndex: 1,
            explanation: "RNA differs from DNA: typically single-stranded, contains ribose (not deoxyribose), and uses uracil (U) instead of thymine (T).",
            unitId: 6
          },
          {
            id: "6.1.6",
            text: "Which enzyme is responsible for linking Okazaki fragments together on the lagging strand during replication?",
            options: ["Helicase","DNA Ligase","Topoisomerase","DNA Polymerase I"],
            correctIndex: 1,
            explanation: "DNA Ligase catalyzes the formation of covalent phosphodiester bonds to join the sugar-phosphate backbones of adjacent Okazaki fragments.",
            unitId: 6
          },
          {
            id: "6.1.7",
            text: "Why is replication of the lagging strand discontinuous, occurring in short Okazaki fragments?",
            options: ["The lagging strand template runs 5' to 3', and DNA polymerase can only synthesize in the 5' to 3' direction.","Helicase only unwinds one strand at a time.","RNA primers cannot attach to the leading strand.","DNA ligase degrades the DNA template during replication."],
            correctIndex: 0,
            explanation: "DNA Polymerase can only add nucleotides to a free 3'-OH group, synthesizing in the 5' to 3' direction. Because the lagging strand template runs in the opposite direction of the unwinding fork, it must be synthesized in segments.",
            unitId: 6
          },
          {
            id: "6.1.8",
            text: "DNA replication is semi-conservative. This means:",
            options: ["Half the DNA strands are destroyed and rebuilt","Each new double helix has one original strand and one newly synthesized strand","Both strands of original DNA are fully replicated as new strands","Each replication produces two completely new double helices"],
            correctIndex: 1,
            explanation: "Semi-conservative replication: each parental strand serves as template. Result: two daughter double helices, each with one parental and one new strand.",
            unitId: 6
          },
          {
            id: "6.1.9",
            text: "Okazaki fragments are necessary because:",
            options: ["DNA polymerase can only add nucleotides to a free 3'-OH end, requiring lagging strand synthesis in short fragments","RNA primers need to be replaced with short DNA sequences","Replication can only proceed linearly","Okazaki fragments prevent replication errors"],
            correctIndex: 0,
            explanation: "DNA polymerase synthesizes only 5'->3'. On the lagging strand template (3'->5'), synthesis must proceed away from the fork in short discontinuous fragments.",
            unitId: 6
          },
          {
            id: "6.1.10",
            text: "DNA is labeled with 15N. After one replication in 14N medium, what will the molecules look like?",
            options: ["All heavy (15N/15N)","All hybrid (15N/14N)","Half heavy, half light","All light (14N/14N)"],
            correctIndex: 1,
            explanation: "Meselson-Stahl result: after one replication in 14N, each new double helix has one 15N parental strand and one new 14N strand - all molecules are hybrid.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.2",
        title: "Transcription, RNA Processing, and Translation",
        description: "Analyze the synthesis of pre-mRNA and subsequent modifications in eukaryotic cells. Study codon translation, ribosome machinery, and translation steps.",
        youtubeId: "oefAI2x2CQM",
        article: `
# Transcription, RNA Processing, and Translation

## Transcription and RNA Processing

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<rect x="20" y="45" width="90" height="50" rx="6" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" />
<text x="65" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DNA</text>
<text x="65" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Replication</text>
<path d="M 115 70 L 165 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="140" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Transcription</text>
<rect x="180" y="45" width="90" height="50" rx="6" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="1.5" />
<text x="225" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">mRNA</text>
<text x="225" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Codons</text>
<path d="M 275 70 L 325 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="300" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Translation</text>
<rect x="340" y="45" width="90" height="50" rx="6" fill="rgba(16,185,129,0.05)" stroke="#10b981" stroke-width="1.5" />
<text x="385" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Protein</text>
<text x="385" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Amino Acids</text>
<defs>
<marker id="dog-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Transcription is the synthesis of RNA from a DNA template. In eukaryotes, the primary transcript must undergo post-transcriptional modifications before translation.

### Eukaryotic Transcription

Transcription occurs in the nucleus and consists of three stages:
1. **Initiation**: **RNA Polymerase** binds to a promoter sequence (e.g., the TATA box) with the help of transcription factors. It unwinds the DNA double helix.
2. **Elongation**: RNA polymerase reads the **template strand** (3' to 5') and synthesizes a complementary RNA transcript in the 5' to 3' direction. The other DNA strand is the **coding strand** (its sequence matches the RNA, except T is replaced by U).
3. **Termination**: RNA polymerase reaches a termination sequence and releases the pre-mRNA transcript.

### Post-Transcriptional RNA Processing

In eukaryotes, pre-mRNA is modified before leaving the nucleus:
- **5' Capping**: A modified guanine nucleotide is added to the 5' end. It protects the transcript from degradation and helps ribosomes attach.
- **3' Poly-A Tail**: 100-200 adenine nucleotides are added to the 3' end. It protects the mRNA and aids in export from the nucleus.
- **RNA Splicing**: Introns (non-coding regions) are removed, and exons (coding regions) are joined together by a complex called the **spliceosome**.

### The Spliceosome Mechanism

The removal of introns is catalyzed by the spliceosome, a large molecular complex:
- It is composed of proteins and **small nuclear RNAs (snRNAs)**, which form small nuclear ribonucleoproteins (**snRNPs**, pronounced "snurps").
- The snRNAs base-pair with specific nucleotide sequences at the intron-exon boundaries.
- The spliceosome cuts the 5' end of the intron, folds it back to form a loop (**lariat** structure), cuts the 3' end, and ligates the exons together.

### Alternative Splicing

During splicing, different exons can be included or excluded:
- **Alternative splicing** allows a single gene to encode multiple distinct protein isoforms.
- This explains how the human genome of ~20,000 genes can produce over 100,000 proteins.

| Region | Receptors/Bound by | Function | Outcome |
|---|---|---|---|
| Promoter (TATA) | Transcription factors, RNA Pol | Directs initiation of transcription | Gene is transcribed |
| Intron | Spliceosome (snRNPs) | Excised during splicing | Excised as a lariat; not translated |
| Exon | Joined by spliceosome | Encodes polypeptide domains | Retained in mature mRNA; translated |

### AP Exam Focus

- Identify the template strand vs. coding strand and predict the RNA sequence transcribed from a DNA template
- Explain the role and significance of eukaryotic post-transcriptional modifications (capping, tailing, splicing)
- Describe how alternative splicing increases genetic complexity without increasing genome size

## Translation

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<rect x="20" y="45" width="90" height="50" rx="6" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" />
<text x="65" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DNA</text>
<text x="65" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Replication</text>
<path d="M 115 70 L 165 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="140" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Transcription</text>
<rect x="180" y="45" width="90" height="50" rx="6" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="1.5" />
<text x="225" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">mRNA</text>
<text x="225" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Codons</text>
<path d="M 275 70 L 325 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="300" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Translation</text>
<rect x="340" y="45" width="90" height="50" rx="6" fill="rgba(16,185,129,0.05)" stroke="#10b981" stroke-width="1.5" />
<text x="385" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Protein</text>
<text x="385" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Amino Acids</text>
<defs>
<marker id="dog-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

Translation is the process by which ribosomes decode the genetic message carried by mRNA to synthesize a specific polypeptide chain (protein).

### The Genetic Code

The genetic code is read in triplets called **codons**:
- There are 64 possible codons ($4^3$ combinations).
- 61 codons code for amino acids, starting with the **start codon** AUG (Methionine).
- 3 **stop codons** (UAA, UAG, UGA) terminate translation.
- The code is **redundant** (multiple codons code for the same amino acid) but **unambiguous** (each codon codes for only one amino acid).
- The code is nearly universal across all life, demonstrating common ancestry.

### Ribosome Structure and tRNA

- **Ribosomes** consist of ribosomal RNA (rRNA) and proteins, organized into large and small subunits. They contain three tRNA binding sites:
  - **A site (Aminoacyl)**: Holds the incoming tRNA carrying the next amino acid.
  - **P site (Peptidyl)**: Holds the tRNA carrying the growing polypeptide chain.
  - **E site (Exit)**: Discharges empty tRNAs.
- **tRNA (transfer RNA)**: Adapter molecules with an **anticodon** on one end (complementary to the mRNA codon) and a specific amino acid attached to the 3' end.

### The Translation Process

1. **Initiation**: The small ribosomal subunit binds the 5' end of mRNA and scans for the AUG start codon. The initiator tRNA binds, and the large ribosomal subunit joins to form the translation initiation complex.
2. **Elongation**:
   - Codon recognition: A tRNA enters the A site.
   - Peptide bond formation: rRNA catalyzes a peptide bond between the amino acid in the A site and the polypeptide in the P site.
   - Translocation: The ribosome shifts along the mRNA; the empty tRNA moves to the E site and exits, and the growing polypeptide chain moves to the P site.
3. **Termination**: When a stop codon enters the A site, a **release factor** protein binds, causing the ribosome to dissociate and release the finished polypeptide.

### Ribosome Targeting to the Rough ER

Polypeptides destined for membranes or secretion carry a **signal peptide** at their amino end:
- A **signal-recognition particle (SRP)** binds to the signal peptide as it emerges from the ribosome.
- The SRP escorts the ribosome to a receptor protein on the Rough ER membrane.
- The polypeptide is threaded through a **translocon channel** directly into the ER lumen during synthesis (co-translational translocation).

| Ribosome Site | Activity | tRNA State |
|---|---|---|
| A (Aminoacyl) Site | Codon recognition, receives new amino acid | Loaded with aminoacyl-tRNA |
| P (Peptidyl) Site | Peptide bond formation, peptide transfer | Holds peptidyl-tRNA |
| E (Exit) Site | tRNA dissociation and release | Discharges uncharged tRNA |

### AP Exam Focus

- Use a codon chart to translate an mRNA sequence into an amino acid chain
- Describe the structural roles of mRNA, tRNA, and rRNA in translation
- Predict the effect of mutations (e.g., base-pair substitutions, insertions, deletions) on the resulting protein sequence
`,
        questions: [
          {
            id: "6.2.1",
            text: "Which enzyme is directly responsible for synthesizing mRNA from a DNA template?",
            options: ["DNA Polymerase III","RNA Polymerase","Helicase","Ligase"],
            correctIndex: 1,
            explanation: "RNA Polymerase catalyzes transcription, binding to promoters and assembling ribonucleotides in a complementary 5' to 3' sequence.",
            unitId: 6
          },
          {
            id: "6.2.2",
            text: "Which mechanism allows a single eukaryotic gene to encode several distinct polypeptide structures?",
            options: ["Alternative RNA splicing","Polycistronic translation","Frame-shift mutagenesis","Reverse transcription"],
            correctIndex: 0,
            explanation: "Alternative splicing joins different combinations of exons from a single pre-mRNA, allowing one gene to yield multiple protein structures.",
            unitId: 6
          },
          {
            id: "6.2.3",
            text: "Which is NOT a eukaryotic pre-mRNA processing step?",
            options: ["Addition of 5' methyl-guanosine cap","Addition of poly-A tail at 3' end","Splicing out introns by the spliceosome","Addition of a start codon at the 5' end"],
            correctIndex: 3,
            explanation: "Pre-mRNA processing includes 5' capping, 3' poly-A tail addition, and intron splicing. The start codon (AUG) is already part of the mRNA sequence.",
            unitId: 6
          },
          {
            id: "6.2.4",
            text: "After splicing removes introns and joins exons, the result is:",
            options: ["The leader sequence of the ribosome","Mature mRNA ready for translation","A complementary DNA (cDNA) strand","Ribosomal RNA (rRNA)"],
            correctIndex: 1,
            explanation: "After splicing, the joined exons form a mature mRNA that is exported to the cytoplasm for translation.",
            unitId: 6
          },
          {
            id: "6.2.5",
            text: "Which RNA polymerase transcribes protein-coding genes in eukaryotes?",
            options: ["RNA polymerase I","RNA polymerase II","RNA polymerase III","DNA polymerase I"],
            correctIndex: 1,
            explanation: "In eukaryotes, RNA polymerase II transcribes protein-coding genes (mRNA precursors). RNA pol I makes rRNA; RNA pol III makes tRNA and small RNAs.",
            unitId: 6
          },
          {
            id: "6.2.6",
            text: "What is the codon sequence that initiates the translation of almost all eukaryotic mRNA transcripts?",
            options: ["UAA","AUG","UGA","UAG"],
            correctIndex: 1,
            explanation: "AUG is the universal start codon, coding for the amino acid Methionine.",
            unitId: 6
          },
          {
            id: "6.2.7",
            text: "Which site on the ribosome accepts the incoming tRNA carrying a new amino acid during elongation?",
            options: ["A-site","P-site","E-site","T-site"],
            correctIndex: 0,
            explanation: "The A (Aminoacyl) site holds the incoming tRNA carrying the next amino acid to be added to the chain.",
            unitId: 6
          },
          {
            id: "6.2.8",
            text: "The genetic code is degenerate (redundant). This means:",
            options: ["The same amino acid can be encoded by multiple different codons","The same codon can encode multiple amino acids","The genetic code varies between species","Each codon encodes exactly one amino acid with no redundancy"],
            correctIndex: 0,
            explanation: "Multiple codons can specify the same amino acid (e.g., six codons for leucine). With 64 codons and only 20 amino acids, redundancy is necessary.",
            unitId: 6
          },
          {
            id: "6.2.9",
            text: "During elongation, a new aminoacyl-tRNA enters the ribosome's:",
            options: ["E site","P site","A site","Either P or A site"],
            correctIndex: 2,
            explanation: "A new aminoacyl-tRNA (carrying the next amino acid) enters the A (aminoacyl) site. P site holds the growing chain; E site is where deacylated tRNA exits.",
            unitId: 6
          },
          {
            id: "6.2.10",
            text: "A missense mutation changes codon AAA (Lys) to AGA (Arg). The likely effect on protein function is:",
            options: ["No effect since only DNA changed","Possible function change depending on the amino acid role in the protein","Complete loss of function in all cases","Destruction of mRNA by nonsense-mediated decay"],
            correctIndex: 1,
            explanation: "Missense mutations change one amino acid. Effect depends on location and chemical properties. Active site change may destroy function; peripheral change may have little effect.",
            unitId: 6
          }
        ]
      },
      {
        id: "6.3",
        title: "Regulation of Gene Expression, Mutations, and Biotechnology",
        description: "Examine prokaryotic operons and eukaryotic epigenetic/transcription factor controls. Study how differential gene expression drives cell differentiation and specialization. Classify nucleotide mutations and analyze their impact on polypeptide folding. Analyze PCR, gel electrophoresis, bacterial transformation, and DNA sequencing.",
        youtubeId: "hD1-9e7G4Wk",
        article: `
# Regulation of Gene Expression, Mutations, and Biotechnology

## Gene Expression Regulation

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<rect x="0" y="60" width="450" height="25" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" stroke-width="1" />
<text x="35" y="50" fill="#60a5fa" font-size="9" font-weight="bold">Plasma Membrane</text>
<circle cx="80" cy="25" r="8" fill="#ef4444" />
<text x="80" y="28" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">L</text>
<path d="M 80 35 L 80 58" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
<rect x="65" y="50" width="30" height="45" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5" />
<text x="80" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">GPCR</text>
<circle cx="120" cy="85" r="12" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
<text x="120" y="88" fill="#ffffff" font-size="8" text-anchor="middle">Gα</text>
<rect x="180" y="50" width="40" height="45" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="1.5" />
<text x="200" y="76" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">AC</text>
<path d="M 98 75 Q 110 75, 115 75" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<path d="M 132 80 Q 150 72, 175 72" fill="none" stroke="#ffffff" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<circle cx="200" cy="130" r="14" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" stroke-width="1.5" />
<text x="200" y="133" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">cAMP</text>
<path d="M 200 98 L 200 112" fill="none" stroke="#8b5cf6" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<rect x="290" y="115" width="130" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" stroke-width="1.5" />
<text x="355" y="133" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Phosphorylation Cascade</text>
<path d="M 218 130 L 285 130" fill="none" stroke="#10b981" stroke-width="1.5" marker-end="url(#sig-arrow)" />
<defs>
<marker id="sig-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Gene Regulation" definition="The mechanisms controlling when, where, and how much a gene is expressed; allows cells with identical DNA to have different structures and functions depending on which genes are active.">Gene regulation</vocab> is how cells control which genes are expressed at any given time. Every cell in your body has the same DNA, yet liver cells differ from neurons because different genes are active in each cell type.

### Levels of Gene Regulation

Gene expression is controlled at multiple levels:

| Level | Mechanism | Example |
|---|---|---|
| Chromatin structure | Histone modification, DNA methylation | Heterochromatin = gene silencing |
| Transcriptional | Transcription factors, enhancers/promoters | lac operon, steroid hormones |
| Post-transcriptional | RNA processing, stability, alternative splicing | miRNA, siRNA |
| Translational | Ribosome access, initiation factors | Iron-regulatory protein |
| Post-translational | Protein modification, localization, degradation | Ubiquitin-proteasome system |

### Chromatin Remodeling: Epigenetic Regulation

<vocab term="Epigenetics" definition="Changes in gene expression that do not involve changes to the DNA sequence itself; mediated by chemical modifications to DNA or histones that affect chromatin structure and gene accessibility.">Epigenetics</vocab> regulates gene expression through chromatin modifications:

**Histone modification:**
- Histone acetylation (by HAT enzymes): adds acetyl group to lysine residues, loosens chromatin -> gene activation (euchromatin)
- Histone deacetylation (by HDAC enzymes): removes acetyl groups, compacts chromatin -> gene repression (heterochromatin)
- Histone methylation: can activate or repress depending on which residue is methylated

**DNA methylation:**
- Addition of methyl group to cytosine (usually at CpG dinucleotides)
- Generally associated with gene silencing
- Heritable through cell division (epigenetic inheritance)
- Important in genomic imprinting, X-chromosome inactivation, and cancer

**X-chromosome inactivation:**
- In female mammals, one X chromosome is randomly inactivated per cell (early development)
- Inactive X becomes highly condensed Barr body (heterochromatin)
- Different cells inactivate different X chromosomes -> mosaic expression
- Example: calico cats (orange and black patches from different X chromosomes)

### Transcriptional Regulation

#### Transcription Factor Binding

<vocab term="Transcription Factors" definition="Proteins that bind specific DNA sequences (promoters, enhancers, silencers) to activate or repress transcription; the primary mechanism for differential gene expression.">Transcription factors</vocab> control RNA polymerase II activity:

- **General transcription factors**: bind TATA box and recruit RNA Pol II (required for all genes)
- **Specific transcription factors (activators)**: bind enhancers -> increase transcription rate
- **Repressors**: bind silencers or prevent activator binding -> decrease transcription

#### Enhancers and Silencers

**Enhancers:**
- DNA sequences that increase transcription rate when bound by activator proteins
- Can be thousands of base pairs away from the gene (loops bring them to promoter)
- Tissue-specific: Hemoglobin enhancers only active in red blood cell precursors

**Silencers:**
- DNA sequences that decrease transcription when bound by repressor proteins
- Can also be far from the gene

#### The lac Operon (Prokaryotic Model)

A classic example of gene regulation (not directly on AP exam but illustrative):
- lac genes encode enzymes for lactose metabolism
- Repressor (lacI product) normally binds operator -> blocks transcription
- When lactose present: allolactose (lactose derivative) binds repressor -> repressor releases operator -> transcription occurs
- CAP activator: cAMP (high when glucose absent) binds CAP protein -> CAP binds promoter -> enhances transcription
- Dual control: genes active only when lactose is present AND glucose is absent

### Post-Transcriptional Regulation

#### MicroRNAs (miRNA) and Small Interfering RNAs (siRNA)

<vocab term="miRNA" definition="Small (21-23 nt) non-coding RNA molecules that bind to complementary sequences in target mRNAs and inhibit translation or promote mRNA degradation; regulate hundreds of genes.">miRNAs</vocab> are short RNA molecules that regulate gene expression:
- Encoded in genome; processed from longer hairpin precursors
- Bind to complementary sequences in 3' UTR of target mRNAs
- Either block translation or promote mRNA degradation
- One miRNA can regulate hundreds of target genes
- Critical in development, differentiation, and cancer

**RNAi (RNA interference):**
- Introduced double-stranded RNA triggers RISC (RNA-induced silencing complex)
- RISC cleaves target mRNA with complementary sequence
- Used as research tool (siRNA) and potential therapeutic (gene silencing)

#### mRNA Stability

mRNA half-lives vary from minutes to days, affecting protein levels:
- AU-rich elements (AREs) in 3' UTR signal rapid degradation
- Deadenylation (poly-A tail removal) followed by decapping -> degradation
- Iron-regulatory protein: when iron is low, binds mRNA -> protects from degradation; when iron is high -> mRNA degraded

### AP Exam Focus

- Gene regulation allows cells with identical DNA to have different phenotypes (differential gene expression)
- Histone acetylation = gene activation; DNA methylation = gene silencing
- Enhancers activate transcription over large distances through DNA looping
- miRNA: blocks translation or promotes mRNA degradation of target genes
- Epigenetics: heritable changes in gene expression WITHOUT changes to DNA sequence

## Mutation

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<path d="M 20 100 L 180 100 L 300 40 L 420 40" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 20 115 L 180 115 L 300 175 L 420 175" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 380 50 L 190 95" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="280" y="65" fill="#22c55e" font-size="9" font-weight="bold">Leading Strand (➔ 5' to 3')</text>
<path d="M 230 145 L 195 125" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<path d="M 285 170 L 250 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="290" y="145" fill="#ef4444" font-size="9" font-weight="bold">Okazaki Fragments (Lagging)</text>
<text x="350" y="25" fill="#60a5fa" font-size="8" font-weight="bold">Template 3'</text>
<text x="350" y="190" fill="#60a5fa" font-size="8" font-weight="bold">Template 5'</text>
<defs>
<marker id="rep-fork-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Mutation" definition="A permanent change in the nucleotide sequence of DNA; mutations can affect single nucleotides (point mutations) or larger chromosomal regions; the ultimate source of all genetic variation.">Mutations</vocab> are changes in the DNA sequence. While often deleterious, they are the raw material for evolution and the ultimate source of genetic diversity.

### Types of Point Mutations (Single Nucleotide)

#### Substitutions

| Substitution Type | Definition | Effect on Protein | Example |
|---|---|---|---|
| Silent (synonymous) | Base change; same amino acid coded | No change to protein | GAA -> GAG (both = Glu) |
| Missense (conservative) | Base change; similar amino acid | Minor or no functional change | GAA -> GUA (Glu -> Val, but similar polarity) |
| Missense (non-conservative) | Base change; different amino acid | Often altered function | GAA -> GCA (Glu -> Ala, loss of charge) |
| Nonsense | Creates premature stop codon | Truncated, nonfunctional protein | GAA -> UAA (Glu -> Stop!) |

**Sickle cell disease example:**
- Single A -> T substitution in 6th codon of beta-globin gene
- GAG (Glu) -> GTG (Val): change from charged to nonpolar amino acid
- Valine causes hemoglobin to polymerize at low oxygen -> red cells deform into sickle shape
- One nucleotide change = life-threatening genetic disease

#### Insertions and Deletions (Indels)

<vocab term="Frameshift Mutation" definition="A mutation caused by insertion or deletion of nucleotides that shifts the reading frame of codons, potentially changing all downstream amino acids and usually creating a premature stop codon.">Frameshift mutations</vocab> are particularly damaging:

- Insertions or deletions of non-multiples of 3 shift the reading frame
- All codons downstream are read incorrectly
- Usually generates a premature stop codon shortly after the mutation

Example (one nucleotide deletion):
- Normal: ATG-CAT-GGA-TAG (Met-His-Gly-Stop)
- After deletion of 2nd nucleotide: ATG-ATG-GAT-AG... (Met-Met-Asp-...completely different!)

Insertions/deletions of 3 nucleotides (or multiples of 3): add or remove amino acids but maintain reading frame (less damaging).

### Causes of Mutations

#### Spontaneous Mutations
- Replication errors: wrong base inserted by DNA polymerase (~1 per 10^7 bp before proofreading)
- Tautomeric shifts: transient alternate forms of bases that form incorrect base pairs
- Depurination: spontaneous loss of purine base leaves abasic site (~10,000 per cell per day)
- Deamination: conversion of cytosine to uracil (~100-500 per cell per day)

#### Induced Mutations (Mutagens)

| Mutagen Type | Examples | Mechanism |
|---|---|---|
| Radiation - UV | Sunlight | Thymine dimers (adjacent T's covalently linked); repaired by nucleotide excision repair |
| Radiation - ionizing | X-rays, gamma rays | Double-strand breaks; free radical damage |
| Chemical - base analogs | 5-bromouracil | Incorporated like T; base-pairs with G -> AT to GC transitions |
| Chemical - intercalating agents | Ethidium bromide | Insert between base pairs -> frameshift mutations |
| Chemical - alkylating agents | Nitrogen mustard, nitrosoguanidine | Add alkyl groups to bases -> mispairing |
| Chemical - deaminating agents | Nitrous acid | Converts C to U -> G:C to A:T transitions |

### Chromosomal Mutations

Large-scale DNA rearrangements:

| Type | Description | Example/Consequence |
|---|---|---|
| Deletion | Loss of chromosomal segment | Cri-du-chat syndrome (5p-) |
| Duplication | Repeated segment | Can lead to gene family evolution |
| Inversion | Segment flipped | May disrupt gene expression if in gene |
| Translocation | Segment moved to different chromosome | Philadelphia chromosome (BCR-ABL) -> CML |
| Amplification | Many extra gene copies | HER2 amplification in breast cancer |

### Mutations and Cancer

Cancer is fundamentally a disease of accumulated mutations in somatic cells:

- **Driver mutations**: mutations that directly contribute to cancer development (affect oncogenes or tumor suppressors)
- **Passenger mutations**: mutations that don't contribute to cancer but occur in same cell
- Average cancer: 2-6 driver mutations required before cancer develops
- Cancer results from: oncogene activation + tumor suppressor inactivation

<vocab term="Oncogene" definition="A mutated or overexpressed proto-oncogene that promotes excessive cell proliferation; acts in a gain-of-function, dominant manner (one mutant allele is sufficient to contribute to cancer).">Oncogenes</vocab> are accelerators stuck in the ON position; <vocab term="Tumor Suppressor Genes" definition="Genes whose normal function is to restrain cell growth; loss of both alleles (recessive) contributes to cancer development; examples include p53, Rb, and BRCA1.">tumor suppressors</vocab> are broken brakes.

### Hereditary vs. Somatic Mutations

| Mutation Type | Location | Inherited? | Effect |
|---|---|---|---|
| Germline (hereditary) | Gametes (sperm/egg) | Yes, passed to offspring | Genetic disease in offspring |
| Somatic | Body cells | No | Disease only in affected individual (e.g., cancer) |

### AP Exam Focus

- Point mutations: silent, missense, nonsense; frameshift from insertions/deletions
- Sickle cell: single nucleotide substitution (A->T in codon 6); missense mutation
- Nonsense mutations create premature stop codons -> truncated protein
- Frameshift mutations: most damaging because they scramble all downstream codons
- UV light causes thymine dimers; repaired by nucleotide excision repair (XP disease if defective)

## Biotechnology

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<path d="M 20 100 L 180 100 L 300 40 L 420 40" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 20 115 L 180 115 L 300 175 L 420 175" fill="none" stroke="#60a5fa" stroke-width="3" />
<path d="M 380 50 L 190 95" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="280" y="65" fill="#22c55e" font-size="9" font-weight="bold">Leading Strand (➔ 5' to 3')</text>
<path d="M 230 145 L 195 125" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<path d="M 285 170 L 250 150" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#rep-fork-arrow)" />
<text x="290" y="145" fill="#ef4444" font-size="9" font-weight="bold">Okazaki Fragments (Lagging)</text>
<text x="350" y="25" fill="#60a5fa" font-size="8" font-weight="bold">Template 3'</text>
<text x="350" y="190" fill="#60a5fa" font-size="8" font-weight="bold">Template 5'</text>
<defs>
<marker id="rep-fork-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Biotechnology" definition="The use of biological systems, organisms, or processes to develop and manufacture products; in molecular biology, refers to DNA technology tools used to manipulate genetic information.">Biotechnology</vocab> uses molecular biology techniques to analyze, manipulate, and apply biological systems. Key techniques are testable on the AP Biology exam.

### Polymerase Chain Reaction (PCR)

<vocab term="PCR" definition="Polymerase chain reaction; a technique for exponentially amplifying a specific DNA sequence using repeated cycles of denaturation, annealing, and extension; can produce billions of copies from a single molecule.">PCR</vocab> amplifies specific DNA sequences exponentially in vitro:

**Three-Step Cycle (repeated 25-35 times):**
1. **Denaturation**: Heat to ~94-96 degrees C -> double helix separates into single strands
2. **Annealing**: Cool to ~50-65 degrees C -> primers bind to complementary sequences flanking target region
3. **Extension**: Heat to ~72 degrees C -> Taq polymerase extends from primers in 5' to 3' direction

**Key components:**
- Template DNA (the DNA to be amplified)
- Two primers (short, specific DNA sequences flanking the target)
- Taq polymerase (heat-stable polymerase from Thermus aquaticus)
- dNTPs (deoxynucleotide triphosphates: dATP, dGTP, dCTP, dTTP)
- MgCl2 and buffer

**Result**: After n cycles -> 2^n copies of the target sequence (theoretically)
After 30 cycles -> ~10^9 copies from a single molecule!

**Applications:** Forensic DNA analysis, COVID-19 testing (RT-PCR), prenatal diagnosis, evolutionary studies, cloning

### Gel Electrophoresis

Separates DNA (or RNA, proteins) by size using an electric field through gel matrix:

**Procedure:**
1. DNA samples loaded into wells at negative electrode end of agarose gel
2. Electric current applied; DNA (negatively charged) migrates toward positive electrode
3. Smaller fragments move faster (less resistance in gel matrix)
4. DNA visualized with ethidium bromide (intercalates and fluoresces under UV)

**Results:**
- Molecular weight standards (ladder) run alongside to determine fragment sizes
- Each band = a specific size of DNA fragment
- Applications: sizing PCR products, RFLP analysis, identifying mutations

### Restriction Enzymes and Cloning

<vocab term="Restriction Enzymes" definition="Bacterial endonucleases that cut double-stranded DNA at specific recognition sequences (usually 4-8 bp palindromes); used in recombinant DNA technology to cut DNA for cloning.">Restriction enzymes</vocab> (endonucleases) cut DNA at specific recognition sequences:

- Most recognize palindromic sequences (read the same on both strands, 5' to 3')
- EcoRI recognizes: 5'-GAATTC-3' and cuts between G and A on both strands
- Produces either **sticky ends** (staggered cuts, single-stranded overhangs) or **blunt ends**
- Sticky ends can hybridize with complementary sticky ends -> facilitate ligation

**Cloning a gene:**
1. Cut gene of interest and vector (plasmid or viral) with same restriction enzyme
2. Mix insert and vector -> complementary sticky ends hybridize
3. DNA ligase seals the nicks -> recombinant DNA molecule formed
4. Transform bacteria with recombinant plasmid (heat shock or electroporation)
5. Select colonies with antibiotic resistance (if vector has resistance gene)
6. Screen colonies for insert (blue-white screening, PCR, restriction digest)

### Gene Editing: CRISPR-Cas9

<vocab term="CRISPR-Cas9" definition="A bacterial immune-derived genome editing system; a guide RNA directs Cas9 nuclease to a specific DNA sequence, creating a double-strand break that can be repaired to create targeted mutations or insertions.">CRISPR-Cas9</vocab> (Clustered Regularly Interspaced Short Palindromic Repeats):
- Uses guide RNA (gRNA) to direct Cas9 nuclease to specific genomic location
- Cas9 creates a double-strand break
- Cell repairs the break by NHEJ (error-prone -> knockout) or HDR (precise editing if template provided)
- More specific, efficient, and easier than previous genome editing methods (ZFN, TALEN)
- Applications: creating knockout organisms, correcting disease mutations, agricultural improvements

### DNA Fingerprinting (Forensic Analysis)

Uses PCR to amplify STRs (short tandem repeats) - sequences that vary in length between individuals:
- Every person has a unique pattern of STR lengths (except identical twins)
- STR profiles from crime scene compared to suspects or national database (CODIS)
- Statistical probability of a match occurring by chance: 1 in trillions

### Applications Summary

| Technique | Principle | Applications |
|---|---|---|
| PCR | Exponential amplification | Diagnostics, forensics, cloning |
| Gel electrophoresis | Size-based DNA separation | Fragment analysis, genotyping |
| Restriction enzymes | Specific DNA cutting | Cloning, RFLP analysis |
| DNA cloning | Recombinant DNA in vectors | Protein production, research |
| CRISPR-Cas9 | Guided genome editing | Disease research, therapeutics |
| DNA sequencing | Reading nucleotide sequence | Genomics, personalized medicine |

### AP Exam Focus

- PCR: denaturation (heat), annealing (primers bind), extension (Taq polymerase) - three steps per cycle
- Gel electrophoresis: smaller fragments migrate further toward positive electrode
- Restriction enzymes: cut at specific palindromic sequences; sticky ends facilitate cloning
- CRISPR: guide RNA directs Cas9 to specific sequence; creates targeted double-strand break
- Recombinant DNA: insert gene into vector; transform bacteria; produces recombinant protein (e.g., insulin)

## Viral Replication

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<rect x="20" y="45" width="90" height="50" rx="6" fill="rgba(96,165,250,0.05)" stroke="#60a5fa" stroke-width="1.5" />
<text x="65" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">DNA</text>
<text x="65" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Replication</text>
<path d="M 115 70 L 165 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="140" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Transcription</text>
<rect x="180" y="45" width="90" height="50" rx="6" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" stroke-width="1.5" />
<text x="225" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">mRNA</text>
<text x="225" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Codons</text>
<path d="M 275 70 L 325 70" fill="none" stroke="#ffffff" stroke-width="2" marker-end="url(#dog-arrow)" />
<text x="300" y="60" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Translation</text>
<rect x="340" y="45" width="90" height="50" rx="6" fill="rgba(16,185,129,0.05)" stroke="#10b981" stroke-width="1.5" />
<text x="385" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Protein</text>
<text x="385" y="85" fill="#a1a1aa" font-size="8" text-anchor="middle">Amino Acids</text>
<defs>
<marker id="dog-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

<vocab term="Viruses" definition="Non-cellular, obligate intracellular parasites consisting of a nucleic acid genome (DNA or RNA) enclosed in a protein coat (capsid); use the host cell's machinery to replicate.">Viruses</vocab> are infectious particles that hijack host cellular machinery to replicate. They are not considered living organisms because they lack the ability to reproduce independently or perform metabolism on their own.

### Viral Structure

Basic viral components:
- **Genetic material**: DNA or RNA (single- or double-stranded; linear or circular)
- **Capsid**: protein coat surrounding the genome; highly specific shape
- **Envelope** (some viruses): lipid bilayer derived from host membrane; contains viral glycoproteins
- **Attachment proteins**: bind specific host cell receptors (determines host range)

| Virus Type | Genome | Examples |
|---|---|---|
| dsDNA | Double-stranded DNA | Herpes, smallpox, adenovirus |
| ssDNA | Single-stranded DNA | Parvovirus |
| dsRNA | Double-stranded RNA | Rotavirus |
| +ssRNA | Positive-sense ssRNA | Poliovirus, Coronavirus (SARS-CoV-2) |
| -ssRNA | Negative-sense ssRNA | Influenza, Ebola, measles |
| Retrovirus | ssRNA (uses reverse transcriptase) | HIV, HTLV |

### Bacteriophage Replication: Lytic vs. Lysogenic Cycles

#### Lytic Cycle
Virulent phages immediately destroy the host:
1. **Attachment**: phage tail fibers bind specific receptors on bacterial cell wall
2. **Injection**: phage injects DNA into bacterium
3. **Takeover**: phage DNA directs synthesis of phage proteins and DNA using host machinery
4. **Assembly**: new phage particles assembled inside bacterium
5. **Lysis**: lysozyme enzyme degrades cell wall; ~100-300 new phages released

#### Lysogenic Cycle
Temperate phages can integrate into host genome:
1. **Attachment and injection**: same as lytic cycle
2. **Integration**: phage DNA (prophage) inserts into bacterial chromosome
3. **Replication**: prophage replicates with host genome every time the bacterium divides
4. **Induction**: stress signals (UV light, chemicals) -> excision of prophage from chromosome
5. **Lytic cycle**: excised phage DNA enters lytic cycle -> host cell lysed

**Lysogenic conversion**: When prophage genes alter host cell phenotype:
- Cholera bacterium only produces toxin when infected with specific phage (CTX phage)
- Diphtheria toxin encoded by phage genome

### Animal Virus Replication

#### General Steps for Enveloped Animal Virus (e.g., HIV, Influenza):

1. **Attachment**: Viral surface proteins bind specific host cell receptors
   - Specificity determines host range (HIV: binds CD4 on T helper cells)
2. **Entry/Penetration**: Virus enters cell
   - Enveloped viruses: membrane fusion with plasma membrane or endosomal membrane
   - Non-enveloped: endocytosis, then capsid disruption
3. **Uncoating**: Capsid removed; viral genome released into cytoplasm (or nucleus)
4. **Replication and transcription**: Viral genome replicates; viral mRNAs transcribed
5. **Translation**: Host ribosomes translate viral mRNAs -> viral proteins
6. **Assembly**: New viral particles assembled
7. **Release**: New virions released by budding (enveloped) or lysis

#### HIV (Retrovirus) - Special Replication

HIV has a unique replication strategy using reverse transcriptase:

1. HIV binds CD4 receptor (with CCR5 coreceptor) on T helper cells
2. HIV RNA injected into cell
3. <vocab term="Reverse Transcriptase" definition="An RNA-dependent DNA polymerase found in retroviruses like HIV; synthesizes DNA from an RNA template, the reverse of the typical DNA to RNA flow of information.">Reverse transcriptase</vocab> makes DNA from RNA genome (RNA -> DNA)
4. Integrase inserts viral DNA (provirus) into host chromosome
5. Host RNA polymerase transcribes proviral DNA -> viral RNA and mRNA
6. Viral proteins made; assembled
7. New HIV particles bud from cell membrane

**Why HIV is hard to cure:**
- Proviral DNA persists in long-lived T cells (latent reservoir)
- HIV mutates rapidly (reverse transcriptase lacks proofreading)
- Antiretroviral therapy (HAART) controls but cannot eliminate virus

### Influenza and Antigenic Variation

Influenza A mutates its surface proteins (hemagglutinin - HA, neuraminidase - NA) rapidly:
- **Antigenic drift**: small mutations in HA/NA genes -> slightly new variants (requires annual flu vaccines)
- **Antigenic shift**: two different flu strains infect same cell -> genetic reassortment -> completely new HA/NA combination -> pandemic risk (e.g., 1918 Spanish flu, 2009 H1N1)

### COVID-19 (SARS-CoV-2): Coronavirus Structure

<vocab term="Coronavirus" definition="A positive-sense ssRNA virus with characteristic spike proteins; SARS-CoV-2 causes COVID-19 and spreads via respiratory droplets; its spike protein binds ACE2 receptor on respiratory cells.">Coronaviruses</vocab> have spike proteins (S protein) that bind ACE2 receptors:
- RNA genome (~30 kb - largest known RNA virus genome)
- Spike protein mutates rapidly -> variants (Alpha, Delta, Omicron)
- mRNA vaccines target spike protein -> immune system makes anti-spike antibodies

### AP Exam Focus

- Bacteriophage: lytic cycle (immediate lysis) vs. lysogenic cycle (DNA integrates as prophage)
- HIV: RNA -> reverse transcriptase -> DNA -> integrase inserts into genome -> provirus
- Reverse transcriptase lacks proofreading -> rapid HIV mutation -> drug resistance
- Viral host range determined by specificity of attachment proteins for host receptors
- Antigenic shift in influenza: reassortment of two strains -> potential pandemic virus
`,
        questions: [
          {
            id: "6.3.1",
            text: "Which of the following chromatin modifications is associated with chromatin loosening, making DNA accessible to RNA polymerase and promoting transcription?",
            options: ["DNA Methylation","Histone Acetylation","Spliceosome assembly","Guanine capping"],
            correctIndex: 1,
            explanation: "Histone acetylation neutralizes the positive charge of histones, reducing their attraction to negatively charged DNA, which loosens chromatin and permits transcription.",
            unitId: 6
          },
          {
            id: "6.3.2",
            text: "In E. coli lac operon, transcription is repressed without lactose because:",
            options: ["RNA polymerase is absent","The lac repressor binds the operator, blocking RNA polymerase from transcribing structural genes","The promoter is destroyed","Lactose acts as an activator"],
            correctIndex: 1,
            explanation: "Without lactose, the lac repressor (encoded by lacI) binds to the operator between the promoter and structural genes, physically blocking RNA polymerase.",
            unitId: 6
          },
          {
            id: "6.3.3",
            text: "Which describes post-translational regulation of gene expression?",
            options: ["Regulation of mRNA transcription rates by transcription factors","Regulation of mRNA stability by microRNAs","Protein modification after translation, such as phosphorylation or ubiquitination","Alternative splicing of pre-mRNA"],
            correctIndex: 2,
            explanation: "Post-translational regulation occurs after translation. Phosphorylation (activates/deactivates proteins) and ubiquitination (targets for proteasome degradation) control protein activity.",
            unitId: 6
          },
          {
            id: "6.3.4",
            text: "What term describes the maternal substances (proteins and RNAs) placed in the egg cell that influence early embryonic development by directing cell specialization?",
            options: ["Operons","Cytoplasmic determinants","Okazaki fragments","Promoter sequences"],
            correctIndex: 1,
            explanation: "Cytoplasmic determinants are maternal components distributed unevenly in the egg cell. After division, different embryonic cells inherit different determinants, initiating differentiation.",
            unitId: 6
          },
          {
            id: "6.3.5",
            text: "Transcription factors in cell differentiation function by:",
            options: ["Directly converting one cell type to another by rewriting DNA","Binding regulatory regions to activate or repress transcription of specific genes in specific cell types","Modifying translation efficiency of all mRNAs equally","Signaling neighboring cells to differentiate"],
            correctIndex: 1,
            explanation: "Transcription factors bind specific DNA sequences in gene promoters/enhancers to regulate transcription. Their combination in a cell determines its gene expression profile and identity.",
            unitId: 6
          },
          {
            id: "6.3.6",
            text: "Which of the following point mutations is most likely to result in a completely nonfunctional, truncated protein?",
            options: ["A silent mutation near the 5' end","A nonsense mutation introducing an early stop codon","A missense mutation replacing a nonpolar R-group with another nonpolar R-group","An alternative splicing event"],
            correctIndex: 1,
            explanation: "A nonsense mutation converts a codon into a premature stop codon, terminating translation early and deleting the remaining protein structure.",
            unitId: 6
          },
          {
            id: "6.3.7",
            text: "A frameshift mutation results from:",
            options: ["Substituting one base pair for another","Inserting or deleting base pairs not divisible by three, altering the reading frame","Duplicating a large chromosomal segment","Replacing a codon with a stop codon"],
            correctIndex: 1,
            explanation: "The genetic code is read in triplets. Insertion or deletion of bases not divisible by 3 shifts ALL downstream codons, usually producing a nonfunctional protein.",
            unitId: 6
          },
          {
            id: "6.3.8",
            text: "UV radiation causes thymine dimers. If unrepaired during replication:",
            options: ["Thymine is replaced with uracil","Errors are introduced or replication stalls, potentially causing mutations or cell death","DNA is immediately destroyed by restriction enzymes","Extra chromosomes are produced"],
            correctIndex: 1,
            explanation: "Thymine dimers distort the DNA helix, blocking DNA polymerase. Unrepaired errors can lead to mutations in genes like p53, contributing to skin cancer.",
            unitId: 6
          },
          {
            id: "6.3.9",
            text: "What is the significance of using Taq polymerase, isolated from Thermus aquaticus, in PCR?",
            options: ["It does not require an RNA primer to initiate synthesis.","It is heat-stable and remains functional after the high-temperature denaturation step.","It actively excises introns from eukaryotic DNA templates.","It seals Okazaki fragments together without ATP."],
            correctIndex: 1,
            explanation: "PCR requires heating samples to 95 degrees C to separate DNA strands. Standard enzymes would denature, but Taq Polymerase evolved in hot springs and remains stable at high temperatures.",
            unitId: 6
          },
          {
            id: "6.3.10",
            text: "Each PCR cycle begins with which condition?",
            options: ["High temperature (94-98 degrees C) to denature double-stranded DNA into single strands","Low temperature (4 degrees C) to preserve DNA","Addition of restriction enzymes","The presence of reverse transcriptase"],
            correctIndex: 0,
            explanation: "PCR cycles: denaturation (~95 degrees C separates strands), annealing (primers bind template), and extension (DNA polymerase synthesizes new strands).",
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
        title: "Principles of Natural Selection and Population Genetics",
        description: "Analyze Darwinian premises and how environmental pressures shift populations. Examine selective pressures, adaptation, and evolutionary fitness. Compare artificial selection and domestic breeding with natural selection. Study genetic drift, mutations, gene flow, and population bottlenecks.",
        youtubeId: "7VM9YxmULuo",
        article: `
# Principles of Natural Selection and Population Genetics

## Natural Selection

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<rect x="30" y="25" width="340" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#a1a1aa" stroke-width="1.5" />
<text x="200" y="45" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Allele & Genotype Frequencies</text>
<text x="120" y="80" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">p + q = 1</text>
<text x="270" y="80" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">p² + 2pq + q² = 1</text>
<text x="120" y="105" fill="#a1a1aa" font-size="8" text-anchor="middle">p = freq of A  |  q = freq of a</text>
<text x="270" y="105" fill="#a1a1aa" font-size="8" text-anchor="middle">p² = AA  |  2pq = Aa  |  q² = aa</text>
</svg>
</div>

<vocab term="Natural Selection" definition="The differential survival and reproduction of individuals with heritable traits that confer an advantage in a given environment; the primary mechanism of evolutionary change.">Natural selection</vocab> is the primary driving force of evolution. Darwin observed that populations have heritable variation, and individuals with advantageous traits survive and reproduce at higher rates, passing those traits to offspring.

### Darwin's Key Observations and Inferences

**Observations:**
1. All populations have the potential for exponential growth
2. Population sizes generally remain stable over time (limited resources)
3. Individuals in a population show heritable variation in traits

**Inferences:**
1. There is a struggle for existence (competition for limited resources)
2. Individuals with favorable heritable traits survive and reproduce better
3. Over generations, favorable traits become more common -> populations evolve

### Prerequisites for Natural Selection

Four conditions must be met:
1. **Variation**: Individuals must differ in their traits
2. **Heritability**: The variation must be heritable (passed from parent to offspring)
3. **Differential fitness**: Some variants must reproduce more successfully than others
4. **Selective pressure**: Environmental conditions favor certain variants

If all four conditions are met, evolution by natural selection is guaranteed to occur.

### Modes of Natural Selection

| Mode | Favors | Effect on Population | Example |
|---|---|---|---|
| Directional | One extreme phenotype | Shifts mean; decreases variation in direction of selection | Antibiotic resistance in bacteria |
| Stabilizing | Intermediate phenotype | Reduces variation; maintains mean | Human birth weight (~7.5 lbs optimal) |
| Disruptive | Both extreme phenotypes | Increases variation; bimodal distribution | African seedcracker finch beak sizes |
| Sexual | Attractive or competitive mates | Can cause exaggerated traits | Peacock tail feathers, deer antlers |

### Adaptations: The Products of Natural Selection

<vocab term="Adaptation" definition="A heritable trait that increases an organism's fitness (reproductive success) in its current environment; the result of natural selection acting over many generations.">Adaptations</vocab> are the result of selection acting over many generations:

**Structural adaptations**: physical features
- Polar bear white fur (camouflage on ice)
- Cacti thick stems for water storage
- Antifreeze proteins in Antarctic fish

**Physiological adaptations**: metabolic/functional
- High-altitude adaptation: increased hemoglobin affinity for O2 (Tibetans)
- Lactase persistence in pastoral populations

**Behavioral adaptations**: behaviors that increase fitness
- Migration (avoid seasonal resource scarcity)
- Mate-calling (attract mates)
- Cooperative hunting (wolves, lions)

### Natural Selection Does NOT:

- Act on genotype directly (only visible phenotype is selected)
- Create variation (selection acts on pre-existing variation)
- Produce "perfect" organisms (only "good enough" for current environment)
- Have foresight or goals (it is not teleological)
- Guarantee extinction is avoided (can lag behind environmental change)

### Evidence for Natural Selection

**Direct observation:**
- Peppered moth (Biston betularia): industrial melanism - dark moths became more common in polluted England
- HIV evolution during drug treatment: resistant strains selected within patient
- Bacterial resistance evolution in response to antibiotics

**Structural evidence:**
- Antibiotic resistance evolution in bacteria (observed in laboratories in weeks)
- Galapagos finch beak size changes tracked across drought years

**The Hardy-Weinberg Principle:**

A population NOT evolving (in H-W equilibrium) must have:
$$p^2 + 2pq + q^2 = 1 \\quad (p + q = 1)$$

Where p = frequency of dominant allele, q = frequency of recessive allele.

Deviation from H-W = evolution is occurring. H-W requires: no selection, no mutation, no migration, random mating, large population.

### Artificial Selection: Human-Directed Evolution

Artificial selection (selective breeding) demonstrates the power of selection:
- Dogs: ~15,000 years of selection from wolves -> 340+ breeds with enormous diversity
- Corn (maize): ~9,000 years from wild teosinte plant -> modern corn
- Chickens, cattle, wheat: dramatically changed by selective breeding

This shows evolution by selection can produce major changes relatively rapidly.

### AP Exam Focus

- Natural selection: variation + heritability + differential fitness = evolution
- Three modes: directional (shifts mean), stabilizing (reduces variation), disruptive (bimodal)
- Selection acts on phenotype, but changes allele frequencies in the population
- H-W equilibrium: no evolution; deviations indicate selection, drift, mutation, or migration
- Adaptations are heritable traits that increase fitness in the current environment

## Population Genetics and Hardy-Weinberg

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<!-- Human -->
<g transform="translate(30, 20)">
<text x="40" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Human Arm</text>
<rect x="35" y="30" width="10" height="35" rx="3" fill="#60a5fa" />
<rect x="30" y="70" width="8" height="35" rx="3" fill="#10b981" />
<rect x="42" y="70" width="8" height="35" rx="3" fill="#f59e0b" />
</g>
<!-- Whale -->
<g transform="translate(150, 20)">
<text x="40" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Whale Flipper</text>
<rect x="30" y="30" width="20" height="25" rx="3" fill="#60a5fa" />
<rect x="25" y="60" width="14" height="25" rx="3" fill="#10b981" />
<rect x="42" y="60" width="14" height="25" rx="3" fill="#f59e0b" />
</g>
<!-- Bat -->
<g transform="translate(270, 20)">
<text x="40" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Bat Wing</text>
<rect x="38" y="30" width="4" height="40" rx="1" fill="#60a5fa" />
<rect x="35" y="75" width="4" height="40" rx="1" fill="#10b981" />
<rect x="41" y="75" width="4" height="40" rx="1" fill="#f59e0b" />
</g>
<text x="200" y="140" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Homologous Limb Structures</text>
</svg>
</div>

<vocab term="Population Genetics" definition="The study of genetic variation within and between populations; examines allele frequencies and how they change over time due to natural selection, genetic drift, mutation, and gene flow.">Population genetics</vocab> applies mathematical models to understand how allele frequencies change in populations over time. The Hardy-Weinberg principle provides the foundational null model.

### Key Definitions

- **Population**: a group of individuals of the same species living in the same area that interbreed
- **Gene pool**: the collection of all alleles in a population at a given time
- **Allele frequency**: the proportion of a particular allele among all alleles at that locus in the population
- **Genotype frequency**: the proportion of individuals with a particular genotype

### The Hardy-Weinberg Principle

<vocab term="Hardy-Weinberg Equilibrium" definition="The state in which allele and genotype frequencies in a population remain constant from generation to generation in the absence of evolutionary influences; provides a null model for detecting evolution.">Hardy-Weinberg equilibrium</vocab> predicts genotype frequencies from allele frequencies when no evolution occurs:

For a two-allele system with allele frequencies p (dominant) and q (recessive):

$$p + q = 1 \\quad \\text{(allele frequencies sum to 1)}$$
$$p^2 + 2pq + q^2 = 1 \\quad \\text{(genotype frequencies)}$$

Where:
- $p^2$ = frequency of homozygous dominant (AA)
- $2pq$ = frequency of heterozygotes (Aa)
- $q^2$ = frequency of homozygous recessive (aa)

### Using Hardy-Weinberg to Calculate Allele Frequencies

**Example**: In a population of 1,000 people, 10 have cystic fibrosis (autosomal recessive, aa).

Step 1: Find q^2 (homozygous recessive frequency)
$$q^2 = \\frac{10}{1000} = 0.01$$

Step 2: Find q (recessive allele frequency)
$$q = \\sqrt{0.01} = 0.1$$

Step 3: Find p (dominant allele frequency)
$$p = 1 - q = 1 - 0.1 = 0.9$$

Step 4: Find carrier frequency (2pq)
$$2pq = 2 \\times 0.9 \\times 0.1 = 0.18$$

So 18% of the population are carriers - 18 times more than those actually affected!

### Conditions for Hardy-Weinberg Equilibrium

Five conditions (if any are violated, evolution is occurring):

| Condition | Violation Causes |
|---|---|
| 1. No natural selection | Differential survival/reproduction |
| 2. No mutations | New alleles entering gene pool |
| 3. No gene flow | Immigration or emigration of alleles |
| 4. Random mating (panmixia) | Assortative mating, inbreeding |
| 5. Very large population | Genetic drift (random allele frequency changes) |

### Forces That Change Allele Frequencies (Causes of Evolution)

#### 1. Natural Selection
Differential survival and reproduction based on heritable phenotypic differences. The only mechanism that consistently produces adaptations.

#### 2. Genetic Drift
<vocab term="Genetic Drift" definition="Random changes in allele frequencies due to chance events; has greater effect in small populations; can cause loss of alleles or fixation of neutral or even slightly harmful alleles.">Genetic drift</vocab> is random change in allele frequency:

**Founder effect**: A small group colonizes a new area -> limited allele diversity
- Example: Old Order Amish of Pennsylvania: Ellis-van Creveld syndrome (extra fingers, dwarfism) is 1 in 60 - extremely high rate due to small founding population

**Bottleneck effect**: Population dramatically reduced by catastrophe -> random allele loss
- Example: Northern elephant seals: populations crashed to ~20 in 1890s -> almost no genetic diversity; all descended from few survivors
- Cheetahs: so genetically uniform that skin grafts between unrelated individuals are not rejected

#### 3. Gene Flow (Migration)
Movement of alleles between populations:
- Immigration: alleles brought in; decreases genetic differences between populations
- Emigration: alleles leave; decreases local allele frequency
- Overall: gene flow prevents speciation; keeps populations genetically similar

#### 4. Mutation
Creates new alleles - the ultimate source of all genetic variation:
- Usually deleterious or neutral; rarely beneficial
- Mutation rate: ~70-100 new mutations per human genome per generation
- Alone, mutation changes allele frequencies very slowly (mutation rates are too low)

#### 5. Non-Random Mating
- **Assortative mating**: individuals prefer mates similar to themselves -> increases homozygosity
- **Inbreeding**: mating between relatives -> increases homozygosity, exposes recessive alleles

### Comparing Drift vs. Selection

| Feature | Genetic Drift | Natural Selection |
|---|---|---|
| Mechanism | Random chance | Differential fitness |
| Direction | Random | Directional (toward higher fitness) |
| Population size effect | Strong in small populations | Same in all populations |
| Adaptive? | No | Yes |
| Time scale | Rapid in small populations | Depends on selection intensity |

### AP Exam Focus

- Hardy-Weinberg: p + q = 1 and p^2 + 2pq + q^2 = 1; memorize this equation
- Five conditions: no selection, no mutation, no migration, random mating, large population
- To find carrier frequency when given phenotype frequency: q^2 -> q -> p -> 2pq
- Genetic drift effects: founder effect (small colonizing group) and bottleneck (population crash)
- Gene flow homogenizes populations; prevents speciation

## Evidence for Evolution

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full">
<line x1="50" y1="120" x2="350" y2="120" stroke="#ffffff" stroke-width="2" />
<line x1="100" y1="120" x2="160" y2="40" stroke="#ffffff" stroke-width="2" />
<line x1="200" y1="120" x2="260" y2="40" stroke="#ffffff" stroke-width="2" />
<line x1="300" y1="120" x2="350" y2="50" stroke="#ffffff" stroke-width="2" />
<text x="160" y="30" fill="#ffffff" font-size="9" text-anchor="middle">Species A</text>
<text x="260" y="30" fill="#ffffff" font-size="9" text-anchor="middle">Species B</text>
<text x="350" y="40" fill="#ffffff" font-size="9" text-anchor="middle">Species C</text>
<line x1="250" y1="120" x2="250" y2="130" stroke="#ef4444" stroke-width="3" />
<text x="250" y="142" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">Derived Character</text>
</svg>
</div>

Evolution is one of the most well-supported theories in all of science, supported by converging lines of evidence from geology, comparative anatomy, molecular biology, and direct observation. Understanding these evidence lines is essential for AP Biology.

### 1. Fossil Record

<vocab term="Fossil Record" definition="The collection of all known fossils, providing a historical record of past life; shows transitional forms, documents extinctions, and reveals the sequence in which major groups of organisms appeared.">Fossil evidence</vocab>:
- Shows progression of life forms over billions of years
- Documents evolutionary transitions (e.g., fish -> amphibians -> reptiles)
- Transitional forms: Tiktaalik (fish-tetrapod transition), Archaeopteryx (dinosaur-bird)
- Patterns: mass extinctions followed by adaptive radiations
- Dating using radiometric methods (uranium-lead, potassium-argon, carbon-14)

**Limitation**: Fossilization is rare; many organisms were soft-bodied and left no fossil record.

### 2. Biogeography

Geographic distribution of organisms provides evidence for common descent:
- **Oceanic island species**: closely related to nearest mainland species, not to similar islands far away
- **Marsupials in Australia**: diverse marsupials evolved there after continental separation (75 mya)
- **Darwin's finches**: 14 finch species in Galapagos, all descendants of one South American ancestor; adaptive radiation
- **Camelids**: originated in North America, spread to South America (llamas) and Asia (camels) before extinction in North America

### 3. Comparative Anatomy

<vocab term="Homologous Structures" definition="Anatomical structures in different species that share the same evolutionary origin but may have different functions; evidence of common ancestry.">Homologous structures</vocab> - same evolutionary origin, different function:
- Human arm, bat wing, whale flipper, cat forelimb - same bone structure (humerus, radius, ulna, carpals, phalanges)
- All descended from same tetrapod ancestor ~360 million years ago

<vocab term="Analogous Structures" definition="Anatomical structures in different species that have similar functions but different evolutionary origins; the result of convergent evolution rather than common ancestry.">Analogous structures</vocab> (convergent evolution) - similar function, different origin:
- Bat wing and butterfly wing - both for flight, completely different structure
- Eye of octopus and vertebrate eye - similar function, independently evolved
- Dolphin dorsal fin and shark dorsal fin - same shape for same hydrodynamic function, different origin

<vocab term="Vestigial Structures" definition="Reduced or non-functional structures that were functional in ancestors; evidence that organisms descended from ancestors with different lifestyles.">Vestigial structures</vocab> - reduced, non-functional remnants:
- Human: coccyx (tailbone), plantaris muscle, wisdom teeth, goosebumps (arrector pili), vomeronasal organ
- Whales: hindlimb bones embedded in body wall (ancestors walked on land)
- Blind cave fish: still have eye development genes but eyes degenerate during development

### 4. Molecular Homology

DNA and protein sequences are most direct evidence of evolutionary relatedness:

- **Cytochrome c protein**: highly conserved; humans and chimps differ by 0 amino acids; humans and yeast differ by 40
- **Phylogenetic trees from DNA sequences**: match morphology-based trees remarkably well
- **Universal genetic code**: same 64 codons in bacteria and humans - evidence for single origin of life
- **Conserved gene sequences** (Hox genes, Pax6 eye development gene) across very different organisms

**Molecular clock**: rate of DNA sequence change is roughly constant -> can estimate divergence times:
- Human-chimpanzee split: ~6-7 million years ago (from sequence comparison)

### 5. Direct Observation of Evolution

Evolution can be observed in real time:
- **E. coli long-term evolution experiment** (Lenski, 1988-present): 50,000+ generations; documented de novo evolution of citrate metabolism in oxygen
- **HIV evolution**: within a patient during treatment, resistant variants emerge and are selected
- **Darwin's finches beak sizes**: tracked across drought years in Galapagos; directional selection documented
- **Peppered moth**: frequency of dark melanic form tracked across industrial pollution levels

### 6. Comparative Embryology

Embryos of different vertebrates are remarkably similar early in development:
- Fish, frog, chicken, pig, human embryos all have pharyngeal pouches and tails at early stages
- Suggests conservation of developmental programs from common ancestor

**Note**: "Ontogeny recapitulates phylogeny" (Haeckel's biogenetic law) is an oversimplification - embryos do NOT pass through adult ancestral stages; they share early developmental features due to shared ancestry.

### Summary of Evidence Types

| Evidence Type | Examples | What It Shows |
|---|---|---|
| Fossil record | Tiktaalik, Archaeopteryx, horse evolution | Progression of forms over time; transitional species |
| Biogeography | Darwin's finches, marsupials, camelids | Geographic isolation and adaptation |
| Homologous structures | Vertebrate forelimbs | Common ancestry despite different functions |
| Vestigial structures | Whale hindlimbs, human coccyx | Evolution from ancestors with different anatomy |
| Molecular homology | Cytochrome c, DNA sequences | Quantify relatedness; build phylogenetic trees |
| Direct observation | Peppered moth, E. coli experiment | Evolution actually happening |

### AP Exam Focus

- Homologous structures = common ancestry; analogous = convergent evolution (NOT related)
- Vestigial structures: retain genes but reduced/non-functional; evidence of ancestral function
- Molecular evidence: DNA sequence similarity strongly correlates with phylogenetic relatedness
- All evidence lines converge on the same conclusion: life evolved from common ancestors
- Transitional fossils: Tiktaalik (fish-tetrapod), Archaeopteryx (dinosaur-bird)

## Common Ancestry



<vocab term="Common Ancestry" definition="The concept that all organisms share ancestors; more closely related species share more recent common ancestors; supported by fossil, molecular, and anatomical evidence.">Common ancestry</vocab> is a core principle of evolutionary biology: all life on Earth descended from a common ancestor. Phylogenetics reconstructs these evolutionary relationships using various types of data.

### Universal Common Ancestry

Evidence that all life shares a single origin:
- Universal genetic code: same codons encode same amino acids in bacteria, plants, and animals
- Universal cellular machinery: ribosomes, ATP synthase, DNA replication enzymes
- Same biochemistry: all cells use ATP, NADH/NADPH, phospholipid membranes
- Conservation of core genes: genes for ribosomal RNA, metabolic enzymes exist in all organisms

**The Tree of Life** organized into three domains:
- **Bacteria**: prokaryotes; no membrane-bound nucleus
- **Archaea**: prokaryotes; different membrane lipids, live in extreme environments
- **Eukarya**: membrane-bound nucleus; includes protists, fungi, plants, animals

Archaea and Eukarya share more recent common ancestors (more similar molecular features) than either shares with Bacteria.

### Phylogenetics: Reconstructing Evolutionary History

<vocab term="Phylogeny" definition="The evolutionary history and relationships among organisms or groups; depicted as a phylogenetic tree (cladogram) showing branching patterns of descent from common ancestors.">Phylogeny</vocab> is reconstructed from:

**Molecular data** (most powerful):
- DNA or RNA sequence comparisons
- Protein sequence comparisons
- Whole-genome comparisons
- Greater sequence similarity = more closely related (more recent common ancestor)

**Morphological data**:
- Homologous anatomical features
- Shared derived characters (synapomorphies)

**Fossil data**:
- When groups appeared
- Transitional forms
- Calibrate molecular clocks

### Phylogenetic Trees: Interpreting Cladograms

Key features of phylogenetic trees:

- **Nodes**: represent common ancestors (hypothetical)
- **Branches**: represent lineages over time
- **Tips (taxa)**: living or extinct species being compared
- **Sister groups**: two groups that share the most recent common ancestor

**Reading a cladogram:**
- Two species share a more recent common ancestor if they share a more recent node
- The number of branches between taxa = relative relatedness
- Trees can be rotated at any node without changing the relationships depicted!

#### Shared Derived Characters (Synapomorphies)

<vocab term="Synapomorphies" definition="Shared derived characters (features evolved in a common ancestor and inherited by its descendants); used to identify monophyletic groups (clades) in phylogenetic analysis.">Synapomorphies</vocab> are features shared by members of a clade:
- Tetrapod limbs: shared by all four-limbed vertebrates (amphibians, reptiles, mammals, birds)
- Amniotic egg: shared by reptiles and mammals
- Feathers: shared by all birds

**Convergent features** (analogous structures) should NOT be used in phylogenetics:
- Wings of bats, birds, and insects - independent evolution of flight, NOT shared ancestry

### Monophyletic Groups (Clades)

A <vocab term="Clade" definition="A monophyletic group consisting of an ancestor and all of its descendants; the fundamental unit of cladistic classification.">clade</vocab> includes an ancestor and ALL its descendants:
- **Monophyletic**: all descendants of one ancestor -> a valid evolutionary unit (clade)
- **Paraphyletic**: ancestor + some but not all descendants -> not a valid evolutionary unit (e.g., "reptiles" excluding birds)
- **Polyphyletic**: includes organisms from different ancestral lineages -> invalid (e.g., "warm-blooded" animals grouping birds + mammals)

**Example:** Reptilia traditionally excluded birds, but birds are descended from dinosaurs which are reptiles. Modern classification places birds within Reptilia, making it monophyletic.

### Molecular Clocks

The molecular clock hypothesis: DNA changes accumulate at roughly constant rates -> divergence time can be estimated:

$$\\text{Divergence time} = \\frac{\\text{Number of sequence differences}}{2 \\times \\text{mutation rate}}$$

Calibrated using fossil record dates. Estimates when species separated:
- Human-chimpanzee: ~6-7 million years ago
- Human-gorilla: ~9 million years ago
- Human-orangutan: ~15 million years ago

### AP Exam Focus

- All life shares common ancestry (universal genetic code is key evidence)
- Phylogenetic trees: nodes = common ancestors, tips = taxa, sister groups = closest relatives
- Synapomorphies (shared derived characters) define clades; convergent features do not
- Clade = monophyletic = ancestor + ALL descendants
- Molecular clocks: sequence divergence estimates time since common ancestor
`,
        questions: [
          {
            id: "7.1.1",
            text: "Which of the following is a necessary prerequisite for natural selection to operate on a population's phenotypic trait?",
            options: ["The trait must be entirely acquired during the organism's lifetime.","There must be genetic variation for the trait within the population, and it must be heritable.","The population must be in Hardy-Weinberg equilibrium.","The organism must have a small population size."],
            correctIndex: 1,
            explanation: "For natural selection to change a trait's frequency, the trait must vary within the population and be heritable (passable to offspring via genes).",
            unitId: 7
          },
          {
            id: "7.1.2",
            text: "Which is a prerequisite for natural selection?",
            options: ["All individuals have identical phenotypes","Heritable phenotypic variation exists in the population","The environment must remain constant","Mutations occur at a fixed rate"],
            correctIndex: 1,
            explanation: "Natural selection requires: heritable variation in phenotype, some variants have greater reproductive success, and those variants pass traits to offspring.",
            unitId: 7
          },
          {
            id: "7.1.3",
            text: "Which of the following would NOT cause evolution (change in allele frequency)?",
            options: ["Natural selection","Mutation","Genetic drift","An individual adapting its traits through use and disuse during its lifetime"],
            correctIndex: 3,
            explanation: "Evolution acts at the population level, not the individual. An organism cannot evolve - only its population can. Lamarck's use-and-disuse is not a mechanism of evolution.",
            unitId: 7
          },
          {
            id: "7.1.4",
            text: "A population of peppered moths shifted from mostly light-colored to dark-colored following the Industrial Revolution due to coal soot darkening tree trunks. What was the selective pressure?",
            options: ["The cold temperature of the soot","Visual predation by birds","A decrease in the atmospheric oxygen concentration","Mutagenic chemicals in the coal dust"],
            correctIndex: 1,
            explanation: "The soot darkened trees, making light moths visible to predatory birds. Visual predation was the selective pressure that favored dark moths.",
            unitId: 7
          },
          {
            id: "7.1.5",
            text: "Stabilizing selection acts to:",
            options: ["Increase the most extreme phenotype's frequency","Reduce phenotypic variance by favoring intermediate phenotypes over extremes","Produce two distinct phenotypic peaks","Favor sexual selection regardless of survival value"],
            correctIndex: 1,
            explanation: "Stabilizing selection favors the intermediate phenotype and acts against extremes. Classic example: human birth weight (very small and very large babies have higher mortality).",
            unitId: 7
          },
          {
            id: "7.1.6",
            text: "What is the primary difference between natural selection and artificial selection?",
            options: ["Artificial selection occurs much more slowly than natural selection.","In artificial selection, humans act as the selective agent, whereas in natural selection, the environment determines which traits are favored.","Artificial selection does not require genetic variation.","Only natural selection changes the allele frequencies of a population."],
            correctIndex: 1,
            explanation: "In artificial selection, humans choose which traits are propagated. In natural selection, environmental factors (biotic/abiotic pressures) dictate differential reproductive success.",
            unitId: 7
          },
          {
            id: "7.1.7",
            text: "Artificial selection differs from natural selection in that:",
            options: ["Artificial selection only slows evolution","Humans (not environmental pressures) choose which individuals reproduce based on desired traits","Artificial selection does not involve heritable variation","Artificial selection results in random allele frequency changes"],
            correctIndex: 1,
            explanation: "In artificial selection, humans act as the selective agent, choosing individuals with desired traits to breed. Natural selection uses environmental pressures.",
            unitId: 7
          },
          {
            id: "7.1.8",
            text: "Artificial selection in crops can have unintended negative consequences because:",
            options: ["Crops evolve to require less human care","Selecting for yield may inadvertently eliminate genetic diversity and natural pest resistance","Artificial selection creates new genetic material de novo","Crop plants cannot undergo heritable changes"],
            correctIndex: 1,
            explanation: "Focusing on a single desired trait can reduce overall genetic diversity and eliminate other useful alleles (like disease resistance), making crops vulnerable.",
            unitId: 7
          },
          {
            id: "7.1.9",
            text: "In which of the following populations will genetic drift have the most significant evolutionary impact?",
            options: ["A population of 50 endangered island iguanas","A population of 500,000 wildflowers in a meadow","A population of 10,000 migratory geese","A population in Hardy-Weinberg equilibrium"],
            correctIndex: 0,
            explanation: "Genetic drift is driven by random sampling error. Its effects are much stronger in small populations, where chance events can easily eliminate or fix alleles.",
            unitId: 7
          },
          {
            id: "7.1.10",
            text: "The founder effect occurs when:",
            options: ["A large population suddenly lacks food","A small subset of individuals establishes a new population, limiting genetic diversity","A dominant allele reaches fixation due to natural selection","A population decreases catastrophically from a natural disaster"],
            correctIndex: 1,
            explanation: "Founder effect: a new population established by few founders carries only a subset of original genetic variation, making certain alleles very common or absent.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.2",
        title: "Hardy-Weinberg Equilibrium and Evolution",
        description: "Solve population genetics problems using the Hardy-Weinberg mathematical equations.",
        youtubeId: "oG7ob-MtO8c",
        article: `
# Hardy-Weinberg Equilibrium and Evolution

## Hardy-Weinberg Equilibrium



The Hardy-Weinberg equations describe a mathematical model that determines whether evolution is occurring within a population.

### The Concept of Genetic Equilibrium

A population is in **Hardy-Weinberg equilibrium** if its allele and genotype frequencies remain constant from generation to generation. When a population is in equilibrium, it is NOT evolving.

### The 5 Conditions for Hardy-Weinberg

To maintain genetic equilibrium, a population must meet five strict conditions:
1. **No Mutations**: No new alleles can be introduced into the gene pool.
2. **Random Mating**: No sexual selection; individuals mate purely by chance.
3. **No Natural Selection**: All phenotypes must have equal reproductive success.
4. **Extremely Large Population Size**: Prevents genetic drift (changes due to chance).
5. **No Gene Flow**: No migration of individuals into or out of the population.

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Title -->
<text x="200" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Hardy-Weinberg Gamete Fusion</text>
<!-- Egg label (vertical) -->
<text x="80" y="105" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle" transform="rotate(-90 80 105)">Egg Gametes</text>
<!-- Sperm label (horizontal) -->
<text x="215" y="42" fill="#a1a1aa" font-size="9" font-weight="bold" text-anchor="middle">Sperm Gametes</text>
<!-- Grid Headers -->
<!-- Top Headers -->
<text x="165" y="60" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">p (A)</text>
<text x="255" y="60" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">q (a)</text>
<!-- Left Headers -->
<text x="110" y="100" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">p (A)</text>
<text x="110" y="145" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">q (a)</text>
<!-- Box Outline -->
<rect x="125" y="70" width="180" height="90" fill="none" stroke="#ffffff" stroke-width="1.5" />
<!-- Inner Lines -->
<line x1="215" y1="70" x2="215" y2="160" stroke="#ffffff" stroke-width="1.5" />
<line x1="125" y1="115" x2="305" y2="115" stroke="#ffffff" stroke-width="1.5" />
<!-- Box Cells -->
<!-- AA (p^2) -->
<rect x="127" y="72" width="86" height="41" fill="rgba(96, 165, 250, 0.1)" />
<text x="170" y="92" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">p² (AA)</text>
<!-- Aa (pq) -->
<rect x="217" y="72" width="86" height="41" fill="rgba(251, 191, 36, 0.1)" />
<text x="260" y="92" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">pq (Aa)</text>
<!-- aA (qp) -->
<rect x="127" y="117" width="86" height="41" fill="rgba(251, 191, 36, 0.1)" />
<text x="170" y="137" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">pq (Aa)</text>
<!-- aa (q^2) -->
<rect x="217" y="117" width="86" height="41" fill="rgba(52, 211, 153, 0.1)" />
<text x="260" y="137" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">q² (aa)</text>
</svg>
</div>

### The Hardy-Weinberg Equations

The equations use the frequencies of two alleles, $p$ (dominant allele) and $q$ (recessive allele):

$$\\text{Allele frequencies:} \\quad p + q = 1$$

$$\\text{Genotype frequencies:} \\quad p^2 + 2pq + q^2 = 1$$

Where:
- $p^2$ = frequency of homozygous dominant individuals ($AA$)
- $2pq$ = frequency of heterozygous individuals ($Aa$)
- $q^2$ = frequency of homozygous recessive individuals ($aa$)

### Step-by-Step CF Carrier Example

Let's solve a typical genetic problem: Cystic Fibrosis is an autosomal recessive disease affecting 1 in 2,500 newborns in a Caucasian population. Assume the population is in HW equilibrium.
1. **Find $q^2$**: Recessive phenotype frequency = $1 / 2500 = 0.0004$. So $q^2 = 0.0004$.
2. **Find $q$**: Take the square root of $q^2$: $q = \\sqrt{0.0004} = 0.02$.
3. **Find $p$**: Since $p + q = 1$, we have $p = 1 - 0.02 = 0.98$.
4. **Calculate Carrier Frequency ($2pq$)**:
   $$2pq = 2 \\times p \\times q = 2 \\times 0.98 \\times 0.02 = 0.0392 \\text{ (or } \\sim4\\% \\text{)}$$
- This means ~4% of this population are healthy carriers of the cystic fibrosis gene.

| Variable / Term | Definition in Genetics | HW Expression | Example Value (from CF) |
|---|---|---|---|
| $p$ | Frequency of the dominant allele ($A$) | $p$ | $0.98$ |
| $q$ | Frequency of the recessive allele ($a$) | $q$ | $0.02$ |
| $p^2$ | Frequency of homozygous dominant genotype | $p^2$ | $0.9604$ |
| $2pq$ | Frequency of heterozygous carrier genotype | $2pq$ | $0.0392$ |
| $q^2$ | Frequency of homozygous recessive genotype | $q^2$ | $0.0004$ |

### AP Exam Focus

- Memorize the 5 conditions required for Hardy-Weinberg equilibrium
- Solve H-W mathematical problems, showing calculations for allele frequencies ($p$, $q$) and genotype frequencies ($p^2$, $2pq$, $q^2$)
- Explain why a change in allele frequency over generations indicates that evolution is occurring
`,
        questions: [
          {
            id: "7.2.1",
            text: "In a population in Hardy-Weinberg equilibrium, 16% of the individuals display the homozygous recessive phenotype. What is the frequency of the recessive allele (q)?",
            options: ["0.16","0.40","0.60","0.84"],
            correctIndex: 1,
            explanation: "The frequency of homozygous recessive individuals (q^2) is 0.16. Taking the square root of 0.16 yields q = 0.40.",
            unitId: 7
          },
          {
            id: "7.2.2",
            text: "Using the population from the previous question (q = 0.40), what is the expected frequency of heterozygous individuals (2pq) in the population?",
            options: ["0.24","0.36","0.48","0.60"],
            correctIndex: 2,
            explanation: "Since p + q = 1, p = 1 - 0.40 = 0.60. The frequency of heterozygotes is 2pq = 2 * (0.60) * (0.40) = 0.48.",
            unitId: 7
          },
          {
            id: "7.2.3",
            text: "Which condition would VIOLATE Hardy-Weinberg equilibrium?",
            options: ["Random mating in the population","Large population size","No net migration","Natural selection acting on a phenotype"],
            correctIndex: 3,
            explanation: "H-W equilibrium (no evolution) requires: no natural selection, no mutations, no gene flow, random mating, and large population size. Natural selection violates this.",
            unitId: 7
          },
          {
            id: "7.2.4",
            text: "In a H-W population, if frequency of dominant allele (A) is 0.6, frequency of recessive allele (a) is:",
            options: ["0.2","0.4","0.6","0.36"],
            correctIndex: 1,
            explanation: "In H-W equilibrium, p + q = 1. If p = 0.6, then q = 1 - 0.6 = 0.4.",
            unitId: 7
          },
          {
            id: "7.2.5",
            text: "In a H-W population with p=0.7 and q=0.3, the expected frequency of heterozygotes (Aa) is:",
            options: ["0.09","0.21","0.42","0.49"],
            correctIndex: 2,
            explanation: "Frequency of heterozygotes = 2pq = 2 x 0.7 x 0.3 = 0.42.",
            unitId: 7
          },
          {
            id: "7.2.6",
            text: "Which of the following is NOT one of the five conditions required for a population to remain in Hardy-Weinberg equilibrium?",
            options: ["No mutation","Random mating","Small population size","No natural selection"],
            correctIndex: 2,
            explanation: "An extremely LARGE population size is required to minimize the effects of genetic drift (random sampling changes).",
            unitId: 7
          },
          {
            id: "7.2.7",
            text: "In a population in Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.4. What is the expected frequency of heterozygous individuals (2pq)?",
            options: ["0.16","0.36","0.48","0.60"],
            correctIndex: 2,
            explanation: "Since p + q = 1, p = 0.6. The frequency of heterozygotes is 2pq = 2(0.6)(0.4) = 0.48.",
            unitId: 7
          },
          {
            id: "7.2.8",
            text: "If the frequency of the dominant phenotype in a Hardy-Weinberg population is 84%, what is the frequency of the recessive allele (q)?",
            options: ["0.16","0.40","0.60","0.84"],
            correctIndex: 1,
            explanation: "The frequency of the recessive phenotype (q^2) is 100% - 84% = 16% (0.16). Taking the square root gives the recessive allele frequency q = 0.4.",
            unitId: 7
          },
          {
            id: "7.2.9",
            text: "If a researcher monitors a wild population and finds that allele frequencies shift significantly over three generations, what can be concluded?",
            options: ["The population is in genetic equilibrium.","The population is undergoing evolutionary changes.","Mutations have ceased completely.","Natural selection is selecting for heterozygous individuals exclusively."],
            correctIndex: 1,
            explanation: "Hardy-Weinberg equilibrium means allele frequencies stay constant. A change in frequencies over generations is the literal definition of evolution.",
            unitId: 7
          },
          {
            id: "7.2.10",
            text: "Which evolutionary mechanism describes a sudden, drastic reduction in population size due to a natural disaster, leading to randomized allele frequency changes?",
            options: ["Founder effect","Bottleneck effect","Gene flow","Directional selection"],
            correctIndex: 1,
            explanation: "A bottleneck effect occurs when a population size is severely reduced by an event, leaving a small sample of survivors that is unrepresentative of original allele frequencies.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.3",
        title: "Evidence of Evolution, Common Ancestry, and Phylogeny",
        description: "Analyze homologous, analogous, molecular, and fossil evidence of common descent. Examine shared molecular and cellular features that link all life to a common ancestor. Analyze observed examples of modern evolution in real time. Reconstruct evolutionary relationships using cladograms and molecular phylogenetic trees.",
        youtubeId: "iT1J9_2_L_s",
        article: `
# Evidence of Evolution, Common Ancestry, and Phylogeny

## Speciation



<vocab term="Speciation" definition="The evolutionary process by which new species form from an ancestral population; requires evolution of reproductive isolation between diverging populations.">Speciation</vocab> is the origin of new species. It requires populations to diverge genetically until they become reproductively isolated - unable to interbreed and produce fertile offspring.

### The Biological Species Concept

<vocab term="Biological Species Concept" definition="Ernst Mayr's definition of a species as a group of populations whose members can interbreed with each other and produce fertile offspring, but are reproductively isolated from other such groups.">Biological Species Concept (Mayr, 1942)</vocab>: A species is a group of populations whose members can interbreed and produce fertile offspring but are reproductively isolated from other groups.

**Limitations:**
- Cannot apply to asexual organisms (bacteria reproduce without sex)
- Cannot apply to extinct organisms (fossil record)
- "Ring species" create ambiguities (A breeds with B, B with C, but A and C don't)
- Hybridization still occurs between some distinct species

**Other species concepts:**
- **Morphological** (typological): defined by physical characteristics - works for fossils and asexual organisms
- **Ecological**: defined by ecological niche
- **Phylogenetic**: smallest clade sharing derived character

### Reproductive Isolation Mechanisms

#### Prezygotic Barriers (Prevent mating or fertilization)

| Mechanism | Description | Example |
|---|---|---|
| Habitat isolation | Occupy different habitats in same area | Two oak species: one in dry habitat, one in moist |
| Temporal isolation | Breed at different times (seasons, times of day) | Two leopard frog species: breed different months |
| Behavioral (ethological) | Different courtship rituals; mate recognition signals | Firefly flashing patterns; bird songs |
| Mechanical | Incompatible reproductive structures | Flower shape and pollinator specificity |
| Gametic | Sperm-egg incompatibility | Sea urchin species: different gamete surface proteins |

#### Postzygotic Barriers (After fertilization)

| Mechanism | Description | Example |
|---|---|---|
| Hybrid inviability | Hybrid embryos abort or die young | Some frog hybrids die early in development |
| Hybrid sterility | Hybrid survives but is sterile | Mule (horse x donkey): sterile due to chromosome mismatch |
| Hybrid breakdown | First generation fertile, but later generations are infertile or inviable | Some cotton species hybrids |

### Modes of Speciation

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Title -->
<text x="200" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Modes of Speciation</text>

<!-- Left half: Allopatric -->
<g transform="translate(10, 0)">
<text x="90" y="35" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Allopatric Speciation</text>
<!-- Initial population -->
<circle cx="90" cy="65" r="18" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" stroke-width="1.2" />
<circle cx="83" cy="62" r="2.5" fill="#22c55e" />
<circle cx="92" cy="68" r="2.5" fill="#22c55e" />
<circle cx="90" cy="59" r="2.5" fill="#22c55e" />
<circle cx="96" cy="62" r="2.5" fill="#22c55e" />
<!-- Arrow -->
<line x1="90" y1="88" x2="90" y2="100" stroke="#a1a1aa" stroke-width="1.2" marker-end="url(#arrow-speciation)" />
<!-- Barrier splits -->
<circle cx="65" cy="130" r="18" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" stroke-width="1.2" />
<circle cx="60" cy="126" r="2.5" fill="#22c55e" />
<circle cx="70" cy="132" r="2.5" fill="#22c55e" />
<circle cx="115" cy="130" r="18" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="1.2" />
<circle cx="110" cy="126" r="2.5" fill="#3b82f6" />
<circle cx="120" cy="132" r="2.5" fill="#3b82f6" />
<!-- Mountain barrier -->
<path d="M 88 110 L 92 122 L 86 135 L 94 150" fill="none" stroke="#ef4444" stroke-width="2.5" />
<text x="90" y="163" fill="#ef4444" font-size="7" text-anchor="middle">Geographic Barrier</text>
</g>

<!-- Right half: Sympatric -->
<g transform="translate(210, 0)">
<text x="90" y="35" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Sympatric Speciation</text>
<!-- Initial population -->
<circle cx="90" cy="65" r="18" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" stroke-width="1.2" />
<circle cx="83" cy="62" r="2.5" fill="#22c55e" />
<circle cx="92" cy="68" r="2.5" fill="#22c55e" />
<circle cx="90" cy="59" r="2.5" fill="#22c55e" />
<circle cx="96" cy="62" r="2.5" fill="#22c55e" />
<!-- Arrow -->
<line x1="90" y1="88" x2="90" y2="100" stroke="#a1a1aa" stroke-width="1.2" marker-end="url(#arrow-speciation)" />
<!-- Genetic polymorphism in same area -->
<circle cx="90" cy="130" r="20" fill="rgba(255, 255, 255, 0.05)" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2" />
<!-- Cations and mutant species -->
<circle cx="82" cy="126" r="2.5" fill="#22c55e" />
<circle cx="85" cy="135" r="2.5" fill="#22c55e" />
<!-- Mutant in same area -->
<circle cx="96" cy="126" r="2.5" fill="#3b82f6" />
<circle cx="94" cy="134" r="2.5" fill="#3b82f6" />
<text x="90" y="163" fill="#3b82f6" font-size="7" text-anchor="middle">Same Geography (Polyploidy)</text>
</g>

<!-- Arrow marker definition -->
<defs>
<marker id="arrow-speciation" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" /></marker>
</defs>
</svg>
</div>

#### Allopatric Speciation (Geographic Isolation)

<vocab term="Allopatric Speciation" definition="Speciation that occurs when populations are geographically separated, preventing gene flow; populations diverge independently, eventually becoming reproductively isolated.">Allopatric speciation</vocab> (most common mode):
1. Geographic barrier (mountain range, river, ocean) splits a population
2. Isolated populations evolve independently (different selection pressures, drift)
3. After sufficient divergence, populations are reproductively isolated even if they come back together

**Examples:**
- Galapagos finches: colonized from South America; each island population diversified independently
- Grand Canyon squirrels: Kaibab squirrel (north rim) and Abert squirrel (south rim) now distinct species

#### Sympatric Speciation (Same Geographic Area)

<vocab term="Sympatric Speciation" definition="Speciation within the same geographic area without physical barriers; common in plants via polyploidy; less common in animals.">Sympatric speciation</vocab> occurs within the same geographic area:

**Polyploidy (most common in plants):**
- A tetraploid (4n) plant arises by error in meiosis or fertilization
- Tetraploid can only successfully breed with other tetraploids (not diploid parent)
- Instant speciation in one generation!
- Examples: wheat (6n), cotton (4n), many agricultural crops
- Allopolyploidy: polyploid from two different species; often sterile until chromosome doubling

**Habitat differentiation:**
- Insects specializing on different host plants in same area (apple maggot fly speciation from hawthorn to apple trees)
- Disruptive selection can drive divergence without geographic barriers

### Adaptive Radiation

<vocab term="Adaptive Radiation" definition="The rapid evolution of many ecologically diverse species from a common ancestor, typically after entering a new environment with many unfilled niches.">Adaptive radiation</vocab>: Rapid diversification from a common ancestor into many ecologically diverse species:
- Hawaiian honeycreepers: >50 species from one finch ancestor, filling many niche roles
- Darwin's finches: 14 species from 1 ancestor in Galapagos
- Cichlid fish: 300+ species in Lake Victoria diverged in ~15,000 years
- Placental mammals: rapid radiation after dinosaur extinction 66 mya

Conditions that promote adaptive radiation:
- Geographic colonization of new environments
- Mass extinctions opening ecological niches
- Key evolutionary innovations (e.g., jaws in fish)

### Pace of Evolution

**Gradualism**: evolution occurs slowly and continuously through accumulation of many small changes

**Punctuated Equilibrium** (Gould and Eldredge, 1972): evolution occurs in bursts of rapid change (speciation events) separated by long periods of stasis (little change)

The fossil record often shows punctuated patterns:
- Long periods of morphological stability
- Rapid appearance of new forms (in geological time, thousands-tens of thousands of years)

### AP Exam Focus

- Allopatric speciation: geographic isolation -> independent evolution -> reproductive isolation
- Sympatric speciation: polyploidy (plants, instant speciation) or ecological divergence
- Reproductive isolation: prezygotic (before fertilization) vs. postzygotic (after fertilization)
- Adaptive radiation: rapid diversification into available niches (Darwin's finches, Hawaiian birds)
- Mule (horse x donkey hybrid) = example of hybrid sterility (postzygotic isolation)

## Phylogeny and the Tree of Life



<vocab term="Phylogeny" definition="The evolutionary history of a species or group of species; depicted in phylogenetic trees that show the branching pattern of descent from common ancestors.">Phylogeny</vocab> is the study of evolutionary relationships. Building and interpreting phylogenetic trees is a core AP Biology skill.

### The Three Domains of Life

Modern classification recognizes three domains based on molecular evidence:

| Domain | Cell Type | Unique Features | Examples |
|---|---|---|---|
| Bacteria | Prokaryotic | Peptidoglycan cell walls; most common bacteria | E. coli, Streptococcus, cyanobacteria |
| Archaea | Prokaryotic | Unique membrane lipids (ether linkages); different RNA polymerases; extremophiles | Methanogens, halophiles, thermophiles |
| Eukarya | Eukaryotic | Membrane-bound nucleus; organelles | Plants, animals, fungi, protists |

Key finding: Archaea are more closely related to Eukarya than to Bacteria (rRNA sequences). This three-domain system replaced the older five-kingdom system.

### Taxonomy and Classification

<vocab term="Taxonomy" definition="The science of naming, describing, and classifying organisms; uses a hierarchical system of categories (taxa) from species up through domain.">Taxonomy</vocab> hierarchical system (from specific to general):

**Domain - Kingdom - Phylum - Class - Order - Family - Genus - Species**

Mnemonic: "**D**umb **K**ings **P**lay **C**hess **O**n **F**unny **G**reen **S**quares"

Species are named using binomial nomenclature (Genus species):
- Homo sapiens (humans), Canis lupus (wolf), Felis catus (domestic cat)
- Genus is capitalized; species is lowercase; entire name is italicized

### Building Phylogenetic Trees

#### Parsimony Principle (Occam's Razor)
The most likely phylogenetic tree requires the fewest evolutionary changes (most parsimonious):
- Avoids invoking unnecessary independent evolutions of the same feature
- Shared features are more likely to be homologous (inherited from common ancestor) than to have evolved independently multiple times

#### Maximum Likelihood
Uses statistical models of sequence evolution to find the tree most likely to produce the observed data.

#### Bootstrap Values
Measure of statistical support for each branch:
- High bootstrap values (>70-80%) = well-supported node
- Low bootstrap values = uncertain relationship

### Reading Phylogenetic Trees: Common Mistakes

**Mistake 1: Reading trees from left to right as "most primitive" to "most advanced"**
All tip taxa are equally derived; there is no "most primitive" living species.

**Mistake 2: Thinking branches can't be rotated**
Any node can be rotated without changing the tree's meaning. Only the branching pattern matters.

**Mistake 3: Counting nodes wrong**
To find how many nodes (common ancestors) separate two species, count the nodes on the path between them.

**Correct interpretation:**
- Closer = more nodes shared = more recent common ancestor = more closely related

### Major Eukaryotic Groups

| Group | Key Features | Examples |
|---|---|---|
| Animals (Animalia) | Multicellular, heterotrophic, no cell wall | Humans, insects, fish |
| Plants (Plantae) | Multicellular, autotrophic, cellulose cell wall | Trees, grasses, mosses |
| Fungi (Fungi) | Multicellular mostly, heterotrophic, chitin cell wall, absorptive nutrition | Mushrooms, molds, yeasts |
| Protists | Diverse; mostly unicellular eukaryotes; paraphyletic group | Amoeba, algae, slime molds |

Note: "Protista" is not a valid monophyletic group - it's a wastebasket for diverse eukaryotes that don't fit other groups.

### Convergent Evolution and Phylogenetic Pitfalls

Convergent evolution creates analogous features that can mislead phylogenetics:
- Eyes of vertebrates and cephalopods (octopus): independently evolved, structurally different
- Streamlined body shape in dolphins, sharks, and ichthyosaurs: convergent adaptation to aquatic locomotion

**Key principle**: Only shared derived characters (synapomorphies) should be used to infer relationships, NOT analogous (convergently evolved) features.

### AP Exam Focus

- Three domains: Bacteria, Archaea, Eukarya; Archaea more closely related to Eukarya
- Reading cladograms: sister groups share most recent common ancestor at shared node
- Parsimony: phylogeny requiring fewest evolutionary changes is most likely
- Convergent evolution creates analogous structures (not evidence of relationship)
- Taxonomic hierarchy: Domain-Kingdom-Phylum-Class-Order-Family-Genus-Species

## Evolution of Populations



Evolution occurs at the level of populations, not individuals. <vocab term="Microevolution" definition="Changes in allele frequencies within a population over time; the smallest scale of evolution; includes natural selection, genetic drift, gene flow, and mutation.">Microevolution</vocab> refers to changes in allele frequencies within a population over generations. Understanding the mechanisms and quantification of these changes is central to population genetics.

### Measuring Evolution: Allele Frequencies

Evolution = change in allele frequency over time.

To measure evolution:
1. Determine initial allele frequencies
2. Measure the same allele frequencies one or more generations later
3. Calculate the change

If allele frequencies have changed, evolution has occurred.

### The Four Mechanisms of Microevolution

#### 1. Natural Selection
Direction and intensity depend on:
- Selection coefficient (s): how much fitness advantage/disadvantage a genotype has
- Dominance relationships between alleles
- Environmental conditions

**Selection against recessive alleles** is slow because recessives are hidden in heterozygotes (carriers):
- Sickle cell allele (HbS): s = high in malaria-free environments, but selection cannot eliminate it easily because of carriers
- This is why recessive diseases persist in populations

**Balancing selection** maintains multiple alleles in populations:
- <vocab term="Heterozygote Advantage (Overdominance)" definition="A form of balancing selection in which heterozygotes have higher fitness than either homozygote; maintains genetic variation in populations (e.g., sickle-cell trait provides malaria resistance).">Heterozygote advantage</vocab>: Aa has higher fitness than AA or aa
- Sickle cell anemia: HbA/HbS heterozygotes are resistant to malaria; HbA/HbA susceptible to malaria; HbS/HbS severely anemic
- Result: both alleles maintained in populations where malaria is endemic

#### 2. Genetic Drift

Effects increase in small populations:
- Smaller populations -> greater random fluctuations in allele frequency
- Eventually leads to fixation (frequency = 100%) or loss (frequency = 0%) of alleles
- Reduces genetic diversity

**Effective population size (Ne)**: the number of individuals that contribute to the next generation; often much smaller than census size:
$$N_e = \\frac{4N_mN_f}{N_m + N_f}$$
Where Nm and Nf are numbers of breeding males and females.

#### 3. Gene Flow

Movement of alleles between populations:
- Prevents local populations from becoming too genetically distinct
- Introduces new alleles from other populations
- Opposes divergence that would otherwise lead to speciation
- High gene flow = populations remain genetically similar
- Low gene flow = populations can diverge (potentially speciate)

#### 4. Mutation

Creates new alleles:
- Mutation rate per gene per generation: ~10^-6 to 10^-5
- Very slow change by itself, but provides variation for selection to act on
- Most new mutations are neutral or slightly deleterious

### Sexual Selection

<vocab term="Sexual Selection" definition="A component of natural selection in which certain traits increase success in mating; includes intrasexual competition (male-male combat) and intersexual selection (female mate choice).">Sexual selection</vocab> can drive rapid evolution of traits that seem costly:

**Intrasexual selection (same-sex competition):**
- Males compete for access to females
- Selected traits: large body size, horns, antlers, aggressive behavior
- Examples: elk antlers, elephant seal size dimorphism, male-male combat

**Intersexual selection (mate choice):**
- Usually females choose males (females invest more in offspring)
- Selected traits: bright colors, elaborate displays, complex songs
- Examples: peacock tail feathers, bird-of-paradise plumage, frog calls
- **Runaway selection**: if females prefer extreme traits, selection can drive traits to exaggerated extremes (handicap principle - only healthy males can afford costly ornaments)

### Population Size and Evolutionary Change

| Population Size | Effect of Genetic Drift | Effectiveness of Selection | Molecular Evolution Rate |
|---|---|---|---|
| Very small (<100) | Very strong; alleles fixed or lost rapidly | Reduced (drift can fix slightly harmful alleles) | High (drift dominates) |
| Medium (100-10,000) | Moderate | Selection more effective | Moderate |
| Very large (>10,000) | Negligible | Very effective | Low (selection removes bad mutations efficiently) |

### AP Exam Focus

- Evolution = change in allele frequency over time (not change in individual's traits!)
- Natural selection, genetic drift, gene flow, mutation are four mechanisms
- Heterozygote advantage maintains variation: sickle cell HbA/HbS has malaria resistance
- Sexual selection: intrasexual (competition) vs. intersexual (mate choice)
- Small populations: drift is stronger; may fix slightly deleterious alleles

## Mechanisms of Evolution



The mechanisms of evolution operate simultaneously and interact to shape the genetic composition of populations. A thorough understanding requires knowing how each mechanism works independently and how they interact.

### Review: The Five Mechanisms

1. **Natural selection** - differential reproductive success based on heritable phenotypic differences
2. **Genetic drift** - random changes in allele frequencies (more pronounced in small populations)
3. **Gene flow** - movement of alleles between populations via migrating individuals
4. **Mutation** - changes in DNA sequence creating new alleles
5. **Non-random mating** - mate choice or inbreeding affects genotype frequencies

### Mechanisms and Their Evolutionary Consequences

#### Genetic Drift in Detail

<vocab term="Genetic Drift" definition="Random fluctuations in allele frequencies due to chance events in reproduction; particularly influential in small populations; can fix alleles regardless of fitness effects.">Genetic drift</vocab> has several important properties:

**Random with respect to fitness**: drift can fix harmful alleles or eliminate beneficial ones
**Decreases genetic variation**: alleles are lost or fixed
**Stronger in smaller populations**: the smaller the population, the more pronounced the random fluctuations
**Long-term consequence**: most alleles eventually fix or go extinct due to drift

**Neutral theory of molecular evolution** (Kimura): Most evolutionary change at the molecular level is neutral (neither advantageous nor harmful) and driven by drift, not selection.
- Evidence: rate of molecular evolution is relatively constant (molecular clock)
- Synonymous mutations (don't change amino acid) accumulate faster than non-synonymous ones (not under selection)

#### Gene Flow and Population Structure

<vocab term="Gene Flow" definition="The transfer of alleles from one population to another through migration of individuals or dispersal of gametes; tends to homogenize gene pools and prevent speciation.">Gene flow</vocab> is a powerful homogenizing force:

**FST statistic**: measures genetic differentiation between populations
$$F_{ST} = \\frac{H_T - H_S}{H_T}$$
Where HT = expected heterozygosity in total population, HS = average expected heterozygosity within subpopulations.
- FST = 0: no differentiation (complete gene flow)
- FST = 1: complete differentiation (no gene flow)
- Human populations: FST ~0.1-0.15 (we are not very differentiated; recent out-of-Africa bottleneck)

#### Mutation-Selection Balance

Some deleterious alleles are maintained at low frequencies:
- Mutation creates new copies of harmful alleles at rate mu
- Selection removes them at rate proportional to s (selection coefficient) and q^2 (for recessive)
- Equilibrium frequency of recessive lethal: $q_{eq} = \\sqrt{\\mu/s}$

Example: cystic fibrosis (autosomal recessive lethal, s~0.5 in untreated)
- Mutation rate ~1/500,000
- Equilibrium q = sqrt(2/1,000,000 / 0.5) = ~0.002, or carrier frequency 2pq ~0.004 = 0.4%
- Actual carrier frequency in Europeans ~4% -- much higher than expected from mutation-selection balance alone, suggesting heterozygote advantage or founder effect

#### Modes of Natural Selection (Expanded)

**Purifying (negative) selection**: removes harmful alleles
- Most common form of selection
- Maintains protein function by eliminating damaging mutations
- Results in sequence conservation at functionally important sites

**Positive (directional) selection**: favors a new beneficial allele
- Drives beneficial allele from low to high frequency
- Creates "selective sweep": genetic variation near selected gene reduced as it increases
- Examples: lactase persistence, sickle cell (in malaria regions), drug resistance

**Balancing selection**: maintains variation (multiple alleles at intermediate frequencies)
- Heterozygote advantage (overdominance)
- Frequency-dependent selection: rare alleles are favored (e.g., immune system MHC)
- Seasonal or spatial variation in selection

### Linkage Disequilibrium

When two alleles at different loci are found together more often than expected by chance:
- Result of: recent mutation (hasn't had time to recombine), selection (two alleles together have high fitness), founder effect
- As recombination breaks up combinations, linkage disequilibrium decreases over generations

### Interaction of Mechanisms: An Example

Consider a small island population of birds:
1. Founding population has limited alleles (founder effect/drift reduces variation)
2. Natural selection favors darker plumage (camouflage from predators)
3. Mutation slowly introduces new allele variants
4. Occasionally, birds from mainland bring new alleles (gene flow)
5. Females prefer larger males (sexual selection)
6. Over time, island population may diverge enough from mainland for speciation

All mechanisms operate simultaneously, each influencing the others.

### AP Exam Focus

- Distinguish mechanisms: selection (adaptive), drift (random), gene flow (homogenizing), mutation (creates variation)
- Neutral theory: most molecular variation is neutral, maintained by drift
- Genetic drift stronger in small populations; can fix alleles regardless of fitness
- Gene flow prevents speciation; high FST indicates little gene flow
- Balancing selection maintains variation (heterozygote advantage is key example)
`,
        questions: [
          {
            id: "7.3.1",
            text: "Which of the following describes homologous structures?",
            options: ["Structures that look similar but have different internal anatomy and arose independently.","Anatomical features in different species that share a common ancestral origin, even if their current functions differ.","Structures that have been completely lost due to selective pressures.","DNA sequences that code for entirely different proteins."],
            correctIndex: 1,
            explanation: "Homologous structures share an anatomical framework because they evolved from a common ancestor, even if they have been modified for different functions (e.g., human hands vs. whale flippers).",
            unitId: 7
          },
          {
            id: "7.3.2",
            text: "Homologous structures (like forelimbs of whales, bats, and humans) suggest:",
            options: ["Independent evolution to solve the same problems (convergent evolution)","These organisms share a common ancestor who had the basic limb structure","These organisms have identical DNA sequences","These organisms live in the same ecological niche"],
            correctIndex: 1,
            explanation: "Homologous structures share anatomy from a common ancestor (divergent evolution). They may have different functions but share the same underlying bone arrangement.",
            unitId: 7
          },
          {
            id: "7.3.3",
            text: "Humans and chimpanzees share ~98% of their DNA sequence. The MOST direct conclusion is:",
            options: ["Humans and chimpanzees are the same species","Humans and chimpanzees diverged from a recent common ancestor relatively recently","DNA similarities are coincidental","They share the same ecological niche"],
            correctIndex: 1,
            explanation: "DNA sequence similarity is proportional to evolutionary relatedness. ~98% similarity indicates a recent common ancestor compared to other mammals.",
            unitId: 7
          },
          {
            id: "7.3.4",
            text: "What molecular feature is shared by all known organisms, supporting the hypothesis of a single universal common ancestor?",
            options: ["The presence of a double membrane around the nucleus","The use of DNA/RNA as genetic material and the universal genetic code","The use of oxygen as the final electron acceptor in respiration","The possession of cellulose cell walls"],
            correctIndex: 1,
            explanation: "The universal genetic code—where the same mRNA codons specify the exact same amino acids in bacteria, plants, and animals—provides strong evidence of a common ancestry.",
            unitId: 7
          },
          {
            id: "7.3.5",
            text: "On a phylogenetic tree, an outgroup is a taxon that:",
            options: ["Is most recently derived in the clade","Diverged BEFORE the lineage under investigation, providing reference for ancestral character states","Has the most derived traits","Is placed at the longest branch tip"],
            correctIndex: 1,
            explanation: "An outgroup diverged before the ingroup. It is used to determine which character states are ancestral (plesiomorphic) vs. derived (apomorphic) within the ingroup.",
            unitId: 7
          },
          {
            id: "7.3.6",
            text: "Which of the following explains why bacterial populations can evolve antibiotic resistance so rapidly?",
            options: ["Antibiotics directly trigger mutations in the bacterial genome to protect them.","Bacteria have rapid reproductive rates, and antibiotics select for pre-existing resistant mutants by killing susceptible competitors.","Bacteria reproduce sexually, generating vast recombinant genomes.","Bacteria incorporate the antibiotic molecules into their cell walls."],
            correctIndex: 1,
            explanation: "Antibiotics do not cause resistance mutations. Rather, random mutations occur naturally; when antibiotics are applied, they kill susceptible bacteria, leaving the pre-existing resistant mutants to multiply rapidly.",
            unitId: 7
          },
          {
            id: "7.3.7",
            text: "Allopatric speciation occurs when:",
            options: ["Two populations in the same area evolve reproductive isolation","A geographic barrier separates a population, leading to independent evolution and eventual reproductive isolation","One phenotype becomes more common over time","One species splits into two without geographic separation"],
            correctIndex: 1,
            explanation: "Allopatric speciation requires geographic isolation. A physical barrier separates a population; isolated subpopulations accumulate genetic differences, eventually becoming reproductively isolated.",
            unitId: 7
          },
          {
            id: "7.3.8",
            text: "Coevolution between predator and prey (both evolving faster running speed) is an example of:",
            options: ["Convergent evolution","Parallel evolution","Reciprocal evolutionary arms race","Allopatric speciation"],
            correctIndex: 2,
            explanation: "The predator-prey arms race is classic coevolution: as prey evolve better defenses (speed, camouflage), predators evolve better hunting traits, driving reciprocal adaptation.",
            unitId: 7
          },
          {
            id: "7.3.9",
            text: "Which source of evidence is considered the most reliable for constructing accurate phylogenetic trees today?",
            options: ["Comparing anatomical similarities in fossil records","Analyzing similarities in behaviors","Comparing homologous DNA or protein sequence alignments","Geographic distributions of modern species"],
            correctIndex: 2,
            explanation: "Molecular sequence comparison provides quantitative data on genomic mutations, yielding highly precise evolutionary relationships.",
            unitId: 7
          },
          {
            id: "7.3.10",
            text: "On a phylogenetic tree, the node (branching point) represents:",
            options: ["An extant (living) species","A hypothetical common ancestor of all lineages diverging from that point","A geographic barrier causing speciation","A mass extinction event"],
            correctIndex: 1,
            explanation: "Each node (branching point) on a phylogenetic tree represents a hypothetical common ancestor from which two or more lineages diverged.",
            unitId: 7
          }
        ]
      },
      {
        id: "7.4",
        title: "Speciation, Extinction, and the Origin of Life",
        description: "Differentiate between allopatric and sympatric speciation and reproductive isolation. Analyze mass extinctions and subsequent adaptive radiation events. Analyze how genetic diversity protects populations from environmental catastrophes. Analyze prebiotic chemical evolution and the RNA World hypothesis.",
        youtubeId: "rlfe-ID_GxY",
        article: `
# Speciation, Extinction, and the Origin of Life

## Origin of Life



The origin of life (~3.5-4 billion years ago) is one of the most profound questions in science. While no direct fossil evidence exists from the very first cells, chemical, phylogenetic, and experimental evidence provides a coherent picture of how life could have emerged from non-living chemistry.

### Timeline of Life on Earth

| Event | Approximate Time |
|---|---|
| Earth forms | 4.5 billion years ago |
| Chemical evolution (prebiotic chemistry) | 4.0-3.8 billion years ago |
| First cells (prokaryotes) | ~3.5-3.8 billion years ago (stromatolite fossils) |
| Photosynthetic cyanobacteria | ~2.7 billion years ago |
| Great Oxygenation Event | ~2.4 billion years ago |
| First eukaryotes | ~1.5-2 billion years ago |
| First multicellular organisms | ~600-700 million years ago |
| Cambrian explosion | ~541 million years ago |

### Chemical Evolution: The Miller-Urey Experiment

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Title -->
<text x="200" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Miller-Urey Experiment Setup</text>

<!-- "Ocean" Flask (Bottom-Left) -->
<circle cx="80" cy="130" r="22" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="1.5" />
<path d="M 58 130 L 102 130 C 102 145, 58 145, 58 130 Z" fill="rgba(59, 130, 246, 0.3)" />
<text x="80" y="134" fill="#60a5fa" font-size="8" font-weight="bold" text-anchor="middle">Ocean</text>
<text x="80" y="163" fill="#a1a1aa" font-size="7" text-anchor="middle">(Boiling Water)</text>

<!-- Glass tubing rising up -->
<path d="M 80 108 L 80 50 L 260 50 L 260 68" fill="none" stroke="#ffffff" stroke-width="2" />

<!-- "Atmosphere" Flask (Top-Right) -->
<circle cx="260" cy="90" r="25" fill="rgba(0, 242, 255, 0.1)" stroke="#00f2ff" stroke-width="1.5" />
<text x="260" y="85" fill="#00f2ff" font-size="8" font-weight="bold" text-anchor="middle">Atmosphere</text>
<text x="260" y="97" fill="#a1a1aa" font-size="7" text-anchor="middle">CH₄, NH₃, H₂O, H₂</text>

<!-- Electrodes & Spark inside Atmosphere Flask -->
<line x1="230" y1="80" x2="245" y2="85" stroke="#eab308" stroke-width="1.5" />
<line x1="290" y1="80" x2="275" y2="85" stroke="#eab308" stroke-width="1.5" />
<path d="M 245 85 L 253 80 L 250 90 L 260 85 L 265 92 L 275 85" fill="none" stroke="#eab308" stroke-width="1.5" />
<text x="260" y="62" fill="#eab308" font-size="8" font-weight="bold" text-anchor="middle">Spark (Lightning)</text>

<!-- Condenser jacket (on the right tube going down) -->
<path d="M 260 115 L 260 145" fill="none" stroke="#ffffff" stroke-width="2" />
<rect x="252" y="118" width="16" height="20" rx="2" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="1" />
<text x="282" y="130" fill="#60a5fa" font-size="7" font-weight="bold">Condenser</text>

<!-- Trap (Bottom-Right) -->
<path d="M 260 145 L 260 160 L 150 160 L 150 135" fill="none" stroke="#ffffff" stroke-width="2" />
<circle cx="150" cy="135" r="10" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" stroke-width="1" />
<text x="150" y="118" fill="#ef4444" font-size="7" font-weight="bold" text-anchor="middle">Organic Trap</text>
<text x="150" y="152" fill="#a1a1aa" font-size="7" text-anchor="middle">(Amino Acids)</text>

<!-- Directions arrows -->
<path d="M 120 50 L 130 50" stroke="#ffffff" stroke-width="1" marker-end="url(#arrow-mu)" />
<path d="M 260 152 L 230 152" stroke="#ffffff" stroke-width="1" />
<!-- Arrow marker -->
<defs>
<marker id="arrow-mu" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff" /></marker>
</defs>
</svg>
</div>

<vocab term="Miller-Urey Experiment" definition="A 1953 experiment by Stanley Miller and Harold Urey demonstrating that organic molecules (amino acids) can form spontaneously from inorganic compounds under simulated early Earth conditions.">Miller-Urey experiment (1953)</vocab>:
- Setup: Water vapor, methane (CH4), ammonia (NH3), hydrogen (H2) - simulated early Earth atmosphere
- Energy: Electric sparks simulated lightning
- Result: After a week, amino acids, sugars, and other organic molecules had formed spontaneously

Significance: Organic molecules can arise by abiotic (non-biological) chemical processes. This is known as **abiogenesis** (life from non-life).

Note: The exact composition of early Earth's atmosphere is still debated (now thought to have been CO2 and N2 dominated), but organic chemistry occurs in many environments:
- Hydrothermal vents: deep sea vents produce organic molecules even today
- Meteorites: amino acids and other organic molecules found in carbonaceous chondrites

### The RNA World Hypothesis

A central chicken-and-egg problem: DNA stores information but cannot catalyze reactions; proteins catalyze reactions but cannot store information. Which came first?

<vocab term="RNA World Hypothesis" definition="The hypothesis that early life was based on RNA, which can both store genetic information and catalyze chemical reactions; ribozymes are modern evidence that RNA once performed both functions.">RNA World Hypothesis</vocab>:
- RNA can both store information (like DNA) and catalyze reactions (ribozymes)
- Evidence: ribosomes use rRNA (not protein) to catalyze peptide bond formation
- Early cells may have used RNA as both genome and enzyme
- DNA (more stable) later took over information storage
- Proteins (more diverse catalysts) later took over enzymatic functions

**Ribozymes** - RNA molecules with catalytic activity:
- Group I and II self-splicing introns
- RNase P (RNA component cleaves pre-tRNA)
- Ribosomal peptidyl transferase activity (23S rRNA)

### Protobionts: Pre-Cellular Systems

Before true cells, simple aggregates of molecules may have formed:

**Coacervates**: droplets of protein-polysaccharide mixtures that can grow and divide

**Liposomes (fatty acid vesicles)**: lipids spontaneously form bilayers in water:
- Fatty acids form vesicles that can grow, pinch off (divide), and concentrate molecules inside
- Key step: molecules inside protected from outside environment
- RNA or DNA inside could begin replication

Properties of protocells:
- Semipermeable membrane (lipid bilayer)
- Metabolism (simple chemical reactions)
- Reproduction by fission
- Some form of heredity (RNA or DNA template)

### The First Cells: LUCA

LUCA (Last Universal Common Ancestor):
- All life shares this single ancestor (supported by universal features)
- Likely had: DNA genome, RNA transcription, ribosomal translation, cell membrane, ATP energy currency
- Modern bacteria and archaea diverged from LUCA shortly after

Features shared by ALL life:
- Lipid bilayer membranes
- DNA as genetic material
- RNA as intermediary
- Ribosomal protein synthesis
- ATP as energy currency
- Genetic code (same codons)

These shared features are most parsimoniously explained by descent from one common ancestor.

### Great Oxygenation Event

Before ~2.4 billion years ago, Earth's atmosphere had little free O2:
- Early life was anaerobic
- Cyanobacteria evolved oxygenic photosynthesis (~2.7 bya): 6CO2 + 6H2O -> C6H12O6 + 6O2
- O2 accumulated, first reacting with iron in oceans (banded iron formations)
- Then O2 entered atmosphere -> **Great Oxygenation Event** (~2.4 bya)
- O2 was toxic to anaerobic organisms (mass extinction of anaerobes)
- Some survivors adapted to use O2 -> aerobic respiration evolved (much more efficient: 38 ATP vs. 2 ATP per glucose)

### AP Exam Focus

- Miller-Urey experiment: organic molecules (amino acids) form from inorganic precursors
- RNA World: RNA can both store information and catalyze reactions (ribozymes)
- Ribosomes are ancient; rRNA (not protein) catalyzes peptide bond formation
- Lipid vesicles (liposomes) could have been protocell membranes
- Great Oxygenation Event: cyanobacteria produced O2; enabled evolution of aerobic respiration

## Prokaryotes



<vocab term="Prokaryotes" definition="Single-celled organisms lacking a membrane-bound nucleus and other membrane-bound organelles; divided into two domains: Bacteria and Archaea.">Prokaryotes</vocab> (domains Bacteria and Archaea) are the most abundant and metabolically diverse organisms on Earth. Despite their small size and simple structure, they drive major biogeochemical cycles that maintain life on Earth.

### Prokaryotic Cell Structure

| Feature | Prokaryote | Eukaryote |
|---|---|---|
| Nucleus | No (nucleoid region) | Yes (membrane-bound) |
| Chromosome | Circular; one main chromosome | Multiple linear chromosomes |
| Membrane-bound organelles | No | Yes |
| Ribosomes | 70S (50S + 30S) | 80S (60S + 40S) |
| Cell wall | Usually (peptidoglycan in bacteria; different in archaea) | Only plants/fungi (different composition) |
| Cytoskeleton | Simple (FtsZ, MreB proteins) | Complex (actin, tubulin, IF) |
| DNA packaging | Nucleoid-associated proteins | Histones around DNA |
| Size | 0.1-10 micrometers | 10-100 micrometers |

### Unique Prokaryotic Structures

**Plasmids**: small circular DNA molecules separate from the main chromosome
- Not essential for survival in normal conditions
- Carry genes for antibiotic resistance, toxin production, etc.
- Can be transferred between bacteria by conjugation

**Pili**: protein appendages on cell surface
- Sex pili: used in conjugation (DNA transfer)
- Fimbriae: help attach to surfaces and to host cells

**Flagella**: rotating protein filaments for movement
- Powered by proton gradient (not ATP directly)
- Chemotaxis: bacteria swim toward nutrients or away from toxins

**Capsule**: sticky polysaccharide layer outside cell wall
- Protects from phagocytosis by immune cells
- Aids in biofilm formation
- Example: Streptococcus pneumoniae capsule required for virulence

**Endospores**: dormant, resistant structures formed by some gram-positive bacteria
- Extremely resistant to heat, radiation, desiccation, chemicals
- Example: Bacillus anthracis (anthrax) spores can survive decades

### Gram Staining: A Fundamental Classification

<vocab term="Gram Staining" definition="A differential staining technique that divides bacteria into two groups based on cell wall composition: gram-positive (thick peptidoglycan, stain purple) and gram-negative (thin peptidoglycan, outer membrane, stain pink).">Gram staining</vocab> reveals cell wall structure:

| Feature | Gram-Positive | Gram-Negative |
|---|---|---|
| Peptidoglycan layer | Thick (20-80 nm) | Thin (2-7 nm) |
| Outer membrane | No | Yes (LPS - lipopolysaccharide) |
| Stain color | Purple (crystal violet retained) | Pink/red (counterstain) |
| Antibiotic sensitivity | Sensitive to penicillin (targets peptidoglycan) | Less sensitive to many antibiotics |
| Toxins | Gram-positive exotoxins secreted | LPS is endotoxin (released on cell death) |
| Examples | Staphylococcus, Streptococcus, Bacillus | E. coli, Salmonella, Helicobacter pylori |

### Bacterial Reproduction and Genetics

**Binary fission**: bacteria divide by splitting in two
- No mitosis; nucleoid regions separate as cell elongates
- Under optimal conditions: E. coli divides every 20 minutes (2^72 cells in 24 hours!)

**Genetic variation in bacteria (without sexual reproduction):**

1. **Transformation**: uptake of naked DNA from environment
   - Griffith's experiment (1928): demonstrated genetic transformation
   - Competent bacteria actively take up DNA; natural in some bacteria (Streptococcus, Bacillus)

2. **Transduction**: virus (bacteriophage) transfers bacterial DNA to new host
   - Generalized: random bacterial genes packaged in phage
   - Specialized: specific genes near phage integration site
   
3. **Conjugation**: "bacterial sex" - direct DNA transfer via sex pilus
   - F+ (male) bacteria contain F plasmid; form pilus to F- (female) bacteria
   - F plasmid or chromosomal DNA can be transferred
   - Primary mechanism of antibiotic resistance gene spread

### Metabolic Diversity

Prokaryotes exhibit unparalleled metabolic diversity:

| Metabolic Type | Energy Source | Carbon Source | Examples |
|---|---|---|---|
| Photoautotroph | Light | CO2 | Cyanobacteria, purple bacteria |
| Chemoautotroph | Inorganic chemicals | CO2 | Nitrifying bacteria, sulfur bacteria |
| Photoheterotroph | Light | Organic compounds | Purple nonsulfur bacteria |
| Chemoheterotroph | Organic chemicals | Organic compounds | E. coli, most pathogens, humans |

### Ecological Roles of Prokaryotes

**Nitrogen cycle** (critical for all life):
- <vocab term="Nitrogen Fixation" definition="The conversion of atmospheric N2 gas to ammonia (NH3) by nitrogen-fixing bacteria; the only way organisms can access atmospheric nitrogen.">Nitrogen fixation</vocab>: N2 -> NH3 (Rhizobium in root nodules with legumes; free-living Azotobacter)
- Nitrification: NH3 -> NO2- -> NO3- (Nitrosomonas, Nitrobacter)
- Denitrification: NO3- -> N2 (returns nitrogen to atmosphere; anaerobic)

**Carbon cycle**: decomposition of organic matter; methane production (methanogens)

**Extreme environments** (archaea):
- Thermophiles: hot springs (Sulfolobus)
- Halophiles: salt lakes (Halobacterium)
- Methanogens: produce methane in swamps, cow stomachs, wetlands

### AP Exam Focus

- Prokaryotic features: no nucleus, circular DNA, 70S ribosomes, usually have cell wall
- Gram-positive: thick peptidoglycan, no outer membrane; gram-negative: thin peptidoglycan + outer membrane
- Three mechanisms of gene transfer: transformation, transduction, conjugation
- Nitrogen fixation: N2 to NH3; only done by prokaryotes (Rhizobium in legume nodules)
- Archaea: extreme environments; more closely related to Eukarya than Bacteria

## Eukaryotes



<vocab term="Eukaryotes" definition="Organisms with cells containing a membrane-bound nucleus and other membrane-bound organelles; includes protists, fungi, plants, and animals; arose ~1.5-2 billion years ago from prokaryotic ancestors.">Eukaryotes</vocab> (domain Eukarya) include the most structurally complex organisms on Earth. Their defining feature - compartmentalization - enables the metabolic sophistication necessary for multicellular complexity.

### Major Eukaryotic Groups

#### Protists (paraphyletic group)
- Most ancient eukaryotes; diverse and largely unicellular
- Include photosynthetic algae, heterotrophic amoeba, and parasitic apicomplexans
- Many of extreme biological importance:
  - Plasmodium: causes malaria (via Anopheles mosquitoes); kills ~600,000 people/year
  - Trypanosoma: causes sleeping sickness and Chagas disease
  - Phytoplankton (diatoms, dinoflagellates): produce ~50% of Earth's oxygen
  - Kelp (brown algae): foundation of marine kelp forest ecosystems

#### Fungi
- Heterotrophic, absorptive nutrition (secrete digestive enzymes externally, absorb products)
- Cell walls made of chitin (also in arthropod exoskeletons)
- Mostly multicellular (hyphae -> mycelium), except yeasts (unicellular)
- Ecological role: primary decomposers; recycle nutrients
- Economic importance: bread yeast (Saccharomyces cerevisiae), antibiotics (Penicillium), edible mushrooms

**Fungal life cycle features:**
- Dikaryotic phase: two haploid nuclei in cell but not fused (unique to fungi)
- Sexual reproduction: spore formation
- Asexual reproduction: spores from conidiophores or sporangia

#### Plants
- Multicellular, autotrophic (photosynthesis)
- Cell walls (cellulose); chloroplasts; large central vacuoles
- Adapted to terrestrial life: cuticle (waxy coating), stomata (gas exchange), vascular tissue (xylem/phloem)
- Alternation of generations (sporophyte and gametophyte stages)

**Plant evolution: Adaptations to land**

| Group | Key Innovation | Examples |
|---|---|---|
| Bryophytes (mosses) | Land colonization (no vascular tissue) | Mosses, liverworts, hornworts |
| Lycophytes | Vascular tissue | Club mosses |
| Pteridophytes (ferns) | Vascular tissue + leaves | Ferns, horsetails |
| Gymnosperms | Seeds (no fruit) | Conifers, cycads, ginkgo |
| Angiosperms | Seeds + flowers + fruits | All flowering plants; ~90% of plant species |

**Key land plant innovations:**
- <vocab term="Vascular Tissue" definition="Specialized conducting tissue in plants (xylem and phloem) that transports water, minerals, and organic compounds throughout the plant body.">Vascular tissue</vocab> (xylem: water/minerals; phloem: sugars)
- Seeds: protect embryo, enable dispersal without water
- Flowers and fruits: facilitate animal-aided pollination and seed dispersal

#### Animals (Animalia)
- Multicellular, heterotrophic, no cell wall
- Most have nervous system and muscle tissue
- Sexual reproduction predominates
- Bilateral symmetry in most; radial symmetry in cnidarians and echinoderms

**Major animal phyla and key features:**

| Phylum | Key Features | Examples |
|---|---|---|
| Porifera (sponges) | No true tissues; filter feeders | Sea sponges |
| Cnidaria | Radial symmetry; nematocysts | Jellyfish, sea anemones, coral |
| Platyhelminthes | Flatworms; acoelomate | Planaria, tapeworms, flukes |
| Nematoda | Roundworms; pseudocoelomate | C. elegans, hookworm, Ascaris |
| Mollusca | Soft body; mantle; often shell | Snails, clams, octopus, squid |
| Annelida | Segmented worms; coelomate | Earthworms, leeches, polychaetes |
| Arthropoda | Exoskeleton; jointed appendages | Insects, spiders, crabs, lobsters |
| Echinodermata | Water vascular system; spiny; radial | Sea stars, sea urchins, sea cucumbers |
| Chordata | Notochord; dorsal nerve cord; pharyngeal slits; post-anal tail | Vertebrates + tunicates + lancelets |

**Animal key innovations:**
- Bilateral symmetry (most animals): allows directed movement; head/tail organization
- Coelom: true body cavity lined with mesoderm; allows organ development
- Segmentation: repetitive body units enable specialization (arthropods, annelids, vertebrates)

### AP Exam Focus

- Fungi: chitin cell walls, heterotrophic, absorptive nutrition, decomposers
- Plants: cellulose cell walls, autotrophic, adapted to land (vascular tissue, seeds, flowers)
- Animal phylogeny: key innovations include bilateral symmetry, coelom, segmentation
- Protists include malaria-causing Plasmodium; also key primary producers (phytoplankton)
- Alternation of generations in plants: sporophyte (2n) and gametophyte (n) stages

## Biological Diversity

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Tree Lines -->
<line x1="50" y1="150" x2="150" y2="150" stroke="#ffffff" stroke-width="2" />
<!-- Branch 1 (to Taxon A) -->
<line x1="150" y1="150" x2="280" y2="20" stroke="#ffffff" stroke-width="2" />
<!-- Branch 2 (to Taxon B) -->
<line x1="200" y1="100" x2="280" y2="100" stroke="#ffffff" stroke-width="2" />
<!-- Branch 3 (to Taxon C) -->
<line x1="240" y1="60" x2="280" y2="60" stroke="#ffffff" stroke-width="2" />
<!-- Labels for Taxa -->
<text x="290" y="24" fill="#ffffff" font-size="10" font-weight="bold">Taxon A</text>
<text x="290" y="104" fill="#ffffff" font-size="10" font-weight="bold">Taxon B</text>
<text x="290" y="64" fill="#ffffff" font-size="10" font-weight="bold">Taxon C</text>
<!-- Nodes -->
<circle cx="150" cy="150" r="3" fill="#fbbf24" />
<text x="145" y="165" fill="#fbbf24" font-size="8" text-anchor="end">Common Ancestor</text>
<circle cx="200" cy="100" r="3" fill="#fbbf24" />
<circle cx="240" cy="60" r="3" fill="#fbbf24" />
<!-- Shared derived characters (hash marks) -->
<line x1="170" y1="130" x2="180" y2="120" stroke="#ef4444" stroke-width="3" />
<text x="185" y="132" fill="#ef4444" font-size="8">Trait 1</text>
<line x1="220" y1="80" x2="230" y2="70" stroke="#ef4444" stroke-width="3" />
<text x="235" y="82" fill="#ef4444" font-size="8">Trait 2</text>
<!-- Title -->
<text x="200" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Phylogenetic Tree (Cladogram)</text>
</svg>
</div>

<vocab term="Biodiversity" definition="The variety of life at all levels of organization - from genetic variation within species through species diversity in communities to ecosystem diversity; the result of evolution over 3.8 billion years.">Biodiversity</vocab> encompasses genetic variation within species, the variety of species in communities, and the diversity of ecosystems. The estimated ~8.7 million species on Earth (most undescribed) are the result of billions of years of evolution.

### Levels of Biodiversity

**Genetic diversity**: Variation in DNA sequences within a species
- Enables populations to adapt to environmental change
- Reduced in bottlenecked or inbred populations (cheetahs, island species)

**Species diversity**: Number and relative abundance of species in a community
- Measured by **species richness** (number of species) and **evenness** (relative abundances)
- High species diversity often associated with ecosystem stability

**Ecosystem diversity**: Variety of different ecosystem types on Earth
- Tropical rainforests, coral reefs, temperate forests, grasslands, tundra, etc.
- Each provides different services (habitat, carbon storage, water purification)

### Macroevolution: Large-Scale Evolutionary Patterns

<vocab term="Macroevolution" definition="Large-scale evolutionary changes above the species level, including the origin of major groups (orders, classes, phyla), adaptive radiations, and mass extinctions.">Macroevolution</vocab> refers to evolutionary patterns above the species level:

#### Adaptive Radiation
Rapid diversification into many ecologically diverse species:
- Hawaiian honeycreepers: 50+ species from one finch ancestor
- Cichlid fish: 300+ species in Lake Victoria in 15,000 years
- Mammals: explosive radiation after dinosaur extinction 66 mya

#### Mass Extinctions
Catastrophic loss of species (>75% in geological short time):

| Mass Extinction | Time | Cause | % Species Lost |
|---|---|---|---|
| End-Ordovician | 443 mya | Glaciation, sea level drop | ~85% |
| Late Devonian | 375 mya | Multiple causes | ~75% |
| End-Permian (Great Dying) | 252 mya | Volcanism, warming, ocean acidification | ~95% |
| End-Triassic | 201 mya | Volcanism | ~80% |
| End-Cretaceous (K-Pg) | 66 mya | Asteroid impact + volcanism | ~76% |

After each extinction: surviving lineages radiate into vacated ecological roles.

**The 6th Mass Extinction**: Currently underway due to human activities
- Species extinction rate: 100-1,000x background rate
- Caused by: habitat destruction, climate change, invasive species, pollution, overharvesting

### Major Patterns in Biological Diversity

#### Latitudinal Diversity Gradient
Species diversity generally increases from poles to equator:
- Tropical rainforests: highest diversity (~50% of species in <10% of land area)
- Tundra: very low diversity
- Explanations: greater energy input at tropics, greater area, greater age (less disturbed by glaciation)

#### Island Biogeography Theory (MacArthur and Wilson)
Equilibrium species richness on an island is determined by:
- Immigration rate (decreases as island becomes more species-rich; fewer new species to come)
- Extinction rate (increases as island becomes more species-rich; more competition)

Equilibrium = where immigration rate = extinction rate

Predictions:
- **Larger islands**: higher equilibrium richness (lower extinction rates)
- **Closer to mainland**: higher equilibrium richness (higher immigration rates)

This predicts that habitat fragmentation (creating "islands" of habitat) reduces species richness.

### Coevolution: Reciprocal Evolution Between Species

<vocab term="Coevolution" definition="The process by which two or more species exert reciprocal selective pressures on each other, each driving evolutionary changes in the other.">Coevolution</vocab> occurs when two species exert selection pressure on each other:

**Arms races:**
- Plant toxins and herbivore detoxification mechanisms evolve in parallel
- Predator speed and prey speed coevolve
- Host immune system and pathogen evasion mechanisms

**Mutualistic coevolution:**
- Flower shape and pollinator body shape match precisely
- Fig trees and fig wasps: obligate mutualism; neither can reproduce without the other
- Legumes and Rhizobium bacteria: nitrogen fixation

**Parasitic coevolution:**
- Red Queen hypothesis: parasites drive rapid evolution of host immune systems
- Example: MHC diversity in humans (high variation in immune recognition genes driven by parasite pressure)

### Conservation Biology: Applying Evolutionary Principles

Conservation biology uses evolutionary and ecological principles to protect biodiversity:

Key strategies:
- **Protect large areas**: supports larger populations, reduces drift effects, maintains species diversity
- **Maintain connectivity**: corridors between habitat fragments maintain gene flow
- **Captive breeding**: preserve genetic diversity for reintroduction (genetic management required)
- **Protect keystone species**: species with disproportionate ecological impact

<vocab term="Keystone Species" definition="A species that has a disproportionately large impact on its ecosystem relative to its biomass; their removal causes dramatic changes in community structure (e.g., sea otters maintaining kelp forests).">Keystone species</vocab> examples:
- Sea otters: eat sea urchins; without them, urchin populations explode and destroy kelp forests
- Wolves in Yellowstone: "trophic cascade" - wolves control elk, which allows riparian vegetation to recover
- African elephants: create water holes and paths used by many other species

### AP Exam Focus

- Three levels of biodiversity: genetic, species, ecosystem
- Mass extinctions: five major events; the K-Pg event killed non-avian dinosaurs (asteroid impact)
- Island biogeography: larger, closer islands have more species (higher immigration, lower extinction)
- Coevolution: reciprocal selection between species (arms races, mutualism, parasitism)
- Keystone species: disproportionate ecological effect; sea otters, wolves are classic examples
`,
        questions: [
          {
            id: "7.4.1",
            text: "Which of the following is an example of a prezygotic barrier that leads to reproductive isolation?",
            options: ["Two species of frogs lay eggs that fertilize, but the hybrid tadpoles die before reaching adulthood.","Two species of birds live in the same forest but use completely different courtship songs to attract mates.","A horse and a donkey mate to produce a sterile mule.","A hybrid seed germinates but cannot produce pollen."],
            correctIndex: 1,
            explanation: "Behavioral isolation (using different courtship songs) is a prezygotic barrier because it prevents mating and fertilization from occurring in the first place.",
            unitId: 7
          },
          {
            id: "7.4.2",
            text: "Sympatric speciation occurs when:",
            options: ["A geographic barrier separates two populations","Two populations in the SAME geographic area evolve reproductive isolation","A small founder group establishes a new population","A catastrophic event reduces population size"],
            correctIndex: 1,
            explanation: "Sympatric speciation: new species form within the same geographic area without physical separation. Polyploidy in plants is a common mechanism.",
            unitId: 7
          },
          {
            id: "7.4.3",
            text: "Polyploidy (having multiple sets of chromosomes) most often leads to immediate speciation in:",
            options: ["Animals (most common in vertebrates)","Plants (where polyploids can self-fertilize and establish new populations)","Fungi (asexual reproducers)","Bacteria (through binary fission)"],
            correctIndex: 1,
            explanation: "Polyploid plants can self-fertilize, immediately establishing a reproductively isolated population. This is a common mechanism of sympatric speciation in flowering plants.",
            unitId: 7
          },
          {
            id: "7.4.4",
            text: "Which Cretaceous event is hypothesized to have triggered the mass extinction of non-avian dinosaurs approximately 66 million years ago?",
            options: ["The collision of a massive asteroid with Earth, causing global dust clouds that blocked sunlight","The sudden accumulation of oxygen in the atmosphere","A worldwide plague caused by eukaryotic viruses","The splitting of Pangea into separate continents"],
            correctIndex: 0,
            explanation: "An asteroid impact in the Yucatan Peninsula kicked up immense soot and dust, blocking solar radiation, halting photosynthesis, and collapsing food webs globally.",
            unitId: 7
          },
          {
            id: "7.4.5",
            text: "Following a mass extinction, surviving lineages often diversify rapidly into many new ecological niches. This is called:",
            options: ["Convergent evolution","Coevolution","Adaptive radiation","Stabilizing selection"],
            correctIndex: 2,
            explanation: "Adaptive radiation: following a mass extinction, surviving species rapidly diversify into many ecological niches vacated by extinct species, producing many new species.",
            unitId: 7
          },
          {
            id: "7.4.6",
            text: "Why are genetically uniform agricultural crops (monocultures) highly vulnerable to ecological collapse?",
            options: ["They undergo rapid genetic drift.","They lack genetic variation, meaning a single disease or pest can kill all individuals since none possess resistance alleles.","They accumulate mutations at a higher rate.","They are unable to run the light-dependent reactions."],
            correctIndex: 1,
            explanation: "Because there is no genetic diversity, every individual is equally susceptible to a pathogen. If one dies, they can all die, leading to crop collapse.",
            unitId: 7
          },
          {
            id: "7.4.7",
            text: "A population with HIGH genetic diversity is more resilient to environmental change because:",
            options: ["High diversity means more individuals reproduce per generation","Some individuals are likely to have alleles conferring resistance to new environmental challenges","Genetic diversity prevents mutations from occurring","High diversity reduces competition between individuals"],
            correctIndex: 1,
            explanation: "Genetic diversity ensures that when the environment changes, some individuals are likely to possess alleles that confer survival advantage, preventing population extinction.",
            unitId: 7
          },
          {
            id: "7.4.8",
            text: "Which of the following human activities MOST directly reduces genetic variation in crop plants?",
            options: ["Crop rotation between different plant species","Monoculture farming and selective breeding for uniform traits","Application of pesticides","Irrigation of farmland"],
            correctIndex: 1,
            explanation: "Monoculture farming and artificial selection for uniform traits reduces genetic diversity, making crops vulnerable to new diseases or pests because all individuals have the same genotype.",
            unitId: 7
          },
          {
            id: "7.4.9",
            text: "Which of the following support the 'RNA World' hypothesis?",
            options: ["RNA contains deoxyribose sugar which is highly stable.","RNA can store genetic information and catalyze biochemical reactions (as ribozymes), unlike DNA which requires protein enzymes to replicate.","All viruses carry double-stranded RNA genomes.","RNA is only found in eukaryotic nuclei."],
            correctIndex: 1,
            explanation: "RNA has both informational (genetic) and catalytic (enzymatic) properties, meaning it could have run prebiotic metabolism and self-replication prior to the evolution of DNA and proteins.",
            unitId: 7
          },
          {
            id: "7.4.10",
            text: "Stanley Miller and Harold Urey's experiment (1953) demonstrated that:",
            options: ["Living cells could spontaneously generate from nonliving matter","Organic molecules (amino acids) can form abiotically from inorganic gases under early Earth conditions","DNA was the first genetic molecule on Earth","Proteins evolved before nucleic acids"],
            correctIndex: 1,
            explanation: "The Miller-Urey experiment simulated early Earth's atmosphere (CH4, NH3, H2O, H2) with electrical sparks and produced amino acids - showing organic molecules can arise abiotically.",
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
        title: "Responses to the Environment and Ecosystem Energy Flow",
        description: "Analyze behavioral and physiological responses of organisms to environmental changes. Analyze photosynthetic efficiency, trophic levels, and the 10% rule of thermodynamic transfer.",
        youtubeId: "swYvnMXi58I",
        article: `
# Responses to the Environment and Ecosystem Energy Flow

## Ecology: Studying the Interactions of Life

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Axes -->
<line x1="50" y1="140" x2="350" y2="140" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="50" y1="20" x2="50" y2="140" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Axis Labels -->
<text x="200" y="158" fill="#ffffff" font-size="9" text-anchor="middle">Annual Mean Temperature (Cold → Hot)</text>
<text x="15" y="80" fill="#ffffff" font-size="9" text-anchor="middle" transform="rotate(-90 15 80)">Annual Mean Precipitation (Dry → Wet)</text>
<!-- Biome Shaded Regions -->
<!-- Tundra: bottom left -->
<polygon points="50,140 100,140 80,100 50,100" fill="rgba(147, 197, 253, 0.15)" stroke="#93c5fd" stroke-width="1" />
<text x="68" y="125" fill="#93c5fd" font-size="8" text-anchor="middle">Tundra</text>
<!-- Boreal Forest / Taiga -->
<polygon points="100,140 170,140 150,80 80,100" fill="rgba(52, 211, 153, 0.15)" stroke="#34d399" stroke-width="1" />
<text x="125" y="115" fill="#34d399" font-size="8" text-anchor="middle">Taiga</text>
<!-- Desert: bottom right -->
<polygon points="170,140 340,140 280,110 150,110" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" stroke-width="1" />
<text x="240" y="130" fill="#fbbf24" font-size="8" text-anchor="middle">Desert</text>
<!-- Grassland / Savanna -->
<polygon points="150,110 280,110 260,70 150,80" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="1" />
<text x="200" y="98" fill="#f43f5e" font-size="8" text-anchor="middle">Grassland</text>
<!-- Temperate Forest -->
<polygon points="150,80 260,70 240,40 120,60" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" stroke-width="1" />
<text x="180" y="65" fill="#a78bfa" font-size="8" text-anchor="middle">Temperate Forest</text>
<!-- Tropical Forest -->
<polygon points="260,70 340,70 320,30 240,40" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="1.5" />
<text x="290" y="55" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">Tropical Forest</text>
<!-- Title -->
<text x="200" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Whittaker Biome Classification</text>
</svg>
</div>

<vocab term="Ecology" definition="The scientific study of the interactions between organisms and their environments, including the biotic (living) and abiotic (nonliving) components; operates at the level of organisms, populations, communities, and ecosystems.">Ecology</vocab> is the study of how organisms interact with each other and with their physical environment. It operates at multiple levels of organization, each with distinct emergent properties.

### Levels of Ecological Organization

| Level | Description | Example |
|---|---|---|
| Organism | Individual living organism | A single sea otter |
| Population | Group of same species in same area | Sea otters in Monterey Bay |
| Community | All species in same area | All organisms in Monterey Bay kelp forest |
| Ecosystem | Community + abiotic factors (water, climate, nutrients) | Monterey Bay including water chemistry, temperature |
| Biome | Large geographic regions with similar climate and dominant vegetation | Temperate rainforest biome |
| Biosphere | All of Earth's ecosystems together | All life on Earth |

### Abiotic and Biotic Factors

**Abiotic factors** (nonliving):
- Temperature (shapes enzyme function, metabolic rates)
- Water availability (limits most life)
- Sunlight intensity and photoperiod
- pH (affects enzyme activity, solubility of nutrients)
- Salinity
- Substrate/soil composition
- Wind and currents

**Biotic factors** (living):
- Predators and prey
- Competitors (same or different species)
- Mutualists and parasites
- Pathogens
- Decomposers

### Climate: The Physical Template for Life

<vocab term="Climate" definition="The long-term pattern of temperature and precipitation in a region; determined by latitude, altitude, proximity to oceans, and atmospheric circulation patterns; shapes biome distribution.">Climate</vocab> vs. **weather**: climate is long-term patterns; weather is day-to-day conditions.

**Key drivers of climate:**
- **Latitude**: tropical regions receive most intense sunlight; polar regions receive least
- **Hadley cells**: rising warm air at equator creates tropical rain forests; descending dry air at ~30 degrees creates deserts
- **Coriolis effect**: Earth's rotation deflects air currents; creates trade winds and westerlies
- **Ocean currents**: moderate coastal climates (warm California Current vs. cold Humboldt Current)
- **Altitude**: temperature decreases ~6 degrees C per 1,000 m elevation

**Rain shadow effect**: mountains cause precipitation on windward side; deserts on leeward side
- Example: Sierra Nevada Mountains create wet western slope and dry Great Basin desert on eastern side

### Major Biomes

<vocab term="Biome" definition="A major terrestrial or aquatic zone characterized by distinct climate and dominant vegetation types; boundaries determined primarily by temperature and precipitation.">Biomes</vocab> are major regions defined by climate and dominant vegetation:

| Biome | Climate | Key Features | Examples |
|---|---|---|---|
| Tropical rainforest | Hot, wet year-round | Highest biodiversity; layered canopy | Amazon, Congo basin |
| Tropical savanna | Warm; seasonal rainfall | Grassland with scattered trees; large herbivores | African savanna |
| Desert | Very dry (< 25 cm/year) | Sparse vegetation; extreme temperature swings | Sahara, Mojave |
| Temperate grassland | Moderate; seasonal drought | Grasses, few trees; fertile soils | Great Plains, Pampas |
| Temperate deciduous forest | Moderate; distinct seasons | Deciduous trees; moderate diversity | Eastern US, Europe |
| Temperate rainforest | Wet, mild | Coniferous trees; moss-covered | Pacific Northwest |
| Boreal forest (taiga) | Cold, moderate precipitation | Coniferous trees; low diversity | Canada, Russia, Siberia |
| Tundra | Very cold; permafrost | No trees; mosses, lichens, sedges | Arctic, high altitude |

### Aquatic Biomes

Cover ~75% of Earth's surface:

**Freshwater** (less than 1% salinity):
- Lakes and ponds: stratified by temperature; littoral (shallow), limnetic (open water), benthic (bottom) zones
- Rivers and streams: flowing water; high oxygen; nutrients from surrounding land
- Wetlands: swamps, marshes, bogs; extremely high productivity; important carbon sinks

**Marine** (more than 3% salinity):
- Open ocean (pelagic): ~90% of ocean; low nutrients; phytoplankton base
- Coastal (neritic): shallow, high nutrients; high productivity
- Coral reefs: most biodiverse marine ecosystems; built by cnidarians
- Intertidal zone: alternately submerged and exposed; harsh conditions
- Estuaries: where rivers meet ocean; brackish water; extremely productive nurseries

### Energy Flow in Ecosystems

All ecosystems require an energy source. <vocab term="Primary Producers" definition="Autotrophs (plants, algae, cyanobacteria) that capture energy from sunlight or chemical bonds to produce organic compounds; the foundation of all food webs.">Primary producers</vocab> convert energy to organic compounds:
- **Photosynthetic producers**: use sunlight (plants, algae, cyanobacteria)
- **Chemosynthetic producers**: use inorganic chemical energy (deep-sea vent communities: sulfur bacteria)

**The 10% Rule**: Only ~10% of energy is transferred between trophic levels:
- 90% is lost as heat (respiration), undigested material, or unavailable portions
- This limits food chain length (usually 3-4 levels)

### AP Exam Focus

- Levels of ecological organization: organism, population, community, ecosystem, biome, biosphere
- Climate: determined by latitude, altitude, ocean currents; Hadley cells create tropical rain/30-degree deserts
- Biome distribution: primarily determined by temperature and precipitation patterns
- 10% rule: only 10% of energy transferred between trophic levels
- Abiotic vs. biotic factors: nonliving vs. living components of environment

## Energy Flow Through Ecosystems

<div class="flex justify-center my-8">
<svg width="450" height="180" viewBox="0 0 450 180" class="max-w-full">
<polygon points="200,20 180,50 220,50" fill="none" stroke="#ef4444" stroke-width="1.5" />
<text x="200" y="42" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">0.1%</text>
<polygon points="180,50 220,50 240,90 160,90" fill="none" stroke="#f59e0b" stroke-width="1.5" />
<text x="200" y="75" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">1%</text>
<polygon points="160,90 240,90 260,130 140,130" fill="none" stroke="#3b82f6" stroke-width="1.5" />
<text x="200" y="115" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">10%</text>
<polygon points="140,130 260,130 280,170 120,170" fill="none" stroke="#22c55e" stroke-width="2" />
<text x="200" y="155" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">100% (Producers)</text>
<text x="300" y="100" fill="#a1a1aa" font-size="10" font-weight="bold">10% Rule of Energy Transfer</text>
</svg>
</div>

Energy flows one way through ecosystems, entering as sunlight, passing through trophic levels, and leaving as heat. Nutrients, in contrast, are recycled.

### Trophic Levels and Energy Pyramids

Ecosystems are organized into trophic levels based on their source of energy:
- **Primary Producers (Autotrophs)**: Photosynthetic organisms (plants, algae) that capture solar energy.
- **Primary Consumers**: Herbivores that eat producers.
- **Secondary Consumers**: Carnivores that eat herbivores.
- **Tertiary Consumers**: Carnivores that eat other carnivores.
- **Decomposers (Detritivores)**: Fungi and bacteria that break down dead organic matter, recycling nutrients.

### The 10% Rule of Ecological Efficiency

Energy transfer between trophic levels is highly inefficient:
- The **10% Rule** states that only about 10% of the energy stored at one trophic level is transferred to the next level.
- The remaining 90% of energy is lost as metabolic heat, used for cellular work, or left undigested in waste.
- This severe energy loss limits the length of food chains (usually to 4-5 levels) because there is insufficient energy to support higher trophic levels.

### Primary Productivity and Net Energy

Primary productivity measures the rate of organic matter synthesis:
- **Gross Primary Productivity (GPP)**: The total amount of solar energy captured by primary producers via photosynthesis per unit area per unit time.
- **Net Primary Productivity (NPP)**: The energy remaining after producers use some for cellular respiration ($R$):
  $$NPP = GPP - R$$
- NPP represents the actual chemical energy available to consumers in the ecosystem.

### Factors Limiting Ecosystem Productivity

Productivity varies significantly across biomes and is limited by specific factors:
- **Terrestrial Ecosystems**: Primarily limited by temperature, moisture, and soil nutrients (nitrogen and phosphorus).
- **Aquatic Ecosystems**: Limited by light penetration (depth of photic zone) and nutrient availability. Upwelling areas are highly productive because they bring nutrients to the surface.

| Ecosystem Type | Average NPP ($\\text{g/m}^2/\\text{year}$) | Primary Limiting Factors |
|---|---|---|
| Tropical Rainforest | 2,200 | Phosphorus, light (understory) |
| Estuaries / Coral Reefs | 2,000 | Nitrogen, physical disturbance |
| Deciduous Forest | 1,200 | Temperature, season length |
| Open Ocean | 125 | Iron, nitrogen, light depth |

### AP Exam Focus

- Apply the 10% rule to calculate energy transfer across trophic levels (e.g., if producers have 10,000 J of energy, estimate how much reaches tertiary consumers: 10 J)
- Contrast the open, one-way flow of energy with the closed, circular recycling of nutrients
- Relate primary productivity (NPP and GPP) to ecosystem biomass and biodiversity
`,
        questions: [
          {
            id: "8.1.1",
            text: "A woodlouse placed in a dry environment accelerates its movement randomly until it encounters a damp area, where it slows down. What type of response is this?",
            options: ["Chemotaxis","Kinesis","Phototaxis","Operant conditioning"],
            correctIndex: 1,
            explanation: "Kinesis is a non-directional change in activity rate in response to a stimulus. The woodlouse moves randomly but faster in dry conditions, increasing its chances of finding moisture.",
            unitId: 8
          },
          {
            id: "8.1.2",
            text: "How do short-day plants determine when to flower in seasonal climates?",
            options: ["They measure the intensity of solar radiation.","They measure the duration of continuous darkness (night length) using phytochrome photoreceptors.","They sense the water potential of the soil.","They respond to the accumulation of ethylene gas."],
            correctIndex: 1,
            explanation: "Short-day (long-night) plants require a continuous critical period of darkness to flower. If this dark period is interrupted by a flash of light, they will not flower.",
            unitId: 8
          },
          {
            id: "8.1.3",
            text: "Behavioral responses (migration) and physiological responses (thicker fur in winter) both serve to:",
            options: ["Permanently change the organism's genotype","Maintain homeostasis and increase survival fitness in changing conditions","Reduce genetic diversity","Increase competition between individuals"],
            correctIndex: 1,
            explanation: "Both behavioral and physiological responses are adaptive strategies that help organisms survive and maintain homeostasis, ultimately increasing fitness.",
            unitId: 8
          },
          {
            id: "8.1.4",
            text: "A plant closing stomata during the hottest part of the day is responding to:",
            options: ["Low CO2 triggering stomatal closure","High temperature and potential water loss, conserving water by reducing transpiration","Increased oxygen levels inhibiting photosynthesis","Lack of sunlight due to cloud cover"],
            correctIndex: 1,
            explanation: "Plants close stomata in response to drought stress and high temperatures. Guard cells lose turgor pressure and the stomatal pore closes to reduce transpiration.",
            unitId: 8
          },
          {
            id: "8.1.5",
            text: "A bacterium swimming toward a glucose gradient is displaying:",
            options: ["Kinesis (undirected change in speed)","Positive chemotaxis toward an attractant","Negative phototaxis away from light","Homeostatic regulation of internal glucose"],
            correctIndex: 1,
            explanation: "Chemotaxis is movement directed by a chemical gradient. Positive chemotaxis is movement toward an attractant. The bacterium uses its flagella and chemoreceptors to bias swimming toward glucose.",
            unitId: 8
          },
          {
            id: "8.1.6",
            text: "If the primary producers in an ecosystem store 10,000 Joules of energy, approximately how much energy is available to secondary consumers?",
            options: ["10,000 J","1,000 J","100 J","10 J"],
            correctIndex: 2,
            explanation: "Applying the 10% rule: Primary producers (10,000 J) -> Primary consumers (1,000 J) -> Secondary consumers (100 J).",
            unitId: 8
          },
          {
            id: "8.1.7",
            text: "Why are food chains in natural ecosystems rarely longer than four or five trophic levels?",
            options: ["Top predators are hunted by humans.","Thermodynamic energy loss at each transfer leaves insufficient energy to support viable populations at higher levels.","Organisms at higher levels have smaller metabolic needs.","Decomposers consume all top level species before they can reproduce."],
            correctIndex: 1,
            explanation: "Since only about 10% of energy is transferred between levels, energy is depleted rapidly, making longer food chains energetically unsustainable.",
            unitId: 8
          },
          {
            id: "8.1.8",
            text: "Approximately what percentage of energy transfers from one trophic level to the next?",
            options: ["1%","10%","50%","90%"],
            correctIndex: 1,
            explanation: "The 10% rule (ecological efficiency): ~10% of energy in one trophic level transfers to the next. The remaining 90% is lost as heat, respiration, and waste.",
            unitId: 8
          },
          {
            id: "8.1.9",
            text: "Primary production in an ecosystem refers to:",
            options: ["Total energy consumed by primary consumers","Rate at which producers convert inorganic energy into organic matter (biomass)","Total biomass of all organisms","Energy flow from detritivores to decomposers"],
            correctIndex: 1,
            explanation: "Primary production is the rate at which producers (photosynthesizers/chemoautotrophs) capture energy and store it as organic compounds.",
            unitId: 8
          },
          {
            id: "8.1.10",
            text: "Decomposers are critical to ecosystem energy flow because they:",
            options: ["Serve as a top trophic level receiving the most energy","Break down dead organic matter, releasing nutrients back to producers and channeling energy through detritus food chains","Synthesize organic matter from inorganic sources using sunlight","Transfer energy with 100% efficiency between trophic levels"],
            correctIndex: 1,
            explanation: "Decomposers (bacteria, fungi) break down dead organisms and waste, releasing stored nutrients (N, P, C) back for reuse by producers and channeling energy through the detritus web.",
            unitId: 8
          }
        ]
      },
      {
        id: "8.2",
        title: "Population and Community Ecology",
        description: "Understand population growth curves, carrying capacity, and density-dependent pressures. Differentiate between density-dependent and density-independent factors that regulate populations. Analyze species interactions, niche partitioning, and trophic cascades.",
        youtubeId: "rXlyYFXyfIM",
        article: `
# Population and Community Ecology

## Population Ecology

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<line x1="55" y1="145" x2="360" y2="145" stroke="#a1a1aa" stroke-width="2" />
<line x1="55" y1="25" x2="55" y2="145" stroke="#a1a1aa" stroke-width="2" />
<path d="M 60 140 C 112 137, 155 118, 190 85 C 225 52, 285 42, 355 42" fill="none" stroke="#22c55e" stroke-width="3" />
<path d="M 60 140 C 100 135, 130 95, 155 45 C 188 105, 228 138, 355 140" fill="none" stroke="#60a5fa" stroke-width="3" stroke-dasharray="5,4" />
<line x1="55" y1="42" x2="360" y2="42" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3" />
<text x="368" y="45" fill="#22c55e" font-size="10" font-weight="bold">K</text>
<text x="292" y="62" fill="#22c55e" font-size="10" font-weight="bold">logistic growth</text>
<text x="158" y="39" fill="#60a5fa" font-size="10" font-weight="bold">overshoot and crash</text>
<text x="205" y="170" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Population Growth and Carrying Capacity</text>
<text x="20" y="88" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 88)">Population Size</text>
</svg>
</div>

<vocab term="Population Ecology" definition="The study of factors that affect the size, density, dispersion, and age structure of populations, and how these change over time; applies principles of birth, death, immigration, and emigration.">Population ecology</vocab> examines how populations grow, change, and are regulated by biotic and abiotic factors.

### Describing Populations

**Population density**: number of individuals per unit area or volume
- Measured by: direct counting, mark-recapture, transect sampling, quadrat sampling

**Dispersion patterns** - how individuals are distributed in space:

| Pattern | Cause | Example |
|---|---|---|
| Clumped (most common) | Resource patchy distribution; social grouping; reproduction near parent | Schools of fish; herds of wildebeest; trees clustered near streams |
| Uniform | Competition causes even spacing; territorial behavior | Territorial birds; desert plants (allelopathy) |
| Random (rarest) | Resources evenly distributed; no social attraction or repulsion | Dandelions in a lawn (approximately random) |

**Age structure**: proportion of population in each age class
- Pre-reproductive (young), reproductive (adults), post-reproductive (old)
- Young-heavy age structure -> rapid future growth
- Old-heavy age structure -> declining population
- Age structure diagrams (pyramids) show current structure and predict future trends

### Population Growth Models

#### Exponential Growth

When resources are unlimited, populations grow exponentially:

$$\\frac{dN}{dt} = rN$$

Solution: $N_t = N_0 e^{rt}$

Where:
- N = population size
- r = intrinsic rate of natural increase (r = birth rate - death rate)
- t = time

**J-shaped curve**: exponential growth produces a J-shaped curve
- Only possible temporarily (resource limitation eventually occurs)
- Example: bacteria in new culture, invasive species entering new habitat

#### Logistic Growth

With limited resources, growth slows as population approaches carrying capacity:

$$\\frac{dN}{dt} = rN \\left(\\frac{K-N}{K}\\right)$$

Where K = carrying capacity (maximum sustainable population size)

**S-shaped (sigmoidal) curve**: population grows rapidly when N is small, slows as N approaches K

- At N << K: growth approaches exponential (resource limitation negligible)
- At N = K/2: maximum growth rate (inflection point)
- At N = K: growth stops (birth rate = death rate)

**Carrying capacity** is set by limiting resources:
- Food, water, shelter, nesting sites, sunlight (plants)
- Changes with environmental conditions (drought reduces K; restoration increases K)

### Life History Strategies

<vocab term="Life History" definition="The pattern of survival and reproduction over an organism's lifetime; includes timing of first reproduction, number of offspring per reproductive event, total number of offspring, and lifespan.">Life history</vocab> represents trade-offs in allocation of limited resources:

#### r-selection vs. K-selection

| Feature | r-selected species | K-selected species |
|---|---|---|
| Environment | Variable, unpredictable | Stable, predictable |
| Offspring number | Many (high fecundity) | Few |
| Offspring size | Small | Large |
| Parental care | Little or none | Extensive |
| Maturation | Early | Late |
| Lifespan | Short | Long |
| Population | Often far below K; rapid growth when opportunity | Near K; limited by competition |
| Examples | Bacteria, insects, weeds, mice | Elephants, whales, humans, oak trees |

Note: r and K selection represents a continuum, not discrete categories.

#### Semelparity vs. Iteroparity

- **Semelparity** (big-bang reproduction): one massive reproductive event, then death
  - Examples: Pacific salmon, annual plants, mayflies
  - Evolutionarily favored when adult survival prospects are poor and offspring survival is high

- **Iteroparity** (repeated reproduction): multiple reproductive events over lifetime
  - Examples: Most vertebrates, perennial plants
  - Favored when adult survival is high (adults are valuable)

### Survivorship Curves

Three idealized types:

| Type | Pattern | Examples |
|---|---|---|
| Type I | High survival until old age, then rapid decline | Humans, elephants, large K-selected mammals |
| Type II | Constant probability of death at any age | Birds, many lizards, some rodents |
| Type III | High mortality early in life; survivors live long | Most fish, oysters, plants, r-selected species |

### Regulating Population Size

#### Density-Dependent Regulation

Effects that intensify as population density increases:

<vocab term="Density-Dependent Factors" definition="Limiting factors whose intensity increases with population density; include competition, predation, disease, and intraspecific resource depletion; cause negative feedback that regulates populations.">Density-dependent factors</vocab>:
- **Competition**: intraspecific competition for food, water, space intensifies at high density
- **Predation**: predators more easily find prey at high density; prey switching
- **Disease**: pathogens spread more efficiently in dense populations
- **Territoriality**: competition for territories limits reproduction

#### Density-Independent Regulation

Effects the same regardless of population density:
- Floods, droughts, frost, earthquakes, human disturbance
- Can reduce population far below K regardless of density
- Important in r-selected species with variable environments

### Population Dynamics: Real-World Patterns

**Boom-and-bust cycles**: r-selected species in seasonal environments overshoot K, then crash
- Algae blooms; insect population cycles

**Predator-prey cycles**: Lynx and snowshoe hare oscillate with ~10-year periodicity
- Hare population rises -> lynx population rises (more food) -> hare population crashes (overhunting + starvation) -> lynx population crashes -> hare recovers

### AP Exam Focus

- Exponential growth: J-curve; unlimited resources; dN/dt = rN
- Logistic growth: S-curve; limited by K; growth slows as N approaches K
- r-selected: many small offspring, little care; K-selected: few large offspring, much care
- Density-dependent: intensifies with density (competition, predation, disease); negative feedback
- Type I survivorship: large K-selected species; Type III: many offspring, most die young

## Community Ecology

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Axes -->
<line x1="50" y1="140" x2="350" y2="140" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="50" y1="20" x2="50" y2="140" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Axis Labels -->
<text x="200" y="158" fill="#ffffff" font-size="9" text-anchor="middle">Percentage of Maximum Lifespan (0 → 100%)</text>
<text x="15" y="80" fill="#ffffff" font-size="9" text-anchor="middle" transform="rotate(-90 15 80)">Number of Survivors (log scale)</text>
<!-- Type I (Convex - Blue) -->
<path d="M 50 30 C 180 30, 290 40, 340 135" fill="none" stroke="#3b82f6" stroke-width="2.5" />
<text x="220" y="45" fill="#3b82f6" font-size="9" font-weight="bold">Type I (e.g., Humans)</text>
<!-- Type II (Straight - Orange) -->
<line x1="50" y1="30" x2="340" y2="135" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" />
<text x="170" y="90" fill="#f59e0b" font-size="9" font-weight="bold" transform="rotate(18 170 90)">Type II (e.g., Birds)</text>
<!-- Type III (Concave - Green) -->
<path d="M 50 30 C 70 120, 120 135, 340 135" fill="none" stroke="#22c55e" stroke-width="2.5" />
<text x="90" y="125" fill="#22c55e" font-size="9" font-weight="bold">Type III (e.g., Trees)</text>
<!-- Title -->
<text x="200" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Survivorship Curves</text>
</svg>
</div>

<vocab term="Community" definition="All the populations of different species living and interacting in a defined area; characterized by species diversity, species interactions, and physical structure.">Communities</vocab> are assemblages of interacting species. The interactions among species shape community structure, energy flow, and the relative abundance of different organisms.

### Species Interactions

Six major types of interspecific interactions:

| Interaction | Effect on Species 1 | Effect on Species 2 | Example |
|---|---|---|---|
| Predation | + | - | Wolf kills deer |
| Herbivory | + | - | Caterpillar eats leaf |
| Parasitism | + | - | Tapeworm in human gut |
| Competition | - | - | Two bird species competing for same nest sites |
| Mutualism | + | + | Rhizobium bacteria fix nitrogen for legumes; plant provides carbon |
| Commensalism | + | 0 | Cattle egret follows cattle, eats disturbed insects |

### Predation and Coevolution

Predator-prey relationships drive coevolution:

**Prey adaptations against predation:**
- Camouflage (cryptic coloration): stick insects, ptarmigan (seasonal color change)
- <vocab term="Aposematic Coloration" definition="Warning coloration; bright colors that signal to predators that the prey is toxic, venomous, or unpalatable; reduces predation on defended species.">Aposematic (warning) coloration</vocab>: monarch butterfly (toxic), poison dart frogs, wasps
- <vocab term="Batesian Mimicry" definition="A form of mimicry in which a harmless species resembles a harmful or toxic species, gaining protection without the cost of producing defenses.">Batesian mimicry</vocab>: harmless species resembles toxic species (viceroy butterfly mimics monarch)
- <vocab term="Mullerian Mimicry" definition="A form of mimicry in which two or more unpalatable species resemble each other; predators learn to avoid all members of the mimicry ring more quickly.">Mullerian mimicry</vocab>: two toxic species look alike (heliconid butterflies in tropics)
- Mechanical defense: spines (cacti, porcupines), shells (turtles, mollusks)
- Chemical defense: toxic secretions (bombardier beetles, poison dart frogs)

**Predator adaptations:**
- Speed and agility (cheetah, peregrine falcon)
- Cooperative hunting (wolves, orcas, lions)
- Cryptic coloration for ambush (tigers, leopards)
- Specialized sensory organs (rattlesnake infrared pits, shark ampullae of Lorenzini)

### Competition

<vocab term="Competitive Exclusion Principle" definition="Gause's Law: two species competing for exactly the same limiting resource cannot coexist indefinitely; the superior competitor will eventually exclude the other.">Competitive exclusion principle</vocab> (Gause's Law, 1934):
- Two species with identical niches cannot coexist - one will eventually outcompete the other
- Demonstrated in laboratory with Paramecium species

**Niche partitioning**: Species coexist by using resources differently:
- Character displacement: competing species evolve to use different resources or become more different where they overlap
- Example: Darwin's finches have different beak sizes on islands where they compete vs. where they occur alone

**Resource partitioning**: different species use the same general resource at different times, places, or ways
- Anole lizards on Carribean islands: different species occupy different parts of trees (arboreally partitioned)
- MacArthur's warblers: 5 species of warbler in same spruce trees occupy different height zones and forage at different times

### Mutualism

<vocab term="Mutualism" definition="A symbiotic interaction in which both participating species benefit; includes obligate mutualism (both species completely dependent) and facultative mutualism.">Mutualism</vocab> can be obligate or facultative:

**Examples of obligate mutualism:**
- Mycorrhizal fungi + plant roots: fungi absorb minerals (P, N), provide to plant; plant provides carbohydrates
- Nitrogen-fixing bacteria (Rhizobium) + legumes: bacteria fix N2; plant provides carbon and protected nodule environment
- Lichen = fungus + cyanobacterium/algae: fungus provides shelter; photosynthetic partner provides sugars
- Fig tree + fig wasp: fig provides gall for wasps to lay eggs; wasps are sole pollinators of figs

**Cleaning mutualism:**
- Cleaner wrasse fish eat parasites from larger fish at "cleaning stations"
- Oxpeckers eat ticks from large mammals

### Community Structure and Disturbance

#### Trophic Cascades

<vocab term="Trophic Cascade" definition="Indirect effects that ripple through the food web when one trophic level is dramatically changed; top-down effects when predators are removed; can restructure entire communities.">Trophic cascades</vocab>: top-down control of communities:

**Sea otter example:**
- Sea otters eat sea urchins
- Remove sea otters -> sea urchins explode in number -> overgraze kelp -> kelp forest disappears -> habitat for all kelp-associated species lost

**Wolf reintroduction in Yellowstone:**
- Wolves reintroduced 1995 -> reduced elk numbers and changed their behavior (avoided grazing in valleys) -> streamside vegetation recovered -> stream banks stabilized -> beaver populations increased -> improved aquatic habitats

**Keystone species**: those with disproportionately large effects relative to their biomass

#### Ecological Succession

<vocab term="Ecological Succession" definition="The change in species composition of a community over time following a disturbance; pioneer species establish first, followed by progressively more complex communities until a stable climax community is reached.">Ecological succession</vocab>: directional change in community composition over time:

**Primary succession**: begins on bare substrate with no soil
- Example: lava flows, glacial retreat
- Pioneer species: lichens (break rock into soil), then mosses, then grasses, then shrubs, then trees
- Timeline: hundreds to thousands of years

**Secondary succession**: begins after disturbance; soil already present
- Example: abandoned farmland, burned forest
- Much faster than primary succession (decades)
- Pioneer species: annual plants; followed by perennial grasses, shrubs, tree saplings, mature forest

**Intermediate Disturbance Hypothesis**: Communities with moderate disturbance frequency have highest species diversity
- Rare disturbance: dominant species outcompete all others (low diversity)
- Frequent disturbance: only early-succession species survive (low diversity)
- Intermediate disturbance: mix of early and late successional species (highest diversity)

### Species Diversity and Stability

Two components of diversity:
- **Species richness**: number of species present
- **Evenness**: how similar the abundances of different species are

Higher diversity generally associated with:
- Greater ecosystem stability (more redundancy)
- Greater primary productivity
- Greater resilience to disturbance

### AP Exam Focus

- Competitive exclusion: two species with identical niches cannot coexist; niche partitioning enables coexistence
- Aposematic coloration: warning colors; Batesian mimicry: harmless mimic; Mullerian: two harmful species similar
- Trophic cascade: removal of top predator has cascading effects down food chain
- Primary vs. secondary succession: primary starts from bare rock; secondary starts from disturbed soil
- Intermediate disturbance hypothesis: moderate disturbance maximizes species diversity

## Energy and Matter in Ecosystems

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Atmosphere Box -->
<rect x="140" y="15" width="120" height="30" rx="4" fill="rgba(96, 165, 250, 0.1)" stroke="#60a5fa" stroke-width="1.5" />
<text x="200" y="33" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">Atmospheric CO₂</text>
<!-- Plants Box -->
<rect x="30" y="90" width="90" height="35" rx="4" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" stroke-width="1.5" />
<text x="75" y="107" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Photosynthesis</text>
<text x="75" y="118" fill="#a1a1aa" font-size="7" text-anchor="middle">(Producers)</text>
<!-- Consumers Box -->
<rect x="280" y="90" width="90" height="35" rx="4" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="1.5" />
<text x="325" y="107" fill="#f59e0b" font-size="9" font-weight="bold" text-anchor="middle">Consumers</text>
<text x="325" y="118" fill="#a1a1aa" font-size="7" text-anchor="middle">(Respiration)</text>
<!-- Decomposers Box -->
<rect x="150" y="135" width="100" height="30" rx="4" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" stroke-width="1.5" />
<text x="200" y="153" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Decomposers</text>
<!-- Arrows -->
<!-- Photosynthesis arrow: Atmos -> Plants -->
<path d="M 140 25 C 90 25, 75 50, 75 82" fill="none" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrow-green)" />
<!-- Plant Respiration: Plants -> Atmos -->
<path d="M 90 85 C 98 55, 115 40, 140 37" fill="none" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2" marker-end="url(#arrow-red)" />
<!-- Consumer Respiration: Consumers -> Atmos -->
<path d="M 325 85 C 325 50, 300 25, 268 25" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)" />
<!-- Consumption: Plants -> Consumers -->
<line x1="125" y1="102" x2="272" y2="102" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrow-orange)" />
<!-- Death/Waste: Plants & Consumers -> Decomposers -->
<path d="M 75 128 C 75 150, 110 150, 142 150" fill="none" stroke="#a1a1aa" stroke-width="1.2" marker-end="url(#arrow-gray)" />
<path d="M 325 128 C 325 150, 290 150, 258 150" fill="none" stroke="#a1a1aa" stroke-width="1.2" marker-end="url(#arrow-gray)" />
<!-- Decomposer Respiration: Decomposers -> Atmos -->
<line x1="200" y1="130" x2="200" y2="53" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)" />
<!-- Definitions -->
<defs>
<marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" /></marker>
<marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" /></marker>
<marker id="arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" /></marker>
<marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" /></marker>
</defs>
</svg>
</div>

<vocab term="Ecosystem" definition="The living community (biotic) together with the physical environment (abiotic) in a defined area; characterized by energy flow through trophic levels and nutrient cycling.">Ecosystems</vocab> are open systems for energy (flows through) but nearly closed systems for matter (cycles). Understanding energy flow and nutrient cycling is essential for explaining why ecosystems function the way they do.

### Energy Flow Through Ecosystems

#### Primary Production

<vocab term="Primary Productivity" definition="The rate at which producers (autotrophs) convert energy to organic compounds; gross primary productivity (GPP) is total; net primary productivity (NPP) = GPP minus cellular respiration by producers.">Primary productivity</vocab> is the foundation of all ecosystems:

- **Gross Primary Productivity (GPP)**: Total rate of photosynthesis or chemosynthesis
- **Net Primary Productivity (NPP)**: Energy available to consumers = GPP - Respiration by producers
- NPP is typically 40-80% of GPP

Highest NPP ecosystems:
1. Tropical rainforests (~2,000 g/m2/year)
2. Estuaries and wetlands (~1,500 g/m2/year)
3. Agricultural fields (~600 g/m2/year)
4. Open ocean (~125 g/m2/year - low but covers vast area!)

#### The 10% Rule

<vocab term="10% Rule" definition="On average, only about 10% of the energy stored in one trophic level is transferred to and stored in the next higher trophic level; the rest is lost as heat, feces, or unused biomass.">The 10% rule</vocab> describes energy transfer efficiency between trophic levels:

Energy lost at each trophic level:
- Heat from cellular respiration (~60%)
- Undigested food in feces (~20-30%)
- Unused biomass (not consumed) (~10%)

Only ~10% becomes biomass of the next trophic level.

**Food chain example:**
- 10,000 J of plant energy -> 1,000 J of caterpillar biomass -> 100 J of sparrow biomass -> 10 J of hawk biomass
- This is why food chains are limited to 3-4 levels!
- And why eating lower on the food chain is more efficient for humans (vegetarian diet supports more people than meat-based diet from same amount of primary production)

**Ecological pyramid**: shows energy, biomass, or number of organisms at each trophic level
- Usually broad at bottom (producers) and narrow at top (tertiary consumers)
- Occasionally inverted biomass pyramid: open ocean (phytoplankton support more zooplankton biomass despite lower phytoplankton biomass at any given time - rapid turnover)

### Biogeochemical Cycles: Matter Cycling

Unlike energy (which flows through), matter **cycles** within ecosystems.

#### The Carbon Cycle

Carbon pools and fluxes:
- **Atmosphere**: CO2 (~420 ppm currently, rising 2-3 ppm/year)
- **Biosphere**: organic carbon in living things and dead organic matter
- **Lithosphere**: fossil fuels, calcium carbonate rocks
- **Hydrosphere**: dissolved CO2 and carbonate in oceans

**Key processes:**
- Photosynthesis: CO2 + H2O -> C6H12O6 + O2 (carbon fixed from atmosphere)
- Cellular respiration: C6H12O6 + O2 -> CO2 + H2O (carbon released to atmosphere)
- Decomposition: dead organic matter broken down by bacteria and fungi -> CO2 released
- Combustion: fossil fuel burning releases ancient stored carbon
- Ocean uptake: oceans absorb ~25-30% of human CO2 emissions

**Human impact:**
- Burning fossil fuels: 8-10 billion tons CO2/year
- Deforestation: additional 1-2 billion tons/year
- Result: rising atmospheric CO2 -> enhanced greenhouse effect -> climate change

#### The Nitrogen Cycle

<vocab term="Nitrogen Cycle" definition="The biogeochemical cycle by which nitrogen moves through the atmosphere, soil, water, and living organisms; includes nitrogen fixation, nitrification, denitrification, and decomposition.">The nitrogen cycle</vocab> is essential for protein and nucleic acid synthesis:

| Process | Organisms | Transformation | Location |
|---|---|---|---|
| Nitrogen fixation | Rhizobium (symbiotic), Azotobacter (free-living), lightning | N2 -> NH3 | Root nodules, soil, atmosphere |
| Nitrification | Nitrosomonas: NH3 -> NO2-; Nitrobacter: NO2- -> NO3- | NH3 -> NO3- | Soil |
| Assimilation | Plants, algae | NO3- + NH4+ -> organic N (amino acids) | Plants |
| Ammonification | Decomposers (bacteria, fungi) | Organic N -> NH4+ | Soil |
| Denitrification | Pseudomonas, other anaerobes | NO3- -> N2O -> N2 | Anaerobic soil, water |

**Nitrogen as a limiting nutrient:**
- N often limits plant growth (why agricultural fertilizers are N-rich)
- Eutrophication: excess nitrogen (from fertilizer runoff) -> algae blooms -> O2 depletion -> dead zones

#### The Phosphorus Cycle

Unlike carbon and nitrogen, phosphorus has **no atmospheric pool**:
- Cycles between rock (lithosphere), soil/water, and living things
- Released by weathering of rocks (very slow) or applied as fertilizer
- Taken up by plants, passed through food web
- Returned to soil by decomposition
- Major limiting nutrient in freshwater ecosystems (Liebig's Law of the Minimum)

#### The Water Cycle

- Evaporation from oceans and land (evapotranspiration from plants)
- Condensation into clouds and precipitation
- Runoff and groundwater flow to streams, rivers, and back to ocean
- Global freshwater: ~2.5% of all water; most frozen in ice or deep underground
- Watersheds: land areas draining to a common body of water

### Human Impacts on Biogeochemical Cycles

| Cycle | Human Impact | Consequence |
|---|---|---|
| Carbon | Fossil fuel combustion, deforestation | Climate change, ocean acidification |
| Nitrogen | Agricultural fertilizers, combustion (NOx) | Eutrophication, dead zones, acid rain |
| Phosphorus | Agricultural fertilizers | Eutrophication (especially freshwater) |
| Sulfur | Combustion (SO2) | Acid rain, respiratory disease |

### AP Exam Focus

- 10% rule: only ~10% of energy transferred between trophic levels; explains food chain length limits
- NPP = GPP - plant respiration; highest in tropical rainforests and estuaries
- Carbon cycle: photosynthesis fixes CO2; respiration and decomposition return it; combustion adds ancient carbon
- Nitrogen cycle: fixation (N2->NH3) by bacteria; nitrification; denitrification; N is often limiting nutrient
- Phosphorus: no atmospheric pool; limiting nutrient in freshwater; phosphorus fertilizers cause eutrophication
`,
        questions: [
          {
            id: "8.2.1",
            text: "Which of the following equations represents logistic population growth?",
            options: ["dN/dt = rN","dN/dt = rN * ((K - N)/K)","dN/dt = K * ((N - r)/r)","dN/dt = r"],
            correctIndex: 1,
            explanation: "The term (K - N)/K acts as a scaling factor that slows population growth as the population size (N) approaches carrying capacity (K).",
            unitId: 8
          },
          {
            id: "8.2.2",
            text: "What happens to the growth rate of a population as the population size (N) exactly equals its carrying capacity (K)?",
            options: ["The growth rate accelerates exponentially.","The growth rate drops to zero.","The population immediately goes extinct.","The per capita birth rate increases."],
            correctIndex: 1,
            explanation: "When N = K, the term (K - N)/K becomes (K - K)/K = 0. Multiplying by 0 gives a growth rate (dN/dt) of zero.",
            unitId: 8
          },
          {
            id: "8.2.3",
            text: "In logistic growth, as population approaches carrying capacity (K), the growth rate:",
            options: ["Continues to accelerate","Approaches zero as population nears maximum the environment can support","Becomes negative causing decline below K","Remains constant throughout"],
            correctIndex: 1,
            explanation: "In logistic growth, as N approaches K, dN/dt approaches zero. The term (K-N)/K acts as a brake on growth.",
            unitId: 8
          },
          {
            id: "8.2.4",
            text: "Which is a density-INDEPENDENT factor regulating population size?",
            options: ["Competition for limited food resources","Disease transmission increasing with crowding","A catastrophic blizzard killing a fixed fraction regardless of population density","Predation increasing as prey becomes more abundant"],
            correctIndex: 2,
            explanation: "Density-independent factors affect the same proportion of the population regardless of density. Natural disasters (blizzards, floods) kill individuals regardless of crowding.",
            unitId: 8
          },
          {
            id: "8.2.5",
            text: "Why does disease act as a density-dependent regulator of population size?",
            options: ["Pathogens mutate faster when a population is small.","Close physical proximity in crowded populations facilitates rapid transmission of pathogens.","Diseases only infect organisms that are in starvation.","Pathogens are density-independent factors."],
            correctIndex: 1,
            explanation: "Disease spreads more rapidly in high-density populations because host individuals are in closer contact, increasing transmission rates.",
            unitId: 8
          },
          {
            id: "8.2.6",
            text: "Which is a density-DEPENDENT limiting factor?",
            options: ["A volcanic eruption destroying all organisms in its path","A drought reducing food for all organisms equally","Intraspecific competition for territories intensifying as population density rises","A random cold snap killing temperature-sensitive individuals"],
            correctIndex: 2,
            explanation: "Density-dependent factors have greater limiting effects as density increases. Intraspecific competition for territories intensifies as more individuals crowd an area.",
            unitId: 8
          },
          {
            id: "8.2.7",
            text: "The Allee effect states that populations below a certain minimum size may have reduced fitness because:",
            options: ["Predation pressure decreases, reducing natural selection","Inbreeding and difficulty finding mates reduce reproductive success in small populations","Resource availability increases disproportionately","Genetic drift accelerates evolution"],
            correctIndex: 1,
            explanation: "Allee effect: small population individuals have reduced fitness due to fewer mating opportunities, inbreeding depression, or reduced cooperative behaviors.",
            unitId: 8
          },
          {
            id: "8.2.8",
            text: "What ecological interaction is characterized as mutualism?",
            options: ["A tick sucking blood from a dog (+/-)","A shark swimming alongside a pilot fish (+/0)","A pollinating bee gathering nectar from a flower (+/+)","Two species of beetles feeding on the same tree bark (-/-)"],
            correctIndex: 2,
            explanation: "Mutualism is a (+/+) relationship. Both the bee (gets food) and the flower (gets pollinated) benefit from the interaction.",
            unitId: 8
          },
          {
            id: "8.2.9",
            text: "In a predator-prey cycle, when hare populations crash, lynx populations:",
            options: ["Crash simultaneously with hares","Crash with a time delay after the hare crash, due to starvation","Increase as competition among lynx decreases","Switch to alternative prey and maintain population"],
            correctIndex: 1,
            explanation: "Predator-prey cycles show time-delayed oscillations. When prey (hare) crash from overhunting, predator (lynx) subsequently crashes from starvation, allowing hare to recover.",
            unitId: 8
          },
          {
            id: "8.2.10",
            text: "Two bird species foraging in different tree zones when co-occurring (but foraging throughout when alone) demonstrates:",
            options: ["Predator-prey coevolution","Character displacement reducing interspecific competition","Commensalism between species","Sympatric speciation"],
            correctIndex: 1,
            explanation: "Character displacement: competing species evolve different phenotypes when co-occurring, reducing interspecific competition by partitioning resources (niche partitioning).",
            unitId: 8
          }
        ]
      },
      {
        id: "8.3",
        title: "Biodiversity, Resilience, and Ecosystem Disruptions",
        description: "Analyze species richness, Simpson's index, and the value of keystone species. Examine the ecological impact of invasive species and human-driven disruptions.",
        youtubeId: "GxE1SSqbSn4",
        article: `
# Biodiversity, Resilience, and Ecosystem Disruptions

## Ecosystem Interactions and Disturbances

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Axes -->
<line x1="50" y1="140" x2="350" y2="140" stroke="#a1a1aa" stroke-width="1.5" />
<line x1="50" y1="30" x2="50" y2="140" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Axis Labels -->
<text x="200" y="158" fill="#ffffff" font-size="9" text-anchor="middle">Number of Species on Island (S)</text>
<text x="15" y="85" fill="#ffffff" font-size="9" text-anchor="middle" transform="rotate(-90 15 85)">Rate of Immigration/Extinction</text>
<!-- Near Island Immigration (decreasing - green) -->
<path d="M 50 40 C 130 40, 200 90, 300 140" fill="none" stroke="#22c55e" stroke-width="2" />
<text x="80" y="38" fill="#22c55e" font-size="8" font-weight="bold">Immigration (Near)</text>
<!-- Far Island Immigration (decreasing - green dashed) -->
<path d="M 50 70 C 100 70, 150 110, 240 140" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,2" />
<text x="70" y="80" fill="#22c55e" font-size="8" opacity="0.8">Immigration (Far)</text>
<!-- Small Island Extinction (increasing - red) -->
<path d="M 50 140 C 150 110, 200 70, 300 40" fill="none" stroke="#ef4444" stroke-width="2" />
<text x="290" y="35" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="end">Extinction (Small)</text>
<!-- Large Island Extinction (increasing - red dashed) -->
<path d="M 50 140 C 180 130, 230 100, 320 70" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2" />
<text x="310" y="85" fill="#ef4444" font-size="8" opacity="0.8" text-anchor="end">Extinction (Large)</text>
<!-- Equilibrium dots and labels -->
<circle cx="182" cy="82" r="3.5" fill="#ffffff" />
<circle cx="175" cy="120" r="3.5" fill="#ffffff" />
<!-- Title -->
<text x="200" y="18" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Theory of Island Biogeography</text>
</svg>
</div>

<vocab term="Ecosystem Stability" definition="The ability of an ecosystem to resist change (resistance) or return to its original state after disturbance (resilience); related to diversity and complexity of species interactions.">Ecosystem stability</vocab> reflects the ability to maintain structure and function despite perturbations. Understanding how ecosystems respond to natural and human-caused disturbances is critical for conservation.

### Disturbance Ecology

<vocab term="Disturbance" definition="An event that removes organisms or changes resource availability in an ecosystem; includes fire, hurricanes, floods, logging, and disease outbreaks; can be natural or human-caused.">Disturbances</vocab> alter ecosystems by:
- Killing organisms (removing biomass)
- Changing physical environment (temperature, nutrient availability)
- Opening space for colonization
- Releasing stored nutrients

**Natural disturbances:**
- Fire (lightning-caused): common in grasslands, chaparral, boreal forests
- Hurricanes and windstorms: treefall creates gap dynamics in forests
- Flooding: alters riparian vegetation, deposits sediment
- Volcanic eruptions: can create entirely new land (Krakatoa, Hawaiian islands)
- Disease outbreaks: Dutch elm disease, chestnut blight

**Human disturbances:**
- Logging and deforestation
- Agriculture (conversion of ecosystems to monocultures)
- Urban development
- Pollution (nutrient enrichment, toxins, light, noise)
- Invasive species introductions
- Climate change (changing temperature, precipitation patterns)

### Fire Ecology

Fire is a natural disturbance with major ecological roles:

**Adaptations to fire (fire-adapted ecosystems):**
- Serotinous pine cones (lodgepole, jack pine): sealed shut with resin; fire melts resin, releasing seeds
- Thick bark (ponderosa pine, giant sequoia): insulates against heat
- Resprouting after fire: chaparral shrubs regrow from root crowns
- Fire-stimulated germination: some seeds require fire (smoke or heat) to germinate

**Effects of fire:**
- Returns nutrients to soil (ash)
- Removes accumulated fuel and shrub layer
- Opens canopy for light-requiring plants
- Creates habitat heterogeneity

**Fire suppression paradox**: Suppressing natural fires allows fuel accumulation -> more intense, unnatural wildfires when fire eventually occurs.

### Resilience and Resistance

Two components of stability:

**Resistance**: the degree to which an ecosystem avoids disturbance
- Maintained by species diversity (more redundancy means less impact if one species is lost)
- Structural complexity (complex physical habitat buffers environmental fluctuations)

**Resilience**: the speed with which an ecosystem recovers after disturbance
- Faster recovery from disturbance
- Related to: disturbance history, pool of colonist species, intact soil

Some ecosystems are highly resistant but slowly resilient (old-growth forests);
Others are quickly resilient but less resistant (grasslands).

### Invasive Species

<vocab term="Invasive Species" definition="Non-native species introduced into a new environment where they lack natural predators, parasites, or competitors; can dramatically alter ecosystems, reduce native biodiversity, and cause billions in economic damage.">Invasive species</vocab> are among the greatest threats to native biodiversity:

Why invasives succeed:
- No natural enemies (predators, parasites, pathogens) in new environment
- May have advantages over native species (faster growth, different diet)
- Humans facilitate long-distance transport (ballast water, cargo, horticulture)

**Classic examples:**
- Kudzu vine in southeastern US: covers and shades out native vegetation
- Cane toad in Australia: toxic; decimated native predator populations
- Zebra mussels in Great Lakes: filter feeders, reduce food for native species; clog water intake pipes
- Brown tree snake on Guam: wiped out most native bird species after WWII introduction
- Chestnut blight (fungus): eliminated American chestnut as dominant eastern US forest tree

### Island Biogeography and Habitat Fragmentation

MacArthur and Wilson's theory predicts that habitat fragmentation mimics island isolation:
- Habitat fragments = "islands" of habitat in a "sea" of unsuitable land
- Smaller fragments: higher extinction rates (smaller populations more vulnerable to drift and stochastic events)
- More isolated fragments: lower immigration rates (less gene flow, fewer recolonizers after local extinction)

**Conservation implication**: large, connected preserves support higher diversity than small, isolated fragments of equal total area.

**Edge effects**: habitat edges have different conditions (more light, higher temperature, different species composition) than habitat interior
- Fragmentation creates more edge: harms interior species (many forest birds avoid edge)
- Nest parasitism by brown-headed cowbird increases near edges

### Human-Caused Ecosystem Changes

**Eutrophication**: nutrient enrichment of aquatic systems
1. Excess nutrients (N, P) from agricultural runoff or sewage
2. Algal bloom (explosive algae growth)
3. Algae die and are decomposed by bacteria
4. Bacterial decomposition consumes O2 -> hypoxia/anoxia
5. Fish and other aerobic organisms die -> "dead zone"
6. Example: Gulf of Mexico dead zone (~20,000 km2) from Mississippi River runoff

**Acid rain**:
- SO2 and NOx from combustion react with water in atmosphere -> H2SO4 and HNO3
- Acidifies lakes and soils -> kills fish, damages trees, reduces biodiversity
- Regulated since Clean Air Act; acid rain problem decreasing in US but still serious in Asia

**Ozone depletion**:
- Chlorofluorocarbons (CFCs) break down stratospheric ozone (UV shield)
- Increased UV causes skin cancer, eye damage, disrupts marine food web
- Montreal Protocol (1987): CFCs phased out; ozone hole slowly recovering

### AP Exam Focus

- Fire ecology: adaptations include serotinous cones, thick bark, resprouting; fire suppression paradox
- Invasive species: lack natural enemies; disrupt food webs; reduce native biodiversity
- Eutrophication: nutrient enrichment -> algal bloom -> O2 depletion -> dead zone
- Resistance (avoids disturbance) vs. resilience (recovers after disturbance)
- Habitat fragmentation: island biogeography principles apply; smaller, isolated fragments have less diversity

## Climate Change and Human Impact on Ecosystems

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full">
<!-- Space -->
<rect x="0" y="0" width="400" height="180" fill="none" />
<!-- Sun -->
<circle cx="40" cy="40" r="18" fill="rgba(251, 191, 36, 0.2)" stroke="#fbbf24" stroke-width="2" />
<text x="40" y="44" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">Sun</text>
<!-- Earth Surface -->
<rect x="0" y="145" width="400" height="35" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" stroke-width="1.5" />
<text x="200" y="165" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">Earth's Surface</text>
<!-- Atmosphere Layer (dashed line at y=80) -->
<line x1="0" y1="80" x2="400" y2="80" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4" />
<text x="390" y="73" fill="#3b82f6" font-size="8" font-weight="bold" text-anchor="end">Atmosphere & Greenhouse Gases</text>
<!-- Solar Radiation Arrow: Sun -> Earth -->
<path d="M 58 50 L 120 120" fill="none" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-yellow)" />
<text x="105" y="75" fill="#fbbf24" font-size="8" font-weight="bold" transform="rotate(48 105 75)">Solar Radiation</text>
<!-- Infrared Radiation: Earth -> space (some escapes) -->
<path d="M 220 145 C 220 120, 210 90, 200 45" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)" />
<text x="190" y="55" fill="#ef4444" font-size="7" text-anchor="end">Heat Escapes</text>
<!-- Infrared Radiation: Earth -> atmosphere -> bounces back -->
<path d="M 280 145 C 280 110, 290 90, 310 82" fill="none" stroke="#ef4444" stroke-width="1.5" />
<path d="M 310 82 C 320 82, 335 110, 335 142" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)" />
<text x="345" y="115" fill="#ef4444" font-size="8" font-weight="bold">Trapped Heat</text>
<text x="310" y="65" fill="#a1a1aa" font-size="7" text-anchor="middle">GHGs absorb/re-emit</text>
<!-- Definitions -->
<defs>
<marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" /></marker>
<marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" /></marker>
</defs>
</svg>
</div>

<vocab term="Climate Change" definition="Long-term shifts in global temperatures and weather patterns; primarily driven by human activities since the Industrial Revolution, especially burning of fossil fuels which releases CO2 and other greenhouse gases.">Climate change</vocab> represents the greatest current threat to global biodiversity and ecosystem function. Understanding the mechanisms and biological consequences is critical for AP Biology.

### The Greenhouse Effect

The greenhouse effect maintains Earth's habitable temperature:

**Natural greenhouse effect** (essential for life):
1. Sun emits mostly visible light and UV; Earth absorbs this energy
2. Earth radiates heat (infrared) back toward space
3. Greenhouse gases (CO2, H2O vapor, CH4, N2O) in atmosphere absorb and re-emit infrared radiation
4. Atmosphere acts as an insulating blanket; Earth is ~33 degrees C warmer than without atmosphere

**Enhanced greenhouse effect** (problem):
- Human activities increase greenhouse gas concentrations
- More energy trapped -> global temperatures rise
- Current CO2: ~420 ppm (up from ~280 ppm pre-industrial, 1750)
- Rate of increase: ~2-3 ppm/year; fastest in 800,000 years of ice core record

| Greenhouse Gas | Source | Global Warming Potential (100-year) |
|---|---|---|
| CO2 | Fossil fuels, deforestation | 1 (reference) |
| Methane (CH4) | Livestock, rice paddies, landfills, natural gas | 25x CO2 |
| Nitrous oxide (N2O) | Agriculture (fertilizers), combustion | 298x CO2 |
| HFCs/SF6 | Industrial processes, refrigerants | 1,000-10,000x CO2 |

### Observed Climate Changes

Documented changes (IPCC reports):
- Global mean surface temperature: +1.1 degrees C since pre-industrial (above 1.5 degrees C reached temporarily now)
- Sea level rise: ~20 cm since 1900; accelerating (ice sheet melting + thermal expansion)
- Arctic sea ice: summer extent decreased ~40% since 1980
- Ocean acidification: pH decreased from 8.2 to 8.1 (0.1 unit = 26% more acidic in H+ terms)
- Extreme weather: more frequent and intense heat waves, droughts, heavy precipitation events

### Ocean Acidification

CO2 absorbed by oceans reacts with water:
$$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons HCO_3^- + H^+ \\rightleftharpoons CO_3^{2-} + 2H^+$$

Increased CO2 -> increased H+ -> decreased pH -> decreased carbonate ion availability

**Effects on marine organisms:**
- <vocab term="Ocean Acidification" definition="The ongoing decrease in ocean pH caused by absorption of CO2; reduces carbonate ion availability, threatening shell-forming organisms including corals, mollusks, and echinoderms.">Ocean acidification</vocab> threatens shell-forming organisms:
  - Corals: calcification rates decrease with lower pH; coral bleaching also worsened by warming
  - Oysters, clams, sea urchins: shells weaken or fail to form
  - Pteropods (sea butterflies): shells dissolve in Arctic waters already below aragonite saturation
- Disrupts behavior (fish sensing, orientation) in some species

### Biological Consequences of Climate Change

#### Range Shifts
Species moving their geographic ranges toward poles and to higher altitudes as temperatures warm:
- Butterflies in UK: ranges shifting ~35 km northward per decade
- Mountain pine beetle in western Canada: now able to survive winters at higher elevations -> devastating forests
- Tropical diseases (malaria, dengue): expanding to previously unsuitable higher latitude/altitude areas

#### Phenological Shifts
<vocab term="Phenology" definition="The study of cyclic and seasonal natural phenomena; climate change causes phenological shifts where biological events (migration, breeding, flowering) occur at different times, causing mismatches between species.">Phenology</vocab> - timing of biological events:
- Spring flowers blooming earlier; birds nesting earlier
- Mismatch problem: caterpillar peak may no longer coincide with bird nesting, reducing food for chicks
- Monarch butterfly migration timing shifting relative to milkweed availability

#### Coral Bleaching
<vocab term="Coral Bleaching" definition="The loss of photosynthetic zooxanthellae algae from coral tissues due to thermal stress; the bleached coral is white and vulnerable to disease and death; mass bleaching events are increasing with climate change.">Coral bleaching</vocab>: temperature stress causes corals to expel their symbiotic algae (zooxanthellae):
- Without zooxanthellae, corals are white ("bleached") and lose their primary energy source
- Short exposure: corals can recover if temperature returns to normal
- Prolonged or repeated bleaching: coral dies; reef structure collapses
- Great Barrier Reef: >50% of coral died in 2016-2017 bleaching events
- Caribbean reefs: 80% of coral cover lost since 1970

#### Biodiversity Loss
Climate change threatens extinction:
- Current extinction rate: ~1,000x background rate (ongoing 6th mass extinction)
- By 2100: potentially 20-30% of species committed to extinction if warming exceeds 2 degrees C
- Polar species (polar bear, Arctic fox, penguins) at extreme risk
- Amphibians: temperature and moisture changes kill off fungus-sensitive species

### Human Population and Environmental Impact

The IPAT equation describes human environmental impact:
$$I = P \\times A \\times T$$

Where:
- I = Environmental Impact
- P = Population size
- A = Affluence (per capita consumption)
- T = Technology impact factor

Reducing impact requires:
- Stabilizing and reducing population growth (P)
- Reducing consumption (A) - particularly in high-income countries
- Developing cleaner technologies (T) - renewable energy, efficient manufacturing

### Solutions and Conservation Strategies

**Mitigation** (reducing climate change causes):
- Transition to renewable energy (solar, wind, hydro, geothermal)
- Energy efficiency improvements
- Carbon capture and storage
- Reforestation and afforestation (carbon sinks)
- Reducing methane from livestock and landfills

**Adaptation** (adjusting to changes already happening):
- Climate-resilient agriculture (drought-resistant crops)
- Infrastructure adaptation (sea walls, elevated buildings)
- Wildlife corridors to enable species range shifts
- Assisted migration of vulnerable species

**Protecting carbon sinks:**
- Old-growth forests: store large amounts of carbon; protecting them prevents release
- Peatlands: store >30% of world's soil carbon; must be protected

### AP Exam Focus

- Enhanced greenhouse effect: increased CO2 and other GHGs trap more heat -> rising temperatures
- Ocean acidification: CO2 + H2O -> H2CO3 -> more H+ -> lower pH -> threatens shell-forming organisms
- Coral bleaching: temperature stress -> zooxanthellae expelled -> coral dies if prolonged
- Phenological mismatches: timing of species' life events shifts out of sync with each other
- IPAT: Environmental impact = Population x Affluence x Technology
`,
        questions: [
          {
            id: "8.3.1",
            text: "Which of the following defines a keystone species?",
            options: ["The most abundant species in a community by biomass","A species that has a disproportionately large impact on community structure relative to its low abundance","The first species to colonize a bare rock environment","A non-native species that invades and damages food webs"],
            correctIndex: 1,
            explanation: "Keystone species (like sea otters or wolves) maintain community balance. Their removal triggers a collapse in species diversity, even though they represent a small fraction of the ecosystem's biomass.",
            unitId: 8
          },
          {
            id: "8.3.2",
            text: "Ecosystems with high biodiversity are characteristically:",
            options: ["More vulnerable to diseases and climatic shifts.","More resilient and stable when environmental changes occur.","Lacking in primary producer trophic levels.","Dominated entirely by a single generalist species."],
            correctIndex: 1,
            explanation: "Higher biodiversity provides functional redundancy. If one species declines, others can perform similar ecological roles, making the community stable and resilient.",
            unitId: 8
          },
          {
            id: "8.3.3",
            text: "According to island biogeography, which island has the HIGHEST species richness?",
            options: ["Small island far from mainland","Large island close to the mainland","Small island close to the mainland","Large island far from the mainland"],
            correctIndex: 1,
            explanation: "Island biogeography (MacArthur and Wilson): highest richness on large islands (low extinction) close to mainland (high immigration). Large and near = optimal combination.",
            unitId: 8
          },
          {
            id: "8.3.4",
            text: "A Simpson's Diversity Index value close to 1 indicates:",
            options: ["Very low diversity with one dominant species","High diversity with many species of roughly equal abundance","Complete loss of all species","Dominance by a single keystone species"],
            correctIndex: 1,
            explanation: "Simpson's Index: close to 1 = high diversity (many species, similar abundance); close to 0 = low diversity (dominated by few species).",
            unitId: 8
          },
          {
            id: "8.3.5",
            text: "Which would have the GREATEST negative impact on global biodiversity?",
            options: ["A single hurricane destroying one coral reef","Widespread deforestation of tropical rainforests containing highest biodiversity concentrations","Introduction of one invasive species to a lake","Overhunting one large mammal species"],
            correctIndex: 1,
            explanation: "Tropical rainforests harbor ~50-80% of Earth's terrestrial species. Widespread deforestation destroys irreplaceable habitat at a scale unmatched by local disturbances.",
            unitId: 8
          },
          {
            id: "8.3.6",
            text: "Why are invasive species often able to expand their populations exponentially in a new environment?",
            options: ["They mutate at higher rates than native species.","They lack natural predators, competitors, or pathogens in the new habitat to limit their growth.","They reproduce only via binary fission.","They increase the carrying capacity of their hosts."],
            correctIndex: 1,
            explanation: "In their native habitats, predators and disease keep invasive species checked. When introduced to a new area without these checks, they outcompete native species and grow unchecked.",
            unitId: 8
          },
          {
            id: "8.3.7",
            text: "What occurs during the process of eutrophication in an aquatic ecosystem?",
            options: ["Acid rain lowers the pH of lakes, dissolving the shells of mollusks.","Nutrient runoff triggers algae blooms; subsequent decomposition of dead algae consumes oxygen, suffocating fish.","Ozone depletion warms water temperatures, lowering oxygen solubility.","Invasive predators consume all primary consumers."],
            correctIndex: 1,
            explanation: "Fertilizer runoff spikes nutrients, causing an algae bloom. When the algae dies, aerobic decomposers break it down, consuming dissolved oxygen and creating a dead zone.",
            unitId: 8
          },
          {
            id: "8.3.8",
            text: "Which sequence correctly describes eutrophication leading to dead zones?",
            options: ["Algae die -> Nutrients increase -> Algae bloom -> Oxygen decreases","Nutrient runoff -> Algae bloom -> Algae die -> Decomposers consume O2 -> Dead zone","Predators increase -> Algae decrease -> Nutrients increase -> Oxygen increases","Oxygen decreases -> Algae bloom -> Nutrients increase -> Fish increase"],
            correctIndex: 1,
            explanation: "Eutrophication: agricultural runoff increases N and P -> massive algae bloom -> algae die -> aerobic decomposers consume all dissolved O2 -> hypoxic dead zones form.",
            unitId: 8
          },
          {
            id: "8.3.9",
            text: "Habitat fragmentation is harmful to biodiversity primarily because:",
            options: ["Fragmented habitats have higher temperatures","Small, isolated patches support smaller populations with higher extinction risk and prevent migration","Fragmentation allows easier invasive species control","Fragmentation increases species richness by creating more microhabitats"],
            correctIndex: 1,
            explanation: "Fragmentation divides habitats into small, isolated patches. This reduces population size (increasing extinction risk), prevents gene flow, and blocks migration routes.",
            unitId: 8
          },
          {
            id: "8.3.10",
            text: "A flower blooms two weeks earlier due to warming, but its specific pollinator has not shifted its emergence date. This is an example of:",
            options: ["Adaptation to climate change","A phenological mismatch that disrupts a mutualistic relationship","Convergent evolution between plant and pollinator","Disruptive selection acting on flowering time"],
            correctIndex: 1,
            explanation: "A phenological mismatch: interdependent species respond differently to climate change, disrupting their synchronized timing and potentially reducing reproductive success for both.",
            unitId: 8
          }
        ]
      }
    ]
  }
];
