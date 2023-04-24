import { Container, Profile } from './styles';

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src='https://github.com/stecks10.png'
          alt='Stecks10'
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Vitor Nunes</strong>
        </div>
      </Profile>
    </Container>
  )
}