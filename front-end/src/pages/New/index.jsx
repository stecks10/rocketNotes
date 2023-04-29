import { useState } from 'react';
import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleBack() {
    navigate(-1);
  }

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o titulo");
    }

    if (newTag) {
      return alert("Voce deixou uma tag no campo para adicionar, mas não adicionou nada. Clique para adicionar ou deixe o campo vazio");
    }

    if (newLink) {
      return alert("Voce deixou uma tag no campo para adicionar, mas não adicionou nada. Clique para adicionar ou deixe o campo vazio");
    }

    if (newTag) {
      return alert("Voce deixou uma tag no campo para adicionar, mas não adicionou nada. Clique para adicionar ou deixe o campo vazio");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>
              Criar Nota
            </h1>
            <ButtonText onClick={handleBack} title="Voltar" />
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                <NoteItem key={index} value={link} onClick={() => { handleRemoveLink(link) }} />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={index}
                    value={tag}
                    onClick={() => { handleRemoveTag(tag) }}
                  />
                ))
              }
              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>

          </Section>

          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}