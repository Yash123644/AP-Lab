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
- **Genotype**: The actual genetic makeup of an organism, inherited from parents.
- **Phenotype**: The observable physical or behavioral characteristics of an organism, resulting from the interaction of its genotype with the environment.

## 2. Evolutionary Psychology
- Rooted in Charles Darwin's theory of natural selection.
- **Evolutionary Psychology** explains how behavioral patterns and cognitive mechanisms evolved as adaptations that increased survival and reproduction.
- Examples include universal human traits, such as language acquisition, mate selection preferences, and fear of spiders or heights.

## 3. Twin and Adoption Studies
- Psychologists use these studies to isolate genetic vs. environmental factors.
- **Identical twins (monozygotic)** share 100% of their DNA, while **fraternal twins (dizygotic)** share 50%. If identical twins reared apart show similar personality traits, it suggests a strong genetic component (nature).
- Adoptees are compared to biological and adoptive parents to assess the impact of shared environment (nurture).
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

The human brain is a complex web of billions of specialized cells called neurons that communicate electrically and chemically.

![Brain Anatomy](/images/courses/ap-psych/brain-anatomy.png)

## 1. Anatomy of a Neuron
- **Dendrites**: Branching extensions that receive chemical signals from other neurons.
- **Soma (Cell Body)**: Contains the nucleus and maintains cell health.
- **Axon**: Long fiber that carries electrical impulses (action potentials) away from the cell body.
- **Myelin Sheath**: Fatty insulation covering the axon that speeds up neural transmission. Damage causes Multiple Sclerosis.
- **Terminal Buttons**: Bulbs at the end of axons that release chemical neurotransmitters into the synapse.

![Neurotransmission](/images/courses/ap-psych/neurotransmission.png)

## 2. Neural Firing Dynamics
Neural communication is electrochemical:
1. **Resting Potential**: The neuron is inactive and polarized, with a net negative charge inside (-70mV).
2. **Threshold**: The minimum level of stimulation required to trigger an action potential (-55mV).
3. **Depolarization**: Sodium ions rush inside, changing the charge to positive (+30mV).
4. **Action Potential**: The electrical impulse traveling down the axon. This is an **all-or-none** process; a stronger stimulus does not make a stronger impulse, it only increases the frequency of firing.
5. **Synaptic Cleft**: The microscopic gap between the sending axon and receiving dendrite. Neurotransmitters bridge this gap.

## 3. Brain Structures
- **Cerebral Cortex**: Divided into four lobes:
  - **Frontal Lobe**: Decision making, planning, motor cortex.
  - **Parietal Lobe**: Sensory cortex (touch, spatial awareness).
  - **Occipital Lobe**: Visual processing.
  - **Temporal Lobe**: Auditory processing.
- **Limbic System**: Responsible for emotion and memory:
  - **Hippocampus**: Formation of new memories.
  - **Amygdala**: Emotional responses, particularly fear and aggression.
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
- A slow chemical communication system utilizing **hormones** released directly into the bloodstream.
- **Pituitary Gland**: Known as the 'master gland' controlled by the hypothalamus.
- **Adrenal Glands**: Release epinephrine (adrenaline) during stress responses (fight-or-flight).

## 2. Psychoactive Pharmacology
Drugs alter consciousness by changing synaptic neurotransmission:
- **Agonists**: Mimic neurotransmitters, binding to receptors to activate them (e.g., Morphine mimics Endorphins).
- **Antagonists**: Block receptor sites, preventing neurotransmitters from binding (e.g., Curare blocks Acetylcholine).
- **Reuptake Inhibitors**: Block the reabsorption of neurotransmitters, leaving them in the synapse longer (e.g., SSRIs block Serotonin reuptake).

## 3. States of Consciousness and Sleep
Sleep cycles last approximately 90 minutes, transitioning through distinct stages:
- **NREM-1**: Light sleep; contains theta waves, hypnagogic jerks.
- **NREM-2**: Deeper relaxation; characterized by **sleep spindles** (bursts of rapid brain activity).
- **NREM-3**: Deep sleep; dominated by slow **delta waves**. Night terrors and sleepwalking occur here.
- **REM (Rapid Eye Movement)**: Dreaming stage; brain waves look active (similar to waking beta waves), but muscles are paralyzed (paradoxical sleep).
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

