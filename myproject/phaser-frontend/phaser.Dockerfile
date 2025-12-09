FROM node:25-trixie
WORKDIR /app


# Copy package.json and package-lock.json (or yarn.lock) first for better caching
COPY package.json package-lock.json ./
RUN npm install

EXPOSE 5173
CMD ["npm", "run", "host"]


