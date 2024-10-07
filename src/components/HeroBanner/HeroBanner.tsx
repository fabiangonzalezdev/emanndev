// HeroBanner.tsx
import React from 'react';
import { Box, Button, Flex, Heading, Image, Stack, Text, Link } from '@chakra-ui/react';
import './Herobanner.scss';

interface HeroBannerProps {
  data: {
    title: string;
    subtitle: string;
    buttons: { text: string; color: string }[];
    links: { text: string; url: string }[];
  };
}

const HeroBanner: React.FC<HeroBannerProps> = ({ data }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Box className="hero-banner" as="section" padding="4" minHeight="100vh" bg="gray.100" position="relative" overflow="hidden">
      <Flex direction={["column", "row"]} justifyContent="space-between" alignItems="center">
        <Box className="hero-banner__content">
          <Heading as="h1" className="hero-banner__title">{data.title}</Heading>
          <Text className="hero-banner__subtitle">{data.subtitle}</Text>
          <Stack mt="6" direction="row" spacing="4">
            {data.buttons.map((button, index) => (
              <Button key={index} colorScheme={button.color} onClick={handleClick}>{button.text}</Button>
            ))}
          </Stack>
          <Stack mt="6" direction="row" spacing="4">
            {data.links.map((link, index) => (
              <Link key={index} href={link.url} isExternal>{link.text}</Link>
            ))}
          </Stack>
        </Box>

        <Box className="hero-banner__image-wrapper" mt={["6", "0"]}>
          <Image src="/path-to-image.jpg" alt="Fabian Gonzalez" className="hero-banner__image" />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroBanner;
