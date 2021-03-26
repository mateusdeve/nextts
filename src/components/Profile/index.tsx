import { Card, Avatar, Name, City, Line, IconsGroup } from './styled'
import { User } from '../../types';
import Image from 'next/image'

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
      </IconsGroup>
    </Card>
  )
} 

export default Profile;