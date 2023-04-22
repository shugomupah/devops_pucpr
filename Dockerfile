# Definir a imagem base
FROM node:14-alpine

# Criar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos necessários
COPY package.json package-lock.json ./
COPY public ./public
COPY src ./src

# Instalar as dependências
RUN npm install

# Compilar a aplicação
RUN npm run build

# Definir a porta da aplicação
EXPOSE 3000

# Iniciar a aplicação
CMD ["npm", "start"]
