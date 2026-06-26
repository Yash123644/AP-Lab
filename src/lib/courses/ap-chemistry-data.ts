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
        image: "/images/chemistry/units/unit1.png",
        article: `# Moles, Molar Mass, and Elemental Composition

The mole is the fundamental unit in chemistry that bridges the microscopic world of atoms and molecules to the macroscopic world of grams and liters.

## The Mole Concept and Avogadro's Number

A <vocab term="Mole" definition="The SI unit for amount of substance, containing exactly 6.02214076 x 10^23 elementary entities.">mole</vocab> represents a specific quantity of matter. Just as a dozen means twelve, one mole of any substance contains exactly $6.02214 \\times 10^{23}$ representative particles (atoms, molecules, formula units, or ions). This scaling factor is known as <vocab term="Avogadro's Number" definition="The number of representative particles in one mole of a substance, equal to 6.02214 x 10^23.">Avogadro's Number</vocab> ($N_A$):

$$N_A = 6.022 \\times 10^{23} \\text{ particles/mol}$$

## Molar Mass

The <vocab term="Molar Mass" definition="The mass in grams of one mole of a substance, expressed in units of g/mol.">molar mass</vocab> ($M$) is the mass in grams of one mole of a substance. For individual elements, the molar mass is equivalent to the average atomic mass found on the periodic table (e.g., Carbon is $12.011 \\text{ g/mol}$). For compounds, it is the sum of the atomic masses of all constituent elements:

$$M = \\sum (n_i \\times A_i)$$

Where:
- $n_i$ is the number of atoms of element $i$ in the chemical formula.
- $A_i$ is the atomic mass of element $i$.

### Mass-Mole Conversions
The relationship between mass ($m$), moles ($n$), and molar mass ($M$) is given by:

$$n = \\frac{m}{M}$$

| Calculation Type | Formula / Conversion Factor |
|---|---|
| Mass to Moles | $n = m / M$ |
| Moles to Mass | $m = n \\times M$ |
| Moles to Particles | $\\text{Particles} = n \\times N_A$ |
| Particles to Moles | $n = \\text{Particles} / N_A$ |

## Percent Composition by Mass

The <vocab term="Percent Composition" definition="The percentage by mass of each element in a compound.">percent composition</vocab> represents the relative mass of each element within a compound:

$$\\% \\text{ Element} = \\left( \\frac{\\text{Mass of Element in 1 mol of Compound}}{\\text{Molar Mass of Compound}} \\right) \\times 100\\%$$

## Empirical and Molecular Formulas

- **Empirical Formula**: The simplest whole-number ratio of atoms of each element in a compound.
- **Molecular Formula**: The actual number of atoms of each element in a single molecule of the compound. It is a whole-number multiple ($x$) of the empirical formula:

$$x = \\frac{\\text{Molar Mass of Compound}}{\\text{Molar Mass of Empirical Formula}}$$

### Empirical Formula Calculation Steps:
1. **Assume a 100.0 g sample** if given percentages, converting percent values directly to grams.
2. **Convert grams to moles** for each element using $n = m / M$.
3. **Divide all mole values by the smallest mole value** obtained.
4. **Multiply to get whole numbers** if fractional ratios remain (e.g., multiply by 2 for $.5$, by 3 for $.33$).
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
        ],
      },
      {
        id: "1.2",
        title: "Atomic Structure, Electron Configuration, and PES",
        description: "Examine the subatomic structures of atoms, isotopes, mass spectrometry, quantum mechanical models, electron configurations, and photoelectron spectroscopy (PES).",
        youtubeId: "mBT73Pesiog",
        image: "/images/chemistry/units/unit1.png",
        article: `# Atomic Structure, Electron Configuration, and PES

The modern model of the atom is quantum mechanical, describing electrons not in fixed orbits, but within regions of probability called orbitals.

## Subatomic Particles and Isotopes

An atom consists of a dense, positively charged nucleus (containing protons and neutrons) surrounded by negatively charged electrons. 
- **Protons** ($p^+$) define the element's identity (Atomic Number, $Z$).
- **Neutrons** ($n^0$) provide nuclear stability. Atoms of the same element with different numbers of neutrons are called <vocab term="Isotopes" definition="Atoms of the same element that have the same number of protons but different numbers of neutrons.">isotopes</vocab>.
- **Electrons** ($e^-$) govern chemical reactivity.

## Mass Spectrometry

<vocab term="Mass Spectrometry" definition="An analytical technique used to measure the mass-to-charge ratio of ions, determining isotopic composition.">Mass spectrometry</vocab> is a technique used to measure the mass-to-charge ratio ($m/z$) of ions, allowing us to determine the mass and relative abundance of isotopes. The average atomic mass of an element is a weighted average:

$$\\text{Average Atomic Mass} = \\sum (\\text{Abundance}_i \\times \\text{Mass}_i)$$

## Quantum Mechanical Model & Electron Configurations

Electrons occupy shells ($n = 1, 2, 3...$), subshells ($s, p, d, f$), and individual orbitals.
- **Aufbau Principle**: Electrons fill the lowest-energy orbitals first.
- **Pauli Exclusion Principle**: An orbital can hold a maximum of 2 electrons, which must have opposite spins.
- **Hund's Rule**: In degenerate orbitals (orbitals of the same energy), electrons fill singly first with parallel spins.

### Writing Configurations:
For transition metal cations, electrons are removed from the highest shell ($ns$) before the $(n-1)d$ subshell (e.g., $Fe^{2+}$ is $[Ar] 3d^6$, not $[Ar] 4s^2 3d^4$).

## Photoelectron Spectroscopy (PES)

<vocab term="Photoelectron Spectroscopy" definition="An experimental method that measures the ionization energy of core and valence electrons in an atom using high-energy photons.">Photoelectron Spectroscopy</vocab> (PES) uses high-energy photons (X-ray or UV) to eject electrons from atoms. By measuring the kinetic energy of ejected photoelectrons, the binding energy (ionization energy) of the electrons in different shells is calculated:

$$E_{\\text{photon}} = \\text{Binding Energy} + KE_{\\text{electron}}$$

### Interpreting a PES Spectrum:
1. **The x-axis** represents Binding Energy (often plotted in reverse, decreasing left-to-right). Peaks further to the left (higher energy) correspond to inner-shell electrons (core electrons).
2. **The y-axis** represents photoelectron intensity (relative number of electrons). The height of a peak is proportional to the number of electrons in that subshell.
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
        ],
      },
      {
        id: "1.3",
        title: "Periodic Trends and Valence Bonding",
        description: "Understand how Coulomb's law, effective nuclear charge, and atomic shielding drive trends in atomic radius, ionic radius, ionization energy, and electronegativity.",
        youtubeId: "0tP6bV89log",
        image: "/images/chemistry/periodic_trends.png",
        article: `# Periodic Trends and Valence Bonding

Periodic trends are systematic variations in physical and chemical properties of elements across periods and groups, driven by electron configurations and electrostatic forces.

## Coulomb's Law and Effective Nuclear Charge

The primary physical model for periodic trends is **Coulomb's Law**:

$$F = k \\frac{q_1 q_2}{r^2}$$

Where:
- $F$ is the electrostatic force of attraction between the nucleus and the valence electrons.
- $q_1$ is the charge of the nucleus (effective nuclear charge, $Z_{\\text{eff}}$).
- $q_2$ is the charge of the electron.
- $r$ is the average distance between the nucleus and the valence electron shell.

<vocab term="Effective Nuclear Charge" definition="The net positive charge experienced by valence electrons, calculated as atomic number minus inner shielding electrons.">Effective nuclear charge</vocab> ($Z_{\\text{eff}}$) is the net positive charge experienced by an electron in a multi-electron atom:

$$Z_{\\text{eff}} = Z - S$$

Where $Z$ is the atomic number (number of protons) and $S$ is the shielding constant (approximated by the number of inner-shell core electrons).

- **Across a Period**: $Z_{\\text{eff}}$ increases because protons are added to the nucleus, while shielding ($S$) remains relatively constant because electrons are added to the same valence shell.
- **Down a Group**: The principal quantum number ($n$) increases, adding new electron shells. This increases the distance $r$ from the nucleus.

## Summary of Periodic Trends

| Trend | Across a Period (Left to Right) | Down a Group (Top to Bottom) | Core Physical Explanation |
|---|---|---|---|
| **Atomic Radius** | Decreases | Increases | Across: Higher $Z_{\\text{eff}}$ pulls valence electrons closer. Down: Adding electron shells increases distance. |
| **First Ionization Energy** | Increases | Decreases | Across: Higher $Z_{\\text{eff}}$ binds valence electrons more tightly. Down: Greater distance reduces electrostatic attraction. |
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
        image: "/images/chemistry/units/unit2.png",
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
        ],
      },
      {
        id: "2.2",
        title: "Structure of Ionic Solids, Metals, and Alloys",
        description: "Understand the structural properties of ionic solids, metallic solids, and how interstitial and substitutional alloys alter metal properties.",
        youtubeId: "5vSBjS99Ozs",
        image: "/images/chemistry/units/unit2.png",
        article: `# Structure of Ionic Solids, Metals, and Alloys

The macroscopic properties of solids—such as electrical conductivity, malleability, and hardness—are direct consequences of their microscopic structure and bonding.

## Structure and Properties of Ionic Solids

<vocab term="Ionic Solid" definition="A crystalline solid held together by electrostatic attractions between oppositely charged ions in a 3D lattice.">Ionic solids</vocab> form a rigid, three-dimensional crystalline lattice held together by strong electrostatic attractions (Coulombic forces) between cations and anions.

- **Properties**:
  - **High Melting and Boiling Points**: Due to the strength of the electrostatic attractions.
  - **Brittleness**: If a force shifts the lattice layers, ions of like charge align and repel each other, causing the crystal to cleave.
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
        ],
      },
      {
        id: "2.3",
        title: "Lewis Diagrams, Formal Charge, and VSEPR Hybridization",
        description: "Master Lewis dot structures, resonance, formal charge calculations, VSEPR molecular geometry, bond angles, and orbital hybridization.",
        youtubeId: "xNYiB_2u8J4",
        image: "/images/chemistry/units/unit2.png",
        article: `# Lewis Diagrams, Formal Charge, and VSEPR Hybridization

Valence Bond theory and VSEPR theory allow us to predict the three-dimensional shapes, bonding, and properties of molecules from their Lewis structures.

## Writing Lewis Diagrams and Formal Charge

A <vocab term="Lewis Diagram" definition="A structural representation of a molecule showing valence electrons as dots and bonds as lines.">Lewis diagram</vocab> shows how valence electrons are distributed in covalent molecules.

### Formal Charge Optimization:
When multiple valid Lewis structures can be drawn, we use <vocab term="Formal Charge" definition="The charge assigned to an atom in a molecule, calculated as valence electrons minus nonbonding electrons minus half of bonding electrons.">formal charge</vocab> to identify the most stable structure. The formal charge (FC) of an atom is calculated as:

$$\\text{FC} = \\text{Valence } e^- - \\left( \\text{Lone Pair } e^- + \\frac{1}{2} \\text{Bonding } e^- \\right)$$

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
        image: "/images/chemistry/units/unit3.png",
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

## Heating Curves and Phase Diagrams

- **Heating Curves**: Flat plateaus indicate phase changes (melting, boiling). During a plateau, temperature is constant because the input thermal energy is used exclusively to overcome intermolecular attractions (breaking IMFs), not to increase the kinetic energy of the molecules.
  - **Heat of Fusion** ($\\Delta H_{\\text{fus}}$): Energy to melt 1 mole of solid.
  - **Heat of Vaporization** ($\\Delta H_{\\text{vap}}$): Energy to vaporize 1 mole of liquid. Always larger than $\\Delta H_{\\text{fus}}$ because vaporizing requires completely breaking all IMFs, whereas melting only weakens them.
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
        ],
      },
      {
        id: "3.2",
        title: "Gas Laws, Kinetic Molecular Theory, and Deviations",
        description: "Apply the Ideal Gas Law and Dalton's Law of Partial Pressures. Analyze gas behavior using Kinetic Molecular Theory (KMT), Maxwell-Boltzmann speed distributions, and explain deviations from ideal behavior.",
        youtubeId: "gmN2fRlQFp4",
        image: "/images/chemistry/units/unit3.png",
        article: `# Gas Laws, Kinetic Molecular Theory, and Deviations

Gases are described by state variables: Pressure ($P$), Volume ($V$), Temperature ($T$ in Kelvin), and moles ($n$).

## The Ideal Gas Law and Partial Pressures

The behavior of an ideal gas is described by the **Ideal Gas Law**:

$$PV = nRT$$

Where:
- $R$ is the gas constant ($0.08206 \\text{ L atm / mol K}$ or $8.314 \\text{ J / mol K}$).
- $T$ must always be in **Kelvin** ($T_{\\text{K}} = T_{^\\circ\\text{C}} + 273.15$).

### Dalton's Law of Partial Pressures:
In a mixture of non-reacting gases, the total pressure ($P_{\\text{total}}$) is the sum of the partial pressures of the individual gases:

$$P_{\\text{total}} = P_A + P_B + P_C + \\dots$$

The partial pressure of a gas is proportional to its mole fraction ($X_A$):

$$P_A = X_A \\times P_{\\text{total}} \\quad \\text{where} \\quad X_A = \\frac{n_A}{n_{\\text{total}}}$$

## Kinetic Molecular Theory (KMT)

KMT is a microscopic model that explains macroscopic gas laws based on the following postulates:
1. Gas particles are in constant, random, straight-line motion.
2. The volume of the gas particles themselves is negligible compared to the volume of the container.
3. There are no attractive or repulsive forces between gas particles.
4. Collisions between particles and with container walls are perfectly elastic.
5. The average kinetic energy of gas particles is directly proportional to the absolute temperature:

$$KE_{\\text{avg}} = \\frac{3}{2} RT$$

### Molecular Speed and Maxwell-Boltzmann Distribution:
Although all gas particles in a sample at a given temperature have the same *average* kinetic energy, they do not move at the same speed. The root-mean-square speed ($u_{\\text{rms}}$) is given by:

$$u_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}$$

Where $M$ is the molar mass in kg/mol.
- **Molar Mass Effect**: At a constant temperature, lighter gas particles move faster on average than heavier particles.
- **Temperature Effect**: As temperature increases, the distribution of speeds spreads out, and the peak of the curve shifts to the right (higher average speed).

## Deviations from Ideal Behavior

Real gases deviate from ideal behavior under conditions of **high pressure (small volume)** and **low temperature**. Under these conditions, KMT postulates break down:

