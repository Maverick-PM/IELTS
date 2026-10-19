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

export function rawToReadingBand(rawScore) {
  const score = Math.max(0, Math.min(40, Math.round(rawScore)));
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
];
