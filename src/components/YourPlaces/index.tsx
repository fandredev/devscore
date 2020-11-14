import { Container, InfoPlaces, InfoFooterCard } from './styled'
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
          <div>
            <h5>{title}</h5>
            <span>{date}</span>
          </div>
            <span>{number_of_tests[0]} de {number_of_tests[1]} testes realizados</span>
        </InfoPlaces>
        <InfoFooterCard>
          <span>Nível: {level}</span>
          <span>{status === true ? 'Ativa': 'Inativa'}</span>
        </InfoFooterCard>
    </Container>
  )
}