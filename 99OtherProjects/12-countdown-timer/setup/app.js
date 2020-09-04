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
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll('.deadline-format h4')

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
let futureTime = futureDate.getTime()
const year = futureDate.getFullYear()
const hour = futureDate.getHours()
const mins = futureDate.getMinutes()
const month = futureDate.getMonth()
const day = futureDate.getDay()

giveaway.textContent =
  `Giveaway Ends On ${weekdays[day]}, ${futureDate.getDate()} ${months[month]} ${year}, ${hour}:${mins} AM
`

const getRemainingTime = () => {
  const today = new Date().getTime()
  const remainingTime = futureTime - today

  // 1sec = 1000ms
  // 1min = 60s
  // 1hr  = 60 min
  // 1day = 24hr
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000

  let days = Math.floor(remainingTime / oneDay)
  let hours = Math.floor(remainingTime % oneDay / oneHour)
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute)
  let secs = Math.floor((remainingTime % oneMinute) / 1000)
  console.log(days + " - " + hours + " - " + minutes + " " + secs)

  const values = [days, hours, minutes, secs]

  items.forEach((item, index) => {
    item.textContent = formatItem(values[index])
  })

  if (remainingTime < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class='expired'> Expired.. Sorry!</h4>`
  }

}

const formatItem = (item) => {
  if (item < 10)
    return `0${item}`

  return item
}

getRemainingTime()

// countdown
let countdown = setInterval(getRemainingTime, 1000)