import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Container, Links, Content } from './styles';

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quos est laboriosam, iste aut quas iure non dolore aliquid commodi ipsam porro tempore cum itaque eum dignissimos perspiciatis modi sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente dicta quo iusto, vero, quis expedita sunt sit, accusantium et consequuntur quia. Cupiditate ullam provident maiores earum assumenda omnis excepturi.</p>

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
        </Content>
      </main>
    </Container>
  );
}
