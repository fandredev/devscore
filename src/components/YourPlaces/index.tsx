interface PlacesProps {
  image: string
  alt: string
  title: string
  number_of_tests: Array<number>,
  level: string,
  date: Date,
  status: boolean
}

export default function YourPlaces(){
  return (
    <>
      <figure>
        <img src={''} alt={''} />
      </figure>
        <aside id="info-places">
            <h5>Desenvolvedor <abbr title="Júnior">Jr</abbr>Java</h5>
            <span>15 de 27 testes realizados</span>
            <span>Nível: Júnior</span>
        </aside>
        <aside id="info-dates">
          <span>{new Date()}</span>
          <span>Ativa</span>
        </aside>
    </>
  )
}