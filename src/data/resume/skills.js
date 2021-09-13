import { catSort } from './categories';

const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Object-Oriented Programming', 'Data Science', 'Python'],
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
    category: ['Languages', 'Functional Programming', 'Object-Oriented Programming'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Other', 'Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Python', 'Data Science'],
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
    title: 'API Requests',
    competency: 3,
    category: ['Other'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Databricks',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Spark',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Python'],
  },
].map((skill) => ({ ...skill, category: skill.category }));

const colors = [
  '#00b8ff',
  '#6968b3',
  '#00ff9f',
  '#bd00ff',
  '#e47272',
  '#40494e',
  '#001eff',
  '#cc7b94',
  '#515dd4',
  '#243447',
  '#37b1f5',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort(catSort)
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
