import Footer from "../../components/Footer"
import Header from "../../components/Header/DashRh"

import { Container, SectionInvite } from "../../styles/rh/dash"
import Head from "next/head"
import FormBox from "../../components/FormBox"
import LastTestingRealized from "../../components/LastTestingRealized"
import YourPlaces from "../../components/YourPlaces"
import {
  populatedArrayYourPlaces,
  populatedArrayYourTesting,
} from "../../helpers/Screens"

export default function DashboardRH(): JSX.Element {
  return (
    <>
      <Head>
        <title>Dashboard RH</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Container>
        <>
          {populatedArrayYourPlaces.map(
            (
              { level, status, date, image, alt, number_of_tests, title },
              index: number
            ) => (
              <YourPlaces
                level={level}
                status={status}
                date={date}
                image={image}
                alt={alt}
                number_of_tests={number_of_tests}
                title={title}
                key={index}
              />
            )
          )}
          {populatedArrayYourTesting.map(
            ({ vacancy, date, level, image, alt, name_people }) => (
              <LastTestingRealized
                image={image}
                alt={alt}
                name_people={name_people}
                score={32}
                vacancy={vacancy}
                level={level}
                date={date}
              />
            )
          )}
        </>
        <SectionInvite>
          <FormBox />
        </SectionInvite>
      </Container>
      <Footer />
    </>
  )
}
