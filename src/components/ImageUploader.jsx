import React, { useState } from "react";

const ImageUploader = ({ onSearch }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageUrl(""); // Clear URL input
      setError("");
    }
  };

  const uploadImage = (e) => {};

  const handleUrlInput = (event) => {
    const url = event.target.value;
    setImageUrl(url);
    setImage(null); // Clear file input
    setError("");
  };

  const handleSearchClick = () => {
    if (image || (imageUrl && validateUrl(imageUrl))) {
      onSearch(image || imageUrl);
    } else {
      setError(
        "Please upload a valid image file or provide a valid image URL."
      );
    }
  };

  const validateUrl = (url) => {
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i;
    return urlPattern.test(url);
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Upload or Paste Image URL</h2>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="file"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-black
              hover:file:bg-violet-100"
        />

        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={handleUrlInput}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400"
        />
        <button
          onClick={handleSearchClick}
          className="bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {image && (
        <div className="mt-6">
          <p className="text-gray-400">Preview:</p>
          <img
            src={image}
            alt="Uploaded Preview"
            className="rounded-lg w-48 mt-4"
          />
        </div>
      )}
      {imageUrl && validateUrl(imageUrl) && (
        <div className="mt-6">
          <p className="text-gray-400">Preview:</p>
          <img
            src={imageUrl}
            alt="URL Preview"
            className="rounded-lg w-48 mt-4"
          />
          <button onClick={uploadImage}>Upload Image</button>
        </div>
      )}
    </section>
  );
};

export default ImageUploader;
