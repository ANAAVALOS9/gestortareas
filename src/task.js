// obtener la lista de tareas del almacenamiento
let task = JSON.parse(localStorage.getItem('tasks')) || [];

// funcion para agregar una tarea a la lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        test: task,
        completed: false,
    };
}