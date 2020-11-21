import Footer from "../../components/Footer";
import Header from "../../components/Header/DashRh";
import LastTestingRealized from "../../components/LastTestingRealized";
import YourPlaces from "../../components/YourPlaces";
import FormBox from "../../components/FormBox";

import { populatedArrayYourPlaces, populatedArrayYourTesting } from '../../helpers/Screens'

import { PopulatedArrayYourPlaces, PopulatedArrayYourLastTesting } from '../../interfaces'
import { Container } from '../../styles/DashboardRH'
import Head from "next/head";


export default function DashboardRH() : JSX.Element {
  return (
    <>
    <Head>
      <title>Dashboard RH</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