**Sensation** is the process by which our sensory receptors and nervous system receive stimulus energies from our environment.

## 1. Thresholds
- **Absolute Threshold**: The minimum stimulation needed to detect a particular stimulus 50% of the time.
- **Difference Threshold (Just Noticeable Difference - JND)**: The minimum difference between two stimuli required for detection 50% of the time.
- **Weber's Law**: States that for two stimuli to be perceived as different, they must differ by a constant minimum *percentage* rather than a constant *amount* (e.g., adding 1 ounce to a 10-ounce weight is noticeable, but adding 1 ounce to a 100-ounce weight is not).
- **Sensory Adaptation**: Diminished sensitivity as a consequence of constant, unchanging stimulation (e.g., stopping noticing the smell of perfume after a few minutes).

## 2. Sensory Anatomy
- **Anatomy of the Eye**:
  - **Cornea**: Clear, protective outer layer.
  - **Pupil / Iris**: Opening that controls light entry.
  - **Lens**: Focuses light onto the back of the eye.
  - **Retina**: Contains photoreceptor cells:
    - **Rods**: Detect black, white, and gray; critical for night vision.
    - **Cones**: Detect fine detail and color; concentrated in the center (**fovea**).
  - **Transduction**: Occurs in the photoreceptors of the retina.
- **Anatomy of the Ear**:
  - Sound waves vibrate the tympanic membrane (eardrum), ossicles (hammer, anvil, stirrup), and fluid in the cochlea.
  - **Transduction**: Occurs in the **hair cells** on the basilar membrane inside the **cochlea**.
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

**Perception** is the cognitive organization and interpretation of raw sensory inputs.

## 1. Processing Modes
- **Bottom-Up Processing**: Analysis that begins with sensory receptors and works up to the brain's integration (data-driven).
- **Top-Down Processing**: Guided by higher-level mental processes, such as expectations, experience, and motivation (schema-driven).

## 2. Gestalt Principles of Grouping
Gestalt psychologists showed that the brain naturally organizes visual elements into meaningful wholes:
- **Proximity**: Grouping nearby elements together.
- **Similarity**: Grouping elements that look alike.
- **Continuity**: Perceiving smooth, continuous paths.
- **Closure**: Filling in visual gaps to perceive a complete object.

## 3. Mechanisms of Attention
- **Selective Attention**: Focusing conscious awareness on a specific stimulus (e.g., the **Cocktail Party Effect**).
- **Inattentional Blindness**: Failing to see visible objects when our attention is directed elsewhere (e.g., the famous invisible gorilla experiment).

## 4. Optical Illusions
- Illusions occur when sensory signals trick perceptual interpretations (e.g., the Müller-Lyer illusion or Ames Room). They reveal how the brain relies on schemas of size and depth consistency.
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

## 1. Information-Processing Model of Memory
Developed by Atkinson and Shiffrin, memory has three distinct stages:
1. **Sensory Memory**: Extremely brief storage of sensory information (iconic: visual; echoic: auditory).
2. **Short-Term Memory (STM)**: Working memory with limited capacity (7 ± 2 items) and duration (~30 seconds without rehearsal).
3. **Long-Term Memory (LTM)**: Infinite capacity, permanent storage:
   - **Explicit (Declarative)**: Facts and events (processed in the hippocampus):
     - *Semantic*: General knowledge.
     - *Episodic*: Personal experiences.
   - **Implicit (Non-declarative)**: Motor skills and conditioned responses (processed in the cerebellum).

## 2. Problem Solving
- **Algorithms**: Step-by-step procedures that guarantee a correct solution (slow).
- **Heuristics**: Mental shortcuts or rules-of-thumb (fast but error-prone).
- **Functional Fixedness**: The cognitive bias limiting individuals to using an object only in its traditional way.

## 3. Language Acquisition
- **Noam Chomsky**: Proposed a **Language Acquisition Device (LAD)** and universal grammar, arguing that language capability is innate.
- **B.F. Skinner**: Argued language is learned entirely via operant conditioning (imitation/reinforcement).

