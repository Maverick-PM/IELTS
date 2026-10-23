// IELTS Academic Reading Tests Bank
// Contains authentic Academic Reading passages, 40 questions, answer keys, and Band conversion table

export const READING_BAND_TABLE = [
  { min: 39, max: 40, band: 9.0 },
  { min: 37, max: 38, band: 8.5 },
  { min: 35, max: 36, band: 8.0 },
  { min: 33, max: 34, band: 7.5 },
  { min: 30, max: 32, band: 7.0 },
  { min: 27, max: 29, band: 6.5 },
  { min: 23, max: 26, band: 6.0 },
  { min: 19, max: 22, band: 5.5 },
  { min: 15, max: 18, band: 5.0 },
  { min: 13, max: 14, band: 4.5 },
  { min: 10, max: 12, band: 4.0 },
  { min: 0,  max: 9,  band: 3.5 }
];

export function rawToReadingBand(rawScore, totalQuestions = 40) {
  const scaled = totalQuestions > 0 && totalQuestions !== 40 ? Math.round((rawScore / totalQuestions) * 40) : rawScore;
  const score = Math.max(0, Math.min(40, Math.round(scaled)));
  for (const row of READING_BAND_TABLE) {
    if (score >= row.min && score <= row.max) {
      return row.band;
    }
  }
  return 3.0;
}

