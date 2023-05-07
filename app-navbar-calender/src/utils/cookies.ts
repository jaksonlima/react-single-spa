import Cookies from "js-cookie";

export const setCookies = (name: string, value?: string) => {
  if (!value) return;
  Cookies.set(name, value);
};

export const getCookies = (name: string) => {
  return Cookies.get(name);
};
