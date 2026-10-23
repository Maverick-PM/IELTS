// IELTS Academic Speaking Tests Bank
// Contains 3-part test prompts, cue cards, Band 9 model responses, and scoring rubrics

export const SPEAKING_TOPICS = [
  {
    id: 'speaking-topic-1',
    title: 'Topic 1: Technology, Innovation & Modern Society',
    part1: {
      theme: 'Digital Habits & Studies',
      intro: 'In this first part, I am going to ask you some general questions about yourself and your routine.',
      questions: [
        {
          id: 'sp1-q1',
          question: 'Do you prefer working or studying using digital devices or traditional paper?',
          modelAnswer: 'To be completely honest, I lean heavily toward digital workflows. Utilizing a tablet and cloud-synced applications allows me to annotate documents and organize complex research materials far more systematically than conventional paper. That said, when I need to brainstorm deeply without cognitive distractions, I still resort to a physical notebook.',
          band9KeyWords: ['lean heavily toward', 'cloud-synced', 'annotate documents', 'systematically', 'cognitive distractions']
        },
        {
          id: 'sp1-q2',
          question: 'What kind of mobile applications do you find most indispensable in your daily life?',
          modelAnswer: 'Without question, productivity and time-management applications are paramount for me. I rely on calendar schedulers and pomodoro-style focus timers to maintain rigorous discipline throughout my working hours. They mitigate decision fatigue and ensure I remain accountable to my deadlines.',
          band9KeyWords: ['indispensable', 'paramount', 'rigorous discipline', 'decision fatigue', 'accountable']
        },
        {
          id: 'sp1-q3',
          question: 'Do you think young people spend too much time on digital entertainment today?',
          modelAnswer: 'It is hard to dispute that a significant portion of adolescents exhibit excessive screen dependency. The algorithmic design of short-form video feeds is engineered to exploit dopamine pathways, which often displaces physical exercise and face-to-face socialization. Nevertheless, when leveraged purposefully, digital platforms also offer unprecedented self-directed educational resources.',
          band9KeyWords: ['hard to dispute', 'excessive screen dependency', 'algorithmic design', 'displaces', 'unprecedented']
        }
      ]
    },
    part2: {
      topic: 'Describe an ambitious project or challenge that you successfully accomplished.',
      cueCard: [
        'What the project or challenge was',
        'When and why you undertook it',
        'What obstacles or difficulties you encountered',
        'And explain how you felt when you successfully completed it.'
      ],
      prepTimeSeconds: 60,
      speakTimeSeconds: 120,
      modelAnswer: `I would like to talk about an ambitious academic initiative I spearheaded during my final year of undergraduate studies, which was developing an automated environmental data tracking tool for our local community.

The motivation behind this undertaking stemmed from a persistent issue in our municipality: widespread water contamination in nearby drainage canals that was largely neglected due to a lack of empirical monitoring data. My team set out to construct low-cost IoT sensor pods capable of logging pH and dissolved oxygen levels in real time.

Naturally, we encountered numerous technical and logistical stumbling blocks along the way. First and foremost, calibrating the chemical probes to maintain accuracy under varying weather conditions was immensely demanding. Furthermore, we operated on a shoe-string budget, which necessitated learning open-source micro-controller programming from scratch. There were moments of acute frustration when sensor nodes failed during torrential downpours.

However, through systematic debugging and perseverance, we successfully deployed a network of twelve functioning nodes. When the central dashboard lit up with verified telemetry data, the sense of gratification was indescribable. It not only validated months of relentless labor, but also provided municipal authorities with actionable evidence that subsequently prompted a cleanup campaign. It reinforced my conviction that rigorous technical problem-solving can directly catalyze positive civic change.`,
      band9KeyWords: ['spearheaded', 'undertaking stemmed from', 'empirical monitoring', 'stumbling blocks', 'calibrating', 'shoe-string budget', 'acute frustration', 'telemetry data', 'gratification was indescribable', 'catalyze civic change']
    },
    part3: {
      theme: 'Technological Automation, Innovation & Future Work',
      intro: 'We have been talking about personal challenges. Now I would like to discuss some broader questions related to this topic.',
      questions: [
        {
          id: 'sp1-p3-q1',
          question: 'How do you foresee artificial intelligence altering the employment landscape over the next two decades?',
          modelAnswer: 'I believe artificial intelligence will precipitate a fundamental structural bifurcation in the labor market. On one hand, routine clerical, analytical, and repetitive cognitive tasks will inevitably be automated at scale. On the other hand, this disruption will create unprecedented demand for individuals possessing high-level creative synthesis, emotional intelligence, and cross-disciplinary adaptability. The crux of the challenge lies in how effectively societies can establish continuous adult reskilling pipelines to avert catastrophic technological redundancy.',
          band9KeyWords: ['precipitate a fundamental structural bifurcation', 'automated at scale', 'unprecedented demand', 'creative synthesis', 'crux of the challenge', 'technological redundancy']
        },
        {
          id: 'sp1-p3-q2',
          question: 'Should governments regulate rapid technological disruption, or should markets be left alone to innovate?',
          modelAnswer: 'In my perspective, unbridled market forces alone are ill-equipped to safeguard public welfare in the face of exponential technologies. While excessive bureaucratic red tape can undoubtedly stifle entrepreneurial dynamism, proactive regulatory guardrails are indispensable in domain areas such as data privacy, algorithmic bias, and ethical bio-engineering. The optimal approach is a balanced, agile governance model where regulatory frameworks evolve iteratively in consultation with technical experts.',
          band9KeyWords: ['unbridled market forces', 'ill-equipped', 'safeguard public welfare', 'bureaucratic red tape', 'stifle entrepreneurial dynamism', 'proactive regulatory guardrails', 'agile governance']
        },
        {
          id: 'sp1-p3-q3',
          question: 'Why do some individuals resist technological advancements while others embrace them enthusiastically?',
          modelAnswer: 'Resistance to technological innovation is frequently anchored in psychological apprehension and economic vulnerability. When people perceive that a novel technology poses an existential threat to their livelihood or disrupts familiar socio-cultural norms, reluctance is a very natural defense mechanism. Conversely, those who embrace innovation typically possess digital literacy, financial security, and the institutional support necessary to exploit new tools to their strategic advantage.',
          band9KeyWords: ['anchored in psychological apprehension', 'economic vulnerability', 'existential threat', 'reluctance is a natural defense mechanism', 'digital literacy', 'strategic advantage']
        }
      ]
    }
  },
  {
    id: 'speaking-topic-2',
    title: 'Topic 2: Education, Globalization & Cultural Heritage',
    part1: {
      theme: 'Travel & Language Learning',
      intro: 'In this section, I would like to ask you about language learning and foreign travel.',
      questions: [
        {
          id: 'sp2-q1',
          question: 'What do you find most challenging when learning a foreign language?',
          modelAnswer: 'For me, mastering idiomatic nuance and pragmatic competence is by far the steepest learning curve. While memorizing grammatical syntax and lexical items is relatively straightforward with discipline, understanding subtle conversational implicatures and culturally embedded humor requires sustained immersion in real-world communicative settings.',
          band9KeyWords: ['idiomatic nuance', 'pragmatic competence', 'steepest learning curve', 'grammatical syntax', 'conversational implicatures', 'sustained immersion']
        },
        {
          id: 'sp2-q2',
          question: 'Do you prefer traveling independently or as part of an organized guided tour?',
          modelAnswer: 'I unequivocally advocate for independent travel. Structured tour itineraries tend to be overly rigid and curate an artificial, homogenized veneer of a destination. Venturing out autonomously allows for spontaneous cultural encounters and affords the flexibility to delve into lesser-known historical sites at one’s own pace.',
          band9KeyWords: ['unequivocally advocate', 'rigid', 'homogenized veneer', 'autonomously', 'spontaneous cultural encounters', 'delve into']
        },
        {
          id: 'sp2-q3',
          question: 'How important is it for children to learn about traditional folklore and national history?',
          modelAnswer: 'I believe it is vital for cognitive and civic development. Folklore and historical narratives instill an authentic sense of cultural identity and continuity across generations. Without this foundational anchoring, children risk becoming culturally disoriented in an increasingly homogenized, globalized media landscape.',
          band9KeyWords: ['civic development', 'instill an authentic sense', 'cultural continuity', 'foundational anchoring', 'culturally disoriented']
        }
      ]
    },
    part2: {
      topic: 'Describe a historical building, monument, or cultural landmark that left a deep impression on you.',
      cueCard: [
        'Where this landmark is situated',
        'When and why you visited it',
        'What architectural or historical features stood out',
        'And explain why it left such an indelible impression on you.'
      ],
      prepTimeSeconds: 60,
      speakTimeSeconds: 120,
      modelAnswer: `I would like to recount my visit to the historic ancient city of Persepolis, situated in modern-day southwestern Iran, which I had the privilege of exploring two years ago during an archaeological study tour.

The monument served as the ceremonial capital of the Achaemenid Empire dating back to roughly 518 BCE. Walking onto the monumental terrace via the Grand Staircase immediately evokes a profound sense of awe. What struck me most acutely was the sublime precision of the stone masonry; the colossal Gate of All Nations, guarded by winged bull lamassus, exhibits sophisticated relief carvings that have withstood millennia of climatic weathering.

The Apadana Palace column remains are particularly breathtaking. The bas-relief friezes depicting delegates from twenty-three subjugated nations bearing tributes—from median robes to Bactrian camels—convey an extraordinary level of anthropological detail and multicultural coexistence that was remarkably progressive for antiquity.

What made this site truly indelible was the palpable contrast between its imperial grandeur and its tragic demise under Alexander the Great. Standing amid those monolithic columns under the scorching desert sun served as a poignant reminder of the ephemeral nature of even the mightiest human empires, while simultaneously celebrating humanity's enduring architectural genius.`,
      band9KeyWords: ['recount my visit', 'ceremonial capital', 'monumental terrace', 'sublime precision', 'colossal', 'climatic weathering', 'bas-relief friezes', 'multicultural coexistence', 'palpable contrast', 'poignant reminder', 'ephemeral nature']
    },
    part3: {
      theme: 'Cultural Preservation vs. Modern Urbanization',
      intro: 'We have been discussing historical landmarks. Let us consider some broader implications of historical preservation.',
      questions: [
        {
          id: 'sp2-p3-q1',
          question: 'Should public tax revenues be allocated to preserve historical monuments rather than funding public infrastructure?',
          modelAnswer: 'This presents a classic public policy dichotomy, but I believe it is a false dilemma. Public investments in heritage preservation generate substantial economic dividends through cultural tourism and regional revitalization. More fundamentally, monuments constitute the collective memory and architectural soul of a civilization; sacrificing them for short-term infrastructural expediency represents an irreversible cultural impoverishment.',
          band9KeyWords: ['public policy dichotomy', 'false dilemma', 'economic dividends', 'regional revitalization', 'collective memory', 'short-term expediency', 'cultural impoverishment']
        },
        {
          id: 'sp2-p3-q2',
          question: 'How can modern architecture coexist harmoniously with historical heritage quarters in metropolitan cities?',
          modelAnswer: 'Coexistence necessitates strict urban zoning bylaws coupled with contextual architectural design. Modern structures need not replicate historical facades in a pastiche fashion; rather, architects can employ contemporary interpretations of traditional materials, volume scales, and visual sightlines. Cities like London and Kyoto demonstrate that juxtaposing avant-garde glass facades against classical stone masonry can foster a dynamic architectural dialogue rather than aesthetic discordance.',
          band9KeyWords: ['zoning bylaws', 'contextual architectural design', 'pastiche fashion', 'contemporary interpretations', 'juxtaposing', 'avant-garde', 'aesthetic discordance']
        },
        {
          id: 'sp2-p3-q3',
          question: 'Do you think globalization will ultimately dilute distinct indigenous cultures across the globe?',
          modelAnswer: 'While globalization undeniably exerts powerful homogenizing pressures through transnational corporate media and consumerism, it simultaneously provides indigenous communities with digital platforms to document, revitalize, and disseminate their intangible heritage. I view culture not as a fragile museum relic, but as an adaptive organism capable of synthesizing foreign influences while fiercely preserving core existential values.',
          band9KeyWords: ['homogenizing pressures', 'transnational', 'disseminate intangible heritage', 'fragile museum relic', 'adaptive organism', 'synthesizing foreign influences']
        }
      ]
    }
  },
  {
    id: 'speaking-topic-3',
    title: 'Topic 3: Environmental Conservation & Urban Living',
    part1: {
      theme: 'Urban Green Spaces & Nature',
      intro: 'In this part, I would like to talk with you about nature, parks, and city environments.',
      questions: [
        {
          id: 'sp3-q1',
          question: 'How frequently do you spend time in parks or botanical gardens in your city?',
          modelAnswer: 'I make a conscientious effort to frequent municipal parks at least two or three times a week. Residing in a dense metropolitan center can induce sensory overload and chronic fatigue; taking brisk morning strolls amidst lush greenery provides an invaluable cognitive reset and promotes psychological equilibrium.',
          band9KeyWords: ['conscientious effort', 'frequent', 'dense metropolitan center', 'sensory overload', 'cognitive reset', 'psychological equilibrium']
        },
        {
          id: 'sp3-q2',
          question: 'Are there sufficient recreational green spaces in your hometown?',
          modelAnswer: 'Regrettably, green infrastructure in my hometown is noticeably deficient. Due to aggressive commercial real estate development and unregulated suburban sprawl over the past decade, recreational civic parks have been steadily encroached upon, leaving residents with scarce communal outdoor amenities.',
          band9KeyWords: ['green infrastructure', 'noticeably deficient', 'aggressive commercial real estate', 'unregulated suburban sprawl', 'encroached upon', 'communal outdoor amenities']
        },
        {
          id: 'sp3-q3',
          question: 'Do you believe city planners should prioritize public transportation over personal automobile infrastructure?',
          modelAnswer: 'Unquestionably. Prioritizing mass transit networks over private vehicular thoroughfares is indispensable for mitigating urban carbon emissions and attenuating gridlock congestion. Cities designed around pedestrians, light rail, and cycling corridors consistently exhibit higher livability indices and superior public health outcomes.',
          band9KeyWords: ['mass transit networks', 'vehicular thoroughfares', 'mitigating carbon emissions', 'attenuating gridlock', 'livability indices', 'superior public health']
        }
      ]
    },
    part2: {
      topic: 'Describe an environmental initiative or law that has significantly improved your region.',
      cueCard: [
        'What the environmental initiative or policy was',
        'When and how it was implemented',
        'How members of the public responded to it',
        'And explain why this initiative has been so consequential for your area.'
      ],
      prepTimeSeconds: 60,
      speakTimeSeconds: 120,
      modelAnswer: `I would like to highlight a remarkably successful environmental policy introduced across our province four years ago: the comprehensive municipal single-use plastic ban coupled with mandatory waste-sorting bylaws.

Historically, our waterways and residential neighborhoods were chronically plagued by non-biodegradable polythene bags, disposable food containers, and single-use utensils. The regional government enacted legislation that imposed stringent levies on non-recyclable commercial packaging while subsidizing biodegradable plant-starch alternatives for retailers.

Initially, the regulation encountered considerable skepticism and pushback from small vendors who were anxious about inflated operating expenses. However, the authorities launched an extensive public awareness campaign and distributed subsidized reusable canvas tote bags to households, which swiftly fostered broad civic compliance. Within eighteen months, consumer behavior shifted dramatically from disposable convenience to conscious conservation.

The ramifications of this initiative have been immensely transformative. Drainage canals that routinely clogged and triggered seasonal flash flooding during the rainy season are now vastly clearer. Furthermore, local recycling recovery rates have escalated from under twenty percent to upwards of sixty-five percent. This policy serves as irrefutable proof that decisive legislative mandates, when reinforced by public engagement and practical alternatives, can dramatically alleviate ecological degradation.`,
      band9KeyWords: ['highlight a remarkably successful', 'chronically plagued', 'non-biodegradable polythene', 'stringent levies', 'subsidizing biodegradable alternatives', 'considerable skepticism', 'civic compliance', 'transformative ramifications', 'irrefutable proof', 'alleviate ecological degradation']
    },
    part3: {
      theme: 'Global Climate Commitments & Individual Responsibility',
      intro: 'We have been discussing environmental policies. Let us now examine broader sustainability questions.',
      questions: [
        {
          id: 'sp3-p3-q1',
          question: 'Can individual lifestyle choices truly make a meaningful difference in mitigating global climate change, or must solutions come entirely from corporations and governments?',
          modelAnswer: 'I believe this is an interdependent dynamic rather than a mutually exclusive choice. While industrial decarbonization, renewable energy grid transitions, and corporate carbon tariffs are paramount, aggregate consumer demand drives corporate production cycles. When millions of citizens adopt plant-forward diets, minimize commercial aviation, and demand circular economy packaging, market incentives pivot. Individual conscientious consumerism creates the social mandate that empowers politicians to enact stringent climate legislation.',
          band9KeyWords: ['interdependent dynamic', 'mutually exclusive', 'industrial decarbonization', 'corporate carbon tariffs', 'aggregate consumer demand', 'circular economy', 'social mandate']
        },
        {
          id: 'sp3-p3-q2',
          question: 'Why do developed and developing nations frequently clash during international climate negotiations?',
          modelAnswer: 'The central fracture point is historical culpability versus present economic growth. Western industrialized economies achieved their unprecedented prosperity by consuming fossil fuels unrestrictedly throughout the nineteenth and twentieth centuries, thereby generating the lion’s share of cumulative atmospheric carbon. Conversely, developing nations argue that imposing identical carbon ceilings on emerging economies curtails their capacity to lift impoverished populations out of poverty. Equitable climate diplomacy demands that wealthy nations fulfill substantial climate financing and green technology transfer pledges.',
          band9KeyWords: ['central fracture point', 'historical culpability', 'lion’s share of cumulative carbon', 'carbon ceilings', 'curtails their capacity', 'equitable climate diplomacy', 'green technology transfer']
        },
        {
          id: 'sp3-p3-q3',
          question: 'Do you believe future human settlements will be forced to adapt to subterranean or floating aquatic designs due to climate extremes?',
          modelAnswer: 'Given the accelerating frequency of sea-level rise and catastrophic meteorological events, such architectural adaptations are rapidly transitioning from speculative science fiction into pragmatic engineering necessities. Coastal metropolises like Rotterdam and Singapore are already pioneering amphibious urban quarters and floating seawall infrastructure. While terraforming subterranean habitats poses psychological challenges regarding natural circadian lighting, resilient aquatic urbanization will undoubtedly become a cornerstone of climate adaptation strategies over the coming century.',
          band9KeyWords: ['accelerating frequency', 'catastrophic meteorological events', 'pragmatic engineering necessities', 'amphibious urban quarters', 'circadian lighting', 'resilient aquatic urbanization', 'cornerstone of climate adaptation']
        }
      ]
    }
  },
  {
    id: 'speaking-topic-4',
    title: 'Topic 4: Health, Nutrition, Physical Exercise & Modern Lifestyles',
    part1: {
      theme: 'Physical Wellness & Dietary Habits',
      intro: 'In this first part, I would like to ask you some questions about personal health, fitness, and nutrition.',
      questions: [
        {
          id: 'sp4-q1',
          question: 'What physical activities or sports do you engage in to maintain your fitness?',
          modelAnswer: 'To be completely candid, I incorporate a blend of cardiovascular conditioning and resistance training into my weekly regimen. Three mornings a week, I go for a brisk five-kilometer run around my local park, which acts as a great stress reliever. Additionally, I participate in bodyweight calisthenics, which significantly enhances my core stability and overall endurance.',
          band9KeyWords: ['cardiovascular conditioning', 'resistance training', 'weekly regimen', 'calisthenics', 'core stability']
        },
        {
          id: 'sp4-q2',
          question: 'Do you pay close attention to the nutritional value of the food you consume?',
          modelAnswer: 'Most definitely. I make a conscious effort to adhere to a wholesome, minimally processed diet. I prioritize nutrient-dense whole foods such as leafy greens, legumes, and lean proteins while deliberately curtailing my intake of refined sugars and ultra-processed snacks. Reading nutritional labels has virtually become second nature to me.',
          band9KeyWords: ['wholesome', 'minimally processed diet', 'nutrient-dense whole foods', 'curtailing my intake', 'second nature']
        },
        {
          id: 'sp4-q3',
          question: 'How important do you think consistent sleep patterns are for overall mental and physical stamina?',
          modelAnswer: 'I consider restorative sleep to be the non-negotiable bedrock of both cognitive functioning and metabolic health. When people chronically sleep-deprive themselves, their executive concentration falters, immune defenses deteriorate, and emotional resilience plummets. I prioritize getting seven to eight hours of uninterrupted rest every single night.',
          band9KeyWords: ['restorative sleep', 'non-negotiable bedrock', 'executive concentration', 'metabolic health', 'emotional resilience']
        }
      ]
    },
    part2: {
      topic: 'Describe a healthy lifestyle habit or physical routine you adopted that substantially improved your well-being.',
      cueCard: [
        'What the habit or routine is',
        'When and why you decided to adopt it',
        'What challenges you faced while trying to establish it',
        'And explain how this habit has positively transformed your daily life.'
      ],
      prepTimeSeconds: 60,
      speakTimeSeconds: 120,
      modelAnswer: `I would like to speak about my decision to adopt daily morning meditation and deliberate digital detachment roughly eighteen months ago. Prior to establishing this routine, I was caught in a relentless cycle of waking up and immediately checking work emails and social media notifications, which inevitably induced a sense of acute cognitive anxiety before my feet even touched the floor.

Recognizing that this compulsive habit was sabotaging my emotional equilibrium, I resolved to implement a strict thirty-minute mindful morning protocol. Every morning at 6:30 AM, without touching any digital screens, I perform fifteen minutes of focused mindfulness breathing exercises followed by light mobility stretches.

Admittedly, cementing this habit was initially fraught with difficulty. The modern brain develops a subtle dopamine craving for rapid stimulation, and during the first fortnight, my mind constantly wandered, urging me to reach for my smartphone. Overcoming that compulsive urge required genuine self-discipline and cognitive reconditioning.

The transformative ramifications on my overall well-being have been profound. Cultivating this calm pocket of stillness at the start of each morning has substantially bolstered my sustained attention span throughout demanding workdays. Furthermore, my baseline stress levels have plummeted, enabling me to handle unanticipated workplace pressures with equanimity rather than panic.`,
      band9KeyWords: ['deliberate digital detachment', 'relentless cycle', 'cognitive anxiety', 'emotional equilibrium', 'mindfulness breathing', 'dopamine craving', 'cognitive reconditioning', 'transformative ramifications', 'equanimity']
    },
    part3: {
      theme: 'Public Health Initiatives, Preventative Healthcare & Modern Diet',
      intro: 'We have been discussing personal wellness habits. Let us now examine broader societal questions concerning public health.',
      questions: [
        {
          id: 'sp4-p3-q1',
          question: 'Do you believe governments should enforce statutory taxes on sugary beverages and ultra-processed junk food?',
          modelAnswer: 'Yes, I firmly advocate for fiscal public health interventions of this nature. Escalating obesity rates and lifestyle-induced non-communicable diseases impose colossal fiscal burdens on public healthcare infrastructures. Just as excise levies on tobacco products proved remarkably efficacious in curbing smoking rates, targeted sugar taxes incentivize food conglomerates to reformulate their recipes while dissuading impulsive consumer purchases.',
          band9KeyWords: ['statutory taxes', 'fiscal public health interventions', 'non-communicable diseases', 'colossal fiscal burdens', 'excise levies', 'efficacious']
        },
        {
          id: 'sp4-p3-q2',
          question: 'Why do modern urban societies struggle to maintain active lifestyles despite widespread awareness of fitness benefits?',
          modelAnswer: 'The core paradox stems from structural urban architecture and the sedentary nature of 21st-century knowledge economies. Most corporate professionals remain desk-bound for eight to ten hours daily, followed by vehicle-dependent commutes in car-centric cities lacking pedestrianized thoroughfares or protected cycle lanes. When mental exhaustion sets in after a grueling shift, individuals naturally succumb to passive digital entertainment rather than demanding physical exertion.',
          band9KeyWords: ['structural urban architecture', 'knowledge economies', 'desk-bound', 'car-centric cities', 'pedestrianized thoroughfares', 'succumb to passive entertainment']
        },
        {
          id: 'sp4-p3-q3',
          question: 'Should medical systems place greater financial emphasis on preventative lifestyle medicine rather than reactive pharmacology?',
          modelAnswer: 'Undoubtedly. Conventional modern medicine operates predominantly on a reactive therapeutic model, prescribing pharmaceutical medications to treat symptoms once clinical pathology has already manifested. Pivoting resources toward preventative lifestyle medicine—such as community nutritional coaching, subsidized gym access, and early biometric screening—yields far superior long-term prophylactic outcomes at a fraction of the cost.',
          band9KeyWords: ['reactive therapeutic model', 'clinical pathology', 'prophylactic outcomes', 'biometric screening', 'preventative lifestyle medicine']
        }
      ]
    }
  },
  {
    id: 'speaking-topic-5',
    title: 'Topic 5: Media, Journalism, Information Literacy & Digital Communication',
    part1: {
      theme: 'News Media & Reading Habits',
      intro: 'In this section, I would like to ask you about how you consume news and stay informed about current affairs.',
      questions: [
        {
          id: 'sp5-q1',
          question: 'Through what channels do you typically receive domestic and international news updates?',
          modelAnswer: 'I rely primarily on curated independent digital publications and reputable public service broadcasters rather than social media feeds. I subscribe to investigative journalism platforms and listen to daily analytical podcasts during my morning commute, which provides rigorous contextual reporting rather than sensationalist clickbait.',
          band9KeyWords: ['curated digital publications', 'public service broadcasters', 'investigative journalism', 'contextual reporting', 'sensationalist clickbait']
        },
        {
          id: 'sp5-q2',
          question: 'Do you think it is easy to distinguish between verified objective journalism and fabricated misinformation online?',
          modelAnswer: 'Regrettably, it has become increasingly challenging. With the democratization of digital publishing and sophisticated generative deepfakes, misleading narratives can be packaged with professional aesthetic polish. Developing rigorous media literacy—such as lateral reading and cross-referencing primary empirical sources—is now an indispensable survival skill for every digital citizen.',
          band9KeyWords: ['democratization of publishing', 'generative deepfakes', 'aesthetic polish', 'media literacy', 'lateral reading', 'empirical sources']
        },
        {
          id: 'sp5-q3',
          question: 'Did you read printed newspapers when you were growing up?',
          modelAnswer: 'Yes, I distinctly recall my family receiving broadsheet newspapers every morning. There was a tactile satisfaction in browsing through physical pages over breakfast. While printed circulation has dwindled due to real-time digital feeds, that daily ritual fostered a disciplined reading habit that I cherish to this day.',
          band9KeyWords: ['broadsheet newspapers', 'tactile satisfaction', 'printed circulation', 'dwindled', 'daily ritual']
        }
      ]
    },
    part2: {
      topic: 'Describe an investigative documentary, article, or news story that made a strong intellectual impression on you.',
      cueCard: [
        'What the story or documentary was about',
        'Where and when you encountered it',
        'What compelling evidence or insights it revealed',
        'And explain why it left such a profound impression on your thinking.'
      ],
      prepTimeSeconds: 60,
      speakTimeSeconds: 120,
      modelAnswer: `I would like to discuss a profoundly illuminating investigative documentary titled 'The Shadow of Algorithms', which I watched roughly six months ago on an educational streaming platform.

The documentary conducted an exhaustive forensic examination into how automated recommendation algorithms deployed by dominant social media networks deliberately amplify incendiary content and radical political rhetoric to maximize user engagement and advertising revenue.

What made the reporting exceptionally compelling was its reliance on testimony from former software engineers, whistleblower internal communications, and empirical data audits. The documentary demonstrated that algorithmic architectures are fundamentally optimized for human cognitive outrage: users linger significantly longer on sensational, polarizing headlines than on balanced, nuanced investigative reports.

This documentary left an indelible mark on my worldview because it permanently shattered my naive assumption that search engines and social platforms are neutral utility conduits. It made me realize that our collective digital information ecosystem is subtly steering democratic discourse, exacerbating societal polarization, and creating impermeable echo chambers unless citizens actively cultivate critical skepticism.`,
      band9KeyWords: ['illuminating investigative documentary', 'exhaustive forensic examination', 'incendiary content', 'radical political rhetoric', 'whistleblower testimony', 'cognitive outrage', 'polarizing headlines', 'indelible mark', 'neutral utility conduits', 'impermeable echo chambers']
    },
    part3: {
      theme: 'Media Regulation, Freedom of the Press & Algorithmic Accountability',
      intro: 'We have been discussing news media and investigative reporting. Let us now examine broader regulatory and ethical dimensions.',
      questions: [
        {
          id: 'sp5-p3-q1',
          question: 'To what extent should governments regulate online platforms to curb the dissemination of hate speech and fake news?',
          modelAnswer: 'This presents a classic liberal democratic conundrum between protecting societal cohesion and preserving fundamental freedom of expression. While authoritarian censorship must be resisted, platform gatekeepers should not enjoy blanket immunity for disseminating provably defamatory or violent incitement. Governments should mandate transparency over algorithmic ranking mechanisms and enforce rapid takedown procedures for coordinated disinformation campaigns.',
          band9KeyWords: ['democratic conundrum', 'societal cohesion', 'authoritarian censorship', 'blanket immunity', 'violent incitement', 'algorithmic transparency']
        },
        {
          id: 'sp5-p3-q2',
          question: 'Do you believe citizen journalism on mobile phones has made traditional news organizations obsolete?',
          modelAnswer: 'Not entirely; rather, they serve complementary functions. Citizen journalists armed with smartphones provide invaluable real-time footage from ground zero during breaking crises or civil protests before professional crews can arrive. However, raw footage lacks institutional fact-checking, legal scrutiny, and nuanced historical context. High-caliber traditional journalism remains essential to synthesize raw data into verified truth.',
          band9KeyWords: ['complementary functions', 'ground zero', 'invaluable real-time footage', 'institutional fact-checking', 'legal scrutiny', 'nuanced historical context']
        },
        {
          id: 'sp5-p3-q3',
          question: 'How is artificial intelligence likely to transform the economics and production of investigative journalism?',
          modelAnswer: 'Artificial intelligence presents a double-edged sword. On one hand, automated machine learning pipelines can parse millions of leaked offshore financial documents or public procurement records in minutes, accelerating investigative breakthroughs. On the other hand, the proliferation of automated content mills threatens to cannibalize journalistic budgets, making it harder to fund long-form, on-the-ground foreign correspondents.',
          band9KeyWords: ['double-edged sword', 'machine learning pipelines', 'public procurement records', 'automated content mills', 'cannibalize journalistic budgets', 'on-the-ground correspondents']
        }
      ]
    }
  },
  {
    id: 'speaking-topic-6',
    title: 'Topic 6: Work, Careers, Entrepreneurship & Organizational Leadership',
    part1: {
      theme: 'Professional Aspirations & Workplace Environment',
      intro: 'In this section, I would like to ask you some questions about your professional interests, career goals, and workplace preferences.',
      questions: [
        {
          id: 'sp6-q1',
          question: 'What professional qualities do you value most in colleagues and collaborators?',
          modelAnswer: 'Above all, I value intellectual humility, emotional intelligence, and proactive accountability. Collaborating with individuals who communicate transparently, share constructive feedback without defensiveness, and take genuine ownership of their responsibilities fosters an exceptionally fertile and harmonious working environment.',
          band9KeyWords: ['intellectual humility', 'emotional intelligence', 'proactive accountability', 'constructive feedback', 'harmonious working environment']
        },
        {
          id: 'sp6-q2',
          question: 'Do you prefer working autonomously or as part of a cross-functional team?',
          modelAnswer: 'I genuinely thrive in a hybrid model that balances both modalities. When drafting complex strategic proposals or conducting deep analytical research, I require periods of uninterrupted solitary focus. However, during conceptual ideation and project execution, the synergistic friction of a multidisciplinary team produces far superior creative solutions.',
          band9KeyWords: ['hybrid model', 'uninterrupted solitary focus', 'conceptual ideation', 'synergistic friction', 'multidisciplinary team']
        },
        {
          id: 'sp6-q3',
          question: 'How do you effectively manage tight deadlines and high workplace expectations?',
          modelAnswer: 'I rely on rigorous cognitive triage and time-blocking methodologies. When multiple urgent priorities converge, I categorize deliverables based on strategic impact rather than mere temporal urgency. Breaking daunting milestones down into bite-sized actionable tasks prevents psychological paralysis and ensures steady momentum.',
          band9KeyWords: ['cognitive triage', 'time-blocking methodologies', 'strategic impact', 'daunting milestones', 'psychological paralysis']
        }
      ]
    },
    part2: {
      topic: 'Describe an exceptional leader, mentor, or teacher who profoundly influenced your educational or professional growth.',
      cueCard: [
        'Who this person was and how you met them',
        'What specific leadership qualities or teachings they demonstrated',
        'What difficult situation they guided you through',
        'And explain how their mentorship has permanently shaped your approach to life.'
      ],
      prepTimeSeconds: 60,
      speakTimeSeconds: 120,
      modelAnswer: `I would like to talk about Dr. Kenneth Vance, who was my senior academic advisor and research supervisor during my final undergraduate dissertation.

What distinguished Dr. Vance was his rare synthesis of relentless academic rigor and boundless empathetic patience. Rather than treating undergraduates as passive research assistants, he empowered us as intellectual peers. He had a remarkable pedagogical gift for asking penetrating Socratic questions that guided students to uncover their own analytical blind spots rather than simply spoon-feeding pre-packaged answers.

A pivotal moment occurred when my initial econometric data model produced completely statistically insignificant results after six weeks of exhaustive data entry. I was utterly demoralized and contemplated abandoning my thesis topic altogether.

Instead of displaying disappointment, Dr. Vance sat down with me for two hours, methodically deconstructed my regression assumptions, and demonstrated that a negative finding in research is just as scientifically illuminating as a confirmatory one. His mentorship instilled in me an unshakeable intellectual resilience and taught me that setbacks are indispensable stepping stones toward empirical mastery.`,
      band9KeyWords: ['academic rigor', 'empathetic patience', 'intellectual peers', 'penetrating Socratic questions', 'analytical blind spots', 'econometric data model', 'deconstructed my regression assumptions', 'intellectual resilience', 'empirical mastery']
    },
    part3: {
      theme: 'Organizational Leadership, Remote Work & Workplace Transformation',
      intro: 'We have been discussing mentorship and professional careers. Let us now examine organizational leadership and the changing nature of work.',
      questions: [
        {
          id: 'sp6-p3-q1',
          question: 'What core leadership traits distinguish visionary leaders from authoritarian managers?',
          modelAnswer: 'The fundamental demarcation lies between inspirational empowerment and coercive micromanagement. Authoritarian managers rely on hierarchy, surveillance, and punitive compliance, which invariably stifles employee initiative. In stark contrast, visionary leaders cultivate psychological safety, communicate an articulate strategic vision, and empower team members with autonomous decision-making latitude.',
          band9KeyWords: ['fundamental demarcation', 'inspirational empowerment', 'coercive micromanagement', 'punitive compliance', 'stifles employee initiative', 'psychological safety', 'decision-making latitude']
        },
        {
          id: 'sp6-p3-q2',
          question: 'Will widespread remote telecommuting permanently weaken organizational culture and social cohesion among employees?',
          modelAnswer: 'While remote work undeniably enhances personal autonomy and eliminates debilitating daily commutes, it does pose subtle risks to organic corporate cohesion. Serendipitous corridor conversations, spontaneous brainstorming sessions, and informal mentorship are much harder to replicate across video conferencing grids. Progressive organizations must intentionally design in-person retreats and collaborative hubs to sustain organizational culture.',
          band9KeyWords: ['personal autonomy', 'debilitating commutes', 'corporate cohesion', 'serendipitous conversations', 'spontaneous brainstorming', 'video conferencing grids']
        },
        {
          id: 'sp6-p3-q3',
          question: 'How should higher education institutions evolve their curricula to prepare graduates for an era of generative AI?',
          modelAnswer: 'Universities must decisively pivot away from didactic rote memorization and formulaic coursework, which generative AI already automates with effortless speed. Curricula should instead emphasize high-order cognitive capabilities: ethical reasoning, complex systems thinking, epistemological skepticism, and interpersonal persuasion. The graduates who will thrive are those who can synthesize disparate disciplines rather than narrow technocrats.',
          band9KeyWords: ['decisively pivot', 'didactic rote memorization', 'high-order cognitive capabilities', 'systems thinking', 'epistemological skepticism', 'synthesize disparate disciplines']
        }
      ]
    }
  }
];

export const SPEAKING_RUBRIC_CRITERIA = [
  {
    key: 'fc',
    name: 'Fluency & Coherence',
    description: 'Speaks at length without noticeable effort or loss of coherence; minimal hesitation; natural discourse markers and cohesive links.'
  },
  {
    key: 'lr',
    name: 'Lexical Resource',
    description: 'Uses a wide vocabulary readily and flexibly to discuss topics; uses idiomatic expressions, collocations, and precise register.'
  },
  {
    key: 'gra',
    name: 'Grammatical Range & Accuracy',
    description: 'Uses a full range of structures naturally and appropriately; consistently accurate complex clauses and conditional forms.'
  },
  {
    key: 'pr',
    name: 'Pronunciation',
    description: 'Uses a full range of phonological features; effortless to understand; natural rhythm, intonation, and stress patterns.'
  }
];
