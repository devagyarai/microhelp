import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-3xl font-bold mb-4">Task Detail - ID {id}</h2>
      <p className="text-gray-700">Here you can display detailed information about the task, steps, and status.</p>
    </div>
  );
};

export default TaskDetail;