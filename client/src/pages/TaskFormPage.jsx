import { useForm } from 'react-hook-form'
import { useEffect } from 'react';
import  {createTask, deleteTask, updateTask, getTask} from '../api/tasks.api.js';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-hot-toast';



export function TaskFormPage() {


    const { 
        register, 
        handleSubmit, 
        formState: { errors }, 
        setValue 
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = handleSubmit(async data => {
        if(params.id) {
            await updateTask(params.id, data);
            toast.success('Tarea actualizada', {
                position: 'bottom-right',
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }else {
            await createTask(data);
            toast.success('Tarea Creada con exito', {
                position: 'bottom-right',
                style:{
                    background: "#101010",
                    color: "#fff"
                }
            });
        
    }
    navigate("/tasks");

    });

    //LLENADO DE DATOS EN EL FORMULARIO AL SELECCIONAR UA TAREA
    useEffect(() => {
        async function loadTask() {
        
        if(params.id) {
            const res = await getTask(params.id);
            setValue('title', res.data.title);
            setValue('description', res.data.description);
        }
    }
    loadTask();
    }, []);


    return(
        <div className="max-w-xl mx-auto">

            <form onSubmit={onSubmit}>
                <input type="text" 
                placeholder="Title"
                {...register("title", {required: true})}
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span>Titulo requerido</span>}

                <textarea rows="3" 
                placeholder="Description" 
                {...register("description", {required: true} )} 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                {errors.description && <span>Descripcion requerido</span>}

                <button className="bg-indigo-700 px-3 py-2  w-full rounded-lg">Save</button>
            </form>


            {params.id && (
            
        <div className="flex justify-end">
            <button 
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () =>{
                const accepted = window.confirm('Deseas borrar esta tarea');
                if (accepted) {
                    await deleteTask(params.id);
                    toast.remove('Tarea Eliminada'), {
                        position: 'bottom-right', 
                        style: {
                            background: "#101010",
                            color: "#fff"
                        }
                    }
                    navigate("/tasks");
                }
            }}
            >
                
            Delete
            </button>
        </div>
            )}


        </div>
    )
}