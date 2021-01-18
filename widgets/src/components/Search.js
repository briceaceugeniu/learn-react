import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("donald");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const resultList = results.map((result) => {
    return (
      <div key={result.pageid} className={`item`}>
        <div className={`right floated content`}>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className={`ui button`}
          >
            Go
          </a>
        </div>
        <div className={`content`}>
          <div className={`header`}>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
        <br />
      </div>
    );
  });

  return (
    <div>
      <div className={`ui form`}>
        <div className={`field`}>
          <label htmlFor="inputField">Enter Search Term</label>
          <input
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            type="text"
            className={`input`}
            id="inputField"
          />
        </div>
      </div>
      <div className={`ui celled list`}>{resultList}</div>
    </div>
  );
};

export default Search;
