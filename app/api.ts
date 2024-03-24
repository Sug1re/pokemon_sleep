import { todo } from "node:test";
import { Task } from "./types";

export const getALLTodos = async (): Promise<Task[]> => {
    const res = await fetch ("http://localhost:3001/tasks",{
        cache: "no-store", //SSR
    }
    );
    const todos = res.json();

    return todos;
};

export const Check = async (): Promise<Task> => {
    const res = await fetch ("http://localhost:3001/tasks",{
        method: "Post",
        headers:{
            "Content-Type":"appleication/json",
        },
        body: JSON.stringify(todo)
    }
    );
    const newtodo = res.json();

    return newtodo;
};