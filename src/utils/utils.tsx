export function formatdDate(dateStr: string) {
  const date = new Date(dateStr);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  }).format(date);
}

export function calcMinutesLeft(dateStr: string) {
  const date1 = new Date().getTime();
  const date2 = new Date(dateStr).getTime();
  return Math.round((date2 - date1) / 60000);
}

export function formatAddress(addressObj) {
  return `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
}