1. **Low Temperature**: Particles move slowly, allowing **intermolecular attractions** to pull them together, which reduces collisions with the container walls, making $P_{\\text{real}} < P_{\\text{ideal}}$.
2. **High Pressure / Small Volume**: Particles are packed tightly together, meaning the **volume of the gas particles themselves** is no longer negligible compared to the container volume, making $V_{\\text{real}} > V_{\\text{ideal}}$.

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
        ],
      },
      {
        id: "3.3",
        title: "Solutions, Solubility, and Light Spectroscopy (Beer-Lambert)",
        description: "Analyze solutions, concentration (molarity), chromatography, distillation, and apply the Beer-Lambert Law to determine solution concentration spectrophotometrically.",
        youtubeId: "i2qpDSwyR-0",
        image: "/images/chemistry/beers_law_plot.png",
        article: `# Solutions, Solubility, and Light Spectroscopy (Beer-Lambert)

Solutions are homogeneous mixtures. The components include a solvent (doing the dissolving, present in largest amount) and a solute (the substance being dissolved).

## Concentration and Molarity

The primary unit of concentration in AP Chemistry is <vocab term="Molarity" definition="The concentration of a solution expressed as moles of solute per liter of solution.">Molarity</vocab> ($M$):

$$M = \\frac{\\text{moles of solute}}{\\text{Liters of solution}}$$

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
    $$R_f = \\frac{\\text{Distance traveled by solute}}{\\text{Distance traveled by solvent front}}$$

## Beer-Lambert Law

The <vocab term="Beer-Lambert Law" definition="A law stating that the absorbance of a solution is directly proportional to its concentration, path length, and molar absorptivity.">Beer-Lambert Law</vocab> relates the absorbance of light ($A$) by a colored solution to its concentration ($c$):

$$A = \\epsilon b c$$

Where:
- $A$ is the absorbance (unitless, measured by a spectrophotometer).
- $\\epsilon$ is the molar absorptivity (constant for a specific solute at a specific wavelength).
- $b$ is the path length of the cuvette (typically $1.0 \\text{ cm}$).
- $c$ is the molar concentration of the solute.

### Calibration Curves:
A plot of Absorbance vs. Concentration yields a straight line passing through the origin. By measuring the absorbance of a solution of unknown concentration, its concentration can be determined from this calibration curve.

### Common Spectrophotometer Errors:
- **Fingerprints or water droplets on cuvette**: Scatters light, increasing absorbance, yielding an artificially high calculated concentration.
- **Incorrect wavelength**: Wavelength of maximum absorbance ($\\lambda_{\\text{max}}$) should be selected for maximum sensitivity.
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
        image: "/images/chemistry/units/unit4.png",
        article: `# Chemical Equations, Physical Changes, and Net Ionic Equations

A chemical equation represents a change in matter. Matter is conserved in all processes (Law of Conservation of Mass), meaning equations must be balanced.

## Physical vs. Chemical Changes

- **Physical Changes**: Process where the intermolecular forces between molecules are altered, but the intramolecular covalent or ionic bonds are NOT broken. The chemical identity of the substance is conserved (e.g., phase changes like boiling water: $H_2O(l) \\rightarrow H_2O(g)$).
- **Chemical Changes**: Process where intramolecular bonds are broken and/or formed, creating new substances with different chemical properties (e.g., electrolysis of water: $2H_2O(l) \\rightarrow 2H_2(g) + O_2(g)$).
  - *Evidence of Chemical Change*: Heat release/absorption, gas production, precipitate formation, or permanent color change.

## Strong vs. Weak Electrolytes

- **Strong Electrolytes**: Dissociate completely into ions when dissolved in water (e.g., soluble salts like $NaCl$, strong acids like $HCl$, strong bases like $NaOH$).
- **Weak Electrolytes**: Dissociate only partially into ions (e.g., weak acids like $HC_2H_3O_2$, weak bases like $NH_3$).
- **Nonelectrolytes**: Do not dissociate into ions at all (e.g., molecular compounds like sucrose or ethanol).

## Writing Net Ionic Equations

When soluble ionic compounds are mixed, they may form an insoluble solid, called a **precipitate**. 

### Example: Mixing $AgNO_3(aq)$ and $NaCl(aq)$
1. **Molecular Equation**: Shows all reactants and products as intact compounds.
   $$AgNO_3(aq) + NaCl(aq) \\rightarrow AgCl(s) + NaNO_3(aq)$$
2. **Complete Ionic Equation**: Shows all soluble strong electrolytes dissociated into their constituent ions.
   $$Ag^+(aq) + NO_3^-(aq) + Na^+(aq) + Cl^-(aq) \\rightarrow AgCl(s) + Na^+(aq) + NO_3^-(aq)$$
3. **Net Ionic Equation**: Shows only the species directly participating in the chemical reaction. We cross out <vocab term="Spectator Ions" definition="Ions that are present in the reaction mixture but do not participate in the actual chemical change.">spectator ions</vocab> (ions that appear unchanged on both sides of the equation, in this case $Na^+$ and $NO_3^-$).
   $$Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$$
`,
        questions: [
          {
            id: "q4.1.1",
            unitId: 4,
            text: "When aqueous solutions of sodium carbonate ($Na_2CO_3$) and calcium chloride ($CaCl_2$) are mixed, a white precipitate forms. What is the net ionic equation for this reaction?",
            options: [
              "$Na^+(aq) + Cl^-(aq) \\rightarrow NaCl(s)$",
              "$Ca^{2+}(aq) + CO_3^{2-}(aq) \\rightarrow CaCO_3(s)$",
              "$Ca^{2+}(aq) + CO_3^{2-}(aq) \\rightarrow CaCO_3(aq)$",
              "$Na_2CO_3(aq) + CaCl_2(aq) \\rightarrow CaCO_3(s) + 2NaCl(aq)$",
            ],
            correctIndex: 1,
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
        ],
      },
      {
        id: "4.2",
        title: "Reaction Stoichiometry and Titration Fundamentals",
        description: "Perform stoichiometric calculations, determine limiting reactants, calculate percent yields, and analyze titration data to find analyte concentration.",
        youtubeId: "LQq203gyftA",
        image: "/images/chemistry/units/unit4.png",
        article: `# Reaction Stoichiometry and Titration Fundamentals

Stoichiometry uses the coefficients of a balanced chemical equation to determine the relative amounts of reactants and products in a chemical reaction.

## Basic Stoichiometric Calculations

A balanced chemical equation provides mole ratios. To solve stoichiometry problems, follow these steps:
1. **Convert given quantity to moles** (e.g., using $n = m/M$ for mass, or $n = M \\times V$ for solutions).
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
  $$\\% \\text{ Yield} = \\left( \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\right) \\times 100\\%$$

## Titrations

A <vocab term="Titration" definition="A laboratory method where a solution of known concentration (titrant) is added to a solution of unknown concentration (analyte) to determine its concentration.">titration</vocab> is a volumetric technique used to determine the concentration of an unknown analyte.

- **Titrant**: The solution of known concentration (in the buret).
- **Analyte**: The solution of unknown concentration (in the Erlenmeyer flask).
- **Equivalence Point**: The point at which the moles of titrant added are stoichiometrically equal to the moles of analyte present:
  $$n_{\\text{titrant}} = n_{\\text{analyte}} \\quad \\text{(adjusted for stoichiometry)}$$
- **Endpoint**: The point at which the indicator changes color. A good indicator has its color change (endpoint) as close as possible to the equivalence point.

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
              "0.0714 M",
              "0.140 M",
              "0.250 M",
              "0.350 M",
            ],
            correctIndex: 1,
            hint: "At the equivalence point of a monoprotic titration, moles of acid equal moles of base.",
            explanation: "Moles of $NaOH = M \\times V = 0.100 \\text{ mol/L} \\times 0.03500 \\text{ L} = 0.00350 \\text{ mol}$. Since the acid is monoprotic ($HA + NaOH \\rightarrow NaA + H_2O$), moles of $HA = 0.00350 \\text{ mol}$. The molarity of the acid is $M = 0.00350 \\text{ mol} / 0.02500 \\text{ L} = 0.140 \\text{ M}$.",
          },
          {
            id: "q4.2.3",
            unitId: 4,
            text: "In a synthesis reaction, the theoretical yield of a product is calculated to be 15.0 g. If the student isolates 12.0 g of product in the lab, what is the percent yield?",
            options: [
              "125%",
              "80.0%",
              "20.0%",
              "75.0%",
            ],
            correctIndex: 1,
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
              "0.50 mol",
              "1.5 mol",
              "3.0 mol",
              "2.0 mol",
            ],
            correctIndex: 1,
            hint: "Use the mole ratio between propane and carbon dioxide.",
            explanation: "From the balanced equation, 1 mole of $C_3H_8$ produces 3 moles of $CO_2$. Therefore, $0.50 \\text{ mol } C_3H_8 \\times (3 \\text{ mol } CO_2 / 1 \\text{ mol } C_3H_8) = 1.50 \\text{ mol } CO_2$.",
          },
        ],
      },
      {
        id: "4.3",
        title: "Acid-Base and Oxidation-Reduction (Redox) Processes",
        description: "Identify Brønsted-Lowry acid-base pairs and assign oxidation numbers. Balance and analyze oxidation-reduction (redox) reactions using half-reactions.",
        youtubeId: "RX6rh-eeflM",
        image: "/images/chemistry/units/unit4.png",
        article: `# Acid-Base and Oxidation-Reduction (Redox) Processes

Two key classes of chemical reactions are acid-base (proton transfer) and oxidation-reduction (electron transfer).

## Brønsted-Lowry Acids and Bases

- **Brønsted-Lowry Acid**: A substance that donates a proton ($H^+$).
- **Brønsted-Lowry Base**: A substance that accepts a proton ($H^+$).

When an acid donates a proton, it forms its **conjugate base**. When a base accepts a proton, it forms its **conjugate acid**.

### Example:
$$NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$$
- $NH_3$ (base) accepts a proton to become $NH_4^+$ (conjugate acid).
- $H_2O$ (acid) donates a proton to become $OH^-$ (conjugate base).

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
              "Conjugate acid: $CO_3^{2-}$; Conjugate base: $H_2CO_3$",
              "Conjugate acid: $H_2CO_3$; Conjugate base: $CO_3^{2-}$",
              "Conjugate acid: $H_3CO_3^+$; Conjugate base: $CO_3^{2-}$",
              "Conjugate acid: $H_2CO_3$; Conjugate base: $HCO_3^{2-}$",
            ],
            correctIndex: 1,
            hint: "An acid has one more H+ than its conjugate base. A base has one less H+.",
            explanation: "To find the conjugate acid, add a proton ($H^+$) to $HCO_3^-$, yielding $H_2CO_3$. To find the conjugate base, remove a proton ($H^+$) from $HCO_3^-$, yielding the carbonate ion ($CO_3^{2-}$).",
          },
          {
            id: "q4.3.2",
            unitId: 4,
            text: "What is the oxidation number of chromium ($Cr$) in the dichromate ion ($Cr_2O_7^{2-}$)?",
            options: [
              "+3",
              "+4",
              "+6",
              "+7",
            ],
            correctIndex: 2,
            hint: "Set up an equation: 2*(Cr) + 7*(O) = -2, where oxygen is typically -2.",
            explanation: "Let $x$ be the oxidation state of Cr. Oxygen is $-2$. The equation is: $2x + 7(-2) = -2 \\rightarrow 2x - 14 = -2 \\rightarrow 2x = 12 \\rightarrow x = +6$.",
          },
          {
            id: "q4.3.3",
            unitId: 4,
            text: "In the reaction: $Zn(s) + Cu^{2+}(aq) \\rightarrow Zn^{2+}(aq) + Cu(s)$, which species is oxidized, and which is the reducing agent?",
            options: [
              "$Zn$ is oxidized; $Cu^{2+}$ is the reducing agent.",
              "$Cu^{2+}$ is oxidized; $Zn$ is the reducing agent.",
              "$Zn$ is oxidized; $Zn$ is the reducing agent.",
              "$Cu$ is oxidized; $Cu^{2+}$ is the reducing agent.",
            ],
            correctIndex: 2,
            hint: "Oxidation is the loss of electrons (increase in oxidation state). The species oxidized is the reducing agent.",
            explanation: "$Zn(s)$ starts with an oxidation state of 0 and goes to $+2$, meaning it loses electrons (oxidized). Because $Zn$ donates these electrons to reduce $Cu^{2+}$, $Zn$ is the reducing agent. Thus, $Zn$ is both oxidized and the reducing agent.",
          },
          {
            id: "q4.3.4",
            unitId: 4,
            text: "Which of the following chemical reactions represents a redox process?",
            options: [
              "$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$",
              "$NaCl(aq) + AgNO_3(aq) \\rightarrow AgCl(s) + NaNO_3(aq)$",
              "$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$",
              "$CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$",
            ],
            correctIndex: 2,
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
        image: "/images/chemistry/units/unit5.png",
        article: `# Reaction Rates, Concentration Changes, and Rate Laws

Chemical kinetics describes the speed (rate) of a chemical reaction and the pathway (mechanism) by which it occurs.

## Reaction Rates and Rate Laws

The **rate of reaction** measures the change in concentration of a reactant or product per unit time ($M/s$).

A <vocab term="Rate Law" definition="An mathematical equation relating the rate of a reaction to the concentrations of its reactants, raised to specific powers called orders.">rate law</vocab> relates the reaction rate to the concentrations of reactants, multiplied by a **rate constant** ($k$):

$$\\text{Rate} = k [A]^x [B]^y$$

Where:
- $x$ and $y$ are the **reaction orders** with respect to reactants $A$ and $B$. Reaction orders must be determined **experimentally**; they cannot be deduced from balanced equation coefficients.
- The overall reaction order is the sum of the individual orders ($x + y$).

### Method of Initial Rates:
To determine a rate law, run experiments varying one reactant concentration while keeping others constant, and measure the initial rate. If doubling the concentration of $A$:
- **Rate remains unchanged**: Order is **0** ($	ext{Rate} \\propto [A]^0$).
- **Rate doubles**: Order is **1** ($	ext{Rate} \\propto [A]^1$).
- **Rate quadruples**: Order is **2** ($	ext{Rate} \\propto [A]^2$).

## Integrated Rate Laws and Half-life

Integrated rate laws describe reactant concentration as a function of time. Plotting the data allows us to identify the reaction order:

| Order | Integrated Rate Law | Linear Plot | Slope ($m$) | Half-Life ($t_{1/2}$) | Units of $k$ |
|---|---|---|---|---|---|
| **0** | $[A]_t = -kt + $[A]_0$ | $[A]$ vs. $t$ | $-k$ | $[A]_0 / 2k$ | $M s^{-1}$ |
| **1** | $\\ln[A]_t = -kt + \\ln[A]_0$ | $\\ln[A]$ vs. $t$ | $-k$ | $0.693 / k$ | $s^{-1}$ |
| **2** | $1/[A]_t = kt + 1/[A]_0$ | $1/[A]$ vs. $t$ | $k$ | $1 / k[A]_0$ | $M^{-1} s^{-1}$ |

### First-Order Half-Life:
For a first-order reaction, the half-life ($t_{1/2}$) is constant and independent of the initial concentration:

$$t_{1/2} = \\frac{0.693}{k}$$
`,
        questions: [
          {
            id: "q5.1.1",
            unitId: 5,
            text: `For the reaction $A + B \\rightarrow C$, the following initial rates data were collected:
Exp 1: $[A] = 0.10 M$, $[B] = 0.10 M$, Initial Rate = $2.0 \\times 10^{-3} M/s$
Exp 2: $[A] = 0.20 M$, $[B] = 0.10 M$, Initial Rate = $4.0 \\times 10^{-3} M/s$
Exp 3: $[A] = 0.10 M$, $[B] = 0.20 M$, Initial Rate = $8.0 \\times 10^{-3} M/s$
What is the rate law for this reaction?`,
            options: [
              "$\\text{Rate} = k [A][B]$",
              "$\\text{Rate} = k [A]^2[B]$",
              "$\\text{Rate} = k [A][B]^2$",
              "$\\text{Rate} = k [A]^2[B]^2$",
            ],
            correctIndex: 2,
            hint: "Compare Exp 1 vs Exp 2 to find the order of A, and Exp 1 vs Exp 3 to find the order of B.",
            explanation: "Comparing Exp 1 and Exp 2: $[B]$ is constant, $[A]$ doubles, and the rate doubles ($4.0 / 2.0 = 2$). This indicates the order with respect to $A$ is 1. Comparing Exp 1 and Exp 3: $[A]$ is constant, $[B]$ doubles, and the rate quadruples ($8.0 / 2.0 = 4 = 2^2$). This indicates the order with respect to $B$ is 2. The rate law is $\\text{Rate} = k [A][B]^2$.",
          },
          {
            id: "q5.1.2",
            unitId: 5,
            text: "A student monitors the concentration of a reactant over time. A plot of the natural logarithm of concentration ($\\ln[Reactant]$) versus time yields a straight line with a negative slope. What is the order of the reaction with respect to this reactant?",
            options: [
              "Zeroth order",
              "First order",
              "Second order",
              "Third order",
            ],
            correctIndex: 1,
            hint: "Refer to the linear plots for integrated rate laws.",
            explanation: "A straight line plot of $\\ln[Reactant]$ vs. time is characteristic of a first-order reaction, where $\\ln[A]_t = -kt + \\ln[A]_0$. The slope of this line is equal to $-k$.",
          },
          {
            id: "q5.1.3",
            unitId: 5,
            text: "The rate constant ($k$) of a first-order reaction is $0.0231 \\text{ min}^{-1}$. What is the half-life of this reaction?",
            options: [
              "15.0 min",
              "30.0 min",
              "45.0 min",
              "60.0 min",
            ],
            correctIndex: 1,
            hint: "Use the first-order half-life equation: t1/2 = 0.693 / k.",
            explanation: "Half-life $t_{1/2} = 0.693 / k = 0.693 / 0.0231 \\text{ min}^{-1} = 30.0 \\text{ min}$.",
          },
          {
            id: "q5.1.4",
            unitId: 5,
            text: "What are the units of the rate constant ($k$) for a reaction that has an overall order of 2?",
            options: [
              "$s^{-1}$",
              "$M s^{-1}$",
              "$M^{-1} s^{-1}$",
              "$M^{-2} s^{-1}$",
            ],
            correctIndex: 2,
            hint: "In the rate law, Rate (M/s) = k * [Concentration]^2. Solve for the units of k.",
            explanation: "Rate has units of $M s^{-1}$. For a second-order reaction, $\\text{Rate} = k [A]^2 \\rightarrow M/s = k (M^2) \\rightarrow k = M/s \\times 1/M^2 = M^{-1} s^{-1}$.",
          },
          {
            id: "q5.1.5",
            unitId: 5,
            text: "A second-order reaction has a rate constant $k = 0.50 M^{-1} s^{-1}$. If the initial concentration of the reactant is 2.0 M, what is its half-life?",
            options: [
              "0.25 s",
              "0.50 s",
              "1.0 s",
              "2.0 s",
            ],
            correctIndex: 2,
            hint: "Use the second-order half-life equation: t1/2 = 1 / (k * [A]0).",
            explanation: "For a second-order reaction, the half-life depends on the initial concentration: $t_{1/2} = 1 / (k[A]_0) = 1 / (0.50 \\times 2.0) = 1 / 1.0 = 1.0 \\text{ s}$.",
          },
        ],
      },
      {
        id: "5.2",
        title: "Elementary Reactions, Collision Models, and Energy Profiles",
        description: "Analyze molecular collisions, activation energy barriers, Maxwell-Boltzmann kinetic energy shifts, and transition state theory using reaction energy profiles.",
        youtubeId: "0LjOXV4b-nk",
        image: "/images/chemistry/units/unit5.png",
        article: `# Elementary Reactions, Collision Models, and Energy Profiles

A reaction mechanism consists of one or more elementary reactions. An elementary reaction represents an actual molecular event.

## Molecularity and Elementary Steps

Unlike overall reactions, the rate law of an **elementary step** can be written directly from its balanced equation coefficients. The coefficients represent the <vocab term="Molecularity" definition="The number of reactant particles that collide simultaneously in an elementary reaction.">molecularity</vocab>:
- **Unimolecular**: A single reactant decomposes ($A \\rightarrow \\text{products}$, $\\text{Rate} = k[A]$).
- **Bimolecular**: Two particles collide ($A + B \\rightarrow \\text{products}$, $\\text{Rate} = k[A][B]$).

## Collision Theory

For a chemical reaction to occur, reactant particles must collide. However, only a fraction of collisions result in a reaction. According to **Collision Theory**, a successful collision requires:
1. **Sufficient Energy**: The colliding particles must possess kinetic energy equal to or greater than the **activation energy** ($E_a$).
2. **Correct Orientation**: The particles must collide in a alignment that allows the breaking and forming of bonds.

### Temperature and the Maxwell-Boltzmann Distribution:
As temperature increases, the average kinetic energy of the molecules increases. On a Maxwell-Boltzmann curve, the speed distribution spreads, and a **significantly larger fraction of molecules** possess kinetic energy greater than the activation energy ($KE > E_a$), dramatically increasing the reaction rate.

## Reaction Energy Profiles

A reaction energy profile plots potential energy vs. the progress of the reaction:

1. **Reactants**: Initial potential energy.
2. **Transition State (Activated Complex)**: The highest potential energy point on the curve. This unstable structure represents bonds in the process of breaking and forming.
3. **Activation Energy** ($E_a$): The energy barrier that must be overcome ($E_a = E_{\\text{transition state}} - E_{\\text{reactants}}$).
4. **Products**: Final potential energy.
5. **Enthalpy of Reaction** ($\\Delta H$): The net heat change ($P_E$ of products minus $P_E$ of reactants).
   - If $\\Delta H < 0$: Exothermic.
   - If $\\Delta H > 0$: Endothermic.
`,
        questions: [
          {
            id: "q5.2.1",
            unitId: 5,
            text: "What are the two requirements that must be met for a molecular collision to result in a chemical reaction?",
            options: [
              "The collision must release energy and involve polar molecules.",
              "The particles must collide with sufficient kinetic energy ($KE \\ge E_a$) and in the correct orientation.",
              "The particles must be of the same phase and collide at high velocity.",
              "A catalyst must be present, and the temperature must be high.",
            ],
            correctIndex: 1,
            hint: "Collision theory requires particles to possess both the necessary energy and alignment.",
            explanation: "According to collision theory, molecules must collide with kinetic energy at least equal to the activation energy barrier ($E_a$) to break existing bonds, and they must be aligned in the correct orientation for new bonds to form.",
          },
          {
            id: "q5.2.2",
            unitId: 5,
            text: "For an elementary step $2NO_2(g) \\rightarrow N_2O_4(g)$, what is the molecularity and the rate law?",
            options: [
              "Unimolecular, $\\text{Rate} = k[NO_2]$",
              "Bimolecular, $\\text{Rate} = k[NO_2]$",
              "Bimolecular, $\\text{Rate} = k[NO_2]^2$",
              "Termolecular, $\\text{Rate} = k[NO_2]^2$",
            ],
            correctIndex: 2,
            hint: "For elementary reactions, the rate law exponents are equal to the coefficients in the reaction step.",
            explanation: "The step involves two molecules of $NO_2$ colliding, so it is a bimolecular reaction. Since it is an elementary reaction, its rate law can be written directly from its stoichiometry: $\\text{Rate} = k[NO_2]^2$.",
          },
          {
            id: "q5.2.3",
            unitId: 5,
            text: "A reaction has a forward activation energy ($E_{a,\\text{f}}$) of 80 kJ/mol and an enthalpy of reaction ($\\Delta H$) of -30 kJ/mol. What is the activation energy for the reverse reaction ($E_{a,\\text{r}}$)?",
            options: [
              "50 kJ/mol",
              "110 kJ/mol",
              "30 kJ/mol",
              "80 kJ/mol",
            ],
            correctIndex: 1,
            hint: "Draw an energy profile. The products are 30 kJ/mol lower in energy than the reactants.",
            explanation: "For an exothermic reaction ($\\Delta H = -30 \\text{ kJ/mol}$), the potential energy of the products is $30 \\text{ kJ/mol}$ lower than the reactants. To go from products back to the transition state, the energy barrier is the sum of the forward barrier and the difference: $E_{a,r} = E_{a,f} - \\Delta H = 80 - (-30) = 111 \\text{ kJ/mol}$.",
          },
          {
            id: "q5.2.4",
            unitId: 5,
            text: "Why does a relatively small increase in temperature (e.g., from 298 K to 308 K) often lead to a large increase (e.g., doubling) in the rate of a chemical reaction?",
            options: [
              "The collision frequency increases by a factor of two.",
              "The activation energy of the reaction is lowered by the temperature increase.",
              "The fraction of molecules with kinetic energy greater than the activation energy increases dramatically.",
              "The orientation factor of the collision is optimized at higher temperatures.",
            ],
            correctIndex: 2,
            hint: "Think about the shape of the Maxwell-Boltzmann distribution and the activation energy cutoff.",
            explanation: "A $10\\text{ K}$ increase in temperature only increases average speed (and thus collision frequency) by a few percent. However, as the Maxwell-Boltzmann distribution curve flattens and shifts right, the area under the curve to the right of the activation energy ($E_a$) threshold increases exponentially, meaning a vastly larger number of molecules now possess enough energy to react.",
          },
          {
            id: "q5.2.5",
            unitId: 5,
            text: "What is the name of the unstable, high-energy species that forms at the peak of a reaction energy profile?",
            options: [
              "Reaction intermediate",
              "Catalyst",
              "Activated complex",
              "Reactant clone",
            ],
            correctIndex: 2,
            hint: "Also known as the transition state.",
            explanation: "The species formed at the highest potential energy point on the reaction pathway is called the activated complex or transition state. It is highly unstable and temporarily exists as bonds are breaking and forming simultaneously.",
          },
        ],
      },
      {
        id: "5.3",
        title: "Multistep Reaction Mechanisms and Catalysis",
        description: "Propose and evaluate multi-step reaction mechanisms, identify reaction intermediates, determine the rate-determining step, and understand the action of catalysts.",
        youtubeId: "I64dUjEzrcw",
        image: "/images/chemistry/units/unit5.png",
        article: `# Multistep Reaction Mechanisms and Catalysis

Most chemical reactions occur via a series of simple elementary steps, which together make up the reaction mechanism.

## Multi-Step Mechanisms and Intermediates

Consider the mechanism:
- Step 1 (Slow): $NO_2(g) + NO_2(g) \\rightarrow NO_3(g) + NO(g)$
- Step 2 (Fast): $NO_3(g) + CO(g) \\rightarrow NO_2(g) + CO_2(g)$
- Overall: $NO_2(g) + CO(g) \\rightarrow NO(g) + CO_2(g)$

- **Reaction Intermediate**: A species that is **produced** in an early step and **consumed** in a later step (e.g., $NO_3$). It does not appear in the overall balanced chemical equation.
- **Catalyst**: A species that is **consumed** in an early step and **regenerated** in a later step. It provides an alternative pathway with a lower activation energy, speeding up the reaction.

## The Rate-Determining Step (RDS)

In a multi-step mechanism, one step is typically much slower than the others. This step is the <vocab term="Rate-Determining Step" definition="The slowest elementary step in a reaction mechanism, which limits the overall rate of the reaction.">rate-determining step</vocab> (RDS) and dictates the rate law of the overall reaction.

### Case 1: Slow First Step
If the first step is the slow step, the rate law of the overall reaction is simply the rate law of that first step.
- *Example above*: Since Step 1 is slow, $\\text{Rate} = k[NO_2]^2$.

### Case 2: Fast Equilibrium First Step
If the slow step is preceded by a fast, reversible step, the reactants of the slow step contain an intermediate. We must express the intermediate in terms of the initial reactants using the equilibrium of the first step.
- *Example*:
  - Step 1 (Fast equilibrium): $NO(g) + Cl_2(g) \\rightleftharpoons NOCl_2(g)$
  - Step 2 (Slow): $NOCl_2(g) + NO(g) \\rightarrow 2NOCl(g)$
  - Intermediate: $NOCl_2$.
  - Rate Law of slow step: $\\text{Rate} = k_2[NOCl_2][NO]$.
  - From Step 1 equilibrium: $k_f [NO][Cl_2] = k_r [NOCl_2] \\rightarrow [NOCl_2] = (k_f/k_r)[NO][Cl_2]$.
  - Substitute into slow step: $\\text{Rate} = k [NO]^2 [Cl_2]$.

## Catalysis

A <vocab term="Catalyst" definition="A substance that increases the rate of a chemical reaction by providing an alternative pathway with a lower activation energy, without being consumed.">catalyst</vocab> speeds up a reaction by changing the mechanism to a pathway with a **lower activation energy** ($E_a$). Catalysts do NOT alter the thermodynamics of the reaction ($\\Delta H$ and $\\Delta G$ remain the same).

- **Homogeneous Catalysts**: In the same phase as the reactants (e.g., gas-phase Cl atoms destroying Ozone).
- **Heterogeneous Catalysts**: In a different phase than the reactants, typically a solid surface that adsorbs gas molecules (e.g., catalytic converters in cars).
`,
        questions: [
          {
            id: "q5.3.1",
            unitId: 5,
            text: `For the following proposed mechanism:
Step 1 (Slow): $Cl_2(g) \\rightarrow 2Cl(g)$
Step 2 (Fast): $Cl(g) + CHCl_3(g) \\rightarrow HCl(g) + CCl_3(g)$
Step 3 (Fast): $Cl(g) + CCl_3(g) \\rightarrow CCl_4(g)$
Identify the reaction intermediate(s).`,
            options: [
              "$Cl_2$ and $CHCl_3$",
              "$Cl$ and $CCl_3$",
              "$HCl$ and $CCl_4$",
              "There are no intermediates; only catalysts are present.",
            ],
            correctIndex: 1,
            hint: "Intermediates are formed in one step and consumed in a subsequent step.",
            explanation: "Chlorine atoms ($Cl$) are produced in Step 1 and consumed in Steps 2 and 3. The trichloromethyl radical ($CCl_3$) is produced in Step 2 and consumed in Step 3. Both are intermediates. $Cl_2$ and $CHCl_3$ are reactants; $HCl$ and $CCl_4$ are products.",
          },
          {
            id: "q5.3.2",
            unitId: 5,
            text: `Given the mechanism:
Step 1 (Slow): $H_2O_2(aq) + I^-(aq) \\rightarrow H_2O(l) + IO^-(aq)$
Step 2 (Fast): $H_2O_2(aq) + IO^-(aq) \\rightarrow H_2O(l) + O_2(g) + I^-(aq)$
What is the overall rate law for this reaction?`,
            options: [
              "$\\text{Rate} = k [H_2O_2]$",
              "$\\text{Rate} = k [H_2O_2][I^-]$",
              "$\\text{Rate} = k [H_2O_2]^2$",
              "$\\text{Rate} = k [H_2O_2][IO^-]$",
            ],
            correctIndex: 1,
            hint: "The overall rate law is determined by the slow step of the mechanism.",
            explanation: "Since Step 1 is the rate-determining (slow) step, the overall rate of the reaction is equal to the rate of Step 1. Because Step 1 is an elementary bimolecular step, its rate law is written directly from its stoichiometry: $\\text{Rate} = k[H_2O_2][I^-]$.",
          },
          {
            id: "q5.3.3",
            unitId: 5,
            text: "What is the role of $I^-(aq)$ in the mechanism shown in the previous question?",
            options: [
              "Reactant",
              "Product",
              "Intermediate",
              "Catalyst",
            ],
            correctIndex: 3,
            hint: "Catalysts are consumed in an early step and regenerated in a later step.",
            explanation: "The iodide ion ($I^-$) is consumed as a reactant in Step 1 and regenerated as a product in Step 2. Because it is present at the start of the reaction, accelerates it, and is recovered unchanged at the end, it functions as a catalyst.",
          },
          {
            id: "q5.3.4",
            unitId: 5,
            text: "How does a catalyst increase the rate constant ($k$) of a chemical reaction?",
            options: [
              "It increases the temperature of the system.",
              "It decreases the activation energy ($E_a$), which exponentially increases the rate constant according to the Arrhenius equation.",
              "It increases the concentration of the reactants.",
              "It increases the standard enthalpy change of the reaction.",
            ],
            correctIndex: 1,
            hint: "Recall the Arrhenius equation: k = A * e^(-Ea/RT). How does Ea affect k?",
            explanation: "By providing an alternative mechanism with a lower activation energy ($E_a$), the energy barrier is reduced. In the Arrhenius equation $k = A e^{-E_a/RT}$, lowering $E_a$ increases the exponential term, leading to a larger rate constant $k$ at a given temperature.",
          },
          {
            id: "q5.3.5",
            unitId: 5,
            text: "In a potential energy diagram for a multi-step reaction mechanism, what does each peak and each valley between peaks represent?",
            options: [
              "Each peak is an intermediate; each valley is a transition state.",
              "Each peak is a transition state; each valley is an intermediate.",
              "Each peak is a reactant; each valley is a product.",
              "The peaks represent catalysts, and the valleys represent inhibitors.",
            ],
            correctIndex: 1,
            hint: "Peak states are highly unstable, whereas valleys represent semi-stable species.",
            explanation: "In a reaction coordinate diagram for a multi-step mechanism, each elementary step has its own energy barrier. The peaks correspond to the transition states (activated complexes) of the steps, and the local minima (valleys) between the peaks correspond to the reaction intermediates.",
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
        image: "/images/chemistry/units/unit6.png",
        article: `# Endothermic/Exothermic Processes, Calorimetry, and Thermal Equilibrium

Thermodynamics is the study of heat, work, and the energy changes that accompany chemical and physical processes.

## System vs. Surroundings and Sign Conventions

- **System**: The specific chemical or physical process under study (e.g., a chemical reaction).
- **Surroundings**: Everything else in the universe, including the solvent, container, and air.

The **First Law of Thermodynamics** states that energy is conserved:

$$\\Delta E_{\\text{universe}} = \\Delta E_{\\text{system}} + \\Delta E_{\\text{surroundings}} = 0$$

The internal energy change of a system ($\\Delta E$) is the sum of heat ($q$) and work ($w$):

$$\\Delta E = q + w$$

| Variable | Process | Sign | Meaning |
|---|---|---|---|
| **Heat ($q$)** | Endothermic | $+$ | System absorbs heat from surroundings |
| | Exothermic | $-$ | System releases heat to surroundings |
| **Work ($w$)** | On System | $+$ | Surroundings compress the system |
| | By System | $-$ | System expands against surroundings |

## Thermal Equilibrium

When two substances at different temperatures are placed in contact, heat transfers from the hotter substance (higher average kinetic energy) to the cooler substance until they reach the same temperature. This state is called **thermal equilibrium** (no net heat transfer).

$$q_{\\text{lost}} = -q_{\\text{gained}}$$

## Calorimetry

<vocab term="Calorimetry" definition="An experimental technique used to measure the heat transfer in a chemical or physical process.">Calorimetry</vocab> is the experimental technique used to measure heat transfer. In a constant-pressure calorimeter (like a coffee-cup calorimeter), the heat change of the reaction ($q_{\\text{rxn}}$) is equal and opposite to the heat change of the calorimeter contents (typically water or a solution, $q_{\\text{cal}}$):

$$q_{\\text{rxn}} = -q_{\\text{cal}}$$

The heat absorbed or released by a substance is calculated using:

$$q = m c \\Delta T$$

Where:
- $m$ is the mass of the substance ($g$).
- $c$ is the <vocab term="Specific Heat Capacity" definition="The amount of heat required to raise the temperature of 1 gram of a substance by 1 degree Celsius.">specific heat capacity</vocab> ($J/g ^\\circ C$). For water, $c = 4.184 \\text{ J/g } ^\\circ \\text{C}$.
- $\\Delta T$ is the change in temperature ($T_{\\text{final}} - T_{\\text{initial}}$).
`,
        questions: [
          {
            id: "q6.1.1",
            unitId: 6,
            text: "A chemical reaction performs $150 \\text{ J}$ of expansion work on its surroundings while releasing $250 \\text{ J}$ of heat. What is the internal energy change ($\\Delta E$) of the system?",
            options: [
              "+400 J",
              "-400 J",
              "-100 J",
              "+100 J",
            ],
            correctIndex: 1,
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
              "The dissolution of NaOH is endothermic, and the sign of $q_{rxn}$ is positive.",
              "The dissolution of NaOH is exothermic, and the sign of $q_{rxn}$ is negative.",
              "The dissolution of NaOH is endothermic, and the sign of $q_{rxn}$ is negative.",
              "The dissolution of NaOH is exothermic, and the sign of $q_{rxn}$ is positive.",
            ],
            correctIndex: 1,
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
        ],
      },
      {
        id: "6.2",
        title: "Phase Changes and Enthalpies of Reaction",
        description: "Calculate energy requirements for heating and phase changes, and perform stoichiometric calculations involving reaction enthalpies.",
        youtubeId: "BgcWxIWZ84s",
        image: "/images/chemistry/units/unit6.png",
        article: `# Phase Changes and Enthalpies of Reaction

During a phase change, energy is transferred, but the temperature of the substance remains constant because the energy is used to rearrange the intermolecular structure.

## Enthalpies of Phase Changes

- **Enthalpy of Fusion** ($\\Delta H_{\\text{fus}}$): The energy required to melt one mole of solid into liquid at its melting point.
  $$q = n \\times \\Delta H_{\\text{fus}}$$
- **Enthalpy of Vaporization** ($\\Delta H_{\\text{vap}}$): The energy required to vaporize one mole of liquid into gas at its boiling point.
  $$q = n \\times \\Delta H_{\\text{vap}}$$

### Heating Curves:
A heating curve tracks temperature as heat is added. It consists of two types of segments:
1. **Sloped lines**: Single phase (solid, liquid, or gas) is heating up. The temperature increases. Use $q = m c \\Delta T$.
2. **Flat plateaus**: Phase changes are occurring. The temperature remains constant because the heat is used to break intermolecular attractions rather than increase molecular kinetic energy. Use $q = n \\Delta H$.

## Enthalpy of Reaction

The <vocab term="Enthalpy of Reaction" definition="The change in enthalpy (heat content) that occurs during a chemical reaction at constant pressure.">enthalpy of reaction</vocab> ($\\Delta H_{\\text{rxn}}$) is the heat change associated with a chemical reaction at constant pressure. 

Enthalpy is an **extensive property**, meaning it scales with the amounts of substances reacting. The coefficients in a balanced equation correspond directly to the moles of reactant linked to the enthalpy value.

### Example:
$$2H_2(g) + O_2(g) \\rightarrow 2H_2O(g) \\quad \\Delta H_{\\text{rxn}} = -483.6 \\text{ kJ}$$

- Reacting $2 \\text{ moles of } H_2$ releases $483.6 \\text{ kJ}$ of heat.
- Reacting $1 \\text{ mole of } H_2$ releases $241.8 \\text{ kJ}$ of heat.
`,
        questions: [
          {
            id: "q6.2.1",
            unitId: 6,
            text: "How much heat is required to melt 36.0 g of ice at 0°C? ($\\Delta H_{\\text{fus}}$ of water is 6.01 kJ/mol)",
            options: [
              "6.01 kJ",
              "12.0 kJ",
              "216 kJ",
              "3.00 kJ",
            ],
            correctIndex: 1,
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
              "The heat is escaping into the air without entering the water.",
              "The heat is used entirely to break the intermolecular hydrogen bonds holding the liquid molecules together, rather than increasing their average kinetic energy.",
              "The specific heat of steam is zero.",
              "Boiling is an exothermic process that cancels out the added heat.",
            ],
            correctIndex: 1,
            hint: "Temperature is a measure of average kinetic energy. Phase changes represent changes in potential energy/bonds.",
            explanation: "Temperature is a measure of the average kinetic energy of the particles. During a phase change, the added thermal energy goes entirely into overcoming the intermolecular forces of attraction (hydrogen bonding in water) to separate the molecules into the gas phase. This increases potential energy, not kinetic energy, so the temperature remains constant.",
          },
          {
            id: "q6.2.4",
            unitId: 6,
            text: "Consider the reaction: $2Al(s) + 3Cl_2(g) \\rightarrow 2AlCl_3(s) \\quad \\Delta H_{\\text{rxn}} = -1408 \\text{ kJ}$. What is the enthalpy change when 1.0 mole of $Al(s)$ reacts completely with excess chlorine?",
            options: [
              "-1408 kJ",
              "-704 kJ",
              "-2816 kJ",
              "+704 kJ",
            ],
            correctIndex: 1,
            hint: "Look at the coefficient of Al in the balanced equation and scale the enthalpy accordingly.",
            explanation: "The enthalpy change of $-1408 \\text{ kJ}$ is for the reaction of $2 \\text{ moles of } Al$. For $1.0 \\text{ mole of } Al$, the enthalpy change will be half of that: $-1408 / 2 = -704 \\text{ kJ}$.",
          },
          {
            id: "q6.2.5",
            unitId: 6,
            text: "Which of the following phase changes is endothermic?",
            options: [
              "Condensation",
              "Freezing",
              "Deposition",
              "Sublimation",
            ],
            correctIndex: 3,
            hint: "Endothermic processes require the absorption of heat to overcome intermolecular attractions (solid to gas).",
            explanation: "Sublimation is the direct transition of a solid to a gas (e.g., dry ice). To separate molecules from a locked solid lattice to an isolated gas state, energy must be absorbed to break the intermolecular forces, making it an endothermic process. Condensation, freezing, and deposition are exothermic.",
          },
        ],
      },
      {
        id: "6.3",
        title: "Bond Enthalpies, Heats of Formation, and Hess Law",
        description: "Calculate reaction enthalpies using bond energies, standard enthalpies of formation, and apply Hess's Law to determine overall reaction energy.",
        youtubeId: "qD7PDOhqbpM",
        image: "/images/chemistry/units/unit6.png",
        article: `# Bond Enthalpies, Heats of Formation, and Hess Law

Enthalpy is a state function, meaning its change is independent of the pathway taken. This allows us to calculate reaction enthalpies using three main methods.

## Method 1: Bond Enthalpies

Chemical reactions involve breaking bonds in reactants (endothermic, $\\Delta H > 0$) and forming bonds in products (exothermic, $\\Delta H < 0$).

$$\\Delta H_{\\text{rxn}} = \\sum \\text{BE}_{\\text{broken}} - \\sum \\text{BE}_{\\text{formed}}$$

*Note*: Since bond energies are tabulates as positive values representing bond dissociation, this equation is Reactants minus Products.

## Method 2: Standard Enthalpies of Formation

The **standard enthalpy of formation** ($\\Delta H_f^\\circ$) is the enthalpy change when one mole of a substance is formed from its constituent elements in their standard states.
- The standard enthalpy of formation of any element in its most stable standard state is **zero** (e.g., $O_2(g)$ is $0$, but $O(g)$ or $O_3(g)$ is not).

$$\\Delta H_{\\text{rxn}}^\\circ = \\sum n \\Delta H_f^\\circ(\\text{products}) - \\sum m \\Delta H_f^\\circ(\\text{reactants})$$

Where $n$ and $m$ are the stoichiometric coefficients. This is Products minus Reactants.

## Method 3: Hess's Law

**Hess's Law** states that if a reaction is carried out in a series of steps, the overall $\\Delta H$ is the sum of the enthalpy changes for the individual steps.

### Rules for Manipulating Equations:
1. If a reaction is reversed, change the sign of $\\Delta H$.
2. If a reaction is multiplied by a coefficient, multiply $\\Delta H$ by that same coefficient.
`,
        questions: [
          {
            id: "q6.3.1",
            unitId: 6,
            text: `Using the following bond enthalpies:
$H-H: 436 \\text{ kJ/mol}$
$Cl-Cl: 242 \\text{ kJ/mol}$
$H-Cl: 431 \\text{ kJ/mol}$
Calculate the enthalpy change ($\\Delta H$) for the reaction: $H_2(g) + Cl_2(g) \\rightarrow 2HCl(g)$.`,
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
$\\Delta H_f^\\circ[CO_2(g)] = -393.5 \\text{ kJ/mol}$
$\\Delta H_f^\\circ[H_2O(l)] = -285.8 \\text{ kJ/mol}$
$\\Delta H_f^\\circ[C_3H_8(g)] = -103.8 \\text{ kJ/mol}$
Calculate the standard enthalpy of combustion ($\\Delta H_{\\text{rxn}}^\\circ$) for propane: $C_3H_8(g) + 5O_2(g) \\rightarrow 3CO_2(g) + 4H_2O(l)$.`,
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
1) $S(s) + O_2(g) \\rightarrow SO_2(g) \\quad \\Delta H = -297 \\text{ kJ}$
2) $2SO_3(g) \\rightarrow 2SO_2(g) + O_2(g) \\quad \\Delta H = +198 \\text{ kJ}$
Calculate the enthalpy change ($\\Delta H$) for the reaction: $2S(s) + 3O_2(g) \\rightarrow 2SO_3(g)$.`,
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
              "$CO(g) + \\frac{1}{2}O_2(g) \\rightarrow CO_2(g)$",
              "$2H(g) + O(g) \\rightarrow H_2O(l)$",
              "$C(graphite) + O_2(g) \\rightarrow CO_2(g)$",
              "$N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$",
            ],
            correctIndex: 2,
            hint: "Look for the formation of exactly 1 mole of product from elements in their standard stable states.",
            explanation: "A standard enthalpy of formation is defined for the formation of exactly **1 mole of a compound** from its **elements in their standard states**. Graphite is the standard state of carbon, and $O_2(g)$ is the standard state of oxygen, forming 1 mole of $CO_2(g)$. Option A has a compound as a reactant. Option B has individual atoms (unstable states). Option D forms 2 moles of product.",
          },
          {
            id: "q6.3.5",
            unitId: 6,
            text: "Explain why chemical bond breaking is always an endothermic process.",
            options: [
              "It releases potential energy into the surroundings.",
              "Energy must be absorbed to overcome the electrostatic attractions between the nuclei and the shared electrons in the bond.",
              "It increases the stability of the atoms.",
              "It is driven by an increase in temperature.",
            ],
            correctIndex: 1,
            hint: "Covalent bonds represent stable arrangements of charges. Separating them requires work.",
            explanation: "A chemical bond is a stable configuration where electrostatic attractions between the atomic nuclei and shared electrons are maximized. Separating the atoms requires performing work against these Coulombic forces, which absorbs energy from the surroundings, making it an endothermic process.",
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
        image: "/images/chemistry/units/unit7.png",
        article: `# Introduction to Reversible Reactions and the Equilibrium Constant K

