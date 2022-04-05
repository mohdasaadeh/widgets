import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResult(data.query.search);
    };

    // This if statement was added to avoid delaying making the request when the page first loads,
    // but result.length variable caused a warning that it should be included in the second argument
    // of the useEffect function, then when it got added, it caused another problem which is when
    // the page first loads, the length of the result is undefined because there is no result, so
    // when the request is done, the result length gets a value which causes another unnecessary request.
    // So this issue let us find another way of handling this debouncing function.
    if (term && result.length) {
      const timeOutId = setTimeout(() => {
        search();
      }, 500);

      return () => {
        clearTimeout(timeOutId);
      };
    } else {
      search();
    }
  }, [term, result.length]);

  const resultRender = result.map((item) => {
    return (
      <div key={item.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{resultRender}</div>
    </div>
  );
};

export default Search;
