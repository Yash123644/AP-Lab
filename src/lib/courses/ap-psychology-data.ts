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
  article: string;
  questions: CourseQuestion[];
  image?: string;
}

export interface CourseUnit {
  id: number;
  title: string;
  masteryWeight: string;
  topics: CourseTopic[];
}

export const apPsychData: CourseUnit[] = [
  {
    id: 1,
    title: "Biological Bases of Behavior",
    masteryWeight: "8–10%",
    topics: [
      {
        id: "1.1",
        title: "Heredity, Evolutionary Psychology, and Environmental Interactions",
        description: "Explore how genetics, natural selection, and environment shape human behavior.",
        youtubeId: "3SdCoEEo7m0",
        article: `
# Heredity, Evolutionary Psychology, and Environmental Interactions

To understand human behavior, psychologists study the interplay between nature (genetics) and nurture (environment):

## 1. Genotype vs. Phenotype
- <vocab term="Genotype" definition="The precise genetic makeup of an organism, as determined by the specific alleles inherited from parents.">Genotype</vocab> is the actual genetic blueprint of an organism, inherited from birth.
- <vocab term="Phenotype" definition="The observable physical or behavioral characteristics of an organism, resulting from the interaction of its genotype with the environment.">Phenotype</vocab> refers to the observable physical or behavioral characteristics of an organism, resulting from how the genotype reacts to environmental stimuli (e.g., height, eye color, or personality traits).

## 2. Evolutionary Psychology
- Rooted in Charles Darwin's theory of natural selection.
- <vocab term="Evolutionary Psychology" definition="The study of how natural selection and adaptation shaped human cognitive processes and behaviors over time to maximize survival.">Evolutionary Psychology</vocab> explains how behavioral patterns and cognitive mechanisms evolved as adaptations that increased survival and reproduction.
- <vocab term="Natural Selection" definition="The evolutionary process whereby organisms better adapted to their environment tend to survive and produce more offspring.">Natural selection</vocab> ensures that traits which assist in survival are passed down to future generations, while maladaptive traits die out.

## 3. Twin and Adoption Studies
- To resolve the nature vs. nurture debate, researchers utilize twin studies:
  - **Identical twins** (<vocab term="Monozygotic Twins" definition="Twins who develop from a single fertilized egg that splits in two, sharing 100% of their genetic material.">monozygotic</vocab>) develop from a single fertilized egg and share 100% of their DNA.
  - **Fraternal twins** (<vocab term="Dizygotic Twins" definition="Twins who develop from two separate fertilized eggs, sharing approximately 50% of their genetic material, similar to normal siblings.">dizygotic</vocab>) develop from separate eggs and share roughly 50% of their DNA.
  - Comparing identical twins raised apart isolates genetic factors (**nature**), whereas comparing adopted children to their biological vs. adoptive parents highlights environmental factors (**nurture**).
`,
        questions: [
          {
            id: "q_psych_1.1.1",
            unitId: 1,
            text: "Which of the following refers to the physical or behavioral expression of an organism's genes?",
            options: ["Genotype", "Phenotype", "Chromatid", "Genome"],
            correctIndex: 1,
            hint: "Starts with P like 'Physical'.",
            explanation: "The phenotype is the set of observable characteristics of an individual resulting from the interaction of its genotype with the environment."
          },
          {
            id: "q_psych_1.1.2",
            unitId: 1,
            text: "Evolutionary psychologists study behavior primarily through the lens of which scientific theory?",
            options: ["Classical Conditioning", "Cognitive Development", "Natural Selection", "Social Learning Theory"],
            correctIndex: 2,
            hint: "Think Charles Darwin.",
            explanation: "Evolutionary psychology uses natural selection to explain why certain adaptive behaviors survived over generations."
          },
          {
            id: "q_psych_1.1.3",
            unitId: 1,
            text: "If identical twins reared apart exhibit highly similar intelligence scores, this finding suggests that:",
            options: [
              "Environment has no effect on intelligence",
              "Genetics plays a significant role in intelligence",
              "Intelligence is entirely determined by nurture",
              "Fraternal twins are more alike than identical twins"
            ],
            correctIndex: 1,
            hint: "Identical twins share 100% of their genes.",
            explanation: "High similarity in twins raised in different environments points to genetic factors having a strong influence."
          },
          {
            id: "q_psych_1.1.4",
            unitId: 1,
            text: "Dizygotic twins are also known as:",
            options: ["Identical twins", "Fraternal twins", "Maternal twins", "Cloned twins"],
            correctIndex: 1,
            hint: "They develop from two separate eggs.",
            explanation: "Dizygotic twins are fraternal twins, sharing approximately 50% of their genes, similar to normal siblings."
          },
          {
            id: "q_psych_1.1.5",
            unitId: 1,
            text: "A behavioral trait that increases an organism's chances of survival and reproduction is described as:",
            options: ["A mutation", "An adaptation", "A fixation", "An archetype"],
            correctIndex: 1,
            hint: "It helps the organism adapt to its environment.",
            explanation: "Adaptations are traits shaped by natural selection that improve evolutionary fitness."
          }
        ]
      },
      {
        id: "1.2",
        title: "Neuroanatomy, Nervous System Structures, and Neural Firing Dynamics",
        description: "Structure of neurons, action potentials, neurotransmitters, and brain organization.",
        youtubeId: "qPix_X-9t7E",
        article: `
# Neuroanatomy and Neural Firing Dynamics

The human brain controls behavior electrically and chemically through specialized cells.

<svg width="450" height="260" viewBox="0 0 450 260" class="max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4">
  <defs>
    <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#7b39fc" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="stemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#be123c" stop-opacity="0.8" />
    </linearGradient>
  </defs>
  <path d="M150 180 C110 180 80 150 80 110 C80 60 130 30 220 30 C310 30 360 70 360 110 C360 150 330 180 290 180 C280 180 270 170 260 170 C250 170 240 180 230 180 Z" fill="url(#brainGrad)" opacity="0.3" stroke="#a78bfa" stroke-width="2" />
  <path d="M290 180 C320 180 340 200 340 220 C340 240 310 240 280 230 C270 220 270 190 290 180 Z" fill="#38bdf8" opacity="0.4" stroke="#38bdf8" stroke-width="1.5" />
  <path d="M220 180 L230 250 L200 250 L205 180 Z" fill="url(#stemGrad)" stroke="#f43f5e" stroke-width="1.5" />
  <path d="M190 130 Q220 90, 260 130" fill="none" stroke="#fbbf24" stroke-width="4" stroke-linecap="round" />
  <circle cx="190" cy="130" r="8" fill="#fbbf24" />
  <path d="M260 130 C260 110 240 100 220 110" fill="none" stroke="#34d399" stroke-width="3" />
  
  <text x="90" y="80" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold">Cerebral Cortex</text>
  <line x1="170" y1="80" x2="190" y2="90" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
  
  <text x="320" y="210" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold">Cerebellum</text>
  <line x1="310" y1="210" x2="295" y2="215" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
  
  <text x="120" y="240" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold">Brainstem</text>
  <line x1="180" y1="235" x2="210" y2="230" stroke="rgba(255,255,255,0.4)" stroke-width="1" />
  <text x="120" y="140" fill="#fbbf24" font-size="11" font-family="sans-serif" font-weight="bold">Amygdala</text>
  <line x1="170" y1="135" x2="185" y2="130" stroke="#fbbf24" stroke-width="1" />
  
  <text x="280" y="105" fill="#34d399" font-size="11" font-family="sans-serif" font-weight="bold">Hippocampus</text>
  <line x1="275" y1="110" x2="245" y2="115" stroke="#34d399" stroke-width="1" />
</svg>

## 1. Anatomy of a Neuron
- <vocab term="Dendrites" definition="The branching structures of a neuron that receive incoming chemical signals from other cells.">Dendrites</vocab> receive chemical inputs from adjacent cells.
- **Soma (Cell Body)**: Keeps the cell alive and integrates signals.
- <vocab term="Axon" definition="The long, thin fiber that carries electrical action potentials away from the neuron cell body to terminal branches.">Axon</vocab> is the long pathway that transmits electrical impulses.
- <vocab term="Myelin Sheath" definition="A fatty layer insulating the axon that dramatically increases the velocity of neural impulse propagation.">Myelin Sheath</vocab> is a fatty layer of insulation that speeds up signals. Multiple sclerosis involves its degeneration.
- **Terminal Buttons**: Small bulbs releasing chemical neurotransmitters.

<svg width="450" height="220" viewBox="0 0 450 220" class="max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4">
  <path d="M20 90 L160 90 C190 90, 210 50, 240 50 C280 50, 290 120, 240 120 C210 120, 190 160, 160 160 L20 160" fill="none" stroke="#a78bfa" stroke-width="2.5" />
  <path d="M350 20 L350 200" fill="none" stroke="#38bdf8" stroke-width="3" />
  <circle cx="210" cy="80" r="10" fill="#7b39fc" stroke="#a78bfa" stroke-width="1" opacity="0.6" />
  <circle cx="210" cy="80" r="3" fill="#ffffff" />
  <circle cx="210" cy="80" r="2" fill="#ffffff" transform="translate(4,4)" />
  <circle cx="230" cy="100" r="10" fill="#7b39fc" stroke="#a78bfa" stroke-width="1" opacity="0.6" />
  <circle cx="230" cy="100" r="3" fill="#ffffff" />
  <circle cx="270" cy="85" r="3" fill="#34d399" />
  <circle cx="280" cy="70" r="3" fill="#34d399" />
  <circle cx="295" cy="90" r="3" fill="#34d399" />
  <circle cx="310" cy="80" r="3" fill="#34d399" />
  <circle cx="290" cy="120" r="3" fill="#34d399" />
  <path d="M345 70 L355 70 M345 75 L355 75" stroke="#38bdf8" stroke-width="2" />
  <rect x="340" y="70" width="6" height="5" fill="#34d399" />
  <path d="M345 110 L355 110 M345 115 L355 115" stroke="#38bdf8" stroke-width="2" />
  <path d="M345 150 L355 150 M345 155 L355 155" stroke="#38bdf8" stroke-width="2" />
  <text x="40" y="125" fill="#a78bfa" font-size="10" font-family="sans-serif">Axon Terminal</text>
  <text x="365" y="115" fill="#38bdf8" font-size="10" font-family="sans-serif">Postsynaptic Dendrite</text>
  <text x="250" y="190" fill="#34d399" font-size="10" font-family="sans-serif">Neurotransmitters (NT)</text>
  <line x1="280" y1="175" x2="285" y2="135" stroke="#34d399" stroke-dasharray="3" />
</svg>

## 2. Neural Firing Dynamics
- <vocab term="Action Potential" definition="A brief, self-propagating electrical reversal of membrane potential along a neuron axon (all-or-none process).">Action Potential</vocab> is the electrical impulse traveling down the axon.
- <vocab term="All-or-None Law" definition="The principle that a neuron fires at full strength or not at all; strong stimuli increase frequency, not strength.">All-or-none principle</vocab> dictates that a neuron fires at full capacity once the **threshold** (-55mV) is breached.
- <vocab term="Synapse" definition="The microscopic gap between the terminal buttons of a sending neuron and the dendrites of a receiving neuron.">Synaptic cleft</vocab> is the microscopic gap across which neurotransmitters transmit chemical signals.
`,
        questions: [
          {
            id: "q_psych_1.2.1",
            unitId: 1,
            text: "Which part of the neuron is covered by a fatty sheath that speeds up action potential transmission?",
            options: ["Dendrite", "Axon", "Soma", "Synapse"],
            correctIndex: 1,
            hint: "The myelin sheath covers this fiber.",
            explanation: "The myelin sheath insulates the axon, allowing electrical signals to hop down the node channels rapidly."
          },
          {
            id: "q_psych_1.2.2",
            unitId: 1,
            text: "During neural depolarization, which ion rushes into the cell to create a positive electrical charge?",
            options: ["Potassium", "Sodium", "Calcium", "Chloride"],
            correctIndex: 1,
            hint: "Chemical symbol Na+.",
            explanation: "Depolarization occurs when gated sodium channels open and sodium ions flood into the cell."
          },
          {
            id: "q_psych_1.2.3",
            unitId: 1,
            text: "The 'all-or-none' law of neural firing indicates that:",
            options: [
              "Neurons always release all of their neurotransmitters at once",
              "A neuron fires at full strength or not at all",
              "The brain turns either entirely on or off during sleep",
              "Stimulus intensity determines the speed of the action potential"
            ],
            correctIndex: 1,
            hint: "A gun either shoots at full force or does not shoot.",
            explanation: "The all-or-none principle states that once the threshold of excitation is reached, the action potential fires at a constant amplitude."
          },
          {
            id: "q_psych_1.2.4",
            unitId: 1,
            text: "Which brain structure inside the limbic system is critical for forming new explicit memories?",
            options: ["Cerebellum", "Amygdala", "Hippocampus", "Hypothalamus"],
            correctIndex: 2,
            hint: "If you saw a hippo on campus, you would remember it.",
            explanation: "The hippocampus is responsible for consolidating information from short-term to long-term memory."
          },
          {
            id: "q_psych_1.2.5",
            unitId: 1,
            text: "Damage to the occipital lobe would most directly impair which of the following?",
            options: ["Hearing", "Vision", "Fine Motor Planning", "Language Comprehension"],
            correctIndex: 1,
            hint: "Located at the very back of the head.",
            explanation: "The occipital lobe contains the primary visual cortex, responsible for processing visual input."
          }
        ]
      },
      {
        id: "1.3",
        title: "The Endocrine System, Psychoactive Pharmacology, and States of Consciousness",
        description: "Hormones, agonist/antagonist pharmacology, psychoactive drugs, and sleep cycle states.",
        youtubeId: "YcSG0UPsJ7c",
        article: `
# The Endocrine System, Pharmacology, and Consciousness

## 1. The Endocrine System
- Chemical signaling via <vocab term="Hormones" definition="Chemical messengers secreted by endocrine glands directly into the bloodstream to regulate physiological functions.">hormones</vocab> in the blood.
- <vocab term="Pituitary Gland" definition="The endocrine master gland, controlled by the hypothalamus, that directs other hormone-releasing glands.">Pituitary Gland</vocab> is the master regulator, governed directly by the hypothalamus.
- **Adrenal Glands** release adrenaline to trigger fight-or-flight states.

## 2. Psychoactive Pharmacology
Drugs alter conscious states at the synapse:
- <vocab term="Agonist" definition="A chemical substance that binds to receptors and mimics or enhances neurotransmitter actions.">Agonist</vocab> mimics and boosts neurotransmitter activity.
- <vocab term="Antagonist" definition="A chemical substance that binds to receptors and blocks or decreases neurotransmitter activity.">Antagonist</vocab> blocks neurotransmitter binding.
- **Reuptake Inhibitors** keep neurotransmitters in the synaptic gap longer.

## 3. Sleep States
Sleep occurs in 90-minute stages:
- **NREM-1 & NREM-2**: Light sleep with <vocab term="Sleep Spindles" definition="Bursts of rapid, rhythmic brain activity visible on an EEG during stage 2 sleep.">sleep spindles</vocab> (Stage 2 activity spikes).
- **NREM-3**: Deep sleep dominated by slow <vocab term="Delta Waves" definition="Large, slow brain waves associated with deep, restorative stage 3 sleep.">delta waves</vocab>.
- <vocab term="REM Sleep" definition="Rapid Eye Movement sleep; characterized by dreaming, brain activity resembling wakefulness, and motor paralysis.">REM Sleep</vocab> is the active dreaming stage featuring motor paralysis.
`,
        questions: [
          {
            id: "q_psych_1.3.1",
            unitId: 1,
            text: "Which endocrine gland is referred to as the 'master gland' and is controlled by the hypothalamus?",
            options: ["Thyroid Gland", "Adrenal Gland", "Pituitary Gland", "Pancreas"],
            correctIndex: 2,
            hint: "Regulates growth and controls other endocrine glands.",
            explanation: "The pituitary gland releases hormones that affect other glands under the direction of the brain's hypothalamus."
          },
          {
            id: "q_psych_1.3.2",
            unitId: 1,
            text: "An agonist drug is one that:",
            options: [
              "Blocks neurotransmitter receptors to stop firing",
              "Mimics a neurotransmitter to activate receptor sites",
              "Increases the speed of neurotransmitter reuptake",
              "Destroys myelin sheath insulation on axons"
            ],
            correctIndex: 1,
            hint: "It acts as an impostor that triggers the lock.",
            explanation: "Agonists fit into receptor sites and mimic natural neurotransmitters to trigger cell activation."
          },
          {
            id: "q_psych_1.3.3",
            unitId: 1,
            text: "Curare blocks acetylcholine receptors, causing paralysis. Curare acts as an:",
            options: ["Agonist", "Antagonist", "Enzyme", "Hormone"],
            correctIndex: 1,
            hint: "It blocks rather than mimics.",
            explanation: "An antagonist is a drug that binds to receptors and blocks neurotransmitter action."
          },
          {
            id: "q_psych_1.3.4",
            unitId: 1,
            text: "During NREM-2 sleep, the brain emits brief bursts of rapid, rhythmic activity known as:",
            options: ["Delta waves", "Alpha waves", "Sleep spindles", "Lucid waves"],
            correctIndex: 2,
            hint: "Rhythmic spikes visible on an EEG.",
            explanation: "Sleep spindles are signature EEG features of NREM-2 sleep."
          },
          {
            id: "q_psych_1.3.5",
            unitId: 1,
            text: "Why is REM sleep often called 'paradoxical sleep'?",
            options: [
              "Dreams occur but are never remembered",
              "Brain waves are active but voluntary muscles are paralyzed",
              "People sleepwalk during this stage despite dreaming",
              "The sleep cycle runs backwards during REM"
            ],
            correctIndex: 1,
            hint: "A paradox is a contradiction.",
            explanation: "REM is paradoxical because the nervous system is highly active while the skeletal muscles remain paralyzed."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Cognition",
    masteryWeight: "13–17%",
    topics: [
      {
        id: "2.1",
        title: "Principles of Sensation, Thresholds, and Sensory Anatomy",
        description: "Explore sensory transduction, absolute/difference thresholds, and eye/ear anatomy.",
        youtubeId: "unWnZvXJH2o",
        article: `
# Sensation, Thresholds, and Sensory Anatomy

**Sensation** begins with sensory receptors picking up physical stimuli.

<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4">
  <circle cx="280" cy="100" r="70" fill="none" stroke="#38bdf8" stroke-width="2" />
  <path d="M217 70 C200 85 200 115 217 130" fill="none" stroke="#818cf8" stroke-width="3" />
  <path d="M235 75 C242 85 242 115 235 125 C228 115 228 85 235 75 Z" fill="rgba(129, 140, 248, 0.4)" stroke="#818cf8" stroke-width="1.5" />
  <path d="M320 50 C345 70 345 130 320 150" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" />
  
  <line x1="40" y1="70" x2="208" y2="92" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2" />
  <line x1="40" y1="130" x2="208" y2="108" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="2" />
  <line x1="208" y1="92" x2="232" y2="100" stroke="#fbbf24" stroke-width="1.5" />
  <line x1="208" y1="108" x2="232" y2="100" stroke="#fbbf24" stroke-width="1.5" />
  <line x1="232" y1="100" x2="337" y2="100" stroke="#fbbf24" stroke-width="1.5" />
  
  <text x="140" y="60" fill="#818cf8" font-size="10" font-family="sans-serif">Cornea</text>
  <line x1="175" y1="65" x2="208" y2="85" stroke="#818cf8" stroke-width="1" />
  
  <text x="210" y="165" fill="#818cf8" font-size="10" font-family="sans-serif">Lens</text>
  <line x1="230" y1="152" x2="232" y2="130" stroke="#818cf8" stroke-width="1" />
  
  <text x="345" y="145" fill="#f43f5e" font-size="10" font-family="sans-serif">Retina</text>
  <line x1="340" y1="135" x2="330" y2="120" stroke="#f43f5e" stroke-width="1" />
  <text x="40" y="105" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Light Waves</text>
</svg>

## 1. Sensory Thresholds
- <vocab term="Absolute Threshold" definition="The minimum stimulation needed to detect a particular stimulus 50% of the time.">Absolute Threshold</vocab> is the lowest level of stimulus required for 50% detection.
- <vocab term="Difference Threshold" definition="The minimum difference between two stimuli required for detection 50% of the time (also called Just Noticeable Difference).">Difference Threshold (JND)</vocab> measures the minimum difference required to detect a change.
- <vocab term="Weber's Law" definition="The principle that to be perceived as different, two stimuli must differ by a constant minimum percentage rather than a constant amount.">Weber's Law</vocab> states difference thresholds scale by constant percentages, not absolute sums.
- <vocab term="Sensory Adaptation" definition="Diminished sensitivity to a stimulus as a consequence of constant, unchanging exposure.">Sensory Adaptation</vocab> is the fading of constant sensations (e.g., getting used to hot bathwater).

## 2. Visual and Auditory Transduction
- **Transduction** translates environmental energy into neural codes:
  - Visual transduction occurs via rods and cones on the **retina**.
  - Auditory transduction occurs via hair cells inside the **cochlea**.
`,
        questions: [
          {
            id: "q_psych_2.1.1",
            unitId: 2,
            text: "What law states that difference thresholds are proportional to a constant percentage of the original stimulus?",
            options: ["Signal Detection Theory", "Weber's Law", "Young-Helmholtz Theory", "Yerkes-Dodson Law"],
            correctIndex: 1,
            hint: "Focuses on constant ratios of weight, sound, etc.",
            explanation: "Weber's Law states that to perceive a difference, two stimuli must differ by a constant proportion."
          },
          {
            id: "q_psych_2.1.2",
            unitId: 2,
            text: "Where does visual transduction take place in the eye?",
            options: ["Lens", "Cornea", "Retina", "Iris"],
            correctIndex: 2,
            hint: "The layer containing rods and cones.",
            explanation: "Transduction, the conversion of light into neural impulses, occurs in the retina's photoreceptor cells."
          },
          {
            id: "q_psych_2.1.3",
            unitId: 2,
            text: "Which cells in the eye are highly sensitive to low light levels and allow for peripheral and night vision?",
            options: ["Cones", "Rods", "Ganglion Cells", "Bipolar Cells"],
            correctIndex: 1,
            hint: "Cones do color, whereas these do shades of gray.",
            explanation: "Rods are photoreceptors specialized for peripheral and dark/night vision."
          },
          {
            id: "q_psych_2.1.4",
            unitId: 2,
            text: "In the human ear, where are the hair cells that convert mechanical vibrations into neural signals located?",
            options: ["Eardrum", "Auditory Canal", "Cochlea", "Semicircular Canals"],
            correctIndex: 2,
            hint: "A snail-shaped, fluid-filled chamber.",
            explanation: "The hair cells inside the fluid-filled cochlea bend under pressure waves, initiating transduction."
          },
          {
            id: "q_psych_2.1.5",
            unitId: 2,
            text: "Walking into a kitchen and noticing a strong coffee smell that fades after ten minutes is an example of:",
            options: ["Transduction", "Sensory Adaptation", "Absolute Threshold", "Top-Down Processing"],
            correctIndex: 1,
            hint: "Adapting to a constant sensation.",
            explanation: "Sensory adaptation is our diminished sensitivity to constant, unchanging sensory stimulation."
          }
        ]
      },
      {
        id: "2.2",
        title: "Perceptual Processing, Mechanisms of Attention, and Perceptual Illusions",
        description: "Top-down vs bottom-up processing, Gestalt grouping, attention cues, and optical illusions.",
        youtubeId: "n46umYA_4dM",
        article: `
# Perceptual Processing and Attention

**Perception** makes sense of incoming sensations using cognitive processing.

## 1. Top-Down vs. Bottom-Up Processing
- <vocab term="Bottom-Up Processing" definition="Sensory analysis that begins at the entry level of sensory receptors and works up to integration in the brain.">Bottom-Up Processing</vocab> analyzes sensory details first, constructing the big picture from scratch (data-driven).
- <vocab term="Top-Down Processing" definition="Information processing guided by higher-level mental actions, experiences, and structural expectations.">Top-Down Processing</vocab> applies expectations, memories, and context to decipher sensations (concept-driven).

## 2. Gestalt Grouping
Gestalt theory says the brain interprets wholes instead of isolated parts:
- **Proximity**: Grouping close objects.
- **Similarity**: Grouping matching items.
- <vocab term="Closure" definition="The Gestalt perceptual tendency to fill in gaps to perceive a complete, whole object.">Closure</vocab> is the tendency to fill in shape gaps to view complete figures.

## 3. Attention Limitations
- <vocab term="Selective Attention" definition="The focusing of conscious awareness on a particular stimulus to the exclusion of others.">Selective Attention</vocab> directs awareness to one event, like the Cocktail Party Effect.
- <vocab term="Inattentional Blindness" definition="Failing to see highly visible objects when our attention is fully directed elsewhere.">Inattentional Blindness</vocab> causes us to miss obvious details when distracted.
`,
        questions: [
          {
            id: "q_psych_2.2.1",
            unitId: 2,
            text: "Which processing mode begins with raw sensory inputs and works up to higher-level mental representation?",
            options: ["Top-Down Processing", "Bottom-Up Processing", "Subliminal Processing", "Transduction"],
            correctIndex: 1,
            hint: "Starts at the bottom level of sensory receptors.",
            explanation: "Bottom-up processing starts at sensory entry level and moves up to integration."
          },
          {
            id: "q_psych_2.2.2",
            unitId: 2,
            text: "Perceiving a circle with gaps in it as a complete circle demonstrates which Gestalt principle?",
            options: ["Proximity", "Similarity", "Closure", "Continuity"],
            correctIndex: 2,
            hint: "The brain 'closes' the gaps.",
            explanation: "Closure is the Gestalt tendency to fill in visual gaps to perceive complete, enclosed objects."
          },
          {
            id: "q_psych_2.2.3",
            unitId: 2,
            text: "Failing to see a unicyclist riding past because you are focused on typing a text message is an example of:",
            options: ["Sensory Adaptation", "Selective Deprivation", "Inattentional Blindness", "Difference Threshold"],
            correctIndex: 2,
            hint: "Blindness due to lack of attention.",
            explanation: "Inattentional blindness occurs when we fail to notice visible objects due to selective attention elsewhere."
          },
          {
            id: "q_psych_2.2.4",
            unitId: 2,
            text: "The Cocktail Party Effect is a classic demonstration of:",
            options: ["Sensory Transduction", "Selective Attention", "Feature Detection", "Signal Amplitude"],
            correctIndex: 1,
            hint: "Filtering out other voices to hear one.",
            explanation: "The Cocktail Party Effect shows selective auditory attention in a noisy environment."
          },
          {
            id: "q_psych_2.2.5",
            unitId: 2,
            text: "Using your past experiences and expectations to read a smudged word in a letter is an example of:",
            options: ["Bottom-Up Processing", "Top-Down Processing", "Feature Extraction", "Transduction"],
            correctIndex: 1,
            hint: "Guided from the top (brain/schemas) down.",
            explanation: "Top-down processing uses pre-existing knowledge and context to interpret sensory inputs."
          }
        ]
      },
      {
        id: "2.3",
        title: "Cognitive Memory Systems, Problem Solving, Language, and Intelligence Testing",
        description: "Memory models, explicit/implicit storage, heuristics, language acquisition, and IQ testing.",
        youtubeId: "bSycdDx-gCA",
        article: `
# Cognitive Memory, Language, and Intelligence

## 1. Multi-Store Memory Model
Atkinson & Shiffrin proposed three memory structures:
1. **Sensory Memory**: Rapid physical logs (iconic/echoic).
2. **Short-Term Memory**: Holds 7 ± 2 items temporarily.
3. **Long-Term Memory**: Infinite permanent database:
   - <vocab term="Explicit Memory" definition="Memory of facts and experiences that one can consciously know and declare (processed by hippocampus).">Explicit Memory</vocab> covers declarative facts (semantic/episodic).
   - <vocab term="Implicit Memory" definition="Retention of learned skills or classical conditioning associations independent of conscious recollection (processed by cerebellum).">Implicit Memory</vocab> covers non-declarative skills (procedural habits).

## 2. Problem Solving and Obstacles
- **Algorithms**: Absolute step-by-step procedures.
- <vocab term="Heuristic" definition="A simple thinking strategy or mental shortcut that allows us to make judgments and solve problems efficiently.">Heuristics</vocab> are rapid cognitive shortcuts (mental rules-of-thumb).
- <vocab term="Functional Fixedness" definition="A cognitive bias that limits a person to using an object only in the way it is traditionally used.">Functional Fixedness</vocab> locks us into traditional object utilities.

## 3. Cognitive Testing
- **Alfred Binet** pioneered standardized IQ testing using mental age markers.
`,
        questions: [
          {
            id: "q_psych_2.3.1",
            unitId: 2,
            text: "Memory for motor skills like riding a bike or typing is categorized as what type of memory?",
            options: ["Semantic Memory", "Episodic Memory", "Implicit Memory", "Sensory Memory"],
            correctIndex: 2,
            hint: "Stored automatically, does not require conscious recall.",
            explanation: "Implicit (procedural) memory covers skills and conditioned behaviors that do not require conscious retrieval."
          },
          {
            id: "q_psych_2.3.2",
            unitId: 2,
            text: "Which theorist argued that humans are born with an innate Language Acquisition Device (LAD)?",
            options: ["B.F. Skinner", "Noam Chomsky", "Jean Piaget", "Albert Bandura"],
            correctIndex: 1,
            hint: "Nativist linguist.",
            explanation: "Noam Chomsky argued that human language capabilities are innate and governed by a language acquisition device."
          },
          {
            id: "q_psych_2.3.3",
            unitId: 2,
            text: "Failing to solve a puzzle because you cannot see how to use a coin as a screwdriver is a demonstration of:",
            options: ["Confirmation Bias", "Functional Fixedness", "Belief Perseverance", "Representativeness Heuristic"],
            correctIndex: 1,
            hint: "Being fixed on the standard function of the coin.",
            explanation: "Functional fixedness is a bias preventing someone from seeing alternative functions for an object."
          },
          {
            id: "q_psych_2.3.4",
            unitId: 2,
            text: "What is the typical storage capacity limit of short-term memory, as identified by George Miller?",
            options: ["3 ± 1 items", "7 ± 2 items", "12 ± 4 items", "Unlimited"],
            correctIndex: 1,
            hint: "The magical number.",
            explanation: "George Miller's research showed that short-term memory can store roughly 7 plus or minus 2 items."
          },
          {
            id: "q_psych_2.3.5",
            unitId: 2,
            text: "Who developed the first practical intelligence test to evaluate school children in France?",
            options: ["Francis Galton", "David Wechsler", "Alfred Binet", "Charles Spearman"],
            correctIndex: 2,
            hint: "Introduced the concept of mental age.",
            explanation: "Alfred Binet developed the first intelligence scales to identify children needing academic assistance."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Development and Learning",
    masteryWeight: "7–9%",
    topics: [
      {
        id: "3.1",
        title: "Classical Conditioning, Operant Conditioning, and Observational Learning",
        description: "Ivan Pavlov, B.F. Skinner, reinforcement schedules, and Albert Bandura's modeling.",
        youtubeId: "qG2Ko5upVk0",
        article: `
# Theories of Learning

Learning alters baseline behaviors through experiences.

<svg width="450" height="200" viewBox="0 0 450 200" class="max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4">
  <rect x="20" y="20" width="180" height="65" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
  <text x="30" y="38" fill="#a78bfa" font-size="10" font-family="sans-serif" font-weight="bold">1. BEFORE CONDITIONING</text>
  <text x="30" y="55" fill="#ffffff" font-size="9" font-family="sans-serif">US (Food) → UR (Salivation)</text>
  <text x="30" y="70" fill="#ffffff" font-size="9" font-family="sans-serif">NS (Bell) → No Response</text>
  
  <rect x="20" y="110" width="180" height="65" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
  <text x="30" y="128" fill="#a78bfa" font-size="10" font-family="sans-serif" font-weight="bold">2. DURING CONDITIONING</text>
  <text x="30" y="145" fill="#ffffff" font-size="9" font-family="sans-serif">NS (Bell) + US (Food)</text>
  <text x="30" y="160" fill="#ffffff" font-size="9" font-family="sans-serif">→ UR (Salivation)</text>
  
  <path d="M220 100 L240 100" fill="none" stroke="#fbbf24" stroke-width="2" />
  
  <rect x="250" y="65" width="180" height="65" rx="10" fill="rgba(34, 197, 148, 0.05)" stroke="#22c55e" stroke-width="1.5" />
  <text x="260" y="83" fill="#22c55e" font-size="10" font-family="sans-serif" font-weight="bold">3. AFTER CONDITIONING</text>
  <text x="260" y="105" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold">CS (Bell) → CR (Salivation)</text>
  <text x="260" y="120" fill="rgba(255,255,255,0.4)" font-size="8" font-family="sans-serif">Learned Association</text>
</svg>

## 1. Classical Conditioning
Discovered by Ivan Pavlov:
- **Unconditioned Stimulus (US)** triggers automatic responses.
- **Unconditioned Response (UR)** is the natural biological reflex.
- <vocab term="Conditioned Stimulus" definition="An originally neutral stimulus that, after association with an unconditioned stimulus, comes to trigger a conditioned response.">Conditioned Stimulus (CS)</vocab> is a learned cue triggering behaviors.
- <vocab term="Conditioned Response" definition="The learned response to a previously neutral (but now conditioned) stimulus.">Conditioned Response (CR)</vocab> is the newly formed behavior.
- <vocab term="Extinction" definition="The gradual weakening and disappearance of a conditioned response when the conditioned stimulus is repeatedly presented alone.">Extinction</vocab> occurs when the CS stops being paired with the US.

## 2. Operant Conditioning
Formulated by B.F. Skinner:
- <vocab term="Positive Reinforcement" definition="Increasing behaviors by presenting positive stimuli, such as food or praise, after a desired behavior occurs.">Positive Reinforcement</vocab> adds desirable stimulus to increase behaviors.
- <vocab term="Negative Reinforcement" definition="Increasing behaviors by stopping or reducing negative stimuli, such as pain or loud noises.">Negative Reinforcement</vocab> removes unpleasant stimulus to boost behaviors.
- **Reinforcement Schedules**:
  - *Fixed-Ratio*: Set response count trigger.
  - *Variable-Ratio*: Unpredictable count payouts (slot machines).
`,
        questions: [
          {
            id: "q_psych_3.1.1",
            unitId: 3,
            text: "In classical conditioning, what does a neutral stimulus (NS) become after successful pairing with an unconditioned stimulus (US)?",
            options: ["Conditioned Response", "Conditioned Stimulus", "Unconditioned Response", "Secondary Reinforcer"],
            correctIndex: 1,
            hint: "It now triggers a conditioned response.",
            explanation: "The neutral stimulus (like Pavlov's bell) becomes the conditioned stimulus (CS) once conditioning occurs."
          },
          {
            id: "q_psych_3.1.2",
            unitId: 3,
            text: "Taking an aspirin to relieve a painful headache is an example of:",
            options: ["Positive Reinforcement", "Negative Reinforcement", "Positive Punishment", "Negative Punishment"],
            correctIndex: 1,
            hint: "Removes/subtracts pain to increase behavior (taking aspirin).",
            explanation: "Negative reinforcement involves removing a negative stimulus (pain) to increase a behavior."
          },
          {
            id: "q_psych_3.1.3",
            unitId: 3,
            text: "Which reinforcement schedule produces the highest rate of steady responding and is most resistant to extinction?",
            options: ["Fixed-Interval", "Variable-Interval", "Fixed-Ratio", "Variable-Ratio"],
            correctIndex: 3,
            hint: "Think about how slot machines pay out.",
            explanation: "Variable-ratio schedules deliver reinforcement after an unpredictable number of responses, leading to rapid, steady response rates."
          },
          {
            id: "q_psych_3.1.4",
            unitId: 3,
            text: "Albert Bandura's famous Bobo Doll experiment illustrated the power of which type of learning?",
            options: ["Classical Conditioning", "Operant Conditioning", "Observational Learning", "Insight Learning"],
            correctIndex: 2,
            hint: "Learning by watching and copying others.",
            explanation: "Observational (social) learning involves observing and modeling the behavior of others."
          },
          {
            id: "q_psych_3.1.5",
            unitId: 3,
            text: "If a dog stops salivating to a bell because the bell is repeatedly presented without food, which process has occurred?",
            options: ["Acquisition", "Generalization", "Discrimination", "Extinction"],
            correctIndex: 3,
            hint: "The learned response has died out.",
            explanation: "Extinction occurs in classical conditioning when the conditioned stimulus is repeatedly presented alone."
          }
        ]
      },
      {
        id: "3.2",
        title: "Physical, Social, and Cognitive Lifespan Development Stages",
        description: "Jean Piaget's cognitive stages, Erik Erikson's conflicts, and developmental milestones.",
        youtubeId: "8nz2dtv--ok",
        article: `
# Developmental Stages Across the Lifespan

Developmental psychology maps physical, cognitive, and social milestones.

## 1. Jean Piaget's Cognitive Stages
Piaget proposed children navigate four distinct periods:
1. **Sensorimotor (0–2 yrs)**: Senses exploration. Milestone: <vocab term="Object Permanence" definition="The cognitive awareness that objects continue to exist even when they cannot be perceived.">Object Permanence</vocab>.
2. **Preoperational (2–7 yrs)**: Language development. Marked by <vocab term="Egocentrism" definition="The preoperational child's difficulty in taking another person's point of view.">Egocentrism</vocab> and lack of <vocab term="Conservation" definition="The principle that properties such as mass, volume, and number remain the same despite changes in the forms of objects.">conservation</vocab>.
3. **Concrete Operational (7–11 yrs)**: Logical thoughts on physical scenarios.
4. **Formal Operational (11+ yrs)**: Abstract and scientific deduction.

## 2. Erik Erikson's Psychosocial Conflicts
- Eight crises defining social milestones (e.g., Trust vs. Mistrust, Identity vs. Role Confusion).
`,
        questions: [
          {
            id: "q_psych_3.2.1",
            unitId: 3,
            text: "According to Piaget, during which stage does a child struggle to understand that liquid volume remains the same when poured into a taller glass?",
            options: ["Sensorimotor", "Preoperational", "Concrete Operational", "Formal Operational"],
            correctIndex: 1,
            hint: "They lack the concept of conservation.",
            explanation: "In the preoperational stage, children lack the concept of conservation and focus on single dimensions like height."
          },
          {
            id: "q_psych_3.2.2",
            unitId: 3,
            text: "What developmental milestone is typically achieved during the sensorimotor stage when a child learns that toys do not cease to exist when hidden?",
            options: ["Conservation", "Egocentrism", "Object Permanence", "Theory of Mind"],
            correctIndex: 2,
            hint: "The permanence of objects.",
            explanation: "Object permanence is the awareness that things continue to exist even when not perceived."
          },
          {
            id: "q_psych_3.2.3",
            unitId: 3,
            text: "According to Erikson, the primary developmental task of adolescence is resolving which conflict?",
            options: [
              "Trust vs. Mistrust",
              "Competence vs. Inferiority",
              "Identity vs. Role Confusion",
              "Intimacy vs. Isolation"
            ],
            correctIndex: 2,
            hint: "Discovering 'Who am I?'.",
            explanation: "Adolescents experience identity vs. role confusion as they test roles to form a cohesive self-identity."
          },
          {
            id: "q_psych_3.2.4",
            unitId: 3,
            text: "Mary Ainsworth used the 'Strange Situation' protocol to measure which developmental construct?",
            options: ["Moral Reasoning", "Attachment Styles", "Conservation Capability", "Egocentrism"],
            correctIndex: 1,
            hint: "Secure vs insecure bonding with caregivers.",
            explanation: "Ainsworth classified infant attachment styles (secure, insecure-avoidant, insecure-resistant) via separation tests."
          },
          {
            id: "q_psych_3.2.5",
            unitId: 3,
            text: "Erikson's final stage of psychosocial development, occurring in late adulthood, centers on which conflict?",
            options: ["Generativity vs. Stagnation", "Industry vs. Inferiority", "Integrity vs. Despair", "Intimacy vs. Isolation"],
            correctIndex: 2,
            hint: "Looking back on one's life with satisfaction or regret.",
            explanation: "Integrity vs. despair is the late-adulthood evaluation of one's life accomplishments."
          }
        ]
      },
      {
        id: "3.3",
        title: "Moral Development, Gender Identity, and Theories of Human Learning",
        description: "Kohlberg's moral stages, gender schema theory, and developmental learning.",
        youtubeId: "YOrKae_f7so",
        article: `
# Moral, Gender, and Learning Development

## 1. Lawrence Kohlberg's Moral Development
Stages of moral reasoning are classified into three levels:
1. **Preconventional**: Self-interest checks (reward vs. punishment).
2. **Conventional**: Group standards and laws conformity.
3. <vocab term="Postconventional Morality" definition="The highest level of moral reasoning, in which self-defined ethical principles prioritize universal human rights over simple laws.">Postconventional Morality</vocab> acts on self-defined, universal ethical principles.

## 2. Gender Identity Development
- <vocab term="Gender Schema Theory" definition="The theory that children learn from their cultures what it means to be male or female and adjust their behaviors accordingly.">Gender Schema Theory</vocab> states kids organize behaviors by gender categories.
`,
        questions: [
          {
            id: "q_psych_3.3.1",
            unitId: 3,
            text: "A person who decides not to steal a drug because 'it is against the law' is operating at which level of moral reasoning?",
            options: ["Preconventional", "Conventional", "Postconventional", "Concrete Operational"],
            correctIndex: 1,
            hint: "Focused on laws and maintaining social order.",
            explanation: "Conventional morality is centered on conforming to laws, duties, and social norms."
          },
          {
            id: "q_psych_3.3.2",
            unitId: 3,
            text: "Preconventional morality is characterized primarily by an orientation towards:",
            options: ["Universal ethical guidelines", "Social approval", "Punishment and reward", "Legal code updates"],
            correctIndex: 2,
            hint: "Egocentric focus on self-interest.",
            explanation: "Preconventional morality evaluates decisions solely based on direct punishments or rewards received."
          },
          {
            id: "q_psych_3.3.3",
            unitId: 3,
            text: "Which theory suggests that children actively build cognitive mental frameworks of male/female behavior to guide their identity?",
            options: ["Social Learning Theory", "Gender Schema Theory", "Psychodynamic Theory", "Attachment Theory"],
            correctIndex: 1,
            hint: "Focuses on mental 'schemas'.",
            explanation: "Gender Schema Theory states that children adjust behavior based on cultural concepts (schemas) of gender."
          },
          {
            id: "q_psych_3.3.4",
            unitId: 3,
            text: "Carol Gilligan criticized Kohlberg's theory of moral development primarily because she argued it:",
            options: [
              "Was only applicable to infants",
              "Biased against women by focusing on justice over care",
              "Ignored environmental variables",
              "Could not be replicated in laboratory setups"
            ],
            correctIndex: 1,
            hint: "Gilligan proposed a Care Perspective for female morality.",
            explanation: "Gilligan argued Kohlberg's stages favored abstract rules of justice over relational concern and care."
          },
          {
            id: "q_psych_3.3.5",
            unitId: 3,
            text: "A child copying their parent's cooking actions and being praised for it is an example of gender typing via:",
            options: ["Kohlbergian Ethics", "Social Learning Theory", "Genotypic Selection", "Sensory Accommodation"],
            correctIndex: 1,
            hint: "Learning by observation, imitation, and reinforcement.",
            explanation: "Social learning theory highlights how observation, modeling, and praise reinforce gender-typical behaviors."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Social Psychology and Personality",
    masteryWeight: "12–16%",
    topics: [
      {
        id: "4.1",
        title: "Motivational Drivers, Theories of Emotion, and Stress Responses",
        description: "Maslow's hierarchy, drive-reduction, theories of emotion, and General Adaptation Syndrome.",
        youtubeId: "t177QGgL4YI",
        article: `
# Motivation, Emotion, and Stress

## 1. Motivation Models
- <vocab term="Drive-Reduction Theory" definition="The idea that physiological needs create aroused states (drives) that motivate an organism to satisfy the need to restore homeostasis.">Drive-Reduction Theory</vocab> describes how internal biological imbalances drive behaviors.
- **Homeostasis**: The maintenance of stable physiological equilibriums.
- **Yerkes-Dodson Law**: Moderate arousal maximizes productivity for complex tasks.

## 2. Emotional Experience Theories
- **James-Lange**: Arousal occurs before emotional perception.
- **Cannon-Bard**: Physical arousal and emotions occur at the same time.
- <vocab term="Two-Factor Theory" definition="The Schachter-Singer theory that to experience emotion, one must be physically aroused and cognitively label the arousal.">Two-Factor Theory</vocab> (Schachter-Singer) dictates emotions need both physical arousal and a cognitive label.

## 3. General Adaptation Syndrome
Selye's stress stages: **Alarm** (CNS triggers), **Resistance** (hormonal adaptation), and **Exhaustion** (depleted energy).
`,
        questions: [
          {
            id: "q_psych_4.1.1",
            unitId: 4,
            text: "Which theory of motivation suggests that physiological needs create internal tension states that drive us to restore homeostasis?",
            options: ["Instinct Theory", "Drive-Reduction Theory", "Cognitive Dissonance", "Arousal Theory"],
            correctIndex: 1,
            hint: "Reducing physiological drives.",
            explanation: "Drive-reduction theory argues we are motivated to satisfy physiological drives to maintain homeostasis."
          },
          {
            id: "q_psych_4.1.2",
            unitId: 4,
            text: "According to the James-Lange theory of emotion, what is the sequence of emotional experience?",
            options: [
              "Cognitive label first, then physiological arousal",
              "Physiological arousal occurs, which then causes the subjective emotion",
              "Physiological response and cognitive feeling occur simultaneously",
              "Emotion occurs completely independent of any physical states"
            ],
            correctIndex: 1,
            hint: "Physical reaction precedes the emotional feeling.",
            explanation: "James-Lange states that physical changes in response to stimuli are registered, forming the emotional experience."
          },
          {
            id: "q_psych_4.1.3",
            unitId: 4,
            text: "Which emotional theory requires both physical arousal and a cognitive label to feel an emotion?",
            options: ["James-Lange", "Cannon-Bard", "Schachter-Singer Two-Factor", "Opponent-Process"],
            correctIndex: 2,
            hint: "Named after two researchers; has 'Two Factors'.",
            explanation: "Schachter-Singer Two-Factor theory states that arousal must be cognitively labeled before an emotion is experienced."
          },
          {
            id: "q_psych_4.1.4",
            unitId: 4,
            text: "Hans Selye's General Adaptation Syndrome (GAS) outlines which three stages of stress response?",
            options: [
              "Appraisal, Coping, Recovery",
              "Alarm, Resistance, Exhaustion",
              "Shock, Arousal, Adaptation",
              "Denial, Anger, Acceptance"
            ],
            correctIndex: 1,
            hint: "Starts with Alarm, ends with Exhaustion.",
            explanation: "The three stages of GAS are Alarm reaction, Resistance, and Exhaustion."
          },
          {
            id: "q_psych_4.1.5",
            unitId: 4,
            text: "The Yerkes-Dodson Law states that performance on complex tasks is typically best under which condition?",
            options: ["Very High Arousal", "Moderate Arousal", "Extremely Low Arousal", "No Arousal"],
            correctIndex: 1,
            hint: "Neither too relaxed nor too panicked.",
            explanation: "The Yerkes-Dodson law shows that moderate arousal levels optimize performance for most cognitive tasks."
          }
        ]
      },
      {
        id: "4.2",
        title: "Determinants of Personality, Psychometric Testing, and Trait Perspectives",
        description: "Freudian psychoanalysis, trait theories (Big Five), and personality assessments.",
        youtubeId: "mUELAi_qOBk",
        article: `
# Theories of Personality and Personality Testing

Personality studies analyze patterns of behavior, thoughts, and actions.

## 1. Freudian Mind Structures
- **Id**: Governed by the <vocab term="Pleasure Principle" definition="The id's boundary concept demanding immediate gratification of basic sexual and aggressive impulses.">pleasure principle</vocab> (immediate gratification).
- **Ego**: Governed by the reality principle.
- **Superego**: Governed by moral consciences.
- **Defense Mechanisms**: Ego tools (e.g., projection, displacement) to reduce anxiety.

## 2. Trait Theories
- **Big Five Personality Traits (OCEAN)**: Openness, Conscientiousness, Extraversion, Agreeableness, and <vocab term="Neuroticism" definition="A Big Five personality dimension mapping emotional instability, anxiety, moodiness, and vulnerability to stress.">Neuroticism</vocab> (emotional instability).
`,
        questions: [
          {
            id: "q_psych_4.2.1",
            unitId: 4,
            text: "According to Sigmund Freud, which component of personality operates on the pleasure principle, demanding immediate gratification?",
            options: ["Ego", "Superego", "Id", "Ideal Self"],
            correctIndex: 2,
            hint: "Purely unconscious primal impulses.",
            explanation: "The id operates on the pleasure principle, seeking immediate gratification of basic drives."
          },
          {
            id: "q_psych_4.2.2",
            unitId: 4,
            text: "Attributing your own unacceptable aggressive thoughts to someone else instead of yourself is which defense mechanism?",
            options: ["Displacement", "Projection", "Regression", "Rationalization"],
            correctIndex: 1,
            hint: "Projecting your own feelings onto another.",
            explanation: "Projection disguised threatening impulses by attributing them to others."
          },
          {
            id: "q_psych_4.2.3",
            unitId: 4,
            text: "Which of the following is NOT one of the Big Five personality traits?",
            options: ["Conscientiousness", "Neuroticism", "Self-Actualization", "Extraversion"],
            correctIndex: 2,
            hint: "Mnemonic is OCEAN.",
            explanation: "Self-actualization is a humanistic goal, not one of the Big Five traits (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)."
          },
          {
            id: "q_psych_4.2.4",
            unitId: 4,
            text: "The Rorschach Inkblot Test and the Thematic Apperception Test (TAT) are examples of:",
            options: ["Objective Tests", "Projective Tests", "Factor Analytic Inventories", "Cognitive Aptitude Tests"],
            correctIndex: 1,
            hint: "Designed to project unconscious desires onto ambiguous structures.",
            explanation: "Projective tests use ambiguous stimuli to prompt projection of inner feelings."
          },
          {
            id: "q_psych_4.2.5",
            unitId: 4,
            text: "Which inventory is widely used as a standardized objective assessment to diagnose personality disorders?",
            options: ["Rorschach Test", "TAT", "MMPI", "Binet Scale"],
            correctIndex: 2,
            hint: "Self-report questionnaire.",
            explanation: "The MMPI is the most widely researched and clinically used objective personality test."
          }
        ]
      },
      {
        id: "4.3",
        title: "Social Cognition, Attribution Theory, Group Dynamics, and Cultural Influence",
        description: "Fundamental attribution error, conformity (Asch), obedience (Milgram), and group behaviors.",
        youtubeId: "h6HLDV0T5Q8",
        article: `
# Social Psychology

Social psychology evaluates how people relate to and influence one another.

## 1. Social Attribution
- <vocab term="Fundamental Attribution Error" definition="The tendency for observers to underestimate situational factors and overestimate dispositional personality traits when analyzing others' behaviors.">Fundamental Attribution Error</vocab> is the tendency to blame actions on personality while ignoring situations.
- <vocab term="Cognitive Dissonance" definition="The mental discomfort felt when holding conflicting beliefs or actions, resolved by changing beliefs to match behaviors.">Cognitive Dissonance</vocab> (Festinger) is cognitive tension felt when actions mismatch beliefs.

## 2. Conformity and Obedience
- **Asch Conformity Studies**: Matching incorrect group answers to conform.
- **Milgram Obedience Studies**: Shocking others when ordered by researchers.
`,
        questions: [
          {
            id: "q_psych_4.3.1",
            unitId: 4,
            text: "What term describes the tendency to overestimate personality factors and underestimate situational factors when evaluating someone else's mistake?",
            options: ["Cognitive Dissonance", "Self-Serving Bias", "Fundamental Attribution Error", "Deindividuation"],
            correctIndex: 2,
            hint: "A fundamental attribution mistake.",
            explanation: "The fundamental attribution error describes the tendency to attribute others' behavior to internal factors rather than external conditions."
          },
          {
            id: "q_psych_4.3.2",
            unitId: 4,
            text: "Solomon Asch's famous study involving line-matching lengths evaluated which social construct?",
            options: ["Obedience", "Conformity", "Altruism", "Aggression"],
            correctIndex: 1,
            hint: "Adapting behavior to match the consensus of a group.",
            explanation: "Asch's studies proved that individuals will conform to a group's wrong answers to avoid social discomfort."
          },
          {
            id: "q_psych_4.3.3",
            unitId: 4,
            text: "Stanley Milgram's research measuring participants' willingness to administer electrical shocks evaluated:",
            options: ["Conformity", "Obedience to Authority", "Bystander Intervention", "Social Loafing"],
            correctIndex: 1,
            hint: "Following commands of a lab-coated researcher.",
            explanation: "Milgram's studies measured how far individuals would go in obeying instructions from an authority figure."
          },
          {
            id: "q_psych_4.3.4",
            unitId: 4,
            text: "Failing to help someone drop books in a crowded hallway because you assume someone else will do it is called:",
            options: ["Social Facilitation", "Groupthink", "Bystander Effect", "Deindividuation"],
            correctIndex: 2,
            hint: "Diffusion of responsibility in groups.",
            explanation: "The bystander effect occurs because presence of others diffuses individual responsibility, decreasing likelihood of help."
          },
          {
            id: "q_psych_4.3.5",
            unitId: 4,
            text: "Which theory argues that we change our attitudes when our behaviors do not match our beliefs, causing mental tension?",
            options: ["Attribution Theory", "Cognitive Dissonance Theory", "Social Exchange Theory", "Arousal Theory"],
            correctIndex: 1,
            hint: "Leon Festinger's dissonance.",
            explanation: "Cognitive dissonance is the tension felt when holding conflicting beliefs/actions, resolved by altering beliefs."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Mental and Physical Health",
    masteryWeight: "12–16%",
    topics: [
      {
        id: "5.1",
        title: "Research Methods, Statistical Analyses, and Ethical Guidelines in Psychological Science",
        description: "Scientific variable controls, correlation vs causation, data deviations, and ethical boundaries.",
        youtubeId: "hFV71QPvRYc",
        article: `
# Research Methods and Statistics in Psychology

## 1. Experimental Controls
- **Independent Variable (IV)** is the factor manipulated by researchers.
- **Dependent Variable (DV)** is the observed outcome.
- <vocab term="Random Assignment" definition="Assigning experimental study participants to control/experimental groups by chance to minimize pre-existing group differences.">Random Assignment</vocab> divides subjects into groups by chance to minimize individual pre-existing variables.

## 2. Statistical Analysis
- <vocab term="Standard Deviation" definition="A computed measure of how much data scores vary around the distribution mean.">Standard Deviation</vocab> measures variability around the mean.
- **Correlation** measures relationships but does not prove causation.
`,
        questions: [
          {
            id: "q_psych_5.1.1",
            unitId: 5,
            text: "Which research method is the only one that can establish cause-and-effect relationships?",
            options: ["Naturalistic Observation", "Correlational Study", "Experiment", "Case Study"],
            correctIndex: 2,
            hint: "Involves random assignment and manipulated variables.",
            explanation: "Experiments establish cause-and-effect because they isolate and control variables."
          },
          {
            id: "q_psych_5.1.2",
            unitId: 5,
            text: "The correlation coefficient between variable X and variable Y is +0.85. This indicates:",
            options: [
              "X causes Y to happen",
              "A strong positive relationship where as X increases, Y increases",
              "A very weak negative relationship",
              "There is zero relationship between X and Y"
            ],
            correctIndex: 1,
            hint: "Value is close to +1.00.",
            explanation: "A correlation coefficient of +0.85 indicates a strong positive linear relationship."
          },
          {
            id: "q_psych_5.1.3",
            unitId: 5,
            text: "What statistical measure describes how spread out scores are around the average mean?",
            options: ["Median", "Standard Deviation", "Correlation Coefficient", "Mode"],
            correctIndex: 1,
            hint: "Average deviation from the norm.",
            explanation: "Standard deviation measures the average distance of data points from the distribution's mean."
          },
          {
            id: "q_psych_5.1.4",
            unitId: 5,
            text: "In an experiment testing drug efficacy, the placebo group receives a sugar pill. This group is the:",
            options: ["Experimental Group", "Control Group", "Independent Variable", "Confounding Variable"],
            correctIndex: 1,
            hint: "The baseline group for comparison.",
            explanation: "The control group serves as a baseline comparison and does not receive the active independent variable."
          },
          {
            id: "q_psych_5.1.5",
            unitId: 5,
            text: "Explaining the true purpose of an experiment and clearing up any deceptions to a participant at the end is called:",
            options: ["Informed Consent", "Debriefing", "Coercion Protection", "Confidentiality Clearance"],
            correctIndex: 1,
            hint: "Reviewing the brief with the participant.",
            explanation: "Debriefing is the mandatory post-experimental explanation of study details and deceptions."
          }
        ]
      },
      {
        id: "5.2",
        title: "Diagnosis of Psychological Disorders and DSM-5 Categorization Frameworks",
        description: "Defining abnormal behavior, anxiety, depressive, bipolar disorders, and schizophrenia.",
        youtubeId: "wuhJ-GkRRQc",
        article: `
# Psychological Disorders and DSM-5 Diagnosis

## 1. Defining Abnormality: The 4 Ds
Psychologists classify abnormal behaviors via:
1. **Deviance**: Violating social rules.
2. **Distress**: Painful mental symptoms.
3. **Dysfunction**: Impairing daily activities.
4. **Danger**: Harming self or others.

<svg width="450" height="180" viewBox="0 0 450 180" class="max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4">
  <text x="225" y="25" text-anchor="middle" fill="#a78bfa" font-size="12" font-family="sans-serif" font-weight="bold">THE 4 Ds OF ABNORMALITY</text>
  <rect x="20" y="45" width="90" height="90" rx="10" fill="rgba(244, 63, 94, 0.05)" stroke="#f43f5e" stroke-width="1" />
  <text x="65" y="70" text-anchor="middle" fill="#f43f5e" font-size="10" font-family="sans-serif" font-weight="bold">DEVIANCE</text>
  <text x="65" y="95" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">Differs from</text>
  <text x="65" y="108" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">social norms</text>
  
  <rect x="125" y="45" width="90" height="90" rx="10" fill="rgba(251, 191, 36, 0.05)" stroke="#fbbf24" stroke-width="1" />
  <text x="170" y="70" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">DISTRESS</text>
  <text x="170" y="95" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">Subjective</text>
  <text x="170" y="108" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">unhappiness</text>
  
  <rect x="230" y="45" width="90" height="90" rx="10" fill="rgba(56, 189, 248, 0.05)" stroke="#38bdf8" stroke-width="1" />
  <text x="275" y="70" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">DYSFUNCTION</text>
  <text x="275" y="95" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">Impairs daily</text>
  <text x="275" y="108" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">life tasks</text>
  
  <rect x="335" y="45" width="90" height="90" rx="10" fill="rgba(34, 197, 148, 0.05)" stroke="#22c55e" stroke-width="1" />
  <text x="380" y="70" text-anchor="middle" fill="#22c55e" font-size="10" font-family="sans-serif" font-weight="bold">DANGER</text>
  <text x="380" y="95" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">Risk to self</text>
  <text x="380" y="108" text-anchor="middle" fill="#ffffff" font-size="8" font-family="sans-serif">or others</text>
</svg>

## 2. Diagnosis Classification
- <vocab term="DSM-5" definition="The Diagnostic and Statistical Manual of Mental Disorders; the standardized classification manual containing symptom checklists for clinical diagnoses.">DSM-5</vocab> provides standardized criteria for clinical evaluations without listing causes/treatment recipes.
- **Schizophrenia Spectrum**: Mapped by <vocab term="Hallucinations" definition="False sensory perceptions occurring in the absence of any external environmental stimulus.">hallucinations</vocab> (false sensory perceptions) and <vocab term="Delusions" definition="False beliefs, often of persecution or grandeur, that are maintained despite contradictory evidence.">delusions</vocab> (false belief structures).
`,
        questions: [
          {
            id: "q_psych_5.2.1",
            unitId: 5,
            text: "The Diagnostic and Statistical Manual of Mental Disorders (DSM-5) is primarily designed to do which of the following?",
            options: [
              "Recommend psychoactive drug dosages",
              "Provide theoretical explanations for the causes of disorders",
              "Provide symptom checklists to classify and diagnose disorders",
              "Outline standard cognitive behavioral therapy exercises"
            ],
            correctIndex: 2,
            hint: "Focuses on categorization and diagnostic criteria.",
            explanation: "The DSM-5 is a diagnostic tool containing categorization guidelines and symptom checklists for mental disorders."
          },
          {
            id: "q_psych_5.2.2",
            unitId: 5,
            text: "Intrusive, repetitive thoughts are called _______, whereas the repetitive actions performed to reduce anxiety are called _______.",
            options: ["Compulsions; Obsessions", "Obsessions; Compulsions", "Delusions; Hallucinations", "Hallucinations; Delusions"],
            correctIndex: 1,
            hint: "Obsessing in thoughts vs. acting compulsively.",
            explanation: "Obsessions are persistent, unwanted thoughts; compulsions are the behaviors performed to alleviate the obsession."
          },
          {
            id: "q_psych_5.2.3",
            unitId: 5,
            text: "Believing that you are the secret ruler of the universe is a ________, while hearing voices that do not exist is a ________.",
            options: ["Delusion; Hallucination", "Hallucination; Delusion", "Compulsion; Obsession", "Manic state; Depressive state"],
            correctIndex: 0,
            hint: "Delusions are false beliefs; hallucinations are sensory experiences.",
            explanation: "Delusions are false beliefs unsupported by reality; hallucinations are false sensory inputs in the absence of stimuli."
          },
          {
            id: "q_psych_5.2.4",
            unitId: 5,
            text: "Which class of disorders is characterized by alternating cycles of intense depression and euphoric mania?",
            options: ["Anxiety Disorders", "Schizophrenia Spectrum", "Bipolar Disorders", "Dissociative Disorders"],
            correctIndex: 2,
            hint: "Alternating between two opposing poles.",
            explanation: "Bipolar disorders involve transitions between major depressive episodes and manic states."
          },
          {
            id: "q_psych_5.2.5",
            unitId: 5,
            text: "To be diagnosed with a mental disorder, an individual's behavior must typically cause significant impairment in daily life. This criterion is known as:",
            options: ["Deviance", "Dysfunction", "Danger", "Distress"],
            correctIndex: 1,
            hint: "Inability to function normally.",
            explanation: "Dysfunction is the criteria assessing how much the symptoms interfere with daily social or occupational behaviors."
          }
        ]
      },
      {
        id: "5.3",
        title: "Psychological Treatment Modalities, Cognitive Behavioral Therapy, and Biomedical Approaches",
        description: "Psychodynamic, client-centered, behavioral conditioning, CBT, and biomedical options.",
        youtubeId: "6nEL44QkL9w",
        article: `
# Psychological Treatments and Biomedical Options

## 1. Therapy Modalities
- **Psychodynamic**: Unconscious conflict exploration.
- **Humanistic**: Carl Rogers' Client-Centered therapy providing **unconditional positive regard**.
- **Behavioral**: Applies conditioning principles:
  - <vocab term="Systematic Desensitization" definition="A behavioral therapy technique that pairs gradual, hierarchy-based exposure to feared stimuli with deep physical relaxation to treat phobias.">Systematic Desensitization</vocab> pairs gradual exposure to phobias with muscle relaxation.
- <vocab term="Cognitive Behavioral Therapy" definition="An integrative therapy combining cognitive restructuring (replacing distorted thoughts) with behavioral modifications.">Cognitive Behavioral Therapy (CBT)</vocab> redirects self-defeating thoughts and alters behaviors.

## 2. Biomedical Interventions
- **Antidepressants (SSRIs)** block serotonin reuptake to increase availability.
- **ECT**: Inducing mild seizures to combat treatment-resistant depression.
`,
        questions: [
          {
            id: "q_psych_5.3.1",
            unitId: 5,
            text: "Which therapeutic perspective focuses on providing unconditional positive regard and active listening to encourage self-actualization?",
            options: ["Psychodynamic", "Behavioral", "Humanistic", "Cognitive"],
            correctIndex: 2,
            hint: "Developed by Carl Rogers.",
            explanation: "Humanistic therapies emphasize unconditional positive regard, empathy, and active listening to foster self-acceptance."
          },
          {
            id: "q_psych_5.3.2",
            unitId: 5,
            text: "A therapist helps a client overcome a phobia by guiding them through muscle relaxation while gradually imagining fear scenarios. This technique is:",
            options: ["Aversive Conditioning", "Systematic Desensitization", "Free Association", "Rational Emotive Therapy"],
            correctIndex: 1,
            hint: "Gradually desensitizing the systematic fear hierarchy.",
            explanation: "Systematic desensitization is a behaviorist technique pairing gradual exposure to phobias with deep relaxation."
          },
          {
            id: "q_psych_5.3.3",
            unitId: 5,
            text: "Selective Serotonin Reuptake Inhibitors (SSRIs) are primary biological treatments for depression that function by:",
            options: [
              "Blocking dopamine receptors in the brain stem",
              "Destroying serotonin vesicles in synapses",
              "Blocking the reabsorption of serotonin to leave it in the synapse longer",
              "Inducing mini-seizures in the cerebral cortex"
            ],
            correctIndex: 2,
            hint: "Inhibits reuptake of Serotonin.",
            explanation: "SSRIs block the reuptake mechanism of serotonin, increasing its concentration and availability in synaptic gaps."
          },
          {
            id: "q_psych_5.3.4",
            unitId: 5,
            text: "What integrative therapy focuses on challenging self-defeating thoughts and immediately replacing them with productive actions?",
            options: ["Psychoanalysis", "Client-Centered Therapy", "Cognitive Behavioral Therapy (CBT)", "Aversive Conditioning"],
            correctIndex: 2,
            hint: "Combines cognitive restructuring with behavioral therapy.",
            explanation: "CBT targets cognitive distortions and couples it with behavioral modifications to alter reactions."
          },
          {
            id: "q_psych_5.3.5",
            unitId: 5,
            text: "Electroconvulsive Therapy (ECT) is used primarily as a treatment for which severe condition?",
            options: ["Schizophrenia", "Obsessive-Compulsive Disorder", "Treatment-Resistant Depression", "Phobias"],
            correctIndex: 2,
            hint: "Administered as a last resort for mood disorders.",
            explanation: "ECT is highly effective for treatment-resistant major depression when psychotherapy and medications fail."
          }
        ]
      }
    ]
  }
];
