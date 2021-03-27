import {Card} from './styled'
import { User } from '../../api/User';

export interface UsersProps {
  user?: User
}

const About = ({user}: UsersProps) => {
  return(
    <Card />
  )
}

export default About