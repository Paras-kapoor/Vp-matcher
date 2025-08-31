import React, { useState } from "react";

const SearchResults = ({ results, loading }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [recentUploads, setRecentUploads] = useState(false);

  const filteredResults = results.filter((result) => {
    if (categoryFilter && result.category !== categoryFilter) return false;
    if (recentUploads && !result.recent) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={recentUploads}
            onChange={(e) => setRecentUploads(e.target.checked)}
            className="form-checkbox text-violet-600"
          />
          <span className="text-gray-200">Recently Uploaded</span>
        </label>
      </div>

      {/* Results */}
      {filteredResults.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="bg-gray-800 p-4 rounded-lg hover:scale-105 transform transition duration-300"
            >
              <img
                src={result.image}
                alt={result.name}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">{result.name}</h3>
              <p className="text-gray-400 text-sm">
                Category: {result.category}
              </p>
              <p className="text-gray-400 text-sm">
                Similarity: {(result.score * 100).toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchResults;
