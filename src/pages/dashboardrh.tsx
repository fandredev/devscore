import Footer from "../components/Footer";
import Header from "../components/Header/DashRh";
import LastTestingRealized from "../components/LastTestingRealized";
import YourPlaces from "../components/YourPlaces";
import java from '../../public/images/icons/java.svg'
import FormBox from "../components/FormBox";

export default function DashboardRH() : JSX.Element {
  return (
    <>
      <Header />
      <YourPlaces 
        alt="Ícone da linguagem Java"
        image={java}
        title="Desenvolvedor Jr Java"
        number_of_tests={[15, 27]}
        level="Júnior"
        date='17/10/2010'
        status={true}
      />
      <hr />
      <LastTestingRealized 
        alt=""
        image={java}
        name_people="Felipe Oliveira"
        score={Math.floor(Math.random() * 100)}
        vacancy="Desevolvedor Java Jr"
        date='17/10/2010'
      />
      <hr />
      <FormBox />
      <Footer />
    </>
  )
}