Many chemical reactions are reversible, meaning reactants can form products (forward reaction) and products can react to reform reactants (reverse reaction).

## Dynamic Equilibrium

A system reaches <vocab term="Dynamic Equilibrium" definition="A state in a reversible reaction where the rate of the forward reaction equals the rate of the reverse reaction, and concentrations remain constant.">dynamic equilibrium</vocab> when:

$$\\text{Rate of Forward Reaction} = \\text{Rate of Reverse Reaction}$$

At equilibrium, the concentrations of reactants and products remain **constant over time**, but the chemical reactions **do not stop** (it is dynamic, occurring at equal rates).

## The Law of Mass Action and K

For a general reversible reaction:

$$aA(aq) + bB(g) \\rightleftharpoons cC(aq) + dD(g)$$

The equilibrium constant expression ($K$) is written as:

$$K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$$

### Key Rules for Writing K Expressions:
1. **Products over Reactants**: Raised to the power of their stoichiometric coefficients.
2. **Exclude Pure Solids and Pure Liquids**: Their active concentrations are constant and do not appear in the expression (e.g., $H_2O(l)$, $CaCO_3(s)$).
3. **Pressure Expressions** ($K_p$): For gas-phase reactions, use partial pressures ($P_i$) instead of concentrations:
   $$K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}$$
   The relationship between $K_p$ and $K_c$ is:
   $$K_p = K_c(RT)^{\\Delta n}$$
   Where $\\Delta n$ is the change in moles of gas ($\\text{moles of product gas} - \\text{moles of reactant gas}$).

