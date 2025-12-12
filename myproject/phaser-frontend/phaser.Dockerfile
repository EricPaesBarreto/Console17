FROM node:25-trixie
WORKDIR /app


# Copy package.json and package-lock.json (or yarn.lock) first for better caching
COPY package.json package-lock.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "host"]
RUN npm run build
EXPOSE 5173