export const ACADEMIC_READING_TESTS = [
  {
    id: 'reading-test-1',
    title: 'Academic Practice Test 1: Science & Civilization',
    durationMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: 'passage-1',
        title: 'Passage 1: The Evolutionary Origins of Cetacean Echolocation',
        text: `Paragraph A
Cetaceans—whales, dolphins, and porpoises—represent one of the most remarkable evolutionary transitions in vertebrate history. Approximately 50 million years ago, terrestrial artiodactyls (even-toed ungulates) gradually returned to the sea, transitioning from terrestrial quadrupeds to fully aquatic mammals. Among the most complex sensory adaptations that facilitated this aquatic radiation was echolocation: the biological sonar system utilized by odontocetes (toothed whales) to navigate, forage, and communicate in underwater environments where ambient light is severely attenuated or absent.

Paragraph B
Unlike mysticetes (baleen whales), which rely on low-frequency infrasonic vocalizations for long-distance communication, odontocetes developed high-frequency biosonar. Morphological examinations of fossilized crania reveal that this sensory breakthrough was accompanied by profound cranial restructuring, known as cranial telescoping. The maxillae and premaxillae shifted posteriorly over the frontal bones, displacing the external bony nares to the apex of the skull, forming the modern blowhole. Within the nasal passage, a specialized anatomical complex known as the phonic lips (or monkey lips) developed to generate acoustic clicks through high-pressure airflow.

Paragraph C
The acoustic beam produced at the phonic lips is subsequently directed into the melon—a prominent, lipid-rich structure situated in the forehead of toothed whales. Biochemical analyses demonstrate that the acoustic properties of melon lipids vary systematically from the core to the periphery, creating a gradient refractive index. This spatial heterogeneity enables the melon to act as an acoustic lens, focusing the diverging sound waves into a highly directional acoustic beam that penetrates the aquatic medium with minimal energy dissipation.

Paragraph D
When sound pulses encounter submerged targets, the returning echoes are received not through the external auditory meatus, which has become vestigial and filled with cellular debris, but via specialized mandibular fats. These unique acoustic fats line the acoustic window of the hollow lower jawbone, channeling reflected pressure waves directly to the tympanoperiotic bone complex. This arrangement insulates the inner ear from self-generated vocalizations and ambient environmental reverberation, conferring extraordinary spatial discrimination.

Paragraph E
Recent phylogenetic and genomic studies indicate that the evolution of echolocation was driven by concurrent mutations in the Prestin gene, which encodes an essential motor protein in cochlear outer hair cells. Remarkably, molecular convergence has been identified between odontocetes and echolocating microbats, demonstrating that independent evolutionary lineages arrived at homologous molecular and anatomical solutions to the physical constraints of ultrasonic orientation. Understanding these bioacoustic mechanisms offers vital insights into how anthropogenic oceanic noise pollution disrupts cetacean spatial orientation and foraging ecology.`,
        questions: [
          {
            id: 'q1',
            number: 1,
            type: 'tfng', // True / False / Not Given
            prompt: 'Mysticetes and odontocetes evolved identical high-frequency echolocation mechanisms.',
            answer: 'FALSE',
            explanation: 'Paragraph B explicitly notes that unlike mysticetes, which rely on low-frequency infrasonic vocalizations, odontocetes developed high-frequency biosonar.'
          },
          {
            id: 'q2',
            number: 2,
            type: 'tfng',
            prompt: 'Cranial telescoping moved the external bony nares to the top of the skull.',
            answer: 'TRUE',
            explanation: 'Paragraph B states cranial telescoping displaced the external bony nares to the apex of the skull, forming the modern blowhole.'
          },
          {
            id: 'q3',
            number: 3,
            type: 'tfng',
            prompt: 'The lipid composition throughout the melon is completely uniform.',
            answer: 'FALSE',
            explanation: 'Paragraph C states melon lipids vary systematically from core to periphery, creating a gradient refractive index rather than being uniform.'
          },
          {
            id: 'q4',
            number: 4,
            type: 'tfng',
            prompt: 'Odontocetes process incoming echoes primarily through their external ear canals.',
            answer: 'FALSE',
            explanation: 'Paragraph D clarifies that returning echoes are received via mandibular fats lining the lower jawbone, as external auditory canals are vestigial.'
          },
          {
            id: 'q5',
            number: 5,
            type: 'tfng',
            prompt: 'Genetic mutations in the Prestin gene played a critical role in developing high-frequency hearing.',
            answer: 'TRUE',
            explanation: 'Paragraph E states evolution of echolocation was driven by mutations in the Prestin gene encoding cochlear hair cell motor proteins.'
          },
          {
            id: 'q6',
            number: 6,
            type: 'multiple-choice',
            prompt: 'According to Paragraph C, what is the main functional role of the melon?',
            options: [
              'A. To generate pressurized air clicks',
              'B. To act as an acoustic lens that focuses sound waves',
              'C. To protect the inner ear from ocean pressure',
              'D. To absorb vestigial cellular debris'
            ],
            answer: 'B',
            explanation: 'Paragraph C describes the melon acting as an acoustic lens focusing diverging sound waves into a directional beam.'
          },
          {
            id: 'q7',
            number: 7,
            type: 'multiple-choice',
            prompt: 'What did the molecular convergence involving microbats and odontocetes demonstrate?',
            options: [
              'A. Bats and whales share a common aquatic ancestor',
              'B. Independent lineages adopted identical genetic solutions for ultrasound navigation',
              'C. Noise pollution affects bats and dolphins in identical ways',
              'D. Echolocation first evolved on land before moving to the oceans'
            ],
            answer: 'B',
            explanation: 'Paragraph E highlights that independent evolutionary lineages arrived at homologous molecular solutions to physical ultrasonic constraints.'
          },
          {
            id: 'q8',
            number: 8,
            type: 'fill-blank',
            prompt: 'Sound clicks are generated by a specialized nasal complex known as the [BLANK].',
            answer: 'phonic lips',
            acceptableAnswers: ['phonic lips', 'monkey lips'],
            explanation: 'Paragraph B states the phonic lips (or monkey lips) developed within the nasal passage to generate acoustic clicks.'
          },
          {
            id: 'q9',
            number: 9,
            type: 'fill-blank',
            prompt: 'Returning sound waves travel through the lower jawbone directly to the [BLANK] bone complex.',
            answer: 'tympanoperiotic',
            acceptableAnswers: ['tympanoperiotic', 'tympanoperiotic bone'],
            explanation: 'Paragraph D states pressure waves are channeled directly to the tympanoperiotic bone complex.'
          },
          {
            id: 'q10',
            number: 10,
            type: 'fill-blank',
            prompt: 'Anthropogenic [BLANK] poses a direct threat to cetacean spatial navigation.',
            answer: 'noise pollution',
            acceptableAnswers: ['noise pollution', 'oceanic noise pollution'],
            explanation: 'Paragraph E concludes by noting that anthropogenic oceanic noise pollution disrupts cetacean spatial orientation.'
          },
          {
            id: 'q11',
            number: 11,
            type: 'matching-heading',
            prompt: 'Which paragraph explains the physical reception and insulation of returning echoes?',
            answer: 'D',
            explanation: 'Paragraph D describes mandibular fats channeling reflected waves while insulating the inner ear.'
          },
          {
            id: 'q12',
            number: 12,
            type: 'matching-heading',
            prompt: 'Which paragraph focuses on the genetic and evolutionary convergence between different animal species?',
            answer: 'E',
            explanation: 'Paragraph E discusses the Prestin gene and molecular convergence with microbats.'
          },
          {
            id: 'q13',
            number: 13,
            type: 'matching-heading',
            prompt: 'Which paragraph describes the structural focusing of acoustic beams via lipid gradients?',
            answer: 'C',
            explanation: 'Paragraph C details how the melon and its varying lipid gradient focus sound beams.'
          }
        ]
      },
      {
        id: 'passage-2',
        title: 'Passage 2: Urban Microclimates & Biophilic Architecture',
        text: `Paragraph A
The rapid pace of global urbanization has created significant environmental perturbations, the most conspicuous of which is the Urban Heat Island (UHI) effect. Densely built urban centers experience surface and ambient temperatures several degrees Celsius higher than surrounding rural peripheries. This thermal disparity stems from the pervasive replacement of permeable vegetative surfaces with dense, impermeable anthropogenic materials such as asphalt, concrete, and masonry, which possess high thermal mass and solar absorptance. Additionally, waste heat emitted by automotive combustion, industrial HVAC systems, and the geometric trapping of radiation within narrow street canyons exacerbate microclimatic warming.

Paragraph B
To counteract these anthropogenic microclimates, contemporary architectural discourse has increasingly embraced biophilic design—an architectural ethos that integrates natural ecological elements into the built environment to foster psychological wellbeing and climate resilience. Pioneered conceptually by Edward O. Wilson, biophilic architecture transcends cosmetic greening by utilizing living biological systems to perform critical thermo-regulating ecosystem services. Living green walls (vertical greenery systems), intensive and extensive green roofs, and urban bioswales are deployed to remediate thermal extremes through passive biophysical cooling.

Paragraph C
The thermodynamic efficacy of biophilic interventions rests on two primary biophysical mechanisms: shading and evapotranspiration. Solar radiation striking conventional dark bituminous roofs is absorbed and re-radiated as longwave thermal energy. In contrast, vegetative canopies intercept incoming photosynthetic active radiation (PAR). A substantial fraction of this solar flux is converted into latent heat through the phase change of liquid water within plant stomata into vapor—a process known as transpiration. Studies in temperate and subtropical climates indicate that extensive green roofs can reduce peak rooftop surface temperatures by up to 35°C and reduce building cooling energy demand by 15% to 25%.

Paragraph D
Despite their proven energetic benefits, widespread implementation faces technical and economic impediments. Structural loading capacity presents an immediate hurdle in retrofitting older building stocks; saturated soil substrates and mature root systems impose substantial dead loads that exceed historical design margins. Furthermore, improper substrate selection can lead to soil compaction, poor aeration, and stormwater drainage failure. In arid zones, the water demands of vegetative maintenance can contradict municipal conservation objectives unless closed-loop greywater reclamation and drought-resistant xerophilic plant species (such as Sedum varieties) are meticulously integrated.

Paragraph E
Urban planners emphasize that isolated green buildings cannot solve regional microclimatic distress in isolation; municipal governance must adopt connected green infrastructure networks. Ecological corridors that link neighborhood pocket parks, tree-canopied avenues, and green roofs create continuous convective breeze paths. These biological conduits facilitate nocturnal radiative cooling by allowing cool, dense air from peripheral rural zones to displace stagnant warm air in urban cores. Emerging smart-city paradigms integrate Internet of Things (IoT) soil moisture sensors and predictive meteorological algorithms to automate subsurface micro-irrigation, maximizing evaporative cooling during acute heatwave events.`,
        questions: [
          {
            id: 'q14',
            number: 14,
            type: 'tfng',
            prompt: 'The UHI effect causes rural areas to be warmer than metropolitan centers.',
            answer: 'FALSE',
            explanation: 'Paragraph A defines UHI as urban centers experiencing temperatures several degrees higher than surrounding rural peripheries.'
          },
          {
            id: 'q15',
            number: 15,
            type: 'tfng',
            prompt: 'Photosynthetic active radiation is converted into latent heat via evapotranspiration.',
            answer: 'TRUE',
            explanation: 'Paragraph C states incoming solar flux is converted into latent heat through the phase change of liquid water in plant stomata.'
          },
          {
            id: 'q16',
            number: 16,
            type: 'tfng',
            prompt: 'All pre-existing building structures can support intensive green roofs without structural reinforcement.',
            answer: 'FALSE',
            explanation: 'Paragraph D notes that dead loads from saturated soil and root systems exceed historical design margins for retrofitting older buildings.'
          },
          {
            id: 'q17',
            number: 17,
            type: 'tfng',
            prompt: 'Xerophilic plants like Sedum require high volumes of municipal freshwater irrigation.',
            answer: 'FALSE',
            explanation: 'Paragraph D describes Sedum as drought-resistant xerophilic species suitable for minimizing water demands.'
          },
          {
            id: 'q18',
            number: 18,
            type: 'multiple-choice',
            prompt: 'What are the two primary biophysical mechanisms behind biophilic cooling in Paragraph C?',
            options: [
              'A. Radiation trapping and convective airflow',
              'B. Shading and evapotranspiration',
              'C. Greywater recycling and soil compaction',
              'D. Acoustic insulation and structural loading'
            ],
            answer: 'B',
            explanation: 'Paragraph C explicitly states: "The thermodynamic efficacy of biophilic interventions rests on two primary biophysical mechanisms: shading and evapotranspiration."'
          },
          {
            id: 'q19',
            number: 19,
            type: 'multiple-choice',
            prompt: 'According to Paragraph E, what is the primary purpose of urban ecological corridors?',
            options: [
              'A. To eliminate the need for mechanical HVAC systems entirely',
              'B. To facilitate nocturnal airflow and displace stagnant warm urban air',
              'C. To provide parking infrastructure for autonomous electric vehicles',
              'D. To increase the load-bearing dead weight of city avenues'
            ],
            answer: 'B',
            explanation: 'Paragraph E states ecological corridors create breeze paths allowing cool air from rural peripheries to displace stagnant warm air in urban cores.'
          },
          {
            id: 'q20',
            number: 20,
            type: 'fill-blank',
            prompt: 'The thermal disparity in cities is caused by materials that possess high thermal mass and high solar [BLANK].',
            answer: 'absorptance',
            acceptableAnswers: ['absorptance', 'solar absorptance'],
            explanation: 'Paragraph A mentions materials like asphalt and concrete possess high thermal mass and solar absorptance.'
          },
          {
            id: 'q21',
            number: 21,
            type: 'fill-blank',
            prompt: 'Green roofs can lower peak rooftop surface temperatures by up to [BLANK] degrees Celsius.',
            answer: '35',
            acceptableAnswers: ['35', '35°C', '35 degrees'],
            explanation: 'Paragraph C states extensive green roofs can reduce peak rooftop surface temperatures by up to 35°C.'
          },
          {
            id: 'q22',
            number: 22,
            type: 'fill-blank',
            prompt: 'In dry regions, buildings can recycle [BLANK] to satisfy vegetative water requirements.',
            answer: 'greywater',
            acceptableAnswers: ['greywater', 'closed-loop greywater'],
            explanation: 'Paragraph D highlights closed-loop greywater reclamation to avoid exhausting municipal supplies.'
          },
          {
            id: 'q23',
            number: 23,
            type: 'fill-blank',
            prompt: 'Modern smart cities integrate IoT soil moisture sensors with [BLANK] algorithms.',
            answer: 'predictive meteorological',
            acceptableAnswers: ['predictive meteorological', 'meteorological'],
            explanation: 'Paragraph E references IoT soil moisture sensors and predictive meteorological algorithms.'
          },
          {
            id: 'q24',
            number: 24,
            type: 'matching-heading',
            prompt: 'Which paragraph discusses obstacles, structural weight constraints, and maintenance trade-offs?',
            answer: 'D',
            explanation: 'Paragraph D details dead loads, soil compaction, and water demands.'
          },
          {
            id: 'q25',
            number: 25,
            type: 'matching-heading',
            prompt: 'Which paragraph outlines city-wide connectivity, convective breeze paths, and smart irrigation?',
            answer: 'E',
            explanation: 'Paragraph E focuses on connected green infrastructure networks and IoT automated irrigation.'
          },
          {
            id: 'q26',
            number: 26,
            type: 'matching-heading',
            prompt: 'Which paragraph defines the Urban Heat Island effect and its architectural origins?',
            answer: 'A',
            explanation: 'Paragraph A establishes the Urban Heat Island effect and its causes.'
          }
        ]
      },
      {
        id: 'passage-3',
        title: 'Passage 3: Neuroplasticity & Adult Second Language Acquisition',
        text: `Paragraph A
For much of the twentieth century, the prevailing dogma in cognitive neuroscience posited that the structural architecture of the adult human brain was essentially immutable. The Critical Period Hypothesis (CPH), popularized by linguist Eric Lenneberg in 1967, claimed that language acquisition was bound to a biologically predetermined maturational window terminating at puberty. According to this model, progressive cerebral lateralization and the loss of neural plasticity after adolescence rendered native-like fluency in a secondary language (L2) virtually unattainable for post-pubescent learners.

Paragraph B
However, advances in non-invasive neuroimaging—such as functional Magnetic Resonance Imaging (fMRI), Diffusion Tensor Imaging (DTI), and magnetoencephalography—have dismantled this rigid determinism. Contemporary research demonstrates that the brain maintains neuroplastic potential throughout the adult lifespan. Adult L2 acquisition induces both functional reorganization and demonstrable structural alterations in cerebral substrates. Specifically, adult bilingualism stimulates macrostructural neuroplasticity, characterized by volumetric increases in grey matter density within the left inferior frontal gyrus (Broca’s area) and bilateral supramarginal gyri.

Paragraph C
Equally significant are the microstructural white matter adaptations observed in adult learners. White matter tracts, comprised of myelinated axonal bundles, serve as high-speed data transmission highways between geographically distant cortical nodes. Longitudinal DTI scans reveal that intensive adult language learning promotes increased fractional anisotropy (an index of axonal myelination and structural integrity) along the left arcuate fasciculus and the superior longitudinal fasciculus. These white matter enhancements correlate directly with accelerated lexical retrieval speeds and enhanced phonological processing efficiency.

Paragraph D
Notwithstanding this lifelong neural adaptability, marked qualitative discrepancies persist between early and late bilingual cognitive profiles. While infant and child learners acquire phonological and grammatical conventions through implicit procedural memory systems without conscious effort, adult learners depend heavily on explicit, declarative memory networks anchored in the medial temporal lobes and hippocampus. Consequently, adult L2 speakers engage greater fronto-striatal cognitive control mechanisms to consciously suppress native language interference (L1 intrusion) during real-time speech production.

Paragraph E
These persistent cognitive demands yield a profound collateral neuroprotective benefit known as the "bilingual advantage." By continuously exercising executive functioning—specifically inhibitory control, task-switching agility, and attentional allocation—adult bilinguals construct greater cognitive reserve. Epidemiological studies demonstrate that lifetime bilingualism delays the clinical onset of neurodegenerative symptoms, such as Alzheimer's disease and vascular dementia, by an average of 4.5 to 5 years compared to matched monolingual cohorts, providing compelling evidence for the enduring clinical relevance of adult linguistic neuroplasticity.`,
        questions: [
          {
            id: 'q27',
            number: 27,
            type: 'tfng',
            prompt: 'The Critical Period Hypothesis suggested that adults could easily achieve native-like fluency in a new language.',
            answer: 'FALSE',
            explanation: 'Paragraph A explains the CPH claimed native-like fluency was virtually unattainable after puberty.'
          },
          {
            id: 'q28',
            number: 28,
            type: 'tfng',
            prompt: 'Modern neuroimaging has proven that the adult brain is completely rigid and incapable of structural change.',
            answer: 'FALSE',
            explanation: 'Paragraph B explicitly states modern neuroimaging has dismantled this dogma and proved ongoing neuroplasticity.'
          },
          {
            id: 'q29',
            number: 29,
            type: 'tfng',
            prompt: 'Adult second language acquisition increases grey matter density in Broca’s area.',
            answer: 'TRUE',
            explanation: 'Paragraph B verifies volumetric increases in grey matter density in the left inferior frontal gyrus (Broca’s area).'
          },
          {
            id: 'q30',
            number: 30,
            type: 'tfng',
            prompt: 'Children rely primarily on explicit declarative memory networks when acquiring language.',
            answer: 'FALSE',
            explanation: 'Paragraph D contrasts children, who rely on implicit procedural systems, with adults who rely on explicit declarative memory.'
          },
          {
            id: 'q31',
            number: 31,
            type: 'tfng',
            prompt: 'Lifetime bilingualism has been shown to delay the onset of dementia symptoms by several years.',
            answer: 'TRUE',
            explanation: 'Paragraph E states lifetime bilingualism delays the clinical onset of symptoms by an average of 4.5 to 5 years.'
          },
          {
            id: 'q32',
            number: 32,
            type: 'multiple-choice',
            prompt: 'What structural component is evaluated by fractional anisotropy in Diffusion Tensor Imaging (Paragraph C)?',
            options: [
              'A. Hippocampal atrophy in senior monolinguals',
              'B. Axonal myelination and white matter tract integrity',
              'C. The rate of blood flow in speech perception',
              'D. Cellular debris in the external auditory meatus'
            ],
            answer: 'B',
            explanation: 'Paragraph C states fractional anisotropy is an index of axonal myelination and structural integrity along white matter tracts.'
          },
          {
            id: 'q33',
            number: 33,
            type: 'multiple-choice',
            prompt: 'Why do adult second language speakers recruit greater fronto-striatal cognitive control mechanisms (Paragraph D)?',
            options: [
              'A. To eliminate the need for white matter myelination',
              'B. To consciously suppress native language interference (L1 intrusion)',
              'C. To mimic childhood procedural memory pathways',
              'D. To reverse age-related hearing decline'
            ],
            answer: 'B',
            explanation: 'Paragraph D states adult speakers engage cognitive control to consciously suppress native language interference during speech production.'
          },
          {
            id: 'q34',
            number: 34,
            type: 'fill-blank',
            prompt: 'The Critical Period Hypothesis was popularized in 1967 by [BLANK].',
            answer: 'Eric Lenneberg',
            acceptableAnswers: ['Eric Lenneberg', 'Lenneberg'],
            explanation: 'Paragraph A attributes the popularization of the CPH in 1967 to linguist Eric Lenneberg.'
          },
          {
            id: 'q35',
            number: 35,
            type: 'fill-blank',
            prompt: 'White matter tracts are composed of [BLANK] axonal bundles that connect cortical nodes.',
            answer: 'myelinated',
            acceptableAnswers: ['myelinated', 'myelinated axonal'],
            explanation: 'Paragraph C describes white matter tracts as comprised of myelinated axonal bundles.'
          },
          {
            id: 'q36',
            number: 36,
            type: 'fill-blank',
            prompt: 'The enduring cognitive protection created by lifelong bilingualism is termed cognitive [BLANK].',
            answer: 'reserve',
            acceptableAnswers: ['reserve', 'cognitive reserve'],
            explanation: 'Paragraph E states adult bilinguals construct greater cognitive reserve.'
          },
          {
            id: 'q37',
            number: 37,
            type: 'fill-blank',
            prompt: 'Bilingualism has been shown to postpone clinical symptoms of Alzheimer’s disease by 4.5 to [BLANK] years.',
            answer: '5',
            acceptableAnswers: ['5', '5 years'],
            explanation: 'Paragraph E cites delays of 4.5 to 5 years compared to monolinguals.'
          },
          {
            id: 'q38',
            number: 38,
            type: 'matching-heading',
            prompt: 'Which paragraph explains the delayed onset of neurodegenerative illnesses through executive cognitive exercise?',
            answer: 'E',
            explanation: 'Paragraph E describes the "bilingual advantage" and postponement of dementia.'
          },
          {
            id: 'q39',
            number: 39,
            type: 'matching-heading',
            prompt: 'Which paragraph outlines the contrast between procedural child learning and declarative adult learning?',
            answer: 'D',
            explanation: 'Paragraph D explains qualitative differences between implicit procedural memory and explicit declarative networks.'
          },
          {
            id: 'q40',
            number: 40,
            type: 'matching-heading',
            prompt: 'Which paragraph covers high-speed white matter tracts and fractional anisotropy improvements?',
            answer: 'C',
            explanation: 'Paragraph C discusses white matter adaptations, the arcuate fasciculus, and lexical retrieval speed.'
          }
        ]
      }
    ]
  }
