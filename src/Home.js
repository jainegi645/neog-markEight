import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "😂": " Joy",
  "😉 ": " Winking",
  "🤮": "Vomiting",
  "🥵 ": "Hot",
  "🥶 ": "Cold ",
  "😟": "Worried ",
};

const emojis = Object.keys(emojiDictionary);

function Home() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <>
      <div className="wrapper">
        <p>Recognise Emonji</p>
        <span>a React web app to recognise emonji</span>
      </div>

      <div className="box">
        <input
          onChange={changeHandler}
          value={emoji}
          placeholder={"Search your emoji here"}
        />

        <div className="output">
          <h2 className="content"> {emoji} </h2>
          <h3 className="content"> {meaning} </h3>
          {emojis.map((emoji) => (
            <span
              onClick={() => emojiClickHandler(emoji)}
              className="emonji_content"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
