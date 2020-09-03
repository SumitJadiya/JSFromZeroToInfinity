// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let authorName = document.querySelector("#author")
let jobName = document.querySelector("#job")
let infoDetails = document.querySelector("#info")
let image = document.querySelector("#person-img")
let btns = document.querySelectorAll(".btn")
let mainId = 0

const showUser = person => {
  user = reviews[person]
  image.setAttribute("src", user.img)
  authorName.textContent = user.name
  jobName.textContent = user.job
  infoDetails.textContent = user.text
}

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const style = e.currentTarget.classList;
    switch (style.value) {
      case "btn prev-btn":
        mainId = mainId === 0 ? reviews.length - 1 : mainId - 1
        break;
      case "btn next-btn":
        mainId = mainId === reviews.length - 1 ? 0 : mainId + 1
        break;
      case "btn random-btn":
        mainId = randomNumber()
        break;
      default:
        break;
    }
    showUser(mainId)
  })
})

const randomNumber = () => {
  return Math.floor(Math.random() * reviews.length)
}

window.addEventListener("load", () => {
  showUser(mainId)
})
