import React, { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';
import { Link } from "react-router-dom";
import "../style/Articoli.css"

function Articoli(){
const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Cosmic = require("cosmicjs");
      const api = Cosmic();
      const bucket = api.bucket({
        slug: "swissmetaldetecting-production",
        read_key: "LtDLrcwY3i0DL5lefO19aB6oU8Qu2bqfWhWQdHCu5MPCCAD4Nr",
      });
      const data = await bucket.getObjects({
        limit: 20,
        type: "articles",
        limit: 20,
      });
      setArticles(data.objects);
    };
    fetchData();
  });
    return(
        <div className="articoli">
            <div className="article-section">
            {articles.map((a) => {
                return (
                    <div className="article-preview">
                    <img src={a.metadata.img.imgix_url}></img>
                    <div className="text-side">
                        <Link to={`/articoli/${a.slug}`}><h1>{a.metadata.title}</h1></Link>
                        <h3>{a.metadata.author}</h3>
                        <p><Markdown>{a.metadata.description}</Markdown></p>
                    </div>
                    </div>
                );
        })}
        </div>
        </div>
    )
}
export default Articoli