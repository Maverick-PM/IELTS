// IELTS Academic Task 2 Offline Essay Prompt Bank
// Categorized by essay type with thematic keywords and official Cambridge instructions

const OFFICIAL_TASK2_INSTRUCTIONS = 'Give reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.';

export const TASK_2_PROMPTS = [
  {
    id: 'task2-01',
    category: 'opinion',
    title: 'Automation & Workplace Employment',
    question: 'Some people argue that artificial intelligence and automation will lead to widespread unemployment, while others believe they will generate more opportunities than they eliminate.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['automation', 'redundancy', 'technological unemployment', 'reskilling', 'productivity', 'exponential']
  },
  {
    id: 'task2-02',
    category: 'discussion',
    title: 'University Tuition Fees',
    question: 'Some believe that higher education should be entirely free for all eligible citizens funded through taxation, while others contend that university students should pay for their own degree courses since they directly benefit from increased earnings.\n\nDiscuss both views and give your own opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['tertiary education', 'socioeconomic mobility', 'fiscal burden', 'taxation', 'meritocracy', 'subsidize']
  },
  {
    id: 'task2-03',
    category: 'problem-solution',
    title: 'Urban Traffic Congestion & Air Pollution',
    question: 'Traffic congestion in major metropolitan cities across the globe has escalated rapidly, resulting in severe air pollution and diminished quality of life.\n\nWhat are the primary causes of this phenomenon, and what measures can governments implement to tackle this crisis?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['rapid urbanization', 'vehicular emissions', 'infrastructure deficit', 'congestion pricing', 'pedestrianization']
  },
  {
    id: 'task2-04',
    category: 'advantages-disadvantages',
    title: 'Remote Telecommuting & Distributed Work',
    question: 'In many countries, an increasing number of professionals are opting to work remotely from home rather than commute to physical corporate offices.\n\nDo the advantages of this trend outweigh the disadvantages?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['telecommuting', 'work-life balance', 'isolation', 'carbon footprint', 'productivity', 'corporate culture']
  },
  {
    id: 'task2-05',
    category: 'opinion',
    title: 'Consumerism & Material Wealth',
    question: 'Modern society places excessive emphasis on material possessions and consumer spending as the primary benchmark of personal success.\n\nTo what extent do you agree with this statement?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['consumer culture', 'superficial benchmarks', 'hedonic treadmill', 'wellbeing', 'societal validation']
  },
  {
    id: 'task2-06',
    category: 'discussion',
    title: 'Preservation of Traditional Culture vs Modernization',
    question: 'Some people argue that developing countries should prioritize modern economic expansion even if it harms local traditions. Others argue that cultural heritage must be protected at all costs.\n\nDiscuss both views and give your opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['cultural identity', 'globalization', 'heritage preservation', 'homogenization', 'sustainable modernization']
  },
  {
    id: 'task2-07',
    category: 'problem-solution',
    title: 'Youth Mental Health in the Digital Era',
    question: 'Rates of anxiety, loneliness, and depression among adolescents have increased markedly over the past decade.\n\nWhat factors contribute to this surge, and what practical solutions can schools and parents adopt?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['psychological distress', 'cyberbullying', 'screen addiction', 'social comparison', 'resilience training']
  },
  {
    id: 'task2-08',
    category: 'opinion',
    title: 'Space Exploration Funding',
    question: 'Governments spend billions of dollars on space exploration programs. Many citizens argue this public money would be vastly better spent addressing immediate terrestrial problems such as hunger and poverty.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['astronomical expenditure', 'terrestrial crises', 'technological spin-offs', 'scientific breakthroughs']
  },
  {
    id: 'task2-09',
    category: 'advantages-disadvantages',
    title: 'Cashless Societies & Digital Payments',
    question: 'Several advanced economies are transitioning toward entirely cashless societies where physical notes and coins are discontinued in favor of digital cards and electronic transfers.\n\nDo the benefits of a cashless economy outweigh its potential drawbacks?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['digital transaction', 'financial inclusion', 'cybersecurity vulnerability', 'surveillance', 'convenience']
  },
  {
    id: 'task2-10',
    category: 'discussion',
    title: 'Government Regulation of Sugar and Fast Food',
    question: 'Some believe governments should introduce substantial taxes on sugary beverages and junk food to curb obesity. Others believe dietary decisions are strictly a matter of individual liberty.\n\nDiscuss both views and give your opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['public health intervention', 'fiscal deterrents', 'autonomy', 'lifestyle diseases', 'healthcare expenditure']
  },
  {
    id: 'task2-11',
    category: 'opinion',
    title: 'Universal Basic Income',
    question: 'Implementing an unconditional Universal Basic Income (UBI) for all adult citizens is the most effective way to eliminate poverty and income inequality in the 21st century.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['social safety net', 'disincentivize labor', 'wealth redistribution', 'economic sovereignty', 'inflationary pressure']
  },
  {
    id: 'task2-12',
    category: 'problem-solution',
    title: 'Microplastic Contamination in Marine Ecosystems',
    question: 'Marine scientists report alarming concentrations of microplastics in global oceans, entering food chains and endangering wildlife.\n\nIdentify the primary causes and suggest feasible remediation policies.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['single-use plastics', 'biodegradability', 'marine biosphere', 'extended producer responsibility']
  },
  {
    id: 'task2-13',
    category: 'discussion',
    title: 'International Aid vs Fair Trade',
    question: 'Some believe foreign financial aid is the best way to assist impoverished countries. Others argue that fostering fair international trade agreements is significantly more beneficial.\n\nDiscuss both views and give your opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['donor dependency', 'economic empowerment', 'tariff barriers', 'sustainable self-reliance', 'corruption']
  },
  {
    id: 'task2-14',
    category: 'opinion',
    title: 'Mandatory Retirement Ages',
    question: 'Older employees should be required by law to retire upon reaching age 65 to open up career progression for younger generations.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['statutory retirement', 'institutional knowledge', 'intergenerational equity', 'demographic aging']
  },
  {
    id: 'task2-15',
    category: 'advantages-disadvantages',
    title: 'International Mass Tourism',
    question: 'Tourism has become one of the fastest-growing global industries, bringing millions of international travelers to historical cities and natural reserves.\n\nDo the advantages of mass tourism surpass the negative impacts on host communities?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['foreign revenue', 'cultural exchange', 'overtourism', 'environmental degradation', 'gentrification']
  },
  {
    id: 'task2-16',
    category: 'opinion',
    title: 'Social Media Influence on Public Discourse',
    question: 'Social media platforms have done more to divide communities and spread misinformation than to bring people together.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['echo chambers', 'polarization', 'algorithmic curation', 'misinformation', 'civic cohesion']
  },
  {
    id: 'task2-17',
    category: 'discussion',
    title: 'Artificial Intelligence in Creative Arts & Literature',
    question: 'Some believe that AI systems creating music, paintings, and literature diminish human artistic expression. Others argue that AI is merely an innovative tool that broadens human creative potential.\n\nDiscuss both views and give your own opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['generative algorithms', 'human emotional depth', 'artistic authenticity', 'creative augmentation']
  },
  {
    id: 'task2-18',
    category: 'problem-solution',
    title: 'Fast Fashion & Textile Waste',
    question: 'The exponential rise of inexpensive fast fashion has resulted in colossal textile waste and industrial water pollution globally.\n\nWhat factors cause this phenomenon, and what effective measures can consumers and clothing brands undertake?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['disposable consumerism', 'synthetic microfibers', 'circular fashion', 'extended producer accountability']
  },
  {
    id: 'task2-19',
    category: 'advantages-disadvantages',
    title: 'Genetically Modified Organisms in Global Agriculture',
    question: 'Biotechnologists are developing genetically modified (GM) crops engineered for drought resistance and higher yields to feed expanding global populations.\n\nDo the advantages of cultivating GM crops outweigh the potential ecological and health hazards?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['food security', 'crop yield', 'biodiversity reduction', 'ecological disruption', 'monopolistic control']
  },
  {
    id: 'task2-20',
    category: 'opinion',
    title: 'Corporate vs Individual Environmental Responsibility',
    question: 'Multinational corporations are primarily responsible for global climate emissions; therefore, governmental regulations should target corporations rather than penalize ordinary individuals with personal carbon limits.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['industrial culpability', 'consumer demand', 'carbon taxation', 'systemic decarbonization', 'civic duty']
  },
  {
    id: 'task2-21',
    category: 'discussion',
    title: 'Standardized Examinations vs Continuous Coursework',
    question: 'Some educators argue that high-stakes standardized final exams are the fairest metric for student achievement. Others contend that continuous project-based coursework provides a far more accurate reflection of intellectual ability.\n\nDiscuss both views and give your opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['academic pedagogy', 'examination stress', 'holistic assessment', 'rote memorization', 'continuous evaluation']
  },
  {
    id: 'task2-22',
    category: 'problem-solution',
    title: 'Sedentary Lifestyles & Physical Inactivity in Modern Cities',
    question: 'A growing percentage of urban adults and children lead excessively sedentary lives, leading to a worldwide surge in cardiovascular disease and diabetes.\n\nExamine the root causes of this crisis and suggest comprehensive solutions for local governments and urban planners.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['desk-bound routines', 'active transit', 'urban green spaces', 'preventative medicine', 'habit formation']
  },
  {
    id: 'task2-23',
    category: 'advantages-disadvantages',
    title: 'Autonomous Self-Driving Vehicles in Public Transport',
    question: 'Several major cities are piloting fully autonomous self-driving buses and taxis to replace human-operated transport fleets.\n\nDo the advantages of autonomous public transport outweigh the potential safety and socioeconomic risks?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['vehicular autonomy', 'algorithmic navigation', 'traffic flow efficiency', 'driver displacement', 'safety liability']
  },
  {
    id: 'task2-24',
    category: 'opinion',
    title: 'Preservation of Endangered Indigenous Languages',
    question: 'Governments should invest substantial financial resources into documenting and revitalizing endangered indigenous languages before they become extinct.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['linguistic diversity', 'cultural repository', 'endangered dialects', 'indigenous worldview', 'fiscal allocation']
  },
  {
    id: 'task2-25',
    category: 'discussion',
    title: 'Funding for Elite Olympic Athletics vs Community Sports',
    question: 'Some believe governments should direct sports funding toward training elite athletes to win medals at international competitions. Others argue funding should be reserved for public grassroots sports facilities accessible to all citizens.\n\nDiscuss both views and give your opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['national prestige', 'grassroots participation', 'public health infrastructure', 'athletic excellence', 'recreational equity']
  },
  {
    id: 'task2-26',
    category: 'opinion',
    title: 'Ecotourism in Pristine Fragile Ecosystems',
    question: 'Ecotourism to fragile natural habitats—such as Antarctica and the Amazon rainforest—inevitably harms the very ecosystems it claims to preserve, and should therefore be completely banned.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['ecotourism', 'fragile biosphere', 'carbon footprint', 'conservation funding', 'anthropogenic disruption']
  },
  {
    id: 'task2-27',
    category: 'discussion',
    title: 'Government Surveillance vs Civil Digital Privacy',
    question: 'Some believe governments should have unrestricted authority to monitor electronic communications to prevent criminal and terrorist activity. Others argue that digital privacy is a fundamental civil liberty that state agencies must never infringe upon.\n\nDiscuss both views and give your opinion.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['mass surveillance', 'civil liberties', 'national security', 'digital encryption', 'draconian oversight']
  },
  {
    id: 'task2-28',
    category: 'problem-solution',
    title: 'Metropolitan Urban Sprawl & Food Security',
    question: 'Unchecked horizontal urban sprawl is consuming thousands of hectares of prime agricultural land around major global metropolises each year, threatening national food security.\n\nAnalyze the root causes of this phenomenon and recommend forward-thinking urban planning interventions.',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['horizontal urban sprawl', 'agricultural encroachment', 'vertical densification', 'green belts', 'sustainable zoning']
  },
  {
    id: 'task2-29',
    category: 'advantages-disadvantages',
    title: 'Unified National Electronic Medical Records',
    question: 'Healthcare authorities in several nations are consolidating all citizen medical histories into centralized digital databases accessible by all clinics and emergency responders.\n\nDo the clinical advantages of centralized electronic health records outweigh potential data breach vulnerabilities?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['centralized biometric records', 'clinical efficacy', 'interoperability', 'data security breaches', 'patient autonomy']
  },
  {
    id: 'task2-30',
    category: 'opinion',
    title: 'Mandatory Civic Community Service for Secondary Graduates',
    question: 'All young adults finishing secondary school should be required to complete one year of unpaid community service or public infrastructure work before entering university or the workforce.\n\nTo what extent do you agree or disagree?',
    instructions: OFFICIAL_TASK2_INSTRUCTIONS,
    sampleKeywords: ['civic duty', 'social solidarity', 'coercive labor', 'character building', 'delayed career entry']
  }
];
