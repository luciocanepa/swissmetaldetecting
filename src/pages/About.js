import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import "../App.css";
import "../style/About.css";

function About() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Cosmic = require("cosmicjs");
      const api = Cosmic();
      const bucket = api.bucket({
        slug: "swissmetaldetecting-production",
        read_key: "LtDLrcwY3i0DL5lefO19aB6oU8Qu2bqfWhWQdHCu5MPCCAD4Nr",
      });
      const data = await bucket.getObjects({
        type: "authors",
        props: "metadata",
        limit: 20,
      });
      if (typeof data != 'undefined'){
        setAuthors(data.objects)
      }
    };
    fetchData();
  });
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Cosmic = require("cosmicjs");
      const api = Cosmic();
      const bucket = api.bucket({
        slug: "swissmetaldetecting-production",
        read_key: "LtDLrcwY3i0DL5lefO19aB6oU8Qu2bqfWhWQdHCu5MPCCAD4Nr",
      });
      const data_ = await bucket.getObjects({
        limit: 1,
        type: "articles",
        limit: 1,
      });
      if (typeof data_ != 'undefined'){
        setArticles(data_.objects)
      }
    };
    fetchData();
  });
  return (
    <div className="about">
      <div className="quote">
        <img
          id="left-quote"
          src="https://imgix.cosmicjs.com/d88d2320-573a-11eb-9c82-13d7ea5f90b7-left-quote.png"
        />
        <h1>Metaldetecting: una passione che è scoperta</h1>
        <img
          id="right-quote"
          src="https://imgix.cosmicjs.com/d8a89a60-573a-11eb-9c82-13d7ea5f90b7-right-quote.png"
        />
        <img
          id="divider"
          src="https://imgix.cosmicjs.com/371bea50-573d-11eb-9c82-13d7ea5f90b7-divider.png"
        />
      </div>
      <div className="authors">
        {authors.map((a) => {
          return (
            <div className="single-author">
              <img src={a.metadata.img.imgix_url} />
              <div>
                <h1>{a.metadata.nome_cognome}</h1>
                <h3>{a.metadata.ruolo}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="link-sentieri">
          <img id="ticino-bianco" src="https://imgix.cosmicjs.com/b1edbb30-582a-11eb-a689-4365686df91b-ticino-bianco.png" />
          <div className="side">
              <h1>Scopri luoghi e sentieri del Ticino attraveso itinerari <i>Metal</i></h1>
              <Link to="/luoghi">
                  <h3>Scopri di più</h3>
              </Link>
          </div>
          <img id="ticino-bianco-bottom" src="https://imgix.cosmicjs.com/ebe789f0-582b-11eb-a689-4365686df91b-ticino-bianco-bottom.png" />
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

export default About;
