import React, { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx';
import "../style/Articolo.css"

function Articolo({match}){
    const name = match.params.slug
    const [article, setArticle] = useState({text: "loading"});
    useEffect(() => {
        const fetchData = async () => {
        const Cosmic = require("cosmicjs");
        const api = Cosmic();
        const bucket = api.bucket({
            slug: "swissmetaldetecting-production",
            read_key: "LtDLrcwY3i0DL5lefO19aB6oU8Qu2bqfWhWQdHCu5MPCCAD4Nr",
        });
        const data = await bucket.getObject({
            slug: name,
          })
          setArticle(data.object.metadata)
        };
        fetchData();
    });
    return(
        <div className="articolo">
           <div className="articolo-testo">
                <h1>{article.title}</h1>
                <h3>{article.author}</h3>
               <p><Markdown>{article.text}</Markdown></p>
           </div>
        </div>
    )
}
export default Articolo