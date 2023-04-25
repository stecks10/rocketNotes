import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';



export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>
              Criar Nota
            </h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links Úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />

          </Section>
        </Form>
      </main>
    </Container>
  )
}