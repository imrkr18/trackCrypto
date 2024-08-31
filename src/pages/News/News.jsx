import { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import "./News.css";

const News = () => {
  const { news } = useContext(NewsContext);
  console.log(news.length)
  if (news.count > 0) {
    return (
      <div className="news-list">
        <h1>Latest Cryptocurrency News</h1>
        {news.count === 0 ? (
          <p>No news available</p>
        ) : (
          news.results.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-info">
                <p className="news-timestamp">
                  {new Date(item.published_at).toLocaleString()}
                </p>
                <p className="news-title">{item.title}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read More
              </a>
            </div>
          ))
        )}
      </div>
    );
  }
  else{
    return (
        <div className="spinner">
          <div className="spin">
  
          </div>
        </div>
    );
  }
};

export default News;
