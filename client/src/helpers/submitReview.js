const submitReview = (review) => fetch('/reviews', {
  method: 'POST',
  // headers: { 'Content-Type': 'application/json' },
  body: review,
})
  .catch((error) => console.log(error)); //eslint-disable-line

export default submitReview;
