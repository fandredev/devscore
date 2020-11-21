import { TechnologiesVacancyProps} from '../../interfaces'
import checkedIcon from '../../../public/images/icons/checked.png'

import { Container } from './styled'

const TechnologiesVacancy: React.FC<TechnologiesVacancyProps> = ({ image, tech = 'HTML5' }) => {
  return (
    <Container>
      <figure>
        <img src={checkedIcon} alt="" />
      </figure>
      <section>
         <img src={image} alt="" />
         <span>{tech.toUpperCase()}</span>
      </section>
    </Container>
  )
}


export default TechnologiesVacancy
