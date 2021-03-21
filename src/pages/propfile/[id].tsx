import axios from 'axios'
import {useRouter} from 'next/router'
import { User } from '../../api/User';

interface UserProps {
  user: User
}

function Profile({user}: UserProps) {

}

export default Profile;