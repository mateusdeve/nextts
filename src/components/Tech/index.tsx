import {Card} from './styled'
import { Image, Group, Title } from '../../components/styled'

const Tech = () => {
return (
  <Card>
    <Group>
      <Title>Tecnologias</Title>
      <Image
        src="/images/iconRedux.svg"
      />
      <Image
        src="/images/iconReactjs.svg"
      />
      <Image
        src="/images/iconNextjs.svg"
      />
      <Image
        src="/images/iconTs.svg"
      />
      <Image
        src="/images/iconJs.svg"
      />
      <Image
        src="/images/iconStyled.svg"
      />
    </Group>
  </Card>
)

}  
export default Tech;