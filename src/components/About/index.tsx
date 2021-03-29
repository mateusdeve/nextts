import {Card, Title, Content, Paragraph, ButtonSocial, Image, ButtonGroup} from './styled'
import { User } from '../../api/User';

export interface UsersProps {
  user?: User
}

const About = ({user}: UsersProps) => {
  return(
    <Card>
      <Content>
        <Title>Sobre mim</Title>
        <Paragraph>
          Sou desenvolvedor Front - end. Acho que a tecnologia deve melhorar a vida das
          pessoas e estou sempre estudando para aprimorar meus conhecimentos,
          superar novos desafios e fazer o melhor possível em todas as criações. <br/><br/>
          Entusiasta das melhores tecnologias de desenvolvimento web e mobile.
          </Paragraph>
          <ButtonGroup>
            <ButtonSocial href="https://github.com/mateusdeve" target="_blanck">
                <Image
                  src="/images/iconGithub.svg"
                  width={20}
                />
                Github
              </ButtonSocial>
              <ButtonSocial href="https://www.linkedin.com/in/mateussilveirapires/" target="_blanck">
                <Image
                  src="/images/iconLinkedin.svg"
                  width={20}
                />
                Linkedin
              </ButtonSocial>
          </ButtonGroup>
      </Content>
    </Card>
  )
}

export default About