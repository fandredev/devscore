import Footer from "../components/Footer";
import Header from "../components/Header/DashRh";
import LastTestingRealized from "../components/LastTestingRealized";
import YourPlaces from "../components/YourPlaces";
import java from '../../public/images/icons/java.svg'
import user from '../../public/images/icons/user.png'

import FormBox from "../components/FormBox";

import { Container } from '../styles/DashboardRH'

export default function DashboardRH() : JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <YourPlaces 
          alt="Ícone da linguagem Java"
          image={java}
          title="Desenvolvedor Jr Java"
          number_of_tests={[15, 27]}
          level="Júnior"
          date='17/10/2010'
          status={true}
        />
        <LastTestingRealized 
          alt=""
          image={user}
          name_people="Felipe Oliveira"
          score={Math.floor(Math.random() * 100)}
          vacancy="Desevolvedor Java Jr"
          date='17/10/2010'
        />
        <FormBox />
      </Container>
      <Footer />
    </>
  )
}