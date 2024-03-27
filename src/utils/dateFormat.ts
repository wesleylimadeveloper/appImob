import { format } from "date-fns";

export function dateFormat(data: Date) {
  return format(new Date(data), "dd/MM/yyyy");
}
