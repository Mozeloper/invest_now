export const currencyEntities = {
  "&#8358;": "₦",
  "&#36;": "$",
  "&#163": "£",
  "&#128": "€",
};

export const currencyFormat = (x) => x && x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
