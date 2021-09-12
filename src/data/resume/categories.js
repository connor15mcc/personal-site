const catList = [
  'Languages',
  'Object-Oriented Programming',
  'Functional Programming',
  'Tools',
  'Data Science',
  'Python',
  'Other',
];

const catSort = (a, b) => catList.indexOf(a) - catList.indexOf(b);

export { catList, catSort };
