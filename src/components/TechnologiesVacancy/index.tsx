import { TechnologiesVacancyProps } from "../../interfaces"
import Image from "next/image"
import { Container } from "./styled"

const TechnologiesVacancy: React.FC<TechnologiesVacancyProps> = ({
  image,
  tech = "HTML5",
}) => {
  return (
    <Container>
      <figure>
        <Image
          src="/images/icons/checked.png"
          alt={tech}
          width={20}
          height={20}
        />
      </figure>
      <section>
        <Image
          src="/images/icons/html.svg"
          alt={tech}
          width={100}
          height={100}
        />
        <span>{tech.toUpperCase()}</span>
      </section>
    </Container>
  )
}

export default TechnologiesVacancy
