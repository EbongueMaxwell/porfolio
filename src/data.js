export const profile = {
  name: 'Ebongue Nsame Elie Maxwell',
  firstName: 'Maxwell',
  title: 'Data & IT Professional',
  location: 'Yaoundé, Cameroon',
  phone: '+237 655 182 969',
  email: 'nsamemaxwell00@gmail.com',
  linkedin: 'https://www.linkedin.com/in/elie-maxwell-ebongue-nsame-666798302/',
  summary: 'Data & IT professional with a Cloud Computing background and Google Data Analytics Professional Certificate. Experienced in turning raw data into reliable insights for operational and strategic decisions, with hands-on work across data quality, analysis, KPIs, dashboards, and reporting. Brings together IT management, software development, databases, and practical AI-oriented solutions.',
};

export const experiences = [
  {
    role: 'Chief of Data Department', company: 'NAUMUR SARL', location: 'Yaoundé', dates: 'Jun 2026 – Present', tag: 'Data & Monitoring',
    points: [
      'Contributing to the PADESCE national project as a Data Analyst, supporting monitoring and evaluation.',
      'Collecting, cleaning, preprocessing, analyzing, and reporting program data; developing dashboards, KPIs, and reports.',
      'Maintaining data quality, accuracy, and reliability across CGA, PAAM, and Karaavel projects.',
    ],
  },
  {
    role: 'Chief of IT Department', company: 'NAUMUR SARL', location: 'Yaoundé', dates: 'Nov 2025 – Jun 2026', tag: 'IT, Analytics & Digital Solutions',
    points: [
      'Oversaw data collection and organization, supporting the quality, accuracy, and reliability of business data.',
      'Turned data into dashboards, reports, and KPIs to inform strategic decisions.',
      'Supported data security, improved data tools and processes, and helped teams use data in their day-to-day work.',
    ],
  },
];

export const education = [
  { credential: 'Bachelor of Technology (BTech)', field: 'Computer Science Engineering', school: 'Institut Universitaire de la Côte', location: 'Douala', year: '2025' },
  { credential: 'Advanced Level', field: 'Sciences', school: 'G B H S Bojongo', location: 'Douala', year: '2022' },
  { credential: 'Ordinary Level', field: 'Sciences', school: 'G B H S Deido', location: 'Douala', year: '2019' },
];

export const skillGroups = [
  { label: 'Data analytics', icon: '↗', items: ['Data collection & cleaning', 'Data validation', 'Data analysis', 'KPI development', 'Dashboarding', 'Reporting', 'Monitoring & evaluation'] },
  { label: 'Programming & development', icon: '</>', items: ['Python', 'SQL', 'React', 'FastAPI', 'Web technologies', 'Software development'] },
  { label: 'Databases', icon: '▤', items: ['PostgreSQL', 'Database management', 'Data organization'] },
  { label: 'Cloud & AI', icon: '⌁', items: ['Cloud computing', 'Machine learning', 'AI-oriented solutions', 'Feature engineering'] },
  { label: 'Business intelligence', icon: '▥', items: ['Microsoft Excel', 'Power BI', 'Dashboards', 'Automated reporting'] },
];

export const certifications = [
  { title: 'Google Data Analytics Professional Certificate', issuer: 'Google', image: null },
  { title: 'Google AI Professional Certificate', issuer: 'Google', image: null },
  { title: 'AI Career Essentials (AICE)', issuer: 'ALX', image: '/assets/certificates/73-alx-aice-ai-career-essentials-certificate-maxwell-nsame (1).png' },
  { title: 'Kaggle Community Member', issuer: 'Kaggle badge', image: '/assets/certificates/Kaggle Community Member.png' },
  { title: 'Python Coder', issuer: 'Kaggle badge', image: '/assets/certificates/Python Coder.png' },
  { title: '1 Year on Kaggle', issuer: 'Kaggle badge', image: '/assets/certificates/1 Year on Kaggle.png' },
  { title: 'Innovating with Google Cloud Artificial Intelligence', issuer: 'Google Cloud', image: null },
  { title: 'Ethics in the Age of Generative AI', issuer: 'Certificate listed on CV', image: null },
  { title: 'AWS Educate Introduction to Generative AI', issuer: 'Amazon Web Services', image: null },
  { title: 'AWS Educate Machine Learning Foundations', issuer: 'Amazon Web Services', image: null },
  { title: 'Adobe Certified Professional: Illustrator', issuer: 'Adobe', image: '/assets/image/adobe-certified-professional-in-graphic-design-illustration-using-adobe-illustrator (1).png' },
  { title: 'IoT Wireless & Cloud Computing Emerging Technologies', issuer: 'Yonsei University', image: null },
  { title: 'Excel Fundamentals for Data Analysis', issuer: 'Certificate listed on CV', image: null },
  { title: 'Get Started with Looker Skill Badge', issuer: 'Google Cloud', image: null },
  { title: 'Microsoft Office Specialist: Excel Associate (Office 2019)', issuer: 'Microsoft', image: '/assets/certificates/microsoft-office-specialist-excel-associate-office-2019.png' },
];

export const credlyBadges = [
  'dbaa264e-3f95-4ee6-8433-afcaafab4959',
  '55b759c7-1667-4c7f-8511-7c114f34c9aa',
  'f26ce0a8-3b41-42fd-8913-fc7d0842b232',
  'f0b20938-5bc2-40f3-9e40-df8787146d3d',
  '8dfc2558-d9a0-4b73-875a-e11aa471664e',
  '4cf75ca7-be3e-42e3-aa97-a0d8b97b9ef9',
].map(id => ({ id, url: `https://www.credly.com/badges/${id}/public_url` }));

export const projects = [
  {
    number: '01', type: 'DATA ANALYTICS · MONITORING & EVALUATION', title: 'PADESCE',
    description: 'National project data work supporting the monitoring of training programs, revealing trends and gaps, and evidence-based decisions.',
    contribution: 'Data collection, consolidation, validation, cleaning, preprocessing, analysis, KPI monitoring, dashboards, and reporting.',
    tags: ['Data quality', 'KPIs', 'Dashboards', 'Reporting'], image: null,
  },
  {
    number: '02', type: 'AI · CREDIT RISK · SOFTWARE', title: 'AI Credit Risk Analysis & Scoring',
    description: 'A credit risk analysis and scoring platform that brings data analytics and machine learning into an end-to-end application.',
    contribution: 'Built data preprocessing and feature engineering workflows, risk prediction and scoring, authentication, dashboards, prediction history, and automated reporting.',
    tags: ['Python', 'Machine Learning', 'FastAPI', 'React', 'PostgreSQL'], image: '/assets/image/dashboard.PNG',
  },
  {
    number: '03', type: 'IT · BUSINESS SYSTEMS', title: 'Enterprise Management Solutions',
    description: 'Digital and IT initiatives at Naumur SARL, including Projet Perle, a personnel and remuneration management solution.',
    contribution: 'Contributed to data management and internal digital solutions, alongside concepts and prototypes for task and personnel management, school management, intranets, digital archives, and AI-enabled business applications.',
    tags: ['Full-stack development', 'Databases', 'Process automation', 'Cloud principles'], image: null,
  },
];
