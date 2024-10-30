// eslint.config.js
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  // Configurações principais
  'eslint:recommended',
  react.configs.recommended, // Regras recomendadas para React
  reactHooks.configs.recommended, // Regras recomendadas para hooks do React
  prettier,
  eslintConfigPrettier, // Desativa regras de formatação conflitantes

  // Plugins e regras adicionais
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      // Organização dos imports
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Módulos nativos (ex.: fs, path)
            'external', // Pacotes externos (ex.: React, Lodash)
            'internal', // Imports internos do projeto (útil para alias ou imports absolutos)
            'parent', // Diretório pai (ex.: ../utils)
            'sibling', // Diretório atual (ex.: ./Component)
            'index', // Arquivos index.js ou index.ts
          ],
          'newlines-between': 'always', // Linha em branco entre grupos de imports
          alphabetize: { order: 'asc', caseInsensitive: true }, // Ordenação alfabética
        },
      ],
      'import/newline-after-import': ['warn', { count: 1 }], // Linha em branco após o último import
      'import/no-duplicates': 'warn', // Evita imports duplicados
      'react/react-in-jsx-scope': 'on', // Desativa a necessidade de React no escopo para JSX (React 17+)
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
  },
];
