#Partimos de uma imagem existente
FROM node:10

#Definição dos diretórios usados
WORKDIR /usr/app
COPY . ./

#Instalaçãop das dependências
RUN yarn

#Exposição da porta a ser usada
EXPOSE 3333

# Executar a aplicação
CMD yarn start