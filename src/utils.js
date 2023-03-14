export const timeConverter = (review) => {
  console.log(review);
  const months = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  let date = review.created_at.slice(0, 10);
  let monthInd = parseInt(date.slice(5, 7));
  let month = months[monthInd];
  let day = date.slice(8, 10);
  let year = date.slice(0, 4);
  console.log(`${day} ${month} ${year}`);
  return `${day} ${month} ${year}`;
};
