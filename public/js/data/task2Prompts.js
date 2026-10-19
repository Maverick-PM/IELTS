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
  }
];
