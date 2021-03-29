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
          src="/images/iconTs.svg"
          alt="Picture of the author"
          width={45}
          height={45}
        />
        <Image
          src="/images/coracao.svg"
          alt="Picture of the author"
          width={20}
          height={20}
        />
        <Image
          src="/images/iconNextjs.svg"
          alt="Picture of the author"
          width={45}
          height={45}
        />
      </IconsGroup>
    </Card>
  )
} 

export default Profile;