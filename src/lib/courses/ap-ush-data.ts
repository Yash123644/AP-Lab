export interface APUSHQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  unitId: number;
}

export interface APUSHTopic {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  image?: string;
  article: string;
  questions: APUSHQuestion[];
}

export interface APUSHUnit {
  id: number;
  title: string;
  masteryWeight: string;
  topics: APUSHTopic[];
}

export const apUshData: APUSHUnit[] = [
  {
    "id": 1,
    "title": "Period 1: 1491–1607",
    "masteryWeight": "5%",
    "topics": [
      {
        "id": "1.1",
        "title": "Pre-Columbian Native American Societies and Environments",
        "description": "Explore native cultures across North America, focusing on adaptation to geography, maize cultivation, and social structures.",
        "youtubeId": "_rSS9Z538xg",
        "article": "# Pre-Columbian Native American Societies and Environments\n\nBefore European arrival in 1492, North America was populated by millions of indigenous peoples organized into hundreds of distinct societies. These cultures were shaped entirely by their environments, adapting their social structures, economies, and political systems to diverse geographic landscapes.\n\n## Maize Cultivation and Agricultural Adaptation\n\nThe introduction of <vocab term=\"Maize Cultivation\" definition=\"The agricultural cultivation of corn, originating in Mesoamerica and spreading north, which supported settled agricultural societies with larger populations.\">maize cultivation</vocab> from Mesoamerica northward into the American Southwest and beyond transformed nomadic tribes into settled agricultural societies.\n- **Southwest (Pueblo, Anasazi)**: Developed advanced irrigation systems to channel scarce water to maize fields in arid climates. They built multi-story adobe cliff dwellings.\n- **Mississippi River Valley & East (Cahokia)**: Constructed large earthen mounds and supported highly structured chiefdoms through farming maize, squash, and beans (the \"Three Sisters\").\n- **Great Plains & Great Basin (Lakota, Shoshone)**: Due to lack of arable land and water, societies here remained mobile and hunter-gatherer focused, relying on bison and foraging.\n- **Pacific Northwest & California (Chinook)**: Supported by abundant ocean resources and giant redwood forests, they established permanent fishing villages and complex social hierarchies.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"450\" height=\"150\" viewBox=\"0 0 450 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- North American Regions Map Sketch -->\n  <rect x=\"10\" y=\"10\" width=\"430\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  \n  <!-- Northwest Coast -->\n  <g transform=\"translate(30, 20)\">\n    <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"rgba(96,165,250,0.15)\" stroke=\"#60a5fa\" stroke-width=\"1.5\" />\n    <text x=\"20\" y=\"45\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Northwest</text>\n    <text x=\"20\" y=\"55\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Fishing / Permanent</text>\n  </g>\n  \n  <!-- Great Plains -->\n  <g transform=\"translate(130, 40)\">\n    <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"rgba(239,68,68,0.15)\" stroke=\"#ef4444\" stroke-width=\"1.5\" />\n    <text x=\"20\" y=\"45\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Great Plains</text>\n    <text x=\"20\" y=\"55\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Nomadic / Bison</text>\n  </g>\n  \n  <!-- Southwest -->\n  <g transform=\"translate(230, 60)\">\n    <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"rgba(251,191,36,0.15)\" stroke=\"#fbbf24\" stroke-width=\"1.5\" />\n    <text x=\"20\" y=\"45\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">Southwest</text>\n    <text x=\"20\" y=\"55\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Pueblo / Maize</text>\n  </g>\n\n  <!-- Eastern Woodlands -->\n  <g transform=\"translate(340, 30)\">\n    <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"rgba(34,197,94,0.15)\" stroke=\"#22c55e\" stroke-width=\"1.5\" />\n    <text x=\"20\" y=\"45\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">East / Woodlands</text>\n    <text x=\"20\" y=\"55\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Mixed Agri / Iroquois</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q1.1.1",
            "unitId": 1,
            "text": "Which of the following best describes the impact of maize cultivation on pre-Columbian Native American societies?",
            "options": [
              "It forced tribes to become nomadic to find suitable fertile soil.",
              "It fostered economic development, settlement, and social diversification.",
              "It led to the immediate extinction of hunter-gatherer societies.",
              "It prevented tribes from forming sophisticated political alliances."
            ],
            "correctIndex": 1,
            "hint": "Think about how agriculture affects population size and settlement patterns.",
            "explanation": "Maize cultivation supported larger, settled populations, allowing for specialized labor, social hierarchies, and permanent villages."
          },
          {
            "id": "q1.1.2",
            "unitId": 1,
            "text": "Native American societies in the Great Plains and Great Basin regions reacted to their geography by doing which of the following?",
            "options": [
              "Developing complex, multi-tiered urban cliff dwellings.",
              "Relying extensively on ocean resources and permanent timber villages.",
              "Maintaining mobile, hunter-gatherer lifestyles centered on bison herds.",
              "Establishing the intensive cultivation of tobacco and cotton."
            ],
            "correctIndex": 2,
            "hint": "Arid climates in the Great Basin made large-scale settled farming very difficult.",
            "explanation": "Due to dry climates and lack of abundant waterways, societies in the Great Plains and Great Basin remained largely nomadic, following migration patterns of bison."
          },
          {
            "id": "q1.1.3",
            "unitId": 1,
            "text": "The Anasazi and Pueblo societies of the American Southwest adapted to their arid environment by using which innovation?",
            "options": [
              "Floating gardens known as chinampas.",
              "Complex irrigation channels and adobe housing.",
              "Large earthen ceremonial burial mounds.",
              "Portable tipis constructed from bison homes."
            ],
            "correctIndex": 1,
            "hint": "Southwest Native Americans built structures from baked clay (adobe) and diverted water to grow corn.",
            "explanation": "Pueblo peoples built sophisticated canals and dams to cultivate maize in dry canyon floors, alongside permanent multi-story adobe complexes."
          },
          {
            "id": "q1.1.4",
            "unitId": 1,
            "text": "What type of economy characterized Native American tribes in the Pacific Northwest prior to contact?",
            "options": [
              "Nomadic hunting of caribou herds.",
              "Intensive maize farming and commercial crop trade.",
              "Mixed hunter-gatherer and permanent coastal fishing settlements.",
              "Heavy dependency on trans-Atlantic trade networks."
            ],
            "correctIndex": 2,
            "hint": "Think of the rich coastline resources and dense forests of Washington and Oregon.",
            "explanation": "The abundant marine resources and forests of the Northwest allowed societies like the Chinook to build stable, permanent villages supported by salmon fishing and foraging."
          },
          {
            "id": "q1.1.5",
            "unitId": 1,
            "text": "Which pre-Columbian Native American civilization is best known for creating the largest urban center north of Mexico (Cahokia) with earthen mounds?",
            "options": [
              "The Mississippian culture",
              "The Pueblo culture",
              "The Iroquois Confederacy",
              "The Aztec Empire"
            ],
            "correctIndex": 0,
            "hint": "This society was centered near modern-day St. Louis and relied on the fertile Mississippi valley.",
            "explanation": "The Mississippian culture constructed massive mounds at Cahokia, supporting a population of tens of thousands through highly organized agricultural and trade systems."
          }
        ]
      },
      {
        "id": "1.2",
        "title": "European Exploration, Conquest, and the Columbian Exchange",
        "description": "Analyze the motivations of Spanish, Portuguese, and French explorers, and the massive ecological and demographical impacts of the Columbian Exchange.",
        "youtubeId": "3mXgZ5x88-Q",
        "article": "# European Exploration, Conquest, and the Columbian Exchange\n\nEuropean exploration was driven by the quest for wealth, status, and religious converts—often summarized as **Gold, Glory, and God**. The resulting interaction between the Eastern and Western Hemispheres sparked the **Columbian Exchange**, an unprecedented global transfer of life, technology, and disease.\n\n## Motivations for Exploration\n- **Gold**: Finding direct routes to Asian spice markets and discovering precious metals (gold and silver).\n- **Glory**: Achieving national prestige and personal status for imperial monarchs and conquistadors.\n- **God**: Spreading Catholicism (particularly by the Spanish and Portuguese) to newly encountered populations.\n\n## The Columbian Exchange\n\nThe <vocab term=\"Columbian Exchange\" definition=\"The extensive transfer of plants, animals, culture, human populations, technology, and diseases between the Americas and the Old World following Columbus's 1492 voyage.\">Columbian Exchange</vocab> fundamentally restructured global demography:\n1. **From Europe/Africa to the Americas**:\n   - *Livestock*: Horses, cattle, pigs (which transformed Native transport and agriculture).\n   - *Crops*: Wheat, rice, sugar (leading to sugar plantation economies).\n   - *Diseases*: Smallpox, measles, influenza. Lacking immunity, Native populations suffered catastrophic declines, sometimes exceeding **90%**.\n2. **From the Americas to Europe**:\n   - *Nutritious Crops*: Potatoes, maize, tomatoes, cassava. These high-calorie foods triggered rapid population growth and urbanization across Europe.\n   - *Precious Metals*: Massive influxes of silver and gold shifted Europe from feudalism to early capitalism.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"160\" viewBox=\"0 0 400 160\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Columbian Exchange flow diagram -->\n  <text x=\"60\" y=\"25\" fill=\"#a1a1aa\" font-size=\"10\" text-anchor=\"middle\">Americas (New World)</text>\n  <text x=\"340\" y=\"25\" fill=\"#a1a1aa\" font-size=\"10\" text-anchor=\"middle\">Europe / Africa (Old World)</text>\n  \n  <!-- Arrow: New to Old -->\n  <path d=\"M 120 50 Q 200 30 280 50\" fill=\"none\" stroke=\"#20c997\" stroke-width=\"2\" marker-end=\"url(#arrow-phys)\" />\n  <text x=\"200\" y=\"25\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Maize, Potato, Tomato, Silver</text>\n  \n  <!-- Arrow: Old to New -->\n  <path d=\"M 280 110 Q 200 130 120 110\" fill=\"none\" stroke=\"#fbbf24\" stroke-width=\"2\" marker-end=\"url(#arrow-phys)\" />\n  <text x=\"200\" y=\"145\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">Diseases (Smallpox), Horses, Sugar</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q1.2.1",
            "unitId": 1,
            "text": "Which of the following was a primary political motivation for European exploration in the 15th and 16th centuries?",
            "options": [
              "To establish democratic self-governing colonies.",
              "To increase the prestige, wealth, and power of imperial monarchs.",
              "To escape religious persecution by native kingdoms.",
              "To build alliances with powerful Native American military confederacies."
            ],
            "correctIndex": 1,
            "hint": "Monarchs sought to outcompete other European nations in establishing global empires.",
            "explanation": "European exploration was heavily sponsored by monarchies seeking national power, direct luxury trade routes, and wealth (Glory and Gold)."
          },
          {
            "id": "q1.2.2",
            "unitId": 1,
            "text": "What was the most immediate and devastating impact of the Columbian Exchange on Native American populations?",
            "options": [
              "The introduction of horses, which destroyed their crops.",
              "The rapid depletion of bison herds.",
              "The spread of infectious diseases such as smallpox, for which they had no immunity.",
              "The sudden shortage of high-calorie foods like maize."
            ],
            "correctIndex": 2,
            "hint": "Microscopic pathogens were far more lethal than European weapons.",
            "explanation": "Infectious diseases like smallpox, influenza, and measles decimated Native populations, causing mortality rates upwards of 90% in some regions."
          },
          {
            "id": "q1.2.3",
            "unitId": 1,
            "text": "Which New World food crop had the largest long-term impact on European populations by improving nutrition and triggering population growth?",
            "options": [
              "Sugar cane",
              "Wheat",
              "The potato",
              "Barley"
            ],
            "correctIndex": 2,
            "hint": "This tuber grows underground, yields high calories per acre, and became a staple in Ireland and Germany.",
            "explanation": "The high calorie and nutrient density of crops like the potato and maize supported major population booms and urbanization throughout Europe."
          },
          {
            "id": "q1.2.4",
            "unitId": 1,
            "text": "The introduction of which Old World animal most radically altered the military power and hunting patterns of Great Plains Native Americans?",
            "options": [
              "The sheep",
              "The horse",
              "The pig",
              "The chicken"
            ],
            "correctIndex": 1,
            "hint": "This animal allowed nomadic tribes to hunt bison much more efficiently.",
            "explanation": "Spanish horses escaped or were traded into the Great Plains, allowing tribes like the Comanche and Lakota to transform into formidable mounted warriors and highly efficient bison hunters."
          },
          {
            "id": "q1.2.5",
            "unitId": 1,
            "text": "How did the influx of silver and gold from the Americas affect Western Europe's economy?",
            "options": [
              "It triggered a return to strict feudalism.",
              "It stabilized currency prices and eliminated inflation.",
              "It stimulated capitalism and expanded banking systems.",
              "It forced Europeans to rely entirely on trade with Asia."
            ],
            "correctIndex": 2,
            "hint": "Consider how massive influxes of liquid wealth altered trade networks and investment.",
            "explanation": "The huge influx of precious metals from Spanish American mines caused price inflation but also fueled the growth of commerce, banking, and capitalism in European economies."
          }
        ]
      },
      {
        "id": "1.3",
        "title": "The Spanish Empire, Encomienda System, and Cultural Transmutation",
        "description": "Examine Spanish labor systems including the encomienda, the emergence of the casta system, and early debates over Native rights.",
        "youtubeId": "rJH93c3h9wQ",
        "article": "# The Spanish Empire, Encomienda System, and Cultural Transmutation\n\nThe Spanish built a sprawling empire in the Americas, using coercive labor systems to extract resources and developing a strict social hierarchy to maintain control. Over time, European, African, and Native cultures blended, creating a unique syncretic society.\n\n## The Encomienda System\n\nThe <vocab term=\"Encomienda System\" definition=\"A Spanish labor system that granted conquerors the right to force Native Americans to work in mines and fields in exchange for Christianizing them and providing protection.\">encomienda system</vocab> was established to exploit Native labor:\n- Spanish crown granted Spanish colonists (encomenderos) control over specific Native villages.\n- Encomenderos forced Natives to mine silver or cultivate crops.\n- In theory, encomenderos were required to protect and convert Natives to Catholicism. In practice, the system was characterized by brutal exploitation.\n- As Native populations declined from disease, the Spanish increasingly turned to the **Transatlantic Slave Trade** for African labor, particularly on sugar plantations.\n\n## The Casta System\n\nTo maintain control over a highly diverse empire, the Spanish established the <vocab term=\"Casta System\" definition=\"A racial hierarchy system in the Spanish colonies that graded social status based on parental racial background.\">casta system</vocab>:\n- **Peninsulares**: Spanish-born elites (held high political office).\n- **Creoles**: Spanish descendants born in the Americas.\n- **Mestizos**: Mixed Spanish and Native American ancestry.\n- **Mulattoes**: Mixed Spanish and African ancestry.\n- **Native Americans & African Slaves**: Bottom of the social hierarchy.\n\n## Debates Over Treatment: Sepúlveda vs. Las Casas\nThe brutality of Spanish rule led to theological and philosophical debates:\n- **Bartolomé de Las Casas**: A Dominican priest who argued that Native Americans were rational, free human beings who should be treated with dignity and converted through peaceful persuasion.\n- **Juan Ginés de Sepúlveda**: A theologian who argued that Natives were 'natural slaves' who benefited from Spanish domination and conversion.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"180\" viewBox=\"0 0 400 180\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Casta System Pyramid -->\n  <line x1=\"200\" y1=\"20\" x2=\"320\" y2=\"160\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  <line x1=\"200\" y1=\"20\" x2=\"80\" y2=\"160\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  <line x1=\"80\" y1=\"160\" x2=\"320\" y2=\"160\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  \n  <!-- Division lines -->\n  <line x1=\"170\" y1=\"55\" x2=\"230\" y2=\"55\" stroke=\"#a1a1aa\" stroke-dasharray=\"2,2\" />\n  <line x1=\"140\" y1=\"90\" x2=\"260\" y2=\"90\" stroke=\"#a1a1aa\" stroke-dasharray=\"2,2\" />\n  <line x1=\"110\" y1=\"125\" x2=\"290\" y2=\"125\" stroke=\"#a1a1aa\" stroke-dasharray=\"2,2\" />\n  \n  <!-- Labels -->\n  <text x=\"200\" y=\"45\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Peninsulares</text>\n  <text x=\"200\" y=\"78\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Creoles</text>\n  <text x=\"200\" y=\"112\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Mestizos / Mulattoes</text>\n  <text x=\"200\" y=\"148\" fill=\"#a1a1aa\" font-size=\"8\" text-anchor=\"middle\">Natives / African Slaves</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q1.3.1",
            "unitId": 1,
            "text": "Under the encomienda system, Spanish encomenderos were granted Native labor in exchange for which obligation?",
            "options": [
              "Paying the Natives fair wages and granting them Spanish citizenship.",
              "Protecting them and converting them to the Catholic faith.",
              "Providing them with modern military weapons to fight rival tribes.",
              "Allowing them to maintain their indigenous political structure."
            ],
            "correctIndex": 1,
            "hint": "The Spanish crown justified the labor extraction under the guise of religious paternalism.",
            "explanation": "Colonists were theoretically responsible for defending the Natives and teaching them Christianity, though in practice the system became slave-like coercion."
          },
          {
            "id": "q1.3.2",
            "unitId": 1,
            "text": "What factor most directly led the Spanish Empire to replace the encomienda system with African slave labor?",
            "options": [
              "A royal decree outlawing all forms of mineral extraction.",
              "The decimation of Native populations by European diseases.",
              "The complete lack of sugar cane cultivation in the Caribbean.",
              "The refusal of the Catholic Church to baptize Native Americans."
            ],
            "correctIndex": 1,
            "hint": "Think of the demographic disaster caused by smallpox in the Caribbean.",
            "explanation": "As millions of Native Americans died of smallpox, Spanish landowners faced severe labor shortages and turned to imported enslaved West Africans."
          },
          {
            "id": "q1.3.3",
            "unitId": 1,
            "text": "Which of the following describes a Mestizo within the colonial Spanish casta system?",
            "options": [
              "A colonist born in Spain.",
              "A descendant of Spanish parents born in the New World.",
              "An individual of mixed Spanish and Native American ancestry.",
              "An individual of mixed African and Native American ancestry."
            ],
            "correctIndex": 2,
            "hint": "Mestizo comes from the Spanish word for 'mixed'.",
            "explanation": "Mestizos were children of Spanish and Native parents, forming a large intermediate social class below the Creoles but above Native Americans."
          },
          {
            "id": "q1.3.4",
            "unitId": 1,
            "text": "During the Valladolid Debate, Bartolomé de Las Casas argued which of the following?",
            "options": [
              "Native Americans were 'natural slaves' and inferior to Europeans.",
              "Native Americans were rational humans who deserved humane treatment and conversion by persuasion.",
              "Native American labor should be abolished and replaced with European indentured servants.",
              "The Spanish Crown should immediately withdraw entirely from the Americas."
            ],
            "correctIndex": 1,
            "hint": "Las Casas was a former encomendero who became a protector of the Natives.",
            "explanation": "Las Casas defended the basic humanity and rights of Native Americans, opposing Sepúlveda's assertions of their natural inferiority."
          },
          {
            "id": "q1.3.5",
            "unitId": 1,
            "text": "The Valladolid Debate of 1550–1551 is historically significant because it was the first debate to discuss which topic?",
            "options": [
              "The absolute supremacy of the Pope over Spanish kings.",
              "The legitimacy of using enslaved labor in Europe.",
              "The basic moral rights and treatment of colonized indigenous peoples.",
              "The geographical boundary lines of the Treaty of Tordesillas."
            ],
            "correctIndex": 2,
            "hint": "Consider the ethical questions that arose from the conquest of Mesoamerica.",
            "explanation": "The debate was the first formal European theological/philosophical discussion addressing the morality of conquering and enslaving colonized peoples."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Period 2: 1607–1754",
    "masteryWeight": "10%",
    "topics": [
      {
        "id": "2.1",
        "title": "Regional Comparisons of Spanish, French, Dutch, and British Colonization",
        "description": "Contrast the differing economic goals, population sizes, and relationships with Native Americans among the major European colonial powers.",
        "youtubeId": "K_8h8lSFLn4",
        "article": "# Regional Comparisons of Colonization\n\nThe major European powers established colonies in North America with vastly different economic goals, demographic profiles, and relationships with indigenous populations. \n\n## Spanish Colonization\n- **Goals**: Wealth extraction (precious metals, agriculture) and religious conversion.\n- **Population**: Primarily male soldiers, adventurers, and priests. This demographic led to extensive intermarriage and a complex casta system.\n- **Native Relations**: Dominant and coercive, forcing conversion and labor through the encomienda system.\n\n## French & Dutch Colonization\n- **Goals**: Fur trade (beaver pelts) and trade alliances.\n- **Population**: Very few permanent settlers (mostly traders, trappers, and a few Jesuit missionaries).\n- **Native Relations**: Cooperative and diplomatic. The French and Dutch married Native women, built trade alliances, and respected Native customs to secure access to fur resources.\n\n## British Colonization\n- **Goals**: Land ownership, agricultural cultivation (tobacco, grain, rice), and religious freedom.\n- **Population**: Massive influxes of male and female families seeking permanent settlement.\n- **Native Relations**: Hostile and exclusionary. Unlike other powers, British colonists rarely intermarried and sought to push Native Americans off their land rather than integrate or trade with them directly.\n\n<div class=\"flex justify-center my-8\">\n<table class=\"w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25\">\n  <thead>\n    <tr class=\"bg-white/5 text-white font-mono uppercase\">\n      <th class=\"p-2 border border-white/10\">Empire</th>\n      <th class=\"p-2 border border-white/10\">Main Economy</th>\n      <th class=\"p-2 border border-white/10\">Demographics</th>\n      <th class=\"p-2 border border-white/10\">Relations with Natives</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-yellow-400\">Spain</td>\n      <td class=\"p-2 border border-white/10\">Mining / Sugar</td>\n      <td class=\"p-2 border border-white/10\">Mostly single males</td>\n      <td class=\"p-2 border border-white/10\">Coercive / Caste system</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-cyan-400\">France / Dutch</td>\n      <td class=\"p-2 border border-white/10\">Fur Trade</td>\n      <td class=\"p-2 border border-white/10\">Trappers / Traders</td>\n      <td class=\"p-2 border border-white/10\">Alliances / Intermarriage</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-indigo-400\">Great Britain</td>\n      <td class=\"p-2 border border-white/10\">Agriculture</td>\n      <td class=\"p-2 border border-white/10\">Families / Mass settlement</td>\n      <td class=\"p-2 border border-white/10\">Exclusionary / Conflict</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n",
        "questions": [
          {
            "id": "q2.1.1",
            "unitId": 2,
            "text": "Which of the following best describes the economic goals of the French and Dutch in North America?",
            "options": [
              "Establishing massive gold mining operations.",
              "Developing tobacco and sugar plantations with enslaved labor.",
              "Building trade networks focused on beaver pelts and furs.",
              "Importing thousands of families to farm wheat and corn."
            ],
            "correctIndex": 2,
            "hint": "Their colonies (New France and New Netherland) had very small populations centered along rivers.",
            "explanation": "French and Dutch colonization was commercial, relying on alliances with Native Americans to secure fur pelts for export."
          },
          {
            "id": "q2.1.2",
            "unitId": 2,
            "text": "How did British colonists' interactions with Native Americans differ most from those of the French?",
            "options": [
              "British colonists frequently intermarried with Native women to form military alliances.",
              "British colonists sought to exclude Native Americans from their society and acquire their land.",
              "British colonists adopted Native religious practices instead of converting them.",
              "British colonists forced Natives to work under the encomienda system."
            ],
            "correctIndex": 1,
            "hint": "The British brought whole families and established separate communities.",
            "explanation": "British colonizers brought large family groups, focusing on agriculture and permanent settlements, which led them to drive Native Americans off their lands."
          },
          {
            "id": "q2.1.3",
            "unitId": 2,
            "text": "Which European power's colonization model was characterized by extensive intermarriage, a caste system, and direct labor coercion?",
            "options": [
              "Great Britain",
              "France",
              "Spain",
              "The Netherlands"
            ],
            "correctIndex": 2,
            "hint": "This power conquered the Aztec and Inca empires.",
            "explanation": "Spain's colonizers were heavily male, leading to intermarriage with Native and African populations, which they structured under the casta system."
          },
          {
            "id": "q2.1.4",
            "unitId": 2,
            "text": "French Jesuit missionaries in New France generally differed from Spanish Franciscan missionaries in what way?",
            "options": [
              "Jesuits forced Native Americans into massive labor camps.",
              "Jesuits attempted to understand Native culture and lived among them peacefully.",
              "Jesuits completely rejected the idea of converting Native Americans.",
              "Jesuits armed Native Americans to conquer Spanish colonies."
            ],
            "correctIndex": 1,
            "hint": "Think about New France's dependence on diplomacy to secure fur trade routes.",
            "explanation": "Rather than forcing Natives onto reservations or missions, French Jesuits learned Native languages and adapted their presentation of Christianity to fit indigenous traditions."
          },
          {
            "id": "q2.1.5",
            "unitId": 2,
            "text": "What geographic region of North America was primarily settled by the Dutch prior to English conquest?",
            "options": [
              "The St. Lawrence River Valley",
              "The Hudson River Valley (New York)",
              "The Chesapeake Bay",
              "The Florida Peninsula"
            ],
            "correctIndex": 1,
            "hint": "New Amsterdam was renamed New York after the English took it in 1664.",
            "explanation": "The Dutch West India Company established New Netherland along the Hudson River to capitalize on the lucrative fur trade."
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Transatlantic Trade, Mercantilism, and the Growth of British Colonial Economies",
        "description": "Examine the growth of regional British colonies, the Atlantic triangular trade, and British enforcement of mercantilism through the Navigation Acts.",
        "youtubeId": "x4h2_xG-y_Y",
        "article": "# Transatlantic Trade, Mercantilism, and Colonial Economies\n\nBritish colonies developed highly distinct regional economies, bound together and tied to the mother country by the Atlantic trade network and the economic policy of mercantilism.\n\n## Regional British Colonies\n1. **New England (Massachusetts, Connecticut)**: Settled primarily by Puritans seeking religious community. The economy relied on subsistence farming, timber, shipbuilding, and fishing.\n2. **Middle Colonies (Pennsylvania, New York)**: Religiously tolerant and diverse (Quakers in PA). The economy centered on exporting wheat and grain (\"the breadbasket colonies\").\n3. **Chesapeake (Virginia, Maryland)**: Populated mostly by young, single male indentured servants (later enslaved labor). The economy was based entirely on the intensive cultivation of tobacco.\n4. **Southern Colonies (Carolinas, Georgia)**: Long growing seasons led to plantation economies cultivating rice and indigo, heavily reliant on enslaved labor.\n\n## Mercantilism and the Navigation Acts\nBritish economic policy was driven by <vocab term=\"Mercantilism\" definition=\"An economic theory that colonies exist to enrich the mother country by providing raw materials and importing manufactured goods, maintaining a favorable balance of trade.\">mercantilism</vocab>. To enforce this, Parliament passed the **Navigation Acts**, which:\n- Required all colonial trade to be carried on British ships.\n- Enumerated specific colonial goods (like tobacco) that could only be sold to Britain.\n- Placed import taxes on non-British goods.\n\nFor decades, the British enforced these laws loosely—a period known as **salutary neglect**—allowing the colonies to develop independent trade networks and self-governing colonial assemblies.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"420\" height=\"150\" viewBox=\"0 0 420 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Triangular Trade Map Sketch -->\n  <line x1=\"60\" y1=\"90\" x2=\"360\" y2=\"40\" stroke=\"#a1a1aa\" stroke-dasharray=\"3,3\" />\n  <line x1=\"360\" y1=\"40\" x2=\"220\" y2=\"120\" stroke=\"#a1a1aa\" stroke-dasharray=\"3,3\" />\n  <line x1=\"220\" y1=\"120\" x2=\"60\" y2=\"90\" stroke=\"#a1a1aa\" stroke-dasharray=\"3,3\" />\n\n  <text x=\"60\" y=\"80\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Colonies</text>\n  <text x=\"360\" y=\"30\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Great Britain</text>\n  <text x=\"220\" y=\"135\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">West Africa</text>\n\n  <!-- Labels on paths -->\n  <text x=\"220\" y=\"55\" fill=\"#20c997\" font-size=\"7\" text-anchor=\"middle\">Raw Materials (Tobacco, Fish)</text>\n  <text x=\"310\" y=\"90\" fill=\"#fbbf24\" font-size=\"7\" text-anchor=\"middle\">Manufactured Goods</text>\n  <text x=\"120\" y=\"115\" fill=\"#ef4444\" font-size=\"7\" text-anchor=\"middle\">Enslaved People (Middle Passage)</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q2.2.1",
            "unitId": 2,
            "text": "The economic policy of mercantilism dictated that colonies existed to perform which function?",
            "options": [
              "Compete with the mother country in manufacturing.",
              "Enrich the mother country by providing raw materials and buying manufactured goods.",
              "Establish independent, unregulated trade with other empires.",
              "Produce gold and silver coins for global commerce."
            ],
            "correctIndex": 1,
            "hint": "Under mercantilism, colonies were viewed as economic tools for the empire's home nation.",
            "explanation": "Mercantilism aimed to create a self-sufficient empire where colonies supplied raw goods to Britain and purchased British finished products, keeping gold/silver inside the empire."
          },
          {
            "id": "q2.2.2",
            "unitId": 2,
            "text": "Which regional colony group was characterized by a diverse, grain-exporting economy and high religious tolerance?",
            "options": [
              "New England",
              "The Chesapeake",
              "The Southern Colonies",
              "The Middle Colonies"
            ],
            "correctIndex": 3,
            "hint": "This group included Pennsylvania and New York.",
            "explanation": "The Middle Colonies produced large food surpluses ('breadbasket') and attracted diverse European immigrants due to tolerant laws."
          },
          {
            "id": "q2.2.3",
            "unitId": 2,
            "text": "What did the British Parliament attempt to enforce by passing the Navigation Acts in the 17th century?",
            "options": [
              "The complete abolition of the transatlantic slave trade.",
              "Strict mercantile control over colonial shipping and trade routes.",
              "The conversion of Puritans to the Anglican Church.",
              "Taxation of the colonies without their local assemblies' approval."
            ],
            "correctIndex": 1,
            "hint": "The acts restricted colonial trade partners and required British ships for transport.",
            "explanation": "The Navigation Acts restricted colonial trade to British vessels and markets, reinforcing mercantilist control to maximize British tax revenue."
          },
          {
            "id": "q2.2.4",
            "unitId": 2,
            "text": "How did the period of 'salutary neglect' affect the development of the British colonies?",
            "options": [
              "It led to widespread economic depression and poverty.",
              "It allowed colonies to develop independent political assemblies and self-government.",
              "It forced colonists to trade exclusively with the Spanish Empire.",
              "It resulted in the immediate decay of New England shipbuilding."
            ],
            "correctIndex": 1,
            "hint": "Britain loosely enforced trade regulations, leaving colonies largely to manage themselves.",
            "explanation": "Because Britain did not strictly enforce the Navigation Acts, colonial legislatures (like the Virginia House of Burgesses) grew accustomed to exercising local authority and self-taxation."
          },
          {
            "id": "q2.2.5",
            "unitId": 2,
            "text": "The economy of the Chesapeake colonies (Virginia and Maryland) was centered entirely on which cash crop?",
            "options": [
              "Rice",
              "Sugar",
              "Tobacco",
              "Cotton"
            ],
            "correctIndex": 2,
            "hint": "John Rolfe introduced a sweet strain of this leaf to Jamestown.",
            "explanation": "The Chesapeake's sandy soil and warm climate made it highly suited for tobacco, which became the region's single dominant export."
          }
        ]
      },
      {
        "id": "2.3",
        "title": "The Development of the Transatlantic Slave Trade and Colonial Societies",
        "description": "Examine the shift from indentured servitude to racial slavery, the horrific Middle Passage, and Native resistance movements like Metacom's War.",
        "youtubeId": "K_8h8lSFLn4",
        "article": "# Transatlantic Slave Trade and Colonial Resistance\n\nAs agricultural economies grew in the Chesapeake and Carolinas, the demand for labor skyrocketed. This led to a critical transition from white indentured servitude to permanent racialized chattel slavery.\n\n## The Shift to Chattel Slavery\nInitially, plantation owners relied on **indentured servants**—poor Europeans who agreed to work for 4–7 years in exchange for passage to the colonies.\n- **Bacon's Rebellion (1676)**: Poor, landless former indentured servants rebelled against the Virginia governor, burning Jamestown. Fearing future instability, wealthy planters shifted away from indentured servants to imported enslaved Africans.\n- **Chattel Slavery**: Enslaved Africans were defined as personal property (\"chattel\"), and colonial laws established that the status of children followed the mother, creating a self-perpetuating, racialized labor system.\n- **The Middle Passage**: The brutal, disease-ridden oceanic voyage across the Atlantic, where up to **20%** of enslaved Africans died.\n\n## Colonial Resistance and Conflict\nAs English settlements expanded, they clashed violently with Native Americans:\n1. **Pueblo Revolt (1680)**: Native leader Popé led a successful revolt against Spanish rule in New Mexico, keeping the Spanish out for 12 years. When the Spanish returned, they accommodated Native customs more.\n2. **Metacom's War (King Philip's War, 1675)**: Wampanoag leader Metacom united New England tribes in a bloody attempt to expel English settlers. The English won, decimating the Native population and clearing the way for unchecked expansion.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Timeline of Labor shift and Conflict -->\n  <line x1=\"20\" y1=\"80\" x2=\"380\" y2=\"80\" stroke=\"#a1a1aa\" stroke-width=\"2\" />\n  \n  <!-- Bacon's Rebellion -->\n  <circle cx=\"100\" cy=\"80\" r=\"5\" fill=\"#ef4444\" />\n  <text x=\"100\" y=\"65\" fill=\"#ef4444\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">1676</text>\n  <text x=\"100\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Bacon's Rebellion</text>\n  <text x=\"100\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Planters shift to slave labor</text>\n\n  <!-- Pueblo Revolt -->\n  <circle cx=\"200\" cy=\"80\" r=\"5\" fill=\"#fbbf24\" />\n  <text x=\"200\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">1680</text>\n  <text x=\"200\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Pueblo Revolt</text>\n  <text x=\"200\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Native victory in New Mex.</text>\n\n  <!-- Stono Rebellion -->\n  <circle cx=\"300\" cy=\"80\" r=\"5\" fill=\"#34d399\" />\n  <text x=\"300\" y=\"65\" fill=\"#34d399\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">1739</text>\n  <text x=\"300\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Stono Rebellion</text>\n  <text x=\"300\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Enslaved revolt in S. Carolina</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q2.3.1",
            "unitId": 2,
            "text": "What rebel event in 1676 most directly accelerated the shift from indentured servitude to racial slavery in the Chesapeake?",
            "options": [
              "The Stono Rebellion",
              "Bacon's Rebellion",
              "Metacom's War",
              "Shays' Rebellion"
            ],
            "correctIndex": 1,
            "hint": "Frustrated landless frontiersmen marched on Jamestown and set it on fire.",
            "explanation": "Bacon's Rebellion united poor whites and black servants. Wealthy planters realized indentured servants presented a continuous threat of rebellion, causing them to turn to imported African slaves."
          },
          {
            "id": "q2.3.2",
            "unitId": 2,
            "text": "Which of the following defines 'chattel slavery' as it developed in the British colonies?",
            "options": [
              "A labor system where individuals worked for a set term of years and were freed.",
              "A system where African laborers were treated as legally sellable property, with inheritance based on the mother.",
              "A feudal system where peasants were tied to the land but owned their homes.",
              "A military draft system where Native Americans were forced to defend colonies."
            ],
            "correctIndex": 1,
            "hint": "This legal definition stripped enslaved people of all basic human rights, making their status permanent.",
            "explanation": "Chattel slavery treated humans as personal property. To ensure a continuous labor supply, colonial laws declared that a child's freedom status was inherited from their mother."
          },
          {
            "id": "q2.3.3",
            "unitId": 2,
            "text": "What was the primary geographic conflict known as Metacom's War (King Philip's War) about?",
            "options": [
              "Control of French fur trade routes near the St. Lawrence River.",
              "Encroachment of English settlers on Wampanoag and other Native lands in New England.",
              "A dispute between Puritans and Quakers over the boundary of Pennsylvania.",
              "Spanish attempts to build missions in Massachusetts."
            ],
            "correctIndex": 1,
            "hint": "Look at the expansion of Puritans in Massachusetts and Connecticut.",
            "explanation": "As English settlers continued to clear forests and expand towns, Metacom led an alliance of tribes in a last-resort effort to save their lands."
          },
          {
            "id": "q2.3.4",
            "unitId": 2,
            "text": "How did the Spanish react to the Pueblo Revolt of 1680 after they reconquered New Mexico in 1692?",
            "options": [
              "They completely exterminated all Pueblo Indians in New Mexico.",
              "They made concessions to Pueblo religious practices and eased labor demands.",
              "They established a strictly democratic council ruled by Native chiefs.",
              "They handed control of the territory over to the French."
            ],
            "correctIndex": 1,
            "hint": "The Spanish realized that harsh suppression of Native culture was counter-productive.",
            "explanation": "After the Pueblo Revolt, the Spanish learned to tolerate traditional Pueblo rituals and replaced the encomienda with less coercive labor demands."
          },
          {
            "id": "q2.3.5",
            "unitId": 2,
            "text": "The Middle Passage refers to which leg of the transatlantic triangular trade network?",
            "options": [
              "The route carrying finished products from Britain to the colonies.",
              "The direct passage of spice ships from Asia to North America.",
              "The transportation of enslaved Africans across the Atlantic to the Americas.",
              "The trading of tobacco and raw lumber from New England to the West Indies."
            ],
            "correctIndex": 2,
            "hint": "This leg was infamous for extreme overcrowding and high mortality rates.",
            "explanation": "The Middle Passage was the central leg of the Triangular Trade, bringing kidnapped and enslaved West Africans to the Americas under inhumane, deadly conditions."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Period 3: 1754–1800",
    "masteryWeight": "12%",
    "topics": [
      {
        "id": "3.1",
        "title": "The Seven Years War, Imperial Realignment, and Colonial Resistance",
        "description": "Evaluate the impacts of the French and Indian War, the end of salutary neglect, and the rise of organized colonial protests.",
        "youtubeId": "v2e_mU6U5y8",
        "article": "# The Seven Years War and the Imperial Crisis\n\nThe **French and Indian War** (the North American theater of the global Seven Years' War) redrew the map of North America and shattered the relationship between Great Britain and its colonies, ending the era of salutary neglect.\n\n## The French and Indian War (1754–1763)\n- **Cause**: Land dispute over the fertile Ohio River Valley between British colonists, French fur traders, and Native allies.\n- **Result**: British victory. France was completely expelled from North America under the **Treaty of Paris (1763)**, leaving Britain in control of all territory east of the Mississippi.\n\n## The End of Salutary Neglect\nWhile Britain won the war, it was left with massive national debt. Parliament argued that since the war defended the colonies, the colonies should help pay for it.\n1. **Proclamation of 1763**: Fearing Native conflicts (like Pontiac's Rebellion), the British forbade colonists from settling west of the Appalachian Mountains, angering land-hungry colonists.\n2. **Direct Taxes**: Parliament passed a series of direct revenue acts, starting the imperial crisis:\n   - **Stamp Act (1765)**: A tax on all paper documents. Colonists organized the Stamp Act Congress and successful boycotts, arguing **\"No taxation without representation.\"**\n   - **Townshend Acts (1767)**: Import duties on glass, lead, paper, and tea.\n   - **Intolerable Acts (1774)**: Passed to punish Boston for the Boston Tea Party, closing Boston Harbor and suspending the Massachusetts charter.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"450\" height=\"150\" viewBox=\"0 0 450 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Timeline of British Taxation -->\n  <line x1=\"20\" y1=\"80\" x2=\"430\" y2=\"80\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  \n  <g transform=\"translate(40, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1763</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Treaty of Paris</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Proclamation Line</text>\n  </g>\n  \n  <g transform=\"translate(140, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1765</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Stamp Act</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Colonial boycotts</text>\n  </g>\n\n  <g transform=\"translate(240, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1773</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Tea Party</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Boston Tea Party</text>\n  </g>\n\n  <g transform=\"translate(340, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#ef4444\" />\n    <text x=\"0\" y=\"65\" fill=\"#ef4444\" font-size=\"8\" text-anchor=\"middle\">1774</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Intolerable Acts</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">First Continental Cong.</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q3.1.1",
            "unitId": 3,
            "text": "What was the primary geopolitical outcome of the French and Indian War (1754–1763)?",
            "options": [
              "France acquired all territory west of the Appalachian Mountains.",
              "France was entirely expelled from North America, leaving Britain in control.",
              "Spain claimed ownership of all New England colonies.",
              "The British agreed to limit their colonies to the Atlantic coast."
            ],
            "correctIndex": 1,
            "hint": "The Treaty of Paris in 1763 dramatically shifted colonial boundaries.",
            "explanation": "British victory in the war forced France to cede its major territories in North America to Britain and Spain under the 1763 Treaty of Paris."
          },
          {
            "id": "q3.1.2",
            "unitId": 3,
            "text": "How did the Proclamation of 1763 affect the relationship between Great Britain and the American colonies?",
            "options": [
              "It pleased colonists by opening new fertile western lands for farming.",
              "It angered colonists by forbidding settlement west of the Appalachian Mountains.",
              "It forced colonists to trade exclusively with French merchants in Canada.",
              "It established absolute tax exemptions for all colonial merchants."
            ],
            "correctIndex": 1,
            "hint": "The British drew a line on the map to prevent conflicts with Native Americans.",
            "explanation": "To prevent costly conflicts with Native groups, Britain forbade colonists from moving west of the Appalachians, which colonists viewed as tyranny."
          },
          {
            "id": "q3.1.3",
            "unitId": 3,
            "text": "What argument did colonists make in opposing direct taxes like the Stamp Act (1765)?",
            "options": [
              "They argued that only their local colonial assemblies had the right to tax them.",
              "They insisted that all taxes should be paid in silver rather than paper currency.",
              "They demanded the immediate abolition of the British monarchy.",
              "They asserted that the King had no right to defend the colonies."
            ],
            "correctIndex": 0,
            "hint": "The slogan was: 'No taxation without representation.'",
            "explanation": "Since the colonies had no elected representatives in the British Parliament, they argued that Parliament had no legal right to levy direct taxes on them."
          },
          {
            "id": "q3.1.4",
            "unitId": 3,
            "text": "The Intolerable Acts (1774) were passed by the British Parliament primarily to achieve what goal?",
            "options": [
              "Force Pennsylvania to pay taxes on grain.",
              "Punish Boston and Massachusetts for the Boston Tea Party.",
              "Establish the Anglican Church as the official religion of New York.",
              "Formally declare war on the French and Spanish empires."
            ],
            "correctIndex": 1,
            "hint": "These coercive acts closed Boston Harbor and suspended the colony's town meetings.",
            "explanation": "The Coercive (Intolerable) Acts aimed to isolate and punish Boston by closing its harbor and restricting self-rule until the destroyed tea was paid for."
          },
          {
            "id": "q3.1.5",
            "unitId": 3,
            "text": "Which of the following was a result of the Stamp Act Congress and subsequent boycotts?",
            "options": [
              "Parliament immediately declared war on the colonies.",
              "Parliament repealed the Stamp Act but asserted its right to tax the colonies in the Declaratory Act.",
              "The colonies formed the US Constitution.",
              "The British Crown withdrew the Royal Navy from Boston."
            ],
            "correctIndex": 1,
            "hint": "While Parliament backed down on the Stamp Act, they passed another act affirming their authority.",
            "explanation": "Colonial boycotts of British goods forced Parliament to repeal the Stamp Act, but it simultaneously passed the Declaratory Act to affirm its supreme authority."
          }
        ]
      },
      {
        "id": "3.2",
        "title": "The Revolutionary War, Philosophical Foundations, and Democratic Ideals",
        "description": "Explore the Enlightenment roots of the American Revolution, Thomas Paine's Common Sense, and the military factors that led to American victory.",
        "youtubeId": "yX8t9o9V9v0",
        "article": "# The American Revolution and Democratic Ideals\n\nThe decision of the colonies to break away from Great Britain was rooted in European Enlightenment philosophy, popularized by radical pamphlets and crystallized in the Declaration of Independence.\n\n## Philosophical Foundations of the Revolution\n1. **John Locke (Natural Rights)**: Locke argued that all humans possess natural rights to *life, liberty, and property*, and that government is a social contract. If a government violates these rights, citizens have the right to alter or abolish it.\n2. **Thomas Paine (Common Sense)**: In January 1776, Paine published <vocab term=\"Common Sense\" definition=\"A pamphlet written by Thomas Paine in 1776 that used plain language to argue that the colonies should declare independence from Great Britain.\">Common Sense</vocab>. He argued that it was simple common sense that an island (Britain) should not rule a continent (America) and that monarchy was an unnatural, corrupt form of government. The pamphlet turned public opinion toward independence.\n3. **The Declaration of Independence (1776)**: Written by Thomas Jefferson, it adopted Locke's ideas, declaring that \"all men are created equal\" with inalienable rights to \"Life, Liberty, and the pursuit of Happiness.\"\n\n## Why the Americans Won\nDespite facing the world's most powerful military, the Patriots succeeded due to:\n- **Home-field Advantage**: Fighting on their own soil.\n- **Ideological Commitment**: Strong motivation for self-governance.\n- **Foreign Assistance**: The decisive French Alliance secured after the **Battle of Saratoga (1777)**, providing troops, naval support, and funding.\n- **Military Leadership**: George Washington's leadership in keeping the Continental Army intact.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- American Victory Factors Block -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"30\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Key Factors in American Victory</text>\n  \n  <g transform=\"translate(40, 50)\">\n    <rect x=\"0\" y=\"0\" width=\"90\" height=\"60\" rx=\"4\" fill=\"rgba(32,201,151,0.1)\" stroke=\"#20c997\" stroke-width=\"1\" />\n    <text x=\"45\" y=\"25\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Alliance</text>\n    <text x=\"45\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">French Navy & Cash</text>\n  </g>\n  \n  <g transform=\"translate(155, 50)\">\n    <rect x=\"0\" y=\"0\" width=\"90\" height=\"60\" rx=\"4\" fill=\"rgba(129,140,248,0.1)\" stroke=\"#818cf8\" stroke-width=\"1\" />\n    <text x=\"45\" y=\"25\" fill=\"#818cf8\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Strategy</text>\n    <text x=\"45\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Washington's Survival</text>\n  </g>\n\n  <g transform=\"translate(270, 50)\">\n    <rect x=\"0\" y=\"0\" width=\"90\" height=\"60\" rx=\"4\" fill=\"rgba(251,191,36,0.1)\" stroke=\"#fbbf24\" stroke-width=\"1\" />\n    <text x=\"45\" y=\"25\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Ideology</text>\n    <text x=\"45\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Common Sense & Liberty</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q3.2.1",
            "unitId": 3,
            "text": "Thomas Paine's Common Sense was highly influential in 1776 because it did which of the following?",
            "options": [
              "Proposed a draft of the new United States Constitution.",
              "Used plain language to argue that monarchy was corrupt and the colonies should be independent.",
              "Advocated for an immediate alliance with the French Empire.",
              "Exposed secret letters between George Washington and King George III."
            ],
            "correctIndex": 1,
            "hint": "The pamphlet made radical democratic ideas accessible to common citizens.",
            "explanation": "Common Sense presented a clear, simple case for independence from Britain, shifting public sentiment toward separation rather than reconciliation."
          },
          {
            "id": "q3.2.2",
            "unitId": 3,
            "text": "The philosophical arguments in the Declaration of Independence relied heavily on the ideas of which Enlightenment thinker?",
            "options": [
              "Thomas Hobbes",
              "John Locke",
              "Jean-Jacques Rousseau",
              "Baron de Montesquieu"
            ],
            "correctIndex": 1,
            "hint": "This philosopher authored the Second Treatise of Government and defined 'Natural Rights.'",
            "explanation": "Thomas Jefferson adapted John Locke's concept of natural rights (life, liberty, and property) and the social contract in the Declaration."
          },
          {
            "id": "q3.2.3",
            "unitId": 3,
            "text": "Which military battle is considered the turning point of the Revolutionary War because it secured a formal alliance with France?",
            "options": [
              "The Battle of Bunker Hill",
              "The Battle of Yorktown",
              "The Battle of Saratoga",
              "The Battle of Trenton"
            ],
            "correctIndex": 2,
            "hint": "This 1777 victory in upstate New York convinced the French that the Americans could actually win.",
            "explanation": "American victory at Saratoga demonstrated military capability, prompting France to sign a treaty of alliance in 1778, providing vital naval and financial support."
          },
          {
            "id": "q3.2.4",
            "unitId": 3,
            "text": "All of the following were major factors that contributed to the American victory in the Revolutionary War EXCEPT:",
            "options": [
              "Decisive naval and military aid from France.",
              "George Washington's defensive strategy of keeping the army intact.",
              "The overwhelming industrial manufacturing capacity of the colonies.",
              "Patriot ideological commitment and home-field advantage."
            ],
            "correctIndex": 2,
            "hint": "The colonies had almost no factories or industrial centers compared to Great Britain.",
            "explanation": "The colonies were largely agricultural and lacked heavy manufacturing, relying on imports and French aid to supply gunpowder and weapons."
          },
          {
            "id": "q3.2.5",
            "unitId": 3,
            "text": "The final major battle of the Revolutionary War, resulting in the surrender of British General Cornwallis, occurred where?",
            "options": [
              "Saratoga",
              "Yorktown",
              "Lexington",
              "Valley Forge"
            ],
            "correctIndex": 1,
            "hint": "This Virginia peninsula was surrounded by French ships and Washington's troops in 1781.",
            "explanation": "At the Battle of Yorktown (1781), the French Navy blocked escape by sea while American and French troops laid siege to Cornwallis, forcing the final British surrender."
          }
        ]
      },
      {
        "id": "3.3",
        "title": "The Articles of Confederation, Constitutional Convention, and the New Republic",
        "description": "Analyze the weaknesses of the Articles of Confederation, the compromises of the Constitutional Convention, and the debates between Federalists and Anti-Federalists.",
        "youtubeId": "v2e_mU6U5y8",
        "article": "# The Constitution and the New Republic\n\nFollowing independence, the United States struggled to create a functional government, leading to the replacement of the weak Articles of Confederation with the US Constitution.\n\n## The Weaknesses of the Articles of Confederation\nThe **Articles of Confederation** established a weak central government to avoid tyranny:\n- *No power to tax*: The federal government had to ask states for money.\n- *No executive branch*: No president to enforce laws.\n- *Unanimous vote required*: All 13 states had to approve any amendment.\n- **Shays' Rebellion (1786)**: A revolt of indebted farmers in Massachusetts. The weak national government could not raise an army to stop it, convincing elites that the Articles had to be revised.\n\n## The Constitutional Convention (1787)\nDelegates met in Philadelphia and chose to draft a completely new **Constitution**, resolving major disputes through compromises:\n1. **The Great Compromise**: Created a bicameral legislature. The House of Representatives based seats on population (pleasing large states), while the Senate gave two seats to every state (pleasing small states).\n2. **Three-Fifths Compromise**: Declared that five enslaved individuals counted as three free persons for taxation and representation.\n3. **Federalism and Separation of Powers**: Divided power between state and national governments, and split federal power into three branches (Executive, Legislative, Judicial) with checks and balances.\n\n## The Ratification Debate\n- **Federalists (Hamilton, Madison)**: Favored ratification. They wrote the **Federalist Papers** to argue that a large republic protected individual liberty.\n- **Anti-Federalists (Jefferson, Henry)**: Opposed ratification. They feared a strong central government would mimic British tyranny and demanded a **Bill of Rights** to protect individual liberties.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"420\" height=\"150\" viewBox=\"0 0 420 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Checks and Balances diagram -->\n  <rect x=\"10\" y=\"45\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(32,201,151,0.1)\" stroke=\"#20c997\" />\n  <text x=\"60\" y=\"80\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Congress</text>\n  \n  <rect x=\"160\" y=\"45\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(129,140,248,0.1)\" stroke=\"#818cf8\" />\n  <text x=\"210\" y=\"80\" fill=\"#818cf8\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">President</text>\n\n  <rect x=\"310\" y=\"45\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(251,191,36,0.1)\" stroke=\"#fbbf24\" />\n  <text x=\"360\" y=\"80\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Supreme Court</text>\n\n  <!-- Interactive Arrows showing checks -->\n  <line x1=\"110\" y1=\"65\" x2=\"160\" y2=\"65\" stroke=\"#ffffff\" stroke-width=\"1.5\" marker-end=\"url(#arrow-phys)\" />\n  <text x=\"135\" y=\"60\" fill=\"#ffffff\" font-size=\"6\" text-anchor=\"middle\">Pass laws</text>\n\n  <line x1=\"160\" y1=\"85\" x2=\"110\" y2=\"85\" stroke=\"#ffffff\" stroke-width=\"1.5\" marker-end=\"url(#arrow-phys)\" />\n  <text x=\"135\" y=\"95\" fill=\"#ffffff\" font-size=\"6\" text-anchor=\"middle\">Veto laws</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q3.3.1",
            "unitId": 3,
            "text": "What major rebellion of indebted farmers in Massachusetts in 1786 exposed the fatal weaknesses of the Articles of Confederation?",
            "options": [
              "Bacon's Rebellion",
              "Shays' Rebellion",
              "The Whiskey Rebellion",
              "Stono Rebellion"
            ],
            "correctIndex": 1,
            "hint": "This rebellion was led by a former Revolutionary War captain who shut down local courts.",
            "explanation": "Shays' Rebellion showed that the national government under the Articles could not maintain order or raise a military force, leading to calls for a stronger central government."
          },
          {
            "id": "q3.3.2",
            "unitId": 3,
            "text": "The Great Compromise at the 1787 Constitutional Convention resolved a major conflict over representation by doing which of the following?",
            "options": [
              "Abolishing the executive branch entirely.",
              "Declaring all states would have representation based solely on wealth.",
              "Creating a bicameral legislature with one house based on population and one with equal representation.",
              "Allowing Southern states to count all enslaved people for representation."
            ],
            "correctIndex": 2,
            "hint": "This compromise merged the Virginia (large state) and New Jersey (small state) plans.",
            "explanation": "The Great Compromise established the House (based on population) and the Senate (two members per state), balancing power between populous and small states."
          },
          {
            "id": "q3.3.3",
            "unitId": 3,
            "text": "What was the primary argument of the Anti-Federalists against the ratification of the new Constitution?",
            "options": [
              "They believed the executive branch should have absolute monarchy powers.",
              "They argued that it lacked a Bill of Rights to protect individual liberties from a strong central government.",
              "They opposed any federal power to collect import taxes.",
              "They wanted to return to British rule."
            ],
            "correctIndex": 1,
            "hint": "They feared the new federal government would become as oppressive as Parliament.",
            "explanation": "Anti-Federalists feared the unchecked power of the federal government, agreeing to support ratification only after Federalists promised to add a Bill of Rights."
          },
          {
            "id": "q3.3.4",
            "unitId": 3,
            "text": "The Three-Fifths Compromise resolved which contentious issue at the Constitutional Convention?",
            "options": [
              "The percentage of federal tax revenue allocated to state infrastructure.",
              "The process of electing the President via the Electoral College.",
              "How enslaved populations would be counted for representation and taxation.",
              "The length of term limits for federal judges."
            ],
            "correctIndex": 2,
            "hint": "Southern states wanted to count enslaved people to gain representation in the House, while Northern states opposed it.",
            "explanation": "The Three-Fifths Compromise counted 3 out of every 5 enslaved people, giving Southern states disproportionate political representation in Congress."
          },
          {
            "id": "q3.3.5",
            "unitId": 3,
            "text": "What was the purpose of the Federalist Papers, authored by Madison, Hamilton, and Jay?",
            "options": [
              "To declare immediate war on Native American tribes in the Ohio Valley.",
              "To persuade the public and state legislatures to ratify the new Constitution.",
              "To outline a plan to buy the Louisiana Territory from France.",
              "To critique George Washington's performance as President."
            ],
            "correctIndex": 1,
            "hint": "These 85 essays were published anonymously under the pen name 'Publius.'",
            "explanation": "The Federalist Papers explained the design and necessity of the new Constitution, arguing that its check-and-balance systems would protect liberty."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Period 4: 1800–1848",
    "masteryWeight": "10%",
    "topics": [
      {
        "id": "4.1",
        "title": "The Rise of Mass Democracy, Political Parties, and federal Power Debates",
        "description": "Analyze the emergence of the Second Party System, Andrew Jackson's presidency, and debates over federal supremacy.",
        "youtubeId": "zX8t9o9V9v0",
        "article": "# The Rise of Mass Democracy and federal Power\n\nBetween 1800 and 1848, the United States saw a major expansion of democracy for white males, leading to the rise of mass political parties and constitutional crises over federal vs. state authority.\n\n## The Second Party System\nBy the 1830s, property requirements for voting were eliminated for white men, ushering in the \"Age of the Common Man\" under **Andrew Jackson**. This created a new party system:\n- **Democrats (Jackson)**: Represented small farmers, westerners, and urban workers. They favored limited federal government, local rule, and westward expansion.\n- **Whigs (Clay)**: Represented northern merchants and reform-minded protestants. They favored a strong federal government and Henry Clay's **American System**, which advocated for a National Bank, protective tariffs, and federal funding for infrastructure (internal improvements).\n\n## Federal Supremacy vs. States' Rights\n1. **The Nullification Crisis (1832)**: South Carolina declared the federal \"Tariff of Abominations\" null and void within its borders, invoking states' rights. Jackson threatened military force (Force Bill) and negotiated a compromise tariff, asserting federal supremacy.\n2. **Supreme Court (John Marshall)**: Under Chief Justice John Marshall, the Court consistently ruled to expand federal power over states:\n   - *McCulloch v. Maryland (1819)*: Confirmed the constitutionality of the National Bank and established federal supremacy.\n   - *Gibbons v. Ogden (1824)*: Confirmed federal control over interstate commerce.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- American System Diagram -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Clay's American System</text>\n  \n  <g transform=\"translate(30, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(32,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"35\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">1. Protective Tariffs</text>\n  </g>\n  \n  <g transform=\"translate(150, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(129,140,248,0.1)\" stroke=\"#818cf8\" />\n    <text x=\"50\" y=\"35\" fill=\"#818cf8\" font-size=\"8\" text-anchor=\"middle\">2. National Bank</text>\n  </g>\n\n  <g transform=\"translate(270, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(251,191,36,0.1)\" stroke=\"#fbbf24\" />\n    <text x=\"50\" y=\"35\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">3. Roads / Canals</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q4.1.1",
            "unitId": 4,
            "text": "The expansion of democracy during the Jacksonian Era was characterized primarily by which trend?",
            "options": [
              "The granting of voting rights to women.",
              "The elimination of property ownership requirements for white male voters.",
              "The immediate emancipation and enfranchisement of enslaved peoples.",
              "A decline in voter turnout and interest in political campaigns."
            ],
            "correctIndex": 1,
            "hint": "This led to the 'Age of the Common Man' in American politics.",
            "explanation": "During the 1820s and 1830s, states revised their constitutions to drop property qualifications, allowing almost all white adult males to vote."
          },
          {
            "id": "q4.1.2",
            "unitId": 4,
            "text": "Henry Clay's 'American System' proposed to integrate the US economy through all of the following EXCEPT:",
            "options": [
              "A protective tariff to support domestic manufacturing.",
              "A National Bank to stabilize currency and credit.",
              "Federal funding for internal improvements like roads and canals.",
              "The annexation of Texas to expand cotton agriculture."
            ],
            "correctIndex": 3,
            "hint": "The plan focused on linking northern manufacturing with western agricultural markets.",
            "explanation": "The American System focused on internal infrastructure, finance, and tariff protection, not territorial expansion like the annexation of Texas."
          },
          {
            "id": "q4.1.3",
            "unitId": 4,
            "text": "During the Nullification Crisis of 1832, South Carolina asserted its right to do which of the following?",
            "options": [
              "Secede immediately from the Union to form a new nation.",
              "Declare a federal tariff law null and void within state borders.",
              "Arrest federal customs collectors who entered the state.",
              "Forbid the importation of enslaved labor from other states."
            ],
            "correctIndex": 1,
            "hint": "This was based on John C. Calhoun's theory of state sovereignty.",
            "explanation": "South Carolina nullified the Tariffs of 1828 and 1832, arguing that sovereign states had the right to reject unconstitutional federal laws."
          },
          {
            "id": "q4.1.4",
            "unitId": 4,
            "text": "How did Chief Justice John Marshall's Supreme Court rulings generally affect federal power?",
            "options": [
              "They consistently restricted federal authority in favor of states' rights.",
              "They expanded federal authority and confirmed the supremacy of federal law over states.",
              "They declared the Bill of Rights applicable to all Native American tribes.",
              "They ruled that Congress had no power to regulate interstate commerce."
            ],
            "correctIndex": 1,
            "hint": "Think of rulings like McCulloch v. Maryland and Gibbons v. Ogden.",
            "explanation": "John Marshall's court consistently established that the federal government had broad implied powers and that state laws could not override federal laws."
          },
          {
            "id": "q4.1.5",
            "unitId": 4,
            "text": "Which political party formed in the 1830s to oppose Andrew Jackson's 'tyrannical' presidency, drawing their name from the anti-monarchy party in Britain?",
            "options": [
              "The Democrats",
              "The Whigs",
              "The Populists",
              "The Federalists"
            ],
            "correctIndex": 1,
            "hint": "They nicknamed Jackson 'King Andrew the First.'",
            "explanation": "The Whigs formed as a coalition opposing Jackson's extensive use of executive power, advocating instead for legislative supremacy and economic development."
          }
        ]
      },
      {
        "id": "4.2",
        "title": "The Market Revolution, Industrialization, and Social Transformations",
        "description": "Examine the technological innovations of the Market Revolution, the growth of the factory system, and changing family and gender roles.",
        "youtubeId": "zX8t9o9V9v0",
        "article": "# The Market Revolution and Social Change\n\nThe first half of the 19th century witnessed the **Market Revolution**, a rapid transformation from agrarian, local economies to a national, commercial market system.\n\n## Technological Innovations\nNew technologies connected distant regions, lowered shipping costs, and boosted productivity:\n- **Transportation**: The construction of canals (like the **Erie Canal** in 1825), steamships (invented by Robert Fulton), and early railroads.\n- **Communication**: The telegraph (Samuel Morse) enabled instant commercial transactions.\n- **Agriculture**: The steel plow (John Deere) and mechanical reaper (Cyrus McCormick) turned the Midwest into a commercial grain hub.\n- **Manufacturing**: Eli Whitney's **interchangeable parts** and the cotton gin revolutionized factory assembly lines and cotton processing.\n\n## Social Transformations\n1. **The Factory System & Lowell Girls**: In Lowell, Massachusetts, textile mills employed young farm girls, housing them in supervised dormitories. This marked the birth of early industrial wage labor.\n2. **Immigration**: A massive wave of Irish (escaping the potato famine) and German immigrants arrived, settling in northern cities and providing cheap factory labor. This sparked a nativist backlash (the **Know-Nothing Party**).\n3. **Gender Roles & Cult of Domesticity**: As work moved from family farms to factories, middle-class society separated into public (male, work) and private (female, home) spheres. The **Cult of Domesticity** idealized women as moral guardians of the household.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Market Revolution Connections -->\n  <line x1=\"80\" y1=\"30\" x2=\"320\" y2=\"30\" stroke=\"#a1a1aa\" stroke-width=\"2\" />\n  <line x1=\"80\" y1=\"120\" x2=\"320\" y2=\"120\" stroke=\"#a1a1aa\" stroke-width=\"2\" />\n  \n  <text x=\"80\" y=\"75\" fill=\"#60a5fa\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">North (Factories)</text>\n  <text x=\"320\" y=\"75\" fill=\"#fbbf24\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">West (Grain / Meat)</text>\n  \n  <path d=\"M 120 40 Q 200 60 280 40\" fill=\"none\" stroke=\"#20c997\" stroke-width=\"1.5\" marker-end=\"url(#arrow-phys)\" />\n  <text x=\"200\" y=\"55\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Manufactured Goods</text>\n\n  <path d=\"M 280 110 Q 200 90 120 110\" fill=\"none\" stroke=\"#20c997\" stroke-width=\"1.5\" marker-end=\"url(#arrow-phys)\" />\n  <text x=\"200\" y=\"102\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Agricultural Surplus</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q4.2.1",
            "unitId": 4,
            "text": "The Market Revolution of the early 19th century is best defined by which development?",
            "options": [
              "A complete return to local subsistence farming.",
              "A shift from home production and local markets to a national, commercial trade network.",
              "The immediate unionization of all agricultural laborers.",
              "The adoption of mercantilist trade restrictions against Great Britain."
            ],
            "correctIndex": 1,
            "hint": "It involved transportation innovations that connected the East, West, and South.",
            "explanation": "The Market Revolution connected farmers and factories through canals, steam, and rail, shifting the economy from self-sufficiency to commercial production."
          },
          {
            "id": "q4.2.2",
            "unitId": 4,
            "text": "What major infrastructure project, completed in 1825, linked the Great Lakes with New York City and lowered shipping costs?",
            "options": [
              "The National Road",
              "The Transcontinental Railroad",
              "The Erie Canal",
              "The Chesapeake and Ohio Canal"
            ],
            "correctIndex": 2,
            "hint": "This canal was constructed across upstate New York.",
            "explanation": "The Erie Canal connected the Hudson River to Lake Erie, turning New York City into the country's primary commercial port and sparking a canal-building boom."
          },
          {
            "id": "q4.2.3",
            "unitId": 4,
            "text": "The Lowell System of textile manufacturing in Massachusetts was notable for employing which labor group?",
            "options": [
              "Enslaved African Americans imported from the South.",
              "Young, unmarried women from local farms.",
              "Highly skilled artisans from Europe.",
              "Native American families forced off their lands."
            ],
            "correctIndex": 1,
            "hint": "These workers lived in heavily supervised boardinghouses built by the mill owners.",
            "explanation": "Lowell mills hired young farm girls ('Lowell Girls') to operate spinning frames, housing them in boardinghouses to reassure families of their moral safety."
          },
          {
            "id": "q4.2.4",
            "unitId": 4,
            "text": "What social ideology developed in the middle class as a result of the Market Revolution, separating gender roles into public and private spheres?",
            "options": [
              "Republican Motherhood",
              "The Cult of Domesticity",
              "Seneca Falls Feminism",
              "Nativism"
            ],
            "correctIndex": 1,
            "hint": "This view idealized women's roles as moral leaders inside the home.",
            "explanation": "The Cult of Domesticity defined the home as a private sanctuary where women were expected to display piety, purity, and submissiveness, distinct from the commercial public sphere."
          },
          {
            "id": "q4.2.5",
            "unitId": 4,
            "text": "The 'Know-Nothing' Party emerged in the 1850s primarily to advocate for which political position?",
            "options": [
              "The immediate abolition of chattel slavery.",
              "Nativist policies to restrict Catholic immigration (Irish and German).",
              "The annexation of Canada and Mexico.",
              "Federal funding for transcontinental canals."
            ],
            "correctIndex": 1,
            "hint": "They were an anti-immigrant, secret society that claimed to 'know nothing' when questioned.",
            "explanation": "Massive Catholic immigration in the 1840s sparked a nativist backlash. The American (Know-Nothing) Party sought to limit immigrants' political power and extend naturalization periods."
          }
        ]
      },
      {
        "id": "4.3",
        "title": "The Second Great Awakening, Antebellum Reform Movements, and Sectionalism",
        "description": "Examine the religious revivals of the Second Great Awakening and how they inspired abolitionism, women's rights, and temperance.",
        "youtubeId": "zX8t9o9V9v0",
        "article": "# The Second Great Awakening and Antebellum Reform\n\nThe **Second Great Awakening** was a major religious revival movement that swept the United States in the early 19th century, transforming American religious life and directly inspiring a wave of social reform movements.\n\n## The Second Great Awakening\n- **Message**: Unlike older Calvinist beliefs in predestination, revivalist preachers (like Charles Grandison Finney) emphasized free will and personal salvation. They argued that individuals could choose to avoid sin and improve both themselves and society.\n- **The Burned-Over District**: Western New York became a hotbed of intense revival meetings, named for the frequency of these religious 'fires'.\n\n## The Reform Movements\nBelieving that society could be perfected (a concept known as **perfectionism**), reformers launched several major movements:\n1. **Abolitionism**: The movement to end slavery immediately. Led by figures like **William Lloyd Garrison** (publisher of *The Liberator*) and **Frederick Douglass** (a brilliant escaped orator who wrote *The North Star*).\n2. **Women's Rights**: Women active in abolitionism realized they faced similar legal restrictions. In 1848, Elizabeth Cady Stanton and Lucretia Mott organized the **Seneca Falls Convention**. They drafted the **Declaration of Sentiments**, declaring \"all men and women are created equal\" and demanding the right to vote.\n3. **Temperance**: A crusade to ban alcohol, which reformers blamed for domestic abuse and poverty.\n4. **Asylum & Prison Reform**: Led by **Dorothea Dix**, who documented the abuse of the mentally ill in prisons, leading to the creation of dedicated state hospitals.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"160\" viewBox=\"0 0 400 160\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Reform Roots diagram -->\n  <circle cx=\"200\" cy=\"30\" r=\"20\" fill=\"rgba(129,140,248,0.15)\" stroke=\"#818cf8\" stroke-width=\"2\" />\n  <text x=\"200\" y=\"33\" fill=\"#818cf8\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">2nd Great Awakening</text>\n\n  <!-- Branches -->\n  <line x1=\"200\" y1=\"50\" x2=\"80\" y2=\"100\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  <line x1=\"200\" y1=\"50\" x2=\"160\" y2=\"100\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  <line x1=\"200\" y1=\"50\" x2=\"240\" y2=\"100\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  <line x1=\"200\" y1=\"50\" x2=\"320\" y2=\"100\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n\n  <!-- Leafs -->\n  <text x=\"80\" y=\"115\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Abolitionism</text>\n  <text x=\"160\" y=\"115\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Women's Rights</text>\n  <text x=\"240\" y=\"115\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Temperance</text>\n  <text x=\"320\" y=\"115\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Asylum Reform</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q4.3.1",
            "unitId": 4,
            "text": "Preachers of the Second Great Awakening rejected Calvinist predestination in favor of what doctrine?",
            "options": [
              "That humans have no free will and are doomed to sin.",
              "That salvation is open to all through free will, repentance, and good works.",
              "That only a small, pre-selected elite will enter heaven.",
              "That religious faith should be replaced by scientific rationalism."
            ],
            "correctIndex": 1,
            "hint": "This theology empowered individuals to control their own spiritual destiny.",
            "explanation": "Second Great Awakening theology emphasized individual agency and moral perfection, which directly fueled reform efforts to improve society."
          },
          {
            "id": "q4.3.2",
            "unitId": 4,
            "text": "Which abolitionist leader published the radical anti-slavery newspaper The Liberator and demanded the immediate, uncompensated emancipation of slaves?",
            "options": [
              "Frederick Douglass",
              "William Lloyd Garrison",
              "John Brown",
              "Abraham Lincoln"
            ],
            "correctIndex": 1,
            "hint": "He famously declared: 'I will not equivocate—I will not excuse—I will not retreat a single inch—and I will be heard!'",
            "explanation": "Garrison was a radical abolitionist who founded the American Anti-Slavery Society, rejecting gradual emancipation in favor of immediate abolition."
          },
          {
            "id": "q4.3.3",
            "unitId": 4,
            "text": "The Seneca Falls Convention of 1848 was historically significant because it achieved which milestone?",
            "options": [
              "It drafted the first petition to abolish the transatlantic slave trade.",
              "It organized the first national meeting dedicated to women's rights and suffrage.",
              "It successfully secured the right to vote for women in New York state.",
              "It created the first public university open to female students."
            ],
            "correctIndex": 1,
            "hint": "Elizabeth Cady Stanton read the Declaration of Sentiments here.",
            "explanation": "Seneca Falls marked the formal beginning of the organized women's suffrage movement in the United States, presenting the Declaration of Sentiments."
          },
          {
            "id": "q4.3.4",
            "unitId": 4,
            "text": "How did Dorothea Dix contribute to the reform movements of the antebellum era?",
            "options": [
              "She founded the American Temperance Society.",
              "She led the Underground Railroad to free enslaved people.",
              "She documented the abuse of the mentally ill, leading to the creation of state mental asylums.",
              "She advocated for the creation of public co-educational high schools."
            ],
            "correctIndex": 2,
            "hint": "Her work focused on separating the mentally ill from common criminals in prison cells.",
            "explanation": "Dix's relentless lobbying and reports convinced state legislatures to establish dedicated, humane institutions for the mentally ill."
          },
          {
            "id": "q4.3.5",
            "unitId": 4,
            "text": "The Declaration of Sentiments, written at Seneca Falls, was modeled directly on which historical document?",
            "options": [
              "The United States Constitution",
              "The Declaration of Independence",
              "Thomas Paine's Common Sense",
              "The Articles of Confederation"
            ],
            "correctIndex": 1,
            "hint": "It opened with: 'We hold these truths to be self-evident: that all men and women are created equal...'",
            "explanation": "Stanton deliberately structured the document to mirror the Declaration of Independence, framing women's rights as a continuation of America's founding principles."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Period 5: 1844–1877",
    "masteryWeight": "13%",
    "topics": [
      {
        "id": "5.1",
        "title": "Manifest Destiny, Western Expansion, and the Mexican-American War",
        "description": "Examine the ideology of Manifest Destiny, the annexation of Texas, and how the Mexican Cession reopened the debate over slavery.",
        "youtubeId": "hBf3G22B5qA",
        "article": "# Manifest Destiny and the Mexican-American War\n\nDuring the 1840s, the United States was swept by a nationalistic drive to expand westward across the continent, a movement that culminated in war and reopened the debate over slavery.\n\n## Manifest Destiny\nThe term <vocab term=\"Manifest Destiny\" definition=\"The 19th-century belief that the United States was divinely ordained to expand its democratic and capitalistic systems across the entire North American continent.\">Manifest Destiny</vocab> was coined by John O'Sullivan. It asserted that:\n- Expansion was divinely ordained by God.\n- It was America's mission to spread democracy and freedom westward.\n- It assumed Anglo-Saxon cultural and racial superiority over Native Americans and Mexicans.\n\n## The Mexican-American War (1846–1848)\n- **Cause**: President James K. Polk annexed Texas in 1845 and sent troops into disputed territory along the Rio Grande, provoking a clash with Mexican forces.\n- **Treaty of Guadalupe Hidalgo (1848)**: Ended the war. Mexico ceded more than half of its territory to the US (the **Mexican Cession**, including California, Utah, Nevada, Arizona, and New Mexico) for $15 million.\n\n## The Reopening of the Slavery Debate\nThe acquisition of the Mexican Cession immediately shattered the delicate political balance between free and slave states.\n- **Wilmot Proviso (1846)**: A proposed bill to ban slavery in any territory acquired from Mexico. Though it passed the House, it was repeatedly blocked by Southern senators, exposing deep sectional divisions.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- US Expansion Map Sketch -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">US Territorial Acquisitions (1840s)</text>\n  \n  <!-- Oregon Territory -->\n  <rect x=\"30\" y=\"45\" width=\"100\" height=\"35\" rx=\"4\" fill=\"rgba(96,165,250,0.1)\" stroke=\"#60a5fa\" />\n  <text x=\"80\" y=\"65\" fill=\"#60a5fa\" font-size=\"8\" text-anchor=\"middle\">Oregon (1846)</text>\n  \n  <!-- Mexican Cession -->\n  <rect x=\"30\" y=\"90\" width=\"130\" height=\"40\" rx=\"4\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" />\n  <text x=\"95\" y=\"115\" fill=\"#ef4444\" font-size=\"8\" text-anchor=\"middle\">Mexican Cession (1848)</text>\n\n  <!-- Texas Annexation -->\n  <rect x=\"180\" y=\"90\" width=\"100\" height=\"40\" rx=\"4\" fill=\"rgba(251,191,36,0.1)\" stroke=\"#fbbf24\" />\n  <text x=\"230\" y=\"115\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">Texas (1845)</text>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q5.1.1",
            "unitId": 5,
            "text": "The ideology of Manifest Destiny was built on all of the following beliefs EXCEPT:",
            "options": [
              "God supported American westward expansion.",
              "The US should immediately share political power equally with Native tribes.",
              "America had a mission to spread democracy and capitalism.",
              "Anglo-Saxon institutions were culturally and racially superior."
            ],
            "correctIndex": 1,
            "hint": "Manifest Destiny was highly nationalistic and ethnocentric.",
            "explanation": "Manifest Destiny assumed the superiority of American culture and systems, viewing indigenous peoples and Mexicans as obstacles to be removed or dominated."
          },
          {
            "id": "q5.1.2",
            "unitId": 5,
            "text": "The Wilmot Proviso (1846) attempted to resolve the debate over slavery in the west by doing which of the following?",
            "options": [
              "Extending the Missouri Compromise line to the Pacific Ocean.",
              "Allowing territories to vote on whether to permit slavery.",
              "Banning slavery in any territory acquired from the Mexican-American War.",
              "Forcing all northern states to return runaway slaves."
            ],
            "correctIndex": 2,
            "hint": "This proviso was proposed by a Pennsylvania congressman during the war.",
            "explanation": "The Wilmot Proviso proposed that slavery be completely banned in any land won from Mexico, signaling growing northern opposition to the spread of slavery."
          },
          {
            "id": "q5.1.3",
            "unitId": 5,
            "text": "What was the immediate cause of the Mexican-American War (1846–1848)?",
            "options": [
              "A boundary dispute along the Rio Grande where US and Mexican troops clashed.",
              "The discovery of gold in California.",
              "Mexico's decision to build military forts in Louisiana.",
              "The signing of the Oregon Boundary Treaty with Great Britain."
            ],
            "correctIndex": 0,
            "hint": "Polk claimed that Mexico had shed 'American blood on American soil' in a disputed border zone.",
            "explanation": "After annexing Texas, the US claimed the Rio Grande as the border, while Mexico claimed the Nueces River. A clash in this zone led Polk to request a declaration of war."
          },
          {
            "id": "q5.1.4",
            "unitId": 5,
            "text": "Which treaty ended the Mexican-American War, granting the US the Mexican Cession in exchange for $15 million?",
            "options": [
              "The Treaty of Paris",
              "The Treaty of Ghent",
              "The Treaty of Guadalupe Hidalgo",
              "The Adams-Onís Treaty"
            ],
            "correctIndex": 2,
            "hint": "The treaty was signed in a town near Mexico City in 1848.",
            "explanation": "The Treaty of Guadalupe Hidalgo ended the war, confirming the Texas border at the Rio Grande and transferring California and the Southwest to the US."
          },
          {
            "id": "q5.1.5",
            "unitId": 5,
            "text": "How did the acquisition of the Mexican Cession affect the political stability of the United States?",
            "options": [
              "It unified the Whigs and Democrats around a shared economic plan.",
              "It settled the slavery debate once and for all.",
              "It reopened intense sectional debates over the expansion of slavery into new territories.",
              "It led to an immediate decline in western migration."
            ],
            "correctIndex": 2,
            "hint": "The balance of free and slave states in the Senate was threatened.",
            "explanation": "Adding massive new lands triggered bitter arguments over whether the new territories would allow slavery, directly paving the way for the Compromise of 1850."
          }
        ]
      },
      {
        "id": "5.2",
        "title": "The Failure of Compromise, Sectional Conflict, and Southern Secession",
        "description": "Evaluate the political failures of the 1850s, including the Compromise of 1850, the Kansas-Nebraska Act, and the Dred Scott decision.",
        "youtubeId": "hBf3G22B5qA",
        "article": "# The Failure of Compromise and Sectional Crisis\n\nIn the 1850s, the institutional systems that held the Union together began to break down. A series of political crises pushed the North and South toward open conflict.\n\n## The Compromise of 1850\nTo resolve the status of the Mexican Cession, Henry Clay engineered a compromise:\n- **California** entered the Union as a free state.\n- **Popular Sovereignty** (voting by residents) would determine the status of Utah and New Mexico.\n- **Fugitive Slave Act**: A strict federal law requiring northerners to help return runaway slaves. This act outraged northerners, driving many moderate citizens into the abolitionist camp.\n\n## The Kansas-Nebraska Act (1854)\nStephen Douglas proposed opening the Kansas and Nebraska territories to **popular sovereignty**, repealing the Missouri Compromise of 1820 (which had banned slavery north of 36°30').\n- **Result**: Pro- and anti-slavery settlers rushed to Kansas to vote, sparking a localized civil war known as **\"Bleeding Kansas\"**.\n- **Political realignment**: The Whig Party collapsed, and the **Republican Party** was born in the North, unified around the goal of stopping the expansion of slavery (\"Free Soil\").\n\n## The Dred Scott Decision (1857)\nThe Supreme Court (Chief Justice Roger Taney) ruled that:\n1. Enslaved people were not citizens and could not sue in federal court.\n2. Enslaved people were property protected by the 5th Amendment, meaning Congress had no power to ban slavery in any federal territory. This effectively declared the Missouri Compromise unconstitutional, shocking the North.\n\nFollowing the election of Republican **Abraham Lincoln** in November 1860, South Carolina and six other Deep South states seceded from the Union, forming the Confederate States of America.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Sectional Crisis Steps -->\n  <line x1=\"20\" y1=\"80\" x2=\"380\" y2=\"80\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  \n  <g transform=\"translate(60, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1850</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Fugitive Slave Act</text>\n  </g>\n  \n  <g transform=\"translate(150, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1854</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Kansas-Nebraska Act</text>\n  </g>\n\n  <g transform=\"translate(250, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1857</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Dred Scott Decision</text>\n  </g>\n\n  <g transform=\"translate(340, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#ef4444\" />\n    <text x=\"0\" y=\"65\" fill=\"#ef4444\" font-size=\"8\" text-anchor=\"middle\">1860</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Lincoln's Election</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q5.2.1",
            "unitId": 5,
            "text": "Which part of the Compromise of 1850 generated the most outrage and active resistance in northern states?",
            "options": [
              "The admission of California as a free state.",
              "The abolition of the domestic slave trade in Washington, D.C.",
              "The passage of a strict new Fugitive Slave Act.",
              "The division of Texas into multiple states."
            ],
            "correctIndex": 2,
            "hint": "This law forced northerners to participate in catching runaway slaves under threat of fines or arrest.",
            "explanation": "The Fugitive Slave Act stripped accused runaways of jury trials and compelled northern citizens to assist in captures, galvanizing northern opposition to slavery."
          },
          {
            "id": "q5.2.2",
            "unitId": 5,
            "text": "The Kansas-Nebraska Act of 1854, proposed by Stephen Douglas, directly repealed which previous compromise?",
            "options": [
              "The Compromise of 1850",
              "The Missouri Compromise of 1820",
              "The Three-Fifths Compromise",
              "The Great Compromise"
            ],
            "correctIndex": 1,
            "hint": "This compromise had drawn a line at 36°30' to divide free and slave territory.",
            "explanation": "By opening Kansas and Nebraska (which were north of the 36°30' line) to popular sovereignty, the act nullified the Missouri Compromise's ban on slavery in those territories."
          },
          {
            "id": "q5.2.3",
            "unitId": 5,
            "text": "In the Dred Scott case (1857), Chief Justice Roger Taney ruled that the Missouri Compromise was unconstitutional for what reason?",
            "options": [
              "It violated the states' rights of northern free states.",
              "It violated the 5th Amendment by depriving citizens of their property (slaves) without due process.",
              "It did not count enslaved people as three-fifths of a person.",
              "It had not been signed by the President."
            ],
            "correctIndex": 1,
            "hint": "Taney declared that Congress had no power to ban slavery in any territory because slaves were property.",
            "explanation": "The Court ruled that slaves were property and that the federal government could not prohibit property ownership in territories, making any ban on slavery unconstitutional."
          },
          {
            "id": "q5.2.4",
            "unitId": 5,
            "text": "What was the immediate political catalyst for South Carolina's secession from the Union in December 1860?",
            "options": [
              "John Brown's raid on Harpers Ferry.",
              "The passage of the Kansas-Nebraska Act.",
              "The election of Republican Abraham Lincoln to the presidency.",
              "The firing on Fort Sumter by Union troops."
            ],
            "correctIndex": 2,
            "hint": "South Carolina seceded before Lincoln was even inaugurated, fearing his party's anti-slavery platform.",
            "explanation": "Lincoln's election convinced Southern leaders that the federal government would act to limit and eventually abolish slavery, prompting immediate secession."
          },
          {
            "id": "q5.2.5",
            "unitId": 5,
            "text": "Which new political party arose in the mid-1850s in the North, dedicated entirely to preventing the expansion of slavery?",
            "options": [
              "The Whigs",
              "The Populists",
              "The Republican Party",
              "The Democratic Party"
            ],
            "correctIndex": 2,
            "hint": "This party nominated Abraham Lincoln in 1860.",
            "explanation": "The Republican Party was formed in 1854 by anti-slavery Whigs, Democrats, and Free-Soilers unified in opposition to the Kansas-Nebraska Act."
          }
        ]
      },
      {
        "id": "5.3",
        "title": "The Civil War, Government Wartime Policies, and the Successes and Failures of Reconstruction",
        "description": "Examine the Civil War, Abraham Lincoln's war measures (Emancipation Proclamation), and the constitutional reforms and failures of Reconstruction.",
        "youtubeId": "QnQe0xW_JY4",
        "article": "# The Civil War and Reconstruction\n\nThe **American Civil War** (1861–1865) preserved the Union, abolished slavery, and initiated **Reconstruction**, a period of intense struggle over the political and social status of newly freed African Americans.\n\n## The Civil War\n- **Union Advantages**: Superior population, industrial manufacturing capacity, and transportation networks (railroads).\n- **Confederate Advantages**: Experienced military commanders and defensive home-ground strategy.\n- **Lincoln's War Measures**:\n  - **Emancipation Proclamation (1863)**: Declared all slaves in rebelling Confederate territory free. This shifted the war's purpose to include the eradication of slavery and prevented foreign intervention by anti-slavery European powers.\n  - **Gettysburg Address (1863)**: Framed the war as a test of whether a nation dedicated to human equality could survive.\n\n## The Reconstruction Amendments\nDuring Reconstruction, the Radical Republicans in Congress passed three landmark amendments:\n- **13th Amendment**: Abolished slavery.\n- **14th Amendment**: Granted citizenship and equal protection under the law to all persons born in the US.\n- **15th Amendment**: Banned voting discrimination based on race.\n\n## The Failures of Reconstruction\nDespite initial successes (such as the election of black politicians to Congress), Reconstruction collapsed by 1877:\n- **Sharecropping**: A labor system that tied freedmen to white-owned land in cycles of debt.\n- **Voter Suppression**: Southern whites used violence (Ku Klux Klan), poll taxes, and literacy tests to block black voters.\n- **Compromise of 1877**: A political deal that settled the disputed 1876 election by withdrawing federal troops from the South, ending Reconstruction and allowing the rise of **Jim Crow** segregation laws.\n\n<div class=\"flex justify-center my-8\">\n<table class=\"w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25\">\n  <thead>\n    <tr class=\"bg-white/5 text-white font-mono uppercase\">\n      <th class=\"p-2 border border-white/10\">Amendment</th>\n      <th class=\"p-2 border border-white/10\">Core Protection</th>\n      <th class=\"p-2 border border-white/10\">Reconstruction Impact</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-yellow-400\">13th</td>\n      <td class=\"p-2 border border-white/10\">Abolished Slavery</td>\n      <td class=\"p-2 border border-white/10\">Freed 4 million people</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-cyan-400\">14th</td>\n      <td class=\"p-2 border border-white/10\">Citizenship & Equal Protection</td>\n      <td class=\"p-2 border border-white/10\">Overturned Dred Scott ruling</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-indigo-400\">15th</td>\n      <td class=\"p-2 border border-white/10\">Voting Rights (Men)</td>\n      <td class=\"p-2 border border-white/10\">Enabled black political participation</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n",
        "questions": [
          {
            "id": "q5.3.1",
            "unitId": 5,
            "text": "What was a major diplomatic result of Abraham Lincoln's Emancipation Proclamation in 1863?",
            "options": [
              "It led France and Great Britain to actively enter the war as Confederate allies.",
              "It prevented European powers from intervening on behalf of the Confederacy by framing the war around slavery.",
              "It forced all Northern border states to immediately release their slaves.",
              "It led to the immediate surrender of General Robert E. Lee."
            ],
            "correctIndex": 1,
            "hint": "European working classes strongly opposed slavery, making it politically impossible for their governments to support a pro-slavery nation.",
            "explanation": "By explicitly linking the Union war effort to the abolition of slavery, Lincoln made support for the Confederacy morally unacceptable to Britain and France."
          },
          {
            "id": "q5.3.2",
            "unitId": 5,
            "text": "Which Reconstruction Amendment granted citizenship and 'equal protection under the law' to all persons born in the United States?",
            "options": [
              "12th Amendment",
              "13th Amendment",
              "14th Amendment",
              "15th Amendment"
            ],
            "correctIndex": 2,
            "hint": "This amendment directly overturned the Supreme Court's Dred Scott decision.",
            "explanation": "The 14th Amendment established birthright citizenship and prohibited states from denying equal protection, forming the basis for later civil rights cases."
          },
          {
            "id": "q5.3.3",
            "unitId": 5,
            "text": "What labor system emerged in the post-Civil War South, keeping many freedmen in a cycle of debt and poverty?",
            "options": [
              "The encomienda system",
              "Sharecropping",
              "Industrial wage labor",
              "Indentured servitude"
            ],
            "correctIndex": 1,
            "hint": "Farmers traded their labor for a portion of the crops grown on a landowner's land.",
            "explanation": "Sharecropping required freedmen to rent land in exchange for a share of the harvest, but high interest and debt kept them bound to the land."
          },
          {
            "id": "q5.3.4",
            "unitId": 5,
            "text": "The Compromise of 1877 formally ended Reconstruction through which action?",
            "options": [
              "The passage of the 15th Amendment.",
              "The withdrawal of all remaining federal troops from the South.",
              "The impeachment of President Andrew Johnson.",
              "The complete redistribution of plantations to former slaves."
            ],
            "correctIndex": 1,
            "hint": "This deal settled the disputed presidential election between Hayes and Tilden.",
            "explanation": "In exchange for seating Republican Rutherford B. Hayes, Republicans agreed to withdraw federal troops, allowing Southern Democrats to regain control and suppress black civil rights."
          },
          {
            "id": "q5.3.5",
            "unitId": 5,
            "text": "Which of the following was a primary advantage of the Union over the Confederacy during the Civil War?",
            "options": [
              "More experienced military leadership in local regiments.",
              "A defensive military strategy that required less supply transport.",
              "Significantly greater industrial manufacturing capacity and railroad mileage.",
              "Widespread support from European textile manufacturers."
            ],
            "correctIndex": 2,
            "hint": "The North possessed the vast majority of the nation's factories and steam locomotives.",
            "explanation": "The North's industrial base allowed it to produce weapons and supply its armies efficiently, while its extensive rail network enabled rapid troop movement."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Period 6: 1865–1898",
    "masteryWeight": "13%",
    "topics": [
      {
        "id": "6.1",
        "title": "The Rise of Industrial Capitalism, Gilded Age Corporate Consolidation, and Labor",
        "description": "Examine the Gilded Age industrial boom, corporate consolidation techniques (monopolies), and the rise of labor unions.",
        "youtubeId": "r6tRp-zRUas",
        "article": "# Gilded Age Industrial Capitalism and Labor\n\nFollowing the Civil War, the United States entered the **Gilded Age**—a period characterized by rapid industrialization, massive wealth accumulation, corporate consolidation, and intense labor conflict.\n\n## Rise of Corporate Consolidation\nIndustrialists used new business models to dominate their markets:\n- **Horizontal Integration**: Buying out competitors in the same industry (e.g., John D. Rockefeller's Standard Oil).\n- **Vertical Integration**: Controlling every phase of production, from raw materials to final transportation (e.g., Andrew Carnegie's Carnegie Steel).\n- **Social Darwinism**: The belief that natural selection applied to human society, justifying the extreme wealth gap by claiming that captains of industry were the \"fittest\" individuals.\n- **Gospel of Wealth**: Carnegie's essay arguing that the wealthy had a moral duty to use their fortunes to fund public institutions (libraries, universities) to benefit society.\n\n## The Labor Movement\nAs corporate power grew, factory workers faced dangerous conditions, long hours, and low wages. They organized the first national labor unions:\n1. **Knights of Labor (1869)**: An open union that welcomed skilled, unskilled, female, and black workers. They collapsed after being falsely associated with the violent **Haymarket Square Riot (1886)**.\n2. **American Federation of Labor (AFL, 1886)**: Led by **Samuel Gompers**, a union open only to skilled white males, focusing on practical \"bread-and-butter\" issues: higher wages, shorter hours, and safer working conditions.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"420\" height=\"150\" viewBox=\"0 0 420 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Integration Types Diagram -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  \n  <!-- Horizontal -->\n  <g transform=\"translate(30, 40)\">\n    <rect x=\"0\" y=\"0\" width=\"160\" height=\"70\" rx=\"4\" fill=\"rgba(32,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"80\" y=\"25\" fill=\"#20c997\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Horizontal Integration</text>\n    <text x=\"80\" y=\"45\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Buy competitors in same market</text>\n    <text x=\"80\" y=\"55\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Standard Oil / Monopoly</text>\n  </g>\n  \n  <!-- Vertical -->\n  <g transform=\"translate(210, 40)\">\n    <rect x=\"0\" y=\"0\" width=\"160\" height=\"70\" rx=\"4\" fill=\"rgba(129,140,248,0.1)\" stroke=\"#818cf8\" />\n    <text x=\"80\" y=\"25\" fill=\"#818cf8\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Vertical Integration</text>\n    <text x=\"80\" y=\"45\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Control entire supply chain</text>\n    <text x=\"80\" y=\"55\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Carnegie Steel (Mines to Rails)</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q6.1.1",
            "unitId": 6,
            "text": "Which business strategy is best defined as acquiring control over all stages of production from raw materials to transport?",
            "options": [
              "Horizontal Integration",
              "Vertical Integration",
              "Laissez-faire Capitalism",
              "Deconstruction"
            ],
            "correctIndex": 1,
            "hint": "Andrew Carnegie used this strategy to control coal mines, iron ore fields, and railroads for his steel plants.",
            "explanation": "Vertical integration involves owning all parts of the manufacturing process, reducing costs and eliminating middleman fees."
          },
          {
            "id": "q6.1.2",
            "unitId": 6,
            "text": "The ideology of Social Darwinism was used during the Gilded Age to justify which social condition?",
            "options": [
              "The passage of child labor laws.",
              "The extreme inequality of wealth between industrialists and workers.",
              "The creation of national parks.",
              "The creation of public university systems."
            ],
            "correctIndex": 1,
            "hint": "This theory adapted Charles Darwin's survival of the fittest to economic systems.",
            "explanation": "Social Darwinists argued that wealth accumulation was a sign of biological fitness, suggesting that government efforts to help the poor interfered with natural evolution."
          },
          {
            "id": "q6.1.3",
            "unitId": 6,
            "text": "Which Gilded Age labor union was open to all workers (including women, blacks, and unskilled labor) but collapsed after the Haymarket Square Riot?",
            "options": [
              "The American Federation of Labor (AFL)",
              "The Knights of Labor",
              "The Industrial Workers of the World (IWW)",
              "The National Grange"
            ],
            "correctIndex": 1,
            "hint": "They were led by Terence Powderly and advocated for broad social reforms.",
            "explanation": "The Knights of Labor grew rapidly due to their open policy, but public backlash after the Haymarket Riot in 1886 associated them with anarchism, causing their demise."
          },
          {
            "id": "q6.1.4",
            "unitId": 6,
            "text": "In his Gospell of Wealth essay, Andrew Carnegie argued that wealthy individuals had a moral duty to perform which action?",
            "options": [
              "Pay their factory workers double the market wage rate.",
              "Use their surplus wealth to fund philanthropic institutions like libraries and colleges.",
              "Hoard their wealth to protect their family lineage.",
              "Lobby the federal government to establish a welfare program."
            ],
            "correctIndex": 1,
            "hint": "He believed that giving direct cash handouts was harmful to the poor.",
            "explanation": "Carnegie argued that the wealthy should act as trustees for their community, building permanent institutions that would help citizens help themselves."
          },
          {
            "id": "q6.1.5",
            "unitId": 6,
            "text": "The American Federation of Labor (AFL), led by Samuel Gompers, focused primarily on which goals?",
            "options": [
              "Replacing capitalism with state-owned cooperative worker factories.",
              "Practical 'bread-and-butter' issues like higher wages and shorter hours for skilled workers.",
              "Advocating for immediate women's suffrage and prohibition.",
              "Unifying all global industrial workers into a single worldwide union."
            ],
            "correctIndex": 1,
            "hint": "They avoided radical political ideologies, opting instead for collective bargaining.",
            "explanation": "The AFL focused on skilled craft unions, leveraging their specialized labor to secure tangible improvements in wages, safety, and hours."
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Immigration, Urbanization, nativist Responses, and the Gilded Age Culture",
        "description": "Examine the wave of \"New Immigration\", the rapid growth of industrial cities, and the nativist reactions like the Chinese Exclusion Act.",
        "youtubeId": "r6tRp-zRUas",
        "article": "# Gilded Age Immigration, Cities, and nativism\n\nAs factories multiplied, American cities grew exponentially, fueled by a massive influx of immigrants. This rapid demographic change transformed urban culture and sparked a major nativist backlash.\n\n## The \"New Immigration\"\nPrior to 1880, most immigrants came from Northern and Western Europe (Britain, Germany, Ireland). In the Gilded Age, a wave of **\"New Immigrants\"** arrived:\n- **Origin**: Southern and Eastern Europe (Italy, Poland, Russia) and Asia (China).\n- **Profile**: Primarily Catholic, Jewish, or Buddhist, often poor and non-English speaking, settling in ethnic enclaves (\"Little Italy\", \"Chinatown\") in industrial cities.\n\n## Urbanization and Reform\nCities grew faster than infrastructure could handle, leading to overcrowding, disease, and poor sanitation in **tenement houses**.\n- **Political Machines**: Organizations (like Tammany Hall in NYC, run by **Boss Tweed**) controlled city politics. They provided food and jobs to new immigrants in exchange for votes, pocketing millions in taxpayer money through graft.\n- **The Settlement House Movement**: Social reformers built houses in poor neighborhoods. **Jane Addams** founded **Hull House** in Chicago, providing English classes, childcare, and basic services to immigrant families.\n\n## Nativism and Exclusion\nThe influx of diverse immigrants triggered a nativist reaction:\n- **Chinese Exclusion Act (1882)**: The first federal law to ban immigration based on nationality, passed due to racial prejudice and fear of job competition from Chinese workers on railroads.\n- **American Protective Association**: A nativist group advocating for literacy tests and voting bans on Catholic immigrants.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Push and Pull Factors sketch -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">\"New Immigration\" Factors</text>\n  \n  <g transform=\"translate(40, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"140\" height=\"70\" rx=\"4\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" />\n    <text x=\"70\" y=\"20\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Push Factors</text>\n    <text x=\"70\" y=\"40\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Religious Persecution</text>\n    <text x=\"70\" y=\"55\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Poverty / War in Europe</text>\n  </g>\n  \n  <g transform=\"translate(220, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"140\" height=\"70\" rx=\"4\" fill=\"rgba(34,197,94,0.1)\" stroke=\"#22c55e\" />\n    <text x=\"70\" y=\"20\" fill=\"#22c55e\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Pull Factors</text>\n    <text x=\"70\" y=\"40\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Industrial Factory Jobs</text>\n    <text x=\"70\" y=\"55\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Religious / Political Hope</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q6.2.1",
            "unitId": 6,
            "text": "How did the 'New Immigrants' of the Gilded Age differ from the 'Old Immigrants' of the antebellum era?",
            "options": [
              "They came primarily from Northern Europe and spoke fluent English.",
              "They came primarily from Southern and Eastern Europe, and were often Catholic or Jewish.",
              "They immediately bought large commercial farms in the Great Plains.",
              "They were sponsored entirely by the British Crown."
            ],
            "correctIndex": 1,
            "hint": "They arrived from places like Italy, Poland, and Russia in search of industrial jobs.",
            "explanation": "New Immigrants arrived from Southern and Eastern Europe, bringing diverse cultural backgrounds that contrasted with older Anglo-Protestant immigration."
          },
          {
            "id": "q6.2.2",
            "unitId": 6,
            "text": "Which of the following was a primary function of Gilded Age political machines like Tammany Hall?",
            "options": [
              "Advocating for civil rights legislation in Congress.",
              "Providing basic aid and jobs to immigrants in exchange for political votes.",
              "Building public housing complexes without any tax money.",
              "Exposing government corruption through investigative journalism."
            ],
            "correctIndex": 1,
            "hint": "Boss Tweed used this exchange of services to stay in power and embezzle city funds.",
            "explanation": "Political machines built power bases by helping immigrants find housing and employment, securing voter loyalty in municipal elections."
          },
          {
            "id": "q6.2.3",
            "unitId": 6,
            "text": "Jane Addams founded Hull House in Chicago in 1889 to accomplish which social reform?",
            "options": [
              "To lobby Congress to pass anti-monopoly laws.",
              "To provide education, English classes, and social services to immigrant families.",
              "To organize strikes for railroad workers.",
              "To campaign for the election of Democratic politicians."
            ],
            "correctIndex": 1,
            "hint": "This was a leading institution in the Settlement House Movement.",
            "explanation": "Hull House was a settlement house where educated middle-class reformers lived and worked to help immigrants integrate into American society."
          },
          {
            "id": "q6.2.4",
            "unitId": 6,
            "text": "What was the significance of the Chinese Exclusion Act of 1882?",
            "options": [
              "It banned Chinese workers from farming in California but allowed railroad labor.",
              "It was the first federal law to ban immigration of a specific nationality.",
              "It forced all Chinese residents in the US to return to China.",
              "It granted instant citizenship to Chinese railroad workers."
            ],
            "correctIndex": 1,
            "hint": "Nativists blamed Chinese laborers for depressing wages in western states.",
            "explanation": "Passed in 1882, the Chinese Exclusion Act halted Chinese labor immigration for ten years, reflecting intense racial and economic nativism."
          },
          {
            "id": "q6.2.5",
            "unitId": 6,
            "text": "Overcrowded, poorly ventilated apartment buildings built to house Gilded Age factory workers were known as what?",
            "options": [
              "Settlement houses",
              "Tenement houses",
              "Dormitories",
              "Homesteads"
            ],
            "correctIndex": 1,
            "hint": "These multi-family buildings were notorious for poor sanitation and frequent fires.",
            "explanation": "Tenements were cramped, unsafe urban apartments designed to pack as many working-class families as possible into small urban spaces."
          }
        ]
      },
      {
        "id": "6.3",
        "title": "The Agrarian Movement, Populism, and the Battle of the Standards",
        "description": "Examine the struggles of Gilded Age farmers, the rise of the Populist Party, and the election of 1896 over bimetallism.",
        "youtubeId": "r6tRp-zRUas",
        "article": "# The Populist Movement and the Election of 1896\n\nWhile industrialists grew wealthy, Gilded Age farmers struggled with falling crop prices, high railroad shipping rates, and heavy debts. They organized to form a powerful third-party political movement.\n\n## Farmers' Grievances\nFarmers faced an economic squeeze:\n- **Mechanization**: New machinery boosted crop yields, but caused overproduction, causing crop prices to crash.\n- **Monopoly Shipping Rates**: Railroads charged exorbitant rates to transport agricultural goods, knowing farmers had no other shipping options.\n- **Deflation**: The gold standard restricted the money supply, making it harder for indebted farmers to pay off loans.\n\n## The Populist Party\nIn 1892, farmers and labor leaders formed the **People's (Populist) Party**, publishing their **Omaha Platform**:\n- **Bimetallism**: Unlimited coinage of silver to inflate the money supply.\n- **Direct election of US Senators** (previously chosen by state legislatures).\n- **Graduated income tax** (wealthier citizens pay higher rates).\n- **Government ownership** of railroads, telegraphs, and telephones.\n\n## The Battle of the Standards (1896)\nThe Populists merged with the Democrats in 1896 to back **William Jennings Bryan**, who delivered his famous **\"Cross of Gold\" speech**, declaring that humanity should not be crucified on a cross of gold. Bryan lost the election to Republican **William McKinley**, who was backed by big business. This signaled the decline of the Populists but many of their ideas were later adopted during the Progressive Era.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Populist Platform Keys -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Omaha Platform (Populist Goals)</text>\n  \n  <g transform=\"translate(30, 40)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"35\" rx=\"4\" fill=\"rgba(20,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"20\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Silver Standard</text>\n  </g>\n  \n  <g transform=\"translate(150, 40)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"35\" rx=\"4\" fill=\"rgba(20,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"20\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Own Railroads</text>\n  </g>\n\n  <g transform=\"translate(270, 40)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"35\" rx=\"4\" fill=\"rgba(20,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"20\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Income Tax</text>\n  </g>\n\n  <g transform=\"translate(90, 85)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"35\" rx=\"4\" fill=\"rgba(20,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"20\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">Direct Senators</text>\n  </g>\n\n  <g transform=\"translate(210, 85)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"35\" rx=\"4\" fill=\"rgba(20,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"20\" fill=\"#20c997\" font-size=\"8\" text-anchor=\"middle\">8-Hour Workday</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q6.3.1",
            "unitId": 6,
            "text": "What was the primary economic motivation for Gilded Age farmers advocating for the free coinage of silver?",
            "options": [
              "To reduce their dependency on international trade.",
              "To cause inflation, thereby raising crop prices and making debts easier to pay.",
              "To shut down the federal gold mines in California.",
              "To lower the wages of foreign factory workers."
            ],
            "correctIndex": 1,
            "hint": "Silver coinage would increase the money supply and counter deflation.",
            "explanation": "Free silver (bimetallism) would expand the money supply, causing moderate inflation that would elevate crop prices and ease debt burdens."
          },
          {
            "id": "q6.3.2",
            "unitId": 6,
            "text": "The People's (Populist) Party Omaha Platform of 1892 called for all of the following reform measures EXCEPT:",
            "options": [
              "Government ownership of railroads and telegraph lines.",
              "The direct election of United States Senators by popular vote.",
              "A graduated income tax system.",
              "The deregulation and expansion of private monopoly trusts."
            ],
            "correctIndex": 3,
            "hint": "The Populists represented small farmers opposing giant corporate trusts.",
            "explanation": "Populists strongly opposed corporate monopolies, calling instead for federal regulation or direct ownership of key transportation and communication networks."
          },
          {
            "id": "q6.3.3",
            "unitId": 6,
            "text": "William Jennings Bryan's famous 'Cross of Gold' speech at the 1896 Democratic National Convention was a defense of which position?",
            "options": [
              "Remaining strictly on the gold standard.",
              "Bimetallism and the free coinage of silver.",
              "The immediate colonization of the Philippines.",
              "Establishing the income tax as the primary federal revenue source."
            ],
            "correctIndex": 1,
            "hint": "He declared: 'You shall not press down upon the brow of labor this crown of thorns; you shall not crucify mankind upon a cross of gold.'",
            "explanation": "Bryan defended the silver standard (bimetallism), arguing that a gold-only standard favored eastern bankers at the expense of working people."
          },
          {
            "id": "q6.3.4",
            "unitId": 6,
            "text": "What factor directly contributed to Gilded Age farmers' crop prices declining despite increased productivity?",
            "options": [
              "Agricultural overproduction resulting from new machinery and western farming.",
              "A sudden decline in the US population.",
              "The abolition of all agricultural import tariffs.",
              "The refusal of railroads to ship grain to eastern cities."
            ],
            "correctIndex": 0,
            "hint": "When supply dramatically increases while demand is steady, prices drop.",
            "explanation": "New machinery like mechanical reapers boosted yields, but the resulting overproduction flooded the market, causing prices to fall."
          },
          {
            "id": "q6.3.5",
            "unitId": 6,
            "text": "Which political party won the election of 1896, securing the gold standard and marking the decline of the Populist movement?",
            "options": [
              "The Democrats",
              "The Republicans",
              "The Whigs",
              "The Federalists"
            ],
            "correctIndex": 1,
            "hint": "Their candidate, William McKinley, ran a 'front porch' campaign.",
            "explanation": "William McKinley and the Republicans won the presidency, representing urban, industrial interests committed to the gold standard, bringing an end to the Populist surge."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Period 7: 1890–1945",
    "masteryWeight": "17%",
    "topics": [
      {
        "id": "7.1",
        "title": "The Progressive Era, Muckrakers, and Progressive Constitutional Reforms",
        "description": "Examine the muckraking journalists, social reforms, and the four landmark Progressive Amendments.",
        "youtubeId": "F7flSW1PGsA",
        "article": "# The Progressive Era and Reform\n\nIn response to Gilded Age corruption and industrial excesses, the **Progressive Era** (1890–1920) introduced a wave of reform to clean up politics and improve society.\n\n## The Muckrakers\nProgressivism was driven by **muckrakers**—investigative journalists who exposed societal ills:\n- **Ida Tarbell**: Wrote *The History of the Standard Oil Company*, exposing Rockefeller's ruthless monopoly tactics.\n- **Upton Sinclair**: Wrote *The Jungle*, exposing the horrific conditions in Chicago meatpacking plants. This led President Theodore Roosevelt to pass the **Meat Inspection Act** and the **Pure Food and Drug Act (1906)**.\n- **Jacob Riis**: Photographed urban poverty in *How the Other Half Lives*, showing tenement misery.\n\n## Progressive Constitutional Amendments\nThe era produced four constitutional amendments that reshaped the nation:\n- **16th Amendment (1913)**: Established a federal income tax.\n- **17th Amendment (1913)**: Allowed the direct election of US Senators.\n- **18th Amendment (1919)**: Banned the sale and manufacturing of alcohol (**Prohibition**).\n- **19th Amendment (1920)**: Granted women the right to vote (**Women's Suffrage**), following decades of campaigning by leaders like Alice Paul and Carrie Chapman Catt.\n\n<div class=\"flex justify-center my-8\">\n<table class=\"w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25\">\n  <thead>\n    <tr class=\"bg-white/5 text-white font-mono uppercase\">\n      <th class=\"p-2 border border-white/10\">Amendment</th>\n      <th class=\"p-2 border border-white/10\">Reform Focus</th>\n      <th class=\"p-2 border border-white/10\">Intended Goal</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-yellow-400\">16th</td>\n      <td class=\"p-2 border border-white/10\">Federal Income Tax</td>\n      <td class=\"p-2 border border-white/10\">Reduce wealth gap; fund services</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-cyan-400\">17th</td>\n      <td class=\"p-2 border border-white/10\">Direct Election of Senators</td>\n      <td class=\"p-2 border border-white/10\">End corporate bribery in legislatures</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-indigo-400\">18th</td>\n      <td class=\"p-2 border border-white/10\">Prohibition of Alcohol</td>\n      <td class=\"p-2 border border-white/10\">Reduce domestic violence and crime</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-emerald-400\">19th</td>\n      <td class=\"p-2 border border-white/10\">Women's Suffrage</td>\n      <td class=\"p-2 border border-white/10\">Expand democratic participation</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n",
        "questions": [
          {
            "id": "q7.1.1",
            "unitId": 7,
            "text": "Which muckraking journalist authored The Jungle, leading to federal regulation of the food industry?",
            "options": [
              "Ida Tarbell",
              "Upton Sinclair",
              "Jacob Riis",
              "Lincoln Steffens"
            ],
            "correctIndex": 1,
            "hint": "He set out to write a socialist critique of capitalism but ended up shocking the nation with meat production details.",
            "explanation": "Sinclair's depiction of unsanitary meat conditions disgusted the public and prompted Theodore Roosevelt to pass the Meat Inspection Act."
          },
          {
            "id": "q7.1.2",
            "unitId": 7,
            "text": "Which Progressive Amendment established the direct election of United States Senators by popular vote?",
            "options": [
              "16th Amendment",
              "17th Amendment",
              "18th Amendment",
              "19th Amendment"
            ],
            "correctIndex": 1,
            "hint": "Previously, Senators were chosen by state legislatures, a process criticized for corporate corruption.",
            "explanation": "The 17th Amendment shifted senatorial election directly to voters, increasing democracy and reducing machine influence."
          },
          {
            "id": "q7.1.3",
            "unitId": 7,
            "text": "The 19th Amendment, ratified in 1920, was the culmination of decades of campaigning for which reform?",
            "options": [
              "The abolition of child labor.",
              "Women's suffrage (the right to vote).",
              "The direct election of the President.",
              "The legal protection of labor unions."
            ],
            "correctIndex": 1,
            "hint": "This movement held the Seneca Falls Convention in 1848.",
            "explanation": "The 19th Amendment prohibited voting discrimination based on sex, granting American women the right to vote."
          },
          {
            "id": "q7.1.4",
            "unitId": 7,
            "text": "How did President Theodore Roosevelt respond to Upton Sinclair's book The Jungle?",
            "options": [
              "He banned the book and jailed Sinclair for treason.",
              "He sent federal inspectors to Chicago and urged Congress to pass the Meat Inspection Act.",
              "He ignored the book, calling it socialist propaganda.",
              "He closed down all meat production facilities in the Midwest."
            ],
            "correctIndex": 1,
            "hint": "Roosevelt was a Progressive President who favored federal consumer protections.",
            "explanation": "Roosevelt verified Sinclair's findings and backed the Meat Inspection Act and the Pure Food and Drug Act of 1906."
          },
          {
            "id": "q7.1.5",
            "unitId": 7,
            "text": "What was the primary goal of the settlement house movement, led by reformers like Jane Addams?",
            "options": [
              "To build corporate office buildings in urban areas.",
              "To assist poor and immigrant families in adapting to industrial cities.",
              "To establish rural boarding schools for Native children.",
              "To organize national protests for bimetallism."
            ],
            "correctIndex": 1,
            "hint": "Jane Addams founded Hull House in Chicago.",
            "explanation": "Settlement houses provided community centers in poor neighborhoods, offering education, daycare, and health services to immigrant residents."
          }
        ]
      },
      {
        "id": "7.2",
        "title": "The Great Depression, Franklin Roosevelt's New Deal, and the Welfare State",
        "description": "Analyze the causes of the 1929 stock market crash, and the relief, recovery, and reform programs of the New Deal.",
        "youtubeId": "TpfyY5LiWCw",
        "article": "# The New Deal and the Welfare State\n\nFollowing the **1929 Stock Market Crash**, the United States plunged into the **Great Depression**, the worst economic crisis in its history. In 1932, **Franklin D. Roosevelt (FDR)** was elected, launching the **New Deal** to reshape the economy.\n\n## The Three R's of the New Deal\nFDR's programs were structured around **Relief, Recovery, and Reform**:\n1. **Relief**: Direct aid to unemployed citizens (e.g., **Civilian Conservation Corps (CCC)**, which hired young men for environmental projects).\n2. **Recovery**: Rebuilding sectors of the economy (e.g., **Agricultural Adjustment Act (AAA)** to raise crop prices, and the **Tennessee Valley Authority (TVA)** to build dams).\n3. **Reform**: Redesigning financial structures to prevent future depressions.\n\n## Key Reform Programs\n- **Social Security Act (1935)**: Established a federal safety net, providing old-age pensions, unemployment insurance, and aid to disabled citizens. This marked the birth of the modern **welfare state**.\n- **Federal Deposit Insurance Corporation (FDIC)**: Insured bank deposits, restoring public confidence in banking systems.\n- **Securities and Exchange Commission (SEC)**: Created to regulate stock markets and prevent speculative trading.\n\n## The Realignment of the Democratic Party\nThe New Deal created the **New Deal Coalition** (southern whites, northern urban workers, immigrants, and black voters), making the Democratic Party the nation's dominant party for decades. While the New Deal did not fully end the Depression (which occurred during WWII), it permanently expanded the role of the federal government in the economy.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Three Rs Diagram -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">The 3 R's of the New Deal</text>\n  \n  <g transform=\"translate(30, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" />\n    <text x=\"50\" y=\"25\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Relief</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Immediate Help / CCC</text>\n  </g>\n  \n  <g transform=\"translate(150, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(251,191,36,0.1)\" stroke=\"#fbbf24\" />\n    <text x=\"50\" y=\"25\" fill=\"#fbbf24\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Recovery</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Rebuild Economy / AAA</text>\n  </g>\n\n  <g transform=\"translate(270, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(34,197,94,0.1)\" stroke=\"#22c55e\" />\n    <text x=\"50\" y=\"25\" fill=\"#22c55e\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Reform</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Fix Finance / FDIC</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q7.2.1",
            "unitId": 7,
            "text": "The Social Security Act of 1935 was a landmark piece of New Deal legislation because it did which of the following?",
            "options": [
              "Abolished the private banking system entirely.",
              "Established a federal safety net including retirement pensions and unemployment insurance.",
              "Guaranteed every citizen a factory job in northern cities.",
              "Provided immediate financial funding to European allies."
            ],
            "correctIndex": 1,
            "hint": "This act marked the formal creation of the modern American welfare state.",
            "explanation": "Social Security introduced federal pensions for retired workers, unemployment assistance, and aid to dependent families, expanding the government's social role."
          },
          {
            "id": "q7.2.2",
            "unitId": 7,
            "text": "What was the primary purpose of the Federal Deposit Insurance Corporation (FDIC), created under the New Deal?",
            "options": [
              "To regulate the sale of stocks and bonds.",
              "To guarantee and insure bank deposits, restoring public confidence in banking.",
              "To provide loans to industrial factory owners.",
              "To distribute paper money directly to farmers."
            ],
            "correctIndex": 1,
            "hint": "Restoring confidence in banks was vital to stopping bank runs.",
            "explanation": "The FDIC insured individual bank deposits, ensuring depositors that their money was safe and reducing the risk of panics."
          },
          {
            "id": "q7.2.3",
            "unitId": 7,
            "text": "Which of the following describes the 'Reform' element of Franklin Roosevelt's New Deal programs?",
            "options": [
              "Distributing food directly to breadlines.",
              "Hiring young men to plant trees in national parks.",
              "Passing permanent laws to regulate stock markets and banking systems to prevent future crashes.",
              "Ending all federal taxation of agricultural lands."
            ],
            "correctIndex": 2,
            "hint": "Think of financial institutions like the SEC and FDIC.",
            "explanation": "Reform measures sought to alter financial and economic systems (such as banking and stock markets) to prevent another systemic economic collapse."
          },
          {
            "id": "q7.2.4",
            "unitId": 7,
            "text": "How did the New Deal affect the role of the federal government in the United States?",
            "options": [
              "It severely restricted federal authority in favor of states' rights.",
              "It permanently expanded federal regulation and responsibility for the national economy and welfare.",
              "It eliminated the presidency and created a legislative council.",
              "It returned the economy to a strict gold standard."
            ],
            "correctIndex": 1,
            "hint": "The federal government took on responsibility for citizens' economic security.",
            "explanation": "The New Deal fundamentally altered the relationship between citizens and the state, establishing the federal government as a regulatory and welfare authority."
          },
          {
            "id": "q7.2.5",
            "unitId": 7,
            "text": "What event in 1929 is widely considered the trigger for the onset of the Great Depression?",
            "options": [
              "The passage of the 19th Amendment.",
              "The Great Stock Market Crash (Black Tuesday).",
              "The sinking of the Lusitania.",
              "The election of Franklin D. Roosevelt."
            ],
            "correctIndex": 1,
            "hint": "This occurred in late October 1829, wiping out billions in speculative value.",
            "explanation": "The stock market crash on October 29, 1829 (Black Tuesday) signaled the end of 1920s prosperity, triggering bank failures and high unemployment."
          }
        ]
      },
      {
        "id": "7.3",
        "title": "World War II, Mobilization, and the Emerging Global Leadership",
        "description": "Examine US entry into WWII, home front mobilization, the internment of Japanese Americans, and the post-war global alignment.",
        "youtubeId": "Q78CO9Ngb8U",
        "article": "# World War II and the Emerging Global Leadership\n\nInitially maintaining neutrality, the United States was pulled into **World War II** following the Japanese attack on **Pearl Harbor** in 1941, launching a total mobilization of its economy that set it up as a global superpower.\n\n## Mobilization and the Home Front\nThe war ended the Great Depression through massive federal defense spending:\n- **Factory Mobilization**: Factories converted to produce tanks, planes, and ammunition.\n- **Rosie the Riveter**: Millions of women entered industrial jobs to replace men fighting abroad.\n- **The Great Migration**: Black Americans moved to northern and western cities to work in defense plants.\n\n## Civil Liberties Crises: Japanese Internment\nWartime fear and racial prejudice led to serious civil liberties violations. In 1942, FDR signed **Executive Order 9066**:\n- Forced the relocation of over **110,000** Japanese Americans (mostly US citizens) on the West Coast to interior internment camps.\n- **Korematsu v. United States (1944)**: The Supreme Court upheld the constitutionality of the internment, ruling that civil liberties could be restricted during wartime military necessity.\n\n## The End of the War and Global Supremacy\nThe US developed the atomic bomb through the secret **Manhattan Project**, using it in August 1945 on Hiroshima and Nagasaki to force Japan's surrender. Under the post-war settlement, the US abandoned its historic isolationism, helping establish the **United Nations** and emerging as a global superpower locked in conflict with the Soviet Union.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Post-War Geopolitics -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"30\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Post-WWII Global Superpowers</text>\n  \n  <g transform=\"translate(40, 50)\">\n    <rect x=\"0\" y=\"0\" width=\"140\" height=\"60\" rx=\"4\" fill=\"rgba(96,165,250,0.1)\" stroke=\"#60a5fa\" />\n    <text x=\"70\" y=\"25\" fill=\"#60a5fa\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">United States</text>\n    <text x=\"70\" y=\"45\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Capitalism / Democracy</text>\n  </g>\n  \n  <g transform=\"translate(220, 50)\">\n    <rect x=\"0\" y=\"0\" width=\"140\" height=\"60\" rx=\"4\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" />\n    <text x=\"70\" y=\"25\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Soviet Union</text>\n    <text x=\"70\" y=\"45\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Communism / Dictatorship</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q7.3.1",
            "unitId": 7,
            "text": "What event on December 7, 1941, prompted the United States to abandon neutrality and declare war on Japan?",
            "options": [
              "The sinking of the Lusitania.",
              "The Japanese attack on Pearl Harbor.",
              "The invasion of Poland by Germany.",
              "The interception of the Zimmermann Telegram."
            ],
            "correctIndex": 1,
            "hint": "This surprise naval attack took place in Hawaii.",
            "explanation": "The devastating attack on Pearl Harbor united the American public in support of joining World War II on the side of the Allies."
          },
          {
            "id": "q7.3.2",
            "unitId": 7,
            "text": "FDR's Executive Order 9066 resulted in which of the following actions during World War II?",
            "options": [
              "The integration of the US military forces.",
              "The forced internment of over 110,000 Japanese Americans in interior camps.",
              "The immediate deportation of all German immigrants.",
              "The nationalization of all private automobile factories."
            ],
            "correctIndex": 1,
            "hint": "This order was issued on the West Coast due to wartime panic and racism.",
            "explanation": "Executive Order 9066 authorized the military to designate exclusion zones, forcing Japanese Americans into camps without trial or due process."
          },
          {
            "id": "q7.3.3",
            "unitId": 7,
            "text": "In Korematsu v. United States (1944), the Supreme Court ruled that Japanese internment was legal based on what justification?",
            "options": [
              "That Japanese Americans had renounced their citizenship.",
              "That military necessity during wartime justified the restriction of civil rights.",
              "That the Constitution did not apply to citizens of Japanese ancestry.",
              "That the camps were comfortable housing centers."
            ],
            "correctIndex": 1,
            "hint": "The Court balanced civil liberties against national security concerns.",
            "explanation": "The Court ruled 6-3 that the protection against espionage outweighed Korematsu's individual rights, upholding the wartime exclusion order."
          },
          {
            "id": "q7.3.4",
            "unitId": 7,
            "text": "What was the secret US project that developed the atomic bomb, which was used on Hiroshima and Nagasaki in August 1945?",
            "options": [
              "The Marshall Plan",
              "The Manhattan Project",
              "The Apollo Program",
              "The Brooklyn Project"
            ],
            "correctIndex": 1,
            "hint": "This scientific project was led by J. Robert Oppenheimer.",
            "explanation": "The Manhattan Project was a massive research and development program that produced the first nuclear weapons, ending the war in the Pacific."
          },
          {
            "id": "q7.3.5",
            "unitId": 7,
            "text": "Which global organization was established at the end of World War II to replace the League of Nations and foster international cooperation?",
            "options": [
              "The World Trade Organization",
              "The United Nations",
              "NATO",
              "The Warsaw Pact"
            ],
            "correctIndex": 1,
            "hint": "The US actively joined this organization in 1945, unlike its rejection of the League of Nations.",
            "explanation": "The United Nations was created in San Francisco in 1945 to maintain international peace and prevent future global conflicts."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Period 8: 1945–1980",
    "masteryWeight": "15%",
    "topics": [
      {
        "id": "8.1",
        "title": "The Cold War, Truman Doctrine, containment, and the Red Scare",
        "description": "Examine the origins of the Cold War, the policy of containment, proxy conflicts (Korea, Vietnam), and the domestic Red Scare.",
        "youtubeId": "8sS75b_oWGA",
        "article": "# The Cold War and Containment\n\nFollowing World War II, the United States entered the **Cold War**, a geopolitical struggle against the Soviet Union for global influence, which shaped American foreign policy and domestic life for decades.\n\n## Containment and the Truman Doctrine\nTo counter Soviet expansion, the US adopted the policy of **containment** (devised by diplomat George Kennan), which sought to stop the spread of communism without direct warfare:\n- **Truman Doctrine (1947)**: Pledged US military and economic aid to any nation resisting communist subjugation, first applied in Greece and Turkey.\n- **Marshall Plan (1948)**: A massive financial aid package ($13 billion) to rebuild Western Europe's economy, making those nations less vulnerable to communist appeal.\n- **NATO (1949)**: A mutual defense alliance between the US, Canada, and Western European nations, marking the end of American isolationism.\n\n## Proxy Wars and Sectional Conflict\nContainment led the US into military conflicts in Asia:\n1. **Korean War (1950–1953)**: Following North Korea's invasion of the South, the US led a United Nations coalition to contain communism, ending in a stalemate at the **38th Parallel**.\n2. **Vietnam War (1954–1975)**: The US intervened to support South Vietnam against communist North Vietnam, escalating into a massive war that divided the American public before ending in US withdrawal.\n\n## The Second Red Scare\nFears of communist subversion at home sparked a new Red Scare:\n- **McCarthyism**: Senator Joseph McCarthy launched reckless, unsubstantiated investigations of suspected communists in the federal government.\n- **HUAC**: The House Un-American Activities Committee blacklisted Hollywood writers and investigated suspected citizens.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Containment Pillars -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Three Pillars of containment</text>\n  \n  <g transform=\"translate(30, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" />\n    <text x=\"50\" y=\"25\" fill=\"#ef4444\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Truman Doctrine</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Military Aid / Greece</text>\n  </g>\n  \n  <g transform=\"translate(150, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(34,197,94,0.1)\" stroke=\"#22c55e\" />\n    <text x=\"50\" y=\"25\" fill=\"#22c55e\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Marshall Plan</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Economic Rebuild</text>\n  </g>\n\n  <g transform=\"translate(270, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(96,165,250,0.1)\" stroke=\"#60a5fa\" />\n    <text x=\"50\" y=\"25\" fill=\"#60a5fa\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">NATO Alliance</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Collective Defense</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q8.1.1",
            "unitId": 8,
            "text": "The foreign policy doctrine that pledged US military and economic aid to any nation resisting communist takeover was known as what?",
            "options": [
              "The Marshall Plan",
              "The Truman Doctrine",
              "The Monroe Doctrine",
              "The Eisenhower Doctrine"
            ],
            "correctIndex": 1,
            "hint": "This was announced in 1947, specifically to help Greece and Turkey.",
            "explanation": "The Truman Doctrine established the principle that the US would provide assistance to free peoples resisting subjugation by armed minorities or outside pressures."
          },
          {
            "id": "q8.1.2",
            "unitId": 8,
            "text": "George Kennan's containment policy argued that the United States should perform which action?",
            "options": [
              "Invade the Soviet Union to overthrow its government.",
              "Block any expansion of Soviet and communist influence beyond its current borders.",
              "Allow communism to spread to Asia but protect Europe.",
              "Withdraw entirely from international alliances and return to isolationism."
            ],
            "correctIndex": 1,
            "hint": "He believed that communism would eventually collapse if it was kept from expanding.",
            "explanation": "Containment aimed to use political, economic, and military pressure to contain Soviet expansion, preventing new communist states from emerging."
          },
          {
            "id": "q8.1.3",
            "unitId": 8,
            "text": "What was the primary goal of the Marshall Plan, enacted in 1948?",
            "options": [
              "To build nuclear missile silos in Germany.",
              "To rebuild the war-torn economies of Western Europe to keep them stable and democratic.",
              "To arrest suspected communists in Hollywood.",
              "To provide military weapons to Nationalist forces in China."
            ],
            "correctIndex": 1,
            "hint": "This plan involved billions of dollars of economic reconstruction grants.",
            "explanation": "By restoring economic prosperity to Western Europe, the Marshall Plan eliminated the poverty and chaos that communists exploited to gain popularity."
          },
          {
            "id": "q8.1.4",
            "unitId": 8,
            "text": "The Korean War (1950–1953) ended with which territorial boundary between North and South?",
            "options": [
              "Complete North Korean victory over the entire peninsula.",
              "A stalemated border near the 38th Parallel, close to the pre-war boundary.",
              "The annexation of North Korea by China.",
              "A unified democratic nation with its capital at Seoul."
            ],
            "correctIndex": 1,
            "hint": "This boundary remains one of the most heavily fortified zones in the world today.",
            "explanation": "After three years of fighting, an armistice was signed in 1953, leaving the peninsula divided near the 38th Parallel at the Demilitarized Zone (DMZ)."
          },
          {
            "id": "q8.1.5",
            "unitId": 8,
            "text": "Which Gilded-like domestic crisis of the 1950s involved reckless, unsubstantiated allegations of communism in the federal government?",
            "options": [
              "The Watergate Scandal",
              "McCarthyism",
              "The Iran-Contra Affair",
              "The Palmer Raids"
            ],
            "correctIndex": 1,
            "hint": "This was led by a Republican senator from Wisconsin.",
            "explanation": "McCarthyism refers to Senator Joseph McCarthy's hunt for communists in the State Department and military, creating a climate of fear and blacklisting."
          }
        ]
      },
      {
        "id": "8.2",
        "title": "The Civil Rights Movement, landmark decisions, and Social Reform",
        "description": "Analyze the campaigns of the Civil Rights Movement, the impact of Brown v. Board, and Lyndon Johnson's Great Society.",
        "youtubeId": "8sS75b_oWGA",
        "article": "# The Civil Rights Movement and Social Reform\n\nThe 1950s and 1960s saw a massive grassroots **Civil Rights Movement** led by African Americans who successfully dismantled Jim Crow segregation through legal challenges and nonviolent direct action.\n\n## Legal Victories: Brown v. Board of Education (1954)\n- **Ruling**: Chief Justice Earl Warren declared that \"separate educational facilities are inherently unequal,\" overturning the 1896 *Plessy v. Ferguson* doctrine of \"separate but equal.\"\n- **Resistance**: Southern states resisted, prompting federal intervention (such as Eisenhower sending paratroopers to escort the **Little Rock Nine** in 1857).\n\n## Grassroots Activism and Legislative Action\nLed by figures like **Dr. Martin Luther King Jr.**, activists used nonviolent civil disobedience (sit-ins, boycotts, marches) to demand change:\n- **Civil Rights Act of 1964**: Banned discrimination in public accommodations and employment based on race, sex, religion, or national origin.\n- **Voting Rights Act of 1965**: Banned literacy tests and sent federal registrars to the South, securing voting rights for millions of black Americans.\n\n## Lyndon Johnson's Great Society\nPresident Lyndon B. Johnson launched the **Great Society**, the most ambitious domestic reform program since the New Deal:\n- **Medicare**: Federal health insurance for elderly citizens.\n- **Medicaid**: Federal health assistance for low-income families.\n- **Head Start**: Early childhood education for low-income families.\n\n<div class=\"flex justify-center my-8\">\n<table class=\"w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25\">\n  <thead>\n    <tr class=\"bg-white/5 text-white font-mono uppercase\">\n      <th class=\"p-2 border border-white/10\">Law / Event</th>\n      <th class=\"p-2 border border-white/10\">Core Achievement</th>\n      <th class=\"p-2 border border-white/10\">Key Leaders / Context</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-yellow-400\">Brown v. Board (1954)</td>\n      <td class=\"p-2 border border-white/10\">Outlawed school segregation</td>\n      <td class=\"p-2 border border-white/10\">Thurgood Marshall (NAACP)</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-cyan-400\">Civil Rights Act of 1964</td>\n      <td class=\"p-2 border border-white/10\">Banned public segregation</td>\n      <td class=\"p-2 border border-white/10\">MLK Jr. / President Johnson</td>\n    </tr>\n    <tr>\n      <td class=\"p-2 border border-white/10 font-bold text-indigo-400\">Voting Rights Act of 1965</td>\n      <td class=\"p-2 border border-white/10\">Outlawed literacy tests</td>\n      <td class=\"p-2 border border-white/10\">Selma March / Voting access</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n",
        "questions": [
          {
            "id": "q8.2.1",
            "unitId": 8,
            "text": "The landmark Supreme Court decision in Brown v. Board of Education (1954) declared which of the following?",
            "options": [
              "Slavery was constitutional in the northern states.",
              "Racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson.",
              "Voter registration literacy tests were immediately legal.",
              "The federal government had no power to regulate interstate school buses."
            ],
            "correctIndex": 1,
            "hint": "This case argued that segregation created feelings of inferiority in black children.",
            "explanation": "The Warren Court ruled unanimously that separate educational facilities violated the Equal Protection Clause of the 14th Amendment."
          },
          {
            "id": "q8.2.2",
            "unitId": 8,
            "text": "All of the following were major achievements of Lyndon B. Johnson's Great Society program EXCEPT:",
            "options": [
              "Medicare (health insurance for the elderly).",
              "Medicaid (health assistance for low-income families).",
              "The abolition of the federal income tax.",
              "Head Start (early education programs)."
            ],
            "correctIndex": 2,
            "hint": "The Great Society sought to expand the social welfare system, not dismantle it.",
            "explanation": "The Great Society expanded federal social programs, adding to New Deal systems, and relied on progressive income taxation."
          },
          {
            "id": "q8.2.3",
            "unitId": 8,
            "text": "What was a primary method of protest used by the Civil Rights Movement to target segregated lunch counters in the South?",
            "options": [
              "Armed rebellions and militia occupation.",
              "Sit-ins, where black students sat quietly at white-only counters.",
              "Writing pamphlets arguing for bimetallism.",
              "Filing lawsuits to repeal the 14th Amendment."
            ],
            "correctIndex": 1,
            "hint": "This was famously launched by college students in Greensboro, North Carolina, in 1960.",
            "explanation": "Sit-ins were highly effective nonviolent direct action tactics that drew national media attention to segregation."
          },
          {
            "id": "q8.2.4",
            "unitId": 8,
            "text": "The Civil Rights Act of 1964 accomplished which landmark reform?",
            "options": [
              "It banned literacy tests at voting stations.",
              "It outlawed segregation and discrimination in public facilities and employment.",
              "It granted forty acres of land to all former sharecroppers.",
              "It desegregated the federal military branches."
            ],
            "correctIndex": 1,
            "hint": "This was a major bill signed by LBJ following the March on Washington.",
            "explanation": "The Civil Rights Act of 1964 dismantled the legal basis of Jim Crow by banning discrimination in hotels, restaurants, and workplaces."
          },
          {
            "id": "q8.2.5",
            "unitId": 8,
            "text": "Who served as the chief counsel for the NAACP in the Brown v. Board case, later becoming the first African American Supreme Court justice?",
            "options": [
              "Martin Luther King Jr.",
              "Malcolm X",
              "Thurgood Marshall",
              "Stokely Carmichael"
            ],
            "correctIndex": 2,
            "hint": "He won a series of cases dismantling Jim Crow school segregation.",
            "explanation": "Thurgood Marshall was the brilliant NAACP legal strategist who argued the Brown case and was later appointed to the Supreme Court by LBJ."
          }
        ]
      },
      {
        "id": "8.3",
        "title": "The Vietnam War, Anti-war protests, and the Watergate Crisis",
        "description": "Examine the escalation of the Vietnam War, the rise of the anti-war movement, and the Watergate scandal leading to Nixon's resignation.",
        "youtubeId": "8sS75b_oWGA",
        "article": "# Vietnam and the Watergate Crisis\n\nThe late 1960s and 1970s saw a massive decline in public trust in the federal government, driven by a controversial war in Southeast Asia and political corruption at the highest level.\n\n## The Vietnam War Escalation\nFollowing the **Gulf of Tonkin Resolution (1964)**, which gave President Johnson broad authority to defend US forces in Vietnam, the US military escalated its presence to over **500,000** troops.\n- **Tet Offensive (1968)**: A massive surprise attack by North Vietnamese forces. While a military victory for the US, it shocked the American public, exposing that the government's claims that the US was winning were false (the **credibility gap**).\n- **Anti-War Movement**: Student-led protests swept college campuses, intensifying after the expansion of the war into Cambodia, culminating in the **Kent State Shootings (1970)**.\n\n## The Watergate Scandal and Nixon's Resignation\nIn 1972, operatives tied to President Richard Nixon's re-election campaign broke into the Democratic National Committee headquarters at the **Watergate** complex.\n- **The Cover-up**: Nixon actively attempted to block the FBI investigation, tape-recording conversations in the Oval Office.\n- **Resignation (1974)**: Faced with certain impeachment by the House for obstruction of justice, Nixon resigned in August 1974—the only US president to do so. This scandal permanently damaged public faith in political institutions.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Loss of Trust Timeline -->\n  <line x1=\"20\" y1=\"80\" x2=\"380\" y2=\"80\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  \n  <g transform=\"translate(80, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1968</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Tet Offensive</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Credibility Gap opens</text>\n  </g>\n  \n  <g transform=\"translate(200, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#fbbf24\" />\n    <text x=\"0\" y=\"65\" fill=\"#fbbf24\" font-size=\"8\" text-anchor=\"middle\">1970</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Kent State</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Student war protests</text>\n  </g>\n\n  <g transform=\"translate(320, 0)\">\n    <circle cx=\"0\" cy=\"80\" r=\"4\" fill=\"#ef4444\" />\n    <text x=\"0\" y=\"65\" fill=\"#ef4444\" font-size=\"8\" text-anchor=\"middle\">1974</text>\n    <text x=\"0\" y=\"100\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\">Watergate Resign</text>\n    <text x=\"0\" y=\"110\" fill=\"#a1a1aa\" font-size=\"7\" text-anchor=\"middle\">Nixon resigns in scandal</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q8.3.1",
            "unitId": 8,
            "text": "What was the significance of the 1968 Tet Offensive in the Vietnam War?",
            "options": [
              "It led to an immediate peace treaty uniting Vietnam under a democracy.",
              "It was a major military victory for North Vietnam that destroyed the US military.",
              "It shattered American public confidence in government claims that the US was winning the war.",
              "It marked the first use of nuclear weapons in Southeast Asia."
            ],
            "correctIndex": 2,
            "hint": "This surprise holiday offensive showed the enemy was far from defeated.",
            "explanation": "The Tet Offensive exposed a 'credibility gap' between what the government reported and the reality of a strong, determined enemy."
          },
          {
            "id": "q8.3.2",
            "unitId": 8,
            "text": "The Gulf of Tonkin Resolution in 1964 was historically significant because it did which of the following?",
            "options": [
              "Abolished the draft for all military services.",
              "Gave President Johnson broad executive authority to escalate military involvement in Vietnam without a formal declaration of war.",
              "Formally declared war on China and the Soviet Union.",
              "Ended all US military aid to South Vietnam."
            ],
            "correctIndex": 1,
            "hint": "This resolution was passed following reports of clashes between US destroyers and North Vietnamese boats.",
            "explanation": "The resolution allowed Johnson to send hundreds of thousands of troops to Vietnam, expanding executive warmaking authority."
          },
          {
            "id": "q8.3.3",
            "unitId": 8,
            "text": "What was the primary cause of President Richard Nixon's resignation in August 1974?",
            "options": [
              "His choice to sign the Strategic Arms Limitation Treaty.",
              "His direct involvement in covering up the Watergate break-in.",
              "His defeat in the 1972 election to George McGovern.",
              "His decision to withdraw US forces from Vietnam."
            ],
            "correctIndex": 1,
            "hint": "Nixon resigned to avoid face-to-face impeachment trial in the Senate.",
            "explanation": "Nixon resigned after released recordings proved he had ordered the CIA to block the FBI's investigation into the Watergate break-in (obstruction of justice)."
          },
          {
            "id": "q8.3.4",
            "unitId": 8,
            "text": "The Kent State Shootings of 1970 occurred during protests against which military action?",
            "options": [
              "The landing of troops in Normandy.",
              "The expansion of the Vietnam War into Cambodia.",
              "The launch of the Berlin Airlift.",
              "The blockade of Cuba."
            ],
            "correctIndex": 1,
            "hint": "Nixon had promised to end the war, but authorized an invasion of a neighboring nation to destroy supply lines.",
            "explanation": "Nixon's announcement of the Cambodian Campaign sparked furious protests on college campuses, culminating in National Guard troops killing four students at Kent State."
          },
          {
            "id": "q8.3.5",
            "unitId": 8,
            "text": "Which of the following describes the long-term impact of both the Vietnam War and the Watergate scandal on American society?",
            "options": [
              "A massive resurgence in national unity and patriotism.",
              "A permanent decline in public trust and confidence in the federal government.",
              "The complete dissolution of the two-party political system.",
              "An immediate return to isolationism."
            ],
            "correctIndex": 1,
            "hint": "Both events left citizens highly skeptical of political leaders.",
            "explanation": "The combination of executive deceit in Vietnam and corruption in Watergate created widespread skepticism and cynicism toward political authority."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Period 9: 1980–Present",
    "masteryWeight": "5%",
    "topics": [
      {
        "id": "9.1",
        "title": "The Rise of the New Conservatism, Reaganomics, and the end of the Cold War",
        "description": "Examine the conservative resurgence of the 1980s, Ronald Reagan's economic policies, and the collapse of the Soviet Union.",
        "youtubeId": "8sS75b_oWGA",
        "article": "# The Conservative Resurgence and the End of the Cold War\n\nThe late 20th century saw a major political shift with the election of **Ronald Reagan** in 1980, launching the **New Conservative** movement and presiding over the final stages of the Cold War.\n\n## The Rise of New Conservatism\nConservatives built a powerful coalition based on:\n- **Economic deregulation** and lower taxes.\n- **Moral Majority**: Evangelical Christian groups advocating for traditional family values and opposing abortion and gay rights.\n- **Reaganomics (Supply-Side Economics)**: The theory that tax cuts for corporations and the wealthy would stimulate investment, creating jobs and prosperity that would \"trickle down\" to the rest of the economy.\n\n## Foreign Policy and the End of the Cold War\nReagan rejected containment in favor of active rollback:\n- **Military Expansion**: Massive defense spending (like the \"Star Wars\" Strategic Defense Initiative) to outspend the Soviet economy.\n- **Gorbachev's Reforms**: Soviet leader Mikhail Gorbachev introduced **glasnost** (openness) and **perestroika** (economic restructuring) to reform the struggling Soviet system.\n- **Collapse (1991)**: The Berlin Wall fell in 1989, and the Soviet Union dissolved in December 1991, ending the Cold War.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Reaganomics Flow -->\n  <rect x=\"10\" y=\"10\" width=\"380\" height=\"130\" rx=\"8\" fill=\"rgba(255,255,255,0.02)\" />\n  <text x=\"200\" y=\"25\" fill=\"#ffffff\" font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\">Supply-Side Economics (Reaganomics)</text>\n  \n  <g transform=\"translate(30, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(32,201,151,0.1)\" stroke=\"#20c997\" />\n    <text x=\"50\" y=\"25\" fill=\"#20c997\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Tax Cuts</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">For Corporations</text>\n  </g>\n\n  <g transform=\"translate(150, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(129,140,248,0.1)\" stroke=\"#818cf8\" />\n    <text x=\"50\" y=\"25\" fill=\"#818cf8\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Investment</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Business Growth</text>\n  </g>\n  \n  <g transform=\"translate(270, 45)\">\n    <rect x=\"0\" y=\"0\" width=\"100\" height=\"60\" rx=\"4\" fill=\"rgba(34,197,94,0.1)\" stroke=\"#22c55e\" />\n    <text x=\"50\" y=\"25\" fill=\"#22c55e\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Trickle Down</text>\n    <text x=\"50\" y=\"40\" fill=\"#ffffff\" font-size=\"7\" text-anchor=\"middle\">Jobs for workers</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q9.1.1",
            "unitId": 9,
            "text": "The economic theory of Supply-Side Economics (Reaganomics) argued that the government could stimulate growth through which action?",
            "options": [
              "Significantly increasing tax rates on the wealthy.",
              "Cutting taxes for corporations and wealthy investors to encourage business investment.",
              "Nationalizing the major automobile and railroad corporations.",
              "Abolishing the Federal Reserve System."
            ],
            "correctIndex": 1,
            "hint": "This is also commonly referred to as 'trickle-down' economics.",
            "explanation": "Supply-side economics asserts that lower taxes and deregulation increase production (supply), leading to job creation and broad economic growth."
          },
          {
            "id": "q9.1.2",
            "unitId": 9,
            "text": "Which Soviet leader introduced the policies of glasnost (openness) and perestroika (restructuring) in the 1980s?",
            "options": [
              "Joseph Stalin",
              "Nikita Khrushchev",
              "Mikhail Gorbachev",
              "Vladimir Putin"
            ],
            "correctIndex": 2,
            "hint": "He was the last leader of the Soviet Union before its collapse.",
            "explanation": "Gorbachev's reforms aimed to modernize the Soviet system, but instead unleashed democratic movements that led to its dissolution."
          },
          {
            "id": "q9.1.3",
            "unitId": 9,
            "text": "What major event in November 1989 symbolized the beginning of the collapse of communist regimes in Eastern Europe?",
            "options": [
              "The Cuban Missile Crisis",
              "The falling of the Berlin Wall",
              "The launch of Sputnik",
              "The signing of the NATO alliance"
            ],
            "correctIndex": 1,
            "hint": "This barrier had divided a major German city since 1961.",
            "explanation": "The destruction of the Berlin Wall by East and West German citizens marked the symbolic end of the Iron Curtain and Soviet domination of Eastern Europe."
          },
          {
            "id": "q9.1.4",
            "unitId": 9,
            "text": "Which of the following was a primary political component of the Gilded-like New Conservatism of the 1980s?",
            "options": [
              "Expansion of environmental regulations.",
              "Active support from evangelical Christian groups advocating for traditional social values.",
              "An alliance with northern labor unions.",
              "A demand to return to the Articles of Confederation."
            ],
            "correctIndex": 1,
            "hint": "Groups like the Moral Majority played a critical role in electing Ronald Reagan.",
            "explanation": "New Conservatism combined free-market economics with social conservatism, drawing heavy support from religious organizations."
          },
          {
            "id": "q9.1.5",
            "unitId": 9,
            "text": "What was the final status of the Soviet Union in December 1991?",
            "options": [
              "It launched a nuclear strike on Western Europe.",
              "It dissolved completely into 15 independent republics, ending the Cold War.",
              "It signed a treaty to annex China.",
              "It formed a new military alliance with the United States."
            ],
            "correctIndex": 1,
            "hint": "This marked the formal end of the Cold War geopolitical structure.",
            "explanation": "Internal economic crises and nationalist movements led to the official dissolution of the USSR, leaving the US as the world's single superpower."
          }
        ]
      },
      {
        "id": "9.2",
        "title": "Globalization, The digital Age, and Economic Transformations",
        "description": "Examine the rise of the internet, the transformation of the US labor market, and the impacts of globalization.",
        "youtubeId": "8sS75b_oWGA",
        "article": "# Globalization and the Digital Age\n\nThe turn of the 21st century witnessed the rise of the **Digital Age**, fueled by the internet and personal computers, alongside the growth of a highly interconnected global economy.\n\n## The Digital Revolution\nThe development of the personal computer and the **World Wide Web (Internet)** revolutionized daily life:\n- **Information Access**: Enabled instant global communication and information retrieval.\n- **Service Economy**: Shifted the US labor market away from manufacturing toward service and technology-driven industries.\n- **E-commerce**: Transformed retail, giving rise to giant technology corporations.\n\n## Globalization and its Discontents\nThe US integrated deeper into the global economy through trade deals:\n- **NAFTA (North American Free Trade Agreement, 1994)**: Eliminated tariffs between the US, Canada, and Mexico.\n- **Outsourcing**: Many manufacturing jobs were relocated to developing nations with lower labor costs, causing industrial decline in the Midwestern **Rust Belt**.\n- **Immigration**: Immigration from Latin America and Asia surged, reshaping demographics and reviving national debates over borders and national identity.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Globalization map sketch -->\n  <circle cx=\"200\" cy=\"75\" r=\"30\" fill=\"none\" stroke=\"#a1a1aa\" stroke-width=\"1.5\" />\n  <circle cx=\"200\" cy=\"75\" r=\"50\" fill=\"none\" stroke=\"#a1a1aa\" stroke-width=\"1\" stroke-dasharray=\"2,2\" />\n  <text x=\"200\" y=\"78\" fill=\"#ffffff\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Global Market</text>\n  \n  <g transform=\"translate(50, 40)\">\n    <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"rgba(96,165,250,0.1)\" stroke=\"#60a5fa\" />\n    <text x=\"20\" y=\"48\" fill=\"#60a5fa\" font-size=\"7\" text-anchor=\"middle\">USA (Tech)</text>\n  </g>\n\n  <g transform=\"translate(310, 80)\">\n    <circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"rgba(34,197,94,0.1)\" stroke=\"#22c55e\" />\n    <text x=\"20\" y=\"48\" fill=\"#22c55e\" font-size=\"7\" text-anchor=\"middle\">Asia (Mfg)</text>\n  </g>\n\n  <line x1=\"85\" y1=\"60\" x2=\"170\" y2=\"75\" stroke=\"#60a5fa\" stroke-width=\"1\" marker-end=\"url(#arrow-phys)\" />\n  <line x1=\"310\" y1=\"90\" x2=\"230\" y2=\"75\" stroke=\"#22c55e\" stroke-width=\"1\" marker-end=\"url(#arrow-phys)\" />\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q9.2.1",
            "unitId": 9,
            "text": "The North American Free Trade Agreement (NAFTA), signed in 1994, eliminated trade barriers between which nations?",
            "options": [
              "The United States, Great Britain, and France.",
              "The United States, Canada, and Mexico.",
              "The United States, Brazil, and Argentina.",
              "The United States, Japan, and China."
            ],
            "correctIndex": 1,
            "hint": "This agreement targeted free trade across North America.",
            "explanation": "NAFTA created a trilateral trade bloc in North America by eliminating tariffs on goods shipped between the US, Canada, and Mexico."
          },
          {
            "id": "q9.2.2",
            "unitId": 9,
            "text": "What was a primary labor market shift in the United States during the Digital Age?",
            "options": [
              "A return to agricultural homestead farming.",
              "A decline in manufacturing jobs and a rise in service and technology sector employment.",
              "The complete ban of female workers from corporate offices.",
              "The elimination of high-technology sector jobs."
            ],
            "correctIndex": 1,
            "hint": "Consider the impact of computerization and automation.",
            "explanation": "The rise of personal computers and the internet shifted the US economy toward information and service industries, while manufacturing declined."
          },
          {
            "id": "q9.2.3",
            "unitId": 9,
            "text": "The relocation of manufacturing jobs to developing nations with cheaper labor is commonly known as what?",
            "options": [
              "Mercantilism",
              "Outsourcing",
              "Nativism",
              "Containment"
            ],
            "correctIndex": 1,
            "hint": "This practice has contributed to the decline of the Rust Belt.",
            "explanation": "Outsourcing allows corporations to reduce costs by shifting manufacturing operations to countries with lower labor regulations and wages."
          },
          {
            "id": "q9.2.4",
            "unitId": 9,
            "text": "Which of the following describes the impact of the internet on commerce in the late 19th and early 20th comparison?",
            "options": [
              "It eliminated international trade entirely.",
              "It enabled instant communications, global transactions, and the rise of e-commerce.",
              "It forced all banking systems to return to the silver standard.",
              "It had no noticeable impact on retail sales."
            ],
            "correctIndex": 1,
            "hint": "Think of websites like Amazon and online financial trading.",
            "explanation": "The World Wide Web connected global buyers and sellers, enabling e-commerce and shifting retail from physical stores to digital spaces."
          },
          {
            "id": "q9.2.5",
            "unitId": 9,
            "text": "The Rust Belt refers to what region of the United States that suffered heavy industrial decline due to outsourcing?",
            "options": [
              "The Pacific Northwest",
              "The Midwest and Great Lakes region",
              "The Florida Peninsula",
              "The Rocky Mountains"
            ],
            "correctIndex": 1,
            "hint": "This region was previously known for steel mills and car factories.",
            "explanation": "The Rust Belt describes the industrial Midwest (e.g., Ohio, Michigan, Pennsylvania) which experienced economic decay as manufacturing factories closed."
          }
        ]
      },
      {
        "id": "9.3",
        "title": "The War on Terror, Domestic Security, and Sectional Politics of the 21st Century",
        "description": "Examine the impacts of the September 11 attacks, the War on Terror, debates over civil liberties, and growing political polarization.",
        "youtubeId": "8sS75b_oWGA",
        "article": "# The 21st Century and the War on Terror\n\nThe 21st century began with a major national security crisis that reshaped American foreign policy and triggered debates over civil liberties and political polarization at home.\n\n## The September 11 Attacks and the War on Terror\nOn **September 11, 2001**, Al-Qaeda terrorists hijacked commercial planes and crashed them into the World Trade Center and the Pentagon:\n- **Department of Homeland Security**: A new federal department created to coordinate domestic security.\n- **The Patriot Act (2001)**: Expanded the government's authority to conduct surveillance and wiretaps, sparking intense debates over the balance between national security and constitutional civil liberties.\n- **Foreign Interventions**: The US launched the **War on Terror**, leading to invasions of **Afghanistan (2001)** to target Al-Qaeda, and **Iraq (2003)** to depose Saddam Hussein over suspected weapons of mass destruction.\n\n## Sectionalism and Political Polarization\nThe 21st century has seen growing polarization in American politics:\n- **Red vs. Blue States**: Increasingly deep division between conservative rural areas and liberal urban centers.\n- **The Great Recession (2008)**: A major housing market crash that led to bank bailouts, rising economic inequality, and the election of **Barack Obama** (the first African American president).\n- **Climate Change and Energy**: Ongoing debates over environmental regulations and transition to green energy vs. traditional oil and coal production.\n\n<div class=\"flex justify-center my-8\">\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full rounded-xl bg-black/40 border border-white/10 p-4\">\n  <!-- Security vs Liberty scale -->\n  <line x1=\"80\" y1=\"110\" x2=\"320\" y2=\"110\" stroke=\"#a1a1aa\" stroke-width=\"2\" />\n  <polygon points=\"200,70 190,110 210,110\" fill=\"#a1a1aa\" />\n  \n  <!-- Left Side: Security -->\n  <g transform=\"translate(80, 80)\">\n    <rect x=\"-40\" y=\"-30\" width=\"80\" height=\"30\" rx=\"4\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" />\n    <text x=\"0\" y=\"-12\" fill=\"#ef4444\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Security (Patriot Act)</text>\n  </g>\n  \n  <!-- Right Side: Liberty -->\n  <g transform=\"translate(320, 80)\">\n    <rect x=\"-40\" y=\"-30\" width=\"80\" height=\"30\" rx=\"4\" fill=\"rgba(34,197,94,0.1)\" stroke=\"#22c55e\" />\n    <text x=\"0\" y=\"-12\" fill=\"#22c55e\" font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">Liberty (Privacy)</text>\n  </g>\n</svg>\n</div>\n",
        "questions": [
          {
            "id": "q9.3.1",
            "unitId": 9,
            "text": "The Patriot Act of 2001 sparked national debate primarily over the balance between which two concepts?",
            "options": [
              "Westward expansion and environmental protection.",
              "National security and individual civil liberties (privacy).",
              "State sovereignty and federal income tax.",
              "Free silver coinage and the gold standard."
            ],
            "correctIndex": 1,
            "hint": "This act expanded government wiretapping and surveillance capabilities.",
            "explanation": "The Patriot Act gave intelligence agencies broader powers to monitor communications, raising concerns over Fourth Amendment protections against search and seizure."
          },
          {
            "id": "q9.3.2",
            "unitId": 9,
            "text": "What was the primary foreign policy catalyst for the United States launching the War on Terror?",
            "options": [
              "The Persian Gulf War of 1991.",
              "The terrorist attacks on September 11, 2001.",
              "The signing of the NAFTA agreement.",
              "The collapse of the Soviet Union."
            ],
            "correctIndex": 1,
            "hint": "This involved the hijacking of four commercial airplanes.",
            "explanation": "The September 11 attacks by Al-Qaeda prompted President George W. Bush to declare a global War on Terror, beginning with the invasion of Afghanistan."
          },
          {
            "id": "q9.3.3",
            "unitId": 9,
            "text": "Which new cabinet-level department was created following the September 11 attacks to coordinate domestic security?",
            "options": [
              "The Department of Defense",
              "The Department of Homeland Security",
              "The Department of Veterans Affairs",
              "The Department of Justice"
            ],
            "correctIndex": 1,
            "hint": "This department consolidated 22 federal agencies to improve communications.",
            "explanation": "The Department of Homeland Security was created in 2002 to protect the territory of the US from terrorist attacks and respond to natural disasters."
          },
          {
            "id": "q9.3.4",
            "unitId": 9,
            "text": "The election of Barack Obama in 2008 was historically significant for which reason?",
            "options": [
              "He was the first third-party candidate to win the presidency.",
              "He was the first African American president of the United States.",
              "He immediately returned the US currency to the gold standard.",
              "He abolished the Department of Homeland Security."
            ],
            "correctIndex": 1,
            "hint": "He served two terms as the 44th President.",
            "explanation": "Obama's election in 2008 represented a major political milestone as the first black president in American history."
          },
          {
            "id": "q9.3.5",
            "unitId": 9,
            "text": "The housing market collapse of 2008 triggered which economic crisis?",
            "options": [
              "The Great Depression",
              "The Great Recession",
              "The Panic of 1893",
              "The Gilded Deflation"
            ],
            "correctIndex": 1,
            "hint": "This was the worst economic downturn since the 1930s, involving massive bank bailouts.",
            "explanation": "The subprime mortgage crash triggered a global financial crisis, rising unemployment, and a deep downturn known as the Great Recession."
          }
        ]
      }
    ]
  }
];
