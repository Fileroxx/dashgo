import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex 
    w="100vw"
    h="100vh" 
    alignItems="center"
    justifyContent="center"
    > 

      <Flex 
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      >
        <Stack spacing="4">

        <div>
        <Input name="email" type="email" label="E-mail" />
        </div>
   
        <div>
          <Input name="password" type="password" label="Senha" />
        </div>

        </Stack>
       

        <Button size="lg" type="submit" mt="6" colorScheme="pink">Entrar</Button>
      </Flex>

    </Flex>
  )
}
