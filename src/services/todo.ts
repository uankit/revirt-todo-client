const url = "https://revirt-space-todo.herokuapp.com/api";

export const Todos = {
  getAll: (): Promise<Response> => fetch(url, { method: "GET" }),
  addTodo: (body:any): Promise<Response> =>
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
    updateTodo: (body:any):Promise<Response> => fetch(`${url}/${body.id}`,{
        method:"PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body), 
    }),
    deleteTodo:(id:any):Promise<Response> => fetch(`${url}/${id}`,{
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),   
    })
};
