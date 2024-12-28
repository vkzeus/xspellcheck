import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function XSpellCheck() {
  const [text, setText] = useState(""); // State for user input
  const [suggestion, setSuggestion] = useState(""); // State for correction suggestion

  // Handle user input and check for spelling errors
  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);

    if (!input) {
      setSuggestion(""); // Clear suggestion if input is empty
      return;
    }

    const words = input.split(" "); // Split input into words
    const firstIncorrectWord = words.find((word) => {
      const lowerCaseWord = word.toLowerCase();
      return customDictionary.hasOwnProperty(lowerCaseWord);
    });

    if (firstIncorrectWord) {
      const correctedWord = customDictionary[firstIncorrectWord.toLowerCase()];
      setSuggestion(`Did you mean: ${correctedWord}?`);
    } else {
      setSuggestion(""); // No incorrect words found
    }
  };

  return (
    <div className="x-spell-check">
      <h1>XSpellCheck</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        rows="5"
        cols="50"
      />
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </div>
  );
}

export default XSpellCheck;
