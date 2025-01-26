# docker-based-locations

This is a full-stack application for managing geo-locations, built with Next.js, Node.js, and Docker. The frontend uses PrimeReact and SCSS, while the backend utilizes Express and Faker for data generation. The backend also includes Swagger documentation for the API.

---

## Features

- **Frontend:**

  - Built with Next.js.
  - Styled using SCSS.
  - Uses PrimeReact for UI components.

- **Backend:**

  - Built with Express.
  - Uses Faker for generating mock data.
  - Includes Swagger documentation for the API.

- **Dockerized:**

  - Easily set up and run the app using Docker Compose.

---

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/NadaAhmedSaleh/docker-based-locations.git
cd docker-based-locations
```

### 2. Build the Docker Containers

Run the following command to build the Docker containers:

```bash
docker-compose build
```

### 3. Start the Application

Run the following command to start the application:

```bash
docker-compose up
```

### 4. Access the Application

- **Frontend:** Open your browser and go to [http://localhost:3001/](http://localhost:3001/)
- **Backend Swagger Documentation:** Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs)


---

## Technologies Used

### Frontend

- Next.js
- PrimeReact
- SCSS

### Backend

- Node.js
- Express
- Faker.js
- Swagger

---

## License

This project is licensed under the [MIT License](LICENSE).

