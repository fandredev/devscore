import { Container, InfoPlaces, InfoDates } from './styled'

interface PlacesProps {
  image?: string
  alt: string
  title: string
  number_of_tests: Array<number>,
  level: string,
  date: string,
  status: boolean
}

export default function YourPlaces(
  { image, alt, title, number_of_tests, level, date, status 
  }: PlacesProps) : JSX.Element{
  return (
    <Container>
      <h2>Suas vagas</h2>
      <figure>  
        <img src={image} alt={alt} />
      </figure>
        <InfoPlaces>
            <h5>{title}</h5>
            <span>{number_of_tests[0]} de {number_of_tests[1]} testes realizados</span>
            <span>Nível: {level}</span>
        </InfoPlaces>
        <InfoDates>
          <span>{date}</span>
          <span>{status === true ? 'Ativa': 'Inativa'}</span>
        </InfoDates>
    </Container>
  )
}