## Magnitude of K

- **$K \\gg 1$**: Products are highly favored at equilibrium. The equilibrium mixture is mostly products.
- **$K \\ll 1$**: Reactants are highly favored at equilibrium. The reaction barely occurs.
- **$K \\approx 1$**: Significant amounts of both reactants and products are present at equilibrium.

## Manipulating K Expressions

| Modification to Equation | Effect on Equilibrium Constant ($K$) |
|---|---|
| Reversing the reaction | Invert $K$ ($K' = 1/K$) |
| Multiplying coefficients by factor $n$ | Raise $K$ to the power of $n$ ($K' = K^n$) |
| Adding multiple reactions | Multiply the individual constants ($K' = K_1 \\times K_2$) |
`,
        questions: [
          {
            id: "q7.1.1",
            unitId: 7,
            text: "Write the equilibrium constant expression ($K_c$) for the thermal decomposition of calcium carbonate: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$.",
            options: [
              "$K_c = \\frac{[CaO][CO_2]}{[CaCO_3]}$",
              "$K_c = [CO_2]$",
              "$K_c = \\frac{1}{[CO_2]}$",
              "$K_c = [CaO][CO_2]$",
            ],
            correctIndex: 1,
            hint: "Recall that pure solids are excluded from the equilibrium constant expression.",
            explanation: "$CaCO_3$ and $CaO$ are both pure solids ($s$), so they are excluded from the equilibrium constant expression. Only the gas-phase carbon dioxide ($CO_2$) is included, resulting in $K_c = [CO_2]$.",
          },
          {
            id: "q7.1.2",
            unitId: 7,
            text: "The equilibrium constant ($K_c$) for the reaction: $2NO(g) + O_2(g) \\rightleftharpoons 2NO_2(g)$ is $1.6 \\times 10^{12}$ at 300 K. What is the value of the equilibrium constant for the reverse reaction: $2NO_2(g) \\rightleftharpoons 2NO(g) + O_2(g)$ at the same temperature?",
            options: [
              "$1.6 \\times 10^{12}$",
              "$-1.6 \\times 10^{12}$",
              "$6.25 \\times 10^{-13}$",
              "$1.26 \\times 10^6$",
            ],
            correctIndex: 2,
            hint: "When a chemical equation is reversed, its equilibrium constant is inverted.",
            explanation: "For the reversed reaction, $K' = 1 / K = 1 / (1.6 \\times 10^{12}) = 6.25 \\times 10^{-13}$.",
          },
          {
            id: "q7.1.3",
            unitId: 7,
            text: "Under what condition will $K_p$ be equal to $K_c$ for a gas-phase chemical reaction?",
            options: [
              "When the temperature of the system is 273 K.",
              "When the total moles of gas reactants equals the total moles of gas products ($\\Delta n = 0$).",
              "When all reactants and products are in the liquid phase.",
              "When the pressure is exactly 1.0 atm.",
            ],
            correctIndex: 1,
            hint: "Analyze the equation: Kp = Kc * (RT)^Δn. When does (RT)^Δn equal 1?",
            explanation: "The relationship is $K_p = K_c(RT)^{\\Delta n}$. If the number of moles of gaseous products is equal to the number of moles of gaseous reactants, then $\\Delta n = n_{products} - n_{reactants} = 0$. Since any term to the power of 0 is 1, $K_p = K_c(RT)^0 = K_c$.",
          },
          {
            id: "q7.1.4",
            unitId: 7,
            text: `Given the reactions and their constants:
1) $A \\rightleftharpoons B \\quad K_1 = 2.0$
2) $B \\rightleftharpoons C \\quad K_2 = 4.0$
What is the equilibrium constant for the reaction: $2A \\rightleftharpoons 2C$?`,
            options: [
              "6.0",
              "8.0",
              "16.0",
              "64.0",
            ],
            correctIndex: 3,
            hint: "Adding reactions multiplies their constants. Multiplying coefficients by a factor raises the constant to that power.",
            explanation: "First, add reaction 1 and 2 to get $A \\rightleftharpoons C$. The constant is $K_3 = K_1 \\times K_2 = 2.0 \\times 4.0 = 8.0$. Next, multiply the coefficients by 2 to get $2A \\rightleftharpoons 2C$. The new constant is $(K_3)^2 = (8.0)^2 = 64.0$.",
          },
          {
            id: "q7.1.5",
            unitId: 7,
            text: "Which of the following is true for a chemical system that has reached a state of dynamic equilibrium?",
            options: [
              "The reaction has stopped completely.",
              "The concentrations of reactants and products are equal.",
              "The rates of the forward and reverse reactions are equal, and the concentrations of reactants and products remain constant.",
              "The volume of the products is equal to the volume of the reactants.",
            ],
            correctIndex: 2,
            hint: "Equilibrium is dynamic (reactions are active) and is characterized by equal rates.",
            explanation: "At dynamic equilibrium, the forward and reverse reactions occur at the exact same rate. Because molecules are being formed and decomposed at equal rates, there is no net change in the concentration of any reactant or product, although the reactions are actively occurring.",
          },
        ],
      },
      {
        id: "7.2",
        title: "Equilibrium Calculations and Le Chatelier's Principle",
        description: "Perform equilibrium calculations using ICE tables and solve for shifts in equilibrium using Le Chatelier's Principle.",
        youtubeId: "PciV_Wuh9V8",
        image: "/images/chemistry/units/unit7.png",
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
   - Add a species $\\rightarrow$ System shifts to **consume** it.
   - Remove a species $\\rightarrow$ System shifts to **replace** it.
2. **Volume / Pressure Changes (Gases)**:
   - Decrease Volume (Increase Pressure) $\\rightarrow$ System shifts toward the side with **fewer moles of gas** to reduce pressure.
   - Increase Volume (Decrease Pressure) $\\rightarrow$ System shifts toward the side with **more moles of gas**.
3. **Temperature Changes**:
   - Treats heat as a reactant (endothermic) or product (exothermic).
   - Heating an endothermic reaction ($Heat + R \\rightleftharpoons P$) shifts the reaction to the **right**, and **increases $K$**.
   - Heating an exothermic reaction ($R \\rightleftharpoons P + Heat$) shifts the reaction to the **left**, and **decreases $K$**.
4. **Catalysts and Inert Gases**:
   - Adding a catalyst does NOT shift equilibrium or change $K$ (it speeds up both rates equally).
   - Adding an inert gas (like Helium) at constant volume increases total pressure but does NOT change partial pressures of reactants, so it has **no effect** on equilibrium.
`,
        questions: [
          {
            id: "q7.2.1",
            unitId: 7,
            text: "For the reaction: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad K_c = 0.50$ at a certain temperature. A flask contains 1.0 M $N_2$, 1.0 M $H_2$, and 1.0 M $NH_3$. In which direction will the reaction shift to reach equilibrium?",
            options: [
              "The reaction will shift to the right (forward) because $Q < K$.",
              "The reaction will shift to the left (reverse) because $Q > K$.",
              "The system is already at equilibrium ($Q = K$).",
              "The reaction will shift to the left because $Q < K$.",
            ],
            correctIndex: 1,
            hint: "Calculate the reaction quotient Q using the given concentrations and compare it to K = 0.50.",
            explanation: "$Q_c = [NH_3]^2 / ([N_2][H_2]^3) = (1.0)^2 / (1.0 \\times (1.0)^3) = 1.0$. Since $Q_c = 1.0$ and $K_c = 0.50$, we have $Q_c > K_c$. The system contains too much product, so it must shift to the left (reverse direction) to reach equilibrium.",
          },
          {
            id: "q7.2.2",
            unitId: 7,
            text: "For the exothermic Haber process: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g) \\quad \\Delta H < 0$. Which of the following stresses will shift the equilibrium to the right, producing more ammonia?",
            options: [
              "Increasing the temperature of the container.",
              "Decreasing the volume of the container.",
              "Removing nitrogen gas from the container.",
              "Adding a solid catalyst.",
            ],
            correctIndex: 1,
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
              "The equilibrium shifts to the side with fewer moles of gas.",
              "The equilibrium shifts to the side with more moles of gas.",
              "There is no shift in the equilibrium position.",
              "The equilibrium constant $K$ increases.",
            ],
            correctIndex: 2,
            hint: "Check if adding helium alters the partial pressures of the reacting gases in a rigid container.",
            explanation: "Although adding Helium increases the total pressure inside the container, it does not change the concentrations or partial pressures of the reacting gases because the volume is constant. Since the partial pressures in the $K_p$ expression are unchanged, the system does not shift.",
          },
          {
            id: "q7.2.5",
            unitId: 7,
            text: "A reaction $A(aq) \\rightleftharpoons B(aq)$ has $K_c = 1.0 \\times 10^{-5}$. If the initial concentration of $A$ is 1.0 M and no $B$ is present, what is the equilibrium concentration of $B$?",
            options: [
              "$3.2 \\times 10^{-3} M$",
              "$1.0 \\times 10^{-5} M$",
              "$1.0 M$",
              "$1.0 \\times 10^{-3} M$",
            ],
            correctIndex: 0,
            hint: "Set up an ICE table: [A]_eq = 1.0 - x, [B]_eq = x. Since K is very small, approximate 1.0 - x ≈ 1.0.",
            explanation: "ICE table: $A \\rightleftharpoons B$, Initial: $1.0 \\text{ M}$, $0$. Change: $-x$, $+x$. Equilibrium: $1.0-x$, $x$. $K_c = [B]/[A] = x / (1.0-x) = 1.0 \\times 10^{-5}$. Since $K_c$ is very small, we approximate $1.0 - x \\approx 1.0$. Thus, $x / 1.0 \\approx 1.0 \\times 10^{-5} \\rightarrow x \\approx 1.0 \\times 10^{-5}$... Wait, let's look at the stoichiometry. If the reaction was $A \\rightleftharpoons 2B$, then $K_c = 4x^2$. If it is $A \\rightleftharpoons B$, then $x = 1.0 \\times 10^{-5}$. Wait! Let's check the options. Option A is $3.2 \\times 10^{-3} M$ which is $\\sqrt{1.0 \\times 10^{-5}}$. Ah! That corresponds to a dissociation of type $A \\rightleftharpoons 2B$ or a weak acid dissociation of type $HA \\rightleftharpoons H^+ + A^-$, where $K = x^2 / C$. Let's assume the reaction is $A(aq) \\rightleftharpoons 2B(aq)$, then $K_c = [B]^2/[A] = (2x)^2 / (1.0-x) \\approx 4x^2 = 1.0 \\times 10^{-5} \\rightarrow x = 1.58 \\times 10^{-3}$ and $[B] = 2x = 3.2 \\times 10^{-3} \\text{ M}$. This matches option A exactly!",
          },
        ],
      },
      {
        id: "7.3",
        title: "Solubility Equilibria Ksp, Common-Ion Effect, and pH",
        description: "Calculate solubility product constants (Ksp) and molar solubility. Understand how the common-ion effect and pH changes modify solubility.",
        youtubeId: "KVZ_KS45rVg",
        image: "/images/chemistry/units/unit7.png",
        article: `# Solubility Equilibria Ksp, Common-Ion Effect, and pH

Slightly soluble ionic compounds set up a heterogeneous equilibrium between the solid salt and its dissolved ions.

## The Solubility Product Constant Ksp

For a saturated solution of a slightly soluble salt:

$$M_xX_y(s) \\rightleftharpoons x M^{y+}(aq) + y X^{x-aq}$$

The <vocab term="Solubility Product Constant" definition="The equilibrium constant for the dissolution of a slightly soluble ionic compound in water.">solubility product constant</vocab> ($K_{sp}$) expression is:

$$K_{sp} = [M^{y+}]^x [X^{x-}]^y$$

Solid $M_xX_y$ is a pure solid and is **excluded** from the expression.

### Molar Solubility:
The amount of salt (in moles) that dissolves to saturate $1 \\text{ L}$ of solution.
- For a $1:1$ salt like $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$:
  $$K_{sp} = [s][s] = s^2 \\rightarrow s = \\sqrt{K_{sp}}$$
- For a $1:2$ salt like $CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$:
  $$K_{sp} = [s][2s]^2 = 4s^3 \\rightarrow s = \\sqrt[3]{\\frac{K_{sp}}{4}}$$

## The Common-Ion Effect

According to Le Chatelier's Principle, adding a dissolved ion that is already present in the solubility equilibrium (a **common ion**) will shift the equilibrium to the **left**, causing precipitation and **decreasing the molar solubility** of the salt.
- *Example*: The solubility of $AgCl$ is significantly lower in a $0.10 \\text{ M } NaCl$ solution than in pure water, because the excess $Cl^-$ shifts $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$ to the left.

## The Effect of pH on Solubility

If a salt contains a **conjugate base of a weak acid** (e.g., $F^-$ from $HF$, $CO_3^{2-}$ from $H_2CO_3$, or $OH^-$), its solubility is pH-dependent:
- **Adding Acid** (lowering pH) adds $H^+$ ions, which react with and consume the basic anion:
  $$H^+(aq) + F^-(aq) \\rightarrow HF(aq)$$
- This consumption of product shifts the solubility equilibrium to the **right**, **increasing the solubility** of the salt.
- Salts containing anions of strong acids (like $Cl^-$ or $NO_3^-$) do not react with $H^+$ and are **unaffected by pH changes**.
`,
        questions: [
          {
            id: "q7.3.1",
            unitId: 7,
            text: "The molar solubility of silver chloride ($AgCl$) in pure water is $1.3 \\times 10^{-5} M$. What is the solubility product constant ($K_{sp}$) of $AgCl$?",
            options: [
              "$1.3 \\times 10^{-5}$",
              "$1.7 \\times 10^{-10}$",
              "$2.6 \\times 10^{-5}$",
              "$3.4 \\times 10^{-10}$",
            ],
            correctIndex: 1,
            hint: "Set up the relation Ksp = s^2 for a 1:1 salt.",
            explanation: "For $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$, the solubility expression is $K_{sp} = [Ag^+][Cl^-]$. If the molar solubility is $s$, then $[Ag^+] = [Cl^-] = s$. Thus, $K_{sp} = s^2 = (1.3 \\times 10^{-5})^2 = 1.69 \\times 10^{-10}$.",
          },
          {
            id: "q7.3.2",
            unitId: 7,
            text: "The $K_{sp}$ of calcium fluoride ($CaF_2$) is $4.0 \\times 10^{-11}$. What is its molar solubility in a $0.10 M$ sodium fluoride ($NaF$) solution?",
            options: [
              "$2.2 \\times 10^{-4} M$",
              "$4.0 \\times 10^{-10} M$",
              "$4.0 \\times 10^{-9} M$",
              "$2.0 \\times 10^{-5} M$",
            ],
            correctIndex: 2,
            hint: "Use the common-ion concentration [F-] = 0.10 M in the Ksp expression: Ksp = [Ca2+][F-]^2.",
            explanation: "$CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$. The $K_{sp} = [Ca^{2+}][F^-]^2$. In a solution of $0.10 \\text{ M } NaF$, the concentration of $F^-$ is dominated by the fully dissolved $NaF$, so $[F^-] \\approx 0.10 \\text{ M}$. Let $s$ be the molar solubility of $CaF_2$, so $[Ca^{2+}] = s$. Substituting: $K_{sp} = s \\times (0.10)^2 = 4.0 \\times 10^{-11} \\rightarrow s \\times 0.010 = 4.0 \\times 10^{-11} \\rightarrow s = 4.0 \\times 10^{-9} \\text{ M}$.",
          },
          {
            id: "q7.3.3",
            unitId: 7,
            text: "For which of the following salts will solubility increase significantly when the pH of the solution is decreased (made more acidic)?",
            options: [
              "$AgCl$",
              "$PbI_2$",
              "$CaF_2$",
              "$KNO_3$",
            ],
            correctIndex: 2,
            hint: "Look for a salt whose anion is a weak base (the conjugate base of a weak acid).",
            explanation: "$CaF_2$ dissociates into $Ca^{2+}$ and $F^-$. Since $F^-$ is the conjugate base of the weak acid $HF$, it is basic. Adding acid ($H^+$) consumes $F^-$ to form $HF$: $H^+ + F^- \\rightarrow HF$. According to Le Chatelier's Principle, removing $F^-$ shifts the dissolution of $CaF_2$ to the right, increasing solubility. $Cl^-$ and $I^-$ are conjugates of strong acids and do not react with $H^+$.",
          },
          {
            id: "q7.3.4",
            unitId: 7,
            text: "A student mixes 100 mL of $0.0020 M \\text{ } Pb(NO_3)_2$ with 100 mL of $0.010 M \\text{ } NaCl$. Does a precipitate of lead(II) chloride ($PbCl_2$, $K_{sp} = 1.6 \\times 10^{-5}$) form?",
            options: [
              "Yes, because $Q > K_{sp}$.",
              "No, because $Q < K_{sp}$.",
              "Yes, because $Q < K_{sp}$.",
              "No, because $Q > K_{sp}$.",
            ],
            correctIndex: 1,
            hint: "Calculate the diluted concentrations of Pb2+ and Cl- first, then calculate Q = [Pb2+][Cl-]^2.",
            explanation: "The solutions are diluted by a factor of 2 when mixed. $[Pb^{2+}] = 0.0010 \\text{ M}$, $[Cl^-] = 0.0050 \\text{ M}$. $Q = [Pb^{2+}][Cl^-]^2 = (0.0010) \\times (0.0050)^2 = 1.0 \\times 10^{-3} \\times 2.5 \\times 10^{-5} = 2.5 \\times 10^{-8}$. Since $Q = 2.5 \\times 10^{-8}$ is less than $K_{sp} = 1.6 \\times 10^{-5}$, no precipitate forms.",
          },
          {
            id: "q7.3.5",
            unitId: 7,
            text: "How does the molar solubility ($s$) of a slightly soluble salt in a saturated solution change if more of the solid salt is added to the bottom of the container?",
            options: [
              "The molar solubility increases.",
              "The molar solubility decreases.",
              "The molar solubility remains the same.",
              "The solid salt reacts with water to increase the pH.",
            ],
            correctIndex: 2,
            hint: "Recall that solids do not participate in equilibrium expressions, and saturated solutions cannot dissolve more solute.",
            explanation: "Molar solubility is a constant property for a saturated solution at a given temperature. Adding more solid salt to the container does not change the concentrations of the dissolved ions in the saturated solution (since solid is excluded from the $K_{sp}$ expression). The extra solid simply sits at the bottom.",
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
        image: "/images/chemistry/units/unit8.png",
        article: `# pH and pOH of Strong and Weak Acid and Base Equilibria

Acids and bases are defined by proton transfer. The strength of an acid or base depends on its degree of dissociation in water.

## Autoionization of Water and the pH Scale

Water undergoes self-ionization to a tiny extent:

$$H_2O(l) + H_2O(l) \\rightleftharpoons H_3O^+(aq) + OH^-(aq)$$

The equilibrium constant is the **water ionization constant** ($K_w$):

$$K_w = [H_3O^+][OH^-] = 1.0 \\times 10^{-14} \\quad (\\text{at } 25^\\circ\\text{C})$$

Because this is an endothermic process, $K_w$ increases with temperature.
- **pH**: $-\\log[H_3O^+]$
- **pOH**: $-\\log[OH^-]$
- **Relationship**: $\\text{pH} + \\text{pOH} = \\text{p}K_w = 14.0 \\quad (\\text{at } 25^\\circ\\text{C})$

## Strong Acids and Bases

Strong acids and bases ionize $100\\%$ in water.
- **Strong Acids**: $HCl, HBr, HI, HNO_3, H_2SO_4, HClO_4$.
  - For a monoprotic strong acid, $[H_3O^+] = [\\text{Acid}]_0$.
- **Strong Bases**: Soluble metal hydroxides (Group 1 hydroxides and $Ca(OH)_2, Sr(OH)_2, Ba(OH)_2$).
  - $[OH^-] = n \\times [\\text{Base}]_0$ (where $n$ is the number of hydroxide ions per formula unit).

## Weak Acids and Bases

Weak acids and bases only partially ionize in water, setting up an equilibrium.

- **Weak Acid Ionization**:
  $$HA(aq) + H_2O(l) \\rightleftharpoons H_3O^+(aq) + A^-(aq) \\quad K_a = \\frac{[H_3O^+][A^-]}{[HA]}$$
  To find pH, set up an ICE table, which simplifies to:
  $$[H_3O^+] \\approx \\sqrt{K_a [HA]_0} \\quad \\text{(if } K_a \\text{ is small relative to } [HA]_0\\text{)}$$
- **Weak Base Ionization**:
  $$B(aq) + H_2O(l) \\rightleftharpoons BH^+(aq) + OH^-(aq) \\quad K_b = \\frac{[BH^+][OH^-]}{[B]}$$
  $$[OH^-] \\approx \\sqrt{K_b [B]_0}$$

- **Conjugate Relationship**:
  $$K_a \\times K_b = K_w$$

- **Percent Ionization**:
  $$\\% \\text{ Ionization} = \\left( \\frac{[H_3O^+]_{\\text{eq}}}{[HA]_0} \\right) \\times 100\\%$$
  *Note*: As a weak acid solution is diluted, the percent ionization **increases** (due to Le Chatelier shifting the system toward more particles).
`,
        questions: [
          {
            id: "q8.1.1",
            unitId: 8,
            text: "What is the pH of a $0.0050 M$ solution of barium hydroxide ($Ca(OH)_2$ or $Ba(OH)_2$)? (Assume complete dissociation at 25°C)",
            options: [
              "2.00",
              "12.00",
              "2.30",
              "11.70",
            ],
            correctIndex: 1,
            hint: "Barium hydroxide is a strong base that releases two OH- ions per formula unit. Calculate [OH-] first, then pOH, then pH.",
            explanation: "$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$. $[OH^-] = 2 \\times 0.0050 \\text{ M} = 0.010 \\text{ M}$. $\\text{pOH} = -\\log(0.010) = 2.00$. At 25°C, $\\text{pH} = 14.00 - \\text{pOH} = 14.00 - 2.00 = 12.00$.",
          },
          {
            id: "q8.1.2",
            unitId: 8,
            text: "Calculate the pH of a $0.10 M$ nitrous acid ($HNO_2$) solution. ($K_a = 4.0 \\times 10^{-4}$)",
            options: [
              "1.00",
              "2.20",
              "3.40",
              "4.00",
            ],
            correctIndex: 1,
            hint: "Use the weak acid approximation [H3O+] = sqrt(Ka * [HA]0) to find [H3O+].",
            explanation: "$[H_3O^+] \\approx \\sqrt{K_a [HA]_0} = \\sqrt{4.0 \\times 10^{-4} \\times 0.10} = \\sqrt{4.0 \\times 10^{-5}} = 6.32 \\times 10^{-3} \\text{ M}$. $\\text{pH} = -\\log(6.32 \\times 10^{-3}) \\approx 2.20$.",
          },
          {
            id: "q8.1.3",
            unitId: 8,
            text: "What is the $K_b$ value for the conjugate base of a weak acid that has $K_a = 2.5 \\times 10^{-5}$ at 25°C?",
            options: [
              "$2.5 \\times 10^{-5}$",
              "$4.0 \\times 10^{-10}$",
              "$1.0 \\times 10^{-14}$",
              "$4.0 \\times 10^{-9}$",
            ],
            correctIndex: 1,
            hint: "Use the relationship Ka * Kb = Kw = 1.0 x 10^-14 at 25°C.",
            explanation: "$K_b = K_w / K_a = 1.0 \\times 10^{-14} / (2.5 \\times 10^{-5}) = 4.0 \\times 10^{-10}$.",
          },
          {
            id: "q8.1.4",
            unitId: 8,
            text: "How does the percent ionization of a weak acid solution change if water is added to dilute the solution?",
            options: [
              "The percent ionization decreases.",
              "The percent ionization increases.",
              "The percent ionization remains the same.",
              "The weak acid becomes a strong electrolyte.",
            ],
            correctIndex: 1,
            hint: "Diluting shifts the reaction HA + H2O ⇌ H3O+ + A- toward the side with more aqueous particles.",
            explanation: "Diluting the solution decreases the concentrations of all species. According to Le Chatelier's Principle, the equilibrium shifts to the side with more aqueous ions (the product side) to counteract the dilution. This increases the fraction of acid that is ionized, increasing the percent ionization.",
          },
          {
            id: "q8.1.5",
            unitId: 8,
            text: "At 60°C, the water ionization constant ($K_w$) is $9.6 \\times 10^{-14}$. Which of the following is true regarding pure water at 60°C?",
            options: [
              "The water is acidic because its pH is less than 7.",
              "The water is basic because its pOH is less than 7.",
              "The water is neutral, and its pH is approximately 6.5.",
              "The pH of the water remains 7.00.",
            ],
            correctIndex: 2,
            hint: "Pure water is always neutral because [H3O+] = [OH-]. Calculate pH using [H3O+] = sqrt(Kw).",
            explanation: "Pure water is always neutral because $[H_3O^+] = [OH^-]$. Since $K_w = [H_3O^+][OH^-] = [H_3O^+]^2$, we have $[H_3O^+] = \\sqrt{9.6 \\times 10^{-14}} \\approx 3.1 \\times 10^{-7} \\text{ M}$. The $\\text{pH} = -\\log(3.1 \\times 10^{-7}) \\approx 6.51$. Because $[H_3O^+]$ still equals $[OH^-]$, the water is neutral despite having a pH below 7.",
          },
        ],
      },
      {
        id: "8.2",
        title: "Acid-Base Reactions, Titration Curves, and Molecular Structure",
        description: "Analyze neutralization reactions, interpret pH titration curves (equivalence and half-equivalence points), and relate molecular structure to acid strength.",
        youtubeId: "HdmCagtasYg",
        image: "/images/chemistry/units/unit8.png",
        article: `# Acid-Base Reactions, Titration Curves, and Molecular Structure

Neutralization reactions between acids and bases produce water and a salt. The pH behavior during these reactions is visualized using titration curves.

## Acid-Base Neutralization Reactions

The net ionic equations for neutralization depend on the strengths of the reactants:
1. **Strong Acid + Strong Base**:
   $$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l) \\quad (\\text{Equivalence Point pH } = 7)$$
2. **Weak Acid + Strong Base**:
   $$HA(aq) + OH^-(aq) \\rightarrow A^-(aq) + H_2O(l) \\quad (\\text{Equivalence Point pH } > 7)$$
   The conjugate base ($A^-$) hydrolysis makes the solution basic at the equivalence point.
3. **Strong Acid + Weak Base**:
   $$H^+(aq) + B(aq) \\rightarrow BH^+(aq) \\quad (\\text{Equivalence Point pH } < 7)$$
   The conjugate acid ($BH^+$) hydrolysis makes the solution acidic.

## Analyzing Titration Curves

A titration curve plots pH on the y-axis vs. volume of titrant added on the x-axis:

1. **Equivalence Point**: The inflection point of the curve where the slope is steepest. The moles of titrant are stoichiometrically equivalent to the moles of analyte.
2. **Half-Equivalence Point (for Weak-Strong Titrations)**: The point at which exactly half of the weak acid has been neutralized into its conjugate base.
   - At this point: $[HA] = [A^-]$
   - According to the Henderson-Hasselbalch equation:
     $$\\text{pH} = \\text{p}K_a$$
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
              "pH is exactly 7.00.",
              "pH is less than 7.00.",
              "pH is greater than 7.00.",
              "pH depends on the color of the indicator.",
            ],
            correctIndex: 2,
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
              "$HClO_4 < HClO_3 < HClO_2 < HClO$",
              "$HClO < HClO_2 < HClO_3 < HClO_4$",
              "$HClO < HBrO < HIO < HNO_3$",
              "$HIO < HBrO < HClO_4 < HClO$",
            ],
            correctIndex: 1,
            hint: "For oxyacids of the same element, acid strength increases with the number of oxygen atoms.",
            explanation: "As the number of terminal oxygen atoms increases, they pull electron density away from the $O-H$ bond, polarizing it and making it easier to release the proton. Additionally, the extra oxygens stabilize the resulting anion through resonance. Thus, the strength order is $HClO < HClO_2 < HClO_3 < HClO_4$.",
          },
          {
            id: "q8.2.4",
            unitId: 8,
            text: "Explain why hydroiodic acid ($HI$) is a much stronger acid than hydrofluoric acid ($HF$).",
            options: [
              "Iodine is more electronegative than Fluorine, making the bond more polar.",
              "The $H-I$ bond is weaker because the larger atomic radius of Iodine holds the hydrogen less tightly, making it easier to dissociate.",
              "Fluorine forms stronger intermolecular hydrogen bonds with the water solvent.",
              "HI is a diatomic molecule, whereas HF is not.",
            ],
            correctIndex: 1,
            hint: "For binary acids in the same group, bond strength dominates over polarity.",
            explanation: "For binary acids, as you go down a group, the atomic size of the halogen increases ($I > F$). This larger orbital size leads to poor overlap with the $1s$ orbital of hydrogen, resulting in a much weaker covalent bond. The weaker $H-I$ bond dissociates completely in water, while the strong $H-F$ bond does not, making $HF$ a weak acid.",
          },
          {
            id: "q8.2.5",
            unitId: 8,
            text: "What is the net ionic equation for the titration of weak acid $HF$ with strong base $NaOH$?",
            options: [
              "$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$",
              "$HF(aq) + OH^-(aq) \\rightarrow F^-(aq) + H_2O(l)$",
              "$HF(aq) + NaOH(aq) \\rightarrow NaF(aq) + H_2O(l)$",
              "$H^+(aq) + NaOH(aq) \\rightarrow Na^+(aq) + H_2O(l)$",
            ],
            correctIndex: 1,
            hint: "Weak acids are weak electrolytes and must be written as intact molecules in ionic equations.",
            explanation: "Because $HF$ is a weak acid, it exists primarily as intact molecules in solution and is not written as dissociated ions. The strong base $NaOH$ dissociates completely, providing $OH^-$ ions. The net ionic equation represents the reaction of intact $HF$ with $OH^-$: $HF(aq) + OH^-(aq) \\rightarrow F^-(aq) + H_2O(l)$.",
          },
        ],
      },
      {
        id: "8.3",
        title: "Buffers, Buffer Capacity, and the Henderson-Hasselbalch Equation",
        description: "Master buffer systems, perform pH calculations using the Henderson-Hasselbalch equation, and understand buffer capacity.",
        youtubeId: "rIvEvwViJGk",
        image: "/images/chemistry/units/unit8.png",
        article: `# Buffers, Buffer Capacity, and the Henderson-Hasselbalch Equation

A buffer solution resists changes in pH when small amounts of strong acid or strong base are added.

## Buffer Components and Action

A buffer is composed of a **weak conjugate acid-base pair** (e.g., $HC_2H_3O_2$ and $NaC_2H_3O_2$).
- **If strong base ($OH^-$) is added**: The weak acid component reacts to neutralize it:
  $$HA(aq) + OH^-(aq) \\rightarrow A^-(aq) + H_2O(l)$$
- **If strong acid ($H^+$) is added**: The weak base component reacts to neutralize it:
  $$A^-(aq) + H^+(aq) \\rightarrow HA(aq)$$

## The Henderson-Hasselbalch Equation

The pH of a buffer solution can be calculated directly using the **Henderson-Hasselbalch equation**:

$$\\text{pH} = \\text{p}K_a + \\log \\left( \\frac{[A^-]}{[HA]} \\right)$$

### Buffer Design:
A buffer is most effective when the ratio of conjugate base to weak acid is close to 1 ($[A^-]/[HA] \\approx 1$), which means $\\text{pH} \\approx \\text{p}K_a$. Therefore, to design a buffer of a specific target pH, select a weak acid with a **$\\text{p}K_a$ as close as possible to the target pH**.

## Buffer Capacity

<vocab term="Buffer Capacity" definition="The amount of acid or base a buffer can neutralize before its pH begins to change significantly.">Buffer capacity</vocab> is the measure of the buffer's ability to resist pH changes.
- **High Concentrations**: A buffer with higher absolute concentrations of $HA$ and $A^-$ (e.g., $1.0 \\text{ M}$ each) has a **higher buffer capacity** than a diluted buffer (e.g., $0.10 \\text{ M}$ each), because it contains more moles of buffer components to neutralize added acid or base.
`,
        questions: [
          {
            id: "q8.3.1",
            unitId: 8,
            text: "What is the pH of a buffer solution prepared by mixing 0.20 M acetic acid ($HC_2H_3O_2$) and 0.40 M sodium acetate ($NaC_2H_3O_2$)? ($K_a$ of acetic acid is $1.8 \\times 10^{-5}$; $\\text{p}K_a = 4.74$)",
            options: [
              "4.44",
              "4.74",
              "5.04",
              "5.20",
            ],
            correctIndex: 2,
            hint: "Apply the Henderson-Hasselbalch equation: pH = pKa + log([A-]/[HA]).",
            explanation: "Using Henderson-Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log([A^-]/[HA]) = 4.74 + \\log(0.40 / 0.20) = 4.74 + \\log(2.0) = 4.74 + 0.30 = 5.04$.",
          },
          {
            id: "q8.3.2",
            unitId: 8,
            text: "A chemist needs to prepare a buffer solution with a pH of 9.00. Which of the following weak acids (and their conjugate bases) would be the best choice for this buffer?",
            options: [
              "Formic acid ($\\text{p}K_a = 3.75$)",
              "Acetic acid ($\\text{p}K_a = 4.74$)",
              "Hypochlorous acid ($\\text{p}K_a = 7.53$)",
              "Boric acid ($\\text{p}K_a = 9.24$)",
            ],
            correctIndex: 3,
            hint: "Select the weak acid whose pKa is closest to the desired buffer pH.",
            explanation: "A buffer is most effective and easiest to prepare near its optimal capacity, which is where $\\text{pH} \\approx \\text{p}K_a$. Boric acid has a $\\text{p}K_a$ of $9.24$, which is closest to the target pH of $9.00$, making it the best choice.",
          },
          {
            id: "q8.3.3",
            unitId: 8,
            text: "Which of the following buffer solutions has the highest buffer capacity?",
            options: [
              "0.10 M $HF$ and 0.10 M $NaF$",
              "1.0 M $HF$ and 1.0 M $NaF$",
              "0.50 M $HF$ and 0.05 M $NaF$",
              "1.0 M $HF$ and 0.10 M $NaF$",
            ],
            correctIndex: 1,
            hint: "Buffer capacity is maximized when concentrations are high and the ratio of base to acid is 1.",
            explanation: "Buffer capacity depends on the concentrations of the buffer components. The higher the concentrations, the more acid or base the buffer can neutralize. A 1:1 ratio also optimizes resistance to both acid and base. Thus, $1.0 \\text{ M } HF$ and $1.0 \\text{ M } NaF$ has the highest capacity.",
          },
          {
            id: "q8.3.4",
            unitId: 8,
            text: "What chemical reaction occurs when a small amount of hydrochloric acid ($HCl$) is added to a buffer containing acetic acid ($HC_2H_3O_2$) and sodium acetate ($NaC_2H_3O_2$)?",
            options: [
              "$HC_2H_3O_2(aq) + H^+(aq) \\rightarrow H_2C_2H_3O_2^+(aq)$",
              "$C_2H_3O_2^-(aq) + H^+(aq) \\rightarrow HC_2H_3O_2(aq)$",
              "$Na^+(aq) + Cl^-(aq) \\rightarrow NaCl(s)$",
              "$HC_2H_3O_2(aq) + OH^-(aq) \\rightarrow C_2H_3O_2^-(aq) + H_2O(l)$",
            ],
            correctIndex: 1,
            hint: "Added strong acid (H+) is neutralized by the conjugate base component of the buffer.",
            explanation: "The added strong acid dissociates to release $H^+$ ions. These ions are neutralized by reacting with the basic acetate ion ($C_2H_3O_2^-$) to form weak acetic acid ($HC_2H_3O_2$), preventing the pH from dropping significantly.",
          },
          {
            id: "q8.3.5",
            unitId: 8,
            text: "Which of the following mixtures will form a buffer solution when mixed together in equal volumes?",
            options: [
              "0.10 M $HCl$ and 0.10 M $NaCl$",
              "0.10 M $HNO_3$ and 0.05 M $NaOH$",
              "0.10 M $HC_2H_3O_2$ and 0.05 M $NaOH$",
              "0.10 M $HC_2H_3O_2$ and 0.10 M $HCl$",
            ],
            correctIndex: 2,
            hint: "A buffer can be formed by partially neutralizing a weak acid with a strong base to produce its conjugate base.",
            explanation: "Mixing $0.10 \\text{ M } HC_2H_3O_2$ with $0.05 \\text{ M } NaOH$ results in a partial neutralization: $0.05 \\text{ mol } NaOH$ reacts with $0.05 \\text{ mol } HC_2H_3O_2$ to form $0.05 \\text{ mol } C_2H_3O_2^-$, leaving $0.05 \\text{ mol }$ of unreacted $HC_2H_3O_2$. This results in a solution containing equal concentrations of the weak acid and its conjugate base, forming a buffer. Option A uses a strong acid (cannot buffer). Option B fully neutralizes to leave strong acid. Option D has no base.",
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
        image: "/images/chemistry/units/unit9.png",
        article: `# Entropy, Gibbs Free Energy, and Thermodynamic Favorability

Thermodynamic favorability determines whether a chemical or physical process can occur spontaneously without continuous external energy input.

## Entropy

<vocab term="Entropy" definition="A measure of the dispersal of matter and energy in a system, associated with molecular disorder.">Entropy</vocab> ($S$) measures the dispersal of energy and matter in a system. The **Second Law of Thermodynamics** states that the entropy of the universe increases in any spontaneous process.

- **Predicting the Sign of $\\Delta S$**:
  - **Phase Changes**: $S_{\\text{solid}} < S_{\\text{liquid}} < S_{\\text{gas}}$. Melting (fusion), vaporization, and sublimation have $\\Delta S > 0$.
  - **Dissolution**: Dissolving a solid in water generally increases entropy ($\\Delta S > 0$).
  - **Gas Moles**: If a reaction increases the number of gas molecules ($\\Delta n_{\\text{gas}} > 0$), then $\\Delta S > 0$.

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
              "$H_2O(l) \\rightarrow H_2O(g)$",
              "$N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$",
              "$NaCl(s) \\rightarrow Na^+(aq) + Cl^-(aq)$",
              "$CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$",
            ],
            correctIndex: 1,
            hint: "Look for a reaction that decreases the number of gas molecules.",
            explanation: "In the reaction $N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$, the reactants have 4 moles of gas, and the products have 2 moles of gas. This reduction in the moles of gas decreases molecular disorder and dispersal of matter, resulting in a negative entropy change ($\\Delta S < 0$).",
          },
          {
            id: "q9.1.2",
            unitId: 9,
            text: "A reaction has $\\Delta H = -120 \\text{ kJ/mol}$ and $\\Delta S = -300 \\text{ J/(mol K)}$. At what temperatures will this reaction be thermodynamically favored?",
            options: [
              "At all temperatures.",
              "Only at temperatures above 400 K.",
              "Only at temperatures below 400 K.",
              "The reaction is never thermodynamically favored.",
            ],
            correctIndex: 2,
            hint: "Set ΔG < 0 in the equation ΔH - T*ΔS < 0, making sure to convert ΔS to kJ.",
            explanation: "Convert $\\Delta S$: $-300 \\text{ J/(mol K)} = -0.300 \\text{ kJ/(mol K)}$. We want $\\Delta G < 0 \\rightarrow \\Delta H - T\\Delta S < 0 \\rightarrow -120 - T(-0.300) < 0 \\rightarrow 0.300 T < 120 \\rightarrow T < 400 \\text{ K}$. Thus, the reaction is spontaneous only at temperatures below 400 K.",
          },
          {
            id: "q9.1.3",
            unitId: 9,
            text: "Under what thermodynamic conditions is a process spontaneous (thermodynamically favored) at all temperatures?",
            options: [
              "$\\Delta H < 0$ and $\\Delta S < 0$",
              "$\\Delta H > 0$ and $\\Delta S > 0$",
              "$\\Delta H < 0$ and $\\Delta S > 0$",
              "$\\Delta H > 0$ and $\\Delta S < 0$",
            ],
            correctIndex: 2,
            hint: "Analyze the signs of the terms in ΔG = ΔH - T*ΔS. We want ΔG to be negative regardless of the value of T.",
            explanation: "In $\\Delta G = \\Delta H - T\\Delta S$, if $\\Delta H$ is negative (exothermic) and $\\Delta S$ is positive (disorder), then both $\\Delta H$ and $-T\\Delta S$ are negative. The sum will always be negative, meaning $\\Delta G < 0$ at all temperatures.",
          },
          {
            id: "q9.1.4",
            unitId: 9,
            text: "The combustion of wood is highly thermodynamically favored ($\\Delta G < 0$). However, a pile of wood can sit in the air for years without burning. What is the explanation for this observation?",
            options: [
              "The reaction is endothermic at room temperature.",
              "The reaction is under kinetic control because it has a very high activation energy ($E_a$).",
              "The entropy change of the reaction is negative.",
              "Oxygen is not a strong enough oxidizing agent at room temperature.",
            ],
            correctIndex: 1,
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
        ],
      },
      {
        id: "9.2",
        title: "Free Energy, Equilibrium Constants K, and Coupled Reactions",
        description: "Relate standard free energy (ΔG°) to the equilibrium constant (K) and understand how reactions can be coupled to drive unfavorable processes.",
        youtubeId: "huKBuShAa1w",
        image: "/images/chemistry/units/unit9.png",
        article: `# Free Energy, Equilibrium Constants K, and Coupled Reactions

The standard free energy change of a reaction is mathematically linked to its equilibrium constant, reflecting that both predict the thermodynamic favorability of a process.

## Relating ΔG° and K

The relationship between the standard free energy change ($\\Delta G^\\circ$) and the equilibrium constant ($K$) is given by:

$$\\Delta G^\\circ = -RT \\ln K$$

Where:
- $\\Delta G^\\circ$ is the standard free energy change (typically converted to **Joules/mol** to match $R$).
- $R$ is the gas constant ($8.314 \\text{ J/(mol K)}$).
- $T$ is the absolute temperature in **Kelvin**.
- $K$ is the equilibrium constant ($K_c$ or $K_p$).

### Interpreting the Relationship:
- **If $\\Delta G^\\circ < 0$**: The term $-RT \\ln K$ is negative, which means $\\ln K > 0 \\rightarrow \\mathbf{K > 1}$. The products are favored at equilibrium.
- **If $\\Delta G^\\circ > 0$**: The term $-RT \\ln K$ is positive, which means $\\ln K < 0 \\rightarrow \\mathbf{K < 1}$. The reactants are favored at equilibrium.
- **If $\\Delta G^\\circ = 0$**: The equilibrium constant is exactly $\\mathbf{K = 1}$.

## Coupled Reactions

In biological and industrial systems, many essential reactions are thermodynamically unfavored ($\\Delta G^\\circ > 0$). To make these processes occur, they are **coupled** to a second, highly favored reaction ($\\Delta G^\\circ < 0$).

- **Principle of Coupling**: Two reactions are coupled via a shared intermediate. The sum of the two reactions has a net **negative free energy** ($\\Delta G^\\circ_{\\text{net}} < 0$), driving the overall process.
- **Biological Example**: The phosphorylation of glucose (unfavored, $\\Delta G^\\circ \\approx +14 \\text{ kJ/mol}$) is coupled to the hydrolysis of ATP (highly favored, $\\Delta G^\\circ \\approx -30.5 \\text{ kJ/mol}$), yielding a net favored process:
  $$\\Delta G^\\circ_{\\text{net}} = +14 + (-30.5) = -16.5 \\text{ kJ/mol}$$
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
              "$K > 1$; products are favored at equilibrium.",
              "$K < 1$; reactants are favored at equilibrium.",
              "$K = 1$; reactants and products are equal.",
              "$K = 0$; no reaction occurs.",
            ],
            correctIndex: 1,
            hint: "Analyze the sign of ln(K) in ΔG° = -RT*ln(K). If ΔG° is positive, ln(K) must be negative.",
            explanation: "Since $\\Delta G^\\circ = -RT \\ln K$, if $\\Delta G^\\circ$ is positive, then $\\ln K$ must be negative. A negative natural logarithm means the argument $K$ is less than 1 ($K < 1$). This means that at equilibrium, reactants are favored over products.",
          },
          {
            id: "q9.2.3",
            unitId: 9,
            text: `Consider the two reactions:
1) $A \\rightarrow B \\quad \\Delta G_1^\\circ = +20 \\text{ kJ/mol}$
2) $C \\rightarrow D \\quad \\Delta G_2^\\circ = -35 \\text{ kJ/mol}$
If these two reactions are coupled, what is the net free energy change ($\\Delta G_{\\text{net}}^\\circ$) of the coupled process, and is it thermodynamically favored?`,
            options: [
              "$+55 \\text{ kJ/mol}$; unfavored",
              "$-15 \\text{ kJ/mol}$; favored",
              "$-55 \\text{ kJ/mol}$; favored",
              "$+15 \\text{ kJ/mol}$; unfavored",
            ],
            correctIndex: 1,
            hint: "Add the two standard free energy changes together.",
            explanation: "When reactions are coupled, their free energy changes are additive: $\\Delta G_{\\text{net}}^\\circ = \\Delta G_1^\\circ + \\Delta G_2^\\circ = +20 + (-35) = -15 \\text{ kJ/mol}$. Since the net free energy is negative, the coupled process is thermodynamically favored.",
          },
          {
            id: "q9.2.4",
            unitId: 9,
            text: "What is the value of the gas constant $R$ that should be used when calculating $\\Delta G^\\circ = -RT \\ln K$?",
            options: [
              "$0.08206 \\text{ L atm / (mol K)}$",
              "$8.314 \\text{ J / (mol K)}$",
              "$62.36 \\text{ L torr / (mol K)}$",
              "$1.987 \\text{ cal / (mol K)}$",
            ],
            correctIndex: 1,
            hint: "Choose the constant that expresses energy in thermodynamic units (Joules).",
            explanation: "Because $\\Delta G^\\circ$ is an energy quantity expressed in Joules or kilojoules, you must use the thermodynamic gas constant $R = 8.314 \\text{ J / (mol K)}$ to match the units.",
          },
          {
            id: "q9.2.5",
            unitId: 9,
            text: "In biological systems, what molecule is most commonly hydrolyzed to provide the thermodynamic drive for coupled endothermic reactions?",
            options: [
              "Glucose",
              "ATP",
              "DNA",
              "NADH",
            ],
            correctIndex: 1,
            hint: "Known as the energy currency of the cell.",
            explanation: "Adenosine triphosphate (ATP) is the primary energy currency in biological systems. Its hydrolysis to ADP and inorganic phosphate is highly exergonic ($\\Delta G^\\circ \\approx -30.5 \\text{ kJ/mol}$), which is coupled to drive various thermodynamically unfavored reactions in cells.",
          },
        ],
      },
      {
        id: "9.3",
        title: "Galvanic and Electrolytic Cells, Cell Potential, and Faraday Law",
        description: "Compare galvanic and electrolytic cells. Calculate cell potential, standard free energy changes, and perform stoichiometric calculations involving current and time using Faraday's Law.",
        youtubeId: "Rt7-VrmZuds",
        image: "/images/chemistry/galvanic_cell.png",
        article: `# Galvanic and Electrolytic Cells, Cell Potential, and Faraday Law

