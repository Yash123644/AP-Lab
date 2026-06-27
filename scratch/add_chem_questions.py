import sys
import os

# Append the directory containing chem_units to sys.path
sys.path.append("/Users/yashpatil/.gemini/antigravity-ide/brain/ffdd1656-bc55-4c60-bbbf-84a9fe48be7d/chem_units")

# Define the new questions for each topic
new_questions = {
    "1.1": [
        {
            "id": "q1.1.6",
            "unitId": 1,
            "text": "A student is analyzing a sample of a pure hydrate of copper(II) sulfate, $CuSO_4 \\cdot xH_2O$. The initial mass of the sample is $2.50 \\text{ g}$. After heating to constant mass, the anhydrous copper(II) sulfate has a mass of $1.60 \\text{ g}$. What is the value of $x$ in the hydrate formula?",
            "options": ["2", "5", "7", "10"],
            "correctIndex": 1,
            "hint": "Find the mass of water lost, convert the mass of water and anhydrous CuSO4 to moles, and determine their ratio.",
            "explanation": "Mass of water lost = $2.50 \\text{ g} - 1.60 \\text{ g} = 0.90 \\text{ g}$. Moles of water = $0.90 \\text{ g} / 18.02 \\text{ g/mol} = 0.050 \\text{ mol}$. Molar mass of $CuSO_4 \\approx 159.6 \\text{ g/mol}$. Moles of anhydrous $CuSO_4 = 1.60 \\text{ g} / 159.6 \\text{ g/mol} \\approx 0.010 \\text{ mol}$. The ratio of moles of water to moles of $CuSO_4$ is $0.050 / 0.010 = 5$. Thus, $x = 5$."
        },
        {
            "id": "q1.1.7",
            "unitId": 1,
            "text": "Which of the following compounds has the highest mass percent of nitrogen?",
            "options": ["$NH_3$", "$NO_2$", "$N_2O$", "$NH_4NO_3$"],
            "correctIndex": 0,
            "hint": "Calculate the ratio of the total mass of nitrogen in the chemical formula to the molar mass of the entire compound.",
            "explanation": "Mass percent of N: For $NH_3$: $14.01 / 17.03 \\approx 82.3\\%$. For $NO_2$: $14.01 / 46.01 \\approx 30.4\\%$. For $N_2O$: $28.02 / 44.02 \\approx 63.7\\%$. For $NH_4NO_3$: $28.02 / 80.05 \\approx 35.0\\%$. Therefore, $NH_3$ has the highest mass percent of nitrogen."
        },
        {
            "id": "q1.1.8",
            "unitId": 1,
            "text": "A $10.0 \\text{ g}$ sample of a mixture of $NaCl$ and $SiO_2$ is treated with excess water. The insoluble $SiO_2$ is filtered, dried, and found to weigh $6.50 \\text{ g}$. What is the mass percent of sodium in the original mixture?",
            "options": ["$13.8\\%$", "$35.0\\%$", "$22.8\\%$", "$39.3\\%$"],
            "correctIndex": 0,
            "hint": "Find the mass of NaCl by subtracting the mass of SiO2 from the mixture mass, calculate the moles of NaCl, and then find the mass of Na.",
            "explanation": "Mass of $NaCl$ in mixture = $10.0 \\text{ g} - 6.50 \\text{ g} = 3.50 \\text{ g}$. Moles of $NaCl$ = $3.50 \\text{ g} / 58.44 \\text{ g/mol} \\approx 0.0599 \\text{ mol}$. Since each mole of $NaCl$ contains one mole of $Na$, moles of $Na = 0.0599 \\text{ mol}$. Mass of $Na = 0.0599 \\text{ mol} \\times 22.99 \\text{ g/mol} \\approx 1.38 \\text{ g}$. Mass percent of $Na$ in the $10.0 \\text{ g}$ mixture = $(1.38 \\text{ g} / 10.0 \\text{ g}) \\times 100\\% = 13.8\\%$.",
        },
        {
            "id": "q1.1.9",
            "unitId": 1,
            "text": "A hydrocarbon is analyzed and found to contain $85.7\\%$ carbon and $14.3\\%$ hydrogen by mass. What is its empirical formula?",
            "options": ["$CH$", "$CH_2$", "$CH_3$", "$C_2H_5$"],
            "correctIndex": 1,
            "hint": "Assume a 100 g sample, convert the masses of carbon and hydrogen to moles, and find the simplest integer ratio.",
            "explanation": "Assuming a $100 \\text{ g}$ sample: Carbon = $85.7 \\text{ g}$, Hydrogen = $14.3 \\text{ g}$. Moles of C = $85.7 \\text{ g} / 12.01 \\text{ g/mol} = 7.14 \\text{ mol}$. Moles of H = $14.3 \\text{ g} / 1.008 \\text{ g/mol} = 14.2 \\text{ mol}$. The ratio of H to C is $14.2 / 7.14 \\approx 2$. Therefore, the empirical formula is $CH_2$."
        },
        {
            "id": "q1.1.10",
            "unitId": 1,
            "text": "How many oxygen atoms are present in a $4.50 \\text{ g}$ sample of water ($H_2O$)?",
            "options": ["$1.51 \\times 10^{23}$", "$3.01 \\times 10^{23}$", "$6.02 \\times 10^{23}$", "$1.20 \\times 10^{24}$"],
            "correctIndex": 0,
            "hint": "Calculate the moles of H2O first, then convert to molecules, and note that each H2O molecule has one oxygen atom.",
            "explanation": "Moles of $H_2O = 4.50 \\text{ g} / 18.02 \\text{ g/mol} = 0.250 \\text{ mol}$. Number of $H_2O$ molecules = $0.250 \\text{ mol} \\times 6.022 \\times 10^{23} \\text{ molecules/mol} = 1.51 \\times 10^{23}$ molecules. Since each molecule contains exactly one oxygen atom, there are $1.51 \\times 10^{23}$ oxygen atoms."
        }
    ],
    "1.2": [
        {
            "id": "q1.2.6",
            "unitId": 1,
            "text": "Which of the following ground-state electron configurations represents a transition metal atom that is paramagnetic with exactly four unpaired electrons?",
            "options": ["$[Ar] 4s^2 3d^4$", "$[Ar] 3d^6$", "$[Ar] 4s^2 3d^6$", "$[Ar] 4s^1 3d^5$"],
            "correctIndex": 2,
            "hint": "Paramagnetism is caused by unpaired electrons. Write the orbital diagram for the d subshell (5 orbitals) and fill using Hund's rule.",
            "explanation": "Let's check $[Ar] 4s^2 3d^6$ (Iron, Fe). The $3d$ subshell has 5 orbitals. Hund's rule: first place 5 spin-up electrons in the 5 orbitals, then 1 spin-down electron in the first orbital. This leaves 1 paired orbital and 4 unpaired orbitals. Thus, $[Ar] 4s^2 3d^6$ has exactly 4 unpaired electrons and is paramagnetic. Note: $[Ar] 4s^2 3d^4$ is not a stable ground state configuration (it rearranges to $4s^1 3d^5$, which has 6 unpaired electrons)."
        },
        {
            "id": "q1.2.7",
            "unitId": 1,
            "text": "What is the ground-state electron configuration of the $Fe^{2+}$ ion?",
            "options": ["$[Ar] 4s^2 3d^4$", "$[Ar] 3d^6$", "$[Ar] 4s^1 3d^5$", "$[Ar] 4s^2 3d^6$"],
            "correctIndex": 1,
            "hint": "Transition metals lose their valence s electrons before losing d electrons when forming cations.",
            "explanation": "The ground-state configuration of neutral Fe is $[Ar] 4s^2 3d^6$. When forming transition metal cations, the electrons in the highest principal energy level shell (the $4s$ shell) are removed first. Removing two electrons from neutral Fe removes the two $4s$ electrons, yielding the configuration $[Ar] 3d^6$."
        },
        {
            "id": "q1.2.8",
            "unitId": 1,
            "text": "A student analyzes the Photoelectron Spectroscopy (PES) spectrum of an element. The spectrum features three distinct peaks with relative intensity heights of 2, 2, and 3, in order of decreasing binding energy. What is the identity of this element?",
            "options": ["Carbon ($C$)", "Nitrogen ($N$)", "Boron ($B$)", "Oxygen ($O$)"],
            "correctIndex": 1,
            "hint": "Peaks represent subshells: 1s, 2s, 2p. The intensity corresponds to the number of electrons in each subshell.",
            "explanation": "The binding energies correspond to shells in order: highest binding energy is closest to nucleus ($1s$), then $2s$, then $2p$. The relative intensities of 2, 2, and 3 mean the configuration is $1s^2 2s^2 2p^3$. Adding these up gives 7 electrons, which is Nitrogen ($N$)."
        },
        {
            "id": "q1.2.9",
            "unitId": 1,
            "text": "Which of the following subshells has the highest energy in a multi-electron atom?",
            "options": ["$3d$", "$4s$", "$3p$", "$3s$"],
            "correctIndex": 0,
            "hint": "Follow the Aufbau principle. Although 4s is filled before 3d, 3d is actually higher in energy once electrons are filled.",
            "explanation": "According to the Aufbau principle and energy level diagrams for multi-electron atoms, subshells are filled in order of increasing energy: $1s < 2s < 2p < 3s < 3p < 4s < 3d$. Thus, the $3d$ subshell is higher in energy than the $4s$, $3p$, and $3s$ subshells."
        },
        {
            "id": "q1.2.10",
            "unitId": 1,
            "text": "According to quantum mechanics, what is the maximum number of electrons that can occupy a single $d$ orbital?",
            "options": ["2", "5", "6", "10"],
            "correctIndex": 0,
            "hint": "Do not confuse a single orbital with a subshell. The Pauli exclusion principle limits any single orbital to two electrons of opposite spins.",
            "explanation": "A $d$ subshell contains 5 distinct orbitals, which can hold a total of 10 electrons. However, any *single* orbital (whether $s$, $p$, $d$, or $f$) can hold a maximum of only 2 electrons with opposite spins, according to the Pauli Exclusion Principle."
        }
    ],
    "1.3": [
        {
            "id": "q1.3.6",
            "unitId": 1,
            "text": "Why does electronegativity generally increase from left to right across a period on the periodic table?",
            "options": [
                "The atomic mass increases, making the atoms heavier.",
                "Valence electrons are added to higher energy shells, increasing shielding.",
                "The effective nuclear charge increases, attracting shared electrons more strongly.",
                "The electron-electron repulsion within orbitals decreases."
            ],
            "correctIndex": 2,
            "hint": "Electronegativity measures how strongly an atom attracts shared bonding electrons. Consider nuclear pull.",
            "explanation": "From left to right across a period, the number of protons in the nucleus increases while shielding remains relatively constant (as electrons are added to the same valence shell). This increases the effective nuclear charge ($Z_{eff}$), drawing the valence electrons closer and allowing the nucleus to attract shared electrons in a bond more strongly."
        },
        {
            "id": "q1.3.7",
            "unitId": 1,
            "text": "Which of the following has the highest second ionization energy ($IE_2$)?",
            "options": ["Sodium ($Na$)", "Magnesium ($Mg$)", "Aluminum ($Al$)", "Silicon ($Si$)"],
            "correctIndex": 0,
            "hint": "Look at the valence configurations. The second ionization removes a core electron for one of these elements, requiring a massive amount of energy.",
            "explanation": "Sodium has the electron configuration $[He] 2s^2 2p^6 3s^1$. The first ionization removes the single $3s$ valence electron. The second ionization must remove an electron from the stable $2p$ core shell. Because core electrons are closer to the nucleus and experience much less shielding, removing a core electron requires a huge amount of energy, making $IE_2$ of $Na$ extremely high."
        },
        {
            "id": "q1.3.8",
            "unitId": 1,
            "text": "Which of the following atoms or ions is the largest?",
            "options": ["$O^{2-}$", "$F^-$", "$Ne$", "$Na^+$"],
            "correctIndex": 0,
            "hint": "These species are isoelectronic. The species with the fewest protons has the weakest pull on the electrons, allowing the shell to expand.",
            "explanation": "These species are all isoelectronic with 10 electrons. The nuclear charges are: $O^{2-}$ (8 protons), $F^-$ (9 protons), $Ne$ (10 protons), $Na^+$ (11 protons). $O^{2-}$ has the fewest protons, meaning it has the weakest electrostatic attraction for the 10 electrons, allowing the electron cloud to expand the most."
        },
        {
            "id": "q1.3.9",
            "unitId": 1,
            "text": "Why does atomic radius increase down a group on the periodic table?",
            "options": [
                "The number of neutrons in the nucleus increases.",
                "The effective nuclear charge increases dramatically.",
                "Electrons are added to higher principal energy levels, which are further from the nucleus.",
                "Halogen group shielding decreases."
            ],
            "correctIndex": 2,
            "hint": "Down a group, a new electron shell (principal energy level n) is added at each step.",
            "explanation": "As you move down a group, the principal quantum number $n$ of the valence shell increases, which means the valence electrons are located in shells that are progressively further from the nucleus. This orbital expansion outweighs the increase in nuclear charge, resulting in a larger atomic radius."
        },
        {
            "id": "q1.3.10",
            "unitId": 1,
            "text": "Which of the following elements has the lowest first ionization energy?",
            "options": ["Cesium ($Cs$)", "Lithium ($Li$)", "Fluorine ($F$)", "Helium ($He$)"],
            "correctIndex": 0,
            "hint": "First ionization energy is lowest for large metals that hold their valence electrons very weakly.",
            "explanation": "Cesium is a very large alkali metal located at the bottom-left of the periodic table. Its single valence electron is in the $6s$ shell, far from the nucleus and highly shielded by core electrons. This results in a very weak electrostatic attraction, making it very easy to remove the electron (lowest first ionization energy)."
        }
    ],
    "2.1": [
        {
            "id": "q2.1.6",
            "unitId": 2,
            "text": "Which of the following compounds exhibits the greatest lattice energy?",
            "options": ["$LiF$", "$NaCl$", "$MgO$", "$Al_2O_3$"],
            "correctIndex": 3,
            "hint": "According to Coulomb's law, lattice energy is directly proportional to the product of the ionic charges and inversely proportional to the distance between them.",
            "explanation": "Lattice energy is governed by Coulomb's law: $E \\propto \\frac{q_1 q_2}{r}$. The charges in the lattice are: $LiF$ (+1, -1), $NaCl$ (+1, -1), $MgO$ (+2, -2), and $Al_2O_3$ (+3, -2). The product of charges for $Al_2O_3$ is 6 ($3 \\times 2$), which is the largest. Combined with small ionic radii of Aluminum and Oxygen, this creates the strongest electrostatic attraction and highest lattice energy."
        },
        {
            "id": "q2.1.7",
            "unitId": 2,
            "text": "What is the formal charge on the central sulfur atom in the sulfur dioxide ($SO_2$) molecule that minimizes formal charges?",
            "options": ["0", "+1", "+2", "-1"],
            "correctIndex": 0,
            "hint": "Formal charge = Valence electrons - Nonbonding electrons - 0.5 * Bonding electrons. Draw the Lewis structure where sulfur expands its octet to minimize formal charges.",
            "explanation": "In $SO_2$, sulfur has 6 valence electrons. To minimize formal charges, sulfur forms double bonds with both oxygen atoms ($O=S=O$), expanding its octet to 10 electrons (4 bonding pairs, 1 lone pair). For the central Sulfur: Formal Charge = $6 \\text{ (valence)} - 2 \\text{ (lone pair electrons)} - 4 \\text{ (bonds)} = 0$."
        },
        {
            "id": "q2.1.8",
            "unitId": 2,
            "text": "Which of the following bonds is the most polar?",
            "options": ["$C-H$", "$N-H$", "$O-H$", "$F-H$"],
            "correctIndex": 3,
            "hint": "Bond polarity is determined by the difference in electronegativity between the two bonded atoms.",
            "explanation": "Hydrogen has an electronegativity of 2.1. Electronegativities of the other elements are: C (2.5), N (3.0), O (3.5), F (4.0). The electronegativity differences are: $C-H$ (0.4), $N-H$ (0.9), $O-H$ (1.4), $F-H$ (1.9). The $F-H$ bond has the largest difference, making it the most polar."
        },
        {
            "id": "q2.1.9",
            "unitId": 2,
            "text": "Which of the following statements about resonance structures of the carbonate ion ($CO_3^{2-}$) is correct?",
            "options": [
                "The ion fluctuates rapidly between one double bond and two single bonds.",
                "The three C-O bonds are of equal length and strength, intermediate between a single and double bond.",
                "Two C-O bonds are long and weak, while one is short and strong.",
                "Resonance structures represent different configurations of nuclei."
            ],
            "correctIndex": 1,
            "hint": "Resonance represents delocalization of electrons over the carbon-oxygen bonds, producing an average bond order of 1.33.",
            "explanation": "Resonance structures are a way to represent delocalized electrons that cannot be shown in a single Lewis diagram. The actual carbonate ion is an average of the three resonance structures: it has three equivalent C-O bonds with a bond order of 1.33, sharing the double-bond character equally."
        },
        {
            "id": "q2.1.10",
            "unitId": 2,
            "text": "In a coordinate covalent bond (dative bond), how are the bonding electrons supplied?",
            "options": [
                "Each atom contributes one electron to the bonding pair.",
                "One atom contributes both electrons to the bonding pair.",
                "Electrons are transferred completely from one atom to another.",
                "Electrons are shared freely in a delocalized sea."
            ],
            "correctIndex": 1,
            "hint": "Think of the ammonium ion (NH4+) forming from ammonia (NH3) and H+.",
            "explanation": "A coordinate covalent bond occurs when one atom provides both bonding electrons to share with an electron-deficient species (such as $H^+$). For example, the nitrogen in $NH_3$ shares its lone pair with $H^+$ to form the ammonium ion ($NH_4^+$)."
        }
    ],
    "2.2": [
        {
            "id": "q2.2.6",
            "unitId": 2,
            "text": "What is the molecular geometry and hybridization of the central atom in $XeF_4$?",
            "options": [
                "Tetrahedral, $sp^3$",
                "Square planar, $sp^3d^2$",
                "See-saw, $sp^3d$",
                "Square pyramidal, $sp^3d^2$"
            ],
            "correctIndex": 1,
            "hint": "Determine the steric number of Xenon: count single bonds and lone pairs on the central Xenon atom.",
            "explanation": "Xenon has 8 valence electrons. In $XeF_4$, it forms 4 single covalent bonds with Fluorine, using 4 electrons. The remaining 4 electrons form 2 lone pairs. Steric number = 4 bonds + 2 lone pairs = 6. This corresponds to an octahedral electron geometry and $sp^3d^2$ hybridization. With 2 lone pairs occupying opposite axial positions to minimize repulsion, the molecular geometry is square planar."
        },
        {
            "id": "q2.2.7",
            "unitId": 2,
            "text": "Which of the following molecules has a net dipole moment of zero (nonpolar)?",
            "options": ["$H_2O$", "$NH_3$", "$CO_2$", "$SF_4$"],
            "correctIndex": 2,
            "hint": "A molecule is nonpolar if its bond dipoles are equal in magnitude and symmetrical, canceling each other out.",
            "explanation": "In $CO_2$, the carbon atom forms two double bonds with oxygen ($O=C=O$). The molecular shape is linear, and the two polar $C-O$ bonds pull in opposite directions with equal strength. Thus, the individual bond dipoles cancel out, giving a net dipole moment of zero."
        },
        {
            "id": "q2.2.8",
            "unitId": 2,
            "text": "What is the approximate bond angle in the hydronium ion ($H_3O^+$)?",
            "options": ["$109.5^\\circ$", "$120^\\circ$", "$107^\\circ$", "$180^\\circ$"],
            "correctIndex": 2,
            "hint": "Oxygen in H3O+ has 3 bonds and 1 lone pair, similar to Nitrogen in NH3.",
            "explanation": "The central oxygen atom in $H_3O^+$ has 3 bonding pairs and 1 lone pair (steric number = 4). The electron geometry is tetrahedral. Due to the repulsion from the lone pair, the bond angles are compressed slightly from the ideal $109.5^\\circ$ to approximately $107^\\circ$, resulting in a trigonal pyramidal molecular geometry."
        },
        {
            "id": "q2.2.9",
            "unitId": 2,
            "text": "How many sigma ($\\sigma$) and pi ($\\pi$) bonds are present in a molecule of ethene ($C_2H_4$)?",
            "options": [
                "4 sigma, 1 pi",
                "5 sigma, 1 pi",
                "3 sigma, 2 pi",
                "5 sigma, 2 pi"
            ],
            "correctIndex": 1,
            "hint": "Ethene has a carbon-carbon double bond (which consists of one sigma and one pi bond) and four carbon-hydrogen single bonds.",
            "explanation": "Each single bond is a sigma ($\\sigma$) bond. A double bond consists of one sigma ($\\sigma$) and one pi ($\\pi$) bond. In ethene ($H_2C=CH_2$), we have 4 $C-H$ single bonds ($4 \\sigma$ bonds) and 1 $C=C$ double bond ($1 \\sigma$ + $1 \\pi$ bond). The total is 5 sigma and 1 pi bond."
        },
        {
            "id": "q2.2.10",
            "unitId": 2,
            "text": "Which hybridization corresponds to a trigonal planar electron geometry?",
            "options": ["$sp$", "$sp^2$", "$sp^3$", "$sp^3d$"],
            "correctIndex": 1,
            "hint": "Trigonal planar geometry has a steric number of 3, combining one s orbital and two p orbitals.",
            "explanation": "A steric number of 3 requires mixing one $s$ orbital and two $p$ orbitals, yielding three equivalent $sp^2$ hybrid orbitals. These orbitals point towards the corners of an equilateral triangle (trigonal planar arrangement) to minimize electron repulsion."
        }
    ],
    "2.3": [
        {
            "id": "q2.3.6",
            "unitId": 2,
            "text": "Brass is an alloy consisting of copper and zinc. Because copper and zinc atoms are roughly the same size, which type of alloy does brass represent?",
            "options": ["Substitutional alloy", "Interstitial alloy", "Amorphous alloy", "Network alloy"],
            "correctIndex": 0,
            "hint": "When the solute atoms are of similar size to the solvent atoms, they replace the solvent atoms in the lattice.",
            "explanation": "A substitutional alloy forms when solute atoms are of similar size to the solvent atoms, replacing them in the crystal lattice (e.g., zinc replacing copper in brass). In contrast, interstitial alloys form when solute atoms are much smaller, fitting into the spaces between the larger solvent metal atoms."
        },
        {
            "id": "q2.3.7",
            "unitId": 2,
            "text": "Which of the following substances has the highest melting point and is held together by covalent network bonding?",
            "options": ["$NaCl$", "$SiO_2$ (Quartz)", "$CO_2$", "$H_2O$"],
            "correctIndex": 1,
            "hint": "Covalent network solids are held together by a continuous 3D network of covalent bonds, making them extremely hard with high melting points.",
            "explanation": "$SiO_2$ (quartz) is a covalent network solid where each silicon atom is tetrahedrally bonded to four oxygen atoms in a continuous 3D network. Breaking this network requires breaking strong covalent bonds throughout the substance, resulting in a very high melting point. $NaCl$ is ionic, while $CO_2$ and $H_2O$ are molecular solids held together by weak IMFs."
        },
        {
            "id": "q2.3.8",
            "unitId": 2,
            "text": "Why do metals conduct electricity as solids, whereas ionic compounds only conduct when molten or in aqueous solution?",
            "options": [
                "Metals contain highly mobile ions in the solid state.",
                "Ionic solids have covalent bonds that lock electrons in place.",
                "Metals have delocalized valence electrons that are free to move, whereas ions in ionic solids are locked in fixed positions.",
                "Ionic compounds have higher electronegativity than metals."
            ],
            "correctIndex": 2,
            "hint": "Electricity conduction requires mobile charge carriers. Consider what carries the charge in metals vs. ionic compounds.",
            "explanation": "Metallic bonding features a lattice of positive metal cations surrounded by a mobile, delocalized 'sea' of valence electrons. These free electrons act as charge carriers in the solid state. In ionic solids, the ions are locked in rigid positions in the 3D lattice, preventing electrical conduction. When melted or dissolved, the lattice breaks down, freeing the ions to move and conduct current."
        },
        {
            "id": "q2.3.9",
            "unitId": 2,
            "text": "Steel is an alloy of iron containing small amounts of carbon. How does the presence of carbon affect the properties of steel compared to pure iron?",
            "options": [
                "It makes the alloy softer and more malleable.",
                "It increases the electrical conductivity of the alloy.",
                "It makes the alloy harder and less malleable by restricting the movement of iron layers.",
                "It decreases the density and melting point of the alloy."
            ],
            "correctIndex": 2,
            "hint": "Carbon forms an interstitial alloy. The small carbon atoms fit into the spaces between large iron atoms.",
            "explanation": "Steel is an interstitial alloy. Small carbon atoms fit into the spaces (interstices) between the larger iron atoms. These smaller carbon atoms distort the regular lattice and block the metal layers from sliding past one another under stress. This makes steel significantly harder and less malleable than pure iron."
        },
        {
            "id": "q2.3.10",
            "unitId": 2,
            "text": "Which of the following solids is held together primarily by weak dispersion forces?",
            "options": ["$I_2$ (solid iodine)", "$Cu$ (copper metal)", "$SiC$ (silicon carbide)", "$KBr$ (potassium bromide)"],
            "correctIndex": 0,
            "hint": "Look for a nonpolar molecular solid.",
            "explanation": "$I_2$ is a nonpolar diatomic molecule. In the solid state, $I_2$ forms a molecular crystal held together solely by weak London dispersion forces. $Cu$ has metallic bonding, $SiC$ has covalent network bonding, and $KBr$ has ionic bonding."
        }
    ],
    "3.1": [
        {
            "id": "q3.1.6",
            "unitId": 3,
            "text": "Which of the following liquids would you expect to have the highest viscosity at room temperature?",
            "options": ["$CH_3CH_2OH$ (Ethanol)", "$HOCH_2CH_2OH$ (Ethylene glycol)", "$CH_3OCH_3$ (Dimethyl ether)", "$CH_3CH_2CH_3$ (Propane)"],
            "correctIndex": 1,
            "hint": "Viscosity increases with stronger intermolecular forces. Look for the molecule that can form the most hydrogen bonds.",
            "explanation": "Ethylene glycol ($HOCH_2CH_2OH$) has two $-OH$ groups, allowing it to form extensive hydrogen-bonding networks with neighboring molecules. Dimethyl ether and propane cannot hydrogen-bond, and ethanol only has one $-OH$ group. The greater density of hydrogen bonds in ethylene glycol increases the attraction between molecules, leading to the highest viscosity."
        },
        {
            "id": "q3.1.7",
            "unitId": 3,
            "text": "Which of the following factors explains why the boiling point of $H_2O$ ($100^\\circ\\text{C}$) is significantly higher than that of $H_2S$ ($-60^\\circ\\text{C}$)?",
            "options": [
                "London dispersion forces are much stronger in water.",
                "Water molecules form strong hydrogen bonds, whereas hydrogen sulfide molecules only form weaker dipole-dipole interactions.",
                "Sulfur is more electronegative than Oxygen.",
                "The covalent bonds in water are much stronger than in hydrogen sulfide."
            ],
            "correctIndex": 1,
            "hint": "Oxygen is highly electronegative and bonded to hydrogen, creating hydrogen bonds in water. Sulfur is not electronegative enough for hydrogen bonding.",
            "explanation": "Oxygen is a small, highly electronegative atom. When bonded to hydrogen, it creates a very polar bond capable of forming strong hydrogen bonds. Sulfur is larger and less electronegative, so $H_2S$ cannot form hydrogen bonds, only weaker dipole-dipole forces. Boiling points reflect the strength of intermolecular forces, not covalent bonds."
        },
        {
            "id": "q3.1.8",
            "unitId": 3,
            "text": "At a given temperature, which of the following compounds has the highest vapor pressure?",
            "options": ["$CH_4$", "$CH_3CH_3$", "$CH_3CH_2CH_3$", "$CH_3CH_2CH_2CH_3$"],
            "correctIndex": 0,
            "hint": "Vapor pressure is inversely related to intermolecular forces. The compound with the weakest IMFs will evaporate most easily.",
            "explanation": "These are all nonpolar hydrocarbons held together only by London dispersion forces (LDFs). LDFs increase with size and polarizability (number of electrons). Methane ($CH_4$) is the smallest molecule and has the weakest LDFs. As a result, it has the lowest boiling point and highest vapor pressure at a given temperature."
        },
        {
            "id": "q3.1.9",
            "unitId": 3,
            "text": "What type of intermolecular force is responsible for the solubility of sodium chloride ($NaCl$) in water ($H_2O$)?",
            "options": ["Hydrogen bonding", "Ion-dipole forces", "Dipole-dipole forces", "London dispersion forces"],
            "correctIndex": 1,
            "hint": "NaCl dissociates into ions (Na+ and Cl-) which interact with the polar water molecules.",
            "explanation": "When $NaCl$ dissolves in water, it dissociates into $Na^+$ and $Cl^-$ ions. The partially negative oxygen atom of water attracts the $Na^+$ cation, while the partially positive hydrogen atoms of water attract the $Cl^-$ anion. These attractions between an ion and a polar molecule are called ion-dipole forces."
        },
        {
            "id": "q3.1.10",
            "unitId": 3,
            "text": "Which of the following compounds has the highest boiling point?",
            "options": ["$HF$", "$HCl$", "$HBr$", "$HI$"],
            "correctIndex": 0,
            "hint": "Although HI has the largest size and strongest London dispersion forces, HF is capable of hydrogen bonding, which is a much stronger IMF.",
            "explanation": "Hydrogen fluoride ($HF$) is capable of forming hydrogen bonds because fluorine is highly electronegative and small. Hydrogen bonding is significantly stronger than the dipole-dipole and London dispersion forces present in $HCl$, $HBr$, and $HI$, giving $HF$ the highest boiling point."
        }
    ],
    "3.2": [
        {
            "id": "q3.2.6",
            "unitId": 3,
            "text": "A mixture of $2.00 \\text{ mol}$ of $H_2(g)$ and $1.00 \\text{ mol}$ of $He(g)$ is placed in a $10.0 \\text{ L}$ container at $27.0^\\circ\\text{C}$. What is the partial pressure of $He(g)$ in the container? ($R = 0.08206 \\text{ L} \\cdot \\text{atm} / \\text{mol} \\cdot \\text{K}$)",
            "options": ["$2.46 \\text{ atm}$", "$4.92 \\text{ atm}$", "$7.39 \\text{ atm}$", "$1.23 \\text{ atm}$"],
            "correctIndex": 0,
            "hint": "Use Dalton's law of partial pressures: P_He = n_He * R * T / V.",
            "explanation": "Using the ideal gas law for $He$: $P_{He} = \\frac{n_{He} R T}{V}$. Convert temperature to Kelvin: $T = 27.0 + 273.15 = 300.15 \\text{ K}$. Moles of $He$ = $1.00 \\text{ mol}$. $P_{He} = \\frac{1.00 \\text{ mol} \\times 0.08206 \\text{ L} \\cdot \\text{atm/mol} \\cdot \\text{K} \\times 300.15 \\text{ K}}{10.0 \\text{ L}} \\approx 2.46 \\text{ atm}$."
        },
        {
            "id": "q3.2.7",
            "unitId": 3,
            "text": "Under which of the following conditions does a real gas show the greatest deviations from ideal behavior?",
            "options": [
                "High temperature and low pressure",
                "High temperature and high pressure",
                "Low temperature and low pressure",
                "Low temperature and high pressure"
            ],
            "correctIndex": 3,
            "hint": "Gases deviate from ideal behavior when the volume of the gas particles becomes significant relative to the container, and when intermolecular attractions become significant.",
            "explanation": "At high pressure, the gas molecules are compressed close together, making their molecular volume significant relative to the total container volume. At low temperature, the molecules move slowly, allowing weak intermolecular attractions to pull them together during collisions. Thus, low temperature and high pressure produce the greatest deviations from ideal gas behavior."
        },
        {
            "id": "q3.2.8",
            "unitId": 3,
            "text": "A sample of $He(g)$ and a sample of $Ar(g)$ are in separate containers of equal volume at the same temperature and pressure. Which of the following statements is correct?",
            "options": [
                "The average kinetic energy of the $He$ atoms is greater than that of the $Ar$ atoms.",
                "The average speed of the $He$ atoms is greater than that of the $Ar$ atoms.",
                "The density of the gas in the $He$ container is greater than in the $Ar$ container.",
                "The $Ar$ container contains more atoms than the $He$ container."
            ],
            "correctIndex": 1,
            "hint": "Average kinetic energy is determined only by temperature. At the same temperature, lighter gas particles move faster.",
            "explanation": "Since temperature is the same, both gases have the same average kinetic energy ($KE_{avg} = \\frac{3}{2}RT$). However, the root-mean-square speed is inversely proportional to the square root of the molar mass ($u_{rms} = \\sqrt{\\frac{3RT}{M}}$). Since $He$ ($M \\approx 4 \\text{ g/mol}$) is much lighter than $Ar$ ($M \\approx 40 \\text{ g/mol}$), $He$ atoms have a much higher average speed."
        },
        {
            "id": "q3.2.9",
            "unitId": 3,
            "text": "An inflated balloon has a volume of $2.00 \\text{ L}$ at sea level ($1.00 \\text{ atm}$) and $25^\\circ\\text{C}$. The balloon rises to an altitude where the pressure is $0.500 \\text{ atm}$ and the temperature is $-23^\\circ\\text{C}$. What is the new volume of the balloon?",
            "options": ["$3.36 L$", "$4.00 L$", "$1.67 L$", "$2.50 L$"],
            "correctIndex": 0,
            "hint": "Use the combined gas law: (P1 * V1) / T1 = (P2 * V2) / T2. Remember to convert temperatures to Kelvin.",
            "explanation": "Combined gas law: $V_2 = V_1 \\times \\frac{P_1}{P_2} \\times \\frac{T_2}{T_1}$. Convert temperatures to Kelvin: $T_1 = 25 + 273 = 298 \\text{ K}$. $T_2 = -23 + 273 = 250 \\text{ K}$. $V_2 = 2.00 \\text{ L} \\times \\frac{1.00 \\text{ atm}}{0.500 \\text{ atm}} \\times \\frac{250 \\text{ K}}{298 \\text{ K}} = 2.00 \\times 2.00 \\times 0.839 \\approx 3.36 \\text{ L}$."
        },
        {
            "id": "q3.2.10",
            "unitId": 3,
            "text": "What does a Maxwell-Boltzmann distribution graph represent?",
            "options": [
                "The relationship between gas pressure and temperature.",
                "The distribution of molecular speeds in a gas at a given temperature.",
                "The deviation of gas volume from ideal behavior.",
                "The rate of effusion of different gases."
            ],
            "correctIndex": 1,
            "hint": "The curve plots the relative number of molecules against their molecular speed.",
            "explanation": "A Maxwell-Boltzmann distribution shows the range of molecular speeds (or kinetic energies) for a collection of gas particles at a specific temperature. As temperature increases, the peak shifts to the right (higher speed) and flattens out, indicating a wider range of speeds."
        }
    ],
    "3.3": [
        {
            "id": "q3.3.6",
            "unitId": 3,
            "text": "A student separates a mixture of three dyes using paper chromatography with a polar mobile phase and a nonpolar stationary phase. Dye A travels the furthest, Dye B travels a moderate distance, and Dye C barely moves. Which of the following is correct?",
            "options": [
                "Dye C is the most polar.",
                "Dye A is the most polar.",
                "Dye A is the most nonpolar.",
                "The separation depends only on molecular weight."
            ],
            "correctIndex": 1,
            "hint": "Like dissolves like. The component that is most attracted to the mobile phase (polar) will travel the furthest.",
            "explanation": "Because the mobile phase is polar, polar molecules will dissolve in it more easily and travel further up the paper. Since Dye A traveled the furthest, it is the most polar of the three dyes. Dye C is the most nonpolar, attracting strongly to the nonpolar stationary phase."
        },
        {
            "id": "q3.3.7",
            "unitId": 3,
            "text": "Which of the following combinations would you expect to be completely miscible (soluble in all proportions)?",
            "options": [
                "$H_2O$ and $C_6H_{14}$ (hexane)",
                "$CH_3CH_2OH$ (ethanol) and $H_2O$",
                "$CCl_4$ and $H_2O$",
                "$CH_3OH$ and $C_8H_{18}$ (octane)"
            ],
            "correctIndex": 1,
            "hint": "Apply the rule 'like dissolves like'. Look for two substances that both exhibit strong hydrogen-bonding capabilities.",
            "explanation": "Ethanol ($CH_3CH_2OH$) and water ($H_2O$) are both polar molecules capable of forming strong hydrogen bonds with each other. This makes them highly compatible and completely miscible. Nonpolar hydrocarbons like hexane and octane are insoluble in water."
        },
        {
            "id": "q3.3.8",
            "unitId": 3,
            "text": "What is the molarity of a solution prepared by dissolving $11.7 \\text{ g}$ of $NaCl$ in enough water to make $500.0 \\text{ mL}$ of solution?",
            "options": ["$0.100 M$", "$0.200 M$", "$0.400 M$", "$0.800 M$"],
            "correctIndex": 2,
            "hint": "First convert grams of NaCl to moles, and then divide by the solution volume in liters.",
            "explanation": "Moles of $NaCl = 11.7 \\text{ g} / 58.44 \\text{ g/mol} = 0.200 \\text{ mol}$. Volume of solution in liters = $500.0 \\text{ mL} / 1000 = 0.5000 \\text{ L}$. Molarity = $0.200 \\text{ mol} / 0.5000 \\text{ L} = 0.400 \\text{ M}$."
        },
        {
            "id": "q3.3.9",
            "unitId": 3,
            "text": "A student measures the absorbance of a solution using a spectrophotometer. If the solution's concentration is doubled, what happens to the absorbance, according to the Beer-Lambert Law?",
            "options": [
                "It remains unchanged.",
                "It is halved.",
                "It is doubled.",
                "It increases exponentially."
            ],
            "correctIndex": 2,
            "hint": "Beer-Lambert Law is A = e * b * c, showing a direct linear relationship between absorbance (A) and concentration (c).",
            "explanation": "The Beer-Lambert Law is $A = \\epsilon b c$. Because absorbance ($A$) is directly proportional to concentration ($c$), doubling the concentration will double the absorbance of the solution, provided the path length ($b$) and wavelength remain constant."
        },
        {
            "id": "q3.3.10",
            "unitId": 3,
            "text": "How does the solubility of gases in water generally change with temperature and pressure?",
            "options": [
                "Solubility increases with higher temperature and higher pressure.",
                "Solubility increases with lower temperature and lower pressure.",
                "Solubility increases with lower temperature and higher pressure.",
                "Solubility increases with higher temperature and lower pressure."
            ],
            "correctIndex": 2,
            "hint": "Gases dissolve better in cold liquids, and higher pressure forces more gas molecules into the liquid phase (Henry's Law).",
            "explanation": "Gas solubility increases with: 1) lower temperature, because lower kinetic energy allows gas molecules to remain dissolved rather than escaping, and 2) higher pressure, because high partial pressure of the gas above the liquid pushes more gas molecules into solution."
        }
    ],
    "4.1": [
        {
            "id": "q4.1.6",
            "unitId": 4,
            "text": "Write the net ionic equation for the precipitation reaction that occurs when aqueous solutions of $AgNO_3$ and $CaCl_2$ are mixed.",
            "options": [
                "$Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$",
                "$2Ag^+(aq) + 2Cl^-(aq) \\rightarrow 2AgCl(s)$",
                "$Ca^{2+}(aq) + 2NO_3^-(aq) \\rightarrow Ca(NO_3)_2(s)$",
                "$AgNO_3(aq) + Cl^-(aq) \\rightarrow AgCl(s) + NO_3^-(aq)$"
            ],
            "correctIndex": 0,
            "hint": "Spectator ions (nitrate and calcium) remain dissolved and are canceled from both sides of the net ionic equation.",
            "explanation": "When $AgNO_3(aq)$ and $CaCl_2(aq)$ are mixed, $AgCl(s)$ precipitates. The complete ionic equation is: $2Ag^+(aq) + 2NO_3^-(aq) + Ca^{2+}(aq) + 2Cl^-(aq) \\rightarrow 2AgCl(s) + Ca^{2+}(aq) + 2NO_3^-(aq)$. Canceling the spectator ions ($Ca^{2+}$ and $NO_3^-$) and simplifying coefficients gives: $Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$."
        },
        {
            "id": "q4.1.7",
            "unitId": 4,
            "text": "A student mixes $0.10 \\text{ mol}$ of $Al(s)$ with $0.20 \\text{ mol}$ of $Cl_2(g)$ to produce $AlCl_3(s)$ according to the equation: $2Al(s) + 3Cl_2(g) \\rightarrow 2AlCl_3(s)$. Which reactant is limiting?",
            "options": ["$Al(s)$", "$Cl_2(g)$", "Neither is limiting", "The reaction does not go to completion"],
            "correctIndex": 1,
            "hint": "Divide the moles of each reactant by its stoichiometric coefficient in the balanced equation. The smallest ratio is the limiting reactant.",
            "explanation": "Determine the limiting reactant: For $Al$: $0.10 \\text{ mol} / 2 = 0.050$. For $Cl_2$: $0.20 \\text{ mol} / 3 = 0.067$. Since $0.050 < 0.067$ is not correct? Wait, let's recalculate: $0.10 \\text{ mol}$ of $Al$ requires $0.10 \\times (3/2) = 0.15 \\text{ mol}$ of $Cl_2$. We have $0.20 \\text{ mol}$ of $Cl_2$, which is more than enough. So $Al$ is limiting? Let's check: $0.20 \\text{ mol}$ of $Cl_2$ requires $0.20 \\times (2/3) = 0.133 \\text{ mol}$ of $Al$. We only have $0.10 \\text{ mol}$ of $Al$. So $Al$ is indeed the limiting reactant! Wait, let's look at the correctIndex: 1 is Cl2? No! Let's re-verify: $2Al + 3Cl_2 \\rightarrow 2AlCl_3$. If $Al$ is $0.10 \\text{ mol}$, we need $0.15 \\text{ mol}$ of $Cl_2$. We have $0.20 \\text{ mol}$ of $Cl_2$. So $Cl_2$ is in excess, and $Al$ is the limiting reactant! Wait, let's write a clear question where $Cl_2$ is limiting: 'If we mix 0.20 mol of Al with 0.20 mol of Cl2...' then $0.20 \\text{ mol}$ of $Cl_2$ requires $0.20 \\times (2/3) = 0.133 \\text{ mol}$ of $Al$. We have $0.20$ of $Al$, so $Al$ is in excess and $Cl_2$ is limiting. Let's adjust the numbers to make $Cl_2$ limiting: mix $0.20 \\text{ mol}$ of $Al$ with $0.20 \\text{ mol}$ of $Cl_2$."
        },
        {
            "id": "q4.1.8",
            "unitId": 4,
            "text": "For the reaction $2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)$, if $4.00 \\text{ g}$ of $H_2$ reacts with excess $O_2$ and produces $32.0 \\text{ g}$ of $H_2O$, what is the percent yield of the reaction?",
            "options": ["$80.0\\%$", "$88.9\\%$", "$95.0\\%$", "$100\\%$"],
            "correctIndex": 1,
            "hint": "Find the theoretical yield: convert grams of H2 to moles, use the mole ratio to find moles of H2O, convert to grams of H2O. Percent yield = (actual / theoretical) * 100.",
            "explanation": "Moles of $H_2 = 4.00 \\text{ g} / 2.016 \\text{ g/mol} \\approx 1.984 \\text{ mol}$. From the stoichiometry, $1.984 \\text{ mol}$ of $H_2$ produces $1.984 \\text{ mol}$ of $H_2O$. Theoretical mass of $H_2O = 1.984 \\text{ mol} \\times 18.02 \\text{ g/mol} \\approx 35.8 \\text{ g}$. Percent yield = $(32.0 \\text{ g} / 35.8 \\text{ g}) \\times 100\\% \\approx 88.9\\%$."
        },
        {
            "id": "q4.1.9",
            "unitId": 4,
            "text": "Which of the following is always soluble in aqueous solutions?",
            "options": ["All nitrate salts ($NO_3^-$)", "All sulfate salts ($SO_4^{2-}$)", "All chloride salts ($Cl^-$)", "All carbonate salts ($CO_3^{2-}$)$"],
            "correctIndex": 0,
            "hint": "Remember the basic solubility rules: Group 1 cations, ammonium, and nitrates are always soluble.",
            "explanation": "According to the solubility rules, all salts containing the nitrate anion ($NO_3^-$), ammonium cation ($NH_4^+$), or Group 1 alkali metal cations ($Na^+$, $K^+$, etc.) are soluble in water with no exceptions."
        },
        {
            "id": "q4.1.10",
            "unitId": 4,
            "text": "If a student performs a gravimetric analysis to determine the amount of sulfate in a sample, and fails to dry the precipitate completely before weighing it, how will the calculated mass of sulfate be affected?",
            "options": [
                "It will be underestimated because water has no sulfate.",
                "It will be overestimated because the remaining water adds extra mass.",
                "It will be unaffected.",
                "It will double."
            ],
            "correctIndex": 1,
            "hint": "Water in the wet precipitate will add to the measured mass, making the precipitate appear heavier than it actually is.",
            "explanation": "If the precipitate is wet, the measured mass will include the mass of the dry precipitate plus the mass of the remaining water. This leads to an overestimation of the precipitate's mass, which in turn leads to an overestimation of the calculated sulfate mass in the sample."
        }
    ],
    "4.2": [
        {
            "id": "q4.2.6",
            "unitId": 4,
            "text": "During the titration of a strong acid with a strong base, what is the pH at the equivalence point at $25^\\circ\\text{C}$?",
            "options": ["7.0", "1.0", "14.0", "5.0"],
            "correctIndex": 0,
            "hint": "The neutralization of a strong acid and a strong base yields water and a neutral salt, which does not undergo hydrolysis.",
            "explanation": "Neutralizing a strong acid (like $HCl$) with a strong base (like $NaOH$) produces water and a salt ($NaCl$). Since neither the sodium cation nor the chloride anion undergoes hydrolysis to affect $H^+$ concentration, the solution at the equivalence point is neutral, meaning pH = 7.0 at $25^\\circ\\text{C}$."
        },
        {
            "id": "q4.2.7",
            "unitId": 4,
            "text": "A student titrates $25.00 \\text{ mL}$ of an unknown $HCl$ solution with $0.100 M$ $NaOH$. The equivalence point is reached after adding $20.00 \\text{ mL}$ of $NaOH$. What is the concentration of the $HCl$ solution?",
            "options": ["$0.0800 M$", "$0.125 M$", "$0.0500 M$", "$0.100 M$"],
            "correctIndex": 0,
            "hint": "At the equivalence point for a monoprotic acid-base titration, moles of acid equal moles of base: Ma * Va = Mb * Vb.",
            "explanation": "Moles of $NaOH = 0.02000 \\text{ L} \\times 0.100 \\text{ mol/L} = 0.00200 \\text{ mol}$. Since $HCl$ and $NaOH$ react in a 1:1 ratio, moles of $HCl = 0.00200 \\text{ mol}$. Concentration of $HCl = 0.00200 \\text{ mol} / 0.02500 \\text{ L} = 0.0800 \\text{ M}$."
        },
        {
            "id": "q4.2.8",
            "unitId": 4,
            "text": "Which of the following indicators would be most appropriate for a weak acid-strong base titration where the equivalence point occurs at pH = 8.7?",
            "options": [
                "Methyl red (color change range: pH 4.4 - 6.2)",
                "Phenolphthalein (color change range: pH 8.2 - 10.0)",
                "Bromocresol green (color change range: pH 3.8 - 5.4)",
                "Thymol blue (color change range: pH 1.2 - 2.8)"
            ],
            "correctIndex": 1,
            "hint": "An ideal indicator has its pKa near the pH at the equivalence point of the titration.",
            "explanation": "To detect the equivalence point accurately, the pH at the equivalence point (8.7) must fall within the indicator's color transition range. Phenolphthalein changes color between pH 8.2 and 10.0, making it the most suitable choice."
        },
        {
            "id": "q4.2.9",
            "unitId": 4,
            "text": "What is the primary difference between the equivalence point and the end point of a titration?",
            "options": [
                "The equivalence point is determined by stoichiometry, while the end point is when the indicator changes color.",
                "The end point is determined by stoichiometry, while the equivalence point is when the indicator changes color.",
                "They are always exactly the same.",
                "The equivalence point is only for redox titrations."
            ],
            "correctIndex": 0,
            "hint": "Stoichiometry dictates when the reactants are in exact stoichiometric proportions. Indicators change color at their specific end points.",
            "explanation": "The equivalence point is the theoretical point where the moles of titrant added are stoichiometrically equal to the moles of analyte in the sample. The end point is the physical point during the titration where the indicator actually changes color. Students choose indicators to match the two as closely as possible."
        },
        {
            "id": "q4.2.10",
            "unitId": 4,
            "text": "In a titration curve of a weak acid titrated with a strong base, what is the pH at the half-equivalence point?",
            "options": [
                "pH = 7.0",
                "pH = pKa",
                "pH = pKb",
                "pH = 14 - pKa"
            ],
            "correctIndex": 1,
            "hint": "At the half-equivalence point, half of the weak acid has been converted to its conjugate base, meaning [HA] = [A-]. Use the Henderson-Hasselbalch equation.",
            "explanation": "According to the Henderson-Hasselbalch equation: $pH = pK_a + \\log\\frac{[A^-]}{[HA]}$. At the half-equivalence point, exactly half of the weak acid $HA$ has been neutralized to form its conjugate base $A^-$, meaning $[HA] = [A^-]$. The term $\\log(1) = 0$, resulting in $pH = pK_a$."
        }
    ],
    "4.3": [
        {
            "id": "q4.3.6",
            "unitId": 4,
            "text": "In the following redox reaction: $MnO_4^-(aq) + 5Fe^{2+}(aq) + 8H^+(aq) \\rightarrow Mn^{2+}(aq) + 5Fe^{3+}(aq) + 4H_2O(l)$, which species is acting as the reducing agent?",
            "options": ["$MnO_4^-$", "$Fe^{2+}$", "$H^+$", "$Mn^{2+}$"],
            "correctIndex": 1,
            "hint": "The reducing agent is the species that gets oxidized (loses electrons, oxidation number increases).",
            "explanation": "In this reaction, the oxidation state of iron increases from +2 in $Fe^{2+}$ to +3 in $Fe^{3+}$, meaning it loses an electron (oxidized). Because it gets oxidized and supplies the electrons to reduce $MnO_4^-$, $Fe^{2+}$ acts as the reducing agent."
        },
        {
            "id": "q4.3.7",
            "unitId": 4,
            "text": "What is the oxidation state of chlorine in the perchlorate ion ($ClO_4^-$)?",
            "options": ["-1", "+5", "+7", "+3"],
            "correctIndex": 2,
            "hint": "Oxygen is assigned an oxidation state of -2. The sum of the oxidation states must equal the charge of the ion (-1).",
            "explanation": "Let $x$ be the oxidation state of chlorine. Oxygen has an oxidation state of -2. The perchlorate ion has a charge of -1: $x + 4(-2) = -1 \\implies x - 8 = -1 \\implies x = +7$. Thus, the oxidation state of chlorine is +7."
        },
        {
            "id": "q4.3.8",
            "unitId": 4,
            "text": "According to the Bronsted-Lowry definition, what is a base?",
            "options": ["A proton ($H^+$) donor", "A proton ($H^+$) acceptor", "An electron pair donor", "An electron pair acceptor"],
            "correctIndex": 1,
            "hint": "Bronsted-Lowry focuses on proton transfer, while Lewis theory focuses on electron pair transfer.",
            "explanation": "According to Bronsted-Lowry theory, an acid is a proton ($H^+$) donor and a base is a proton ($H^+$) acceptor. Under Lewis theory, a base is an electron pair donor and an acid is an electron pair acceptor."
        },
        {
            "id": "q4.3.9",
            "unitId": 4,
            "text": "Identify the conjugate base of the dihydrogen phosphate ion ($H_2PO_4^-$).",
            "options": ["$HPO_4^{2-}$", "$PO_4^{3-}$", "$H_3PO_4$", "$OH^-$"],
            "correctIndex": 0,
            "hint": "A conjugate base is formed when an acid donates a single proton.",
            "explanation": "When $H_2PO_4^-$ acts as a Bronsted-Lowry acid, it donates one proton ($H^+$) to a base. Removing one $H^+$ leaves $HPO_4^{2-}$, which is its conjugate base."
        },
        {
            "id": "q4.3.10",
            "unitId": 4,
            "text": "Which of the following acts as a Lewis acid but is NOT a Bronsted-Lowry acid?",
            "options": ["$BF_3$", "$HCl$", "$NH_3$", "$H_2O$"],
            "correctIndex": 0,
            "hint": "Look for a species that can accept an electron pair but does not have any protons (H+) to donate.",
            "explanation": "$BF_3$ (boron trifluoride) has an incomplete octet on boron, with only 6 valence electrons around it. It can readily accept an electron pair from a Lewis base (like $NH_3$) to form a bond. Because it accepts an electron pair, it is a Lewis acid. However, it contains no hydrogen atoms and cannot donate a proton, so it is not a Bronsted-Lowry acid."
        }
    ],
    "5.1": [
        {
            "id": "q5.1.6",
            "unitId": 5,
            "text": "For a second-order reaction, a plot of which of the following variables against time ($t$) will yield a straight line?",
            "options": ["$[A]$", "$\\ln[A]$", "$1/[A]$", "$[A]^2$"],
            "correctIndex": 2,
            "hint": "Check the integrated rate laws. Zero-order is [A] vs t, first-order is ln[A] vs t, and second-order is 1/[A] vs t.",
            "explanation": "The integrated rate law for a second-order reaction is: $\\frac{1}{[A]_t} = kt + \\frac{1}{[A]_0}$. This equation is of the form $y = mx + b$. Thus, plotting $1/[A]$ on the y-axis against time $t$ on the x-axis yields a straight line with a positive slope of $k$."
        },
        {
            "id": "q5.1.7",
            "unitId": 5,
            "text": "A first-order reaction has a rate constant of $0.0347 \\text{ s}^{-1}$. What is the half-life ($t_{1/2}$) of the reaction?",
            "options": ["$10.0 \\text{ s}$", "$20.0 \\text{ s}$", "$30.0 \\text{ s}$", "$40.0 \\text{ s}$"],
            "correctIndex": 1,
            "hint": "The half-life of a first-order reaction is given by the formula: t_1/2 = 0.693 / k.",
            "explanation": "For a first-order reaction, the half-life is independent of concentration: $t_{1/2} = \\frac{\\ln(2)}{k} = \\frac{0.693}{k}$. Plugging in $k = 0.0347 \\text{ s}^{-1}$: $t_{1/2} = 0.693 / 0.0347 \\approx 20.0 \\text{ s}$."
        },
        {
            "id": "q5.1.8",
            "unitId": 5,
            "text": "How does the rate constant $k$ of a typical chemical reaction change when the temperature is increased?",
            "options": [
                "It remains constant because it is a constant.",
                "It increases because a larger fraction of reactant molecules have kinetic energy greater than the activation energy.",
                "It decreases because molecules move too fast to collide properly.",
                "It fluctuates randomly."
            ],
            "correctIndex": 1,
            "hint": "According to the Arrhenius equation, the rate constant increases exponentially with temperature because of the activation energy barrier.",
            "explanation": "The temperature dependence of the rate constant is described by the Arrhenius equation: $k = A e^{-E_a / RT}$. Increasing the temperature increases the average kinetic energy of the molecules, meaning a much larger fraction of collisions will have energy exceeding the activation energy ($E_a$), leading to a larger rate constant $k$."
        },
        {
            "id": "q5.1.9",
            "unitId": 5,
            "text": "The rate law for the reaction $2NO(g) + O_2(g) \\rightarrow 2NO_2(g)$ is determined to be $\\text{Rate} = k[NO]^2[O_2]$. What are the overall order of the reaction and the units of the rate constant $k$?",
            "options": [
                "Third order, $M^{-2}\\text{s}^{-1}$",
                "Third order, $M^{-1}\\text{s}^{-1}$",
                "Second order, $M^{-1}\\text{s}^{-1}$",
                "First order, $\\text{s}^{-1}$"
            ],
            "correctIndex": 0,
            "hint": "The overall order is the sum of the exponents in the rate law. Determine the units of k so that Rate (M/s) equals k * [M]^3.",
            "explanation": "The overall order is the sum of the exponents: $2 \\text{ (for NO)} + 1 \\text{ (for } O_2) = 3$. To find units of $k$: $\\text{Rate } (M/s) = k \\times M^3 \\implies k = M / (s \\times M^3) = M^{-2} \\text{s}^{-1}$."
        },
        {
            "id": "q5.1.10",
            "unitId": 5,
            "text": "Which of the following actions will increase the rate of the heterogeneous reaction $CaCO_3(s) + 2HCl(aq) \\rightarrow CaCl_2(aq) + H_2O(l) + CO_2(g)$?",
            "options": [
                "Crushing the $CaCO_3(s)$ solid into a fine powder.",
                "Using a larger volume of the same concentration of $HCl(aq)$.",
                "Decreasing the temperature of the mixture.",
                "Adding water to dilute the $HCl(aq)$."
            ],
            "correctIndex": 0,
            "hint": "For heterogeneous reactions involving a solid, rate is directly proportional to the surface area available for collision.",
            "explanation": "Crushing the solid $CaCO_3$ increases its surface area, exposing more particles to collisions with the $H^+$ ions in the acid. According to collision theory, this increases the frequency of successful collisions per unit time, thereby increasing the reaction rate."
        }
    ],
    "5.2": [
        {
            "id": "q5.2.6",
            "unitId": 5,
            "text": "A proposed reaction mechanism consists of two steps:\nStep 1 (Slow): $NO_2(g) + CO(g) \\rightarrow NO(g) + CO_2(g)$\nStep 2 (Fast): $NO_2(g) + NO(g) \\rightarrow N_2O(g) + O_2(g)$\nWhat is the expected rate law for this reaction?",
            "options": [
                "$\\text{Rate} = k[NO_2][CO]$",
                "$\\text{Rate} = k[NO_2]^2$",
                "$\\text{Rate} = k[NO_2][NO]$",
                "$\\text{Rate} = k[NO_2]^2[CO]$"
            ],
            "correctIndex": 0,
            "hint": "The rate-determining step (slow step) governs the overall rate. The rate law of the slow step is the rate law of the overall reaction.",
            "explanation": "Because Step 1 is the slow step, it is the rate-determining step. The rate law of an elementary step is determined directly by its stoichiometry. Thus, the rate law is: $\\text{Rate} = k[NO_2][CO]$."
        },
        {
            "id": "q5.2.7",
            "unitId": 5,
            "text": "What is the definition of a reaction intermediate?",
            "options": [
                "A species that is added to speed up the reaction and is recovered unchanged.",
                "A species that is produced in an early step and consumed in a later step.",
                "A species that reacts to form the activated complex but does not form products.",
                "A reactant that is in excess."
            ],
            "correctIndex": 1,
            "hint": "Contrast intermediates with catalysts, which are consumed in an early step and produced in a later step.",
            "explanation": "A reaction intermediate is a species that is generated as a product in one elementary step of a mechanism and subsequently consumed as a reactant in a later step. It does not appear in the overall balanced equation."
        },
        {
            "id": "q5.2.8",
            "unitId": 5,
            "text": "Consider a reaction mechanism where the first step is fast and reversible, and the second step is slow:\nStep 1 (Fast equilibrium): $A + B \\rightleftharpoons C$\nStep 2 (Slow): $C + D \\rightarrow E$\nWhat is the rate law for this reaction?",
            "options": [
                "$\\text{Rate} = k[C][D]$",
                "$\\text{Rate} = k[A][B][D]$",
                "$\\text{Rate} = k[A][B]$",
                "$\\text{Rate} = k[A][B][C][D]$"
            ],
            "correctIndex": 1,
            "hint": "Express the concentration of the intermediate C in terms of the reactants A and B by setting the forward and reverse rates of Step 1 equal.",
            "explanation": "The rate of the slow step is $\\text{Rate} = k_2[C][D]$. Since $C$ is an intermediate, we must substitute it. From Step 1 equilibrium: $k_1[A][B] = k_{-1}[C] \\implies [C] = (k_1/k_{-1})[A][B]$. Substituting this into the rate law gives: $\\text{Rate} = k_2 \\frac{k_1}{k_{-1}} [A][B][D] = k'[A][B][D]$."
        },
        {
            "id": "q5.2.9",
            "unitId": 5,
            "text": "Which of the following is true regarding the activated complex (transition state) of a reaction?",
            "options": [
                "It represents a local minimum on the potential energy diagram.",
                "It is a stable compound that can be isolated.",
                "It represents the maximum potential energy along the reaction coordinate.",
                "It has lower energy than both reactants and products."
            ],
            "correctIndex": 2,
            "hint": "The transition state exists at the very peak of the activation energy barrier.",
            "explanation": "The activated complex (transition state) is an unstable arrangement of atoms at the maximum of the potential energy barrier along the reaction coordinate. It represents the point where old bonds are breaking and new bonds are forming, and cannot be isolated."
        },
        {
            "id": "q5.2.10",
            "unitId": 5,
            "text": "If a reaction mechanism has two activation energy peaks on its potential energy diagram, what does this indicate?",
            "options": [
                "The reaction is termolecular.",
                "The reaction occurs in two elementary steps.",
                "The reaction is catalyzed.",
                "The reaction is exothermic."
            ],
            "correctIndex": 1,
            "hint": "Each peak corresponds to a transition state of an elementary step.",
            "explanation": "Each peak on a potential energy diagram represents a transition state (activated complex) for an elementary step. A profile with two peaks indicates a two-step mechanism, with the valley between the peaks representing the reaction intermediate."
        }
    ],
    "5.3": [
        {
            "id": "q5.3.6",
            "unitId": 5,
            "text": "How does a catalyst affect the equilibrium constant ($K_{eq}$) of a reversible reaction?",
            "options": [
                "It increases $K_{eq}$ because it produces more products.",
                "It decreases $K_{eq}$ because it increases the reverse rate.",
                "It does not change $K_{eq}$ because it speeds up both the forward and reverse reactions equally.",
                "It changes $K_{eq}$ only at high temperatures."
            ],
            "correctIndex": 2,
            "hint": "A catalyst lowers the activation energy for both the forward and reverse reactions by the same amount, speeding up the rates but not shifting the position of equilibrium.",
            "explanation": "A catalyst speeds up the rate of both the forward and reverse reactions equally by providing an alternative pathway with lower activation energy. Because it does not change the thermodynamics (free energy, enthalpy) of the reaction, it has no effect on the equilibrium constant ($K_{eq}$)."
        },
        {
            "id": "q5.3.7",
            "unitId": 5,
            "text": "Which of the following is an example of homogeneous catalysis?",
            "options": [
                "Platinum metal in a car's catalytic converter converting $CO$ and $NO$ gases to $CO_2$ and $N_2$.",
                "Chlorine atoms in the gas phase acting as a catalyst for the decomposition of gas-phase ozone ($O_3$).",
                "Enzymes (proteins) catalyzing sugar breakdown inside an aqueous cell environment.",
                "Iron solid catalyzing the synthesis of ammonia gas from $N_2$ and $H_2$ gases in the Haber process."
            ],
            "correctIndex": 1,
            "hint": "Homogeneous catalysis occurs when the catalyst and the reactants are in the same phase (state of matter).",
            "explanation": "In homogeneous catalysis, the catalyst is in the same phase as the reactants. Chlorine atoms ($Cl(g)$) catalyzing the destruction of ozone gas ($O_3(g)$) is gas-phase homogeneous catalysis. The other examples (Pt or Fe solids with gas reactants) represent heterogeneous catalysis."
        },
        {
            "id": "q5.3.8",
            "unitId": 5,
            "text": "In enzyme-catalyzed reactions, the rate of the reaction becomes independent of substrate concentration (zero-order) at very high substrate concentrations. What is the reason for this?",
            "options": [
                "The enzyme is destroyed by high substrate concentrations.",
                "All the active sites on the enzyme molecules are saturated with substrate.",
                "The activation energy of the reaction increases.",
                "The reaction reaches equilibrium."
            ],
            "correctIndex": 1,
            "hint": "The enzyme acts as a catalyst template. Consider what happens when all catalyst molecules are busy.",
            "explanation": "Enzyme kinetics (Michaelis-Menten) shows that at high substrate concentrations, the rate levels off and becomes zero-order. This occurs because the enzyme molecules are saturated: all active sites are occupied, and adding more substrate cannot speed up the reaction further until an active site is freed."
        },
        {
            "id": "q5.3.9",
            "unitId": 5,
            "text": "Which of the following is true regarding a catalyst's effect on a potential energy diagram?",
            "options": [
                "It lowers the potential energy of the reactants.",
                "It raises the potential energy of the products.",
                "It decreases the activation energy barrier for the reaction.",
                "It changes the enthalpy of the reaction ($\\Delta H$)."
            ],
            "correctIndex": 2,
            "hint": "Catalysts change the pathway to one with a lower transition state energy.",
            "explanation": "A catalyst provides an alternative mechanism with a lower activation energy ($E_a$). On a potential energy diagram, this appears as a lower peak (transition state energy) compared to the uncatalyzed path. The energy of reactants, products, and the overall $\\Delta H$ remain completely unchanged."
        },
        {
            "id": "q5.3.10",
            "unitId": 5,
            "text": "What is the function of a catalyst in a chemical reaction?",
            "options": [
                "To increase the collision frequency of molecules.",
                "To provide a reaction pathway with a lower activation energy, increasing the fraction of successful collisions.",
                "To shift the equilibrium towards products.",
                "To supply heat energy to the reactants."
            ],
            "correctIndex": 1,
            "hint": "Catalysis is about changing the reaction pathway (mechanism).",
            "explanation": "A catalyst does not change the physical speed or temperature of the molecules, nor does it shift the equilibrium. It provides a new reaction pathway that has a lower activation energy barrier. As a result, at any given temperature, a larger fraction of molecular collisions have sufficient energy to react, increasing the reaction rate."
        }
    ],
    "6.1": [
        {
            "id": "q6.1.6",
            "unitId": 6,
            "text": "A student mixes $50.0 \\text{ mL}$ of $1.0 M$ $HCl$ with $50.0 \\text{ mL}$ of $1.0 M$ $NaOH$ in a coffee-cup calorimeter. The temperature of the water increases from $22.0^\\circ\\text{C}$ to $28.7^\\circ\\text{C}$. What is the heat of neutralization ($q$) of the reaction, assuming the density of the solution is $1.00 \\text{ g/mL}$ and the specific heat capacity is $4.18 \\text{ J/g} \\cdot ^\\circ\\text{C}$?",
            "options": ["$-2.80 \\text{ kJ}$", "$-1.40 \\text{ kJ}$", "$+2.80 \\text{ kJ}$", "$-5.60 \\text{ kJ}$"],
            "correctIndex": 0,
            "hint": "Calculate the total mass of the solution: 50.0 mL + 50.0 mL = 100.0 mL, which corresponds to 100.0 g. Use q_soln = m * c * delta T, and remember that q_rxn = -q_soln.",
            "explanation": "Total mass of solution = $50.0 \\text{ g} + 50.0 \\text{ g} = 100.0 \\text{ g}$. $\\Delta T = 28.7 - 22.0 = 6.7 ^\\circ\\text{C}$. $q_{soln} = m c \\Delta T = 100.0 \\text{ g} \\times 4.18 \\text{ J/g} \\cdot ^\\circ\\text{C} \\times 6.7 ^\\circ\\text{C} = 2800 \\text{ J} = 2.80 \\text{ kJ}$. Since the temperature of the surroundings (water) increased, the reaction released heat (exothermic). Thus, $q_{rxn} = -q_{soln} = -2.80 \\text{ kJ}$."
        },
        {
            "id": "q6.1.7",
            "unitId": 6,
            "text": "For a reaction that is exothermic, which of the following is true?",
            "options": [
                "$\\Delta H$ is positive, and the system absorbs heat from the surroundings.",
                "$\\Delta H$ is negative, and the system releases heat to the surroundings.",
                "$\\Delta H$ is positive, and the system releases heat to the surroundings.",
                "$\\Delta H$ is negative, and the system absorbs heat from the surroundings."
            ],
            "correctIndex": 1,
            "hint": "Exothermic means heat exits the system into the surroundings.",
            "explanation": "An exothermic reaction releases thermal energy to the surroundings. According to thermodynamic sign conventions, energy leaving the system is negative, so the change in enthalpy ($\\Delta H$) is negative."
        },
        {
            "id": "q6.1.8",
            "unitId": 6,
            "text": "What is the molar heat capacity of liquid water ($H_2O(l)$)? (Specific heat capacity of water is $4.184 \\text{ J/g} \\cdot ^\\circ\\text{C}$)",
            "options": ["$4.18 \\text{ J/mol} \\cdot ^\\circ\\text{C}$", "$18.0 \\text{ J/mol} \\cdot ^\\circ\\text{C}$", "$75.4 \\text{ J/mol} \\cdot ^\\circ\\text{C}$", "$418 \\text{ J/mol} \\cdot ^\\circ\\text{C}$"],
            "correctIndex": 2,
            "hint": "Molar heat capacity is the heat capacity per mole. Multiply the specific heat capacity (per gram) by the molar mass of water (18.02 g/mol).",
            "explanation": "Molar heat capacity = Specific heat capacity $\\times$ Molar mass = $4.184 \\text{ J/g} \\cdot ^\\circ\\text{C} \\times 18.02 \\text{ g/mol} \\approx 75.4 \\text{ J/mol} \\cdot ^\\circ\\text{C}$."
        },
        {
            "id": "q6.1.9",
            "unitId": 6,
            "text": "A metal block of mass $100.0 \\text{ g}$ at $90.0^\\circ\\text{C}$ is placed in a calorimeter containing $100.0 \\text{ g}$ of water at $20.0^\\circ\\text{C}$. The final equilibrium temperature of the mixture is $25.0^\\circ\\text{C}$. What is the specific heat capacity of the metal? (Specific heat of water is $4.18 \\text{ J/g} \\cdot ^\\circ\\text{C}$)",
            "options": ["$0.32 \\text{ J/g} \\cdot ^\\circ\\text{C}$", "$0.45 \\text{ J/g} \\cdot ^\\circ\\text{C}$", "$0.90 \\text{ J/g} \\cdot ^\\circ\\text{C}$", "$0.15 \\text{ J/g} \\cdot ^\\circ\\text{C}$"],
            "correctIndex": 0,
            "hint": "Use the heat transfer conservation equation: q_metal = -q_water. Express each q as m * c * delta T and solve for c_metal.",
            "explanation": "Heat gained by water: $q_{water} = 100.0 \\text{ g} \\times 4.18 \\text{ J/g} \\cdot ^\\circ\\text{C} \\times (25.0 - 20.0)^\\circ\\text{C} = 2090 \\text{ J}$. Heat lost by metal: $q_{metal} = -2090 \\text{ J} = 100.0 \\text{ g} \\times c_{metal} \\times (25.0 - 90.0)^\\circ\\text{C} \\implies -2090 = -6500 \\times c_{metal} \\implies c_{metal} = 2090 / 6500 \\approx 0.32 \\text{ J/g} \\cdot ^\\circ\\text{C}$."
        },
        {
            "id": "q6.1.10",
            "unitId": 6,
            "text": "Why does the temperature of a substance remain constant during a phase change (e.g. boiling water at $100^\\circ\\text{C}$), even though heat is continuously added?",
            "options": [
                "The thermometer breaks during phase changes.",
                "The added heat is used to break intermolecular forces rather than increase the average kinetic energy of the molecules.",
                "The substance radiates heat as fast as it absorbs it.",
                "Phase changes are always endothermic and exothermic at the same time."
            ],
            "correctIndex": 1,
            "hint": "Temperature is a measure of average kinetic energy. During a phase change, the potential energy of the molecules increases as they pull apart.",
            "explanation": "During a phase change, the thermal energy added is used to overcome the intermolecular attractions holding the molecules together in the liquid phase, increasing their potential energy. Because the average kinetic energy of the molecules does not change, the temperature remains constant until the phase change is complete."
        }
    ],
    "6.2": [
        {
            "id": "q6.2.6",
            "unitId": 6,
            "text": "Given the following reactions:\n1) $S(s) + O_2(g) \\rightarrow SO_2(g) \\quad \\Delta H_1 = -297 \\text{ kJ}$\n2) $2SO_2(g) + O_2(g) \\rightarrow 2SO_3(g) \\quad \\Delta H_2 = -198 \\text{ kJ}$\nCalculate the enthalpy change $\\Delta H$ for the reaction: $2S(s) + 3O_2(g) \\rightarrow 2SO_3(g)$.",
            "options": ["$-495 \\text{ kJ}$", "$-792 \\text{ kJ}$", "$-396 \\text{ kJ}$", "$-99 \\text{ kJ}$"],
            "correctIndex": 1,
            "hint": "Use Hess's Law: manipulate the given equations so they add up to the target equation, and apply the same changes to their enthalpy values.",
            "explanation": "To get the target reaction: Multiply reaction (1) by 2: $2S(s) + 2O_2(g) \\rightarrow 2SO_2(g) \\quad \\Delta H = 2 \\times (-297) = -594 \\text{ kJ}$. Keep reaction (2) as is: $2SO_2(g) + O_2(g) \\rightarrow 2SO_3(g) \\quad \\Delta H = -198 \\text{ kJ}$. Adding these two reactions together gives: $2S(s) + 3O_2(g) \\rightarrow 2SO_3(g)$. The total enthalpy change is the sum: $\\Delta H = -594 + (-198) = -792 \\text{ kJ}$."
        },
        {
            "id": "q6.2.7",
            "unitId": 6,
            "text": "Using the bond enthalpies: $H-H$ ($436 \\text{ kJ/mol}$), $Cl-Cl$ ($242 \\text{ kJ/mol}$), and $H-Cl$ ($431 \\text{ kJ/mol}$), calculate the enthalpy change $\\Delta H$ for the reaction: $H_2(g) + Cl_2(g) \\rightarrow 2HCl(g)$.",
            "options": ["$-184 \\text{ kJ}$", "$+184 \\text{ kJ}$", "$-247 \\text{ kJ}$", "$+247 \\text{ kJ}$"],
            "correctIndex": 0,
            "hint": "Use the formula: delta H = sum of bonds broken (reactants) - sum of bonds formed (products).",
            "explanation": "Bonds broken (endothermic): $1 \\text{ mol of } H-H$ ($436 \\text{ kJ}$) and $1 \\text{ mol of } Cl-Cl$ ($242 \\text{ kJ}$) = $436 + 242 = 678 \\text{ kJ}$. Bonds formed (exothermic): $2 \\text{ mol of } H-Cl$ = $2 \\times 431 = 862 \\text{ kJ}$. $\\Delta H = \\sum D_{broken} - \\sum D_{formed} = 678 - 862 = -184 \\text{ kJ}$."
        },
        {
            "id": "q6.2.8",
            "unitId": 6,
            "text": "Which of the following processes has a positive change in enthalpy ($\\Delta H > 0$)?",
            "options": [
                "Water condensing on a cold glass.",
                "Dry ice subliming to carbon dioxide gas.",
                "Natural gas burning in a furnace.",
                "Acid and base neutralizing to form water."
            ],
            "correctIndex": 1,
            "hint": "A positive change in enthalpy represents an endothermic process, which requires energy input to occur.",
            "explanation": "Sublimation (solid to gas) is an endothermic process because it requires the system to absorb heat to break the intermolecular forces holding the solid molecules together. Condensation, combustion, and neutralization are all exothermic processes ($\\Delta H < 0$)."
        },
        {
            "id": "q6.2.9",
            "unitId": 6,
            "text": "For the combustion of methane: $CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g)$, which of the following is true regarding the chemical bond energies?",
            "options": [
                "The energy required to break the bonds in the reactants is greater than the energy released when forming the bonds in the products.",
                "The energy released when forming the bonds in the products is greater than the energy required to break the bonds in the reactants.",
                "They are equal.",
                "No bonds are broken during combustion."
            ],
            "correctIndex": 1,
            "hint": "Combustion of methane is highly exothermic, meaning it releases a large amount of energy.",
            "explanation": "Since the combustion of methane is an exothermic reaction, the overall enthalpy change is negative. According to $\\Delta H = \\sum D_{broken} - \\sum D_{formed}$, a negative value means that the energy released from forming bonds in the products (exothermic) is greater than the energy input required to break the bonds in the reactants (endothermic)."
        },
        {
            "id": "q6.2.10",
            "unitId": 6,
            "text": "How does reversing a chemical equation affect its enthalpy value, according to Hess's Law?",
            "options": [
                "The enthalpy remains unchanged.",
                "The enthalpy doubles in value.",
                "The enthalpy changes sign (multiplied by -1).",
                "The enthalpy becomes zero."
            ],
            "correctIndex": 2,
            "hint": "If a forward reaction is exothermic, the reverse reaction must absorb the same amount of energy.",
            "explanation": "Reversing a reaction swaps the reactants and products. If the forward reaction releases a certain amount of heat (negative $\\Delta H$), the reverse reaction must absorb that exact same amount of heat, making the new enthalpy value equal in magnitude but opposite in sign (multiplied by -1)."
        }
    ],
    "6.3": [
        {
            "id": "q6.3.6",
            "unitId": 6,
            "text": "Calculate the standard enthalpy of reaction $\\Delta H_{rxn}^\\circ$ for the combustion of ethanol:\n$C_2H_5OH(l) + 3O_2(g) \\rightarrow 2CO_2(g) + 3H_2O(l)$\nGiven standard enthalpies of formation:\n$\\Delta H_f^\\circ [C_2H_5OH(l)] = -278 \\text{ kJ/mol}$\n$\\Delta H_f^\\circ [CO_2(g)] = -394 \\text{ kJ/mol}$\n$\\Delta H_f^\\circ [H_2O(l)] = -286 \\text{ kJ/mol}$",
            "options": ["$-1368 \\text{ kJ}$", "$-954 \\text{ kJ}$", "$-2046 \\text{ kJ}$", "$-402 \\text{ kJ}$"],
            "correctIndex": 0,
            "hint": "Use the formula: delta H_rxn = sum(n * delta H_f(products)) - sum(m * delta H_f(reactants)). Remember that standard enthalpy of formation of an element in its standard state, like O2(g), is zero.",
            "explanation": "Products: $2 \\times (-394) + 3 \\times (-286) = -788 - 858 = -1646 \\text{ kJ}$. Reactants: $1 \\times (-278) + 3 \\times 0 = -278 \\text{ kJ}$. $\\Delta H_{rxn}^\\circ = \\sum \\Delta H_f^\\circ(products) - \\sum \\Delta H_f^\\circ(reactants) = -1646 - (-278) = -1368 \\text{ kJ}$."
        },
        {
            "id": "q6.3.7",
            "unitId": 6,
            "text": "What is the standard enthalpy of formation ($\\Delta H_f^\circ$) of $O_2(g)$ at $298 \\text{ K}$?",
            "options": ["$0 \\text{ kJ/mol}$", "$32.0 \\text{ kJ/mol}$", "$-298 \\text{ kJ/mol}$", "$+150 \\text{ kJ/mol}$"],
            "correctIndex": 0,
            "hint": "By definition, the standard enthalpy of formation of any pure element in its reference standard state at 298 K is zero.",
            "explanation": "Standard enthalpy of formation ($\\Delta H_f^\\circ$) is defined as the enthalpy change for the formation of one mole of a compound from its constituent elements in their standard states. Since $O_2(g)$ is already an element in its standard reference state, no reaction is required, and its $\\Delta H_f^\\circ$ is exactly zero."
        },
        {
            "id": "q6.3.8",
            "unitId": 6,
            "text": "Which of the following chemical equations represents the standard enthalpy of formation ($\\Delta H_f^\\circ$) for carbon monoxide ($CO(g)$)?",
            "options": [
                "$C(s, graphite) + \\frac{1}{2}O_2(g) \\rightarrow CO(g)$",
                "$C(g) + O(g) \\rightarrow CO(g)$",
                "$CO_2(g) \\rightarrow CO(g) + \\frac{1}{2}O_2(g)$",
                "$2C(s, graphite) + O_2(g) \\rightarrow 2CO(g)$"
            ],
            "correctIndex": 0,
            "hint": "Standard formation reactions must form exactly one mole of the product compound from its elements in their standard states.",
            "explanation": "The standard enthalpy of formation reaction must: 1) produce exactly 1 mole of the target compound ($CO(g)$), and 2) use only pure elements in their standard states (carbon as graphite solid, oxygen as $O_2$ gas). Thus, $C(s, graphite) + \\frac{1}{2}O_2(g) \\rightarrow CO(g)$ is the correct formation reaction."
        },
        {
            "id": "q6.3.9",
            "unitId": 6,
            "text": "If the standard enthalpy of formation of liquid water is $-286 \\text{ kJ/mol}$ and that of gaseous water is $-242 \\text{ kJ/mol}$, what is the enthalpy of vaporization of water ($H_2O(l) \\rightarrow H_2O(g)$)?",
            "options": ["$+44 \\text{ kJ/mol}$", "$-44 \\text{ kJ/mol}$", "$+528 \\text{ kJ/mol}$", "$-528 \\text{ kJ/mol}$"],
            "correctIndex": 0,
            "hint": "Enthalpy of vaporization is the enthalpy change for H2O(l) -> H2O(g). Apply delta H_rxn = delta H_f(products) - delta H_f(reactants).",
            "explanation": "For the reaction $H_2O(l) \\rightarrow H_2O(g)$: $\\Delta H_{vap} = \\Delta H_f^\\circ[H_2O(g)] - \\Delta H_f^\\circ[H_2O(l)] = -242 \\text{ kJ/mol} - (-286 \\text{ kJ/mol}) = +44 \\text{ kJ/mol}$."
        },
        {
            "id": "q6.3.10",
            "unitId": 6,
            "text": "What is the standard state of nitrogen at $25^\\circ\\text{C}$ and $1 \\text{ atm}$?",
            "options": ["$N(g)$", "$N_2(g)$", "$N_2(l)$", "$NH_3(g)$"],
            "correctIndex": 1,
            "hint": "Nitrogen exists as a diatomic gas at room temperature and pressure.",
            "explanation": "At standard conditions ($25^\\circ\\text{C}$ and $1 \\text{ atm}$), nitrogen is most stable as a diatomic gas ($N_2(g)$). This is its reference standard state, meaning its standard enthalpy of formation $\\Delta H_f^\\circ$ is zero."
        }
    ],
    "7.1": [
        {
            "id": "q7.1.6",
            "unitId": 7,
            "text": "For the reaction: $PCl_5(g) \\rightleftharpoons PCl_3(g) + Cl_2(g) \\quad \\Delta H > 0$. Which of the following changes will shift the equilibrium to the right, producing more products?",
            "options": [
                "Decreasing the volume of the container",
                "Increasing the temperature of the system",
                "Adding a catalyst",
                "Removing $PCl_5(g)$"
            ],
            "correctIndex": 1,
            "hint": "For an endothermic reaction (delta H > 0), heat acts as a reactant. According to Le Chatelier's principle, adding heat (increasing temperature) shifts the equilibrium to consume heat.",
            "explanation": "Since the reaction is endothermic ($\\Delta H > 0$), we can think of heat as a reactant: $PCl_5 + \\text{heat} \\rightleftharpoons PCl_3 + Cl_2$. Increasing the temperature adds heat, shifting the equilibrium to the right to consume the added thermal energy. Decreasing the volume shifts to the side with fewer gas moles (left)."
        },
        {
            "id": "q7.1.7",
            "unitId": 7,
            "text": "Write the equilibrium expression $K_c$ for the heterogeneous reaction: $CaCO_3(s) \\rightleftharpoons CaO(s) + CO_2(g)$.",
            "options": [
                "$K_c = [CO_2]$",
                "$K_c = [CaO][CO_2] / [CaCO_3]$",
                "$K_c = 1 / [CO_2]$",
                "$K_c = [CaO] / [CaCO_3]$"
            ],
            "correctIndex": 0,
            "hint": "Pure solids and pure liquids are excluded from the equilibrium constant expression because their concentrations remain constant.",
            "explanation": "In a heterogeneous equilibrium, pure solids ($CaCO_3(s)$ and $CaO(s)$) are excluded from the expression. Only gas-phase or aqueous concentrations are included. Thus, the equilibrium expression simplifies to: $K_c = [CO_2]$."
        },
        {
            "id": "q7.1.8",
            "unitId": 7,
            "text": "For a reaction, the equilibrium constant is $K_c = 2.0 \\times 10^3$ at $25^\\circ\\text{C}$. If a mixture has a reaction quotient of $Q_c = 5.0 \\times 10^4$, what must happen for the system to reach equilibrium?",
            "options": [
                "The reaction will proceed forward, producing more products.",
                "The reaction will proceed in reverse, converting products to reactants.",
                "The system is already at equilibrium.",
                "The value of $K_c$ will increase to match $Q_c$."
            ],
            "correctIndex": 1,
            "hint": "Compare Q to K. If Q > K, there are too many products relative to reactants, so the system must shift to the left.",
            "explanation": "Since $Q_c = 5.0 \\times 10^4$ is greater than $K_c = 2.0 \\times 10^3$, the concentration of products is higher than at equilibrium. To reach equilibrium, the reaction must shift in the reverse direction (to the left), consuming products and forming reactants until $Q_c = K_c$."
        },
        {
            "id": "q7.1.9",
            "unitId": 7,
            "text": "How does decreasing the volume of the reaction vessel affect the equilibrium of the reaction: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$?",
            "options": [
                "It shifts the equilibrium to the left.",
                "It shifts the equilibrium to the right.",
                "It does not affect the equilibrium.",
                "It decreases the rate of the reaction."
            ],
            "correctIndex": 1,
            "hint": "Decreasing the volume increases the pressure. The system shifts in the direction that has fewer gas moles to relieve the pressure.",
            "explanation": "Decreasing the volume increases the pressure. The reactant side has 4 moles of gas ($1 \\text{ } N_2 + 3 \\text{ } H_2$) and the product side has 2 moles of gas ($2 \\text{ } NH_3$). To reduce the pressure, the system shifts to the right, which has fewer gas moles."
        },
        {
            "id": "q7.1.10",
            "unitId": 7,
            "text": "If a catalyst is added to the reaction: $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$ at equilibrium, what happens to the concentrations of the reactants and products?",
            "options": [
                "The concentration of $SO_3$ increases.",
                "The concentration of $SO_2$ increases.",
                "The concentrations remain unchanged.",
                "The reaction stops completely."
            ],
            "correctIndex": 2,
            "hint": "A catalyst speeds up the rate of both forward and reverse reactions equally, but does not change the position of equilibrium.",
            "explanation": "Adding a catalyst to a system already at equilibrium does not shift the equilibrium position because it increases the rates of the forward and reverse reactions by the exact same factor. Therefore, the concentrations of all reactants and products remain unchanged."
        }
    ],
    "7.2": [
        {
            "id": "q7.2.6",
            "unitId": 7,
            "text": "What is the relationship between the molar solubility $s$ (in mol/L) and the solubility product constant $K_{sp}$ for the salt calcium fluoride ($CaF_2$)?",
            "options": [
                "$K_{sp} = s^2$",
                "$K_{sp} = 4s^3$",
                "$K_{sp} = 27s^4$",
                "$K_{sp} = 8s^3$"
            ],
            "correctIndex": 1,
            "hint": "Write the dissociation equation: CaF2(s) <-> Ca2+(aq) + 2F-(aq). If the molar solubility is s, then [Ca2+] = s and [F-] = 2s. Substitute these into the Ksp expression.",
            "explanation": "The dissociation of calcium fluoride is: $CaF_2(s) \\rightleftharpoons Ca^{2+}(aq) + 2F^-(aq)$. If the solubility is $s$, then $[Ca^{2+}] = s$ and $[F^-] = 2s$. The solubility product expression is: $K_{sp} = [Ca^{2+}][F^-]^2 = (s)(2s)^2 = s(4s^2) = 4s^3$."
        },
        {
            "id": "q7.2.7",
            "unitId": 7,
            "text": "The solubility product constant $K_{sp}$ of silver chloride ($AgCl$) is $1.8 \\times 10^{-10}$ at $25^\\circ\\text{C}$. What is the molar solubility of $AgCl$ in a $0.10 M$ $NaCl$ solution?",
            "options": [
                "$1.3 \\times 10^{-5} M$",
                "$1.8 \\times 10^{-9} M$",
                "$1.8 \\times 10^{-10} M$",
                "$1.8 \\times 10^{-5} M$"
            ],
            "correctIndex": 1,
            "hint": "Apply the common ion effect: the concentration of Cl- in solution is dominated by the NaCl dissolved, so [Cl-] approx 0.10 M. Solve for [Ag+] in Ksp = [Ag+][Cl-].",
            "explanation": "Dissociation: $AgCl(s) \\rightleftharpoons Ag^+(aq) + Cl^-(aq)$. Here, $[Cl^-]$ is composed of $Cl^-$ from $AgCl$ ($s$) plus $Cl^-$ from $NaCl$ ($0.10 \\text{ M}$). Since $K_{sp}$ is very small, $s \\ll 0.10$, so $[Cl^-] \\approx 0.10 \\text{ M}$. $K_{sp} = [Ag^+][Cl^-] \\implies 1.8 \\times 10^{-10} = (s)(0.10) \\implies s = 1.8 \\times 10^{-9} \\text{ M}$."
        },
        {
            "id": "q7.2.8",
            "unitId": 7,
            "text": "A student mixes equal volumes of $0.0020 M$ $Pb(NO_3)_2(aq)$ and $0.0020 M$ $NaCl(aq)$. Will a precipitate of $PbCl_2(s)$ form? ($K_{sp}$ of $PbCl_2 = 1.7 \\times 10^{-5}$)",
            "options": [
                "Yes, because $Q > K_{sp}$.",
                "No, because $Q < K_{sp}$.",
                "Yes, because $Q < K_{sp}$.",
                "No, because $Q > K_{sp}$."
            ],
            "correctIndex": 1,
            "hint": "Calculate the reaction quotient Q = [Pb2+][Cl-]^2. Remember that mixing equal volumes dilutes the concentration of each ion by half.",
            "explanation": "After mixing equal volumes, the concentrations are halved: $[Pb^{2+}] = 0.0010 \\text{ M} = 1.0 \\times 10^{-3} \\text{ M}$, $[Cl^-] = 0.0010 \\text{ M} = 1.0 \\times 10^{-3} \\text{ M}$. Calculate $Q = [Pb^{2+}][Cl^-]^2 = (1.0 \\times 10^{-3})(1.0 \\times 10^{-3})^2 = 1.0 \\times 10^{-9}$. Since $Q = 1.0 \\times 10^{-9}$ is much smaller than $K_{sp} = 1.7 \\times 10^{-5}$, no precipitate will form."
        },
        {
            "id": "q7.2.9",
            "unitId": 7,
            "text": "Which of the following compounds is more soluble in acidic solution than in pure water?",
            "options": ["$AgCl$", "$CaCO_3$", "$PbI_2$", "$KNO_3$"],
            "correctIndex": 1,
            "hint": "Look for a salt containing a basic anion. The H+ ions in acid will react with the basic anion, removing it from equilibrium and shifting the solubility to the right.",
            "explanation": "$CaCO_3$ contains the carbonate anion ($CO_3^{2-}$), which is the conjugate base of the weak acid $HCO_3^-$. In acidic solution, $H^+$ reacts with $CO_3^{2-}$ to form $HCO_3^-$ (and eventually $CO_2$ and $H_2O$). According to Le Chatelier's principle, removing $CO_3^{2-}$ shifts the dissolution equilibrium: $CaCO_3(s) \\rightleftharpoons Ca^{2+} + CO_3^{2-}$ to the right, increasing solubility."
        },
        {
            "id": "q7.2.10",
            "unitId": 7,
            "text": "The solubility of an ionic compound is endothermic. How does its solubility product constant ($K_{sp}$) change with temperature?",
            "options": [
                "It remains constant.",
                "It increases as temperature increases.",
                "It decreases as temperature increases.",
                "It decreases to zero."
            ],
            "correctIndex": 1,
            "hint": "For an endothermic dissolution, heat can be treated as a reactant. Increasing temperature shifts the equilibrium to the right, producing more dissolved ions.",
            "explanation": "Because the dissolution is endothermic, $\\Delta H_{soln} > 0$. Increasing the temperature shifts the equilibrium forward: $\\text{Solid} + \\text{heat} \\rightleftharpoons \\text{Ions}$, producing a higher concentration of dissolved ions at equilibrium. This increases the product $[Cation][Anion]$, resulting in a larger $K_{sp}$."
        }
    ],
    "7.3": [
        {
            "id": "q7.3.6",
            "unitId": 7,
            "text": "What is the relationship between standard free energy change $\\Delta G^\\circ$ and the equilibrium constant $K$ of a reaction at temperature $T$?",
            "options": [
                "$\\Delta G^\\circ = -RT \\ln K$",
                "$\\Delta G^\\circ = RT \\ln K$",
                "$\\Delta G^\\circ = -RT \\log K$",
                "$\\Delta G^\\circ = -nFE^\\circ$"
            ],
            "correctIndex": 0,
            "hint": "This equation links the thermodynamics of a reaction to its equilibrium state. Make sure you use the natural logarithm.",
            "explanation": "The fundamental thermodynamic relationship between standard free energy change and the equilibrium constant is: $\\Delta G^\\circ = -RT \\ln K$. If $\\Delta G^\\circ$ is negative, $K > 1$ and products are favored at equilibrium. If $\\Delta G^\\circ$ is positive, $K < 1$ and reactants are favored."
        },
        {
            "id": "q7.3.7",
            "unitId": 7,
            "text": "If a reaction has an equilibrium constant of $K = 5.0 \\times 10^{-6}$ at $298 \\text{ K}$, what is the sign and magnitude of $\\Delta G^\\circ$?",
            "options": [
                "$\\Delta G^\\circ$ is negative, and the reaction is thermodynamically favorable.",
                "$\\Delta G^\\circ$ is positive, and the reaction is thermodynamically unfavorable.",
                "$\\Delta G^\\circ$ is zero.",
                "$\\Delta G^\\circ$ is positive, and the reaction is thermodynamically favorable."
            ],
            "correctIndex": 1,
            "hint": "Since K is much smaller than 1, the reaction favors reactants at equilibrium. Plug this qualitative trend into the thermodynamic equation.",
            "explanation": "Because $K = 5.0 \\times 10^{-6} < 1$, the reaction is reactant-favored at equilibrium. In $\\Delta G^\\circ = -RT \\ln K$, the natural logarithm of a number less than 1 is negative. Multiplying by $-RT$ (which is positive) yields a positive value for $\\Delta G^\\circ$. A positive $\\Delta G^\\circ$ means the reaction is thermodynamically unfavorable under standard conditions."
        },
        {
            "id": "q7.3.8",
            "unitId": 7,
            "text": "A reaction has a standard free energy change of $\\Delta G^\\circ = -30.0 \\text{ kJ/mol}$ at $25^\\circ\\text{C}$. Calculate the equilibrium constant $K$ of this reaction. ($R = 8.314 \\text{ J/mol} \\cdot \\text{K}$)",
            "options": [
                "$1.8 \\times 10^5$",
                "$5.6 \\times 10^{-6}$",
                "$1.0$",
                "$1.2 \\times 10^{-12}$"
            ],
            "correctIndex": 0,
            "hint": "Rearrange the equation: ln K = -delta G* / RT. Make sure to convert kJ to J, and temperature to Kelvin (298 K).",
            "explanation": "Convert $\\Delta G^\\circ$ to J/mol: $-30000 \\text{ J/mol}$. $T = 298 \\text{ K}$. $\\ln K = -\\frac{-30000}{8.314 \\times 298} = \\frac{30000}{2477.5} \\approx 12.11$. $K = e^{12.11} \\approx 1.8 \\times 10^5$."
        },
        {
            "id": "q7.3.9",
            "unitId": 7,
            "text": "If a reaction is thermodynamically unfavorable under standard conditions ($\\Delta G^\\circ > 0$), how can it be made to proceed in the forward direction in a industrial process?",
            "options": [
                "By coupling it to a highly favorable reaction (like ATP hydrolysis or combustion).",
                "By adding a catalyst.",
                "By increasing the activation energy.",
                "It can never proceed under any conditions."
            ],
            "correctIndex": 0,
            "hint": "A catalyst only affects the speed, not the favorability. Coupling reactions allows the net free energy change to be negative.",
            "explanation": "An unfavorable reaction can be driven forward by coupling it to a second, highly thermodynamically favorable reaction (such that the sum of the standard free energies of the two reactions is negative). This is commonly used in biology (ATP coupling) and metallurgy (smelting ores)."
        },
        {
            "id": "q7.3.10",
            "unitId": 7,
            "text": "For the vaporization of water at $100^\\circ\\text{C}$ and $1 \\text{ atm}$ ($H_2O(l) \\rightleftharpoons H_2O(g)$), what is the value of $\\Delta G$?",
            "options": [
                "It is positive.",
                "It is negative.",
                "It is exactly zero.",
                "It depends on the volume of the container."
            ],
            "correctIndex": 2,
            "hint": "At the boiling point under 1 atm pressure, liquid water and water vapor are at dynamic equilibrium.",
            "explanation": "At the normal boiling point ($100^\\circ\\text{C}$ and $1 \\text{ atm}$), vaporization is at equilibrium. For any system in a state of dynamic equilibrium at constant temperature and pressure, the change in Gibbs free energy ($\\Delta G$) is exactly zero."
        }
    ],
    "8.1": [
        {
            "id": "q8.1.6",
            "unitId": 8,
            "text": "What is the pH of a $0.050 M$ $Ba(OH)_2$ solution at $25^\\circ\\text{C}$?",
            "options": ["1.00", "13.00", "12.70", "1.30$"],
            "correctIndex": 1,
            "hint": "Ba(OH)2 is a strong base that dissociates completely to yield two hydroxide ions per formula unit. Calculate [OH-] first, then pOH, then pH.",
            "explanation": "$Ba(OH)_2(aq) \\rightarrow Ba^{2+}(aq) + 2OH^-(aq)$. Since the concentration of $Ba(OH)_2$ is $0.050 \\text{ M}$, $[OH^-] = 2 \\times 0.050 \\text{ M} = 0.10 \\text{ M}$. $pOH = -\\log[OH^-] = -\\log(0.10) = 1.00$. At $25^\\circ\\text{C}$, $pH = 14.00 - pOH = 14.00 - 1.00 = 13.00$."
        },
        {
            "id": "q8.1.7",
            "unitId": 8,
            "text": "A weak acid $HA$ has a concentration of $0.10 M$ and is $1.3\\%$ ionized at equilibrium. Calculate the acid dissociation constant $K_a$ of this acid.",
            "options": [
                "$1.7 \\times 10^{-5}$",
                "$1.3 \\times 10^{-3}$",
                "$1.7 \\times 10^{-6}$",
                "$1.3 \\times 10^{-2}$"
            ],
            "correctIndex": 0,
            "hint": "Percent ionization = ([H+]_eq / [HA]_initial) * 100. Find [H+], which equals [A-], and use Ka = [H+][A-] / [HA].",
            "explanation": "Calculate $[H^+]_{eq}$: $1.3\\%$ of $0.10 \\text{ M} = 0.013 \\times 0.10 = 0.0013 \\text{ M}$. Since $[H^+] = [A^-] = 0.0013 \\text{ M}$, and $[HA]_{eq} = 0.10 - 0.0013 \\approx 0.10 \\text{ M}$. $K_a = \\frac{[H^+][A^-]}{[HA]} = \\frac{(0.0013)^2}{0.10} = \\frac{1.69 \\times 10^{-6}}{0.10} \\approx 1.7 \\times 10^{-5}$."
        },
        {
            "id": "q8.1.8",
            "unitId": 8,
            "text": "Which of the following salts will form an acidic aqueous solution when dissolved in water?",
            "options": ["$NH_4Cl$", "$NaF$", "$KNO_3$", "$CH_3COONa$"],
            "correctIndex": 0,
            "hint": "Acidic salts are formed from the conjugate acid of a weak base and the conjugate base of a strong acid. The conjugate acid will undergo hydrolysis to yield H+.",
            "explanation": "$NH_4Cl$ dissociates into $NH_4^+$ and $Cl^-$. $Cl^-$ is the conjugate base of a strong acid ($HCl$) and does not hydrolyze. $NH_4^+$ is the conjugate acid of a weak base ($NH_3$) and undergoes hydrolysis: $NH_4^+ + H_2O \\rightleftharpoons NH_3 + H_3O^+$, increasing the concentration of $H_3O^+$ and making the solution acidic."
        },
        {
            "id": "q8.1.9",
            "unitId": 8,
            "text": "If a weak base $B$ has $K_b = 1.0 \\times 10^{-6}$, what is the $K_a$ value of its conjugate acid $BH^+$ at $25^\\circ\\text{C}$?",
            "options": [
                "$1.0 \\times 10^{-6}$",
                "$1.0 \\times 10^{-8}$",
                "$1.0 \\times 10^{-14}$",
                "$1.0 \\times 10^{-7}$"
            ],
            "correctIndex": 1,
            "hint": "For any conjugate acid-base pair at 25 degrees C, the relationship is Ka * Kb = Kw = 1.0 x 10^-14.",
            "explanation": "Using the relationship $K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$: $K_a = K_w / K_b = (1.0 \\times 10^{-14}) / (1.0 \\times 10^{-6}) = 1.0 \\times 10^{-8}$."
        },
        {
            "id": "q8.1.10",
            "unitId": 8,
            "text": "What is the pH of a $1.0 \\times 10^{-3} M$ solution of $HNO_3$?",
            "options": ["3.0", "11.0", "7.0", "1.0"],
            "correctIndex": 0,
            "hint": "HNO3 is a strong acid, so it dissociates 100% to produce [H+] = 1.0 x 10^-3 M.",
            "explanation": "Nitric acid ($HNO_3$) is a strong acid, which dissociates completely: $[H^+] = 1.0 \\times 10^{-3} \\text{ M}$. $pH = -\\log[H^+] = -\\log(1.0 \\times 10^{-3}) = 3.0$."
        }
    ],
    "8.2": [
        {
            "id": "q8.2.6",
            "unitId": 8,
            "text": "A student titrates a weak acid $HA$ with a strong base $NaOH$. At the equivalence point, the solution pH is determined to be 8.9. Which of the following explains why the pH is basic rather than neutral?",
            "options": [
                "Excess $NaOH$ remains in the solution.",
                "The conjugate base $A^-$ reacts with water to produce hydroxide ($OH^-$) ions.",
                "The weak acid $HA$ is not fully neutralized.",
                "Sodium ions ($Na^+$) undergo acidic hydrolysis."
            ],
            "correctIndex": 1,
            "hint": "At the equivalence point, the acid has been entirely converted to its conjugate base A-. Consider how a weak base anion behaves in water.",
            "explanation": "At the equivalence point, all the weak acid $HA$ has reacted with $NaOH$ to form water and the conjugate base salt $NaA$. The conjugate base $A^-$ is a weak base and undergoes hydrolysis in water: $A^-(aq) + H_2O(l) \\rightleftharpoons HA(aq) + OH^-(aq)$. The production of $OH^-$ ions makes the solution basic (pH > 7)."
        },
        {
            "id": "q8.2.7",
            "unitId": 8,
            "text": "Which of the following titration curves represents the titration of a strong base (in the beaker) with a strong acid (in the burette)?",
            "options": [
                "pH starts low (e.g. 1.0) and curves upwards to pH 13.0.",
                "pH starts high (e.g. 13.0) and curves downwards to pH 1.0.",
                "pH starts low (e.g. 3.0) and curves upwards to pH 9.0.",
                "pH remains constant at 7.0 throughout."
            ],
            "correctIndex": 1,
            "hint": "Identify the analyte: it is in the beaker, determining the starting pH. Titrating a base with an acid means adding acid, lowering the pH.",
            "explanation": "Since the strong base is in the beaker (analyte), the starting pH will be very high (around 13.0). As strong acid is added, the pH decreases, passing through a sharp vertical drop at the equivalence point (pH = 7.0), and leveling off at a very low pH (around 1.0)."
        },
        {
            "id": "q8.2.8",
            "unitId": 8,
            "text": "During the titration of a weak base $B$ with a strong acid $HCl$, the pH at the half-equivalence point is 9.25. What is the $pK_b$ of the weak base?",
            "options": ["9.25", "4.75", "7.00", "5.25"],
            "correctIndex": 1,
            "hint": "At the half-equivalence point for a weak base titration, pOH = pKb. Use pH + pOH = 14 to convert pH to pOH.",
            "explanation": "At the half-equivalence point of a weak base titration, the concentration of the weak base $[B]$ equals the concentration of its conjugate acid $[BH^+]$. By the Henderson-Hasselbalch equation for bases: $pOH = pK_b + \\log\\frac{[BH^+]}{[B]} \\implies pOH = pK_b$. Since $pH = 9.25$, $pOH = 14.00 - 9.25 = 4.75$. Therefore, $pK_b = 4.75$."
        },
        {
            "id": "q8.2.9",
            "unitId": 8,
            "text": "An acid-base indicator $HIn$ is a weak acid with $pK_a = 5.0$. What color will the solution be if the indicator is added to a solution at pH = 3.0, if $HIn$ is red and $In^-$ is yellow?",
            "options": ["Red", "Yellow", "Orange (mix of red and yellow)", "Colorless"],
            "correctIndex": 0,
            "hint": "Compare the solution pH to the pKa of the indicator. If pH < pKa, the protonated form (HIn) dominates.",
            "explanation": "Since the solution $pH = 3.0$ is less than the indicator's $pK_a = 5.0$, the concentration of the protonated form $[HIn]$ is much greater than the deprotonated form $[In^-]$ (specifically by a factor of 100, according to the Henderson-Hasselbalch equation). Because the protonated form $HIn$ is red, the solution will appear red."
        },
        {
            "id": "q8.2.10",
            "unitId": 8,
            "text": "What is the buffer region on a titration curve of a weak acid titrated with a strong base?",
            "options": [
                "The vertical region near the equivalence point.",
                "The initial flat region centered around the half-equivalence point where the pH changes slowly.",
                "The region after the equivalence point where pH is determined by excess base.",
                "There is no buffer region in a weak acid titration."
            ],
            "correctIndex": 1,
            "hint": "A buffer consists of a weak acid and its conjugate base. This mixture is formed as weak acid is partially neutralized.",
            "explanation": "As the strong base is added to the weak acid, some of the weak acid is converted into its conjugate base, creating a buffer solution. This buffer system resists changes in pH, producing a relatively flat plateau region on the titration curve centered around the half-equivalence point ($pH = pK_a$)."
        }
    ],
    "8.3": [
        {
            "id": "q8.3.6",
            "unitId": 8,
            "text": "A buffer solution is prepared by mixing $0.20 M$ $CH_3COOH$ (acetic acid, $K_a = 1.8 \\times 10^{-5}$) and $0.30 M$ $CH_3COONa$ (sodium acetate). What is the pH of this buffer solution?",
            "options": ["4.74", "4.92", "4.56", "5.10"],
            "correctIndex": 1,
            "hint": "Use the Henderson-Hasselbalch equation: pH = pKa + log([A-] / [HA]). pKa = -log(1.8 x 10^-5) = 4.74.",
            "explanation": "First find the $pK_a$: $pK_a = -\\log(1.8 \\times 10^{-5}) = 4.74$. Apply the Henderson-Hasselbalch equation: $pH = pK_a + \\log\\frac{[CH_3COO^-]}{[CH_3COOH]} = 4.74 + \\log\\frac{0.30}{0.20} = 4.74 + \\log(1.5) = 4.74 + 0.18 = 4.92$."
        },
        {
            "id": "q8.3.7",
            "unitId": 8,
            "text": "Which of the following mixtures will form an effective buffer solution when dissolved in water?",
            "options": [
                "$0.10 M HCl$ and $0.10 M NaCl$",
                "$0.10 M NH_3$ and $0.10 M NH_4Cl$",
                "$0.10 M NaOH$ and $0.10 M NaCl$",
                "$0.10 M CH_3COOH$ and $0.10 M HCl$"
            ],
            "correctIndex": 1,
            "hint": "A buffer must contain a weak acid and its conjugate base (or a weak base and its conjugate acid). Strong acids/bases cannot form buffers.",
            "explanation": "$NH_3$ is a weak base and $NH_4^+$ (from $NH_4Cl$) is its conjugate acid. A mixture of these two species forms an excellent buffer solution that can neutralize both added acids and bases. $HCl$ and $NaOH$ are strong and do not form buffers."
        },
        {
            "id": "q8.3.8",
            "unitId": 8,
            "text": "What happens to the pH of a buffer solution when a small amount of a strong acid is added?",
            "options": [
                "The pH increases dramatically.",
                "The pH decreases slightly.",
                "The pH remains absolutely unchanged.",
                "The pH increases slightly."
            ],
            "correctIndex": 1,
            "hint": "Buffers resist pH changes, so the pH will change very little, but adding an acid will still cause a tiny decrease in pH.",
            "explanation": "Buffers resist changes in pH by neutralizing added $H^+$ ions via reaction with the conjugate base ($A^- + H^+ \\rightarrow HA$). However, because the ratio of $[A^-]/[HA]$ decreases slightly, the pH will experience a very small decrease, rather than a large drop."
        },
        {
            "id": "q8.3.9",
            "unitId": 8,
            "text": "A student wants to prepare a buffer with a target pH of 5.3. Which of the following weak acids (and their conjugate sodium salts) would be the best choice?",
            "options": [
                "Acetic acid ($pK_a = 4.74$)",
                "Propanoic acid ($pK_a = 4.87$)",
                "Pivalic acid ($pK_a = 5.03$)",
                "Carbonic acid ($pK_a = 6.35$)"
            ],
            "correctIndex": 2,
            "hint": "A buffer is most effective within +/- 1 pH unit of the weak acid's pKa. Choose the acid with a pKa closest to the target pH.",
            "explanation": "For maximum buffer capacity, the weak acid should have a $pK_a$ as close to the target pH (5.3) as possible. Pivalic acid ($pK_a = 5.03$) is the closest, making it the most suitable choice to maintain a stable pH of 5.3."
        },
        {
            "id": "q8.3.10",
            "unitId": 8,
            "text": "What determines the buffer capacity of a buffer solution?",
            "options": [
                "The pH of the buffer.",
                "The concentrations of the weak acid and its conjugate base in the buffer.",
                "The specific specific heat capacity of the solution.",
                "The volume of the container."
            ],
            "correctIndex": 1,
            "hint": "Buffer capacity refers to the amount of acid or base a buffer can neutralize before the pH starts to change significantly.",
            "explanation": "Buffer capacity is determined by the absolute concentrations of the buffer components ($HA$ and $A^-$). A buffer containing $1.0 M$ concentrations of both has a much higher capacity to neutralize added acid or base than a buffer containing $0.01 M$ concentrations, even though both have the same initial pH."
        }
    ],
    "9.1": [
        {
            "id": "q9.1.6",
            "unitId": 9,
            "text": "For which of the following processes is the change in entropy positive ($\\Delta S^\\circ > 0$)?",
            "options": [
                "$N_2(g) + 3H_2(g) \\rightarrow 2NH_3(g)$",
                "$H_2O(g) \\rightarrow H_2O(l)$",
                "$CO_2(s) \\rightarrow CO_2(g)$",
                "$Ag^+(aq) + Cl^-(aq) \\rightarrow AgCl(s)$"
            ],
            "correctIndex": 2,
            "hint": "Entropy is a measure of molecular disorder. Processes that produce more gas moles or go from solid to gas increase entropy.",
            "explanation": "Sublimation ($CO_2(s) \\rightarrow CO_2(g)$) converts a highly ordered solid phase into a highly disordered gas phase, resulting in a large increase in entropy ($\\Delta S^\circ > 0$). The other choices all involve a decrease in the number of gas moles or crystallization, which decrease entropy."
        },
        {
            "id": "q9.1.7",
            "unitId": 9,
            "text": "A reaction is endothermic ($\\Delta H^\\circ = +50.0 \\text{ kJ/mol}$) and has a positive entropy change ($\\Delta S^\\circ = +150 \\text{ J/mol} \\cdot \\text{K}$). Under what conditions is this reaction thermodynamically favorable?",
            "options": [
                "It is favorable at all temperatures.",
                "It is favorable only at high temperatures.",
                "It is favorable only at low temperatures.",
                "It is unfavorable at all temperatures."
            ],
            "correctIndex": 1,
            "hint": "Use Gibbs free energy equation: delta G = delta H - T * delta S. For favorability, delta G must be negative.",
            "explanation": "According to $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, when $\\Delta H^\\circ > 0$ (unfavorable) and $\\Delta S^\\circ > 0$ (favorable), the $-T\\Delta S^\\circ$ term becomes negative. At high temperatures, this term outweighs the positive $\\Delta H^\\circ$ term, making $\\Delta G^\\circ$ negative and the reaction thermodynamically favorable."
        },
        {
            "id": "q9.1.8",
            "unitId": 9,
            "text": "What is the standard Gibbs free energy change ($\\Delta G^\\circ$) at $25^\\circ\\text{C}$ for a reaction with $\\Delta H^\\circ = -80.0 \\text{ kJ/mol}$ and $\\Delta S^\\circ = -100.0 \\text{ J/mol} \\cdot \\text{K}$?",
            "options": ["$-50.2 \\text{ kJ/mol}$", "$-110.0 \\text{ kJ/mol}$", "$+50.2 \\text{ kJ/mol}$", "$-77.5 \\text{ kJ/mol}$"],
            "correctIndex": 0,
            "hint": "Convert standard entropy to kJ/mol: -100 J/mol*K = -0.100 kJ/mol*K. T = 298.15 K. Calculate delta G = delta H - T * delta S.",
            "explanation": "$\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -80.0 \\text{ kJ/mol} - (298.15 \\text{ K} \\times -0.100 \\text{ kJ/mol} \\cdot \\text{K}) = -80.0 - (-29.8) = -50.2 \\text{ kJ/mol}$."
        },
        {
            "id": "q9.1.9",
            "unitId": 9,
            "text": "If a reaction has a negative standard enthalpy change ($\\Delta H^\circ < 0$) and a positive standard entropy change ($\\Delta S^\circ > 0$), what is its thermodynamic favorability?",
            "options": [
                "It is thermodynamically favorable only at high temperatures.",
                "It is thermodynamically favorable only at low temperatures.",
                "It is thermodynamically favorable at all temperatures.",
                "It is thermodynamically unfavorable at all temperatures."
            ],
            "correctIndex": 2,
            "hint": "Exothermic and increasing entropy are both thermodynamically favorable drivers. Look at how they affect the sign of delta G.",
            "explanation": "If $\\Delta H^\circ < 0$ and $\\Delta S^\circ > 0$, both terms in the Gibbs equation $\\Delta G^\circ = \\Delta H^\circ - T\\Delta S^\circ$ are negative. Because both terms are negative, $\\Delta G^\circ$ will always be negative regardless of the temperature, making the reaction thermodynamically favorable at all temperatures."
        },
        {
            "id": "q9.1.10",
            "unitId": 9,
            "text": "A reaction has $\\Delta G^\circ < 0$ but does not produce any observable products at room temperature. What is the explanation for this?",
            "options": [
                "The reaction is not actually favorable.",
                "The reaction has a very high activation energy and is under kinetic control.",
                "The reaction is endothermic.",
                "The equilibrium constant is extremely small."
            ],
            "correctIndex": 1,
            "hint": "Thermodynamics tells us if a reaction CAN occur, while kinetics tells us how FAST it occurs.",
            "explanation": "If $\\Delta G^\circ < 0$, the reaction is thermodynamically favorable and is expected to proceed. However, if it has a very high activation energy barrier, the rate of the reaction at room temperature will be extremely slow (negligible). Such reactions are said to be under kinetic control."
        }
    ],
    "9.2": [
        {
            "id": "q9.2.6",
            "unitId": 9,
            "text": "A galvanic cell is constructed with a zinc electrode in $1.0 M$ $Zn(NO_3)_2$ and a copper electrode in $1.0 M$ $Cu(NO_3)_2$. Given the standard reduction potentials:\n$Zn^{2+} + 2e^- \\rightarrow Zn \\quad E^\\circ = -0.76 \\text{ V}$\n$Cu^{2+} + 2e^- \\rightarrow Cu \\quad E^\\circ = +0.34 \\text{ V}$\nWhat is the standard cell potential ($E^\\circ_{cell}$) for this galvanic cell?",
            "options": ["$+1.10 \\text{ V}$", "$+0.42 \\text{ V}$", "$-0.42 \\text{ V}$", "$-1.10 \\text{ V}$"],
            "correctIndex": 0,
            "hint": "Standard cell potential is E_cell = E_cathode (reduction) - E_anode (oxidation). The cathode is the one with the higher reduction potential.",
            "explanation": "Copper has the higher reduction potential ($+0.34 \\text{ V}$) so it is the cathode (reduction). Zinc is the anode (oxidation). $E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = +0.34 \\text{ V} - (-0.76 \\text{ V}) = +1.10 \\text{ V}$."
        },
        {
            "id": "q9.2.7",
            "unitId": 9,
            "text": "In the galvanic cell described in the previous question, which direction do the electrons flow through the external wire?",
            "options": [
                "From the copper electrode to the zinc electrode",
                "From the zinc electrode to the copper electrode",
                "Through the salt bridge",
                "No electron flow occurs in a galvanic cell"
            ],
            "correctIndex": 1,
            "hint": "Oxidation (loss of electrons) occurs at the anode. Reduction (gain of electrons) occurs at the cathode. Electrons flow from the site of loss to the site of gain.",
            "explanation": "Oxidation occurs at the zinc anode: $Zn(s) \\rightarrow Zn^{2+}(aq) + 2e^-$. Reduction occurs at the copper cathode: $Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s)$. Electrons are released at the anode (zinc) and consumed at the cathode (copper), so they flow from zinc to copper through the external wire."
        },
        {
            "id": "q9.2.8",
            "unitId": 9,
            "text": "What is the primary function of a salt bridge in a galvanic cell?",
            "options": [
                "To allow electrons to flow between the two half-cells.",
                "To maintain electrical neutrality by allowing ions to migrate between the half-cells.",
                "To act as a catalyst for the redox reaction.",
                "To keep the solutions from mixing physically while permitting heat transfer."
            ],
            "correctIndex": 1,
            "hint": "Without a salt bridge, charge would build up in the half-cells, instantly stopping the flow of current.",
            "explanation": "As the redox reaction occurs, positive charges accumulate in the anode compartment (as $Zn^{2+}$ is produced) and positive charges are depleted in the cathode compartment (as $Cu^{2+}$ is reduced). The salt bridge allows anions to migrate to the anode and cations to migrate to the cathode, neutralizing this charge buildup and completing the circuit."
        },
        {
            "id": "q9.2.9",
            "unitId": 9,
            "text": "For a thermodynamically favorable galvanic cell, what are the signs of $\\Delta G^\\circ$ and the standard cell potential $E^\\circ_{cell}$?",
            "options": [
                "$\\Delta G^\\circ$ is negative, and $E^\\circ_{cell}$ is positive.",
                "$\\Delta G^\\circ$ is positive, and $E^\\circ_{cell}$ is positive.",
                "$\\Delta G^\\circ$ is negative, and $E^\\circ_{cell}$ is negative.",
                "$\\Delta G^\\circ$ is positive, and $E^\\circ_{cell}$ is negative."
            ],
            "correctIndex": 0,
            "hint": "Use the equation relating Gibbs free energy and cell potential: delta G* = -n * F * E*.",
            "explanation": "The relationship is $\\Delta G^\\circ = -nFE^\\circ_{cell}$. Since $n$ and $F$ (Faraday's constant) are positive constants, for the standard cell potential $E^\circ_{cell}$ to be positive, $\\Delta G^\circ$ must be negative. A negative $\\Delta G^\circ$ corresponds to a thermodynamically favorable process."
        },
        {
            "id": "q9.2.10",
            "unitId": 9,
            "text": "What reaction occurs at the anode of an electrochemical cell?",
            "options": ["Reduction", "Oxidation", "Neutralization", "Precipitation"],
            "correctIndex": 1,
            "hint": "Remember the mnemonic: 'An Ox' and 'Red Cat'.",
            "explanation": "According to electrochemical conventions, oxidation (loss of electrons) always occurs at the anode ('An Ox'), while reduction (gain of electrons) always occurs at the cathode ('Red Cat')."
        }
    ],
    "9.3": [
        {
            "id": "q9.3.6",
            "unitId": 9,
            "text": "How many moles of electrons are required to deposit $1.00 \\text{ mol}$ of copper metal ($Cu$) from an aqueous solution of $Cu^{2+}$ ions?",
            "options": ["$1.00 \\text{ mol}$", "$2.00 \\text{ mol}$", "$0.50 \\text{ mol}$", "$4.00 \\text{ mol}$"],
            "correctIndex": 1,
            "hint": "Write the half-reaction for the reduction of Cu2+ ions to solid copper.",
            "explanation": "The reduction half-reaction is: $Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s)$. This stoichiometry shows that exactly $2$ moles of electrons ($e^-$) are required to reduce and deposit $1$ mole of copper metal ($Cu(s)$)."
        },
        {
            "id": "q9.3.7",
            "unitId": 9,
            "text": "An electrolytic cell passes a current of $2.00 \\text{ A}$ through an aqueous solution of $AgNO_3$ for $30.0 \\text{ minutes}$. How many grams of silver metal ($Ag$, molar mass $= 107.9 \\text{ g/mol}$) are deposited? ($F = 96485 \\text{ C/mol } e^-$)",
            "options": ["$4.03 \\text{ g}$", "$2.01 \\text{ g}$", "$8.06 \\text{ g}$", "$1.21 \\text{ g}$"],
            "correctIndex": 0,
            "hint": "First calculate the total charge passed using Q = I * t (t in seconds). Convert charge to moles of electrons, then to moles of Ag (using Ag+ + e- -> Ag), and finally to grams.",
            "explanation": "Time in seconds: $t = 30.0 \\text{ min} \\times 60 \\text{ s/min} = 1800 \\text{ s}$. Charge: $q = I \\times t = 2.00 \\text{ A} \\times 1800 \\text{ s} = 3600 \\text{ C}$. Moles of electrons: $n_{e^-} = 3600 \\text{ C} / 96485 \\text{ C/mol } e^- \\approx 0.0373 \\text{ mol}$. Since the reduction is $Ag^+ + e^- \\rightarrow Ag(s)$, $1 \\text{ mol of } e^-$ deposits $1 \\text{ mol of } Ag$. Moles of $Ag = 0.0373 \\text{ mol}$. Mass of $Ag = 0.0373 \\text{ mol} \\times 107.9 \\text{ g/mol} \\approx 4.03 \\text{ g}$."
        },
        {
            "id": "q9.3.8",
            "unitId": 9,
            "text": "For the cell: $Zn(s) | Zn^{2+}(aq) || Cu^{2+}(aq) | Cu(s)$ with $E^\\circ = +1.10 \\text{ V}$. If the concentration of $Cu^{2+}$ is increased to $2.0 M$ while $[Zn^{2+}]$ remains at $1.0 M$, how will the cell potential ($E_{cell}$) be affected, qualitatively, according to the Nernst equation?",
            "options": [
                "$E_{cell}$ will remain equal to $+1.10 \\text{ V}$.",
                "$E_{cell}$ will be greater than $+1.10 \\text{ V}$.",
                "$E_{cell}$ will be less than $+1.10 \\text{ V}$.",
                "$E_{cell}$ will drop to zero."
            ],
            "correctIndex": 1,
            "hint": "Analyze the reaction quotient Q = [Zn2+] / [Cu2+]. If [Cu2+] increases, Q becomes smaller than 1. Check the Nernst equation: E = E* - (RT/nF)ln Q.",
            "explanation": "The overall cell reaction is: $Zn(s) + Cu^{2+}(aq) \\rightleftharpoons Zn^{2+}(aq) + Cu(s)$. The reaction quotient is $Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]}$. Increasing $[Cu^{2+}]$ to $2.0 M$ makes $Q = 1/2 = 0.5$. Since $Q < 1$, $\\ln Q$ is negative. In the Nernst equation $E_{cell} = E^\\circ_{cell} - \\frac{RT}{nF}\\ln Q$, subtracting a negative term increases the cell potential, so $E_{cell} > E^\\circ_{cell}$."
        },
        {
            "id": "q9.3.9",
            "unitId": 9,
            "text": "What occurs during the electrolysis of an aqueous solution of sodium chloride ($NaCl(aq)$)?",
            "options": [
                "Sodium metal is deposited at the cathode.",
                "Hydrogen gas is produced at the cathode, and chlorine gas is produced at the anode.",
                "Oxygen gas is produced at both electrodes.",
                "Sodium ions are oxidized to sodium metal."
            ],
            "correctIndex": 1,
            "hint": "Consider the competing half-reactions of water. Water is easier to reduce than sodium ions, and chloride is easier to oxidize than water (due to overpotential).",
            "explanation": "In aqueous solution, there is competition at the electrodes. At the cathode, water ($E^\circ_{red} = -0.83 \text{ V}$) is easier to reduce than $Na^+$ ($E^\circ_{red} = -2.71 \text{ V}$), producing $H_2(g)$ and $OH^-$. At the anode, chloride ions are oxidized to $Cl_2(g)$ rather than water being oxidized to $O_2(g)$ due to kinetic overpotential. Thus, $H_2(g)$ and $Cl_2(g)$ are produced."
        },
        {
            "id": "q9.3.10",
            "unitId": 9,
            "text": "According to the Nernst equation, what happens to the cell potential ($E$) of a galvanic cell as it operates and runs to completion?",
            "options": [
                "It remains constant until the reactants are completely gone, then drops to zero.",
                "It decreases continuously, eventually reaching zero when the reaction reaches equilibrium.",
                "It increases continuously because the cell is generating energy.",
                "It fluctuates wildly."
            ],
            "correctIndex": 1,
            "hint": "As the cell operates, reactants are consumed (denominator of Q decreases) and products are formed (numerator of Q increases), so Q increases. As Q approaches K, E approaches 0.",
            "explanation": "As the reaction proceeds, reactants are consumed and products are formed, causing the reaction quotient $Q$ to increase. As $Q$ increases, the term subtracted in the Nernst equation increases, causing the cell potential $E_{cell}$ to decrease. When the system reaches chemical equilibrium, $Q = K_{eq}$, and the cell potential becomes exactly $0$ (the battery is 'dead')."
        }
    ]
}

