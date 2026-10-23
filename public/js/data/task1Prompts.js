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
  },
  {
    id: 'task1-11',
    title: 'Global Smartphone Operating System Market Share (2015 vs 2025)',
    chartType: 'pie',
    promptText: 'The pie charts illustrate the global market share distribution of major mobile operating systems in 2015 and projected for 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Android and iOS expanded their duopoly to control over 99% of the market by 2025.',
      'Windows Phone and BlackBerry accounted for roughly 4% in 2015 but became virtually negligible by 2025.',
      'iOS maintained steady share at approximately 28% while Android solidified dominance at around 71%.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <!-- 2015 Pie -->
      <circle cx="140" cy="110" r="70" fill="#3b82f6" stroke="var(--border, #475569)" stroke-width="1"/>
      <path d="M 140 110 L 140 40 A 70 70 0 0 1 205 135 Z" fill="#10b981"/>
      <path d="M 140 110 L 205 135 A 70 70 0 0 1 180 172 Z" fill="#f59e0b"/>
      <text x="140" y="205" fill="var(--text-main, #f8fafc)" font-size="12" font-weight="bold" text-anchor="middle">2015 Market Share</text>
      <!-- 2025 Pie -->
      <circle cx="360" cy="110" r="70" fill="#3b82f6" stroke="var(--border, #475569)" stroke-width="1"/>
      <path d="M 360 110 L 360 40 A 70 70 0 0 1 425 130 Z" fill="#10b981"/>
      <text x="360" y="205" fill="var(--text-main, #f8fafc)" font-size="12" font-weight="bold" text-anchor="middle">2025 Market Share</text>
      <!-- Legend -->
      <rect x="50" y="220" width="12" height="8" fill="#3b82f6" rx="2"/>
      <text x="66" y="227" fill="var(--text-muted, #94a3b8)" font-size="9">Android (68% -> 71%)</text>
      <rect x="175" y="220" width="12" height="8" fill="#10b981" rx="2"/>
      <text x="191" y="227" fill="var(--text-muted, #94a3b8)" font-size="9">iOS (28% -> 28.5%)</text>
      <rect x="300" y="220" width="12" height="8" fill="#f59e0b" rx="2"/>
      <text x="316" y="227" fill="var(--text-muted, #94a3b8)" font-size="9">Others (4% -> negligible)</text>
    </svg>`
  },
  {
    id: 'task1-12',
    title: 'Average Monthly Rainfall and Temperature in Wellington (New Zealand)',
    chartType: 'bar',
    promptText: 'The combined bar and line chart illustrates the average monthly precipitation (mm) and mean temperatures (°C) in Wellington over a calendar year.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Rainfall peaks during the southern hemisphere winter months of June, July, and August (exceeding 130mm).',
      'Temperatures reach their apex in January and February at approximately 20°C before dipping to 11°C in July.',
      'Summer months (December to February) experience the lowest precipitation (under 75mm).'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="50" y1="30" x2="50" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="50" y1="190" x2="470" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <text x="40" y="35" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">150mm</text>
      <text x="40" y="110" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">75mm</text>
      <text x="40" y="190" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">0mm</text>
      <!-- Bars representing monthly rain -->
      <rect x="65" y="120" width="18" height="70" fill="#0284c7" rx="2"/>
      <rect x="100" y="135" width="18" height="55" fill="#0284c7" rx="2"/>
      <rect x="135" y="115" width="18" height="75" fill="#0284c7" rx="2"/>
      <rect x="170" y="90" width="18" height="100" fill="#0284c7" rx="2"/>
      <rect x="205" y="75" width="18" height="115" fill="#0284c7" rx="2"/>
      <rect x="240" y="50" width="18" height="140" fill="#0284c7" rx="2"/>
      <rect x="275" y="45" width="18" height="145" fill="#0284c7" rx="2"/>
      <rect x="310" y="55" width="18" height="135" fill="#0284c7" rx="2"/>
      <rect x="345" y="85" width="18" height="105" fill="#0284c7" rx="2"/>
      <rect x="380" y="95" width="18" height="95" fill="#0284c7" rx="2"/>
      <rect x="415" y="115" width="18" height="75" fill="#0284c7" rx="2"/>
      <rect x="450" y="130" width="18" height="60" fill="#0284c7" rx="2"/>
      <text x="74" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">Jan</text>
      <text x="249" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">Jun</text>
      <text x="459" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">Dec</text>
      <text x="260" y="225" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">Monthly Rainfall (mm) - Wellington</text>
    </svg>`
  },
  {
    id: 'task1-13',
    title: 'Research & Development Spending (% of GDP) Across Five OECD Nations',
    chartType: 'table',
    promptText: 'The table displays gross domestic expenditure on research and development (R&D) as a proportion of total Gross Domestic Product (GDP) across five countries in 2010, 2016, and 2022.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'South Korea recorded the highest R&D expenditure proportion, rising steeply from 3.47% in 2010 to 4.93% in 2022.',
      'Israel consistently allocated more than 4% of GDP across all three surveyed intervals.',
      'The United Kingdom demonstrated modest growth from 1.66% to 2.91%, remaining below the United States.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <rect x="20" y="20" width="460" height="35" fill="#0f172a" rx="4"/>
      <text x="35" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Country</text>
      <text x="165" y="42" fill="#38bdf8" font-size="11" font-weight="bold">2010 (% GDP)</text>
      <text x="275" y="42" fill="#38bdf8" font-size="11" font-weight="bold">2016 (% GDP)</text>
      <text x="385" y="42" fill="#38bdf8" font-size="11" font-weight="bold">2022 (% GDP)</text>
      <line x1="20" y1="60" x2="480" y2="60" stroke="var(--border, #475569)" stroke-width="1"/>
      <!-- Rows -->
      <text x="35" y="85" fill="var(--text-main, #f8fafc)" font-size="10">South Korea</text><text x="175" y="85" fill="var(--text-muted, #94a3b8)" font-size="10">3.47%</text><text x="285" y="85" fill="var(--text-muted, #94a3b8)" font-size="10">4.23%</text><text x="395" y="85" fill="#10b981" font-weight="bold" font-size="10">4.93%</text>
      <text x="35" y="115" fill="var(--text-main, #f8fafc)" font-size="10">Israel</text><text x="175" y="115" fill="var(--text-muted, #94a3b8)" font-size="10">4.10%</text><text x="285" y="115" fill="var(--text-muted, #94a3b8)" font-size="10">4.52%</text><text x="395" y="115" fill="#10b981" font-weight="bold" font-size="10">5.44%</text>
      <text x="35" y="145" fill="var(--text-main, #f8fafc)" font-size="10">United States</text><text x="175" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">2.74%</text><text x="285" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">2.76%</text><text x="395" y="145" fill="var(--text-main, #f8fafc)" font-size="10">3.46%</text>
      <text x="35" y="175" fill="var(--text-main, #f8fafc)" font-size="10">Germany</text><text x="175" y="175" fill="var(--text-muted, #94a3b8)" font-size="10">2.71%</text><text x="285" y="175" fill="var(--text-muted, #94a3b8)" font-size="10">2.94%</text><text x="395" y="175" fill="var(--text-main, #f8fafc)" font-size="10">3.14%</text>
      <text x="35" y="205" fill="var(--text-main, #f8fafc)" font-size="10">United Kingdom</text><text x="175" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">1.66%</text><text x="285" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">1.68%</text><text x="395" y="205" fill="var(--text-main, #f8fafc)" font-size="10">2.91%</text>
    </svg>`
  },
  {
    id: 'task1-14',
    title: 'Manufacturing & Refining Sequence of Extra Virgin Olive Oil',
    chartType: 'process',
    promptText: 'The process diagram illustrates the industrial stages involved in producing, filtering, and bottling extra virgin olive oil.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'The multi-stage process initiates with mechanical harvesting and washing before crushing.',
      'Cold malaxation and centrifugal phase separation isolate pure olive oil without thermal degradation.',
      'Nitrogen-sealed dark glass bottling prevents oxidation before distribution.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <!-- Step 1 -->
      <rect x="20" y="30" width="95" height="60" fill="#1e3a8a" rx="6"/>
      <text x="67" y="55" fill="#bfdbfe" font-size="10" font-weight="bold" text-anchor="middle">1. Harvesting</text>
      <text x="67" y="72" fill="#93c5fd" font-size="8" text-anchor="middle">& Washing</text>
      <!-- Arrow -->
      <polygon points="120,60 135,60 135,55 145,60 135,65 135,60" fill="#38bdf8"/>
      <!-- Step 2 -->
      <rect x="150" y="30" width="95" height="60" fill="#1e3a8a" rx="6"/>
      <text x="197" y="55" fill="#bfdbfe" font-size="10" font-weight="bold" text-anchor="middle">2. Crushing</text>
      <text x="197" y="72" fill="#93c5fd" font-size="8" text-anchor="middle">Into Paste</text>
      <!-- Arrow -->
      <polygon points="250,60 265,60 265,55 275,60 265,65 265,60" fill="#38bdf8"/>
      <!-- Step 3 -->
      <rect x="280" y="30" width="95" height="60" fill="#1e3a8a" rx="6"/>
      <text x="327" y="55" fill="#bfdbfe" font-size="10" font-weight="bold" text-anchor="middle">3. Malaxation</text>
      <text x="327" y="72" fill="#93c5fd" font-size="8" text-anchor="middle">Slow Churn (<27C)</text>
      <!-- Arrow down -->
      <polygon points="327,95 327,125 322,125 327,135 332,125 327,125" fill="#38bdf8"/>
      <!-- Step 4 -->
      <rect x="280" y="145" width="95" height="60" fill="#065f46" rx="6"/>
      <text x="327" y="170" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">4. Centrifuge</text>
      <text x="327" y="187" fill="#6ee7b7" font-size="8" text-anchor="middle">Oil / Water Sep.</text>
      <!-- Arrow left -->
      <polygon points="275,175 255,175 255,170 245,175 255,180 255,175" fill="#38bdf8"/>
      <!-- Step 5 -->
      <rect x="145" y="145" width="95" height="60" fill="#065f46" rx="6"/>
      <text x="192" y="170" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">5. Filtration</text>
      <text x="192" y="187" fill="#6ee7b7" font-size="8" text-anchor="middle">Purity Polish</text>
      <!-- Arrow left -->
      <polygon points="140,175 120,175 120,170 110,175 120,180 120,175" fill="#38bdf8"/>
      <!-- Step 6 -->
      <rect x="15" y="145" width="95" height="60" fill="#831843" rx="6"/>
      <text x="62" y="170" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">6. Bottling</text>
      <text x="62" y="187" fill="#f472b6" font-size="8" text-anchor="middle">Dark Glass & N2</text>
    </svg>`
  },
  {
    id: 'task1-15',
    title: 'Renewable Electricity Generation by Source (2010–2025)',
    chartType: 'line',
    promptText: 'The line graph exhibits the quantity of electricity generated globally across three renewable energy sources—Solar Photovoltaic, Wind Power, and Hydroelectric—between 2010 and 2025 (in Terawatt-hours).\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Solar generation experienced the steepest exponential expansion, rising from under 100 TWh in 2010 to over 1,800 TWh by 2025.',
      'Hydroelectric power retained the highest absolute output throughout the entire period, growing from 3,400 to 4,600 TWh.',
      'Wind power grew consistently to exceed 2,200 TWh by 2025.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="60" y1="190" x2="470" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <text x="50" y="30" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">5000 TWh</text>
      <text x="50" y="110" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">2500 TWh</text>
      <text x="50" y="190" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">0</text>
      <!-- Hydro Line -->
      <polyline points="60,80 160,72 260,65 360,55 460,45" fill="none" stroke="#38bdf8" stroke-width="3"/>
      <!-- Wind Line -->
      <polyline points="60,175 160,160 260,135 360,105 460,82" fill="none" stroke="#10b981" stroke-width="3"/>
      <!-- Solar Line -->
      <polyline points="60,188 160,182 260,165 360,125 460,95" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4,3"/>
      <text x="60" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2010</text>
      <text x="160" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2013</text>
      <text x="260" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2017</text>
      <text x="360" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2021</text>
      <text x="460" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2025</text>
      <!-- Legend -->
      <rect x="80" y="222" width="12" height="4" fill="#38bdf8"/>
      <text x="98" y="227" fill="var(--text-muted, #94a3b8)" font-size="9">Hydro</text>
      <rect x="180" y="222" width="12" height="4" fill="#10b981"/>
      <text x="198" y="227" fill="var(--text-muted, #94a3b8)" font-size="9">Wind</text>
      <rect x="280" y="222" width="12" height="4" fill="#f59e0b"/>
      <text x="298" y="227" fill="var(--text-muted, #94a3b8)" font-size="9">Solar (PV)</text>
    </svg>`
  },
  {
    id: 'task1-16',
    title: 'Electric Vehicle vs Hybrid vs ICE Vehicle Market Share in Europe (2018–2024)',
    chartType: 'bar',
    promptText: 'The grouped bar chart illustrates market share percentages of Battery Electric Vehicles (BEVs), Plug-in Hybrids (PHEVs), and Internal Combustion Engine (ICE) vehicles across the European Union from 2018 to 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Internal combustion vehicle market share plunged precipitously from 88% in 2018 down to 42% by 2024.',
      'Battery electric vehicles experienced the steepest expansion, climbing from 2.5% to over 24%.',
      'Hybrid vehicles demonstrated steady progressive growth, capturing 28% of total new vehicle registrations by 2024.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="60" y1="190" x2="470" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <text x="50" y="30" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">100%</text>
      <text x="50" y="110" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">50%</text>
      <text x="50" y="190" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">0%</text>
      <!-- 2018 -->
      <rect x="80" y="40" width="18" height="150" fill="#f43f5e" rx="2"/>
      <rect x="100" y="175" width="18" height="15" fill="#f59e0b" rx="2"/>
      <rect x="120" y="185" width="18" height="5" fill="#10b981" rx="2"/>
      <text x="110" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2018</text>
      <!-- 2021 -->
      <rect x="200" y="85" width="18" height="105" fill="#f43f5e" rx="2"/>
      <rect x="220" y="155" width="18" height="35" fill="#f59e0b" rx="2"/>
      <rect x="240" y="165" width="18" height="25" fill="#10b981" rx="2"/>
      <text x="230" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2021</text>
      <!-- 2024 -->
      <rect x="320" y="125" width="18" height="65" fill="#f43f5e" rx="2"/>
      <rect x="340" y="145" width="18" height="45" fill="#f59e0b" rx="2"/>
      <rect x="360" y="150" width="18" height="40" fill="#10b981" rx="2"/>
      <text x="350" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2024</text>
      <!-- Legend -->
      <rect x="80" y="222" width="12" height="6" fill="#f43f5e"/>
      <text x="96" y="228" fill="var(--text-muted, #94a3b8)" font-size="8">ICE (Petrol/Diesel)</text>
      <rect x="220" y="222" width="12" height="6" fill="#f59e0b"/>
      <text x="236" y="228" fill="var(--text-muted, #94a3b8)" font-size="8">Hybrids (PHEV)</text>
      <rect x="350" y="222" width="12" height="6" fill="#10b981"/>
      <text x="366" y="228" fill="var(--text-muted, #94a3b8)" font-size="8">Electric (BEV)</text>
    </svg>`
  },
  {
    id: 'task1-17',
    title: 'Global Average Sea Surface Temperature Anomalies (1980–2025)',
    chartType: 'line',
    promptText: 'The line chart tracks global mean sea surface temperature anomalies (°C) relative to the 20th-century baseline between 1980 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Sea surface temperature anomaly exhibited a steady upward trajectory, accelerating sharply after 2015.',
      'The baseline anomaly was approximately +0.12°C in 1980, surpassing +0.95°C by 2025.',
      'Temporary dips occurred following major volcanic eruptions before the warming trend resumed.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="60" y1="190" x2="470" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <text x="50" y="30" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">+1.0C</text>
      <text x="50" y="110" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">+0.5C</text>
      <text x="50" y="190" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">0.0C</text>
      <polyline points="60,175 140,165 220,150 300,130 380,95 460,40" fill="none" stroke="#f43f5e" stroke-width="3"/>
      <text x="60" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">1980</text>
      <text x="140" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">1990</text>
      <text x="220" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2000</text>
      <text x="300" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2010</text>
      <text x="380" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2020</text>
      <text x="460" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2025</text>
      <text x="260" y="225" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">Global Sea Surface Temperature Anomaly (°C)</text>
    </svg>`
  },
  {
    id: 'task1-18',
    title: 'Global Plastic Waste Management Breakdown (2024)',
    chartType: 'pie',
    promptText: 'The pie chart exhibits the global distribution of post-consumer plastic waste disposal methods in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Landfilling constitutes the single largest category at 49% of all municipal plastic waste.',
      'Mismanaged and openly dumped waste represents a substantial 22%, driving marine plastic leakage.',
      'Mechanical recycling accounts for barely 10% despite global circular economy campaigns.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <circle cx="200" cy="115" r="75" fill="#ef4444"/>
      <path d="M 200 115 L 200 40 A 75 75 0 0 1 270 90 Z" fill="#f59e0b"/>
      <path d="M 200 115 L 270 90 A 75 75 0 0 1 265 160 Z" fill="#10b981"/>
      <path d="M 200 115 L 265 160 A 75 75 0 0 1 200 190 Z" fill="#6366f1"/>
      <!-- Legend -->
      <rect x="320" y="45" width="14" height="10" fill="#ef4444" rx="2"/><text x="342" y="54" fill="var(--text-main, #f8fafc)" font-size="10">Landfilled (49%)</text>
      <rect x="320" y="75" width="14" height="10" fill="#f59e0b" rx="2"/><text x="342" y="84" fill="var(--text-main, #f8fafc)" font-size="10">Mismanaged (22%)</text>
      <rect x="320" y="105" width="14" height="10" fill="#10b981" rx="2"/><text x="342" y="114" fill="var(--text-main, #f8fafc)" font-size="10">Incinerated (19%)</text>
      <rect x="320" y="135" width="14" height="10" fill="#6366f1" rx="2"/><text x="342" y="144" fill="var(--text-main, #f8fafc)" font-size="10">Recycled (10%)</text>
    </svg>`
  },
  {
    id: 'task1-19',
    title: 'University Research Grants ($M) Across Five Academic Faculties (2015 vs 2025)',
    chartType: 'table',
    promptText: 'The table compares annual external research grant funding (in millions of USD) allocated across five faculties at a major research university in 2015 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Computer Science & AI demonstrated the most dramatic surge, increasing more than threefold from $38M to $132M.',
      'Biomedical Sciences maintained the highest total funding, growing from $112M to $185M.',
      'Arts & Humanities was the only faculty to register a contraction, dropping from $18M down to $14M.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <rect x="20" y="20" width="460" height="35" fill="#0f172a" rx="4"/>
      <text x="35" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Academic Faculty</text>
      <text x="210" y="42" fill="#38bdf8" font-size="11" font-weight="bold">2015 ($M)</text>
      <text x="310" y="42" fill="#38bdf8" font-size="11" font-weight="bold">2025 ($M)</text>
      <text x="410" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Change</text>
      <line x1="20" y1="60" x2="480" y2="60" stroke="var(--border, #475569)" stroke-width="1"/>
      <text x="35" y="85" fill="var(--text-main, #f8fafc)" font-size="10">Biomedical Sciences</text><text x="220" y="85" fill="var(--text-muted, #94a3b8)" font-size="10">$112</text><text x="320" y="85" fill="var(--text-main, #f8fafc)" font-size="10">$185</text><text x="420" y="85" fill="#10b981" font-size="10">+65%</text>
      <text x="35" y="115" fill="var(--text-main, #f8fafc)" font-size="10">Computer Science & AI</text><text x="220" y="115" fill="var(--text-muted, #94a3b8)" font-size="10">$38</text><text x="320" y="115" fill="var(--text-main, #f8fafc)" font-size="10">$132</text><text x="420" y="115" fill="#10b981" font-size="10">+247%</text>
      <text x="35" y="145" fill="var(--text-main, #f8fafc)" font-size="10">Renewable Engineering</text><text x="220" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">$45</text><text x="320" y="145" fill="var(--text-main, #f8fafc)" font-size="10">$96</text><text x="420" y="145" fill="#10b981" font-size="10">+113%</text>
      <text x="35" y="175" fill="var(--text-main, #f8fafc)" font-size="10">Social Sciences</text><text x="220" y="175" fill="var(--text-muted, #94a3b8)" font-size="10">$24</text><text x="320" y="175" fill="var(--text-main, #f8fafc)" font-size="10">$31</text><text x="420" y="175" fill="#10b981" font-size="10">+29%</text>
      <text x="35" y="205" fill="var(--text-main, #f8fafc)" font-size="10">Arts & Humanities</text><text x="220" y="205" fill="var(--text-muted, #94a3b8)" font-size="10">$18</text><text x="320" y="205" fill="var(--text-main, #f8fafc)" font-size="10">$14</text><text x="420" y="205" fill="#f43f5e" font-size="10">-22%</text>
    </svg>`
  },
  {
    id: 'task1-20',
    title: 'The Industrial Desalination and Reverse Osmosis Process',
    chartType: 'process',
    promptText: 'The process diagram depicts the sequential stages through which ocean water is desalinated, filtered, and mineralized for municipal drinking water supplies.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'The multi-step cycle begins with offshore intake grids and flocculation pre-treatment to eliminate macro-solids.',
      'High-pressure pumps force seawater across semi-permeable reverse osmosis membranes, separating brine from pure water.',
      'Post-treatment remineralization with calcium and chlorine disinfection precedes storage in civic reservoirs.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <!-- Step 1 -->
      <rect x="20" y="30" width="95" height="55" fill="#1e3a8a" rx="6"/><text x="67" y="55" fill="#bfdbfe" font-size="10" font-weight="bold" text-anchor="middle">1. Seawater Intake</text><text x="67" y="70" fill="#93c5fd" font-size="8" text-anchor="middle">Screened Inlet</text>
      <polygon points="120,58 135,58 135,53 145,58 135,63 135,58" fill="#38bdf8"/>
      <!-- Step 2 -->
      <rect x="150" y="30" width="95" height="55" fill="#1e3a8a" rx="6"/><text x="197" y="55" fill="#bfdbfe" font-size="10" font-weight="bold" text-anchor="middle">2. Coagulation</text><text x="197" y="70" fill="#93c5fd" font-size="8" text-anchor="middle">Sand Filtration</text>
      <polygon points="250,58 265,58 265,53 275,58 265,63 265,58" fill="#38bdf8"/>
      <!-- Step 3 -->
      <rect x="280" y="30" width="95" height="55" fill="#0284c7" rx="6"/><text x="327" y="55" fill="#e0f2fe" font-size="10" font-weight="bold" text-anchor="middle">3. High Pressure</text><text x="327" y="70" fill="#bae6fd" font-size="8" text-anchor="middle">70-80 Bar Pumps</text>
      <!-- Down arrow -->
      <polygon points="327,90 327,115 322,115 327,125 332,115 327,115" fill="#38bdf8"/>
      <!-- Step 4 -->
      <rect x="280" y="135" width="95" height="55" fill="#065f46" rx="6"/><text x="327" y="158" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">4. RO Membranes</text><text x="327" y="173" fill="#6ee7b7" font-size="8" text-anchor="middle">Salt Separation</text>
      <polygon points="275,162 255,162 255,157 245,162 255,167 255,162" fill="#38bdf8"/>
      <!-- Step 5 -->
      <rect x="145" y="135" width="95" height="55" fill="#065f46" rx="6"/><text x="192" y="158" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">5. Mineralization</text><text x="192" y="173" fill="#6ee7b7" font-size="8" text-anchor="middle">pH & Chlorine</text>
      <polygon points="140,162 120,162 120,157 110,162 120,167 120,162" fill="#38bdf8"/>
      <!-- Step 6 -->
      <rect x="15" y="135" width="95" height="55" fill="#831843" rx="6"/><text x="62" y="158" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">6. Civic Reservoir</text><text x="62" y="173" fill="#f472b6" font-size="8" text-anchor="middle">Clean Tap Water</text>
    </svg>`
  },
  {
    id: 'task1-21',
    title: 'Average Weekly Working Hours in Five OECD Economies (2000 vs 2024)',
    chartType: 'bar',
    promptText: 'The bar chart details the average weekly hours worked by full-time employees across five OECD nations in 2000 and 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'South Korea recorded the longest workweeks in both years, though declining significantly from 52 hours to 41 hours.',
      'Germany registered the lowest weekly hours, declining from 37.5 hours down to 34.2 hours.',
      'All five economies exhibited a consistent reduction in average working hours over the 24-year span.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="60" y1="190" x2="470" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <text x="50" y="30" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">60h</text>
      <text x="50" y="110" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">30h</text>
      <text x="50" y="190" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">0h</text>
      <!-- South Korea -->
      <rect x="80" y="50" width="16" height="140" fill="#3b82f6" rx="2"/><rect x="98" y="80" width="16" height="110" fill="#10b981" rx="2"/>
      <text x="97" y="206" fill="var(--text-muted, #94a3b8)" font-size="8" text-anchor="middle">S. Korea</text>
      <!-- USA -->
      <rect x="155" y="75" width="16" height="115" fill="#3b82f6" rx="2"/><rect x="173" y="88" width="16" height="102" fill="#10b981" rx="2"/>
      <text x="172" y="206" fill="var(--text-muted, #94a3b8)" font-size="8" text-anchor="middle">USA</text>
      <!-- Japan -->
      <rect x="230" y="70" width="16" height="120" fill="#3b82f6" rx="2"/><rect x="248" y="95" width="16" height="95" fill="#10b981" rx="2"/>
      <text x="247" y="206" fill="var(--text-muted, #94a3b8)" font-size="8" text-anchor="middle">Japan</text>
      <!-- UK -->
      <rect x="305" y="90" width="16" height="100" fill="#3b82f6" rx="2"/><rect x="323" y="100" width="16" height="90" fill="#10b981" rx="2"/>
      <text x="322" y="206" fill="var(--text-muted, #94a3b8)" font-size="8" text-anchor="middle">UK</text>
      <!-- Germany -->
      <rect x="380" y="98" width="16" height="92" fill="#3b82f6" rx="2"/><rect x="398" y="110" width="16" height="80" fill="#10b981" rx="2"/>
      <text x="397" y="206" fill="var(--text-muted, #94a3b8)" font-size="8" text-anchor="middle">Germany</text>
      <!-- Legend -->
      <rect x="170" y="222" width="12" height="6" fill="#3b82f6"/><text x="186" y="228" fill="var(--text-muted, #94a3b8)" font-size="8">2000</text>
      <rect x="270" y="222" width="12" height="6" fill="#10b981"/><text x="286" y="228" fill="var(--text-muted, #94a3b8)" font-size="8">2024</text>
    </svg>`
  },
  {
    id: 'task1-22',
    title: 'Microprocessor Transistor Density & Moores Law Trajectory (1975–2025)',
    chartType: 'line',
    promptText: 'The semi-logarithmic line graph tracks the exponential growth in microchip transistor counts between 1975 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Transistor count expanded exponentially from barely 5,000 transistors in 1975 to over 100 billion by 2025.',
      'The growth trajectory adhered closely to Moores Law prediction of doubling every 24 months.',
      '3D vertical chip stacking after 2020 sustained exponential growth despite physical silicon nanometer limits.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <line x1="60" y1="20" x2="60" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <line x1="60" y1="190" x2="470" y2="190" stroke="var(--border, #475569)" stroke-width="1.5"/>
      <text x="50" y="30" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">100B</text>
      <text x="50" y="80" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">100M</text>
      <text x="50" y="130" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">100K</text>
      <text x="50" y="190" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="end">1K</text>
      <polyline points="60,185 140,155 220,125 300,95 380,65 460,30" fill="none" stroke="#a855f7" stroke-width="3"/>
      <text x="60" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">1975</text>
      <text x="140" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">1985</text>
      <text x="220" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">1995</text>
      <text x="300" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2005</text>
      <text x="380" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2015</text>
      <text x="460" y="206" fill="var(--text-muted, #94a3b8)" font-size="9" text-anchor="middle">2025</text>
      <text x="260" y="225" fill="var(--text-main, #f8fafc)" font-size="11" text-anchor="middle">Microprocessor Transistor Count (Log Scale)</text>
    </svg>`
  },
  {
    id: 'task1-23',
    title: 'Global Coffee Bean Production Share by Continent (2024)',
    chartType: 'pie',
    promptText: 'The pie chart demonstrates global coffee bean agricultural output distributed by continent in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'South America produced the absolute majority of global coffee beans, accounting for 54%.',
      'Asia-Pacific represented the second largest production continent at 30%, driven heavily by Robusta beans in Vietnam.',
      'Africa, the evolutionary birthplace of coffee, contributed 12% of worldwide harvest.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <circle cx="200" cy="115" r="75" fill="#84cc16"/>
      <path d="M 200 115 L 200 40 A 75 75 0 0 1 275 125 Z" fill="#eab308"/>
      <path d="M 200 115 L 275 125 A 75 75 0 0 1 245 175 Z" fill="#ec4899"/>
      <path d="M 200 115 L 245 175 A 75 75 0 0 1 200 190 Z" fill="#06b6d4"/>
      <!-- Legend -->
      <rect x="320" y="45" width="14" height="10" fill="#84cc16" rx="2"/><text x="342" y="54" fill="var(--text-main, #f8fafc)" font-size="10">South America (54%)</text>
      <rect x="320" y="75" width="14" height="10" fill="#eab308" rx="2"/><text x="342" y="84" fill="var(--text-main, #f8fafc)" font-size="10">Asia-Pacific (30%)</text>
      <rect x="320" y="105" width="14" height="10" fill="#ec4899" rx="2"/><text x="342" y="114" fill="var(--text-main, #f8fafc)" font-size="10">Africa (12%)</text>
      <rect x="320" y="135" width="14" height="10" fill="#06b6d4" rx="2"/><text x="342" y="144" fill="var(--text-main, #f8fafc)" font-size="10">Central America (4%)</text>
    </svg>`
  },
  {
    id: 'task1-24',
    title: 'Average Household Electricity Consumption by Appliance Category',
    chartType: 'table',
    promptText: 'The table breaks down the annual electricity consumption (kWh) across four standard household appliance categories in three climate zones: Temperate, Subtropical, and Boreal.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'Thermal comfort (HVAC) dominates overall household energy consumption across all three surveyed climate regimes.',
      'Subtropical households consume the highest space-cooling energy (3,800 kWh per year).',
      'Water heating represents the second most intensive consumer, peaking at 2,400 kWh in Boreal climates.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <rect x="20" y="20" width="460" height="35" fill="#0f172a" rx="4"/>
      <text x="35" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Appliance Category</text>
      <text x="200" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Temperate (kWh)</text>
      <text x="310" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Subtropical (kWh)</text>
      <text x="420" y="42" fill="#38bdf8" font-size="11" font-weight="bold">Boreal (kWh)</text>
      <line x1="20" y1="60" x2="480" y2="60" stroke="var(--border, #475569)" stroke-width="1"/>
      <text x="35" y="85" fill="var(--text-main, #f8fafc)" font-size="10">Space Heating / AC</text><text x="210" y="85" fill="var(--text-muted, #94a3b8)" font-size="10">2,600</text><text x="320" y="85" fill="#f43f5e" font-size="10">3,800</text><text x="430" y="85" fill="#f43f5e" font-size="10">4,200</text>
      <text x="35" y="115" fill="var(--text-main, #f8fafc)" font-size="10">Water Heating</text><text x="210" y="115" fill="var(--text-muted, #94a3b8)" font-size="10">1,800</text><text x="320" y="115" fill="var(--text-muted, #94a3b8)" font-size="10">1,200</text><text x="430" y="115" fill="var(--text-muted, #94a3b8)" font-size="10">2,400</text>
      <text x="35" y="145" fill="var(--text-main, #f8fafc)" font-size="10">Refrigeration & Cooking</text><text x="210" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">1,100</text><text x="320" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">1,350</text><text x="430" y="145" fill="var(--text-muted, #94a3b8)" font-size="10">1,050</text>
      <text x="35" y="175" fill="var(--text-main, #f8fafc)" font-size="10">Lighting & Electronics</text><text x="210" y="175" fill="var(--text-muted, #94a3b8)" font-size="10">950</text><text x="320" y="175" fill="var(--text-muted, #94a3b8)" font-size="10">980</text><text x="430" y="175" fill="var(--text-muted, #94a3b8)" font-size="10">920</text>
      <text x="35" y="205" fill="#10b981" font-weight="bold" font-size="10">Annual Total</text><text x="210" y="205" fill="#10b981" font-weight="bold" font-size="10">6,450</text><text x="320" y="205" fill="#10b981" font-weight="bold" font-size="10">7,330</text><text x="430" y="205" fill="#10b981" font-weight="bold" font-size="10">8,570</text>
    </svg>`
  },
  {
    id: 'task1-25',
    title: 'The Annual Breeding Cycle and Migration of the Emperor Penguin',
    chartType: 'process',
    promptText: 'The biological lifecycle diagram charts the 12-month breeding, incubation, and foraging cycle of Emperor Penguins in Antarctica.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    keyFeatures: [
      'The cycle initiates in April with an extensive 100km inland march across Antarctic sea ice to winter breeding colonies.',
      'Male penguins incubate the solitary egg on their feet throughout polar darkness for 65 consecutive days without feeding.',
      'Fledged chicks disperse into open ocean waters in December and January as sea ice melts during the austral summer.'
    ],
    chartSvg: `<svg viewBox="0 0 500 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="240" fill="var(--bg-card, #1e293b)" rx="8"/>
      <!-- Apr -->
      <rect x="20" y="30" width="95" height="55" fill="#0284c7" rx="6"/><text x="67" y="53" fill="#e0f2fe" font-size="9" font-weight="bold" text-anchor="middle">Apr: Ice March</text><text x="67" y="68" fill="#bae6fd" font-size="8" text-anchor="middle">Inland 100km</text>
      <polygon points="120,58 135,58 135,53 145,58 135,63 135,58" fill="#38bdf8"/>
      <!-- May-Jun -->
      <rect x="150" y="30" width="95" height="55" fill="#1e3a8a" rx="6"/><text x="197" y="53" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">May-Jun: Egg</text><text x="197" y="68" fill="#93c5fd" font-size="8" text-anchor="middle">Female to Sea</text>
      <polygon points="250,58 265,58 265,53 275,58 265,63 265,58" fill="#38bdf8"/>
      <!-- Jul -->
      <rect x="280" y="30" width="95" height="55" fill="#1e3a8a" rx="6"/><text x="327" y="53" fill="#bfdbfe" font-size="9" font-weight="bold" text-anchor="middle">Jul: Incubation</text><text x="327" y="68" fill="#93c5fd" font-size="8" text-anchor="middle">Male Fasting (65d)</text>
      <polygon points="327,90 327,115 322,115 327,125 332,115 327,115" fill="#38bdf8"/>
      <!-- Aug-Sep -->
      <rect x="280" y="135" width="95" height="55" fill="#065f46" rx="6"/><text x="327" y="158" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Aug-Sep: Hatch</text><text x="327" y="173" fill="#6ee7b7" font-size="8" text-anchor="middle">Female Returns</text>
      <polygon points="275,162 255,162 255,157 245,162 255,167 255,162" fill="#38bdf8"/>
      <!-- Oct-Nov -->
      <rect x="145" y="135" width="95" height="55" fill="#065f46" rx="6"/><text x="192" y="158" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">Oct-Nov: Creche</text><text x="192" y="173" fill="#6ee7b7" font-size="8" text-anchor="middle">Dual Foraging</text>
      <polygon points="140,162 120,162 120,157 110,162 120,167 120,162" fill="#38bdf8"/>
      <!-- Dec-Jan -->
      <rect x="15" y="135" width="95" height="55" fill="#831843" rx="6"/><text x="62" y="158" fill="#fbcfe8" font-size="9" font-weight="bold" text-anchor="middle">Dec-Jan: Fledge</text><text x="62" y="173" fill="#f472b6" font-size="8" text-anchor="middle">Open Ocean Swim</text>
    </svg>`
  }
];
