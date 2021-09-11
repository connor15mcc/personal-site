const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Machine Learning', 'Data Engineering', 'Python', 'Data Science', 'Object-Oriented Programming', 'Data Visualization'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Object-Oriented Programming'],
  },
  {
    title: 'OCaml',
    competency: 5,
    category: ['Languages', 'Functional Programming'],
  },
  {
    title: 'Scala',
    competency: 3,
    category: ['Languages', 'Functional Programming'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Data Engineering', 'Data Science'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages', 'Data Science', 'Data Visualization'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Technical Writing'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Machine Learning (TODO)',
    competency: 3,
    category: ['Machine Learning'],
  },
  {
    title: 'API Requests',
    competency: 3,
    category: ['Other'],
  },
  {
    title: 'Amazon S3',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Amazon EC2',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Databricks',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Spark',
    competency: 1,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#00b8ff',
  '#00ff9f',
  '#001eff',
  '#bd00ff',
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#243447',
  '#e47272',
  '#001eff',
  // '#3896e2',
  // '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
  '#cc7b94',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  // .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
