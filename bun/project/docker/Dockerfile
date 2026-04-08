FROM oven/bun:1.3 AS builder

WORKDIR /app

COPY package.json .
COPY bun.lock .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]
