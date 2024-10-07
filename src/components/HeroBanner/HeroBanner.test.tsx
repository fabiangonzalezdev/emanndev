// HeroBanner.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import HeroBanner from './HeroBanner';

const esData = {
  title: "👋 Soy Fabian Gonzalez",
  subtitle: "Ingeniero de Software experto en AEM, HTML, CSS, JS, PHP, MySQL, ReactJS. Apasionado por la tecnología y el desarrollo web 🤓",
  buttons: [
    { text: "Agenda reunión laboral", color: "blue" },
    { text: "Descarga mi currículum", color: "green" }
  ],
  links: [
    { text: "Instagram", url: "https://instagram.com" },
    { text: "TikTok", url: "https://tiktok.com" }
  ]
};

describe('HeroBanner', () => {
  it('renders the hero banner with correct content', () => {
    render(
      <ChakraProvider>
        <HeroBanner data={esData} />
      </ChakraProvider>
    );

    // Verifica el contenido en español
    expect(screen.getByText('👋 Soy Fabian Gonzalez')).toBeInTheDocument();
    expect(screen.getByText(/Ingeniero de Software experto/)).toBeInTheDocument();
    expect(screen.getByText('Agenda reunión laboral')).toBeInTheDocument();
    expect(screen.getByText('Descarga mi currículum')).toBeInTheDocument();
  });

  it('calls handleClick when button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(
      <ChakraProvider>
        <HeroBanner data={esData} />
      </ChakraProvider>
    );

    const button = screen.getByText('Agenda reunión laboral');
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith("Button clicked!");
    consoleSpy.mockRestore();
  });
});
