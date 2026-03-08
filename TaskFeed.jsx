import { Link } from "react-router-dom";

const TaskFeed = () => {
  const tasks = [
    { id: 1, title: "Fix Bug in React App", description: "Resolve UI issue in TaskFeed page." },
    { id: 2, title: "Design Landing Page", description: "Create a responsive landing page layout." },
    { id: 3, title: "Write API Integration", description: "Connect frontend to backend API." },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Task Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map(task => (
          <div key={task.id} className="bg-white p-5 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <Link
              to={`/tasks/${task.id}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskFeed;