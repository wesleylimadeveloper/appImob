export function phoneFormat(number: string) {
  const onlyNumbers = number.replace(/\D/g, "");

  const areaCode = onlyNumbers.slice(0, 2);

  if (onlyNumbers.length === 10) {
    const part1 = onlyNumbers.slice(2, 6);
    const part2 = onlyNumbers.slice(6, 10);

    return `(${areaCode}) ${part1}-${part2}`;
  }

  if (onlyNumbers.length === 11) {
    const part1 = onlyNumbers.slice(2, 7);
    const part2 = onlyNumbers.slice(7, 11);

    return `(${areaCode}) ${part1}-${part2}`;
  }

  return number;
}
