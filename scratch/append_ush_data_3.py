# -*- coding: utf-8 -*-
import sys
sys.path.append("/Users/yashpatil/AP Lab/scratch")
from append_ush_data_2 import data, OUTPUT_PATH

unit6 = {
    'id': 6,
    'title': 'Period 6: 1865–1898',
    'masteryWeight': '13%',
    'topics': [
        {
            'id': '6.1',
            'title': 'The Rise of Industrial Capitalism, Gilded Age Corporate Consolidation, and Labor',
            'description': 'Examine the Gilded Age industrial boom, corporate consolidation techniques (monopolies), and the rise of labor unions.',
            'youtubeId': 'r6tRp-zRUas',
            'article': '''# Gilded Age Industrial Capitalism and Labor

Following the Civil War, the United States entered the **Gilded Age**—a period characterized by rapid industrialization, massive wealth accumulation, corporate consolidation, and intense labor conflict.

## Rise of Corporate Consolidation
Industrialists used new business models to dominate their markets:
- **Horizontal Integration**: Buying out competitors in the same industry (e.g., John D. Rockefeller\'s Standard Oil).
- **Vertical Integration**: Controlling every phase of production, from raw materials to final transportation (e.g., Andrew Carnegie\'s Carnegie Steel).
- **Social Darwinism**: The belief that natural selection applied to human society, justifying the extreme wealth gap by claiming that captains of industry were the "fittest" individuals.
- **Gospel of Wealth**: Carnegie\'s essay arguing that the wealthy had a moral duty to use their fortunes to fund public institutions (libraries, universities) to benefit society.

## The Labor Movement
As corporate power grew, factory workers faced dangerous conditions, long hours, and low wages. They organized the first national labor unions:
1. **Knights of Labor (1869)**: An open union that welcomed skilled, unskilled, female, and black workers. They collapsed after being falsely associated with the violent **Haymarket Square Riot (1886)**.
2. **American Federation of Labor (AFL, 1886)**: Led by **Samuel Gompers**, a union open only to skilled white males, focusing on practical "bread-and-butter" issues: higher wages, shorter hours, and safer working conditions.

<div class="flex justify-center my-8">
<svg width="420" height="150" viewBox="0 0 420 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Integration Types Diagram -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  
  <!-- Horizontal -->
  <g transform="translate(30, 40)">
    <rect x="0" y="0" width="160" height="70" rx="4" fill="rgba(32,201,151,0.1)" stroke="#20c997" />
    <text x="80" y="25" fill="#20c997" font-size="9" font-weight="bold" text-anchor="middle">Horizontal Integration</text>
    <text x="80" y="45" fill="#ffffff" font-size="7" text-anchor="middle">Buy competitors in same market</text>
    <text x="80" y="55" fill="#a1a1aa" font-size="7" text-anchor="middle">Standard Oil / Monopoly</text>
  </g>
  
  <!-- Vertical -->
  <g transform="translate(210, 40)">
    <rect x="0" y="0" width="160" height="70" rx="4" fill="rgba(129,140,248,0.1)" stroke="#818cf8" />
    <text x="80" y="25" fill="#818cf8" font-size="9" font-weight="bold" text-anchor="middle">Vertical Integration</text>
    <text x="80" y="45" fill="#ffffff" font-size="7" text-anchor="middle">Control entire supply chain</text>
    <text x="80" y="55" fill="#a1a1aa" font-size="7" text-anchor="middle">Carnegie Steel (Mines to Rails)</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q6.1.1',
                    'unitId': 6,
                    'text': 'Which business strategy is best defined as acquiring control over all stages of production from raw materials to transport?',
                    'options': [
                        'Horizontal Integration',
                        'Vertical Integration',
                        'Laissez-faire Capitalism',
                        'Deconstruction'
                    ],
                    'correctIndex': 1,
                    'hint': 'Andrew Carnegie used this strategy to control coal mines, iron ore fields, and railroads for his steel plants.',
                    'explanation': 'Vertical integration involves owning all parts of the manufacturing process, reducing costs and eliminating middleman fees.'
                },
                {
                    'id': 'q6.1.2',
                    'unitId': 6,
                    'text': 'The ideology of Social Darwinism was used during the Gilded Age to justify which social condition?',
                    'options': [
                        'The passage of child labor laws.',
                        'The extreme inequality of wealth between industrialists and workers.',
                        'The creation of national parks.',
                        'The creation of public university systems.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This theory adapted Charles Darwin\'s survival of the fittest to economic systems.',
                    'explanation': 'Social Darwinists argued that wealth accumulation was a sign of biological fitness, suggesting that government efforts to help the poor interfered with natural evolution.'
                },
                {
                    'id': 'q6.1.3',
                    'unitId': 6,
                    'text': 'Which Gilded Age labor union was open to all workers (including women, blacks, and unskilled labor) but collapsed after the Haymarket Square Riot?',
                    'options': [
                        'The American Federation of Labor (AFL)',
                        'The Knights of Labor',
                        'The Industrial Workers of the World (IWW)',
                        'The National Grange'
                    ],
                    'correctIndex': 1,
                    'hint': 'They were led by Terence Powderly and advocated for broad social reforms.',
                    'explanation': 'The Knights of Labor grew rapidly due to their open policy, but public backlash after the Haymarket Riot in 1886 associated them with anarchism, causing their demise.'
                },
                {
                    'id': 'q6.1.4',
                    'unitId': 6,
                    'text': 'In his Gospell of Wealth essay, Andrew Carnegie argued that wealthy individuals had a moral duty to perform which action?',
                    'options': [
                        'Pay their factory workers double the market wage rate.',
                        'Use their surplus wealth to fund philanthropic institutions like libraries and colleges.',
                        'Hoard their wealth to protect their family lineage.',
                        'Lobby the federal government to establish a welfare program.'
                    ],
                    'correctIndex': 1,
                    'hint': 'He believed that giving direct cash handouts was harmful to the poor.',
                    'explanation': 'Carnegie argued that the wealthy should act as trustees for their community, building permanent institutions that would help citizens help themselves.'
                },
                {
                    'id': 'q6.1.5',
                    'unitId': 6,
                    'text': 'The American Federation of Labor (AFL), led by Samuel Gompers, focused primarily on which goals?',
                    'options': [
                        'Replacing capitalism with state-owned cooperative worker factories.',
                        'Practical \'bread-and-butter\' issues like higher wages and shorter hours for skilled workers.',
                        'Advocating for immediate women\'s suffrage and prohibition.',
                        'Unifying all global industrial workers into a single worldwide union.'
                    ],
                    'correctIndex': 1,
                    'hint': 'They avoided radical political ideologies, opting instead for collective bargaining.',
                    'explanation': 'The AFL focused on skilled craft unions, leveraging their specialized labor to secure tangible improvements in wages, safety, and hours.'
                }
            ]
        },
        {
            'id': '6.2',
            'title': 'Immigration, Urbanization, nativist Responses, and the Gilded Age Culture',
            'description': 'Examine the wave of "New Immigration", the rapid growth of industrial cities, and the nativist reactions like the Chinese Exclusion Act.',
            'youtubeId': 'r6tRp-zRUas',
            'article': '''# Gilded Age Immigration, Cities, and nativism

As factories multiplied, American cities grew exponentially, fueled by a massive influx of immigrants. This rapid demographic change transformed urban culture and sparked a major nativist backlash.

## The "New Immigration"
Prior to 1880, most immigrants came from Northern and Western Europe (Britain, Germany, Ireland). In the Gilded Age, a wave of **"New Immigrants"** arrived:
- **Origin**: Southern and Eastern Europe (Italy, Poland, Russia) and Asia (China).
- **Profile**: Primarily Catholic, Jewish, or Buddhist, often poor and non-English speaking, settling in ethnic enclaves ("Little Italy", "Chinatown") in industrial cities.

## Urbanization and Reform
Cities grew faster than infrastructure could handle, leading to overcrowding, disease, and poor sanitation in **tenement houses**.
- **Political Machines**: Organizations (like Tammany Hall in NYC, run by **Boss Tweed**) controlled city politics. They provided food and jobs to new immigrants in exchange for votes, pocketing millions in taxpayer money through graft.
- **The Settlement House Movement**: Social reformers built houses in poor neighborhoods. **Jane Addams** founded **Hull House** in Chicago, providing English classes, childcare, and basic services to immigrant families.

## Nativism and Exclusion
The influx of diverse immigrants triggered a nativist reaction:
- **Chinese Exclusion Act (1882)**: The first federal law to ban immigration based on nationality, passed due to racial prejudice and fear of job competition from Chinese workers on railroads.
- **American Protective Association**: A nativist group advocating for literacy tests and voting bans on Catholic immigrants.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Push and Pull Factors sketch -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">"New Immigration" Factors</text>
  
  <g transform="translate(40, 45)">
    <rect x="0" y="0" width="140" height="70" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" />
    <text x="70" y="20" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Push Factors</text>
    <text x="70" y="40" fill="#ffffff" font-size="8" text-anchor="middle">Religious Persecution</text>
    <text x="70" y="55" fill="#ffffff" font-size="8" text-anchor="middle">Poverty / War in Europe</text>
  </g>
  
  <g transform="translate(220, 45)">
    <rect x="0" y="0" width="140" height="70" rx="4" fill="rgba(34,197,94,0.1)" stroke="#22c55e" />
    <text x="70" y="20" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Pull Factors</text>
    <text x="70" y="40" fill="#ffffff" font-size="8" text-anchor="middle">Industrial Factory Jobs</text>
    <text x="70" y="55" fill="#ffffff" font-size="8" text-anchor="middle">Religious / Political Hope</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q6.2.1',
                    'unitId': 6,
                    'text': 'How did the \'New Immigrants\' of the Gilded Age differ from the \'Old Immigrants\' of the antebellum era?',
                    'options': [
                        'They came primarily from Northern Europe and spoke fluent English.',
                        'They came primarily from Southern and Eastern Europe, and were often Catholic or Jewish.',
                        'They immediately bought large commercial farms in the Great Plains.',
                        'They were sponsored entirely by the British Crown.'
                    ],
                    'correctIndex': 1,
                    'hint': 'They arrived from places like Italy, Poland, and Russia in search of industrial jobs.',
                    'explanation': 'New Immigrants arrived from Southern and Eastern Europe, bringing diverse cultural backgrounds that contrasted with older Anglo-Protestant immigration.'
                },
                {
                    'id': 'q6.2.2',
                    'unitId': 6,
                    'text': 'Which of the following was a primary function of Gilded Age political machines like Tammany Hall?',
                    'options': [
                        'Advocating for civil rights legislation in Congress.',
                        'Providing basic aid and jobs to immigrants in exchange for political votes.',
                        'Building public housing complexes without any tax money.',
                        'Exposing government corruption through investigative journalism.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Boss Tweed used this exchange of services to stay in power and embezzle city funds.',
                    'explanation': 'Political machines built power bases by helping immigrants find housing and employment, securing voter loyalty in municipal elections.'
                },
                {
                    'id': 'q6.2.3',
                    'unitId': 6,
                    'text': 'Jane Addams founded Hull House in Chicago in 1889 to accomplish which social reform?',
                    'options': [
                        'To lobby Congress to pass anti-monopoly laws.',
                        'To provide education, English classes, and social services to immigrant families.',
                        'To organize strikes for railroad workers.',
                        'To campaign for the election of Democratic politicians.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was a leading institution in the Settlement House Movement.',
                    'explanation': 'Hull House was a settlement house where educated middle-class reformers lived and worked to help immigrants integrate into American society.'
                },
                {
                    'id': 'q6.2.4',
                    'unitId': 6,
                    'text': 'What was the significance of the Chinese Exclusion Act of 1882?',
                    'options': [
                        'It banned Chinese workers from farming in California but allowed railroad labor.',
                        'It was the first federal law to ban immigration of a specific nationality.',
                        'It forced all Chinese residents in the US to return to China.',
                        'It granted instant citizenship to Chinese railroad workers.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Nativists blamed Chinese laborers for depressing wages in western states.',
                    'explanation': 'Passed in 1882, the Chinese Exclusion Act halted Chinese labor immigration for ten years, reflecting intense racial and economic nativism.'
                },
                {
                    'id': 'q6.2.5',
                    'unitId': 6,
                    'text': 'Overcrowded, poorly ventilated apartment buildings built to house Gilded Age factory workers were known as what?',
                    'options': [
                        'Settlement houses',
                        'Tenement houses',
                        'Dormitories',
                        'Homesteads'
                    ],
                    'correctIndex': 1,
                    'hint': 'These multi-family buildings were notorious for poor sanitation and frequent fires.',
                    'explanation': 'Tenements were cramped, unsafe urban apartments designed to pack as many working-class families as possible into small urban spaces.'
                }
            ]
        },
        {
            'id': '6.3',
            'title': 'The Agrarian Movement, Populism, and the Battle of the Standards',
            'description': 'Examine the struggles of Gilded Age farmers, the rise of the Populist Party, and the election of 1896 over bimetallism.',
            'youtubeId': 'r6tRp-zRUas',
            'article': '''# The Populist Movement and the Election of 1896

While industrialists grew wealthy, Gilded Age farmers struggled with falling crop prices, high railroad shipping rates, and heavy debts. They organized to form a powerful third-party political movement.

## Farmers\' Grievances
Farmers faced an economic squeeze:
- **Mechanization**: New machinery boosted crop yields, but caused overproduction, causing crop prices to crash.
- **Monopoly Shipping Rates**: Railroads charged exorbitant rates to transport agricultural goods, knowing farmers had no other shipping options.
- **Deflation**: The gold standard restricted the money supply, making it harder for indebted farmers to pay off loans.

## The Populist Party
In 1892, farmers and labor leaders formed the **People\'s (Populist) Party**, publishing their **Omaha Platform**:
- **Bimetallism**: Unlimited coinage of silver to inflate the money supply.
- **Direct election of US Senators** (previously chosen by state legislatures).
- **Graduated income tax** (wealthier citizens pay higher rates).
- **Government ownership** of railroads, telegraphs, and telephones.

## The Battle of the Standards (1896)
The Populists merged with the Democrats in 1896 to back **William Jennings Bryan**, who delivered his famous **"Cross of Gold" speech**, declaring that humanity should not be crucified on a cross of gold. Bryan lost the election to Republican **William McKinley**, who was backed by big business. This signaled the decline of the Populists but many of their ideas were later adopted during the Progressive Era.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Populist Platform Keys -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Omaha Platform (Populist Goals)</text>
  
  <g transform="translate(30, 40)">
    <rect x="0" y="0" width="100" height="35" rx="4" fill="rgba(20,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="20" fill="#20c997" font-size="8" text-anchor="middle">Silver Standard</text>
  </g>
  
  <g transform="translate(150, 40)">
    <rect x="0" y="0" width="100" height="35" rx="4" fill="rgba(20,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="20" fill="#20c997" font-size="8" text-anchor="middle">Own Railroads</text>
  </g>

  <g transform="translate(270, 40)">
    <rect x="0" y="0" width="100" height="35" rx="4" fill="rgba(20,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="20" fill="#20c997" font-size="8" text-anchor="middle">Income Tax</text>
  </g>

  <g transform="translate(90, 85)">
    <rect x="0" y="0" width="100" height="35" rx="4" fill="rgba(20,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="20" fill="#20c997" font-size="8" text-anchor="middle">Direct Senators</text>
  </g>

  <g transform="translate(210, 85)">
    <rect x="0" y="0" width="100" height="35" rx="4" fill="rgba(20,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="20" fill="#20c997" font-size="8" text-anchor="middle">8-Hour Workday</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q6.3.1',
                    'unitId': 6,
                    'text': 'What was the primary economic motivation for Gilded Age farmers advocating for the free coinage of silver?',
                    'options': [
                        'To reduce their dependency on international trade.',
                        'To cause inflation, thereby raising crop prices and making debts easier to pay.',
                        'To shut down the federal gold mines in California.',
                        'To lower the wages of foreign factory workers.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Silver coinage would increase the money supply and counter deflation.',
                    'explanation': 'Free silver (bimetallism) would expand the money supply, causing moderate inflation that would elevate crop prices and ease debt burdens.'
                },
                {
                    'id': 'q6.3.2',
                    'unitId': 6,
                    'text': 'The People\'s (Populist) Party Omaha Platform of 1892 called for all of the following reform measures EXCEPT:',
                    'options': [
                        'Government ownership of railroads and telegraph lines.',
                        'The direct election of United States Senators by popular vote.',
                        'A graduated income tax system.',
                        'The deregulation and expansion of private monopoly trusts.'
                    ],
                    'correctIndex': 3,
                    'hint': 'The Populists represented small farmers opposing giant corporate trusts.',
                    'explanation': 'Populists strongly opposed corporate monopolies, calling instead for federal regulation or direct ownership of key transportation and communication networks.'
                },
                {
                    'id': 'q6.3.3',
                    'unitId': 6,
                    'text': 'William Jennings Bryan\'s famous \'Cross of Gold\' speech at the 1896 Democratic National Convention was a defense of which position?',
                    'options': [
                        'Remaining strictly on the gold standard.',
                        'Bimetallism and the free coinage of silver.',
                        'The immediate colonization of the Philippines.',
                        'Establishing the income tax as the primary federal revenue source.'
                    ],
                    'correctIndex': 1,
                    'hint': 'He declared: \'You shall not press down upon the brow of labor this crown of thorns; you shall not crucify mankind upon a cross of gold.\'',
                    'explanation': 'Bryan defended the silver standard (bimetallism), arguing that a gold-only standard favored eastern bankers at the expense of working people.'
                },
                {
                    'id': 'q6.3.4',
                    'unitId': 6,
                    'text': 'What factor directly contributed to Gilded Age farmers\' crop prices declining despite increased productivity?',
                    'options': [
                        'Agricultural overproduction resulting from new machinery and western farming.',
                        'A sudden decline in the US population.',
                        'The abolition of all agricultural import tariffs.',
                        'The refusal of railroads to ship grain to eastern cities.'
                    ],
                    'correctIndex': 0,
                    'hint': 'When supply dramatically increases while demand is steady, prices drop.',
                    'explanation': 'New machinery like mechanical reapers boosted yields, but the resulting overproduction flooded the market, causing prices to fall.'
                },
                {
                    'id': 'q6.3.5',
                    'unitId': 6,
                    'text': 'Which political party won the election of 1896, securing the gold standard and marking the decline of the Populist movement?',
                    'options': [
                        'The Democrats',
                        'The Republicans',
                        'The Whigs',
                        'The Federalists'
                    ],
                    'correctIndex': 1,
                    'hint': 'Their candidate, William McKinley, ran a \'front porch\' campaign.',
                    'explanation': 'William McKinley and the Republicans won the presidency, representing urban, industrial interests committed to the gold standard, bringing an end to the Populist surge.'
                }
            ]
        }
    ]
}

unit7 = {
    'id': 7,
    'title': 'Period 7: 1890–1945',
    'masteryWeight': '17%',
    'topics': [
        {
            'id': '7.1',
            'title': 'The Progressive Era, Muckrakers, and Progressive Constitutional Reforms',
            'description': 'Examine the muckraking journalists, social reforms, and the four landmark Progressive Amendments.',
            'youtubeId': 'F7flSW1PGsA',
            'article': '''# The Progressive Era and Reform

In response to Gilded Age corruption and industrial excesses, the **Progressive Era** (1890–1920) introduced a wave of reform to clean up politics and improve society.

## The Muckrakers
Progressivism was driven by **muckrakers**—investigative journalists who exposed societal ills:
- **Ida Tarbell**: Wrote *The History of the Standard Oil Company*, exposing Rockefeller\'s ruthless monopoly tactics.
- **Upton Sinclair**: Wrote *The Jungle*, exposing the horrific conditions in Chicago meatpacking plants. This led President Theodore Roosevelt to pass the **Meat Inspection Act** and the **Pure Food and Drug Act (1906)**.
- **Jacob Riis**: Photographed urban poverty in *How the Other Half Lives*, showing tenement misery.

## Progressive Constitutional Amendments
The era produced four constitutional amendments that reshaped the nation:
- **16th Amendment (1913)**: Established a federal income tax.
- **17th Amendment (1913)**: Allowed the direct election of US Senators.
- **18th Amendment (1919)**: Banned the sale and manufacturing of alcohol (**Prohibition**).
- **19th Amendment (1920)**: Granted women the right to vote (**Women\'s Suffrage**), following decades of campaigning by leaders like Alice Paul and Carrie Chapman Catt.

<div class="flex justify-center my-8">
<table class="w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25">
  <thead>
    <tr class="bg-white/5 text-white font-mono uppercase">
      <th class="p-2 border border-white/10">Amendment</th>
      <th class="p-2 border border-white/10">Reform Focus</th>
      <th class="p-2 border border-white/10">Intended Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-yellow-400">16th</td>
      <td class="p-2 border border-white/10">Federal Income Tax</td>
      <td class="p-2 border border-white/10">Reduce wealth gap; fund services</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-cyan-400">17th</td>
      <td class="p-2 border border-white/10">Direct Election of Senators</td>
      <td class="p-2 border border-white/10">End corporate bribery in legislatures</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-indigo-400">18th</td>
      <td class="p-2 border border-white/10">Prohibition of Alcohol</td>
      <td class="p-2 border border-white/10">Reduce domestic violence and crime</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-emerald-400">19th</td>
      <td class="p-2 border border-white/10">Women\'s Suffrage</td>
      <td class="p-2 border border-white/10">Expand democratic participation</td>
    </tr>
  </tbody>
</table>
</div>
''',
            'questions': [
                {
                    'id': 'q7.1.1',
                    'unitId': 7,
                    'text': 'Which muckraking journalist authored The Jungle, leading to federal regulation of the food industry?',
                    'options': [
                        'Ida Tarbell',
                        'Upton Sinclair',
                        'Jacob Riis',
                        'Lincoln Steffens'
                    ],
                    'correctIndex': 1,
                    'hint': 'He set out to write a socialist critique of capitalism but ended up shocking the nation with meat production details.',
                    'explanation': 'Sinclair\'s depiction of unsanitary meat conditions disgusted the public and prompted Theodore Roosevelt to pass the Meat Inspection Act.'
                },
                {
                    'id': 'q7.1.2',
                    'unitId': 7,
                    'text': 'Which Progressive Amendment established the direct election of United States Senators by popular vote?',
                    'options': [
                        '16th Amendment',
                        '17th Amendment',
                        '18th Amendment',
                        '19th Amendment'
                    ],
                    'correctIndex': 1,
                    'hint': 'Previously, Senators were chosen by state legislatures, a process criticized for corporate corruption.',
                    'explanation': 'The 17th Amendment shifted senatorial election directly to voters, increasing democracy and reducing machine influence.'
                },
                {
                    'id': 'q7.1.3',
                    'unitId': 7,
                    'text': 'The 19th Amendment, ratified in 1920, was the culmination of decades of campaigning for which reform?',
                    'options': [
                        'The abolition of child labor.',
                        'Women\'s suffrage (the right to vote).',
                        'The direct election of the President.',
                        'The legal protection of labor unions.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This movement held the Seneca Falls Convention in 1848.',
                    'explanation': 'The 19th Amendment prohibited voting discrimination based on sex, granting American women the right to vote.'
                },
                {
                    'id': 'q7.1.4',
                    'unitId': 7,
                    'text': 'How did President Theodore Roosevelt respond to Upton Sinclair\'s book The Jungle?',
                    'options': [
                        'He banned the book and jailed Sinclair for treason.',
                        'He sent federal inspectors to Chicago and urged Congress to pass the Meat Inspection Act.',
                        'He ignored the book, calling it socialist propaganda.',
                        'He closed down all meat production facilities in the Midwest.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Roosevelt was a Progressive President who favored federal consumer protections.',
                    'explanation': 'Roosevelt verified Sinclair\'s findings and backed the Meat Inspection Act and the Pure Food and Drug Act of 1906.'
                },
                {
                    'id': 'q7.1.5',
                    'unitId': 7,
                    'text': 'What was the primary goal of the settlement house movement, led by reformers like Jane Addams?',
                    'options': [
                        'To build corporate office buildings in urban areas.',
                        'To assist poor and immigrant families in adapting to industrial cities.',
                        'To establish rural boarding schools for Native children.',
                        'To organize national protests for bimetallism.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Jane Addams founded Hull House in Chicago.',
                    'explanation': 'Settlement houses provided community centers in poor neighborhoods, offering education, daycare, and health services to immigrant residents.'
                }
            ]
        },
        {
            'id': '7.2',
            'title': 'The Great Depression, Franklin Roosevelt\'s New Deal, and the Welfare State',
            'description': 'Analyze the causes of the 1929 stock market crash, and the relief, recovery, and reform programs of the New Deal.',
            'youtubeId': 'TpfyY5LiWCw',
            'article': '''# The New Deal and the Welfare State

Following the **1929 Stock Market Crash**, the United States plunged into the **Great Depression**, the worst economic crisis in its history. In 1932, **Franklin D. Roosevelt (FDR)** was elected, launching the **New Deal** to reshape the economy.

## The Three R's of the New Deal
FDR\'s programs were structured around **Relief, Recovery, and Reform**:
1. **Relief**: Direct aid to unemployed citizens (e.g., **Civilian Conservation Corps (CCC)**, which hired young men for environmental projects).
2. **Recovery**: Rebuilding sectors of the economy (e.g., **Agricultural Adjustment Act (AAA)** to raise crop prices, and the **Tennessee Valley Authority (TVA)** to build dams).
3. **Reform**: Redesigning financial structures to prevent future depressions.

## Key Reform Programs
- **Social Security Act (1935)**: Established a federal safety net, providing old-age pensions, unemployment insurance, and aid to disabled citizens. This marked the birth of the modern **welfare state**.
- **Federal Deposit Insurance Corporation (FDIC)**: Insured bank deposits, restoring public confidence in banking systems.
- **Securities and Exchange Commission (SEC)**: Created to regulate stock markets and prevent speculative trading.

## The Realignment of the Democratic Party
The New Deal created the **New Deal Coalition** (southern whites, northern urban workers, immigrants, and black voters), making the Democratic Party the nation\'s dominant party for decades. While the New Deal did not fully end the Depression (which occurred during WWII), it permanently expanded the role of the federal government in the economy.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Three Rs Diagram -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">The 3 R's of the New Deal</text>
  
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" />
    <text x="50" y="25" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Relief</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Immediate Help / CCC</text>
  </g>
  
  <g transform="translate(150, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(251,191,36,0.1)" stroke="#fbbf24" />
    <text x="50" y="25" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">Recovery</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Rebuild Economy / AAA</text>
  </g>

  <g transform="translate(270, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(34,197,94,0.1)" stroke="#22c55e" />
    <text x="50" y="25" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Reform</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Fix Finance / FDIC</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q7.2.1',
                    'unitId': 7,
                    'text': 'The Social Security Act of 1935 was a landmark piece of New Deal legislation because it did which of the following?',
                    'options': [
                        'Abolished the private banking system entirely.',
                        'Established a federal safety net including retirement pensions and unemployment insurance.',
                        'Guaranteed every citizen a factory job in northern cities.',
                        'Provided immediate financial funding to European allies.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This act marked the formal creation of the modern American welfare state.',
                    'explanation': 'Social Security introduced federal pensions for retired workers, unemployment assistance, and aid to dependent families, expanding the government\'s social role.'
                },
                {
                    'id': 'q7.2.2',
                    'unitId': 7,
                    'text': 'What was the primary purpose of the Federal Deposit Insurance Corporation (FDIC), created under the New Deal?',
                    'options': [
                        'To regulate the sale of stocks and bonds.',
                        'To guarantee and insure bank deposits, restoring public confidence in banking.',
                        'To provide loans to industrial factory owners.',
                        'To distribute paper money directly to farmers.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Restoring confidence in banks was vital to stopping bank runs.',
                    'explanation': 'The FDIC insured individual bank deposits, ensuring depositors that their money was safe and reducing the risk of panics.'
                },
                {
                    'id': 'q7.2.3',
                    'unitId': 7,
                    'text': 'Which of the following describes the \'Reform\' element of Franklin Roosevelt\'s New Deal programs?',
                    'options': [
                        'Distributing food directly to breadlines.',
                        'Hiring young men to plant trees in national parks.',
                        'Passing permanent laws to regulate stock markets and banking systems to prevent future crashes.',
                        'Ending all federal taxation of agricultural lands.'
                    ],
                    'correctIndex': 2,
                    'hint': 'Think of financial institutions like the SEC and FDIC.',
                    'explanation': 'Reform measures sought to alter financial and economic systems (such as banking and stock markets) to prevent another systemic economic collapse.'
                },
                {
                    'id': 'q7.2.4',
                    'unitId': 7,
                    'text': 'How did the New Deal affect the role of the federal government in the United States?',
                    'options': [
                        'It severely restricted federal authority in favor of states\' rights.',
                        'It permanently expanded federal regulation and responsibility for the national economy and welfare.',
                        'It eliminated the presidency and created a legislative council.',
                        'It returned the economy to a strict gold standard.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The federal government took on responsibility for citizens\' economic security.',
                    'explanation': 'The New Deal fundamentally altered the relationship between citizens and the state, establishing the federal government as a regulatory and welfare authority.'
                },
                {
                    'id': 'q7.2.5',
                    'unitId': 7,
                    'text': 'What event in 1929 is widely considered the trigger for the onset of the Great Depression?',
                    'options': [
                        'The passage of the 19th Amendment.',
                        'The Great Stock Market Crash (Black Tuesday).',
                        'The sinking of the Lusitania.',
                        'The election of Franklin D. Roosevelt.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This occurred in late October 1829, wiping out billions in speculative value.',
                    'explanation': 'The stock market crash on October 29, 1829 (Black Tuesday) signaled the end of 1920s prosperity, triggering bank failures and high unemployment.'
                }
            ]
        },
        {
            'id': '7.3',
            'title': 'World War II, Mobilization, and the Emerging Global Leadership',
            'description': 'Examine US entry into WWII, home front mobilization, the internment of Japanese Americans, and the post-war global alignment.',
            'youtubeId': 'Q78CO9Ngb8U',
            'article': '''# World War II and the Emerging Global Leadership

Initially maintaining neutrality, the United States was pulled into **World War II** following the Japanese attack on **Pearl Harbor** in 1941, launching a total mobilization of its economy that set it up as a global superpower.

## Mobilization and the Home Front
The war ended the Great Depression through massive federal defense spending:
- **Factory Mobilization**: Factories converted to produce tanks, planes, and ammunition.
- **Rosie the Riveter**: Millions of women entered industrial jobs to replace men fighting abroad.
- **The Great Migration**: Black Americans moved to northern and western cities to work in defense plants.

## Civil Liberties Crises: Japanese Internment
Wartime fear and racial prejudice led to serious civil liberties violations. In 1942, FDR signed **Executive Order 9066**:
- Forced the relocation of over **110,000** Japanese Americans (mostly US citizens) on the West Coast to interior internment camps.
- **Korematsu v. United States (1944)**: The Supreme Court upheld the constitutionality of the internment, ruling that civil liberties could be restricted during wartime military necessity.

## The End of the War and Global Supremacy
The US developed the atomic bomb through the secret **Manhattan Project**, using it in August 1945 on Hiroshima and Nagasaki to force Japan\'s surrender. Under the post-war settlement, the US abandoned its historic isolationism, helping establish the **United Nations** and emerging as a global superpower locked in conflict with the Soviet Union.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Post-War Geopolitics -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="30" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Post-WWII Global Superpowers</text>
  
  <g transform="translate(40, 50)">
    <rect x="0" y="0" width="140" height="60" rx="4" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" />
    <text x="70" y="25" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle">United States</text>
    <text x="70" y="45" fill="#ffffff" font-size="7" text-anchor="middle">Capitalism / Democracy</text>
  </g>
  
  <g transform="translate(220, 50)">
    <rect x="0" y="0" width="140" height="60" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" />
    <text x="70" y="25" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Soviet Union</text>
    <text x="70" y="45" fill="#ffffff" font-size="7" text-anchor="middle">Communism / Dictatorship</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q7.3.1',
                    'unitId': 7,
                    'text': 'What event on December 7, 1941, prompted the United States to abandon neutrality and declare war on Japan?',
                    'options': [
                        'The sinking of the Lusitania.',
                        'The Japanese attack on Pearl Harbor.',
                        'The invasion of Poland by Germany.',
                        'The interception of the Zimmermann Telegram.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This surprise naval attack took place in Hawaii.',
                    'explanation': 'The devastating attack on Pearl Harbor united the American public in support of joining World War II on the side of the Allies.'
                },
                {
                    'id': 'q7.3.2',
                    'unitId': 7,
                    'text': 'FDR\'s Executive Order 9066 resulted in which of the following actions during World War II?',
                    'options': [
                        'The integration of the US military forces.',
                        'The forced internment of over 110,000 Japanese Americans in interior camps.',
                        'The immediate deportation of all German immigrants.',
                        'The nationalization of all private automobile factories.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This order was issued on the West Coast due to wartime panic and racism.',
                    'explanation': 'Executive Order 9066 authorized the military to designate exclusion zones, forcing Japanese Americans into camps without trial or due process.'
                },
                {
                    'id': 'q7.3.3',
                    'unitId': 7,
                    'text': 'In Korematsu v. United States (1944), the Supreme Court ruled that Japanese internment was legal based on what justification?',
                    'options': [
                        'That Japanese Americans had renounced their citizenship.',
                        'That military necessity during wartime justified the restriction of civil rights.',
                        'That the Constitution did not apply to citizens of Japanese ancestry.',
                        'That the camps were comfortable housing centers.'
                    ],
                    'correctIndex': 1,
                    'hint': 'The Court balanced civil liberties against national security concerns.',
                    'explanation': 'The Court ruled 6-3 that the protection against espionage outweighed Korematsu\'s individual rights, upholding the wartime exclusion order.'
                },
                {
                    'id': 'q7.3.4',
                    'unitId': 7,
                    'text': 'What was the secret US project that developed the atomic bomb, which was used on Hiroshima and Nagasaki in August 1945?',
                    'options': [
                        'The Marshall Plan',
                        'The Manhattan Project',
                        'The Apollo Program',
                        'The Brooklyn Project'
                    ],
                    'correctIndex': 1,
                    'hint': 'This scientific project was led by J. Robert Oppenheimer.',
                    'explanation': 'The Manhattan Project was a massive research and development program that produced the first nuclear weapons, ending the war in the Pacific.'
                },
                {
                    'id': 'q7.3.5',
                    'unitId': 7,
                    'text': 'Which global organization was established at the end of World War II to replace the League of Nations and foster international cooperation?',
                    'options': [
                        'The World Trade Organization',
                        'The United Nations',
                        'NATO',
                        'The Warsaw Pact'
                    ],
                    'correctIndex': 1,
                    'hint': 'The US actively joined this organization in 1945, unlike its rejection of the League of Nations.',
                    'explanation': 'The United Nations was created in San Francisco in 1945 to maintain international peace and prevent future global conflicts.'
                }
            ]
        }
    ]
}

data.append(unit6)
data.append(unit7)
