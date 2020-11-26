import { SectionTest } from "./styled"

import { LastTestingRealizedProps } from "../../interfaces"
import Image from "next/image"
import React from "react"
import Title from "../Title"
export default function LastTestingRealized({
  image,
  alt,
  name_people,
  score,
  vacancy,
  date,
  level = "Júnior",
}: LastTestingRealizedProps<string, number>): JSX.Element {
  const verified = () => {
    if (level === "Júnior") return "JR"
    else if (level === "Pleno") return "PL"
    else return "SR"
  }
  return (
    <SectionTest>
      <div>
        <Title>Últimos testes realizados</Title>
      </div>
      <div>
        <figure>
          <Image src={image} alt={alt} width={60} height={60} />
        </figure>
        <aside>
          <h3>{name_people}</h3>
          <p>
            Score: <span>{score}</span> pontos
          </p>
          <span>
            Vaga: {vacancy} <abbr title={level}>{verified()}</abbr>
          </span>
        </aside>
        <aside>
          <span>Realizado: {date}</span>
        </aside>
      </div>
    </SectionTest>
  )
}
