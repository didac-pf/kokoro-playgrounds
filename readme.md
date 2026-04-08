<div align="center">

# Playgrounds

**Lightweight dev environments: save the file, see the result.**

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Deno](https://img.shields.io/badge/Deno-000000?style=for-the-badge&logo=deno&logoColor=white)](https://deno.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)

</div>

---

## Usage

Pick a playground folder, then start the dev stack:

```bash
cd rust   # or node, deno, bun, …
docker compose up app-dev
```

---

## Introduction

This repository is a collection of playgrounds for languages and stacks I care about. The goal is to spin something up quickly, experiment, and learn without ceremony.

Each playground stays **small** and optimizes for **tight feedback loops** (roughly: *save file → see output*).

These work well for learning a language or framework, or for sketching an idea.

### What’s included

| Playground | Directory |
| :--------- | :-------- |
| Node       | `node/`   |
| Deno       | `deno/`   |
| Bun        | `bun/`    |
| Rust       | `rust/`   |
| Python     | `python/` |

> More may land here over time.

---

## Usage

Pick a playground folder, then start the dev stack:

```bash
cd rust   # or node, deno, bun, …
docker compose up app-dev
```

---

## Requirements

- **Docker** on your machine.

Playgrounds are developed on **Linux (Debian-based)**; other OS setups should behave similarly.

---

> **Note:** Want to add your own playground? Pull requests are welcome.
Please ensure your playground follows the same [Usage](#usage) defined above.
