const positions = [
  {
    company: 'Safegraph',
    position: 'Software Engineer Intern',
    link: 'https://safegraph.com',
    daterange: 'June 2021 - Aug. 2021',
    points: [
      'Built an inference environment replicating production logic that determines when a POI has opened or closed, facilitating iteration.',
      'Implemented improvements identified within above environment in Scala production pipeline, increasing the inference rate by 7%.',
      'Added custom tooling for the product team to easily mark a subset of ~7000 weekly crawl files for reprocessing.',
      'Presented my findings and technical changes to the engineering team and then entire company in a end-of-internship presentation.',
    ],
    skills: 'Scala, Python, PostgreSQL, AWS S3, Elm, Databricks',
  },
  {
    company: 'Cornell Rocketry Team',
    position: 'Electronics & Software Subteam Member',
    link: 'https://www.cornellrocketryteam.com/',
    daterange: 'Sept. 2019 - Present',
    points: [
      'Created GUI with Java to display critical flight statuses & supervise launch vehicle, retrieving data from PostgreSQL database.',
      'Implemented a system that translates the RF signals from the airborne rocket and stores these datapoints as entries on the database.',
      'Developed procedural programming layer in C to interface flight control board with a Wi-Fi module, allowing wireless data transfer.',
      'Worked with a team of 5 to develop tests and report on many aspects of our project to the rest of the NASA award-winning team.',
    ],
    skills: 'Java, C',
  },
  {
    company: 'Cayuga Capital Cornell',
    position: 'Electronics & Software Subteam Member',
    link: 'https://www.cayugacapitalcornell.com/',
    daterange: 'Aug. 2019 - Present',
    points: [
      'Lead development of Python trading program which utilizes many data sources, backtesting, with automated trade execution.',
      'Created the Python test suite which ensures the veracity of the entire codebase and maintains correctness between each improvement.',
      'Work with team of 6 to develop signal-generation algorithms using various fundamental, technical, alternative, and ML techniques.',
      'Optimized this program for performance by implementing more OO design, a TimescaleDB database, & reducing API requests.',
    ],
    skills: 'Python, TimescaleDB, Numpy, Pandas, API, Matplotlib',
  },
  {
    company: 'Blue Logic Capital',
    position: 'Venture Capital Intern',
    link: 'https://bluelogiccapital.com/',
    daterange: 'June 2020 - Aug. 2020',
    points: [
      'Led research and performed due diligence on investment opportunity, creating financial projections to model future growth and ROI.',
    ],
  },
  {
    company: 'São Martinho',
    position: 'Software Engineering Intern',
    link: 'https://www.saomartinho.com.br/',
    daterange: 'June 2019 - Aug. 2019',
    points: [
      'Learned about and worked with the software control systems regulating continuous operation of the world\'s largest sugar mill.',
    ],
  },
];

export default positions;
