import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
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
      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="note" />
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
