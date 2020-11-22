import { Figure } from "./styled"
import { useRouter } from "next/router"
import Image from "next/image"

const Logo: React.FC = (): JSX.Element => {
  const router = useRouter()
  const navigateToLanding = () => router.push("/")
  return (
    <Figure>
      <Image
        src="/images/devscore.svg"
        alt="Devscore"
        width={200}
        height={200}
        onClick={navigateToLanding}
      />
    </Figure>
  )
}
export default Logo
