# -*- coding: utf-8 -*-
import sys
sys.path.append("/Users/yashpatil/AP Lab/scratch")
from generate_ush_data import data, OUTPUT_PATH

unit2 = {
    'id': 2,
    'title': 'Period 2: 1607–1754',
    'masteryWeight': '10%',
    'topics': [
        {
            'id': '2.1',
            'title': 'Regional Comparisons of Spanish, French, Dutch, and British Colonization',
            'description': 'Contrast the differing economic goals, population sizes, and relationships with Native Americans among the major European colonial powers.',
            'youtubeId': 'K_8h8lSFLn4',
            'article': '''# Regional Comparisons of Colonization

The major European powers established colonies in North America with vastly different economic goals, demographic profiles, and relationships with indigenous populations. 

## Spanish Colonization
- **Goals**: Wealth extraction (precious metals, agriculture) and religious conversion.
- **Population**: Primarily male soldiers, adventurers, and priests. This demographic led to extensive intermarriage and a complex casta system.
- **Native Relations**: Dominant and coercive, forcing conversion and labor through the encomienda system.

## French & Dutch Colonization
- **Goals**: Fur trade (beaver pelts) and trade alliances.
- **Population**: Very few permanent settlers (mostly traders, trappers, and a few Jesuit missionaries).
- **Native Relations**: Cooperative and diplomatic. The French and Dutch married Native women, built trade alliances, and respected Native customs to secure access to fur resources.

## British Colonization
- **Goals**: Land ownership, agricultural cultivation (tobacco, grain, rice), and religious freedom.
- **Population**: Massive influxes of male and female families seeking permanent settlement.
- **Native Relations**: Hostile and exclusionary. Unlike other powers, British colonists rarely intermarried and sought to push Native Americans off their land rather than integrate or trade with them directly.

<div class="flex justify-center my-8">
<table class="w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25">
  <thead>
    <tr class="bg-white/5 text-white font-mono uppercase">
      <th class="p-2 border border-white/10">Empire</th>
      <th class="p-2 border border-white/10">Main Economy</th>
      <th class="p-2 border border-white/10">Demographics</th>
      <th class="p-2 border border-white/10">Relations with Natives</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-yellow-400">Spain</td>
      <td class="p-2 border border-white/10">Mining / Sugar</td>
      <td class="p-2 border border-white/10">Mostly single males</td>
      <td class="p-2 border border-white/10">Coercive / Caste system</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-cyan-400">France / Dutch</td>
      <td class="p-2 border border-white/10">Fur Trade</td>
      <td class="p-2 border border-white/10">Trappers / Traders</td>
      <td class="p-2 border border-white/10">Alliances / Intermarriage</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-indigo-400">Great Britain</td>
      <td class="p-2 border border-white/10">Agriculture</td>
      <td class="p-2 border border-white/10">Families / Mass settlement</td>
      <td class="p-2 border border-white/10">Exclusionary / Conflict</td>
    </tr>
  </tbody>
</table>
</div>
''',
            'questions': [
                {
                    'id': 'q2.1.1',
                    'unitId': 2,
                    'text': 'Which of the following best describes the economic goals of the French and Dutch in North America?',
                    'options': [
                        'Establishing massive gold mining operations.',
                        'Developing tobacco and sugar plantations with enslaved labor.',
                        'Building trade networks focused on beaver pelts and furs.',
                        'Importing thousands of families to farm wheat and corn.'
                    ],
                    'correctIndex': 2,
                    'hint': 'Their colonies (New France and New Netherland) had very small populations centered along rivers.',
                    'explanation': 'French and Dutch colonization was commercial, relying on alliances with Native Americans to secure fur pelts for export.'
                },
                {
                    'id': 'q2.1.2',
                    'unitId': 2,
                    'text': 'How did British colonists\' interactions with Native Americans differ most from those of the French?',
                    'options': [
                        'British colonists frequently intermarried with Native women to form military alliances.',
                        'British colonists sought to exclude Native Americans from their society and acquire their land.',
                        'British colonists adopted Native religious practices instead of converting them.',
                        'British colonists forced Natives to work under the encomienda system.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The British brought whole families and established separate communities.',
                    'explanation': 'British colonizers brought large family groups, focusing on agriculture and permanent settlements, which led them to drive Native Americans off their lands.'
                },
                {
                    'id': 'q2.1.3',
                    'unitId': 2,
                    'text': 'Which European power\'s colonization model was characterized by extensive intermarriage, a caste system, and direct labor coercion?',
                    'options': [
                        'Great Britain',
                        'France',
                        'Spain',
                        'The Netherlands'
                    ],
                    'correctIndex': 2,
                    'hint': 'This power conquered the Aztec and Inca empires.',
                    'explanation': 'Spain\'s colonizers were heavily male, leading to intermarriage with Native and African populations, which they structured under the casta system.'
                },
                {
                    'id': 'q2.1.4',
                    'unitId': 2,
                    'text': 'French Jesuit missionaries in New France generally differed from Spanish Franciscan missionaries in what way?',
                    'options': [
                        'Jesuits forced Native Americans into massive labor camps.',
                        'Jesuits attempted to understand Native culture and lived among them peacefully.',
                        'Jesuits completely rejected the idea of converting Native Americans.',
                        'Jesuits armed Native Americans to conquer Spanish colonies.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Think about New France\'s dependence on diplomacy to secure fur trade routes.',
                    'explanation': 'Rather than forcing Natives onto reservations or missions, French Jesuits learned Native languages and adapted their presentation of Christianity to fit indigenous traditions.'
                },
                {
                    'id': 'q2.1.5',
                    'unitId': 2,
                    'text': 'What geographic region of North America was primarily settled by the Dutch prior to English conquest?',
                    'options': [
                        'The St. Lawrence River Valley',
                        'The Hudson River Valley (New York)',
                        'The Chesapeake Bay',
                        'The Florida Peninsula'
                    ],
                    'correctIndex': 1,
                    'hint': 'New Amsterdam was renamed New York after the English took it in 1664.',
                    'explanation': 'The Dutch West India Company established New Netherland along the Hudson River to capitalize on the lucrative fur trade.'
                }
            ]
        },
        {
            'id': '2.2',
            'title': 'Transatlantic Trade, Mercantilism, and the Growth of British Colonial Economies',
            'description': 'Examine the growth of regional British colonies, the Atlantic triangular trade, and British enforcement of mercantilism through the Navigation Acts.',
            'youtubeId': 'x4h2_xG-y_Y',
            'article': '''# Transatlantic Trade, Mercantilism, and Colonial Economies

British colonies developed highly distinct regional economies, bound together and tied to the mother country by the Atlantic trade network and the economic policy of mercantilism.

## Regional British Colonies
1. **New England (Massachusetts, Connecticut)**: Settled primarily by Puritans seeking religious community. The economy relied on subsistence farming, timber, shipbuilding, and fishing.
2. **Middle Colonies (Pennsylvania, New York)**: Religiously tolerant and diverse (Quakers in PA). The economy centered on exporting wheat and grain ("the breadbasket colonies").
3. **Chesapeake (Virginia, Maryland)**: Populated mostly by young, single male indentured servants (later enslaved labor). The economy was based entirely on the intensive cultivation of tobacco.
4. **Southern Colonies (Carolinas, Georgia)**: Long growing seasons led to plantation economies cultivating rice and indigo, heavily reliant on enslaved labor.

## Mercantilism and the Navigation Acts
British economic policy was driven by <vocab term="Mercantilism" definition="An economic theory that colonies exist to enrich the mother country by providing raw materials and importing manufactured goods, maintaining a favorable balance of trade.">mercantilism</vocab>. To enforce this, Parliament passed the **Navigation Acts**, which:
- Required all colonial trade to be carried on British ships.
- Enumerated specific colonial goods (like tobacco) that could only be sold to Britain.
- Placed import taxes on non-British goods.

For decades, the British enforced these laws loosely—a period known as **salutary neglect**—allowing the colonies to develop independent trade networks and self-governing colonial assemblies.

<div class="flex justify-center my-8">
<svg width="420" height="150" viewBox="0 0 420 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Triangular Trade Map Sketch -->
  <line x1="60" y1="90" x2="360" y2="40" stroke="#a1a1aa" stroke-dasharray="3,3" />
  <line x1="360" y1="40" x2="220" y2="120" stroke="#a1a1aa" stroke-dasharray="3,3" />
  <line x1="220" y1="120" x2="60" y2="90" stroke="#a1a1aa" stroke-dasharray="3,3" />

  <text x="60" y="80" fill="#ffffff" font-size="8" text-anchor="middle">Colonies</text>
  <text x="360" y="30" fill="#ffffff" font-size="8" text-anchor="middle">Great Britain</text>
  <text x="220" y="135" fill="#ffffff" font-size="8" text-anchor="middle">West Africa</text>

  <!-- Labels on paths -->
  <text x="220" y="55" fill="#20c997" font-size="7" text-anchor="middle">Raw Materials (Tobacco, Fish)</text>
  <text x="310" y="90" fill="#fbbf24" font-size="7" text-anchor="middle">Manufactured Goods</text>
  <text x="120" y="115" fill="#ef4444" font-size="7" text-anchor="middle">Enslaved People (Middle Passage)</text>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q2.2.1',
                    'unitId': 2,
                    'text': 'The economic policy of mercantilism dictated that colonies existed to perform which function?',
                    'options': [
                        'Compete with the mother country in manufacturing.',
                        'Enrich the mother country by providing raw materials and buying manufactured goods.',
                        'Establish independent, unregulated trade with other empires.',
                        'Produce gold and silver coins for global commerce.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Under mercantilism, colonies were viewed as economic tools for the empire\'s home nation.',
                    'explanation': 'Mercantilism aimed to create a self-sufficient empire where colonies supplied raw goods to Britain and purchased British finished products, keeping gold/silver inside the empire.'
                },
                {
                    'id': 'q2.2.2',
                    'unitId': 2,
                    'text': 'Which regional colony group was characterized by a diverse, grain-exporting economy and high religious tolerance?',
                    'options': [
                        'New England',
                        'The Chesapeake',
                        'The Southern Colonies',
                        'The Middle Colonies'
                    ],
                    'correctIndex': 3,
                    'hint': 'This group included Pennsylvania and New York.',
                    'explanation': 'The Middle Colonies produced large food surpluses (\'breadbasket\') and attracted diverse European immigrants due to tolerant laws.'
                },
                {
                    'id': 'q2.2.3',
                    'unitId': 2,
                    'text': 'What did the British Parliament attempt to enforce by passing the Navigation Acts in the 17th century?',
                    'options': [
                        'The complete abolition of the transatlantic slave trade.',
                        'Strict mercantile control over colonial shipping and trade routes.',
                        'The conversion of Puritans to the Anglican Church.',
                        'Taxation of the colonies without their local assemblies\' approval.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The acts restricted colonial trade partners and required British ships for transport.',
                    'explanation': 'The Navigation Acts restricted colonial trade to British vessels and markets, reinforcing mercantilist control to maximize British tax revenue.'
                },
                {
                    'id': 'q2.2.4',
                    'unitId': 2,
                    'text': 'How did the period of \'salutary neglect\' affect the development of the British colonies?',
                    'options': [
                        'It led to widespread economic depression and poverty.',
                        'It allowed colonies to develop independent political assemblies and self-government.',
                        'It forced colonists to trade exclusively with the Spanish Empire.',
                        'It resulted in the immediate decay of New England shipbuilding.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Britain loosely enforced trade regulations, leaving colonies largely to manage themselves.',
                    'explanation': 'Because Britain did not strictly enforce the Navigation Acts, colonial legislatures (like the Virginia House of Burgesses) grew accustomed to exercising local authority and self-taxation.'
                },
                {
                    'id': 'q2.2.5',
                    'unitId': 2,
                    'text': 'The economy of the Chesapeake colonies (Virginia and Maryland) was centered entirely on which cash crop?',
                    'options': [
                        'Rice',
                        'Sugar',
                        'Tobacco',
                        'Cotton'
                    ],
                    'correctIndex': 2,
                    'hint': 'John Rolfe introduced a sweet strain of this leaf to Jamestown.',
                    'explanation': 'The Chesapeake\'s sandy soil and warm climate made it highly suited for tobacco, which became the region\'s single dominant export.'
                }
            ]
        },
        {
            'id': '2.3',
            'title': 'The Development of the Transatlantic Slave Trade and Colonial Societies',
            'description': 'Examine the shift from indentured servitude to racial slavery, the horrific Middle Passage, and Native resistance movements like Metacom\'s War.',
            'youtubeId': 'K_8h8lSFLn4',
            'article': '''# Transatlantic Slave Trade and Colonial Resistance

As agricultural economies grew in the Chesapeake and Carolinas, the demand for labor skyrocketed. This led to a critical transition from white indentured servitude to permanent racialized chattel slavery.

## The Shift to Chattel Slavery
Initially, plantation owners relied on **indentured servants**—poor Europeans who agreed to work for 4–7 years in exchange for passage to the colonies.
- **Bacon\'s Rebellion (1676)**: Poor, landless former indentured servants rebelled against the Virginia governor, burning Jamestown. Fearing future instability, wealthy planters shifted away from indentured servants to imported enslaved Africans.
- **Chattel Slavery**: Enslaved Africans were defined as personal property ("chattel"), and colonial laws established that the status of children followed the mother, creating a self-perpetuating, racialized labor system.
- **The Middle Passage**: The brutal, disease-ridden oceanic voyage across the Atlantic, where up to **20%** of enslaved Africans died.

## Colonial Resistance and Conflict
As English settlements expanded, they clashed violently with Native Americans:
1. **Pueblo Revolt (1680)**: Native leader Popé led a successful revolt against Spanish rule in New Mexico, keeping the Spanish out for 12 years. When the Spanish returned, they accommodated Native customs more.
2. **Metacom\'s War (King Philip\'s War, 1675)**: Wampanoag leader Metacom united New England tribes in a bloody attempt to expel English settlers. The English won, decimating the Native population and clearing the way for unchecked expansion.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Timeline of Labor shift and Conflict -->
  <line x1="20" y1="80" x2="380" y2="80" stroke="#a1a1aa" stroke-width="2" />
  
  <!-- Bacon's Rebellion -->
  <circle cx="100" cy="80" r="5" fill="#ef4444" />
  <text x="100" y="65" fill="#ef4444" font-size="8" text-anchor="middle" font-weight="bold">1676</text>
  <text x="100" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Bacon's Rebellion</text>
  <text x="100" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Planters shift to slave labor</text>

  <!-- Pueblo Revolt -->
  <circle cx="200" cy="80" r="5" fill="#fbbf24" />
  <text x="200" y="65" fill="#fbbf24" font-size="8" text-anchor="middle" font-weight="bold">1680</text>
  <text x="200" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Pueblo Revolt</text>
  <text x="200" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Native victory in New Mex.</text>

  <!-- Stono Rebellion -->
  <circle cx="300" cy="80" r="5" fill="#34d399" />
  <text x="300" y="65" fill="#34d399" font-size="8" text-anchor="middle" font-weight="bold">1739</text>
  <text x="300" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Stono Rebellion</text>
  <text x="300" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Enslaved revolt in S. Carolina</text>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q2.3.1',
                    'unitId': 2,
                    'text': 'What rebel event in 1676 most directly accelerated the shift from indentured servitude to racial slavery in the Chesapeake?',
                    'options': [
                        'The Stono Rebellion',
                        'Bacon\'s Rebellion',
                        'Metacom\'s War',
                        'Shays\' Rebellion'
                    ],
                    'correctIndex': 1,
                    'hint': 'Frustrated landless frontiersmen marched on Jamestown and set it on fire.',
                    'explanation': 'Bacon\'s Rebellion united poor whites and black servants. Wealthy planters realized indentured servants presented a continuous threat of rebellion, causing them to turn to imported African slaves.'
                },
                {
                    'id': 'q2.3.2',
                    'unitId': 2,
                    'text': 'Which of the following defines \'chattel slavery\' as it developed in the British colonies?',
                    'options': [
                        'A labor system where individuals worked for a set term of years and were freed.',
                        'A system where African laborers were treated as legally sellable property, with inheritance based on the mother.',
                        'A feudal system where peasants were tied to the land but owned their homes.',
                        'A military draft system where Native Americans were forced to defend colonies.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This legal definition stripped enslaved people of all basic human rights, making their status permanent.',
                    'explanation': 'Chattel slavery treated humans as personal property. To ensure a continuous labor supply, colonial laws declared that a child\'s freedom status was inherited from their mother.'
                },
                {
                    'id': 'q2.3.3',
                    'unitId': 2,
                    'text': 'What was the primary geographic conflict known as Metacom\'s War (King Philip\'s War) about?',
                    'options': [
                        'Control of French fur trade routes near the St. Lawrence River.',
                        'Encroachment of English settlers on Wampanoag and other Native lands in New England.',
                        'A dispute between Puritans and Quakers over the boundary of Pennsylvania.',
                        'Spanish attempts to build missions in Massachusetts.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Look at the expansion of Puritans in Massachusetts and Connecticut.',
                    'explanation': 'As English settlers continued to clear forests and expand towns, Metacom led an alliance of tribes in a last-resort effort to save their lands.'
                },
                {
                    'id': 'q2.3.4',
                    'unitId': 2,
                    'text': 'How did the Spanish react to the Pueblo Revolt of 1680 after they reconquered New Mexico in 1692?',
                    'options': [
                        'They completely exterminated all Pueblo Indians in New Mexico.',
                        'They made concessions to Pueblo religious practices and eased labor demands.',
                        'They established a strictly democratic council ruled by Native chiefs.',
                        'They handed control of the territory over to the French.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The Spanish realized that harsh suppression of Native culture was counter-productive.',
                    'explanation': 'After the Pueblo Revolt, the Spanish learned to tolerate traditional Pueblo rituals and replaced the encomienda with less coercive labor demands.'
                },
                {
                    'id': 'q2.3.5',
                    'unitId': 2,
                    'text': 'The Middle Passage refers to which leg of the transatlantic triangular trade network?',
                    'options': [
                        'The route carrying finished products from Britain to the colonies.',
                        'The direct passage of spice ships from Asia to North America.',
                        'The transportation of enslaved Africans across the Atlantic to the Americas.',
                        'The trading of tobacco and raw lumber from New England to the West Indies.'
                    ],
                    'correctIndex': 2,
                    'hint': 'This leg was infamous for extreme overcrowding and high mortality rates.',
                    'explanation': 'The Middle Passage was the central leg of the Triangular Trade, bringing kidnapped and enslaved West Africans to the Americas under inhumane, deadly conditions.'
                }
            ]
        }
    ]
}

unit3 = {
    'id': 3,
    'title': 'Period 3: 1754–1800',
    'masteryWeight': '12%',
    'topics': [
        {
            'id': '3.1',
            'title': 'The Seven Years War, Imperial Realignment, and Colonial Resistance',
            'description': 'Evaluate the impacts of the French and Indian War, the end of salutary neglect, and the rise of organized colonial protests.',
            'youtubeId': 'v2e_mU6U5y8',
            'article': '''# The Seven Years War and the Imperial Crisis

The **French and Indian War** (the North American theater of the global Seven Years\' War) redrew the map of North America and shattered the relationship between Great Britain and its colonies, ending the era of salutary neglect.

## The French and Indian War (1754–1763)
- **Cause**: Land dispute over the fertile Ohio River Valley between British colonists, French fur traders, and Native allies.
- **Result**: British victory. France was completely expelled from North America under the **Treaty of Paris (1763)**, leaving Britain in control of all territory east of the Mississippi.

## The End of Salutary Neglect
While Britain won the war, it was left with massive national debt. Parliament argued that since the war defended the colonies, the colonies should help pay for it.
1. **Proclamation of 1763**: Fearing Native conflicts (like Pontiac\'s Rebellion), the British forbade colonists from settling west of the Appalachian Mountains, angering land-hungry colonists.
2. **Direct Taxes**: Parliament passed a series of direct revenue acts, starting the imperial crisis:
   - **Stamp Act (1765)**: A tax on all paper documents. Colonists organized the Stamp Act Congress and successful boycotts, arguing **"No taxation without representation."**
   - **Townshend Acts (1767)**: Import duties on glass, lead, paper, and tea.
   - **Intolerable Acts (1774)**: Passed to punish Boston for the Boston Tea Party, closing Boston Harbor and suspending the Massachusetts charter.

<div class="flex justify-center my-8">
<svg width="450" height="150" viewBox="0 0 450 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Timeline of British Taxation -->
  <line x1="20" y1="80" x2="430" y2="80" stroke="#a1a1aa" stroke-width="1.5" />
  
  <g transform="translate(40, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1763</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Treaty of Paris</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Proclamation Line</text>
  </g>
  
  <g transform="translate(140, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1765</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Stamp Act</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Colonial boycotts</text>
  </g>

  <g transform="translate(240, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1773</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Tea Party</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Boston Tea Party</text>
  </g>

  <g transform="translate(340, 0)">
    <circle cx="0" cy="80" r="4" fill="#ef4444" />
    <text x="0" y="65" fill="#ef4444" font-size="8" text-anchor="middle">1774</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Intolerable Acts</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">First Continental Cong.</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q3.1.1',
                    'unitId': 3,
                    'text': 'What was the primary geopolitical outcome of the French and Indian War (1754–1763)?',
                    'options': [
                        'France acquired all territory west of the Appalachian Mountains.',
                        'France was entirely expelled from North America, leaving Britain in control.',
                        'Spain claimed ownership of all New England colonies.',
                        'The British agreed to limit their colonies to the Atlantic coast.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The Treaty of Paris in 1763 dramatically shifted colonial boundaries.',
                    'explanation': 'British victory in the war forced France to cede its major territories in North America to Britain and Spain under the 1763 Treaty of Paris.'
                },
                {
                    'id': 'q3.1.2',
                    'unitId': 3,
                    'text': 'How did the Proclamation of 1763 affect the relationship between Great Britain and the American colonies?',
                    'options': [
                        'It pleased colonists by opening new fertile western lands for farming.',
                        'It angered colonists by forbidding settlement west of the Appalachian Mountains.',
                        'It forced colonists to trade exclusively with French merchants in Canada.',
                        'It established absolute tax exemptions for all colonial merchants.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The British drew a line on the map to prevent conflicts with Native Americans.',
                    'explanation': 'To prevent costly conflicts with Native groups, Britain forbade colonists from moving west of the Appalachians, which colonists viewed as tyranny.'
                },
                {
                    'id': 'q3.1.3',
                    'unitId': 3,
                    'text': 'What argument did colonists make in opposing direct taxes like the Stamp Act (1765)?',
                    'options': [
                        'They argued that only their local colonial assemblies had the right to tax them.',
                        'They insisted that all taxes should be paid in silver rather than paper currency.',
                        'They demanded the immediate abolition of the British monarchy.',
                        'They asserted that the King had no right to defend the colonies.'
                    ],
                    'correctIndex': 0,
                    'hint': 'The slogan was: \'No taxation without representation.\'',
                    'explanation': 'Since the colonies had no elected representatives in the British Parliament, they argued that Parliament had no legal right to levy direct taxes on them.'
                },
                {
                    'id': 'q3.1.4',
                    'unitId': 3,
                    'text': 'The Intolerable Acts (1774) were passed by the British Parliament primarily to achieve what goal?',
                    'options': [
                        'Force Pennsylvania to pay taxes on grain.',
                        'Punish Boston and Massachusetts for the Boston Tea Party.',
                        'Establish the Anglican Church as the official religion of New York.',
                        'Formally declare war on the French and Spanish empires.'
                    ],
                    'correctIndex': 1,
                    'hint': 'These coercive acts closed Boston Harbor and suspended the colony\'s town meetings.',
                    'explanation': 'The Coercive (Intolerable) Acts aimed to isolate and punish Boston by closing its harbor and restricting self-rule until the destroyed tea was paid for.'
                },
                {
                    'id': 'q3.1.5',
                    'unitId': 3,
                    'text': 'Which of the following was a result of the Stamp Act Congress and subsequent boycotts?',
                    'options': [
                        'Parliament immediately declared war on the colonies.',
                        'Parliament repealed the Stamp Act but asserted its right to tax the colonies in the Declaratory Act.',
                        'The colonies formed the US Constitution.',
                        'The British Crown withdrew the Royal Navy from Boston.'
                    ],
                    'correctIndex': 1,
                    'hint': 'While Parliament backed down on the Stamp Act, they passed another act affirming their authority.',
                    'explanation': 'Colonial boycotts of British goods forced Parliament to repeal the Stamp Act, but it simultaneously passed the Declaratory Act to affirm its supreme authority.'
                }
            ]
        },
        {
            'id': '3.2',
            'title': 'The Revolutionary War, Philosophical Foundations, and Democratic Ideals',
            'description': 'Explore the Enlightenment roots of the American Revolution, Thomas Paine\'s Common Sense, and the military factors that led to American victory.',
            'youtubeId': 'yX8t9o9V9v0',
            'article': '''# The American Revolution and Democratic Ideals

The decision of the colonies to break away from Great Britain was rooted in European Enlightenment philosophy, popularized by radical pamphlets and crystallized in the Declaration of Independence.

## Philosophical Foundations of the Revolution
1. **John Locke (Natural Rights)**: Locke argued that all humans possess natural rights to *life, liberty, and property*, and that government is a social contract. If a government violates these rights, citizens have the right to alter or abolish it.
2. **Thomas Paine (Common Sense)**: In January 1776, Paine published <vocab term="Common Sense" definition="A pamphlet written by Thomas Paine in 1776 that used plain language to argue that the colonies should declare independence from Great Britain.">Common Sense</vocab>. He argued that it was simple common sense that an island (Britain) should not rule a continent (America) and that monarchy was an unnatural, corrupt form of government. The pamphlet turned public opinion toward independence.
3. **The Declaration of Independence (1776)**: Written by Thomas Jefferson, it adopted Locke\'s ideas, declaring that "all men are created equal" with inalienable rights to "Life, Liberty, and the pursuit of Happiness."

## Why the Americans Won
Despite facing the world\'s most powerful military, the Patriots succeeded due to:
- **Home-field Advantage**: Fighting on their own soil.
- **Ideological Commitment**: Strong motivation for self-governance.
- **Foreign Assistance**: The decisive French Alliance secured after the **Battle of Saratoga (1777)**, providing troops, naval support, and funding.
- **Military Leadership**: George Washington\'s leadership in keeping the Continental Army intact.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- American Victory Factors Block -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="30" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Key Factors in American Victory</text>
  
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="90" height="60" rx="4" fill="rgba(32,201,151,0.1)" stroke="#20c997" stroke-width="1" />
    <text x="45" y="25" fill="#20c997" font-size="8" text-anchor="middle" font-weight="bold">Alliance</text>
    <text x="45" y="40" fill="#ffffff" font-size="7" text-anchor="middle">French Navy & Cash</text>
  </g>
  
  <g transform="translate(155, 50)">
    <rect x="0" y="0" width="90" height="60" rx="4" fill="rgba(129,140,248,0.1)" stroke="#818cf8" stroke-width="1" />
    <text x="45" y="25" fill="#818cf8" font-size="8" text-anchor="middle" font-weight="bold">Strategy</text>
    <text x="45" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Washington's Survival</text>
  </g>

  <g transform="translate(270, 50)">
    <rect x="0" y="0" width="90" height="60" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" stroke-width="1" />
    <text x="45" y="25" fill="#fbbf24" font-size="8" text-anchor="middle" font-weight="bold">Ideology</text>
    <text x="45" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Common Sense & Liberty</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q3.2.1',
                    'unitId': 3,
                    'text': 'Thomas Paine\'s Common Sense was highly influential in 1776 because it did which of the following?',
                    'options': [
                        'Proposed a draft of the new United States Constitution.',
                        'Used plain language to argue that monarchy was corrupt and the colonies should be independent.',
                        'Advocated for an immediate alliance with the French Empire.',
                        'Exposed secret letters between George Washington and King George III.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The pamphlet made radical democratic ideas accessible to common citizens.',
                    'explanation': 'Common Sense presented a clear, simple case for independence from Britain, shifting public sentiment toward separation rather than reconciliation.'
                },
                {
                    'id': 'q3.2.2',
                    'unitId': 3,
                    'text': 'The philosophical arguments in the Declaration of Independence relied heavily on the ideas of which Enlightenment thinker?',
                    'options': [
                        'Thomas Hobbes',
                        'John Locke',
                        'Jean-Jacques Rousseau',
                        'Baron de Montesquieu'
                    ],
                    'correctIndex': 1,
                    'hint': 'This philosopher authored the Second Treatise of Government and defined \'Natural Rights.\'',
                    'explanation': 'Thomas Jefferson adapted John Locke\'s concept of natural rights (life, liberty, and property) and the social contract in the Declaration.'
                },
                {
                    'id': 'q3.2.3',
                    'unitId': 3,
                    'text': 'Which military battle is considered the turning point of the Revolutionary War because it secured a formal alliance with France?',
                    'options': [
                        'The Battle of Bunker Hill',
                        'The Battle of Yorktown',
                        'The Battle of Saratoga',
                        'The Battle of Trenton'
                    ],
                    'correctIndex': 2,
                    'hint': 'This 1777 victory in upstate New York convinced the French that the Americans could actually win.',
                    'explanation': 'American victory at Saratoga demonstrated military capability, prompting France to sign a treaty of alliance in 1778, providing vital naval and financial support.'
                },
                {
                    'id': 'q3.2.4',
                    'unitId': 3,
                    'text': 'All of the following were major factors that contributed to the American victory in the Revolutionary War EXCEPT:',
                    'options': [
                        'Decisive naval and military aid from France.',
                        'George Washington\'s defensive strategy of keeping the army intact.',
                        'The overwhelming industrial manufacturing capacity of the colonies.',
                        'Patriot ideological commitment and home-field advantage.'
                    ],
                    'correctIndex': 2,
                    'hint': 'The colonies had almost no factories or industrial centers compared to Great Britain.',
                    'explanation': 'The colonies were largely agricultural and lacked heavy manufacturing, relying on imports and French aid to supply gunpowder and weapons.'
                },
                {
                    'id': 'q3.2.5',
                    'unitId': 3,
                    'text': 'The final major battle of the Revolutionary War, resulting in the surrender of British General Cornwallis, occurred where?',
                    'options': [
                        'Saratoga',
                        'Yorktown',
                        'Lexington',
                        'Valley Forge'
                    ],
                    'correctIndex': 1,
                    'hint': 'This Virginia peninsula was surrounded by French ships and Washington\'s troops in 1781.',
                    'explanation': 'At the Battle of Yorktown (1781), the French Navy blocked escape by sea while American and French troops laid siege to Cornwallis, forcing the final British surrender.'
                }
            ]
        },
        {
            'id': '3.3',
            'title': 'The Articles of Confederation, Constitutional Convention, and the New Republic',
            'description': 'Analyze the weaknesses of the Articles of Confederation, the compromises of the Constitutional Convention, and the debates between Federalists and Anti-Federalists.',
            'youtubeId': 'v2e_mU6U5y8',
            'article': '''# The Constitution and the New Republic

Following independence, the United States struggled to create a functional government, leading to the replacement of the weak Articles of Confederation with the US Constitution.

## The Weaknesses of the Articles of Confederation
The **Articles of Confederation** established a weak central government to avoid tyranny:
- *No power to tax*: The federal government had to ask states for money.
- *No executive branch*: No president to enforce laws.
- *Unanimous vote required*: All 13 states had to approve any amendment.
- **Shays\' Rebellion (1786)**: A revolt of indebted farmers in Massachusetts. The weak national government could not raise an army to stop it, convincing elites that the Articles had to be revised.

## The Constitutional Convention (1787)
Delegates met in Philadelphia and chose to draft a completely new **Constitution**, resolving major disputes through compromises:
1. **The Great Compromise**: Created a bicameral legislature. The House of Representatives based seats on population (pleasing large states), while the Senate gave two seats to every state (pleasing small states).
2. **Three-Fifths Compromise**: Declared that five enslaved individuals counted as three free persons for taxation and representation.
3. **Federalism and Separation of Powers**: Divided power between state and national governments, and split federal power into three branches (Executive, Legislative, Judicial) with checks and balances.

## The Ratification Debate
- **Federalists (Hamilton, Madison)**: Favored ratification. They wrote the **Federalist Papers** to argue that a large republic protected individual liberty.
- **Anti-Federalists (Jefferson, Henry)**: Opposed ratification. They feared a strong central government would mimic British tyranny and demanded a **Bill of Rights** to protect individual liberties.

<div class="flex justify-center my-8">
<svg width="420" height="150" viewBox="0 0 420 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Checks and Balances diagram -->
  <rect x="10" y="45" width="100" height="60" rx="4" fill="rgba(32,201,151,0.1)" stroke="#20c997" />
  <text x="60" y="80" fill="#20c997" font-size="8" text-anchor="middle" font-weight="bold">Congress</text>
  
  <rect x="160" y="45" width="100" height="60" rx="4" fill="rgba(129,140,248,0.1)" stroke="#818cf8" />
  <text x="210" y="80" fill="#818cf8" font-size="8" text-anchor="middle" font-weight="bold">President</text>

  <rect x="310" y="45" width="100" height="60" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" />
  <text x="360" y="80" fill="#fbbf24" font-size="8" text-anchor="middle" font-weight="bold">Supreme Court</text>

  <!-- Interactive Arrows showing checks -->
  <line x1="110" y1="65" x2="160" y2="65" stroke="#ffffff" stroke-width="1.5" marker-end="url(#arrow-phys)" />
  <text x="135" y="60" fill="#ffffff" font-size="6" text-anchor="middle">Pass laws</text>

  <line x1="160" y1="85" x2="110" y2="85" stroke="#ffffff" stroke-width="1.5" marker-end="url(#arrow-phys)" />
  <text x="135" y="95" fill="#ffffff" font-size="6" text-anchor="middle">Veto laws</text>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q3.3.1',
                    'unitId': 3,
                    'text': 'What major rebellion of indebted farmers in Massachusetts in 1786 exposed the fatal weaknesses of the Articles of Confederation?',
                    'options': [
                        'Bacon\'s Rebellion',
                        'Shays\' Rebellion',
                        'The Whiskey Rebellion',
                        'Stono Rebellion'
                    ],
                    'correctIndex': 1,
                    'hint': 'This rebellion was led by a former Revolutionary War captain who shut down local courts.',
                    'explanation': 'Shays\' Rebellion showed that the national government under the Articles could not maintain order or raise a military force, leading to calls for a stronger central government.'
                },
                {
                    'id': 'q3.3.2',
                    'unitId': 3,
                    'text': 'The Great Compromise at the 1787 Constitutional Convention resolved a major conflict over representation by doing which of the following?',
                    'options': [
                        'Abolishing the executive branch entirely.',
                        'Declaring all states would have representation based solely on wealth.',
                        'Creating a bicameral legislature with one house based on population and one with equal representation.',
                        'Allowing Southern states to count all enslaved people for representation.'
                    ],
                    'correctIndex': 2,
                    'hint': 'This compromise merged the Virginia (large state) and New Jersey (small state) plans.',
                    'explanation': 'The Great Compromise established the House (based on population) and the Senate (two members per state), balancing power between populous and small states.'
                },
                {
                    'id': 'q3.3.3',
                    'unitId': 3,
                    'text': 'What was the primary argument of the Anti-Federalists against the ratification of the new Constitution?',
                    'options': [
                        'They believed the executive branch should have absolute monarchy powers.',
                        'They argued that it lacked a Bill of Rights to protect individual liberties from a strong central government.',
                        'They opposed any federal power to collect import taxes.',
                        'They wanted to return to British rule.'
                    ],
                    'correctIndex': 1,
                    'hint': 'They feared the new federal government would become as oppressive as Parliament.',
                    'explanation': 'Anti-Federalists feared the unchecked power of the federal government, agreeing to support ratification only after Federalists promised to add a Bill of Rights.'
                },
                {
                    'id': 'q3.3.4',
                    'unitId': 3,
                    'text': 'The Three-Fifths Compromise resolved which contentious issue at the Constitutional Convention?',
                    'options': [
                        'The percentage of federal tax revenue allocated to state infrastructure.',
                        'The process of electing the President via the Electoral College.',
                        'How enslaved populations would be counted for representation and taxation.',
                        'The length of term limits for federal judges.'
                    ],
                    'correctIndex': 2,
                    'hint': 'Southern states wanted to count enslaved people to gain representation in the House, while Northern states opposed it.',
                    'explanation': 'The Three-Fifths Compromise counted 3 out of every 5 enslaved people, giving Southern states disproportionate political representation in Congress.'
                },
                {
                    'id': 'q3.3.5',
                    'unitId': 3,
                    'text': 'What was the purpose of the Federalist Papers, authored by Madison, Hamilton, and Jay?',
                    'options': [
                        'To declare immediate war on Native American tribes in the Ohio Valley.',
                        'To persuade the public and state legislatures to ratify the new Constitution.',
                        'To outline a plan to buy the Louisiana Territory from France.',
                        'To critique George Washington\'s performance as President.'
                    ],
                    'correctIndex': 1,
                    'hint': 'These 85 essays were published anonymously under the pen name \'Publius.\'',
                    'explanation': 'The Federalist Papers explained the design and necessity of the new Constitution, arguing that its check-and-balance systems would protect liberty.'
                }
            ]
        }
    ]
}

data.append(unit2)
data.append(unit3)
