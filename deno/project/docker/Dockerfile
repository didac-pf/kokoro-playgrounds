FROM denoland/deno:2.7.10 AS builder

WORKDIR /app

COPY deno.json .
COPY deno.lock .

RUN deno install

COPY . .

RUN deno build

EXPOSE 3000

CMD ["npm", "run", "start"]
