<div align="center">
 <h1>Task Manager Backend</h1>
</div>

<br><br>
## Description
Backend for task manager client

<br><br>
## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [More info](#more-info)

<br><br>
## Requirements

 ```
Node v18.20.8 or later
 ```

<br><br>
## Installation
  1. First clone this repository:
     
      ```
      git clone https://github.com/GabrielLaTorre/task-manager-be.git
      ```
  2. Go to project folder and install the dependencies 

      ```
        cd task-manager-be
        npm install
      ```

  3. Go to https://supabase.com/ to create an account and a new project
  <br><br>
  4. Run the following query in the supabase console to create the 'todos' table

     ```
        create table public.todos (
        id uuid not null default extensions.uuid_generate_v4 (),
        title text not null,
        completed boolean null default false,
        created_at timestamp,
        constraint todos_pkey primary key (id),
      ) TABLESPACE pg_default;
     ```
  <br><br>
  5. Create a .env file on root and set the necessary environment variables

   ```
        SUPABASE_URL=
        SUPABASE_KEY=
        PORT=
   ```
<br><br>
## Usage

- Run the command

    ```
    npm start
    ```
<br><br>
- GET http://localhost:3000/todos/        --> Get all TODO's
- POST http://localhost:3000/todos/       --> Create a new TODO      <b>body: { "title": "Learn English", completed: false }</b>
- PUT http://localhost:3000/todos/:id     --> Update TODO by id
- DELETE http://localhost:3000/todos/:id  --> Remove TODO by id
<br><br>
## More info

This project serves as a backend for task manager client. Providing a REST API that manages a task records through CRUD operations.

