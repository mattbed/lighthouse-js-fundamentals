const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}
// The following are test cases
console.log(whichSchool(8));
console.log(whichSchool(13));
console.log(whichSchool(15));
console.log(whichSchool(24));
