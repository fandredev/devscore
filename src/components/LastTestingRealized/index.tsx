import { Container, InfoVacancy, InfoPlaces } from './styled'

interface LastTestingRealizedProps {
  image: string
  alt: string
  name_people: string
  score: number
  vacancy: string
  date: string
}

export default function LastTestingRealized(
  { image, alt, name_people, score, vacancy, date 
  }: LastTestingRealizedProps): JSX.Element {
  return (
     <Container>
        <h2>Últimos testes realizados</h2>
        <div>
        <figure>  
          <img src={image} alt={alt} />
        </figure>
          <InfoPlaces>
            <div>
              <h5>{name_people}</h5>
              <span>Realizado: {date}</span>
            </div>
            <div>
               <span>Score: {score}</span>
            </div>
          </InfoPlaces>
          <InfoVacancy>
               <span>Vaga: {vacancy}</span>
          </InfoVacancy>
        </div>
    </Container>
  )
}