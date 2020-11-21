import { Figure } from './styled'
import { useRouter } from 'next/router'


const Logo: React.FC = () : JSX.Element => {

  const router = useRouter()
  const navigateToLanding = () => router.push('/')
  return (
     <Figure>
        <img
          src="/images/devscore.svg"
          alt="Devscore"
          onClick={navigateToLanding}
        />
    </Figure>
  )
}
export default Logo
