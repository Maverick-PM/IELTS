// IELTS Academic Listening Tests Bank
// Contains 4-part listening scripts, 40 questions, answer keys, and Band conversion table

export const LISTENING_BAND_TABLE = [
  { min: 39, max: 40, band: 9.0 },
  { min: 37, max: 38, band: 8.5 },
  { min: 35, max: 36, band: 8.0 },
  { min: 32, max: 34, band: 7.5 },
  { min: 30, max: 31, band: 7.0 },
  { min: 26, max: 29, band: 6.5 },
  { min: 23, max: 25, band: 6.0 },
  { min: 18, max: 22, band: 5.5 },
  { min: 16, max: 17, band: 5.0 },
  { min: 13, max: 15, band: 4.5 },
  { min: 10, max: 12, band: 4.0 },
  { min: 0,  max: 9,  band: 3.5 }
];

export function rawToListeningBand(rawScore) {
  const score = Math.max(0, Math.min(40, Math.round(rawScore)));
  for (const row of LISTENING_BAND_TABLE) {
    if (score >= row.min && score <= row.max) {
      return row.band;
    }
  }
  return 3.0;
}

export const ACADEMIC_LISTENING_TESTS = [
  {
    id: 'listening-test-1',
    title: 'Academic Practice Listening Test 1',
    durationMinutes: 30,
    totalQuestions: 40,
    sections: [
      {
        id: 'section-1',
        sectionNumber: 1,
        title: 'Section 1: University Accommodation Registration',
        scenario: 'A student (Sarah) is registering for postgraduate university accommodation with an admissions officer (Mr. Davies).',
        dialogue: [
          { speaker: 'Mr. Davies', text: 'Good morning, University Housing Office. How can I help you today?' },
          { speaker: 'Sarah', text: 'Hello! I am arriving next month to begin my Master of Science in Environmental Engineering, and I need to finalize my campus accommodation application.' },
          { speaker: 'Mr. Davies', text: 'Certainly. May I take your full name and student identification code first?' },
          { speaker: 'Sarah', text: 'Yes, my name is Sarah Jenkins, and my ID number is EJ84920.' },
          { speaker: 'Mr. Davies', text: 'Thank you Sarah. And what is your preferred contact phone number?' },
          { speaker: 'Sarah', text: 'It is 07834 912650.' },
          { speaker: 'Mr. Davies', text: 'Great. Now regarding hall preference, we have self-catered studio apartments at Westgate Hall and shared en-suite flats at Oakridge Court.' },
          { speaker: 'Sarah', text: 'I definitely prefer self-catered accommodation with a private kitchen because of dietary requirements. What is the weekly rental rate for Westgate Hall?' },
          { speaker: 'Mr. Davies', text: 'Westgate Hall studios are 185 pounds per week, which includes high-speed fiber internet and utility bills.' },
          { speaker: 'Sarah', text: 'That fits my budget well. What date is the move-in check-in opened?' },
          { speaker: 'Mr. Davies', text: 'Official orientation arrivals begin on September 18th. You will need to bring your passport and student confirmation letter.' },
          { speaker: 'Sarah', text: 'Understood. Is there parking available for bicycles?' },
          { speaker: 'Mr. Davies', text: 'Yes, each hall has secure covered bicycle sheds accessible with your student key fob.' }
        ],
        questions: [
          {
            id: 'lq1',
            number: 1,
            type: 'fill-blank',
            prompt: 'Student Name: Sarah [BLANK]',
            answer: 'Jenkins',
            explanation: 'Sarah states her full name is Sarah Jenkins.'
          },
          {
            id: 'lq2',
            number: 2,
            type: 'fill-blank',
            prompt: 'Student ID Number: [BLANK]',
            answer: 'EJ84920',
            acceptableAnswers: ['EJ84920', 'EJ 84920'],
            explanation: 'Sarah gives her ID number as EJ84920.'
          },
          {
            id: 'lq3',
            number: 3,
            type: 'fill-blank',
            prompt: 'Course of study: Master of Science in [BLANK] Engineering.',
            answer: 'Environmental',
            explanation: 'Sarah mentions her degree is in Environmental Engineering.'
          },
          {
            id: 'lq4',
            number: 4,
            type: 'fill-blank',
            prompt: 'Preferred hall of residence: [BLANK] Hall.',
            answer: 'Westgate',
            explanation: 'Mr. Davies mentions Westgate Hall, which Sarah confirms.'
          },
          {
            id: 'lq5',
            number: 5,
            type: 'fill-blank',
            prompt: 'Weekly rental price: £[BLANK].',
            answer: '185',
            acceptableAnswers: ['185', '£185', '185 pounds'],
            explanation: 'The weekly rent is stated as 185 pounds.'
          },
          {
            id: 'lq6',
            number: 6,
            type: 'fill-blank',
            prompt: 'Earliest move-in date: September [BLANK].',
            answer: '18th',
            acceptableAnswers: ['18', '18th', 'September 18', 'September 18th'],
            explanation: 'Arrivals begin on September 18th.'
          },
          {
            id: 'lq7',
            number: 7,
            type: 'fill-blank',
            prompt: 'Identification required at check-in: Passport and student confirmation [BLANK].',
            answer: 'letter',
            explanation: 'Officer states: passport and student confirmation letter.'
          },
          {
            id: 'lq8',
            number: 8,
            type: 'multiple-choice',
            prompt: 'Why does Sarah prefer a self-catered studio flat?',
            options: [
              'A. She has specific dietary requirements',
              'B. It is closer to the engineering laboratories',
              'C. It includes free automotive parking',
              'D. She shares it with her sibling'
            ],
            answer: 'A',
            explanation: 'Sarah explains she prefers private cooking due to dietary requirements.'
          },
          {
            id: 'lq9',
            number: 9,
            type: 'multiple-choice',
            prompt: 'How do residents access the secure bicycle storage sheds?',
            options: [
              'A. Digital passcode lock',
              'B. Student key fob',
              'C. Security guard signature',
              'D. Mobile app QR scan'
            ],
            answer: 'B',
            explanation: 'Mr. Davies states sheds are accessible with student key fob.'
          },
          {
            id: 'lq10',
            number: 10,
            type: 'multiple-choice',
            prompt: 'What utilities are included in the weekly rental fee?',
            options: [
              'A. Electricity only',
              'B. High-speed fiber internet and utility bills',
              'C. Laundry services and gym membership',
              'D. Daily cafeteria breakfast'
            ],
            answer: 'B',
            explanation: 'Rent includes high-speed fiber internet and utility bills.'
          }
        ]
      },
      {
        id: 'section-2',
        sectionNumber: 2,
        title: 'Section 2: City Heritage Museum & Botanic Pavilion',
        scenario: 'A guide is introducing a tour group to the newly restored Victorian Botanic Pavilion.',
        dialogue: [
          { speaker: 'Guide', text: 'Welcome everyone to the City Heritage Botanic Pavilion. Originally erected in 1888 during Queen Victoria\'s golden jubilee, this structure is a prime example of cast-iron curvilinear architecture.' },
          { speaker: 'Guide', text: 'Before we commence our guided walk, please note our safety protocols. Smoking and flash photography are strictly prohibited inside the tropical glasshouse.' },
          { speaker: 'Guide', text: 'Looking at your map, the North Conservatory directly ahead houses our endangered Mediterranean collection. Turning immediately right leads to the Orchid Sanctuary, which boasts over 400 exotic cultivars.' },
          { speaker: 'Guide', text: 'The central rotunda has recently been fitted with a geothermal heat pump, lowering our carbon footprint by 60 percent. For refreshments, the Heritage Tea Room operates on the south terrace between 10 AM and 4:30 PM.' }
        ],
        questions: [
          {
            id: 'lq11',
            number: 11,
            type: 'fill-blank',
            prompt: 'The Botanic Pavilion was originally constructed in the year [BLANK].',
            answer: '1888',
            explanation: 'Guide states it was erected in 1888 during the golden jubilee.'
          },
          {
            id: 'lq12',
            number: 12,
            type: 'fill-blank',
            prompt: 'The structural framework is built using cast-[BLANK] architecture.',
            answer: 'iron',
            acceptableAnswers: ['iron', 'cast iron', 'cast-iron'],
            explanation: 'Guide refers to cast-iron curvilinear architecture.'
          },
          {
            id: 'lq13',
            number: 13,
            type: 'fill-blank',
            prompt: 'The North Conservatory displays plants from the [BLANK] region.',
            answer: 'Mediterranean',
            explanation: 'Guide states North Conservatory houses the Mediterranean collection.'
          },
          {
            id: 'lq14',
            number: 14,
            type: 'fill-blank',
            prompt: 'The Orchid Sanctuary contains more than [BLANK] exotic cultivars.',
            answer: '400',
            acceptableAnswers: ['400', 'four hundred'],
            explanation: 'Guide states over 400 exotic cultivars.'
          },
          {
            id: 'lq15',
            number: 15,
            type: 'fill-blank',
            prompt: 'Heating in the central rotunda is powered by a [BLANK] heat pump.',
            answer: 'geothermal',
            explanation: 'Guide mentions a geothermal heat pump.'
          },
          {
            id: 'lq16',
            number: 16,
            type: 'fill-blank',
            prompt: 'The new heating system reduced carbon emissions by [BLANK] percent.',
            answer: '60',
            acceptableAnswers: ['60', '60%', 'sixty'],
            explanation: 'Guide specifies lowering carbon footprint by 60 percent.'
          },
          {
            id: 'lq17',
            number: 17,
            type: 'fill-blank',
            prompt: 'The Heritage Tea Room closes at [BLANK] in the afternoon.',
            answer: '4:30 PM',
            acceptableAnswers: ['4:30', '4:30 PM', '4.30 pm', '4:30pm'],
            explanation: 'Tea room operates between 10 AM and 4:30 PM.'
          },
          {
            id: 'lq18',
            number: 18,
            type: 'multiple-choice',
            prompt: 'Which visitor activity is explicitly banned inside the glasshouse?',
            options: [
              'A. Note taking with pen and paper',
              'B. Flash photography',
              'C. Drinking bottled water',
              'D. Wearing soft-soled shoes'
            ],
            answer: 'B',
            explanation: 'Guide specifies flash photography is strictly prohibited.'
          },
          {
            id: 'lq19',
            number: 19,
            type: 'multiple-choice',
            prompt: 'Where is the Orchid Sanctuary situated on the visitor map?',
            options: [
              'A. Directly to the right of the entrance',
              'B. Underneath the central basement',
              'C. On the exterior south terrace',
              'D. Beyond the gift shop exit'
            ],
            answer: 'A',
            explanation: 'Guide states: "Turning immediately right leads to the Orchid Sanctuary."'
          },
          {
            id: 'lq20',
            number: 20,
            type: 'multiple-choice',
            prompt: 'What historical occasion coincided with the opening of the pavilion?',
            options: [
              'A. The end of the Industrial Revolution',
              'B. Queen Victoria\'s golden jubilee',
              'C. The founding of the Royal Botanical Society',
              'D. The Great Exhibition of London'
            ],
            answer: 'B',
            explanation: 'Guide notes it was built during Queen Victoria\'s golden jubilee.'
          }
        ]
      },
      {
        id: 'section-3',
        sectionNumber: 3,
        title: 'Section 3: Academic Research Methodology Seminar',
        scenario: 'Two university students, Liam and Chloe, consult their academic supervisor, Dr. Vance, regarding their research methodology.',
        dialogue: [
          { speaker: 'Dr. Vance', text: 'Good afternoon Liam, Chloe. I have reviewed the first draft of your research proposal on renewable energy adoption among rural farming communities.' },
          { speaker: 'Chloe', text: 'Thank you Dr. Vance. We were particularly concerned about our sampling methodology. We initially planned to distribute 500 online questionnaires.' },
          { speaker: 'Dr. Vance', text: 'Online questionnaires carry severe self-selection bias in rural demographics where broadband penetration varies widely. I strongly advise adopting stratified random sampling.' },
          { speaker: 'Liam', text: 'That makes sense. We could stratify by farm size—smallholder farms under 50 hectares versus large commercial agri-businesses.' },
          { speaker: 'Dr. Vance', text: 'Precisely. In addition, supplement the survey data with semi-structured interviews. Ten in-depth interviews will provide qualitative richness regarding financial barriers that quantitative charts cannot convey.' },
          { speaker: 'Chloe', text: 'What about data privacy? Since farmers will disclose revenue figures, we must ensure full GDPR compliance and anonymize all participant identities.' },
          { speaker: 'Dr. Vance', text: 'Ensure you submit your formal ethics approval form to the university review board by November 15th at the latest.' }
        ],
        questions: [
          {
            id: 'lq21',
            number: 21,
            type: 'fill-blank',
            prompt: 'Research topic: Renewable energy adoption among [BLANK] farming communities.',
            answer: 'rural',
            explanation: 'Dr. Vance mentions rural farming communities.'
          },
          {
            id: 'lq22',
            number: 22,
            type: 'fill-blank',
            prompt: 'Original proposal involved distributing [BLANK] online questionnaires.',
            answer: '500',
            acceptableAnswers: ['500', 'five hundred'],
            explanation: 'Chloe states they planned 500 online questionnaires.'
          },
          {
            id: 'lq23',
            number: 23,
            type: 'fill-blank',
            prompt: 'Dr. Vance recommends using [BLANK] random sampling instead.',
            answer: 'stratified',
            explanation: 'Dr. Vance advises adopting stratified random sampling.'
          },
          {
            id: 'lq24',
            number: 24,
            type: 'fill-blank',
            prompt: 'The students propose stratifying sample groups by farm [BLANK].',
            answer: 'size',
            explanation: 'Liam suggests stratifying by farm size.'
          },
          {
            id: 'lq25',
            number: 25,
            type: 'fill-blank',
            prompt: 'Smallholder farms are defined as those measuring under [BLANK] hectares.',
            answer: '50',
            acceptableAnswers: ['50', 'fifty'],
            explanation: 'Liam specifies smallholder farms under 50 hectares.'
          },
          {
            id: 'lq26',
            number: 26,
            type: 'fill-blank',
            prompt: 'Number of in-depth qualitative interviews recommended: [BLANK].',
            answer: '10',
            acceptableAnswers: ['10', 'ten'],
            explanation: 'Dr. Vance suggests ten in-depth interviews.'
          },
          {
            id: 'lq27',
            number: 27,
            type: 'fill-blank',
            prompt: 'Ethics application deadline is November [BLANK].',
            answer: '15th',
            acceptableAnswers: ['15', '15th', 'November 15'],
            explanation: 'Dr. Vance states deadline is November 15th.'
          },
          {
            id: 'lq28',
            number: 28,
            type: 'multiple-choice',
            prompt: 'Why did Dr. Vance object to purely online questionnaires?',
            options: [
              'A. They are too expensive to administer',
              'B. Uneven broadband access causes self-selection bias',
              'C. Software cannot export statistical graphs',
              'D. The university firewalls block external respondents'
            ],
            answer: 'B',
            explanation: 'Dr. Vance explains online surveys carry self-selection bias due to varied broadband penetration.'
          },
          {
            id: 'lq29',
            number: 29,
            type: 'multiple-choice',
            prompt: 'What primary advantage will semi-structured interviews provide?',
            options: [
              'A. Automated statistical correlation',
              'B. Qualitative depth on financial obstacles',
              'C. Elimination of ethics review requirements',
              'D. Guarantee of government research grants'
            ],
            answer: 'B',
            explanation: 'Dr. Vance notes interviews provide qualitative richness regarding financial barriers.'
          },
          {
            id: 'lq30',
            number: 30,
            type: 'multiple-choice',
            prompt: 'How will the students protect farmer revenue confidentiality?',
            options: [
              'A. Storing data on private encrypted USB drives only',
              'B. Full GDPR compliance and anonymization of participant identities',
              'C. Requiring farmers to sign non-disclosure agreements',
              'D. Omitting all financial metrics from the final report'
            ],
            answer: 'B',
            explanation: 'Chloe highlights ensuring GDPR compliance and anonymizing participant identities.'
          }
        ]
      },
      {
        id: 'section-4',
        sectionNumber: 4,
        title: 'Section 4: Academic Lecture on Marine Bioluminescence',
        scenario: 'A marine biology professor delivers a lecture on oceanic bioluminescence mechanisms and ecological functions.',
        dialogue: [
          { speaker: 'Professor', text: 'Good morning students. Today we examine the biochemistry and adaptive evolutionary functions of marine bioluminescence. Over 75 percent of deep-sea organisms possess the capacity to generate cold biological light.' },
          { speaker: 'Professor', text: 'At the biochemical level, this chemiluminescence requires two essential reagents: a substrate molecule called luciferin, and an enzyme known as luciferase. When luciferase catalyzes the oxidation of luciferin in the presence of adenosine triphosphate (ATP) and dissolved oxygen, light is emitted with extraordinary thermodynamic efficiency—over 95 percent of the energy is converted directly into light, with negligible thermal dissipation.' },
          { speaker: 'Professor', text: 'Ecologically, bioluminescence serves three distinct evolutionary imperatives. The first is counterillumination camouflage. Mesopelagic squids and fish emit ventral photophore light matching the downwelling sunlight intensity, effectively erasing their downward silhouette from upward-looking apex predators.' },
          { speaker: 'Professor', text: 'The second function is predatory enticement, exemplified by the anglerfish\'s glowing esca lure. Finally, the burglar alarm hypothesis explains why dinoflagellates flash when mechanically disturbed by copepod grazers—the sudden flash illuminates the grazer, exposing it to secondary higher-trophic carnivores.' }
        ],
        questions: [
          {
            id: 'lq31',
            number: 31,
            type: 'fill-blank',
            prompt: 'Percentage of deep-sea organisms exhibiting bioluminescence: over [BLANK] percent.',
            answer: '75',
            acceptableAnswers: ['75', '75%', 'seventy-five'],
            explanation: 'Professor states over 75 percent of deep-sea organisms generate biological light.'
          },
          {
            id: 'lq32',
            number: 32,
            type: 'fill-blank',
            prompt: 'The substrate molecule required for biological light generation is called [BLANK].',
            answer: 'luciferin',
            explanation: 'Substrate molecule is named luciferin.'
          },
          {
            id: 'lq33',
            number: 33,
            type: 'fill-blank',
            prompt: 'The enzymatic catalyst responsible for oxidation is [BLANK].',
            answer: 'luciferase',
            explanation: 'Enzyme is identified as luciferase.'
          },
          {
            id: 'lq34',
            number: 34,
            type: 'fill-blank',
            prompt: 'Energy conversion efficiency into light surpasses [BLANK] percent.',
            answer: '95',
            acceptableAnswers: ['95', '95%', 'ninety-five'],
            explanation: 'Professor explains over 95 percent of energy is converted into light.'
          },
          {
            id: 'lq35',
            number: 35,
            type: 'fill-blank',
            prompt: 'The camouflage technique matching downwelling light is termed [BLANK].',
            answer: 'counterillumination',
            acceptableAnswers: ['counterillumination', 'counter-illumination'],
            explanation: 'Camouflage strategy is named counterillumination.'
          },
          {
            id: 'lq36',
            number: 36,
            type: 'fill-blank',
            prompt: 'Light-emitting organs situated on ventral surfaces are called [BLANK].',
            answer: 'photophores',
            acceptableAnswers: ['photophore', 'photophores'],
            explanation: 'Professor references ventral photophore light.'
          },
          {
            id: 'lq37',
            number: 37,
            type: 'fill-blank',
            prompt: 'The glowing lure on the head of an anglerfish is known as the [BLANK].',
            answer: 'esca',
            explanation: 'The glowing lure is called the esca.'
          },
          {
            id: 'lq38',
            number: 38,
            type: 'multiple-choice',
            prompt: 'Why is bioluminescent light described as "cold light"?',
            options: [
              'A. It only generates in freezing polar waters',
              'B. Over 95% of energy becomes light with virtually no thermal waste',
              'C. It requires liquid nitrogen inside the photophore cells',
              'D. It cools down surrounding seawater by several degrees'
            ],
            answer: 'B',
            explanation: 'Professor notes negligible thermal dissipation with 95% efficiency.'
          },
          {
            id: 'lq39',
            number: 39,
            type: 'multiple-choice',
            prompt: 'What is the primary mechanism of the "burglar alarm hypothesis"?',
            options: [
              'A. Emitting ultrasonic shrieks to deafen approaching predators',
              'B. Illuminating small grazers so larger predators notice and consume them',
              'C. Blinding apex predators with flashes that cause permanent optic damage',
              'D. Generating electrical shocks to paralyze nearby copepods'
            ],
            answer: 'B',
            explanation: 'The flash exposes the grazer to secondary higher-trophic predators.'
          },
          {
            id: 'lq40',
            number: 40,
            type: 'multiple-choice',
            prompt: 'Which single-celled organisms produce glowing blooms when mechanically agitated?',
            options: [
              'A. Dinoflagellates',
              'B. Mesopelagic squids',
              'C. Copepod crustacea',
              'D. Anglerfish juveniles'
            ],
            answer: 'A',
            explanation: 'Professor describes dinoflagellates flashing when mechanically disturbed by copepods.'
          }
        ]
      }
    ]
  }
];
