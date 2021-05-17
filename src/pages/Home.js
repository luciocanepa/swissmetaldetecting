import "../style/Home.css";
import React, { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';
import { Link } from "react-router-dom";

function Home() {
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
        limit: 2,
        type: "articles",
        limit: 2,
      });
      if (typeof data != 'undefined'){
        setArticles(data.objects)
      }
    };
    fetchData();
  });
  return (
    <div className="home">
      <div className="background">
      <div className="full-page">
        <img src="https://imgix.cosmicjs.com/8b5f4120-5512-11eb-bd98-5b3d403c56ce-logo.png" />
      </div>
      <div className="block">
        <span>
          <img src="https://imgix.cosmicjs.com/ef1dbdb0-5515-11eb-9299-3511b1382514-ticino.png" />
          <h1>Riscoprire la ricchezza archeologica del Ticino</h1>
        </span>
      </div>
      </div>
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
  );
}
export default Home;
