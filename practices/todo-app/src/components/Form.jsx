import quickId from 'quickid';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const formInput = {
    id: quickId.generate(),
    name: "",
    description: "",
    status: "todo"
  }

  const [input, setInput] = useState(formInput)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: input
    })
    toast.success('Todo added successfully!');
    setInput(formInput)
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded p-8 shadow-md mt-10 mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Todo</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" onChange={handleChange} required id="name" name="name" value={input.name} className="w-full px-3 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
          <textarea id="description" onChange={handleChange} name="description" value={input.description} className="w-full px-3 py-2 border rounded-lg resize-none" rows="4"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status:</label>
          <select id="status" name="status" onChange={handleChange} value={input.status} className="w-full px-3 py-2 border rounded-lg">
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-purple-500 w-full text-white font-bold py-2 px-4 rounded">
            Add Todo
          </button>
        </div>
      </form>
      <Toaster position="top-right"
        reverseOrder={true} />
    </div>
  );
};

export default Form;
