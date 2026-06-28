# -*- coding: utf-8 -*-
import sys
import json
sys.path.append("/Users/yashpatil/AP Lab/scratch")
from append_ush_data_3 import data, OUTPUT_PATH

unit8 = {
    'id': 8,
    'title': 'Period 8: 1945–1980',
    'masteryWeight': '15%',
    'topics': [
        {
            'id': '8.1',
            'title': 'The Cold War, Truman Doctrine, containment, and the Red Scare',
            'description': 'Examine the origins of the Cold War, the policy of containment, proxy conflicts (Korea, Vietnam), and the domestic Red Scare.',
            'youtubeId': '8sS75b_oWGA',
            'article': '''# The Cold War and Containment

Following World War II, the United States entered the **Cold War**, a geopolitical struggle against the Soviet Union for global influence, which shaped American foreign policy and domestic life for decades.

## Containment and the Truman Doctrine
To counter Soviet expansion, the US adopted the policy of **containment** (devised by diplomat George Kennan), which sought to stop the spread of communism without direct warfare:
- **Truman Doctrine (1947)**: Pledged US military and economic aid to any nation resisting communist subjugation, first applied in Greece and Turkey.
- **Marshall Plan (1948)**: A massive financial aid package ($13 billion) to rebuild Western Europe\'s economy, making those nations less vulnerable to communist appeal.
- **NATO (1949)**: A mutual defense alliance between the US, Canada, and Western European nations, marking the end of American isolationism.

## Proxy Wars and Sectional Conflict
Containment led the US into military conflicts in Asia:
1. **Korean War (1950–1953)**: Following North Korea\'s invasion of the South, the US led a United Nations coalition to contain communism, ending in a stalemate at the **38th Parallel**.
2. **Vietnam War (1954–1975)**: The US intervened to support South Vietnam against communist North Vietnam, escalating into a massive war that divided the American public before ending in US withdrawal.

## The Second Red Scare
Fears of communist subversion at home sparked a new Red Scare:
- **McCarthyism**: Senator Joseph McCarthy launched reckless, unsubstantiated investigations of suspected communists in the federal government.
- **HUAC**: The House Un-American Activities Committee blacklisted Hollywood writers and investigated suspected citizens.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Containment Pillars -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Three Pillars of containment</text>
  
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" />
    <text x="50" y="25" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">Truman Doctrine</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Military Aid / Greece</text>
  </g>
  
  <g transform="translate(150, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(34,197,94,0.1)" stroke="#22c55e" />
    <text x="50" y="25" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Marshall Plan</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Economic Rebuild</text>
  </g>

  <g transform="translate(270, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" />
    <text x="50" y="25" fill="#60a5fa" font-size="9" font-weight="bold" text-anchor="middle">NATO Alliance</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Collective Defense</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q8.1.1',
                    'unitId': 8,
                    'text': 'The foreign policy doctrine that pledged US military and economic aid to any nation resisting communist takeover was known as what?',
                    'options': [
                        'The Marshall Plan',
                        'The Truman Doctrine',
                        'The Monroe Doctrine',
                        'The Eisenhower Doctrine'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was announced in 1947, specifically to help Greece and Turkey.',
                    'explanation': 'The Truman Doctrine established the principle that the US would provide assistance to free peoples resisting subjugation by armed minorities or outside pressures.'
                },
                {
                    'id': 'q8.1.2',
                    'unitId': 8,
                    'text': 'George Kennan\'s containment policy argued that the United States should perform which action?',
                    'options': [
                        'Invade the Soviet Union to overthrow its government.',
                        'Block any expansion of Soviet and communist influence beyond its current borders.',
                        'Allow communism to spread to Asia but protect Europe.',
                        'Withdraw entirely from international alliances and return to isolationism.'
                    ],
                    'correctIndex': 1,
                    'hint': 'He believed that communism would eventually collapse if it was kept from expanding.',
                    'explanation': 'Containment aimed to use political, economic, and military pressure to contain Soviet expansion, preventing new communist states from emerging.'
                },
                {
                    'id': 'q8.1.3',
                    'unitId': 8,
                    'text': 'What was the primary goal of the Marshall Plan, enacted in 1948?',
                    'options': [
                        'To build nuclear missile silos in Germany.',
                        'To rebuild the war-torn economies of Western Europe to keep them stable and democratic.',
                        'To arrest suspected communists in Hollywood.',
                        'To provide military weapons to Nationalist forces in China.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This plan involved billions of dollars of economic reconstruction grants.',
                    'explanation': 'By restoring economic prosperity to Western Europe, the Marshall Plan eliminated the poverty and chaos that communists exploited to gain popularity.'
                },
                {
                    'id': 'q8.1.4',
                    'unitId': 8,
                    'text': 'The Korean War (1950–1953) ended with which territorial boundary between North and South?',
                    'options': [
                        'Complete North Korean victory over the entire peninsula.',
                        'A stalemated border near the 38th Parallel, close to the pre-war boundary.',
                        'The annexation of North Korea by China.',
                        'A unified democratic nation with its capital at Seoul.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This boundary remains one of the most heavily fortified zones in the world today.',
                    'explanation': 'After three years of fighting, an armistice was signed in 1953, leaving the peninsula divided near the 38th Parallel at the Demilitarized Zone (DMZ).'
                },
                {
                    'id': 'q8.1.5',
                    'unitId': 8,
                    'text': 'Which Gilded-like domestic crisis of the 1950s involved reckless, unsubstantiated allegations of communism in the federal government?',
                    'options': [
                        'The Watergate Scandal',
                        'McCarthyism',
                        'The Iran-Contra Affair',
                        'The Palmer Raids'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was led by a Republican senator from Wisconsin.',
                    'explanation': 'McCarthyism refers to Senator Joseph McCarthy\'s hunt for communists in the State Department and military, creating a climate of fear and blacklisting.'
                }
            ]
        },
        {
            'id': '8.2',
            'title': 'The Civil Rights Movement, landmark decisions, and Social Reform',
            'description': 'Analyze the campaigns of the Civil Rights Movement, the impact of Brown v. Board, and Lyndon Johnson\'s Great Society.',
            'youtubeId': '8sS75b_oWGA',
            'article': '''# The Civil Rights Movement and Social Reform

The 1950s and 1960s saw a massive grassroots **Civil Rights Movement** led by African Americans who successfully dismantled Jim Crow segregation through legal challenges and nonviolent direct action.

## Legal Victories: Brown v. Board of Education (1954)
- **Ruling**: Chief Justice Earl Warren declared that "separate educational facilities are inherently unequal," overturning the 1896 *Plessy v. Ferguson* doctrine of "separate but equal."
- **Resistance**: Southern states resisted, prompting federal intervention (such as Eisenhower sending paratroopers to escort the **Little Rock Nine** in 1857).

## Grassroots Activism and Legislative Action
Led by figures like **Dr. Martin Luther King Jr.**, activists used nonviolent civil disobedience (sit-ins, boycotts, marches) to demand change:
- **Civil Rights Act of 1964**: Banned discrimination in public accommodations and employment based on race, sex, religion, or national origin.
- **Voting Rights Act of 1965**: Banned literacy tests and sent federal registrars to the South, securing voting rights for millions of black Americans.

## Lyndon Johnson's Great Society
President Lyndon B. Johnson launched the **Great Society**, the most ambitious domestic reform program since the New Deal:
- **Medicare**: Federal health insurance for elderly citizens.
- **Medicaid**: Federal health assistance for low-income families.
- **Head Start**: Early childhood education for low-income families.

<div class="flex justify-center my-8">
<table class="w-full text-xs border-collapse border border-white/10 rounded-lg overflow-hidden bg-black/25">
  <thead>
    <tr class="bg-white/5 text-white font-mono uppercase">
      <th class="p-2 border border-white/10">Law / Event</th>
      <th class="p-2 border border-white/10">Core Achievement</th>
      <th class="p-2 border border-white/10">Key Leaders / Context</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-yellow-400">Brown v. Board (1954)</td>
      <td class="p-2 border border-white/10">Outlawed school segregation</td>
      <td class="p-2 border border-white/10">Thurgood Marshall (NAACP)</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-cyan-400">Civil Rights Act of 1964</td>
      <td class="p-2 border border-white/10">Banned public segregation</td>
      <td class="p-2 border border-white/10">MLK Jr. / President Johnson</td>
    </tr>
    <tr>
      <td class="p-2 border border-white/10 font-bold text-indigo-400">Voting Rights Act of 1965</td>
      <td class="p-2 border border-white/10">Outlawed literacy tests</td>
      <td class="p-2 border border-white/10">Selma March / Voting access</td>
    </tr>
  </tbody>
</table>
</div>
''',
            'questions': [
                {
                    'id': 'q8.2.1',
                    'unitId': 8,
                    'text': 'The landmark Supreme Court decision in Brown v. Board of Education (1954) declared which of the following?',
                    'options': [
                        'Slavery was constitutional in the northern states.',
                        'Racial segregation in public schools was unconstitutional, overturning Plessy v. Ferguson.',
                        'Voter registration literacy tests were immediately legal.',
                        'The federal government had no power to regulate interstate school buses.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This case argued that segregation created feelings of inferiority in black children.',
                    'explanation': 'The Warren Court ruled unanimously that separate educational facilities violated the Equal Protection Clause of the 14th Amendment.'
                },
                {
                    'id': 'q8.2.2',
                    'unitId': 8,
                    'text': 'All of the following were major achievements of Lyndon B. Johnson\'s Great Society program EXCEPT:',
                    'options': [
                        'Medicare (health insurance for the elderly).',
                        'Medicaid (health assistance for low-income families).',
                        'The abolition of the federal income tax.',
                        'Head Start (early education programs).'
                    ],
                    'correctIndex': 2,
                    'hint': 'The Great Society sought to expand the social welfare system, not dismantle it.',
                    'explanation': 'The Great Society expanded federal social programs, adding to New Deal systems, and relied on progressive income taxation.'
                },
                {
                    'id': 'q8.2.3',
                    'unitId': 8,
                    'text': 'What was a primary method of protest used by the Civil Rights Movement to target segregated lunch counters in the South?',
                    'options': [
                        'Armed rebellions and militia occupation.',
                        'Sit-ins, where black students sat quietly at white-only counters.',
                        'Writing pamphlets arguing for bimetallism.',
                        'Filing lawsuits to repeal the 14th Amendment.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was famously launched by college students in Greensboro, North Carolina, in 1960.',
                    'explanation': 'Sit-ins were highly effective nonviolent direct action tactics that drew national media attention to segregation.'
                },
                {
                    'id': 'q8.2.4',
                    'unitId': 8,
                    'text': 'The Civil Rights Act of 1964 accomplished which landmark reform?',
                    'options': [
                        'It banned literacy tests at voting stations.',
                        'It outlawed segregation and discrimination in public facilities and employment.',
                        'It granted forty acres of land to all former sharecroppers.',
                        'It desegregated the federal military branches.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was a major bill signed by LBJ following the March on Washington.',
                    'explanation': 'The Civil Rights Act of 1964 dismantled the legal basis of Jim Crow by banning discrimination in hotels, restaurants, and workplaces.'
                },
                {
                    'id': 'q8.2.5',
                    'unitId': 8,
                    'text': 'Who served as the chief counsel for the NAACP in the Brown v. Board case, later becoming the first African American Supreme Court justice?',
                    'options': [
                        'Martin Luther King Jr.',
                        'Malcolm X',
                        'Thurgood Marshall',
                        'Stokely Carmichael'
                    ],
                    'correctIndex': 2,
                    'hint': 'He won a series of cases dismantling Jim Crow school segregation.',
                    'explanation': 'Thurgood Marshall was the brilliant NAACP legal strategist who argued the Brown case and was later appointed to the Supreme Court by LBJ.'
                }
            ]
        },
        {
            'id': '8.3',
            'title': 'The Vietnam War, Anti-war protests, and the Watergate Crisis',
            'description': 'Examine the escalation of the Vietnam War, the rise of the anti-war movement, and the Watergate scandal leading to Nixon\'s resignation.',
            'youtubeId': '8sS75b_oWGA',
            'article': '''# Vietnam and the Watergate Crisis

The late 1960s and 1970s saw a massive decline in public trust in the federal government, driven by a controversial war in Southeast Asia and political corruption at the highest level.

## The Vietnam War Escalation
Following the **Gulf of Tonkin Resolution (1964)**, which gave President Johnson broad authority to defend US forces in Vietnam, the US military escalated its presence to over **500,000** troops.
- **Tet Offensive (1968)**: A massive surprise attack by North Vietnamese forces. While a military victory for the US, it shocked the American public, exposing that the government\'s claims that the US was winning were false (the **credibility gap**).
- **Anti-War Movement**: Student-led protests swept college campuses, intensifying after the expansion of the war into Cambodia, culminating in the **Kent State Shootings (1970)**.

## The Watergate Scandal and Nixon's Resignation
In 1972, operatives tied to President Richard Nixon\'s re-election campaign broke into the Democratic National Committee headquarters at the **Watergate** complex.
- **The Cover-up**: Nixon actively attempted to block the FBI investigation, tape-recording conversations in the Oval Office.
- **Resignation (1974)**: Faced with certain impeachment by the House for obstruction of justice, Nixon resigned in August 1974—the only US president to do so. This scandal permanently damaged public faith in political institutions.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Loss of Trust Timeline -->
  <line x1="20" y1="80" x2="380" y2="80" stroke="#a1a1aa" stroke-width="1.5" />
  
  <g transform="translate(80, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1968</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Tet Offensive</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Credibility Gap opens</text>
  </g>
  
  <g transform="translate(200, 0)">
    <circle cx="0" cy="80" r="4" fill="#fbbf24" />
    <text x="0" y="65" fill="#fbbf24" font-size="8" text-anchor="middle">1970</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Kent State</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Student war protests</text>
  </g>

  <g transform="translate(320, 0)">
    <circle cx="0" cy="80" r="4" fill="#ef4444" />
    <text x="0" y="65" fill="#ef4444" font-size="8" text-anchor="middle">1974</text>
    <text x="0" y="100" fill="#ffffff" font-size="8" text-anchor="middle">Watergate Resign</text>
    <text x="0" y="110" fill="#a1a1aa" font-size="7" text-anchor="middle">Nixon resigns in scandal</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q8.3.1',
                    'unitId': 8,
                    'text': 'What was the significance of the 1968 Tet Offensive in the Vietnam War?',
                    'options': [
                        'It led to an immediate peace treaty uniting Vietnam under a democracy.',
                        'It was a major military victory for North Vietnam that destroyed the US military.',
                        'It shattered American public confidence in government claims that the US was winning the war.',
                        'It marked the first use of nuclear weapons in Southeast Asia.'
                    ],
                    'correctIndex': 2,
                    'hint': 'This surprise holiday offensive showed the enemy was far from defeated.',
                    'explanation': 'The Tet Offensive exposed a \'credibility gap\' between what the government reported and the reality of a strong, determined enemy.'
                },
                {
                    'id': 'q8.3.2',
                    'unitId': 8,
                    'text': 'The Gulf of Tonkin Resolution in 1964 was historically significant because it did which of the following?',
                    'options': [
                        'Abolished the draft for all military services.',
                        'Gave President Johnson broad executive authority to escalate military involvement in Vietnam without a formal declaration of war.',
                        'Formally declared war on China and the Soviet Union.',
                        'Ended all US military aid to South Vietnam.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This resolution was passed following reports of clashes between US destroyers and North Vietnamese boats.',
                    'explanation': 'The resolution allowed Johnson to send hundreds of thousands of troops to Vietnam, expanding executive warmaking authority.'
                },
                {
                    'id': 'q8.3.3',
                    'unitId': 8,
                    'text': 'What was the primary cause of President Richard Nixon\'s resignation in August 1974?',
                    'options': [
                        'His choice to sign the Strategic Arms Limitation Treaty.',
                        'His direct involvement in covering up the Watergate break-in.',
                        'His defeat in the 1972 election to George McGovern.',
                        'His decision to withdraw US forces from Vietnam.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Nixon resigned to avoid face-to-face impeachment trial in the Senate.',
                    'explanation': 'Nixon resigned after released recordings proved he had ordered the CIA to block the FBI\'s investigation into the Watergate break-in (obstruction of justice).'
                },
                {
                    'id': 'q8.3.4',
                    'unitId': 8,
                    'text': 'The Kent State Shootings of 1970 occurred during protests against which military action?',
                    'options': [
                        'The landing of troops in Normandy.',
                        'The expansion of the Vietnam War into Cambodia.',
                        'The launch of the Berlin Airlift.',
                        'The blockade of Cuba.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Nixon had promised to end the war, but authorized an invasion of a neighboring nation to destroy supply lines.',
                    'explanation': 'Nixon\'s announcement of the Cambodian Campaign sparked furious protests on college campuses, culminating in National Guard troops killing four students at Kent State.'
                },
                {
                    'id': 'q8.3.5',
                    'unitId': 8,
                    'text': 'Which of the following describes the long-term impact of both the Vietnam War and the Watergate scandal on American society?',
                    'options': [
                        'A massive resurgence in national unity and patriotism.',
                        'A permanent decline in public trust and confidence in the federal government.',
                        'The complete dissolution of the two-party political system.',
                        'An immediate return to isolationism.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Both events left citizens highly skeptical of political leaders.',
                    'explanation': 'The combination of executive deceit in Vietnam and corruption in Watergate created widespread skepticism and cynicism toward political authority.'
                }
            ]
        }
    ]
}

unit9 = {
    'id': 9,
    'title': 'Period 9: 1980–Present',
    'masteryWeight': '5%',
    'topics': [
        {
            'id': '9.1',
            'title': 'The Rise of the New Conservatism, Reaganomics, and the end of the Cold War',
            'description': 'Examine the conservative resurgence of the 1980s, Ronald Reagan\'s economic policies, and the collapse of the Soviet Union.',
            'youtubeId': '8sS75b_oWGA',
            'article': '''# The Conservative Resurgence and the End of the Cold War

The late 20th century saw a major political shift with the election of **Ronald Reagan** in 1980, launching the **New Conservative** movement and presiding over the final stages of the Cold War.

## The Rise of New Conservatism
Conservatives built a powerful coalition based on:
- **Economic deregulation** and lower taxes.
- **Moral Majority**: Evangelical Christian groups advocating for traditional family values and opposing abortion and gay rights.
- **Reaganomics (Supply-Side Economics)**: The theory that tax cuts for corporations and the wealthy would stimulate investment, creating jobs and prosperity that would "trickle down" to the rest of the economy.

## Foreign Policy and the End of the Cold War
Reagan rejected containment in favor of active rollback:
- **Military Expansion**: Massive defense spending (like the "Star Wars" Strategic Defense Initiative) to outspend the Soviet economy.
- **Gorbachev's Reforms**: Soviet leader Mikhail Gorbachev introduced **glasnost** (openness) and **perestroika** (economic restructuring) to reform the struggling Soviet system.
- **Collapse (1991)**: The Berlin Wall fell in 1989, and the Soviet Union dissolved in December 1991, ending the Cold War.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Reaganomics Flow -->
  <rect x="10" y="10" width="380" height="130" rx="8" fill="rgba(255,255,255,0.02)" />
  <text x="200" y="25" fill="#ffffff" font-size="10" text-anchor="middle" font-weight="bold">Supply-Side Economics (Reaganomics)</text>
  
  <g transform="translate(30, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(32,201,151,0.1)" stroke="#20c997" />
    <text x="50" y="25" fill="#20c997" font-size="9" font-weight="bold" text-anchor="middle">Tax Cuts</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">For Corporations</text>
  </g>

  <g transform="translate(150, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(129,140,248,0.1)" stroke="#818cf8" />
    <text x="50" y="25" fill="#818cf8" font-size="9" font-weight="bold" text-anchor="middle">Investment</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Business Growth</text>
  </g>
  
  <g transform="translate(270, 45)">
    <rect x="0" y="0" width="100" height="60" rx="4" fill="rgba(34,197,94,0.1)" stroke="#22c55e" />
    <text x="50" y="25" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Trickle Down</text>
    <text x="50" y="40" fill="#ffffff" font-size="7" text-anchor="middle">Jobs for workers</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q9.1.1',
                    'unitId': 9,
                    'text': 'The economic theory of Supply-Side Economics (Reaganomics) argued that the government could stimulate growth through which action?',
                    'options': [
                        'Significantly increasing tax rates on the wealthy.',
                        'Cutting taxes for corporations and wealthy investors to encourage business investment.',
                        'Nationalizing the major automobile and railroad corporations.',
                        'Abolishing the Federal Reserve System.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This is also commonly referred to as \'trickle-down\' economics.',
                    'explanation': 'Supply-side economics asserts that lower taxes and deregulation increase production (supply), leading to job creation and broad economic growth.'
                },
                {
                    'id': 'q9.1.2',
                    'unitId': 9,
                    'text': 'Which Soviet leader introduced the policies of glasnost (openness) and perestroika (restructuring) in the 1980s?',
                    'options': [
                        'Joseph Stalin',
                        'Nikita Khrushchev',
                        'Mikhail Gorbachev',
                        'Vladimir Putin'
                    ],
                    'correctIndex': 2,
                    'hint': 'He was the last leader of the Soviet Union before its collapse.',
                    'explanation': 'Gorbachev\'s reforms aimed to modernize the Soviet system, but instead unleashed democratic movements that led to its dissolution.'
                },
                {
                    'id': 'q9.1.3',
                    'unitId': 9,
                    'text': 'What major event in November 1989 symbolized the beginning of the collapse of communist regimes in Eastern Europe?',
                    'options': [
                        'The Cuban Missile Crisis',
                        'The falling of the Berlin Wall',
                        'The launch of Sputnik',
                        'The signing of the NATO alliance'
                    ],
                    'correctIndex': 1,
                    'hint': 'This barrier had divided a major German city since 1961.',
                    'explanation': 'The destruction of the Berlin Wall by East and West German citizens marked the symbolic end of the Iron Curtain and Soviet domination of Eastern Europe.'
                },
                {
                    'id': 'q9.1.4',
                    'unitId': 9,
                    'text': 'Which of the following was a primary political component of the Gilded-like New Conservatism of the 1980s?',
                    'options': [
                        'Expansion of environmental regulations.',
                        'Active support from evangelical Christian groups advocating for traditional social values.',
                        'An alliance with northern labor unions.',
                        'A demand to return to the Articles of Confederation.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Groups like the Moral Majority played a critical role in electing Ronald Reagan.',
                    'explanation': 'New Conservatism combined free-market economics with social conservatism, drawing heavy support from religious organizations.'
                },
                {
                    'id': 'q9.1.5',
                    'unitId': 9,
                    'text': 'What was the final status of the Soviet Union in December 1991?',
                    'options': [
                        'It launched a nuclear strike on Western Europe.',
                        'It dissolved completely into 15 independent republics, ending the Cold War.',
                        'It signed a treaty to annex China.',
                        'It formed a new military alliance with the United States.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This marked the formal end of the Cold War geopolitical structure.',
                    'explanation': 'Internal economic crises and nationalist movements led to the official dissolution of the USSR, leaving the US as the world\'s single superpower.'
                }
            ]
        },
        {
            'id': '9.2',
            'title': 'Globalization, The digital Age, and Economic Transformations',
            'description': 'Examine the rise of the internet, the transformation of the US labor market, and the impacts of globalization.',
            'youtubeId': '8sS75b_oWGA',
            'article': '''# Globalization and the Digital Age

The turn of the 21st century witnessed the rise of the **Digital Age**, fueled by the internet and personal computers, alongside the growth of a highly interconnected global economy.

## The Digital Revolution
The development of the personal computer and the **World Wide Web (Internet)** revolutionized daily life:
- **Information Access**: Enabled instant global communication and information retrieval.
- **Service Economy**: Shifted the US labor market away from manufacturing toward service and technology-driven industries.
- **E-commerce**: Transformed retail, giving rise to giant technology corporations.

## Globalization and its Discontents
The US integrated deeper into the global economy through trade deals:
- **NAFTA (North American Free Trade Agreement, 1994)**: Eliminated tariffs between the US, Canada, and Mexico.
- **Outsourcing**: Many manufacturing jobs were relocated to developing nations with lower labor costs, causing industrial decline in the Midwestern **Rust Belt**.
- **Immigration**: Immigration from Latin America and Asia surged, reshaping demographics and reviving national debates over borders and national identity.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Globalization map sketch -->
  <circle cx="200" cy="75" r="30" fill="none" stroke="#a1a1aa" stroke-width="1.5" />
  <circle cx="200" cy="75" r="50" fill="none" stroke="#a1a1aa" stroke-width="1" stroke-dasharray="2,2" />
  <text x="200" y="78" fill="#ffffff" font-size="8" text-anchor="middle" font-weight="bold">Global Market</text>
  
  <g transform="translate(50, 40)">
    <circle cx="20" cy="20" r="15" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" />
    <text x="20" y="48" fill="#60a5fa" font-size="7" text-anchor="middle">USA (Tech)</text>
  </g>

  <g transform="translate(310, 80)">
    <circle cx="20" cy="20" r="15" fill="rgba(34,197,94,0.1)" stroke="#22c55e" />
    <text x="20" y="48" fill="#22c55e" font-size="7" text-anchor="middle">Asia (Mfg)</text>
  </g>

  <line x1="85" y1="60" x2="170" y2="75" stroke="#60a5fa" stroke-width="1" marker-end="url(#arrow-phys)" />
  <line x1="310" y1="90" x2="230" y2="75" stroke="#22c55e" stroke-width="1" marker-end="url(#arrow-phys)" />
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q9.2.1',
                    'unitId': 9,
                    'text': 'The North American Free Trade Agreement (NAFTA), signed in 1994, eliminated trade barriers between which nations?',
                    'options': [
                        'The United States, Great Britain, and France.',
                        'The United States, Canada, and Mexico.',
                        'The United States, Brazil, and Argentina.',
                        'The United States, Japan, and China.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This agreement targeted free trade across North America.',
                    'explanation': 'NAFTA created a trilateral trade bloc in North America by eliminating tariffs on goods shipped between the US, Canada, and Mexico.'
                },
                {
                    'id': 'q9.2.2',
                    'unitId': 9,
                    'text': 'What was a primary labor market shift in the United States during the Digital Age?',
                    'options': [
                        'A return to agricultural homestead farming.',
                        'A decline in manufacturing jobs and a rise in service and technology sector employment.',
                        'The complete ban of female workers from corporate offices.',
                        'The elimination of high-technology sector jobs.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Consider the impact of computerization and automation.',
                    'explanation': 'The rise of personal computers and the internet shifted the US economy toward information and service industries, while manufacturing declined.'
                },
                {
                    'id': 'q9.2.3',
                    'unitId': 9,
                    'text': 'The relocation of manufacturing jobs to developing nations with cheaper labor is commonly known as what?',
                    'options': [
                        'Mercantilism',
                        'Outsourcing',
                        'Nativism',
                        'Containment'
                    ],
                    'correctIndex': 1,
                    'hint': 'This practice has contributed to the decline of the Rust Belt.',
                    'explanation': 'Outsourcing allows corporations to reduce costs by shifting manufacturing operations to countries with lower labor regulations and wages.'
                },
                {
                    'id': 'q9.2.4',
                    'unitId': 9,
                    'text': 'Which of the following describes the impact of the internet on commerce in the late 19th and early 20th comparison?',
                    'options': [
                        'It eliminated international trade entirely.',
                        'It enabled instant communications, global transactions, and the rise of e-commerce.',
                        'It forced all banking systems to return to the silver standard.',
                        'It had no noticeable impact on retail sales.'
                    ],
                    'correctIndex': 1,
                    'hint': 'Think of websites like Amazon and online financial trading.',
                    'explanation': 'The World Wide Web connected global buyers and sellers, enabling e-commerce and shifting retail from physical stores to digital spaces.'
                },
                {
                    'id': 'q9.2.5',
                    'unitId': 9,
                    'text': 'The Rust Belt refers to what region of the United States that suffered heavy industrial decline due to outsourcing?',
                    'options': [
                        'The Pacific Northwest',
                        'The Midwest and Great Lakes region',
                        'The Florida Peninsula',
                        'The Rocky Mountains'
                    ],
                    'correctIndex': 1,
                    'hint': 'This region was previously known for steel mills and car factories.',
                    'explanation': 'The Rust Belt describes the industrial Midwest (e.g., Ohio, Michigan, Pennsylvania) which experienced economic decay as manufacturing factories closed.'
                }
            ]
        },
        {
            'id': '9.3',
            'title': 'The War on Terror, Domestic Security, and Sectional Politics of the 21st Century',
            'description': 'Examine the impacts of the September 11 attacks, the War on Terror, debates over civil liberties, and growing political polarization.',
            'youtubeId': '8sS75b_oWGA',
            'article': '''# The 21st Century and the War on Terror

The 21st century began with a major national security crisis that reshaped American foreign policy and triggered debates over civil liberties and political polarization at home.

## The September 11 Attacks and the War on Terror
On **September 11, 2001**, Al-Qaeda terrorists hijacked commercial planes and crashed them into the World Trade Center and the Pentagon:
- **Department of Homeland Security**: A new federal department created to coordinate domestic security.
- **The Patriot Act (2001)**: Expanded the government\'s authority to conduct surveillance and wiretaps, sparking intense debates over the balance between national security and constitutional civil liberties.
- **Foreign Interventions**: The US launched the **War on Terror**, leading to invasions of **Afghanistan (2001)** to target Al-Qaeda, and **Iraq (2003)** to depose Saddam Hussein over suspected weapons of mass destruction.

## Sectionalism and Political Polarization
The 21st century has seen growing polarization in American politics:
- **Red vs. Blue States**: Increasingly deep division between conservative rural areas and liberal urban centers.
- **The Great Recession (2008)**: A major housing market crash that led to bank bailouts, rising economic inequality, and the election of **Barack Obama** (the first African American president).
- **Climate Change and Energy**: Ongoing debates over environmental regulations and transition to green energy vs. traditional oil and coal production.

<div class="flex justify-center my-8">
<svg width="400" height="150" viewBox="0 0 400 150" class="max-w-full rounded-xl bg-black/40 border border-white/10 p-4">
  <!-- Security vs Liberty scale -->
  <line x1="80" y1="110" x2="320" y2="110" stroke="#a1a1aa" stroke-width="2" />
  <polygon points="200,70 190,110 210,110" fill="#a1a1aa" />
  
  <!-- Left Side: Security -->
  <g transform="translate(80, 80)">
    <rect x="-40" y="-30" width="80" height="30" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" />
    <text x="0" y="-12" fill="#ef4444" font-size="8" text-anchor="middle" font-weight="bold">Security (Patriot Act)</text>
  </g>
  
  <!-- Right Side: Liberty -->
  <g transform="translate(320, 80)">
    <rect x="-40" y="-30" width="80" height="30" rx="4" fill="rgba(34,197,94,0.1)" stroke="#22c55e" />
    <text x="0" y="-12" fill="#22c55e" font-size="8" text-anchor="middle" font-weight="bold">Liberty (Privacy)</text>
  </g>
</svg>
</div>
''',
            'questions': [
                {
                    'id': 'q9.3.1',
                    'unitId': 9,
                    'text': 'The Patriot Act of 2001 sparked national debate primarily over the balance between which two concepts?',
                    'options': [
                        'Westward expansion and environmental protection.',
                        'National security and individual civil liberties (privacy).',
                        'State sovereignty and federal income tax.',
                        'Free silver coinage and the gold standard.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This act expanded government wiretapping and surveillance capabilities.',
                    'explanation': 'The Patriot Act gave intelligence agencies broader powers to monitor communications, raising concerns over Fourth Amendment protections against search and seizure.'
                },
                {
                    'id': 'q9.3.2',
                    'unitId': 9,
                    'text': 'What was the primary foreign policy catalyst for the United States launching the War on Terror?',
                    'options': [
                        'The Persian Gulf War of 1991.',
                        'The terrorist attacks on September 11, 2001.',
                        'The signing of the NAFTA agreement.',
                        'The collapse of the Soviet Union.'
                    ],
                    'correctIndex': 1,
                    'hint': 'This involved the hijacking of four commercial airplanes.',
                    'explanation': 'The September 11 attacks by Al-Qaeda prompted President George W. Bush to declare a global War on Terror, beginning with the invasion of Afghanistan.'
                },
                {
                    'id': 'q9.3.3',
                    'unitId': 9,
                    'text': 'Which new cabinet-level department was created following the September 11 attacks to coordinate domestic security?',
                    'options': [
                        'The Department of Defense',
                        'The Department of Homeland Security',
                        'The Department of Veterans Affairs',
                        'The Department of Justice'
                    ],
                    'correctIndex': 1,
                    'hint': 'This department consolidated 22 federal agencies to improve communications.',
                    'explanation': 'The Department of Homeland Security was created in 2002 to protect the territory of the US from terrorist attacks and respond to natural disasters.'
                },
                {
                    'id': 'q9.3.4',
                    'unitId': 9,
                    'text': 'The election of Barack Obama in 2008 was historically significant for which reason?',
                    'options': [
                        'He was the first third-party candidate to win the presidency.',
                        'He was the first African American president of the United States.',
                        'He immediately returned the US currency to the gold standard.',
                        'He abolished the Department of Homeland Security.'
                    ],
                    'correctIndex': 1,
                    'hint': 'He served two terms as the 44th President.',
                    'explanation': 'Obama\'s election in 2008 represented a major political milestone as the first black president in American history.'
                },
                {
                    'id': 'q9.3.5',
                    'unitId': 9,
                    'text': 'The housing market collapse of 2008 triggered which economic crisis?',
                    'options': [
                        'The Great Depression',
                        'The Great Recession',
                        'The Panic of 1893',
                        'The Gilded Deflation'
                    ],
                    'correctIndex': 1,
                    'hint': 'This was the worst economic downturn since the 1930s, involving massive bank bailouts.',
                    'explanation': 'The subprime mortgage crash triggered a global financial crisis, rising unemployment, and a deep downturn known as the Great Recession.'
                }
            ]
        }
    ]
}

data.append(unit8)
data.append(unit9)

# Now we serialize to TypeScript format
ts_output = f"""export interface APUSHQuestion {{
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  unitId: number;
}}

export interface APUSHTopic {{
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  image?: string;
  article: string;
  questions: APUSHQuestion[];
}}

export interface APUSHUnit {{
  id: number;
  title: string;
  masteryWeight: string;
  topics: APUSHTopic[];
}}

export const apUshData: APUSHUnit[] = {json.dumps(data, indent=2, ensure_ascii=False)};
"""

with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write(ts_output)

print(f"Successfully generated {OUTPUT_PATH} with {len(data)} units.")
print(f"Verify file size: {len(ts_output)} chars.")
