import { Card} from "./styled"
import { Image, Group, Title } from '../../components/styled'

const Study = () => {
return(
  <Card>
    <Group>
      <Title>Estudando</Title>
      <Image
        src="/images/iconJest.svg"
      />
      <Image
        src="/images/iconNode.svg"
      />
    </Group>
  </Card>
)
}

export default Study