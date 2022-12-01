import { format } from "date-fns";

export const formatDate = (date: Date): string => {
  return format(new Date(date), "MM/dd/yyyy 'at' h:mm a").toString();
};

export const getTime = (date: Date): string => {
  return "";
};
