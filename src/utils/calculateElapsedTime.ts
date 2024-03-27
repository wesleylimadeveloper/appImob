import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export function calculateElapsedTime(data: Date) {
  const currentDate = new Date();

  const days = differenceInDays(currentDate, data);
  const months = differenceInMonths(currentDate, data) + 1;
  const years = differenceInYears(currentDate, data);

  if (years >= 1) {
    return years === 1 ? `${years} ano atrás` : `${years} anos atrás`;
  } else if (months >= 1) {
    return months === 1 ? `${months} mês atrás` : `${months} meses atrás`;
  } else {
    return days === 1 ? `${days} dia atrás` : `${days} dias atrás`;
  }
}
