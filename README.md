# exoBlog

## Main Routes

| Method | Endpoint | Description                                 |
| ------ | -------- | ------------------------------------------- |
| GET    | `/`      | Displays a welcome message                  |
| ALL    | `*`      | Returns a 404 error for non-existent routes |

## Routes `/api/users`

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/users`     | Retrieves all users    |
| GET    | `/api/users/:id` | Retrieves a user by ID |
| POST   | `/api/users`     | Creates a new user     |
| PUT    | `/api/users/:id` | Updates a user by ID   |
| DELETE | `/api/users/:id` | Deletes a user by ID   |

## Routes `/api/posts`

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/posts`     | Retrieves all posts    |
| GET    | `/api/posts/:id` | Retrieves a post by ID |
| POST   | `/api/posts`     | Creates a new post     |
| PUT    | `/api/posts/:id` | Updates a post by ID   |
| DELETE | `/api/posts/:id` | Deletes a post by ID   |