,
  {
    id: 'reading-test-2',
    title: 'Academic Practice Test 2: History, Cognition & Archaeology',
    durationMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: 't2-p1',
        title: 'Passage 1: The Mechanical Ingenuity of the Antikythera Mechanism',
        text: `Paragraph A
In 1901, sponge divers sheltering from a storm off the barren coast of the Greek island of Antikythera retrieved a heavily encrusted bronze fragment from a sunken Roman cargo galley dating to the first century BCE. Initially dismissed by archaeologists as an incidental navigational astrolabe, radiographic tomography and high-resolution micro-focus computed tomography conducted over a century later revealed an intricate geared apparatus of astonishing complexity: the Antikythera Mechanism. Comprising at least thirty interlocking bronze gearwheels driven by a manual hand crank, the device is now universally recognized as the world's earliest known analog astronomical computer.

Paragraph B
The primary computational architecture of the mechanism relied on differential gearing and epicyclic train assemblies—mechanisms previously assumed to have originated in fourteenth-century medieval clockwork. By rotating the external drive axle, an operator could simulate the non-uniform orbital velocities of celestial bodies. The front display featured a dual concentric dial system exhibiting both the 365-day Egyptian solar calendar, adjustable for leap years via a rotating pegged ring, and the twelve signs of the Babylonian zodiac.

Paragraph C
The rear face of the artifact accommodated two prominent spiral dial registers. The upper register mapped the Metonic cycle: a 235-lunar-month period spanning nineteen solar years, after which the moon's phases recur on identical calendar days. Integrated into this dial was a four-year subsidiary dial tracking the timing of Panhellenic athletic tournaments, including the Olympic Games. The lower spiral register represented the Saros cycle: a 223-month predictive sequence governing solar and lunar eclipses, complete with glyph inscriptions denoting the anticipated hour, magnitude, and planetary alignment of each astronomical event.

Paragraph D
One of the most technically demanding achievements embedded within the gear train was the mechanical modeling of lunar anomaly. Because the Moon follows an elliptical orbit according to Keplerian dynamics, its perceived angular speed varies, accelerating at perigee and decelerating at apogee. The Hellenistic craftsmen reproduced this variable velocity using a pin-and-slot epicyclic gear mechanism. One gear, mounted slightly off-center relative to its paired gear, drove a sliding pin along a slotted spoke, precisely replicating the sinusoidal acceleration curve postulated by the astronomer Hipparchus of Nicaea.

Paragraph E
The existence of such advanced micro-mechanical precision challenges conventional historiography concerning ancient classical engineering. The metallurgical purity of the bronze gears and the microscopic scale of the gear teeth—measuring barely two millimeters in width—point to specialized horological machine tools and an uninterrupted tradition of geared mechanics that vanished during late antiquity. Deciphering the mechanism's 3,400 legible explanatory characters has conclusively demonstrated that the device served not merely as a didactic instructional model, but as a rigorous mathematical tool for celestial navigation, chronological reckoning, and astrological prognostication.`,
        questions: [
          {
            id: 't2_q1',
            number: 1,
            type: 'tfng',
            prompt: 'The Antikythera Mechanism was immediately recognized as an analog computer when first discovered in 1901.',
            answer: 'FALSE',
            explanation: 'Paragraph A states it was initially dismissed as an incidental astrolabe.'
          },
          {
            id: 't2_q2',
            number: 2,
            type: 'tfng',
            prompt: 'The front dial incorporated both the Egyptian solar calendar and the Babylonian zodiac.',
            answer: 'TRUE',
            explanation: 'Paragraph B explicitly notes the dual concentric dial system with both calendars.'
          },
          {
            id: 't2_q3',
            number: 3,
            type: 'tfng',
            prompt: 'The Saros cycle tracked the schedule of the ancient Olympic Games.',
            answer: 'FALSE',
            explanation: 'Paragraph C states the Olympic Games were tracked on the Metonic dial, whereas the Saros cycle governed eclipses.'
          },
          {
            id: 't2_q4',
            number: 4,
            type: 'tfng',
            prompt: 'The pin-and-slot gear assembly simulated the elliptical orbit of the Moon.',
            answer: 'TRUE',
            explanation: 'Paragraph D explains the pin-and-slot mechanism reproduced variable lunar speed.'
          },
          {
            id: 't2_q5',
            number: 5,
            type: 'tfng',
            prompt: 'All parts of the Antikythera Mechanism were manufactured from pure gold alloys.',
            answer: 'FALSE',
            explanation: 'Paragraphs A and E state the gears were constructed of bronze, not gold.'
          },
          {
            id: 't2_q6',
            number: 6,
            type: 'tfng',
            prompt: 'Geared clockwork mechanisms were widely utilized in European cities throughout late antiquity.',
            answer: 'FALSE',
            explanation: 'Paragraph E states this geared mechanical tradition vanished during late antiquity.'
          },
          {
            id: 't2_q7',
            number: 7,
            type: 'fill-blank',
            prompt: 'Initial discovery took place among the wreckage of a Roman [BLANK].',
            answer: 'galley',
            acceptableAnswers: ['galley', 'cargo galley', 'shipwreck'],
            explanation: 'Paragraph A mentions a sunken Roman cargo galley.'
          },
          {
            id: 't2_q8',
            number: 8,
            type: 'fill-blank',
            prompt: 'The device contains at least thirty interlocking [BLANK] gearwheels.',
            answer: 'bronze',
            explanation: 'Paragraph A mentions thirty interlocking bronze gearwheels.'
          },
          {
            id: 't2_q9',
            number: 9,
            type: 'fill-blank',
            prompt: 'The Metonic calendar period encompasses [BLANK] solar years.',
            answer: '19',
            acceptableAnswers: ['19', 'nineteen'],
            explanation: 'Paragraph C states 19 solar years.'
          },
          {
            id: 't2_q10',
            number: 10,
            type: 'fill-blank',
            prompt: 'The lunar velocity calculations were based on theories formulated by [BLANK].',
            answer: 'Hipparchus',
            acceptableAnswers: ['Hipparchus', 'Hipparchus of Nicaea'],
            explanation: 'Paragraph D references the astronomer Hipparchus of Nicaea.'
          },
          {
            id: 't2_q11',
            number: 11,
            type: 'multiple-choice',
            prompt: 'What modern diagnostic method uncovered the interior gearing of the mechanism?',
            options: [
              'A. Radiocarbon isotope dating',
              'B. Micro-focus computed tomography',
              'C. Ultrasonic sound reflection',
              'D. Laser spectrophotometry'
            ],
            answer: 'B',
            explanation: 'Paragraph A cites high-resolution micro-focus computed tomography.'
          },
          {
            id: 't2_q12',
            number: 12,
            type: 'multiple-choice',
            prompt: 'How did operators calibrate the Egyptian calendar ring for leap years?',
            options: [
              'A. Replacing the central axle annually',
              'B. Adjusting a rotating pegged ring backward one day every four years',
              'C. Adding a supplementary thirteenth bronze gear',
              'D. Shifting the front zodiac pointer manually'
            ],
            answer: 'B',
            explanation: 'Paragraph B describes the rotating pegged ring for leap year compensation.'
          },
          {
            id: 't2_q13',
            number: 13,
            type: 'multiple-choice',
            prompt: 'Which information was inscribed onto the Saros eclipse dial?',
            options: [
              'A. Expected hour, magnitude, and planetary alignment of eclipses',
              'B. Names of reigning Roman provincial magistrates',
              'C. Tide heights at Greek Mediterranean harbors',
              'D. Atmospheric humidity forecast indicators'
            ],
            answer: 'A',
            explanation: 'Paragraph C explicitly details glyphs denoting hour, magnitude, and planetary alignment.'
          }
        ]
      },
      {
        id: 't2-p2',
        title: 'Passage 2: Cognitive Biases & Heuristic Traps in Economic Decision-Making',
        text: `Paragraph A
For the greater part of the twentieth century, classical economic theory rested on the axiomatic assumption of Homo economicus: a rational decision-maker who calculates probabilistic expected utility with unclouded objectivity. However, pioneering empirical work in behavioral economics by Daniel Kahneman and Amos Tversky systematically dismantled this paradigm, demonstrating that human economic judgments are routinely distorted by cognitive heuristics—mental shortcuts optimized for evolutionary survival rather than statistical optimality.

Paragraph B
Among the most pervasive of these heuristics is prospect theory, specifically the asymmetry of loss aversion. Extensive psychological experimentation reveals that the disutility experienced from losing a specific sum of money is psychologically twice as acute as the utility derived from acquiring an identical financial gain. This cognitive imbalance leads investors to exhibit risk-averse behavior when facing guaranteed moderate returns, but paradoxically embrace reckless, risk-seeking gambles in desperate efforts to avert realized losses—a behavioral phenomenon known as the disposition effect.

Paragraph C
Equally disruptive to rational capital allocation is the anchoring-and-adjustment heuristic. When estimating an unknown numeric value, individuals unconsciously fixate upon an initial reference figure—even one that is entirely arbitrary or mathematically irrelevant. In commercial negotiations and real estate appraisals, the initial asking price exerts a disproportionate psychological anchor, pulling final valuation estimates toward itself regardless of underlying fundamental metrics.

Paragraph D
Furthermore, confirmation bias and overconfidence bias distort organizational strategic forecasting. Corporate executives frequently exhibit optimism bias, systematically underestimating completion timetables and budget overruns for capital-intensive infrastructure projects—a syndrome termed the planning fallacy. Concurrently, decision-makers actively search for market indicators that corroborate their preconceived hypotheses while dismissing contradictory financial data as anomalous noise.

Paragraph E
To mitigate the systemic fallout of cognitive biases in public welfare, behavioral economists advocate for choice architecture and "nudge" interventions. By restructuring default retirement enrollment options so that employees are automatically enrolled unless they explicitly opt out, policymakers have dramatically elevated national savings rates without curtailing individual freedom of choice. Understanding the cognitive architecture of financial behavior is increasingly recognized as indispensable for regulatory architecture, institutional risk management, and consumer financial protection.`,
        questions: [
          {
            id: 't2_q14',
            number: 14,
            type: 'tfng',
            prompt: 'Classical economic theory assumed that humans always make rational calculations.',
            answer: 'TRUE',
            explanation: 'Paragraph A notes classical economics assumed rational utility calculation.'
          },
          {
            id: 't2_q15',
            number: 15,
            type: 'tfng',
            prompt: 'Psychologically, the emotional pain of a financial loss is equal to the joy of an equivalent gain.',
            answer: 'FALSE',
            explanation: 'Paragraph B states the pain of losing is twice as acute as the joy of gaining.'
          },
          {
            id: 't2_q16',
            number: 16,
            type: 'tfng',
            prompt: 'Anchoring occurs only when the initial reference number is supported by verifiable data.',
            answer: 'FALSE',
            explanation: 'Paragraph C notes people fixate on an initial figure even if entirely arbitrary.'
          },
          {
            id: 't2_q17',
            number: 17,
            type: 'tfng',
            prompt: 'Automatic retirement enrollment increased pension savings while preserving choice.',
            answer: 'TRUE',
            explanation: 'Paragraph E states default enrollment elevated savings without curtailing individual choice.'
          },
          {
            id: 't2_q18',
            number: 18,
            type: 'fill-blank',
            prompt: 'The traditional rational economic model is called Homo [BLANK].',
            answer: 'economicus',
            explanation: 'Paragraph A mentions Homo economicus.'
          },
          {
            id: 't2_q19',
            number: 19,
            type: 'fill-blank',
            prompt: 'Loss aversion was formalized within [BLANK] theory.',
            answer: 'prospect',
            explanation: 'Paragraph B introduces prospect theory.'
          },
          {
            id: 't2_q20',
            number: 20,
            type: 'fill-blank',
            prompt: 'Underestimating construction timetables and budgets is termed the planning [BLANK].',
            answer: 'fallacy',
            explanation: 'Paragraph D names the planning fallacy.'
          },
          {
            id: 't2_q21',
            number: 21,
            type: 'multiple-choice',
            prompt: 'What describes the "disposition effect" among stock market investors?',
            options: [
              'A. Selling winning assets prematurely while holding losing positions too long',
              'B. Diversifying portfolios across uncorrelated commodities',
              'C. Refusing to invest in emerging foreign markets',
              'D. Trading stocks only during morning market openings'
            ],
            answer: 'A',
            explanation: 'Risk aversion for gains coupled with risk-seeking to avoid realizing losses.'
          },
          {
            id: 't2_q22',
            number: 22,
            type: 'multiple-choice',
            prompt: 'How does confirmation bias affect corporate executives?',
            options: [
              'A. They evaluate all statistical evidence with mathematical rigor',
              'B. They emphasize data that supports their beliefs and disregard contradictory signals',
              'C. They defer decisions entirely to artificial intelligence algorithms',
              'D. They rotate leadership personnel on a quarterly schedule'
            ],
            answer: 'B',
            explanation: 'Paragraph D explains executives focus on corroborating data while ignoring anomalies.'
          },
          {
            id: 't2_q23',
            number: 23,
            type: 'multiple-choice',
            prompt: 'What is a core characteristic of behavioral "nudge" interventions?',
            options: [
              'A. Imposing criminal sanctions on financial misconduct',
              'B. Gently altering choice presentation defaults without banning alternatives',
              'C. Subsidizing private banking interest rates',
              'D. Mandating compulsory financial literacy examinations'
            ],
            answer: 'B',
            explanation: 'Paragraph E describes restructuring defaults without curtailing individual freedom.'
          },
          {
            id: 't2_q24',
            number: 24,
            type: 'multiple-choice',
            prompt: 'Who were the pioneering researchers who formulated behavioral economics heuristics?',
            options: [
              'A. Adam Smith and David Ricardo',
              'B. Daniel Kahneman and Amos Tversky',
              'C. John Maynard Keynes and Milton Friedman',
              'D. Joseph Schumpeter and Friedrich Hayek'
            ],
            answer: 'B',
            explanation: 'Paragraph A names Kahneman and Tversky.'
          },
          {
            id: 't2_q25',
            number: 25,
            type: 'fill-blank',
            prompt: 'Heuristics were historically optimized for evolutionary [BLANK].',
            answer: 'survival',
            explanation: 'Paragraph A notes heuristics were optimized for evolutionary survival.'
          },
          {
            id: 't2_q26',
            number: 26,
            type: 'fill-blank',
            prompt: 'Initial reference values in negotiations act as a psychological [BLANK].',
            answer: 'anchor',
            explanation: 'Paragraph C describes the initial figure as a psychological anchor.'
          }
        ]
      },
      {
        id: 't2-p3',
        title: 'Passage 3: The Domestication of Ancient Grains & Neolithic Sedentism',
        text: `Paragraph A
The transition from nomadic foraging to sedentary agrarianism—the Neolithic Revolution—represents the foundational catalyst of human civilization. Commencing approximately 11,500 years ago in the Fertile Crescent of Southwest Asia, early human communities began the systematic cultivation and artificial selection of wild progenitor cereals, notably emmer wheat, einkorn wheat, and two-row barley. This bio-cultural coevolution radically restructured human demographic density, social stratification, and ecological landscapes.

Paragraph B
Wild cereal grasses possess brittle rachises—the central floral stems that shatter spontaneously upon grain maturity, scattering seeds widely across the soil to maximize reproductive dispersal. For ancient hunter-gatherers, harvesting shattering spikes was labor-intensive and inefficient. However, rare spontaneous recessive genetic mutations produce non-shattering rachises, wherein the grain remains firmly anchored to the stem until manually threshed. By preferentially gathering, storing, and sowing spikes that retained their seeds, early foragers applied unconscious selective breeding pressure that permanently transformed wild grasses into domesticated agricultural staples.

Paragraph C
Archaeobotanical analysis of carbonized seeds from sites such as Tell Abu Hureyra and Jericho illustrates that domestication was not an abrupt technological invention, but a protracted evolutionary continuum spanning multiple millennia. Early farmers simultaneously selected for increased seed size, diminished seed coat dormancy, and synchronized germination. Morphological shifts from hulled grains, requiring parching to remove tough protective glumes, to free-threshing naked varieties further reduced the energetic expenditure required for culinary processing.

Paragraph D
The adoption of agrarian food surpluses precipitated profound sociological transformations. Sedentism enabled shorter interbirth intervals, spurring an exponential expansion in human population density. However, paleopathological examinations of early Neolithic skeletal remains reveal that early agriculturalists suffered from diminished average stature, acute dental caries due to carbohydrate-heavy diets, and heightened susceptibility to infectious zoonotic pathologies transmitted via domesticated livestock.

Paragraph E
Moreover, the imperative to manage communal grain silos, allocate irrigated arable acreage, and arbitrate territorial boundary disputes catalyzed the emergence of centralized bureaucratic hierarchies, monumental architecture, and written codices. Far from an unalloyed liberation from wilderness hardships, the domestication of ancient cereals initiated an irreversible ecological pact that bound human societies to perpetual agricultural labor and complex societal governance.`,
        questions: [
          {
            id: 't2_q27',
            number: 27,
            type: 'tfng',
            prompt: 'The Neolithic Revolution originated approximately 11,500 years ago in the Fertile Crescent.',
            answer: 'TRUE',
            explanation: 'Paragraph A cites 11,500 years ago in the Fertile Crescent.'
          },
          {
            id: 't2_q28',
            number: 28,
            type: 'tfng',
            prompt: 'Wild grasses naturally evolved non-shattering rachises to assist human cultivators.',
            answer: 'FALSE',
            explanation: 'Paragraph B explains wild grasses evolved brittle shattering rachises to disperse seeds naturally.'
          },
          {
            id: 't2_q29',
            number: 29,
            type: 'tfng',
            prompt: 'Early agricultural skeletons exhibited fewer dental cavities than hunter-gatherer remains.',
            answer: 'FALSE',
            explanation: 'Paragraph D states agriculturalists suffered acute dental caries due to carbohydrate diets.'
          },
          {
            id: 't2_q30',
            number: 30,
            type: 'tfng',
            prompt: 'Domestication of cereal crops occurred instantaneously within a single generation.',
            answer: 'FALSE',
            explanation: 'Paragraph C states it was a protracted continuum spanning millennia.'
          },
          {
            id: 't2_q31',
            number: 31,
            type: 'fill-blank',
            prompt: 'The central floral stem of cereal grasses is known as the [BLANK].',
            answer: 'rachis',
            acceptableAnswers: ['rachis', 'rachises'],
            explanation: 'Paragraph B names the central floral stem the rachis.'
          },
          {
            id: 't2_q32',
            number: 32,
            type: 'fill-blank',
            prompt: 'Archaeological site exhibiting carbonized ancient grain evidence: Tell [BLANK].',
            answer: 'Abu Hureyra',
            explanation: 'Paragraph C cites Tell Abu Hureyra.'
          },
          {
            id: 't2_q33',
            number: 33,
            type: 'fill-blank',
            prompt: 'Free-threshing grain varieties eliminated the need for manual [BLANK].',
            answer: 'parching',
            explanation: 'Paragraph C notes free-threshing varieties removed the need for parching.'
          },
          {
            id: 't2_q34',
            number: 34,
            type: 'fill-blank',
            prompt: 'Agricultural surpluses encouraged the development of written [BLANK].',
            answer: 'codices',
            acceptableAnswers: ['codices', 'scripts', 'records'],
            explanation: 'Paragraph E references the development of written codices.'
          },
          {
            id: 't2_q35',
            number: 35,
            type: 'multiple-choice',
            prompt: 'Which wild wheat variety was among the earliest domesticated in the Fertile Crescent?',
            options: [
              'A. Emmer wheat',
              'B. Modern durum wheat',
              'C. Spelt hybrid',
              'D. Khorasan wheat'
            ],
            answer: 'A',
            explanation: 'Paragraph A explicitly names emmer wheat, einkorn, and barley.'
          },
          {
            id: 't2_q36',
            number: 36,
            type: 'multiple-choice',
            prompt: 'Why were non-shattering grain spikes advantageous for human harvesters?',
            options: [
              'A. They possessed significantly higher protein density',
              'B. Seeds remained attached to the plant rather than scattering across the soil',
              'C. They were naturally immune to pest fungal blights',
              'D. They required no fresh water to germinate'
            ],
            answer: 'B',
            explanation: 'Seeds remained firmly anchored until threshed, making harvesting efficient.'
          },
          {
            id: 't2_q37',
            number: 37,
            type: 'multiple-choice',
            prompt: 'What was an adverse physical consequence of early agricultural diets?',
            options: [
              'A. Diminished adult stature and higher susceptibility to zoonotic diseases',
              'B. Loss of visual color discernment',
              'C. Accelerated bone fracture calcification',
              'D. Premature cognitive dementia'
            ],
            answer: 'A',
            explanation: 'Paragraph D notes diminished stature and zoonotic pathologies from livestock.'
          },
          {
            id: 't2_q38',
            number: 38,
            type: 'multiple-choice',
            prompt: 'How did sedentism influence female fertility and demographics?',
            options: [
              'A. Slower population growth due to agricultural labor strain',
              'B. Shortened interbirth intervals leading to population expansion',
              'C. Complete equalization of demographic age pyramids',
              'D. Migration of adult populations to coastal habitats'
            ],
            answer: 'B',
            explanation: 'Paragraph D notes shorter interbirth intervals spurred exponential population growth.'
          },
          {
            id: 't2_q39',
            number: 39,
            type: 'multiple-choice',
            prompt: 'What logistical necessity directly catalyzed centralized bureaucracy?',
            options: [
              'A. Managing grain storage silos and arbitrating land boundary disputes',
              'B. Designing religious burial rituals',
              'C. Standardizing bronze coin coinage denominations',
              'D. Organizing long-distance ocean voyages'
            ],
            answer: 'A',
            explanation: 'Paragraph E highlights communal grain silos and land allocation disputes.'
          },
          {
            id: 't2_q40',
            number: 40,
            type: 'multiple-choice',
            prompt: 'What is the overarching conclusion regarding the Neolithic Revolution?',
            options: [
              'A. It was a rapid, effortless victory over nature',
              'B. It was a complex evolutionary pact binding humans to structured societal governance and labor',
              'C. It failed to improve human technology until the Industrial Age',
              'D. It was initiated simultaneously across all seven continents'
            ],
            answer: 'B',
            explanation: 'Paragraph E concludes it was an irreversible ecological pact binding societies to labor and governance.'
          }
        ]
      }
    ]
  },
  {
    id: 'reading-test-3',
    title: 'Academic Practice Test 3: Urban Climatology, Abyssal Vents & Computational Linguistics',
    durationMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: 't3-p1',
        title: 'Passage 1: Urban Microclimates & The Urban Heat Island Phenomenon',
        text: `Paragraph A
Dense urban agglomerations exhibit distinctive microclimatic regimes markedly divergent from their surrounding rural hinterlands. The most systematically documented facet of this variance is the Urban Heat Island (UHI) effect, wherein metropolitan centers experience surface and ambient air temperatures up to 8°C higher than peripheral agricultural zones. This thermal disparity stems from extensive anthropogenic alterations to natural surface energy balances.

Paragraph B
The fundamental etiology of UHI involves the ubiquitous substitution of permeable, vegetative soils with impervious, low-albedo engineering materials such as asphalt, concrete, and masonry. Vegetated landscapes govern surface thermal budgets through evapotranspiration: radiant solar energy drives water evaporation through plant stomata, thereby cooling ambient air via latent heat conversion. Conversely, impervious urban surfaces absorb up to 90% of incoming solar irradiance, sequestering sensible heat during daylight hours and radiating thermal energy slowly into the urban canopy layer throughout the night.

Paragraph C
Moreover, geometric urban morphology exacerbates thermal sequestration. Deep "urban canyons"—narrow thoroughfares flanked by high-rise facades—restrict sky view factors (SVF). A reduced SVF diminishes radiative heat dispersion into the night sky while trapping longwave thermal radiation through repeated inter-building reflections. Simultaneously, tall architectural profiles disrupt regional laminar wind flows, impeding convective ventilation that would otherwise disperse stagnant heat domes.

Paragraph D
Anthropogenic waste heat emissions represent an additional thermal catalyst. Stationary building HVAC systems, refrigeration cycles, industrial manufacturing, and internal combustion vehicles constantly inject artificial thermal calories into the boundary layer. During peak summer heatwaves, air-conditioning compressors operating at maximum threshold can elevate local nocturnal street temperatures by an estimated 1.5°C, triggering an escalatory feedback loop of higher energy demand.

Paragraph E
To mitigate urban thermal stress, contemporary municipal planners are prioritizing nature-based infrastructure interventions. Extensive deployment of vegetative green roofs, retrofitting roadways with permeable porous pavers, and utilizing high-albedo solar-reflective coatings can substantially depress ambient roof temperatures. Computational microclimate simulations demonstrate that increasing urban tree canopy coverage by 20% can lower peak summer air temperatures by 2.2°C, simultaneously diminishing respiratory hospital admissions and mitigating electrical grid brownouts.`,
        questions: [
          {
            id: 't3_q1',
            number: 1,
            type: 'tfng',
            prompt: 'Urban temperatures can be up to 8 degrees Celsius hotter than nearby rural areas.',
            answer: 'TRUE',
            explanation: 'Paragraph A directly mentions temperature disparities up to 8°C.'
          },
          {
            id: 't3_q2',
            number: 2,
            type: 'tfng',
            prompt: 'Impervious paving materials promote cooling through evapotranspiration.',
            answer: 'FALSE',
            explanation: 'Paragraph B explains that vegetated landscapes provide evapotranspiration, whereas impervious materials absorb sensible heat.'
          },
          {
            id: 't3_q3',
            number: 3,
            type: 'tfng',
            prompt: 'Deep urban canyons facilitate rapid nocturnal heat dispersion into space.',
            answer: 'FALSE',
            explanation: 'Paragraph C states that deep urban canyons restrict sky view factors and diminish heat dispersion.'
          },
          {
            id: 't3_q4',
            number: 4,
            type: 'tfng',
            prompt: 'Air conditioning systems can exacerbate nocturnal temperatures during heatwaves.',
            answer: 'TRUE',
            explanation: 'Paragraph D notes HVAC compressors can raise nocturnal street temperatures by 1.5°C.'
          },
          {
            id: 't3_q5',
            number: 5,
            type: 'tfng',
            prompt: 'Green roofs have been banned by municipal planners due to high maintenance costs.',
            answer: 'NOT GIVEN',
            explanation: 'Paragraph E recommends green roofs; no mention of a ban or maintenance costs is made.'
          },
          {
            id: 't3_q6',
            number: 6,
            type: 'mcq',
            prompt: 'What process enables vegetated soils to cool ambient air?',
            options: [
              'Sensible heat sequestration',
              'Latent heat conversion via evapotranspiration',
              'Albedo reduction through solar reflection',
              'Convective turbulence obstruction'
            ],
            answer: 'B',
            explanation: 'Paragraph B attributes cooling to evapotranspiration and latent heat conversion.'
          },
          {
            id: 't3_q7',
            number: 7,
            type: 'mcq',
            prompt: 'The term "sky view factor" (SVF) in Paragraph C refers to:',
            options: [
              'The height of astronomical observation decks',
              'The visible proportion of open sky from ground level',
              'The density of cloud cover over metropolitan hubs',
              'The angle of solar panels on skyscrapers'
            ],
            answer: 'B',
            explanation: 'Narrow canyons flanked by high-rises diminish the view of the sky, trapping radiative heat.'
          },
          {
            id: 't3_q8',
            number: 8,
            type: 'mcq',
            prompt: 'According to microclimate simulations, a 20% increase in tree canopy cover can reduce summer air temperatures by:',
            options: [
              '0.5°C',
              '1.5°C',
              '2.2°C',
              '8.0°C'
            ],
            answer: 'C',
            explanation: 'Paragraph E specifically states a reduction of 2.2°C.'
          },
          {
            id: 't3_q9',
            number: 9,
            type: 'summary',
            prompt: 'Complete the summary: Urban materials absorb sensible heat because they have low ______.',
            answer: 'albedo',
            acceptable: ['albedo', 'low albedo'],
            explanation: 'Paragraph B highlights impervious, low-albedo engineering materials.'
          },
          {
            id: 't3_q10',
            number: 10,
            type: 'summary',
            prompt: 'Tall architectural profiles disrupt ______ wind flows, impeding convective cooling.',
            answer: 'laminar',
            acceptable: ['laminar', 'regional laminar'],
            explanation: 'Paragraph C states tall profiles disrupt regional laminar wind flows.'
          },
          {
            id: 't3_q11',
            number: 11,
            type: 'summary',
            prompt: 'Building air conditioners generate ______ heat emissions during summer periods.',
            answer: 'waste',
            acceptable: ['waste', 'anthropogenic waste', 'anthropogenic'],
            explanation: 'Paragraph D notes anthropogenic waste heat emissions.'
          },
          {
            id: 't3_q12',
            number: 12,
            type: 'summary',
            prompt: 'Retrofitting roads with ______ pavers helps lower urban surface temperatures.',
            answer: 'permeable',
            acceptable: ['permeable', 'porous', 'permeable porous'],
            explanation: 'Paragraph E mentions retrofitting roadways with permeable porous pavers.'
          },
          {
            id: 't3_q13',
            number: 13,
            type: 'summary',
            prompt: 'Lowering urban temperatures can alleviate electrical grid ______.',
            answer: 'brownouts',
            acceptable: ['brownouts', 'blackouts'],
            explanation: 'Paragraph E states mitigating electrical grid brownouts.'
          }
        ]
      },
      {
        id: 't3-p2',
        title: 'Passage 2: Chemosynthesis & Trophic Dynamics in Abyssal Hydrothermal Vents',
        text: `Paragraph A
Until the late 1970s, marine biological dogma asserted that all biological life on Earth was fundamentally tethered to solar irradiance, mediated through photosynthetic primary production. This paradigm dissolved in 1977 when oceanographers aboard the research submersible Alvin surveyed the Galapagos Rift in the eastern Pacific Ocean. At depths exceeding 2,500 meters—in complete, frigid aphotic darkness under hydrostatic pressures surpassing 250 atmospheres—the team encountered exuberant biological oases flourishing around submarine hydrothermal geysers.

Paragraph B
Hydrothermal vents form along tectonic plate divergence boundaries, where seawater percolates into subterranean basalt fissures, becomes superheated by magma chambers up to 400°C, and leaches dissolved minerals before erupting back into the water column. When this acidic, mineral-laden effluent collides with near-freezing deep ocean water (2°C), metal sulfides precipitate out, constructing towering vertical chimneys known colloquially as "black smokers."

Paragraph C
The energetic bedrock of this aphotic ecosystem is chemosynthesis, conducted by lithoautotrophic bacteria and archaea. Lacking sunlight, these microorganisms synthesize organic carbon by oxidizing reduced chemical compounds—chiefly hydrogen sulfide (H2S), methane (CH4), and hydrogen gas. Rather than harnessing photons to split water molecules, these lithotrophs transfer electrons from chemical bonds to oxygen or nitrate, generating ATP and fixing carbon dioxide via the Calvin cycle or the reductive tricarboxylic acid pathway.

Paragraph D
The trophic web sustained by chemosynthetic bacteria demonstrates specialized physiological adaptations. The most striking exemplar is the giant hydrothermal tube worm, Riftia pachyptila, which can attain lengths of two meters. Adult tube worms possess neither mouth, gut, nor digestive tract. Instead, their metabolic survival relies entirely on an organ called a trophosome, which houses billions of endosymbiotic sulfur-oxidizing bacteria. The worm absorbs hydrogen sulfide, oxygen, and carbon dioxide through its vascularized crimson branchial plume and transports these lethal compounds via specialized hemoglobin molecules that bind sulfide without succumbing to cellular toxicity.

Paragraph E
Because tectonic rift zones undergo cyclical seismic eruptions and volcanic disruptions, hydrothermal vents are transient geological structures with operational lifespans often spanning only a few decades. When a vent's geothermal conduit clogs or shifts, the entire chemosynthetic foundation collapses within months. Consequently, vent species have evolved rapid maturation, prolific reproductive outputs, and pelagic larvae capable of drifting across hundreds of kilometers of abyssal seafloor to colonize nascent geothermal discharge sites.`,
        questions: [
          {
            id: 't3_q14',
            number: 14,
            type: 'tfng',
            prompt: 'Prior to 1977, scientists believed all life on Earth relied on photosynthesis.',
            answer: 'TRUE',
            explanation: 'Paragraph A states biological dogma asserted all life was tethered to solar irradiance.'
          },
          {
            id: 't3_q15',
            number: 15,
            type: 'tfng',
            prompt: 'The water erupting from hydrothermal vents can reach temperatures of 400 degrees Celsius.',
            answer: 'TRUE',
            explanation: 'Paragraph B explicitly states effluent is superheated up to 400°C.'
          },
          {
            id: 't3_q16',
            number: 16,
            type: 'tfng',
            prompt: 'Black smoker chimneys are formed primarily from precipitated calcium carbonate.',
            answer: 'FALSE',
            explanation: 'Paragraph B states metal sulfides precipitate to construct the chimneys.'
          },
          {
            id: 't3_q17',
            number: 17,
            type: 'tfng',
            prompt: 'Adult Riftia pachyptila consume bacteria through a specialized microscopic mouth.',
            answer: 'FALSE',
            explanation: 'Paragraph D states adult worms possess neither mouth, gut, nor digestive tract.'
          },
          {
            id: 't3_q18',
            number: 18,
            type: 'tfng',
            prompt: 'Hydrothermal vent ecosystems persist uninterrupted for millions of years at the same location.',
            answer: 'FALSE',
            explanation: 'Paragraph E emphasizes that vents are transient structures lasting only a few decades.'
          },
          {
            id: 't3_q19',
            number: 19,
            type: 'mcq',
            prompt: 'What vessel made the landmark 1977 discovery of hydrothermal vent ecosystems?',
            options: [
              'Challenger Deep',
              'Alvin',
              'Nautilus',
              'Trieste'
            ],
            answer: 'B',
            explanation: 'Paragraph A names the research submersible Alvin.'
          },
          {
            id: 't3_q20',
            number: 20,
            type: 'mcq',
            prompt: 'What organ in the giant tube worm accommodates endosymbiotic bacteria?',
            options: [
              'Branchial plume',
              'Calvin chamber',
              'Trophosome',
              'Hydrostatic mantle'
            ],
            answer: 'C',
            explanation: 'Paragraph D identifies the specialized internal organ as the trophosome.'
          },
          {
            id: 't3_q21',
            number: 21,
            type: 'mcq',
            prompt: 'Chemosynthetic bacteria primarily derive energy by oxidizing:',
            options: [
              'Dissolved solar photons',
              'Hydrogen sulfide and methane',
              'Precipitated calcium carbonate',
              'Basalt silica filaments'
            ],
            answer: 'B',
            explanation: 'Paragraph C specifies hydrogen sulfide, methane, and hydrogen gas.'
          },
          {
            id: 't3_q22',
            number: 22,
            type: 'mcq',
            prompt: 'How do vent species survive when an individual hydrothermal conduit ceases activity?',
            options: [
              'By hibernating inside basalt rock cavities',
              'By shifting their metabolism to photosynthesis',
              'By releasing pelagic larvae that drift to new active sites',
              'By burrowing into tectonic magma chambers'
            ],
            answer: 'C',
            explanation: 'Paragraph E states larvae drift across hundreds of kilometers of abyssal seafloor.'
          },
          {
            id: 't3_q23',
            number: 23,
            type: 'summary',
            prompt: 'Complete the sentence: Organisms that conduct chemosynthesis without sunlight are called ______ bacteria.',
            answer: 'lithoautotrophic',
            acceptable: ['lithoautotrophic', 'lithotrophic'],
            explanation: 'Paragraph C states chemosynthesis is conducted by lithoautotrophic bacteria.'
          },
          {
            id: 't3_q24',
            number: 24,
            type: 'summary',
            prompt: 'The red branchial plume of Riftia pachyptila absorbs gases using specialized ______.',
            answer: 'hemoglobin',
            acceptable: ['hemoglobin', 'haemoglobin'],
            explanation: 'Paragraph D explains gases are transported via specialized hemoglobin molecules.'
          },
          {
            id: 't3_q25',
            number: 25,
            type: 'summary',
            prompt: 'Hydrogen sulfide is usually ______ to standard cellular respiration.',
            answer: 'lethal',
            acceptable: ['lethal', 'toxic'],
            explanation: 'Paragraph D notes hemoglobin binds these lethal compounds safely.'
          },
          {
            id: 't3_q26',
            number: 26,
            type: 'summary',
            prompt: 'Vent organisms exhibit prolific ______ outputs to compensate for ecological transience.',
            answer: 'reproductive',
            acceptable: ['reproductive'],
            explanation: 'Paragraph E mentions rapid maturation and prolific reproductive outputs.'
          }
        ]
      },
      {
        id: 't3-p3',
        title: 'Passage 3: Computational Linguistics & Epigraphic Decipherment',
        text: `Paragraph A
For centuries, the decipherment of lost writing systems from ancient civilizations was regarded as the romantic purview of polymath linguists. Iconic milestones—such as Jean-François Champollion unlocking Egyptian hieroglyphs in 1822 via the bilingual trilingual inscriptions of the Rosetta Stone, or Michael Ventris reading Mycenaean Linear B in 1952 using phonetic grid matrices—hinged on serendipitous cross-linguistic keys and decades of exhaustive philological intuition. Today, epigraphy stands on the precipice of a computational revolution as machine learning algorithms, statistical phonology, and neural combinatorial models are deployed to crack humanity's remaining undeciphered scripts.

Paragraph B
Among the most tantalizing enigmas is the Indus Valley script, inscribed on thousands of steatite stamp seals, pottery shards, and copper tablets excavated from third-millennium BCE Harappan settlements across Pakistan and northwestern India. Comprising between 400 and 600 distinct signs, the script has defied conventional analysis due to two acute limitations: the absence of a multilingual parallel text analogous to the Rosetta Stone, and the extreme brevity of the surviving inscriptions, which average fewer than five characters in length.

Paragraph C
In 2009, a collaborative team of computational neuroscientists led by Rajesh Rao applied conditional entropy algorithms to interrogate whether the Indus inscriptions constituted genuine syntactic language or merely non-linguistic religious emblems. Conditional entropy calculates the mathematical probability of a particular symbol appearing given the sequence of preceding symbols. The researchers discovered that the statistical entropy of Indus symbol sequences closely mirrored spoken natural languages—including Old Tamil, Sanskrit, and English—while deviating sharply from rigid non-linguistic codes (such as DNA sequences) and purely random configurations.

Paragraph D
Contemporary efforts have pivoted toward unsupervised neural decipherment models that treat untranslated scripts as cryptanalytic decipherment challenges. Natural Language Processing (NLP) frameworks mapping semantic vector embeddings in high-dimensional hyperspace allow neural networks to identify latent structural relationships across languages without requiring explicit bilingual dictionaries. If an undeciphered script belongs to an ancestral branch of an established linguistic family, neural models can iteratively align phonetic phonetic transformations based on universal phonological shift constraints, matching consonant clusters and vowel shifts across cognate vocabularies.

Paragraph E
Nevertheless, computational linguists acknowledge that mathematical algorithms alone cannot achieve definitive epigraphic breakthroughs without contextual archaeological grounding. Neural models are acutely vulnerable to overfitting on minuscule corpora, frequently manufacturing mathematically plausible yet historically spurious phonetic values. Validating an algorithmic decipherment ultimately demands material corroboration: predicting previously unseen inscriptions, corroborating toponyms with geographical excavations, or identifying structural syntactic parallels within contemporaneous administrative archives.`,
        questions: [
          {
            id: 't3_q27',
            number: 27,
            type: 'tfng',
            prompt: 'Michael Ventris used the Rosetta Stone to decipher Mycenaean Linear B.',
            answer: 'FALSE',
            explanation: 'Paragraph A states Champollion used the Rosetta Stone for hieroglyphs, whereas Ventris used phonetic grid matrices for Linear B.'
          },
          {
            id: 't3_q28',
            number: 28,
            type: 'tfng',
            prompt: 'The average Indus Valley inscription contains fewer than five characters.',
            answer: 'TRUE',
            explanation: 'Paragraph B explicitly notes the average inscription length is fewer than five characters.'
          },
          {
            id: 't3_q29',
            number: 29,
            type: 'tfng',
            prompt: 'Rajesh Rao found that the entropy of Indus signs was identical to random noise.',
            answer: 'FALSE',
            explanation: 'Paragraph C states entropy mirrored natural languages and deviated sharply from random configurations.'
          },
          {
            id: 't3_q30',
            number: 30,
            type: 'tfng',
            prompt: 'Neural decipherment models require a bilingual dictionary to begin analyzing scripts.',
            answer: 'FALSE',
            explanation: 'Paragraph D states unsupervised models work without requiring explicit bilingual dictionaries.'
          },
          {
            id: 't3_q31',
            number: 31,
            type: 'tfng',
            prompt: 'Computer algorithms can produce misleading decipherments if archaeological context is ignored.',
            answer: 'TRUE',
            explanation: 'Paragraph E warns models can manufacture spurious values without archaeological grounding.'
          },
          {
            id: 't3_q32',
            number: 32,
            type: 'mcq',
            prompt: 'In what year did Champollion decipher Egyptian hieroglyphs?',
            options: [
              '1822',
              '1901',
              '1952',
              '2009'
            ],
            answer: 'A',
            explanation: 'Paragraph A identifies 1822 as the date of Champollion’s decipherment.'
          },
          {
            id: 't3_q33',
            number: 33,
            type: 'mcq',
            prompt: 'Which two major hurdles hinder the decipherment of the Indus script?',
            options: [
              'Damaged bronze tools and complete lack of paper records',
              'The absence of bilingual parallel texts and brief inscriptions',
              'Opposition from local historians and illegible handwriting',
              'The excessive length of documents and changing alphabets'
            ],
            answer: 'B',
            explanation: 'Paragraph B cites the lack of a multilingual text and the brevity of surviving texts.'
          },
          {
            id: 't3_q34',
            number: 34,
            type: 'mcq',
            prompt: 'What mathematical metric did Rao and colleagues use to test the Indus script?',
            options: [
              'Linear regression analysis',
              'Conditional entropy',
              'Cosine vector similarity',
              'Bayesian hypothesis indexing'
            ],
            answer: 'B',
            explanation: 'Paragraph C specifies conditional entropy algorithms.'
          },
          {
            id: 't3_q35',
            number: 35,
            type: 'mcq',
            prompt: 'Paragraph D explains that semantic vector embeddings allow neural networks to identify:',
            options: [
              'The chemical composition of ancient ink',
              'Latent structural relationships across languages',
              'The exact monetary value of trade tablets',
              'The geographic coordinates of lost temples'
            ],
            answer: 'B',
            explanation: 'Paragraph D states vector embeddings identify latent structural relationships across languages.'
          },
          {
            id: 't3_q36',
            number: 36,
            type: 'summary',
            prompt: 'Complete the summary: Linear B was deciphered using phonetic ______ matrices.',
            answer: 'grid',
            acceptable: ['grid'],
            explanation: 'Paragraph A states Ventris used phonetic grid matrices.'
          },
          {
            id: 't3_q37',
            number: 37,
            type: 'summary',
            prompt: 'Harappan inscriptions were etched on steatite stamp ______ and pottery shards.',
            answer: 'seals',
            acceptable: ['seals', 'stamp seals'],
            explanation: 'Paragraph B mentions steatite stamp seals.'
          },
          {
            id: 't3_q38',
            number: 38,
            type: 'summary',
            prompt: 'Conditional entropy measures the ______ of a symbol appearing in a sequence.',
            answer: 'probability',
            acceptable: ['probability', 'mathematical probability'],
            explanation: 'Paragraph C explains it calculates the mathematical probability of a symbol.'
          },
          {
            id: 't3_q39',
            number: 39,
            type: 'summary',
            prompt: 'Overfitting on small datasets can result in ______ phonetic interpretations.',
            answer: 'spurious',
            acceptable: ['spurious', 'historically spurious'],
            explanation: 'Paragraph E warns of manufacturing historically spurious values.'
          },
          {
            id: 't3_q40',
            number: 40,
            type: 'summary',
            prompt: 'True epigraphic decipherment requires confirmation from ______ findings.',
            answer: 'archaeological',
            acceptable: ['archaeological', 'material'],
            explanation: 'Paragraph E stresses the necessity of contextual archaeological grounding.'
          }
        ]
      }
    ]
  },
  {
    id: 'reading-test-4',
    title: 'Academic Practice Test 4: Astrophysics, Aerogels & Epigenetics',
    durationMinutes: 60,
    totalQuestions: 40,
    passages: [
      {
        id: 't4-p1',
        title: 'Passage 1: Gravitational Wave Astronomy & Laser Interferometry',
        text: `Paragraph A
In 1916, Albert Einstein published his landmark General Theory of Relativity, postulating that gravity is not an invisible Newtonian force acting instantaneously across distances, but a manifestation of spacetime curvature warped by mass and energy. Among Einstein's most radical corollaries was the prediction of gravitational waves: infinitesimal ripples in the fabric of spacetime generated by the violent acceleration of massive astrophysical bodies. Einstein himself remained skeptical that humanity would ever possess instruments sensitive enough to detect these disturbances, which distort physical dimensions by less than one-ten-thousandth the diameter of a proton.

Paragraph B
A century later, on September 14, 2015, the Laser Interferometer Gravitational-Wave Observatory (LIGO) achieved the first direct observation of gravitational radiation. The signal, designated GW150914, originated from the cataclysmic inspiral and merger of two stellar-mass black holes roughly 1.3 billion light-years from Earth. In the final fraction of a second before coalescence, the two singularities converted approximately three solar masses of energy into pure gravitational waves, momentarily outshining the optical output of all stars in the observable universe combined.

Paragraph C
LIGO's dual detectors—situated 3,000 kilometers apart in Hanford, Washington, and Livingston, Louisiana—operate as colossal Michelson interferometers. Each installation features two perpendicular vacuum arms four kilometers in length. A high-stability infrared laser beam is split equally down both arms, reflects off pristine 40-kilogram fused silica test mass mirrors suspended by fused-silica ribbons, and recombines at a central photodetector. Under quiescent conditions, returning light waves destructively interfere, yielding total darkness at the output sensor.

Paragraph D
When a gravitational wave sweeps through the apparatus, it differentializes spacetime itself: elongating one four-kilometer arm while compressing the perpendicular arm by a fraction of an attometer (10^-18 meters). This infinitesimal path disparity disturbs the destructive interference, producing a detectable flicker of laser light on the photodiode. To isolate the mirrors from relentless terrestrial environmental noise—including oceanic seismic rumbles, micro-seismic crustal tides, and highway traffic—the test masses are mounted on four-stage quadruple pendulum suspensions enclosed in ultra-high vacuum chambers and monitored by active pneumatic actuators.

Paragraph E
The dawn of gravitational wave astronomy has opened an entirely unclouded observational window onto the universe. While electromagnetic radiation (visible light, X-rays, radio waves) is readily scattered or absorbed by interstellar gas and dense cosmic dust clouds, gravitational waves propagate unimpeded across cosmological distances. Multi-messenger astrophysics—correlating gravitational wave alerts with gamma-ray bursts from colliding neutron stars—now enables scientists to measure the Hubble expansion rate of the universe and decipher the nuclear synthesis of heavy elements such as gold and platinum.`,
        questions: [
          {
            id: 't4_q1',
            number: 1,
            type: 'tfng',
            prompt: 'Einstein was confident that 20th-century technology would easily detect gravitational waves.',
            answer: 'FALSE',
            explanation: 'Paragraph A states Einstein remained skeptical that humanity would ever detect them.'
          },
          {
            id: 't4_q2',
            number: 2,
            type: 'tfng',
            prompt: 'The GW150914 signal was produced by the collision of two black holes.',
            answer: 'TRUE',
            explanation: 'Paragraph B explicitly states the signal came from the merger of two stellar-mass black holes.'
          },
          {
            id: 't4_q3',
            number: 3,
            type: 'tfng',
            prompt: 'LIGO has two observation facilities separated by roughly 3,000 kilometers.',
            answer: 'TRUE',
            explanation: 'Paragraph C notes dual detectors situated 3,000 km apart in Washington and Louisiana.'
          },
          {
            id: 't4_q4',
            number: 4,
            type: 'tfng',
            prompt: 'Under quiescent conditions, recombined laser beams produce bright continuous light at the detector.',
            answer: 'FALSE',
            explanation: 'Paragraph C explains destructive interference yields total darkness at the output sensor.'
          },
          {
            id: 't4_q5',
            number: 5,
            type: 'tfng',
            prompt: 'Gravitational waves are easily blocked by dense interstellar gas clouds.',
            answer: 'FALSE',
            explanation: 'Paragraph E states gravitational waves propagate unimpeded across cosmological distances.'
          },
          {
            id: 't4_q6',
            number: 6,
            type: 'mcq',
            prompt: 'What was the approximate energy converted into gravitational waves in GW150914?',
            options: [
              'One-thousandth of a proton',
              'Three solar masses of energy',
              'Forty kilograms of fused silica',
              'The mass of three thousand Earths'
            ],
            answer: 'B',
            explanation: 'Paragraph B states the collision converted three solar masses of energy.'
          },
          {
            id: 't4_q7',
            number: 7,
            type: 'mcq',
            prompt: 'How long are the perpendicular vacuum arms of each LIGO detector?',
            options: [
              '300 meters',
              '1.3 kilometers',
              '4 kilometers',
              '3,000 kilometers'
            ],
            answer: 'C',
            explanation: 'Paragraph C describes two perpendicular vacuum arms four kilometers in length.'
          },
          {
            id: 't4_q8',
            number: 8,
            type: 'mcq',
            prompt: 'What happens to the perpendicular arms when a gravitational wave traverses LIGO?',
            options: [
              'Both arms expand simultaneously',
              'One arm lengthens while the other compresses',
              'The laser beam is deflected 90 degrees outward',
              'The vacuum chambers lose air pressure'
            ],
            answer: 'B',
            explanation: 'Paragraph D explains it elongates one arm while compressing the perpendicular arm.'
          },
          {
            id: 't4_q9',
            number: 9,
            type: 'summary',
            prompt: 'Complete the summary: Einstein described gravity as the ______ of spacetime.',
            answer: 'curvature',
            acceptable: ['curvature'],
            explanation: 'Paragraph A defines gravity as a manifestation of spacetime curvature.'
          },
          {
            id: 't4_q10',
            number: 10,
            type: 'summary',
            prompt: 'LIGO test mass mirrors are manufactured from fused ______.',
            answer: 'silica',
            acceptable: ['silica'],
            explanation: 'Paragraph C describes mirrors made of fused silica.'
          },
          {
            id: 't4_q11',
            number: 11,
            type: 'summary',
            prompt: 'Mirrors are isolated from seismic noise using a quadruple ______ suspension.',
            answer: 'pendulum',
            acceptable: ['pendulum'],
            explanation: 'Paragraph D mentions four-stage quadruple pendulum suspensions.'
          },
          {
            id: 't4_q12',
            number: 12,
            type: 'summary',
            prompt: 'Correlating gravitational alerts with electromagnetic telescopes is known as ______-messenger astrophysics.',
            answer: 'multi',
            acceptable: ['multi', 'multi-messenger'],
            explanation: 'Paragraph E references multi-messenger astrophysics.'
          },
          {
            id: 't4_q13',
            number: 13,
            type: 'summary',
            prompt: 'Colliding neutron stars create heavy precious elements including ______ and platinum.',
            answer: 'gold',
            acceptable: ['gold'],
            explanation: 'Paragraph E specifies the synthesis of elements such as gold and platinum.'
          }
        ]
      },
      {
        id: 't4-p2',
        title: 'Passage 2: Nanostructured Aerogels & Thermal Insulation Engineering',
        text: `Paragraph A
Aerogels represent one of the most remarkable material triumphs of solid-state chemistry. First synthesized in 1931 by American chemist Samuel Kistler following a wager regarding whether the liquid within a colloidal jelly could be replaced with gas without inducing volume shrinkage, aerogels are synthetic, ultra-porous solid materials characterized by exceedingly low densities and superlative thermal resistance. Consisting of over 95%—and in some formulations upwards of 99.8%—empty air by volume, aerogels are colloquially dubbed "frozen smoke" due to their ethereal, translucent blue appearance resulting from Rayleigh scattering.

Paragraph B
The synthesis of silica aerogels commences via sol-gel polymerization. Silicon alkoxide precursors (such as tetraethyl orthosilicate) undergo hydrolysis and condensation in an alcohol solvent, generating a cross-linked colloidal three-dimensional network of nanoscale silica particles holding solvent inside microscopic pores. The critical technical hurdle resides in evacuating the pore fluid. If the wet gel is dried conventionally through ambient evaporation, intense capillary surface tension forces developing at the retreating liquid-vapor meniscus inevitably cause the delicate nanoporous silica scaffolding to crumble into dense xerogel powder.

Paragraph C
To circumvent capillary collapse, Kistler pioneered supercritical fluid extraction. By placing the wet gel inside a high-pressure autoclave and elevating both temperature and pressure beyond the thermodynamic critical point of the solvent, the boundary distinction between liquid and gaseous phases ceases to exist. At this supercritical state, surface tension vanishes entirely. The supercritical fluid can then be slowly depressurized and vented, leaving the pristine nanostructured silica framework completely intact.

Paragraph D
The miraculous thermal insulative efficacy of aerogels is governed by three interconnected physical phenomena: solid conduction suppression, gaseous conduction obstruction, and radiative transfer minimization. Because solid silica represents barely 1% of the material's total volume, solid-state heat conduction is restricted to highly tortuous, labyrinthine paths along delicate silica nanostrands. Furthermore, the average pore diameter within silica aerogels measures approximately 20 to 40 nanometers—substantially smaller than the 70-nanometer mean free path of ambient air molecules at standard pressure. Consequently, gas molecules trapped inside cannot collide effectively with each other to transfer kinetic energy—a thermodynamic condition known as the Knudsen effect.

Paragraph E
Historically restricted to niche aerospace applications—such as insulating Mars exploration rovers against sub-zero Martian nights and capturing high-velocity cometary stardust aboard NASA's Stardust spacecraft—aerogel composites are now penetrating mainstream civil engineering. Contemporary industrial formulations embed flexible glass-fiber blankets with aerogel slurry, generating thin, hydrophobic insulative wraps that provide triple the thermal R-value of conventional fiberglass while dramatically curtailing the space requirements of architectural insulation.`,
        questions: [
          {
            id: 't4_q14',
            number: 14,
            type: 'tfng',
            prompt: 'Aerogels were first invented by Samuel Kistler in 1931.',
            answer: 'TRUE',
            explanation: 'Paragraph A attributes the invention to Samuel Kistler in 1931.'
          },
          {
            id: 't4_q15',
            number: 15,
            type: 'tfng',
            prompt: 'Aerogels can consist of more than 99% empty air by volume.',
            answer: 'TRUE',
            explanation: 'Paragraph A notes some formulations comprise upwards of 99.8% empty air.'
          },
          {
            id: 't4_q16',
            number: 16,
            type: 'tfng',
            prompt: 'Drying a wet gel with ordinary air evaporation produces an ultra-strong aerogel.',
            answer: 'FALSE',
            explanation: 'Paragraph B explains conventional evaporation crumbles the gel into dense xerogel powder.'
          },
          {
            id: 't4_q17',
            number: 17,
            type: 'tfng',
            prompt: 'At a solvents supercritical point, capillary surface tension is completely eliminated.',
            answer: 'TRUE',
            explanation: 'Paragraph C states that at the supercritical state, surface tension vanishes entirely.'
          },
          {
            id: 't4_q18',
            number: 18,
            type: 'tfng',
            prompt: 'Aerogel pore sizes are significantly larger than the mean free path of air molecules.',
            answer: 'FALSE',
            explanation: 'Paragraph D states pore diameter (20-40nm) is smaller than the 70nm mean free path.'
          },
          {
            id: 't4_q19',
            number: 19,
            type: 'mcq',
            prompt: 'Why do aerogels exhibit a translucent blue tint nicknamed "frozen smoke"?',
            options: [
              'Silicon dye pigments added during synthesis',
              'Rayleigh scattering of light within nanopores',
              'Residual alcohol trapped inside the structure',
              'Thermal radiation emission'
            ],
            answer: 'B',
            explanation: 'Paragraph A links the blue appearance to Rayleigh scattering.'
          },
          {
            id: 't4_q20',
            number: 20,
            type: 'mcq',
            prompt: 'The Knudsen effect in aerogels refers to:',
            options: [
              'The collapse of silica walls under high pressure',
              'Gas molecules being unable to collide due to pore confinement',
              'The evaporation of solvent through ambient venting',
              'The absorption of high-velocity cometary particles'
            ],
            answer: 'B',
            explanation: 'Paragraph D explains gas molecules cannot collide effectively because pores are smaller than their mean free path.'
          },
          {
            id: 't4_q21',
            number: 21,
            type: 'mcq',
            prompt: 'What equipment is used to achieve supercritical fluid extraction?',
            options: [
              'Centrifugal separator',
              'High-pressure autoclave',
              'Vacuum cryogenic condenser',
              'Micro-focus CT scanner'
            ],
            answer: 'B',
            explanation: 'Paragraph C specifies placing the wet gel inside a high-pressure autoclave.'
          },
          {
            id: 't4_q22',
            number: 22,
            type: 'mcq',
            prompt: 'Which NASA mission utilized aerogels to trap cometary particles?',
            options: [
              'Apollo 11',
              'Voyager 2',
              'Stardust',
              'Curiosity'
            ],
            answer: 'C',
            explanation: 'Paragraph E explicitly mentions NASAs Stardust spacecraft.'
          },
          {
            id: 't4_q23',
            number: 23,
            type: 'summary',
            prompt: 'Complete the sentence: Replacing liquid with gas without shrinkage created ______ aerogels.',
            answer: 'silica',
            acceptable: ['silica', 'synthetic'],
            explanation: 'Paragraph A and B discuss synthetic silica aerogels.'
          },
          {
            id: 't4_q24',
            number: 24,
            type: 'summary',
            prompt: 'Conventional drying results in dense ______ powder due to capillary collapse.',
            answer: 'xerogel',
            acceptable: ['xerogel'],
            explanation: 'Paragraph B states the scaffolding crumbles into dense xerogel powder.'
          },
          {
            id: 't4_q25',
            number: 25,
            type: 'summary',
            prompt: 'Solid thermal conduction is minimized because solid strands follow ______ paths.',
            answer: 'tortuous',
            acceptable: ['tortuous', 'labyrinthine'],
            explanation: 'Paragraph D mentions tortuous, labyrinthine paths along silica nanostrands.'
          },
          {
            id: 't4_q26',
            number: 26,
            type: 'summary',
            prompt: 'Modern civil engineering insulates buildings using aerogel embedded in flexible ______ blankets.',
            answer: 'glass-fiber',
            acceptable: ['glass-fiber', 'fiber', 'glass fiber'],
            explanation: 'Paragraph E states formulations embed flexible glass-fiber blankets.'
          }
        ]
      },
      {
        id: 't4-p3',
        title: 'Passage 3: Epigenetic Modification & Transgenerational Inheritance',
        text: `Paragraph A
For more than half a century following Watson and Crick's elucidation of the DNA double helix in 1953, the central dogma of genetics presumed that biological heredity was dictated exclusively by the fixed sequence of adenine, thymine, cytosine, and guanine nucleotides. Phenotypic variation was viewed as the deterministic output of this static linear code, with alterations occurring solely through rare, stochastic genetic mutations spanning evolutionary epochs. In recent decades, however, the burgeoning frontier of epigenetics has radically transformed developmental biology, revealing that gene expression can be dynamically modulated by external environmental stimuli without altering the underlying DNA sequence.

Paragraph B
Epigenetic regulation functions through biochemical tags affixed to DNA and chromatin proteins. The most thoroughly characterized mechanism is DNA methylation, wherein enzymatic DNA methyltransferases transfer a methyl group (-CH3) onto the fifth carbon position of cytosine bases within CpG dinucleotide islands. Dense hypermethylation in promoter regions typically recruits repressor proteins that prevent transcription factors from binding, thereby silencing gene expression. Conversely, histone modifications alter the packing density of nucleosomes. Acetylation of lysine residues on histone tails by histone acetyltransferases neutralizes positive electrostatic charges, relaxing chromatin into an open, transcriptionally accessible conformation known as euchromatin.

Paragraph C
The pivotal breakthrough in modern epigenetics is the realization that epigenetic modifications are responsive to external environmental lifestyle factors. Nutritional intake, chronic psychological stress, ambient environmental toxins, and circadian disruptions can induce lasting epigenetic recalibrations. In pioneering epidemiological investigations examining the Dutch Hunger Winter of 1944–1945—a devastating six-month famine imposed on the western Netherlands—researchers discovered that individuals conceived during the famine exhibited persistent hypomethylation of the IGF2 (Insulin-like Growth Factor 2) gene six decades later, correlating directly with elevated lifetime incidences of obesity, type 2 diabetes, and cardiovascular disorders.

Paragraph D
Even more provocative is the emerging evidence for transgenerational epigenetic inheritance: the transmission of epigenetic marks across generations via the germline. Classical mammalian biology posited that during gametogenesis and immediately post-fertilization, the genome undergoes comprehensive epigenetic reprogramming—a biological erasure event purging parental methylation marks to restore totipotency to the nascent zygote. Modern sequencing technologies, however, reveal that a substantial fraction of loci—notably retrotransposons and imprinted regions—escape this wave of epigenetic erasure, passing intact environmental memory from parents to offspring and even grand-offspring.

Paragraph E
The implications of epigenetic plasticity extend deeply into preventative medicine and oncology. Unlike hard-coded genetic mutations, epigenetic aberrations are fundamentally reversible. Pharmacological agents classified as "epidrugs"—such as DNA methyltransferase inhibitors and histone deacetylase inhibitors—have received regulatory approval to re-activate silenced tumor suppressor genes in hematological malignancies. As our mechanistic comprehension of the epigenome matures, biology is transcending the antiquated dichotomy of nature versus nurture, recognizing that environmental experiences physically sculpt our functional genetic destiny.`,
        questions: [
          {
            id: 't4_q27',
            number: 27,
            type: 'tfng',
            prompt: 'Epigenetic mechanisms alter the fundamental sequence of DNA nucleotides.',
            answer: 'FALSE',
            explanation: 'Paragraph A explains gene expression is modulated without altering the underlying DNA sequence.'
          },
          {
            id: 't4_q28',
            number: 28,
            type: 'tfng',
            prompt: 'Hypermethylation of promoter regions generally silences gene expression.',
            answer: 'TRUE',
            explanation: 'Paragraph B states hypermethylation in promoter regions prevents transcription factor binding and silences genes.'
          },
          {
            id: 't4_q29',
            number: 29,
            type: 'tfng',
            prompt: 'Histone acetylation compresses chromatin into a permanently closed structure.',
            answer: 'FALSE',
            explanation: 'Paragraph B explains acetylation relaxes chromatin into an open conformation (euchromatin).'
          },
          {
            id: 't4_q30',
            number: 30,
            type: 'tfng',
            prompt: 'Individuals conceived during the Dutch Hunger Winter showed altered methylation decades later.',
            answer: 'TRUE',
            explanation: 'Paragraph C states individuals showed persistent hypomethylation six decades later.'
          },
          {
            id: 't4_q31',
            number: 31,
            type: 'tfng',
            prompt: 'All epigenetic marks are completely erased during zygote formation with zero exceptions.',
            answer: 'FALSE',
            explanation: 'Paragraph D notes a substantial fraction of loci escape epigenetic erasure.'
          },
          {
            id: 't4_q32',
            number: 32,
            type: 'mcq',
            prompt: 'What chemical group is transferred onto cytosine bases during DNA methylation?',
            options: [
              'A phosphate group (-PO4)',
              'A methyl group (-CH3)',
              'An acetyl group (-COCH3)',
              'A hydroxyl group (-OH)'
            ],
            answer: 'B',
            explanation: 'Paragraph B explicitly specifies a methyl group (-CH3).'
          },
          {
            id: 't4_q33',
            number: 33,
            type: 'mcq',
            prompt: 'What gene demonstrated persistent hypomethylation in survivors of the Dutch Hunger Winter?',
            options: [
              'BRCA1',
              'IGF2',
              'TP53',
              'FOXP2'
            ],
            answer: 'B',
            explanation: 'Paragraph C names the IGF2 (Insulin-like Growth Factor 2) gene.'
          },
          {
            id: 't4_q34',
            number: 34,
            type: 'mcq',
            prompt: 'The term "euchromatin" refers to:',
            options: [
              'Damaged DNA awaiting cellular repair',
              'Chromatin in an open, transcriptionally accessible state',
              'Completely methylated inactive sex chromosomes',
              'Artificial synthetic nucleotides'
            ],
            answer: 'B',
            explanation: 'Paragraph B defines euchromatin as relaxed, transcriptionally accessible chromatin.'
          },
          {
            id: 't4_q35',
            number: 35,
            type: 'mcq',
            prompt: 'Why are epidrugs particularly attractive in cancer therapy?',
            options: [
              'They permanently remove all histones from healthy cells',
              'Epigenetic changes are reversible, allowing reactivation of tumor suppressors',
              'They completely alter the patient’s chromosomal structure',
              'They act as optical markers for surgical excision'
            ],
            answer: 'B',
            explanation: 'Paragraph E highlights that epigenetic aberrations are fundamentally reversible.'
          },
          {
            id: 't4_q36',
            number: 36,
            type: 'summary',
            prompt: 'Complete the summary: Watson and Crick elucidated the structure of the DNA double ______ in 1953.',
            answer: 'helix',
            acceptable: ['helix'],
            explanation: 'Paragraph A mentions the DNA double helix.'
          },
          {
            id: 't4_q37',
            number: 37,
            type: 'summary',
            prompt: 'Methyl groups are transferred onto cytosine bases in CpG ______ islands.',
            answer: 'dinucleotide',
            acceptable: ['dinucleotide'],
            explanation: 'Paragraph B specifies CpG dinucleotide islands.'
          },
          {
            id: 't4_q38',
            number: 38,
            type: 'summary',
            prompt: 'Dutch Hunger Winter studies revealed long-term risks of cardiovascular disease and ______.',
            answer: 'diabetes',
            acceptable: ['diabetes', 'type 2 diabetes', 'obesity'],
            explanation: 'Paragraph C mentions obesity, type 2 diabetes, and cardiovascular disorders.'
          },
          {
            id: 't4_q39',
            number: 39,
            type: 'summary',
            prompt: 'Certain genetic loci escape epigenetic ______ during early embryonic development.',
            answer: 'erasure',
            acceptable: ['erasure', 'reprogramming'],
            explanation: 'Paragraph D states loci escape this wave of epigenetic erasure.'
          },
          {
            id: 't4_q40',
            number: 40,
            type: 'summary',
            prompt: 'Pharmaceutical treatments targeting the epigenome are known as ______.',
            answer: 'epidrugs',
            acceptable: ['epidrugs'],
            explanation: 'Paragraph E references pharmacological agents classified as epidrugs.'
          }
        ]
      }
    ]
  }
];