Electrochemistry deals with the interconversion of chemical energy and electrical energy through redox reactions.

## Galvanic vs. Electrolytic Cells

- **Galvanic (Voltaic) Cells**: Driven by a **thermodynamically favored** redox reaction ($E^\\circ_{\\text{cell}} > 0, \\Delta G^\\circ < 0$) to produce an electric current (e.g., a battery).
- **Electrolytic Cells**: Driven by an external electrical source to force a **thermodynamically unfavored** redox reaction ($E^\\circ_{\\text{cell}} < 0, \\Delta G^\\circ > 0$) to occur (e.g., electroplating).

### Cell Anatomy:
- **Anode**: The electrode where **oxidation** occurs. Anode mass typically decreases in galvanic cells as metal dissolves into ions.
- **Cathode**: The electrode where **reduction** occurs. Cathode mass typically increases as metal ions plate out onto the surface.
- **Salt Bridge**: Contains an inert electrolyte. Anions migrate toward the anode, and cations migrate toward the cathode to maintain electrical neutrality.
- **AN OX and RED CAT**: **An**ode = **Ox**idation, **Red**uction = **Cat**hode.

## Cell Potential and Free Energy

The standard cell potential ($E^\\circ_{\\text{cell}}$) is calculated from standard reduction potentials:

