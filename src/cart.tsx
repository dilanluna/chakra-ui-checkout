import pennyBoard from './penny-board.png';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

export default function Cart() {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secodaryTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack
      width="full"
      height="full"
      padding="10"
      spacing="6"
      alignItems="flex-start"
      backgroundColor={backgroundColor}>
      <VStack
        spacing="3"
        alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{' '}
          <Button
            variant="unstyled"
            onClick={() => toggleColorMode()}>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack
        justifyContent="space-between"
        width="full">
        <HStack spacing="3">
          <Image src={pennyBoard} />
          <VStack
            spacing="0"
            alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text
              color={secodaryTextColor}
              fontSize="lg">
              PNYCOMP27541
            </Text>
          </VStack>
        </HStack>
        <Heading size="sm">$119.00</Heading>
      </HStack>
      <VStack
        spacing="4"
        width="full">
        <HStack
          justifyContent="space-between"
          width="full">
          <Text>Subtotal</Text>
          <Text as="b">$119.00</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          width="full">
          <Text>Shipping</Text>
          <Text as="b">$19.99</Text>
        </HStack>
        <HStack
          justifyContent="space-between"
          width="full">
          <Text>Taxes (estimated)</Text>
          <Text as="b">$23.80</Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack
        justifyContent="space-between"
        width="full">
        <Text>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
}