## 4. Intelligence Assessments
- **Alfred Binet**: Created the first intelligence test to identify French children needing special assistance, introducing **Mental Age**.
- **David Wechsler**: Developed the WAIS/WISC, the most widely used modern intelligence tests, scoring against standardized age curves.
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

Learning is a relatively permanent change in behavior resulting from experience.

![Classical Conditioning](/images/courses/ap-psych/classical-conditioning.png)

## 1. Classical Conditioning
Discovered by Ivan Pavlov:
- **Unconditioned Stimulus (US)**: A stimulus that naturally triggers a response (e.g., food).
- **Unconditioned Response (UR)**: The unlearned, natural response (e.g., salivation to food).
- **Conditioned Stimulus (CS)**: An originally neutral stimulus that, after association, triggers a response (e.g., bell).
- **Conditioned Response (CR)**: The learned response to the conditioned stimulus (e.g., salivation to bell).
- **Extinction**: Decrease in CR when the US is no longer paired with the CS.

## 2. Operant Conditioning
Formulated by B.F. Skinner, based on consequences:
- **Reinforcement**: *Increases* behavior.
  - *Positive*: Adding a desirable stimulus (e.g., reward).
  - *Negative*: Removing an undesirable stimulus (e.g., stopping a loud noise).
- **Punishment**: *Decreases* behavior.
  - *Positive*: Adding an unpleasant stimulus (e.g., spanking).
  - *Negative*: Removing a pleasant stimulus (e.g., grounding).
- **Schedules of Reinforcement**:
  - *Fixed-Ratio*: Reinforcing after a set number of responses.
  - *Variable-Ratio*: Reinforcing after an unpredictable number of responses (highest resistance to extinction, e.g., slot machines).
  - *Fixed-Interval*: Reinforcing after a set period of time.
  - *Variable-Interval*: Reinforcing after an unpredictable period of time.

## 3. Observational Learning
- **Albert Bandura**: Demonstrated learning via imitation and modeling in the **Bobo Doll Experiment**. Children copy aggressive actions they see adults perform.
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

Developmental psychology studies physical, cognitive, and social changes from conception to death.

