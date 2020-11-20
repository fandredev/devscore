import { Container, InfoPlaces, InfoFooterCard } from './styled'
import { PlacesProps } from '../../interfaces'
import colors from '../../constants/colors'
import _Button from '../../components/Button'



export default function YourPlaces(
  { image, alt, title, number_of_tests, level, date, status 
  }: PlacesProps<string, Array<number>, boolean>) : JSX.Element{
  return (
    <Container>
      <h2>Suas vagas</h2>
      <div>
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
      </div>
      <div>
        <_Button bg={colors.green}>Cadastrar</_Button>
      </div>
    </Container>
  )
}