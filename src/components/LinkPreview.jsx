import React, { useEffect, useState } from "react";

const LinkPreview = ({ url }) => {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPreview() {
      try {
        const response = await fetch(`https://api.linkpreview.net/?key=7e4ba44919ba9b5f5349022bd26e1239&q=${url}`);
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        setPreview(data);
      } catch (err) {
        console.error("Error fetching link preview:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPreview();
  }, [url]);

  if (loading) return <p className="preview-text">Loading preview...</p>;
  if (error) return <p className="preview-text">Failed to load preview.</p>;

  return (
    <div className="link-preview-container">
      <div className="link-preview">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {preview.image && (
            <img src={preview.image} alt={preview.title} className="preview-image" />
          )}
          <h3 className="preview-title">{preview.title || "No title available"}</h3>
          <p className="preview-description">{preview.description || "No description available"}</p>
        </a>
      </div>
    </div>
  );
};

export default LinkPreview;
