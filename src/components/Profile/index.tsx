import { Card, Avatar, Name, City, Line, IconsGroup, Image} from './styled'
import { User } from '../../api/User';

export interface UsersProps {
  user?: User
}

const Profile = ({user}: UsersProps) => {
  return(
    <Card>
      <Avatar src={user.avatar_url} />
      <Name>{user.name}</Name>
      <City>{user.location}</City>
      <Line />
      <IconsGroup>
        <Image
          src="/images/ts.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <Image
          src="/images/coracao.png"
          alt="Picture of the author"
          width={25}
          height={25}
        />
        <Image
          src="/images/nextjsLogo.png"
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </IconsGroup>
    </Card>
  )
} 

export default Profile;