import { useState } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    await api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        alert(error.response.data.message);
        if (error.response) {
          alert(error.response.data.message)
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links Úteis</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="email"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>

    </Container>
  )
}