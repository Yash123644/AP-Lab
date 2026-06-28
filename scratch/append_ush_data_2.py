# -*- coding: utf-8 -*-
import sys
sys.path.append("/Users/yashpatil/AP Lab/scratch")
from append_ush_data import data, OUTPUT_PATH

unit4 = {
    'id': 4,
    'title': 'Period 4: 1800–1848',
    'masteryWeight': '10%',
    'topics': [
        {
            'id': '4.1',
            'title': 'The Rise of Mass Democracy, Political Parties, and federal Power Debates',
            'description': 'Analyze the emergence of the Second Party System, Andrew Jackson\'s presidency, and debates over federal supremacy.',
            'youtubeId': 'zX8t9o9V9v0',
            'article': '''# The Rise of Mass Democracy and federal Power

Between 1800 and 1848, the United States saw a major expansion of democracy for white males, leading to the rise of mass political parties and constitutional crises over federal vs. state authority.

## The Second Party System
By the 1830s, property requirements for voting were eliminated for white men, ushering in the "Age of the Common Man" under **Andrew Jackson**. This created a new party system:
- **Democrats (Jackson)**: Represented small farmers, westerners, and urban workers. They favored limited federal government, local rule, and westward expansion.
- **Whigs (Clay)**: Represented northern merchants and reform-minded protestants. They favored a strong federal government and Henry Clay\'s **American System**, which advocated for a National Bank, protective tariffs, and federal funding for infrastructure (internal improvements).

## Federal Supremacy vs. States\' Rights
1. **The Nullification Crisis (1832)**: South Carolina declared the federal "Tariff of Abominations" null and void within its borders, invoking states\' rights. Jackson threatened military force (Force Bill) and negotiated a compromise tariff, asserting federal supremacy.
2. **Supreme Court (John Marshall)**: Under Chief Justice John Marshall, the Court consistently ruled to expand federal power over states:
   - *McCulloch v. Maryland (1819)*: Confirmed the constitutionality of the National Bank and established federal supremacy.
   - *Gibbons v. Ogden (1824)*: Confirmed federal control over interstate commerce.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- American System Diagram -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Clay's American System</text>
  
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(32,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="35" fill="#20c997" font-size="8" text-anchor="middle">1. Protective Tariffs</text>
  </g>
  
  <g transform="translate(150, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(129,140,248,0.1)" stroke="#818cf8" />
    <text x="50" y="35" fill="#818cf8" font-size="8" text-anchor="middle">2. National Bank</text>
  </g>

  <g transform="translate(270, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" />
    <text x="50" y="35" fill="#fbbf24" font-size="8" text-anchor="middle">3. Roads / Canals</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q4.1.1',
                    'unitId': 4,
                    'text': 'The expansion of democracy during the Jacksonian Era was characterized primarily by which trend?',
                    'options': [
                        'The granting of voting rights to women.',
                        'The elimination of property ownership requirements for white male voters.',
                        'The immediate emancipation and enfranchisement of enslaved peoples.',
                        'A decline in voter turnout and interest in political campaigns.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This led to the \'Age of the Common Man\' in American politics.',
                    'explanation': 'During the 1820s and 1830s, states revised their constitutions to drop property qualifications, allowing almost all white adult males to vote.'
                },
                {
                    'id': 'q4.1.2',
                    'unitId': 4,
                    'text': 'Henry Clay\'s \'American System\' proposed to integrate the US economy through all of the following EXCEPT:',
                    'options': [
                        'A protective tariff to support domestic manufacturing.',
                        'A National Bank to stabilize currency and credit.',
                        'Federal funding for internal improvements like roads and canals.',
                        'The annexation of Texas to expand cotton agriculture.'
                    ],
                    'correctIndex': 3,
                    'hint': 'The plan focused on linking northern manufacturing with western agricultural markets.',
                    'explanation': 'The American System focused on internal infrastructure, finance, and tariff protection, not territorial expansion like the annexation of Texas.'
                },
                {
                    'id': 'q4.1.3',
                    'unitId': 4,
                    'text': 'During the Nullification Crisis of 1832, South Carolina asserted its right to do which of the following?',
                    'options': [
                        'Secede immediately from the Union to form a new nation.',
                        'Declare a federal tariff law null and void within state borders.',
                        'Arrest federal customs collectors who entered the state.',
                        'Forbid the importation of enslaved labor from other states.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was based on John C. Calhoun\'s theory of state sovereignty.',
                    'explanation': 'South Carolina nullified the Tariffs of 1828 and 1832, arguing that sovereign states had the right to reject unconstitutional federal laws.'
                },
                {
                    'id': 'q4.1.4',
                    'unitId': 4,
                    'text': 'How did Chief Justice John Marshall\'s Supreme Court rulings generally affect federal power?',
                    'options': [
                        'They consistently restricted federal authority in favor of states\' rights.',
                        'They expanded federal authority and confirmed the supremacy of federal law over states.',
                        'They declared the Bill of Rights applicable to all Native American tribes.',
                        'They ruled that Congress had no power to regulate interstate commerce.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Think of rulings like McCulloch v. Maryland and Gibbons v. Ogden.',
                    'explanation': 'John Marshall\'s court consistently established that the federal government had broad implied powers and that state laws could not override federal laws.'
                },
                {
                    'id': 'q4.1.5',
                    'unitId': 4,
                    'text': 'Which political party formed in the 1830s to oppose Andrew Jackson\'s \'tyrannical\' presidency, drawing their name from the anti-monarchy party in Britain?',
                    'options': [
                        'The Democrats',
                        'The Whigs',
                        'The Populists',
                        'The Federalists'
                    ],
                    'correctIndex': 1,
                    'hint': 'They nicknamed Jackson \'King Andrew the First.\'',
                    'explanation': 'The Whigs formed as a coalition opposing Jackson\'s extensive use of executive power, advocating instead for legislative supremacy and economic development.'
                }
            ]
        },
        {
            'id': '4.2',
            'title': 'The Market Revolution, Industrialization, and Social Transformations',
            'description': 'Examine the technological innovations of the Market Revolution, the growth of the factory system, and changing family and gender roles.',
            'youtubeId': 'zX8t9o9V9v0',
            'article': '''# The Market Revolution and Social Change

The first half of the 19th century witnessed the **Market Revolution**, a rapid transformation from agrarian, local economies to a national, commercial market system.

## Technological Innovations
New technologies connected distant regions, lowered shipping costs, and boosted productivity:
- **Transportation**: The construction of canals (like the **Erie Canal** in 1825), steamships (invented by Robert Fulton), and early railroads.
- **Communication**: The telegraph (Samuel Morse) enabled instant commercial transactions.
- **Agriculture**: The steel plow (John Deere) and mechanical reaper (Cyrus McCormick) turned the Midwest into a commercial grain hub.
- **Manufacturing**: Eli Whitney\'s **interchangeable parts** and the cotton gin revolutionized factory assembly lines and cotton processing.

## Social Transformations
1. **The Factory System & Lowell Girls**: In Lowell, Massachusetts, textile mills employed young farm girls, housing them in supervised dormitories. This marked the birth of early industrial wage labor.
2. **Immigration**: A massive wave of Irish (escaping the potato famine) and German immigrants arrived, settling in northern cities and providing cheap factory labor. This sparked a nativist backlash (the **Know-Nothing Party**).
3. **Gender Roles & Cult of Domesticity**: As work moved from family farms to factories, middle-class society separated into public (male, work) and private (female, home) spheres. The **Cult of Domesticity** idealized women as moral guardians of the household.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Market Revolution Connections -->
  <line x1="80" y1="30" x2="320" y2="30" stroke="#a1a1aa" stroke-width="2" />
  <line x1="80" y1="120" x2="320" y2="120" stroke="#a1a1aa" stroke-width="2" />
  
  <text x="80" y="75" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">North (Factories)</text>
  <text x="320" y="75" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">West (Grain / Meat)</text>
  
  <path d="M 120 40 Q 200 60 280 40" fill="none" stroke="#20c997" stroke-width="1.5" marker-end="url(#arrow-phys)" />
  <text x="200" y="55" fill="#20c997" font-size="8" text-anchor="middle">Manufactured Goods</text>

  <path d="M 280 110 Q 200 90 120 110" fill="none" stroke="#20c997" stroke-width="1.5" marker-end="url(#arrow-phys)" />
  <text x="200" y="102" fill="#20c997" font-size="8" text-anchor="middle">Agricultural Surplus</text>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q4.2.1',
                    'unitId': 4,
                    'text': 'The Market Revolution of the early 19th century is best defined by which development?',
                    'options': [
                        'A complete return to local subsistence farming.',
                        'A shift from home production and local markets to a national, commercial trade network.',
                        'The immediate unionization of all agricultural laborers.',
                        'The adoption of mercantilist trade restrictions against Great Britain.'
                    ],
                    'correctIndex': 1,
                    'hint': 'It involved transportation innovations that connected the East, West, and South.',
                    'explanation': 'The Market Revolution connected farmers and factories through canals, steam, and rail, shifting the economy from self-sufficiency to commercial production.'
                },
                {
                    'id': 'q4.2.2',
                    'unitId': 4,
                    'text': 'What major infrastructure project, completed in 1825, linked the Great Lakes with New York City and lowered shipping costs?',
                    'options': [
                        'The National Road',
                        'The Transcontinental Railroad',
                        'The Erie Canal',
                        'The Chesapeake and Ohio Canal'
                    ],
                    'correctIndex': 2,
                    'hint': 'This canal was constructed across upstate New York.',
                    'explanation': 'The Erie Canal connected the Hudson River to Lake Erie, turning New York City into the country\'s primary commercial port and sparking a canal-building boom.'
                },
                {
                    'id': 'q4.2.3',
                    'unitId': 4,
                    'text': 'The Lowell System of textile manufacturing in Massachusetts was notable for employing which labor group?',
                    'options': [
                        'Enslaved African Americans imported from the South.',
                        'Young, unmarried women from local farms.',
                        'Highly skilled artisans from Europe.',
                        'Native American families forced off their lands.'
                    ],
                    'correctIndex': 1,
                    'hint': 'These workers lived in heavily supervised boardinghouses built by the mill owners.',
                    'explanation': 'Lowell mills hired young farm girls (\'Lowell Girls\') to operate spinning frames, housing them in boardinghouses to reassure families of their moral safety.'
                },
                {
                    'id': 'q4.2.4',
                    'unitId': 4,
                    'text': 'What social ideology developed in the middle class as a result of the Market Revolution, separating gender roles into public and private spheres?',
                    'options': [
                        'Republican Motherhood',
                        'The Cult of Domesticity',
                        'Seneca Falls Feminism',
                        'Nativism'
                    ],
                    'correctIndex': 1,
                    'hint': 'This view idealized women\'s roles as moral leaders inside the home.',
                    'explanation': 'The Cult of Domesticity defined the home as a private sanctuary where women were expected to display piety, purity, and submissiveness, distinct from the commercial public sphere.'
                },
                {
                    'id': 'q4.2.5',
                    'unitId': 4,
                    'text': 'The \'Know-Nothing\' Party emerged in the 1850s primarily to advocate for which political position?',
                    'options': [
                        'The immediate abolition of chattel slavery.',
                        'Nativist policies to restrict Catholic immigration (Irish and German).',
                        'The annexation of Canada and Mexico.',
                        'Federal funding for transcontinental canals.'
                    ],
                    'correctIndex': 1,
                    'hint': 'They were an anti-immigrant, secret society that claimed to \'know nothing\' when questioned.',
                    'explanation': 'Massive Catholic immigration in the 1840s sparked a nativist backlash. The American (Know-Nothing) Party sought to limit immigrants\' political power and extend naturalization periods.'
                }
            ]
        },
        {
            'id': '4.3',
            'title': 'The Second Great Awakening, Antebellum Reform Movements, and Sectionalism',
            'description': 'Examine the religious revivals of the Second Great Awakening and how they inspired abolitionism, women\'s rights, and temperance.',
            'youtubeId': 'zX8t9o9V9v0',
            'article': '''# The Second Great Awakening and Antebellum Reform

The **Second Great Awakening** was a major religious revival movement that swept the United States in the early 19th century, transforming American religious life and directly inspiring a wave of social reform movements.

## The Second Great Awakening
- **Message**: Unlike older Calvinist beliefs in predestination, revivalist preachers (like Charles Grandison Finney) emphasized free will and personal salvation. They argued that individuals could choose to avoid sin and improve both themselves and society.
- **The Burned-Over District**: Western New York became a hotbed of intense revival meetings, named for the frequency of these religious \'fires\'.

## The Reform Movements
Believing that society could be perfected (a concept known as **perfectionism**), reformers launched several major movements:
1. **Abolitionism**: The movement to end slavery immediately. Led by figures like **William Lloyd Garrison** (publisher of *The Liberator*) and **Frederick Douglass** (a brilliant escaped orator who wrote *The North Star*).
2. **Women\'s Rights**: Women active in abolitionism realized they faced similar legal restrictions. In 1848, Elizabeth Cady Stanton and Lucretia Mott organized the **Seneca Falls Convention**. They drafted the **Declaration of Sentiments**, declaring "all men and women are created equal" and demanding the right to vote.
3. **Temperance**: A crusade to ban alcohol, which reformers blamed for domestic abuse and poverty.
4. **Asylum & Prison Reform**: Led by **Dorothea Dix**, who documented the abuse of the mentally ill in prisons, leading to the creation of dedicated state hospitals.

<div class="flex justify-center my-8">
<svg width="400" height="160" viewBox="0 0 400 160" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Reform Roots diagram -->
  <circle cx="200" cy="30" r="20" fill="rgba(129,140,248,0.15)" stroke="#818cf8" stroke-width="2" />
  <text x="200" y="33" fill="#818cf8" font-size="8" text-anchor="middle" font-weight="bold">2nd Great Awakening</text>

  <!-- Branches -->
  <line x1="200" y1="50" x2="80" y2="100" stroke="#a1a1aa" stroke-width="1.5" />
  <line x1="200" y1="50" x2="160" y2="100" stroke="#a1a1aa" stroke-width="1.5" />
  <line x1="200" y1="50" x2="240" y2="100" stroke="#a1a1aa" stroke-width="1.5" />
  <line x1="200" y1="50" x2="320" y2="100" stroke="#a1a1aa" stroke-width="1.5" />

  <!-- Leafs -->
  <text x="80" y="115" fill="#ffffff" font-size="8" text-anchor="middle">Abolitionism</text>
  <text x="160" y="115" fill="#ffffff" font-size="8" text-anchor="middle">Women\'s Rights</text>
  <text x="240" y="115" fill="#ffffff" font-size="8" text-anchor="middle">Temperance</text>
  <text x="320" y="115" fill="#ffffff" font-size="8" text-anchor="middle">Asylum Reform</text>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q4.3.1',
                    'unitId': 4,
                    'text': 'Preachers of the Second Great Awakening rejected Calvinist predestination in favor of what doctrine?',
                    'options': [
                        'That humans have no free will and are doomed to sin.',
                        'That salvation is open to all through free will, repentance, and good works.',
                        'That only a small, pre-selected elite will enter heaven.',
                        'That religious faith should be replaced by scientific rationalism.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This theology empowered individuals to control their own spiritual destiny.',
                    'explanation': 'Second Great Awakening theology emphasized individual agency and moral perfection, which directly fueled reform efforts to improve society.'
                },
                {
                    'id': 'q4.3.2',
                    'unitId': 4,
                    'text': 'Which abolitionist leader published the radical anti-slavery newspaper The Liberator and demanded the immediate, uncompensated emancipation of slaves?',
                    'options': [
                        'Frederick Douglass',
                        'William Lloyd Garrison',
                        'John Brown',
                        'Abraham Lincoln'
                    ],
                    'correctIndex': 1,
                    'hint': 'He famously declared: \'I will not equivocate—I will not excuse—I will not retreat a single inch—and I will be heard!\'',
                    'explanation': 'Garrison was a radical abolitionist who founded the American Anti-Slavery Society, rejecting gradual emancipation in favor of immediate abolition.'
                },
                {
                    'id': 'q4.3.3',
                    'unitId': 4,
                    'text': 'The Seneca Falls Convention of 1848 was historically significant because it achieved which milestone?',
                    'options': [
                        'It drafted the first petition to abolish the transatlantic slave trade.',
                        'It organized the first national meeting dedicated to women\'s rights and suffrage.',
                        'It successfully secured the right to vote for women in New York state.',
                        'It created the first public university open to female students.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Elizabeth Cady Stanton read the Declaration of Sentiments here.',
                    'explanation': 'Seneca Falls marked the formal beginning of the organized women\'s suffrage movement in the United States, presenting the Declaration of Sentiments.'
                },
                {
                    'id': 'q4.3.4',
                    'unitId': 4,
                    'text': 'How did Dorothea Dix contribute to the reform movements of the antebellum era?',
                    'options': [
                        'She founded the American Temperance Society.',
                        'She led the Underground Railroad to free enslaved people.',
                        'She documented the abuse of the mentally ill, leading to the creation of state mental asylums.',
                        'She advocated for the creation of public co-educational high schools.'
                    ],
                    'correctIndex': 2,
                    'hint': 'Her work focused on separating the mentally ill from common criminals in prison cells.',
                    'explanation': 'Dix\'s relentless lobbying and reports convinced state legislatures to establish dedicated, humane institutions for the mentally ill.'
                },
                {
                    'id': 'q4.3.5',
                    'unitId': 4,
                    'text': 'The Declaration of Sentiments, written at Seneca Falls, was modeled directly on which historical document?',
                    'options': [
                        'The United States Constitution',
                        'The Declaration of Independence',
                        'Thomas Paine\'s Common Sense',
                        'The Articles of Confederation'
                    ],
                    'correctIndex': 1,
                    'hint': 'It opened with: \'We hold these truths to be self-evident: that all men and women are created equal...\'',
                    'explanation': 'Stanton deliberately structured the document to mirror the Declaration of Independence, framing women\'s rights as a continuation of America\'s founding principles.'
                }
            ]
        }
    ]
}

unit5 = {
    'id': 5,
    'title': 'Period 5: 1844–1877',
    'masteryWeight': '13%',
    'topics': [
        {
            'id': '5.1',
            'title': 'Manifest Destiny, Western Expansion, and the Mexican-American War',
            'description': 'Examine the ideology of Manifest Destiny, the annexation of Texas, and how the Mexican Cession reopened the debate over slavery.',
            'youtubeId': 'hBf3G22B5qA',
            'article': '''# Manifest Destiny and the Mexican-American War

During the 1840s, the United States was swept by a nationalistic drive to expand westward across the continent, a movement that culminated in war and reopened the debate over slavery.

## Manifest Destiny
The term <vocab term="Manifest Destiny" definition="The 19th-century belief that the United States was divinely ordained to expand its democratic and capitalistic systems across the entire North American continent.">Manifest Destiny</vocab> was coined by John O\'Sullivan. It asserted that:
- Expansion was divinely ordained by God.
- It was America\'s mission to spread democracy and freedom westward.
- It assumed Anglo-Saxon cultural and racial superiority over Native Americans and Mexicans.

## The Mexican-American War (1846–1848)
- **Cause**: President James K. Polk annexed Texas in 1845 and sent troops into disputed territory along the Rio Grande, provoking a clash with Mexican forces.
- **Treaty of Guadalupe Hidalgo (1848)**: Ended the war. Mexico ceded more than half of its territory to the US (the **Mexican Cession**, including California, Utah, Nevada, Arizona, and New Mexico) for $15 million.

## The Reopening of the Slavery Debate
The acquisition of the Mexican Cession immediately shattered the delicate political balance between free and slave states.
- **Wilmot Proviso (1846)**: A proposed bill to ban slavery in any territory acquired from Mexico. Though it passed the House, it was repeatedly blocked by Southern senators, exposing deep sectional divisions.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- US Expansion Map Sketch -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">US Territorial Acquisitions (1840s)</text>
  
  <!-- Oregon Territory -->
  <rect x="30" y="45" width="100" height="35" rx="4" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" />
  <text x="80" y="65" fill="#60a5fa" font-size="8" text-anchor="middle">Oregon (1846)</text>
  
  <!-- Mexican Cession -->
  <rect x="30" y="90" width="130" height="40" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" />
  <text x="95" y="115" fill="#ef4444" font-size="8" text-anchor="middle">Mexican Cession (1848)</text>

  <!-- Texas Annexation -->
  <rect x="180" y="90" width="100" height="40" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" />
  <text x="230" y="115" fill="#fbbf24" font-size="8" text-anchor="middle">Texas (1845)</text>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q5.1.1',
                    'unitId': 5,
                    'text': 'The ideology of Manifest Destiny was built on all of the following beliefs EXCEPT:',
                    'options': [
                        'God supported American westward expansion.',
                        'The US should immediately share political power equally with Native tribes.',
                        'America had a mission to spread democracy and capitalism.',
                        'Anglo-Saxon institutions were culturally and racially superior.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Manifest Destiny was highly nationalistic and ethnocentric.',
                    'explanation': 'Manifest Destiny assumed the superiority of American culture and systems, viewing indigenous peoples and Mexicans as obstacles to be removed or dominated.'
                },
                {
                    'id': 'q5.1.2',
                    'unitId': 5,
                    'text': 'The Wilmot Proviso (1846) attempted to resolve the debate over slavery in the west by doing which of the following?',
                    'options': [
                        'Extending the Missouri Compromise line to the Pacific Ocean.',
                        'Allowing territories to vote on whether to permit slavery.',
                        'Banning slavery in any territory acquired from the Mexican-American War.',
                        'Forcing all northern states to return runaway slaves.'
                    ],
                    'correctIndex': 2,
                    'hint': 'This proviso was proposed by a Pennsylvania congressman during the war.',
                    'explanation': 'The Wilmot Proviso proposed that slavery be completely banned in any land won from Mexico, signaling growing northern opposition to the spread of slavery.'
                },
                {
                    'id': 'q5.1.3',
                    'unitId': 5,
                    'text': 'What was the immediate cause of the Mexican-American War (1846–1848)?',
                    'options': [
                        'A boundary dispute along the Rio Grande where US and Mexican troops clashed.',
                        'The discovery of gold in California.',
                        'Mexico\'s decision to build military forts in Louisiana.',
                        'The signing of the Oregon Boundary Treaty with Great Britain.'
                    ],
                    'correctIndex': 0,
                    'hint': 'Polk claimed that Mexico had shed \'American blood on American soil\' in a disputed border zone.',
                    'explanation': 'After annexing Texas, the US claimed the Rio Grande as the border, while Mexico claimed the Nueces River. A clash in this zone led Polk to request a declaration of war.'
                },
                {
                    'id': 'q5.1.4',
                    'unitId': 5,
                    'text': 'Which treaty ended the Mexican-American War, granting the US the Mexican Cession in exchange for $15 million?',
                    'options': [
                        'The Treaty of Paris',
                        'The Treaty of Ghent',
                        'The Treaty of Guadalupe Hidalgo',
                        'The Adams-Onís Treaty'
                    ],
                    'correctIndex': 2,
                    'hint': 'The treaty was signed in a town near Mexico City in 1848.',
                    'explanation': 'The Treaty of Guadalupe Hidalgo ended the war, confirming the Texas border at the Rio Grande and transferring California and the Southwest to the US.'
                },
                {
                    'id': 'q5.1.5',
                    'unitId': 5,
                    'text': 'How did the acquisition of the Mexican Cession affect the political stability of the United States?',
                    'options': [
                        'It unified the Whigs and Democrats around a shared economic plan.',
                        'It settled the slavery debate once and for all.',
                        'It reopened intense sectional debates over the expansion of slavery into new territories.',
                        'It led to an immediate decline in western migration.'
                    ],
                    'correctIndex': 2,
                    'hint': 'The balance of free and slave states in the Senate was threatened.',
                    'explanation': 'Adding massive new lands triggered bitter arguments over whether the new territories would allow slavery, directly paving the way for the Compromise of 1850.'
                }
            ]
        },
        {
            'id': '5.2',
            'title': 'The Failure of Compromise, Sectional Conflict, and Southern Secession',
            'description': 'Evaluate the political failures of the 1850s, including the Compromise of 1850, the Kansas-Nebraska Act, and the Dred Scott decision.',
            'youtubeId': 'hBf3G22B5qA',
            'article': '''# The Failure of Compromise and Sectional Crisis

In the 1850s, the institutional systems that held the Union together began to break down. A series of political crises pushed the North and South toward open conflict.

## The Compromise of 1850
To resolve the status of the Mexican Cession, Henry Clay engineered a compromise:
- **California** entered the Union as a free state.
- **Popular Sovereignty** (voting by residents) would determine the status of Utah and New Mexico.
- **Fugitive Slave Act**: A strict federal law requiring northerners to help return runaway slaves. This act outraged northerners, driving many moderate citizens into the abolitionist camp.

## The Kansas-Nebraska Act (1854)
Stephen Douglas proposed opening the Kansas and Nebraska territories to **popular sovereignty**, repealing the Missouri Compromise of 1820 (which had banned slavery north of 36°30\').
- **Result**: Pro- and anti-slavery settlers rushed to Kansas to vote, sparking a localized civil war known as **"Bleeding Kansas"**.
- **Political realignment**: The Whig Party collapsed, and the **Republican Party** was born in the North, unified around the goal of stopping the expansion of slavery ("Free Soil").

## The Dred Scott Decision (1857)
The Supreme Court (Chief Justice Roger Taney) ruled that:
1. Enslaved people were not citizens and could not sue in federal court.
2. Enslaved people were property protected by the 5th Amendment, meaning Congress had no power to ban slavery in any federal territory. This effectively declared the Missouri Compromise unconstitutional, shocking the North.

Following the election of Republican **Abraham Lincoln** in November 1860, South Carolina and six other Deep South states seceded from the Union, forming the Confederate States of America.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Sectional Crisis Steps -->
  <line x1="20" y1="80" x2="380" y2="80" stroke="#a1a1aa" stroke-width="1.5" />
  
  <g transform="translate(60, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1850</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Fugitive Slave Act</text>
  </g>
  
  <g transform="translate(150, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1854</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Kansas-Nebraska Act</text>
  </g>

  <g transform="translate(250, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1857</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Dred Scott Decision</text>
  </g>

  <g transform="translate(340, 0)">
    <circle cx="0" cy="80" r="4" fill="#ef4444" />
    <text x="0" y="65" fill="#ef4444" font-size="8" text-anchor="middle">1860</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Lincoln's Election</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q5.2.1',
                    'unitId': 5,
                    'text': 'Which part of the Compromise of 1850 generated the most outrage and active resistance in northern states?',
                    'options': [
                        'The admission of California as a free state.',
                        'The abolition of the domestic slave trade in Washington, D.C.',
                        'The passage of a strict new Fugitive Slave Act.',
                        'The division of Texas into multiple states.'
                    ],
                    'correctIndex': 2,
                    'hint': 'This law forced northerners to participate in catching runaway slaves under threat of fines or arrest.',
                    'explanation': 'The Fugitive Slave Act stripped accused runaways of jury trials and compelled northern citizens to assist in captures, galvanizing northern opposition to slavery.'
                },
                {
                    'id': 'q5.2.2',
                    'unitId': 5,
                    'text': 'The Kansas-Nebraska Act of 1854, proposed by Stephen Douglas, directly repealed which previous compromise?',
                    'options': [
                        'The Compromise of 1850',
                        'The Missouri Compromise of 1820',
                        'The Three-Fifths Compromise',
                        'The Great Compromise'
                    ],
                    'correctIndex': 1,
                    'hint': 'This compromise had drawn a line at 36°30\' to divide free and slave territory.',
                    'explanation': 'By opening Kansas and Nebraska (which were north of the 36°30\' line) to popular sovereignty, the act nullified the Missouri Compromise\'s ban on slavery in those territories.'
                },
                {
                    'id': 'q5.2.3',
                    'unitId': 5,
                    'text': 'In the Dred Scott case (1857), Chief Justice Roger Taney ruled that the Missouri Compromise was unconstitutional for what reason?',
                    'options': [
                        'It violated the states\' rights of northern free states.',
                        'It violated the 5th Amendment by depriving citizens of their property (slaves) without due process.',
                        'It did not count enslaved people as three-fifths of a person.',
                        'It had not been signed by the President.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Taney declared that Congress had no power to ban slavery in any territory because slaves were property.',
                    'explanation': 'The Court ruled that slaves were property and that the federal government could not prohibit property ownership in territories, making any ban on slavery unconstitutional.'
                },
                {
                    'id': 'q5.2.4',
                    'unitId': 5,
                    'text': 'What was the immediate political catalyst for South Carolina\'s secession from the Union in December 1860?',
                    'options': [
                        'John Brown\'s raid on Harpers Ferry.',
                        'The passage of the Kansas-Nebraska Act.',
                        'The election of Republican Abraham Lincoln to the presidency.',
                        'The firing on Fort Sumter by Union troops.'
                    ],
                    'correctIndex': 2,
                    'hint': 'South Carolina seceded before Lincoln was even inaugurated, fearing his party\'s anti-slavery platform.',
                    'explanation': 'Lincoln\'s election convinced Southern leaders that the federal government would act to limit and eventually abolish slavery, prompting immediate secession.'
                },
                {
                    'id': 'q5.2.5',
                    'unitId': 5,
                    'text': 'Which new political party arose in the mid-1850s in the North, dedicated entirely to preventing the expansion of slavery?',
                    'options': [
                        'The Whigs',
                        'The Populists',
                        'The Republican Party',
                        'The Democratic Party'
                    ],
                    'correctIndex': 2,
                    'hint': 'This party nominated Abraham Lincoln in 1860.',
                    'explanation': 'The Republican Party was formed in 1854 by anti-slavery Whigs, Democrats, and Free-Soilers unified in opposition to the Kansas-Nebraska Act.'
                }
            ]
        },
        {
            'id': '5.3',
            'title': 'The Civil War, Government Wartime Policies, and the Successes and Failures of Reconstruction',
            'description': 'Examine the Civil War, Abraham Lincoln\'s war measures (Emancipation Proclamation), and the constitutional reforms and failures of Reconstruction.',
            'youtubeId': 'QnQe0xW_JY4',
            'article': '''# The Civil War and Reconstruction

The **American Civil War** (1861–1865) preserved the Union, abolished slavery, and initiated **Reconstruction**, a period of intense struggle over the political and social status of newly freed African Americans.

## The Civil War
- **Union Advantages**: Superior population, industrial manufacturing capacity, and transportation networks (railroads).
- **Confederate Advantages**: Experienced military commanders and defensive home-ground strategy.
- **Lincoln\'s War Measures**:
  - **Emancipation Proclamation (1863)**: Declared all slaves in rebelling Confederate territory free. This shifted the war\'s purpose to include the eradication of slavery and prevented foreign intervention by anti-slavery European powers.
  - **Gettysburg Address (1863)**: Framed the war as a test of whether a nation dedicated to human equality could survive.

## The Reconstruction Amendments
During Reconstruction, the Radical Republicans in Congress passed three landmark amendments:
- **13th Amendment**: Abolished slavery.
- **14th Amendment**: Granted citizenship and equal protection under the law to all persons born in the US.
- **15th Amendment**: Banned voting discrimination based on race.

## The Failures of Reconstruction
Despite initial successes (such as the election of black politicians to Congress), Reconstruction collapsed by 1877:
- **Sharecropping**: A labor system that tied freedmen to white-owned land in cycles of debt.
- **Voter Suppression**: Southern whites used violence (Ku Klux Klan), poll taxes, and literacy tests to block black voters.
- **Compromise of 1877**: A political deal that settled the disputed 1876 election by withdrawing federal troops from the South, ending Reconstruction and allowing the rise of **Jim Crow** segregation laws.

<div class="flex justify-center my-8">
<table class="w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25">
  <thead>
    <tr class="bg-white/5 text-white font-mono uppercase">
      <th class="p-2 border border-white/10">Amendment</th>
      <th class="p-2 border border-white/10">Core Protection</th>
      <th class="p-2 border border-white/10">Reconstruction Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-yellow-400">13th</td>
      <td class="p-2 border border-white/10">Abolished Slavery</td>
      <td class="p-2 border border-white/10">Freed 4 million people</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-cyan-400">14th</td>
      <td class="p-2 border border-white/10">Citizenship & Equal Protection</td>
      <td class="p-2 border border-white/10">Overturned Dred Scott ruling</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-indigo-400">15th</td>
      <td class="p-2 border border-white/10">Voting Rights (Men)</td>
      <td class="p-2 border border-white/10">Enabled black political participation</td>
    </tr>
  </tbody>
</table>
</div>
''',
            'questions': [
                {
                    'id': 'q5.3.1',
                    'unitId': 5,
                    'text': 'What was a major diplomatic result of Abraham Lincoln\'s Emancipation Proclamation in 1863?',
                    'options': [
                        'It led France and Great Britain to actively enter the war as Confederate allies.',
                        'It prevented European powers from intervening on behalf of the Confederacy by framing the war around slavery.',
                        'It forced all Northern border states to immediately release their slaves.',
                        'It led to the immediate surrender of General Robert E. Lee.'
                    ],
                    'correctIndex': 1,
                    'hint': 'European working classes strongly opposed slavery, making it politically impossible for their governments to support a pro-slavery nation.',
                    'explanation': 'By explicitly linking the Union war effort to the abolition of slavery, Lincoln made support for the Confederacy morally unacceptable to Britain and France.'
                },
                {
                    'id': 'q5.3.2',
                    'unitId': 5,
                    'text': 'Which Reconstruction Amendment granted citizenship and \'equal protection under the law\' to all persons born in the United States?',
                    'options': [
                        '12th Amendment',
                        '13th Amendment',
                        '14th Amendment',
                        '15th Amendment'
                    ],
                    'correctIndex': 2,
                    'hint': 'This amendment directly overturned the Supreme Court\'s Dred Scott decision.',
                    'explanation': 'The 14th Amendment established birthright citizenship and prohibited states from denying equal protection, forming the basis for later civil rights cases.'
                },
                {
                    'id': 'q5.3.3',
                    'unitId': 5,
                    'text': 'What labor system emerged in the post-Civil War South, keeping many freedmen in a cycle of debt and poverty?',
                    'options': [
                        'The encomienda system',
                        'Sharecropping',
                        'Industrial wage labor',
                        'Indentured servitude'
                    ],
                    'correctIndex': 1,
                    'hint': 'Farmers traded their labor for a portion of the crops grown on a landowner\'s land.',
                    'explanation': 'Sharecropping required freedmen to rent land in exchange for a share of the harvest, but high interest and debt kept them bound to the land.'
                },
                {
                    'id': 'q5.3.4',
                    'unitId': 5,
                    'text': 'The Compromise of 1877 formally ended Reconstruction through which action?',
                    'options': [
                        'The passage of the 15th Amendment.',
                        'The withdrawal of all remaining federal troops from the South.',
                        'The impeachment of President Andrew Johnson.',
                        'The complete redistribution of plantations to former slaves.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This deal settled the disputed presidential election between Hayes and Tilden.',
                    'explanation': 'In exchange for seating Republican Rutherford B. Hayes, Republicans agreed to withdraw federal troops, allowing Southern Democrats to regain control and suppress black civil rights.'
                },
                {
                    'id': 'q5.3.5',
                    'unitId': 5,
                    'text': 'Which of the following was a primary advantage of the Union over the Confederacy during the Civil War?',
                    'options': [
                        'More experienced military leadership in local regiments.',
                        'A defensive military strategy that required less supply transport.',
                        'Significantly greater industrial manufacturing capacity and railroad mileage.',
                        'Widespread support from European textile manufacturers.'
                    ],
                    'correctIndex': 2,
                    'hint': 'The North possessed the vast majority of the nation\'s factories and steam locomotives.',
                    'explanation': 'The North\'s industrial base allowed it to produce weapons and supply its armies efficiently, while its extensive rail network enabled rapid troop movement.'
                }
            ]
        }
    ]
}

data.append(unit4)
data.append(unit5)
