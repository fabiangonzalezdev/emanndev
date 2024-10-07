// App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';

describe('App', () => {
  it('renders HeroBanner in Spanish by default', async () => {
    render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );

    // Verifica que el contenido en español se muestra inicialmente
    expect(await screen.findByText('👋 Soy Fabian Gonzalez')).toBeInTheDocument();
    expect(screen.getByText('Agenda reunión laboral')).toBeInTheDocument();
  });

  it('switches to English content when the button is clicked', async () => {
    render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );

    // Simula el cambio de idioma
    const toggleButton = screen.getByText('Cambiar a Inglés');
    fireEvent.click(toggleButton);

    // Verifica que el contenido en inglés se muestra después del cambio
    expect(await screen.findByText("👋 I'm Fabian Gonzalez")).toBeInTheDocument();
    expect(screen.getByText('Schedule a Meeting')).toBeInTheDocument();
  });
});