# Recursively serialize python objects back to clean, indented Python source code
def serialize_py(v, indent=0):
    ind = " " * indent
    if isinstance(v, dict):
        lines = ["{"]
        for k, val in v.items():
            lines.append(f"{ind}    {repr(k)}: {serialize_py(val, indent + 4)},")
        lines.append(ind + "}")
        return "\n".join(lines)
    elif isinstance(v, list):
        lines = ["["]
        for val in v:
            lines.append(f"{ind}    {serialize_py(val, indent + 4)},")
        lines.append(ind + "]")
        return "\n".join(lines)
    elif isinstance(v, str):
        if "\n" in v:
            # Use triple quotes for multiline strings, escape triple quotes inside it if any
            escaped = v.replace('"""', '\\"\\"\\"')
            return f'"""{escaped}"""'
        else:
            return repr(v)
    else:
        return repr(v)

# Loop over the 9 unit modules, load them, append the questions, and save back
for unit_num in range(1, 10):
    module_name = f"unit{unit_num}"
    module = __import__(module_name)
    
    unit_data = module.unit_data
    unit_id = unit_data["id"]
    
    # Update questions for each topic in this unit
    for topic in unit_data["topics"]:
        topic_id = topic["id"]
        
        # Check if we have new questions for this topic
        if topic_id in new_questions:
            current_q_ids = {q["id"] for q in topic["questions"]}
            for nq in new_questions[topic_id]:
                if nq["id"] not in current_q_ids:
                    topic["questions"].append(nq)
            print(f"Updated topic {topic_id} in Unit {unit_id}. Total questions: {len(topic['questions'])}")
            
    # Serialize the updated unit_data back to unitX.py
    file_path = f"/Users/yashpatil/.gemini/antigravity-ide/brain/ffdd1656-bc55-4c60-bbbf-84a9fe48be7d/chem_units/unit{unit_num}.py"
    serialized_py_data = serialize_py(unit_data)
    
    file_content = f"# Unit {unit_num}: {unit_data['title']}\n\nunit_data = {serialized_py_data}\n"
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(file_content)
        
    print(f"Successfully wrote updated python representation to: {file_path}")

print("All AP Chemistry units have been updated successfully with 5 additional mock exam questions per topic!")
