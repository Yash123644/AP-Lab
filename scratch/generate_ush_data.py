# -*- coding: utf-8 -*-
import os
import json

OUTPUT_PATH = "/Users/yashpatil/AP Lab/src/lib/courses/ap-ush-data.ts"

data = [
    {
        'id': 1,
        'title': 'Period 1: 1491–1607',
        'masteryWeight': '5%',
        'topics': [
            {
                'id': '1.1',
                'title': 'Pre-Columbian Native American Societies and Environments',
                'description': 'Explore native cultures across North America, focusing on adaptation to geography, maize cultivation, and social structures.',
                'youtubeId': '_rSS9Z538xg',
                'article': '''# Pre-Columbian Native American Societies and Environments

Before European arrival in 1492, North America was populated by millions of indigenous peoples organized into hundreds of distinct societies. These cultures were shaped entirely by their environments, adapting their social structures, economies, and political systems to diverse geographic landscapes.

## Maize Cultivation and Agricultural Adaptation

The introduction of <vocab term="Maize Cultivation" definition="The agricultural cultivation of corn, originating in Mesoamerica and spreading north, which supported settled agricultural societies with larger populations.">maize cultivation</vocab> from Mesoamerica northward into the American Southwest and beyond transformed nomadic tribes into settled agricultural societies.
- **Southwest (Pueblo, Anasazi)**: Developed advanced irrigation systems to channel scarce water to maize fields in arid climates. They built multi-story adobe cliff dwellings.
- **Mississippi River Valley & East (Cahokia)**: Constructed large earthen mounds and supported highly structured chiefdoms through farming maize, squash, and beans (the "Three Sisters").
- **Great Plains & Great Basin (Lakota, Shoshone)**: Due to lack of arable land and water, societies here remained mobile and hunter-gatherer focused, relying on bison and foraging.
- **Pacific Northwest & California (Chinook)**: Supported by abundant ocean resources and giant redwood forests, they established permanent fishing villages and complex social hierarchies.

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- North American Regions Map Sketch -->
  <rect x="10" y="10" width="430" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  
  <!-- Northwest Coast -->
  <g transform="translate(30, 20)">
    <circle cx="20" cy="20" r="15" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" stroke-width="1.5" />
    <text x="20" y="45" fill="#ffffff" font-size="8" text-anchor="middle">Northwest</text>
    <text x="20" y="55" fill="#a1a1aa" font-size="7" text-anchor="middle">Fishing / Permanent</text>
  </g>
  
  <!-- Great Plains -->
  <g transform="translate(130, 40)">
    <circle cx="20" cy="20" r="15" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1.5" />
    <text x="20" y="45" fill="#ffffff" font-size="8" text-anchor="middle">Great Plains</text>
    <text x="20" y="55" fill="#a1a1aa" font-size="7" text-anchor="middle">Nomadic / Bison</text>
  </g>
  
  <!-- Southwest -->
  <g transform="translate(230, 60)">
    <circle cx="20" cy="20" r="15" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="1.5" />
    <text x="20" y="45" fill="#fbbf24" font-size="8" text-anchor="middle">Southwest</text>
    <text x="20" y="55" fill="#a1a1aa" font-size="7" text-anchor="middle">Pueblo / Maize</text>
  </g>

  <!-- Eastern Woodlands -->
  <g transform="translate(340, 30)">
    <circle cx="20" cy="20" r="15" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5" />
    <text x="20" y="45" fill="#ffffff" font-size="8" text-anchor="middle">East / Woodlands</text>
    <text x="20" y="55" fill="#a1a1aa" font-size="7" text-anchor="middle">Mixed Agri / Iroquois</text>
  </g>
</svg>
</div>
''',
                'questions': [
                    {
                        'id': 'q1.1.1',
                        'unitId': 1,
                        'text': 'Which of the following best describes the impact of maize cultivation on pre-Columbian Native American societies?',
                        'options': [
                            'It forced tribes to become nomadic to find suitable fertile soil.',
                            'It fostered economic development, settlement, and social diversification.',
                            'It led to the immediate extinction of hunter-gatherer societies.',
                            'It prevented tribes from forming sophisticated political alliances.'
                        ],
                        'correctIndex': 1,
                        'hint': 'Think about how agriculture affects population size and settlement patterns.',
                        'explanation': 'Maize cultivation supported larger, settled populations, allowing for specialized labor, social hierarchies, and permanent villages.'
                    },
                    {
                        'id': 'q1.1.2',
                        'unitId': 1,
                        'text': 'Native American societies in the Great Plains and Great Basin regions reacted to their geography by doing which of the following?',
                        'options': [
                            'Developing complex, multi-tiered urban cliff dwellings.',
                            'Relying extensively on ocean resources and permanent timber villages.',
                            'Maintaining mobile, hunter-gatherer lifestyles centered on bison herds.',
                            'Establishing the intensive cultivation of tobacco and cotton.'
                        ],
                        'correctIndex': 2,
                        'hint': 'Arid climates in the Great Basin made large-scale settled farming very difficult.',
                        'explanation': 'Due to dry climates and lack of abundant waterways, societies in the Great Plains and Great Basin remained largely nomadic, following migration patterns of bison.'
                    },
                    {
                        'id': 'q1.1.3',
                        'unitId': 1,
                        'text': 'The Anasazi and Pueblo societies of the American Southwest adapted to their arid environment by using which innovation?',
                        'options': [
                            'Floating gardens known as chinampas.',
                            'Complex irrigation channels and adobe housing.',
                            'Large earthen ceremonial burial mounds.',
                            'Portable tipis constructed from bison homes.'
                        ],
                        'correctIndex': 1,
                        'hint': 'Southwest Native Americans built structures from baked clay (adobe) and diverted water to grow corn.',
                        'explanation': 'Pueblo peoples built sophisticated canals and dams to cultivate maize in dry canyon floors, alongside permanent multi-story adobe complexes.'
                    },
                    {
                        'id': 'q1.1.4',
                        'unitId': 1,
                        'text': 'What type of economy characterized Native American tribes in the Pacific Northwest prior to contact?',
                        'options': [
                            'Nomadic hunting of caribou herds.',
                            'Intensive maize farming and commercial crop trade.',
                            'Mixed hunter-gatherer and permanent coastal fishing settlements.',
                            'Heavy dependency on trans-Atlantic trade networks.'
                        ],
                        'correctIndex': 2,
                        'hint': 'Think of the rich coastline resources and dense forests of Washington and Oregon.',
                        'explanation': 'The abundant marine resources and forests of the Northwest allowed societies like the Chinook to build stable, permanent villages supported by salmon fishing and foraging.'
                    },
                    {
                        'id': 'q1.1.5',
                        'unitId': 1,
                        'text': 'Which pre-Columbian Native American civilization is best known for creating the largest urban center north of Mexico (Cahokia) with earthen mounds?',
                        'options': [
                            'The Mississippian culture',
                            'The Pueblo culture',
                            'The Iroquois Confederacy',
                            'The Aztec Empire'
                        ],
                        'correctIndex': 0,
                        'hint': 'This society was centered near modern-day St. Louis and relied on the fertile Mississippi valley.',
                        'explanation': 'The Mississippian culture constructed massive mounds at Cahokia, supporting a population of tens of thousands through highly organized agricultural and trade systems.'
                    }
                ]
            },
            {
                'id': '1.2',
                'title': 'European Exploration, Conquest, and the Columbian Exchange',
                'description': 'Analyze the motivations of Spanish, Portuguese, and French explorers, and the massive ecological and demographical impacts of the Columbian Exchange.',
                'youtubeId': '3mXgZ5x88-Q',
                'article': '''# European Exploration, Conquest, and the Columbian Exchange

European exploration was driven by the quest for wealth, status, and religious converts—often summarized as **Gold, Glory, and God**. The resulting interaction between the Eastern and Western Hemispheres sparked the **Columbian Exchange**, an unprecedented global transfer of life, technology, and disease.

## Motivations for Exploration
- **Gold**: Finding direct routes to Asian spice markets and discovering precious metals (gold and silver).
- **Glory**: Achieving national prestige and personal status for imperial monarchs and conquistadors.
- **God**: Spreading Catholicism (particularly by the Spanish and Portuguese) to newly encountered populations.

## The Columbian Exchange

The <vocab term="Columbian Exchange" definition="The extensive transfer of plants, animals, culture, human populations, technology, and diseases between the Americas and the Old World following Columbus's 1492 voyage.">Columbian Exchange</vocab> fundamentally restructured global demography:
1. **From Europe/Africa to the Americas**:
   - *Livestock*: Horses, cattle, pigs (which transformed Native transport and agriculture).
   - *Crops*: Wheat, rice, sugar (leading to sugar plantation economies).
   - *Diseases*: Smallpox, measles, influenza. Lacking immunity, Native populations suffered catastrophic declines, sometimes exceeding **90%**.
2. **From the Americas to Europe**:
   - *Nutritious Crops*: Potatoes, maize, tomatoes, cassava. These high-calorie foods triggered rapid population growth and urbanization across Europe.
   - *Precious Metals*: Massive influxes of silver and gold shifted Europe from feudalism to early capitalism.

<div class="flex justify-center my-8">
<svg width="400" height="160" viewBox="0 0 400 160" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Columbian Exchange flow diagram -->
  <text x="60" y="25" fill="#a1a1aa" font-size="10" text-anchor="middle">Americas (New World)</text>
  <text x="340" y="25" fill="#a1a1aa" font-size="10" text-anchor="middle">Europe / Africa (Old World)</text>
  
  <!-- Arrow: New to Old -->
  <path d="M 120 50 Q 200 30 280 50" fill="none" stroke="#20c997" stroke-width="2" marker-end="url(#arrow-phys)" />
  <text x="200" y="25" fill="#20c997" font-size="8" text-anchor="middle">Maize, Potato, Tomato, Silver</text>
  
  <!-- Arrow: Old to New -->
  <path d="M 280 110 Q 200 130 120 110" fill="none" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-phys)" />
  <text x="200" y="145" fill="#fbbf24" font-size="8" text-anchor="middle">Diseases (Smallpox), Horses, Sugar</text>
</svg>
</div>
''',
                'questions': [
                    {
                        'id': 'q1.2.1',
                        'unitId': 1,
                        'text': 'Which of the following was a primary political motivation for European exploration in the 15th and 16th centuries?',
                        'options': [
                            'To establish democratic self-governing colonies.',
                            'To increase the prestige, wealth, and power of imperial monarchs.',
                            'To escape religious persecution by native kingdoms.',
                            'To build alliances with powerful Native American military confederacies.'
                        ],
                        'correctIndex': 1,
                        'hint': 'Monarchs sought to outcompete other European nations in establishing global empires.',
                        'explanation': 'European exploration was heavily sponsored by monarchies seeking national power, direct luxury trade routes, and wealth (Glory and Gold).'
                    },
                    {
                        'id': 'q1.2.2',
                        'unitId': 1,
                        'text': 'What was the most immediate and devastating impact of the Columbian Exchange on Native American populations?',
                        'options': [
                            'The introduction of horses, which destroyed their crops.',
                            'The rapid depletion of bison herds.',
                            'The spread of infectious diseases such as smallpox, for which they had no immunity.',
                            'The sudden shortage of high-calorie foods like maize.'
                        ],
                        'correctIndex': 2,
                        'hint': 'Microscopic pathogens were far more lethal than European weapons.',
                        'explanation': 'Infectious diseases like smallpox, influenza, and measles decimated Native populations, causing mortality rates upwards of 90% in some regions.'
                    },
                    {
                        'id': 'q1.2.3',
                        'unitId': 1,
                        'text': 'Which New World food crop had the largest long-term impact on European populations by improving nutrition and triggering population growth?',
                        'options': [
                            'Sugar cane',
                            'Wheat',
                            'The potato',
                            'Barley'
                        ],
                        'correctIndex': 2,
                        'hint': 'This tuber grows underground, yields high calories per acre, and became a staple in Ireland and Germany.',
                        'explanation': 'The high calorie and nutrient density of crops like the potato and maize supported major population booms and urbanization throughout Europe.'
                    },
                    {
                        'id': 'q1.2.4',
                        'unitId': 1,
                        'text': 'The introduction of which Old World animal most radically altered the military power and hunting patterns of Great Plains Native Americans?',
                        'options': [
                            'The sheep',
                            'The horse',
                            'The pig',
                            'The chicken'
                        ],
                        'correctIndex': 1,
                        'hint': 'This animal allowed nomadic tribes to hunt bison much more efficiently.',
                        'explanation': 'Spanish horses escaped or were traded into the Great Plains, allowing tribes like the Comanche and Lakota to transform into formidable mounted warriors and highly efficient bison hunters.'
                    },
                    {
                        'id': 'q1.2.5',
                        'unitId': 1,
                        'text': 'How did the influx of silver and gold from the Americas affect Western Europe\'s economy?',
                        'options': [
                            'It triggered a return to strict feudalism.',
                            'It stabilized currency prices and eliminated inflation.',
                            'It stimulated capitalism and expanded banking systems.',
                            'It forced Europeans to rely entirely on trade with Asia.'
                        ],
                        'correctIndex': 2,
                        'hint': 'Consider how massive influxes of liquid wealth altered trade networks and investment.',
                        'explanation': 'The huge influx of precious metals from Spanish American mines caused price inflation but also fueled the growth of commerce, banking, and capitalism in European economies.'
                    }
                ]
            },
            {
                'id': '1.3',
                'title': 'The Spanish Empire, Encomienda System, and Cultural Transmutation',
                'description': 'Examine Spanish labor systems including the encomienda, the emergence of the casta system, and early debates over Native rights.',
                'youtubeId': 'rJH93c3h9wQ',
                'article': '''# The Spanish Empire, Encomienda System, and Cultural Transmutation

The Spanish built a sprawling empire in the Americas, using coercive labor systems to extract resources and developing a strict social hierarchy to maintain control. Over time, European, African, and Native cultures blended, creating a unique syncretic society.

## The Encomienda System

The <vocab term="Encomienda System" definition="A Spanish labor system that granted conquerors the right to force Native Americans to work in mines and fields in exchange for Christianizing them and providing protection.">encomienda system</vocab> was established to exploit Native labor:
- Spanish crown granted Spanish colonists (encomenderos) control over specific Native villages.
- Encomenderos forced Natives to mine silver or cultivate crops.
- In theory, encomenderos were required to protect and convert Natives to Catholicism. In practice, the system was characterized by brutal exploitation.
- As Native populations declined from disease, the Spanish increasingly turned to the **Transatlantic Slave Trade** for African labor, particularly on sugar plantations.

## The Casta System

To maintain control over a highly diverse empire, the Spanish established the <vocab term="Casta System" definition="A racial hierarchy system in the Spanish colonies that graded social status based on parental racial background.">casta system</vocab>:
- **Peninsulares**: Spanish-born elites (held high political office).
- **Creoles**: Spanish descendants born in the Americas.
- **Mestizos**: Mixed Spanish and Native American ancestry.
- **Mulattoes**: Mixed Spanish and African ancestry.
- **Native Americans & African Slaves**: Bottom of the social hierarchy.

## Debates Over Treatment: Sepúlveda vs. Las Casas
The brutality of Spanish rule led to theological and philosophical debates:
- **Bartolomé de Las Casas**: A Dominican priest who argued that Native Americans were rational, free human beings who should be treated with dignity and converted through peaceful persuasion.
- **Juan Ginés de Sepúlveda**: A theologian who argued that Natives were 'natural slaves' who benefited from Spanish domination and conversion.

<div class="flex justify-center my-8">
<svg width="400" height="180" viewBox="0 0 400 180" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Casta System Pyramid -->
  <line x1="200" y1="20" x2="320" y2="160" stroke="#a1a1aa" stroke-width="1.5" />
  <line x1="200" y1="20" x2="80" y2="160" stroke="#a1a1aa" stroke-width="1.5" />
  <line x1="80" y1="160" x2="320" y2="160" stroke="#a1a1aa" stroke-width="1.5" />
  
  <!-- Division lines -->
  <line x1="170" y1="55" x2="230" y2="55" stroke="#a1a1aa" stroke-dasharray="2,2" />
  <line x1="140" y1="90" x2="260" y2="90" stroke="#a1a1aa" stroke-dasharray="2,2" />
  <line x1="110" y1="125" x2="290" y2="125" stroke="#a1a1aa" stroke-dasharray="2,2" />
  
  <!-- Labels -->
  <text x="200" y="45" fill="#fbbf24" font-size="8" text-anchor="middle" font-weight="bold">Peninsulares</text>
  <text x="200" y="78" fill="#ffffff" font-size="8" text-anchor="middle">Creoles</text>
  <text x="200" y="112" fill="#ffffff" font-size="8" text-anchor="middle">Mestizos / Mulattoes</text>
  <text x="200" y="148" fill="#a1a1aa" font-size="8" text-anchor="middle">Natives / African Slaves</text>
</svg>
</div>
''',
                'questions': [
                    {
                        'id': 'q1.3.1',
                        'unitId': 1,
                        'text': 'Under the encomienda system, Spanish encomenderos were granted Native labor in exchange for which obligation?',
                        'options': [
                            'Paying the Natives fair wages and granting them Spanish citizenship.',
                            'Protecting them and converting them to the Catholic faith.',
                            'Providing them with modern military weapons to fight rival tribes.',
                            'Allowing them to maintain their indigenous political structure.'
                        ],
                        'correctIndex': 1,
                        'hint': 'The Spanish crown justified the labor extraction under the guise of religious paternalism.',
                        'explanation': 'Colonists were theoretically responsible for defending the Natives and teaching them Christianity, though in practice the system became slave-like coercion.'
                    },
                    {
                        'id': 'q1.3.2',
                        'unitId': 1,
                        'text': 'What factor most directly led the Spanish Empire to replace the encomienda system with African slave labor?',
                        'options': [
                            'A royal decree outlawing all forms of mineral extraction.',
                            'The decimation of Native populations by European diseases.',
                            'The complete lack of sugar cane cultivation in the Caribbean.',
                            'The refusal of the Catholic Church to baptize Native Americans.'
                        ],
                        'correctIndex': 1,
                        'hint': 'Think of the demographic disaster caused by smallpox in the Caribbean.',
                        'explanation': 'As millions of Native Americans died of smallpox, Spanish landowners faced severe labor shortages and turned to imported enslaved West Africans.'
                    },
                    {
                        'id': 'q1.3.3',
                        'unitId': 1,
                        'text': 'Which of the following describes a Mestizo within the colonial Spanish casta system?',
                        'options': [
                            'A colonist born in Spain.',
                            'A descendant of Spanish parents born in the New World.',
                            'An individual of mixed Spanish and Native American ancestry.',
                            'An individual of mixed African and Native American ancestry.'
                        ],
                        'correctIndex': 2,
                        'hint': 'Mestizo comes from the Spanish word for \'mixed\'.',
                        'explanation': 'Mestizos were children of Spanish and Native parents, forming a large intermediate social class below the Creoles but above Native Americans.'
                    },
                    {
                        'id': 'q1.3.4',
                        'unitId': 1,
                        'text': 'During the Valladolid Debate, Bartolomé de Las Casas argued which of the following?',
                        'options': [
                            'Native Americans were \'natural slaves\' and inferior to Europeans.',
                            'Native Americans were rational humans who deserved humane treatment and conversion by persuasion.',
                            'Native American labor should be abolished and replaced with European indentured servants.',
                            'The Spanish Crown should immediately withdraw entirely from the Americas.'
                        ],
                        'correctIndex': 1,
                        'hint': 'Las Casas was a former encomendero who became a protector of the Natives.',
                        'explanation': 'Las Casas defended the basic humanity and rights of Native Americans, opposing Sepúlveda\'s assertions of their natural inferiority.'
                    },
                    {
                        'id': 'q1.3.5',
                        'unitId': 1,
                        'text': 'The Valladolid Debate of 1550–1551 is historically significant because it was the first debate to discuss which topic?',
                        'options': [
                            'The absolute supremacy of the Pope over Spanish kings.',
                            'The legitimacy of using enslaved labor in Europe.',
                            'The basic moral rights and treatment of colonized indigenous peoples.',
                            'The geographical boundary lines of the Treaty of Tordesillas.'
                        ],
                        'correctIndex': 2,
                        'hint': 'Consider the ethical questions that arose from the conquest of Mesoamerica.',
                        'explanation': 'The debate was the first formal European theological/philosophical discussion addressing the morality of conquering and enslaving colonized peoples.'
                    }
                ]
            }
        ]
    }
]
