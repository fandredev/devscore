import Footer from "../components/Footer";
import Header from "../components/Header/DashRh";
import LastTestingRealized from "../components/LastTestingRealized";
import YourPlaces from "../components/YourPlaces";
import java from '../../public/images/icons/java.svg'
import user from '../../public/images/icons/user.png'
import FormBox from "../components/FormBox";

import { PopulatedArrayYourPlaces, PopulatedArrayYourLastTesting } from '../interfaces'
import { Container } from '../styles/DashboardRH'


export default function DashboardRH() : JSX.Element {
  const populatedArrayYourPlaces = new Array(4).fill({
    alt:"Ícone da linguagem Java",
    image:java,
    title:"Desenvolvedor Jr Java",
    number_of_tests:[15, 27],
    level:"Júnior",
    date:'17/10/2010',
    status:true
  })
  const populatedArrayYourTesting = new Array(4).fill({
    alt:"",
    image:user,
    name_people:"Felipe Oliveira",
    score:Math.floor(Math.random() * 100),
    vacancy:"Desevolvedor Java Jr",
    date:'17/10/2010'
  })

  return (
    <>
      <Header />
      <Container>
        <div>
          {populatedArrayYourPlaces.map(({ alt, image, title, number_of_tests, level, date, status }: PopulatedArrayYourPlaces, index: number) => (
            <YourPlaces
              key={index}
              alt={alt}
              image={image}
              title={title}
              number_of_tests={number_of_tests}
              level={level}
              date={date}
              status={status}
            /> 
          ))}
          {/* criar map */}
        </div>
        <div>
            {populatedArrayYourTesting.map(({ alt, image, name_people, score, vacancy, date }: PopulatedArrayYourLastTesting, index: number) => (
              <LastTestingRealized
                key={index}
                alt={alt}
                image={image}
                name_people={name_people}
                score={score}
                vacancy={vacancy}
                date={date}
              />
            ))}
        </div>
        <FormBox />
      </Container>
      <Footer />
    </>
  )
}