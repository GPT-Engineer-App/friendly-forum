import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [threads, setThreads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newThreadTitle, setNewThreadTitle] = useState("");
  const [newThreadText, setNewThreadText] = useState("");

  const handleAddThread = () => {
    if (newThreadTitle) {
      const newThread = {
        id: threads.length + 1,
        title: newThreadTitle,
        text: newThreadText,
      };
      setThreads([...threads, newThread]);
      setNewThreadTitle("");
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredThreads = threads.filter((thread) => thread.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Forum Threads</h1>

      <div className="mb-6">
        <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Search threads..." value={searchTerm} onChange={handleSearchChange} />
        <FaSearch className="inline ml-2 text-lg" />
      </div>

      <div className="mb-6">
        <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Start a new thread..." value={newThreadTitle} onChange={(e) => setNewThreadTitle(e.target.value)} />
        <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Thread details..." value={newThreadText} onChange={(e) => setNewThreadText(e.target.value)}></textarea>
        <button className="btn btn-primary ml-2 mt-2" onClick={handleAddThread}>
          Add Thread
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Threads</h2>
        {filteredThreads.length > 0 ? (
          <ul className="list-disc pl-5">
            {filteredThreads.map((thread) => (
              <li key={thread.id} className="mt-2">
                <strong>{thread.title}</strong>
                <p>{thread.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No threads found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
