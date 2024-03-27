import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-indigo-950 py-4 px-8 flex justify-between items-center">
            <div className="flex items-center">
               <NavLink to="/"> <h1 className='font-medium text-white cursor-pointer'>Task Ease</h1></NavLink>
            </div>
            <div className="flex items-center space-x-6">
                <NavLink to="/todolist" className="text-white hover:text-gray-300 transition duration-300">Todo List</NavLink>
                <NavLink to="/recentcomplete" className="text-white hover:text-gray-300 transition duration-300">Recent Completed</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