## 1. Jean Piaget's Stages of Cognitive Development
Piaget proposed children's brains develop through four active stages:
1. **Sensorimotor (0–2 years)**: Experience the world through senses and motor actions. Major milestone: **Object Permanence** (realizing items exist when out of sight).
2. **Preoperational (2–7 years)**: Represent things with words and images. Characterized by **egocentrism** (inability to see others' points of view) and lack of **conservation** (understanding quantity stays same despite shape change).
3. **Concrete Operational (7–11 years)**: Think logically about concrete events, understand conservation and mathematical transformations.
4. **Formal Operational (11+ years)**: Develop abstract logic and hypothetical reasoning.

## 2. Erik Erikson's Psychosocial Development
Erikson proposed 8 developmental stages, each defined by a key psychosocial conflict:
- **Trust vs. Mistrust (0-1 yr)**: Secure attachment base.
- **Autonomy vs. Shame (1-3 yrs)**: Independence.
- **Initiative vs. Guilt (3-6 yrs)**: Plan activities.
- **Industry vs. Inferiority (6-12 yrs)**: Academic/social competence.
- **Identity vs. Role Confusion (Adolescence)**: Form self-identity.
- **Intimacy vs. Isolation (Early Adulthood)**: Relationships.
- **Generativity vs. Stagnation (Middle Adulthood)**: Contribution to society.
- **Integrity vs. Despair (Late Adulthood)**: Reflection on life.
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
        description: "Lawrence Kohlberg's moral stages, gender schemas, and developmental learning theories.",
        youtubeId: "YOrKae_f7so",
        article: `
# Moral, Gender, and Learning Development

## 1. Lawrence Kohlberg's Moral Development
Kohlberg proposed three levels of moral reasoning based on responses to moral dilemmas:
1. **Preconventional Morality**: Focused on self-interest (obeying rules to avoid punishment or gain concrete rewards).
2. **Conventional Morality**: Focused on social rules and laws (obeying to gain social approval or maintain social order).
3. **Postconventional Morality**: Focused on abstract, self-defined ethical principles (evaluating laws against universal human rights).

## 2. Gender Identity
- **Gender Schema Theory**: Children learn from their culture what it means to be male or female and construct mental categories (schemas) that guide their behavior.
- **Social Learning Theory**: Children acquire gender roles through imitation of models and positive/negative reinforcement from parents and peers.
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

## 1. Theories of Motivation
- **Drive-Reduction Theory**: Physiological needs (like hunger) create arousal (drives) that motivate an organism to satisfy the need to return to **homeostasis** (equilibrium).
- **Arousal Theory / Yerkes-Dodson Law**: We seek an optimal level of arousal. Moderate arousal leads to optimal performance; high anxiety impairs complex tasks.
- **Maslow's Hierarchy of Needs**: Pyramid structure starting with physiological needs, moving through safety, belonging, self-esteem, up to **self-actualization**.

## 2. Theories of Emotion
How do physical responses and cognitive feelings align?
- **James-Lange Theory**: Physiological arousal occurs *first*, which then causes our conscious emotion (e.g., we are afraid because we run).
- **Cannon-Bard Theory**: Physiological arousal and conscious emotion occur *simultaneously* and independently.
- **Schachter-Singer Two-Factor Theory**: Emotion requires both physiological arousal AND a cognitive label/appraisal of that arousal.

## 3. General Adaptation Syndrome (GAS)
Developed by Hans Selye, describing the body's response to chronic stress:
1. **Alarm Reaction**: Sudden sympathetic nervous system activation (heart rate spikes).
2. **Resistance**: Temperature and blood pressure remain high; hormones are pumped to cope with stress.
3. **Exhaustion**: Resources are depleted, making the body vulnerable to illness or collapse.
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

Personality is an individual's characteristic pattern of thinking, feeling, and acting.

## 1. Psychoanalytic Perspective
Proposed by Sigmund Freud:
- **Structure of Mind**:
  - **Id**: Operates on the **pleasure principle** (unconscious primal drives).
  - **Ego**: Operates on the **reality principle** (rational mediator).
  - **Superego**: Operates on the **moral principle** (conscience).
- **Defense Mechanisms**: Ego's protective methods of reducing anxiety by unconsciously distorting reality (e.g., Repression, Projection, Displacement, Regression, Rationalization).

## 2. Trait Perspective
Focuses on identifying stable behavioral patterns:
- **The Big Five Personality Traits (OCEAN)**:
  - **O**penness: Imaginative vs. practical.
  - **C**onscientiousness: Organized vs. careless.
  - **E**xtraversion: Sociable vs. reserved.
  - **A**greeableness: Soft-hearted vs. suspicious.
  - **N**euroticism: Anxious vs. calm (emotional stability).

## 3. Personality Testing
- **Projective Tests**: Subjective tests presenting ambiguous stimuli to reveal unconscious dynamics (e.g., Rorschach Inkblot, Thematic Apperception Test - TAT).
- **Self-Report Inventories**: Standardized objective questionnaires (e.g., MMPI - Minnesota Multiphasic Personality Inventory).
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

Social psychology studies how we think about, influence, and relate to one another.

## 1. Social Cognition
- **Attribution Theory**: We explain behavior by attributing it to internal dispositions (personality) or external situations (environment).
- **Fundamental Attribution Error (FAE)**: The tendency for observers to underestimate situational factors and overestimate dispositional factors when analyzing another's behavior.
- **Cognitive Dissonance Theory**: Formulated by Leon Festinger. When our attitudes and actions clash, we experience discomfort (dissonance) and are motivated to reduce it by changing our attitudes to align with actions.

## 2. Social Influence
- **Conformity (Solomon Asch)**: Adjusting behavior or thinking to coincide with a group standard. Asch demonstrated this with his line judgment studies.
- **Obedience (Stanley Milgram)**: Complying with orders from an authority figure. Milgram's electric shock studies showed that a majority of participants complied fully.

## 3. Group Dynamics
- **Social Facilitation**: Improved performance on simple or well-learned tasks in the presence of others.
- **Bystander Effect**: The tendency for a bystander to be less likely to give aid if other onlookers are present, due to **diffusion of responsibility**.
- **Groupthink**: Harmonious but unrealistic group thinking when dissenting viewpoints are suppressed to maintain group cohesion.
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

## 1. Experimental Design Variables
To prevent confounding results, psychologists use rigid controls:
- **Independent Variable (IV)**: The factor manipulated by the experimenter.
- **Dependent Variable (DV)**: The factor measured to observe the effect of the IV.
- **Random Assignment**: Assigning participants to experimental or control groups by chance to minimize individual differences.

## 2. Statistical Analyses
- **Descriptive Statistics**:
  - *Measures of Central Tendency*: Mean (average), Median (middle score), Mode (most common).
  - *Measures of Variation*: Range (highest minus lowest), **Standard Deviation** (measures how much scores deviate from the mean).
- **Correlation**: Measures relationship strength between -1.00 and +1.00. **Correlation does not prove causation**.

## 3. Ethical Guidelines
APA ethical standards require:
- **Informed Consent**: Informing participants of research parameters before they agree.
- **Confidentiality**: Keeping participant data private.
- **Debriefing**: Explaining the experiment's true purpose and any deception afterwards.
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
        description: "Defining atypical behavior, diagnosing criteria, and classifying DSM-5 categories.",
        youtubeId: "wuhJ-GkRRQc",
        article: `
# Psychological Disorders and DSM-5 Diagnosis

## 1. Defining Abnormal Behavior
Psychologists use the **4 Ds** to help define psychological disorders:
1. **Deviance**: Behavior that differs significantly from societal norms.
2. **Distress**: Unpleasant feelings or distress for the individual.
3. **Dysfunction**: Impairing daily life activities (relationships, jobs).
4. **Danger**: Posing danger to self or others.

## 2. The DSM-5 Categorization
- **DSM-5 (Diagnostic and Statistical Manual of Mental Disorders)**: Standardized reference manual containing symptom checklists, diagnostic criteria, and guidelines for classification.
- It does **not** explain causes or treatments; it only classifies and diagnoses.

## 3. Major Disorder Categories
- **Anxiety Disorders**: General state of apprehension or dread (e.g., Generalized Anxiety Disorder, Panic Disorder, Phobias).
- **Obsessive-Compulsive Disorder (OCD)**: Obsessions (intrusive thoughts) triggering compulsions (repetitive behaviors).
- **Depressive Disorders**: Mapped by persistent sadness, lethargy, and loss of interest (e.g., Major Depressive Disorder).
- **Bipolar Disorders**: Alternating between depressive lows and manic highs.
- **Schizophrenia Spectrum**: Marked by **hallucinations** (false sensory perceptions), **delusions** (false beliefs), and disorganized speech.
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
# Treatment Modalities and Biomedical Approaches

## 1. Psychotherapy Perspectives
- **Psychodynamic Therapy**: Derived from psychoanalysis. Aims to uncover unconscious conflicts using free association and dream analysis.
- **Humanistic (Client-Centered) Therapy**: Formulated by Carl Rogers. Focuses on conscious thoughts and self-acceptance, using **active listening** and **unconditional positive regard**.
- **Behavioral Therapies**: Apply learning principles to eliminate problem behaviors:
  - *Systematic Desensitization*: Exposing patients to gradual anxiety-provoking stimuli while relaxed (used for phobias).
  - *Aversive Conditioning*: Pairing an unwanted behavior with an unpleasant stimulus (e.g., matching alcohol with nausea-inducing drugs).
- **Cognitive Behavioral Therapy (CBT)**: A highly effective integrative therapy combining cognitive restructuring (challenging self-defeating thoughts) with behavioral modification.

## 2. Biomedical Approaches
- **Psychopharmacology**:
  - *Antianxiety Drugs*: Depress central nervous system (e.g., Xanax, Valium).
  - *Antidepressants*: Increase serotonin levels (e.g., SSRIs like Prozac).
  - *Antipsychotics*: Block dopamine receptors to treat schizophrenia (e.g., Thorazine).
- **Electroconvulsive Therapy (ECT)**: Administering electric currents to induce a mild seizure in anesthetized patients; used as a last resort for severe depression.
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
