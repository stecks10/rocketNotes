import { useContext } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { MyContext } from '../../myContext';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Background, Container, Form } from './styles';

export function SignIn() {
  const data = useContext(MyContext);
  console.log("Meu context =>", data);

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links Úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}