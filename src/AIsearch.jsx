import { useState } from "react";
import "./aisearch.css";

function AISearch({ onSearch }) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!prompt.trim()) return;

    onSearch(prompt);
  }

  return (
    <form
      className="ai-search"
      onSubmit={handleSubmit}
    >
      <h3>✨ AI Fashion Finder</h3>

      <div className="ai-search-row">
        <input
          type="text"
          placeholder="Describe your outfit preference..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default AISearch;