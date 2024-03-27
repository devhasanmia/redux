import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todoList);
  return (
    <div className="mt-10 mb-10 min-w-96 h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">Todo List</h1>
      <hr />
      {todo.length === 0 ? (
        <div className="text-center text-5xl mt-4 text-gray-600">
        Todo Not Found at This Moment
      </div>
      ) : (
        <div className="w-9/12 mx-auto bg-gray-100 rounded p-8 shadow-md mt-10 mb-10 overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {todo.map(todo => (
                <tr key={todo.id}>
                  <td className="border px-4 py-2">{todo.name}</td>
                  <td className="border px-4 py-2">{todo.description}</td>
                  <td className="border px-4 py-2">{todo.status}</td>
                  <td className="border px-4 py-2">
                    <button onClick={
                      ()=> dispatch({
                        type:"DELETE_TODO",
                        payload: todo.id

                      })
                    } className="text-red-500 hover:text-red-700 focus:outline-none mx-2" title="Delete"><FaTrash /></button>
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none mx-2" title="Edit"><FaEdit /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TodoList;
