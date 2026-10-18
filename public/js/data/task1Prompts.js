// IELTS Academic Task 1 Offline Prompt Bank
// Contains 10+ visual data prompts with fully responsive inline vector charts

export const TASK_1_PROMPTS = [
  {
    id: 'task1-01',
    title: 'Renewable vs Fossil Fuel Energy Consumption (2010–2024)',
    chartType: 'bar',
    promptText: 'The bar chart below shows the consumption of renewable energy and fossil fuels across four industrialized nations in 2010 and 2024, measured in Terawatt-hours (TWh).\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Renewable energy saw substantial increases in Germany and the UK between 2010 and 2024.',
      'Fossil fuel consumption dropped significantly in the UK from 450 TWh to 210 TWh.',
      'Country D maintained high fossil fuel dependence throughout the 14-year period.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="60" y1="190" x2="480" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      
      <!-- Y-axis labels -->
      <text x="50" y="30" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">500</text>
      <text x="50" y="70" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">375</text>
      <text x="50" y="110" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">250</text>
      <text x="50" y="150" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">125</text>
      <text x="50" y="190" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">0</text>
      
      <!-- Bars Germany -->
      <rect x="80" y="130" width="18" height="60" fill="#38bdf8" rx="2"><title>Germany 2010 Renewables: 180</title></rect>
      <rect x="100" y="60" width="18" height="130" fill="#0284c7" rx="2"><title>Germany 2024 Renewables: 390</title></rect>
      <rect x="125" y="50" width="18" height="140" fill="#f43f5e" rx="2"><title>Germany 2010 Fossil: 420</title></rect>
      <rect x="145" y="100" width="18" height="90" fill="#be123c" rx="2"><title>Germany 2024 Fossil: 270</title></rect>
      <text x="120" y="208" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">Germany</text>
      
      <!-- Bars UK -->
      <rect x="180" y="150" width="18" height="40" fill="#38bdf8" rx="2"/>
      <rect x="200" y="75" width="18" height="115" fill="#0284c7" rx="2"/>
      <rect x="225" y="40" width="18" height="150" fill="#f43f5e" rx="2"/>
      <rect x="245" y="120" width="18" height="70" fill="#be123c" rx="2"/>
      <text x="220" y="208" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">United Kingdom</text>

      <!-- Bars Japan -->
      <rect x="280" y="160" width="18" height="30" fill="#38bdf8" rx="2"/>
      <rect x="300" y="110" width="18" height="80" fill="#0284c7" rx="2"/>
      <rect x="325" y="45" width="18" height="145" fill="#f43f5e" rx="2"/>
      <rect x="345" y="70" width="18" height="120" fill="#be123c" rx="2"/>
      <text x="320" y="208" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">Japan</text>

      <!-- Bars Canada -->
      <rect x="380" y="100" width="18" height="90" fill="#38bdf8" rx="2"/>
      <rect x="400" y="55" width="18" height="135" fill="#0284c7" rx="2"/>
      <rect x="425" y="90" width="18" height="100" fill="#f43f5e" rx="2"/>
      <rect x="445" y="115" width="18" height="75" fill="#be123c" rx="2"/>
      <text x="420" y="208" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">Canada</text>

      <!-- Legend -->
      <rect x="70" y="222" width="10" height="10" fill="#38bdf8"/>
      <text x="85" y="231" fill="var(--text-muted, #94a3b8)" font-size="9">Renewable 2010</text>
      <rect x="175" y="222" width="10" height="10" fill="#0284c7"/>
      <text x="190" y="231" fill="var(--text-muted, #94a3b8)" font-size="9">Renewable 2024</text>
      <rect x="280" y="222" width="10" height="10" fill="#f43f5e"/>
      <text x="295" y="231" fill="var(--text-muted, #94a3b8)" font-size="9">Fossil 2010</text>
      <rect x="375" y="222" width="10" height="10" fill="#be123c"/>
      <text x="390" y="231" fill="var(--text-muted, #94a3b8)" font-size="9">Fossil 2024</text>
    </svg>`
  },
  {
    id: 'task1-02',
    title: 'Global Internet Penetration Rates by Region (2000–2025)',
    chartType: 'line',
    promptText: 'The line graph illustrates the percentage of the population accessing the internet across five continents between 2000 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'North America and Europe showed the highest rates throughout, surpassing 90% by 2025.',
      'Africa experienced the steepest growth rate, rising from under 5% in 2000 to over 50% in 2025.',
      'All regions exhibited steady upward trajectories with no declines.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="50" y1="20" x2="50" y2="190" stroke="var(--border, #475569)"/>
      <line x1="50" y1="190" x2="480" y2="190" stroke="var(--border, #475569)"/>
      
      <!-- Percent Labels -->
      <text x="42" y="30" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">100%</text>
      <text x="42" y="70" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">75%</text>
      <text x="42" y="110" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">50%</text>
      <text x="42" y="150" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">25%</text>
      <text x="42" y="190" fill="var(--text-muted, #94a3b8)" font-size="10" text-anchor="end">0%</text>

      <!-- Years -->
      <text x="60" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">2000</text>
      <text x="160" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">2008</text>
      <text x="260" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">2015</text>
      <text x="360" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">2020</text>
      <text x="450" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">2025</text>

      <!-- North America Line (Blue) -->
      <path d="M60,120 Q160,80 260,50 T460,32" fill="none" stroke="#38bdf8" stroke-width="3"/>
      <!-- Europe Line (Green) -->
      <path d="M60,135 Q160,100 260,65 T460,40" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <!-- Asia Line (Amber) -->
      <path d="M60,175 Q160,140 260,105 T460,65" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
      <!-- Africa Line (Rose) -->
      <path d="M60,185 Q160,170 260,145 T460,105" fill="none" stroke="#f43f5e" stroke-width="2.5"/>

      <!-- Legend -->
      <circle cx="80" cy="225" r="4" fill="#38bdf8"/><text x="88" y="228" fill="var(--text-muted, #94a3b8)" font-size="9">N. America</text>
      <circle cx="170" cy="225" r="4" fill="#10b981"/><text x="178" y="228" fill="var(--text-muted, #94a3b8)" font-size="9">Europe</text>
      <circle cx="260" cy="225" r="4" fill="#f59e0b"/><text x="268" y="228" fill="var(--text-muted, #94a3b8)" font-size="9">Asia</text>
      <circle cx="340" cy="225" r="4" fill="#f43f5e"/><text x="348" y="228" fill="var(--text-muted, #94a3b8)" font-size="9">Africa</text>
    </svg>`
  },
  {
    id: 'task1-03',
    title: 'Household Water Usage in Australia (2004 vs 2024)',
    chartType: 'pie',
    promptText: 'The pie charts compare the proportion of water used for different residential purposes in Australian households in 2004 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Bathroom and garden usage accounted for more than half of all water consumed in both years.',
      'Garden irrigation water dropped significantly from 35% in 2004 to 20% in 2024.',
      'Water used for washing machines and kitchens rose moderately.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      
      <!-- 2004 Pie -->
      <g transform="translate(140, 110)">
        <circle r="70" fill="#38bdf8"/>
        <!-- Slices simulation -->
        <path d="M0,0 L0,-70 A70,70 0 0,1 66,22 Z" fill="#0284c7"/>
        <path d="M0,0 L66,22 A70,70 0 0,1 -21,66 Z" fill="#10b981"/>
        <path d="M0,0 L-21,66 A70,70 0 0,1 -66,-22 Z" fill="#f59e0b"/>
        <text x="0" y="95" fill="var(--text-main, #f8fafc)" font-size="12" text-anchor="middle" font-weight="600">2004</text>
      </g>

      <!-- 2024 Pie -->
      <g transform="translate(360, 110)">
        <circle r="70" fill="#38bdf8"/>
        <path d="M0,0 L0,-70 A70,70 0 0,1 45,53 Z" fill="#0284c7"/>
        <path d="M0,0 L45,53 A70,70 0 0,1 -53,45 Z" fill="#10b981"/>
        <path d="M0,0 L-53,45 A70,70 0 0,1 -45,-53 Z" fill="#f59e0b"/>
        <text x="0" y="95" fill="var(--text-main, #f8fafc)" font-size="12" text-anchor="middle" font-weight="600">2024</text>
      </g>

      <!-- Legend -->
      <rect x="70" y="215" width="10" height="10" fill="#0284c7"/><text x="85" y="224" fill="var(--text-muted, #94a3b8)" font-size="9">Bathroom (32% -> 38%)</text>
      <rect x="195" y="215" width="10" height="10" fill="#10b981"/><text x="210" y="224" fill="var(--text-muted, #94a3b8)" font-size="9">Garden (35% -> 20%)</text>
      <rect x="310" y="215" width="10" height="10" fill="#f59e0b"/><text x="325" y="224" fill="var(--text-muted, #94a3b8)" font-size="9">Washing (20% -> 26%)</text>
      <rect x="420" y="215" width="10" height="10" fill="#38bdf8"/><text x="435" y="224" fill="var(--text-muted, #94a3b8)" font-size="9">Kitchen (13% -> 16%)</text>
    </svg>`
  },
  {
    id: 'task1-04',
    title: 'University Graduate Employment Status in Canada (2020)',
    chartType: 'table',
    promptText: 'The table below details the post-graduation outcomes of university students across five major academic disciplines in Canada in 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Engineering and Health Science graduates recorded the highest full-time employment rates (88% and 92%).',
      'Humanities graduates had the highest proportion pursuing postgraduate education (28%).',
      'Unemployment remained below 8% across all disciplines.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <!-- Header row -->
      <rect x="20" y="20" width="460" height="30" fill="var(--bg-secondary, #334155)" rx="4"/>
      <text x="30" y="39" fill="var(--text-main, #f8fafc)" font-size="11" font-weight="600">Discipline</text>
      <text x="160" y="39" fill="var(--text-main, #f8fafc)" font-size="11" font-weight="600">Full-Time (%)</text>
      <text x="270" y="39" fill="var(--text-main, #f8fafc)" font-size="11" font-weight="600">Further Study (%)</text>
      <text x="400" y="39" fill="var(--text-main, #f8fafc)" font-size="11" font-weight="600">Unemployed (%)</text>

      <!-- Row 1 -->
      <text x="30" y="75" fill="var(--text-main, #f8fafc)" font-size="10">Engineering</text>
      <text x="160" y="75" fill="#38bdf8" font-size="10" font-weight="600">88%</text>
      <text x="270" y="75" fill="var(--text-muted, #94a3b8)" font-size="10">8%</text>
      <text x="400" y="75" fill="#f43f5e" font-size="10">4%</text>
      <line x1="20" y1="88" x2="480" y2="88" stroke="var(--border, #475569)"/>

      <!-- Row 2 -->
      <text x="30" y="110" fill="var(--text-main, #f8fafc)" font-size="10">Health Sciences</text>
      <text x="160" y="110" fill="#38bdf8" font-size="10" font-weight="600">92%</text>
      <text x="270" y="110" fill="var(--text-muted, #94a3b8)" font-size="10">5%</text>
      <text x="400" y="110" fill="#f43f5e" font-size="10">3%</text>
      <line x1="20" y1="123" x2="480" y2="123" stroke="var(--border, #475569)"/>

      <!-- Row 3 -->
      <text x="30" y="145" fill="var(--text-main, #f8fafc)" font-size="10">Business Studies</text>
      <text x="160" y="145" fill="#38bdf8" font-size="10" font-weight="600">79%</text>
      <text x="270" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">14%</text>
      <text x="400" y="145" fill="#f43f5e" font-size="10">7%</text>
      <line x1="20" y1="158" x2="480" y2="158" stroke="var(--border, #475569)"/>

      <!-- Row 4 -->
      <text x="30" y="180" fill="var(--text-main, #f8fafc)" font-size="10">Humanities</text>
      <text x="160" y="180" fill="#38bdf8" font-size="10" font-weight="600">64%</text>
      <text x="270" y="180" fill="var(--text-muted, #94a3b8)" font-size="10">28%</text>
      <text x="400" y="180" fill="#f43f5e" font-size="10">8%</text>
      <line x1="20" y1="193" x2="480" y2="193" stroke="var(--border, #475569)"/>

      <!-- Row 5 -->
      <text x="30" y="215" fill="var(--text-main, #f8fafc)" font-size="10">Biological Sciences</text>
      <text x="160" y="215" fill="#38bdf8" font-size="10" font-weight="600">71%</text>
      <text x="270" y="215" fill="var(--text-muted, #94a3b8)" font-size="10">23%</text>
      <text x="400" y="215" fill="#f43f5e" font-size="10">6%</text>
    </svg>`
  },
  {
    id: 'task1-05',
    title: 'Manufacturing Process of Recycled Paper Pulp',
    chartType: 'process',
    promptText: 'The diagram shows the sequence of steps involved in producing recycled paper pulp for industrial manufacturing.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'The multi-stage linear cycle begins with waste collection and sorting.',
      'Critical chemical de-inking and pulp cleaning occur in the middle stages.',
      'The final output produces refined pulp sheets ready for paper production.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      
      <!-- Step 1 -->
      <rect x="20" y="80" width="90" height="60" fill="#0284c7" rx="6"/>
      <text x="65" y="105" fill="#fff" font-size="10" text-anchor="middle" font-weight="600">Step 1</text>
      <text x="65" y="125" fill="#e0f2fe" font-size="9" text-anchor="middle">Collection &amp; Sorting</text>
      <line x1="110" y1="110" x2="135" y2="110" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>

      <!-- Step 2 -->
      <rect x="140" y="80" width="90" height="60" fill="#0369a1" rx="6"/>
      <text x="185" y="105" fill="#fff" font-size="10" text-anchor="middle" font-weight="600">Step 2</text>
      <text x="185" y="125" fill="#e0f2fe" font-size="9" text-anchor="middle">Water Pulping</text>
      <line x1="230" y1="110" x2="255" y2="110" stroke="#38bdf8" stroke-width="2"/>

      <!-- Step 3 -->
      <rect x="260" y="80" width="90" height="60" fill="#075985" rx="6"/>
      <text x="305" y="105" fill="#fff" font-size="10" text-anchor="middle" font-weight="600">Step 3</text>
      <text x="305" y="125" fill="#e0f2fe" font-size="9" text-anchor="middle">De-inking &amp; Filter</text>
      <line x1="350" y1="110" x2="375" y2="110" stroke="#38bdf8" stroke-width="2"/>

      <!-- Step 4 -->
      <rect x="380" y="80" width="100" height="60" fill="#10b981" rx="6"/>
      <text x="430" y="105" fill="#fff" font-size="10" text-anchor="middle" font-weight="600">Step 4</text>
      <text x="430" y="125" fill="#d1fae5" font-size="9" text-anchor="middle">Refined Pulp Sheets</text>

      <text x="250" y="200" fill="var(--text-muted, #94a3b8)" font-size="11" text-anchor="middle">Complete cyclic conversion requires approximately 48 hours.</text>
    </svg>`
  },
  {
    id: 'task1-06',
    title: 'Public Transport Passenger Journeys in London (2012–2022)',
    chartType: 'line',
    promptText: 'The graph indicates passenger journeys on underground rail and bus networks in millions over a 10-year span.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: ['Bus journeys exceeded rail until 2018.', 'Sharp drop occurred in 2020 due to global pandemic.', 'Recovery post-2021 was faster on rail.'],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/><text x="250" y="120" fill="var(--text-muted, #94a3b8)" font-size="12" text-anchor="middle">Rail vs Bus Journeys (Millions)</text></svg>`
  },
  {
    id: 'task1-07',
    title: 'Agricultural Land Usage by Crop Type in Kenya',
    chartType: 'bar',
    promptText: 'The chart compares hectares of land allocated to cash crops and staple food crops across three Kenyan provinces.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: ['Tea and coffee dominate the central province.', 'Maize constitutes the vast majority of western cultivation.', 'Horticulture showed balanced distribution.'],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/><text x="250" y="120" fill="var(--text-muted, #94a3b8)" font-size="12" text-anchor="middle">Land Allocation by Crop Type</text></svg>`
  },
  {
    id: 'task1-08',
    title: 'Modes of Commuter Travel in Four European Cities',
    chartType: 'pie',
    promptText: 'The charts show the proportion of urban commuters using bicycles, cars, walking, and public transit in Amsterdam, Copenhagen, Madrid, and Berlin.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: ['Amsterdam and Copenhagen lead heavily in cycling (over 40%).', 'Madrid commuters rely most on metro and suburban rail.', 'Car usage was lowest in Copenhagen.'],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/><text x="250" y="120" fill="var(--text-muted, #94a3b8)" font-size="12" text-anchor="middle">Commuter Travel Modes Comparison</text></svg>`
  },
  {
    id: 'task1-09',
    title: 'Carbon Dioxide Emissions Per Capita in Five G20 Nations',
    chartType: 'bar',
    promptText: 'The bar graph displays metric tons of CO2 emitted per person annually between 2005 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: ['US per capita emissions dropped steadily from 19.5 to 14.2 tons.', 'India maintained the lowest per capita figure despite aggregate growth.', 'European nations exhibited moderate, continuous reductions.'],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/><text x="250" y="120" fill="var(--text-muted, #94a3b8)" font-size="12" text-anchor="middle">CO2 Per Capita Emissions (Metric Tons)</text></svg>`
  },
  {
    id: 'task1-10',
    title: 'International Tourist Arrivals by World Region (2015–2023)',
    chartType: 'line',
    promptText: 'The graph illustrates foreign visitors in millions arriving annually in Europe, Asia-Pacific, the Americas, and the Middle East.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: ['Europe remained the world’s most visited destination throughout.', 'Asia-Pacific experienced dramatic pre-pandemic growth.', 'Middle East saw the fastest recovery by 2023.'],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/><text x="250" y="120" fill="var(--text-muted, #94a3b8)" font-size="12" text-anchor="middle">International Tourist Arrivals (Millions)</text></svg>`
  }
];
