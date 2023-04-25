import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src='https://github.com/stecks10.png'
          alt='Stecks10'
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Vitor Nunes</strong>
        </div>
      </Profile>
      <Logout >
        <RiShutDownLine />

      </Logout>
    </Container>
  )
}