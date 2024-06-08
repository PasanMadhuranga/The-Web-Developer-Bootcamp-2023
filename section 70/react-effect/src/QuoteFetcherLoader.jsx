import { useState, useEffect } from "react";
const RANDOM_QUOTE_API_URL =
  "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      const response = await fetch(RANDOM_QUOTE_API_URL);
      const data = await response.json();
      const randomQuote = data.quote;
      setQuote(randomQuote);
      setLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
