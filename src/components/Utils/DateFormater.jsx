export const DateFormater = ({ card }) => {
  const date = new Date(card.published_at);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
