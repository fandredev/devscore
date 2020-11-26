import java from "../../../public/images/icons/java.svg"
import user from "../../../public/images/icons/user.png"

export const mappedFourExperiences = [
  {
    number: 1,
    checked: false,
  },
  {
    number: 2,
    checked: false,
  },
  {
    number: 3,
    checked: false,
  },
  {
    number: 4,
    checked: false,
  },
  {
    number: 5,
    checked: false,
  },
  {
    number: 6,
    checked: false,
  },
  {
    number: 7,
    checked: false,
  },
  {
    number: 8,
    checked: false,
  },
  {
    number: 9,
    checked: false,
  },
  {
    number: 10,
    checked: false,
  },
]
export const mappedMultiChoices = [
  {
    value: true,
    id: 1,
  },
  {
    value: false,
    id: 2,
  },
]
export const populatedArrayYourPlaces = new Array(4).fill({
  alt: "Ícone da linguagem Java",
  //image:java,
  title: "Desenvolvedor Jr Java",
  number_of_tests: [15, 27],
  level: "Júnior",
  date: "17/10/2010",
  status: true,
})
export const populatedArrayYourTesting = new Array(4).fill({
  alt: "",
  //image:user,
  name_people: "Felipe Oliveira",
  score: Math.floor(Math.random() * 100),
  vacancy: "Desevolvedor Java Jr",
  date: "17/10/2010",
})
export const populatedTechsFront = new Array(3).fill({
  image: "",
  tech: "HTML5",
})
export const populatedTechsBack = new Array(6).fill({
  image: "",
  tech: "HTML5",
})
