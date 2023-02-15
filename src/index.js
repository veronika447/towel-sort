module.exports = function towelSort(matrix) {
  if (matrix == undefined)
    return [];
  let result = [];
  matrix = matrix.map((item, index) => {
    if (index % 2 === 1)
      item.reverse();
    item.map(el => result.push(el));
  })
  return result;
}