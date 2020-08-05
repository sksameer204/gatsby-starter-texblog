const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function dateInEnglish(date) {
  var dateArr = []
  dateArr = date.split("-")
  var dateInEnglish = `${dateArr[2]} ${months[parseInt(dateArr[1])]}, ${
    dateArr[0]
  }`
  return dateInEnglish
}
