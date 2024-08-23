
export function Todos({todos}) {
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button>{todo.completed?"Completed":"Mark as Complete"}</button>
            </div>
        })}
    </div>
}