module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(jest-watch-typeahead)/)', // Asegúrate de que jest-watch-typeahead sea transformado correctamente
    ],
    testEnvironment: 'jsdom',
  };
  