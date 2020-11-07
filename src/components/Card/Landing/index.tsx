import { Aside } from './styled'
interface CardProps<T> {
  url: T,
  alt?: T,
  text: T
}

export default function Card({ url, alt, text } : CardProps<string>) {
  return (
      <Aside>
        <img src={url} alt={alt} />
        <span>{text}</span>
      </Aside>
  )
}
