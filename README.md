# Api-Justify

A simple REST API that **justifies text** to 80 characters per line.  
Built with **Node.js**, **Express**, and **TypeScript** — and deployed on [Render.com](https://render.com).

---

## Live Demo

**Base URL:** [https://justify-api-y2ch.onrender.com](https://justify-api-y2ch.onrender.com)

---

## Features

- Justifies any plain text to **80 characters per line**
- Token-based authentication (`/api/token`)
- Rate limit: **80,000 words per token per day**
- Returns `402 Payment Required` if daily limit is exceeded
- No external libraries for text justification
- Written in **TypeScript**
- Deployed on **Render**

---

## API Endpoints

### 1. `POST /api/token`

Generate a unique token for authentication.

#### Request

```bash
curl -X POST https://justify-api-y2ch.onrender.com/api/token \
     -H "Content-Type: application/json" \
     -d '{"email": "foo@bar.com"}'

```

#### Response

{
"token": "0d5886dd-d5f7-41b3-a8b4-7b97b7de1807"
}

### 2. `POST /api/justify`

```bash
curl -X POST https://justify-api-y2ch.onrender.com/api/justify \
     -H "Content-Type: text/plain" \
     -H "Authorization: Bearer <token>" \
     --data "Here is a sample text that should be justified into lines of 80 characters..."
```

#### Response

```
Here is a sample text that should be justified into lines of 80
characters. You can paste any text here and it will be formatted
to have exactly eighty characters per line.
```

---

## Errors

Common HTTP error responses returned by the API:

- **400** : "Invalide body or text(different invalide errors)";
- **401** : "Missing token!" The token wasn't added in header;
- **402** : "Payment Required" Daily limit of 80,000 words exceeded;
- **403** : "Invalid token" The token is invalid;

## Installation (Local Development)

1. Clone the repository:

```bash
    git clone git@github.com:oleksandrholikov/test-technic.git Justified
    cd Justified
```

2. Install dependencies:

```bash
    npm install
```

3. Run locally in development mode:

```bash
    npm run dev
```

4. Build TypeScript:

```bash
    npm run build
```

5. Start compiled app:

```bash
    npm start
```

---

## API Testing (Postman)

All endpoints were tested manually using Postman.
Test collections are included in the repository inside the [`postman-tests/`](./postman-tests)

### How to Use

1. Open **Postman**
2. Click **Import → Files**
3. Select both `.json` files
4. Run the collections to verify all routes

### Author

**Oleksandr Holikov**
GitHub: [`api-justify`](https://github.com/oleksandrholikov/test-technic)
