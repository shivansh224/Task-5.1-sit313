import React, { useState } from 'react';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('Submission Successful!');
  };

  return (
    <div className="container">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="post-type-selector">
          <label>
            <input
              type="radio"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            Question
          </label>
          <label>
            <input
              type="radio"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
            Article
          </label>
        </div>

        {postType === 'question' ? (
          <>
            <div className="input-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Start your question with how, what, why, etc."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Description</label>
              <textarea
                placeholder="Describe your problem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="input-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter a descriptive title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Abstract</label>
              <textarea
                placeholder="Enter a brief abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Article Content</label>
              <textarea
                placeholder="Enter the content of the article"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="input-group">
          <label>Tags</label>
          <input
            type="text"
            placeholder="Add tags separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default App;
