/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function TasksCard({ task }) {
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <hr />
        </div>
    );
    }

