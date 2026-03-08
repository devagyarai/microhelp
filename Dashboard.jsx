const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-xl mb-2">Your Tasks</h3>
          <p className="text-gray-600">Overview of all your active tasks.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-xl mb-2">Completed Tasks</h3>
          <p className="text-gray-600">Track your finished tasks here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;