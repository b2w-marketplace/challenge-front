# <> Desafio Frontend BIT - SP | Nayara </>

## Sobre o desafio:

Esse teste consiste em implementar uma aplicação client-side, que consulte uma [API](http://www.mocky.io/v2/5a5e38f3330000b0261923a5) e mostre os dados do perfil de um usuário. Esta aplicação deve funcionar nos navegadores mais recentes do mercado.

Layout de referência para o teste:
![Layout](https://github.com/b2w-marketplace/code-challenge/blob/master/files/layout-code-challenge.jpg)


## Requisitos:

Desenvolva a página seguindo os seguintes critérios:

- Pré-processador de CSS (de preferência sass);
- Boa UX, design responsivo; 
- Angular ou React para o desenvolvimento;
- Build do projeto na pasta 'dist'.

## Detalhes do projeto:

- Pré-processador CSS: SASS;
- Biblioteca JavaScript: React (utilizando `create-react-app`);
- Testes de a11y foram realizados utilizando o VoiceOver como leitor de tela;
- Importante: No [link original da API](http://www.mocky.io/v2/5a5e38f3330000b0261923a5), o endereço da imagem está apontando para a *página* da imagem, não para a imagem em si, que tem um link diferente. Por isso, acabei utilizando esse [mock alterado](http://www.mocky.io/v2/5aadcb062f00003a00273cb7), com o link editado e apontando diretamente para a imagem correta.

## Como rodar o projeto:

- Clone ou baixe o repositório.

  - *Rodando a build:* Há uma build na pasta `dist` que pode ser *** utilizando Node e [serve](https://github.com/zeit/serve) (`npm install -g serve` caso não tenha instalado):

  `serve -s dist` na pasta do projeto.

  - *Rodando o src:* Na pasta raíz do projeto, rode os seguintes comandos no terminal:

  `npm install`
  `npm start`

  Isso irá inicializar o projeto na porta 3000. Acesse [localhost:3000](http://localhost:3000/) para visualizar.

- Para rodar os testes (feitos em [Jest](https://facebook.github.io/jest/)), após o `npm install` e ainda na pasta raíz, rode `npm test` e os resultados dos testes aparecerão no terminal.
