import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Container, Links } from './styles';

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Link uteis">
        <Links>
          <li><a href='#'>https://www.google.com.br</a></li>
          <li><a href='#'>https://www.google.com.br</a></li>
        </Links>
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
