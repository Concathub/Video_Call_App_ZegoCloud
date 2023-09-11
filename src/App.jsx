import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/room/${roomId}`, { replace: true });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl mb-4 text-center">Join a Meeting</h1>
        <input
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          type="text"
          placeholder="Enter meeting ID"
          className="w-full p-2 border rounded-md mb-3"
        />
        <button
          onClick={handleJoin}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-bold"
        >
          Join Meeting
        </button>
      </div>
    </div>
  );
}

export default App;
