//Get your shorts on - this is an array workout!
// ## Array Cardio


const inventors = [
    {
      first: "Albert",
      last: "Einstein",
      year: 1879,
      passed: 1955,
      categories: ["man", "physicist"],
    },
    {
      first: "Isaac",
      last: "Newton",
      year: 1643,
      passed: 1727,
      categories: ["man", "mathematician"],
    },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    {
      first: "Marie",
      last: "Curie",
      year: 1867,
      passed: 1934,
      categories: ["woman", "physicist"],
    },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    {
      first: "Katherine",
      last: "Blodgett",
      year: 1898,
      passed: 1979,
      categories: ["woman", "physicist"],
    },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    {
      first: "Lise",
      last: "Meitner",
      year: 1878,
      passed: 1968,
      categories: ["woman", "physicist"],
    },
    {
      first: "Hanna",
      last: "Hammarström",
      year: 1829,
      passed: 1909,
      categories: ["woman", "inventor"],
    },
  ];
  // Array.prototype.filter()
  // 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
  const inventorsMan = inventors.filter(
    (inventor)=>inventor.year >= 1500  && inventor.year< 1600
  )
  console.table(inventorsMan)
  // Array.prototype.filter()
  // 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
  // Array.prototype.filter()


  
  // 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
  // Array.prototype.map()
  // 4. Give us an array filled only with the inventors last names
  // Array.prototype.map()
  // 5. Give us an array filled only with the inventors emails
  // the emails should be lowercase firstName + date of birth @ inventor.com
  // eg: albert1879@inventor.com
  // Array.prototype.sort()
  // 6. Sort the inventors by birthdate, oldest to youngest