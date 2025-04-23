import React from 'react'

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Dashboard</h1>
        <p className="text-center">Welcome to your dashboard!</p>
        {/* Profile  */}
        <div className="flex justify-center items-center mt-6">
            <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user?.name}`} alt="Profile" className="rounded-full w-16 h-16" />
            <div className="ml-4">
                <h2 className="text-xl font-semibold">User Name</h2>
                <p className="text-gray-600">
                    {user.name}
                </p>
                <p className="text-gray-600">
                    {user.email}
                </p>
            </div>
        </div>
                    
        {/* Add more dashboard content here */}
        {/* LogOut  */}
        <button
            onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "/login";
            }}
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
        >   

            Logout
        </button>

    </div>
  )
}

export default Dashboard