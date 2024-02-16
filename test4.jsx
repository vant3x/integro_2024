import React, { useState } from "react";
import axios from "axios";

const Palindrome = () => {
  const [inputText, setInputText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/checkPalindrome", {
        text: inputText,
      });
      setIsPalindrome({ isPalindrome: response.data.isPalindrome });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Introduce un texto"
        />
        <button type="submit">Comprobar palíndromo</button>
      </form>
      {isPalindrome !== null && (
        <div>
          {isPalindrome ? (
            <p>El texto introducido es un palíndromo.</p>
          ) : (
            <p>El texto introducido NO es un palíndromo.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Palindrome;
