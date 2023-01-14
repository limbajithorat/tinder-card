import React, { useState } from "react";
import "./PostCard.css";

const PostCard = () => {
  const [state, setstate] = useState({ name: "", url: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const postURL = "http://localhost:8000/tinder/cards"; //Our previously set up route in the backend
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // We should keep the fields consistent for managing this data later
        name: state.name,
        imgUrl: state.url,
      }),
    }).then(() => {
      // Once posted, the user will be notified
      alert("Data Uploaded to DB");
    });

    console.log(state);
  };
  return (
    <div className="postcard">
      <form className="postcard_body" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => setstate({ ...state, name: e.target.value })}
            placeholder="Enter Name"
          />
        </label>
        <label>
          Image Url:
          <input
            type="text"
            name="url"
            value={state.url}
            onChange={(e) => setstate({ ...state, url: e.target.value })}
            placeholder="Enter Image Url"
          />
        </label>
        <input className="submit" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default PostCard;
