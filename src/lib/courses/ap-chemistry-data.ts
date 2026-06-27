export interface APChemQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  unitId: number;
}

export interface APChemTopic {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  image?: string;
  article: string; // Markdown with LaTeX
  questions: APChemQuestion[];
}

export interface APChemUnit {
  id: number;
  title: string;
  masteryWeight: string; // e.g. "7–9%"
  topics: APChemTopic[];
}

export const apChemistryData: APChemUnit[] = [
  {
    id: 1,
    title: "Atomic Structure and Properties",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "1.1",
        title: "Moles, Molar Mass, and Elemental Composition",
        description: "Learn about the mole concept, Avogadro's number, molar mass calculations, empirical and molecular formulas, and analyzing elemental compositions of pure substances and mixtures.",
        youtubeId: "Pft2CASl0M0",
        article: `# Moles, Molar Mass, and Elemental Composition

The mole is the fundamental unit in chemistry that bridges the microscopic world of atoms and molecules to the macroscopic world of grams and liters.

## The Mole Concept and Avogadro's Number

A <vocab term="Mole" definition="The SI unit for amount of substance, containing exactly 6.02214076 x 10^23 elementary entities.">mole</vocab> represents a specific quantity of matter. Just as a dozen means twelve, one mole of any substance contains exactly $6.02214 	imes 10^{23}$ representative particles (atoms, molecules, formula units, or ions). This scaling factor is known as <vocab term="Avogadro's Number" definition="The number of representative particles in one mole of a substance, equal to 6.02214 x 10^23.">Avogadro's Number</vocab> ($N_A$):

$$N_A = 6.022 	imes 10^{23} 	ext{ particles/mol}$$

## Molar Mass

The <vocab term="Molar Mass" definition="The mass in grams of one mole of a substance, expressed in units of g/mol.">molar mass</vocab> ($M$) is the mass in grams of one mole of a substance. For individual elements, the molar mass is equivalent to the average atomic mass found on the periodic table (e.g., Carbon is $12.011 	ext{ g/mol}$). For compounds, it is the sum of the atomic masses of all constituent elements:

$$M = \\sum (n_i 	imes A_i)$$

Where:
- $n_i$ is the number of atoms of element $i$ in the chemical formula.
- $A_i$ is the atomic mass of element $i$.

### Mass-Mole Conversions
The relationship between mass ($m$), moles ($n$), and molar mass ($M$) is given by:

$$n = rac{m}{M}$$

| Calculation Type | Formula / Conversion Factor |
|---|---|
| Mass to Moles | $n = m / M$ |
| Moles to Mass | $m = n 	imes M$ |
| Moles to Particles | $	ext{Particles} = n 	imes N_A$ |
| Particles to Moles | $n = 	ext{Particles} / N_A$ |

<div class="flex justify-center my-8">
<svg width="450" height="120" viewBox="0 0 450 120" class="max-w-full">
<!-- Grams box -->
<rect x="10" y="35" width="100" height="50" rx="8" fill="rgba(0, 242, 255, 0.05)" stroke="#00f2ff" stroke-width="2" />
<text x="60" y="65" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Mass (grams)</text>
<!-- Arrows -->
<line x1="120" y1="45" x2="200" y2="45" stroke="#a1a1aa" stroke-width="2" marker-end="url(#arrow-chem)" />
<text x="160" y="38" fill="#a1a1aa" font-size="9" text-anchor="middle">/ Molar Mass</text>
<line x1="200" y1="75" x2="120" y2="75" stroke="#a1a1aa" stroke-width="2" marker-end="url(#arrow-chem)" />
<text x="160" y="90" fill="#a1a1aa" font-size="9" text-anchor="middle">* Molar Mass</text>
<!-- Moles box -->
<rect x="210" y="35" width="80" height="50" rx="8" fill="rgba(0, 242, 255, 0.15)" stroke="#00f2ff" stroke-width="2.5" />
<text x="250" y="65" fill="#00f2ff" font-size="14" font-weight="bold" text-anchor="middle">Moles (n)</text>
<!-- Arrows -->
<line x1="300" y1="45" x2="380" y2="45" stroke="#a1a1aa" stroke-width="2" marker-end="url(#arrow-chem)" />
<text x="340" y="38" fill="#a1a1aa" font-size="9" text-anchor="middle">* Na</text>
<line x1="380" y1="75" x2="300" y2="75" stroke="#a1a1aa" stroke-width="2" marker-end="url(#arrow-chem)" />
<text x="340" y="90" fill="#a1a1aa" font-size="9" text-anchor="middle">/ Na</text>
<!-- Particles box -->
<rect x="390" y="35" width="100" height="50" rx="8" fill="rgba(0, 242, 255, 0.05)" stroke="#00f2ff" stroke-width="2" />
<text x="440" y="65" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Particles</text>
<defs>
<marker id="arrow-chem" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" />
</marker>
</defs>
</svg>
</div>

## Percent Composition by Mass

The <vocab term="Percent Composition" definition="The percentage by mass of each element in a compound.">percent composition</vocab> represents the relative mass of each element within a compound:

$$\\% 	ext{ Element} = \\left( rac{	ext{Mass of Element in 1 mol of Compound}}{	ext{Molar Mass of Compound}} ight) 	imes 100\\%$$

## Empirical and Molecular Formulas

- **Empirical Formula**: The simplest whole-number ratio of atoms of each element in a compound.
- **Molecular Formula**: The actual number of atoms of each element in a single molecule of the compound. It is a whole-number multiple ($x$) of the empirical formula:

$$x = rac{	ext{Molar Mass of Compound}}{	ext{Molar Mass of Empirical Formula}}$$

### Empirical Formula Calculation Steps:
1. **Assume a 100.0 g sample** if given percentages, converting percent values directly to grams.
2. **Convert grams to moles** for each element using $n = m / M$.
3. **Divide all mole values by the smallest mole value** obtained.
4. **Multiply to get whole numbers** if fractional ratios remain (e.g., multiply by 2 for $.5$, by 3 for $.33$).

### AP Exam Focus: Elemental Analysis of Mixtures
On the AP Chemistry exam, you are often asked to analyze a mixture of substances. For example, a sample containing both $NaCl$ and $KCl$ is analyzed for its chloride ($Cl^-$) content.
- Remember: **Pure $NaCl$ (60.7% Cl) has a higher chloride content by mass than pure $KCl$ (47.6% Cl)** due to the lower atomic mass of sodium. Thus, a mixture of the two with a high mass % of chloride indicates a higher percentage of $NaCl$ in the mixture.
`,
        questions: [
          {
            id: "q1.1.1",
            unitId: 1,
            text: "A compound is analyzed and found to contain 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. What is its empirical formula?",
            options: [
              "$CH_2O$",
              "$CHO$",
              "$C_2H_4O_2$",
              "$CHO_2$",
            ],
            correctIndex: 0,
            hint: "Convert the mass percentages to moles using atomic masses (C = 12.01, H = 1.008, O = 16.00) and find the simplest ratio.",
            explanation: "Assuming a 100 g sample, we have 40.0 g C, 6.7 g H, and 53.3 g O. Moles of C = 40.0 / 12.01 = 3.33 mol. Moles of H = 6.7 / 1.008 = 6.65 mol. Moles of O = 53.3 / 16.00 = 3.33 mol. Dividing by the smallest value (3.33), we get a 1:2:1 ratio, resulting in the empirical formula $CH_2O$.",
          },
          {
            id: "q1.1.2",
            unitId: 1,
            text: "How many sodium ions ($Na^+$) are present in a 58.44 g sample of pure sodium chloride ($NaCl$)?",
            options: [
              "$3.01 \\times 10^{23}$",
              "$6.02 \\times 10^{23}$",
              "$1.20 \\times 10^{24}$",
              "$5.84 \\times 10^{24}$",
            ],
            correctIndex: 1,
            hint: "Determine the number of moles of NaCl first. One mole of NaCl contains one mole of sodium ions.",
            explanation: "The molar mass of $NaCl$ is $58.44 \\text{ g/mol}$. Therefore, a $58.44 \\text{ g}$ sample corresponds to exactly $1.00 \\text{ mol}$ of $NaCl$. Since each formula unit of $NaCl$ contains one $Na^+$ ion, there is $1.00 \\text{ mol}$ of $Na^+$ ions, which equals Avogadro's number: $6.02 \\times 10^{23}$ ions.",
          },
          {
            id: "q1.1.3",
            unitId: 1,
            text: "What is the mass percent of iron in iron(III) oxide ($Fe_2O_3$)? (Molar mass of Fe = 55.85 g/mol, O = 16.00 g/mol)",
            options: [
              "30.0%",
              "50.0%",
              "69.9%",
              "77.7%",
            ],
            correctIndex: 2,
            hint: "Calculate the mass of Fe in 1 mole of Fe2O3 and divide by the total molar mass of Fe2O3.",
            explanation: "Molar mass of $Fe_2O_3 = 2(55.85) + 3(16.00) = 159.70 \\text{ g/mol}$. The mass of Fe in one mole of the compound is $2 \\times 55.85 = 111.70 \\text{ g}$. The mass percent of Fe is $(111.70 / 159.70) \\times 100\\% \\approx 69.94\\%$.",
          },
          {
            id: "q1.1.4",
            unitId: 1,
            text: "A mixture of solids contains only sodium chloride ($NaCl$, molar mass 58.44 g/mol) and potassium chloride ($KCl$, molar mass 74.55 g/mol). If a sample of the mixture is analyzed and found to contain 49.0% chloride ($Cl^-$) by mass, which of the following is correct regarding the composition of the mixture?",
            options: [
              "The mixture is mostly $KCl$ because $KCl$ has a lower chloride mass percentage than $NaCl$.",
              "The mixture is mostly $NaCl$ because $NaCl$ has a lower chloride mass percentage than $KCl$.",
              "The mixture must have equal parts of $NaCl$ and $KCl$.",
              "It is impossible to determine without the total mass of the mixture.",
            ],
            correctIndex: 0,
            hint: "Calculate the mass percent of chloride in pure NaCl and pure KCl. Pure NaCl has a higher percentage of chloride than pure KCl.",
            explanation: "The mass percent of $Cl^-$ in pure $NaCl$ is $(35.45 / 58.44) \\times 100\\% \\approx 60.7\\%$. The mass percent of $Cl^-$ in pure $KCl$ is $(35.45 / 74.55) \\times 100\\% \\approx 47.6\\%$. Since the mixture has $49.0\\%$ chloride, which is very close to that of pure $KCl$ (47.6%), the mixture must be mostly $KCl$.",
          },
          {
            id: "q1.1.5",
            unitId: 1,
            text: "A compound with empirical formula $CH_2O$ has a molar mass of 180.16 g/mol. What is the molecular formula of the compound?",
            options: [
              "$CH_2O$",
              "$C_3H_6O_3$",
              "$C_6H_{12}O_6$",
              "$C_5H_{10}O_5$",
            ],
            correctIndex: 2,
            hint: "Find the molar mass of the empirical formula first, then divide the molecular molar mass by this value.",
            explanation: "The empirical formula mass of $CH_2O$ is $12.01 + 2(1.008) + 16.00 = 30.03 \\text{ g/mol}$. The ratio $x = 180.16 / 30.03 \\approx 6$. Multiplying the subscripts in $CH_2O$ by 6 gives the molecular formula $C_6H_{12}O_6$.",
          },
          {
            id: "q1.1.6",
            unitId: 1,
            text: "A student is analyzing a sample of a pure hydrate of copper(II) sulfate, $CuSO_4 \\cdot xH_2O$. The initial mass of the sample is $2.50 \\text{ g}$. After heating to constant mass, the anhydrous copper(II) sulfate has a mass of $1.60 \\text{ g}$. What is the value of $x$ in the hydrate formula?",
            options: [
              "2",
              "5",
              "7",
              "10",
            ],
            correctIndex: 1,
            hint: "Find the mass of water lost, convert the mass of water and anhydrous CuSO4 to moles, and determine their ratio.",
            explanation: "Mass of water lost = $2.50 \\text{ g} - 1.60 \\text{ g} = 0.90 \\text{ g}$. Moles of water = $0.90 \\text{ g} / 18.02 \\text{ g/mol} = 0.050 \\text{ mol}$. Molar mass of $CuSO_4 \\approx 159.6 \\text{ g/mol}$. Moles of anhydrous $CuSO_4 = 1.60 \\text{ g} / 159.6 \\text{ g/mol} \\approx 0.010 \\text{ mol}$. The ratio of moles of water to moles of $CuSO_4$ is $0.050 / 0.010 = 5$. Thus, $x = 5$.",
          },
          {
            id: "q1.1.7",
            unitId: 1,
            text: "Which of the following compounds has the highest mass percent of nitrogen?",
            options: [
              "$NH_3$",
              "$NO_2$",
              "$N_2O$",
              "$NH_4NO_3$",
            ],
            correctIndex: 0,
            hint: "Calculate the ratio of the total mass of nitrogen in the chemical formula to the molar mass of the entire compound.",
            explanation: "Mass percent of N: For $NH_3$: $14.01 / 17.03 \\approx 82.3\\%$. For $NO_2$: $14.01 / 46.01 \\approx 30.4\\%$. For $N_2O$: $28.02 / 44.02 \\approx 63.7\\%$. For $NH_4NO_3$: $28.02 / 80.05 \\approx 35.0\\%$. Therefore, $NH_3$ has the highest mass percent of nitrogen.",
          },
          {
            id: "q1.1.8",
            unitId: 1,
            text: "A $10.0 \\text{ g}$ sample of a mixture of $NaCl$ and $SiO_2$ is treated with excess water. The insoluble $SiO_2$ is filtered, dried, and found to weigh $6.50 \\text{ g}$. What is the mass percent of sodium in the original mixture?",
            options: [
              "$13.8\\%$",
              "$35.0\\%$",
              "$22.8\\%$",
              "$39.3\\%$",
            ],
            correctIndex: 0,
            hint: "Find the mass of NaCl by subtracting the mass of SiO2 from the mixture mass, calculate the moles of NaCl, and then find the mass of Na.",
            explanation: "Mass of $NaCl$ in mixture = $10.0 \\text{ g} - 6.50 \\text{ g} = 3.50 \\text{ g}$. Moles of $NaCl$ = $3.50 \\text{ g} / 58.44 \\text{ g/mol} \\approx 0.0599 \\text{ mol}$. Since each mole of $NaCl$ contains one mole of $Na$, moles of $Na = 0.0599 \\text{ mol}$. Mass of $Na = 0.0599 \\text{ mol} \\times 22.99 \\text{ g/mol} \\approx 1.38 \\text{ g}$. Mass percent of $Na$ in the $10.0 \\text{ g}$ mixture = $(1.38 \\text{ g} / 10.0 \\text{ g}) \\times 100\\% = 13.8\\%$.",
          },
          {
            id: "q1.1.9",
            unitId: 1,
            text: "A hydrocarbon is analyzed and found to contain $85.7\\%$ carbon and $14.3\\%$ hydrogen by mass. What is its empirical formula?",
            options: [
              "$CH$",
              "$CH_2$",
              "$CH_3$",
              "$C_2H_5$",
            ],
            correctIndex: 1,
            hint: "Assume a 100 g sample, convert the masses of carbon and hydrogen to moles, and find the simplest integer ratio.",
            explanation: "Assuming a $100 \\text{ g}$ sample: Carbon = $85.7 \\text{ g}$, Hydrogen = $14.3 \\text{ g}$. Moles of C = $85.7 \\text{ g} / 12.01 \\text{ g/mol} = 7.14 \\text{ mol}$. Moles of H = $14.3 \\text{ g} / 1.008 \\text{ g/mol} = 14.2 \\text{ mol}$. The ratio of H to C is $14.2 / 7.14 \\approx 2$. Therefore, the empirical formula is $CH_2$.",
          },
          {
            id: "q1.1.10",
            unitId: 1,
            text: "How many oxygen atoms are present in a $4.50 \\text{ g}$ sample of water ($H_2O$)?",
            options: [
              "$1.51 \\times 10^{23}$",
              "$3.01 \\times 10^{23}$",
              "$6.02 \\times 10^{23}$",
              "$1.20 \\times 10^{24}$",
            ],
            correctIndex: 0,
            hint: "Calculate the moles of H2O first, then convert to molecules, and note that each H2O molecule has one oxygen atom.",
            explanation: "Moles of $H_2O = 4.50 \\text{ g} / 18.02 \\text{ g/mol} = 0.250 \\text{ mol}$. Number of $H_2O$ molecules = $0.250 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ molecules/mol} = 1.51 \\times 10^{23}$ molecules. Since each molecule contains exactly one oxygen atom, there are $1.51 \\times 10^{23}$ oxygen atoms.",
          },
        ],
      },
      {
        id: "1.2",
        title: "Atomic Structure, Electron Configuration, and PES",
        description: "Examine the subatomic structures of atoms, isotopes, mass spectrometry, quantum mechanical models, electron configurations, and photoelectron spectroscopy (PES).",
        youtubeId: "mBT73Pesiog",
        article: `# Atomic Structure, Electron Configuration, and PES

The modern model of the atom is quantum mechanical, describing electrons not in fixed orbits, but within regions of probability called orbitals.

## Subatomic Particles and Isotopes

An atom consists of a dense, positively charged nucleus (containing protons and neutrons) surrounded by negatively charged electrons. 
- **Protons** ($p^+$) define the element's identity (Atomic Number, $Z$).
- **Neutrons** ($n^0$) provide nuclear stability. Atoms of the same element with different numbers of neutrons are called <vocab term="Isotopes" definition="Atoms of the same element that have the same number of protons but different numbers of neutrons.">isotopes</vocab>.
- **Electrons** ($e^-$) govern chemical reactivity.

## Mass Spectrometry

<vocab term="Mass Spectrometry" definition="An analytical technique used to measure the mass-to-charge ratio of ions, determining isotopic composition.">Mass spectrometry</vocab> is a technique used to measure the mass-to-charge ratio ($m/z$) of ions, allowing us to determine the mass and relative abundance of isotopes. The average atomic mass of an element is a weighted average:

$$	ext{Average Atomic Mass} = \\sum (	ext{Abundance}_i 	imes 	ext{Mass}_i)$$

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- X-axis -->
<line x1="50" y1="120" x2="400" y2="120" stroke="#a1a1aa" stroke-width="2" />
<!-- Y-axis -->
<line x1="50" y1="20" x2="50" y2="120" stroke="#a1a1aa" stroke-width="2" />
<!-- Labels -->
<text x="225" y="142" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Mass-to-charge ratio (m/z)</text>
<text x="15" y="70" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 70)">Abundance (%)</text>
<!-- Peaks for Boron: B-10 (19.9%), B-11 (80.1%) -->
<!-- B-10 at x=150 (height 20%) -->
<line x1="150" y1="120" x2="150" y2="100" stroke="#00f2ff" stroke-width="3" />
<text x="150" y="92" fill="#00f2ff" font-size="9" font-weight="bold" text-anchor="middle">19.9%</text>
<text x="150" y="132" fill="#a1a1aa" font-size="9" text-anchor="middle">10</text>
<!-- B-11 at x=280 (height 80%) -->
<line x1="280" y1="120" x2="280" y2="40" stroke="#00f2ff" stroke-width="3" />
<text x="280" y="32" fill="#00f2ff" font-size="9" font-weight="bold" text-anchor="middle">80.1%</text>
<text x="280" y="132" fill="#a1a1aa" font-size="9" text-anchor="middle">11</text>
<!-- Title -->
<text x="225" y="15" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Mass Spectrum of Boron</text>
</svg>
</div>

## Quantum Mechanical Model & Electron Configurations

Electrons occupy shells ($n = 1, 2, 3...$), subshells ($s, p, d, f$), and individual orbitals.
- **Aufbau Principle**: Electrons fill the lowest-energy orbitals first.
- **Pauli Exclusion Principle**: An orbital can hold a maximum of 2 electrons, which must have opposite spins.
- **Hund's Rule**: In degenerate orbitals (orbitals of the same energy), electrons fill singly first with parallel spins.

### Writing Configurations:
For transition metal cations, electrons are removed from the highest shell ($ns$) before the $(n-1)d$ subshell (e.g., $Fe^{2+}$ is $[Ar] 3d^6$, not $[Ar] 4s^2 3d^4$).

## Photoelectron Spectroscopy (PES)

<vocab term="Photoelectron Spectroscopy" definition="An experimental method that measures the ionization energy of core and valence electrons in an atom using high-energy photons.">Photoelectron Spectroscopy</vocab> (PES) uses high-energy photons (X-ray or UV) to eject electrons from atoms. By measuring the kinetic energy of ejected photoelectrons, the binding energy (ionization energy) of the electrons in different shells is calculated:

$$E_{	ext{photon}} = 	ext{Binding Energy} + KE_{	ext{electron}}$$

### Interpreting a PES Spectrum:
1. **The x-axis** represents Binding Energy (often plotted in reverse, decreasing left-to-right). Peaks further to the left (higher energy) correspond to inner-shell electrons (core electrons).
2. **The y-axis** represents photoelectron intensity (relative number of electrons). The height of a peak is proportional to the number of electrons in that subshell.

Below is a typical Photoelectron Spectrum (PES) showing binding energy vs. relative number of electrons:

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Grid lines -->
<line x1="50" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<line x1="50" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<line x1="50" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<line x1="50" y1="200" x2="400" y2="200" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<!-- Y-axis -->
<line x1="50" y1="30" x2="50" y2="220" stroke="#a1a1aa" stroke-width="2" />
<!-- X-axis -->
<line x1="50" y1="220" x2="420" y2="220" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="220" y="260" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Binding Energy (MJ/mol) — (Reverse Scale)</text>
<text x="15" y="125" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 125)">Relative Number of Electrons</text>
<!-- X-axis Ticks (Reverse Scale) -->
<text x="80" y="235" fill="#a1a1aa" font-size="10" text-anchor="middle">100</text>
<text x="170" y="235" fill="#a1a1aa" font-size="10" text-anchor="middle">10</text>
<text x="260" y="235" fill="#a1a1aa" font-size="10" text-anchor="middle">1.0</text>
<text x="350" y="235" fill="#a1a1aa" font-size="10" text-anchor="middle">0.1</text>
<!-- Peaks (Nitrogen Example: 1s2, 2s2, 2p3) -->
<!-- 1s2 at ~52.6 MJ/mol (height 2) -->
<path d="M 90 220 L 105 220 L 110 100 L 115 100 L 120 220 L 135 220" fill="rgba(0, 242, 255, 0.15)" stroke="#00f2ff" stroke-width="2.5" />
<text x="112" y="90" fill="#00f2ff" font-size="10" font-weight="bold" text-anchor="middle">1s²</text>
<!-- 2s2 at ~2.45 MJ/mol (height 2) -->
<path d="M 215 220 L 230 220 L 235 100 L 240 100 L 245 220 L 260 220" fill="rgba(0, 242, 255, 0.15)" stroke="#00f2ff" stroke-width="2.5" />
<text x="237" y="90" fill="#00f2ff" font-size="10" font-weight="bold" text-anchor="middle">2s²</text>
<!-- 2p3 at ~1.40 MJ/mol (height 3) -->
<path d="M 290 220 L 305 220 L 310 40 L 315 40 L 320 220 L 335 220" fill="rgba(0, 242, 255, 0.15)" stroke="#00f2ff" stroke-width="2.5" />
<text x="312" y="30" fill="#00f2ff" font-size="10" font-weight="bold" text-anchor="middle">2p³</text>
</svg>
</div>
`,
        questions: [
          {
            id: "q1.2.1",
            unitId: 1,
            text: "A PES spectrum of an unknown element shows peaks at the following binding energies: 104 MJ/mol, 6.84 MJ/mol, 3.67 MJ/mol, and 0.50 MJ/mol. The ratio of the peak heights (from highest energy to lowest energy) is 2:2:6:1. Identify the element.",
            options: [
              "Sodium ($Na$)",
              "Magnesium ($Mg$)",
              "Aluminum ($Al$)",
              "Neon ($Ne$)",
            ],
            correctIndex: 0,
            hint: "Use the peak height ratios to determine the electron configuration: 1s2 2s2 2p6 3s1.",
            explanation: "The peaks correspond to the subshells: $1s$ (104 MJ/mol, 2e-), $2s$ (6.84 MJ/mol, 2e-), $2p$ (3.67 MJ/mol, 6e-), and $3s$ (0.50 MJ/mol, 1e-). The electron configuration is $1s^2 2s^2 2p^6 3s^1$, which corresponds to Sodium ($Na$).",
          },
          {
            id: "q1.2.2",
            unitId: 1,
            text: "What is the ground-state electron configuration of the $Fe^{2+}$ ion?",
            options: [
              "$[Ar] 4s^2 3d^4$",
              "$[Ar] 3d^6$",
              "$[Ar] 4s^2 3d^6$",
              "$[Ar] 4s^1 3d^5$",
            ],
            correctIndex: 1,
            hint: "Electrons are removed from the highest principal quantum number shell (4s) first before removing from 3d.",
            explanation: "Neutral Fe is $[Ar] 4s^2 3d^6$. To form the $Fe^{2+}$ ion, two electrons are removed from the outermost shell first, which is the $4s$ subshell. This leaves $[Ar] 3d^6$.",
          },
          {
            id: "q1.2.3",
            unitId: 1,
            text: "An element has two naturally occurring isotopes. One isotope has a mass of 10.01 amu and a relative abundance of 19.9%. The other isotope has a mass of 11.01 amu and a relative abundance of 80.1%. What is the average atomic mass of this element?",
            options: [
              "10.50 amu",
              "10.81 amu",
              "10.20 amu",
              "10.99 amu",
            ],
            correctIndex: 1,
            hint: "Calculate the weighted average: (0.199 * 10.01) + (0.801 * 11.01).",
            explanation: "Average atomic mass = $(0.199 \\times 10.01) + (0.801 \\times 11.01) = 1.992 + 8.819 = 10.811 \\text{ amu}$. This corresponds to Boron ($B$).",
          },
          {
            id: "q1.2.4",
            unitId: 1,
            text: "In a PES spectrum, why is the binding energy peak corresponding to the $1s$ electrons of Oxygen ($O$) located at a higher energy than the $1s$ peak of Nitrogen ($N$)?",
            options: [
              "Oxygen has more shielding than Nitrogen.",
              "Oxygen has a higher effective nuclear charge ($Z_{eff}$) due to more protons.",
              "Oxygen has more electron-electron repulsions in the $1s$ subshell.",
              "Nitrogen has a half-filled p-subshell, making it unusually stable.",
            ],
            correctIndex: 1,
            hint: "The nuclear charge increases as we move from Nitrogen (7 protons) to Oxygen (8 protons), pulling core electrons more strongly.",
            explanation: "Oxygen ($Z=8$) has 8 protons in its nucleus, while Nitrogen ($Z=7$) has only 7. Since both have $1s$ electrons shielded only minimally by other electrons, the greater nuclear charge in Oxygen pulls its $1s$ electrons more strongly, resulting in a higher binding energy (ionization energy).",
          },
          {
            id: "q1.2.5",
            unitId: 1,
            text: "Which of the following elements has the lowest first ionization energy for its valence electrons, according to PES data?",
            options: [
              "Lithium ($Li$)",
              "Sodium ($Na$)",
              "Potassium ($K$)",
              "Rubidium ($Rb$)",
            ],
            correctIndex: 3,
            hint: "Valence electrons that are further from the nucleus experience greater shielding and are easier to remove.",
            explanation: "Rubidium ($Rb$) has its valence electron in the $5s$ subshell, which is further from the nucleus than the valence shell of Lithium ($2s$), Sodium ($3s$), or Potassium ($4s$). The inner shell electrons shield the valence electron, making it easier to remove, which corresponds to the lowest binding energy/ionization energy.",
          },
          {
            id: "q1.2.6",
            unitId: 1,
            text: "Which of the following ground-state electron configurations represents a transition metal atom that is paramagnetic with exactly four unpaired electrons?",
            options: [
              "$[Ar] 4s^2 3d^4$",
              "$[Ar] 3d^6$",
              "$[Ar] 4s^2 3d^6$",
              "$[Ar] 4s^1 3d^5$",
            ],
            correctIndex: 2,
            hint: "Paramagnetism is caused by unpaired electrons. Write the orbital diagram for the d subshell (5 orbitals) and fill using Hund's rule.",
            explanation: "Let's check $[Ar] 4s^2 3d^6$ (Iron, Fe). The $3d$ subshell has 5 orbitals. Hund's rule: first place 5 spin-up electrons in the 5 orbitals, then 1 spin-down electron in the first orbital. This leaves 1 paired orbital and 4 unpaired orbitals. Thus, $[Ar] 4s^2 3d^6$ has exactly 4 unpaired electrons and is paramagnetic. Note: $[Ar] 4s^2 3d^4$ is not a stable ground state configuration (it rearranges to $4s^1 3d^5$, which has 6 unpaired electrons).",
          },
          {
            id: "q1.2.7",
            unitId: 1,
            text: "What is the ground-state electron configuration of the $Fe^{2+}$ ion?",
            options: [
              "$[Ar] 4s^2 3d^4$",
              "$[Ar] 3d^6$",
              "$[Ar] 4s^1 3d^5$",
              "$[Ar] 4s^2 3d^6$",
            ],
            correctIndex: 1,
            hint: "Transition metals lose their valence s electrons before losing d electrons when forming cations.",
            explanation: "The ground-state configuration of neutral Fe is $[Ar] 4s^2 3d^6$. When forming transition metal cations, the electrons in the highest principal energy level shell (the $4s$ shell) are removed first. Removing two electrons from neutral Fe removes the two $4s$ electrons, yielding the configuration $[Ar] 3d^6$.",
          },
          {
            id: "q1.2.8",
            unitId: 1,
            text: "A student analyzes the Photoelectron Spectroscopy (PES) spectrum of an element. The spectrum features three distinct peaks with relative intensity heights of 2, 2, and 3, in order of decreasing binding energy. What is the identity of this element?",
            options: [
              "Carbon ($C$)",
              "Nitrogen ($N$)",
              "Boron ($B$)",
              "Oxygen ($O$)",
            ],
            correctIndex: 1,
            hint: "Peaks represent subshells: 1s, 2s, 2p. The intensity corresponds to the number of electrons in each subshell.",
            explanation: "The binding energies correspond to shells in order: highest binding energy is closest to nucleus ($1s$), then $2s$, then $2p$. The relative intensities of 2, 2, and 3 mean the configuration is $1s^2 2s^2 2p^3$. Adding these up gives 7 electrons, which is Nitrogen ($N$).",
          },
          {
            id: "q1.2.9",
            unitId: 1,
            text: "Which of the following subshells has the highest energy in a multi-electron atom?",
            options: [
              "$3d$",
              "$4s$",
              "$3p$",
              "$3s$",
            ],
            correctIndex: 0,
            hint: "Follow the Aufbau principle. Although 4s is filled before 3d, 3d is actually higher in energy once electrons are filled.",
            explanation: "According to the Aufbau principle and energy level diagrams for multi-electron atoms, subshells are filled in order of increasing energy: $1s < 2s < 2p < 3s < 3p < 4s < 3d$. Thus, the $3d$ subshell is higher in energy than the $4s$, $3p$, and $3s$ subshells.",
          },
          {
            id: "q1.2.10",
            unitId: 1,
            text: "According to quantum mechanics, what is the maximum number of electrons that can occupy a single $d$ orbital?",
            options: [
              "2",
              "5",
              "6",
              "10",
            ],
            correctIndex: 0,
            hint: "Do not confuse a single orbital with a subshell. The Pauli exclusion principle limits any single orbital to two electrons of opposite spins.",
            explanation: "A $d$ subshell contains 5 distinct orbitals, which can hold a total of 10 electrons. However, any *single* orbital (whether $s$, $p$, $d$, or $f$) can hold a maximum of only 2 electrons with opposite spins, according to the Pauli Exclusion Principle.",
          },
        ],
      },
      {
        id: "1.3",
        title: "Periodic Trends and Valence Bonding",
        description: "Understand how Coulomb's law, effective nuclear charge, and atomic shielding drive trends in atomic radius, ionic radius, ionization energy, and electronegativity.",
        youtubeId: "0tP6bV89log",
        article: `# Periodic Trends and Valence Bonding

Periodic trends are systematic variations in physical and chemical properties of elements across periods and groups, driven by electron configurations and electrostatic forces.

## Coulomb's Law and Effective Nuclear Charge

The primary physical model for periodic trends is **Coulomb's Law**:

$$F = k rac{q_1 q_2}{r^2}$$

Where:
- $F$ is the electrostatic force of attraction between the nucleus and the valence electrons.
- $q_1$ is the charge of the nucleus (effective nuclear charge, $Z_{	ext{eff}}$).
- $q_2$ is the charge of the electron.
- $r$ is the average distance between the nucleus and the valence electron shell.

<vocab term="Effective Nuclear Charge" definition="The net positive charge experienced by valence electrons, calculated as atomic number minus inner shielding electrons.">Effective nuclear charge</vocab> ($Z_{	ext{eff}}$) is the net positive charge experienced by an electron in a multi-electron atom:

$$Z_{	ext{eff}} = Z - S$$

Where $Z$ is the atomic number (number of protons) and $S$ is the shielding constant (approximated by the number of inner-shell core electrons).

- **Across a Period**: $Z_{	ext{eff}}$ increases because protons are added to the nucleus, while shielding ($S$) remains relatively constant because electrons are added to the same valence shell.
- **Down a Group**: The principal quantum number ($n$) increases, adding new electron shells. This increases the distance $r$ from the nucleus.

## Periodic Trends Map

The following vector diagram maps the primary periodic trends across the periodic table structure:

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Periodic Table Outline -->
<rect x="50" y="70" width="40" height="120" fill="none" stroke="#a1a1aa" stroke-dasharray="3,3" stroke-width="1.5" />
<rect x="90" y="110" width="120" height="80" fill="none" stroke="#a1a1aa" stroke-dasharray="3,3" stroke-width="1.5" />
<rect x="210" y="70" width="140" height="120" fill="none" stroke="#a1a1aa" stroke-dasharray="3,3" stroke-width="1.5" />
<!-- Table Labels -->
<text x="70" y="130" fill="#ffffff" font-size="10" opacity="0.5" text-anchor="middle">s-block</text>
<text x="150" y="150" fill="#ffffff" font-size="10" opacity="0.5" text-anchor="middle">d-block</text>
<text x="280" y="130" fill="#ffffff" font-size="10" opacity="0.5" text-anchor="middle">p-block</text>
<!-- Atomic Radius Trend Arrow (Left & Down) -->
<!-- Horizontal Left arrow -->
<line x1="350" y1="215" x2="70" y2="215" stroke="#60a5fa" stroke-width="3" marker-end="url(#arrow-blue)" />
<text x="210" y="232" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">Atomic Radius Increases</text>
<!-- Vertical Down arrow -->
<line x1="30" y1="70" x2="30" y2="180" stroke="#60a5fa" stroke-width="3" marker-end="url(#arrow-blue)" />
<!-- Ionization Energy & Electronegativity (Right & Up) -->
<!-- Horizontal Right arrow -->
<line x1="50" y1="45" x2="340" y2="45" stroke="#34d399" stroke-width="3" marker-end="url(#arrow-green)" />
<text x="195" y="35" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Ionization Energy & Electronegativity Increase</text>
<!-- Vertical Up arrow -->
<line x1="375" y1="190" x2="375" y2="80" stroke="#34d399" stroke-width="3" marker-end="url(#arrow-green)" />
<!-- Arrow Markers -->
<defs>
<marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
</marker>
<marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
</marker>
</defs>
</svg>
</div>

## Summary of Periodic Trends

| Trend | Across a Period (Left to Right) | Down a Group (Top to Bottom) | Core Physical Explanation |
|---|---|---|---|
| **Atomic Radius** | Decreases | Increases | Across: Higher $Z_{	ext{eff}}$ pulls valence electrons closer. Down: Adding electron shells increases distance. |
| **First Ionization Energy** | Increases | Decreases | Across: Higher $Z_{	ext{eff}}$ binds valence electrons more tightly. Down: Greater distance reduces electrostatic attraction. |
| **Electronegativity** | Increases | Decreases | Across: Smaller atomic size allows the nucleus to attract shared electrons more. Down: Greater distance weakens attraction. |
| **Ionic Radius** | Cations are smaller; Anions are larger | Increases | Cations: Loss of outer shell or reduced repulsion. Anions: Added electrons increase repulsion. |
`,
        questions: [
          {
            id: "q1.3.1",
            unitId: 1,
            text: "Which of the following correctly orders the atomic radii from smallest to largest?",
            options: [
              "$F < O < S < Se$",
              "$Se < S < O < F$",
              "$F < S < O < Se$",
              "$O < F < S < Se$",
            ],
            correctIndex: 0,
            hint: "Atomic radius decreases across a period and increases down a group.",
            explanation: "Fluorine is smaller than Oxygen because it is further to the right in the same period (higher $Z_{eff}$). Sulfur is larger than Oxygen because it is in a higher energy shell ($n=3$ vs $n=2$). Selenium is larger than Sulfur ($n=4$). Thus, the order is $F < O < S < Se$.",
          },
          {
            id: "q1.3.2",
            unitId: 1,
            text: "Explain why the first ionization energy of Oxygen ($O$) is slightly lower than that of Nitrogen ($N$), defying the general period trend.",
            options: [
              "Oxygen valence electrons are in a higher energy shell than Nitrogen.",
              "Oxygen has greater shielding of valence electrons.",
              "Nitrogen has a higher effective nuclear charge.",
              "Oxygen has a paired electron in a $2p$ orbital, generating electron-electron repulsion.",
            ],
            correctIndex: 3,
            hint: "Look at the electron configurations: Nitrogen is 2p3 (half-filled) and Oxygen is 2p4.",
            explanation: "Nitrogen has a ground-state configuration of $[He] 2s^2 2p^3$, where each of the three $2p$ orbitals contains a single electron. Oxygen is $[He] 2s^2 2p^4$, meaning one of its $2p$ orbitals must contain a pair of electrons. The repulsion between these two paired electrons in the same orbital makes it slightly easier to remove one, resulting in a lower first ionization energy.",
          },
          {
            id: "q1.3.3",
            unitId: 1,
            text: "Compare the ionic radii of $N^{3-}$, $O^{2-}$, $F^-$, and $Na^+$. Which list is correctly ordered from smallest to largest ionic radius?",
            options: [
              "$Na^+ < F^- < O^{2-} < N^{3-}$",
              "$N^{3-} < O^{2-} < F^- < Na^+$",
              "$F^- < O^{2-} < N^{3-} < Na^+$",
              "$Na^+ < N^{3-} < O^{2-} < F^-$",
            ],
            correctIndex: 0,
            hint: "These species are isoelectronic. The species with the most protons will pull the electrons closest.",
            explanation: "These ions are isoelectronic, all having 10 electrons ($1s^2 2s^2 2p^6$). The number of protons is: $Na^+$ (11), $F^-$ (9), $O^{2-}$ (8), $N^{3-}$ (7). The greater the number of protons, the stronger the attraction for the 10 electrons, pulling them closer and making the ion smaller. Thus, $Na^+ < F^- < O^{2-} < N^{3-}$.",
          },
          {
            id: "q1.3.4",
            unitId: 1,
            text: "An unknown element X exhibits the successive ionization energies (in kJ/mol): $IE_1 = 578$, $IE_2 = 1817$, $IE_3 = 2745$, $IE_4 = 11577$. To which group on the periodic table does X likely belong?",
            options: [
              "Group 1 (Alkali metals)",
              "Group 2 (Alkaline earth metals)",
              "Group 13 (Boron family)",
              "Group 14 (Carbon family)",
            ],
            correctIndex: 2,
            hint: "Identify where the largest jump in energy occurs, indicating the removal of a core electron.",
            explanation: "The ionization energy jumps dramatically from $IE_3$ (2745 kJ/mol) to $IE_4$ (11577 kJ/mol), which is a factor of over 4. This indicates that the fourth electron must be removed from an inner core shell, meaning the element has exactly 3 valence electrons. Elements in Group 13 have 3 valence electrons.",
          },
          {
            id: "q1.3.5",
            unitId: 1,
            text: "Which of the following elements has the highest electronegativity?",
            options: [
              "Fluorine ($F$)",
              "Chlorine ($Cl$)",
              "Oxygen ($O$)",
              "Nitrogen ($N$)",
            ],
            correctIndex: 0,
            hint: "Electronegativity is the ability of an atom to attract shared electrons; Fluorine is the most electronegative element.",
            explanation: "Fluorine is the smallest halogen and sits at the top right of the periodic table (excluding noble gases). Because of its small atomic radius and high effective nuclear charge, it has the strongest attraction for shared valence electrons, making it the most electronegative element (electronegativity value of 4.0).",
          },
          {
            id: "q1.3.6",
            unitId: 1,
            text: "Why does electronegativity generally increase from left to right across a period on the periodic table?",
            options: [
              "The atomic mass increases, making the atoms heavier.",
              "Valence electrons are added to higher energy shells, increasing shielding.",
              "The effective nuclear charge increases, attracting shared electrons more strongly.",
              "The electron-electron repulsion within orbitals decreases.",
            ],
            correctIndex: 2,
            hint: "Electronegativity measures how strongly an atom attracts shared bonding electrons. Consider nuclear pull.",
            explanation: "From left to right across a period, the number of protons in the nucleus increases while shielding remains relatively constant (as electrons are added to the same valence shell). This increases the effective nuclear charge ($Z_{eff}$), drawing the valence electrons closer and allowing the nucleus to attract shared electrons in a bond more strongly.",
          },
          {
            id: "q1.3.7",
            unitId: 1,
            text: "Which of the following has the highest second ionization energy ($IE_2$)?",
            options: [
              "Sodium ($Na$)",
              "Magnesium ($Mg$)",
              "Aluminum ($Al$)",
              "Silicon ($Si$)",
            ],
            correctIndex: 0,
            hint: "Look at the valence configurations. The second ionization removes a core electron for one of these elements, requiring a massive amount of energy.",
            explanation: "Sodium has the electron configuration $[He] 2s^2 2p^6 3s^1$. The first ionization removes the single $3s$ valence electron. The second ionization must remove an electron from the stable $2p$ core shell. Because core electrons are closer to the nucleus and experience much less shielding, removing a core electron requires a huge amount of energy, making $IE_2$ of $Na$ extremely high.",
          },
          {
            id: "q1.3.8",
            unitId: 1,
            text: "Which of the following atoms or ions is the largest?",
            options: [
              "$O^{2-}$",
              "$F^-$",
              "$Ne$",
              "$Na^+$",
            ],
            correctIndex: 0,
            hint: "These species are isoelectronic. The species with the fewest protons has the weakest pull on the electrons, allowing the shell to expand.",
            explanation: "These species are all isoelectronic with 10 electrons. The nuclear charges are: $O^{2-}$ (8 protons), $F^-$ (9 protons), $Ne$ (10 protons), $Na^+$ (11 protons). $O^{2-}$ has the fewest protons, meaning it has the weakest electrostatic attraction for the 10 electrons, allowing the electron cloud to expand the most.",
          },
          {
            id: "q1.3.9",
            unitId: 1,
            text: "Why does atomic radius increase down a group on the periodic table?",
            options: [
              "The number of neutrons in the nucleus increases.",
              "The effective nuclear charge increases dramatically.",
              "Electrons are added to higher principal energy levels, which are further from the nucleus.",
              "Halogen group shielding decreases.",
            ],
            correctIndex: 2,
            hint: "Down a group, a new electron shell (principal energy level n) is added at each step.",
            explanation: "As you move down a group, the principal quantum number $n$ of the valence shell increases, which means the valence electrons are located in shells that are progressively further from the nucleus. This orbital expansion outweighs the increase in nuclear charge, resulting in a larger atomic radius.",
          },
          {
            id: "q1.3.10",
            unitId: 1,
            text: "Which of the following elements has the lowest first ionization energy?",
            options: [
              "Cesium ($Cs$)",
              "Lithium ($Li$)",
              "Fluorine ($F$)",
              "Helium ($He$)",
            ],
            correctIndex: 0,
            hint: "First ionization energy is lowest for large metals that hold their valence electrons very weakly.",
            explanation: "Cesium is a very large alkali metal located at the bottom-left of the periodic table. Its single valence electron is in the $6s$ shell, far from the nucleus and highly shielded by core electrons. This results in a very weak electrostatic attraction, making it very easy to remove the electron (lowest first ionization energy).",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Molecular and Ionic Compound Structure and Properties",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "2.1",
        title: "Types of Chemical Bonds and Intramolecular Energy",
        description: "Examine the formation of ionic, covalent, and metallic bonds using electronegativity differences, and analyze potential energy curves for covalent bonds.",
        youtubeId: "Mo4Vfqt5v2A",
        article: `# Types of Chemical Bonds and Intramolecular Energy

Chemical bonds form to minimize potential energy. The type of bond that forms between atoms is primarily determined by their differences in electronegativity ($\\Delta	ext{EN}$).

## Classifying Chemical Bonds

- **Ionic Bonding**: Formed between metals (low electronegativity) and nonmetals (high electronegativity) through the transfer of electrons. The electrostatic attraction between cations and anions forms a lattice.
- **Covalent Bonding**: Formed between nonmetals sharing one or more pairs of electrons.
  - **Nonpolar Covalent**: Equal sharing of electrons (typically $\\Delta	ext{EN} < 0.4$).
  - **Polar Covalent**: Unequal sharing of electrons (typically $0.4 \\le \\Delta	ext{EN} < 1.7$). The more electronegative atom acquires a partial negative charge ($\\delta^-$), creating a bond <vocab term="Dipole Moment" definition="A measure of the separation of positive and negative electrical charges in a bond or molecule.">dipole moment</vocab>.
- **Metallic Bonding**: Formed between metals where electrons are delocalized in a shared pool (the "electron sea" model).

## Potential Energy Curves for Covalent Bonds

For a covalent bond, the potential energy of the system varies as a function of the distance between the two nuclei. This is described by a potential energy curve:

1. **At infinite separation**: The potential energy is zero because there are no interactions.
2. **As atoms approach**: Electrostatic attraction between the nucleus of one atom and the electron cloud of the other pulls them together, decreasing the potential energy.
3. **At the minimum point**: The system reaches its most stable state. The distance at this minimum corresponds to the **bond length**, and the depth of the well corresponds to the **bond energy** (energy required to break the bond).
4. **At very close distances**: The positive nuclei repel each other, causing the potential energy to shoot up dramatically.

Below is the Potential Energy Curve for a covalent bond as a function of internuclear distance:

<div class="flex justify-center my-8">
<svg width="450" height="300" viewBox="0 0 450 300" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Y-axis line -->
<line x1="80" y1="20" x2="80" y2="260" stroke="#a1a1aa" stroke-width="2" />
<!-- X-axis line (PE = 0) -->
<line x1="80" y1="100" x2="420" y2="100" stroke="#a1a1aa" stroke-dasharray="3,3" stroke-width="1.5" />
<!-- Potential Energy Curve -->
<!-- Curve starts high at x=90, dips down to minimum at x=200, y=240, and approaches y=100 at x=400 -->
<path d="M 95 25 C 100 240, 110 240, 200 240 C 270 240, 320 105, 410 100" fill="none" stroke="#ff5555" stroke-width="3" />
<!-- Well Minimum Indicators -->
<line x1="200" y1="100" x2="200" y2="240" stroke="#60a5fa" stroke-dasharray="2,2" stroke-width="1.5" />
<line x1="80" y1="240" x2="200" y2="240" stroke="#60a5fa" stroke-dasharray="2,2" stroke-width="1.5" />
<!-- Dots at key points -->
<circle cx="200" cy="240" r="5" fill="#60a5fa" />
<!-- Labels -->
<text x="240" y="20" fill="#ffffff" font-size="12" font-weight="bold">Potential Energy vs. Distance</text>
<text x="50" y="150" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 50 150)">Potential Energy (kJ/mol)</text>
<text x="250" y="120" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Internuclear Distance (pm)</text>
<text x="70" y="95" fill="#a1a1aa" font-size="10" text-anchor="end">E = 0</text>
<text x="70" y="245" fill="#60a5fa" font-size="10" text-anchor="end">-Bond Energy</text>
<text x="200" y="85" fill="#60a5fa" font-size="10" text-anchor="middle">Bond Length</text>
<!-- Annotations -->
<text x="130" y="50" fill="#ff5555" font-size="9" text-anchor="start">Nuclear Repulsion</text>
<text x="320" y="180" fill="#34d399" font-size="9" text-anchor="start">Attraction Dominates</text>
</svg>
</div>

### Influence of Atomic Radii on Potential Energy
- **Smaller Atoms**: Can approach each other more closely. This shorter distance increases electrostatic attractions, resulting in a **shorter bond length** and a **deeper well** (higher bond energy).
- **Multiple Bonds**: Double and triple bonds share more electrons, pulling the nuclei closer together. This leads to **shorter and stronger bonds** than single bonds.
`,
        questions: [
          {
            id: "q2.1.1",
            unitId: 2,
            text: "Based on electronegativity differences, which of the following bonds is the most polar?",
            options: [
              "$C-H$",
              "$N-O$",
              "$H-F$",
              "$C-O$",
            ],
            correctIndex: 2,
            hint: "Polarity increases with a greater difference in electronegativity. Fluorine is the most electronegative element.",
            explanation: "Fluorine ($EN = 4.0$) and Hydrogen ($EN = 2.1$) have an electronegativity difference of $1.9$, which is the largest among the choices (C-H is ~0.4, N-O is ~0.5, C-O is ~1.0). This makes $H-F$ highly polar.",
          },
          {
            id: "q2.1.2",
            unitId: 2,
            text: "In a potential energy curve for a diatomic molecule $X_2$, what does the minimum point on the curve represent?",
            options: [
              "The point where nuclear repulsions are maximized.",
              "The average bond length and bond energy of the stable molecule.",
              "The state where the atoms are completely separated.",
              "The activation energy of the reaction.",
            ],
            correctIndex: 1,
            hint: "The minimum of the curve represents the point of maximum stability.",
            explanation: "At the minimum point on the potential energy curve, the attractive and repulsive forces are balanced, minimizing the potential energy. The x-coordinate of this point represents the bond length, and the y-coordinate represents the bond energy (well depth).",
          },
          {
            id: "q2.1.3",
            unitId: 2,
            text: "If the potential energy curve of $H_2$ is compared to that of $I_2$, how will the curve for $I_2$ differ?",
            options: [
              "The minimum point for $I_2$ will be shifted to the left and be deeper.",
              "The minimum point for $I_2$ will be shifted to the right and be shallower.",
              "The minimum point for $I_2$ will be shifted to the left and be shallower.",
              "The minimum point for $I_2$ will be shifted to the right and be deeper.",
            ],
            correctIndex: 1,
            hint: "Iodine atoms are much larger than hydrogen atoms and form single bonds that are weaker and longer.",
            explanation: "Iodine atoms have a much larger atomic radius than hydrogen atoms ($n=5$ vs $n=1$). This greater distance between nuclei means the bond length of $I_2$ is much longer (shifted right). Since the valence electrons are further from the nuclei and experience more shielding, the covalent bond is weaker, resulting in a shallower potential energy well (lower bond energy).",
          },
          {
            id: "q2.1.4",
            unitId: 2,
            text: "Which of the following carbon-carbon bonds is the shortest and has the highest bond energy?",
            options: [
              "Single bond in $C_2H_6$",
              "Double bond in $C_2H_4$",
              "Triple bond in $C_2H_2$",
              "All carbon-carbon bonds have the same length and energy.",
            ],
            correctIndex: 2,
            hint: "Sharing more pairs of electrons pulls the atomic nuclei closer together.",
            explanation: "A triple bond involves sharing three pairs of electrons (6 electrons) between the carbon nuclei. This creates the strongest electrostatic attraction, pulling the carbon nuclei closest together (shortest bond length) and requiring the most energy to break (highest bond energy).",
          },
          {
            id: "q2.1.5",
            unitId: 2,
            text: "Which of the following bonds would be classified as primarily metallic in character?",
            options: [
              "$Na-Cl$ bond in solid sodium chloride",
              "$Cu-Zn$ bond in brass",
              "$C-O$ bond in carbon dioxide",
              "$Si-Si$ bond in pure silicon",
            ],
            correctIndex: 1,
            hint: "Metallic bonding occurs in pure metals and alloys (mixtures of metals).",
            explanation: "Brass is an alloy of Copper ($Cu$) and Zinc ($Zn$), which are both metals. The bonding in brass is metallic, characterized by a delocalized 'sea' of valence electrons surrounding the positive metal ions. Na-Cl is ionic, C-O is polar covalent, and Si-Si is covalent network.",
          },
          {
            id: "q2.1.6",
            unitId: 2,
            text: "Which of the following compounds exhibits the greatest lattice energy?",
            options: [
              "$LiF$",
              "$NaCl$",
              "$MgO$",
              "$Al_2O_3$",
            ],
            correctIndex: 3,
            hint: "According to Coulomb's law, lattice energy is directly proportional to the product of the ionic charges and inversely proportional to the distance between them.",
            explanation: "Lattice energy is governed by Coulomb's law: $E \\propto \\frac{q_1 q_2}{r}$. The charges in the lattice are: $LiF$ (+1, -1), $NaCl$ (+1, -1), $MgO$ (+2, -2), and $Al_2O_3$ (+3, -2). The product of charges for $Al_2O_3$ is 6 ($3 \\times 2$), which is the largest. Combined with small ionic radii of Aluminum and Oxygen, this creates the strongest electrostatic attraction and highest lattice energy.",
          },
          {
            id: "q2.1.7",
            unitId: 2,
            text: "What is the formal charge on the central sulfur atom in the sulfur dioxide ($SO_2$) molecule that minimizes formal charges?",
            options: [
              "0",
              "+1",
              "+2",
              "-1",
            ],
            correctIndex: 0,
            hint: "Formal charge = Valence electrons - Nonbonding electrons - 0.5 * Bonding electrons. Draw the Lewis structure where sulfur expands its octet to minimize formal charges.",
            explanation: "In $SO_2$, sulfur has 6 valence electrons. To minimize formal charges, sulfur forms double bonds with both oxygen atoms ($O=S=O$), expanding its octet to 10 electrons (4 bonding pairs, 1 lone pair). For the central Sulfur: Formal Charge = $6 \\text{ (valence)} - 2 \\text{ (lone pair electrons)} - 4 \\text{ (bonds)} = 0$.",
          },
          {
            id: "q2.1.8",
            unitId: 2,
            text: "Which of the following bonds is the most polar?",
            options: [
              "$C-H$",
              "$N-H$",
              "$O-H$",
              "$F-H$",
            ],
            correctIndex: 3,
            hint: "Bond polarity is determined by the difference in electronegativity between the two bonded atoms.",
            explanation: "Hydrogen has an electronegativity of 2.1. Electronegativities of the other elements are: C (2.5), N (3.0), O (3.5), F (4.0). The electronegativity differences are: $C-H$ (0.4), $N-H$ (0.9), $O-H$ (1.4), $F-H$ (1.9). The $F-H$ bond has the largest difference, making it the most polar.",
          },
          {
            id: "q2.1.9",
            unitId: 2,
            text: "Which of the following statements about resonance structures of the carbonate ion ($CO_3^{2-}$) is correct?",
            options: [
              "The ion fluctuates rapidly between one double bond and two single bonds.",
              "The three C-O bonds are of equal length and strength, intermediate between a single and double bond.",
              "Two C-O bonds are long and weak, while one is short and strong.",
              "Resonance structures represent different configurations of nuclei.",
            ],
            correctIndex: 1,
            hint: "Resonance represents delocalization of electrons over the carbon-oxygen bonds, producing an average bond order of 1.33.",
            explanation: "Resonance structures are a way to represent delocalized electrons that cannot be shown in a single Lewis diagram. The actual carbonate ion is an average of the three resonance structures: it has three equivalent C-O bonds with a bond order of 1.33, sharing the double-bond character equally.",
          },
          {
            id: "q2.1.10",
            unitId: 2,
            text: "In a coordinate covalent bond (dative bond), how are the bonding electrons supplied?",
            options: [
              "Each atom contributes one electron to the bonding pair.",
              "One atom contributes both electrons to the bonding pair.",
              "Electrons are transferred completely from one atom to another.",
              "Electrons are shared freely in a delocalized sea.",
            ],
            correctIndex: 1,
            hint: "Think of the ammonium ion (NH4+) forming from ammonia (NH3) and H+.",
            explanation: "A coordinate covalent bond occurs when one atom provides both bonding electrons to share with an electron-deficient species (such as $H^+$). For example, the nitrogen in $NH_3$ shares its lone pair with $H^+$ to form the ammonium ion ($NH_4^+$).",
          },
        ],
      },
      {
        id: "2.2",
        title: "Structure of Ionic Solids, Metals, and Alloys",
        description: "Understand the structural properties of ionic solids, metallic solids, and how interstitial and substitutional alloys alter metal properties.",
        youtubeId: "5vSBjS99Ozs",
        article: `# Structure of Ionic Solids, Metals, and Alloys

The macroscopic properties of solids—such as electrical conductivity, malleability, and hardness—are direct consequences of their microscopic structure and bonding.

## Structure and Properties of Ionic Solids

<vocab term="Ionic Solid" definition="A crystalline solid held together by electrostatic attractions between oppositely charged ions in a 3D lattice.">Ionic solids</vocab> form a rigid, three-dimensional crystalline lattice held together by strong electrostatic attractions (Coulombic forces) between cations and anions.

- **Properties**:
  - **High Melting and Boiling Points**: Due to the strength of the electrostatic attractions.
  - **Brittleness**: If a force shifts the lattice layers, ions of like charge align and repel each other, causing the crystal to cleave.

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Stable Lattice -->
<g transform="translate(10, 0)">
<text x="90" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Stable Ionic Lattice</text>
<!-- Row 1 -->
<circle cx="30" cy="50" r="10" fill="#ef4444" /> <text x="30" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="60" cy="50" r="12" fill="#3b82f6" /> <text x="60" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="90" cy="50" r="10" fill="#ef4444" /> <text x="90" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="120" cy="50" r="12" fill="#3b82f6" /> <text x="120" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<!-- Row 2 -->
<circle cx="30" cy="80" r="12" fill="#3b82f6" /> <text x="30" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="60" cy="80" r="10" fill="#ef4444" /> <text x="60" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="90" cy="80" r="12" fill="#3b82f6" /> <text x="90" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="120" cy="80" r="10" fill="#ef4444" /> <text x="120" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<!-- Row 3 -->
<circle cx="30" cy="110" r="10" fill="#ef4444" /> <text x="30" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="60" cy="110" r="12" fill="#3b82f6" /> <text x="60" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="90" cy="110" r="10" fill="#ef4444" /> <text x="90" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="120" cy="110" r="12" fill="#3b82f6" /> <text x="120" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<text x="90" y="140" fill="#a1a1aa" font-size="9" text-anchor="middle">Attraction holds crystal</text>
</g>
<!-- Force arrow -->
<g transform="translate(180, 0)">
<line x1="10" y1="50" x2="50" y2="50" stroke="#a1a1aa" stroke-width="2" marker-end="url(#arrow-chem)" />
<text x="30" y="40" fill="#a1a1aa" font-size="9" text-anchor="middle">Shear Force</text>
</g>
<!-- Shifted Repulsion Lattice -->
<g transform="translate(260, 0)">
<text x="90" y="20" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Repulsion & Cleavage</text>
<!-- Row 1 (Shifted Right by 30px) -->
<circle cx="60" cy="50" r="10" fill="#ef4444" /> <text x="60" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="90" cy="50" r="12" fill="#3b82f6" /> <text x="90" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="120" cy="50" r="10" fill="#ef4444" /> <text x="120" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="150" cy="50" r="12" fill="#3b82f6" /> <text x="150" y="53" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<!-- Repulsion squigglies between Row 1 and 2 -->
<path d="M 60 62 Q 60 65 60 68" stroke="#ef4444" stroke-width="2" fill="none" />
<path d="M 90 62 Q 90 65 90 68" stroke="#ef4444" stroke-width="2" fill="none" />
<path d="M 120 62 Q 120 65 120 68" stroke="#ef4444" stroke-width="2" fill="none" />
<!-- Row 2 (Unshifted) -->
<circle cx="30" cy="80" r="12" fill="#3b82f6" /> <text x="30" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="60" cy="80" r="10" fill="#ef4444" /> <text x="60" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="90" cy="80" r="12" fill="#3b82f6" /> <text x="90" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="120" cy="80" r="10" fill="#ef4444" /> <text x="120" y="83" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<!-- Row 3 (Unshifted) -->
<circle cx="30" cy="110" r="10" fill="#ef4444" /> <text x="30" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="60" cy="110" r="12" fill="#3b82f6" /> <text x="60" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<circle cx="90" cy="110" r="10" fill="#ef4444" /> <text x="90" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">+</text>
<circle cx="120" cy="110" r="12" fill="#3b82f6" /> <text x="120" y="113" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">-</text>
<text x="90" y="140" fill="#ef4444" font-size="9" text-anchor="middle">Like charges repel & break</text>
</g>
</svg>
</div>

  - **Electrical Conductivity**:
    - **Nonconductors as solids**: Ions are locked in fixed positions in the lattice.
    - **Conductors in molten or aqueous states**: The ions are free to move, carrying electric current.

## Structure and Properties of Metals

Metals consist of a lattice of positive metal cations surrounded by a highly delocalized <vocab term="Electron Sea Model" definition="A model of metallic bonding where metal cations are held together by a shared pool of mobile valence electrons.">sea of valence electrons</vocab>.

- **Properties**:
  - **Malleability and Ductility**: Metal atoms can slide past one another under stress because the delocalized electrons buffer the shifting positive charges.
  - **High Electrical and Thermal Conductivity**: The delocalized electrons are highly mobile and free to transfer charge and heat throughout the structure.

## Structure and Properties of Alloys

An <vocab term="Alloy" definition="A mixture of two or more elements, where at least one is a metal, modifying the properties of the base metal.">alloy</vocab> is a mixture containing a metal and one or more other elements. Alloys generally retain metallic properties but are harder and less malleable than pure metals.

- **Substitutional Alloys**: Formed when the solute atoms are of a **similar atomic size** to the solvent metal atoms, replacing them in the crystal lattice (e.g., **Brass**, where zinc replaces copper).
- **Interstitial Alloys**: Formed when the solute atoms are **significantly smaller** than the solvent metal atoms, fitting into the spaces (interstices) between the metal atoms (e.g., **Steel**, where small carbon atoms fit between large iron atoms). This restricts the movement of metal layers, making the alloy **harder and less malleable**.

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Pure Metal -->
<g transform="translate(10, 0)">
<text x="60" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Pure Metal</text>
<!-- Lattice of same sized atoms -->
<circle cx="30" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="60" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="90" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="30" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="60" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="90" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="30" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="60" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="90" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<text x="60" y="140" fill="#a1a1aa" font-size="9" text-anchor="middle">Uniform, malleable</text>
</g>
<!-- Substitutional Alloy -->
<g transform="translate(150, 0)">
<text x="60" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Substitutional Alloy</text>
<!-- Lattice with some atoms replaced by similar size zinc atoms -->
<circle cx="30" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="60" cy="50" r="14" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="1.5" />
<circle cx="90" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="30" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="60" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="90" cy="80" r="14" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="1.5" />
<circle cx="30" cy="110" r="14" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="1.5" />
<circle cx="60" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="90" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<text x="60" y="140" fill="#a1a1aa" font-size="9" text-anchor="middle">Similar sized atoms</text>
</g>
<!-- Interstitial Alloy -->
<g transform="translate(290, 0)">
<text x="70" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Interstitial Alloy</text>
<!-- Lattice with small carbon atoms in interstices -->
<circle cx="35" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="65" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="95" cy="50" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="35" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="65" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="95" cy="80" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="35" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="65" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<circle cx="95" cy="110" r="14" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" stroke-width="1.5" />
<!-- small carbon atoms in gaps -->
<circle cx="50" cy="65" r="5" fill="#f43f5e" />
<circle cx="80" cy="65" r="5" fill="#f43f5e" />
<circle cx="50" cy="95" r="5" fill="#f43f5e" />
<circle cx="80" cy="95" r="5" fill="#f43f5e" />
<text x="70" y="140" fill="#a1a1aa" font-size="9" text-anchor="middle">Small atoms lock lattice</text>
</g>
</svg>
</div>
`,
        questions: [
          {
            id: "q2.2.1",
            unitId: 2,
            text: "Why are ionic solids brittle, whereas metallic solids are malleable?",
            options: [
              "Metallic bonds are much weaker than ionic bonds.",
              "Shifting layers in an ionic solid aligns like charges, causing repulsion and fracturing, while delocalized electrons in metals buffer shifting atoms.",
              "Ionic solids have mobile valence electrons that cause them to crack.",
              "Metallic solids contain covalent bonds that allow them to bend.",
            ],
            correctIndex: 1,
            hint: "Think about what happens to the charge alignments when the crystal planes shift.",
            explanation: "In an ionic solid, shifting the layers brings ions of like charge ($+$ next to $+$, $-$ next to $-$) into contact, causing strong electrostatic repulsion that fractures the crystal. In metals, the delocalized 'sea of electrons' adjusts to the shifting cations, keeping the structure cohesive and malleable.",
          },
          {
            id: "q2.2.2",
            unitId: 2,
            text: "Steel is an alloy composed of iron and carbon. Carbon atoms are much smaller than iron atoms and occupy the spaces between iron atoms in the lattice. What type of alloy is steel, and how does this affect its properties?",
            options: [
              "Substitutional alloy; it makes the iron more malleable.",
              "Substitutional alloy; it makes the iron harder and less malleable.",
              "Interstitial alloy; it makes the iron more malleable.",
              "Interstitial alloy; it makes the iron harder and less malleable.",
            ],
            correctIndex: 3,
            hint: "Carbon atoms sit in the spaces (interstices) between the iron atoms, locking them in place.",
            explanation: "Steel is an interstitial alloy because the small carbon atoms fit into the interstitial spaces of the iron lattice. This disrupts the regular structure and prevents the iron layers from sliding past each other easily, making steel harder and less malleable than pure iron.",
          },
          {
            id: "q2.2.3",
            unitId: 2,
            text: "Under which of the following conditions will sodium chloride ($NaCl$) conduct electricity?",
            options: [
              "Only when it is in the solid state.",
              "When dissolved in water or when melted into a liquid.",
              "Under no conditions, as it is a nonmetal compound.",
              "Only when it is exposed to UV light.",
            ],
            correctIndex: 1,
            hint: "Electrical conductivity requires mobile charged particles (ions or electrons).",
            explanation: "In solid $NaCl$, the $Na^+$ and $Cl^-$ ions are locked in place within the crystalline lattice and cannot move. When dissolved in water (aqueous) or melted (molten), the lattice breaks down, freeing the ions to move and conduct electricity.",
          },
          {
            id: "q2.2.4",
            unitId: 2,
            text: "Which of the following pairs of elements would form a substitutional alloy?",
            options: [
              "Iron ($Fe$) and Carbon ($C$)",
              "Copper ($Cu$) and Zinc ($Zn$)",
              "Silicon ($Si$) and Oxygen ($O$)",
              "Sodium ($Na$) and Chlorine ($Cl$)",
            ],
            correctIndex: 1,
            hint: "Substitutional alloys require elements of similar atomic size.",
            explanation: "Copper and Zinc are adjacent transition metals with very similar atomic radii. When they mix, Zinc atoms substitute directly for Copper atoms in the lattice, forming the substitutional alloy known as brass. Iron and Carbon form an interstitial alloy due to the large difference in atomic size.",
          },
          {
            id: "q2.2.5",
            unitId: 2,
            text: "What drives the high thermal and electrical conductivity of metals?",
            options: [
              "The high density of positive cations in the nucleus.",
              "The rigid, ordered layout of the metal ions.",
              "The mobility of the delocalized valence electrons in the electron sea.",
              "The strong covalent bonds formed between metal atoms.",
            ],
            correctIndex: 2,
            hint: "Electric current is the flow of charge, and heat transfer is accelerated by mobile particles.",
            explanation: "Because valence electrons are delocalized in metals, they are free to move throughout the entire solid structure. These mobile electrons easily carry electrical charge (conductivity) and kinetic energy (thermal conductivity).",
          },
          {
            id: "q2.2.6",
            unitId: 2,
            text: "What is the molecular geometry and hybridization of the central atom in $XeF_4$?",
            options: [
              "Tetrahedral, $sp^3$",
              "Square planar, $sp^3d^2$",
              "See-saw, $sp^3d$",
              "Square pyramidal, $sp^3d^2$",
            ],
            correctIndex: 1,
            hint: "Determine the steric number of Xenon: count single bonds and lone pairs on the central Xenon atom.",
            explanation: "Xenon has 8 valence electrons. In $XeF_4$, it forms 4 single covalent bonds with Fluorine, using 4 electrons. The remaining 4 electrons form 2 lone pairs. Steric number = 4 bonds + 2 lone pairs = 6. This corresponds to an octahedral electron geometry and $sp^3d^2$ hybridization. With 2 lone pairs occupying opposite axial positions to minimize repulsion, the molecular geometry is square planar.",
          },
          {
            id: "q2.2.7",
            unitId: 2,
            text: "Which of the following molecules has a net dipole moment of zero (nonpolar)?",
            options: [
              "$H_2O$",
              "$NH_3$",
              "$CO_2$",
              "$SF_4$",
            ],
            correctIndex: 2,
            hint: "A molecule is nonpolar if its bond dipoles are equal in magnitude and symmetrical, canceling each other out.",
            explanation: "In $CO_2$, the carbon atom forms two double bonds with oxygen ($O=C=O$). The molecular shape is linear, and the two polar $C-O$ bonds pull in opposite directions with equal strength. Thus, the individual bond dipoles cancel out, giving a net dipole moment of zero.",
          },
          {
            id: "q2.2.8",
            unitId: 2,
            text: "What is the approximate bond angle in the hydronium ion ($H_3O^+$)?",
            options: [
              "$109.5^\\circ$",
              "$120^\\circ$",
              "$107^\\circ$",
              "$180^\\circ$",
            ],
            correctIndex: 2,
            hint: "Oxygen in H3O+ has 3 bonds and 1 lone pair, similar to Nitrogen in NH3.",
            explanation: "The central oxygen atom in $H_3O^+$ has 3 bonding pairs and 1 lone pair (steric number = 4). The electron geometry is tetrahedral. Due to the repulsion from the lone pair, the bond angles are compressed slightly from the ideal $109.5^\\circ$ to approximately $107^\\circ$, resulting in a trigonal pyramidal molecular geometry.",
          },
          {
            id: "q2.2.9",
            unitId: 2,
            text: "How many sigma ($\\sigma$) and pi ($\\pi$) bonds are present in a molecule of ethene ($C_2H_4$)?",
            options: [
              "4 sigma, 1 pi",
              "5 sigma, 1 pi",
              "3 sigma, 2 pi",
              "5 sigma, 2 pi",
            ],
            correctIndex: 1,
            hint: "Ethene has a carbon-carbon double bond (which consists of one sigma and one pi bond) and four carbon-hydrogen single bonds.",
            explanation: "Each single bond is a sigma ($\\sigma$) bond. A double bond consists of one sigma ($\\sigma$) and one pi ($\\pi$) bond. In ethene ($H_2C=CH_2$), we have 4 $C-H$ single bonds ($4 \\sigma$ bonds) and 1 $C=C$ double bond ($1 \\sigma$ + $1 \\pi$ bond). The total is 5 sigma and 1 pi bond.",
          },
          {
            id: "q2.2.10",
            unitId: 2,
            text: "Which hybridization corresponds to a trigonal planar electron geometry?",
            options: [
              "$sp$",
              "$sp^2$",
              "$sp^3$",
              "$sp^3d$",
            ],
            correctIndex: 1,
            hint: "Trigonal planar geometry has a steric number of 3, combining one s orbital and two p orbitals.",
            explanation: "A steric number of 3 requires mixing one $s$ orbital and two $p$ orbitals, yielding three equivalent $sp^2$ hybrid orbitals. These orbitals point towards the corners of an equilateral triangle (trigonal planar arrangement) to minimize electron repulsion.",
          },
        ],
      },
      {
        id: "2.3",
        title: "Lewis Diagrams, Formal Charge, and VSEPR Hybridization",
        description: "Master Lewis dot structures, resonance, formal charge calculations, VSEPR molecular geometry, bond angles, and orbital hybridization.",
        youtubeId: "xNYiB_2u8J4",
        article: `# Lewis Diagrams, Formal Charge, and VSEPR Hybridization

Valence Bond theory and VSEPR theory allow us to predict the three-dimensional shapes, bonding, and properties of molecules from their Lewis structures.

## Writing Lewis Diagrams and Formal Charge

A <vocab term="Lewis Diagram" definition="A structural representation of a molecule showing valence electrons as dots and bonds as lines.">Lewis diagram</vocab> shows how valence electrons are distributed in covalent molecules.

### Formal Charge Optimization:
When multiple valid Lewis structures can be drawn, we use <vocab term="Formal Charge" definition="The charge assigned to an atom in a molecule, calculated as valence electrons minus nonbonding electrons minus half of bonding electrons.">formal charge</vocab> to identify the most stable structure. The formal charge (FC) of an atom is calculated as:

$$	ext{FC} = 	ext{Valence } e^- - \\left( 	ext{Lone Pair } e^- + rac{1}{2} 	ext{Bonding } e^- ight)$$

- **Rule 1**: The most stable structure is one where formal charges are closest to zero.
- **Rule 2**: If negative formal charges must exist, they should reside on the **most electronegative** atoms.
- **Rule 3**: The sum of all formal charges must equal the net charge of the molecule or ion.

### Resonance Structures
<vocab term="Resonance" definition="A condition where more than one valid Lewis structure can be written for a molecule; the actual molecule is a hybrid of these structures.">Resonance</vocab> occurs when a molecule cannot be represented by a single Lewis structure. The actual molecule is a hybrid of the resonance structures, with delocalized electrons. Bond lengths in a resonance hybrid are equal and represent an average of the single and double bonds (e.g., $1.5$ bond order in Ozone).

## VSEPR Theory and Molecular Geometries

The Valence Shell Electron Pair Repulsion (<vocab term="VSEPR Theory" definition="A model used to predict the 3D geometry of molecules based on minimizing repulsion between electron pairs around a central atom.">VSEPR</vocab>) theory states that electron domains (bonding pairs and lone pairs) around a central atom arrange themselves to minimize repulsions.

- **Lone pairs** exert greater repulsive force than bonding pairs, squeezing bond angles down (e.g., $109.5^\\circ$ in $CH_4$ vs $107^\\circ$ in $NH_3$ vs $104.5^\\circ$ in $H_2O$).

| Electron Domains | Hybridization | Electron Geometry | Lone Pairs | Molecular Geometry | Ideal Bond Angle |
|---|---|---|---|---|---|
| 2 | $sp$ | Linear | 0 | Linear | $180^\\circ$ |
| 3 | $sp^2$ | Trigonal Planar | 0 | Trigonal Planar | $120^\\circ$ |
| 3 | $sp^2$ | Trigonal Planar | 1 | Bent | $<120^\\circ$ |
| 4 | $sp^3$ | Tetrahedral | 0 | Tetrahedral | $109.5^\\circ$ |
| 4 | $sp^3$ | Tetrahedral | 1 | Trigonal Pyramidal | $107^\\circ$ |
| 4 | $sp^3$ | Tetrahedral | 2 | Bent | $104.5^\\circ$ |
| 5 | $sp^3d$ | Trigonal Bipyramidal | 0 | Trigonal Bipyramidal | $90^\\circ, 120^\\circ$ |
| 5 | $sp^3d$ | Trigonal Bipyramidal | 1 | Seesaw | $<90^\\circ, <120^\\circ$ |
| 5 | $sp^3d$ | Trigonal Bipyramidal | 2 | T-shaped | $<90^\\circ$ |
| 5 | $sp^3d$ | Trigonal Bipyramidal | 3 | Linear | $180^\\circ$ |
| 6 | $sp^3d^2$ | Octahedral | 0 | Octahedral | $90^\\circ$ |
| 6 | $sp^3d^2$ | Octahedral | 1 | Square Pyramidal | $<90^\\circ$ |
| 6 | $sp^3d^2$ | Octahedral | 2 | Square Planar | $90^\\circ$ |

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Linear Shape -->
<g transform="translate(10, 0)">
<text x="60" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Linear (sp)</text>
<circle cx="60" cy="75" r="10" fill="#00f2ff" />
<line x1="30" y1="75" x2="50" y2="75" stroke="#ffffff" stroke-width="2" />
<circle cx="20" cy="75" r="8" fill="#a1a1aa" />
<line x1="70" y1="75" x2="90" y2="75" stroke="#ffffff" stroke-width="2" />
<circle cx="100" cy="75" r="8" fill="#a1a1aa" />
<text x="60" y="125" fill="#a1a1aa" font-size="10" text-anchor="middle">180° (e.g., CO₂)</text>
</g>
<!-- Trigonal Planar -->
<g transform="translate(150, 0)">
<text x="65" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Trigonal Planar (sp²)</text>
<circle cx="65" cy="75" r="10" fill="#00f2ff" />
<line x1="65" y1="75" x2="65" y2="45" stroke="#ffffff" stroke-width="2" />
<circle cx="65" cy="35" r="8" fill="#a1a1aa" />
<!-- bottom left -->
<line x1="65" y1="75" x2="40" y2="90" stroke="#ffffff" stroke-width="2" />
<circle cx="35" cy="95" r="8" fill="#a1a1aa" />
<!-- bottom right -->
<line x1="65" y1="75" x2="90" y2="90" stroke="#ffffff" stroke-width="2" />
<circle cx="95" cy="95" r="8" fill="#a1a1aa" />
<text x="65" y="125" fill="#a1a1aa" font-size="10" text-anchor="middle">120° (e.g., BF₃)</text>
</g>
<!-- Tetrahedral -->
<g transform="translate(290, 0)">
<text x="70" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Tetrahedral (sp³)</text>
<circle cx="70" cy="75" r="10" fill="#00f2ff" />
<line x1="70" y1="75" x2="70" y2="45" stroke="#ffffff" stroke-width="2" />
<circle cx="70" cy="35" r="8" fill="#a1a1aa" />
<!-- bottom left -->
<line x1="70" y1="75" x2="45" y2="95" stroke="#ffffff" stroke-width="2" />
<circle cx="40" cy="100" r="8" fill="#a1a1aa" />
<!-- bottom right back -->
<line x1="70" y1="75" x2="90" y2="90" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2,2" />
<circle cx="95" cy="95" r="8" fill="#a1a1aa" opacity="0.6" />
<!-- bottom front -->
<line x1="70" y1="75" x2="85" y2="105" stroke="#ffffff" stroke-width="3" />
<circle cx="90" cy="110" r="8" fill="#a1a1aa" />
<text x="70" y="135" fill="#a1a1aa" font-size="10" text-anchor="middle">109.5° (e.g., CH₄)</text>
</g>
</svg>
</div>
`,
        questions: [
          {
            id: "q2.3.1",
            unitId: 2,
            text: "What is the formal charge on the sulfur atom in the sulfate ion ($SO_4^{2-}$) in its most stable Lewis structure (which minimizes formal charges)?",
            options: [
              "+2",
              "+1",
              "0",
              "-2",
            ],
            correctIndex: 2,
            hint: "Sulfate can expand its octet to minimize formal charges. Draw structures with double bonds between sulfur and oxygen.",
            explanation: "In the most stable Lewis structure of $SO_4^{2-}$, sulfur forms two single bonds and two double bonds with the four oxygens (expanding its octet to 12 electrons). Sulfur has 6 valence electrons. In this structure, it has 6 bonding pairs and 0 lone pairs. FC = $6 - (0 + 6) = 0$. The two double-bonded oxygens have formal charges of 0, and the two single-bonded oxygens have formal charges of -1, summing to the net charge of -2.",
          },
          {
            id: "q2.3.2",
            unitId: 2,
            text: "What is the molecular geometry and hybridization of the central sulfur atom in sulfur tetrafluoride ($SF_4$)?",
            options: [
              "Tetrahedral; $sp^3$",
              "Square Planar; $sp^3d^2$",
              "Seesaw; $sp^3d$",
              "Trigonal Bipyramidal; $sp^3d$",
            ],
            correctIndex: 2,
            hint: "Sulfur has 6 valence electrons. Count the total electron domains around sulfur in SF4.",
            explanation: "Sulfur in $SF_4$ has 4 bonding pairs and 1 lone pair (total of 5 electron domains). The electron geometry is trigonal bipyramidal, which corresponds to $sp^3d$ hybridization. The molecular geometry is Seesaw because the lone pair occupies an equatorial position to minimize repulsion.",
          },
          {
            id: "q2.3.3",
            unitId: 2,
            text: "Which of the following molecules has a molecular geometry that is planar?",
            options: [
              "$NH_3$",
              "$BF_3$",
              "$PF_3$",
              "$SF_4$",
            ],
            correctIndex: 1,
            hint: "Planar geometries have all atoms lying in the same two-dimensional plane. Look for trigonal planar or square planar.",
            explanation: "$BF_3$ has 3 bonding domains and 0 lone pairs around Boron, yielding a trigonal planar molecular geometry ($sp^2$ hybridized) with bond angles of $120^\\circ$. $NH_3$ and $PF_3$ are trigonal pyramidal ($sp^3$ with a lone pair) and thus non-planar. $SF_4$ is seesaw.",
          },
          {
            id: "q2.3.4",
            unitId: 2,
            text: "Rank the bond angles of methane ($CH_4$), ammonia ($NH_3$), and water ($H_2O$) from smallest to largest.",
            options: [
              "$H_2O < NH_3 < CH_4$",
              "$CH_4 < NH_3 < H_2O$",
              "$NH_3 < H_2O < CH_4$",
              "$H_2O < CH_4 < NH_3$",
            ],
            correctIndex: 0,
            hint: "All three have 4 electron domains. Lone pairs repel more strongly than bonding pairs, narrowing the bond angles.",
            explanation: "All three molecules have 4 electron domains ($sp^3$ hybridization). Methane has 0 lone pairs ($109.5^\\circ$), ammonia has 1 lone pair ($107^\\circ$), and water has 2 lone pairs ($104.5^\\circ$). Lone pairs occupy more space than bonding pairs, increasing repulsion and squeezing the adjacent bonding domains closer together. Thus, the order of bond angles is $H_2O < NH_3 < CH_4$.",
          },
          {
            id: "q2.3.5",
            unitId: 2,
            text: "Which of the following compounds exhibits resonance?",
            options: [
              "$CO_2$",
              "$O_3$ (Ozone)",
              "$H_2O$",
              "$CH_4$",
            ],
            correctIndex: 1,
            hint: "Resonance is present when multiple equivalent Lewis structures can be drawn by shifting double bonds.",
            explanation: "Ozone ($O_3$) has a central oxygen bonded to two terminal oxygens. Its Lewis structure has one double bond and one single bond. Since the double bond can be placed on either side, ozone is a resonance hybrid with two equal bonds of bond order 1.5.",
          },
          {
            id: "q2.3.6",
            unitId: 2,
            text: "Brass is an alloy consisting of copper and zinc. Because copper and zinc atoms are roughly the same size, which type of alloy does brass represent?",
            options: [
              "Substitutional alloy",
              "Interstitial alloy",
              "Amorphous alloy",
              "Network alloy",
            ],
            correctIndex: 0,
            hint: "When the solute atoms are of similar size to the solvent atoms, they replace the solvent atoms in the lattice.",
            explanation: "A substitutional alloy forms when solute atoms are of similar size to the solvent atoms, replacing them in the crystal lattice (e.g., zinc replacing copper in brass). In contrast, interstitial alloys form when solute atoms are much smaller, fitting into the spaces between the larger solvent metal atoms.",
          },
          {
            id: "q2.3.7",
            unitId: 2,
            text: "Which of the following substances has the highest melting point and is held together by covalent network bonding?",
            options: [
              "$NaCl$",
              "$SiO_2$ (Quartz)",
              "$CO_2$",
              "$H_2O$",
            ],
            correctIndex: 1,
            hint: "Covalent network solids are held together by a continuous 3D network of covalent bonds, making them extremely hard with high melting points.",
            explanation: "$SiO_2$ (quartz) is a covalent network solid where each silicon atom is tetrahedrally bonded to four oxygen atoms in a continuous 3D network. Breaking this network requires breaking strong covalent bonds throughout the substance, resulting in a very high melting point. $NaCl$ is ionic, while $CO_2$ and $H_2O$ are molecular solids held together by weak IMFs.",
          },
          {
            id: "q2.3.8",
            unitId: 2,
            text: "Why do metals conduct electricity as solids, whereas ionic compounds only conduct when molten or in aqueous solution?",
            options: [
              "Metals contain highly mobile ions in the solid state.",
              "Ionic solids have covalent bonds that lock electrons in place.",
              "Metals have delocalized valence electrons that are free to move, whereas ions in ionic solids are locked in fixed positions.",
              "Ionic compounds have higher electronegativity than metals.",
            ],
            correctIndex: 2,
            hint: "Electricity conduction requires mobile charge carriers. Consider what carries the charge in metals vs. ionic compounds.",
            explanation: "Metallic bonding features a lattice of positive metal cations surrounded by a mobile, delocalized 'sea' of valence electrons. These free electrons act as charge carriers in the solid state. In ionic solids, the ions are locked in rigid positions in the 3D lattice, preventing electrical conduction. When melted or dissolved, the lattice breaks down, freeing the ions to move and conduct current.",
          },
          {
            id: "q2.3.9",
            unitId: 2,
            text: "Steel is an alloy of iron containing small amounts of carbon. How does the presence of carbon affect the properties of steel compared to pure iron?",
            options: [
              "It makes the alloy softer and more malleable.",
              "It increases the electrical conductivity of the alloy.",
              "It makes the alloy harder and less malleable by restricting the movement of iron layers.",
              "It decreases the density and melting point of the alloy.",
            ],
            correctIndex: 2,
            hint: "Carbon forms an interstitial alloy. The small carbon atoms fit into the spaces between large iron atoms.",
            explanation: "Steel is an interstitial alloy. Small carbon atoms fit into the spaces (interstices) between the larger iron atoms. These smaller carbon atoms distort the regular lattice and block the metal layers from sliding past one another under stress. This makes steel significantly harder and less malleable than pure iron.",
          },
          {
            id: "q2.3.10",
            unitId: 2,
            text: "Which of the following solids is held together primarily by weak dispersion forces?",
            options: [
              "$I_2$ (solid iodine)",
              "$Cu$ (copper metal)",
              "$SiC$ (silicon carbide)",
              "$KBr$ (potassium bromide)",
            ],
            correctIndex: 0,
            hint: "Look for a nonpolar molecular solid.",
            explanation: "$I_2$ is a nonpolar diatomic molecule. In the solid state, $I_2$ forms a molecular crystal held together solely by weak London dispersion forces. $Cu$ has metallic bonding, $SiC$ has covalent network bonding, and $KBr$ has ionic bonding.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Intermolecular Forces and Properties",
    masteryWeight: "18–22%",
    topics: [
      {
        id: "3.1",
        title: "Intermolecular Forces and States of Matter",
        description: "Understand London dispersion forces, dipole-dipole interactions, hydrogen bonding, and ion-dipole forces. Relate IMF strength to vapor pressure, boiling point, and phase diagrams.",
        youtubeId: "-QqTwJzi7Wo",
        article: `# Intermolecular Forces and States of Matter

Intermolecular forces (IMFs) are attractive forces between individual molecules. They are much weaker than intramolecular covalent or ionic bonds, but they dictate physical states and properties.

## Types of Intermolecular Forces

1. **London Dispersion Forces (LDFs)**: 
   - Present in **all** molecules (polar and nonpolar).
   - Caused by temporary, instantaneous dipoles formed by fluctuations in the electron cloud.
   - The strength of LDFs increases with increasing <vocab term="Polarizability" definition="The ease with which the electron cloud of an atom or molecule can be distorted to form a dipole.">polarizability</vocab>, which increases with **larger electron clouds** (greater molar mass).
2. **Dipole-Dipole Forces**:
   - Present only in **polar** molecules.
   - Electrostatic attractions between permanent dipoles (the $\\delta^+$ end of one molecule attracts the $\\delta^-$ end of another).
3. **Hydrogen Bonding**:
   - A highly strong, specific type of dipole-dipole interaction.
   - Occurs when a hydrogen atom is covalently bonded to a highly electronegative atom (**F, O, or N**), exposing the hydrogen nucleus to be attracted to a lone pair on a neighboring F, O, or N atom.
4. **Ion-Dipole Forces**:
   - Occurs between an ion (cation or anion) and a polar molecule (e.g., $Na^+$ dissolving in $H_2O$).

## IMFs and Physical Properties

The strength of IMFs determines a substance's physical properties:

| Property | Definition | Relationship to IMF Strength |
|---|---|---|
| **Boiling / Melting Point** | Temperature at which phase change occurs | **Stronger IMFs** $ightarrow$ **Higher BP/MP** (more energy needed to separate molecules). |
| **Vapor Pressure** | Pressure exerted by gas in equilibrium with liquid | **Stronger IMFs** $ightarrow$ **Lower Vapor Pressure** (fewer molecules escape into gas phase). |
| **Surface Tension** | Resistance of a liquid to increase its surface area | **Stronger IMFs** $ightarrow$ **Higher Surface Tension**. |
| **Viscosity** | A liquid's resistance to flow | **Stronger IMFs** $ightarrow$ **Higher Viscosity**. |

## Heating Curves and Phase Changes

During a phase change, the temperature remains constant. The heat energy added is used entirely to disrupt and break intermolecular attractions rather than increasing the kinetic energy (speed) of the molecules.

Below is the Heating Curve for water, showing phase transitions at 0°C and 100°C:

<div class="flex justify-center my-8">
<svg width="450" height="300" viewBox="0 0 450 300" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Y-axis (Temperature) -->
<line x1="60" y1="30" x2="60" y2="250" stroke="#a1a1aa" stroke-width="2" />
<!-- X-axis (Heat Added) -->
<line x1="60" y1="250" x2="420" y2="250" stroke="#a1a1aa" stroke-width="2" />
<!-- Y-axis labels -->
<text x="50" y="225" fill="#a1a1aa" font-size="10" text-anchor="end">-20°C</text>
<text x="50" y="195" fill="#a1a1aa" font-size="10" text-anchor="end">0°C</text>
<text x="50" y="105" fill="#a1a1aa" font-size="10" text-anchor="end">100°C</text>
<!-- Dashed Temperature lines -->
<line x1="60" y1="195" x2="400" y2="195" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3,3" />
<line x1="60" y1="105" x2="400" y2="105" stroke="rgba(255,255,255,0.1)" stroke-dasharray="3,3" />
<!-- Heating Curve Path -->
<!-- Solid (slanted) -> Melting (flat) -> Liquid (slanted) -> Boiling (flat) -> Gas (slanted) -->
<path d="M 65 225 L 110 195 L 170 195 L 240 105 L 350 105 L 390 50" fill="none" stroke="#ff9900" stroke-width="3" />
<!-- Key Points Dots -->
<circle cx="110" cy="195" r="4" fill="#ff9900" />
<circle cx="170" cy="195" r="4" fill="#ff9900" />
<circle cx="240" cy="105" r="4" fill="#ff9900" />
<circle cx="350" cy="105" r="4" fill="#ff9900" />
<!-- Labels -->
<text x="240" y="20" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Heating Curve of Water</text>
<text x="15" y="140" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 140)">Temperature (°C)</text>
<text x="240" y="280" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Heat Added (kJ)</text>
<!-- Phase Labels -->
<text x="80" y="215" fill="#ffffff" font-size="9" text-anchor="middle">Solid</text>
<text x="140" y="185" fill="#ff9900" font-size="9" font-weight="bold" text-anchor="middle">Melting</text>
<text x="200" y="145" fill="#ffffff" font-size="9" text-anchor="middle">Liquid</text>
<text x="295" y="95" fill="#ff9900" font-size="9" font-weight="bold" text-anchor="middle">Vaporization</text>
<text x="380" y="75" fill="#ffffff" font-size="9" text-anchor="middle">Gas</text>
</svg>
</div>

- **Heat of Fusion** ($\\Delta H_{	ext{fus}}$): Energy to melt 1 mole of solid.
- **Heat of Vaporization** ($\\Delta H_{	ext{vap}}$): Energy to vaporize 1 mole of liquid. Always larger than $\\Delta H_{	ext{fus}}$ because vaporizing requires completely breaking all IMFs, whereas melting only weakens them.
`,
        questions: [
          {
            id: "q3.1.1",
            unitId: 3,
            text: "Which of the following compounds has the highest boiling point?",
            options: [
              "$CH_4$",
              "$CF_4$",
              "$CCl_4$",
              "$CBr_4$",
            ],
            correctIndex: 3,
            hint: "All four molecules are nonpolar. Compare their polarizability based on the size of their electron clouds.",
            explanation: "All four molecules are symmetrical and nonpolar, meaning their only IMFs are London dispersion forces. The strength of LDFs depends on polarizability, which increases with the total number of electrons/molar mass. $CBr_4$ has the largest electron cloud, the strongest LDFs, and thus the highest boiling point.",
          },
          {
            id: "q3.1.2",
            unitId: 3,
            text: "Identify the primary intermolecular force that is responsible for the solubility of ethanol ($C_2H_5OH$) in water ($H_2O$).",
            options: [
              "London dispersion forces",
              "Dipole-dipole forces",
              "Hydrogen bonding",
              "Ion-dipole forces",
            ],
            correctIndex: 2,
            hint: "Ethanol contains an -OH group, and water contains H bonded to O.",
            explanation: "Both water and ethanol contain highly electronegative oxygen atoms covalently bonded to hydrogen atoms. The hydrogen atom on ethanol's -OH group can form strong hydrogen bonds with the lone pairs on water's oxygen, driving its high solubility.",
          },
          {
            id: "q3.1.3",
            unitId: 3,
            text: "Which of the following liquids would you expect to have the highest vapor pressure at room temperature (25°C)?",
            options: [
              "$H_2O$",
              "$CH_3OH$ (Methanol)",
              "$C_5H_{12}$ (Pentane)",
              "$C_8H_{18}$ (Octane)",
            ],
            correctIndex: 2,
            hint: "Vapor pressure is inversely related to IMF strength. The weakest IMFs will have the highest vapor pressure.",
            explanation: "$H_2O$ and $CH_3OH$ have hydrogen bonding (very strong). $C_5H_{12}$ and $C_8H_{18}$ are nonpolar hydrocarbons and only experience LDFs. Pentane ($C_5H_{12}$) has a smaller electron cloud and weaker LDFs than octane ($C_8H_{18}$), meaning it has the weakest total IMFs and can escape into the gas phase most easily, giving it the highest vapor pressure.",
          },
          {
            id: "q3.1.4",
            unitId: 3,
            text: "Why is the enthalpy of vaporization ($\\Delta H_{\\text{vap}}$) of water significantly larger than its enthalpy of fusion ($\\Delta H_{\\text{fus}}$)?",
            options: [
              "Vaporization requires breaking covalent O-H bonds inside the molecules.",
              "Melting requires completely breaking all hydrogen bonds, while vaporization only weakens them.",
              "Vaporization requires completely separating the molecules, breaking all intermolecular hydrogen bonds, while melting only requires breaking some of them.",
              "The temperature of liquid water is higher than that of ice.",
            ],
            correctIndex: 2,
            hint: "Consider the structural difference between liquids and gases. Gas molecules are completely isolated.",
            explanation: "Melting ice to liquid water only requires disrupting some of the hydrogen bonds to allow molecules to flow. In contrast, vaporizing liquid water to gas requires completely separating the molecules, which breaks every single intermolecular hydrogen bond, requiring much more energy.",
          },
          {
            id: "q3.1.5",
            unitId: 3,
            text: "What type of intermolecular force is primary when sodium nitrate ($NaNO_3$) dissolves in water?",
            options: [
              "Hydrogen bonding",
              "Ion-dipole forces",
              "Dipole-induced dipole forces",
              "London dispersion forces",
            ],
            correctIndex: 1,
            hint: "Sodium nitrate is an ionic compound that dissociates into Na+ and NO3- ions in a polar solvent.",
            explanation: "When $NaNO_3$ dissolves, it dissociates into $Na^+$ and $NO_3^-$ ions. The polar water molecules orient themselves so their partial negative oxygen ends attract the $Na^+$ cations, and their partial positive hydrogen ends attract the $NO_3^-$ anions. These electrostatic interactions are called ion-dipole forces.",
          },
          {
            id: "q3.1.6",
            unitId: 3,
            text: "Which of the following liquids would you expect to have the highest viscosity at room temperature?",
            options: [
              "$CH_3CH_2OH$ (Ethanol)",
              "$HOCH_2CH_2OH$ (Ethylene glycol)",
              "$CH_3OCH_3$ (Dimethyl ether)",
              "$CH_3CH_2CH_3$ (Propane)",
            ],
            correctIndex: 1,
            hint: "Viscosity increases with stronger intermolecular forces. Look for the molecule that can form the most hydrogen bonds.",
            explanation: "Ethylene glycol ($HOCH_2CH_2OH$) has two $-OH$ groups, allowing it to form extensive hydrogen-bonding networks with neighboring molecules. Dimethyl ether and propane cannot hydrogen-bond, and ethanol only has one $-OH$ group. The greater density of hydrogen bonds in ethylene glycol increases the attraction between molecules, leading to the highest viscosity.",
          },
          {
            id: "q3.1.7",
            unitId: 3,
            text: "Which of the following factors explains why the boiling point of $H_2O$ ($100^\\circ\\text{C}$) is significantly higher than that of $H_2S$ ($-60^\\circ\\text{C}$)?",
            options: [
              "London dispersion forces are much stronger in water.",
              "Water molecules form strong hydrogen bonds, whereas hydrogen sulfide molecules only form weaker dipole-dipole interactions.",
              "Sulfur is more electronegative than Oxygen.",
              "The covalent bonds in water are much stronger than in hydrogen sulfide.",
            ],
            correctIndex: 1,
            hint: "Oxygen is highly electronegative and bonded to hydrogen, creating hydrogen bonds in water. Sulfur is not electronegative enough for hydrogen bonding.",
            explanation: "Oxygen is a small, highly electronegative atom. When bonded to hydrogen, it creates a very polar bond capable of forming strong hydrogen bonds. Sulfur is larger and less electronegative, so $H_2S$ cannot form hydrogen bonds, only weaker dipole-dipole forces. Boiling points reflect the strength of intermolecular forces, not covalent bonds.",
          },
          {
            id: "q3.1.8",
            unitId: 3,
            text: "At a given temperature, which of the following compounds has the highest vapor pressure?",
            options: [
              "$CH_4$",
              "$CH_3CH_3$",
              "$CH_3CH_2CH_3$",
              "$CH_3CH_2CH_2CH_3$",
            ],
            correctIndex: 0,
            hint: "Vapor pressure is inversely related to intermolecular forces. The compound with the weakest IMFs will evaporate most easily.",
            explanation: "These are all nonpolar hydrocarbons held together only by London dispersion forces (LDFs). LDFs increase with size and polarizability (number of electrons). Methane ($CH_4$) is the smallest molecule and has the weakest LDFs. As a result, it has the lowest boiling point and highest vapor pressure at a given temperature.",
          },
          {
            id: "q3.1.9",
            unitId: 3,
            text: "What type of intermolecular force is responsible for the solubility of sodium chloride ($NaCl$) in water ($H_2O$)?",
            options: [
              "Hydrogen bonding",
              "Ion-dipole forces",
              "Dipole-dipole forces",
              "London dispersion forces",
            ],
            correctIndex: 1,
            hint: "NaCl dissociates into ions (Na+ and Cl-) which interact with the polar water molecules.",
            explanation: "When $NaCl$ dissolves in water, it dissociates into $Na^+$ and $Cl^-$ ions. The partially negative oxygen atom of water attracts the $Na^+$ cation, while the partially positive hydrogen atoms of water attract the $Cl^-$ anion. These attractions between an ion and a polar molecule are called ion-dipole forces.",
          },
          {
            id: "q3.1.10",
            unitId: 3,
            text: "Which of the following compounds has the highest boiling point?",
            options: [
              "$HF$",
              "$HCl$",
              "$HBr$",
              "$HI$",
            ],
            correctIndex: 0,
            hint: "Although HI has the largest size and strongest London dispersion forces, HF is capable of hydrogen bonding, which is a much stronger IMF.",
            explanation: "Hydrogen fluoride ($HF$) is capable of forming hydrogen bonds because fluorine is highly electronegative and small. Hydrogen bonding is significantly stronger than the dipole-dipole and London dispersion forces present in $HCl$, $HBr$, and $HI$, giving $HF$ the highest boiling point.",
          },
        ],
      },
      {
        id: "3.2",
        title: "Gas Laws, Kinetic Molecular Theory, and Deviations",
        description: "Apply the Ideal Gas Law and Dalton's Law of Partial Pressures. Analyze gas behavior using Kinetic Molecular Theory (KMT), Maxwell-Boltzmann speed distributions, and explain deviations from ideal behavior.",
        youtubeId: "gmN2fRlQFp4",
        article: `# Gas Laws, Kinetic Molecular Theory, and Deviations

Gases are described by state variables: Pressure ($P$), Volume ($V$), Temperature ($T$ in Kelvin), and moles ($n$).

## The Ideal Gas Law and Partial Pressures

The behavior of an ideal gas is described by the **Ideal Gas Law**:

$$PV = nRT$$

Where:
- $R$ is the gas constant ($0.08206 	ext{ L atm / mol K}$ or $8.314 	ext{ J / mol K}$).
- $T$ must always be in **Kelvin** ($T_{	ext{K}} = T_{^\\circ	ext{C}} + 273.15$).

### Dalton's Law of Partial Pressures:
In a mixture of non-reacting gases, the total pressure ($P_{	ext{total}}$) is the sum of the partial pressures of the individual gases:

$$P_{	ext{total}} = P_A + P_B + P_C + \\dots$$

The partial pressure of a gas is proportional to its mole fraction ($X_A$):

$$P_A = X_A 	imes P_{	ext{total}} \\quad 	ext{where} \\quad X_A = rac{n_A}{n_{	ext{total}}}$$

## Kinetic Molecular Theory (KMT)

KMT is a microscopic model that explains macroscopic gas laws based on the following postulates:
1. Gas particles are in constant, random, straight-line motion.
2. The volume of the gas particles themselves is negligible compared to the volume of the container.
3. There are no attractive or repulsive forces between gas particles.
4. Collisions between particles and with container walls are perfectly elastic.
5. The average kinetic energy of gas particles is directly proportional to the absolute temperature:

$$KE_{	ext{avg}} = rac{3}{2} RT$$

### Molecular Speed and Maxwell-Boltzmann Distribution:
Although all gas particles in a sample at a given temperature have the same *average* kinetic energy, they do not move at the same speed. The root-mean-square speed ($u_{	ext{rms}}$) is given by:

$$u_{	ext{rms}} = \\sqrt{rac{3RT}{M}}$$

Where $M$ is the molar mass in kg/mol.
- **Molar Mass Effect**: At a constant temperature, lighter gas particles move faster on average than heavier particles.
- **Temperature Effect**: As temperature increases, the distribution of speeds spreads out, and the peak of the curve shifts to the right (higher average speed).

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full">
<!-- Grid/Axes -->
<line x1="60" y1="30" x2="60" y2="230" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="230" x2="420" y2="230" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="260" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Molecular Speed (v)</text>
<text x="20" y="130" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 130)">Relative Number of Molecules</text>
<!-- T1 (Cold) Curve: Tall, narrow peak at x=130, y=50 -->
<path d="M 60 230 C 80 180, 100 50, 130 50 C 160 50, 180 180, 220 220 C 230 225, 260 230, 300 230" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2.5" />
<text x="130" y="38" fill="#3b82f6" font-size="11" font-weight="bold" text-anchor="middle">Cold Gas (T₁)</text>
<!-- T2 (Hot) Curve: Lower, wider peak at x=200, y=110 -->
<path d="M 60 230 C 90 210, 130 110, 200 110 C 270 110, 310 180, 350 210 C 370 220, 390 230, 410 230" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="2.5" />
<text x="240" y="98" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Hot Gas (T₂)</text>
<!-- Annotations -->
<text x="320" y="160" fill="#a1a1aa" font-size="9" text-anchor="start">T₂ > T₁</text>
<text x="320" y="175" fill="#a1a1aa" font-size="9" text-anchor="start">Higher average speed,</text>
<text x="320" y="190" fill="#a1a1aa" font-size="9" text-anchor="start">wider distribution.</text>
</svg>
</div>

## Deviations from Ideal Behavior

Real gases deviate from ideal behavior under conditions of **high pressure (small volume)** and **low temperature**. Under these conditions, KMT postulates break down:

1. **Low Temperature**: Particles move slowly, allowing **intermolecular attractions** to pull them together, which reduces collisions with the container walls, making $P_{	ext{real}} < P_{	ext{ideal}}$.
2. **High Pressure / Small Volume**: Particles are packed tightly together, meaning the **volume of the gas particles themselves** is no longer negligible compared to the container volume, making $V_{	ext{real}} > V_{	ext{ideal}}$.

Real gases behave **most ideally** at **high temperature and low pressure**, and when the gas has **weak IMFs** (nonpolar, small size, e.g., Helium).
`,
        questions: [
          {
            id: "q3.2.1",
            unitId: 3,
            text: "A 2.0 L flask contains 3.0 g of Helium ($He$, molar mass 4.00 g/mol) and 7.1 g of Chlorine gas ($Cl_2$, molar mass 70.90 g/mol) at 273 K. What is the partial pressure of Helium in the flask?",
            options: [
              "8.4 atm",
              "1.1 atm",
              "5.6 atm",
              "0.75 atm",
            ],
            correctIndex: 0,
            hint: "Calculate the moles of Helium first, then use PV = nRT to find its partial pressure.",
            explanation: "Moles of $He = 3.0 \\text{ g} / 4.00 \\text{ g/mol} = 0.75 \\text{ mol}$. The partial pressure of Helium can be found directly using the ideal gas law: $P_{He} = n_{He}RT / V = 0.75 \\times 0.08206 \\times 273 / 2.0 \\approx 8.4 \\text{ atm}$.",
          },
          {
            id: "q3.2.2",
            unitId: 3,
            text: "A sample of Argon ($Ar$) gas and a sample of Helium ($He$) gas are at the same temperature. Which of the following statements is correct regarding the average kinetic energy ($KE$) and average speed ($v$) of the gas atoms?",
            options: [
              "Both have the same average speed, but Helium has a higher average $KE$.",
              "Both have the same average $KE$, but Helium has a higher average speed.",
              "Both have the same average $KE$, but Argon has a higher average speed.",
              "Argon has both a higher average $KE$ and average speed.",
            ],
            correctIndex: 1,
            hint: "Temperature is a measure of average kinetic energy. Lighter particles move faster to have the same kinetic energy.",
            explanation: "Temperature is directly proportional to the average kinetic energy of gas particles. Since both gases are at the same temperature, they have the same average $KE$. However, because Helium ($M=4.0$) is lighter than Argon ($M=39.95$), its atoms must travel at a higher average speed ($u_{rms} = \\sqrt{3RT/M}$) to maintain the same average kinetic energy.",
          },
          {
            id: "q3.2.3",
            unitId: 3,
            text: "Under which of the following sets of conditions does a real gas deviate most from ideal behavior?",
            options: [
              "High temperature and low pressure",
              "Low temperature and high pressure",
              "High temperature and high pressure",
              "Low temperature and low pressure",
            ],
            correctIndex: 1,
            hint: "Deviations occur when particles are close together (high pressure) and moving slowly (low temperature).",
            explanation: "At high pressure, the volume of the gas molecules themselves becomes a significant fraction of the container volume. At low temperature, the molecules move slowly enough that their intermolecular attractions become significant. These violate the postulates of KMT, resulting in non-ideal behavior.",
          },
          {
            id: "q3.2.4",
            unitId: 3,
            text: "Which of the following gases would behave MOST ideally at a low temperature of 150 K?",
            options: [
              "$H_2O$",
              "$CO_2$",
              "$N_2$",
              "$He$",
            ],
            correctIndex: 3,
            hint: "Identify the gas with the weakest intermolecular forces and smallest molecular volume.",
            explanation: "Helium ($He$) is a single monatomic atom with only two electrons, making it extremely small and minimally polarizable. It has the weakest London dispersion forces among all elements and no other IMFs. Thus, even at low temperatures, its intermolecular attractions remain negligible, allowing it to behave most ideally.",
          },
          {
            id: "q3.2.5",
            unitId: 3,
            text: "If a gas mixture has a total pressure of 1.20 atm and contains 0.20 moles of $O_2$, 0.30 moles of $N_2$, and 0.50 moles of $CO_2$, what is the partial pressure of $N_2$?",
            options: [
              "0.36 atm",
              "0.24 atm",
              "0.60 atm",
              "0.30 atm",
            ],
            correctIndex: 0,
            hint: "Calculate the mole fraction of N2 (moles of N2 divided by total moles) and multiply by the total pressure.",
            explanation: "Total moles = $0.20 + 0.30 + 0.50 = 1.00 \\text{ mol}$. The mole fraction of $N_2$ is $X_{N2} = 0.30 / 1.00 = 0.30$. The partial pressure of $N_2$ is $P_{N2} = X_{N2} \\times P_{total} = 0.30 \\times 1.20 \\text{ atm} = 0.36 \\text{ atm}$.",
          },
          {
            id: "q3.2.6",
            unitId: 3,
            text: "A mixture of $2.00 \\text{ mol}$ of $H_2(g)$ and $1.00 \\text{ mol}$ of $He(g)$ is placed in a $10.0 \\text{ L}$ container at $27.0^\\circ\\text{C}$. What is the partial pressure of $He(g)$ in the container? ($R = 0.08206 \\text{ L} \\cdot \\text{atm} / \\text{mol} \\cdot \\text{K}$)",
            options: [
              "$2.46 \\text{ atm}$",
              "$4.92 \\text{ atm}$",
              "$7.39 \\text{ atm}$",
              "$1.23 \\text{ atm}$",
            ],
            correctIndex: 0,
            hint: "Use Dalton's law of partial pressures: P_He = n_He * R * T / V.",
            explanation: "Using the ideal gas law for $He$: $P_{He} = \\frac{n_{He} R T}{V}$. Convert temperature to Kelvin: $T = 27.0 + 273.15 = 300.15 \\text{ K}$. Moles of $He$ = $1.00 \\text{ mol}$. $P_{He} = \\frac{1.00 \\text{ mol} \\times 0.08206 \\text{ L} \\cdot \\text{atm/mol} \\cdot \\text{K} \\times 300.15 \\text{ K}}{10.0 \\text{ L}} \\approx 2.46 \\text{ atm}$.",
          },
          {
            id: "q3.2.7",
            unitId: 3,
            text: "Under which of the following conditions does a real gas show the greatest deviations from ideal behavior?",
            options: [
              "High temperature and low pressure",
              "High temperature and high pressure",
              "Low temperature and low pressure",
              "Low temperature and high pressure",
            ],
            correctIndex: 3,
            hint: "Gases deviate from ideal behavior when the volume of the gas particles becomes significant relative to the container, and when intermolecular attractions become significant.",
            explanation: "At high pressure, the gas molecules are compressed close together, making their molecular volume significant relative to the total container volume. At low temperature, the molecules move slowly, allowing weak intermolecular attractions to pull them together during collisions. Thus, low temperature and high pressure produce the greatest deviations from ideal gas behavior.",
          },
          {
            id: "q3.2.8",
            unitId: 3,
            text: "A sample of $He(g)$ and a sample of $Ar(g)$ are in separate containers of equal volume at the same temperature and pressure. Which of the following statements is correct?",
            options: [
              "The average kinetic energy of the $He$ atoms is greater than that of the $Ar$ atoms.",
              "The average speed of the $He$ atoms is greater than that of the $Ar$ atoms.",
              "The density of the gas in the $He$ container is greater than in the $Ar$ container.",
              "The $Ar$ container contains more atoms than the $He$ container.",
            ],
            correctIndex: 1,
            hint: "Average kinetic energy is determined only by temperature. At the same temperature, lighter gas particles move faster.",
            explanation: "Since temperature is the same, both gases have the same average kinetic energy ($KE_{avg} = \\frac{3}{2}RT$). However, the root-mean-square speed is inversely proportional to the square root of the molar mass ($u_{rms} = \\sqrt{\\frac{3RT}{M}}$). Since $He$ ($M \\approx 4 \\text{ g/mol}$) is much lighter than $Ar$ ($M \\approx 40 \\text{ g/mol}$), $He$ atoms have a much higher average speed.",
          },
          {
            id: "q3.2.9",
            unitId: 3,
            text: "An inflated balloon has a volume of $2.00 \\text{ L}$ at sea level ($1.00 \\text{ atm}$) and $25^\\circ\\text{C}$. The balloon rises to an altitude where the pressure is $0.500 \\text{ atm}$ and the temperature is $-23^\\circ\\text{C}$. What is the new volume of the balloon?",
            options: [
              "$3.36 L$",
              "$4.00 L$",
              "$1.67 L$",
              "$2.50 L$",
            ],
            correctIndex: 0,
            hint: "Use the combined gas law: (P1 * V1) / T1 = (P2 * V2) / T2. Remember to convert temperatures to Kelvin.",
            explanation: "Combined gas law: $V_2 = V_1 \\times \\frac{P_1}{P_2} \\times \\frac{T_2}{T_1}$. Convert temperatures to Kelvin: $T_1 = 25 + 273 = 298 \\text{ K}$. $T_2 = -23 + 273 = 250 \\text{ K}$. $V_2 = 2.00 \\text{ L} \\times \\frac{1.00 \\text{ atm}}{0.500 \\text{ atm}} \\times \\frac{250 \\text{ K}}{298 \\text{ K}} = 2.00 \\times 2.00 \\times 0.839 \\approx 3.36 \\text{ L}$.",
          },
          {
            id: "q3.2.10",
            unitId: 3,
            text: "What does a Maxwell-Boltzmann distribution graph represent?",
            options: [
              "The relationship between gas pressure and temperature.",
              "The distribution of molecular speeds in a gas at a given temperature.",
              "The deviation of gas volume from ideal behavior.",
              "The rate of effusion of different gases.",
            ],
            correctIndex: 1,
            hint: "The curve plots the relative number of molecules against their molecular speed.",
            explanation: "A Maxwell-Boltzmann distribution shows the range of molecular speeds (or kinetic energies) for a collection of gas particles at a specific temperature. As temperature increases, the peak shifts to the right (higher speed) and flattens out, indicating a wider range of speeds.",
          },
        ],
      },
      {
        id: "3.3",
        title: "Solutions, Solubility, and Light Spectroscopy (Beer-Lambert)",
        description: "Analyze solutions, concentration (molarity), chromatography, distillation, and apply the Beer-Lambert Law to determine solution concentration spectrophotometrically.",
        youtubeId: "i2qpDSwyR-0",
        article: `# Solutions, Solubility, and Light Spectroscopy (Beer-Lambert)

Solutions are homogeneous mixtures. The components include a solvent (doing the dissolving, present in largest amount) and a solute (the substance being dissolved).

## Concentration and Molarity

The primary unit of concentration in AP Chemistry is <vocab term="Molarity" definition="The concentration of a solution expressed as moles of solute per liter of solution.">Molarity</vocab> ($M$):

$$M = rac{	ext{moles of solute}}{	ext{Liters of solution}}$$

## The Dissolution Process and Solubility

Dissolution involves three steps:
1. **Solute-Solute bonds break** (requires energy, $\\Delta H_1 > 0$).
2. **Solvent-Solvent IMFs break** (requires energy, $\\Delta H_2 > 0$).
3. **Solute-Solvent interactions form** (releases energy, $\\Delta H_3 < 0$).

Like dissolves like: polar solutes dissolve in polar solvents (forming dipole-dipole or hydrogen bonds), while nonpolar solutes dissolve in nonpolar solvents (forming LDFs).

## Separation of Mixtures

- **Distillation**: Separates mixtures of liquids based on differences in their boiling points. The substance with the weaker IMFs vaporizes first.
- **Chromatography**: Separates mixtures based on differences in polarity.
  - **Paper/Thin-Layer Chromatography**: A mobile phase (solvent) carries the mixture up a stationary phase (paper). The component that is most attracted to the mobile phase moves the furthest.
  - **Retention Factor** ($R_f$):
    $$R_f = rac{	ext{Distance traveled by solute}}{	ext{Distance traveled by solvent front}}$$

## Beer-Lambert Law

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Light Source -->
<circle cx="30" cy="75" r="15" fill="rgba(253, 224, 71, 0.2)" stroke="#facc15" stroke-width="2" />
<text x="30" y="79" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Light</text>
<line x1="45" y1="75" x2="90" y2="75" stroke="#facc15" stroke-width="2" stroke-dasharray="2,2" />
<!-- Lens/Slit -->
<rect x="90" y="45" width="6" height="60" fill="#a1a1aa" />
<rect x="90" y="70" width="6" height="10" fill="none" stroke="#000000" stroke-width="2" /> <!-- Aperture -->
<line x1="96" y1="75" x2="160" y2="75" stroke="#facc15" stroke-width="2" />
<!-- Monochromator/Filter -->
<polygon points="160,55 175,75 160,95" fill="#3b82f6" stroke="#60a5fa" stroke-width="1.5" />
<text x="167" y="115" fill="#60a5fa" font-size="8" font-weight="bold" text-anchor="middle">Filter</text>
<line x1="175" y1="75" x2="230" y2="75" stroke="#00f2ff" stroke-width="2" /> <!-- Selected wavelength -->
<!-- Cuvette -->
<rect x="230" y="40" width="40" height="70" rx="4" fill="rgba(0, 242, 255, 0.15)" stroke="#00f2ff" stroke-width="2" />
<text x="250" y="80" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Sample</text>
<text x="250" y="125" fill="#a1a1aa" font-size="8" text-anchor="middle">Path length (b)</text>
<!-- Transmitted light -->
<line x1="270" y1="75" x2="340" y2="75" stroke="#00f2ff" stroke-width="1.5" stroke-opacity="0.5" />
<!-- Detector -->
<rect x="340" y="55" width="40" height="40" rx="4" fill="rgba(255, 255, 255, 0.05)" stroke="#ffffff" stroke-width="1.5" />
<text x="360" y="78" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Photo</text>
<text x="360" y="88" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Sensor</text>
<!-- Meter -->
<rect x="400" y="60" width="35" height="30" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
<text x="417" y="78" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Abs</text>
<line x1="380" y1="75" x2="400" y2="75" stroke="#ffffff" stroke-width="1" />
</svg>
</div>

The <vocab term="Beer-Lambert Law" definition="A law stating that the absorbance of a solution is directly proportional to its concentration, path length, and molar absorptivity.">Beer-Lambert Law</vocab> relates the absorbance of light ($A$) by a colored solution to its concentration ($c$):

$$A = \\epsilon b c$$

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full">
<!-- Grid/Axes -->
<line x1="60" y1="30" x2="60" y2="230" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="230" x2="420" y2="230" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="260" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Concentration (M)</text>
<text x="20" y="130" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 130)">Absorbance (A)</text>
<!-- Linear Calibration Line -->
<line x1="60" y1="230" x2="380" y2="50" stroke="#10b981" stroke-width="3" />
<!-- Data Points (dots) -->
<circle cx="124" cy="194" r="5" fill="#ffffff" stroke="#10b981" stroke-width="2" />
<circle cx="188" cy="158" r="5" fill="#ffffff" stroke="#10b981" stroke-width="2" />
<circle cx="252" cy="122" r="5" fill="#ffffff" stroke="#10b981" stroke-width="2" />
<circle cx="316" cy="86" r="5" fill="#ffffff" stroke="#10b981" stroke-width="2" />
<circle cx="380" cy="50" r="5" fill="#ffffff" stroke="#10b981" stroke-width="2" />
<!-- Equation Label -->
<text x="200" y="80" fill="#10b981" font-size="14" font-weight="bold">A = ε b C</text>
<text x="200" y="100" fill="#a1a1aa" font-size="10">Linear Fit (R² = 0.999)</text>
<!-- Unknown Concentration Interpolation Example -->
<line x1="60" y1="122" x2="252" y2="122" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.5" />
<line x1="252" y1="122" x2="252" y2="230" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.5" />
<circle cx="252" cy="122" r="4" fill="#ef4444" />
<text x="70" y="115" fill="#ef4444" font-size="9">Measured Absorbance</text>
<text x="262" y="215" fill="#ef4444" font-size="9" text-anchor="start">Interpolated Concentration</text>
</svg>
</div>

Where:
- $A$ is the absorbance (unitless, measured by a spectrophotometer).
- $\\epsilon$ is the molar absorptivity (constant for a specific solute at a specific wavelength).
- $b$ is the path length of the cuvette (typically $1.0 	ext{ cm}$).
- $c$ is the molar concentration of the solute.

### Calibration Curves:
A plot of Absorbance vs. Concentration yields a straight line passing through the origin. By measuring the absorbance of a solution of unknown concentration, its concentration can be determined from this calibration curve.

### Common Spectrophotometer Errors:
- **Fingerprints or water droplets on cuvette**: Scatters light, increasing absorbance, yielding an artificially high calculated concentration.
- **Incorrect wavelength**: Wavelength of maximum absorbance ($\\lambda_{	ext{max}}$) should be selected for maximum sensitivity.
`,
        questions: [
          {
            id: "q3.3.1",
            unitId: 3,
            text: "How many grams of copper(II) sulfate ($CuSO_4$, molar mass 159.61 g/mol) are required to prepare 250.0 mL of a 0.200 M solution?",
            options: [
              "7.98 g",
              "15.96 g",
              "39.90 g",
              "79.80 g",
            ],
            correctIndex: 0,
            hint: "Use the formula Moles = Molarity * Volume (in Liters), then convert moles to grams.",
            explanation: "Moles of $CuSO_4 = 0.200 \\text{ mol/L} \\times 0.2500 \\text{ L} = 0.0500 \\text{ mol}$. Mass of $CuSO_4 = 0.0500 \\text{ mol} \\times 159.61 \\text{ g/mol} = 7.98 \\text{ g}$.",
          },
          {
            id: "q3.3.2",
            unitId: 3,
            text: "In a paper chromatography experiment using a polar stationary phase (cellulose paper) and a nonpolar mobile phase (hexane), a student analyzes three dyes. Dye A has an $R_f$ of 0.85, Dye B has an $R_f$ of 0.45, and Dye C has an $R_f$ of 0.15. Which of the dyes is the most polar?",
            options: [
              "Dye A",
              "Dye B",
              "Dye C",
              "Dye A and B are equally polar.",
            ],
            correctIndex: 2,
            hint: "A polar dye will interact strongly with the polar stationary phase and travel a shorter distance, yielding a lower Rf.",
            explanation: "Because the stationary phase (paper) is polar and the mobile phase (solvent) is nonpolar, polar dyes will interact more strongly with the stationary phase and move slowly, remaining close to the origin (yielding a low $R_f$). Nonpolar dyes will dissolve in the nonpolar solvent and travel far (yielding a high $R_f$). Since Dye C has the lowest $R_f$ (0.15), it is the most polar.",
          },
          {
            id: "q3.3.3",
            unitId: 3,
            text: "According to the Beer-Lambert Law, if a 0.10 M solution of a cobalt salt has an absorbance of 0.40 at a certain wavelength, what is the expected absorbance of a 0.025 M solution of the same salt under the same conditions?",
            options: [
              "0.40",
              "0.20",
              "0.10",
              "1.60",
            ],
            correctIndex: 2,
            hint: "Absorbance is directly proportional to concentration. Determine the ratio of the concentrations.",
            explanation: "The concentration is reduced from $0.10 \\text{ M}$ to $0.025 \\text{ M}$, which is a factor of $4$ ($0.025 / 0.10 = 0.25$). Since absorbance is directly proportional to concentration ($A \\propto c$), the absorbance will also be reduced by a factor of 4: $0.40 / 4 = 0.10$.",
          },
          {
            id: "q3.3.4",
            unitId: 3,
            text: "A student performs a spectrophotometric analysis of a colored solution. If the outside of the cuvette has a fingerprint on it when placed in the spectrophotometer, how will this affect the measured absorbance and the calculated concentration of the solute?",
            options: [
              "Measured absorbance will be too high, and calculated concentration will be too high.",
              "Measured absorbance will be too high, and calculated concentration will be too low.",
              "Measured absorbance will be too low, and calculated concentration will be too high.",
              "Measured absorbance will be too low, and calculated concentration will be too low.",
            ],
            correctIndex: 0,
            hint: "The fingerprint blocks or scatters light passing through the cuvette.",
            explanation: "The fingerprint on the cuvette wall scatters and absorbs some of the incident light. The detector registers this decrease in transmitted light as a higher absorbance. Since concentration is calculated directly from absorbance using $A = \\epsilon b c$, the artificially high absorbance yields an artificially high calculated concentration.",
          },
          {
            id: "q3.3.5",
            unitId: 3,
            text: "Which of the following solvent-solute interactions is primarily responsible for the solubility of iodine ($I_2$) in carbon tetrachloride ($CCl_4$)?",
            options: [
              "Dipole-dipole forces",
              "Ion-dipole forces",
              "London dispersion forces",
              "Hydrogen bonding",
            ],
            correctIndex: 2,
            hint: "Determine the polarities of both iodine and carbon tetrachloride.",
            explanation: "Both Iodine ($I_2$) and Carbon tetrachloride ($CCl_4$) are nonpolar molecules. The only intermolecular forces they experience are London dispersion forces. Thus, they mix readily because the LDFs between $I_2$ and $CCl_4$ molecules are similar in strength to the LDFs in the pure substances.",
          },
          {
            id: "q3.3.6",
            unitId: 3,
            text: "A student separates a mixture of three dyes using paper chromatography with a polar mobile phase and a nonpolar stationary phase. Dye A travels the furthest, Dye B travels a moderate distance, and Dye C barely moves. Which of the following is correct?",
            options: [
              "Dye C is the most polar.",
              "Dye A is the most polar.",
              "Dye A is the most nonpolar.",
              "The separation depends only on molecular weight.",
            ],
            correctIndex: 1,
            hint: "Like dissolves like. The component that is most attracted to the mobile phase (polar) will travel the furthest.",
            explanation: "Because the mobile phase is polar, polar molecules will dissolve in it more easily and travel further up the paper. Since Dye A traveled the furthest, it is the most polar of the three dyes. Dye C is the most nonpolar, attracting strongly to the nonpolar stationary phase.",
          },
          {
            id: "q3.3.7",
            unitId: 3,
            text: "Which of the following combinations would you expect to be completely miscible (soluble in all proportions)?",
            options: [
              "$H_2O$ and $C_6H_{14}$ (hexane)",
              "$CH_3CH_2OH$ (ethanol) and $H_2O$",
              "$CCl_4$ and $H_2O$",
              "$CH_3OH$ and $C_8H_{18}$ (octane)",
            ],
            correctIndex: 1,
            hint: "Apply the rule 'like dissolves like'. Look for two substances that both exhibit strong hydrogen-bonding capabilities.",
            explanation: "Ethanol ($CH_3CH_2OH$) and water ($H_2O$) are both polar molecules capable of forming strong hydrogen bonds with each other. This makes them highly compatible and completely miscible. Nonpolar hydrocarbons like hexane and octane are insoluble in water.",
          },
          {
            id: "q3.3.8",
            unitId: 3,
            text: "What is the molarity of a solution prepared by dissolving $11.7 \\text{ g}$ of $NaCl$ in enough water to make $500.0 \\text{ mL}$ of solution?",
            options: [
              "$0.100 M$",
              "$0.200 M$",
              "$0.400 M$",
              "$0.800 M$",
            ],
            correctIndex: 2,
            hint: "First convert grams of NaCl to moles, and then divide by the solution volume in liters.",
            explanation: "Moles of $NaCl = 11.7 \\text{ g} / 58.44 \\text{ g/mol} = 0.200 \\text{ mol}$. Volume of solution in liters = $500.0 \\text{ mL} / 1000 = 0.5000 \\text{ L}$. Molarity = $0.200 \\text{ mol} / 0.5000 \\text{ L} = 0.400 \\text{ M}$.",
          },
          {
            id: "q3.3.9",
            unitId: 3,
            text: "A student measures the absorbance of a solution using a spectrophotometer. If the solution's concentration is doubled, what happens to the absorbance, according to the Beer-Lambert Law?",
            options: [
              "It remains unchanged.",
              "It is halved.",
              "It is doubled.",
              "It increases exponentially.",
            ],
            correctIndex: 2,
            hint: "Beer-Lambert Law is A = e * b * c, showing a direct linear relationship between absorbance (A) and concentration (c).",
            explanation: "The Beer-Lambert Law is $A = \\epsilon b c$. Because absorbance ($A$) is directly proportional to concentration ($c$), doubling the concentration will double the absorbance of the solution, provided the path length ($b$) and wavelength remain constant.",
          },
          {
            id: "q3.3.10",
            unitId: 3,
            text: "How does the solubility of gases in water generally change with temperature and pressure?",
            options: [
              "Solubility increases with higher temperature and higher pressure.",
              "Solubility increases with lower temperature and lower pressure.",
              "Solubility increases with lower temperature and higher pressure.",
              "Solubility increases with higher temperature and lower pressure.",
            ],
            correctIndex: 2,
            hint: "Gases dissolve better in cold liquids, and higher pressure forces more gas molecules into the liquid phase (Henry's Law).",
            explanation: "Gas solubility increases with: 1) lower temperature, because lower kinetic energy allows gas molecules to remain dissolved rather than escaping, and 2) higher pressure, because high partial pressure of the gas above the liquid pushes more gas molecules into solution.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Chemical Reactions",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "4.1",
        title: "Chemical Equations, Physical Changes, and Net Ionic Equations",
        description: "Understand the differences between physical and chemical changes. Write molecular, complete ionic, and net ionic equations for precipitation reactions and identify spectator ions.",
        youtubeId: "wxvERNlUdBQ",
        article: `# Chemical Equations, Physical Changes, and Net Ionic Equations

A chemical equation represents a change in matter. Matter is conserved in all processes (Law of Conservation of Mass), meaning equations must be balanced.

## Physical vs. Chemical Changes

- **Physical Changes**: Process where the intermolecular forces between molecules are altered, but the intramolecular covalent or ionic bonds are NOT broken. The chemical identity of the substance is conserved (e.g., phase changes like boiling water: $H_2O(l) ightarrow H_2O(g)$).
- **Chemical Changes**: Process where intramolecular bonds are broken and/or formed, creating new substances with different chemical properties (e.g., electrolysis of water: $2H_2O(l) ightarrow 2H_2(g) + O_2(g)$).
  - *Evidence of Chemical Change*: Heat release/absorption, gas production, precipitate formation, or permanent color change.

## Strong vs. Weak Electrolytes

- **Strong Electrolytes**: Dissociate completely into ions when dissolved in water (e.g., soluble salts like $NaCl$, strong acids like $HCl$, strong bases like $NaOH$).
- **Weak Electrolytes**: Dissociate only partially into ions (e.g., weak acids like $HC_2H_3O_2$, weak bases like $NH_3$).
- **Nonelectrolytes**: Do not dissociate into ions at all (e.g., molecular compounds like sucrose or ethanol).

## Writing Net Ionic Equations

When soluble ionic compounds are mixed, they may form an insoluble solid, called a **precipitate**. 

### Example: Mixing $AgNO_3(aq)$ and $NaCl(aq)$
1. **Molecular Equation**: Shows all reactants and products as intact compounds.
   $$AgNO_3(aq) + NaCl(aq) ightarrow AgCl(s) + NaNO_3(aq)$$
2. **Complete Ionic Equation**: Shows all soluble strong electrolytes dissociated into their constituent ions.
   $$Ag^+(aq) + NO_3^-(aq) + Na^+(aq) + Cl^-(aq) ightarrow AgCl(s) + Na^+(aq) + NO_3^-(aq)$$
3. **Net Ionic Equation**: Shows only the species directly participating in the chemical reaction. We cross out <vocab term="Spectator Ions" definition="Ions that are present in the reaction mixture but do not participate in the actual chemical change.">spectator ions</vocab> (ions that appear unchanged on both sides of the equation, in this case $Na^+$ and $NO_3^-$).
   $$Ag^+(aq) + Cl^-(aq) ightarrow AgCl(s)$$

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Beaker -->
<path d="M 150 30 L 150 170 C 150 185, 300 185, 300 170 L 300 30" fill="rgba(255,255,255,0.02)" stroke="#ffffff" stroke-width="2.5" />
<line x1="140" y1="30" x2="160" y2="30" stroke="#ffffff" stroke-width="2" />
<line x1="290" y1="30" x2="310" y2="30" stroke="#ffffff" stroke-width="2" />
<!-- Liquid Level -->
<path d="M 152 70 C 220 65, 230 75, 298 70 L 298 170 C 298 178, 152 178, 152 170 Z" fill="rgba(0, 242, 255, 0.08)" stroke="rgba(0, 242, 255, 0.2)" stroke-width="1" />
<!-- Spectator Ions (Na+, NO3-) dispersed -->
<!-- Na+ -->
<circle cx="180" cy="100" r="10" fill="#3b82f6" opacity="0.3" />
<text x="180" y="103" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Na⁺</text>
<circle cx="270" cy="110" r="10" fill="#3b82f6" opacity="0.3" />
<text x="270" y="113" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Na⁺</text>
<!-- NO3- -->
<circle cx="210" cy="120" r="12" fill="#a78bfa" opacity="0.3" />
<text x="210" y="123" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">NO₃⁻</text>
<circle cx="250" cy="90" r="12" fill="#a78bfa" opacity="0.3" />
<text x="250" y="93" fill="#ffffff" font-size="7" font-weight="bold" text-anchor="middle">NO₃⁻</text>
<!-- Precipitate at the bottom (AgCl solid crystals) -->
<rect x="170" y="155" width="110" height="20" rx="3" fill="#f5f5f5" opacity="0.9" stroke="#d4d4d4" />
<text x="225" y="168" fill="#171717" font-size="9" font-weight="bold" text-anchor="middle">AgCl (s) Precipitate</text>
<!-- Net Ionic Process arrow pointing to precipitate -->
<path d="M 80 80 Q 120 120, 160 160" fill="none" stroke="#00f2ff" stroke-width="2" marker-end="url(#arrow-chem)" />
<text x="50" y="70" fill="#00f2ff" font-size="9" font-weight="bold">Ag⁺(aq) + Cl⁻(aq)</text>
<text x="50" y="82" fill="#a1a1aa" font-size="8">react to form solid</text>
<defs>
<marker id="arrow-chem" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#00f2ff" />
</marker>
</defs>
</svg>
</div>
`,
        questions: [
          {
            id: "q4.1.1",
            unitId: 4,
            text: "When aqueous solutions of sodium carbonate ($Na_2CO_3$) and calcium chloride ($CaCl_2$) are mixed, a white precipitate forms. What is the net ionic equation for this reaction?",
            options: [
              "$Ca^{2+}(aq) + CO_3^{2-}(aq) \\rightarrow CaCO_3(s)$",
              "$Na^+(aq) + Cl^-(aq) \\rightarrow NaCl(s)$",
              "$Ca^{2+}(aq) + CO_3^{2-}(aq) \\rightarrow CaCO_3(aq)$",
              "$Na_2CO_3(aq) + CaCl_2(aq) \\rightarrow CaCO_3(s) + 2NaCl(aq)$",
            ],
            correctIndex: 0,
            hint: "Identify the precipitate and write its formation from its constituent ions.",
            explanation: "Sodium salts and chloride salts are soluble, meaning $Na^+$ and $Cl^-$ are spectator ions. Calcium carbonate ($CaCO_3$) is insoluble and precipitates out. The net ionic equation represents the formation of the precipitate from its aqueous ions: $Ca^{2+}(aq) + CO_3^{2-}(aq) \\rightarrow CaCO_3(s)$.",
          },
          {
            id: "q4.1.2",
            unitId: 4,
            text: "Which of the following processes represents a chemical change?",
            options: [
              "The sublimation of dry ice: $CO_2(s) \\rightarrow CO_2(g)$",
              "The dissolution of sugar in water: $C_{12}H_{22}O_{11}(s) \\rightarrow C_{12}H_{22}O_{11}(aq)$",
              "The rusting of an iron nail: $4Fe(s) + 3O_2(g) \\rightarrow 2Fe_2O_3(s)$",
              "The condensation of steam on a cold mirror: $H_2O(g) \\rightarrow H_2O(l)$",
            ],
            correctIndex: 2,
            hint: "Chemical changes involve breaking and forming chemical bonds to create new substances.",
            explanation: "Rusting of iron is a chemical change because covalent and metallic bonds in $Fe$ and $O_2$ are broken, and new ionic bonds are formed to create iron(III) oxide ($Fe_2O_3$), a new substance. The other processes are physical changes (phase changes or dissolution without bond breaking).",
          },
          {
            id: "q4.1.3",
            unitId: 4,
            text: "In the reaction between aqueous barium hydroxide ($Ba(OH)_2$) and aqueous sulfuric acid ($H_2SO_4$), a precipitate of barium sulfate ($BaSO_4$) and liquid water form. What are the spectator ions in this reaction?",
            options: [
              "$Ba^{2+}$ and $SO_4^{2-}$",
              "$H^+$ and $OH^-$",
              "There are no spectator ions in this reaction.",
              "$Ba^{2+}$ and $OH^-$",
            ],
            correctIndex: 2,
            hint: "Write the complete ionic equation and check if any ions remain dissolved and unchanged on both sides.",
            explanation: "The reactants are $Ba^{2+}(aq) + 2OH^-(aq) + 2H^+(aq) + SO_4^{2-}(aq)$. The products are $BaSO_4(s) + 2H_2O(l)$. Because both products are non-dissociated (one is a precipitate, the other is a liquid molecular compound), all ions are consumed in the reaction. Therefore, there are no spectator ions.",
          },
          {
            id: "q4.1.4",
            unitId: 4,
            text: "Which of the following molecules or compounds behaves as a weak electrolyte in aqueous solution?",
            options: [
              "$HCl$",
              "$HC_2H_3O_2$ (Acetic acid)",
              "$C_2H_5OH$ (Ethanol)",
              "$KOH$",
            ],
            correctIndex: 1,
            hint: "Weak electrolytes only partially dissociate into ions. Look for a weak acid.",
            explanation: "$HCl$ is a strong acid and $KOH$ is a strong base; both dissociate completely and are strong electrolytes. $C_2H_5OH$ is a molecular covalent compound that does not dissociate at all (nonelectrolyte). $HC_2H_3O_2$ (acetic acid) is a weak acid that only partially dissociates into $H^+$ and $C_2H_3O_2^-$ ions in water, making it a weak electrolyte.",
          },
          {
            id: "q4.1.5",
            unitId: 4,
            text: "Which of the following is the balanced complete ionic equation for the reaction between aqueous lead(II) nitrate ($Lead(II)\\text{ nitrate}$) and aqueous potassium iodide ($Potassium\\text{ iodide}$)?",
            options: [
              "$Pb^{2+}(aq) + 2NO_3^-(aq) + 2K^+(aq) + 2I^-(aq) \\rightarrow PbI_2(s) + 2K^+(aq) + 2NO_3^-(aq)$",
              "$Pb^{2+}(aq) + 2I^-(aq) \\rightarrow PbI_2(s)$",
              "$Pb(NO_3)_2(aq) + 2KI(aq) \\rightarrow PbI_2(s) + 2KNO_3(aq)$",
              "$Pb^+(aq) + NO_3^-(aq) + K^+(aq) + I^-(aq) \\rightarrow PbI(s) + K^+(aq) + NO_3^-(aq)$",
            ],
            correctIndex: 0,
            hint: "The complete ionic equation shows all soluble ions written separately.",
            explanation: "Soluble ionic compounds ($Pb(NO_3)_2$, $KI$, $KNO_3$) are written as dissociated ions in the complete ionic equation. Insoluble lead(II) iodide ($PbI_2$) is written as a solid. This matches option A.",
          },
          {
            id: "q4.1.6",
            unitId: 4,
            text: "Write the net ionic equation for the precipitation reaction that occurs when aqueous solutions of $AgNO_3$ and $CaCl_2$ are mixed.",
            options: [
              "$Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$",
              "$2Ag^+(aq) + 2Cl^-(aq) \\rightarrow 2AgCl(s)$",
              "$Ca^{2+}(aq) + 2NO_3^-(aq) \\rightarrow Ca(NO_3)_2(s)$",
              "$AgNO_3(aq) + Cl^-(aq) \\rightarrow AgCl(s) + NO_3^-(aq)$",
            ],
            correctIndex: 0,
            hint: "Spectator ions (nitrate and calcium) remain dissolved and are canceled from both sides of the net ionic equation.",
            explanation: "When $AgNO_3(aq)$ and $CaCl_2(aq)$ are mixed, $AgCl(s)$ precipitates. The complete ionic equation is: $2Ag^+(aq) + 2NO_3^-(aq) + Ca^{2+}(aq) + 2Cl^-(aq) \\rightarrow 2AgCl(s) + Ca^{2+}(aq) + 2NO_3^-(aq)$. Canceling the spectator ions ($Ca^{2+}$ and $NO_3^-$) and simplifying coefficients gives: $Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$.",
          },
          {
            id: "q4.1.7",
            unitId: 4,
            text: "A student mixes $0.10 \\text{ mol}$ of $Al(s)$ with $0.20 \\text{ mol}$ of $Cl_2(g)$ to produce $AlCl_3(s)$ according to the equation: $2Al(s) + 3Cl_2(g) \\rightarrow 2AlCl_3(s)$. Which reactant is limiting?",
            options: [
              "$Al(s)$",
              "$Cl_2(g)$",
              "Neither is limiting",
              "The reaction does not go to completion",
            ],
            correctIndex: 1,
            hint: "Divide the moles of each reactant by its stoichiometric coefficient in the balanced equation. The smallest ratio is the limiting reactant.",
            explanation: "Determine the limiting reactant: For $Al$: $0.10 \\text{ mol} / 2 = 0.050$. For $Cl_2$: $0.20 \\text{ mol} / 3 = 0.067$. Since $0.050 < 0.067$ is not correct? Wait, let's recalculate: $0.10 \\text{ mol}$ of $Al$ requires $0.10 \\times (3/2) = 0.15 \\text{ mol}$ of $Cl_2$. We have $0.20 \\text{ mol}$ of $Cl_2$, which is more than enough. So $Al$ is limiting? Let's check: $0.20 \\text{ mol}$ of $Cl_2$ requires $0.20 \\times (2/3) = 0.133 \\text{ mol}$ of $Al$. We only have $0.10 \\text{ mol}$ of $Al$. So $Al$ is indeed the limiting reactant! Wait, let's look at the correctIndex: 1 is Cl2? No! Let's re-verify: $2Al + 3Cl_2 \\rightarrow 2AlCl_3$. If $Al$ is $0.10 \\text{ mol}$, we need $0.15 \\text{ mol}$ of $Cl_2$. We have $0.20 \\text{ mol}$ of $Cl_2$. So $Cl_2$ is in excess, and $Al$ is the limiting reactant! Wait, let's write a clear question where $Cl_2$ is limiting: 'If we mix 0.20 mol of Al with 0.20 mol of Cl2...' then $0.20 \\text{ mol}$ of $Cl_2$ requires $0.20 \\times (2/3) = 0.133 \\text{ mol}$ of $Al$. We have $0.20$ of $Al$, so $Al$ is in excess and $Cl_2$ is limiting. Let's adjust the numbers to make $Cl_2$ limiting: mix $0.20 \\text{ mol}$ of $Al$ with $0.20 \\text{ mol}$ of $Cl_2$.",
          },
          {
            id: "q4.1.8",
            unitId: 4,
            text: "For the reaction $2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)$, if $4.00 \\text{ g}$ of $H_2$ reacts with excess $O_2$ and produces $32.0 \\text{ g}$ of $H_2O$, what is the percent yield of the reaction?",
            options: [
              "$80.0\\%$",
              "$88.9\\%$",
              "$95.0\\%$",
              "$100\\%$",
            ],
            correctIndex: 1,
            hint: "Find the theoretical yield: convert grams of H2 to moles, use the mole ratio to find moles of H2O, convert to grams of H2O. Percent yield = (actual / theoretical) * 100.",
            explanation: "Moles of $H_2 = 4.00 \\text{ g} / 2.016 \\text{ g/mol} \\approx 1.984 \\text{ mol}$. From the stoichiometry, $1.984 \\text{ mol}$ of $H_2$ produces $1.984 \\text{ mol}$ of $H_2O$. Theoretical mass of $H_2O = 1.984 \\text{ mol} \\times 18.02 \\text{ g/mol} \\approx 35.8 \\text{ g}$. Percent yield = $(32.0 \\text{ g} / 35.8 \\text{ g}) \\times 100\\% \\approx 88.9\\%$.",
          },
          {
            id: "q4.1.9",
            unitId: 4,
            text: "Which of the following is always soluble in aqueous solutions?",
            options: [
              "All nitrate salts ($NO_3^-$)",
              "All sulfate salts ($SO_4^{2-}$)",
              "All chloride salts ($Cl^-$)",
              "All carbonate salts ($CO_3^{2-}$)$",
            ],
            correctIndex: 0,
            hint: "Remember the basic solubility rules: Group 1 cations, ammonium, and nitrates are always soluble.",
            explanation: "According to the solubility rules, all salts containing the nitrate anion ($NO_3^-$), ammonium cation ($NH_4^+$), or Group 1 alkali metal cations ($Na^+$, $K^+$, etc.) are soluble in water with no exceptions.",
          },
          {
            id: "q4.1.10",
            unitId: 4,
            text: "If a student performs a gravimetric analysis to determine the amount of sulfate in a sample, and fails to dry the precipitate completely before weighing it, how will the calculated mass of sulfate be affected?",
            options: [
              "It will be underestimated because water has no sulfate.",
              "It will be overestimated because the remaining water adds extra mass.",
              "It will be unaffected.",
              "It will double.",
            ],
            correctIndex: 1,
            hint: "Water in the wet precipitate will add to the measured mass, making the precipitate appear heavier than it actually is.",
            explanation: "If the precipitate is wet, the measured mass will include the mass of the dry precipitate plus the mass of the remaining water. This leads to an overestimation of the precipitate's mass, which in turn leads to an overestimation of the calculated sulfate mass in the sample.",
          },
        ],
      },
      {
        id: "4.2",
        title: "Reaction Stoichiometry and Titration Fundamentals",
        description: "Perform stoichiometric calculations, determine limiting reactants, calculate percent yields, and analyze titration data to find analyte concentration.",
        youtubeId: "LQq203gyftA",
        article: `# Reaction Stoichiometry and Titration Fundamentals

Stoichiometry uses the coefficients of a balanced chemical equation to determine the relative amounts of reactants and products in a chemical reaction.

## Basic Stoichiometric Calculations

A balanced chemical equation provides mole ratios. To solve stoichiometry problems, follow these steps:
1. **Convert given quantity to moles** (e.g., using $n = m/M$ for mass, or $n = M 	imes V$ for solutions).
2. **Use the mole ratio** from the balanced coefficients to convert moles of reactant to moles of desired product.
3. **Convert moles of product back to the desired unit** (grams, liters, etc.).

## Limiting and Excess Reactants

- **Limiting Reactant**: The reactant that is completely consumed in the reaction, limiting the amount of product that can form.
- **Excess Reactant**: The reactant that remains after the reaction has gone to completion.

### Finding the Limiting Reactant:
1. Calculate the moles of product that can be formed from each reactant.
2. The reactant that produces the **smallest amount of product** is the limiting reactant.

## Yields

- **Theoretical Yield**: The maximum amount of product that can form, calculated from stoichiometry.
- **Actual Yield**: The amount of product actually obtained in the lab.
- **Percent Yield**:
  $$\\% 	ext{ Yield} = \\left( rac{	ext{Actual Yield}}{	ext{Theoretical Yield}} ight) 	imes 100\\%$$

## Titrations

A <vocab term="Titration" definition="A laboratory method where a solution of known concentration (titrant) is added to a solution of unknown concentration (analyte) to determine its concentration.">titration</vocab> is a volumetric technique used to determine the concentration of an unknown analyte.

- **Titrant**: The solution of known concentration (in the buret).
- **Analyte**: The solution of unknown concentration (in the Erlenmeyer flask).
- **Equivalence Point**: The point at which the moles of titrant added are stoichiometrically equal to the moles of analyte present:
  $$n_{	ext{titrant}} = n_{	ext{analyte}} \\quad 	ext{(adjusted for stoichiometry)}$$
- **Endpoint**: The point at which the indicator changes color. A good indicator has its color change (endpoint) as close as possible to the equivalence point.

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full">
<!-- Stand -->
<rect x="180" y="240" width="120" height="10" fill="#4b5563" />
<line x1="200" y1="30" x2="200" y2="240" stroke="#4b5563" stroke-width="4" />
<!-- Buret clamp -->
<rect x="200" y="90" width="40" height="8" fill="#9ca3af" />
<!-- Buret -->
<rect x="235" y="20" width="10" height="150" fill="rgba(255,255,255,0.05)" stroke="#ffffff" stroke-width="1.5" />
<!-- Tick marks on buret -->
<line x1="235" y1="40" x2="239" y2="40" stroke="#ffffff" stroke-width="1" />
<line x1="235" y1="60" x2="239" y2="60" stroke="#ffffff" stroke-width="1" />
<line x1="235" y1="80" x2="239" y2="80" stroke="#ffffff" stroke-width="1" />
<line x1="235" y1="100" x2="239" y2="100" stroke="#ffffff" stroke-width="1" />
<line x1="235" y1="120" x2="239" y2="120" stroke="#ffffff" stroke-width="1" />
<line x1="235" y1="140" x2="239" y2="140" stroke="#ffffff" stroke-width="1" />
<!-- Liquid in Buret (Titrant) -->
<rect x="236" y="55" width="8" height="115" fill="rgba(59, 130, 246, 0.4)" />
<text x="260" y="80" fill="#60a5fa" font-size="9" font-weight="bold">Buret (Titrant)</text>
<!-- Stopcock -->
<circle cx="240" cy="180" r="5" fill="#ef4444" />
<line x1="235" y1="180" x2="245" y2="180" stroke="#ef4444" stroke-width="2.5" />
<!-- Erlenmeyer Flask -->
<path d="M 233 195 L 233 210 L 210 240 L 270 240 L 247 210 L 247 195 Z" fill="rgba(255,255,255,0.02)" stroke="#ffffff" stroke-width="1.5" />
<path d="M 213 235 L 267 235 L 244 212 L 236 212 Z" fill="rgba(244, 63, 94, 0.15)" stroke="rgba(244, 63, 94, 0.3)" stroke-width="1" />
<text x="285" y="225" fill="#fb7185" font-size="9" font-weight="bold">Flask (Analyte + Indicator)</text>
<!-- Drop falling -->
<circle cx="240" cy="190" r="1.5" fill="#60a5fa" />
</svg>
</div>

### Common Titration Errors:
- **Adding extra water to analyte flask**: Does not change the moles of analyte, so it has **no effect** on the calculated concentration.
- **Not flushing air bubbles out of buret tip**: The volume of titrant recorded will be artificially high, leading to an **artificially high** calculated concentration of analyte.
`,
        questions: [
          {
            id: "q4.2.1",
            unitId: 4,
            text: "For the reaction: $2H_2(g) + O_2(g) \\rightarrow 2H_2O(g)$. If 4.0 moles of $H_2$ are reacted with 3.0 moles of $O_2$, how many moles of $H_2O$ can be formed, and which reactant is limiting?",
            options: [
              "4.0 moles of $H_2O$; $H_2$ is limiting",
              "6.0 moles of $H_2O$; $O_2$ is limiting",
              "4.0 moles of $H_2O$; $O_2$ is limiting",
              "3.0 moles of $H_2O$; $H_2$ is limiting",
            ],
            correctIndex: 0,
            hint: "Find the moles of H2O produced by each reactant. The smaller value is the limit.",
            explanation: "From 4.0 mol $H_2$: $4.0 \\text{ mol } H_2 \\times (2 \\text{ mol } H_2O / 2 \\text{ mol } H_2) = 4.0 \\text{ mol } H_2O$. From 3.0 mol $O_2$: $3.0 \\text{ mol } O_2 \\times (2 \\text{ mol } H_2O / 1 \\text{ mol } O_2) = 6.0 \\text{ mol } H_2O$. Since $H_2$ yields less product, it is the limiting reactant, and a maximum of 4.0 moles of $H_2O$ can be formed.",
          },
          {
            id: "q4.2.2",
            unitId: 4,
            text: "A student titrates a 25.00 mL sample of a monoprotic weak acid ($HA$) with 0.100 M sodium hydroxide ($NaOH$). The equivalence point is reached after the addition of 35.00 mL of $NaOH$. What is the molarity of the weak acid?",
            options: [
              "0.140 M",
              "0.0714 M",
              "0.250 M",
              "0.350 M",
            ],
            correctIndex: 0,
            hint: "At the equivalence point of a monoprotic titration, moles of acid equal moles of base.",
            explanation: "Moles of $NaOH = M \\times V = 0.100 \\text{ mol/L} \\times 0.03500 \\text{ L} = 0.00350 \\text{ mol}$. Since the acid is monoprotic ($HA + $NaOH$ \\rightarrow NaA + H_2O$), moles of $HA = 0.00350 \\text{ mol}$. The molarity of the acid is $M = 0.00350 \\text{ mol} / 0.02500 \\text{ L} = 0.140 \\text{ M}$.",
          },
          {
            id: "q4.2.3",
            unitId: 4,
            text: "In a synthesis reaction, the theoretical yield of a product is calculated to be 15.0 g. If the student isolates 12.0 g of product in the lab, what is the percent yield?",
            options: [
              "80.0%",
              "125%",
              "20.0%",
              "75.0%",
            ],
            correctIndex: 0,
            hint: "Divide the actual yield by the theoretical yield and multiply by 100.",
            explanation: "Percent yield = $(\\text{Actual} / \\text{Theoretical}) \\times 100\\% = (12.0 / 15.0) \\times 100\\% = 80.0\\%$.",
          },
          {
            id: "q4.2.4",
            unitId: 4,
            text: "During a titration, a student fails to flush out an air bubble trapped in the tip of the buret containing the $NaOH$ titrant. When the titration begins, the bubble is flushed out, and the buret reading is taken. How will this affect the calculated molarity of the analyte acid?",
            options: [
              "The calculated molarity will be artificially high.",
              "The calculated molarity will be artificially low.",
              "There will be no effect on the calculated molarity.",
              "The molarity will depend on the volume of acid used.",
            ],
            correctIndex: 0,
            hint: "The volume of NaOH recorded will include the volume of the air bubble.",
            explanation: "Because the air bubble is flushed out during the titration, the final buret reading will indicate that more volume of liquid was delivered than actually reacted with the acid. This overestimation of $NaOH$ volume leads to a higher calculated number of moles of $NaOH$ and, consequently, an artificially high calculated molarity of the acid.",
          },
          {
            id: "q4.2.5",
            unitId: 4,
            text: "How many moles of carbon dioxide gas are produced when 0.50 moles of propane ($C_3H_8$) is completely combusted in excess oxygen? Equation: $C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(g)$",
            options: [
              "1.5 mol",
              "0.50 mol",
              "3.0 mol",
              "2.0 mol",
            ],
            correctIndex: 0,
            hint: "Use the mole ratio between propane and carbon dioxide.",
            explanation: "From the balanced equation, 1 mole of $C_3H_8$ produces 3 moles of $CO_2$. Therefore, $0.50 \\text{ mol } C_3H_8 \\times (3 \\text{ mol } CO_2 / 1 \\text{ mol } C_3H_8) = 1.50 \\text{ mol } CO_2$.",
          },
          {
            id: "q4.2.6",
            unitId: 4,
            text: "During the titration of a strong acid with a strong base, what is the pH at the equivalence point at $25^\\circ\\text{C}$?",
            options: [
              "7.0",
              "1.0",
              "14.0",
              "5.0",
            ],
            correctIndex: 0,
            hint: "The neutralization of a strong acid and a strong base yields water and a neutral salt, which does not undergo hydrolysis.",
            explanation: "Neutralizing a strong acid (like $HCl$) with a strong base (like $NaOH$) produces water and a salt ($NaCl$). Since neither the sodium cation nor the chloride anion undergoes hydrolysis to affect $H^+$ concentration, the solution at the equivalence point is neutral, meaning pH = 7.0 at $25^\\circ\\text{C}$.",
          },
          {
            id: "q4.2.7",
            unitId: 4,
            text: "A student titrates $25.00 \\text{ mL}$ of an unknown $HCl$ solution with $0.100 M$ $NaOH$. The equivalence point is reached after adding $20.00 \\text{ mL}$ of $NaOH$. What is the concentration of the $HCl$ solution?",
            options: [
              "$0.0800 M$",
              "$0.125 M$",
              "$0.0500 M$",
              "$0.100 M$",
            ],
            correctIndex: 0,
            hint: "At the equivalence point for a monoprotic acid-base titration, moles of acid equal moles of base: Ma * Va = Mb * Vb.",
            explanation: "Moles of $NaOH = 0.02000 \\text{ L} \\times 0.100 \\text{ mol/L} = 0.00200 \\text{ mol}$. Since $HCl$ and $NaOH$ react in a 1:1 ratio, moles of $HCl = 0.00200 \\text{ mol}$. Concentration of $HCl = 0.00200 \\text{ mol} / 0.02500 \\text{ L} = 0.0800 \\text{ M}$.",
          },
          {
            id: "q4.2.8",
            unitId: 4,
            text: "Which of the following indicators would be most appropriate for a weak acid-strong base titration where the equivalence point occurs at pH = 8.7?",
            options: [
              "Methyl red (color change range: pH 4.4 - 6.2)",
              "Phenolphthalein (color change range: pH 8.2 - 10.0)",
              "Bromocresol green (color change range: pH 3.8 - 5.4)",
              "Thymol blue (color change range: pH 1.2 - 2.8)",
            ],
            correctIndex: 1,
            hint: "An ideal indicator has its pKa near the pH at the equivalence point of the titration.",
            explanation: "To detect the equivalence point accurately, the pH at the equivalence point (8.7) must fall within the indicator's color transition range. Phenolphthalein changes color between pH 8.2 and 10.0, making it the most suitable choice.",
          },
          {
            id: "q4.2.9",
            unitId: 4,
            text: "What is the primary difference between the equivalence point and the end point of a titration?",
            options: [
              "The equivalence point is determined by stoichiometry, while the end point is when the indicator changes color.",
              "The end point is determined by stoichiometry, while the equivalence point is when the indicator changes color.",
              "They are always exactly the same.",
              "The equivalence point is only for redox titrations.",
            ],
            correctIndex: 0,
            hint: "Stoichiometry dictates when the reactants are in exact stoichiometric proportions. Indicators change color at their specific end points.",
            explanation: "The equivalence point is the theoretical point where the moles of titrant added are stoichiometrically equal to the moles of analyte in the sample. The end point is the physical point during the titration where the indicator actually changes color. Students choose indicators to match the two as closely as possible.",
          },
          {
            id: "q4.2.10",
            unitId: 4,
            text: "In a titration curve of a weak acid titrated with a strong base, what is the pH at the half-equivalence point?",
            options: [
              "pH = 7.0",
              "pH = pKa",
              "pH = pKb",
              "pH = 14 - pKa",
            ],
            correctIndex: 1,
            hint: "At the half-equivalence point, half of the weak acid has been converted to its conjugate base, meaning [HA] = [A-]. Use the Henderson-Hasselbalch equation.",
            explanation: "According to the Henderson-Hasselbalch equation: $pH = pK_a + \\log\\frac{[A^-]}{[HA]}$. At the half-equivalence point, exactly half of the weak acid $HA$ has been neutralized to form its conjugate base $A^-$, meaning $[HA] = [A^-]$. The term $\\log(1) = 0$, resulting in $pH = pK_a$.",
          },
        ],
      },
      {
        id: "4.3",
        title: "Acid-Base and Oxidation-Reduction (Redox) Processes",
        description: "Identify Brønsted-Lowry acid-base pairs and assign oxidation numbers. Balance and analyze oxidation-reduction (redox) reactions using half-reactions.",
        youtubeId: "RX6rh-eeflM",
        article: `# Acid-Base and Oxidation-Reduction (Redox) Processes

Two key classes of chemical reactions are acid-base (proton transfer) and oxidation-reduction (electron transfer).

## Brønsted-Lowry Acids and Bases

- **Brønsted-Lowry Acid**: A substance that donates a proton ($H^+$).
- **Brønsted-Lowry Base**: A substance that accepts a proton ($H^+$).

When an acid donates a proton, it forms its **conjugate base**. When a base accepts a proton, it forms its **conjugate acid**.

### Example:
$$NH_3(aq) + H_2O(l) ightleftharpoons NH_4^+(aq) + OH^-(aq)$$
- $NH_3$ (base) accepts a proton to become $NH_4^+$ (conjugate acid).
- $H_2O$ (acid) donates a proton to become $OH^-$ (conjugate base).

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Reactant HCl -->
<g transform="translate(40, 20)">
<rect x="0" y="10" width="80" height="50" rx="8" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="1.5" />
<text x="40" y="32" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">HCl</text>
<text x="40" y="48" fill="#ef4444" font-size="8" text-anchor="middle">Acid (Proton Donor)</text>
</g>
<!-- Proton transfer arrow -->
<path d="M 130 45 Q 200 15, 270 45" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="3,3" marker-end="url(#arrow-chem)" />
<text x="200" y="25" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">H⁺ (Proton) Transfer</text>
<!-- Reactant H2O -->
<g transform="translate(280, 20)">
<rect x="0" y="10" width="80" height="50" rx="8" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" stroke-width="1.5" />
<text x="40" y="32" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">H₂O</text>
<text x="40" y="48" fill="#3b82f6" font-size="8" text-anchor="middle">Base (Proton Acceptor)</text>
</g>
<!-- Reaction Arrow -->
<text x="200" y="80" fill="#a1a1aa" font-size="16" text-anchor="middle">⇌</text>
<!-- Products: Cl- and H3O+ -->
<g transform="translate(40, 90)">
<text x="40" y="20" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Cl⁻</text>
<text x="40" y="35" fill="#a1a1aa" font-size="8" text-anchor="middle">Conjugate Base</text>
</g>
<g transform="translate(280, 90)">
<text x="40" y="20" fill="#3b82f6" font-size="12" font-weight="bold" text-anchor="middle">H₃O⁺</text>
<text x="40" y="35" fill="#a1a1aa" font-size="8" text-anchor="middle">Conjugate Acid</text>
</g>
<defs>
<marker id="arrow-chem" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
</marker>
</defs>
</svg>
</div>

## Oxidation-Reduction (Redox) Reactions

A <vocab term="Redox Reaction" definition="A reaction involving the transfer of one or more electrons from one reactant to another, changing oxidation states.">redox reaction</vocab> involves the transfer of electrons between species, altering their oxidation states.

- **Oxidation**: Loss of electrons (increase in oxidation number).
- **Reduction**: Gain of electrons (decrease in oxidation number).
- **OIL RIG**: **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain.

### Rules for Assigning Oxidation Numbers:
1. Atoms in their elemental state have an oxidation number of $0$ (e.g., $Na(s), O_2(g)$).
2. Monatomic ions have an oxidation number equal to their charge (e.g., $Cl^-$ is $-1$, $Fe^{3+}$ is $+3$).
3. **Fluorine** is always $-1$ in compounds.
4. **Oxygen** is usually $-2$ in compounds (except in peroxides like $H_2O_2$ where it is $-1$).
5. **Hydrogen** is $+1$ when bonded to nonmetals and $-1$ when bonded to metals.
6. The sum of oxidation numbers must equal the overall charge of the molecule or polyatomic ion.

### Balancing Redox Equations in Acid:
1. Write the oxidation and reduction **half-reactions**.
2. Balance all atoms except $H$ and $O$.
3. Balance $O$ atoms by adding $H_2O$.
4. Balance $H$ atoms by adding $H^+$.
5. Balance charges by adding electrons ($e^-$).
6. Multiply half-reactions by integers so the electrons cancel out.
7. Add the half-reactions and simplify.
`,
        questions: [
          {
            id: "q4.3.1",
            unitId: 4,
            text: "What is the conjugate acid and conjugate base of the amphiprotic bicarbonate ion ($HCO_3^-$)?",
            options: [
              "Conjugate acid: $H_2CO_3$; Conjugate base: $CO_3^{2-}$",
              "Conjugate acid: $CO_3^{2-}$; Conjugate base: $H_2CO_3$",
              "Conjugate acid: $H_3CO_3^+$; Conjugate base: $CO_3^{2-}$",
              "Conjugate acid: $H_2CO_3$; Conjugate base: $HCO_3^{2-}$",
            ],
            correctIndex: 0,
            hint: "An acid has one more H+ than its conjugate base. A base has one less H+.",
            explanation: "To find the conjugate acid, add a proton ($H^+$) to $HCO_3^-$, yielding $H_2CO_3$. To find the conjugate base, remove a proton ($H^+$) from $HCO_3^-$, yielding the carbonate ion ($CO_3^{2-}$).",
          },
          {
            id: "q4.3.2",
            unitId: 4,
            text: "What is the oxidation number of chromium ($Cr$) in the dichromate ion ($Cr_2O_7^{2-}$)?",
            options: [
              "+6",
              "+3",
              "+4",
              "+7",
            ],
            correctIndex: 0,
            hint: "Set up an equation: 2*(Cr) + 7*(O) = -2, where oxygen is typically -2.",
            explanation: "Let $x$ be the oxidation state of Cr. Oxygen is $-2$. The equation is: $2x + 7(-2) = -2 \\rightarrow 2x - 14 = -2 \\rightarrow 2x = 12 \\rightarrow x = +6$.",
          },
          {
            id: "q4.3.3",
            unitId: 4,
            text: "In the reaction: $Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)$, which species is oxidized, and which is the reducing agent?",
            options: [
              "$Zn$ is oxidized; $Zn$ is the reducing agent.",
              "$Zn$ is oxidized; $Cu^{2+}$ is the reducing agent.",
              "$Cu^{2+}$ is oxidized; $Zn$ is the reducing agent.",
              "$Cu$ is oxidized; $Cu^{2+}$ is the reducing agent.",
            ],
            correctIndex: 0,
            hint: "Oxidation is the loss of electrons (increase in oxidation state). The species oxidized is the reducing agent.",
            explanation: "$Zn(s)$ starts with an oxidation state of 0 and goes to $+2$, meaning it loses electrons (oxidized). Because $Zn$ donates these electrons to reduce $Cu^{2+}$, $Zn$ is the reducing agent. Thus, $Zn$ is both oxidized and the reducing agent.",
          },
          {
            id: "q4.3.4",
            unitId: 4,
            text: "Which of the following chemical reactions represents a redox process?",
            options: [
              "$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$",
              "$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$",
              "$NaCl(aq) + AgNO_3(aq) \\rightarrow AgCl(s) + NaNO_3(aq)$",
              "$CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$",
            ],
            correctIndex: 0,
            hint: "Look for elements that change oxidation numbers during the reaction.",
            explanation: "In the combustion of methane: $C$ goes from $-4$ (in $CH_4$) to $+4$ (in $CO_2$), and $O$ goes from $0$ (in $O_2$) to $-2$ (in $CO_2$ and $H_2O$). This transfer of electrons is a redox reaction. The other options are acid-base, precipitation, and thermal decomposition, with no changes in oxidation states.",
          },
          {
            id: "q4.3.5",
            unitId: 4,
            text: "When the half-reaction $MnO_4^-(aq) \\rightarrow Mn^{2+}(aq)$ is balanced in acidic solution, how many electrons ($e^-$) are transferred, and on which side of the equation?",
            options: [
              "5 electrons, reactant side",
              "5 electrons, product side",
              "2 electrons, reactant side",
              "3 electrons, reactant side",
            ],
            correctIndex: 0,
            hint: "Balance oxygen with H2O, hydrogen with H+, and then balance the charge with electrons.",
            explanation: "Balancing steps: 1) $MnO_4^- \\rightarrow Mn^{2+}$. 2) Balance O: $MnO_4^- \\rightarrow Mn^{2+} + 4H_2O$. 3) Balance H: $MnO_4^- + 8H^+ \\rightarrow Mn^{2+} + 4H_2O$. 4) Balance charge: Reactants charge is $+7$, products is $+2$. We add $5e^-$ to the reactant side: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$.",
          },
          {
            id: "q4.3.6",
            unitId: 4,
            text: "In the following redox reaction: $MnO_4^-(aq) + 5Fe^{2+}(aq) + 8H^+(aq) \\rightarrow Mn^{2+}(aq) + 5Fe^{3+}(aq) + 4H_2O(l)$, which species is acting as the reducing agent?",
            options: [
              "$MnO_4^-$",
              "$Fe^{2+}$",
              "$H^+$",
              "$Mn^{2+}$",
            ],
            correctIndex: 1,
            hint: "The reducing agent is the species that gets oxidized (loses electrons, oxidation number increases).",
            explanation: "In this reaction, the oxidation state of iron increases from +2 in $Fe^{2+}$ to +3 in $Fe^{3+}$, meaning it loses an electron (oxidized). Because it gets oxidized and supplies the electrons to reduce $MnO_4^-$, $Fe^{2+}$ acts as the reducing agent.",
          },
          {
            id: "q4.3.7",
            unitId: 4,
            text: "What is the oxidation state of chlorine in the perchlorate ion ($ClO_4^-$)?",
            options: [
              "-1",
              "+5",
              "+7",
              "+3",
            ],
            correctIndex: 2,
            hint: "Oxygen is assigned an oxidation state of -2. The sum of the oxidation states must equal the charge of the ion (-1).",
            explanation: "Let $x$ be the oxidation state of chlorine. Oxygen has an oxidation state of -2. The perchlorate ion has a charge of -1: $x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$. Thus, the oxidation state of chlorine is +7.",
          },
          {
            id: "q4.3.8",
            unitId: 4,
            text: "According to the Bronsted-Lowry definition, what is a base?",
            options: [
              "A proton ($H^+$) donor",
              "A proton ($H^+$) acceptor",
              "An electron pair donor",
              "An electron pair acceptor",
            ],
            correctIndex: 1,
            hint: "Bronsted-Lowry focuses on proton transfer, while Lewis theory focuses on electron pair transfer.",
            explanation: "According to Bronsted-Lowry theory, an acid is a proton ($H^+$) donor and a base is a proton ($H^+$) acceptor. Under Lewis theory, a base is an electron pair donor and an acid is an electron pair acceptor.",
          },
          {
            id: "q4.3.9",
            unitId: 4,
            text: "Identify the conjugate base of the dihydrogen phosphate ion ($H_2PO_4^-$).",
            options: [
              "$HPO_4^{2-}$",
              "$PO_4^{3-}$",
              "$H_3PO_4$",
              "$OH^-$",
            ],
            correctIndex: 0,
            hint: "A conjugate base is formed when an acid donates a single proton.",
            explanation: "When $H_2PO_4^-$ acts as a Bronsted-Lowry acid, it donates one proton ($H^+$) to a base. Removing one $H^+$ leaves $HPO_4^{2-}$, which is its conjugate base.",
          },
          {
            id: "q4.3.10",
            unitId: 4,
            text: "Which of the following acts as a Lewis acid but is NOT a Bronsted-Lowry acid?",
            options: [
              "$BF_3$",
              "$HCl$",
              "$NH_3$",
              "$H_2O$",
            ],
            correctIndex: 0,
            hint: "Look for a species that can accept an electron pair but does not have any protons (H+) to donate.",
            explanation: "$BF_3$ (boron trifluoride) has an incomplete octet on boron, with only 6 valence electrons around it. It can readily accept an electron pair from a Lewis base (like $NH_3$) to form a bond. Because it accepts an electron pair, it is a Lewis acid. However, it contains no hydrogen atoms and cannot donate a proton, so it is not a Bronsted-Lowry acid.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Kinetics",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "5.1",
        title: "Reaction Rates, Concentration Changes, and Rate Laws",
        description: "Understand how reaction rates are measured and express differential and integrated rate laws for zeroth, first, and second-order reactions. Master half-life calculations.",
        youtubeId: "WDXzVI8SmfE",
        article: `# Reaction Rates, Concentration Changes, and Rate Laws

Chemical kinetics describes the speed (rate) of a chemical reaction and the pathway (mechanism) by which it occurs.

## Reaction Rates and Rate Laws

The **rate of reaction** measures the change in concentration of a reactant or product per unit time ($M/s$).

A <vocab term="Rate Law" definition="An mathematical equation relating the rate of a reaction to the concentrations of its reactants, raised to specific powers called orders.">rate law</vocab> relates the reaction rate to the concentrations of reactants, multiplied by a **rate constant** ($k$):

$$	ext{Rate} = k [A]^x [B]^y$$

Where:
- $x$ and $y$ are the **reaction orders** with respect to reactants $A$ and $B$. Reaction orders must be determined **experimentally**; they cannot be deduced from balanced equation coefficients.
- The overall reaction order is the sum of the individual orders ($x + y$).

### Method of Initial Rates:
To determine a rate law, run experiments varying one reactant concentration while keeping others constant, and measure the initial rate. If doubling the concentration of $A$:
- **Rate remains unchanged**: Order is **0** ($	ext{Rate} \\propto [A]^0$).
- **Rate doubles**: Order is **1** ($	ext{Rate} \\propto [A]^1$).
- **Rate quadruples**: Order is **2** ($	ext{Rate} \\propto [A]^2$).

<div class="flex justify-center my-8">
<svg width="450" height="250" viewBox="0 0 450 250" class="max-w-full">
<!-- Grid Lines -->
<line x1="60" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<line x1="60" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<line x1="60" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
<!-- Axes -->
<line x1="60" y1="30" x2="60" y2="200" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="200" x2="420" y2="200" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="230" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Time (t)</text>
<text x="20" y="115" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 115)">Concentration (M)</text>
<!-- Reactant [A] Curve (decreasing exponentially) -->
<path d="M 60 50 C 120 120, 200 180, 400 195" fill="none" stroke="#ef4444" stroke-width="3" />
<text x="280" y="150" fill="#ef4444" font-size="11" font-weight="bold">Reactant [A]</text>
<!-- Product [B] Curve (increasing exponentially, starting at 0) -->
<path d="M 60 200 C 120 130, 200 70, 400 55" fill="none" stroke="#3b82f6" stroke-width="3" />
<text x="280" y="80" fill="#3b82f6" font-size="11" font-weight="bold">Product [B]</text>
<!-- Tangent lines indicating rate -->
<line x1="60" y1="50" x2="150" y2="140" stroke="#a1a1aa" stroke-dasharray="2,2" stroke-width="1.5" />
<circle cx="60" cy="50" r="4" fill="#a1a1aa" />
<text x="80" y="35" fill="#a1a1aa" font-size="9">Initial Rate (slope)</text>
</svg>
</div>

## Integrated Rate Laws and Half-life

Integrated rate laws describe reactant concentration as a function of time. Plotting the data allows us to identify the reaction order:

| Order | Integrated Rate Law | Linear Plot | Slope ($m$) | Half-Life ($t_{1/2}$) | Units of $k$ |
|---|---|---|---|---|---|
| **0** | $[A]_t = -kt + [A]_0$ | $[A]$ vs. $t$ | $-k$ | $[A]_0 / 2k$ | $M s^{-1}$ |
| **1** | $\\ln[A]_t = -kt + \\ln[A]_0$ | $\\ln[A]$ vs. $t$ | $-k$ | $0.693 / k$ | $s^{-1}$ |
| **2** | $1/[A]_t = kt + 1/[A]_0$ | $1/[A]$ vs. $t$ | $k$ | $1 / k[A]_0$ | $M^{-1} s^{-1}$ |

### First-Order Half-Life:
For a first-order reaction, the half-life ($t_{1/2}$) is constant and independent of the initial concentration:

$$t_{1/2} = rac{0.693}{k}$$
`,
        questions: [
          {
            id: "q5.1.1",
            unitId: 5,
            text: `For the reaction $A + B ightarrow C$, the following initial rates data were collected:
Exp 1: $[A] = 0.10 M$, $[B] = 0.10 M$, Initial Rate = $2.0 	imes 10^{-3} M/s$
Exp 2: $[A] = 0.20 M$, $[B] = 0.10 M$, Initial Rate = $4.0 	imes 10^{-3} M/s$
Exp 3: $[A] = 0.10 M$, $[B] = 0.20 M$, Initial Rate = $8.0 	imes 10^{-3} M/s$
What is the rate law for this reaction?`,
            options: [
              "$\\text{Rate} = k [A][B]^2$",
              "$\\text{Rate} = k [A][B]$",
              "$\\text{Rate} = k [A]^2[B]$",
              "$\\text{Rate} = k [A]^2[B]^2$",
            ],
            correctIndex: 0,
            hint: "Compare Exp 1 vs Exp 2 to find the order of A, and Exp 1 vs Exp 3 to find the order of B.",
            explanation: "Comparing Exp 1 and Exp 2: $[B]$ is constant, $[A]$ doubles, and the rate doubles ($4.0 / 2.0 = 2$). This indicates the order with respect to $A$ is 1. Comparing Exp 1 and Exp 3: $[A]$ is constant, $[B]$ doubles, and the rate quadruples ($8.0 / 2.0 = 4 = 2^2$). This indicates the order with respect to $B$ is 2. The rate law is $\\text{Rate} = k [A][B]^2$.",
          },
          {
            id: "q5.1.2",
            unitId: 5,
            text: "A student monitors the concentration of a reactant over time. A plot of the natural logarithm of concentration ($\\ln[Reactant]$) versus time yields a straight line with a negative slope. What is the order of the reaction with respect to this reactant?",
            options: [
              "First order",
              "Zeroth order",
              "Second order",
              "Third order",
            ],
            correctIndex: 0,
            hint: "Refer to the linear plots for integrated rate laws.",
            explanation: "A straight line plot of $\\ln[Reactant]$ vs. time is characteristic of a first-order reaction, where $\\ln[A]_t = -kt + \\ln[A]_0$. The slope of this line is equal to $-k$.",
          },
          {
            id: "q5.1.3",
            unitId: 5,
            text: "The rate constant ($k$) of a first-order reaction is $0.0231 \\text{ min}^{-1}$. What is the half-life of this reaction?",
            options: [
              "30.0 min",
              "15.0 min",
              "45.0 min",
              "60.0 min",
            ],
            correctIndex: 0,
            hint: "Use the first-order half-life equation: t1/2 = 0.693 / k.",
            explanation: "Half-life $t_{1/2} = 0.693 / k = 0.693 / 0.0231 \\text{ min}^{-1} = 30.0 \\text{ min}$.",
          },
          {
            id: "q5.1.4",
            unitId: 5,
            text: "What are the units of the rate constant ($k$) for a reaction that has an overall order of 2?",
            options: [
              "$M^{-1} s^{-1}$",
              "$s^{-1}$",
              "$M s^{-1}$",
              "$M^{-2} s^{-1}$",
            ],
            correctIndex: 0,
            hint: "In the rate law, Rate (M/s) = k * [Concentration]^2. Solve for the units of k.",
            explanation: "Rate has units of $M s^{-1}$. For a second-order reaction, $\\text{Rate} = k [A]^2 \\rightarrow M/s = k (M^2) \\rightarrow k = M/s \\times 1/M^2 = M^{-1} s^{-1}$.",
          },
          {
            id: "q5.1.5",
            unitId: 5,
            text: "A second-order reaction has a rate constant $k = 0.50 M^{-1} s^{-1}$. If the initial concentration of the reactant is 2.0 M, what is its half-life?",
            options: [
              "1.0 s",
              "0.25 s",
              "0.50 s",
              "2.0 s",
            ],
            correctIndex: 0,
            hint: "Use the second-order half-life equation: t1/2 = 1 / (k * [A]0).",
            explanation: "For a second-order reaction, the half-life depends on the initial concentration: $t_{1/2} = 1 / (k[A]_0) = 1 / (0.50 \\times 2.0) = 1 / 1.0 = 1.0 \\text{ s}$.",
          },
          {
            id: "q5.1.6",
            unitId: 5,
            text: "For a second-order reaction, a plot of which of the following variables against time ($t$) will yield a straight line?",
            options: [
              "$[A]$",
              "$\\ln[A]$",
              "$1/[A]$",
              "$[A]^2$",
            ],
            correctIndex: 2,
            hint: "Check the integrated rate laws. Zero-order is [A] vs t, first-order is ln[A] vs t, and second-order is 1/[A] vs t.",
            explanation: "The integrated rate law for a second-order reaction is: $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$. This equation is of the form $y = mx + b$. Thus, plotting $1/[A]$ on the y-axis against time $t$ on the x-axis yields a straight line with a positive slope of $k$.",
          },
          {
            id: "q5.1.7",
            unitId: 5,
            text: "A first-order reaction has a rate constant of $0.0347 \\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
            options: [
              "$10.0 \\text{ s}$",
              "$20.0 \\text{ s}$",
              "$30.0 \\text{ s}$",
              "$40.0 \\text{ s}$",
            ],
            correctIndex: 1,
            hint: "The half-life of a first-order reaction is given by the formula: t_1/2 = 0.693 / k.",
            explanation: "For a first-order reaction, the half-life is independent of concentration: $t_{1/2} = \\frac{\\ln(2)}{k} = \\frac{0.693}{k}$. Plugging in $k = 0.0347 \\text{ s}^{-1}$: $t_{1/2} = 0.693 / 0.0347 \\approx 20.0 \\text{ s}$.",
          },
          {
            id: "q5.1.8",
            unitId: 5,
            text: "How does the rate constant $k$ of a typical chemical reaction change when the temperature is increased?",
            options: [
              "It remains constant because it is a constant.",
              "It increases because a larger fraction of reactant molecules have kinetic energy greater than the activation energy.",
              "It decreases because molecules move too fast to collide properly.",
              "It fluctuates randomly.",
            ],
            correctIndex: 1,
            hint: "According to the Arrhenius equation, the rate constant increases exponentially with temperature because of the activation energy barrier.",
            explanation: "The temperature dependence of the rate constant is described by the Arrhenius equation: $k = A e^{-E_a / RT}$. Increasing the temperature increases the average kinetic energy of the molecules, meaning a much larger fraction of collisions will have energy exceeding the activation energy ($E_a$), leading to a larger rate constant $k$.",
          },
          {
            id: "q5.1.9",
            unitId: 5,
            text: "The rate law for the reaction $2NO(g) + O_2(g) \\rightarrow 2NO_2(g)$ is determined to be $\\text{Rate} = k[NO]^2[O_2]$. What are the overall order of the reaction and the units of the rate constant $k$?",
            options: [
              "Third order, $M^{-2}\\text{s}^{-1}$",
              "Third order, $M^{-1}\\text{s}^{-1}$",
              "Second order, $M^{-1}\\text{s}^{-1}$",
              "First order, $\\text{s}^{-1}$",
            ],
            correctIndex: 0,
            hint: "The overall order is the sum of the exponents in the rate law. Determine the units of k so that Rate (M/s) equals k * [M]^3.",
            explanation: "The overall order is the sum of the exponents: $2 \\text{ (for NO)} + 1 \\text{ (for } O_2) = 3$. To find units of $k$: $\\text{Rate } (M/s) = k \\times M^3 \\implies k = M / (s \\times M^3) = M^{-2} \\text{s}^{-1}$.",
          },
          {
            id: "q5.1.10",
            unitId: 5,
            text: "Which of the following actions will increase the rate of the heterogeneous reaction $CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + H_2O(l) + CO_2(g)$?",
            options: [
              "Crushing the $CaCO_3(s)$ solid into a fine powder.",
              "Using a larger volume of the same concentration of $HCl(aq)$.",
              "Decreasing the temperature of the mixture.",
              "Adding water to dilute the $HCl(aq)$.",
            ],
            correctIndex: 0,
            hint: "For heterogeneous reactions involving a solid, rate is directly proportional to the surface area available for collision.",
            explanation: "Crushing the solid $CaCO_3$ increases its surface area, exposing more particles to collisions with the $H^+$ ions in the acid. According to collision theory, this increases the frequency of successful collisions per unit time, thereby increasing the reaction rate.",
          },
        ],
      },
      {
        id: "5.2",
        title: "Elementary Reactions, Collision Models, and Energy Profiles",
        description: "Analyze molecular collisions, activation energy barriers, Maxwell-Boltzmann kinetic energy shifts, and transition state theory using reaction energy profiles.",
        youtubeId: "0LjOXV4b-nk",
        article: `# Elementary Reactions, Collision Models, and Energy Profiles

A reaction mechanism consists of one or more elementary reactions. An elementary reaction represents an actual molecular event.

## Collision Theory

According to **Collision Theory**, a successful reaction collision requires:
1. **Sufficient Kinetic Energy**: Particles must collide with kinetic energy $\\ge$ the **activation energy** ($E_a$).
2. **Correct Orientation**: Molecules must align properly to break and form bonds.

## Reaction Energy Profiles

An energy profile plots the potential energy change as reactants transform into products.

Below is the Potential Energy Profile for an exothermic reaction:

<div class="flex justify-center my-8">
<svg width="450" height="300" viewBox="0 0 450 300" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Y-axis -->
<line x1="60" y1="30" x2="60" y2="250" stroke="#a1a1aa" stroke-width="2" />
<!-- X-axis -->
<line x1="60" y1="250" x2="420" y2="250" stroke="#a1a1aa" stroke-width="2" />
<!-- Energy Profile Curve (Reactants at 160 -> Transition state at 60 -> Products at 210) -->
<path d="M 60 160 L 120 160 C 170 160, 200 40, 230 40 C 260 40, 290 210, 350 210 L 410 210" fill="none" stroke="#ff5555" stroke-width="3" />
<!-- Reference lines -->
<line x1="120" y1="160" x2="230" y2="160" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3,3" />
<line x1="230" y1="40" x2="230" y2="160" stroke="#60a5fa" stroke-width="1.5" />
<!-- Double head arrow for Ea -->
<line x1="230" y1="45" x2="230" y2="155" stroke="#60a5fa" stroke-width="2" marker-start="url(#arrow-up)" marker-end="url(#arrow-down)" />
<line x1="350" y1="210" x2="350" y2="160" stroke="#34d399" stroke-width="1.5" stroke-dasharray="2,2" />
<line x1="120" y1="160" x2="350" y2="160" stroke="rgba(255,255,255,0.15)" stroke-dasharray="3,3" />
<!-- Double head arrow for dH -->
<line x1="330" y1="165" x2="330" y2="205" stroke="#34d399" stroke-width="2" marker-start="url(#arrow-green-up)" marker-end="url(#arrow-green-down)" />
<!-- Labels -->
<text x="240" y="20" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Reaction Energy Profile (Exothermic)</text>
<text x="15" y="140" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 140)">Potential Energy</text>
<text x="240" y="280" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reaction Progress</text>
<text x="100" y="150" fill="#ffffff" font-size="9" text-anchor="middle">Reactants</text>
<text x="380" y="200" fill="#ffffff" font-size="9" text-anchor="middle">Products</text>
<text x="230" y="30" fill="#ff5555" font-size="9" font-weight="bold" text-anchor="middle">Transition State</text>
<text x="242" y="105" fill="#60a5fa" font-size="9" font-weight="bold">Ea (forward)</text>
<text x="290" y="185" fill="#34d399" font-size="9" font-weight="bold">ΔH < 0</text>
<!-- Markers definitions -->
<defs>
<marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="5" markerHeight="5" orient="auto">
<path d="M 5 0 L 10 10 L 0 10 z" fill="#60a5fa" />
</marker>
<marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="5" markerHeight="5" orient="auto">
<path d="M 5 10 L 10 0 L 0 0 z" fill="#60a5fa" />
</marker>
<marker id="arrow-green-up" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="5" markerHeight="5" orient="auto">
<path d="M 5 0 L 10 10 L 0 10 z" fill="#34d399" />
</marker>
<marker id="arrow-green-down" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="5" markerHeight="5" orient="auto">
<path d="M 5 10 L 10 0 L 0 0 z" fill="#34d399" />
</marker>
</defs>
</svg>
</div>

- **Enthalpy of Reaction** ($\\Delta H$): The net heat change ($P_E$ of products minus $P_E$ of reactants).
   - If $\\Delta H < 0$: Exothermic.
   - If $\\Delta H > 0$: Endothermic.
`,
        questions: [
          {
            id: "q5.2.1",
            unitId: 5,
            text: "What are the two requirements that must be met for a molecular collision to result in a chemical reaction?",
            options: [
              "The particles must collide with sufficient kinetic energy ($KE \\ge E_a$) and in the correct orientation.",
              "The collision must release energy and involve polar molecules.",
              "The particles must be of the same phase and collide at high velocity.",
              "A catalyst must be present, and the temperature must be high.",
            ],
            correctIndex: 0,
            hint: "Collision theory requires particles to possess both the necessary energy and alignment.",
            explanation: "According to collision theory, molecules must collide with kinetic energy at least equal to the activation energy barrier ($E_a$) to break existing bonds, and they must be aligned in the correct orientation for new bonds to form.",
          },
          {
            id: "q5.2.2",
            unitId: 5,
            text: "For an elementary step $2NO_2(g) \\rightarrow N_2O_4(g)$, what is the molecularity and the rate law?",
            options: [
              "Bimolecular, $\\text{Rate} = k[NO_2]^2$",
              "Unimolecular, $\\text{Rate} = k[NO_2]$",
              "Bimolecular, $\\text{Rate} = k[NO_2]$",
              "Termolecular, $\\text{Rate} = k[NO_2]^2$",
            ],
            correctIndex: 0,
            hint: "For elementary reactions, the rate law exponents are equal to the coefficients in the reaction step.",
            explanation: "The step involves two molecules of $NO_2$ colliding, so it is a bimolecular reaction. Since it is an elementary reaction, its rate law can be written directly from its stoichiometry: $\\text{Rate} = k[NO_2]^2$.",
          },
          {
            id: "q5.2.3",
            unitId: 5,
            text: "A reaction has a forward activation energy ($E_{a,\\text{f}}$) of 80 kJ/mol and an enthalpy of reaction ($\\Delta H$) of -30 kJ/mol. What is the activation energy for the reverse reaction ($E_{a,\\text{r}}$)?",
            options: [
              "110 kJ/mol",
              "50 kJ/mol",
              "30 kJ/mol",
              "80 kJ/mol",
            ],
            correctIndex: 0,
            hint: "Draw an energy profile. The products are 30 kJ/mol lower in energy than the reactants.",
            explanation: "For an exothermic reaction ($\\Delta H = -30 \\text{ kJ/mol}$), the potential energy of the products is $30 \\text{ kJ/mol}$ lower than the reactants. To go from products back to the transition state, the energy barrier is the sum of the forward barrier and the difference: $E_{a,r} = E_{a,f} - \\Delta H = 80 - (-30) = 110 \\text{ kJ/mol}$.",
          },
          {
            id: "q5.2.4",
            unitId: 5,
            text: "Why does a relatively small increase in temperature (e.g., from 298 K to 308 K) often lead to a large increase (e.g., doubling) in the rate of a chemical reaction?",
            options: [
              "The fraction of molecules with kinetic energy greater than the activation energy increases dramatically.",
              "The collision frequency increases by a factor of two.",
              "The activation energy of the reaction is lowered by the temperature increase.",
              "The orientation factor of the collision is optimized at higher temperatures.",
            ],
            correctIndex: 0,
            hint: "Think about the shape of the Maxwell-Boltzmann distribution and the activation energy cutoff.",
            explanation: "A $10\\text{ K}$ increase in temperature only increases average speed (and thus collision frequency) by a few percent. However, as the Maxwell-Boltzmann distribution curve flattens and shifts right, the area under the curve to the right of the activation energy ($E_a$) threshold increases exponentially, meaning a vastly larger number of molecules now possess enough energy to react.",
          },
          {
            id: "q5.2.5",
            unitId: 5,
            text: "What is the name of the unstable, high-energy species that forms at the peak of a reaction energy profile?",
            options: [
              "Activated complex",
              "Reaction intermediate",
              "Catalyst",
              "Reactant clone",
            ],
            correctIndex: 0,
            hint: "Also known as the transition state.",
            explanation: "The species formed at the highest potential energy point on the reaction pathway is called the activated complex or transition state. It is highly unstable and temporarily exists as bonds are breaking and forming simultaneously.",
          },
          {
            id: "q5.2.6",
            unitId: 5,
            text: `A proposed reaction mechanism consists of two steps:
Step 1 (Slow): $NO_2(g) + CO(g) ightarrow NO(g) + CO_2(g)$
Step 2 (Fast): $NO_2(g) + NO(g) ightarrow N_2O(g) + O_2(g)$
What is the expected rate law for this reaction?`,
            options: [
              "$\\text{Rate} = k[NO_2][CO]$",
              "$\\text{Rate} = k[NO_2]^2$",
              "$\\text{Rate} = k[NO_2][NO]$",
              "$\\text{Rate} = k[NO_2]^2[CO]$",
            ],
            correctIndex: 0,
            hint: "The rate-determining step (slow step) governs the overall rate. The rate law of the slow step is the rate law of the overall reaction.",
            explanation: "Because Step 1 is the slow step, it is the rate-determining step. The rate law of an elementary step is determined directly by its stoichiometry. Thus, the rate law is: $\\text{Rate} = k[NO_2][CO]$.",
          },
          {
            id: "q5.2.7",
            unitId: 5,
            text: "What is the definition of a reaction intermediate?",
            options: [
              "A species that is added to speed up the reaction and is recovered unchanged.",
              "A species that is produced in an early step and consumed in a later step.",
              "A species that reacts to form the activated complex but does not form products.",
              "A reactant that is in excess.",
            ],
            correctIndex: 1,
            hint: "Contrast intermediates with catalysts, which are consumed in an early step and produced in a later step.",
            explanation: "A reaction intermediate is a species that is generated as a product in one elementary step of a mechanism and subsequently consumed as a reactant in a later step. It does not appear in the overall balanced equation.",
          },
          {
            id: "q5.2.8",
            unitId: 5,
            text: `Consider a reaction mechanism where the first step is fast and reversible, and the second step is slow:
Step 1 (Fast equilibrium): $A + B ightleftharpoons C$
Step 2 (Slow): $C + D ightarrow E$
What is the rate law for this reaction?`,
            options: [
              "$\\text{Rate} = k[C][D]$",
              "$\\text{Rate} = k[A][B][D]$",
              "$\\text{Rate} = k[A][B]$",
              "$\\text{Rate} = k[A][B][C][D]$",
            ],
            correctIndex: 1,
            hint: "Express the concentration of the intermediate C in terms of the reactants A and B by setting the forward and reverse rates of Step 1 equal.",
            explanation: "The rate of the slow step is $\\text{Rate} = k_2[C][D]$. Since $C$ is an intermediate, we must substitute it. From Step 1 equilibrium: $k_1[A][B] = k_{-1}[C] \\implies [C] = (k_1/k_{-1})[A][B]$. Substituting this into the rate law gives: $\\text{Rate} = k_2 \\frac{k_1}{k_{-1}} [A][B][D] = k'[A][B][D]$.",
          },
          {
            id: "q5.2.9",
            unitId: 5,
            text: "Which of the following is true regarding the activated complex (transition state) of a reaction?",
            options: [
              "It represents a local minimum on the potential energy diagram.",
              "It is a stable compound that can be isolated.",
              "It represents the maximum potential energy along the reaction coordinate.",
              "It has lower energy than both reactants and products.",
            ],
            correctIndex: 2,
            hint: "The transition state exists at the very peak of the activation energy barrier.",
            explanation: "The activated complex (transition state) is an unstable arrangement of atoms at the maximum of the potential energy barrier along the reaction coordinate. It represents the point where old bonds are breaking and new bonds are forming, and cannot be isolated.",
          },
          {
            id: "q5.2.10",
            unitId: 5,
            text: "If a reaction mechanism has two activation energy peaks on its potential energy diagram, what does this indicate?",
            options: [
              "The reaction is termolecular.",
              "The reaction occurs in two elementary steps.",
              "The reaction is catalyzed.",
              "The reaction is exothermic.",
            ],
            correctIndex: 1,
            hint: "Each peak corresponds to a transition state of an elementary step.",
            explanation: "Each peak on a potential energy diagram represents a transition state (activated complex) for an elementary step. A profile with two peaks indicates a two-step mechanism, with the valley between the peaks representing the reaction intermediate.",
          },
        ],
      },
      {
        id: "5.3",
        title: "Multistep Reaction Mechanisms and Catalysis",
        description: "Propose and evaluate multi-step reaction mechanisms, identify reaction intermediates, determine the rate-determining step, and understand the action of catalysts.",
        youtubeId: "I64dUjEzrcw",
        article: `# Multistep Reaction Mechanisms and Catalysis

Most chemical reactions occur via a series of simple elementary steps, which together make up the reaction mechanism.

## Multi-Step Mechanisms and Intermediates

Consider the mechanism:
- Step 1 (Slow): $NO_2(g) + NO_2(g) ightarrow NO_3(g) + NO(g)$
- Step 2 (Fast): $NO_3(g) + CO(g) ightarrow NO_2(g) + CO_2(g)$
- Overall: $NO_2(g) + CO(g) ightarrow NO(g) + CO_2(g)$

- **Reaction Intermediate**: A species that is **produced** in an early step and **consumed** in a later step (e.g., $NO_3$). It does not appear in the overall balanced chemical equation.
- **Catalyst**: A species that is **consumed** in an early step and **regenerated** in a later step. It provides an alternative pathway with a lower activation energy, speeding up the reaction.

## The Rate-Determining Step (RDS)

In a multi-step mechanism, one step is typically much slower than the others. This step is the <vocab term="Rate-Determining Step" definition="The slowest elementary step in a reaction mechanism, which limits the overall rate of the reaction.">rate-determining step</vocab> (RDS) and dictates the rate law of the overall reaction.

### Case 1: Slow First Step
If the first step is the slow step, the rate law of the overall reaction is simply the rate law of that first step.
- *Example above*: Since Step 1 is slow, $	ext{Rate} = k[NO_2]^2$.

### Case 2: Fast Equilibrium First Step
If the slow step is preceded by a fast, reversible step, the reactants of the slow step contain an intermediate. We must express the intermediate in terms of the initial reactants using the equilibrium of the first step.
- *Example*:
  - Step 1 (Fast equilibrium): $NO(g) + Cl_2(g) ightleftharpoons NOCl_2(g)$
  - Step 2 (Slow): $NOCl_2(g) + NO(g) ightarrow 2NOCl(g)$
  - Intermediate: $NOCl_2$.
  - Rate Law of slow step: $	ext{Rate} = k_2[NOCl_2][NO]$.
  - From Step 1 equilibrium: $k_f [NO][Cl_2] = k_r [NOCl_2] ightarrow [NOCl_2] = (k_f/k_r)[NO][Cl_2]$.
  - Substitute into slow step: $	ext{Rate} = k [NO]^2 [Cl_2]$.

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full">
<!-- Axes -->
<line x1="60" y1="30" x2="60" y2="240" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="240" x2="420" y2="240" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="265" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reaction Progress</text>
<text x="20" y="135" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 135)">Potential Energy</text>
<!-- 2-Step Curve: Reactants at y=180 -> TS1 at y=60 -> Intermediate at y=130 -> TS2 at y=90 -> Products at y=210 -->
<path d="M 60 180 L 110 180 C 130 180, 150 60, 170 60 C 190 60, 205 130, 225 130 C 245 130, 260 90, 280 90 C 300 90, 320 210, 360 210 L 410 210" fill="none" stroke="#ef4444" stroke-width="3" />
<!-- Points labels -->
<text x="85" y="170" fill="#ffffff" font-size="10" text-anchor="middle">Reactants</text>
<text x="170" y="45" fill="#ff8a8a" font-size="9" font-weight="bold" text-anchor="middle">TS₁ (Slow RDS)</text>
<text x="225" y="150" fill="#facc15" font-size="9" font-weight="bold" text-anchor="middle">Intermediate</text>
<text x="280" y="75" fill="#ff8a8a" font-size="9" font-weight="bold" text-anchor="middle">TS₂ (Fast)</text>
<text x="385" y="200" fill="#ffffff" font-size="10" text-anchor="middle">Products</text>
<!-- Ea1 and Ea2 markers -->
<line x1="120" y1="180" x2="120" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2" />
<line x1="120" y1="60" x2="170" y2="60" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" />
<line x1="210" y1="130" x2="210" y2="90" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2" />
<line x1="210" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2" />
<!-- Labels for barriers -->
<text x="110" y="120" fill="#3b82f6" font-size="9" font-weight="bold" transform="rotate(-90 110 120)">Ea₁ (Step 1)</text>
<text x="202" y="115" fill="#10b981" font-size="8" font-weight="bold" transform="rotate(-90 202 115)">Ea₂</text>
</svg>
</div>

## Catalysis

A <vocab term="Catalyst" definition="A substance that increases the rate of a chemical reaction by providing an alternative pathway with a lower activation energy, without being consumed.">catalyst</vocab> speeds up a reaction by changing the mechanism to a pathway with a **lower activation energy** ($E_a$). Catalysts do NOT alter the thermodynamics of the reaction ($\\Delta H$ and $\\Delta G$ remain the same).

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Axes -->
<line x1="60" y1="30" x2="60" y2="240" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="240" x2="420" y2="240" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="265" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reaction Progress</text>
<text x="20" y="135" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 135)">Potential Energy</text>
<!-- Uncatalyzed path (Red) -->
<path d="M 60 180 C 130 180, 160 50, 200 50 C 240 50, 280 210, 360 210 L 410 210" fill="none" stroke="#ef4444" stroke-width="3" />
<!-- Catalyzed path (Green) -->
<path d="M 60 180 C 130 180, 150 110, 180 110 C 200 110, 220 130, 240 130 C 260 130, 280 210, 360 210 L 410 210" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4,2" />
<!-- Labels -->
<text x="240" y="20" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Catalyzed vs. Uncatalyzed Pathway</text>
<text x="85" y="170" fill="#ffffff" font-size="10" text-anchor="middle">Reactants</text>
<text x="385" y="200" fill="#ffffff" font-size="10" text-anchor="middle">Products</text>
<!-- Activation energy barriers -->
<line x1="200" y1="50" x2="310" y2="50" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
<line x1="180" y1="110" x2="310" y2="110" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2" />
<line x1="60" y1="180" x2="310" y2="180" stroke="#ffffff" stroke-width="1" stroke-dasharray="2,2" />
<!-- Double arrows -->
<line x1="300" y1="50" x2="300" y2="180" stroke="#ef4444" stroke-width="1.5" />
<line x1="280" y1="110" x2="280" y2="180" stroke="#10b981" stroke-width="1.5" />
<text x="305" y="115" fill="#ef4444" font-size="8" font-weight="bold">Uncatalyzed Ea</text>
<text x="275" y="145" fill="#10b981" font-size="8" font-weight="bold" text-anchor="end">Catalyzed Ea</text>
<text x="180" y="95" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">Catalyzed Path</text>
</svg>
</div>

- **Homogeneous Catalysts**: In the same phase as the reactants (e.g., gas-phase Cl atoms destroying Ozone).
- **Heterogeneous Catalysts**: In a different phase than the reactants, typically a solid surface that adsorbs gas molecules (e.g., catalytic converters in cars).
`,
        questions: [
          {
            id: "q5.3.1",
            unitId: 5,
            text: `For the following proposed mechanism:
Step 1 (Slow): $Cl_2(g) ightarrow 2Cl(g)$
Step 2 (Fast): $Cl(g) + CHCl_3(g) ightarrow HCl(g) + CCl_3(g)$
Step 3 (Fast): $Cl(g) + CCl_3(g) ightarrow CCl_4(g)$
Identify the reaction intermediate(s).`,
            options: [
              "$Cl$ and $CCl_3$",
              "$Cl_2$ and $CHCl_3$",
              "$HCl$ and $CCl_4$",
              "There are no intermediates; only catalysts are present.",
            ],
            correctIndex: 0,
            hint: "Intermediates are formed in one step and consumed in a subsequent step.",
            explanation: "Chlorine atoms ($Cl$) are produced in Step 1 and consumed in Steps 2 and 3. The trichloromethyl radical ($CCl_3$) is produced in Step 2 and consumed in Step 3. Both are intermediates. $Cl_2$ and $CHCl_3$ are reactants; $HCl$ and $CCl_4$ are products.",
          },
          {
            id: "q5.3.2",
            unitId: 5,
            text: `Given the mechanism:
Step 1 (Slow): $H_2O_2(aq) + I^-(aq) ightarrow H_2O(l) + IO^-(aq)$
Step 2 (Fast): $H_2O_2(aq) + IO^-(aq) ightarrow H_2O(l) + O_2(g) + I^-(aq)$
What is the overall rate law for this reaction?`,
            options: [
              "$\\text{Rate} = k [H_2O_2][I^-]$",
              "$\\text{Rate} = k [H_2O_2]$",
              "$\\text{Rate} = k [H_2O_2]^2$",
              "$\\text{Rate} = k [H_2O_2][IO^-]$",
            ],
            correctIndex: 0,
            hint: "The overall rate law is determined by the slow step of the mechanism.",
            explanation: "Since Step 1 is the rate-determining (slow) step, the overall rate of the reaction is equal to the rate of Step 1. Because Step 1 is an elementary bimolecular step, its rate law is written directly from its stoichiometry: $\\text{Rate} = k[H_2O_2][I^-]$.",
          },
          {
            id: "q5.3.3",
            unitId: 5,
            text: "What is the role of $I^-(aq)$ in the mechanism shown in the previous question?",
            options: [
              "Catalyst",
              "Reactant",
              "Product",
              "Intermediate",
            ],
            correctIndex: 0,
            hint: "Catalysts are consumed in an early step and regenerated in a later step.",
            explanation: "The iodide ion ($I^-$) is consumed as a reactant in Step 1 and regenerated as a product in Step 2. Because it is present at the start of the reaction, accelerates it, and is recovered unchanged at the end, it functions as a catalyst.",
          },
          {
            id: "q5.3.4",
            unitId: 5,
            text: "How does a catalyst increase the rate constant ($k$) of a chemical reaction?",
            options: [
              "It decreases the activation energy ($E_a$), which exponentially increases the rate constant according to the Arrhenius equation.",
              "It increases the temperature of the system.",
              "It increases the concentration of the reactants.",
              "It increases the standard enthalpy change of the reaction.",
            ],
            correctIndex: 0,
            hint: "Recall the Arrhenius equation: k = A * e^(-Ea/RT). How does Ea affect k?",
            explanation: "By providing an alternative mechanism with a lower activation energy ($E_a$), the energy barrier is reduced. In the Arrhenius equation $k = A e^{-E_a/RT}$, lowering $E_a$ increases the exponential term, leading to a larger rate constant $k$ at a given temperature.",
          },
          {
            id: "q5.3.5",
            unitId: 5,
            text: "In a potential energy diagram for a multi-step reaction mechanism, what does each peak and each valley between peaks represent?",
            options: [
              "Each peak is a transition state; each valley is an intermediate.",
              "Each peak is an intermediate; each valley is a transition state.",
              "Each peak is a reactant; each valley is a product.",
              "The peaks represent catalysts, and the valleys represent inhibitors.",
            ],
            correctIndex: 0,
            hint: "Peak states are highly unstable, whereas valleys represent semi-stable species.",
            explanation: "In a reaction coordinate diagram for a multi-step mechanism, each elementary step has its own energy barrier. The peaks correspond to the transition states (activated complexes) of the steps, and the local minima (valleys) between the peaks correspond to the reaction intermediates.",
          },
          {
            id: "q5.3.6",
            unitId: 5,
            text: "How does a catalyst affect the equilibrium constant ($K_{eq}$) of a reversible reaction?",
            options: [
              "It increases $K_{eq}$ because it produces more products.",
              "It decreases $K_{eq}$ because it increases the reverse rate.",
              "It does not change $K_{eq}$ because it speeds up both the forward and reverse reactions equally.",
              "It changes $K_{eq}$ only at high temperatures.",
            ],
            correctIndex: 2,
            hint: "A catalyst lowers the activation energy for both the forward and reverse reactions by the same amount, speeding up the rates but not shifting the position of equilibrium.",
            explanation: "A catalyst speeds up the rate of both the forward and reverse reactions equally by providing an alternative pathway with lower activation energy. Because it does not change the thermodynamics (free energy, enthalpy) of the reaction, it has no effect on the equilibrium constant ($K_{eq}$).",
          },
          {
            id: "q5.3.7",
            unitId: 5,
            text: "Which of the following is an example of homogeneous catalysis?",
            options: [
              "Platinum metal in a car's catalytic converter converting $CO$ and $NO$ gases to $CO_2$ and $N_2$.",
              "Chlorine atoms in the gas phase acting as a catalyst for the decomposition of gas-phase ozone ($O_3$).",
              "Enzymes (proteins) catalyzing sugar breakdown inside an aqueous cell environment.",
              "Iron solid catalyzing the synthesis of ammonia gas from $N_2$ and $H_2$ gases in the Haber process.",
            ],
            correctIndex: 1,
            hint: "Homogeneous catalysis occurs when the catalyst and the reactants are in the same phase (state of matter).",
            explanation: "In homogeneous catalysis, the catalyst is in the same phase as the reactants. Chlorine atoms ($Cl(g)$) catalyzing the destruction of ozone gas ($O_3(g)$) is gas-phase homogeneous catalysis. The other examples (Pt or Fe solids with gas reactants) represent heterogeneous catalysis.",
          },
          {
            id: "q5.3.8",
            unitId: 5,
            text: "In enzyme-catalyzed reactions, the rate of the reaction becomes independent of substrate concentration (zero-order) at very high substrate concentrations. What is the reason for this?",
            options: [
              "The enzyme is destroyed by high substrate concentrations.",
              "All the active sites on the enzyme molecules are saturated with substrate.",
              "The activation energy of the reaction increases.",
              "The reaction reaches equilibrium.",
            ],
            correctIndex: 1,
            hint: "The enzyme acts as a catalyst template. Consider what happens when all catalyst molecules are busy.",
            explanation: "Enzyme kinetics (Michaelis-Menten) shows that at high substrate concentrations, the rate levels off and becomes zero-order. This occurs because the enzyme molecules are saturated: all active sites are occupied, and adding more substrate cannot speed up the reaction further until an active site is freed.",
          },
          {
            id: "q5.3.9",
            unitId: 5,
            text: "Which of the following is true regarding a catalyst's effect on a potential energy diagram?",
            options: [
              "It lowers the potential energy of the reactants.",
              "It raises the potential energy of the products.",
              "It decreases the activation energy barrier for the reaction.",
              "It changes the enthalpy of the reaction ($\\Delta H$).",
            ],
            correctIndex: 2,
            hint: "Catalysts change the pathway to one with a lower transition state energy.",
            explanation: "A catalyst provides an alternative mechanism with a lower activation energy ($E_a$). On a potential energy diagram, this appears as a lower peak (transition state energy) compared to the uncatalyzed path. The energy of reactants, products, and the overall $\\Delta H$ remain completely unchanged.",
          },
          {
            id: "q5.3.10",
            unitId: 5,
            text: "What is the function of a catalyst in a chemical reaction?",
            options: [
              "To increase the collision frequency of molecules.",
              "To provide a reaction pathway with a lower activation energy, increasing the fraction of successful collisions.",
              "To shift the equilibrium towards products.",
              "To supply heat energy to the reactants.",
            ],
            correctIndex: 1,
            hint: "Catalysis is about changing the reaction pathway (mechanism).",
            explanation: "A catalyst does not change the physical speed or temperature of the molecules, nor does it shift the equilibrium. It provides a new reaction pathway that has a lower activation energy barrier. As a result, at any given temperature, a larger fraction of molecular collisions have sufficient energy to react, increasing the reaction rate.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Thermodynamics",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "6.1",
        title: "Endothermic/Exothermic Processes, Calorimetry, and Thermal Equilibrium",
        description: "Understand energy conservation, heat transfer, system vs. surroundings, and perform calculations for constant-pressure calorimetry.",
        youtubeId: "SAR-5wdQKSY",
        article: `# Endothermic/Exothermic Processes, Calorimetry, and Thermal Equilibrium

Thermodynamics is the study of heat, work, and the energy changes that accompany chemical and physical processes.

## System vs. Surroundings and Sign Conventions

- **System**: The specific chemical or physical process under study (e.g., a chemical reaction).
- **Surroundings**: Everything else in the universe, including the solvent, container, and air.

The **First Law of Thermodynamics** states that energy is conserved:

$$\\Delta E_{	ext{universe}} = \\Delta E_{	ext{system}} + \\Delta E_{	ext{surroundings}} = 0$$

The internal energy change of a system ($\\Delta E$) is the sum of heat ($q$) and work ($w$):

$$\\Delta E = q + w$$

| Variable | Process | Sign | Meaning |
|---|---|---|---|
| **Heat ($q$)** | Endothermic | $+$ | System absorbs heat from surroundings |
| | Exothermic | $-$ | System releases heat to surroundings |
| **Work ($w$)** | On System | $+$ | Surroundings compress the system |
| | By System | $-$ | System expands against surroundings |

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Surroundings boundary box -->
<rect x="10" y="10" width="430" height="180" rx="10" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1.5" />
<text x="25" y="30" fill="#a1a1aa" font-size="10" font-weight="bold">Surroundings</text>
<!-- System circular glass bubble -->
<circle cx="225" cy="100" r="50" fill="rgba(0, 242, 255, 0.03)" stroke="#00f2ff" stroke-width="2.5" />
<text x="225" y="104" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">SYSTEM</text>
<!-- Endothermic heat arrow (entering system) -->
<path d="M 70 100 L 150 100" fill="none" stroke="#60a5fa" stroke-width="2.5" marker-end="url(#arrow-chem-blue)" />
<text x="110" y="90" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">q > 0 (Endothermic)</text>
<!-- Exothermic heat arrow (leaving system) -->
<path d="M 300 100 L 380 100" fill="none" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-chem-red)" />
<text x="340" y="90" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">q < 0 (Exothermic)</text>
<defs>
<marker id="arrow-chem-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa" />
</marker>
<marker id="arrow-chem-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
</marker>
</defs>
</svg>
</div>

## Thermal Equilibrium

When two substances at different temperatures are placed in contact, heat transfers from the hotter substance (higher average kinetic energy) to the cooler substance until they reach the same temperature. This state is called **thermal equilibrium** (no net heat transfer).

$$q_{	ext{lost}} = -q_{	ext{gained}}$$

## Calorimetry

<vocab term="Calorimetry" definition="An experimental technique used to measure the heat transfer in a chemical or physical process.">Calorimetry</vocab> is the experimental technique used to measure heat transfer. In a constant-pressure calorimeter (like a coffee-cup calorimeter), the heat change of the reaction ($q_{	ext{rxn}}$) is equal and opposite to the heat change of the calorimeter contents (typically water or a solution, $q_{	ext{cal}}$):

$$q_{	ext{rxn}} = -q_{	ext{cal}}$$

The heat absorbed or released by a substance is calculated using:

$$q = m c \\Delta T$$

Where:
- $m$ is the mass of the substance ($g$).
- $c$ is the <vocab term="Specific Heat Capacity" definition="The amount of heat required to raise the temperature of 1 gram of a substance by 1 degree Celsius.">specific heat capacity</vocab> ($J/g ^\\circ C$). For water, $c = 4.184 	ext{ J/g } ^\\circ 	ext{C}$.
- $\\Delta T$ is the change in temperature ($T_{	ext{final}} - T_{	ext{initial}}$).
`,
        questions: [
          {
            id: "q6.1.1",
            unitId: 6,
            text: "A chemical reaction performs $150 \\text{ J}$ of expansion work on its surroundings while releasing $250 \\text{ J}$ of heat. What is the internal energy change ($\\Delta E$) of the system?",
            options: [
              "-400 J",
              "+400 J",
              "-100 J",
              "+100 J",
            ],
            correctIndex: 0,
            hint: "Assign the correct signs to heat (q) and work (w) based on the description, and use ΔE = q + w.",
            explanation: "Since the system releases heat, $q = -250 \\text{ J}$. Since the system does work on the surroundings, it loses energy through work, so $w = -150 \\text{ J}$. Using $\\Delta E = q + w$, we get $\\Delta E = -250 + (-150) = -400 \\text{ J}$.",
          },
          {
            id: "q6.1.2",
            unitId: 6,
            text: "A 50.0 g piece of hot copper metal is placed into 100.0 g of water at 20.0°C. At thermal equilibrium, the temperature of the water is 25.0°C. If the specific heat of water is 4.184 J/g°C, how much heat was transferred from the copper to the water?",
            options: [
              "2090 J",
              "1045 J",
              "4184 J",
              "8370 J",
            ],
            correctIndex: 0,
            hint: "Calculate the heat gained by the water using q = m * c * ΔT.",
            explanation: "The heat gained by the water is: $q_{water} = m_{water} \\times c_{water} \\times \\Delta T_{water} = 100.0 \\text{ g} \\times 4.184 \\text{ J/g } ^\\circ\\text{C} \\times (25.0 - 20.0)^\\circ\\text{C} = 100.0 \\times 4.184 \\times 5.0 = 2092 \\text{ J}$. By conservation of energy, the heat transferred from the copper is equal to the heat gained by the water, which is approximately $2090 \\text{ J}$.",
          },
          {
            id: "q6.1.3",
            unitId: 6,
            text: "In a calorimetry experiment, a student dissolves 4.0 g of NaOH in 100.0 g of water, and the temperature of the solution increases from 22.0°C to 32.0°C. Which of the following is correct regarding this process?",
            options: [
              "The dissolution of NaOH is exothermic, and the sign of $q_{rxn}$ is negative.",
              "The dissolution of NaOH is endothermic, and the sign of $q_{rxn}$ is positive.",
              "The dissolution of NaOH is endothermic, and the sign of $q_{rxn}$ is negative.",
              "The dissolution of NaOH is exothermic, and the sign of $q_{rxn}$ is positive.",
            ],
            correctIndex: 0,
            hint: "An increase in the temperature of the surroundings (water) indicates that the system released heat.",
            explanation: "Because the temperature of the solvent (surroundings) increased, the dissolution process must have released heat to the surroundings, meaning it is exothermic. For exothermic processes, the heat of the system ($q_{rxn}$) is negative ($q_{rxn} = -q_{calorimeter}$).",
          },
          {
            id: "q6.1.4",
            unitId: 6,
            text: "Which of the following substances has the highest specific heat capacity, meaning it requires the most energy to raise its temperature?",
            options: [
              "Water ($H_2O$)",
              "Ethanol ($C_2H_5OH$)",
              "Iron metal ($Fe$)",
              "Copper metal ($Cu$)",
            ],
            correctIndex: 0,
            hint: "Water is famous for buffering temperature changes because of its extensive hydrogen bonding.",
            explanation: "Water has an unusually high specific heat capacity ($4.184 \\text{ J/g }^\\circ\\text{C}$) compared to metals (iron is ~0.45, copper is ~0.385) and other liquids. Water's high specific heat is due to its extensive network of hydrogen bonds, which must be disrupted before the kinetic energy (temperature) of the molecules can increase.",
          },
          {
            id: "q6.1.5",
            unitId: 6,
            text: "Two blocks, metal A at 80°C and metal B at 20°C, are placed in contact inside an insulated container. Which of the following describes the microscopic process as they reach thermal equilibrium?",
            options: [
              "High kinetic energy molecules in A transfer energy to B via collisions, increasing the average KE of B and decreasing the average KE of A.",
              "Heat flows from B to A because B has a lower potential energy.",
              "Cold energy is transferred from B to A until their temperatures average out.",
              "The atoms of metal A physically migrate into the lattice of B.",
            ],
            correctIndex: 0,
            hint: "Thermal energy transfer occurs via microscopic molecular collisions.",
            explanation: "Heat transfer is a mechanical process on the microscopic scale. The faster-moving atoms in the hotter metal A collide with the slower-moving atoms in the cooler metal B at the boundary. These collisions transfer kinetic energy, slowing down the atoms in A and speeding up the atoms in B until their average kinetic energies (temperatures) are equal.",
          },
          {
            id: "q6.1.6",
            unitId: 6,
            text: "A student mixes $50.0 \\text{ mL}$ of $1.0 M$ $HCl$ with $50.0 \\text{ mL}$ of $1.0 M$ $NaOH$ in a coffee-cup calorimeter. The temperature of the water increases from $22.0^\\circ\\text{C}$ to $28.7^\\circ\\text{C}$. What is the heat of neutralization ($q$) of the reaction, assuming the density of the solution is $1.00 \\text{ g/mL}$ and the specific heat capacity is $4.18 \\text{ J/g} \\cdot ^\\circ\\text{C}$?",
            options: [
              "$-2.80 \\text{ kJ}$",
              "$-1.40 \\text{ kJ}$",
              "$+2.80 \\text{ kJ}$",
              "$-5.60 \\text{ kJ}$",
            ],
            correctIndex: 0,
            hint: "Calculate the total mass of the solution: 50.0 mL + 50.0 mL = 100.0 mL, which corresponds to 100.0 g. Use q_soln = m * c * delta T, and remember that q_rxn = -q_soln.",
            explanation: "Total mass of solution = $50.0 \\text{ g} + 50.0 \\text{ g} = 100.0 \\text{ g}$. $\\Delta T = 28.7 - 22.0 = 6.7 ^\\circ\\text{C}$. $q_{soln} = m c \\Delta T = 100.0 \\text{ g} \\times 4.18 \\text{ J/g} \\cdot ^\\circ\\text{C} \\times 6.7 ^\\circ\\text{C} = 2800 \\text{ J} = 2.80 \\text{ kJ}$. Since the temperature of the surroundings (water) increased, the reaction released heat (exothermic). Thus, $q_{rxn} = -q_{soln} = -2.80 \\text{ kJ}$.",
          },
          {
            id: "q6.1.7",
            unitId: 6,
            text: "For a reaction that is exothermic, which of the following is true?",
            options: [
              "$\\Delta H$ is positive, and the system absorbs heat from the surroundings.",
              "$\\Delta H$ is negative, and the system releases heat to the surroundings.",
              "$\\Delta H$ is positive, and the system releases heat to the surroundings.",
              "$\\Delta H$ is negative, and the system absorbs heat from the surroundings.",
            ],
            correctIndex: 1,
            hint: "Exothermic means heat exits the system into the surroundings.",
            explanation: "An exothermic reaction releases thermal energy to the surroundings. According to thermodynamic sign conventions, energy leaving the system is negative, so the change in enthalpy ($\\Delta H$) is negative.",
          },
          {
            id: "q6.1.8",
            unitId: 6,
            text: "What is the molar heat capacity of liquid water ($H_2O(l)$)? (Specific heat capacity of water is $4.184 \\text{ J/g} \\cdot ^\\circ\\text{C}$)",
            options: [
              "$4.18 \\text{ J/mol} \\cdot ^\\circ\\text{C}$",
              "$18.0 \\text{ J/mol} \\cdot ^\\circ\\text{C}$",
              "$75.4 \\text{ J/mol} \\cdot ^\\circ\\text{C}$",
              "$418 \\text{ J/mol} \\cdot ^\\circ\\text{C}$",
            ],
            correctIndex: 2,
            hint: "Molar heat capacity is the heat capacity per mole. Multiply the specific heat capacity (per gram) by the molar mass of water (18.02 g/mol).",
            explanation: "Molar heat capacity = Specific heat capacity $\\times$ Molar mass = $4.184 \\text{ J/g} \\cdot ^\\circ\\text{C} \\times 18.02 \\text{ g/mol} \\approx 75.4 \\text{ J/mol} \\cdot ^\\circ\\text{C}$.",
          },
          {
            id: "q6.1.9",
            unitId: 6,
            text: "A metal block of mass $100.0 \\text{ g}$ at $90.0^\\circ\\text{C}$ is placed in a calorimeter containing $100.0 \\text{ g}$ of water at $20.0^\\circ\\text{C}$. The final equilibrium temperature of the mixture is $25.0^\\circ\\text{C}$. What is the specific heat capacity of the metal? (Specific heat of water is $4.18 \\text{ J/g} \\cdot ^\\circ\\text{C}$)",
            options: [
              "$0.32 \\text{ J/g} \\cdot ^\\circ\\text{C}$",
              "$0.45 \\text{ J/g} \\cdot ^\\circ\\text{C}$",
              "$0.90 \\text{ J/g} \\cdot ^\\circ\\text{C}$",
              "$0.15 \\text{ J/g} \\cdot ^\\circ\\text{C}$",
            ],
            correctIndex: 0,
            hint: "Use the heat transfer conservation equation: q_metal = -q_water. Express each q as m * c * delta T and solve for c_metal.",
            explanation: "Heat gained by water: $q_{water} = 100.0 \\text{ g} \\times 4.18 \\text{ J/g} \\cdot ^\\circ\\text{C} \\times (25.0 - 20.0)^\\circ\\text{C} = 2090 \\text{ J}$. Heat lost by metal: $q_{metal} = -2090 \\text{ J} = 100.0 \\text{ g} \\times c_{metal} \\times (25.0 - 90.0)^\\circ\\text{C} \\implies -2090 = -6500 \\times c_{metal} \\implies c_{metal} = 2090 / 6500 \\approx 0.32 \\text{ J/g} \\cdot ^\\circ\\text{C}$.",
          },
          {
            id: "q6.1.10",
            unitId: 6,
            text: "Why does the temperature of a substance remain constant during a phase change (e.g. boiling water at $100^\\circ\\text{C}$), even though heat is continuously added?",
            options: [
              "The thermometer breaks during phase changes.",
              "The added heat is used to break intermolecular forces rather than increase the average kinetic energy of the molecules.",
              "The substance radiates heat as fast as it absorbs it.",
              "Phase changes are always endothermic and exothermic at the same time.",
            ],
            correctIndex: 1,
            hint: "Temperature is a measure of average kinetic energy. During a phase change, the potential energy of the molecules increases as they pull apart.",
            explanation: "During a phase change, the thermal energy added is used to overcome the intermolecular attractions holding the molecules together in the liquid phase, increasing their potential energy. Because the average kinetic energy of the molecules does not change, the temperature remains constant until the phase change is complete.",
          },
        ],
      },
      {
        id: "6.2",
        title: "Phase Changes and Enthalpies of Reaction",
        description: "Calculate energy requirements for heating and phase changes, and perform stoichiometric calculations involving reaction enthalpies.",
        youtubeId: "BgcWxIWZ84s",
        article: `# Phase Changes and Enthalpies of Reaction

During a phase change, energy is transferred, but the temperature of the substance remains constant because the energy is used to rearrange the intermolecular structure.

## Enthalpies of Phase Changes

- **Enthalpy of Fusion** ($\\Delta H_{	ext{fus}}$): The energy required to melt one mole of solid into liquid at its melting point.
  $$q = n 	imes \\Delta H_{	ext{fus}}$$
- **Enthalpy of Vaporization** ($\\Delta H_{	ext{vap}}$): The energy required to vaporize one mole of liquid into gas at its boiling point.
  $$q = n 	imes \\Delta H_{	ext{vap}}$$

### Heating Curves:
A heating curve tracks temperature as heat is added. It consists of two types of segments:
1. **Sloped lines**: Single phase (solid, liquid, or gas) is heating up. The temperature increases. Use $q = m c \\Delta T$.
2. **Flat plateaus**: Phase changes are occurring. The temperature remains constant because the heat is used to break intermolecular attractions rather than increase molecular kinetic energy. Use $q = n \\Delta H$.

<div class="flex justify-center my-8">
<svg width="450" height="250" viewBox="0 0 450 250" class="max-w-full">
<!-- Thermometer -->
<rect x="200" y="20" width="6" height="150" rx="3" fill="#a1a1aa" />
<rect x="201" y="25" width="4" height="140" fill="#ef4444" />
<circle cx="203" cy="170" r="8" fill="#ef4444" />
<!-- Stirrer -->
<path d="M 240 30 L 240 160 L 255 160" fill="none" stroke="#d4d4d4" stroke-width="2" />
<!-- Lid -->
<rect x="145" y="70" width="110" height="10" rx="2" fill="#52525b" />
<!-- Outer Cup -->
<path d="M 150 80 L 160 210 C 160 215, 240 215, 240 210 L 250 80" fill="none" stroke="#71717a" stroke-width="2.5" />
<!-- Inner Cup -->
<path d="M 155 80 L 163 200 C 163 205, 237 205, 237 200 L 245 80" fill="rgba(255,255,255,0.02)" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Water level -->
<path d="M 157 110 C 190 108, 210 112, 243 110 L 238 198 C 238 202, 164 202, 164 198 Z" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.2)" />
<!-- Labels -->
<text x="270" y="105" fill="#a1a1aa" font-size="9" text-anchor="start">Thermometer</text>
<text x="270" y="125" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="start">Reaction Solution</text>
<text x="270" y="140" fill="#a1a1aa" font-size="9" text-anchor="start">q_rxn = -m c ΔT</text>
<text x="270" y="175" fill="#a1a1aa" font-size="9" text-anchor="start">Styrofoam Cups</text>
<text x="270" y="190" fill="#a1a1aa" font-size="8" text-anchor="start">(insulation prevents heat loss)</text>
</svg>
</div>

## Enthalpy of Reaction

The <vocab term="Enthalpy of Reaction" definition="The change in enthalpy (heat content) that occurs during a chemical reaction at constant pressure.">enthalpy of reaction</vocab> ($\\Delta H_{	ext{rxn}}$) is the heat change associated with a chemical reaction at constant pressure. 

Enthalpy is an **extensive property**, meaning it scales with the amounts of substances reacting. The coefficients in a balanced equation correspond directly to the moles of reactant linked to the enthalpy value.

### Example:
$$2H_2(g) + O_2(g) ightarrow 2H_2O(g) \\quad \\Delta H_{	ext{rxn}} = -483.6 	ext{ kJ}$$

- Reacting $2 	ext{ moles of } H_2$ releases $483.6 	ext{ kJ}$ of heat.
- Reacting $1 	ext{ mole of } H_2$ releases $241.8 	ext{ kJ}$ of heat.
`,
        questions: [
          {
            id: "q6.2.1",
            unitId: 6,
            text: "How much heat is required to melt 36.0 g of ice at 0°C? ($\\Delta H_{\\text{fus}}$ of water is 6.01 kJ/mol)",
            options: [
              "12.0 kJ",
              "6.01 kJ",
              "216 kJ",
              "3.00 kJ",
            ],
            correctIndex: 0,
            hint: "Convert the mass of water to moles first (molar mass of water is 18.02 g/mol), then multiply by the enthalpy of fusion.",
            explanation: "Moles of water = $36.0 \\text{ g} / 18.02 \\text{ g/mol} \\approx 2.00 \\text{ mol}$. Heat required: $q = n \\times \\Delta H_{fus} = 2.00 \\text{ mol} \\times 6.01 \\text{ kJ/mol} = 12.02 \\text{ kJ}$.",
          },
          {
            id: "q6.2.2",
            unitId: 6,
            text: "For the combustion of propane: $C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(g) \\quad \\Delta H_{\\text{rxn}} = -2220 \\text{ kJ/mol}$. How much heat is released when 22.0 g of propane is burned completely?",
            options: [
              "1110 kJ",
              "2220 kJ",
              "4440 kJ",
              "555 kJ",
            ],
            correctIndex: 0,
            hint: "Determine the moles of propane in 22.0 g (molar mass of propane is 44.1 g/mol).",
            explanation: "Moles of propane = $22.0 \\text{ g} / 44.1 \\text{ g/mol} \\approx 0.500 \\text{ mol}$. Since the combustion of 1 mole of propane releases $2220 \\text{ kJ}$, burning $0.500 \\text{ mol}$ releases: $0.500 \\text{ mol} \\times 2220 \\text{ kJ/mol} = 1110 \\text{ kJ}$.",
          },
          {
            id: "q6.2.3",
            unitId: 6,
            text: "Why does the temperature of water remain constant at 100°C while it is boiling, even though heat is continuously being added?",
            options: [
              "The heat is used entirely to break the intermolecular hydrogen bonds holding the liquid molecules together, rather than increasing their average kinetic energy.",
              "The heat is escaping into the air without entering the water.",
              "The specific heat of steam is zero.",
              "Boiling is an exothermic process that cancels out the added heat.",
            ],
            correctIndex: 0,
            hint: "Temperature is a measure of average kinetic energy. Phase changes represent changes in potential energy/bonds.",
            explanation: "Temperature is a measure of the average kinetic energy of the particles. During a phase change, the added thermal energy goes entirely into overcoming the intermolecular forces of attraction (hydrogen bonding in water) to separate the molecules into the gas phase. This increases potential energy, not kinetic energy, so the temperature remains constant.",
          },
          {
            id: "q6.2.4",
            unitId: 6,
            text: "Consider the reaction: $2Al(s) + 3Cl_2(g) \\rightarrow 2AlCl_3(s) \\quad \\Delta H_{\\text{rxn}} = -1408 \\text{ kJ}$. What is the enthalpy change when 1.0 mole of $Al(s)$ reacts completely with excess chlorine?",
            options: [
              "-704 kJ",
              "-1408 kJ",
              "-2816 kJ",
              "+704 kJ",
            ],
            correctIndex: 0,
            hint: "Look at the coefficient of Al in the balanced equation and scale the enthalpy accordingly.",
            explanation: "The enthalpy change of $-1408 \\text{ kJ}$ is for the reaction of $2 \\text{ moles of } Al$. For $1.0 \\text{ mole of } Al$, the enthalpy change will be half of that: $-1408 / 2 = -704 \\text{ kJ}$.",
          },
          {
            id: "q6.2.5",
            unitId: 6,
            text: "Which of the following phase changes is endothermic?",
            options: [
              "Sublimation",
              "Condensation",
              "Freezing",
              "Deposition",
            ],
            correctIndex: 0,
            hint: "Endothermic processes require the absorption of heat to overcome intermolecular attractions (solid to gas).",
            explanation: "Sublimation is the direct transition of a solid to a gas (e.g., dry ice). To separate molecules from a locked solid lattice to an isolated gas state, energy must be absorbed to break the intermolecular forces, making it an endothermic process. Condensation, freezing, and deposition are exothermic.",
          },
          {
            id: "q6.2.6",
            unitId: 6,
            text: `Given the following reactions:
1) $S(s) + O_2(g) ightarrow SO_2(g) \\quad \\Delta H_1 = -297 	ext{ kJ}$
2) $2SO_2(g) + O_2(g) ightarrow 2SO_3(g) \\quad \\Delta H_2 = -198 	ext{ kJ}$
Calculate the enthalpy change $\\Delta H$ for the reaction: $2S(s) + 3O_2(g) ightarrow 2SO_3(g)$.`,
            options: [
              "$-495 \\text{ kJ}$",
              "$-792 \\text{ kJ}$",
              "$-396 \\text{ kJ}$",
              "$-99 \\text{ kJ}$",
            ],
            correctIndex: 1,
            hint: "Use Hess's Law: manipulate the given equations so they add up to the target equation, and apply the same changes to their enthalpy values.",
            explanation: "To get the target reaction: Multiply reaction (1) by 2: $2S(s) + 2O_2(g) \\rightarrow 2SO_2(g) \\quad \\Delta H = 2 \\times (-297) = -594 \\text{ kJ}$. Keep reaction (2) as is: $2SO_2(g) + O_2(g) \\rightarrow 2SO_3(g) \\quad \\Delta H = -198 \\text{ kJ}$. Adding these two reactions together gives: $2S(s) + 3O_2(g) \\rightarrow 2SO_3(g)$. The total enthalpy change is the sum: $\\Delta H = -594 + (-198) = -792 \\text{ kJ}$.",
          },
          {
            id: "q6.2.7",
            unitId: 6,
            text: "Using the bond enthalpies: $H-H$ ($436 \\text{ kJ/mol}$), $Cl-Cl$ ($242 \\text{ kJ/mol}$), and $H-Cl$ ($431 \\text{ kJ/mol}$), calculate the enthalpy change $\\Delta H$ for the reaction: $H_2(g) + Cl_2(g) \\rightarrow 2HCl(g)$.",
            options: [
              "$-184 \\text{ kJ}$",
              "$+184 \\text{ kJ}$",
              "$-247 \\text{ kJ}$",
              "$+247 \\text{ kJ}$",
            ],
            correctIndex: 0,
            hint: "Use the formula: delta H = sum of bonds broken (reactants) - sum of bonds formed (products).",
            explanation: "Bonds broken (endothermic): $1 \\text{ mol of } H-H$ ($436 \\text{ kJ}$) and $1 \\text{ mol of } Cl-Cl$ ($242 \\text{ kJ}$) = $436 + 242 = 678 \\text{ kJ}$. Bonds formed (exothermic): $2 \\text{ mol of } H-Cl$ = $2 \\times 431 = 862 \\text{ kJ}$. $\\Delta H = \\sum D_{broken} - \\sum D_{formed} = 678 - 862 = -184 \\text{ kJ}$.",
          },
          {
            id: "q6.2.8",
            unitId: 6,
            text: "Which of the following processes has a positive change in enthalpy ($\\Delta H > 0$)?",
            options: [
              "Water condensing on a cold glass.",
              "Dry ice subliming to carbon dioxide gas.",
              "Natural gas burning in a furnace.",
              "Acid and base neutralizing to form water.",
            ],
            correctIndex: 1,
            hint: "A positive change in enthalpy represents an endothermic process, which requires energy input to occur.",
            explanation: "Sublimation (solid to gas) is an endothermic process because it requires the system to absorb heat to break the intermolecular forces holding the solid molecules together. Condensation, combustion, and neutralization are all exothermic processes ($\\Delta H < 0$).",
          },
          {
            id: "q6.2.9",
            unitId: 6,
            text: "For the combustion of methane: $CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$, which of the following is true regarding the chemical bond energies?",
            options: [
              "The energy required to break the bonds in the reactants is greater than the energy released when forming the bonds in the products.",
              "The energy released when forming the bonds in the products is greater than the energy required to break the bonds in the reactants.",
              "They are equal.",
              "No bonds are broken during combustion.",
            ],
            correctIndex: 1,
            hint: "Combustion of methane is highly exothermic, meaning it releases a large amount of energy.",
            explanation: "Since the combustion of methane is an exothermic reaction, the overall enthalpy change is negative. According to $\\Delta H = \\sum D_{broken} - \\sum D_{formed}$, a negative value means that the energy released from forming bonds in the products (exothermic) is greater than the energy input required to break the bonds in the reactants (endothermic).",
          },
          {
            id: "q6.2.10",
            unitId: 6,
            text: "How does reversing a chemical equation affect its enthalpy value, according to Hess's Law?",
            options: [
              "The enthalpy remains unchanged.",
              "The enthalpy doubles in value.",
              "The enthalpy changes sign (multiplied by -1).",
              "The enthalpy becomes zero.",
            ],
            correctIndex: 2,
            hint: "If a forward reaction is exothermic, the reverse reaction must absorb the same amount of energy.",
            explanation: "Reversing a reaction swaps the reactants and products. If the forward reaction releases a certain amount of heat (negative $\\Delta H$), the reverse reaction must absorb that exact same amount of heat, making the new enthalpy value equal in magnitude but opposite in sign (multiplied by -1).",
          },
        ],
      },
      {
        id: "6.3",
        title: "Bond Enthalpies, Heats of Formation, and Hess Law",
        description: "Calculate reaction enthalpies using bond energies, standard enthalpies of formation, and apply Hess's Law to determine overall reaction energy.",
        youtubeId: "qD7PDOhqbpM",
        article: `# Bond Enthalpies, Heats of Formation, and Hess Law

Enthalpy is a state function, meaning its change is independent of the pathway taken. This allows us to calculate reaction enthalpies using three main methods.

## Method 1: Bond Enthalpies

Chemical reactions involve breaking bonds in reactants (endothermic, $\\Delta H > 0$) and forming bonds in products (exothermic, $\\Delta H < 0$).

$$\\Delta H_{	ext{rxn}} = \\sum 	ext{BE}_{	ext{broken}} - \\sum 	ext{BE}_{	ext{formed}}$$

*Note*: Since bond energies are tabulates as positive values representing bond dissociation, this equation is Reactants minus Products.

## Method 2: Standard Enthalpies of Formation

The **standard enthalpy of formation** ($\\Delta H_f^\\circ$) is the enthalpy change when one mole of a substance is formed from its constituent elements in their standard states.
- The standard enthalpy of formation of any element in its most stable standard state is **zero** (e.g., $O_2(g)$ is $0$, but $O(g)$ or $O_3(g)$ is not).

$$\\Delta H_{	ext{rxn}}^\\circ = \\sum n \\Delta H_f^\\circ(	ext{products}) - \\sum m \\Delta H_f^\\circ(	ext{reactants})$$

Where $n$ and $m$ are the stoichiometric coefficients. This is Products minus Reactants.

## Method 3: Hess's Law

**Hess's Law** states that if a reaction is carried out in a series of steps, the overall $\\Delta H$ is the sum of the enthalpy changes for the individual steps.

### Rules for Manipulating Equations:
1. If a reaction is reversed, change the sign of $\\Delta H$.
2. If a reaction is multiplied by a coefficient, multiply $\\Delta H$ by that same coefficient.

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- State A: Reactants -->
<rect x="30" y="30" width="110" height="40" rx="5" fill="rgba(0, 242, 255, 0.05)" stroke="#00f2ff" stroke-width="1.5" />
<text x="85" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Reactants (A)</text>
<!-- State B: Products -->
<rect x="300" y="30" width="110" height="40" rx="5" fill="rgba(0, 242, 255, 0.05)" stroke="#00f2ff" stroke-width="1.5" />
<text x="355" y="55" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Products (B)</text>
<!-- State C: Intermediates -->
<rect x="165" y="130" width="120" height="40" rx="5" fill="rgba(244, 63, 94, 0.05)" stroke="#f43f5e" stroke-width="1.5" />
<text x="225" y="155" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Intermediates (C)</text>
<!-- Direct Path A -> B -->
<path d="M 140 50 L 300 50" fill="none" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-chem-blue)" />
<text x="220" y="42" fill="#3b82f6" font-size="11" font-weight="bold" text-anchor="middle">ΔH_direct</text>
<!-- Indirect Path A -> C -->
<path d="M 100 70 L 175 130" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-chem-green)" />
<text x="110" y="115" fill="#10b981" font-size="10" font-weight="bold">ΔH₁</text>
<!-- Indirect Path C -> B -->
<path d="M 270 130 L 340 70" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-chem-green)" />
<text x="320" y="115" fill="#10b981" font-size="10" font-weight="bold">ΔH₂</text>
<!-- Hess Law Equation -->
<text x="225" y="100" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">ΔH_direct = ΔH₁ + ΔH₂</text>
<defs>
<marker id="arrow-chem-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
</marker>
<marker id="arrow-chem-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
</marker>
</defs>
</svg>
</div>
`,
        questions: [
          {
            id: "q6.3.1",
            unitId: 6,
            text: `Using the following bond enthalpies:
$H-H: 436 	ext{ kJ/mol}$
$Cl-Cl: 242 	ext{ kJ/mol}$
$H-Cl: 431 	ext{ kJ/mol}$
Calculate the enthalpy change ($\\Delta H$) for the reaction: $H_2(g) + Cl_2(g) ightarrow 2HCl(g)$.`,
            options: [
              "-184 kJ",
              "+184 kJ",
              "-247 kJ",
              "+247 kJ",
            ],
            correctIndex: 0,
            hint: "Calculate the energy required to break the reactant bonds and subtract the energy released by forming the product bonds.",
            explanation: "Bonds broken (Reactants): 1 mol $H-H$ and 1 mol $Cl-Cl$. Energy broken = $436 + 242 = 678 \\text{ kJ}$. Bonds formed (Products): 2 mol $H-Cl$. Energy formed = $2 \\times 431 = 862 \\text{ kJ}$. $\\Delta H = \\text{Broken} - \\text{Formed} = 678 - 862 = -184 \\text{ kJ}$.",
          },
          {
            id: "q6.3.2",
            unitId: 6,
            text: `Given the standard enthalpies of formation:
$\\Delta H_f^\\circ[CO_2(g)] = -393.5 	ext{ kJ/mol}$
$\\Delta H_f^\\circ[H_2O(l)] = -285.8 	ext{ kJ/mol}$
$\\Delta H_f^\\circ[C_3H_8(g)] = -103.8 	ext{ kJ/mol}$
Calculate the standard enthalpy of combustion ($\\Delta H_{	ext{rxn}}^\\circ$) for propane: $C_3H_8(g) + 5O_2(g) ightarrow 3CO_2(g) + 4H_2O(l)$.`,
            options: [
              "-2220.1 kJ",
              "-2520.5 kJ",
              "-2030.2 kJ",
              "-2326.7 kJ",
            ],
            correctIndex: 0,
            hint: "Use the formula: ΔH_rxn = [3*ΔH_f(CO2) + 4*ΔH_f(H2O)] - [ΔH_f(C3H8) + 5*ΔH_f(O2)]. Recall that ΔH_f of O2 is zero.",
            explanation: "$\\Delta H_{\\text{rxn}}^\\circ = [3(-393.5) + 4(-285.8)] - [-103.8 + 5(0)] = [-1180.5 - 1143.2] - [-103.8] = -2323.7 + 103.8 = -2219.9 \\text{ kJ}$.",
          },
          {
            id: "q6.3.3",
            unitId: 6,
            text: `Given the thermochemical equations:
1) $S(s) + O_2(g) ightarrow SO_2(g) \\quad \\Delta H = -297 	ext{ kJ}$
2) $2SO_3(g) ightarrow 2SO_2(g) + O_2(g) \\quad \\Delta H = +198 	ext{ kJ}$
Calculate the enthalpy change ($\\Delta H$) for the reaction: $2S(s) + 3O_2(g) ightarrow 2SO_3(g)$.`,
            options: [
              "-792 kJ",
              "-396 kJ",
              "-99 kJ",
              "-594 kJ",
            ],
            correctIndex: 0,
            hint: "Multiply reaction 1 by 2. Reverse reaction 2. Add the equations and their modified enthalpies.",
            explanation: "To get the target: Multiply eq 1 by 2: $2S + 2O_2 \\rightarrow 2SO_2$, $\\Delta H = 2(-297) = -594 \\text{ kJ}$. Reverse eq 2: $2SO_2 + O_2 \\rightarrow 2SO_3$, $\\Delta H = -198 \\text{ kJ}$. Add the equations (the $2SO_2$ cancels out): $2S(s) + 3O_2(g) \\rightarrow 2SO_3(g)$. Add enthalpies: $\\Delta H = -594 + (-198) = -792 \\text{ kJ}$.",
          },
          {
            id: "q6.3.4",
            unitId: 6,
            text: "Which of the following chemical reactions corresponds to the definition of a standard enthalpy of formation ($\\Delta H_f^\\circ$)?",
            options: [
              "$C(graphite) + O_2(g) \\rightarrow CO_2(g)$",
              "$CO(g) + \\frac{1}{2}O_2(g) \\rightarrow CO_2(g)$",
              "$2H(g) + O(g) \\rightarrow H_2O(l)$",
              "$N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$",
            ],
            correctIndex: 0,
            hint: "Look for the formation of exactly 1 mole of product from elements in their standard stable states.",
            explanation: "A standard enthalpy of formation is defined for the formation of exactly **1 mole of a compound** from its **elements in their standard states**. Graphite is the standard state of carbon, and $O_2(g)$ is the standard state of oxygen, forming 1 mole of $CO_2(g)$. Option A has a compound as a reactant. Option B has individual atoms (unstable states). Option D forms 2 moles of product.",
          },
          {
            id: "q6.3.5",
            unitId: 6,
            text: "Explain why chemical bond breaking is always an endothermic process.",
            options: [
              "Energy must be absorbed to overcome the electrostatic attractions between the nuclei and the shared electrons in the bond.",
              "It releases potential energy into the surroundings.",
              "It increases the stability of the atoms.",
              "It is driven by an increase in temperature.",
            ],
            correctIndex: 0,
            hint: "Covalent bonds represent stable arrangements of charges. Separating them requires work.",
            explanation: "A chemical bond is a stable configuration where electrostatic attractions between the atomic nuclei and shared electrons are maximized. Separating the atoms requires performing work against these Coulombic forces, which absorbs energy from the surroundings, making it an endothermic process.",
          },
          {
            id: "q6.3.6",
            unitId: 6,
            text: `Calculate the standard enthalpy of reaction $\\Delta H_{rxn}^\\circ$ for the combustion of ethanol:
$C_2H_5OH(l) + 3O_2(g) ightarrow 2CO_2(g) + 3H_2O(l)$
Given standard enthalpies of formation:
$\\Delta H_f^\\circ [C_2H_5OH(l)] = -278 	ext{ kJ/mol}$
$\\Delta H_f^\\circ [CO_2(g)] = -394 	ext{ kJ/mol}$
$\\Delta H_f^\\circ [H_2O(l)] = -286 	ext{ kJ/mol}$`,
            options: [
              "$-1368 \\text{ kJ}$",
              "$-954 \\text{ kJ}$",
              "$-2046 \\text{ kJ}$",
              "$-402 \\text{ kJ}$",
            ],
            correctIndex: 0,
            hint: "Use the formula: delta H_rxn = sum(n * delta H_f(products)) - sum(m * delta H_f(reactants)). Remember that standard enthalpy of formation of an element in its standard state, like O2(g), is zero.",
            explanation: "Products: $2 \\times (-394) + 3 \\times (-286) = -788 - 858 = -1646 \\text{ kJ}$. Reactants: $1 \\times (-278) + 3 \\times 0 = -278 \\text{ kJ}$. $\\Delta H_{rxn}^\\circ = \\sum \\Delta H_f^\\circ(products) - \\sum \\Delta H_f^\\circ(reactants) = -1646 - (-278) = -1368 \\text{ kJ}$.",
          },
          {
            id: "q6.3.7",
            unitId: 6,
            text: "What is the standard enthalpy of formation ($\\Delta H_f^\\circ$) of $O_2(g)$ at $298 \\text{ K}$?",
            options: [
              "$0 \\text{ kJ/mol}$",
              "$32.0 \\text{ kJ/mol}$",
              "$-298 \\text{ kJ/mol}$",
              "$+150 \\text{ kJ/mol}$",
            ],
            correctIndex: 0,
            hint: "By definition, the standard enthalpy of formation of any pure element in its reference standard state at 298 K is zero.",
            explanation: "Standard enthalpy of formation ($\\Delta H_f^\\circ$) is defined as the enthalpy change for the formation of one mole of a compound from its constituent elements in their standard states. Since $O_2(g)$ is already an element in its standard reference state, no reaction is required, and its $\\Delta H_f^\\circ$ is exactly zero.",
          },
          {
            id: "q6.3.8",
            unitId: 6,
            text: "Which of the following chemical equations represents the standard enthalpy of formation ($\\Delta H_f^\\circ$) for carbon monoxide ($CO(g)$)?",
            options: [
              "$C(s, graphite) + \\frac{1}{2}O_2(g) \\rightarrow CO(g)$",
              "$C(g) + O(g) \\rightarrow CO(g)$",
              "$CO_2(g) \\rightarrow CO(g) + \\frac{1}{2}O_2(g)$",
              "$2C(s, graphite) + O_2(g) \\rightarrow 2CO(g)$",
            ],
            correctIndex: 0,
            hint: "Standard formation reactions must form exactly one mole of the product compound from its elements in their standard states.",
            explanation: "The standard enthalpy of formation reaction must: 1) produce exactly 1 mole of the target compound ($CO(g)$), and 2) use only pure elements in their standard states (carbon as graphite solid, oxygen as $O_2$ gas). Thus, $C(s, graphite) + \\frac{1}{2}O_2(g) \\rightarrow CO(g)$ is the correct formation reaction.",
          },
          {
            id: "q6.3.9",
            unitId: 6,
            text: "If the standard enthalpy of formation of liquid water is $-286 \\text{ kJ/mol}$ and that of gaseous water is $-242 \\text{ kJ/mol}$, what is the enthalpy of vaporization of water ($H_2O(l) \\rightarrow H_2O(g)$)?",
            options: [
              "$+44 \\text{ kJ/mol}$",
              "$-44 \\text{ kJ/mol}$",
              "$+528 \\text{ kJ/mol}$",
              "$-528 \\text{ kJ/mol}$",
            ],
            correctIndex: 0,
            hint: "Enthalpy of vaporization is the enthalpy change for H2O(l) -> H2O(g). Apply delta H_rxn = delta H_f(products) - delta H_f(reactants).",
            explanation: "For the reaction $H_2O(l) \\rightarrow H_2O(g)$: $\\Delta H_{vap} = \\Delta H_f^\\circ[H_2O(g)] - \\Delta H_f^\\circ[H_2O(l)] = -242 \\text{ kJ/mol} - (-286 \\text{ kJ/mol}) = +44 \\text{ kJ/mol}$.",
          },
          {
            id: "q6.3.10",
            unitId: 6,
            text: "What is the standard state of nitrogen at $25^\\circ\\text{C}$ and $1 \\text{ atm}$?",
            options: [
              "$N(g)$",
              "$N_2(g)$",
              "$N_2(l)$",
              "$NH_3(g)$",
            ],
            correctIndex: 1,
            hint: "Nitrogen exists as a diatomic gas at room temperature and pressure.",
            explanation: "At standard conditions ($25^\\circ\\text{C}$ and $1 \\text{ atm}$), nitrogen is most stable as a diatomic gas ($N_2(g)$). This is its reference standard state, meaning its standard enthalpy of formation $\\Delta H_f^\\circ$ is zero.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Equilibrium",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "7.1",
        title: "Introduction to Reversible Reactions and the Equilibrium Constant K",
        description: "Understand dynamic equilibrium and write equilibrium expressions Kc and Kp. Interpret the magnitude of K and learn how to manipulate K values.",
        youtubeId: "xfGlEXWDRZE",
        article: `# Introduction to Reversible Reactions and the Equilibrium Constant K

Many chemical reactions are reversible, meaning reactants can form products (forward reaction) and products can react to reform reactants (reverse reaction).

## Dynamic Equilibrium

A system reaches <vocab term="Dynamic Equilibrium" definition="A state in a reversible reaction where the rate of the forward reaction equals the rate of the reverse reaction, and concentrations remain constant.">dynamic equilibrium</vocab> when:

$$	ext{Rate of Forward Reaction} = 	ext{Rate of Reverse Reaction}$$

At equilibrium, the concentrations of reactants and products remain **constant over time**, but the chemical reactions **do not stop** (it is dynamic, occurring at equal rates).

<div class="flex justify-center my-8">
<svg width="450" height="250" viewBox="0 0 450 250" class="max-w-full">
<!-- Axes -->
<line x1="60" y1="30" x2="60" y2="200" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="200" x2="420" y2="200" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="230" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Time (t)</text>
<text x="20" y="115" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 115)">Reaction Rate</text>
<!-- Forward Rate Curve (decreasing to y=110) -->
<path d="M 60 50 C 120 50, 180 110, 240 110 L 400 110" fill="none" stroke="#ef4444" stroke-width="3" />
<text x="140" y="70" fill="#ef4444" font-size="10" font-weight="bold">Forward Rate</text>
<!-- Reverse Rate Curve (increasing from 0 to y=110) -->
<path d="M 60 200 C 120 200, 180 110, 240 110 L 400 110" fill="none" stroke="#3b82f6" stroke-width="3" />
<text x="140" y="160" fill="#3b82f6" font-size="10" font-weight="bold">Reverse Rate</text>
<!-- Dashed line at equilibrium onset -->
<line x1="240" y1="30" x2="240" y2="200" stroke="#a1a1aa" stroke-dasharray="3,3" stroke-width="1" />
<rect x="248" y="40" width="140" height="40" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1.5" />
<text x="318" y="55" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Equilibrium Achieved</text>
<text x="318" y="68" fill="#ffffff" font-size="8" text-anchor="middle">Forward Rate = Reverse Rate</text>
</svg>
</div>

## The Law of Mass Action and K

For a general reversible reaction:

$$aA(aq) + bB(g) ightleftharpoons cC(aq) + dD(g)$$

The equilibrium constant expression ($K$) is written as:

$$K_c = rac{[C]^c [D]^d}{[A]^a [B]^b}$$

### Key Rules for Writing K Expressions:
1. **Products over Reactants**: Raised to the power of their stoichiometric coefficients.
2. **Exclude Pure Solids and Pure Liquids**: Their active concentrations are constant and do not appear in the expression (e.g., $H_2O(l)$, $CaCO_3(s)$).
3. **Pressure Expressions** ($K_p$): For gas-phase reactions, use partial pressures ($P_i$) instead of concentrations:
   $$K_p = rac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}$$
   The relationship between $K_p$ and $K_c$ is:
   $$K_p = K_c(RT)^{\\Delta n}$$
   Where $\\Delta n$ is the change in moles of gas ($	ext{moles of product gas} - 	ext{moles of reactant gas}$).

## Magnitude of K

- **$K \\gg 1$**: Products are highly favored at equilibrium. The equilibrium mixture is mostly products.
- **$K \\ll 1$**: Reactants are highly favored at equilibrium. The reaction barely occurs.
- **$K pprox 1$**: Significant amounts of both reactants and products are present at equilibrium.

## Manipulating K Expressions

| Modification to Equation | Effect on Equilibrium Constant ($K$) |
|---|---|
| Reversing the reaction | Invert $K$ ($K' = 1/K$) |
| Multiplying coefficients by factor $n$ | Raise $K$ to the power of $n$ ($K' = K^n$) |
| Adding multiple reactions | Multiply the individual constants ($K' = K_1 	imes K_2$) |
`,
        questions: [
          {
            id: "q7.1.1",
            unitId: 7,
            text: "Write the equilibrium constant expression ($K_c$) for the thermal decomposition of calcium carbonate: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$.",
            options: [
              "$K_c = [CO_2]$",
              "$K_c = \\frac{[CaO][CO_2]}{[CaCO_3]}$",
              "$K_c = \\frac{1}{[CO_2]}$",
              "$K_c = [CaO][CO_2]$",
            ],
            correctIndex: 0,
            hint: "Recall that pure solids are excluded from the equilibrium constant expression.",
            explanation: "$CaCO_3$ and $CaO$ are both pure solids ($s$), so they are excluded from the equilibrium constant expression. Only the gas-phase carbon dioxide ($CO_2$) is included, resulting in $K_c = [CO_2]$.",
          },
          {
            id: "q7.1.2",
            unitId: 7,
            text: "The equilibrium constant ($K_c$) for the reaction: $2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g)$ is $1.6 \\times 10^{12}$ at 300 K. What is the value of the equilibrium constant for the reverse reaction: $2NO_2(g) \\rightleftharpoons 2NO(g) + O_2(g)$ at the same temperature?",
            options: [
              "$6.25 \\times 10^{-13}$",
              "$1.6 \\times 10^{12}$",
              "$-1.6 \\times 10^{12}$",
              "$1.26 \\times 10^6$",
            ],
            correctIndex: 0,
            hint: "When a chemical equation is reversed, its equilibrium constant is inverted.",
            explanation: "For the reversed reaction, $K' = 1 / K = 1 / (1.6 \\times 10^{12}) = 6.25 \\times 10^{-13}$.",
          },
          {
            id: "q7.1.3",
            unitId: 7,
            text: "Under what condition will $K_p$ be equal to $K_c$ for a gas-phase chemical reaction?",
            options: [
              "When the total moles of gas reactants equals the total moles of gas products ($\\Delta n = 0$).",
              "When the temperature of the system is 273 K.",
              "When all reactants and products are in the liquid phase.",
              "When the pressure is exactly 1.0 atm.",
            ],
            correctIndex: 0,
            hint: "Analyze the equation: Kp = Kc * (RT)^Δn. When does (RT)^Δn equal 1?",
            explanation: "The relationship is $K_p = K_c(RT)^{\\Delta n}$. If the number of moles of gaseous products is equal to the number of moles of gaseous reactants, then $\\Delta n = n_{products} - n_{reactants} = 0$. Since any term to the power of 0 is 1, $K_p = K_c(RT)^0 = K_c$.",
          },
          {
            id: "q7.1.4",
            unitId: 7,
            text: `Given the reactions and their constants:
1) $A ightleftharpoons B \\quad K_1 = 2.0$
2) $B ightleftharpoons C \\quad K_2 = 4.0$
What is the equilibrium constant for the reaction: $2A ightleftharpoons 2C$?`,
            options: [
              "64.0",
              "6.0",
              "8.0",
              "16.0",
            ],
            correctIndex: 0,
            hint: "Adding reactions multiplies their constants. Multiplying coefficients by a factor raises the constant to that power.",
            explanation: "First, add reaction 1 and 2 to get $A \\rightleftharpoons C$. The constant is $K_3 = K_1 \\times K_2 = 2.0 \\times 4.0 = 8.0$. Next, multiply the coefficients by 2 to get $2A \\rightleftharpoons 2C$. The new constant is $(K_3)^2 = (8.0)^2 = 64.0$.",
          },
          {
            id: "q7.1.5",
            unitId: 7,
            text: "Which of the following is true for a chemical system that has reached a state of dynamic equilibrium?",
            options: [
              "The rates of the forward and reverse reactions are equal, and the concentrations of reactants and products remain constant.",
              "The reaction has stopped completely.",
              "The concentrations of reactants and products are equal.",
              "The volume of the products is equal to the volume of the reactants.",
            ],
            correctIndex: 0,
            hint: "Equilibrium is dynamic (reactions are active) and is characterized by equal rates.",
            explanation: "At dynamic equilibrium, the forward and reverse reactions occur at the exact same rate. Because molecules are being formed and decomposed at equal rates, there is no net change in the concentration of any reactant or product, although the reactions are actively occurring.",
          },
          {
            id: "q7.1.6",
            unitId: 7,
            text: "For the reaction: $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g) \\quad \\Delta H > 0$. Which of the following changes will shift the equilibrium to the right, producing more products?",
            options: [
              "Decreasing the volume of the container",
              "Increasing the temperature of the system",
              "Adding a catalyst",
              "Removing $PCl_5(g)$",
            ],
            correctIndex: 1,
            hint: "For an endothermic reaction (delta H > 0), heat acts as a reactant. According to Le Chatelier's principle, adding heat (increasing temperature) shifts the equilibrium to consume heat.",
            explanation: "Since the reaction is endothermic ($\\Delta H > 0$), we can think of heat as a reactant: $PCl_5 + \\text{heat} \\rightleftharpoons PCl_3 + Cl_2$. Increasing the temperature adds heat, shifting the equilibrium to the right to consume the added thermal energy. Decreasing the volume shifts to the side with fewer gas moles (left).",
          },
          {
            id: "q7.1.7",
            unitId: 7,
            text: "Write the equilibrium expression $K_c$ for the heterogeneous reaction: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$.",
            options: [
              "$K_c = [CO_2]$",
              "$K_c = [CaO][CO_2] / [CaCO_3]$",
              "$K_c = 1 / [CO_2]$",
              "$K_c = [CaO] / [CaCO_3]$",
            ],
            correctIndex: 0,
            hint: "Pure solids and pure liquids are excluded from the equilibrium constant expression because their concentrations remain constant.",
            explanation: "In a heterogeneous equilibrium, pure solids ($CaCO_3(s)$ and $CaO(s)$) are excluded from the expression. Only gas-phase or aqueous concentrations are included. Thus, the equilibrium expression simplifies to: $K_c = [CO_2]$.",
          },
          {
            id: "q7.1.8",
            unitId: 7,
            text: "For a reaction, the equilibrium constant is $K_c = 2.0 \\times 10^3$ at $25^\\circ\\text{C}$. If a mixture has a reaction quotient of $Q_c = 5.0 \\times 10^4$, what must happen for the system to reach equilibrium?",
            options: [
              "The reaction will proceed forward, producing more products.",
              "The reaction will proceed in reverse, converting products to reactants.",
              "The system is already at equilibrium.",
              "The value of $K_c$ will increase to match $Q_c$.",
            ],
            correctIndex: 1,
            hint: "Compare Q to K. If Q > K, there are too many products relative to reactants, so the system must shift to the left.",
            explanation: "Since $Q_c = 5.0 \\times 10^4$ is greater than $K_c = 2.0 \\times 10^3$, the concentration of products is higher than at equilibrium. To reach equilibrium, the reaction must shift in the reverse direction (to the left), consuming products and forming reactants until $Q_c = K_c$.",
          },
          {
            id: "q7.1.9",
            unitId: 7,
            text: "How does decreasing the volume of the reaction vessel affect the equilibrium of the reaction: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$?",
            options: [
              "It shifts the equilibrium to the left.",
              "It shifts the equilibrium to the right.",
              "It does not affect the equilibrium.",
              "It decreases the rate of the reaction.",
            ],
            correctIndex: 1,
            hint: "Decreasing the volume increases the pressure. The system shifts in the direction that has fewer gas moles to relieve the pressure.",
            explanation: "Decreasing the volume increases the pressure. The reactant side has 4 moles of gas ($1 \\text{ } N_2 + 3 \\text{ } H_2$) and the product side has 2 moles of gas ($2 \\text{ } NH_3$). To reduce the pressure, the system shifts to the right, which has fewer gas moles.",
          },
          {
            id: "q7.1.10",
            unitId: 7,
            text: "If a catalyst is added to the reaction: $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$ at equilibrium, what happens to the concentrations of the reactants and products?",
            options: [
              "The concentration of $SO_3$ increases.",
              "The concentration of $SO_2$ increases.",
              "The concentrations remain unchanged.",
              "The reaction stops completely.",
            ],
            correctIndex: 2,
            hint: "A catalyst speeds up the rate of both forward and reverse reactions equally, but does not change the position of equilibrium.",
            explanation: "Adding a catalyst to a system already at equilibrium does not shift the equilibrium position because it increases the rates of the forward and reverse reactions by the exact same factor. Therefore, the concentrations of all reactants and products remain unchanged.",
          },
        ],
      },
      {
        id: "7.2",
        title: "Equilibrium Calculations and Le Chatelier's Principle",
        description: "Perform equilibrium calculations using ICE tables and solve for shifts in equilibrium using Le Chatelier's Principle.",
        youtubeId: "PciV_Wuh9V8",
        article: `# Equilibrium Calculations and Le Chatelier's Principle

We can use the reaction quotient ($Q$) to determine if a system is at equilibrium, and Le Chatelier's Principle to predict how a system shifts in response to a disturbance.

## The Reaction Quotient Q vs. K

The <vocab term="Reaction Quotient" definition="A ratio of concentration/pressure of products to reactants at any point in time during a reaction, compared with K to determine shift direction.">reaction quotient</vocab> ($Q$) has the same algebraic form as $K$, but uses concentrations or pressures at **any point in time** (not necessarily at equilibrium).
- **$Q < K$**: Not enough products. The reaction shifts to the **right** (forward direction) to reach equilibrium.
- **$Q > K$**: Too many products. The reaction shifts to the **left** (reverse direction) to reach equilibrium.
- **$Q = K$**: The system is at **equilibrium**.

## ICE Tables

For equilibrium calculations, we set up an **ICE table** (Initial, Change, Equilibrium):
1. **Initial**: Write down the starting concentrations or pressures.
2. **Change**: Represent the changes in concentration using a variable $x$, multiplying by stoichiometric coefficients ($-x$ for reactants, $+x$ for products).
3. **Equilibrium**: Express the equilibrium values as the sum of Initial and Change. Substitute these into the $K$ expression to solve for $x$.

## Le Chatelier's Principle

**Le Chatelier's Principle** states that if a stress (change in conditions) is applied to a system at equilibrium, the system will shift in a direction that minimizes the stress.

### Types of Stress and Shifts:
1. **Concentration Changes**:
   - Add a species $ightarrow$ System shifts to **consume** it.
   - Remove a species $ightarrow$ System shifts to **replace** it.
2. **Volume / Pressure Changes (Gases)**:
   - Decrease Volume (Increase Pressure) $ightarrow$ System shifts toward the side with **fewer moles of gas** to reduce pressure.
   - Increase Volume (Decrease Pressure) $ightarrow$ System shifts toward the side with **more moles of gas**.
3. **Temperature Changes**:
   - Treats heat as a reactant (endothermic) or product (exothermic).
   - Heating an endothermic reaction ($Heat + R ightleftharpoons P$) shifts the reaction to the **right**, and **increases $K$**.
   - Heating an exothermic reaction ($R ightleftharpoons P + Heat$) shifts the reaction to the **left**, and **decreases $K$**.
4. **Catalysts and Inert Gases**:
   - Adding a catalyst does NOT shift equilibrium or change $K$ (it speeds up both rates equally).
   - Adding an inert gas (like Helium) at constant volume increases total pressure but does NOT change partial pressures of reactants, so it has **no effect** on equilibrium.

<div class="flex justify-center my-8">
<svg width="450" height="280" viewBox="0 0 450 280" class="max-w-full">
<!-- Axes -->
<line x1="60" y1="30" x2="60" y2="220" stroke="#a1a1aa" stroke-width="2" />
<line x1="60" y1="220" x2="420" y2="220" stroke="#a1a1aa" stroke-width="2" />
<!-- Axis Labels -->
<text x="240" y="250" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Time</text>
<text x="20" y="125" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 20 125)">Concentration (M)</text>
<!-- N2 (Blue) -->
<path d="M 60 125 L 150 125 L 150 65 C 150 65, 180 85, 250 85 L 400 85" fill="none" stroke="#60a5fa" stroke-width="2.5" />
<!-- H2 (Yellow) -->
<path d="M 60 100 L 150 100 C 150 100, 180 120, 250 120 L 400 120" fill="none" stroke="#f59e0b" stroke-width="2.5" />
<!-- NH3 (Green) -->
<path d="M 60 170 L 150 170 C 150 170, 180 150, 250 150 L 400 150" fill="none" stroke="#10b981" stroke-width="2.5" />
<!-- Spike stress marker -->
<line x1="150" y1="30" x2="150" y2="220" stroke="#ef4444" stroke-dasharray="2,2" stroke-width="1.5" />
<text x="155" y="45" fill="#ef4444" font-size="9" font-weight="bold">Add N₂ (Stress)</text>
<!-- Labels -->
<text x="350" y="80" fill="#60a5fa" font-size="9" font-weight="bold">[N₂]</text>
<text x="350" y="115" fill="#f59e0b" font-size="9" font-weight="bold">[H₂]</text>
<text x="350" y="145" fill="#10b981" font-size="9" font-weight="bold">[NH₃]</text>
<text x="105" y="210" fill="#a1a1aa" font-size="9" text-anchor="middle">Equilibrium 1</text>
<text x="325" y="210" fill="#a1a1aa" font-size="9" text-anchor="middle">Equilibrium 2</text>
</svg>
</div>
`,
        questions: [
          {
            id: "q7.2.1",
            unitId: 7,
            text: "For the reaction: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad K_c = 0.50$ at a certain temperature. A flask contains 1.0 M $N_2$, 1.0 M $H_2$, and 1.0 M $NH_3$. In which direction will the reaction shift to reach equilibrium?",
            options: [
              "The reaction will shift to the left (reverse) because $Q > K$.",
              "The reaction will shift to the right (forward) because $Q < K$.",
              "The system is already at equilibrium ($Q = K$).",
              "The reaction will shift to the left because $Q < K$.",
            ],
            correctIndex: 0,
            hint: "Calculate the reaction quotient Q using the given concentrations and compare it to K = 0.50.",
            explanation: "$Q_c = [NH_3]^2 / ([N_2][H_2]^3) = (1.0)^2 / (1.0 \\times (1.0)^3) = 1.0$. Since $Q_c = 1.0$ and $K_c = 0.50$, we have $Q_c > K_c$. The system contains too much product, so it must shift to the left (reverse direction) to reach equilibrium.",
          },
          {
            id: "q7.2.2",
            unitId: 7,
            text: "For the exothermic Haber process: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta H < 0$. Which of the following stresses will shift the equilibrium to the right, producing more ammonia?",
            options: [
              "Decreasing the volume of the container.",
              "Increasing the temperature of the container.",
              "Removing nitrogen gas from the container.",
              "Adding a solid catalyst.",
            ],
            correctIndex: 0,
            hint: "Identify the number of moles of gas on both sides. Decreasing volume shifts the system toward fewer moles of gas.",
            explanation: "Decreasing container volume increases the concentrations/partial pressures of all gases. The system shifts to minimize pressure by moving to the side with fewer gas molecules. The reactant side has 4 moles of gas ($1 + 3$), and the product side has 2 moles of gas. Thus, it shifts to the right. Increasing temperature shifts left (since it is exothermic). Adding a catalyst has no effect on equilibrium.",
          },
          {
            id: "q7.2.3",
            unitId: 7,
            text: "For a particular endothermic reaction, how do the equilibrium constant ($K$) and the equilibrium position change when the temperature is increased?",
            options: [
              "$K$ increases, and the equilibrium shifts to the right.",
              "$K$ decreases, and the equilibrium shifts to the left.",
              "$K$ remains the same, but the equilibrium shifts to the right.",
              "$K$ increases, but the equilibrium shifts to the left.",
            ],
            correctIndex: 0,
            hint: "Heat is a reactant in an endothermic reaction. Adding heat shifts the reaction away from the reactant side.",
            explanation: "For an endothermic reaction ($Heat + Reactants \\rightleftharpoons Products$), increasing temperature is like adding a reactant, shifting the equilibrium to the right. Because this shift increases the concentration of products and decreases reactants, the value of the equilibrium constant $K = [Products]/[Reactants]$ must increase.",
          },
          {
            id: "q7.2.4",
            unitId: 7,
            text: "A student adds Helium ($He$) gas to a rigid 1.0 L container containing a gaseous system at equilibrium at constant volume. Which of the following describes the effect on the equilibrium position?",
            options: [
              "There is no shift in the equilibrium position.",
              "The equilibrium shifts to the side with fewer moles of gas.",
              "The equilibrium shifts to the side with more moles of gas.",
              "The equilibrium constant $K$ increases.",
            ],
            correctIndex: 0,
            hint: "Check if adding helium alters the partial pressures of the reacting gases in a rigid container.",
            explanation: "Although adding Helium increases the total pressure inside the container, it does not change the concentrations or partial pressures of the reacting gases because the volume is constant. Since the partial pressures in the $K_p$ expression are unchanged, the system does not shift.",
          },
          {
            id: "q7.2.5",
            unitId: 7,
            text: "A reaction $A(aq) \\rightleftharpoons 2B(aq)$ has $K_c = 1.0 \\times 10^{-5}$. If the initial concentration of $A$ is 1.0 M and no $B$ is present, what is the equilibrium concentration of $B$?",
            options: [
              "$3.2 \\times 10^{-3} M$",
              "$1.0 \\times 10^{-5} M$",
              "$1.0 M$",
              "$1.0 \\times 10^{-3} M$",
            ],
            correctIndex: 0,
            hint: "Set up an ICE table: [A]_eq = 1.0 - x, [B]_eq = 2x. Since K is very small, approximate 1.0 - x ≈ 1.0.",
            explanation: "ICE table: $A \\rightleftharpoons 2B$, Initial: $1.0 \\text{ M}$, $0$. Change: $-x$, $+2x$. Equilibrium: $1.0-x$, $2x$. $K_c = [B]^2/[A] = (2x)^2 / (1.0-x) \\approx 4x^2 = 1.0 \\times 10^{-5} \\rightarrow x = 1.58 \\times 10^{-3} \\text{ M}$. Thus, $[B]_{eq} = 2x = 3.2 \\times 10^{-3} \\text{ M}$.",
          },
          {
            id: "q7.2.6",
            unitId: 7,
            text: "What is the relationship between the molar solubility $s$ (in mol/L) and the solubility product constant $K_{sp}$ for the salt calcium fluoride ($CaF_2$)?",
            options: [
              "$K_{sp} = s^2$",
              "$K_{sp} = 4s^3$",
              "$K_{sp} = 27s^4$",
              "$K_{sp} = 8s^3$",
            ],
            correctIndex: 1,
            hint: "Write the dissociation equation: CaF2(s) <-> Ca2+(aq) + 2F-(aq). If the molar solubility is s, then [Ca2+] = s and [F-] = 2s. Substitute these into the Ksp expression.",
            explanation: "The dissociation of calcium fluoride is: $CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$. If the solubility is $s$, then $[Ca^{2+}] = s$ and $[F^-] = 2s$. The solubility product expression is: $K_{sp} = [Ca^{2+}][F^-]^2 = (s)(2s)^2 = s(4s^2) = 4s^3$.",
          },
          {
            id: "q7.2.7",
            unitId: 7,
            text: "The solubility product constant $K_{sp}$ of silver chloride ($AgCl$) is $1.8 \\times 10^{-10}$ at $25^\\circ\\text{C}$. What is the molar solubility of $AgCl$ in a $0.10 M$ $NaCl$ solution?",
            options: [
              "$1.3 \\times 10^{-5} M$",
              "$1.8 \\times 10^{-9} M$",
              "$1.8 \\times 10^{-10} M$",
              "$1.8 \\times 10^{-5} M$",
            ],
            correctIndex: 1,
            hint: "Apply the common ion effect: the concentration of Cl- in solution is dominated by the NaCl dissolved, so [Cl-] approx 0.10 M. Solve for [Ag+] in Ksp = [Ag+][Cl-].",
            explanation: "Dissociation: $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$. Here, $[Cl^-]$ is composed of $Cl^-$ from $AgCl$ ($s$) plus $Cl^-$ from $NaCl$ ($0.10 \\text{ M}$). Since $K_{sp}$ is very small, $s \\ll 0.10$, so $[Cl^-] \\approx 0.10 \\text{ M}$. $K_{sp} = [Ag^+][Cl^-] \\implies 1.8 \\times 10^{-10} = (s)(0.10) \\implies s = 1.8 \\times 10^{-9} \\text{ M}$.",
          },
          {
            id: "q7.2.8",
            unitId: 7,
            text: "A student mixes equal volumes of $0.0020 M$ $Pb(NO_3)_2(aq)$ and $0.0020 M$ $NaCl(aq)$. Will a precipitate of $PbCl_2(s)$ form? ($K_{sp}$ of $PbCl_2 = 1.7 \\times 10^{-5}$)",
            options: [
              "Yes, because $Q > K_{sp}$.",
              "No, because $Q < K_{sp}$.",
              "Yes, because $Q < K_{sp}$.",
              "No, because $Q > K_{sp}$.",
            ],
            correctIndex: 1,
            hint: "Calculate the reaction quotient Q = [Pb2+][Cl-]^2. Remember that mixing equal volumes dilutes the concentration of each ion by half.",
            explanation: "After mixing equal volumes, the concentrations are halved: $[Pb^{2+}] = 0.0010 \\text{ M} = 1.0 \\times 10^{-3} \\text{ M}$, $[Cl^-] = 0.0010 \\text{ M} = 1.0 \\times 10^{-3} \\text{ M}$. Calculate $Q = [Pb^{2+}][Cl^-]^2 = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$. Since $Q = 1.0 \\times 10^{-9}$ is much smaller than $K_{sp} = 1.7 \\times 10^{-5}$, no precipitate will form.",
          },
          {
            id: "q7.2.9",
            unitId: 7,
            text: "Which of the following compounds is more soluble in acidic solution than in pure water?",
            options: [
              "$AgCl$",
              "$CaCO_3$",
              "$PbI_2$",
              "$KNO_3$",
            ],
            correctIndex: 1,
            hint: "Look for a salt containing a basic anion. The H+ ions in acid will react with the basic anion, removing it from equilibrium and shifting the solubility to the right.",
            explanation: "$CaCO_3$ contains the carbonate anion ($CO_3^{2-}$), which is the conjugate base of the weak acid $HCO_3^-$. In acidic solution, $H^+$ reacts with $CO_3^{2-}$ to form $HCO_3^-$ (and eventually $CO_2$ and $H_2O$). According to Le Chatelier's principle, removing $CO_3^{2-}$ shifts the dissolution equilibrium: $CaCO_3(s) \\rightleftharpoons Ca^{2+} + CO_3^{2-}$ to the right, increasing solubility.",
          },
          {
            id: "q7.2.10",
            unitId: 7,
            text: "The solubility of an ionic compound is endothermic. How does its solubility product constant ($K_{sp}$) change with temperature?",
            options: [
              "It remains constant.",
              "It increases as temperature increases.",
              "It decreases as temperature increases.",
              "It decreases to zero.",
            ],
            correctIndex: 1,
            hint: "For an endothermic dissolution, heat can be treated as a reactant. Increasing temperature shifts the equilibrium to the right, producing more dissolved ions.",
            explanation: "Because the dissolution is endothermic, $\\Delta H_{soln} > 0$. Increasing the temperature shifts the equilibrium forward: $\\text{Solid} + \\text{heat} \\rightleftharpoons \\text{Ions}$, producing a higher concentration of dissolved ions at equilibrium. This increases the product $[Cation][Anion]$, resulting in a larger $K_{sp}$.",
          },
        ],
      },
      {
        id: "7.3",
        title: "Solubility Equilibria Ksp, Common-Ion Effect, and pH",
        description: "Calculate solubility product constants (Ksp) and molar solubility. Understand how the common-ion effect and pH changes modify solubility.",
        youtubeId: "KVZ_KS45rVg",
        article: `# Solubility Equilibria Ksp, Common-Ion Effect, and pH

Slightly soluble ionic compounds set up a heterogeneous equilibrium between the solid salt and its dissolved ions.

## The Solubility Product Constant Ksp

For a saturated solution of a slightly soluble salt:

$$M_xX_y(s) ightleftharpoons x M^{y+}(aq) + y X^{x-}(aq)$$

The <vocab term="Solubility Product Constant" definition="The equilibrium constant for the dissolution of a slightly soluble ionic compound in water.">solubility product constant</vocab> ($K_{sp}$) expression is:

$$K_{sp} = [M^{y+}]^x [X^{x-}]^y$$

Solid $M_xX_y$ is a pure solid and is **excluded** from the expression.

### Molar Solubility:
The amount of salt (in moles) that dissolves to saturate $1 	ext{ L}$ of solution.
- For a $1:1$ salt like $AgCl(s) ightleftharpoons Ag^+(aq) + Cl^-(aq)$:
  $$K_{sp} = [s][s] = s^2 ightarrow s = \\sqrt{K_{sp}}$$
- For a $1:2$ salt like $CaF_2(s) ightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$:
  $$K_{sp} = [s][2s]^2 = 4s^3 ightarrow s = \\sqrt[3]{rac{K_{sp}}{4}}$$

## The Common-Ion Effect

According to Le Chatelier's Principle, adding a dissolved ion that is already present in the solubility equilibrium (a **common ion**) will shift the equilibrium to the **left**, causing precipitation and **decreasing the molar solubility** of the salt.
- *Example*: The solubility of $AgCl$ is significantly lower in a $0.10 	ext{ M } NaCl$ solution than in pure water, because the excess $Cl^-$ shifts $AgCl(s) ightleftharpoons Ag^+ + Cl^-$ to the left.

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Beaker 1: Pure Water -->
<g transform="translate(40, 20)">
<text x="60" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">In Pure Water</text>
<path d="M 10 30 L 10 140 C 10 150, 110 150, 110 140 L 110 30" fill="rgba(255,255,255,0.02)" stroke="#ffffff" stroke-width="2" />
<path d="M 12 60 C 50 58, 70 62, 108 60 L 108 140 C 108 145, 12 145, 12 140 Z" fill="rgba(59, 130, 246, 0.1)" />
<!-- Dissolved Ions (More) -->
<circle cx="35" cy="80" r="7" fill="#60a5fa" opacity="0.4" />
<text x="35" y="82" fill="#ffffff" font-size="6" text-anchor="middle">Ag⁺</text>
<circle cx="85" cy="85" r="7" fill="#10b981" opacity="0.4" />
<text x="85" y="87" fill="#ffffff" font-size="6" text-anchor="middle">Cl⁻</text>
<circle cx="50" cy="110" r="7" fill="#60a5fa" opacity="0.4" />
<text x="50" y="112" fill="#ffffff" font-size="6" text-anchor="middle">Ag⁺</text>
<circle cx="75" cy="115" r="7" fill="#10b981" opacity="0.4" />
<text x="75" y="117" fill="#ffffff" font-size="6" text-anchor="middle">Cl⁻</text>
<!-- Small solid pile -->
<path d="M 40 140 Q 60 130, 80 140 Z" fill="#d4d4d4" stroke="#737373" />
<text x="60" y="165" fill="#a1a1aa" font-size="9" text-anchor="middle">High Solubility</text>
</g>
<!-- Beaker 2: 0.1M NaCl (Common Ion) -->
<g transform="translate(250, 20)">
<text x="60" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">In 0.1 M NaCl</text>
<path d="M 10 30 L 10 140 C 10 150, 110 150, 110 140 L 110 30" fill="rgba(255,255,255,0.02)" stroke="#ffffff" stroke-width="2" />
<path d="M 12 60 C 50 58, 70 62, 108 60 L 108 140 C 108 145, 12 145, 12 140 Z" fill="rgba(59, 130, 246, 0.1)" />
<!-- Dissolved Ions (Fewer Ag+, many Cl-) -->
<circle cx="35" cy="80" r="7" fill="#60a5fa" opacity="0.4" />
<text x="35" y="82" fill="#ffffff" font-size="6" text-anchor="middle">Ag⁺</text>
<!-- Cl- from NaCl -->
<circle cx="55" cy="90" r="7" fill="#10b981" opacity="0.6" />
<text x="55" y="92" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Cl⁻</text>
<circle cx="85" cy="85" r="7" fill="#10b981" opacity="0.6" />
<text x="85" y="87" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Cl⁻</text>
<circle cx="75" cy="115" r="7" fill="#10b981" opacity="0.6" />
<text x="75" y="117" fill="#ffffff" font-size="6" font-weight="bold" text-anchor="middle">Cl⁻</text>
<!-- Larger solid pile due to precipitation shift -->
<path d="M 30 140 Q 60 120, 90 140 Z" fill="#d4d4d4" stroke="#737373" />
<text x="60" y="165" fill="#a1a1aa" font-size="9" text-anchor="middle">Low Solubility (precipitates)</text>
</g>
</svg>
</div>

## The Effect of pH on Solubility

If a salt contains a **conjugate base of a weak acid** (e.g., $F^-$ from $HF$, $CO_3^{2-}$ from $H_2CO_3$, or $OH^-$), its solubility is pH-dependent:
- **Adding Acid** (lowering pH) adds $H^+$ ions, which react with and consume the basic anion:
  $$H^+(aq) + F^-(aq) ightarrow HF(aq)$$
- This consumption of product shifts the solubility equilibrium to the **right**, **increasing the solubility** of the salt.
- Salts containing anions of strong acids (like $Cl^-$ or $NO_3^-$) do not react with $H^+$ and are **unaffected by pH changes**.
`,
        questions: [
          {
            id: "q7.3.1",
            unitId: 7,
            text: "The molar solubility of silver chloride ($AgCl$) in pure water is $1.3 \\times 10^{-5} M$. What is the solubility product constant ($K_{sp}$) of $AgCl$?",
            options: [
              "$1.7 \\times 10^{-10}$",
              "$1.3 \\times 10^{-5}$",
              "$2.6 \\times 10^{-5}$",
              "$3.4 \\times 10^{-10}$",
            ],
            correctIndex: 0,
            hint: "Set up the relation Ksp = s^2 for a 1:1 salt.",
            explanation: "For $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$, the solubility expression is $K_{sp} = [Ag^+][Cl^-]$. If the molar solubility is $s$, then $[Ag^+] = [Cl^-] = s$. Thus, $K_{sp} = s^2 = (1.3 \\times 10^{-5})^2 = 1.69 \\times 10^{-10}$.",
          },
          {
            id: "q7.3.2",
            unitId: 7,
            text: "The $K_{sp}$ of calcium fluoride ($CaF_2$) is $4.0 \\times 10^{-11}$. What is its molar solubility in a $0.10 M$ sodium fluoride ($NaF$) solution?",
            options: [
              "$4.0 \\times 10^{-9} M$",
              "$2.2 \\times 10^{-4} M$",
              "$4.0 \\times 10^{-10} M$",
              "$2.0 \\times 10^{-5} M$",
            ],
            correctIndex: 0,
            hint: "Use the common-ion concentration [F-] = 0.10 M in the Ksp expression: Ksp = [Ca2+][F-]^2.",
            explanation: "$CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$. The $K_{sp} = [Ca^{2+}][F^-]^2$. In a solution of $0.10 \\text{ M } NaF$, the concentration of $F^-$ is dominated by the fully dissolved $NaF$, so $[F^-] \\approx 0.10 \\text{ M}$. Let $s$ be the molar solubility of $CaF_2$, so $[Ca^{2+}] = s$. Substituting: $K_{sp} = s \\times (0.10)^2 = 4.0 \\times 10^{-11} \\rightarrow s \\times 0.010 = 4.0 \\times 10^{-11} \\rightarrow s = 4.0 \\times 10^{-9} \\text{ M}$.",
          },
          {
            id: "q7.3.3",
            unitId: 7,
            text: "For which of the following salts will solubility increase significantly when the pH of the solution is decreased (made more acidic)?",
            options: [
              "$CaF_2$",
              "$AgCl$",
              "$PbI_2$",
              "$KNO_3$",
            ],
            correctIndex: 0,
            hint: "Look for a salt whose anion is a weak base (the conjugate base of a weak acid).",
            explanation: "$CaF_2$ dissociates into $Ca^{2+}$ and $F^-$. Since $F^-$ is the conjugate base of the weak acid $HF$, it is basic. Adding acid ($H^+$) consumes $F^-$ to form $HF$: $H^+ + F^- \\rightarrow HF$. According to Le Chatelier's Principle, removing $F^-$ shifts the dissolution of $CaF_2$ to the right, increasing solubility. $Cl^-$ and $I^-$ are conjugates of strong acids and do not react with $H^+$.",
          },
          {
            id: "q7.3.4",
            unitId: 7,
            text: "A student mixes 100 mL of $0.0020 M \\text{ } Pb(NO_3)_2$ with 100 mL of $0.010 M \\text{ } NaCl$. Does a precipitate of lead(II) chloride ($PbCl_2$, $K_{sp} = 1.6 \\times 10^{-5}$) form?",
            options: [
              "No, because $Q < K_{sp}$.",
              "Yes, because $Q > K_{sp}$.",
              "Yes, because $Q < K_{sp}$.",
              "No, because $Q > K_{sp}$.",
            ],
            correctIndex: 0,
            hint: "Calculate the diluted concentrations of Pb2+ and Cl- first, then calculate Q = [Pb2+][Cl-]^2.",
            explanation: "The solutions are diluted by a factor of 2 when mixed. $[Pb^{2+}] = 0.0010 \\text{ M}$, $[Cl^-] = 0.0050 \\text{ M}$. $Q = [Pb^{2+}][Cl^-]^2 = (0.0010) \\times (0.0050)^2 = 1.0 \\times 10^{-3} \\times 2.5 \\times 10^{-5} = 2.5 \\times 10^{-8}$. Since $Q = 2.5 \\times 10^{-8}$ is less than $K_{sp} = 1.6 \\times 10^{-5}$, no precipitate forms.",
          },
          {
            id: "q7.3.5",
            unitId: 7,
            text: "How does the molar solubility ($s$) of a slightly soluble salt in a saturated solution change if more of the solid salt is added to the bottom of the container?",
            options: [
              "The molar solubility remains the same.",
              "The molar solubility increases.",
              "The molar solubility decreases.",
              "The solid salt reacts with water to increase the pH.",
            ],
            correctIndex: 0,
            hint: "Recall that solids do not participate in equilibrium expressions, and saturated solutions cannot dissolve more solute.",
            explanation: "Molar solubility is a constant property for a saturated solution at a given temperature. Adding more solid salt to the container does not change the concentrations of the dissolved ions in the saturated solution (since solid is excluded from the $K_{sp}$ expression). The extra solid simply sits at the bottom.",
          },
          {
            id: "q7.3.6",
            unitId: 7,
            text: "What is the relationship between standard free energy change $\\Delta G^\\circ$ and the equilibrium constant $K$ of a reaction at temperature $T$?",
            options: [
              "$\\Delta G^\\circ = -RT \\ln K$",
              "$\\Delta G^\\circ = RT \\ln K$",
              "$\\Delta G^\\circ = -RT \\log K$",
              "$\\Delta G^\\circ = -nFE^\\circ$",
            ],
            correctIndex: 0,
            hint: "This equation links the thermodynamics of a reaction to its equilibrium state. Make sure you use the natural logarithm.",
            explanation: "The fundamental thermodynamic relationship between standard free energy change and the equilibrium constant is: $\\Delta G^\\circ = -RT \\ln K$. If $\\Delta G^\\circ$ is negative, $K > 1$ and products are favored at equilibrium. If $\\Delta G^\\circ$ is positive, $K < 1$ and reactants are favored.",
          },
          {
            id: "q7.3.7",
            unitId: 7,
            text: "If a reaction has an equilibrium constant of $K = 5.0 \\times 10^{-6}$ at $298 \\text{ K}$, what is the sign and magnitude of $\\Delta G^\\circ$?",
            options: [
              "$\\Delta G^\\circ$ is negative, and the reaction is thermodynamically favorable.",
              "$\\Delta G^\\circ$ is positive, and the reaction is thermodynamically unfavorable.",
              "$\\Delta G^\\circ$ is zero.",
              "$\\Delta G^\\circ$ is positive, and the reaction is thermodynamically favorable.",
            ],
            correctIndex: 1,
            hint: "Since K is much smaller than 1, the reaction favors reactants at equilibrium. Plug this qualitative trend into the thermodynamic equation.",
            explanation: "Because $K = 5.0 \\times 10^{-6} < 1$, the reaction is reactant-favored at equilibrium. In $\\Delta G^\\circ = -RT \\ln K$, the natural logarithm of a number less than 1 is negative. Multiplying by $-RT$ (which is positive) yields a positive value for $\\Delta G^\\circ$. A positive $\\Delta G^\\circ$ means the reaction is thermodynamically unfavorable under standard conditions.",
          },
          {
            id: "q7.3.8",
            unitId: 7,
            text: "A reaction has a standard free energy change of $\\Delta G^\\circ = -30.0 \\text{ kJ/mol}$ at $25^\\circ\\text{C}$. Calculate the equilibrium constant $K$ of this reaction. ($R = 8.314 \\text{ J/mol} \\cdot \\text{K}$)",
            options: [
              "$1.8 \\times 10^5$",
              "$5.6 \\times 10^{-6}$",
              "$1.0$",
              "$1.2 \\times 10^{-12}$",
            ],
            correctIndex: 0,
            hint: "Rearrange the equation: ln K = -delta G* / RT. Make sure to convert kJ to J, and temperature to Kelvin (298 K).",
            explanation: "Convert $\\Delta G^\\circ$ to J/mol: $-30000 \\text{ J/mol}$. $T = 298 \\text{ K}$. $\\ln K = -\\frac{-30000}{8.314 \\times 298} = \\frac{30000}{2477.5} \\approx 12.11$. $K = e^{12.11} \\approx 1.8 \\times 10^5$.",
          },
          {
            id: "q7.3.9",
            unitId: 7,
            text: "If a reaction is thermodynamically unfavorable under standard conditions ($\\Delta G^\\circ > 0$), how can it be made to proceed in the forward direction in a industrial process?",
            options: [
              "By coupling it to a highly favorable reaction (like ATP hydrolysis or combustion).",
              "By adding a catalyst.",
              "By increasing the activation energy.",
              "It can never proceed under any conditions.",
            ],
            correctIndex: 0,
            hint: "A catalyst only affects the speed, not the favorability. Coupling reactions allows the net free energy change to be negative.",
            explanation: "An unfavorable reaction can be driven forward by coupling it to a second, highly thermodynamically favorable reaction (such that the sum of the standard free energies of the two reactions is negative). This is commonly used in biology (ATP coupling) and metallurgy (smelting ores).",
          },
          {
            id: "q7.3.10",
            unitId: 7,
            text: "For the vaporization of water at $100^\\circ\\text{C}$ and $1 \\text{ atm}$ ($H_2O(l) \\rightleftharpoons H_2O(g)$), what is the value of $\\Delta G$?",
            options: [
              "It is positive.",
              "It is negative.",
              "It is exactly zero.",
              "It depends on the volume of the container.",
            ],
            correctIndex: 2,
            hint: "At the boiling point under 1 atm pressure, liquid water and water vapor are at dynamic equilibrium.",
            explanation: "At the normal boiling point ($100^\\circ\\text{C}$ and $1 \\text{ atm}$), vaporization is at equilibrium. For any system in a state of dynamic equilibrium at constant temperature and pressure, the change in Gibbs free energy ($\\Delta G$) is exactly zero.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Acids and Bases",
    masteryWeight: "11–15%",
    topics: [
      {
        id: "8.1",
        title: "pH and pOH of Strong and Weak Acid and Base Equilibria",
        description: "Understand the water autoionization constant (Kw) and calculate pH, pOH, and percent ionization for strong and weak acid/base solutions.",
        youtubeId: "rIvEvwViJGk",
        article: `# pH and pOH of Strong and Weak Acid and Base Equilibria

Acids and bases are defined by proton transfer. The strength of an acid or base depends on its degree of dissociation in water.

## Autoionization of Water and the pH Scale

Water undergoes self-ionization to a tiny extent:

$$H_2O(l) + H_2O(l) ightleftharpoons H_3O^+(aq) + OH^-(aq)$$

The equilibrium constant is the **water ionization constant** ($K_w$):

$$K_w = [H_3O^+][OH^-] = 1.0 	imes 10^{-14} \\quad (	ext{at } 25^\\circ	ext{C})$$

Because this is an endothermic process, $K_w$ increases with temperature.
- **pH**: $-\\log[H_3O^+]$
- **pOH**: $-\\log[OH^-]$
- **Relationship**: $	ext{pH} + 	ext{pOH} = 	ext{p}K_w = 14.0 \\quad (	ext{at } 25^\\circ	ext{C})$

<div class="flex justify-center my-8">
<svg width="450" height="100" viewBox="0 0 450 100" class="max-w-full">
<!-- Gradient spectrum background -->
<defs>
<linearGradient id="ph-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
<stop offset="0%" stop-color="#ef4444" />
<stop offset="50%" stop-color="#22c55e" />
<stop offset="100%" stop-color="#3b82f6" />
</linearGradient>
</defs>
<rect x="20" y="30" width="410" height="25" rx="5" fill="url(#ph-gradient)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
<!-- Ticks -->
<line x1="20" y1="55" x2="20" y2="62" stroke="#ffffff" stroke-width="1.5" />
<line x1="122.5" y1="55" x2="122.5" y2="60" stroke="#ffffff" stroke-width="1" />
<line x1="225" y1="55" x2="225" y2="65" stroke="#ffffff" stroke-width="2" />
<line x1="327.5" y1="55" x2="327.5" y2="60" stroke="#ffffff" stroke-width="1" />
<line x1="430" y1="55" x2="430" y2="62" stroke="#ffffff" stroke-width="1.5" />
<!-- Tick Labels -->
<text x="20" y="75" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">pH 0 (Acidic)</text>
<text x="225" y="80" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">pH 7 (Neutral)</text>
<text x="430" y="75" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="middle">pH 14 (Basic)</text>
<!-- Concept Label -->
<text x="225" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">The pH Scale ([H₃O⁺] concentration)</text>
</svg>
</div>

## Strong Acids and Bases

Strong acids and bases ionize $100\\%$ in water.
- **Strong Acids**: $HCl, HBr, HI, HNO_3, H_2SO_4, HClO_4$.
  - For a monoprotic strong acid, $[H_3O^+] = [	ext{Acid}]_0$.
- **Strong Bases**: Soluble metal hydroxides (Group 1 hydroxides and $Ca(OH)_2, Sr(OH)_2, Ba(OH)_2$).
  - $[OH^-] = n 	imes [	ext{Base}]_0$ (where $n$ is the number of hydroxide ions per formula unit).

## Weak Acids and Bases

Weak acids and bases only partially ionize in water, setting up an equilibrium.

- **Weak Acid Ionization**:
  $$HA(aq) + H_2O(l) ightleftharpoons H_3O^+(aq) + A^-(aq) \\quad K_a = rac{[H_3O^+][A^-]}{[HA]}$$
  To find pH, set up an ICE table, which simplifies to:
  $$[H_3O^+] pprox \\sqrt{K_a [HA]_0} \\quad 	ext{(if } K_a 	ext{ is small relative to } [HA]_0	ext{)}$$
- **Weak Base Ionization**:
  $$B(aq) + H_2O(l) ightleftharpoons BH^+(aq) + OH^-(aq) \\quad K_b = rac{[BH^+][OH^-]}{[B]}$$
  $$[OH^-] pprox \\sqrt{K_b [B]_0}$$

- **Conjugate Relationship**:
  $$K_a 	imes K_b = K_w$$

- **Percent Ionization**:
  $$\\% 	ext{ Ionization} = \\left( rac{[H_3O^+]_{	ext{eq}}}{[HA]_0} ight) 	imes 100\\%$$
  *Note*: As a weak acid solution is diluted, the percent ionization **increases** (due to Le Chatelier shifting the system toward more particles).
`,
        questions: [
          {
            id: "q8.1.1",
            unitId: 8,
            text: "What is the pH of a $0.0050 M$ solution of barium hydroxide ($Ba(OH)_2$)? (Assume complete dissociation at 25°C)",
            options: [
              "12.00",
              "2.00",
              "2.30",
              "11.70",
            ],
            correctIndex: 0,
            hint: "Barium hydroxide is a strong base that releases two OH- ions per formula unit. Calculate [OH-] first, then pOH, then pH.",
            explanation: "$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$. $[OH^-] = 2 \\times 0.0050 \\text{ M} = 0.010 \\text{ M}$. $\\text{pOH} = -\\log(0.010) = 2.00$. At 25°C, $\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 2.00 = 12.00$.",
          },
          {
            id: "q8.1.2",
            unitId: 8,
            text: "Calculate the pH of a $0.10 M$ nitrous acid ($HNO_2$) solution. ($K_a = 4.0 \\times 10^{-4}$)",
            options: [
              "2.20",
              "1.00",
              "3.40",
              "4.00",
            ],
            correctIndex: 0,
            hint: "Use the weak acid approximation [H3O+] = sqrt(Ka * [HA]0) to find [H3O+].",
            explanation: "$[H_3O^+] \\approx \\sqrt{K_a [HA]_0} = \\sqrt{4.0 \\times 10^{-4} \\times 0.10} = \\sqrt{4.0 \\times 10^{-5}} = 6.32 \\times 10^{-3} \\text{ M}$. $\\text{pH} = -\\log(6.32 \\times 10^{-3}) \\approx 2.20$.",
          },
          {
            id: "q8.1.3",
            unitId: 8,
            text: "What is the $K_b$ value for the conjugate base of a weak acid that has $K_a = 2.5 \\times 10^{-5}$ at 25°C?",
            options: [
              "$4.0 \\times 10^{-10}$",
              "$2.5 \\times 10^{-5}$",
              "$1.0 \\times 10^{-14}$",
              "$4.0 \\times 10^{-9}$",
            ],
            correctIndex: 0,
            hint: "Use the relationship Ka * Kb = Kw = 1.0 x 10^-14 at 25°C.",
            explanation: "$K_b = K_w / K_a = 1.0 \\times 10^{-14} / (2.5 \\times 10^{-5}) = 4.0 \\times 10^{-10}$.",
          },
          {
            id: "q8.1.4",
            unitId: 8,
            text: "How does the percent ionization of a weak acid solution change if water is added to dilute the solution?",
            options: [
              "The percent ionization increases.",
              "The percent ionization decreases.",
              "The percent ionization remains the same.",
              "The weak acid becomes a strong electrolyte.",
            ],
            correctIndex: 0,
            hint: "Diluting shifts the reaction HA + H2O ⇌ H3O+ + A- toward the side with more aqueous particles.",
            explanation: "Diluting the solution decreases the concentrations of all species. According to Le Chatelier's Principle, the equilibrium shifts to the side with more aqueous ions (the product side) to counteract the dilution. This increases the fraction of acid that is ionized, increasing the percent ionization.",
          },
          {
            id: "q8.1.5",
            unitId: 8,
            text: "At 60°C, the water ionization constant ($K_w$) is $9.6 \\times 10^{-14}$. Which of the following is true regarding pure water at 60°C?",
            options: [
              "The water is neutral, and its pH is approximately 6.5.",
              "The water is acidic because its pH is less than 7.",
              "The water is basic because its pOH is less than 7.",
              "The pH of the water remains 7.00.",
            ],
            correctIndex: 0,
            hint: "Pure water is always neutral because [H3O+] = [OH-]. Calculate pH using [H3O+] = sqrt(Kw).",
            explanation: "Pure water is always neutral because $[H_3O^+] = [OH^-]$. Since $K_w = [H_3O^+][OH^-] = [H_3O^+]^2$, we have $[H_3O^+] = \\sqrt{9.6 \\times 10^{-14}} \\approx 3.1 \\times 10^{-7} \\text{ M}$. The $\\text{pH} = -\\log(3.1 \\times 10^{-7}) \\approx 6.51$. Because $[H_3O^+]$ still equals $[OH^-]$, the water is neutral despite having a pH below 7.",
          },
          {
            id: "q8.1.6",
            unitId: 8,
            text: "What is the pH of a $0.050 M$ $Ba(OH)_2$ solution at $25^\\circ\\text{C}$?",
            options: [
              "1.00",
              "13.00",
              "12.70",
              "1.30$",
            ],
            correctIndex: 1,
            hint: "Ba(OH)2 is a strong base that dissociates completely to yield two hydroxide ions per formula unit. Calculate [OH-] first, then pOH, then pH.",
            explanation: "$Ba(OH)_2(aq) \\rightarrow Ba^{2+}(aq) + 2OH^-(aq)$. Since the concentration of $Ba(OH)_2$ is $0.050 \\text{ M}$, $[OH^-] = 2 \\times 0.050 \\text{ M} = 0.10 \\text{ M}$. $pOH = -\\log[OH^-] = -\\log(0.10) = 1.00$. At $25^\\circ\\text{C}$, $pH = 14.00 - pOH = 14.00 - 1.00 = 13.00$.",
          },
          {
            id: "q8.1.7",
            unitId: 8,
            text: "A weak acid $HA$ has a concentration of $0.10 M$ and is $1.3\\%$ ionized at equilibrium. Calculate the acid dissociation constant $K_a$ of this acid.",
            options: [
              "$1.7 \\times 10^{-5}$",
              "$1.3 \\times 10^{-3}$",
              "$1.7 \\times 10^{-6}$",
              "$1.3 \\times 10^{-2}$",
            ],
            correctIndex: 0,
            hint: "Percent ionization = ([H+]_eq / [HA]_initial) * 100. Find [H+], which equals [A-], and use Ka = [H+][A-] / [HA].",
            explanation: "Calculate $[H^+]_{eq}$: $1.3\\%$ of $0.10 \\text{ M} = 0.013 \\times 0.10 = 0.0013 \\text{ M}$. Since $[H^+] = [A^-] = 0.0013 \\text{ M}$, and $[HA]_{eq} = 0.10 - 0.0013 \\approx 0.10 \\text{ M}$. $K_a = \\frac{[H^+][A^-]}{[HA]} = \\frac{(0.0013)^2}{0.10} = \\frac{1.69 \\times 10^{-6}}{0.10} \\approx 1.7 \\times 10^{-5}$.",
          },
          {
            id: "q8.1.8",
            unitId: 8,
            text: "Which of the following salts will form an acidic aqueous solution when dissolved in water?",
            options: [
              "$NH_4Cl$",
              "$NaF$",
              "$KNO_3$",
              "$CH_3COONa$",
            ],
            correctIndex: 0,
            hint: "Acidic salts are formed from the conjugate acid of a weak base and the conjugate base of a strong acid. The conjugate acid will undergo hydrolysis to yield H+.",
            explanation: "$NH_4Cl$ dissociates into $NH_4^+$ and $Cl^-$. $Cl^-$ is the conjugate base of a strong acid ($HCl$) and does not hydrolyze. $NH_4^+$ is the conjugate acid of a weak base ($NH_3$) and undergoes hydrolysis: $NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$, increasing the concentration of $H_3O^+$ and making the solution acidic.",
          },
          {
            id: "q8.1.9",
            unitId: 8,
            text: "If a weak base $B$ has $K_b = 1.0 \\times 10^{-6}$, what is the $K_a$ value of its conjugate acid $BH^+$ at $25^\\circ\\text{C}$?",
            options: [
              "$1.0 \\times 10^{-6}$",
              "$1.0 \\times 10^{-8}$",
              "$1.0 \\times 10^{-14}$",
              "$1.0 \\times 10^{-7}$",
            ],
            correctIndex: 1,
            hint: "For any conjugate acid-base pair at 25 degrees C, the relationship is Ka * Kb = Kw = 1.0 x 10^-14.",
            explanation: "Using the relationship $K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$: $K_a = K_w / K_b = (1.0 \\times 10^{-14}) / (1.0 \\times 10^{-6}) = 1.0 \\times 10^{-8}$.",
          },
          {
            id: "q8.1.10",
            unitId: 8,
            text: "What is the pH of a $1.0 \\times 10^{-3} M$ solution of $HNO_3$?",
            options: [
              "3.0",
              "11.0",
              "7.0",
              "1.0",
            ],
            correctIndex: 0,
            hint: "HNO3 is a strong acid, so it dissociates 100% to produce [H+] = 1.0 x 10^-3 M.",
            explanation: "Nitric acid ($HNO_3$) is a strong acid, which dissociates completely: $[H^+] = 1.0 \\times 10^{-3} \\text{ M}$. $pH = -\\log[H^+] = -\\log(1.0 \\times 10^{-3}) = 3.0$.",
          },
        ],
      },
      {
        id: "8.2",
        title: "Acid-Base Reactions, Titration Curves, and Molecular Structure",
        description: "Analyze neutralization reactions, interpret pH titration curves (equivalence and half-equivalence points), and relate molecular structure to acid strength.",
        youtubeId: "HdmCagtasYg",
        article: `# Acid-Base Reactions, Titration Curves, and Molecular Structure

Neutralization reactions between acids and bases produce water and a salt. The pH behavior during these reactions is visualized using titration curves.

## Acid-Base Neutralization Reactions

The net ionic equations for neutralization depend on the strengths of the reactants:
1. **Strong Acid + Strong Base**:
   $$H^+(aq) + OH^-(aq) ightarrow H_2O(l) \\quad (	ext{Equivalence Point pH } = 7)$$
2. **Weak Acid + Strong Base**:
   $$HA(aq) + OH^-(aq) ightarrow A^-(aq) + H_2O(l) \\quad (	ext{Equivalence Point pH } > 7)$$
   The conjugate base ($A^-$) hydrolysis makes the solution basic at the equivalence point.
3. **Strong Acid + Weak Base**:
   $$H^+(aq) + B(aq) ightarrow BH^+(aq) \\quad (	ext{Equivalence Point pH } < 7)$$
   The conjugate acid ($BH^+$) hydrolysis makes the solution acidic.

## Analyzing Titration Curves

A titration curve plots pH on the y-axis vs. volume of titrant added on the x-axis.

Below is the pH Titration Curve for a weak acid titrated with a strong base ($NaOH$):

<div class="flex justify-center my-8">
<svg width="450" height="300" viewBox="0 0 450 300" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Y-axis (pH) -->
<line x1="60" y1="30" x2="60" y2="250" stroke="#a1a1aa" stroke-width="2" />
<!-- X-axis (Vol NaOH) -->
<line x1="60" y1="250" x2="420" y2="250" stroke="#a1a1aa" stroke-width="2" />
<!-- Y-axis scale markers -->
<text x="50" y="245" fill="#a1a1aa" font-size="9" text-anchor="end">pH 0</text>
<text x="50" y="190" fill="#a1a1aa" font-size="9" text-anchor="end">pH 4</text>
<text x="50" y="135" fill="#a1a1aa" font-size="9" text-anchor="end">pH 8</text>
<text x="50" y="80" fill="#a1a1aa" font-size="9" text-anchor="end">pH 12</text>
<!-- Dashed pH lines -->
<line x1="60" y1="190" x2="400" y2="190" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
<line x1="60" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
<line x1="60" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3,3" />
<!-- Titration Curve Path -->
<path d="M 60 205 Q 120 195, 170 190 T 230 170 Q 245 160, 250 125 T 255 90 Q 260 75, 320 70 L 410 70" fill="none" stroke="#e0f2fe" stroke-width="3" />
<!-- Half Equivalence Point -->
<circle cx="155" cy="190" r="5" fill="#60a5fa" />
<line x1="155" y1="250" x2="155" y2="190" stroke="#60a5fa" stroke-dasharray="2,2" />
<text x="155" y="260" fill="#60a5fa" font-size="8" text-anchor="middle">12.5 mL</text>
<text x="165" y="180" fill="#60a5fa" font-size="8" font-weight="bold">pH = pKa</text>
<!-- Equivalence Point -->
<circle cx="250" cy="125" r="5" fill="#ff5555" />
<line x1="250" y1="250" x2="250" y2="125" stroke="#ff5555" stroke-dasharray="2,2" />
<text x="250" y="260" fill="#ff5555" font-size="8" text-anchor="middle">25.0 mL</text>
<text x="260" y="120" fill="#ff5555" font-size="8" font-weight="bold">Equivalence Pt</text>
<!-- Labels -->
<text x="240" y="20" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Weak Acid Titration Curve</text>
<text x="15" y="140" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 140)">pH</text>
<text x="240" y="285" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Volume of NaOH added (mL)</text>
</svg>
</div>

1. **Equivalence Point**: The inflection point of the curve where the slope is steepest. The moles of titrant are stoichiometrically equivalent to the moles of analyte.
2. **Half-Equivalence Point**: The point at which exactly half of the weak acid has been neutralized.
   - At this point: $[HA] = [A^-]$
   - According to the Henderson-Hasselbalch equation:
     $$	ext{pH} = 	ext{p}K_a$$
   - This provides an experimental method to determine the $K_a$ of a weak acid.

## Molecular Structure and Acid Strength

Acid strength depends on the ease of donating a proton, which is governed by bond polarity and bond strength.

- **Binary Acids** ($H-X$):
  - **Down a Group**: Acid strength **increases** because atomic size increases, making the $H-X$ bond longer and weaker (e.g., $HF \\ll HCl < HBr < HI$).
  - **Across a Period**: Acid strength **increases** because electronegativity increases, polarizing the $H-X$ bond (e.g., $CH_4 < NH_3 < H_2O < HF$).
- **Oxyacids** ($H-O-Y-\\dots$):
  - **Electronegativity of Central Atom**: If the central atom $Y$ is highly electronegative, it pulls electron density toward itself, polarizing and weakening the $O-H$ bond, increasing acid strength (e.g., $HClO > HBrO > HIO$).
  - **Number of Oxygen Atoms**: More electronegative oxygen atoms pull electron density away from the $O-H$ bond, increasing polarization and stabilizing the conjugate base anion via resonance, making the acid stronger (e.g., $HClO_4 > HClO_3 > HClO_2 > HClO$).
`,
        questions: [
          {
            id: "q8.2.1",
            unitId: 8,
            text: "Which of the following describes the pH at the equivalence point when a weak acid is titrated with a strong base at 25°C?",
            options: [
              "pH is greater than 7.00.",
              "pH is exactly 7.00.",
              "pH is less than 7.00.",
              "pH depends on the color of the indicator.",
            ],
            correctIndex: 0,
            hint: "The weak acid is converted entirely to its conjugate base at the equivalence point.",
            explanation: "At the equivalence point, the weak acid ($HA$) is completely neutralized, leaving its conjugate base ($A^-$) in solution. The conjugate base reacts with water ($A^- + H_2O \\rightleftharpoons HA + OH^-$) to produce hydroxide ions, rendering the solution basic (pH > 7.00).",
          },
          {
            id: "q8.2.2",
            unitId: 8,
            text: "A student titrates a weak acid analyte with $NaOH$. If the pH of the solution is 4.75 when exactly half of the weak acid has been neutralized, what is the $K_a$ of the weak acid?",
            options: [
              "$1.8 \\times 10^{-5}$",
              "$4.75 \\times 10^{-5}$",
              "$1.0 \\times 10^{-7}$",
              "$1.8 \\times 10^{-4}$",
            ],
            correctIndex: 0,
            hint: "At the half-equivalence point, pH = pKa. Calculate Ka from pKa.",
            explanation: "At the half-equivalence point, $[HA] = [A^-]$, so $\\text{pH} = \\text{p}K_a$. Given $\\text{pH} = 4.75$, we have $\\text{p}K_a = 4.75$. To find $K_a$: $K_a = 10^{-\\text{p}K_a} = 10^{-4.75} \\approx 1.8 \\times 10^{-5}$.",
          },
          {
            id: "q8.2.3",
            unitId: 8,
            text: "Which of the following lists the oxyacids in order of increasing acid strength?",
            options: [
              "$HClO < HClO_2 < HClO_3 < HClO_4$",
              "$HClO_4 < HClO_3 < HClO_2 < HClO$",
              "$HClO < HBrO < HIO < HNO_3$",
              "$HIO < HBrO < HClO_4 < HClO$",
            ],
            correctIndex: 0,
            hint: "For oxyacids of the same element, acid strength increases with the number of oxygen atoms.",
            explanation: "As the number of terminal oxygen atoms increases, they pull electron density away from the $O-H$ bond, polarizing it and making it easier to release the proton. Additionally, the extra oxygens stabilize the resulting anion through resonance. Thus, the strength order is $HClO < HClO_2 < HClO_3 < HClO_4$.",
          },
          {
            id: "q8.2.4",
            unitId: 8,
            text: "Explain why hydroiodic acid ($HI$) is a much stronger acid than hydrofluoric acid ($HF$).",
            options: [
              "The $H-I$ bond is weaker because the larger atomic radius of Iodine holds the hydrogen less tightly, making it easier to dissociate.",
              "Iodine is more electronegative than Fluorine, making the bond more polar.",
              "Fluorine forms stronger intermolecular hydrogen bonds with the water solvent.",
              "HI is a diatomic molecule, whereas HF is not.",
            ],
            correctIndex: 0,
            hint: "For binary acids in the same group, bond strength dominates over polarity.",
            explanation: "For binary acids, as you go down a group, the atomic size of the halogen increases ($I > F$). This larger orbital size leads to poor overlap with the $1s$ orbital of hydrogen, resulting in a much weaker covalent bond. The weaker $H-I$ bond dissociates completely in water, while the strong $H-F$ bond does not, making $HF$ a weak acid.",
          },
          {
            id: "q8.2.5",
            unitId: 8,
            text: "What is the net ionic equation for the titration of weak acid $HF$ with strong base $NaOH$?",
            options: [
              "$HF(aq) + OH^-(aq) \\rightarrow F^-(aq) + H_2O(l)$",
              "$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$",
              "$HF(aq) + NaOH(aq) \\rightarrow NaF(aq) + H_2O(l)$",
              "$H^+(aq) + NaOH(aq) \\rightarrow Na^+(aq) + H_2O(l)$",
            ],
            correctIndex: 0,
            hint: "Weak acids are weak electrolytes and must be written as intact molecules in ionic equations.",
            explanation: "Because $HF$ is a weak acid, it exists primarily as intact molecules in solution and is not written as dissociated ions. The strong base $NaOH$ dissociates completely, providing $OH^-$ ions. The net ionic equation represents the reaction of intact $HF$ with $OH^-$: $HF(aq) + OH^-(aq) \\rightarrow F^-(aq) + H_2O(l)$.",
          },
          {
            id: "q8.2.6",
            unitId: 8,
            text: "A student titrates a weak acid $HA$ with a strong base $NaOH$. At the equivalence point, the solution pH is determined to be 8.9. Which of the following explains why the pH is basic rather than neutral?",
            options: [
              "Excess $NaOH$ remains in the solution.",
              "The conjugate base $A^-$ reacts with water to produce hydroxide ($OH^-$) ions.",
              "The weak acid $HA$ is not fully neutralized.",
              "Sodium ions ($Na^+$) undergo acidic hydrolysis.",
            ],
            correctIndex: 1,
            hint: "At the equivalence point, the acid has been entirely converted to its conjugate base A-. Consider how a weak base anion behaves in water.",
            explanation: "At the equivalence point, all the weak acid $HA$ has reacted with $NaOH$ to form water and the conjugate base salt $NaA$. The conjugate base $A^-$ is a weak base and undergoes hydrolysis in water: $A^-(aq) + H_2O(l) \\rightleftharpoons HA(aq) + OH^-(aq)$. The production of $OH^-$ ions makes the solution basic (pH > 7).",
          },
          {
            id: "q8.2.7",
            unitId: 8,
            text: "Which of the following titration curves represents the titration of a strong base (in the beaker) with a strong acid (in the burette)?",
            options: [
              "pH starts low (e.g. 1.0) and curves upwards to pH 13.0.",
              "pH starts high (e.g. 13.0) and curves downwards to pH 1.0.",
              "pH starts low (e.g. 3.0) and curves upwards to pH 9.0.",
              "pH remains constant at 7.0 throughout.",
            ],
            correctIndex: 1,
            hint: "Identify the analyte: it is in the beaker, determining the starting pH. Titrating a base with an acid means adding acid, lowering the pH.",
            explanation: "Since the strong base is in the beaker (analyte), the starting pH will be very high (around 13.0). As strong acid is added, the pH decreases, passing through a sharp vertical drop at the equivalence point (pH = 7.0), and leveling off at a very low pH (around 1.0).",
          },
          {
            id: "q8.2.8",
            unitId: 8,
            text: "During the titration of a weak base $B$ with a strong acid $HCl$, the pH at the half-equivalence point is 9.25. What is the $pK_b$ of the weak base?",
            options: [
              "9.25",
              "4.75",
              "7.00",
              "5.25",
            ],
            correctIndex: 1,
            hint: "At the half-equivalence point for a weak base titration, pOH = pKb. Use pH + pOH = 14 to convert pH to pOH.",
            explanation: "At the half-equivalence point of a weak base titration, the concentration of the weak base $[B]$ equals the concentration of its conjugate acid $[BH^+]$. By the Henderson-Hasselbalch equation for bases: $pOH = pK_b + \\log\\frac{[BH^+]}{[B]} \\implies pOH = pK_b$. Since $pH = 9.25$, $pOH = 14.00 - 9.25 = 4.75$. Therefore, $pK_b = 4.75$.",
          },
          {
            id: "q8.2.9",
            unitId: 8,
            text: "An acid-base indicator $HIn$ is a weak acid with $pK_a = 5.0$. What color will the solution be if the indicator is added to a solution at pH = 3.0, if $HIn$ is red and $In^-$ is yellow?",
            options: [
              "Red",
              "Yellow",
              "Orange (mix of red and yellow)",
              "Colorless",
            ],
            correctIndex: 0,
            hint: "Compare the solution pH to the pKa of the indicator. If pH < pKa, the protonated form (HIn) dominates.",
            explanation: "Since the solution $pH = 3.0$ is less than the indicator's $pK_a = 5.0$, the concentration of the protonated form $[HIn]$ is much greater than the deprotonated form $[In^-]$ (specifically by a factor of 100, according to the Henderson-Hasselbalch equation). Because the protonated form $HIn$ is red, the solution will appear red.",
          },
          {
            id: "q8.2.10",
            unitId: 8,
            text: "What is the buffer region on a titration curve of a weak acid titrated with a strong base?",
            options: [
              "The vertical region near the equivalence point.",
              "The initial flat region centered around the half-equivalence point where the pH changes slowly.",
              "The region after the equivalence point where pH is determined by excess base.",
              "There is no buffer region in a weak acid titration.",
            ],
            correctIndex: 1,
            hint: "A buffer consists of a weak acid and its conjugate base. This mixture is formed as weak acid is partially neutralized.",
            explanation: "As the strong base is added to the weak acid, some of the weak acid is converted into its conjugate base, creating a buffer solution. This buffer system resists changes in pH, producing a relatively flat plateau region on the titration curve centered around the half-equivalence point ($pH = pK_a$).",
          },
        ],
      },
      {
        id: "8.3",
        title: "Buffers, Buffer Capacity, and the Henderson-Hasselbalch Equation",
        description: "Master buffer systems, perform pH calculations using the Henderson-Hasselbalch equation, and understand buffer capacity.",
        youtubeId: "rIvEvwViJGk",
        article: `# Buffers, Buffer Capacity, and the Henderson-Hasselbalch Equation

A buffer solution resists changes in pH when small amounts of strong acid or strong base are added.

## Buffer Components and Action

A buffer is composed of a **weak conjugate acid-base pair** (e.g., $HC_2H_3O_2$ and $NaC_2H_3O_2$).
- **If strong base ($OH^-$) is added**: The weak acid component reacts to neutralize it:
  $$HA(aq) + OH^-(aq) ightarrow A^-(aq) + H_2O(l)$$
- **If strong acid ($H^+$) is added**: The weak base component reacts to neutralize it:
  $$A^-(aq) + H^+(aq) ightarrow HA(aq)$$

## The Henderson-Hasselbalch Equation

The pH of a buffer solution can be calculated directly using the **Henderson-Hasselbalch equation**:

$$	ext{pH} = 	ext{p}K_a + \\log \\left( rac{[A^-]}{[HA]} ight)$$

### Buffer Design:
A buffer is most effective when the ratio of conjugate base to weak acid is close to 1 ($[A^-]/[HA] pprox 1$), which means $	ext{pH} pprox 	ext{p}K_a$. Therefore, to design a buffer of a specific target pH, select a weak acid with a **$	ext{p}K_a$ as close as possible to the target pH**.

<div class="flex justify-center my-8">
<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full">
<!-- Buffer solution box -->
<rect x="130" y="40" width="190" height="120" rx="8" fill="rgba(255, 255, 255, 0.02)" stroke="#a1a1aa" stroke-width="2" />
<text x="225" y="30" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Buffer Solution (HA / A⁻)</text>
<text x="225" y="70" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">Weak Acid: HA</text>
<text x="225" y="90" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Conjugate Base: A⁻</text>
<!-- Adding strong acid H+ -->
<path d="M 40 120 L 120 120" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-chem-buffer)" />
<text x="60" y="110" fill="#ef4444" font-size="9" font-weight="bold">Add H⁺</text>
<text x="225" y="125" fill="#ef4444" font-size="9" text-anchor="middle">Neutralization: A⁻ + H⁺ ➔ HA</text>
<!-- Adding strong base OH- -->
<path d="M 410 120 L 330 120" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-chem-buffer)" />
<text x="390" y="110" fill="#3b82f6" font-size="9" font-weight="bold">Add OH⁻</text>
<text x="225" y="145" fill="#3b82f6" font-size="9" text-anchor="middle">Neutralization: HA + OH⁻ ➔ A⁻ + H₂O</text>
<defs>
<marker id="arrow-chem-buffer" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#d4d4d4" />
</marker>
</defs>
</svg>
</div>

## Buffer Capacity

<vocab term="Buffer Capacity" definition="The amount of acid or base a buffer can neutralize before its pH begins to change significantly.">Buffer capacity</vocab> is the measure of the buffer's ability to resist pH changes.
- **High Concentrations**: A buffer with higher absolute concentrations of $HA$ and $A^-$ (e.g., $1.0 	ext{ M}$ each) has a **higher buffer capacity** than a diluted buffer (e.g., $0.10 	ext{ M}$ each), because it contains more moles of buffer components to neutralize added acid or base.
`,
        questions: [
          {
            id: "q8.3.1",
            unitId: 8,
            text: "What is the pH of a buffer solution prepared by mixing 0.20 M acetic acid ($HC_2H_3O_2$) and 0.40 M sodium acetate ($NaC_2H_3O_2$)? ($K_a$ of acetic acid is $1.8 \\times 10^{-5}$; $\\text{p}K_a = 4.74$)",
            options: [
              "5.04",
              "4.44",
              "4.74",
              "5.20",
            ],
            correctIndex: 0,
            hint: "Apply the Henderson-Hasselbalch equation: pH = pKa + log([A-]/[HA]).",
            explanation: "Using Henderson-Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log([A^-]/[HA]) = 4.74 + \\log(0.40 / 0.20) = 4.74 + \\log(2.0) = 4.74 + 0.30 = 5.04$.",
          },
          {
            id: "q8.3.2",
            unitId: 8,
            text: "A chemist needs to prepare a buffer solution with a pH of 9.00. Which of the following weak acids (and their conjugate bases) would be the best choice for this buffer?",
            options: [
              "Boric acid ($\\text{p}K_a = 9.24$)",
              "Formic acid ($\\text{p}K_a = 3.75$)",
              "Acetic acid ($\\text{p}K_a = 4.74$)",
              "Hypochlorous acid ($\\text{p}K_a = 7.53$)",
            ],
            correctIndex: 0,
            hint: "Select the weak acid whose pKa is closest to the desired buffer pH.",
            explanation: "A buffer is most effective and easiest to prepare near its optimal capacity, which is where $\\text{pH} \\approx \\text{p}K_a$. Boric acid has a $\\text{p}K_a$ of $9.24$, which is closest to the target pH of $9.00$, making it the best choice.",
          },
          {
            id: "q8.3.3",
            unitId: 8,
            text: "Which of the following buffer solutions has the highest buffer capacity?",
            options: [
              "1.0 M $HF$ and 1.0 M $NaF$",
              "0.10 M $HF$ and 0.10 M $NaF$",
              "0.50 M $HF$ and 0.05 M $NaF$",
              "1.0 M $HF$ and 0.10 M $NaF$",
            ],
            correctIndex: 0,
            hint: "Buffer capacity is maximized when concentrations are high and the ratio of base to acid is 1.",
            explanation: "Buffer capacity depends on the concentrations of the buffer components. The higher the concentrations, the more acid or base the buffer can neutralize. A 1:1 ratio also optimizes resistance to both acid and base. Thus, $1.0 \\text{ M } HF$ and $1.0 \\text{ M } NaF$ has the highest capacity.",
          },
          {
            id: "q8.3.4",
            unitId: 8,
            text: "What chemical reaction occurs when a small amount of hydrochloric acid ($HCl$) is added to a buffer containing acetic acid ($HC_2H_3O_2$) and sodium acetate ($NaC_2H_3O_2$)?",
            options: [
              "$C_2H_3O_2^-(aq) + H^+(aq) \\rightarrow HC_2H_3O_2(aq)$",
              "$HC_2H_3O_2(aq) + H^+(aq) \\rightarrow H_2C_2H_3O_2^+(aq)$",
              "$Na^+(aq) + Cl^-(aq) \\rightarrow NaCl(s)$",
              "$HC_2H_3O_2(aq) + OH^-(aq) \\rightarrow C_2H_3O_2^-(aq) + H_2O(l)$",
            ],
            correctIndex: 0,
            hint: "Added strong acid (H+) is neutralized by the conjugate base component of the buffer.",
            explanation: "The added strong acid dissociates to release $H^+$ ions. These ions are neutralized by reacting with the basic acetate ion ($C_2H_3O_2^-$) to form weak acetic acid ($HC_2H_3O_2$), preventing the pH from dropping significantly.",
          },
          {
            id: "q8.3.5",
            unitId: 8,
            text: "Which of the following mixtures will form a buffer solution when mixed together in equal volumes?",
            options: [
              "0.10 M $HC_2H_3O_2$ and 0.05 M $NaOH$",
              "0.10 M $HCl$ and 0.10 M $NaCl$",
              "0.10 M $HNO_3$ and 0.05 M $NaOH$",
              "0.10 M $HC_2H_3O_2$ and 0.10 M $HCl$",
            ],
            correctIndex: 0,
            hint: "A buffer can be formed by partially neutralizing a weak acid with a strong base to produce its conjugate base.",
            explanation: "Mixing $0.10 \\text{ M } HC_2H_3O_2$ with $0.05 \\text{ M } NaOH$ results in a partial neutralization: $0.05 \\text{ mol } NaOH$ reacts with $0.05 \\text{ mol } HC_2H_3O_2$ to form $0.05 \\text{ mol } C_2H_3O_2^-$, leaving $0.05 \\text{ mol }$ of unreacted $HC_2H_3O_2$. This results in a solution containing equal concentrations of the weak acid and its conjugate base, forming a buffer. Option A uses a strong acid (cannot buffer). Option B fully neutralizes to leave strong acid. Option D has no base.",
          },
          {
            id: "q8.3.6",
            unitId: 8,
            text: "A buffer solution is prepared by mixing $0.20 M$ $CH_3COOH$ (acetic acid, $K_a = 1.8 \\times 10^{-5}$) and $0.30 M$ $CH_3COONa$ (sodium acetate). What is the pH of this buffer solution?",
            options: [
              "4.74",
              "4.92",
              "4.56",
              "5.10",
            ],
            correctIndex: 1,
            hint: "Use the Henderson-Hasselbalch equation: pH = pKa + log([A-] / [HA]). pKa = -log(1.8 x 10^-5) = 4.74.",
            explanation: "First find the $pK_a$: $pK_a = -\\log(1.8 \\times 10^{-5}) = 4.74$. Apply the Henderson-Hasselbalch equation: $pH = pK_a + \\log\\frac{[CH_3COO^-]}{[CH_3COOH]} = 4.74 + \\log\\frac{0.30}{0.20} = 4.74 + \\log(1.5) = 4.74 + 0.18 = 4.92$.",
          },
          {
            id: "q8.3.7",
            unitId: 8,
            text: "Which of the following mixtures will form an effective buffer solution when dissolved in water?",
            options: [
              "$0.10 M HCl$ and $0.10 M NaCl$",
              "$0.10 M NH_3$ and $0.10 M NH_4Cl$",
              "$0.10 M NaOH$ and $0.10 M NaCl$",
              "$0.10 M CH_3COOH$ and $0.10 M HCl$",
            ],
            correctIndex: 1,
            hint: "A buffer must contain a weak acid and its conjugate base (or a weak base and its conjugate acid). Strong acids/bases cannot form buffers.",
            explanation: "$NH_3$ is a weak base and $NH_4^+$ (from $NH_4Cl$) is its conjugate acid. A mixture of these two species forms an excellent buffer solution that can neutralize both added acids and bases. $HCl$ and $NaOH$ are strong and do not form buffers.",
          },
          {
            id: "q8.3.8",
            unitId: 8,
            text: "What happens to the pH of a buffer solution when a small amount of a strong acid is added?",
            options: [
              "The pH increases dramatically.",
              "The pH decreases slightly.",
              "The pH remains absolutely unchanged.",
              "The pH increases slightly.",
            ],
            correctIndex: 1,
            hint: "Buffers resist pH changes, so the pH will change very little, but adding an acid will still cause a tiny decrease in pH.",
            explanation: "Buffers resist changes in pH by neutralizing added $H^+$ ions via reaction with the conjugate base ($A^- + H^+ \\rightarrow HA$). However, because the ratio of $[A^-]/[HA]$ decreases slightly, the pH will experience a very small decrease, rather than a large drop.",
          },
          {
            id: "q8.3.9",
            unitId: 8,
            text: "A student wants to prepare a buffer with a target pH of 5.3. Which of the following weak acids (and their conjugate sodium salts) would be the best choice?",
            options: [
              "Acetic acid ($pK_a = 4.74$)",
              "Propanoic acid ($pK_a = 4.87$)",
              "Pivalic acid ($pK_a = 5.03$)",
              "Carbonic acid ($pK_a = 6.35$)",
            ],
            correctIndex: 2,
            hint: "A buffer is most effective within +/- 1 pH unit of the weak acid's pKa. Choose the acid with a pKa closest to the target pH.",
            explanation: "For maximum buffer capacity, the weak acid should have a $pK_a$ as close to the target pH (5.3) as possible. Pivalic acid ($pK_a = 5.03$) is the closest, making it the most suitable choice to maintain a stable pH of 5.3.",
          },
          {
            id: "q8.3.10",
            unitId: 8,
            text: "What determines the buffer capacity of a buffer solution?",
            options: [
              "The pH of the buffer.",
              "The concentrations of the weak acid and its conjugate base in the buffer.",
              "The specific specific heat capacity of the solution.",
              "The volume of the container.",
            ],
            correctIndex: 1,
            hint: "Buffer capacity refers to the amount of acid or base a buffer can neutralize before the pH starts to change significantly.",
            explanation: "Buffer capacity is determined by the absolute concentrations of the buffer components ($HA$ and $A^-$). A buffer containing $1.0 M$ concentrations of both has a much higher capacity to neutralize added acid or base than a buffer containing $0.01 M$ concentrations, even though both have the same initial pH.",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Applications of Thermodynamics",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "9.1",
        title: "Entropy, Gibbs Free Energy, and Thermodynamic Favorability",
        description: "Understand entropy (S) changes, predict spontaneity using Gibbs Free Energy (G = H - TS), and understand thermodynamic favorability.",
        youtubeId: "MALZTPsHSoo",
        article: `# Entropy, Gibbs Free Energy, and Thermodynamic Favorability

Thermodynamic favorability determines whether a chemical or physical process can occur spontaneously without continuous external energy input.

## Entropy

<vocab term="Entropy" definition="A measure of the dispersal of matter and energy in a system, associated with molecular disorder.">Entropy</vocab> ($S$) measures the dispersal of energy and matter in a system. The **Second Law of Thermodynamics** states that the entropy of the universe increases in any spontaneous process.

- **Predicting the Sign of $\\Delta S$**:
  - **Phase Changes**: $S_{	ext{solid}} < S_{	ext{liquid}} < S_{	ext{gas}}$. Melting (fusion), vaporization, and sublimation have $\\Delta S > 0$.
  - **Dissolution**: Dissolving a solid in water generally increases entropy ($\\Delta S > 0$).
  - **Gas Moles**: If a reaction increases the number of gas molecules ($\\Delta n_{	ext{gas}} > 0$), then $\\Delta S > 0$.

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Solid -->
<g transform="translate(10, 0)">
<rect x="10" y="30" width="100" height="80" rx="5" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
<text x="60" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Solid (Low S)</text>
<!-- Packed grid of particles -->
<circle cx="45" cy="50" r="6" fill="#60a5fa" />
<circle cx="60" cy="50" r="6" fill="#60a5fa" />
<circle cx="75" cy="50" r="6" fill="#60a5fa" />
<circle cx="45" cy="65" r="6" fill="#60a5fa" />
<circle cx="60" cy="65" r="6" fill="#60a5fa" />
<circle cx="75" cy="65" r="6" fill="#60a5fa" />
<circle cx="45" cy="80" r="6" fill="#60a5fa" />
<circle cx="60" cy="80" r="6" fill="#60a5fa" />
<circle cx="75" cy="80" r="6" fill="#60a5fa" />
<circle cx="45" cy="95" r="6" fill="#60a5fa" />
<circle cx="60" cy="95" r="6" fill="#60a5fa" />
<circle cx="75" cy="95" r="6" fill="#60a5fa" />
<text x="60" y="125" fill="#a1a1aa" font-size="9" text-anchor="middle">Highly ordered</text>
</g>
<!-- Liquid -->
<g transform="translate(150, 0)">
<rect x="10" y="30" width="100" height="80" rx="5" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
<text x="60" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Liquid (Medium S)</text>
<!-- Amorphous cluster at bottom -->
<circle cx="35" cy="75" r="6" fill="#f59e0b" />
<circle cx="48" cy="70" r="6" fill="#f59e0b" />
<circle cx="62" cy="74" r="6" fill="#f59e0b" />
<circle cx="75" cy="82" r="6" fill="#f59e0b" />
<circle cx="40" cy="88" r="6" fill="#f59e0b" />
<circle cx="54" cy="85" r="6" fill="#f59e0b" />
<circle cx="68" cy="90" r="6" fill="#f59e0b" />
<circle cx="48" cy="98" r="6" fill="#f59e0b" />
<circle cx="82" cy="93" r="6" fill="#f59e0b" />
<circle cx="62" cy="99" r="6" fill="#f59e0b" />
<text x="60" y="125" fill="#a1a1aa" font-size="9" text-anchor="middle">Disordered, mobile</text>
</g>
<!-- Gas -->
<g transform="translate(290, 0)">
<rect x="10" y="30" width="100" height="80" rx="5" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
<text x="60" y="20" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Gas (High S)</text>
<!-- Sparsely dispersed particles with motion lines -->
<circle cx="30" cy="45" r="6" fill="#ef4444" />
<circle cx="85" cy="50" r="6" fill="#ef4444" />
<circle cx="45" cy="85" r="6" fill="#ef4444" />
<circle cx="80" cy="95" r="6" fill="#ef4444" />
<circle cx="60" cy="65" r="6" fill="#ef4444" />
<text x="60" y="125" fill="#a1a1aa" font-size="9" text-anchor="middle">Highly dispersed</text>
</g>
</svg>
</div>

## Gibbs Free Energy and Spontaneity

The change in <vocab term="Gibbs Free Energy" definition="The thermodynamic function used to predict spontaneity, calculated as standard enthalpy change minus absolute temperature times standard entropy change.">Gibbs Free Energy</vocab> ($\\Delta G$) at constant temperature and pressure is given by:

$$\\Delta G = \\Delta H - T \\Delta S$$

Where:
- $\\Delta H$ is the enthalpy change.
- $T$ is the absolute temperature in **Kelvin**.
- $\\Delta S$ is the entropy change (usually tabulated in $J/K \\cdot mol$, so it must be converted to $kJ/K \\cdot mol$ by dividing by $1000$).

### Predicting Spontaneity:
- **$\\Delta G < 0$**: The process is **thermodynamically favored** (spontaneous).
- **$\\Delta G > 0$**: The process is **thermodynamically unfavored** (nonspontaneous).
- **$\\Delta G = 0$**: The system is at **equilibrium**.

### Temperature Dependence of Favorability:

| $\\Delta H$ | $\\Delta S$ | $-T\\Delta S$ | $\\Delta G$ | Spontaneity (Favorability) |
|---|---|---|---|---|
| **$-$** (Exo) | **$+$** (Disorder) | **$-$** | **Always $-$** | **Spontaneous at all temperatures** |
| **$+$** (Endo) | **$-$** (Order) | **$+$** | **Always $+$** | **Nonspontaneous at all temperatures** |
| **$-$** (Exo) | **$-$** (Order) | **$+$** | **$-$ at Low $T$** | **Spontaneous at LOW temperatures** |
| **$+$** (Endo) | **$+$** (Disorder) | **$-$** | **$-$ at High $T$** | **Spontaneous at HIGH temperatures** |

## Kinetic Control

A reaction can be thermodynamically favored ($\\Delta G < 0$) but not occur at a measurable rate in the lab. This is called **kinetic control**. It occurs when the **activation energy ($E_a$) is extremely high**, preventing molecules from reacting despite the favorable thermodynamic drive.
`,
        questions: [
          {
            id: "q9.1.1",
            unitId: 9,
            text: "For which of the following processes is the entropy change ($\\Delta S$) negative?",
            options: [
              "$N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$",
              "$H_2O(l) \\rightarrow H_2O(g)$",
              "$NaCl(s) \\rightarrow Na^+(aq) + Cl^-(aq)$",
              "$CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$",
            ],
            correctIndex: 0,
            hint: "Look for a reaction that decreases the number of gas molecules.",
            explanation: "In the reaction $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$, the reactants have 4 moles of gas, and the products have 2 moles of gas. This reduction in the moles of gas decreases molecular disorder and dispersal of matter, resulting in a negative entropy change ($\\Delta S < 0$).",
          },
          {
            id: "q9.1.2",
            unitId: 9,
            text: "A reaction has $\\Delta H = -120 \\text{ kJ/mol}$ and $\\Delta S = -300 \\text{ J/(mol K)}$. At what temperatures will this reaction be thermodynamically favored?",
            options: [
              "Only at temperatures below 400 K.",
              "At all temperatures.",
              "Only at temperatures above 400 K.",
              "The reaction is never thermodynamically favored.",
            ],
            correctIndex: 0,
            hint: "Set ΔG < 0 in the equation ΔH - T*ΔS < 0, making sure to convert ΔS to kJ.",
            explanation: "Convert $\\Delta S$: $-300 \\text{ J/(mol K)} = -0.300 \\text{ kJ/(mol K)}$. We want $\\Delta G < 0 \\rightarrow \\Delta H - T\\Delta S < 0 \\rightarrow -120 - T(-0.300) < 0 \\rightarrow 0.300 T < 120 \\rightarrow T < 400 \\text{ K}$. Thus, the reaction is spontaneous only at temperatures below 400 K.",
          },
          {
            id: "q9.1.3",
            unitId: 9,
            text: "Under what thermodynamic conditions is a process spontaneous (thermodynamically favored) at all temperatures?",
            options: [
              "$\\Delta H < 0$ and $\\Delta S > 0$",
              "$\\Delta H < 0$ and $\\Delta S < 0$",
              "$\\Delta H > 0$ and $\\Delta S > 0$",
              "$\\Delta H > 0$ and $\\Delta S < 0$",
            ],
            correctIndex: 0,
            hint: "Analyze the signs of the terms in ΔG = ΔH - T*ΔS. We want ΔG to be negative regardless of the value of T.",
            explanation: "In $\\Delta G = \\Delta H - T\\Delta S$, if $\\Delta H$ is negative (exothermic) and $\\Delta S$ is positive (disorder), then both $\\Delta H$ and $-T\\Delta S$ are negative. The sum will always be negative, meaning $\\Delta G < 0$ at all temperatures.",
          },
          {
            id: "q9.1.4",
            unitId: 9,
            text: "The combustion of wood is highly thermodynamically favored ($\\Delta G < 0$). However, a pile of wood can sit in the air for years without burning. What is the explanation for this observation?",
            options: [
              "The reaction is under kinetic control because it has a very high activation energy ($E_a$).",
              "The reaction is endothermic at room temperature.",
              "The entropy change of the reaction is negative.",
              "Oxygen is not a strong enough oxidizing agent at room temperature.",
            ],
            correctIndex: 0,
            hint: "Thermodynamics determines if a reaction can occur; kinetics determines how fast it occurs.",
            explanation: "Although the reaction is highly thermodynamically favored, it does not occur at a measurable rate because the activation energy barrier ($E_a$) is extremely high at room temperature. This is known as kinetic control. Once a spark is provided to overcome this barrier, the reaction proceeds rapidly.",
          },
          {
            id: "q9.1.5",
            unitId: 9,
            text: "What is the sign of $\\Delta H$ and $\\Delta S$ for the sublimation of dry ice: $CO_2(s) \\rightarrow CO_2(g)$?",
            options: [
              "$\\Delta H > 0$ and $\\Delta S > 0$",
              "$\\Delta H < 0$ and $\\Delta S < 0$",
              "$\\Delta H > 0$ and $\\Delta S < 0$",
              "$\\Delta H < 0$ and $\\Delta S > 0$",
            ],
            correctIndex: 0,
            hint: "Sublimation requires input energy to break intermolecular attractions, and changes a locked solid into an active gas.",
            explanation: "Sublimation is a phase change from solid to gas. To break the intermolecular attractions holding the solid together, energy must be absorbed, so $\\Delta H > 0$ (endothermic). The gas phase is significantly more disordered than the solid phase, so $\\Delta S > 0$.",
          },
          {
            id: "q9.1.6",
            unitId: 9,
            text: "For which of the following processes is the change in entropy positive ($\\Delta S^\\circ > 0$)?",
            options: [
              "$N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$",
              "$H_2O(g) \\rightarrow H_2O(l)$",
              "$CO_2(s) \\rightarrow CO_2(g)$",
              "$Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$",
            ],
            correctIndex: 2,
            hint: "Entropy is a measure of molecular disorder. Processes that produce more gas moles or go from solid to gas increase entropy.",
            explanation: "Sublimation ($CO_2(s) \\rightarrow CO_2(g)$) converts a highly ordered solid phase into a highly disordered gas phase, resulting in a large increase in entropy ($\\Delta S^\\circ > 0$). The other choices all involve a decrease in the number of gas moles or crystallization, which decrease entropy.",
          },
          {
            id: "q9.1.7",
            unitId: 9,
            text: "A reaction is endothermic ($\\Delta H^\\circ = +50.0 \\text{ kJ/mol}$) and has a positive entropy change ($\\Delta S^\\circ = +150 \\text{ J/mol} \\cdot \\text{K}$). Under what conditions is this reaction thermodynamically favorable?",
            options: [
              "It is favorable at all temperatures.",
              "It is favorable only at high temperatures.",
              "It is favorable only at low temperatures.",
              "It is unfavorable at all temperatures.",
            ],
            correctIndex: 1,
            hint: "Use Gibbs free energy equation: delta G = delta H - T * delta S. For favorability, delta G must be negative.",
            explanation: "According to $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, when $\\Delta H^\\circ > 0$ (unfavorable) and $\\Delta S^\\circ > 0$ (favorable), the $-T\\Delta S^\\circ$ term becomes negative. At high temperatures, this term outweighs the positive $\\Delta H^\\circ$ term, making $\\Delta G^\\circ$ negative and the reaction thermodynamically favorable.",
          },
          {
            id: "q9.1.8",
            unitId: 9,
            text: "What is the standard Gibbs free energy change ($\\Delta G^\\circ$) at $25^\\circ\\text{C}$ for a reaction with $\\Delta H^\\circ = -80.0 \\text{ kJ/mol}$ and $\\Delta S^\\circ = -100.0 \\text{ J/mol} \\cdot \\text{K}$?",
            options: [
              "$-50.2 \\text{ kJ/mol}$",
              "$-110.0 \\text{ kJ/mol}$",
              "$+50.2 \\text{ kJ/mol}$",
              "$-77.5 \\text{ kJ/mol}$",
            ],
            correctIndex: 0,
            hint: "Convert standard entropy to kJ/mol: -100 J/mol*K = -0.100 kJ/mol*K. T = 298.15 K. Calculate delta G = delta H - T * delta S.",
            explanation: "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -80.0 \\text{ kJ/mol} - (298.15 \\text{ K} \\times -0.100 \\text{ kJ/mol} \\cdot \\text{K}) = -80.0 - (-29.8) = -50.2 \\text{ kJ/mol}$.",
          },
          {
            id: "q9.1.9",
            unitId: 9,
            text: "If a reaction has a negative standard enthalpy change ($\\Delta H^\\circ < 0$) and a positive standard entropy change ($\\Delta S^\\circ > 0$), what is its thermodynamic favorability?",
            options: [
              "It is thermodynamically favorable only at high temperatures.",
              "It is thermodynamically favorable only at low temperatures.",
              "It is thermodynamically favorable at all temperatures.",
              "It is thermodynamically unfavorable at all temperatures.",
            ],
            correctIndex: 2,
            hint: "Exothermic and increasing entropy are both thermodynamically favorable drivers. Look at how they affect the sign of delta G.",
            explanation: "If $\\Delta H^\\circ < 0$ and $\\Delta S^\\circ > 0$, both terms in the Gibbs equation $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ are negative. Because both terms are negative, $\\Delta G^\\circ$ will always be negative regardless of the temperature, making the reaction thermodynamically favorable at all temperatures.",
          },
          {
            id: "q9.1.10",
            unitId: 9,
            text: "A reaction has $\\Delta G^\\circ < 0$ but does not produce any observable products at room temperature. What is the explanation for this?",
            options: [
              "The reaction is not actually favorable.",
              "The reaction has a very high activation energy and is under kinetic control.",
              "The reaction is endothermic.",
              "The equilibrium constant is extremely small.",
            ],
            correctIndex: 1,
            hint: "Thermodynamics tells us if a reaction CAN occur, while kinetics tells us how FAST it occurs.",
            explanation: "If $\\Delta G^\\circ < 0$, the reaction is thermodynamically favorable and is expected to proceed. However, if it has a very high activation energy barrier, the rate of the reaction at room temperature will be extremely slow (negligible). Such reactions are said to be under kinetic control.",
          },
        ],
      },
      {
        id: "9.2",
        title: "Free Energy, Equilibrium Constants K, and Coupled Reactions",
        description: "Relate standard free energy (ΔG°) to the equilibrium constant (K) and understand how reactions can be coupled to drive unfavorable processes.",
        youtubeId: "huKBuShAa1w",
        article: `# Free Energy, Equilibrium Constants K, and Coupled Reactions

The standard free energy change of a reaction is mathematically linked to its equilibrium constant, reflecting that both predict the thermodynamic favorability of a process.

## Relating ΔG° and K

The relationship between the standard free energy change ($\\Delta G^\\circ$) and the equilibrium constant ($K$) is given by:

$$\\Delta G^\\circ = -RT \\ln K$$

Where:
- $\\Delta G^\\circ$ is the standard free energy change (typically converted to **Joules/mol** to match $R$).
- $R$ is the gas constant ($8.314 	ext{ J/(mol K)}$).
- $T$ is the absolute temperature in **Kelvin**.
- $K$ is the equilibrium constant ($K_c$ or $K_p$).

### Interpreting the Relationship:
- **If $\\Delta G^\\circ < 0$**: The term $-RT \\ln K$ is negative, which means $\\ln K > 0 ightarrow \\mathbf{K > 1}$. The products are favored at equilibrium.
- **If $\\Delta G^\\circ > 0$**: The term $-RT \\ln K$ is positive, which means $\\ln K < 0 ightarrow \\mathbf{K < 1}$. The reactants are favored at equilibrium.
- **If $\\Delta G^\\circ = 0$**: The equilibrium constant is exactly $\\mathbf{K = 1}$.

## Coupled Reactions

In biological and industrial systems, many essential reactions are thermodynamically unfavored ($\\Delta G^\\circ > 0$). To make these processes occur, they are **coupled** to a second, highly favored reaction ($\\Delta G^\\circ < 0$).

- **Principle of Coupling**: Two reactions are coupled via a shared intermediate. The sum of the two reactions has a net **negative free energy** ($\\Delta G^\\circ_{	ext{net}} < 0$), driving the overall process.
- **Biological Example**: The phosphorylation of glucose (unfavored, $\\Delta G^\\circ pprox +14 	ext{ kJ/mol}$) is coupled to the hydrolysis of ATP (highly favored, $\\Delta G^\\circ pprox -30.5 	ext{ kJ/mol}$), yielding a net favored process:
  $$\\Delta G^\\circ_{	ext{net}} = +14 + (-30.5) = -16.5 	ext{ kJ/mol}$$

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full">
<!-- Left Reaction: ATP Hydrolysis (Spontaneous) -->
<g transform="translate(10, 20)">
<rect x="0" y="10" width="180" height="50" rx="6" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="1.5" />
<text x="90" y="28" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">ATP + H₂O ➔ ADP + Pi</text>
<text x="90" y="45" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">ΔG° = -30.5 kJ/mol</text>
<text x="90" y="75" fill="#a1a1aa" font-size="9" text-anchor="middle">Highly Exergonic</text>
</g>
<!-- Plus sign -->
<text x="210" y="55" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">+</text>
<!-- Right Reaction: Glucose Phosphorylation (Nonspontaneous) -->
<g transform="translate(240, 20)">
<rect x="0" y="10" width="180" height="50" rx="6" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" stroke-width="1.5" />
<text x="90" y="28" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Glucose + Pi ➔ Glucose-6-P</text>
<text x="90" y="45" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">ΔG° = +13.8 kJ/mol</text>
<text x="90" y="75" fill="#a1a1aa" font-size="9" text-anchor="middle">Endergonic (Unfavored)</text>
</g>
<!-- Horizontal division line -->
<line x1="20" y1="105" x2="430" y2="105" stroke="#a1a1aa" stroke-width="1.5" />
<!-- Coupled Net Reaction -->
<text x="225" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Coupled Net Reaction: Glucose + ATP ➔ Glucose-6-P + ADP</text>
<text x="225" y="142" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">ΔG°_net = -16.7 kJ/mol (Thermodynamically Favored)</text>
</svg>
</div>
`,
        questions: [
          {
            id: "q9.2.1",
            unitId: 9,
            text: "A reaction has an equilibrium constant $K = 5.0 \\times 10^5$ at 298 K. What is the standard free energy change ($\\Delta G^\\circ$) of the reaction?",
            options: [
              "-32.5 kJ/mol",
              "-13.1 kJ/mol",
              "+32.5 kJ/mol",
              "-25.6 kJ/mol",
            ],
            correctIndex: 0,
            hint: "Use the equation ΔG° = -R * T * ln(K), with R = 8.314 J/(mol K) and T = 298 K.",
            explanation: "$\\Delta G^\\circ = -RT \\ln K = -8.314 \\text{ J/(mol K)} \\times 298 \\text{ K} \\times \\ln(5.0 \\times 10^5) = -2477.5 \\times 13.12 = -32500 \\text{ J/mol} = -32.5 \\text{ kJ/mol}$.",
          },
          {
            id: "q9.2.2",
            unitId: 9,
            text: "If a reaction has a positive standard free energy change ($\\Delta G^\\circ > 0$), what does this indicate about the equilibrium constant $K$?",
            options: [
              "$K < 1$; reactants are favored at equilibrium.",
              "$K > 1$; products are favored at equilibrium.",
              "$K = 1$; reactants and products are equal.",
              "$K = 0$; no reaction occurs.",
            ],
            correctIndex: 0,
            hint: "Analyze the sign of ln(K) in ΔG° = -RT*ln(K). If ΔG° is positive, ln(K) must be negative.",
            explanation: "Since $\\Delta G^\\circ = -RT \\ln K$, if $\\Delta G^\\circ$ is positive, then $\\ln K$ must be negative. A negative natural logarithm means the argument $K$ is less than 1 ($K < 1$). This means that at equilibrium, reactants are favored over products.",
          },
          {
            id: "q9.2.3",
            unitId: 9,
            text: `Consider the two reactions:
1) $A ightarrow B \\quad \\Delta G_1^\\circ = +20 	ext{ kJ/mol}$
2) $C ightarrow D \\quad \\Delta G_2^\\circ = -35 	ext{ kJ/mol}$
If these two reactions are coupled, what is the net free energy change ($\\Delta G_{	ext{net}}^\\circ$) of the coupled process, and is it thermodynamically favored?`,
            options: [
              "-15 \\text{ kJ/mol}$; favored",
              "$+55 \\text{ kJ/mol}$; unfavored",
              "$-55 \\text{ kJ/mol}$; favored",
              "$+15 \\text{ kJ/mol}$; unfavored",
            ],
            correctIndex: 0,
            hint: "Add the two standard free energy changes together.",
            explanation: "When reactions are coupled, their free energy changes are additive: $\\Delta G_{\\text{net}}^\\circ = \\Delta G_1^\\circ + \\Delta G_2^\\circ = +20 + (-35) = -15 \\text{ kJ/mol}$. Since the net free energy is negative, the coupled process is thermodynamically favored.",
          },
          {
            id: "q9.2.4",
            unitId: 9,
            text: "What is the value of the gas constant $R$ that should be used when calculating $\\Delta G^\\circ = -RT \\ln K$?",
            options: [
              "$8.314 \\text{ J / (mol K)}$",
              "$0.08206 \\text{ L atm / (mol K)}$",
              "$62.36 \\text{ L torr / (mol K)}$",
              "$1.987 \\text{ cal / (mol K)}$",
            ],
            correctIndex: 0,
            hint: "Choose the constant that expresses energy in thermodynamic units (Joules).",
            explanation: "Because $\\Delta G^\\circ$ is an energy quantity expressed in Joules or kilojoules, you must use the thermodynamic gas constant $R = 8.314 \\text{ J / (mol K)}$ to match the units.",
          },
          {
            id: "q9.2.5",
            unitId: 9,
            text: "In biological systems, what molecule is most commonly hydrolyzed to provide the thermodynamic drive for coupled endothermic reactions?",
            options: [
              "ATP",
              "Glucose",
              "DNA",
              "NADH",
            ],
            correctIndex: 0,
            hint: "Known as the energy currency of the cell.",
            explanation: "Adenosine triphosphate (ATP) is the primary energy currency in biological systems. Its hydrolysis to ADP and inorganic phosphate is highly exergonic ($\\Delta G^\\circ \\approx -30.5 \\text{ kJ/mol}$), which is coupled to drive various thermodynamically unfavored reactions in cells.",
          },
          {
            id: "q9.2.6",
            unitId: 9,
            text: `A galvanic cell is constructed with a zinc electrode in $1.0 M$ $Zn(NO_3)_2$ and a copper electrode in $1.0 M$ $Cu(NO_3)_2$. Given the standard reduction potentials:
$Zn^{2+} + 2e^- ightarrow Zn \\quad E^\\circ = -0.76 	ext{ V}$
$Cu^{2+} + 2e^- ightarrow Cu \\quad E^\\circ = +0.34 	ext{ V}$
What is the standard cell potential ($E^\\circ_{cell}$) for this galvanic cell?`,
            options: [
              "$+1.10 \\text{ V}$",
              "$+0.42 \\text{ V}$",
              "$-0.42 \\text{ V}$",
              "$-1.10 \\text{ V}$",
            ],
            correctIndex: 0,
            hint: "Standard cell potential is E_cell = E_cathode (reduction) - E_anode (oxidation). The cathode is the one with the higher reduction potential.",
            explanation: "Copper has the higher reduction potential ($+0.34 \\text{ V}$) so it is the cathode (reduction). Zinc is the anode (oxidation). $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = +0.34 \\text{ V} - (-0.76 \\text{ V}) = +1.10 \\text{ V}$.",
          },
          {
            id: "q9.2.7",
            unitId: 9,
            text: "In the galvanic cell described in the previous question, which direction do the electrons flow through the external wire?",
            options: [
              "From the copper electrode to the zinc electrode",
              "From the zinc electrode to the copper electrode",
              "Through the salt bridge",
              "No electron flow occurs in a galvanic cell",
            ],
            correctIndex: 1,
            hint: "Oxidation (loss of electrons) occurs at the anode. Reduction (gain of electrons) occurs at the cathode. Electrons flow from the site of loss to the site of gain.",
            explanation: "Oxidation occurs at the zinc anode: $Zn(s) \\rightarrow Zn^{2+}(aq) + 2e^-$. Reduction occurs at the copper cathode: $Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s)$. Electrons are released at the anode (zinc) and consumed at the cathode (copper), so they flow from zinc to copper through the external wire.",
          },
          {
            id: "q9.2.8",
            unitId: 9,
            text: "What is the primary function of a salt bridge in a galvanic cell?",
            options: [
              "To allow electrons to flow between the two half-cells.",
              "To maintain electrical neutrality by allowing ions to migrate between the half-cells.",
              "To act as a catalyst for the redox reaction.",
              "To keep the solutions from mixing physically while permitting heat transfer.",
            ],
            correctIndex: 1,
            hint: "Without a salt bridge, charge would build up in the half-cells, instantly stopping the flow of current.",
            explanation: "As the redox reaction occurs, positive charges accumulate in the anode compartment (as $Zn^{2+}$ is produced) and positive charges are depleted in the cathode compartment (as $Cu^{2+}$ is reduced). The salt bridge allows anions to migrate to the anode and cations to migrate to the cathode, neutralizing this charge buildup and completing the circuit.",
          },
          {
            id: "q9.2.9",
            unitId: 9,
            text: "For a thermodynamically favorable galvanic cell, what are the signs of $\\Delta G^\\circ$ and the standard cell potential $E^\\circ_{cell}$?",
            options: [
              "$\\Delta G^\\circ$ is negative, and $E^\\circ_{cell}$ is positive.",
              "$\\Delta G^\\circ$ is positive, and $E^\\circ_{cell}$ is positive.",
              "$\\Delta G^\\circ$ is negative, and $E^\\circ_{cell}$ is negative.",
              "$\\Delta G^\\circ$ is positive, and $E^\\circ_{cell}$ is negative.",
            ],
            correctIndex: 0,
            hint: "Use the equation relating Gibbs free energy and cell potential: delta G* = -n * F * E*.",
            explanation: "The relationship is $\\Delta G^\\circ = -nFE^\\circ_{cell}$. Since $n$ and $F$ (Faraday's constant) are positive constants, for the standard cell potential $E^\\circ_{cell}$ to be positive, $\\Delta G^\\circ$ must be negative. A negative $\\Delta G^\\circ$ corresponds to a thermodynamically favorable process.",
          },
          {
            id: "q9.2.10",
            unitId: 9,
            text: "What reaction occurs at the anode of an electrochemical cell?",
            options: [
              "Reduction",
              "Oxidation",
              "Neutralization",
              "Precipitation",
            ],
            correctIndex: 1,
            hint: "Remember the mnemonic: 'An Ox' and 'Red Cat'.",
            explanation: "According to electrochemical conventions, oxidation (loss of electrons) always occurs at the anode ('An Ox'), while reduction (gain of electrons) always occurs at the cathode ('Red Cat').",
          },
        ],
      },
      {
        id: "9.3",
        title: "Galvanic and Electrolytic Cells, Cell Potential, and Faraday Law",
        description: "Compare galvanic and electrolytic cells. Calculate cell potential, standard free energy changes, and perform stoichiometric calculations involving current and time using Faraday's Law.",
        youtubeId: "Rt7-VrmZuds",
        article: `# Galvanic and Electrolytic Cells, Cell Potential, and Faraday Law

Electrochemistry deals with the interconversion of chemical energy and electrical energy through redox reactions.

## Galvanic vs. Electrolytic Cells

- **Galvanic Cells**: Driven by a **thermodynamically favored** redox reaction ($E^\\circ_{	ext{cell}} > 0, \\Delta G^\\circ < 0$) to produce an electric current.
- **Electrolytic Cells**: Driven by an external electrical source to force a **thermodynamically unfavored** redox reaction ($E^\\circ_{	ext{cell}} < 0, \\Delta G^\\circ > 0$) to occur (e.g., electroplating).

Below is the Vector Schematic of a Galvanic Cell ($Zn-Cu$ cell):

<div class="flex justify-center my-8">
<svg width="450" height="300" viewBox="0 0 450 300" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
<!-- Beaker Left (Zn) -->
<rect x="50" y="140" width="100" height="100" fill="rgba(96,165,250,0.1)" stroke="#a1a1aa" stroke-width="2" rx="5" />
<text x="100" y="200" fill="#a1a1aa" font-size="10" font-weight="bold" text-anchor="middle">Zn²⁺ Solution</text>
<!-- Beaker Right (Cu) -->
<rect x="280" y="140" width="100" height="100" fill="rgba(59,130,246,0.2)" stroke="#a1a1aa" stroke-width="2" rx="5" />
<text x="330" y="200" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">Cu²⁺ Solution</text>
<!-- Electrode Left (Zn, Anode) -->
<rect x="90" y="90" width="20" height="100" fill="#d1d5db" stroke="#a1a1aa" stroke-width="1" />
<text x="100" y="80" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Zn Anode (-)</text>
<!-- Electrode Right (Cu, Cathode) -->
<rect x="320" y="90" width="20" height="100" fill="#ea580c" stroke="#c2410c" stroke-width="1" />
<text x="330" y="80" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Cu Cathode (+)</text>
<!-- Wire & Voltmeter -->
<line x1="100" y1="90" x2="100" y2="60" stroke="#ffffff" stroke-width="2" />
<line x1="330" y1="90" x2="330" y2="60" stroke="#ffffff" stroke-width="2" />
<line x1="100" y1="60" x2="190" y2="60" stroke="#ffffff" stroke-width="2" />
<line x1="240" y1="60" x2="330" y2="60" stroke="#ffffff" stroke-width="2" />
<!-- Voltmeter Circle -->
<circle cx="215" cy="60" r="20" fill="#1e293b" stroke="#a1a1aa" stroke-width="2" />
<text x="215" y="64" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">1.10 V</text>
<!-- Electron flow arrow -->
<line x1="120" y1="45" x2="170" y2="45" stroke="#00f2ff" stroke-width="2" marker-end="url(#e-arrow)" />
<text x="145" y="38" fill="#00f2ff" font-size="8" font-weight="bold" text-anchor="middle">e⁻ flow</text>
<!-- Salt Bridge -->
<path d="M 120 160 L 120 110 Q 120 100, 130 100 L 300 100 Q 310 100, 310 110 L 310 160" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity="0.9" />
<path d="M 120 160 L 120 110 Q 120 100, 130 100 L 300 100 Q 310 100, 310 110 L 310 160" fill="none" stroke="#e2e8f0" stroke-width="8" stroke-linecap="round" />
<text x="215" y="114" fill="#000000" font-size="8" font-weight="bold" text-anchor="middle">Salt Bridge (KNO₃)</text>
<!-- Ions migration -->
<text x="135" y="145" fill="#ef4444" font-size="8" font-weight="bold">NO₃⁻ →</text>
<text x="275" y="145" fill="#3b82f6" font-size="8" font-weight="bold">← K⁺</text>
<!-- Half reactions labels -->
<text x="100" y="260" fill="#a1a1aa" font-size="8" text-anchor="middle">Zn → Zn²⁺ + 2e⁻</text>
<text x="330" y="260" fill="#60a5fa" font-size="8" text-anchor="middle">Cu²⁺ + 2e⁻ → Cu</text>
<!-- Arrow definitions -->
<defs>
<marker id="e-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#00f2ff" />
</marker>
</defs>
</svg>
</div>

### Cell Anatomy:
- **Anode**: The electrode where **oxidation** occurs. Anode mass typically decreases as metal dissolves into ions.
- **Cathode**: The electrode where **reduction** occurs. Cathode mass typically increases as metal ions plate out.
- **Salt Bridge**: Contains an inert electrolyte (like $KNO_3$). Anions migrate toward the anode, and cations migrate toward the cathode.
- **AN OX and RED CAT**: **An**ode = **Ox**idation, **Red**uction = **Cat**hode.

## Cell Potential and Free Energy

The standard cell potential ($E^\\circ_{	ext{cell}}$) is calculated from standard reduction potentials:

$$E^\\circ_{	ext{cell}} = E^\\circ_{	ext{reduction, cathode}} - E^\\circ_{	ext{reduction, anode}}$$

The relationship between standard free energy and cell potential is:

$$\\Delta G^\\circ = -nFE^\\circ_{	ext{cell}}$$

Where:
- $n$ is the moles of electrons transferred.
- $F$ is Faraday's constant ($96485 	ext{ C / mol } e^-$).
`,
        questions: [
          {
            id: "q9.3.1",
            unitId: 9,
            text: `Calculate the standard cell potential ($E^\\circ_{	ext{cell}}$) for a galvanic cell based on the half-reactions:
$Ag^+(aq) + e^- ightarrow Ag(s) \\quad E^\\circ = +0.80 	ext{ V}$
$Zn^{2+}(aq) + 2e^- ightarrow Zn(s) \\quad E^\\circ = -0.76 	ext{ V}$`,
            options: [
              "+1.56 V",
              "+0.04 V",
              "-1.56 V",
              "+2.36 V",
            ],
            correctIndex: 0,
            hint: "The more positive potential is the cathode (reduction). Use E°cell = E°cathode - E°anode.",
            explanation: "Since $+0.80 \\text{ V}$ is more positive than $-0.76 \\text{ V}$, the silver half-reaction occurs at the cathode (reduction) and the zinc half-reaction occurs at the anode (oxidation). $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.80 - (-0.76) = 1.56 \\text{ V}$.",
          },
          {
            id: "q9.3.2",
            unitId: 9,
            text: "In the galvanic cell described in the previous question, which of the following is correct regarding the electron flow and salt bridge ion migration?",
            options: [
              "Electrons flow from zinc to silver; cations in the salt bridge migrate to the silver compartment.",
              "Electrons flow from silver to zinc; cations in the salt bridge migrate to the zinc compartment.",
              "Electrons flow from zinc to silver; anions in the salt bridge migrate to the silver compartment.",
              "Electrons flow from silver to zinc; anions in the salt bridge migrate to the zinc compartment.",
            ],
            correctIndex: 0,
            hint: "Electrons flow from anode (oxidation) to cathode (reduction). Cations migrate to the cathode.",
            explanation: "Zinc is the anode (oxidation) and Silver is the cathode (reduction). Electrons always flow from the anode to the cathode, so they flow from Zinc to Silver. Cations from the salt bridge migrate into the cathode (Silver) compartment to neutralize the negative charge left as $Ag^+$ ions are reduced to $Ag(s)$.",
          },
          {
            id: "q9.3.3",
            unitId: 9,
            text: "How much charge (in Coulombs) is transferred when a current of 5.00 A is passed through an electrolytic cell for 20.0 minutes?",
            options: [
              "6000 C",
              "100 C",
              "1200 C",
              "3000 C",
            ],
            correctIndex: 0,
            hint: "Convert minutes to seconds first, then use the formula q = I * t.",
            explanation: "Time in seconds $t = 20.0 \\text{ minutes} \\times 60 \\text{ s/minute} = 1200 \\text{ s}$. Charge $q = I \\times t = 5.00 \\text{ A} \\times 1200 \\text{ s} = 6000 \\text{ C}$.",
          },
          {
            id: "q9.3.4",
            unitId: 9,
            text: "Calculate the mass of copper metal ($Cu$, molar mass 63.55 g/mol) plated out at the cathode of an electrolytic cell containing $Cu^{2+}$ ions by a current of 10.0 A running for 965 seconds. (Faraday's constant is 96485 C/mol e-)",
            options: [
              "3.18 g",
              "6.36 g",
              "1.59 g",
              "12.7 g",
            ],
            correctIndex: 0,
            hint: "Follow the roadmap: Charge (C) -> Moles e- -> Moles Cu (since Cu2+ needs 2e-) -> Mass Cu.",
            explanation: "1) Charge $q = 10.0 \\text{ A} \\times 965 \\text{ s} = 9650 \\text{ C}$. 2) Moles of electrons $= 9650 \\text{ C} / 96485 \\text{ C/mol } e^- = 0.100 \\text{ mol } e^-$. 3) Reduction reaction: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$. Moles of $Cu = 0.100 \\text{ mol } e^- \\times (1 \\text{ mol } Cu / 2 \\text{ mol } e^-) = 0.0500 \\text{ mol } Cu$. 4) Mass of $Cu = 0.0500 \\text{ mol} \\times 63.55 \\text{ g/mol} = 3.18 \\text{ g}$.",
          },
          {
            id: "q9.3.5",
            unitId: 9,
            text: "A standard galvanic cell based on the reaction: $Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)$ has $E^\\circ_{\\text{cell}} = 1.10 \\text{ V}$ at 298 K. What is the value of standard free energy change ($\\Delta G^\\circ$) for this reaction?",
            options: [
              "-212 kJ/mol",
              "+212 kJ/mol",
              "-106 kJ/mol",
              "-212 J/mol",
            ],
            correctIndex: 0,
            hint: "Use the equation ΔG° = -n * F * E°cell. Here, n is 2 (for Zn -> Zn2+ + 2e-).",
            explanation: "$\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}} = -2 \\text{ mol } e^- \\times 96485 \\text{ C/mol } e^- \\times 1.10 \\text{ V} = -212267 \\text{ J/mol} \\approx -212 \\text{ kJ/mol}$.",
          },
          {
            id: "q9.3.6",
            unitId: 9,
            text: "How many moles of electrons are required to deposit $1.00 \\text{ mol}$ of copper metal ($Cu$) from an aqueous solution of $Cu^{2+}$ ions?",
            options: [
              "$1.00 \\text{ mol}$",
              "$2.00 \\text{ mol}$",
              "$0.50 \\text{ mol}$",
              "$4.00 \\text{ mol}$",
            ],
            correctIndex: 1,
            hint: "Write the half-reaction for the reduction of Cu2+ ions to solid copper.",
            explanation: "The reduction half-reaction is: $Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s)$. This stoichiometry shows that exactly $2$ moles of electrons ($e^-$) are required to reduce and deposit $1$ mole of copper metal ($Cu(s)$).",
          },
          {
            id: "q9.3.7",
            unitId: 9,
            text: "An electrolytic cell passes a current of $2.00 \\text{ A}$ through an aqueous solution of $AgNO_3$ for $30.0 \\text{ minutes}$. How many grams of silver metal ($Ag$, molar mass $= 107.9 \\text{ g/mol}$) are deposited? ($F = 96485 \\text{ C/mol } e^-$)",
            options: [
              "$4.03 \\text{ g}$",
              "$2.01 \\text{ g}$",
              "$8.06 \\text{ g}$",
              "$1.21 \\text{ g}$",
            ],
            correctIndex: 0,
            hint: "First calculate the total charge passed using Q = I * t (t in seconds). Convert charge to moles of electrons, then to moles of Ag (using Ag+ + e- -> Ag), and finally to grams.",
            explanation: "Time in seconds: $t = 30.0 \\text{ min} \\times 60 \\text{ s/min} = 1800 \\text{ s}$. Charge: $q = I \\times t = 2.00 \\text{ A} \\times 1800 \\text{ s} = 3600 \\text{ C}$. Moles of electrons: $n_{e^-} = 3600 \\text{ C} / 96485 \\text{ C/mol } e^- \\approx 0.0373 \\text{ mol}$. Since the reduction is $Ag^+ + e^- \\rightarrow Ag(s)$, $1 \\text{ mol of } e^-$ deposits $1 \\text{ mol of } Ag$. Moles of $Ag = 0.0373 \\text{ mol}$. Mass of $Ag = 0.0373 \\text{ mol} \\times 107.9 \\text{ g/mol} \\approx 4.03 \\text{ g}$.",
          },
          {
            id: "q9.3.8",
            unitId: 9,
            text: "For the cell: $Zn(s) | Zn^{2+}(aq) || Cu^{2+}(aq) | Cu(s)$ with $E^\\circ = +1.10 \\text{ V}$. If the concentration of $Cu^{2+}$ is increased to $2.0 M$ while $[Zn^{2+}]$ remains at $1.0 M$, how will the cell potential ($E_{cell}$) be affected, qualitatively, according to the Nernst equation?",
            options: [
              "$E_{cell}$ will remain equal to $+1.10 \\text{ V}$.",
              "$E_{cell}$ will be greater than $+1.10 \\text{ V}$.",
              "$E_{cell}$ will be less than $+1.10 \\text{ V}$.",
              "$E_{cell}$ will drop to zero.",
            ],
            correctIndex: 1,
            hint: "Analyze the reaction quotient Q = [Zn2+] / [Cu2+]. If [Cu2+] increases, Q becomes smaller than 1. Check the Nernst equation: E = E* - (RT/nF)ln Q.",
            explanation: "The overall cell reaction is: $Zn(s) + Cu^{2+}(aq) \\rightleftharpoons Zn^{2+}(aq) + Cu(s)$. The reaction quotient is $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]}$. Increasing $[Cu^{2+}]$ to $2.0 M$ makes $Q = 1/2 = 0.5$. Since $Q < 1$, $\\ln Q$ is negative. In the Nernst equation $E_{cell} = E^\\circ_{cell} - \\frac{RT}{nF}\\ln Q$, subtracting a negative term increases the cell potential, so $E_{cell} > E^\\circ_{cell}$.",
          },
          {
            id: "q9.3.9",
            unitId: 9,
            text: "What occurs during the electrolysis of an aqueous solution of sodium chloride ($NaCl(aq)$)?",
            options: [
              "Sodium metal is deposited at the cathode.",
              "Hydrogen gas is produced at the cathode, and chlorine gas is produced at the anode.",
              "Oxygen gas is produced at both electrodes.",
              "Sodium ions are oxidized to sodium metal.",
            ],
            correctIndex: 1,
            hint: "Consider the competing half-reactions of water. Water is easier to reduce than sodium ions, and chloride is easier to oxidize than water (due to overpotential).",
            explanation: "In aqueous solution, there is competition at the electrodes. At the cathode, water ($E^\\circ_{red} = -0.83 	ext{ V}$) is easier to reduce than $Na^+$ ($E^\\circ_{red} = -2.71 	ext{ V}$), producing $H_2(g)$ and $OH^-$. At the anode, chloride ions are oxidized to $Cl_2(g)$ rather than water being oxidized to $O_2(g)$ due to kinetic overpotential. Thus, $H_2(g)$ and $Cl_2(g)$ are produced.",
          },
          {
            id: "q9.3.10",
            unitId: 9,
            text: "According to the Nernst equation, what happens to the cell potential ($E$) of a galvanic cell as it operates and runs to completion?",
            options: [
              "It remains constant until the reactants are completely gone, then drops to zero.",
              "It decreases continuously, eventually reaching zero when the reaction reaches equilibrium.",
              "It increases continuously because the cell is generating energy.",
              "It fluctuates wildly.",
            ],
            correctIndex: 1,
            hint: "As the cell operates, reactants are consumed (denominator of Q decreases) and products are formed (numerator of Q increases), so Q increases. As Q approaches K, E approaches 0.",
            explanation: "As the reaction proceeds, reactants are consumed and products are formed, causing the reaction quotient $Q$ to increase. As $Q$ increases, the term subtracted in the Nernst equation increases, causing the cell potential $E_{cell}$ to decrease. When the system reaches chemical equilibrium, $Q = K_{eq}$, and the cell potential becomes exactly $0$ (the battery is 'dead').",
          },
        ],
      },
    ],
  },
];
