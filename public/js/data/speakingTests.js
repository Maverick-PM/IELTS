// IELTS Academic Speaking Tests Bank
// Contains 3-part test prompts, cue cards, Band 9 model responses, and scoring rubrics

export const SPEAKING_TOPICS = [
  {
    id: 'speaking-topic-1',
    title: 'Technology, Innovation & Modern Society',
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
          id: 'sp3-q1',
          question: 'How do you foresee artificial intelligence altering the employment landscape over the next two decades?',
          modelAnswer: 'I believe artificial intelligence will precipitate a fundamental structural bifurcation in the labor market. On one hand, routine clerical, analytical, and repetitive cognitive tasks will inevitably be automated at scale. On the other hand, this disruption will create unprecedented demand for individuals possessing high-level creative synthesis, emotional intelligence, and cross-disciplinary adaptability. The crux of the challenge lies in how effectively societies can establish continuous adult reskilling pipelines to avert catastrophic technological redundancy.',
          band9KeyWords: ['precipitate a fundamental structural bifurcation', 'automated at scale', 'unprecedented demand', 'creative synthesis', 'crux of the challenge', 'technological redundancy']
        },
        {
          id: 'sp3-q2',
          question: 'Should governments regulate rapid technological disruption, or should markets be left alone to innovate?',
          modelAnswer: 'In my perspective, unbridled market forces alone are ill-equipped to safeguard public welfare in the face of exponential technologies. While excessive bureaucratic red tape can undoubtedly stifle entrepreneurial dynamism, proactive regulatory guardrails are indispensable in domain areas such as data privacy, algorithmic bias, and ethical bio-engineering. The optimal approach is a balanced, agile governance model where regulatory frameworks evolve iteratively in consultation with technical experts.',
          band9KeyWords: ['unbridled market forces', 'ill-equipped', 'safeguard public welfare', 'bureaucratic red tape', 'stifle entrepreneurial dynamism', 'proactive regulatory guardrails', 'agile governance']
        },
        {
          id: 'sp3-q3',
          question: 'Why do some individuals resist technological advancements while others embrace them enthusiastically?',
          modelAnswer: 'Resistance to technological innovation is frequently anchored in psychological apprehension and economic vulnerability. When people perceive that a novel technology poses an existential threat to their livelihood or disrupts familiar socio-cultural norms, reluctance is a very natural defense mechanism. Conversely, those who embrace innovation typically possess digital literacy, financial security, and the institutional support necessary to exploit new tools to their strategic advantage.',
          band9KeyWords: ['anchored in psychological apprehension', 'economic vulnerability', 'existential threat', 'reluctance is a natural defense mechanism', 'digital literacy', 'strategic advantage']
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
