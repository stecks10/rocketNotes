import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container {...rest} type='button' isActive={isActive}>
      {title}
    </Container>
  )
}