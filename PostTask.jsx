const PostTask = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold mb-4">Post a New Task</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Task Description"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Post Task
        </button>
      </form>
    </div>
  );
};

export default PostTask;