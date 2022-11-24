import { Response, Request } from "express";
import Todo from "../../models/todo";
import { ITodo } from "../../types/todo";

//get todos
const getTodos = async(req: Request, res: Response): Promise<void> => {
    try{
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({todos})
    } catch (error){
        throw error
    }
    
}

//add to todo list
const addTodo = async(req: Request, res: Response): Promise<void> => {
    try
    {
        const body = req.body as Pick<ITodo, "name" | "description" | "status">
        const todo: ITodo = new Todo({ 
            name: body.name, 
            description: body.description,
            status: body.status,
        })
        const newTodo: ITodo[] = await todo.save()
        const allTodos: ITodo[] = await todo.find()

        res.status(200).json({ message: 'Todo added', todo: newTodo, todos: allTodos})

    } catch(error){
        throw error
    }
}




export { getTodos, addTodo}
