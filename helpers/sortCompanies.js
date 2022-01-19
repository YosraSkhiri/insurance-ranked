const sortCompanies = (array) => {
  let sortedCompanies;

  sortedCompanies = array.sort((a, b) => {
    return a.rank - b.rank;
  });

  return sortedCompanies;
}
 
export default sortCompanies;