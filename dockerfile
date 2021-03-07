FROM svelte:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["svelte", "src/index.js"]
