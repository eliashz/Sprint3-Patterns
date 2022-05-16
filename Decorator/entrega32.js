let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
}