import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Logout } from './styles';

export function Header() {
  const { signOut } = useAuth();

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
      <Logout onClick={signOut}>
        <RiShutDownLine />

      </Logout>
    </Container>
  )
}