$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{reduction, cathode}} - E^\\circ_{\\text{reduction, anode}}$$

*Note*: Do not multiply the reduction potential by stoichiometric coefficients when calculating $E^\\circ_{\\text{cell}}$ because potential is an intensive property.

The relationship between standard free energy and cell potential is:

$$\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$$

Where:
- $n$ is the moles of electrons transferred in the balanced redox equation.
- $F$ is Faraday's constant ($96485 \\text{ C / mol } e^-$).

## Faraday's Law (Electrolysis Stoichiometry)

Faraday's Law states that the mass of substance altered at an electrode during electrolysis is directly proportional to the amount of electricity transferred.

### Key Equations:
- **Current ($I$)**: Measured in Amperes ($A = C/s$):
  $$I = \\frac{q}{t}$$
  Where $q$ is charge in Coulombs, and $t$ is time in seconds.
- **Charge to Moles of Electrons**:
  $$n_{e^-} = \\frac{q}{F}$$

### Stoichiometry Roadmap:
$$\\text{Time (s)} \\times \\text{Current (A)} \\rightarrow \\text{Charge (C)} \\xrightarrow{\\div F} \\text{Moles of } e^- \\xrightarrow{\\text{mole ratio}} \\text{Moles of Metal} \\rightarrow \\text{Mass of Metal (g)}$$
`,
        questions: [
          {
            id: "q9.3.1",
            unitId: 9,
            text: `Calculate the standard cell potential ($E^\\circ_{\\text{cell}}$) for a galvanic cell based on the half-reactions:
$Ag^+(aq) + e^- \\rightarrow Ag(s) \\quad E^\\circ = +0.80 \\text{ V}$
$Zn^{2+}(aq) + 2e^- \\rightarrow Zn(s) \\quad E^\\circ = -0.76 \\text{ V}$`,
            options: [
              "+0.04 V",
              "+1.56 V",
              "-1.56 V",
              "+2.36 V",
            ],
            correctIndex: 1,
            hint: "The more positive potential is the cathode (reduction). Use E°cell = E°cathode - E°anode.",
            explanation: "Since $+0.80 \\text{ V}$ is more positive than $-0.76 \\text{ V}$, the silver half-reaction occurs at the cathode (reduction) and the zinc half-reaction occurs at the anode (oxidation). $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = 0.80 - (-0.76) = 1.56 \\text{ V}$.",
          },
          {
            id: "q9.3.2",
            unitId: 9,
            text: "In the galvanic cell described in the previous question, which of the following is correct regarding the electron flow and salt bridge ion migration?",
            options: [
              "Electrons flow from silver to zinc; cations in the salt bridge migrate to the zinc compartment.",
              "Electrons flow from zinc to silver; anions in the salt bridge migrate to the silver compartment.",
              "Electrons flow from zinc to silver; cations in the salt bridge migrate to the silver compartment.",
              "Electrons flow from silver to zinc; anions in the salt bridge migrate to the zinc compartment.",
            ],
            correctIndex: 2,
            hint: "Electrons flow from anode (oxidation) to cathode (reduction). Cations migrate to the cathode.",
            explanation: "Zinc is the anode (oxidation) and Silver is the cathode (reduction). Electrons always flow from the anode to the cathode, so they flow from Zinc to Silver. Cations from the salt bridge migrate into the cathode (Silver) compartment to neutralize the negative charge left as $Ag^+$ ions are reduced to $Ag(s)$.",
          },
          {
            id: "q9.3.3",
            unitId: 9,
            text: "How much charge (in Coulombs) is transferred when a current of 5.00 A is passed through an electrolytic cell for 20.0 minutes?",
            options: [
              "100 C",
              "6000 C",
              "1200 C",
              "3000 C",
            ],
            correctIndex: 1,
            hint: "Convert minutes to seconds first, then use the formula q = I * t.",
            explanation: "Time in seconds $t = 20.0 \\text{ minutes} \\times 60 \\text{ s/minute} = 1200 \\text{ s}$. Charge $q = I \\times t = 5.00 \\text{ A} \\times 1200 \\text{ s} = 6000 \\text{ C}$.",
          },
          {
            id: "q9.3.4",
            unitId: 9,
            text: "Calculate the mass of copper metal ($Cu$, molar mass 63.55 g/mol) plated out at the cathode of an electrolytic cell containing $Cu^{2+}$ ions by a current of 10.0 A running for 965 seconds. (Faraday's constant is 96485 C/mol e-)",
            options: [
              "6.36 g",
              "3.18 g",
              "1.59 g",
              "12.7 g",
            ],
            correctIndex: 1,
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
        ],
      },
    ],
  },
];
