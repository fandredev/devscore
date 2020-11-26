import { PlacesProps } from "../../interfaces"
import _Button from "../../components/Button"
import Image from "next/image"
import { SectionYourVacancy } from "./styled"
import Title from "../Title"

export default function YourPlaces({
  image,
  alt,
  title,
  number_of_tests,
  level,
  date,
  status,
}: PlacesProps<string | any, Array<number>, boolean>): JSX.Element {
  const verified = () => {
    if (level === "Júnior") return "JR"
    else if (level === "Pleno") return "PL"
    else return "SR"
  }
  return (
    <SectionYourVacancy>
      <div>
        <Title>Suas vagas</Title>
      </div>
      <div>
        <figure>
          <Image src={image} alt={alt} width={60} height={60} />
        </figure>
        <aside>
          <h3>
            Desenvolvedor <abbr title={level}>{verified}</abbr>
            {title}
          </h3>
          <p>
            {number_of_tests[0]} de {number_of_tests[1]} testes realizados
          </p>
          <span>Nível: {level}</span>
        </aside>
        <aside>
          <span>{date}</span>
          <span>{status ? "Ativa" : "Inativa"}</span>
        </aside>
      </div>
    </SectionYourVacancy>
  )
}
