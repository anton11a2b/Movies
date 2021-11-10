export default function classN(average) {
  let className = 'movie-average';

  if (average >= 0 && average <= 3) {
    className += ' movie-average__border-rad';
  } else if (average > 3 && average <= 5) {
    className += ' movie-average__border-orange';
  } else if (average > 5 && average <= 7) {
    className += ' movie-average__border-yellow';
  } else if (average > 7) {
    className += ' movie-average__border-green';
  }

  return className;
}
