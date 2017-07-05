export default function date(date) {
  var publishedDate = new Date(`${date}`);
  var dateArr = publishedDate.toDateString().split(' ');
  dateArr.shift(); // eliminate day of week (first item in array)
  return dateArr.join(' ');
}
