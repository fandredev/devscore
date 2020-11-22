import { Aside } from "./styled"
import { CardProps } from "../../../interfaces"
import Image from "next/image"

const Card: React.FC<CardProps<string>> = ({ alt, text, url }): JSX.Element => {
  return (
    <Aside>
      <Image src={url} alt={alt} width={100} height={100} />
      <span>{text}</span>
    </Aside>
  )
}

export default Card
