import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Container, Links, Content } from './styles';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleRemove() {
    const confirm = window.confirm('Deseja mesmo excluir essa nota?');

    if (confirm) {
      api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {
        data && (
          <main>
            <Content>
              <ButtonText title="Excluir nota" onClick={handleRemove} />

              <h1>{data.title}</h1>
              <p>{data.description}</p>

              {
                data.links &&
                <Section title="Link uteis">
                  <Links>
                    {
                      data.links.map(link => {
                        const url = link.url.startsWith('http://') || link.url.startsWith('https://') ? link.url : 'http://' + link.url;
                        return (
                          <li key={String(link.id)}>
                            <a href={url} target='_blank' rel="noreferrer">
                              {link.url}
                            </a>
                          </li>
                        );
                      })
                    }
                  </Links>
                </Section>

              }

              {
                data.tags &&
                <Section title="Marcadores">
                  {
                    data.tags.map(tag => (
                      <Tag key={String(tag.id)} title={tag.name} />
                    ))
                  }
                </Section>
              }

              <Button title="Voltar" onClick={handleBack} />
            </Content>
          </main>
        )
      }

    </Container>
  );
}
