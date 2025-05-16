import supabase from "../database/client.js";
import { Todo } from "../models/Todo.js";

export class TodoService {
    async getTodos() {
        const { data, error } = await supabase
            .from("todos")
            .select("*")
            .order("created_at", { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

        console.log("Fetched todos:", data);

        return data.map((todo) => new Todo(todo.id, todo.title, todo.completed));
    }

    async addTodo(title) {
        const { data, error } = await supabase
            .from("todos")
            .insert([{ title, completed: false }])
            .select();

        if (error) {
            throw new Error(error.message);
        }

        console.log("Added todo:", data);

        return data[0];
    }

    async updateTodo(updateData, id) {
        const { data, error } = await supabase
            .from("todos")
            .update(updateData)
            .eq("id", id)
            .select();

        if (error) {
            throw new Error(error.message);
        }

        console.log("Updated todo:", data);

        return data[0];
    }

    async deleteTodo(id) {
        const { data, error } = await supabase
            .from("todos")
            .delete()
            .eq("id", id)
            .select();

        if (error) {
            throw new Error(error.message);
        }

        console.log("Deleted todo:", data);

        return data[0];
    }
}