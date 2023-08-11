import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks">
                <h1 className="font-bold text 3x2 mb-4 uppercase">Task App</h1>
            </Link>

            <button className="bg-indigo-700 px-3 py-2 rounded-lg">
            <Link to="/tasks-create"> Create Task </Link>
            </button>
            
            
        </div>
    );
}
