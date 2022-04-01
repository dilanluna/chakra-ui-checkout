import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

function Form() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <SimpleGrid
      columns={2}
      columnGap="3"
      rowGap="6"
      width="full">
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="John" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Doe" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Blvd. Broken Dreams 21" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="San Francisco" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="mx">Mexico</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <Checkbox defaultChecked>Ship to billing address</Checkbox>
      </GridItem>
      <GridItem colSpan={2}>
        <Button
          size="lg"
          width="full"
          variant="primary">
          Place Order
        </Button>
      </GridItem>
    </SimpleGrid>
  );
}

export default function Details() {
  return (
    <VStack
      width="full"
      height="full"
      padding="10"
      spacing="10"
      alignItems="flex-start">
      <VStack
        spacing="3"
        alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If yout already have an account, click here</Text>
      </VStack>
      <Form />
    </VStack>
  );
}
