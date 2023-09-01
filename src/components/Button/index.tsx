import { TouchableOpacityProps } from 'react-native';
import { Container, Loading, Title } from './styles';

type ButtonProps = {
  title: string
  isLoading?: boolean
} & TouchableOpacityProps

export function Button({title, isLoading = false, ...props}: ButtonProps) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...props}>
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
}