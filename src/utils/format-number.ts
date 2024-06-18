export default function formatNumber(number: number | string): string {
  if (typeof number === "string") {
    number = Number(number);
  }

  if (Number.isInteger(number)) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
  } else {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
