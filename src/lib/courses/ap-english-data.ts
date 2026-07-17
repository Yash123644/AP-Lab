import { CourseUnit } from "./course-registry";

export const apEnglishData: CourseUnit[] = [
  {
    "id": 1,
    "title": "Rhetorical Situation and Foundational Claims",
    "masteryWeight": "10-12%",
    "topics": [
      {
        "id": "1.1",
        "title": "The Rhetorical Triangle, Exigence, and Contextual Analysis",
        "description": "Master the relationships between writer, audience, and message within the rhetorical situation, triggered by exigence.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# The Rhetorical Triangle, Exigence, and Contextual Analysis\n\nRhetorical analysis is the study of how writers use language to influence an audience. The foundation of this analysis is the **rhetorical situation**, which consists of five core components: the writer, the audience, the message, the purpose, and the context.\n\n## The Rhetorical Triangle\nThe relationships among these components are often visualized using the **Rhetorical Triangle**:\n\n<svg width=\"400\" height=\"250\" viewBox=\"0 0 400 250\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <polygon points=\"200,40 60,200 340,200\" fill=\"none\" stroke=\"#fb7185\" stroke-width=\"2.5\" />\n  <circle cx=\"200\" cy=\"40\" r=\"10\" fill=\"#fb7185\" />\n  <circle cx=\"60\" cy=\"200\" r=\"10\" fill=\"#fb7185\" />\n  <circle cx=\"340\" cy=\"200\" r=\"10\" fill=\"#fb7185\" />\n  <text x=\"200\" y=\"25\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">WRITER (Ethos)</text>\n  <text x=\"50\" y=\"220\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">AUDIENCE (Pathos)</text>\n  <text x=\"350\" y=\"220\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\">MESSAGE (Logos)</text>\n  <text x=\"200\" y=\"130\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"10\" font-family=\"sans-serif\">CONTEXT / PURPOSE</text>\n</svg>\n\n- **Writer (Speaker/Rhetor)**: The voice behind the text. Writers establish credibility (<vocab term=\"Ethos\" definition=\"The ethical appeal of a writer, establishing credibility, authority, and trustworthiness to persuade the audience.\">ethos</vocab>) by demonstrating knowledge and ethical character.\n- **Audience**: The target group of readers or listeners. Writers must adapt their style and arguments based on their audience's beliefs and values (<vocab term=\"Pathos\" definition=\"The emotional appeal used to persuade an audience by tapping into their feelings, values, and desires.\">pathos</vocab>).\n- **Message (Text)**: The content, arguments, and structures (<vocab term=\"Logos\" definition=\"The logical appeal of an argument, supported by facts, statistics, structure, and reasoning.\">logos</vocab>) constructed by the author.\n\n## Exigence and Context\nBeyond the triangle, every rhetorical act has a specific <vocab term=\"Exigence\" definition=\"The immediate spark, demand, problem, or lack that prompts a writer or speaker to create a text or deliver a speech.\">exigence</vocab>\u2014the urgent spark or occasion that prompts the writer to speak or write. Additionally, <vocab term=\"Context\" definition=\"The historical, cultural, social, and political circumstances surrounding the creation of a text.\">context</vocab> represents the broader circumstances (historical, cultural, or political) surrounding the text.\n",
        "questions": [
          {
            "id": "q_eng_1.1.1",
            "unitId": 1,
            "text": "Which component of the rhetorical situation refers to the immediate spark or demand that prompts a writer to create a text?",
            "options": [
              "Context",
              "Exigence",
              "Purpose",
              "Audience"
            ],
            "correctIndex": 1,
            "hint": "Think of the root meaning 'urgency' or 'demand'.",
            "explanation": "Exigence is the immediate problem, lack, or event that stimulates a rhetor to write or speak."
          },
          {
            "id": "q_eng_1.1.2",
            "unitId": 1,
            "text": "In the Rhetorical Triangle, the appeal to logic, reasoning, and textual structure is known as:",
            "options": [
              "Ethos",
              "Pathos",
              "Logos",
              "Kairos"
            ],
            "correctIndex": 2,
            "hint": "Derived from the Greek word for 'word' or 'reason'.",
            "explanation": "Logos represents logical arguments, structure, and factual evidence."
          },
          {
            "id": "q_eng_1.1.3",
            "unitId": 1,
            "text": "How does context differ from exigence in a rhetorical situation?",
            "options": [
              "Context is the speaker's background, while exigence is the audience's response.",
              "Context is the general environment and circumstances, while exigence is the specific triggering event.",
              "Context is the text itself, while exigence is the medium of publication.",
              "They are identical terms and can be used interchangeably."
            ],
            "correctIndex": 1,
            "hint": "One is broad and environmental; the other is a sharp triggering spark.",
            "explanation": "Context includes the wide socio-political environment, while exigence is the specific, immediate catalyst for the text."
          },
          {
            "id": "q_eng_1.1.4",
            "unitId": 1,
            "text": "A writer establishing authority and trust with their audience is primarily utilizing which appeal?",
            "options": [
              "Pathos",
              "Ethos",
              "Logos",
              "Diction"
            ],
            "correctIndex": 1,
            "hint": "Relates to the credibility, ethics, and character of the speaker.",
            "explanation": "Ethos refers to appeals based on credibility, trust, authority, and ethical character."
          }
        ]
      },
      {
        "id": "1.2",
        "title": "Defensible Thesis Statements, Central Claims, and Evidence Identification",
        "description": "Learn to write defensible thesis statements and identify appropriate claims and supporting evidence.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Defensible Thesis Statements and Central Claims\n\nA successful argument begins with a clear, defensible position. In academic writing, this is typically formulated as a thesis statement.\n\n## Crafting a Defensible Thesis\nA <vocab term=\"Thesis Statement\" definition=\"A defensible opinion or position that establishes the main argument of an essay and requires supporting evidence.\">thesis statement</vocab> must be defensible\u2014meaning it cannot be a simple statement of fact, but rather an opinion or interpretation that requires proof:\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <rect x=\"20\" y=\"20\" width=\"160\" height=\"100\" rx=\"10\" fill=\"rgba(244,63,94,0.05)\" stroke=\"#f43f5e\" stroke-width=\"1.5\" />\n  <rect x=\"220\" y=\"20\" width=\"160\" height=\"100\" rx=\"10\" fill=\"rgba(16,185,129,0.05)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n  <text x=\"100\" y=\"50\" text-anchor=\"middle\" fill=\"#f43f5e\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">INDEFENSIBLE FACT</text>\n  <text x=\"100\" y=\"80\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"9\" font-family=\"sans-serif\">\"Lincoln signed the Emancipation\"</text>\n  <text x=\"300\" y=\"50\" text-anchor=\"middle\" fill=\"#10b981\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">DEFENSIBLE THESIS</text>\n  <text x=\"300\" y=\"80\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"9\" font-family=\"sans-serif\">\"Lincoln's rhetoric redefined freedom\"</text>\n</svg>\n\n- **Fact**: *\"The United States declared independence in 1776.\"* (Indefensible; it cannot be argued).\n- **Defensible Claim**: *\"The declaration of independence was motivated more by class divides than philosophical idealism.\"* (Defensible; requires support).\n\n## Claims and Evidence\nArguments are constructed through a hierarchy of assertions:\n- **Central Claim**: The overall argument of the text (the thesis).\n- **Sub-Claims**: Supporting arguments for specific sections.\n- **Evidence**: Factual data, examples, quotes, or statistics that substantiate the sub-claims.\n",
        "questions": [
          {
            "id": "q_eng_1.2.1",
            "unitId": 1,
            "text": "Which of the following represents a defensible thesis statement rather than an indefensible fact?",
            "options": [
              "AP English Language is a high school course offering college credit.",
              "The printing press was invented by Johannes Gutenberg in the 15th century.",
              "Gutenberg's printing press was the primary driver of democratic reforms in Europe.",
              "Many European states implemented censorship policies following the printing press."
            ],
            "correctIndex": 2,
            "hint": "Look for the claim that states a controversial opinion rather than a verified historical fact.",
            "explanation": "Claiming the printing press was the 'primary driver' of democratic reforms is an argumentative interpretation that can be contested and supported, making it defensible."
          },
          {
            "id": "q_eng_1.2.2",
            "unitId": 1,
            "text": "What is the primary role of a sub-claim in an argumentative essay?",
            "options": [
              "To summarize the entire essay's conclusion",
              "To state a random fact that interests the reader",
              "To support the main thesis by arguing a specific, localized point",
              "To introduce a counterargument and concede to it"
            ],
            "correctIndex": 2,
            "hint": "It operates underneath the central claim.",
            "explanation": "Sub-claims break down the central thesis into supporting, localized arguments that organize individual body paragraphs."
          },
          {
            "id": "q_eng_1.2.3",
            "unitId": 1,
            "text": "In a rhetorical argument, what qualifies as valid evidence?",
            "options": [
              "Any statement that the author asserts to be true without support",
              "Factual info, statistics, historical details, or direct quotations",
              "Only the personal opinions of the author's peers",
              "Vague generalities that can apply to any topic"
            ],
            "correctIndex": 1,
            "hint": "Evidence must be concrete and verifiable.",
            "explanation": "Factual data, statistical figures, historical examples, and textual quotes constitute valid evidence."
          },
          {
            "id": "q_eng_1.2.4",
            "unitId": 1,
            "text": "Which of the following statement types CANNOT serve as a thesis statement?",
            "options": [
              "A policy recommendation",
              "An analytical interpretation",
              "A purely objective definition",
              "A value judgment"
            ],
            "correctIndex": 2,
            "hint": "A definition is a dictionary fact and cannot be argued.",
            "explanation": "An objective definition is a factual consensus; it cannot be argued against, meaning it is not defensible."
          }
        ]
      },
      {
        "id": "1.3",
        "title": "Paragraph Unity, Evidence Integration, and Commentary Fundamentals",
        "description": "Establish cohesion and unity in writing by integrating evidence alongside strong analytical commentary.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Paragraph Unity and Commentary Fundamentals\n\nA cohesive essay requires that every paragraph function as a unified unit of development. This is achieved through the integration of claims, evidence, and commentary.\n\n## Structuring the Unified Paragraph\nA body paragraph should follow a logical sequence:\n1. **Topic Sentence**: States the sub-claim of the paragraph.\n2. **Evidence**: Provides support (facts, direct quotes, anecdotes).\n3. **Commentary**: Explains *why* the evidence supports the claim and thesis.\n\n<svg width=\"400\" height=\"200\" viewBox=\"0 0 400 200\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <rect x=\"20\" y=\"20\" width=\"360\" height=\"40\" rx=\"8\" fill=\"rgba(251,113,133,0.1)\" stroke=\"#fb7185\" stroke-width=\"1.5\" />\n  <text x=\"200\" y=\"44\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\">Topic Sentence (Claim)</text>\n  <rect x=\"20\" y=\"80\" width=\"360\" height=\"40\" rx=\"8\" fill=\"rgba(56,189,248,0.1)\" stroke=\"#38bdf8\" stroke-width=\"1.5\" />\n  <text x=\"200\" y=\"104\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\">Evidence (Integration)</text>\n  <rect x=\"20\" y=\"140\" width=\"360\" height=\"40\" rx=\"8\" fill=\"rgba(52,211,153,0.1)\" stroke=\"#34d399\" stroke-width=\"1.5\" />\n  <text x=\"200\" y=\"164\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\">Commentary (Analysis)</text>\n</svg>\n\n## The Role of Commentary\nBeginning writers often drop evidence into paragraphs without explaining it. <vocab term=\"Commentary\" definition=\"The writer's explanation of how the evidence connects to and supports the topic sentence and overall thesis.\">Commentary</vocab> is the connective tissue of your writing. It explains the connection between the raw evidence and the abstract thesis, proving how the evidence works rhetorically.\n",
        "questions": [
          {
            "id": "q_eng_1.3.1",
            "unitId": 1,
            "text": "What is the primary function of commentary in a body paragraph?",
            "options": [
              "To summarize the quote in simpler words",
              "To provide additional sources that say the same thing",
              "To explain the logical connection between the evidence and the claim",
              "To introduce a new topic sentence"
            ],
            "correctIndex": 2,
            "hint": "Commentary explains the 'so what?' of the evidence.",
            "explanation": "Commentary does not merely summarize; it analyzes and explains how the integrated evidence supports the central claim."
          },
          {
            "id": "q_eng_1.3.2",
            "unitId": 1,
            "text": "Which of the following represents a paragraph unity error?",
            "options": [
              "Including multiple pieces of evidence that support the topic sentence",
              "Transitioning between sub-claims using conjunctive adverbs",
              "Introducing an unrelated claim inside a paragraph dedicated to a different sub-claim",
              "Writing a topic sentence that mirrors the thesis statement"
            ],
            "correctIndex": 2,
            "hint": "Unity means sticking to one central idea per paragraph.",
            "explanation": "Paragraph unity requires focusing on a single sub-claim; introducing separate claims breaks this structural cohesion."
          },
          {
            "id": "q_eng_1.3.3",
            "unitId": 1,
            "text": "A writer quotes a statistic but fails to write any commentary afterwards. This error is known as:",
            "options": [
              "Ad Hominem",
              "Dropped Quotation",
              "Logical Circularity",
              "Redundant Synthesis"
            ],
            "correctIndex": 1,
            "hint": "Occurs when quotes are isolated without analytical framing.",
            "explanation": "Dropping a quotation without surrounding context or post-quote analysis leaves the reader to do the work of connecting it to the thesis."
          },
          {
            "id": "q_eng_1.3.4",
            "unitId": 1,
            "text": "Where is the topic sentence of a paragraph traditionally placed to ensure maximum clarity?",
            "options": [
              "At the very beginning",
              "Directly in the middle",
              "At the very end",
              "It is usually omitted"
            ],
            "correctIndex": 0,
            "hint": "Sets the stage for what is to follow.",
            "explanation": "Placing the topic sentence at the start of the paragraph establishes a clear focus before presenting evidence."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Rhetorical Audience and Strategic Proof",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "2.1",
        "title": "Audience Beliefs, Values, and Situational Demands",
        "description": "Analyze how an audience's pre-existing values, biases, and circumstances dictate strategic rhetorical choices.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Audience Beliefs, Values, and Situational Demands\n\nEffective rhetoric is receiver-centric. To persuade, a speaker must align their message with the pre-existing beliefs, cultural values, and immediate demands of their audience.\n\n## Audience Analysis\nEvery audience has a set of <vocab term=\"Values\" definition=\"The core cultural, moral, or philosophical priorities held by an audience that influence their reception of a message.\">values</vocab> (moral, economic, or social priorities) and <vocab term=\"Beliefs\" definition=\"The assumptions or convictions that an audience holds to be true, regardless of empirical proof.\">beliefs</vocab> (pre-existing convictions about the world). An author must perform a demographic and situational analysis to determine what arguments will resonate.\n\n<svg width=\"400\" height=\"200\" viewBox=\"0 0 400 200\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <circle cx=\"130\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <circle cx=\"270\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#fb7185\" stroke-width=\"2\" />\n  <text x=\"130\" y=\"105\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-family=\"sans-serif\">Writer's Purpose</text>\n  <text x=\"270\" y=\"105\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"10\" font-family=\"sans-serif\">Audience Values</text>\n  <text x=\"200\" y=\"175\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">Overlap = Rhetorical Sweet Spot</text>\n</svg>\n\n## Situational Demands\nThe immediate occasion governs what is appropriate. For instance, a speech during a national crisis requires a different tone (reassuring, unifying) and structural proof than a campaign rally speech (energetic, divisive).\n",
        "questions": [
          {
            "id": "q_eng_2.1.1",
            "unitId": 2,
            "text": "When addressing an audience hostile to their position, a writer should strategically:",
            "options": [
              "Attack the audience's ethics directly to gain authority",
              "Establish common ground and validate their values before presenting claims",
              "Ignore the audience's stance and state facts aggressively",
              "Concede the entire argument immediately"
            ],
            "correctIndex": 1,
            "hint": "Hostility requires building bridges (ethos) first.",
            "explanation": "Establishing common ground reduces hostility and shows respect, increasing the likelihood the audience will consider the argument."
          },
          {
            "id": "q_eng_2.1.2",
            "unitId": 2,
            "text": "What term describes the moral, ethical, or economic priorities of an audience?",
            "options": [
              "Context",
              "Diction",
              "Values",
              "Fallacies"
            ],
            "correctIndex": 2,
            "hint": "Refers to what the audience considers important and good.",
            "explanation": "Values are the core concepts and priorities that guide an audience's judgments."
          },
          {
            "id": "q_eng_2.1.3",
            "unitId": 2,
            "text": "Which rhetorical situation would demand an objective, clinical tone?",
            "options": [
              "A eulogy for a public figure",
              "An activist speech urging immediate legislation",
              "A scientific research article defending a new vaccine formulation",
              "A concession speech after a political defeat"
            ],
            "correctIndex": 2,
            "hint": "Scientific audiences value empirical objectivity over emotional appeals.",
            "explanation": "Scientific review demands high ethos and logos, which are established via an objective, clinical tone."
          },
          {
            "id": "q_eng_2.1.4",
            "unitId": 2,
            "text": "Why must a speaker adapt their proofs when speaking to different demographics?",
            "options": [
              "Because logic is subjective and changes based on age",
              "Because different groups hold different foundational values and beliefs",
              "To show off their vocabulary size",
              "To confuse the opposing debaters"
            ],
            "correctIndex": 1,
            "hint": "What persuades an economist might not persuade a philosopher.",
            "explanation": "Adapting proofs ensures the argument aligns with the specific warrants and assumptions of that demographic group."
          }
        ]
      },
      {
        "id": "2.2",
        "title": "Strategic Evidence Selection, Citation Formats, and Synthesis Prep",
        "description": "Learn to select the most compelling evidence from multiple sources and cite them correctly.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Strategic Evidence Selection and Synthesis Prep\n\nSynthesis involves combining information from multiple sources to support a central argument. It is not merely summarizing sources, but entering a conversation with them.\n\n## Synthesis Preparation\nWhen preparing to write a synthesis essay:\n1. **Analyze the Prompt**: Identify the central topic and exigence.\n2. **Group the Sources**: Look for sources that agree, disagree, or qualify each other.\n3. **Create a Synthesis Matrix**: A table to map out which sources support which sub-claims.\n\n| Sub-Claim | Supporting Sources | Opposing Sources |\n| :--- | :--- | :--- |\n| **Claim A** (Economic) | Source A, Source C | Source B |\n| **Claim B** (Environmental) | Source B, Source D | Source A |\n\n## Citation and Attribution\nAll sourced arguments must be acknowledged. Failing to properly attribute information leads to plagiarism. Proper <vocab term=\"Attribution\" definition=\"Acknowledge the source of information or ideas used in a text, typically using parenthetical citations or signal phrases.\">attribution</vocab> requires:\n- **Signal Phrases**: In-text cues that introduce a source (e.g., *\"According to Source A...\"*).\n- **Parenthetical Citations**: Ending a quote or paraphrase with the author/source identifier (e.g., `(Source B)`).\n",
        "questions": [
          {
            "id": "q_eng_2.2.1",
            "unitId": 2,
            "text": "What is the primary objective when preparing a synthesis argument?",
            "options": [
              "To summarize each provided source one by one",
              "To copy quotes word-for-word without any commentary",
              "To integrate multiple sources to support your own defensible claim",
              "To prove that all provided sources are completely incorrect"
            ],
            "correctIndex": 2,
            "hint": "Synthesis means combining parts into a unified whole.",
            "explanation": "Synthesis combines different source perspectives to build and substantiate the writer's independent argument."
          },
          {
            "id": "q_eng_2.2.2",
            "unitId": 2,
            "text": "Which of the following is an example of proper attribution using a signal phrase?",
            "options": [
              "Climate change is worsening rapidly.",
              "Source C argues that economic growth must be balanced with conservation.",
              "Economic growth must be balanced with conservation (Source C).",
              "I believe that economic growth must be balanced with conservation."
            ],
            "correctIndex": 1,
            "hint": "A signal phrase incorporates the attribution directly into the grammatical structure of the sentence.",
            "explanation": "'Source C argues that...' is a signal phrase that integrates the attribution into the prose itself."
          },
          {
            "id": "q_eng_2.2.3",
            "unitId": 2,
            "text": "A writer uses ideas from Source D but changes the words completely. What must they still do?",
            "options": [
              "Nothing, because paraphrasing does not require citation",
              "Cite the source to attribute the underlying ideas",
              "Change the thesis statement to match Source D",
              "Email the original author for explicit permission"
            ],
            "correctIndex": 1,
            "hint": "Plagiarism applies to ideas, not just exact wording.",
            "explanation": "Paraphrased ideas still require citation to properly credit the original creator of the argument."
          },
          {
            "id": "q_eng_2.2.4",
            "unitId": 2,
            "text": "When synthesizing sources, what is a 'synthesis matrix' used for?",
            "options": [
              "To check the spelling of author names",
              "To map out relationships and groupings among sources and claims",
              "To calculate the page length of the essay",
              "To generate the final bibliography automatically"
            ],
            "correctIndex": 1,
            "hint": "It is an organizational tool used in planning.",
            "explanation": "A synthesis matrix helps organize sources by sub-claims to see where they intersect, support, or contradict each other."
          }
        ]
      },
      {
        "id": "2.3",
        "title": "Structural Introductions, Thesis Refinement, and Contextual Framing",
        "description": "Craft engaging introductions that orient the reader, establish context, and project a defensible thesis.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Structural Introductions and Contextual Framing\n\nThe introduction of an essay acts as a roadmap, guiding the reader from a broad area of interest to the specific claim of your thesis statement.\n\n## The Architecture of an Introduction\nA standard academic introduction follows a funnel shape:\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <polygon points=\"20,20 380,20 250,130 150,130\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"2.5\" />\n  <text x=\"200\" y=\"45\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"10\" font-family=\"sans-serif\">1. HOOK / BROAD OPENING</text>\n  <text x=\"200\" y=\"80\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"10\" font-family=\"sans-serif\">2. CONTEXTUAL FRAMING</text>\n  <text x=\"200\" y=\"115\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">3. DEFENSIBLE THESIS</text>\n</svg>\n\n1. **Hook**: Attracts attention. Avoid clich\u00e9s or overly broad generalizations.\n2. **Contextual Frame**: Prepares the audience by introducing key concepts, historical facts, or background details.\n3. **Thesis Statement**: The most specific sentence, typically placed at the end of the introduction.\n\n## Refining the Thesis\nAs you draft your essay, your argument may evolve. It is critical to go back and refine your thesis statement to ensure it matches the actual body paragraph claims of your final paper.\n",
        "questions": [
          {
            "id": "q_eng_2.3.1",
            "unitId": 2,
            "text": "Where is the thesis statement traditionally placed in an academic introduction?",
            "options": [
              "As the opening hook sentence",
              "Directly after the hook, before any context",
              "At the very end of the introductory paragraph",
              "It is placed in the first body paragraph instead"
            ],
            "correctIndex": 2,
            "hint": "It serves as the final launching point into the body paragraphs.",
            "explanation": "Placing the thesis statement at the end of the introduction provides a clear, logical transition into the body of the essay."
          },
          {
            "id": "q_eng_2.3.2",
            "unitId": 2,
            "text": "What is the purpose of 'contextual framing' in an introduction?",
            "options": [
              "To define every single word in the prompt",
              "To orient the reader with background information necessary to understand the debate",
              "To state your final conclusion before arguing it",
              "To list all the sources you will cite in alphabetical order"
            ],
            "correctIndex": 1,
            "hint": "Prepares the reader for the thesis.",
            "explanation": "Contextual framing establishes the background and stakes of the topic, making the thesis statement meaningful to the reader."
          },
          {
            "id": "q_eng_2.3.3",
            "unitId": 2,
            "text": "Which of the following is considered a weak hook for an essay on technology in schools?",
            "options": [
              "Since the dawn of time, mankind has always sought out tools to learn.",
              "In 2024, over 80% of classrooms integrated tablets into their daily curriculum.",
              "When the blackboard was first introduced, critics feared it would ruin student memory.",
              "Educational technology has transformed the traditional classroom environment."
            ],
            "correctIndex": 0,
            "hint": "Clich\u00e9s like 'Since the dawn of time' are overly broad and say nothing specific.",
            "explanation": "'Since the dawn of time...' is a massive, unprovable generalization that dilutes the focus of the introduction."
          },
          {
            "id": "q_eng_2.3.4",
            "unitId": 2,
            "text": "If a writer changes their body claims during drafting, they should:",
            "options": [
              "Keep their original thesis and ignore the discrepancy",
              "Revise the thesis statement to align with the new arguments",
              "Delete the body paragraphs and start over",
              "Write a second thesis statement in the conclusion"
            ],
            "correctIndex": 1,
            "hint": "The thesis must always accurately reflect the body content.",
            "explanation": "Refining the thesis statement during or after drafting ensures that the essay's core claim matches its actual arguments."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Synthesis and Multi-Perspective Arguments",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "3.1",
        "title": "Analyzing Multiple Perspectives, Biases, and Source Synthesis",
        "description": "Evaluate opposing source perspectives and synthesize them into a multi-faceted argument.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Analyzing Multiple Perspectives and Source Synthesis\n\nSynthesis is more than citing sources that agree with you. A robust argument engages with counter-arguments, concessions, and complex viewpoints.\n\n## Identifying Source Bias\nEvery source is written within a specific context and may carry inherent <vocab term=\"Bias\" definition=\"A predisposition or prejudice for or against a particular topic, source, or perspective.\">bias</vocab> (political, economic, or philosophical). When analyzing sources, check:\n- **Funding & Affiliation**: Who sponsored the study or text?\n- **Tone**: Is the diction objective, or emotionally loaded?\n- **Selection of Facts**: Does the source ignore conflicting data?\n\n## Synthesizing Opposing Perspectives\nWhen writing a synthesis essay, try to put sources in conversation with each other:\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <circle cx=\"100\" cy=\"75\" r=\"40\" fill=\"rgba(56,189,248,0.1)\" stroke=\"#38bdf8\" stroke-width=\"1.5\" />\n  <circle cx=\"300\" cy=\"75\" r=\"40\" fill=\"rgba(244,63,94,0.1)\" stroke=\"#f43f5e\" stroke-width=\"1.5\" />\n  <text x=\"100\" y=\"80\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-family=\"sans-serif\">Source A (Pro)</text>\n  <text x=\"300\" y=\"80\" text-anchor=\"middle\" fill=\"#f43f5e\" font-size=\"10\" font-family=\"sans-serif\">Source B (Con)</text>\n  <path d=\"M 145 75 L 255 75\" stroke=\"#ffffff\" stroke-width=\"2\" marker-end=\"url(#arrow)\" />\n  <text x=\"200\" y=\"65\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"9\" font-family=\"sans-serif\">Dialogue</text>\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#ffffff\" />\n    </marker>\n  </defs>\n</svg>\n\n- **Agreements**: *\"Source A and Source C agree on the severity...\"*\n- **Contradictions**: *\"While Source A claims benefits, Source B exposes hidden costs...\"*\n- **Qualifications**: *\"Source C supports Source A, but only under specific regulations...\"*\n",
        "questions": [
          {
            "id": "q_eng_3.1.1",
            "unitId": 3,
            "text": "What is the primary benefit of including multiple perspectives in a synthesis essay?",
            "options": [
              "It makes the essay longer and satisfies word count requirements.",
              "It demonstrates nuance and a deeper understanding of the debate's complexity.",
              "It shows that the author does not have their own opinion.",
              "It allows the writer to avoid writing any original commentary."
            ],
            "correctIndex": 1,
            "hint": "Nuance is key to a sophisticated argument.",
            "explanation": "Engaging with multiple, conflicting viewpoints proves the writer understands the complexity of the topic."
          },
          {
            "id": "q_eng_3.1.2",
            "unitId": 3,
            "text": "Which of the following indicates potential bias in a source?",
            "options": [
              "The source cites statistics from a peer-reviewed journal.",
              "The author is funded by an organization that benefits from the study's results.",
              "The text presents both arguments with an objective, neutral tone.",
              "The source lists counterarguments before refuting them."
            ],
            "correctIndex": 1,
            "hint": "Look for financial or alignment incentives.",
            "explanation": "Financial backing by an interested party creates a conflict of interest, indicating potential bias."
          },
          {
            "id": "q_eng_3.1.3",
            "unitId": 3,
            "text": "How can a writer put two sources 'in conversation' with each other?",
            "options": [
              "By summarizing Source A in paragraph 2 and Source B in paragraph 3",
              "By directly comparing their assertions on the same claim within a single paragraph",
              "By writing a dialogue script between the two authors",
              "By ignoring one source completely in favor of the other"
            ],
            "correctIndex": 1,
            "hint": "This is the essence of synthetic integration.",
            "explanation": "Comparing or contrasting sources directly on a specific point shows active synthesis rather than isolated summarizing."
          },
          {
            "id": "q_eng_3.1.4",
            "unitId": 3,
            "text": "If Source A is highly biased, should a synthesis writer exclude it completely?",
            "options": [
              "Yes, biased sources are never allowed in academic writing.",
              "No, but the writer should acknowledge the source's bias when evaluating its claims.",
              "Yes, because bias ruins the writer's thesis.",
              "No, the writer should pretend the source is completely objective."
            ],
            "correctIndex": 1,
            "hint": "Biased sources can still be valuable if analyzed critically.",
            "explanation": "Biased sources are valid pieces of evidence as long as the writer critically frames their perspective and motivations."
          }
        ]
      },
      {
        "id": "3.2",
        "title": "Attribution Methods, Direct Quotations, and Evidence Integration",
        "description": "Learn advanced methods for integrating direct quotations and attributing evidence seamlessly.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Attribution Methods and Evidence Integration\n\nIntegrating evidence smoothly keeps your writing professional and maintains your authorial voice.\n\n## Direct Quotations vs. Paraphrase\n- <vocab term=\"Direct Quotation\" definition=\"The exact duplication of an author's words inside quotation marks, attributed to the original source.\">Direct Quotation</vocab>: Duplicating the exact words of a source. Use when the original language is uniquely powerful or precise.\n- <vocab term=\"Paraphrase\" definition=\"Restating a source's ideas in your own words, maintaining the original meaning while changing the vocabulary and structure.\">Paraphrase</vocab>: Restating the source's ideas in your own words. Use to maintain a consistent style and voice.\n\n## Syntactic Integration of Quotes\nQuotes should never be dropped into your paragraph as standalone sentences. They must be syntactically integrated:\n- **Weak (Dropped Quote)**: *Education funding is declining. \"Schools lost 10% of budgets\" (Source A).*\n- **Strong (Integrated)**: *As noted in Source A, modern education systems face crisis because \"schools lost 10% of budgets.\"*\n\nUse brackets `[ ]` to modify grammar inside a quote, and ellipses `...` to omit irrelevant text.\n",
        "questions": [
          {
            "id": "q_eng_3.2.1",
            "unitId": 3,
            "text": "Which of the following represents a syntactically integrated quotation?",
            "options": [
              "Many species are facing extinction. 'Wildlife populations fell by 50%' (Source C).",
              "According to Source C, wildlife populations have fallen 'by 50%' over the last decade.",
              "Wildlife populations fell by 50%. (Source C)",
              "Wildlife populations are falling. 'Fell by 50%' is the statistic."
            ],
            "correctIndex": 1,
            "hint": "Look for the sentence where the quote is part of the natural grammatical flow.",
            "explanation": "Integrating the quote into the flow of the sentence creates a seamless transition between the writer's voice and the source's evidence."
          },
          {
            "id": "q_eng_3.2.2",
            "unitId": 3,
            "text": "What is the purpose of using ellipses (...) inside a direct quotation?",
            "options": [
              "To show that the author is pausing to think",
              "To indicate that words have been omitted from the middle of the quote",
              "To emphasize a specific keyword",
              "To fix a spelling error made by the original author"
            ],
            "correctIndex": 1,
            "hint": "Represents a physical gap in the text.",
            "explanation": "Ellipses indicate that irrelevant words have been removed from the source quote without changing its original meaning."
          },
          {
            "id": "q_eng_3.2.3",
            "unitId": 3,
            "text": "When should you use brackets [ ] inside a direct quotation?",
            "options": [
              "To define a difficult vocabulary word for the reader",
              "To indicate that you have modified a word or capitalization to fit the sentence's grammar",
              "To show that the quote is from a primary source",
              "To highlight a factual error in the source"
            ],
            "correctIndex": 1,
            "hint": "Brackets show that the editor made a grammatical correction or change to the quote.",
            "explanation": "Brackets indicate that words or letters have been altered to align the quote with the writer's sentence structure."
          },
          {
            "id": "q_eng_3.2.4",
            "unitId": 3,
            "text": "Paraphrasing a source is preferred over direct quoting when:",
            "options": [
              "The original quote is too long and complex",
              "You want to maintain your own consistent voice and flow",
              "The exact phrasing is not particularly unique or memorable",
              "All of the above"
            ],
            "correctIndex": 3,
            "hint": "Paraphrase is a powerful tool to maintain style and pacing.",
            "explanation": "Paraphrasing is ideal for long passages, maintaining authorial style, and integrating standard factual data."
          }
        ]
      },
      {
        "id": "3.3",
        "title": "Lines of Reasoning, Logical Fallacies, and Structural Cohesion",
        "description": "Establish a clear line of reasoning and identify flaws in arguments (logical fallacies).",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Lines of Reasoning and Logical Fallacies\n\nA successful essay maintains a consistent logic. This logical path is known as the line of reasoning.\n\n## Constructing a Line of Reasoning\nA <vocab term=\"Line of Reasoning\" definition=\"The logical sequence of claims, reasons, and evidence that leads a reader through an argument to a conclusion.\">line of reasoning</vocab> is the logical thread that connects your thesis to your conclusion. Each body paragraph must act as a stepping stone, building upon the previous one to construct a cohesive argument.\n\n## Common Logical Fallacies\nA <vocab term=\"Logical Fallacy\" definition=\"An error in reasoning that invalidates or weakens an argument.\">logical fallacy</vocab> is a flaw in reasoning that undermines an argument. Common fallacies include:\n- **Ad Hominem**: Attacking the speaker instead of the argument.\n- **Straw Man**: Misrepresenting an opponent's argument to make it easier to attack.\n- **False Dilemma**: Presenting only two choices when more exist.\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <rect x=\"30\" y=\"30\" width=\"100\" height=\"80\" rx=\"10\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <rect x=\"270\" y=\"30\" width=\"100\" height=\"80\" rx=\"10\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" />\n  <text x=\"80\" y=\"75\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\">Option A</text>\n  <text x=\"320\" y=\"75\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"bold\">Option B</text>\n  <text x=\"200\" y=\"75\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"10\">OR</text>\n  <text x=\"200\" y=\"130\" text-anchor=\"middle\" fill=\"#ef4444\" font-size=\"10\" font-weight=\"bold\">(Ignored Options C, D, E)</text>\n</svg>\n",
        "questions": [
          {
            "id": "q_eng_3.3.1",
            "unitId": 3,
            "text": "Which logical fallacy occurs when a writer simplifies or distorts an opponent's argument to make it easier to knock down?",
            "options": [
              "Ad Hominem",
              "Straw Man",
              "False Dilemma",
              "Slippery Slope"
            ],
            "correctIndex": 1,
            "hint": "Think of a fake decoy man made of straw.",
            "explanation": "A straw man fallacy misrepresents an opponent's actual argument to create an easily refuted target."
          },
          {
            "id": "q_eng_3.3.2",
            "unitId": 3,
            "text": "What does a clear 'line of reasoning' provide to an argumentative essay?",
            "options": [
              "A list of grammatical errors to avoid",
              "A logical progression of claims and evidence that leads to a clear conclusion",
              "A summary of the opposing side's counterclaims",
              "A complex vocabulary list"
            ],
            "correctIndex": 1,
            "hint": "It acts as a conceptual thread or bridge.",
            "explanation": "The line of reasoning connects all sub-claims and evidence back to the thesis, ensuring the essay follows a logical progression."
          },
          {
            "id": "q_eng_3.3.3",
            "unitId": 3,
            "text": "An advertisement claims: 'Either buy this security system, or accept that your family is unsafe.' This is a:",
            "options": [
              "Red Herring",
              "False Dilemma",
              "Hasty Generalization",
              "Circular Argument"
            ],
            "correctIndex": 1,
            "hint": "Limits options to only two extreme choices.",
            "explanation": "A false dilemma forces the audience to choose between two extreme options, ignoring valid alternatives."
          },
          {
            "id": "q_eng_3.3.4",
            "unitId": 3,
            "text": "Why are logical fallacies dangerous in persuasive writing?",
            "options": [
              "They make the essay too long.",
              "They weaken the logical appeal (logos) and undermine the writer's credibility (ethos).",
              "They confuse the formatting guidelines.",
              "They make the thesis statement indefensible."
            ],
            "correctIndex": 1,
            "hint": "Logical errors alienate critical readers.",
            "explanation": "Fallacies expose logical gaps in the argument, damaging the author's ethos and logos."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Methods of Development and Structural Framing",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "4.1",
        "title": "Narrative, Cause-Effect, and Comparison-Contrast Methods",
        "description": "Select the appropriate method of development to organize and structure your rhetorical analysis or argument.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Methods of Development\n\nA method of development is the organizational pattern an author uses to structure their argument. Choosing the right pattern is a key strategic decision.\n\n## Common Methods of Development\n- **Narration**: Telling a story or detailing events in chronological order. Often used in anecdotes to build pathos.\n- **Cause-Effect**: Explaining the relationship between a cause and its consequences.\n- **Comparison-Contrast**: Highlighting similarities and differences between two subjects to reveal deeper truths.\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <rect x=\"30\" y=\"30\" width=\"120\" height=\"80\" rx=\"8\" fill=\"rgba(251,113,133,0.05)\" stroke=\"#fb7185\" stroke-width=\"1.5\" />\n  <rect x=\"250\" y=\"30\" width=\"120\" height=\"80\" rx=\"8\" fill=\"rgba(56,189,248,0.05)\" stroke=\"#38bdf8\" stroke-width=\"1.5\" />\n  <text x=\"90\" y=\"75\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"11\" font-weight=\"bold\">Subject A</text>\n  <text x=\"310\" y=\"75\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\">Subject B</text>\n  <path d=\"M 160 55 L 240 55\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <path d=\"M 160 85 L 240 85\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" />\n  <text x=\"200\" y=\"50\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"8\">Similarities</text>\n  <text x=\"200\" y=\"100\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"8\">Differences</text>\n</svg>\n\n## Strategic Choices\nAn author may combine multiple <vocab term=\"Methods of Development\" definition=\"Organizational patterns (like narration, comparison-contrast, cause-effect) used to structure an argument.\">methods of development</vocab> inside an essay. For instance, a writer might open with a short narrative anecdote, transition to a comparison-contrast analysis, and close with a cause-effect warning.\n",
        "questions": [
          {
            "id": "q_eng_4.1.1",
            "unitId": 4,
            "text": "Which method of development focuses primarily on telling a chronological story to make a point?",
            "options": [
              "Comparison-Contrast",
              "Narration",
              "Definition",
              "Classification"
            ],
            "correctIndex": 1,
            "hint": "Think of a narrative plot.",
            "explanation": "Narration organizes information chronologically to present events or stories."
          },
          {
            "id": "q_eng_4.1.2",
            "unitId": 4,
            "text": "An essay arguing that increased screen time is leading to sleep deprivation is using which method of development?",
            "options": [
              "Description",
              "Narration",
              "Cause-Effect",
              "Process Analysis"
            ],
            "correctIndex": 2,
            "hint": "Look for the link between an action (cause) and its result (effect).",
            "explanation": "Cause-effect explains the causal relationships and consequences of actions or phenomena."
          },
          {
            "id": "q_eng_4.1.3",
            "unitId": 4,
            "text": "What is the primary function of the Comparison-Contrast method?",
            "options": [
              "To list all the sources in alphabetical order",
              "To highlight similarities and differences between two or more subjects to analyze them",
              "To define a scientific word",
              "To tell a humorous personal story"
            ],
            "correctIndex": 1,
            "hint": "Examines parallel attributes.",
            "explanation": "Comparison-contrast analyzes multiple subjects by identifying points of similarity and difference."
          },
          {
            "id": "q_eng_4.1.4",
            "unitId": 4,
            "text": "Can a writer use multiple methods of development in a single essay?",
            "options": [
              "No, writers must select one method and stick to it strictly.",
              "Yes, different paragraphs can use different methods to support the overall thesis.",
              "Only if the essay is longer than ten pages.",
              "No, it violates the rule of paragraph unity."
            ],
            "correctIndex": 1,
            "hint": "Rhetoric is flexible and strategic.",
            "explanation": "A writer can combine different methods of development across paragraphs to build a complex, multi-faceted argument."
          }
        ]
      },
      {
        "id": "4.2",
        "title": "Active Structural Organization, Transitions, and Rhetorical Progression",
        "description": "Create logical flow and structural cohesion using advanced transitions and signposting.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Active Structural Organization and Transitions\n\nA logical argument requires active structural organization. This means the essay moves deliberately from one point to another, signposted by transitions.\n\n## Types of Transitions\nTransitions are not just simple words like *\"Therefore\"* or *\"However\"*. Sophisticated writers use **conceptual transitions** to link ideas:\n- **Addition**: *Furthermore, in addition, moreover...*\n- **Contrast**: *Conversely, on the other hand, nevertheless...*\n- **Sequence/Logic**: *Consequently, as a result, subsequently...*\n\n## Rhetorical Progression\nA strong <vocab term=\"Transition\" definition=\"Words, phrases, or sentences that connect ideas, sentences, or paragraphs, guiding the reader through the logical progression.\">transition</vocab> acts as a bridge. It connects the previous paragraph's conclusion to the current paragraph's claim, maintaining a continuous line of reasoning.\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <rect x=\"20\" y=\"45\" width=\"130\" height=\"60\" rx=\"10\" fill=\"none\" stroke=\"#fb7185\" stroke-width=\"2\" />\n  <rect x=\"250\" y=\"45\" width=\"130\" height=\"60\" rx=\"10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" />\n  <text x=\"85\" y=\"80\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"10\" font-family=\"sans-serif\">Paragraph A (Ideals)</text>\n  <text x=\"315\" y=\"80\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-family=\"sans-serif\">Paragraph B (Reality)</text>\n  <path d=\"M 160 75 L 240 75\" stroke=\"#ffffff\" stroke-width=\"2\" marker-end=\"url(#arrow-trans)\" />\n  <text x=\"200\" y=\"65\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"9\" font-family=\"sans-serif\">\"However...\"</text>\n  <defs>\n    <marker id=\"arrow-trans\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#ffffff\" />\n    </marker>\n  </defs>\n</svg>\n",
        "questions": [
          {
            "id": "q_eng_4.2.1",
            "unitId": 4,
            "text": "Which of the following transition words indicates a logical consequence or result?",
            "options": [
              "Furthermore",
              "Conversely",
              "Consequently",
              "Moreover"
            ],
            "correctIndex": 2,
            "hint": "Relates to the cause-and-effect relationship.",
            "explanation": "'Consequently' shows that the following statement is a direct result of the preceding one."
          },
          {
            "id": "q_eng_4.2.2",
            "unitId": 4,
            "text": "What is a 'conceptual transition'?",
            "options": [
              "A transition word placed inside parenthesis",
              "A phrase or sentence that links the core ideas of two paragraphs, rather than just using a simple connector word",
              "A transition that defines a new thesis",
              "A transition that is written in active voice only"
            ],
            "correctIndex": 1,
            "hint": "Moves beyond simple words like 'However'.",
            "explanation": "Conceptual transitions summarize the previous paragraph's argument and connect it logically to the next point, establishing a strong line of reasoning."
          },
          {
            "id": "q_eng_4.2.3",
            "unitId": 4,
            "text": "Which transition would be best to introduce a sharp counterargument?",
            "options": [
              "In addition",
              "Subsequently",
              "Conversely",
              "Similarly"
            ],
            "correctIndex": 2,
            "hint": "Indicates opposite direction or opposition.",
            "explanation": "'Conversely' signals that the argument is moving in an opposite direction, introducing contrast."
          },
          {
            "id": "q_eng_4.2.4",
            "unitId": 4,
            "text": "If an essay lacks transitions, how is it perceived by the reader?",
            "options": [
              "It feels unified and clear.",
              "It feels disjointed, jumpy, and hard to follow logically.",
              "It reads as a scientific text.",
              "It achieves the sophistication point automatically."
            ],
            "correctIndex": 1,
            "hint": "Transitions are the bridges between ideas.",
            "explanation": "Without transitions, ideas appear isolated and disjointed, disrupting the flow of the line of reasoning."
          }
        ]
      },
      {
        "id": "4.3",
        "title": "Conclusion Crafting, Broader Implications, and Final Impressions",
        "description": "Write conclusions that go beyond simple summarization to explore broader implications and leave lasting impressions.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Conclusion Crafting and Broader Implications\n\nThe conclusion is your final opportunity to persuade the reader. A weak conclusion merely restates the introduction; a strong conclusion elevates the argument.\n\n## Moving Beyond Summarization\nAvoid simply copying your thesis statement. Instead, a successful conclusion should:\n1. **Synthesize**: Briefly draw together the main threads of the argument.\n2. **Contextualize**: Connect your specific claim back to the broader rhetorical situation.\n3. **Explore Implications**: Answer the *\"So what?\"* question. Why does this argument matter in the real world?\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <polygon points=\"150,20 250,20 380,130 20,130\" fill=\"none\" stroke=\"#fb7185\" stroke-width=\"2.5\" />\n  <text x=\"200\" y=\"45\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"11\" font-weight=\"bold\">1. RESTATED THESIS</text>\n  <text x=\"200\" y=\"80\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"10\" font-family=\"sans-serif\">2. SYNTHESIS OF POINTS</text>\n  <text x=\"200\" y=\"115\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"10\" font-family=\"sans-serif\">3. BROADER IMPLICATIONS (So What?)</text>\n</svg>\n\n## Leaving a Final Impression\nEnd with a strong, memorable statement. This could be a warning, a call to action, or a connection to a larger historical pattern.\n",
        "questions": [
          {
            "id": "q_eng_4.3.1",
            "unitId": 4,
            "text": "A strong conclusion should answer which core question for the reader?",
            "options": [
              "What page number is this?",
              "Who is the opponent?",
              "So what? Why does this argument matter?",
              "Can I read a summary of the introduction?"
            ],
            "correctIndex": 2,
            "hint": "Refers to the real-world stakes and significance of the argument.",
            "explanation": "The conclusion should outline the broader significance and implications of the argument, explaining why the topic matters."
          },
          {
            "id": "q_eng_4.3.2",
            "unitId": 4,
            "text": "What is a common pitfall of concluding paragraphs?",
            "options": [
              "Introducing the thesis statement for the first time",
              "Exploring broader historical patterns",
              "Merely restating the introduction and summary of points in identical words",
              "Synthesizing multiple perspectives"
            ],
            "correctIndex": 2,
            "hint": "Makes the conclusion feel repetitive and redundant.",
            "explanation": "Simply repeating the introduction without expanding or showing development makes the ending feel dry and uninspired."
          },
          {
            "id": "q_eng_4.3.3",
            "unitId": 4,
            "text": "Which of the following would be an appropriate final sentence for a rhetorical essay on environmental speech?",
            "options": [
              "In conclusion, the speech was very good.",
              "The speaker ended their talk at noon.",
              "If society ignores these warnings, the silence of the forests will speak louder than any activist.",
              "Thus, the author used three rhetorical appeals."
            ],
            "correctIndex": 2,
            "hint": "Look for the sentence that leaves a deep, memorable implication.",
            "explanation": "Ending with a powerful statement on the consequences of ignoring the warning leaves a lasting impression."
          },
          {
            "id": "q_eng_4.3.4",
            "unitId": 4,
            "text": "When restating the thesis in the conclusion, a writer should:",
            "options": [
              "Copy it word-for-word from the introduction",
              "Rephrase the core claim in a way that reflects the development of the essay's arguments",
              "Omit the thesis statement entirely",
              "Write a completely new, unrelated claim"
            ],
            "correctIndex": 1,
            "hint": "The thesis should show evolution/insight after the body arguments have been read.",
            "explanation": "Rephrasing the thesis statement allows the writer to present their position with the added weight of the essay's proof."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Textual Coherence and Stylistic Control",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "5.1",
        "title": "Lines of Reasoning, Claims, and Analytical Commentary",
        "description": "Trace and support an analytical line of reasoning through deep structural commentary.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Lines of Reasoning and Analytical Commentary\n\nTextual coherence is the smooth, logical alignment of all elements in an essay. It requires that your claims and commentary reinforce the line of reasoning.\n\n## Tracing the Line of Reasoning\nTo check if your essay has coherence, outline it:\n- **Thesis**: *\"Scientific research should be publicly funded.\"*\n  - **Body 1 (Claim)**: Public funding democratizes research results.\n  - **Body 2 (Claim)**: Corporate funding shifts focus toward profits.\n  - **Body 3 (Claim)**: Government oversight ensures ethical bounds.\n- **Coherence Check**: Do these claims logically follow each other? Yes.\n\n## Writing Strong Commentary\nCoherence breaks down when a writer fails to connect claims. <vocab term=\"Analytical Commentary\" definition=\"Text explaining the rhetorical mechanism, purposes, and logical links of a quote to the thesis.\">Analytical commentary</vocab> makes these linkages explicit by explaining *how* and *why* the claim validates the overall position.\n",
        "questions": [
          {
            "id": "q_eng_5.1.1",
            "unitId": 5,
            "text": "If a body paragraph's claim is unrelated to the central thesis, the essay suffers from a lack of:",
            "options": [
              "Coherence",
              "Ethos",
              "Diction",
              "Syntactic Variety"
            ],
            "correctIndex": 0,
            "hint": "Refers to the logical consistency and connection of all parts.",
            "explanation": "Coherence requires that all paragraph claims directly support and build towards the central thesis statement."
          },
          {
            "id": "q_eng_5.1.2",
            "unitId": 5,
            "text": "What is the primary method to ensure textual coherence in draft writing?",
            "options": [
              "Using a different font for each claim",
              "Outlining the logical progression of claims before writing",
              "Avoiding the use of paragraph breaks",
              "Removing the thesis statement completely"
            ],
            "correctIndex": 1,
            "hint": "A blueprint prevents logical deviations.",
            "explanation": "Outlining maps out the sequence of claims, ensuring the line of reasoning remains logical and focused."
          },
          {
            "id": "q_eng_5.1.3",
            "unitId": 5,
            "text": "Which sentence represents strong analytical commentary rather than mere summary?",
            "options": [
              "The author states that 50% of forests are lost.",
              "The author's use of industrial imagery emphasizes the destructive scale of deforestation, forcing the audience to confront their environmental footprints.",
              "Deforestation is happening in South America.",
              "Source B lists several causes of deforestation."
            ],
            "correctIndex": 1,
            "hint": "Look for the sentence explaining 'how' the author's choice affects the audience's mind.",
            "explanation": "Analyzing the choice of imagery and its impact on the reader is the hallmark of strong commentary."
          },
          {
            "id": "q_eng_5.1.4",
            "unitId": 5,
            "text": "How does commentary build the line of reasoning?",
            "options": [
              "It adds fluff to meet page count.",
              "It binds the concrete evidence directly to the abstract claim and thesis.",
              "It replaces the introduction.",
              "It allows the author to use simple diction."
            ],
            "correctIndex": 1,
            "hint": "Acts as the logical bridge.",
            "explanation": "Commentary explains the underlying reasoning, bridging the gap between raw data and the thesis statement."
          }
        ]
      },
      {
        "id": "5.2",
        "title": "Transitional Devices, Textual Unity, and Structural Progressions",
        "description": "Employ transitional devices to show relationships between ideas and ensure paragraph unity.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Transitional Devices and Textual Unity\n\nTextual unity is the alignment of all sentences in a paragraph around a single topic. Transitions are the tools that establish this unity.\n\n## Categories of Transitional Devices\nDifferent transition types establish different logical relationships:\n- **Comparison**: *Similarly, likewise, in the same way...*\n- **Concession**: *Granted, admittedly, of course...*\n- **Clarification**: *In other words, specifically, to clarify...*\n\n## Structural Progression\nA unified paragraph flows from sentence to sentence without abrupt shifts. If you introduce a counterpoint, use a <vocab term=\"Concessive Transition\" definition=\"A transition that acknowledges a limitation or counterpoint before asserting the primary claim.\">concessive transition</vocab> to acknowledge it before reinforcing your main claim.\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <path d=\"M 30 75 Q 115 20 200 75 T 370 75\" fill=\"none\" stroke=\"#34d399\" stroke-width=\"2.5\" stroke-dasharray=\"3,3\" />\n  <circle cx=\"30\" cy=\"75\" r=\"10\" fill=\"#34d399\" />\n  <circle cx=\"200\" cy=\"75\" r=\"10\" fill=\"#fb7185\" />\n  <circle cx=\"370\" cy=\"75\" r=\"10\" fill=\"#34d399\" />\n  <text x=\"30\" y=\"105\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"9\" font-family=\"sans-serif\">Point A</text>\n  <text x=\"200\" y=\"105\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"9\" font-family=\"sans-serif\">Concession / Dip</text>\n  <text x=\"370\" y=\"105\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"9\" font-family=\"sans-serif\">Reaffirmation</text>\n</svg>\n",
        "questions": [
          {
            "id": "q_eng_5.2.1",
            "unitId": 5,
            "text": "Which transitional word is best suited for introducing a clarification of a complex point?",
            "options": [
              "Admittedly",
              "In other words",
              "On the contrary",
              "Consequently"
            ],
            "correctIndex": 1,
            "hint": "Implies restating the same idea in a simpler way.",
            "explanation": "'In other words' introduces a restatement or clarification of the previous sentence."
          },
          {
            "id": "q_eng_5.2.2",
            "unitId": 5,
            "text": "How does a concessive transition assist in an argument?",
            "options": [
              "It disproves the author's own thesis.",
              "It acknowledges a valid counterpoint, building ethos, before reinforcing the main claim.",
              "It simplifies the essay's grammar.",
              "It introduces a new method of development."
            ],
            "correctIndex": 1,
            "hint": "Shows fair-mindedness (credibility).",
            "explanation": "Concessions build credibility by proving the author has considered opposing arguments rather than ignoring them."
          },
          {
            "id": "q_eng_5.2.3",
            "unitId": 5,
            "text": "A paragraph has five sentences. Three support the claim, but two discuss a completely different topic. This violates:",
            "options": [
              "Textual Unity",
              "Diction",
              "Syntactic Variety",
              "Grammar"
            ],
            "correctIndex": 0,
            "hint": "Unity means having one unified focus per paragraph.",
            "explanation": "Including sentences on unrelated topics breaks paragraph unity and confuses the reader."
          },
          {
            "id": "q_eng_5.2.4",
            "unitId": 5,
            "text": "Which transition signals addition of supplementary evidence?",
            "options": [
              "Nevertheless",
              "In addition",
              "Conversely",
              "Meanwhile"
            ],
            "correctIndex": 1,
            "hint": "Used to add another supporting detail.",
            "explanation": "'In addition' indicates the author is introducing more supporting evidence."
          }
        ]
      },
      {
        "id": "5.3",
        "title": "Sentence-Level Coherence, Parallelism, and Syntactic Variety",
        "description": "Enhance style and coherence at the sentence level using parallel structures and syntactic variety.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Sentence-Level Coherence and Parallelism\n\nCoherence must exist within sentences. This is achieved through parallelism and sentence variety.\n\n## Parallel Structure\n<vocab term=\"Parallelism\" definition=\"The repetition of a specific grammatical structure in a series of related words, phrases, or clauses to create symmetry and balance.\">Parallelism</vocab> is the matching of grammatical structures. It creates balance, rhythm, and clarity:\n- **Faulty Parallelism**: *She likes reading, writing, and to study.*\n- **Correct Parallelism**: *She likes reading, writing, and studying.* (All gerunds).\n\n## Syntactic Variety\nMonotonous syntax bores the reader. Mix different sentence structures to establish pacing:\n- **Simple Sentences**: Direct and punchy.\n- **Compound Sentences**: Join related ideas of equal weight.\n- **Complex Sentences**: Show relationships of subordination (cause, condition, time).\n\n| Sentence Type | Structure | Rhetorical Effect |\n| :--- | :--- | :--- |\n| **Simple** | 1 Independent Clause | Emphasis, impact |\n| **Compound** | 2+ Independent Clauses | Balance, comparison |\n| **Complex** | 1 Independent + 1+ Dependent | Nuance, causality |\n",
        "questions": [
          {
            "id": "q_eng_5.3.1",
            "unitId": 5,
            "text": "Which of the following sentences exhibits correct parallel structure?",
            "options": [
              "The campaign succeeded because of planning, determination, and we worked hard.",
              "The campaign succeeded because of planning, determination, and hard work.",
              "The campaign succeeded because we planned, had determination, and worked hard.",
              "The campaign succeeded because of planning, determining, and hard work."
            ],
            "correctIndex": 1,
            "hint": "Check that all items in the list are of the same grammatical category (nouns).",
            "explanation": "'Planning', 'determination', and 'hard work' are all noun phrases, maintaining parallel structure."
          },
          {
            "id": "q_eng_5.3.2",
            "unitId": 5,
            "text": "Why should a writer incorporate syntactic variety into their essay?",
            "options": [
              "To show that they know grammar definitions",
              "To control the pacing and prevent the prose from sounding monotonous",
              "To make the essay harder to read",
              "To meet formatting criteria"
            ],
            "correctIndex": 1,
            "hint": "Sentence structure affects the voice and flow.",
            "explanation": "Varying sentence structures makes the text engaging and allows the author to place emphasis strategically."
          },
          {
            "id": "q_eng_5.3.3",
            "unitId": 5,
            "text": "What type of sentence consists of one independent clause and at least one dependent clause?",
            "options": [
              "Simple",
              "Compound",
              "Complex",
              "Compound-Complex"
            ],
            "correctIndex": 2,
            "hint": "Contains a subordinating conjunction (e.g. 'although', 'because').",
            "explanation": "A complex sentence connects an independent clause with one or more dependent clauses."
          },
          {
            "id": "q_eng_5.3.4",
            "unitId": 5,
            "text": "Identify the faulty parallelism in the following options:",
            "options": [
              "To live is to dream.",
              "He wanted success, fame, and wealth.",
              "The program aims to educate, to empower, and inspiring.",
              "By reading, writing, and speaking, we learn."
            ],
            "correctIndex": 2,
            "hint": "Look for the list where the final verb form shifts.",
            "explanation": "'To educate', 'to empower' are infinitives, but 'inspiring' is a participle, breaking parallelism."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Style, Tone, and Rhetorical Choices",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "6.1",
        "title": "Diction, Syntax, and Tone Analysis",
        "description": "Analyze how an author's choices in diction and syntax establish a specific rhetorical tone.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Diction, Syntax, and Tone Analysis\n\nStyle is the signature of a writer. It is established through diction (word choice) and syntax (sentence structure), which combine to create tone.\n\n## Diction and Connotation\nWords have two meanings:\n- **Denotation**: The literal dictionary definition.\n- **Connotation**: The emotional baggage or associations carried by the word:\n  - *House*: Neutral denotation.\n  - *Home*: Positive connotation of warmth and safety.\n  - *Shack*: Negative connotation of poverty.\n\n## Syntax and Tone\n<vocab term=\"Tone\" definition=\"The author's attitude toward the subject, conveyed through specific choices in diction, syntax, and imagery.\">Tone</vocab> is the author's attitude toward their subject. It is analyzed by looking at patterns of <vocab term=\"Diction\" definition=\"The author's strategic choice of words, which establishes the tone and voice of the text.\">diction</vocab> and <vocab term=\"Syntax\" definition=\"The arrangement of words and phrases to create well-formed sentences in a language.\">syntax</vocab>. For instance, short, declarative sentences establish an urgent, authoritative tone, while long, complex structures suggest an academic, reflective tone.\n\n<svg width=\"400\" height=\"150\" viewBox=\"0 0 400 150\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <line x1=\"50\" y1=\"75\" x2=\"350\" y2=\"75\" stroke=\"#ffffff\" stroke-width=\"2\" />\n  <circle cx=\"50\" cy=\"75\" r=\"8\" fill=\"#fb7185\" />\n  <circle cx=\"200\" cy=\"75\" r=\"8\" fill=\"#38bdf8\" />\n  <circle cx=\"350\" cy=\"75\" r=\"8\" fill=\"#34d399\" />\n  <text x=\"50\" y=\"110\" text-anchor=\"middle\" fill=\"#fb7185\" font-size=\"10\" font-family=\"sans-serif\">Objective / Neutral</text>\n  <text x=\"200\" y=\"110\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"10\" font-family=\"sans-serif\">Subjective / Warm</text>\n  <text x=\"350\" y=\"110\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"10\" font-family=\"sans-serif\">Hostile / Vitriolic</text>\n</svg>\n",
        "questions": [
          {
            "id": "q_eng_6.1.1",
            "unitId": 6,
            "text": "What term describes the emotional association or cultural meaning that a word carries beyond its literal definition?",
            "options": [
              "Denotation",
              "Connotation",
              "Diction",
              "Syntax"
            ],
            "correctIndex": 1,
            "hint": "The 'vibe' or implied feeling of a word.",
            "explanation": "Connotation refers to the emotional and cultural implications that words carry."
          },
          {
            "id": "q_eng_6.1.2",
            "unitId": 6,
            "text": "Which pattern of syntax would most likely convey a sense of urgency and tension?",
            "options": [
              "Long, flowing compound-complex sentences with multiple clauses",
              "Short, abrupt declarative sentences in rapid succession",
              "Passive voice sentences that hide the agent of action",
              "Frequent parenthetical definitions and footnotes"
            ],
            "correctIndex": 1,
            "hint": "Urgency requires fast-paced delivery.",
            "explanation": "Short, simple sentences speed up pacing, creating tension or urgency."
          },
          {
            "id": "q_eng_6.1.3",
            "unitId": 6,
            "text": "An author writes: 'The policy is a cancer eating away at our freedom.' The tone is:",
            "options": [
              "Objective and academic",
              "Alarmed and urgent",
              "Sarcastic and playful",
              "Indifferent"
            ],
            "correctIndex": 1,
            "hint": "Analyze the connotation of the word 'cancer'.",
            "explanation": "Comparing a policy to cancer is highly negative and creates an alarmed, urgent tone."
          },
          {
            "id": "q_eng_6.1.4",
            "unitId": 6,
            "text": "Diction and syntax are combined by writers to primarily produce which element?",
            "options": [
              "Ethos",
              "Tone",
              "Logos",
              "Evidence"
            ],
            "correctIndex": 1,
            "hint": "Refers to the mood/attitude of the speaker.",
            "explanation": "Diction and syntax shape the style that establishes the tone of the text."
          }
        ]
      },
      {
        "id": "6.2",
        "title": "Identifying Rhetorical Bias, Perspective, and Authorial Intent",
        "description": "Detect subtle bias and analyze perspective and authorial intent in arguments.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Rhetorical Bias and Perspective\n\nEvery argument is written from a specific perspective. Identifying <vocab term=\"Perspective\" definition=\"The standpoint, background, and beliefs from which an author views a topic.\">perspective</vocab> and <vocab term=\"Authorial Intent\" definition=\"The primary purpose or goal the author aims to achieve in writing the text.\">authorial intent</vocab> is crucial to evaluating the validity of a text.\n\n## How to Detect Bias\nBias is not always overt. Look for these subtle markers:\n- **Loaded Words**: Diction carrying intense negative or positive connotations.\n- **Spin**: Presenting facts in a way that implies a specific value judgment.\n- **Omission**: Intentionally ignoring facts or arguments that contradict the author's stance.\n\n## Perspective Analysis\nAn author's standpoint is shaped by their identity, history, and socioeconomic position. For instance, an article on urbanization written by an environmentalist will prioritize different issues than one written by a real estate developer.\n",
        "questions": [
          {
            "id": "q_eng_6.2.1",
            "unitId": 6,
            "text": "Which of the following is a key marker of bias in an editorial?",
            "options": [
              "The author cites peer-reviewed studies that disagree with their thesis.",
              "The author uses emotionally loaded, negative diction when describing opponents.",
              "The text is written in the third person.",
              "The editorial includes a correction footnote."
            ],
            "correctIndex": 1,
            "hint": "Emotionally loaded language indicates subjectivity.",
            "explanation": "Using loaded diction to target opponents reveals an emotional bias rather than an objective stance."
          },
          {
            "id": "q_eng_6.2.2",
            "unitId": 6,
            "text": "Why is understanding the author's perspective crucial in rhetorical analysis?",
            "options": [
              "It tells the reader how many pages the essay should be.",
              "It explains the underlying motivations and warrants of the author's claims.",
              "It automatically proves the author is wrong.",
              "It simplifies the vocabulary requirements."
            ],
            "correctIndex": 1,
            "hint": "Standpoints shape arguments.",
            "explanation": "An author's perspective determines their warrants, assumptions, and selections of proof."
          },
          {
            "id": "q_eng_6.2.3",
            "unitId": 6,
            "text": "An author omits all statistics that suggest crime is falling in an article about national danger. This is a bias of:",
            "options": [
              "Ad Hominem",
              "Spin",
              "Omission",
              "Diction"
            ],
            "correctIndex": 2,
            "hint": "Refers to leaving out conflicting evidence.",
            "explanation": "Bias of omission occurs when a writer deliberately leaves out facts that challenge their thesis."
          },
          {
            "id": "q_eng_6.2.4",
            "unitId": 6,
            "text": "What does 'authorial intent' refer to?",
            "options": [
              "The target audience's demographics",
              "The author's primary objective or goal in writing the text",
              "The printer's font selection",
              "The editorial feedback"
            ],
            "correctIndex": 1,
            "hint": "What the author intended to do.",
            "explanation": "Authorial intent is the reason the text was created, such as to persuade, inform, or call to action."
          }
        ]
      },
      {
        "id": "6.3",
        "title": "Stylistic Word Choice, Strategic Tone, and Figurative Language",
        "description": "Utilize figurative language and stylistic diction to create emotional resonance (pathos).",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Stylistic Word Choice and Figurative Language\n\nFigurative language is the use of words in non-literal ways to create imagery, establish connections, and evoke emotion.\n\n## Common Figurative Devices\n- <vocab term=\"Metaphor\" definition=\"A direct comparison between two unlike things without using 'like' or 'as' to highlight a shared characteristic.\">Metaphor</vocab>: A direct comparison of two unlike things (*\"He is a rock.\"*).\n- <vocab term=\"Simile\" definition=\"A comparison of two unlike things using comparative words such as 'like' or 'as'.\">Simile</vocab>: Comparison using 'like' or 'as' (*\"He is as strong as an ox.\"*).\n- <vocab term=\"Personification\" definition=\"Attribuing human traits, emotions, or behaviors to non-human entities or objects.\">Personification</vocab>: Attributing human traits to non-human things (*\"The wind whispered.\"*).\n\n## Strategic Rhetorical Impact\nFigurative language is not decorative. In rhetorical analysis, examine how these choices affect the audience:\n- **Metaphors** simplify complex abstract ideas by linking them to concrete images.\n- **Similes** build visual context.\n- **Personification** fosters empathy (pathos) for non-human subjects.\n",
        "questions": [
          {
            "id": "q_eng_6.3.1",
            "unitId": 6,
            "text": "Which of the following sentences contains a metaphor rather than a simile?",
            "options": [
              "The classroom was as quiet as a grave.",
              "The classroom was a boiling cauldron of excitement.",
              "The classroom looked like a tornado had hit it.",
              "The classroom was quiet."
            ],
            "correctIndex": 1,
            "hint": "A metaphor asserts that one thing IS another, not just LIKE it.",
            "explanation": "Stating the classroom 'was a boiling cauldron' is a direct comparison without 'as' or 'like', making it a metaphor."
          },
          {
            "id": "q_eng_6.3.2",
            "unitId": 6,
            "text": "Attributing human actions to an inanimate object, like 'the waves screamed in anger,' is called:",
            "options": [
              "Hyperbole",
              "Personification",
              "Alliteration",
              "Analogy"
            ],
            "correctIndex": 1,
            "hint": "Attributing person-like qualities.",
            "explanation": "Giving human emotions ('anger') and actions ('screamed') to waves is personification."
          },
          {
            "id": "q_eng_6.3.3",
            "unitId": 6,
            "text": "How does figurative language primarily help build Pathos?",
            "options": [
              "By proving the argument logically",
              "By evoking sensory images and emotional responses in the reader's mind",
              "By citing credible sources",
              "By correcting grammatical structures"
            ],
            "correctIndex": 1,
            "hint": "Pathos is the appeal to emotion.",
            "explanation": "Sensory images and figurative connections stimulate emotional associations, enhancing pathos."
          },
          {
            "id": "q_eng_6.3.4",
            "unitId": 6,
            "text": "A writer uses the phrase 'our economy is an engine running on empty.' What is the strategic rhetorical purpose?",
            "options": [
              "To define what an engine is",
              "To show that the economy uses gasoline",
              "To create an alarming, concrete image of economic decline",
              "To confuse readers who don't drive cars"
            ],
            "correctIndex": 2,
            "hint": "Running on empty is a dangerous condition.",
            "explanation": "The metaphor compares the economy to a stalling engine, creating an easy-to-understand and alarming image of risk."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Nuance, Complexity, and Syntactic Variety",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "7.1",
        "title": "Qualified Claims, Nuance, and Modifiers",
        "description": "Qualify claims using modifiers to build a nuanced, realistic, and defensible argument.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Qualified Claims, Nuance, and Modifiers\n\nAbsolute claims are easy to defeat. Academic writing requires nuance, which is established by qualifying your assertions.\n\n## Absolute vs. Qualified Claims\n- **Absolute (Unqualified)**: *\"Technology always harms student focus.\"* (Easily disproven by finding one instance where it doesn't).\n- **Nuanced (Qualified)**: *\"Under certain conditions, extensive technology use may reduce student attention spans.\"* (Nuanced and defensible).\n\n## Using Modifiers for Nuance\nUse <vocab term=\"Modifier\" definition=\"A word or phrase (like 'probably', 'often', 'under certain conditions') that limits or qualifies the scope of a claim.\">modifiers</vocab> to define the exact scope of your arguments:\n- **Frequency**: *Often, typically, generally, rarely.*\n- **Probability**: *Likely, possibly, arguably.*\n- **Scope**: *Most, some, in certain cases.*\n",
        "questions": [
          {
            "id": "q_eng_7.1.1",
            "unitId": 7,
            "text": "Which of the following represents a qualified claim rather than an absolute statement?",
            "options": [
              "All politicians are corrupt.",
              "Under economic pressure, politicians may be more susceptible to lobbying.",
              "Lobbying always corrupts political systems.",
              "Politicians are never honest."
            ],
            "correctIndex": 1,
            "hint": "Look for the statement that uses modifiers to limit its scope ('under pressure', 'may be').",
            "explanation": "Qualifying the claim with 'under economic pressure' and 'may be' makes the argument realistic and defensible."
          },
          {
            "id": "q_eng_7.1.2",
            "unitId": 7,
            "text": "Why are absolute statements (using words like 'always' or 'never') risky in argumentation?",
            "options": [
              "They are too long to write.",
              "They can be defeated by a single counterexample.",
              "They lack emotional appeal.",
              "They confuse the formatting guidelines."
            ],
            "correctIndex": 1,
            "hint": "If a claim is 100% absolute, a single exception ruins it.",
            "explanation": "Absolute assertions are fragile; a single exception disproves the entire claim, damaging the author's logical integrity."
          },
          {
            "id": "q_eng_7.1.3",
            "unitId": 7,
            "text": "What term describes words like 'often', 'likely', or 'sometimes' when used to limit an assertion?",
            "options": [
              "Ad Hominem",
              "Modifiers",
              "Semicolons",
              "Syntaxes"
            ],
            "correctIndex": 1,
            "hint": "They modify or limit the strength and scope of a verb or noun.",
            "explanation": "Modifiers restrict the absolute nature of claims, adding crucial nuance and accuracy."
          },
          {
            "id": "q_eng_7.1.4",
            "unitId": 7,
            "text": "How do qualified claims affect a writer's Ethos?",
            "options": [
              "They make the writer look weak and indecisive.",
              "They build ethos by presenting the writer as fair-minded, realistic, and intellectually honest.",
              "They have no effect on ethos.",
              "They destroy the writer's credibility."
            ],
            "correctIndex": 1,
            "hint": "A careful, nuanced arguer appears more trustworthy than an extremist.",
            "explanation": "Nuanced qualifiers prove the writer understands complexity, establishing intellectual credibility."
          }
        ]
      },
      {
        "id": "7.2",
        "title": "Alternative Perspectives, Concessions, and Counterarguments",
        "description": "Engage with alternative perspectives by crafting concessions and refutations.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Concessions and Counterarguments\n\nA sophisticated argument does not exist in a vacuum. It acknowledges that alternative viewpoints exist, and actively addresses them.\n\n## The Counterargument Flow\nAn argumentative concession follows three stages:\n1. **Counterargument**: Introduce the opposing perspective.\n2. **Concession**: Acknowledge the partial validity of the counterpoint (<vocab term=\"Concession\" definition=\"Acknowledge the validity of a counterargument before asserting your own position.\">concession</vocab>).\n3. **Refutation/Rebuttal**: Re-assert your main claim by explaining why your thesis remains stronger (<vocab term=\"Refutation\" definition=\"An argumentative response that disproves or minimizes a counterargument with superior evidence and logic.\">refutation</vocab>).\n\n<svg width=\"400\" height=\"200\" viewBox=\"0 0 400 200\" class=\"max-w-full my-6 mx-auto rounded-2xl bg-white/[0.02] border border-white/[0.05] p-4\">\n  <rect x=\"20\" y=\"20\" width=\"360\" height=\"40\" rx=\"8\" fill=\"rgba(239,68,68,0.1)\" stroke=\"#ef4444\" stroke-width=\"1.5\" />\n  <text x=\"200\" y=\"44\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\">1. Opponent's Claim (Counterargument)</text>\n  <rect x=\"20\" y=\"80\" width=\"360\" height=\"40\" rx=\"8\" fill=\"rgba(245,158,11,0.1)\" stroke=\"#f59e0b\" stroke-width=\"1.5\" />\n  <text x=\"200\" y=\"104\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\">2. \"True, but...\" (Concession)</text>\n  <rect x=\"20\" y=\"140\" width=\"360\" height=\"40\" rx=\"8\" fill=\"rgba(16,185,129,0.1)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n  <text x=\"200\" y=\"164\" text-anchor=\"middle\" fill=\"#ffffff\" font-size=\"11\" font-family=\"sans-serif\">3. Why my argument stands (Refutation)</text>\n</svg>\n",
        "questions": [
          {
            "id": "q_eng_7.2.1",
            "unitId": 7,
            "text": "What is the difference between a concession and a refutation?",
            "options": [
              "Concession is emotional, refutation is logical.",
              "Concession acknowledges the opponent's point; refutation disproves it.",
              "They are identical terms.",
              "Refutation always happens in the introduction, concession in the conclusion."
            ],
            "correctIndex": 1,
            "hint": "Conceding is yielding; refuting is pushing back.",
            "explanation": "Concession grants the validity of a minor point, while refuting asserts why the primary thesis remains superior."
          },
          {
            "id": "q_eng_7.2.2",
            "unitId": 7,
            "text": "Which phrase is commonly used to signal a concession?",
            "options": [
              "Therefore",
              "Furthermore",
              "Granted,",
              "Consequently"
            ],
            "correctIndex": 2,
            "hint": "Acknowledges that something is true.",
            "explanation": "'Granted,' signals that the writer is conceding a point to the opposing side before continuing."
          },
          {
            "id": "q_eng_7.2.3",
            "unitId": 7,
            "text": "Why does addressing a counterargument strengthen a thesis?",
            "options": [
              "It makes the author seem neutral and uncommitted.",
              "It demonstrates thorough research and defuses objections before the reader can raise them.",
              "It distracts the reader from logical fallacies.",
              "It allows the author to quote more sources."
            ],
            "correctIndex": 1,
            "hint": "Defuses the opponent's leverage.",
            "explanation": "Anticipating and addressing objections proves the author's argument is robust enough to withstand scrutiny."
          },
          {
            "id": "q_eng_7.2.4",
            "unitId": 7,
            "text": "If a writer concedes a point but fails to write a refutation, what happens?",
            "options": [
              "The argument remains strong.",
              "The essay's line of reasoning collapses because they've supported the opposition instead.",
              "The essay achieves the sophistication point.",
              "The thesis statement becomes unqualified."
            ],
            "correctIndex": 1,
            "hint": "A concession without a refutation leaves the opponent's point standing.",
            "explanation": "Without refutation, a concession simply weakens the writer's own argument by endorsing the counterpoint."
          }
        ]
      },
      {
        "id": "7.3",
        "title": "Subordination, Coordination, and Syntactic Emphasis",
        "description": "Utilize coordinate and subordinate sentence structures to place rhetorical emphasis strategically.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Subordination, Coordination, and Syntactic Emphasis\n\nSentence structure dictates emphasis. By manipulating coordination and subordination, you control what information the reader prioritizes.\n\n## Coordination vs. Subordination\n- **Coordination**: Joining two related independent clauses of equal weight using FANBOYS (*\"and\", \"but\", \"or\"*). Creates balance:\n  - *The economy is growing, and unemployment is falling.*\n- **Subordination**: Joining an independent clause with a dependent clause using subordinating conjunctions (*\"although\", \"because\", \"while\"*). Places emphasis on the main clause:\n  - *Although the economy is growing, poverty remains high.* (Emphasis on poverty).\n\n## Periodic Sentences\nA <vocab term=\"Periodic Sentence\" definition=\"A sentence that holds its main clause or central point at the very end, building suspense or emphasis.\">periodic sentence</vocab> holds the main clause until the very end, after introductory dependent clauses. This builds anticipation and highlights the final point.\n",
        "questions": [
          {
            "id": "q_eng_7.3.1",
            "unitId": 7,
            "text": "In the sentence 'Although she studied diligently, she failed the exam,' what clause receives the primary emphasis?",
            "options": [
              "Although she studied diligently",
              "She failed the exam",
              "They receive equal emphasis",
              "There is no emphasis"
            ],
            "correctIndex": 1,
            "hint": "Emphasis in a complex sentence falls on the independent clause.",
            "explanation": "'She failed the exam' is the independent clause, so it receives the primary focus of the sentence."
          },
          {
            "id": "q_eng_7.3.2",
            "unitId": 7,
            "text": "What is a 'periodic sentence'?",
            "options": [
              "A sentence that contains no punctuation whatsoever",
              "A sentence that holds the main clause/point until the very end",
              "A sentence written in passive voice",
              "A sentence that repeats a single word"
            ],
            "correctIndex": 1,
            "hint": "Saves the main idea for the grand finale.",
            "explanation": "A periodic sentence delays the main independent clause until the final period, building dramatic emphasis."
          },
          {
            "id": "q_eng_7.3.3",
            "unitId": 7,
            "text": "Which conjunction is used for coordination (equal weight)?",
            "options": [
              "Because",
              "Although",
              "But",
              "While"
            ],
            "correctIndex": 2,
            "hint": "Think of the FANBOYS acronym.",
            "explanation": "'But' is a coordinating conjunction, joining clauses of equal grammatical importance."
          },
          {
            "id": "q_eng_7.3.4",
            "unitId": 7,
            "text": "To emphasize a condition or cause, which structural technique is best?",
            "options": [
              "Coordination",
              "Subordination",
              "Simple sentences only",
              "Active voice deletion"
            ],
            "correctIndex": 1,
            "hint": "Creates a dependency hierarchy.",
            "explanation": "Subordination uses subordinating conjunctions to show relationships like cause, concession, or time."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Stylistic Appeals and Advanced Mechanics",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "8.1",
        "title": "Rhetorical Comparisons, Analogies, and Anecdotes",
        "description": "Utilize analogies, comparisons, and anecdotes to make complex arguments accessible and persuasive.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Rhetorical Comparisons, Analogies, and Anecdotes\n\nAbstract arguments are hard to digest. Writers use comparisons, analogies, and anecdotes to make their claims concrete and memorable.\n\n## Analogies and Comparisons\nAn <vocab term=\"Analogy\" definition=\"A comparison between two different things, explaining a complex or unfamiliar concept by comparing it to something familiar.\">analogy</vocab> explains an unfamiliar concept by comparing it to a familiar one:\n- *Just as a captain must guide a ship through a storm, a president must lead a nation through a crisis.* (Compares political leadership to sailing).\n\n## Anecdotes\nAn <vocab term=\"Anecdote\" definition=\"A brief, engaging personal story or historical episode used to illustrate a point and build emotional connection (pathos).\">anecdote</vocab> is a brief narrative about a real incident or person. In argumentation, anecdotes:\n- Humanize statistics.\n- Build immediate emotional connection (**pathos**).\n- Establish the writer's personal relationship with the topic.\n",
        "questions": [
          {
            "id": "q_eng_8.1.1",
            "unitId": 8,
            "text": "Which device is a brief narrative story used to illustrate a point?",
            "options": [
              "Analogy",
              "Anecdote",
              "Metaphor",
              "Semicolon"
            ],
            "correctIndex": 1,
            "hint": "A personal story or historical vignette.",
            "explanation": "An anecdote is a short story used to make an abstract argument relatable and concrete."
          },
          {
            "id": "q_eng_8.1.2",
            "unitId": 8,
            "text": "Compares capital investment to planting seeds that grow into trees is an example of:",
            "options": [
              "Anaphora",
              "An analogy",
              "Attribution",
              "Ad Hominem"
            ],
            "correctIndex": 1,
            "hint": "Uses a familiar biological growth pattern to explain finance.",
            "explanation": "An analogy explains a complex process by linking it to a simpler, familiar concept."
          },
          {
            "id": "q_eng_8.1.3",
            "unitId": 8,
            "text": "What is the primary rhetorical risk of using a weak or false analogy?",
            "options": [
              "It makes the essay too long.",
              "It undermines logic (logos) because the two things compared are too different to support the conclusion.",
              "It removes the need for a thesis.",
              "It forces the use of passive voice."
            ],
            "correctIndex": 1,
            "hint": "If the comparison fails, the logic falls apart.",
            "explanation": "A false analogy compares items that are not fundamentally similar, weakening the argument's logos."
          },
          {
            "id": "q_eng_8.1.4",
            "unitId": 8,
            "text": "Anecdotes are primarily used to build which rhetorical appeal?",
            "options": [
              "Logos",
              "Pathos",
              "Ethos",
              "Syntax"
            ],
            "correctIndex": 1,
            "hint": "Relates to human empathy and emotional response.",
            "explanation": "Anecdotes make topics relatable, appealing directly to the audience's emotions (pathos)."
          }
        ]
      },
      {
        "id": "8.2",
        "title": "Credibility Building, Ethos, and Strategic Vocabulary",
        "description": "Establish ethos and authority by employing strategic vocabulary and demonstrating expertise.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Credibility Building and Ethos\n\nEthos is the appeal to credibility and trust. Without ethos, even the most logical arguments will be dismissed by an audience.\n\n## Elements of Ethos\nTo build <vocab term=\"Ethos\" definition=\"The rhetorical appeal based on the credibility, authority, character, and integrity of the speaker/writer.\">ethos</vocab>, an author must demonstrate:\n- **Competence (Phronesis)**: Showing deep knowledge of the subject.\n- **Good Character (Arete)**: Demonstrating honesty, fairness, and ethical values.\n- **Good Will (Eunoia)**: Proving that you care about the audience's well-being.\n\n## Strategic Vocabulary\nUsing precise, discipline-specific vocabulary rather than slang or vague terms signals expertise. For example, using *'cognitive development'* instead of *'growing up'* signals academic authority and increases credibility.\n",
        "questions": [
          {
            "id": "q_eng_8.2.1",
            "unitId": 8,
            "text": "Which Greek concept refers to the credibility and character of the speaker?",
            "options": [
              "Pathos",
              "Logos",
              "Ethos",
              "Kairos"
            ],
            "correctIndex": 2,
            "hint": "Derived from the word for 'ethics'.",
            "explanation": "Ethos represents the writer's ethical appeal, credibility, and authority."
          },
          {
            "id": "q_eng_8.2.2",
            "unitId": 8,
            "text": "A writer uses slang and informal language in a research paper. How does this affect their ethos?",
            "options": [
              "It makes them seem cool and relatable to academics.",
              "It damages their ethos by appearing unprofessional and lacking authority.",
              "It has no impact.",
              "It increases their logical appeal (logos)."
            ],
            "correctIndex": 1,
            "hint": "Formal settings demand formal style.",
            "explanation": "Inappropriate informality undermines academic authority, weakening the writer's ethos."
          },
          {
            "id": "q_eng_8.2.3",
            "unitId": 8,
            "text": "Which of the following is the best way to demonstrate 'good will' (eunoia) to an audience?",
            "options": [
              "By insulting the opponent's intelligence",
              "By showing that your proposal benefits the audience's health and economy",
              "By using complex words that the audience does not understand",
              "By ignoring the audience's values completely"
            ],
            "correctIndex": 1,
            "hint": "Good will means showing you care about their interests.",
            "explanation": "Aligning your argument with the audience's well-being proves you have their interests in mind, establishing eunoia."
          },
          {
            "id": "q_eng_8.2.4",
            "unitId": 8,
            "text": "Differentiating between 'opinion' and 'empirical data' in your text builds:",
            "options": [
              "Ethos",
              "Fallacies",
              "Similes",
              "Diction"
            ],
            "correctIndex": 0,
            "hint": "Signals intellectual honesty.",
            "explanation": "Acknowledging the limits and types of support you present shows intellectual integrity, reinforcing ethos."
          }
        ]
      },
      {
        "id": "8.3",
        "title": "Advanced Punctuation, Semicolons, and Parenthetical Styling",
        "description": "Master the use of semicoloins, colons, em dashes, and parenthetical elements to refine syntax.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Advanced Punctuation and Parenthetical Styling\n\nPunctuation is not just grammatical; it is rhetorical. It controls pacing, emphasis, and the relationships between ideas.\n\n## Semicolons and Colons\n- **Semicolon ( ; )**: Joins two closely related independent clauses without a conjunction. Creates a tight logical link:\n  - *He loved the book; he read it in one sitting.*\n- **Colon ( : )**: Introduces a list, clarification, or quote. The information after the colon must explain or expand on what came before:\n  - *The city faced one major problem: decay.*\n\n## Em Dashes and Parentheses\n- <vocab term=\"Em Dash\" definition=\"A punctuation mark (\u2014) used to set off an abrupt break or parenthetical element, placing strong emphasis on the enclosed text.\">Em Dash</vocab>: Sets off abrupt breaks or parenthetical elements, placing **strong emphasis** on the enclosed text (*\"The solution\u2014if it exists\u2014is far off.\"*).\n- <vocab term=\"Parenthesis\" definition=\"Punctuation marks used to enclose supplementary or whisper-like background information, de-emphasizing the text.\">Parentheses</vocab>: Encloses supplementary or whisper-like background details, **de-emphasizing** the text (*\"The study (conducted in 2021) was conclusive.\"*).\n",
        "questions": [
          {
            "id": "q_eng_8.3.1",
            "unitId": 8,
            "text": "Which punctuation mark is best suited for setting off an abrupt parenthetical element while placing strong emphasis on it?",
            "options": [
              "Parentheses",
              "Em Dash",
              "Semicolon",
              "Comma"
            ],
            "correctIndex": 1,
            "hint": "A long dash symbol that breaks the sentence's structure.",
            "explanation": "Em dashes draw attention and create dramatic emphasis on the set-off information."
          },
          {
            "id": "q_eng_8.3.2",
            "unitId": 8,
            "text": "Which of the following sentences correctly utilizes a semicolon?",
            "options": [
              "He wanted to leave; because he was tired.",
              "The weather was freezing; however, we walked home.",
              "The weather was freezing; we walked home.",
              "Both B and C are correct."
            ],
            "correctIndex": 3,
            "hint": "Check if both sides of the semicolon are complete independent clauses.",
            "explanation": "Both sentences correctly join independent clauses. Semicolons cannot connect dependent clauses."
          },
          {
            "id": "q_eng_8.3.3",
            "unitId": 8,
            "text": "What is the rhetorical difference between parentheses and em dashes?",
            "options": [
              "Parentheses emphasize; em dashes de-emphasize.",
              "Parentheses de-emphasize (like a whisper); em dashes emphasize (like a shout).",
              "There is no difference.",
              "Em dashes can only be used at the end of a sentence."
            ],
            "correctIndex": 1,
            "hint": "Think of the visual weight of a dash vs. enclosing curves.",
            "explanation": "Parentheses suggest background detail, while em dashes insert dramatic emphasis."
          },
          {
            "id": "q_eng_8.3.4",
            "unitId": 8,
            "text": "A colon is used to introduce information that:",
            "options": [
              "Is completely unrelated to the first clause",
              "Explains, expands, or lists items related to the first clause",
              "Attacks the opponent's ethos",
              "Acts as a transition word"
            ],
            "correctIndex": 1,
            "hint": "The second part serves as a definition or consequence of the first.",
            "explanation": "Colons introduce lists, definitions, or statements that directly elaborate on the preceding independent clause."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Synthesized Argumentation and Rubric Mastery",
    "masteryWeight": "11-13%",
    "topics": [
      {
        "id": "9.1",
        "title": "Concession, Rebuttal, and Refutation Mechanics",
        "description": "Employ concessions and refutations to handle counterclaims effectively in timed essays.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Concession, Rebuttal, and Refutation Mechanics\n\nIn timed writing, managing counterclaims is essential to achieving a high score on the AP rubric. This is done through concessions and refutations.\n\n## The Rebuttal Structure\nWhen addressing a counterclaim, follow this structural formula:\n- **State the Counterclaim**: *\"Critics argue that...\"*\n- **Concede with Nuance**: *\"While it is true that this policy has upfront costs...\"*\n- **Refute (Rebuttal)**: *\"These short-term investments are outweighed by long-term savings...\"*\n\n## Achieving Cohesion\nEnsure that your refutations do not sound like separate arguments. A successful <vocab term=\"Rebuttal\" definition=\"An argumentative response that addresses and counters a specific objection, proving why the primary argument remains valid.\">rebuttal</vocab> directly addresses the opponent's logic, exposing fallacies or presenting superior evidence.\n",
        "questions": [
          {
            "id": "q_eng_9.1.1",
            "unitId": 9,
            "text": "What is the primary role of a rebuttal in an argumentative essay?",
            "options": [
              "To agree with the opponent's conclusion",
              "To restate the introduction in different words",
              "To address and counter a specific objection, showing why your argument remains valid",
              "To outline the page formatting"
            ],
            "correctIndex": 2,
            "hint": "It refutes the counterargument.",
            "explanation": "A rebuttal directly counters the opposing claim, reinforcing the strength of the main thesis."
          },
          {
            "id": "q_eng_9.1.2",
            "unitId": 9,
            "text": "Which phrase signals a transition from concession to refutation?",
            "options": [
              "Admittedly,",
              "On the other hand,",
              "In summary,",
              "Consequently,"
            ],
            "correctIndex": 1,
            "hint": "Indicates a turn back to your own argument.",
            "explanation": "'On the other hand' or 'Nonetheless' signals a shift away from concession and back to the refutation of the counterpoint."
          },
          {
            "id": "q_eng_9.1.3",
            "unitId": 9,
            "text": "A writer concedes that their solution is expensive but argues it is the only permanent fix. This concession builds:",
            "options": [
              "Logos",
              "Ethos (Credibility)",
              "Fallacies",
              "Similes"
            ],
            "correctIndex": 1,
            "hint": "Shows the writer is honest and realistic about their own ideas.",
            "explanation": "Acknowledging real-world limitations (like cost) shows integrity and intellectual honesty, building ethos."
          },
          {
            "id": "q_eng_9.1.4",
            "unitId": 9,
            "text": "Why should refutations avoid emotional ad hominem attacks?",
            "options": [
              "They make the sentence too short.",
              "They undermine logos and damage the writer's ethical appeal (ethos).",
              "They are not allowed by Next.js.",
              "They confuse the thesis statement."
            ],
            "correctIndex": 1,
            "hint": "An attack on character is a logical fallacy.",
            "explanation": "Personal attacks weaken the logical validity of the argument, alienating critical readers."
          }
        ]
      },
      {
        "id": "9.2",
        "title": "Multi-Source Synthesis, Argumentative Unity, and Cohesive Writing",
        "description": "Synthesize multiple sources smoothly to construct a unified, cohesive argument.",
        "youtubeId": "pM70cPYnsQs",
        "article": "# Multi-Source Synthesis and Argumentative Unity\n\nUnity is achieved when every source, claim, and sentence in your essay directly supports your central thesis.\n\n## Synthesizing Multiple Sources\nWhen integrating sources:\n- **Avoid Source-by-Source Summary**: Do not write one paragraph summarizing Source A, then another for Source B.\n- **Group by Concepts**: Structure paragraphs around sub-claims, integrating multiple sources per paragraph to show agreement or contrast.\n\n## The Synthesis Conversation\nThink of yourself as the moderator of a panel discussion. Your job is to introduce the topic, ask the sources for their views, highlight where they agree or conflict, and draw a final conclusion that validates your thesis.\n",
        "questions": [
          {
            "id": "q_eng_9.2.1",
            "unitId": 9,
            "text": "What is a sign of weak source synthesis in an essay?",
            "options": [
              "Using multiple sources within a single body paragraph",
              "Dedication of an entire paragraph to summarizing a single source without original argument",
              "Attributing quotes using parenthetical citations",
              "Structuring body paragraphs around sub-claims"
            ],
            "correctIndex": 1,
            "hint": "Writing isolated summaries is not synthesis.",
            "explanation": "Devoting paragraphs to summarizing single sources isolates them, failing to show synthesis or conceptual connections."
          },
          {
            "id": "q_eng_9.2.2",
            "unitId": 9,
            "text": "How should a writer organize their body paragraphs in a synthesis essay?",
            "options": [
              "By author names in alphabetical order",
              "Around sub-claims that support the central thesis",
              "By the order in which the sources are lettered (A, B, C)",
              "By putting all direct quotes in the first paragraph"
            ],
            "correctIndex": 1,
            "hint": "Organization should be driven by arguments, not by source lettering.",
            "explanation": "Structuring body paragraphs around argumentative sub-claims ensures the essay maintains a strong line of reasoning."
          },
          {
            "id": "q_eng_9.2.3",
            "unitId": 9,
            "text": "When two sources contradict each other, how should the writer handle them?",
            "options": [
              "Ignore the source that disagrees with their thesis.",
              "Explain the contradiction and show why one source's claim is more valid or applicable.",
              "Concede that their own thesis is incorrect.",
              "Delete both sources."
            ],
            "correctIndex": 1,
            "hint": "Conflict is an opportunity to show critical evaluation.",
            "explanation": "Contrasting the sources and analyzing why one is stronger demonstrates advanced critical evaluation."
          },
          {
            "id": "q_eng_9.2.4",
            "unitId": 9,
            "text": "The moderator analogy of synthesis implies that the writer:",
            "options": [
              "Is completely silent and lets the sources speak",
              "Directs the conversation, using sources to support their own central argument",
              "Agrees with every source completely",
              "Only speaks in the introduction"
            ],
            "correctIndex": 1,
            "hint": "The writer controls the flow and sets the thesis.",
            "explanation": "A moderator directs the debate, ensuring all source contributions serve to illuminate and support the central thesis."
          }
        ]
      },
      {
        "id": "9.3",
        "title": "Editing, Polishing, and Achieving the Sophistication Point",
        "description": "Master the writing choices that earn the sophistication point on the AP English Lang rubric.",
        "youtubeId": "vo4pMVb0R6M",
        "article": "# Achieving the Sophistication Point\n\nThe AP English Language rubric awards a point for **sophistication**\u2014proving a deep, nuanced understanding of the rhetorical situation and showing stylistic control.\n\n## Criteria for Sophistication\nYou can earn this point by demonstrating:\n- **Nuanced Stance**: Acknowledging multiple complexities instead of an absolute, one-sided view.\n- **Rhetorical Context**: Linking your analysis back to the broader socio-political or historical circumstances.\n- **Vivid Style**: Demonstrating syntactic variety, precise word choice, and cohesive transitions throughout the essay.\n\n## Polishing and Revision\nIn a timed exam, allocate 3-5 minutes at the end to edit:\n- **Eliminate Clich\u00e9s**: Replace vague terms (*\"good\", \"bad\", \"thing\"*) with precise vocabulary.\n- **Correct Parallelism**: Check that all lists match grammatically.\n- **Vary Sentence Starts**: Ensure you do not start every sentence with the same subject.\n",
        "questions": [
          {
            "id": "q_eng_9.3.1",
            "unitId": 9,
            "text": "Which of the following is a recognized pathway to earning the sophistication point on the AP rubric?",
            "options": [
              "Writing an essay that is exactly five paragraphs long",
              "Demonstrating a nuanced, multi-faceted understanding of the rhetorical situation",
              "Using at least ten words that are not in the dictionary",
              "Agreeing with every source without qualification"
            ],
            "correctIndex": 1,
            "hint": "Nuance and complexity are highly valued.",
            "explanation": "Developing a nuanced argument that explores complexities is a primary pathway to the sophistication point."
          },
          {
            "id": "q_eng_9.3.2",
            "unitId": 9,
            "text": "When polishing your essay under timed conditions, what should you look for first?",
            "options": [
              "Vague diction (like 'thing' or 'good') and faulty parallelisms",
              "The font style and margin sizes",
              "Adding secondary sources not in the prompt",
              "Rewriting the entire introduction"
            ],
            "correctIndex": 0,
            "hint": "Look for low-hanging stylistic issues that weaken ethos.",
            "explanation": "Removing vague words and fixing parallel structures are quick, high-impact edits that immediately improve styling."
          },
          {
            "id": "q_eng_9.3.3",
            "unitId": 9,
            "text": "How does connecting your essay's argument to a larger historical pattern help earn the sophistication point?",
            "options": [
              "It makes the essay longer.",
              "It demonstrates a deep understanding of the broader rhetorical context.",
              "It distracts the reader from structural issues.",
              "It removes the requirement for supporting evidence."
            ],
            "correctIndex": 1,
            "hint": "Shows you understand the big picture of the debate.",
            "explanation": "Contextualizing the argument within a wider historical or cultural backdrop shows advanced rhetorical awareness."
          },
          {
            "id": "q_eng_9.3.4",
            "unitId": 9,
            "text": "A writer starts every sentence in a paragraph with the pronoun 'He'. This represents a lack of:",
            "options": [
              "Coherence",
              "Ethos",
              "Syntactic Variety",
              "Grammar"
            ],
            "correctIndex": 2,
            "hint": "Refers to having a diverse range of sentence structures and beginnings.",
            "explanation": "Repeating the same sentence structure and beginning creates monotonous prose, showing a lack of syntactic variety."
          }
        ]
      }
    ]
  }
];
