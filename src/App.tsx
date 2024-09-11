import { Box, Button, Flex, Heading, Image, Stack, Text, Link } from '@chakra-ui/react';

const App = () => {
  return (
    <Box as="main" padding="4" minHeight="100vh" bg="gray.100">
      <Flex direction={["column", "row"]} justifyContent="space-between" alignItems="center">
  
        <Box>
          <Heading as="h1" size="xl">👋 Soy Fabian Gonzalez</Heading>
          <Text fontSize="lg" mt="4">
            Ingeniero de Software experto en AEM, HTML, CSS, JS, PHP, MySQL, ReactJS. Apasionado por la tecnología y el desarrollo web 🤓
          </Text>
          <Stack mt="6" direction="row" spacing="4">
            <Button colorScheme="blue">Agenda reunión laboral</Button>
            <Button colorScheme="green">Descarga mi currículum</Button>
          </Stack>
          <Stack mt="6" direction="row" spacing="4">
            <Link href="https://instagram.com" isExternal>Instagram</Link>
            <Link href="https://tiktok.com" isExternal>TikTok</Link>
          </Stack>
        </Box>
  
        <Box mt={["6", "0"]}>
          <Image src="/path-to-image.jpg" alt="Fabian Gonzalez" boxSize={["150px", "250px"]} objectFit="cover" borderRadius="full" />
        </Box>
      </Flex>

      {/* Footer */}
      <Box mt="12" textAlign="center">
        <Text>© 2024. Creado por Fabian Gonzalez.</Text>
      </Box>
    </Box>
  );
};

export default App;
