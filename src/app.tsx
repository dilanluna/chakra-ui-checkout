import { Container, Flex } from '@chakra-ui/react';
import Cart from './cart';
import Details from './details';

export default function App() {
  return (
    <Container
      padding="0"
      maxWidth="container.xl">
      <Flex
        paddingY={['0', '10', '20']}
        direction={{ base: 'column-reverse', md: 'row' }}
        height={{ base: 'auto', md: '100vh' }}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
