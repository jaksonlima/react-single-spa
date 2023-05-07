export function firstAndLastName(fullName: string | null): string {
  const defaultName = "N/A";

  if (!fullName) return defaultName;

  const names = fullName.split(" ");

  if (names.length === 1) return names[0];
  if (names.length >= 2) return `${names[0]} ${names[names.length - 1]}`;

  return defaultName;
}

export function shortenName(fullName: string | null): string {
  const defaultName = "N/A";

  if (!fullName) return defaultName;

  const smallName = fullName.split(" ");

  if (smallName.length >= 2) {
    const first = smallName[0].split("")[0];
    const last = smallName[1].split("")[0];

    return `${first}${last}`;
  }

  if (smallName.length === 1) {
    const first = smallName[0].split("")[0];

    return `${first}`;
  }

  return defaultName;
}
