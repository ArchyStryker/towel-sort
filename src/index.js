
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return ((matrix.map((value, index) => {
    return (index % 2 == 0 ? value : value.reverse())})flat(Infinity));
}
