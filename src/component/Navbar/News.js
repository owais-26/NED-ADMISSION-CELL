import { React, useEffect } from "react";
import Defaultnews from "./Defaultnews";
import { newsarr } from "../Arrays/newsarr";
import NewsItem from "./NewsItem";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function News() {
  useEffect(() => {
    document.title = "News | Ned Admission Cell";
  }, []);

  // const [OpenDept, setOpenDept] = useState("default");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="theme-color" content="#4285f4" />
          <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

          <link rel="canonical" href="https://www.nedadmissioncell.com" />
          <meta
            name="description"
            content="Stay up-to-date with NED Admission Cell news, including admission key dates and results and much more! "
          />
        </Helmet>
      </HelmetProvider>

      {newsarr.length === 0 ? (
        <Defaultnews />
      ) : (
        <>
          <div>
            <h1 data-aos="fade-down" className="text-center h1seo mt-3">
              <i className="fa-sharp fa-solid fa-newspaper me-1"></i> News &
              Updates &#8203; &#8203; &#8203;
            </h1>
            <div
              data-aos="fade-up"
              className="  text-decoration-underline mb-4 mx-auto"
            ></div>
          </div>
          {newsarr.map((item, index) => (
            <div key={index}>
              {
                <NewsItem
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  index={index}
                  newsLink={item.newsLink}
                  file={item.file}
                />
              }
            </div>
          ))}
        </>
      )}
    </>
  );
}
