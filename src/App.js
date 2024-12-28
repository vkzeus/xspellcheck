import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function XSpellCheck() {
  const [text, setText] = useState(""); 
  const [suggestion, setSuggestion] = useState(""); 

  
  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);

    if (!input) {
      setSuggestion(""); 
      return;
    }

    const words = input.split(" "); 
    const firstIncorrectWord = words.find((word) => {
      const lowerCaseWord = word.toLowerCase();
      return customDictionary.hasOwnProperty(lowerCaseWord);
    });

    if (firstIncorrectWord) {
      const correctedWord = customDictionary[firstIncorrectWord.toLowerCase()];
      setSuggestion(`Did you mean: ${correctedWord}?`);
    } else {
      setSuggestion(""); 
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
