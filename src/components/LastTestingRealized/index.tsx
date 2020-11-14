import { InfoDates, InfoPlaces } from './styled'

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
    <>
      <figure>
        <img src={image} alt={alt} />
      </figure>
        <hr />
        <InfoPlaces>
            <h5>{name_people}</h5>
            <span>Score: {score}</span>
            <span>Vaga: {vacancy}</span>
        </InfoPlaces>
        <InfoDates>
          <span>Realizado: {date}</span>
        </InfoDates>
    </>
  )
}