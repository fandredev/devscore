import { string } from "yup"

interface LastTestingRealizedProps {
  image: string
  alt: string
  name_people: string
  score: number,
  vacancy: string;
  date: Date,
}

export default function LastTestingRealized(){
  return (
    <>
      <figure>
        <img src={''} alt={''} />
      </figure>
        <aside id="info-places">
            <h5>Felipe Oliveira</h5>
            <span>Score: {Math.floor(Math.random() * 100)}</span>
            <span>Vaga: Desenvolvedor Java <abbr title="Júnior">Jr</abbr></span>
        </aside>
        <aside id="info-dates">
          <span>Realizado: {new Date()}</span>
        </aside>
    </>
  )
}