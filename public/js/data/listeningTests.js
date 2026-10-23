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

export function rawToListeningBand(rawScore, totalQuestions = 40) {
  const scaled = totalQuestions > 0 && totalQuestions !== 40 ? Math.round((rawScore / totalQuestions) * 40) : rawScore;
  const score = Math.max(0, Math.min(40, Math.round(scaled)));
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
    totalQuestions: 100,
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
          { speaker: 'Mr. Davies', text: 'Yes, each hall has secure covered bicycle sheds accessible with your student key fob.' },
          { speaker: 'Sarah', text: 'Is there a refundable security deposit required when signing the contract?' },
          { speaker: 'Mr. Davies', text: 'Yes, a standard damage deposit of 250 pounds is held in a protected tenancy scheme.' },
          { speaker: 'Sarah', text: 'Where are the communal laundry machines located?' },
          { speaker: 'Mr. Davies', text: 'The laundry room is situated in the basement of Block B, accessible 24 hours via your electronic key fob.' },
          { speaker: 'Sarah', text: 'How do residents pay for the washing cycles?' },
          { speaker: 'Mr. Davies', text: 'It operates via a smartphone mobile application called CircuitLaundry, so no coins are needed.' },
          { speaker: 'Sarah', text: 'What about parcel deliveries and postal mail?' },
          { speaker: 'Mr. Davies', text: 'Small letters go into your private ground-floor mailbox. Larger parcels are kept at the reception desk, open until 7:00 PM.' },
          { speaker: 'Sarah', text: 'Are there designated quiet hours for studying in the residence?' },
          { speaker: 'Mr. Davies', text: 'Official quiet hours commence at 10:00 PM every evening and run through until 7:30 AM.' },
          { speaker: 'Sarah', text: 'Where is the nearest major grocery store?' },
          { speaker: 'Mr. Davies', text: 'There is a large Sainsbury superstore approximately seven minutes walk down Church Road.' },
          { speaker: 'Sarah', text: 'Which bus route goes directly to the engineering campus?' },
          { speaker: 'Mr. Davies', text: 'The Number 14 express bus departs from the front gate every ten minutes.' },
          { speaker: 'Sarah', text: 'Do students receive a discount on transit passes?' },
          { speaker: 'Mr. Davies', text: 'Yes, showing your student card grants a 20 percent discount on termly bus passes.' },
          { speaker: 'Sarah', text: 'Can I bring a car onto campus?' },
          { speaker: 'Mr. Davies', text: 'Resident parking permits are strictly limited and cost 85 pounds per term.' },
          { speaker: 'Sarah', text: 'Who is the resident tutor or hall warden?' },
          { speaker: 'Mr. Davies', text: 'The head residential warden is Dr. Henderson, based in Room 102.' }
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
          },
          {
            id: 'lq11',
            number: 11,
            type: 'fill-blank',
            prompt: 'Refundable security deposit amount: £[BLANK]',
            answer: '250',
            explanation: 'Mr. Davies confirms deposit is 250 pounds.'
          },
          {
            id: 'lq12',
            number: 12,
            type: 'fill-blank',
            prompt: 'Laundry machines are situated in the [BLANK] of Block B',
            answer: 'basement',
            explanation: 'Mr. Davies indicates the basement.'
          },
          {
            id: 'lq13',
            number: 13,
            type: 'fill-blank',
            prompt: 'Laundry payment operates through a mobile [BLANK]',
            answer: 'app',
            explanation: 'Payment operates through a smartphone application.'
          },
          {
            id: 'lq14',
            number: 14,
            type: 'fill-blank',
            prompt: 'Parcel reception collection desk closes at [BLANK] PM',
            answer: '7:00',
            explanation: 'Desk is open until 7:00 PM.'
          },
          {
            id: 'lq15',
            number: 15,
            type: 'fill-blank',
            prompt: 'Evening quiet hours commence at [BLANK] PM',
            answer: '10:00',
            explanation: 'Quiet hours begin at 10:00 PM.'
          },
          {
            id: 'lq16',
            number: 16,
            type: 'fill-blank',
            prompt: 'Nearest supermarket: [BLANK] superstore on Church Road',
            answer: 'Sainsbury',
            explanation: 'Large Sainsbury superstore is 7 minutes away.'
          },
          {
            id: 'lq17',
            number: 17,
            type: 'fill-blank',
            prompt: 'Direct bus to engineering campus is Number [BLANK]',
            answer: '14',
            explanation: 'The Number 14 express bus departs every 10 minutes.'
          },
          {
            id: 'lq18',
            number: 18,
            type: 'fill-blank',
            prompt: 'Student transit pass discount: [BLANK] percent',
            answer: '20',
            explanation: 'Students receive 20 percent discount.'
          },
          {
            id: 'lq19',
            number: 19,
            type: 'fill-blank',
            prompt: 'Termly vehicle parking permit costs £[BLANK]',
            answer: '85',
            explanation: 'Resident parking permits cost 85 pounds.'
          },
          {
            id: 'lq20',
            number: 20,
            type: 'fill-blank',
            prompt: 'Head residential warden is Dr. [BLANK]',
            answer: 'Henderson',
            explanation: 'Warden is Dr. Henderson in Room 102.'
          },
          {
            id: 'lq21',
            number: 21,
            type: 'multiple-choice',
            prompt: 'What appliances are strictly prohibited inside student bedrooms for fire safety?',
            options: [
              'A. Laptops and chargers',
              'B. Portable electric bar heaters',
              'C. Desk study lamps',
              'D. Electric hair dryers'
            ],
            answer: 'B',
            explanation: 'Portable bar heaters are banned.'
          },
          {
            id: 'lq22',
            number: 22,
            type: 'multiple-choice',
            prompt: 'How often are communal kitchens and hallways cleaned by housekeeping staff?',
            options: [
              'A. Once every month',
              'B. Twice weekly',
              'C. Only on weekends',
              'D. Daily at dawn'
            ],
            answer: 'B',
            explanation: 'Cleaning occurs twice weekly.'
          },
          {
            id: 'lq23',
            number: 23,
            type: 'multiple-choice',
            prompt: 'By what time must maintenance requests be logged online for same-day service?',
            options: [
              'A. Before 9:00 AM',
              'B. Before 11:00 AM',
              'C. Before 2:00 PM',
              'D. Before 5:00 PM'
            ],
            answer: 'B',
            explanation: 'Requests must be logged before 11:00 AM.'
          },
          {
            id: 'lq24',
            number: 24,
            type: 'multiple-choice',
            prompt: 'What newly renovated indoor recreational space is open to all Westgate residents?',
            options: [
              'A. Table tennis and games lounge',
              'B. Olympic swimming pool',
              'C. Music recording studio',
              'D. Squash court'
            ],
            answer: 'A',
            explanation: 'Table tennis and games lounge.'
          },
          {
            id: 'lq25',
            number: 25,
            type: 'multiple-choice',
            prompt: 'Where should replacement requests for lost digital keycards be filed after hours?',
            options: [
              'A. Local police station',
              'B. Main campus Central Security Lodge',
              'C. University library desk',
              'D. Post office'
            ],
            answer: 'B',
            explanation: 'Central Security Lodge handles after-hours access.'
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
          { speaker: 'Guide', text: 'The central rotunda has recently been fitted with a geothermal heat pump, lowering our carbon footprint by 60 percent. For refreshments, the Heritage Tea Room operates on the south terrace between 10 AM and 4:30 PM.' },
          { speaker: 'Guide', text: 'Next month, we are unveiling a new interactive sensory garden specifically designed for visually impaired visitors.' },
          { speaker: 'Guide', text: 'This sensory zone features raised tactile cedar planters filled with highly aromatic herbs such as lavender, rosemary, and bergamot.' },
          { speaker: 'Guide', text: 'Audio descriptive headsets are available free of charge at the information kiosk upon depositing an official photo ID.' },
          { speaker: 'Guide', text: 'Our annual seasonal orchid exhibition runs throughout the entire month of November.' },
          { speaker: 'Guide', text: 'Admission for standard adult day passes is 12 pounds, while family passes admitting two adults and up to three children are priced at 28 pounds.' },
          { speaker: 'Guide', text: 'Please be advised that the glasshouse elevator undergoes routine safety servicing every Monday morning until 11:30 AM.' },
          { speaker: 'Guide', text: 'Finally, visitors wishing to adopt a rare specimen plant through our conservation endowment can speak directly with botanical curator Eleanor Vance.' }
        ],
                questions: [
          {
            id: 'lq26',
            number: 26,
            type: 'fill-blank',
            prompt: 'The Botanic Pavilion was erected in the year [BLANK].',
            answer: '1888',
            explanation: 'Guide states structure was erected in 1888.'
          },
          {
            id: 'lq27',
            number: 27,
            type: 'fill-blank',
            prompt: 'The structural framework is built using cast-[BLANK] architecture.',
            answer: 'iron',
            acceptableAnswers: ['iron', 'cast iron', 'cast-iron'],
            explanation: 'Guide refers to cast-iron curvilinear architecture.'
          },
          {
            id: 'lq28',
            number: 28,
            type: 'fill-blank',
            prompt: 'The North Conservatory displays plants from the [BLANK] region.',
            answer: 'Mediterranean',
            explanation: 'Guide states North Conservatory houses the Mediterranean collection.'
          },
          {
            id: 'lq29',
            number: 29,
            type: 'fill-blank',
            prompt: 'The Orchid Sanctuary contains more than [BLANK] exotic cultivars.',
            answer: '400',
            acceptableAnswers: ['400', 'four hundred'],
            explanation: 'Guide states over 400 exotic cultivars.'
          },
          {
            id: 'lq30',
            number: 30,
            type: 'fill-blank',
            prompt: 'Heating in the central rotunda is powered by a [BLANK] heat pump.',
            answer: 'geothermal',
            explanation: 'Guide mentions a geothermal heat pump.'
          },
          {
            id: 'lq31',
            number: 31,
            type: 'fill-blank',
            prompt: 'The new heating system reduced carbon emissions by [BLANK] percent.',
            answer: '60',
            acceptableAnswers: ['60', '60%', 'sixty'],
            explanation: 'Guide specifies lowering carbon footprint by 60 percent.'
          },
          {
            id: 'lq32',
            number: 32,
            type: 'fill-blank',
            prompt: 'The Heritage Tea Room closes at [BLANK] in the afternoon.',
            answer: '4:30 PM',
            acceptableAnswers: ['4:30', '4:30 PM', '4.30 pm', '4:30pm'],
            explanation: 'Tea room operates between 10 AM and 4:30 PM.'
          },
          {
            id: 'lq33',
            number: 33,
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
            id: 'lq34',
            number: 34,
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
            id: 'lq35',
            number: 35,
            type: 'multiple-choice',
            prompt: 'What was the historical catalyst for building the pavilion in 1888?',
            options: [
              'A. Queen Victoria\'s Golden Jubilee',
              'B. The International Horticultural Exhibition',
              'C. A private bequest from a wealthy industrialist',
              'D. The botanical society centenary celebration'
            ],
            answer: 'A',
            explanation: 'Guide specifies it was erected during Queen Victoria\'s golden jubilee.'
          },
          {
            id: 'lq36',
            number: 36,
            type: 'fill-blank',
            prompt: 'The new sensory garden is designed specifically for [BLANK] impaired visitors.',
            answer: 'visually',
            acceptableAnswers: ['visually', 'visually impaired'],
            explanation: 'Guide specifies visually impaired visitors.'
          },
          {
            id: 'lq37',
            number: 37,
            type: 'fill-blank',
            prompt: 'Tactile planters in the sensory garden are constructed from [BLANK] wood.',
            answer: 'cedar',
            explanation: 'Guide mentions raised tactile cedar planters.'
          },
          {
            id: 'lq38',
            number: 38,
            type: 'fill-blank',
            prompt: 'Audio descriptive headsets require leaving an official photo [BLANK] as deposit.',
            answer: 'ID',
            acceptableAnswers: ['id', 'identification'],
            explanation: 'Guide notes depositing an official photo ID.'
          },
          {
            id: 'lq39',
            number: 39,
            type: 'fill-blank',
            prompt: 'The annual seasonal orchid exhibition takes place in the month of [BLANK].',
            answer: 'November',
            explanation: 'Guide mentions the entire month of November.'
          },
          {
            id: 'lq40',
            number: 40,
            type: 'fill-blank',
            prompt: 'Standard adult day pass admission costs £[BLANK].',
            answer: '12',
            explanation: 'Guide states 12 pounds for adults.'
          },
          {
            id: 'lq41',
            number: 41,
            type: 'fill-blank',
            prompt: 'Family ticket admitting two adults and three children is priced at £[BLANK].',
            answer: '28',
            explanation: 'Guide specifies 28 pounds.'
          },
          {
            id: 'lq42',
            number: 42,
            type: 'fill-blank',
            prompt: 'Glasshouse elevator undergoes routine maintenance every [BLANK] morning.',
            answer: 'Monday',
            explanation: 'Guide notes servicing every Monday morning.'
          },
          {
            id: 'lq43',
            number: 43,
            type: 'fill-blank',
            prompt: 'Elevator maintenance completes by [BLANK] AM.',
            answer: '11:30',
            explanation: 'Servicing runs until 11:30 AM.'
          },
          {
            id: 'lq44',
            number: 44,
            type: 'fill-blank',
            prompt: 'Head botanical curator for specimen plant adoption is Eleanor [BLANK].',
            answer: 'Vance',
            explanation: 'Curator Eleanor Vance.'
          },
          {
            id: 'lq45',
            number: 45,
            type: 'fill-blank',
            prompt: 'One of the aromatic herbs featured in the sensory garden is [BLANK].',
            answer: 'lavender',
            acceptableAnswers: ['lavender', 'rosemary', 'bergamot'],
            explanation: 'Guide mentions lavender, rosemary, and bergamot.'
          },
          {
            id: 'lq46',
            number: 46,
            type: 'multiple-choice',
            prompt: 'What equipment can visitors borrow free of charge at the information kiosk?',
            options: [
              'A. Digital SLR cameras',
              'B. Audio descriptive headsets',
              'C. Botanical microscopes',
              'D. Waterproof rain ponchos'
            ],
            answer: 'B',
            explanation: 'Audio descriptive headsets.'
          },
          {
            id: 'lq47',
            number: 47,
            type: 'multiple-choice',
            prompt: 'Where is the Heritage Tea Room located on the estate?',
            options: [
              'A. Near the parking lot gate',
              'B. On the exterior south terrace',
              'C. Inside the north greenhouse',
              'D. In the basement rotunda'
            ],
            answer: 'B',
            explanation: 'Operates on the south terrace.'
          },
          {
            id: 'lq48',
            number: 48,
            type: 'multiple-choice',
            prompt: 'Which visitor group receives specialized aromatic garden design?',
            options: [
              'A. School biology classes',
              'B. Visually impaired visitors',
              'C. International tourists',
              'D. Landscape architecture researchers'
            ],
            answer: 'B',
            explanation: 'Designed for visually impaired visitors.'
          },
          {
            id: 'lq49',
            number: 49,
            type: 'multiple-choice',
            prompt: 'How many children are admitted under a single Family Pass ticket?',
            options: [
              'A. Up to one child',
              'B. Up to two children',
              'C. Up to three children',
              'D. Unlimited children'
            ],
            answer: 'C',
            explanation: 'Guide confirms up to three children.'
          },
          {
            id: 'lq50',
            number: 50,
            type: 'multiple-choice',
            prompt: 'Who should visitors contact regarding the rare plant adoption endowment?',
            options: [
              'A. The ticket desk assistant',
              'B. Head botanical curator Eleanor Vance',
              'C. The facilities maintenance manager',
              'D. The local municipal council'
            ],
            answer: 'B',
            explanation: 'Curator Eleanor Vance handles adoptions.'
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
            id: 'lq51',
            number: 51,
            type: 'fill-blank',
            prompt: 'The Eastgate Centre in Harare is modeled after the ventilation of [BLANK] mounds.',
            answer: 'termite',
            acceptableAnswers: ['termite', 'termites'],
            explanation: 'Seminar notes Eastgate Centre mimics termite mounds.'
          },
          {
            id: 'lq52',
            number: 52,
            type: 'fill-blank',
            prompt: 'The self-cooling design saves approximately [BLANK] percent in energy costs.',
            answer: '35',
            acceptableAnswers: ['35', '35%', 'thirty-five'],
            explanation: 'Speaker specifies saving roughly 35 percent.'
          },
          {
            id: 'lq53',
            number: 53,
            type: 'fill-blank',
            prompt: 'The exterior of the building utilizes porous [BLANK] masonry to absorb cool night air.',
            answer: 'concrete',
            explanation: 'Speaker mentions porous concrete.'
          },
          {
            id: 'lq54',
            number: 54,
            type: 'fill-blank',
            prompt: 'Lotus leaves inspire self-cleaning surfaces due to their [BLANK] micro-texture.',
            answer: 'superhydrophobic',
            acceptableAnswers: ['superhydrophobic', 'hydrophobic'],
            explanation: 'Speaker notes superhydrophobic micro-texture.'
          },
          {
            id: 'lq55',
            number: 55,
            type: 'fill-blank',
            prompt: 'Water droplets roll across the leaf collecting [BLANK] particles.',
            answer: 'dirt',
            acceptableAnswers: ['dirt', 'dust'],
            explanation: 'Water droplets pick up dirt.'
          },
          {
            id: 'lq56',
            number: 56,
            type: 'fill-blank',
            prompt: 'Shark skin inspires drag-reduction riblets called [BLANK].',
            answer: 'denticles',
            explanation: 'Speaker refers to dermal denticles.'
          },
          {
            id: 'lq57',
            number: 57,
            type: 'fill-blank',
            prompt: 'Denticle coatings on aircraft wings can reduce aerodynamic drag by [BLANK] percent.',
            answer: '8',
            acceptableAnswers: ['8', '8%', 'eight'],
            explanation: 'Speaker specifies up to 8 percent.'
          },
          {
            id: 'lq58',
            number: 58,
            type: 'multiple-choice',
            prompt: 'Which natural mechanism does the Eastgate Centre use to vent hot air?',
            options: [
              'A. Mechanical air compressors',
              'B. Passive thermal convection flues',
              'C. Subterranean ice storage',
              'D. Evaporative chemical chilled coils'
            ],
            answer: 'B',
            explanation: 'Passive thermal convection flues.'
          },
          {
            id: 'lq59',
            number: 59,
            type: 'multiple-choice',
            prompt: 'Why are chemical detergents unnecessary for lotus-effect exterior facades?',
            options: [
              'A. Solar radiation vaporizes all dust',
              'B. Rainwater naturally beads and washes away surface grime',
              'C. The surface absorbs airborne bacteria',
              'D. Electrostatic fields repel air pollution'
            ],
            answer: 'B',
            explanation: 'Rainwater naturally washes grime away.'
          },
          {
            id: 'lq60',
            number: 60,
            type: 'multiple-choice',
            prompt: 'What primary environmental benefit did the students identify in biomimetic materials?',
            options: [
              'A. Cheaper initial manufacturing than plastics',
              'B. Substantial reduction in operational energy and toxic solvents',
              'C. Complete resistance to earthquake ground motions',
              'D. Faster construction timelines'
            ],
            answer: 'B',
            explanation: 'Reduction in operational energy and toxic solvents.'
          },
          {
            id: 'lq61',
            number: 61,
            type: 'fill-blank',
            prompt: 'The kingfisher beak inspired the nose design of the Japanese [BLANK] train.',
            answer: 'bullet',
            acceptableAnswers: ['bullet', 'shinkansen'],
            explanation: 'Kingfisher beak inspired the bullet train nose.'
          },
          {
            id: 'lq62',
            number: 62,
            type: 'fill-blank',
            prompt: 'Redesigning the train nose eliminated the loud tunnel exit [BLANK].',
            answer: 'boom',
            acceptableAnswers: ['boom', 'sonic boom'],
            explanation: 'Eliminated the tunnel sonic boom.'
          },
          {
            id: 'lq63',
            number: 63,
            type: 'fill-blank',
            prompt: 'Humpback whale flipper bumps are anatomically known as [BLANK].',
            answer: 'tubercles',
            explanation: 'Tubercles on the leading edge.'
          },
          {
            id: 'lq64',
            number: 64,
            type: 'fill-blank',
            prompt: 'Tubercle designs increase wind turbine electrical output efficiency by [BLANK] percent.',
            answer: '20',
            acceptableAnswers: ['20', '20%', 'twenty'],
            explanation: 'Turbines generate 20 percent more electricity.'
          },
          {
            id: 'lq65',
            number: 65,
            type: 'fill-blank',
            prompt: 'Gecko feet adhere to glass surfaces through microscopic [BLANK] forces.',
            answer: 'van der Waals',
            acceptableAnswers: ['van der waals', 'intermolecular'],
            explanation: 'Van der Waals intermolecular forces.'
          },
          {
            id: 'lq66',
            number: 66,
            type: 'fill-blank',
            prompt: 'Each gecko toe pad contains millions of microscopic hairs called [BLANK].',
            answer: 'setae',
            explanation: 'Microscopic setae hairs.'
          },
          {
            id: 'lq67',
            number: 67,
            type: 'fill-blank',
            prompt: 'Spider silk exhibits tensile strength greater than [BLANK] on a per-weight basis.',
            answer: 'steel',
            explanation: 'Greater tensile strength than high-grade steel.'
          },
          {
            id: 'lq68',
            number: 68,
            type: 'fill-blank',
            prompt: 'Namib desert beetles harvest drinking water from morning [BLANK].',
            answer: 'fog',
            acceptableAnswers: ['fog', 'mist'],
            explanation: 'Beetles condense fog droplets on back ridges.'
          },
          {
            id: 'lq69',
            number: 69,
            type: 'fill-blank',
            prompt: 'Fog-harvesting mesh nets can produce up to [BLANK] liters of potable water daily.',
            answer: '150',
            acceptableAnswers: ['150', 'one hundred fifty'],
            explanation: 'Produce up to 150 liters.'
          },
          {
            id: 'lq70',
            number: 70,
            type: 'fill-blank',
            prompt: 'The architectural term for structures mimicking natural organisms is [BLANK] architecture.',
            answer: 'biomorphic',
            acceptableAnswers: ['biomorphic', 'biomimetic'],
            explanation: 'Biomorphic architecture.'
          },
          {
            id: 'lq71',
            number: 71,
            type: 'multiple-choice',
            prompt: 'Why was the Shinkansen bullet train redesigned using a kingfisher beak profile?',
            options: [
              'A. To increase passenger seating capacity',
              'B. To prevent atmospheric compression noise when leaving mountain tunnels',
              'C. To protect against heavy snow accumulation',
              'D. To allow faster turns on sharp curves'
            ],
            answer: 'B',
            explanation: 'Prevented tunnel exit sonic booms.'
          },
          {
            id: 'lq72',
            number: 72,
            type: 'multiple-choice',
            prompt: 'What aerodynamic advantage do tubercles provide on wind turbine blades?',
            options: [
              'A. Lower manufacturing cost of carbon composites',
              'B. Delayed aerodynamic stall at steeper angles of attack',
              'C. Complete absorption of lightning strikes',
              'D. Quieter operation at low wind speeds'
            ],
            answer: 'B',
            explanation: 'Delayed stall at steeper angles.'
          },
          {
            id: 'lq73',
            number: 73,
            type: 'multiple-choice',
            prompt: 'How do synthetic gecko-inspired dry adhesives differ from conventional glues?',
            options: [
              'A. They require heat activation before bonding',
              'B. They leave zero chemical residue upon detachment and are reusable',
              'C. They can only function underwater',
              'D. They bond permanently within 3 seconds'
            ],
            answer: 'B',
            explanation: 'Leave no residue and are reusable.'
          },
          {
            id: 'lq74',
            number: 74,
            type: 'multiple-choice',
            prompt: 'In what arid geographic environment was fog-harvesting mesh first widely adopted?',
            options: [
              'A. Gobi Desert of Mongolia',
              'B. Atacama Desert of coastal Chile',
              'C. Sahara Desert of Mali',
              'D. Great Victorian Desert of Australia'
            ],
            answer: 'B',
            explanation: 'Atacama Desert of Chile.'
          },
          {
            id: 'lq75',
            number: 75,
            type: 'multiple-choice',
            prompt: 'What presentation software will the students use for their biomimicry project defense?',
            options: [
              'A. Microsoft PowerPoint',
              'B. LaTeX Beamer',
              'C. Prezi 3D Canvas',
              'D. Adobe InDesign Slides'
            ],
            answer: 'B',
            explanation: 'Students selected LaTeX Beamer.'
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
            id: 'lq76',
            number: 76,
            type: 'fill-blank',
            prompt: 'The master biological clock in the brain is the [BLANK] nucleus.',
            answer: 'suprachiasmatic',
            acceptableAnswers: ['suprachiasmatic', 'scn'],
            explanation: 'Lecturer identifies the suprachiasmatic nucleus.'
          },
          {
            id: 'lq77',
            number: 77,
            type: 'fill-blank',
            prompt: 'The master clock consists of approximately [BLANK] neurons.',
            answer: '20,000',
            acceptableAnswers: ['20,000', '20000', 'twenty thousand'],
            explanation: 'Lecturer states roughly 20,000 neurons.'
          },
          {
            id: 'lq78',
            number: 78,
            type: 'fill-blank',
            prompt: 'Melatonin secretion is triggered by the [BLANK] gland in darkness.',
            answer: 'pineal',
            explanation: 'Secreted by the pineal gland.'
          },
          {
            id: 'lq79',
            number: 79,
            type: 'fill-blank',
            prompt: 'Blue light frequencies around [BLANK] nanometers suppress melatonin most acutely.',
            answer: '480',
            acceptableAnswers: ['480', '480nm'],
            explanation: 'Lecturer specifies 480 nanometers.'
          },
          {
            id: 'lq80',
            number: 80,
            type: 'fill-blank',
            prompt: 'Deep Slow-Wave Sleep is characterized by synchronized [BLANK] brainwaves.',
            answer: 'delta',
            explanation: 'Delta oscillations on EEG.'
          },
          {
            id: 'lq81',
            number: 81,
            type: 'fill-blank',
            prompt: 'During deep sleep, the [BLANK] system flushes metabolic waste from brain tissues.',
            answer: 'glymphatic',
            explanation: 'The glymphatic waste-clearing system.'
          },
          {
            id: 'lq82',
            number: 82,
            type: 'fill-blank',
            prompt: 'One critical neurotoxic protein cleared during sleep is beta-[BLANK].',
            answer: 'amyloid',
            explanation: 'Beta-amyloid protein plaques.'
          },
          {
            id: 'lq83',
            number: 83,
            type: 'multiple-choice',
            prompt: 'What evolutionary purpose does the glymphatic clearance cycle serve?',
            options: [
              'A. Prevents muscular fatigue in limbs',
              'B. Flushes neurotoxic protein waste accumulated during wakefulness',
              'C. Stimulates adrenaline production for morning arousal',
              'D. Accelerates digestive stomach enzymes'
            ],
            answer: 'B',
            explanation: 'Clears neurotoxic protein waste.'
          },
          {
            id: 'lq84',
            number: 84,
            type: 'multiple-choice',
            prompt: 'How does exposure to short-wavelength blue light from screens disrupt circadian rhythms?',
            options: [
              'A. Directly causes cellular retinal burns',
              'B. Suppresses nocturnal pineal melatonin synthesis',
              'C. Increases core body temperature by 2 degrees',
              'D. Destroys synaptic dopamine receptors'
            ],
            answer: 'B',
            explanation: 'Suppresses pineal melatonin synthesis.'
          },
          {
            id: 'lq85',
            number: 85,
            type: 'multiple-choice',
            prompt: 'What sleep stage is most vital for consolidating declarative factual memory?',
            options: [
              'A. Stage 1 light transitional slumber',
              'B. Stage 3 Slow-Wave delta sleep',
              'C. Active REM paradoxical dreaming',
              'D. Pre-dawn awakening micro-naps'
            ],
            answer: 'B',
            explanation: 'Stage 3 slow-wave delta sleep.'
          },
          {
            id: 'lq86',
            number: 86,
            type: 'fill-blank',
            prompt: 'Rapid Eye Movement (REM) sleep is often called [BLANK] sleep.',
            answer: 'paradoxical',
            explanation: 'Paradoxical sleep due to active brainwaves.'
          },
          {
            id: 'lq87',
            number: 87,
            type: 'fill-blank',
            prompt: 'During REM sleep, skeletal muscles enter complete paralysis called muscle [BLANK].',
            answer: 'atonia',
            acceptableAnswers: ['atonia', 'paralysis'],
            explanation: 'Postural muscle atonia.'
          },
          {
            id: 'lq88',
            number: 88,
            type: 'fill-blank',
            prompt: 'Memory transfers from the temporary hippocampus to the long-term cerebral [BLANK].',
            answer: 'cortex',
            acceptableAnswers: ['cortex', 'neocortex'],
            explanation: 'Transfers to the cerebral cortex.'
          },
          {
            id: 'lq89',
            number: 89,
            type: 'fill-blank',
            prompt: 'A complete human sleep cycle lasts approximately [BLANK] minutes.',
            answer: '90',
            acceptableAnswers: ['90', 'ninety'],
            explanation: 'Approximately 90 minutes.'
          },
          {
            id: 'lq90',
            number: 90,
            type: 'fill-blank',
            prompt: 'Healthy adults require roughly [BLANK] complete cycles per night.',
            answer: '5',
            acceptableAnswers: ['5', 'five'],
            explanation: 'Roughly 5 complete 90-minute cycles.'
          },
          {
            id: 'lq91',
            number: 91,
            type: 'fill-blank',
            prompt: 'Chronic sleep deprivation elevates the stress hormone [BLANK].',
            answer: 'cortisol',
            explanation: 'Spikes circulating cortisol levels.'
          },
          {
            id: 'lq92',
            number: 92,
            type: 'fill-blank',
            prompt: 'Caffeine blocks receptors for the sleep-inducing chemical [BLANK].',
            answer: 'adenosine',
            explanation: 'Competitive antagonist for adenosine.'
          },
          {
            id: 'lq93',
            number: 93,
            type: 'fill-blank',
            prompt: 'The average half-life of caffeine in healthy adults is [BLANK] hours.',
            answer: '5 to 7',
            acceptableAnswers: ['5 to 7', '6', '5-7', 'five to seven'],
            explanation: 'Half-life of 5 to 7 hours.'
          },
          {
            id: 'lq94',
            number: 94,
            type: 'fill-blank',
            prompt: 'Optimal bedroom temperature for deep sleep initiation is around [BLANK] degrees Celsius.',
            answer: '18',
            acceptableAnswers: ['18', '18C', 'eighteen'],
            explanation: 'Thermoregulation prefers 18 degrees Celsius.'
          },
          {
            id: 'lq95',
            number: 95,
            type: 'fill-blank',
            prompt: 'Sleep tracking monitors measure Heart Rate [BLANK] as an index of recovery.',
            answer: 'Variability',
            acceptableAnswers: ['variability', 'hrv'],
            explanation: 'Heart Rate Variability (HRV).'
          },
          {
            id: 'lq96',
            number: 96,
            type: 'multiple-choice',
            prompt: 'Why does caffeine consumption in late afternoon impair night-time sleep onset?',
            options: [
              'A. It destroys melatonin molecules directly',
              'B. It competitively binds to adenosine receptors, masking sleep pressure',
              'C. It speeds up gastric stomach digestion by 50%',
              'D. It causes rapid involuntary eye twitches'
            ],
            answer: 'B',
            explanation: 'Competitively blocks adenosine receptors.'
          },
          {
            id: 'lq97',
            number: 97,
            type: 'multiple-choice',
            prompt: 'What physiological change is required for the body to transition into deep sleep?',
            options: [
              'A. Core body temperature must drop by roughly 1 degree Celsius',
              'B. Blood sugar levels must spike sharply',
              'C. Respiratory breathing rate must double',
              'D. Intestinal peristalsis must accelerate'
            ],
            answer: 'A',
            explanation: 'Core body temperature drops by 1 degree.'
          },
          {
            id: 'lq98',
            number: 98,
            type: 'multiple-choice',
            prompt: 'What neurological danger arises from sleep deprivation in motor vehicle drivers?',
            options: [
              'A. Temporary color blindness',
              'B. Micro-sleep episodes lasting 2 to 5 seconds without awareness',
              'C. Severe inner ear vertigo',
              'D. Inability to hear vehicle horns'
            ],
            answer: 'B',
            explanation: 'Micro-sleep episodes.'
          },
          {
            id: 'lq99',
            number: 99,
            type: 'multiple-choice',
            prompt: 'How does REM sleep specifically aid psychological and emotional regulation?',
            options: [
              'A. By erasing all emotional memories permanently',
              'B. By stripping painful emotional visceral charge while preserving memory narrative',
              'C. By numbing cranial nerve pain receptors',
              'D. By synthesizing synthetic endorphins in the spinal cord'
            ],
            answer: 'B',
            explanation: 'Strips emotional visceral charge while keeping memory.'
          },
          {
            id: 'lq100',
            number: 100,
            type: 'multiple-choice',
            prompt: 'What clinical conclusion did the research team publish regarding chronic insomnia?',
            options: [
              'A. Sedative hypnotic pills are the optimal long-term cure',
              'B. Cognitive Behavioral Therapy for Insomnia (CBT-I) provides far superior sustained efficacy',
              'C. Insomnia cannot be treated and is purely genetic',
              'D. Daily 3-hour afternoon naps completely cure insomnia'
            ],
            answer: 'B',
            explanation: 'CBT-I provides superior sustained outcomes.'
          }
        ]
      }
    ]
  },
  {
    id: 'listening-test-2',
    title: 'Academic Practice Listening Test 2',
    durationMinutes: 30,
    totalQuestions: 40,
    sections: [
      {
        id: 't2-sec1',
        sectionNumber: 1,
        title: 'Section 1: Central Library Registration & Archive Access',
        scenario: 'A university student (Chloe) is registering for a specialized researcher library card with the chief librarian (Marcus).',
        dialogue: [
          { speaker: 'Marcus', text: 'Good afternoon, St. Jude University Central Library. How may I assist you today?' },
          { speaker: 'Chloe', text: 'Hello! I need to apply for an academic researcher card to access the rare manuscripts collection.' },
          { speaker: 'Marcus', text: 'Certainly. May I start with your full surname and initials?' },
          { speaker: 'Chloe', text: 'Yes, it is Chloe Kensington. K-E-N-S-I-N-G-T-O-N.' },
          { speaker: 'Marcus', text: 'Thank you Chloe. And what is your postgraduate department?' },
          { speaker: 'Chloe', text: 'I am in the Department of Medieval Archaeology.' },
          { speaker: 'Marcus', text: 'Excellent. What is your local residential postal address?' },
          { speaker: 'Chloe', text: 'I live at 42 Highbury Crescent, flat 3B.' },
          { speaker: 'Marcus', text: 'And your student card registration number?' },
          { speaker: 'Chloe', text: 'It is ARC-9104-B.' },
          { speaker: 'Marcus', text: 'For special archives access, standard borrowing is extended from four weeks to six weeks. The annual access fee for postgraduate researchers is 25 pounds.' },
          { speaker: 'Chloe', text: 'That is very reasonable. Are digitization scanners available in the reading room?' },
          { speaker: 'Marcus', text: 'Yes, we have high-resolution overhead scanners on Level 3. Booking is required at least 24 hours in advance.' }
        ],
        questions: [
          {
            id: 't2_lq1',
            number: 1,
            type: 'fill-blank',
            prompt: 'Applicant Surname: [BLANK]',
            answer: 'Kensington',
            explanation: 'Chloe spells her surname as Kensington.'
          },
          {
            id: 't2_lq2',
            number: 2,
            type: 'fill-blank',
            prompt: 'Academic Department: Medieval [BLANK]',
            answer: 'Archaeology',
            explanation: 'She studies in the Department of Medieval Archaeology.'
          },
          {
            id: 't2_lq3',
            number: 3,
            type: 'fill-blank',
            prompt: 'Residential Address: 42 [BLANK] Crescent, Flat 3B.',
            answer: 'Highbury',
            explanation: 'Chloe gives her address as 42 Highbury Crescent.'
          },
          {
            id: 't2_lq4',
            number: 4,
            type: 'fill-blank',
            prompt: 'Student Registration Number: [BLANK]',
            answer: 'ARC-9104-B',
            acceptableAnswers: ['ARC-9104-B', 'ARC 9104 B'],
            explanation: 'She states her card number is ARC-9104-B.'
          },
          {
            id: 't2_lq5',
            number: 5,
            type: 'fill-blank',
            prompt: 'Extended loan period for researchers: [BLANK] weeks.',
            answer: '6',
            acceptableAnswers: ['6', 'six'],
            explanation: 'Marcus confirms loans are extended to six weeks.'
          },
          {
            id: 't2_lq6',
            number: 6,
            type: 'fill-blank',
            prompt: 'Annual registration fee: £[BLANK].',
            answer: '25',
            acceptableAnswers: ['25', '£25', '25 pounds'],
            explanation: 'Marcus states the fee is 25 pounds.'
          },
          {
            id: 't2_lq7',
            number: 7,
            type: 'fill-blank',
            prompt: 'Special book scanners are located on Level [BLANK].',
            answer: '3',
            acceptableAnswers: ['3', 'three', 'Level 3'],
            explanation: 'Marcus mentions scanners on Level 3.'
          },
          {
            id: 't2_lq8',
            number: 8,
            type: 'multiple-choice',
            prompt: 'How far in advance must scanner reservations be submitted?',
            options: [
              'A. 12 hours',
              'B. 24 hours',
              'C. 48 hours',
              'D. 7 days'
            ],
            answer: 'B',
            explanation: 'Marcus explicitly notes bookings must be made 24 hours in advance.'
          },
          {
            id: 't2_lq9',
            number: 9,
            type: 'multiple-choice',
            prompt: 'Which document must Chloe present on her first visit?',
            options: [
              'A. Formal letter from thesis supervisor',
              'B. Valid passport and bank statement',
              'C. University student card',
              'D. Printed publication catalog'
            ],
            answer: 'C',
            explanation: 'Chloe must show her university student card to activate borrowing.'
          },
          {
            id: 't2_lq10',
            number: 10,
            type: 'multiple-choice',
            prompt: 'What restriction applies to the rare manuscripts room?',
            options: [
              'A. Flash photography is strictly prohibited',
              'B. Only doctoral professors may enter',
              'C. Books cannot be viewed without white cotton gloves',
              'D. No personal digital laptops are permitted'
            ],
            answer: 'A',
            explanation: 'Preservation guidelines forbid any flash photography.'
          }
        ]
      },
      {
        id: 't2-sec2',
        sectionNumber: 2,
        title: 'Section 2: Heritage Steam Railway Volunteer Orientation',
        scenario: 'A briefing given by the Volunteer Coordinator (Mr. Henderson) to newly recruited guides at the Severn Valley Heritage Railway.',
        dialogue: [
          { speaker: 'Mr. Henderson', text: 'Good morning volunteers! Welcome to the Severn Valley Heritage Railway line orientation. Our railway spans 16 miles through picturesque Worcestershire.' },
          { speaker: 'Mr. Henderson', text: 'First, let us review your safety equipment. All platform marshals must wear high-visibility orange vests and steel-toed safety boots at all times.' },
          { speaker: 'Mr. Henderson', text: 'Second, visitor tours depart every 45 minutes from Platform 2, beginning at 9:30 AM.' },
          { speaker: 'Mr. Henderson', text: 'Third, our historic Signal Box was originally constructed in 1892 and remains fully operational using mechanical levers. Please advise visitors that children under 12 must be accompanied by an adult inside the signal cabin.' },
          { speaker: 'Mr. Henderson', text: 'Lunch vouchers for the station tearoom will be distributed during the 12:15 PM shift change.' }
        ],
        questions: [
          {
            id: 't2_lq11',
            number: 11,
            type: 'fill-blank',
            prompt: 'Total length of the heritage railway line: [BLANK] miles.',
            answer: '16',
            acceptableAnswers: ['16', 'sixteen'],
            explanation: 'Henderson states the track spans 16 miles.'
          },
          {
            id: 't2_lq12',
            number: 12,
            type: 'fill-blank',
            prompt: 'Required safety vest color for platform marshals: [BLANK].',
            answer: 'orange',
            explanation: 'Marshals must wear high-visibility orange vests.'
          },
          {
            id: 't2_lq13',
            number: 13,
            type: 'fill-blank',
            prompt: 'Tour frequency: departures every [BLANK] minutes.',
            answer: '45',
            acceptableAnswers: ['45', 'forty-five', '45 minutes'],
            explanation: 'Tours run every 45 minutes.'
          },
          {
            id: 't2_lq14',
            number: 14,
            type: 'fill-blank',
            prompt: 'Construction year of the historic Signal Box: [BLANK].',
            answer: '1892',
            explanation: 'Constructed in 1892.'
          },
          {
            id: 't2_lq15',
            number: 15,
            type: 'fill-blank',
            prompt: 'Minimum age for unaccompanied signal box entry: [BLANK] years.',
            answer: '12',
            acceptableAnswers: ['12', 'twelve'],
            explanation: 'Children under 12 must be accompanied.'
          },
          {
            id: 't2_lq16',
            number: 16,
            type: 'multiple-choice',
            prompt: 'At what time does the first morning train tour depart?',
            options: [
              'A. 8:45 AM',
              'B. 9:00 AM',
              'C. 9:30 AM',
              'D. 10:15 AM'
            ],
            answer: 'C',
            explanation: 'Departures begin at 9:30 AM.'
          },
          {
            id: 't2_lq17',
            number: 17,
            type: 'multiple-choice',
            prompt: 'Where are volunteer lunch vouchers distributed?',
            options: [
              'A. Ticket booking office',
              'B. Station master office during shift change',
              'C. Engine repair shed',
              'D. Carriage storage warehouse'
            ],
            answer: 'B',
            explanation: 'Distributed during the 12:15 PM shift change.'
          },
          {
            id: 't2_lq18',
            number: 18,
            type: 'multiple-choice',
            prompt: 'What is the principal safety hazard identified around steam locomotive boilers?',
            options: [
              'A. High-pressure steam blowoff valves',
              'B. Unbalanced coal tender loads',
              'C. Exposed electrical circuitry',
              'D. Slippery wooden platform boards'
            ],
            answer: 'A',
            explanation: 'High-pressure steam release zones require wide perimeter clearance.'
          },
          {
            id: 't2_lq19',
            number: 19,
            type: 'multiple-choice',
            prompt: 'What should marshals do in the event of an unscheduled track obstruction?',
            options: [
              'A. Display red hand flag and notify signal box immediately',
              'B. Attempt to clear heavy timber manually',
              'C. Sound platform horn three times',
              'D. Evacuate passengers into adjacent fields'
            ],
            answer: 'A',
            explanation: 'Standard emergency procedure is waving the red flag and radioing the signal box.'
          },
          {
            id: 't2_lq20',
            number: 20,
            type: 'multiple-choice',
            prompt: 'Which historic locomotive is featured on the afternoon express run?',
            options: [
              'A. The Flying Scotsman',
              'B. City of Truro',
              'C. Black Five 45110',
              'D. Duchess of Sutherland'
            ],
            answer: 'C',
            explanation: 'The Stanier Black Five is assigned to afternoon operations.'
          }
        ]
      },
      {
        id: 't2-sec3',
        sectionNumber: 3,
        title: 'Section 3: Marine Ecology Research Collaboration',
        scenario: 'A tutorial meeting between postgraduate marine biology student Liam and his research supervisor Dr. Elena Vance.',
        dialogue: [
          { speaker: 'Dr. Vance', text: 'Good morning Liam. Let us review the methodology for your dissertation on microplastic accumulation in estuary benthic sediments.' },
          { speaker: 'Liam', text: 'Thank you Dr. Vance. I completed the core sediment core sampling across six designated estuarine quadrants last Thursday.' },
          { speaker: 'Dr. Vance', text: 'And what density separation solution did you utilize in the centrifuge phase?' },
          { speaker: 'Liam', text: 'I used a concentrated sodium iodide solution rather than zinc chloride because it provides higher recovery rates for low-density polypropylene polymers.' },
          { speaker: 'Dr. Vance', text: 'That was a judicious decision. What spectroscopic equipment will you use for chemical polymer identification?' },
          { speaker: 'Liam', text: 'I have scheduled time on the Fourier-transform infrared microscope in the chemistry department for next Tuesday.' },
          { speaker: 'Dr. Vance', text: 'Be sure to run blank laboratory control filters after every five samples to account for airborne synthetic fiber contamination.' }
        ],
        questions: [
          {
            id: 't2_lq21',
            number: 21,
            type: 'fill-blank',
            prompt: 'Subject of Liam\'s research: [BLANK] accumulation in estuary sediments.',
            answer: 'microplastic',
            acceptableAnswers: ['microplastic', 'microplastics'],
            explanation: 'Liam investigates microplastic accumulation.'
          },
          {
            id: 't2_lq22',
            number: 22,
            type: 'fill-blank',
            prompt: 'Number of estuarine quadrants sampled: [BLANK].',
            answer: '6',
            acceptableAnswers: ['6', 'six'],
            explanation: 'Sampling covered six quadrants.'
          },
          {
            id: 't2_lq23',
            number: 23,
            type: 'fill-blank',
            prompt: 'Density separation chemical agent: sodium [BLANK].',
            answer: 'iodide',
            explanation: 'Liam used sodium iodide.'
          },
          {
            id: 't2_lq24',
            number: 24,
            type: 'fill-blank',
            prompt: 'Target low-density polymer: [BLANK].',
            answer: 'polypropylene',
            explanation: 'He notes polypropylene polymer recovery.'
          },
          {
            id: 't2_lq25',
            number: 25,
            type: 'fill-blank',
            prompt: 'Run blank control filters after every [BLANK] samples.',
            answer: '5',
            acceptableAnswers: ['5', 'five'],
            explanation: 'Dr. Vance instructs controls every 5 samples.'
          },
          {
            id: 't2_lq26',
            number: 26,
            type: 'multiple-choice',
            prompt: 'Why did Liam select sodium iodide over zinc chloride?',
            options: [
              'A. It is significantly less toxic and cheaper to dispose of',
              'B. It yields higher extraction efficiency for low-density polymers',
              'C. It prevents biological decomposition of sediment microbes',
              'D. It precipitates heavy metal contaminants out of solution'
            ],
            answer: 'B',
            explanation: 'Liam notes it provides higher recovery rates for polypropylene.'
          },
          {
            id: 't2_lq27',
            number: 27,
            type: 'multiple-choice',
            prompt: 'Which diagnostic microscope technique will identify polymer bonds?',
            options: [
              'A. Scanning electron microscopy',
              'B. Fourier-transform infrared spectroscopy (FTIR)',
              'C. Atomic force microscopy',
              'D. Confocal laser scanning'
            ],
            answer: 'B',
            explanation: 'Liam booked FTIR microscopy.'
          },
          {
            id: 't2_lq28',
            number: 28,
            type: 'multiple-choice',
            prompt: 'What primary source of experimental contamination did Dr. Vance warn against?',
            options: [
              'A. Airborne synthetic textile fibers',
              'B. Tap water mineral deposits',
              'C. Plastic pipette tips leaching phthalates',
              'D. Cross-contamination from rubber gloves'
            ],
            answer: 'A',
            explanation: 'She specifically warns about airborne synthetic fiber contamination.'
          },
          {
            id: 't2_lq29',
            number: 29,
            type: 'multiple-choice',
            prompt: 'When is Liam\'s complete methodology chapter due for review?',
            options: [
              'A. In three weeks',
              'B. By the end of November',
              'C. In ten days',
              'D. Next semester'
            ],
            answer: 'B',
            explanation: 'The deadline for draft methodology is late November.'
          },
          {
            id: 't2_lq30',
            number: 30,
            type: 'multiple-choice',
            prompt: 'What additional biological indicator did Dr. Vance recommend analyzing?',
            options: [
              'A. Benthic polychaete worm gut contents',
              'B. Estuarine seagrass root systems',
              'C. Pelagic plankton lipid reserves',
              'D. Sediment chlorophyll-a concentration'
            ],
            answer: 'A',
            explanation: 'Polychaete worm ingestion provides evidence of trophic transfer.'
          }
        ]
      },
      {
        id: 't2-sec4',
        sectionNumber: 4,
        title: 'Section 4: Cognitive Neuroscience of Sleep & Memory Consolidation',
        scenario: 'An academic university lecture by Professor Alistair Finch on slow-wave sleep rhythms and synaptic plasticity.',
        dialogue: [
          { speaker: 'Prof. Finch', text: 'Good morning colleagues. Today we examine the neurobiological mechanisms underlying slow-wave sleep and episodic memory consolidation.' },
          { speaker: 'Prof. Finch', text: 'During non-rapid eye movement sleep, particularly Stage 3, the mammalian neocortex generates high-amplitude, low-frequency oscillations below one Hertz, known as slow oscillations.' },
          { speaker: 'Prof. Finch', text: 'These slow rhythms originate predominantly in the frontal cortex and travel posteriorly across the brain.' },
          { speaker: 'Prof. Finch', text: 'Critically, these neocortical slow waves coordinate with two distinct subcortical oscillations: thalamo-cortical sleep spindles, oscillating between 11 and 16 Hertz, and hippocampal sharp-wave ripples.' },
          { speaker: 'Prof. Finch', text: 'This triple phase-coupling acts as a temporal pacemaker. It triggers the systematic reactivation of newly acquired neural traces in the hippocampus, transferring labile short-term representations into stable neocortical networks.' },
          { speaker: 'Prof. Finch', text: 'In sleep-deprived subjects, this phase-synchrony breaks down, resulting in a 40 percent decrement in declarative memory retention.' }
        ],
        questions: [
          {
            id: 't2_lq31',
            number: 31,
            type: 'fill-blank',
            prompt: 'Stage of sleep associated with slow oscillations: Stage [BLANK].',
            answer: '3',
            acceptableAnswers: ['3', 'three', 'Stage 3'],
            explanation: 'Prof. Finch specifies Stage 3 non-rapid eye movement sleep.'
          },
          {
            id: 't2_lq32',
            number: 32,
            type: 'fill-blank',
            prompt: 'Slow oscillation frequencies measure below [BLANK] Hertz.',
            answer: '1',
            acceptableAnswers: ['1', 'one', '1 Hertz'],
            explanation: 'Oscillations occur below one Hertz.'
          },
          {
            id: 't2_lq33',
            number: 33,
            type: 'fill-blank',
            prompt: 'Slow waves originate predominantly in the [BLANK] cortex.',
            answer: 'frontal',
            explanation: 'They originate in the frontal cortex.'
          },
          {
            id: 't2_lq34',
            number: 34,
            type: 'fill-blank',
            prompt: 'Thalamo-cortical sleep spindles oscillate between 11 and [BLANK] Hertz.',
            answer: '16',
            acceptableAnswers: ['16', 'sixteen'],
            explanation: 'Spindles oscillate between 11 and 16 Hertz.'
          },
          {
            id: 't2_lq35',
            number: 35,
            type: 'fill-blank',
            prompt: 'Sleep deprivation causes a [BLANK] percent reduction in memory retention.',
            answer: '40',
            acceptableAnswers: ['40', '40%', 'forty', 'forty percent'],
            explanation: 'Results in a 40 percent decrement in retention.'
          },
          {
            id: 't2_lq36',
            number: 36,
            type: 'multiple-choice',
            prompt: 'What role does the triple phase-coupling rhythm fulfill?',
            options: [
              'A. Suppresses involuntary motor muscular spasms',
              'B. Synchronizes neural transfer of memory from hippocampus to neocortex',
              'C. Flushes metabolic amyloid plaques via cerebral spinal fluid',
              'D. Stimulates rapid growth hormone secretion from pituitary glands'
            ],
            answer: 'B',
            explanation: 'The coupling coordinates transfer of memory traces into stable neocortex.'
          },
          {
            id: 't2_lq37',
            number: 37,
            type: 'multiple-choice',
            prompt: 'Which subcortical structure generates "sharp-wave ripples"?',
            options: [
              'A. Amygdala',
              'B. Hippocampus',
              'C. Basal ganglia',
              'D. Cerebellar vermis'
            ],
            answer: 'B',
            explanation: 'Hippocampal sharp-wave ripples.'
          },
          {
            id: 't2_lq38',
            number: 38,
            type: 'multiple-choice',
            prompt: 'How does age affect slow-wave amplitude in older adults?',
            options: [
              'A. Amplitude increases due to heightened neuronal density',
              'B. Amplitude decreases significantly, causing impaired overnight consolidation',
              'C. Frequency shifts upward into the beta wave spectrum',
              'D. No observable alteration occurs across the human lifespan'
            ],
            answer: 'B',
            explanation: 'Finch explains age-related cortical thinning reduces slow-wave amplitude.'
          },
          {
            id: 't2_lq39',
            number: 39,
            type: 'multiple-choice',
            prompt: 'What non-invasive intervention can enhance slow-wave synchrony?',
            options: [
              'A. Targeted auditory closed-loop pink noise stimulation',
              'B. Transcranial optical photon exposure',
              'C. High-intensity magnetic resonance imaging',
              'D. Pre-sleep hyperbaric oxygen chambers'
            ],
            answer: 'A',
            explanation: 'Auditory closed-loop stimulation timed to slow-wave peaks enhances memory.'
          },
          {
            id: 't2_lq40',
            number: 40,
            type: 'multiple-choice',
            prompt: 'What is the primary conclusion of the lecture regarding sleep?',
            options: [
              'A. Sleep is merely a passive state of physiological resting',
              'B. Slow-wave sleep is an active, highly orchestrated computational process for memory reorganization',
              'C. REM dreaming is more essential for factual knowledge than slow-wave sleep',
              'D. Modern humans require less slow-wave sleep than our hunter-gatherer ancestors'
            ],
            answer: 'B',
            explanation: 'Sleep represents active, computational memory consolidation.'
          }
        ]
      }
    ]
  },
  {
    id: 'listening-test-3',
    title: 'Academic Practice Listening Test 3: Marine Fieldwork, Arboretum & Bio-Acoustics',
    durationMinutes: 30,
    totalQuestions: 40,
    sections: [
      {
        id: 't3-sec1',
        sectionNumber: 1,
        title: 'Section 1: Coastal Kayaking Expedition Registration',
        scenario: 'A tourist (Hannah) is registering for a guided sea kayaking expedition with the activity manager (Liam).',
        dialogue: [
          { speaker: 'Liam', text: 'Good morning, Blue Haven Sea Kayak Centre. How may I help you?' },
          { speaker: 'Hannah', text: 'Hi there! I would like to book a spot on the weekend guided coastal kayaking trip.' },
          { speaker: 'Liam', text: 'Splendid. Let me take down your contact details first. What is your full name?' },
          { speaker: 'Hannah', text: 'It is Hannah Abernathy. That is spelled A-B-E-R-N-A-T-H-Y.' },
          { speaker: 'Liam', text: 'Thank you Hannah. And a mobile phone number where we can reach you?' },
          { speaker: 'Hannah', text: 'Yes, it is 07742 889104.' },
          { speaker: 'Liam', text: 'Got it. Which specific weekend are you looking at?' },
          { speaker: 'Hannah', text: 'Saturday the 14th of September.' },
          { speaker: 'Liam', text: 'Perfect. We have our Coastal Wildlife Tour departing at 9:30 AM from the North Pier. The tour duration is three hours.' },
          { speaker: 'Hannah', text: 'That sounds ideal. What equipment is provided?' },
          { speaker: 'Liam', text: 'We provide the double sea kayak, safety buoyancy vest, and waterproof dry bags for your phone and keys. You should bring your own neoprene footwear and a windproof jacket.' },
          { speaker: 'Hannah', text: 'Understood. What is the fee per person?' },
          { speaker: 'Liam', text: 'The regular ticket is 48 pounds, but we offer a student concession discount of 15 percent, bringing it to roughly 40 pounds with valid ID.' },
          { speaker: 'Hannah', text: 'I have my university card. Is lunch included?' },
          { speaker: 'Liam', text: 'We stop midway at Seal Rock Cove for hot tea, coffee, and homemade energy flapjacks, which are included in the ticket.' }
        ],
        questions: [
          { id: 't3_lq1', number: 1, type: 'fill', prompt: 'Applicant Surname: [1] ______', answer: 'Abernathy', acceptable: ['abernathy', 'a-b-e-r-n-a-t-h-y'] },
          { id: 't3_lq2', number: 2, type: 'fill', prompt: 'Contact Telephone Number: [2] ______', answer: '07742 889104', acceptable: ['07742 889104', '07742889104'] },
          { id: 't3_lq3', number: 3, type: 'fill', prompt: 'Date of Expedition: Saturday [3] ______ September', answer: '14th', acceptable: ['14', '14th', '14 september'] },
          { id: 't3_lq4', number: 4, type: 'fill', prompt: 'Departure Location: [4] ______ Pier at 9:30 AM', answer: 'North', acceptable: ['north', 'north pier'] },
          { id: 't3_lq5', number: 5, type: 'fill', prompt: 'Total Duration of Tour: [5] ______ hours', answer: '3', acceptable: ['3', 'three', '3 hours', 'three hours'] },
          { id: 't3_lq6', number: 6, type: 'fill', prompt: 'Equipment Provided: Double kayak, buoyancy vest, and [6] ______ dry bags', answer: 'waterproof', acceptable: ['waterproof', 'waterproof dry bags'] },
          { id: 't3_lq7', number: 7, type: 'fill', prompt: 'Required Personal Gear: Windproof jacket and [7] ______ footwear', answer: 'neoprene', acceptable: ['neoprene'] },
          { id: 't3_lq8', number: 8, type: 'mcq', prompt: 'What percentage discount is offered for students with valid ID?', options: ['10 percent', '15 percent', '20 percent', '25 percent'], answer: 'B' },
          { id: 't3_lq9', number: 9, type: 'mcq', prompt: 'Where does the mid-tour rest break take place?', options: ['Pebble Bay', 'Seal Rock Cove', 'Lighthouse Point', 'Blackwood Beach'], answer: 'B' },
          { id: 't3_lq10', number: 10, type: 'mcq', prompt: 'What refreshments are provided during the stop?', options: ['Sandwiches and fresh fruit', 'Hot drinks and energy flapjacks', 'Seafood chowder and bread', 'Mineral water and energy bars'], answer: 'B' }
        ]
      },
      {
        id: 't3-sec2',
        sectionNumber: 2,
        title: 'Section 2: Royal Maritime Botanical Arboretum Guide',
        scenario: 'A botanical park warden (David) is giving an orientation talk to visiting members of the public.',
        dialogue: [
          { speaker: 'David', text: 'Welcome everyone to the Royal Maritime Botanical Arboretum. My name is David, and I am the head arboricultural officer here.' },
          { speaker: 'David', text: 'Our estate encompasses over 120 hectares of coastal woodlands founded in 1884 by maritime botanist Sir Arthur Pendelton.' },
          { speaker: 'David', text: 'Before you explore our marked nature trails, let me orient you to key facilities on our grounds.' },
          { speaker: 'David', text: 'The Main Visitor Center where we are standing offers restrooms, lockers, and audio guide rentals at the reception desk.' },
          { speaker: 'David', text: 'Directly north across the central lawn is the Victorian Palm Glasshouse, constructed with cast iron ribs and housing over 600 rare subtropical epiphytes.' },
          { speaker: 'David', text: 'To the east along the gravel avenue lies the Medicinal Herb Sanctuary. Here you will find historical apothecary plants used in 19th-century naval medicine.' },
          { speaker: 'David', text: 'To the west, following the stream through the ravine, you will reach the Ancient Redwood Grove, featuring giant sequoias over 130 years old.' },
          { speaker: 'David', text: 'Please be aware that our estate closes promptly at 6:00 PM in summer. Free guided canopy boardwalk tours depart every hour on the half-hour.' },
          { speaker: 'David', text: 'Finally, we ask all visitors to stay strictly on marked boardwalks to protect fragile woodland mycorrhizal fungal networks in the forest soil.' }
        ],
        questions: [
          { id: 't3_lq11', number: 11, type: 'fill', prompt: 'Total Area of Estate: [11] ______ hectares', answer: '120', acceptable: ['120', '120 hectares', 'one hundred twenty'] },
          { id: 't3_lq12', number: 12, type: 'fill', prompt: 'Founding Year: [12] ______', answer: '1884', acceptable: ['1884'] },
          { id: 't3_lq13', number: 13, type: 'fill', prompt: 'Founder: Sir Arthur [13] ______', answer: 'Pendelton', acceptable: ['pendelton'] },
          { id: 't3_lq14', number: 14, type: 'fill', prompt: 'Victorian Palm Glasshouse location: Directly [14] ______ of main lawn', answer: 'north', acceptable: ['north', 'directly north'] },
          { id: 't3_lq15', number: 15, type: 'fill', prompt: 'Number of rare subtropical epiphytes in Palm House: Over [15] ______', answer: '600', acceptable: ['600', 'six hundred'] },
          { id: 't3_lq16', number: 16, type: 'fill', prompt: 'Medicinal Herb Sanctuary houses plants used in [16] ______ naval medicine', answer: '19th-century', acceptable: ['19th-century', '19th century', 'nineteenth century'] },
          { id: 't3_lq17', number: 17, type: 'fill', prompt: 'Ancient Redwood Grove is located to the [17] ______ across the ravine', answer: 'west', acceptable: ['west'] },
          { id: 't3_lq18', number: 18, type: 'mcq', prompt: 'At what time does the arboretum estate close during summer?', options: ['5:00 PM', '5:30 PM', '6:00 PM', '7:00 PM'], answer: 'C' },
          { id: 't3_lq19', number: 19, type: 'mcq', prompt: 'How frequently do the guided canopy boardwalk tours depart?', options: ['Every 15 minutes', 'Every 30 minutes', 'Every hour on the half-hour', 'Twice daily'], answer: 'C' },
          { id: 't3_lq20', number: 20, type: 'mcq', prompt: 'Why are visitors required to remain on the boardwalks?', options: ['To avoid dangerous wildlife', 'To prevent erosion on steep slopes', 'To protect fragile soil mycorrhizal networks', 'To comply with timber logging laws'], answer: 'C' }
        ]
      },
      {
        id: 't3-sec3',
        sectionNumber: 3,
        title: 'Section 3: Marine Biology Fieldwork Presentation Review',
        scenario: 'Two undergraduate students (Emma and Marcus) meet with their marine biology tutor (Dr. Alistair) to critique their coastal survey methodology.',
        dialogue: [
          { speaker: 'Dr. Alistair', text: 'Come in Emma, Marcus. Take a seat. I have reviewed your draft proposal for the intertidal rocky shore survey at St. Anne Bay.' },
          { speaker: 'Emma', text: 'Thank you Dr. Alistair. We were somewhat concerned about our sampling quadrat dimensions.' },
          { speaker: 'Marcus', text: 'Yes, we originally considered using 0.25 square meter quadrats, but the barnacle density was extraordinarily high.' },
          { speaker: 'Dr. Alistair', text: 'In rocky littoral zones with dense micro-invertebrate populations, a 50 by 50 centimeter frame subdivided into a 10 by 10 grid gives superior statistical power. That yields 100 intercept points per quadrat.' },
          { speaker: 'Emma', text: 'That will make estimating percentage cover much more reliable! What about our transect line spacing?' },
          { speaker: 'Marcus', text: 'We established five parallel belt transects spaced 20 meters apart running perpendicular from the high spring tide line down to the low water mark.' },
          { speaker: 'Dr. Alistair', text: 'That spacing is scientifically rigorous. However, how are you accounting for variations in tidal exposure periods?' },
          { speaker: 'Emma', text: 'We synchronized our sampling window with the extreme spring low tide at 06:45 on Thursday morning, allowing us roughly two hours of working time on the exposed eulittoral reef.' },
          { speaker: 'Dr. Alistair', text: 'Excellent foresight. For your statistical comparison between sheltered and exposed shores, make sure to employ the Shannon-Wiener Diversity Index alongside the Simpson Dominance Index in your R code.' }
        ],
        questions: [
          { id: 't3_lq21', number: 21, type: 'fill', prompt: 'Location of Survey: Intertidal rocky shore at St. [21] ______ Bay', answer: 'Anne', acceptable: ['anne', 'anne bay'] },
          { id: 't3_lq22', number: 22, type: 'fill', prompt: 'Recommended quadrat dimensions: [22] ______ by 50 centimeters', answer: '50', acceptable: ['50', '50cm', '50 centimeters'] },
          { id: 't3_lq23', number: 23, type: 'fill', prompt: 'Subdivided internal grid contains [23] ______ intercept points', answer: '100', acceptable: ['100', 'one hundred'] },
          { id: 't3_lq24', number: 24, type: 'fill', prompt: 'Number of parallel belt transects: [24] ______', answer: '5', acceptable: ['5', 'five'] },
          { id: 't3_lq25', number: 25, type: 'fill', prompt: 'Spacing between transect lines: [25] ______ meters', answer: '20', acceptable: ['20', '20m', 'twenty'] },
          { id: 't3_lq26', number: 26, type: 'fill', prompt: 'Transect direction: Perpendicular from high spring tide to [26] ______ water mark', answer: 'low', acceptable: ['low', 'low water'] },
          { id: 't3_lq27', number: 27, type: 'fill', prompt: 'Extreme spring low tide occurs at 06:45 on [27] ______ morning', answer: 'Thursday', acceptable: ['thursday'] },
          { id: 't3_lq28', number: 28, type: 'mcq', prompt: 'How long is the students planned sampling window during low tide?', options: ['One hour', 'Two hours', 'Three hours', 'Four hours'], answer: 'B' },
          { id: 't3_lq29', number: 29, type: 'mcq', prompt: 'Which statistical index did Dr. Alistair recommend for calculating biodiversity?', options: ['Pearson Correlation Index', 'Shannon-Wiener Diversity Index', 'Student t-test Variance', 'Mantel Spatial Matrix'], answer: 'B' },
          { id: 't3_lq30', number: 30, type: 'mcq', prompt: 'What software environment will the students use for statistical analysis?', options: ['Python SciPy', 'R code', 'SPSS Statistics', 'MATLAB Marine'], answer: 'B' }
        ]
      },
      {
        id: 't3-sec4',
        sectionNumber: 4,
        title: 'Section 4: Academic Lecture on Marine Cetacean Echolocation & Acoustic Noise',
        scenario: 'Professor Eleanor gives a lecture on the biomechanics of odontocete echolocation and the impacts of anthropogenic maritime noise.',
        dialogue: [
          { speaker: 'Professor Eleanor', text: 'Good morning ladies and gentlemen. Today we continue our module on sensory marine ecology by examining odontocete echolocation.' },
          { speaker: 'Professor Eleanor', text: 'Odontocetes—or toothed cetaceans including dolphins, porpoises, and sperm whales—have evolved sophisticated biological sonar systems to navigate and hunt in turbid or aphotic ocean waters.' },
          { speaker: 'Professor Eleanor', text: 'The acoustic generation apparatus is situated in the upper respiratory tract immediately beneath the blowhole. High-frequency acoustic clicks are produced when pressurized air passes between specialized muscular tissues called phonic lips, or the monkey muzzle.' },
          { speaker: 'Professor Eleanor', text: 'These ultrasonic impulses—which can exceed frequencies of 130 kilohertz in harbour porpoises—are then channeled forward into the melon. The melon is an elliptical lipid-rich organ situated in the forehead that acts as an acoustic lens, refracting and focusing sound waves into a directional forward beam.' },
          { speaker: 'Professor Eleanor', text: 'When the focused acoustic pulse strikes prey—such as a squid or fish—an acoustic echo reflects back toward the cetacean. Crucially, the returning echo is not captured by external ears. Instead, it enters through fat-filled acoustic channels located within the lower mandible, or jawbone.' },
          { speaker: 'Professor Eleanor', text: 'This acoustic fat conducts sound directly to the tympanoperiotic bone complex in the middle ear, where the auditory nerve transmits neural impulses to the cerebral cortex.' },
          { speaker: 'Professor Eleanor', text: 'Tragically, this exquisitely calibrated sensory modality is increasingly compromised by anthropogenic ocean noise. Commercial container shipping, naval active low-frequency sonar, and marine seismic airgun surveys produce ambient acoustic energy exceeding 200 decibels.' },
          { speaker: 'Professor Eleanor', text: 'Such pervasive acoustic masking degrades cetacean echolocation ranges from several kilometers down to merely dozens of meters, contributing to chronic stress, acoustic trauma, foraging disruption, and mass stranding events.' }
        ],
        questions: [
          { id: 't3_lq31', number: 31, type: 'fill', prompt: 'Odontocete classification encompasses dolphins, porpoises, and [31] ______ whales', answer: 'sperm', acceptable: ['sperm', 'sperm whales'] },
          { id: 't3_lq32', number: 32, type: 'fill', prompt: 'Acoustic generation tissue in respiratory tract is called [32] ______ lips', answer: 'phonic', acceptable: ['phonic', 'phonic lips'] },
          { id: 't3_lq33', number: 33, type: 'fill', prompt: 'Harbour porpoise clicks can exceed [33] ______ kilohertz', answer: '130', acceptable: ['130', '130 khz', 'one hundred thirty'] },
          { id: 't3_lq34', number: 34, type: 'fill', prompt: 'The forehead organ that focuses the sound beam is known as the [34] ______', answer: 'melon', acceptable: ['melon'] },
          { id: 't3_lq35', number: 35, type: 'fill', prompt: 'The melon functions physically as an acoustic [35] ______', answer: 'lens', acceptable: ['lens'] },
          { id: 't3_lq36', number: 36, type: 'fill', prompt: 'Returning echoes are received through fat channels in the lower [36] ______', answer: 'mandible', acceptable: ['mandible', 'jawbone', 'jaw'] },
          { id: 't3_lq37', number: 37, type: 'fill', prompt: 'Sound is conducted to the tympanoperiotic complex in the [37] ______ ear', answer: 'middle', acceptable: ['middle', 'middle ear'] },
          { id: 't3_lq38', number: 38, type: 'mcq', prompt: 'What sound pressure levels can naval sonar and seismic airguns produce in the ocean?', options: ['Over 100 decibels', 'Over 150 decibels', 'Over 200 decibels', 'Over 300 decibels'], answer: 'C' },
          { id: 't3_lq39', number: 39, type: 'mcq', prompt: 'How severely does anthropogenic acoustic masking reduce echolocation detection range?', options: ['By 5 percent', 'From kilometers down to dozens of meters', 'Only within shallow rivers', 'It has no measurable effect'], answer: 'B' },
          { id: 't3_lq40', number: 40, type: 'mcq', prompt: 'What severe ecological consequence is directly linked to chronic acoustic trauma?', options: ['Accelerated tooth decay', 'Mass stranding events', 'Loss of dorsal fins', 'Excessive migration rates'], answer: 'B' }
        ]
      }
    ]
  },
  {
    id: 'listening-test-4',
    title: 'Academic Practice Listening Test 4: Campus Services, Geothermal Energy & AI Ethics',
    durationMinutes: 30,
    totalQuestions: 40,
    sections: [
      {
        id: 't4-sec1',
        sectionNumber: 1,
        title: 'Section 1: University Accommodation Maintenance Request',
        scenario: 'An international graduate student (Carlos) submits a residential maintenance request to the housing estates manager (Brenda).',
        dialogue: [
          { speaker: 'Brenda', text: 'Good morning, University Estate Residences maintenance desk. Brenda speaking.' },
          { speaker: 'Carlos', text: 'Hello Brenda. I am calling to report a couple of plumbing and electrical issues in my postgraduate studio.' },
          { speaker: 'Brenda', text: 'Certainly. May I have your full surname and room identifier?' },
          { speaker: 'Carlos', text: 'Yes, it is Carlos Montenegro. M-O-N-T-E-N-E-G-R-O.' },
          { speaker: 'Brenda', text: 'And your accommodation block?' },
          { speaker: 'Carlos', text: 'I am in Oakridge Hall, Block C, Room 314.' },
          { speaker: 'Brenda', text: 'Oakridge Block C, 314. What are the specific problems you are experiencing?' },
          { speaker: 'Carlos', text: 'First, the bathroom sink faucet has a continuous dripping leak that does not shut off completely.' },
          { speaker: 'Carlos', text: 'Second, the magnetic digital keycard lock on my front door fails to register intermittently, flashing red multiple times.' },
          { speaker: 'Brenda', text: 'Understood. A leaking sink tap is classed as Category B priority, meaning an engineer will visit within 24 hours. The malfunctioning door lock is Category A emergency access.' },
          { speaker: 'Carlos', text: 'That is reassuring. Will I need to remain in the apartment during the repair?' },
          { speaker: 'Brenda', text: 'Not necessarily. You can authorize master key entry on your tenant portal, or our duty technician Marcus can arrive tomorrow morning between 9:00 AM and 11:00 AM.' },
          { speaker: 'Carlos', text: 'Tomorrow morning between 9:00 AM and 11:00 AM suits me perfectly.' }
        ],
        questions: [
          { id: 't4_lq1', number: 1, type: 'fill', prompt: 'Student Surname: [1] ______', answer: 'Montenegro', acceptable: ['montenegro'] },
          { id: 't4_lq2', number: 2, type: 'fill', prompt: 'Residence Hall: [2] ______ Hall', answer: 'Oakridge', acceptable: ['oakridge', 'oakridge hall'] },
          { id: 't4_lq3', number: 3, type: 'fill', prompt: 'Building Block: Block [3] ______', answer: 'C', acceptable: ['c', 'block c'] },
          { id: 't4_lq4', number: 4, type: 'fill', prompt: 'Room Number: [4] ______', answer: '314', acceptable: ['314'] },
          { id: 't4_lq5', number: 5, type: 'fill', prompt: 'First Issue: Continuous dripping leak in bathroom sink [5] ______', answer: 'faucet', acceptable: ['faucet', 'tap'] },
          { id: 't4_lq6', number: 6, type: 'fill', prompt: 'Second Issue: Malfunctioning magnetic digital [6] ______ lock', answer: 'keycard', acceptable: ['keycard', 'key card'] },
          { id: 't4_lq7', number: 7, type: 'fill', prompt: 'Keycard indicator light flashes [7] ______ repeatedly', answer: 'red', acceptable: ['red'] },
          { id: 't4_lq8', number: 8, type: 'mcq', prompt: 'How is the door lock issue classified in terms of repair urgency?', options: ['Category C Routine', 'Category B 24-Hour', 'Category A Emergency Access', 'Non-urgent assessment'], answer: 'C' },
          { id: 't4_lq9', number: 9, type: 'mcq', prompt: 'Name of the duty maintenance technician assigned:', options: ['Liam', 'Julian', 'Marcus', 'David'], answer: 'C' },
          { id: 't4_lq10', number: 10, type: 'mcq', prompt: 'What time window did Carlos select for technician arrival tomorrow?', options: ['8:00 AM to 10:00 AM', '9:00 AM to 11:00 AM', '1:00 PM to 3:00 PM', 'After 5:00 PM'], answer: 'B' }
        ]
      },
      {
        id: 't4-sec2',
        sectionNumber: 2,
        title: 'Section 2: High-Performance Computing Laboratory Orientation',
        scenario: 'A systems administrator (Julian) introduces new postgraduate researchers to the campus computing supercluster.',
        dialogue: [
          { speaker: 'Julian', text: 'Good afternoon researchers and welcome to the Turing Advanced Computing Facility.' },
          { speaker: 'Julian', text: 'Our high-performance cluster consists of 256 interconnected dual-GPU compute nodes delivering over 4.2 petaflops of aggregate processing power.' },
          { speaker: 'Julian', text: 'Before your lab accounts are initialized, there are several operational rules you must observe.' },
          { speaker: 'Julian', text: 'First, all batch computing workloads must be submitted through our SLURM queue scheduler. Direct execution on login head nodes is strictly prohibited.' },
          { speaker: 'Julian', text: 'Second, user home directory storage is capped at 50 gigabytes for scripts and config files. Large experimental datasets must reside on the high-speed NVMe scratch storage tier located at slash scratch.' },
          { speaker: 'Julian', text: 'Please note that files on the scratch tier are automatically purged after 30 days of inactivity, so preserve critical final results to the archival tape system.' },
          { speaker: 'Julian', text: 'Our cluster undergoes weekly scheduled maintenance every Tuesday between 02:00 and 06:00 UTC, during which all running jobs are paused.' },
          { speaker: 'Julian', text: 'For technical help with compiling CUDA drivers or containerizing PyTorch models in Singularity, our helpdesk runs drop-in office hours every Thursday afternoon in Room 108.' }
        ],
        questions: [
          { id: 't4_lq11', number: 11, type: 'fill', prompt: 'Facility Name: Turing Advanced [11] ______ Facility', answer: 'Computing', acceptable: ['computing'] },
          { id: 't4_lq12', number: 12, type: 'fill', prompt: 'Total Compute Nodes in Supercluster: [12] ______', answer: '256', acceptable: ['256', 'two hundred fifty-six'] },
          { id: 't4_lq13', number: 13, type: 'fill', prompt: 'Aggregate computational performance: 4.2 [13] ______', answer: 'petaflops', acceptable: ['petaflops'] },
          { id: 't4_lq14', number: 14, type: 'fill', prompt: 'Batch workloads must be submitted through the [14] ______ scheduler', answer: 'SLURM', acceptable: ['slurm', 'slurm queue'] },
          { id: 't4_lq15', number: 15, type: 'fill', prompt: 'User home directory storage quota is [15] ______ gigabytes', answer: '50', acceptable: ['50', '50gb', 'fifty'] },
          { id: 't4_lq16', number: 16, type: 'fill', prompt: 'Large experimental datasets must reside on high-speed [16] ______ scratch tier', answer: 'NVMe', acceptable: ['nvme'] },
          { id: 't4_lq17', number: 17, type: 'fill', prompt: 'Scratch storage files are purged after [17] ______ days of inactivity', answer: '30', acceptable: ['30', 'thirty'] },
          { id: 't4_lq18', number: 18, type: 'mcq', prompt: 'On which day does weekly cluster maintenance take place?', options: ['Monday', 'Tuesday', 'Thursday', 'Saturday'], answer: 'B' },
          { id: 't4_lq19', number: 19, type: 'mcq', prompt: 'What software containerization framework is supported by the facility?', options: ['Docker Cloud', 'Singularity', 'Kubernetes Pods', 'VMWare Fusion'], answer: 'B' },
          { id: 't4_lq20', number: 20, type: 'mcq', prompt: 'Where are Thursday drop-in helpdesk hours hosted?', options: ['Server Hall 4', 'Library Cafe', 'Room 108', 'Auditorium B'], answer: 'C' }
        ]
      },
      {
        id: 't4-sec3',
        sectionNumber: 3,
        title: 'Section 3: Enhanced Geothermal Systems Seminar',
        scenario: 'Two engineering students (Tara and Oliver) consult with their faculty advisor (Professor Chen) on their geothermal plant design.',
        dialogue: [
          { speaker: 'Professor Chen', text: 'Good morning Tara, Oliver. Let us examine your engineering design for the Enhanced Geothermal System plant.' },
          { speaker: 'Tara', text: 'Thank you Professor Chen. Our project models a closed-loop binary cycle power plant utilizing deep crystalline granite.' },
          { speaker: 'Oliver', text: 'We targeted an operational drilling depth of 4.5 kilometers, where rock temperatures reach roughly 220 degrees Celsius.' },
          { speaker: 'Professor Chen', text: 'Granite at that depth has very low natural permeability. How do you propose creating the subsurface heat exchange fracture network?' },
          { speaker: 'Tara', text: 'We opted for hydraulic stimulation using high-pressure chilled water to expand preexisting shear fractures, rather than explosive fracturing.' },
          { speaker: 'Oliver', text: 'To mitigate risks of induced seismicity, our monitoring architecture deploys a network of 12 borehole seismometers surrounding the injection perimeter.' },
          { speaker: 'Professor Chen', text: 'Very prudent. In Basel and Pohang, improper seismic monitoring triggered micro-earthquakes that led to project cancellations.' },
          { speaker: 'Tara', text: 'In our secondary power loop, instead of boiling water into steam, we selected isobutane as the organic working fluid because it vaporizes at a much lower temperature.' },
          { speaker: 'Professor Chen', text: 'Isobutane is an efficient choice for an Organic Rankine Cycle. Ensure you incorporate thermal parasitic load estimates for your high-pressure circulation pump in your final energy balance sheet.' }
        ],
        questions: [
          { id: 't4_lq21', number: 21, type: 'fill', prompt: 'Target subterranean rock type: Deep crystalline [21] ______', answer: 'granite', acceptable: ['granite'] },
          { id: 't4_lq22', number: 22, type: 'fill', prompt: 'Target drilling depth: [22] ______ kilometers', answer: '4.5', acceptable: ['4.5', '4.5km', 'four point five'] },
          { id: 't4_lq23', number: 23, type: 'fill', prompt: 'Subsurface rock temperature at depth reaches [23] ______ degrees Celsius', answer: '220', acceptable: ['220', 'two hundred twenty'] },
          { id: 't4_lq24', number: 24, type: 'fill', prompt: 'Fracture stimulation medium: High-pressure chilled [24] ______', answer: 'water', acceptable: ['water'] },
          { id: 't4_lq25', number: 25, type: 'fill', prompt: 'Number of borehole seismometers deployed: [25] ______', answer: '12', acceptable: ['12', 'twelve'] },
          { id: 't4_lq26', number: 26, type: 'fill', prompt: 'Seismometers are positioned to prevent induced [26] ______', answer: 'seismicity', acceptable: ['seismicity', 'earthquakes'] },
          { id: 't4_lq27', number: 27, type: 'fill', prompt: 'Secondary cycle working fluid: [27] ______', answer: 'isobutane', acceptable: ['isobutane'] },
          { id: 't4_lq28', number: 28, type: 'mcq', prompt: 'Why was isobutane chosen over water for the secondary power cycle?', options: ['It does not corrode turbine blades', 'It vaporizes at a significantly lower temperature', 'It is non-flammable in atmospheric air', 'It can be recycled without pumps'], answer: 'B' },
          { id: 't4_lq29', number: 29, type: 'mcq', prompt: 'What thermodynamic cycle is utilized in the secondary binary loop?', options: ['Carnot Cycle', 'Diesel Thermal Cycle', 'Organic Rankine Cycle', 'Brayton Gas Cycle'], answer: 'C' },
          { id: 't4_lq30', number: 30, type: 'mcq', prompt: 'What component did Professor Chen advise accounting for in parasitic load calculations?', options: ['The central cooling tower fans', 'The high-pressure circulation pump', 'The borehole telemetry laser', 'The turbine generator bearings'], answer: 'B' }
        ]
      },
      {
        id: 't4-sec4',
        sectionNumber: 4,
        title: 'Section 4: Academic Lecture on Cognitive Robotics & Human-Machine Symbiosis',
        scenario: 'Dr. Beatrice Vance delivers a university lecture on bio-inspired cognitive robotics and soft actuation systems.',
        dialogue: [
          { speaker: 'Dr. Beatrice Vance', text: 'Good morning students. Today we explore the cutting edge of cognitive robotics, specifically focusing on the transition from rigid electromechanical manipulators to compliant soft robotics.' },
          { speaker: 'Dr. Beatrice Vance', text: 'For six decades, industrial robotics was defined by heavy steel articulated arms driven by servomotors and harmonic gearboxes. While capable of sub-millimeter positional repeatability, rigid robots pose acute safety hazards when operating alongside human workers.' },
          { speaker: 'Dr. Beatrice Vance', text: 'Soft robotics departs radically from this paradigm by taking biomimetic inspiration from non-skeletal invertebrates, such as the octopus tentacle and mammalian muscular hydrostats.' },
          { speaker: 'Dr. Beatrice Vance', text: 'Instead of rigid aluminum linkages, soft actuators are constructed from hyperelastic silicone elastomers and pneumatic artificial muscles. By pressurizing patterned microfluidic internal chambers with air, these flexible appendages can bend, twist, and elongate with infinite kinematic degrees of freedom.' },
          { speaker: 'Dr. Beatrice Vance', text: 'For sensing, rather than utilizing fragile external cameras, soft robots embed distributed conductive liquid metal circuits—such as gallium-indium alloys—directly within the elastomer skin. When the actuator deforms or contacts an object, electrical resistance shifts proportionally, providing continuous proprioceptive feedback regarding shape, strain, and contact pressure.' },
          { speaker: 'Dr. Beatrice Vance', text: 'Controlling such continuous-body deformation is computationally intractable using classical inverse kinematic trigonometry. Instead, modern soft roboticists employ reinforcement learning neural networks trained in high-fidelity physics simulators.' },
          { speaker: 'Dr. Beatrice Vance', text: 'These adaptive neural controllers allow soft robotic grippers to grasp fragile agricultural produce—such as ripe strawberries—or assist surgeons in minimally invasive endoscopic cardiac procedures without damaging delicate surrounding anatomical tissues.' }
        ],
        questions: [
          { id: 't4_lq31', number: 31, type: 'fill', prompt: 'Traditional industrial robots were driven by servomotors and harmonic [31] ______', answer: 'gearboxes', acceptable: ['gearboxes', 'gears'] },
          { id: 't4_lq32', number: 32, type: 'fill', prompt: 'Soft robotics draws biomimetic inspiration from the [32] ______ tentacle', answer: 'octopus', acceptable: ['octopus'] },
          { id: 't4_lq33', number: 33, type: 'fill', prompt: 'Actuators are manufactured from hyperelastic silicone [33] ______', answer: 'elastomers', acceptable: ['elastomers', 'elastomer'] },
          { id: 't4_lq34', number: 34, type: 'fill', prompt: 'Internal chambers are pressurized using pneumatic artificial [34] ______', answer: 'muscles', acceptable: ['muscles'] },
          { id: 't4_lq35', number: 35, type: 'fill', prompt: 'Distributed sensory circuits utilize liquid gallium-[35] ______ alloys', answer: 'indium', acceptable: ['indium'] },
          { id: 't4_lq36', number: 36, type: 'fill', prompt: 'Sensor feedback measures shape, strain, and contact [36] ______', answer: 'pressure', acceptable: ['pressure'] },
          { id: 't4_lq37', number: 37, type: 'fill', prompt: 'Continuous deformation control is powered by reinforcement [37] ______ neural networks', answer: 'learning', acceptable: ['learning', 'reinforcement learning'] },
          { id: 't4_lq38', number: 38, type: 'mcq', prompt: 'What key limitation did rigid industrial robots have in collaborative environments?', options: ['Inability to lift heavy loads', 'Acute safety hazards when working near humans', 'High electrical power draw', 'Excessive mechanical noise'], answer: 'B' },
          { id: 't4_lq39', number: 39, type: 'mcq', prompt: 'How do liquid metal circuits detect deformation and touch?', options: ['By emitting ultrasound pulses', 'Through measurable shifts in electrical resistance', 'By altering magnetic polarity', 'Using optical fiber illumination'], answer: 'B' },
          { id: 't4_lq40', number: 40, type: 'mcq', prompt: 'Which medical application was highlighted for soft robotic dexterity?', options: ['Bone fracture casting', 'Minimally invasive endoscopic cardiac procedures', 'Emergency ambulance transport', 'Dental impression scanning'], answer: 'B' }
        ]
      }
    ]
  }
];
