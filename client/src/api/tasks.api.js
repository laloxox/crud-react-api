import  axios  from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/task/'
})

export const getAllTasks = () => tasksApi.get('/');


export const getTask = (id) => tasksApi.get(`/${id}/`);


export const createTask = (tasks) => {
    return axios.post('http://localhost:8000/tasks/api/v1/task/', tasks);
}

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);
