# Warehouse Management System — Angular Frontend

The Angular client for the [Spring Boot Warehouse/Inventory Management System](https://github.com/shimasheibani/Inventory-Mgt-System-SpringBoot) backend. Provides the UI for authentication, inventory management, and transaction tracking.

## Features

- JWT login / registration, with the token and role encrypted (AES via crypto-js) before being stored in `localStorage`
- Route guards restricting authenticated-only and admin-only pages
- Product management with image upload
- Category and supplier management (create, list, update, delete)
- Purchase and sell transaction forms
- Transaction history with search and pagination
- Dashboard overview

## Tech Stack

Angular 19, TypeScript, RxJS, crypto-js.

## Getting Started

### Prerequisites
- Node.js
- The [backend API](https://github.com/shimasheibani/Inventory-Mgt-System-SpringBoot) running (defaults to `http://localhost:8080/api`)

### Install

```bash
npm install
```

### Configure

The backend base URL is set in `src/app/service/api.service.ts` (`BASE_URL`). Update it if your backend runs somewhere other than `http://localhost:8080/api`.

### Run

```bash
ng serve
```

Open `http://localhost:4200/` — the app reloads automatically on source changes.

### Build

```bash
ng build
```

Production artifacts are written to `dist/`.

### Tests

```bash
ng test
```

## License

MIT
