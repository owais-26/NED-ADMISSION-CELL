import { React, useEffect, useState } from "react";
import Defaultnews from "./Defaultnews";
import { newsarr } from "../Arrays/newsarr";
import NewsItem from "./NewsItem";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Req from "../../Url";
import Loader from "./Loader";


export default function News() {
  
  const [News, setNews] = useState();
   const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "News | Ned Admission Cell";
    const  getNews = async ()=>{
      await Req.get(`/news/getnews`)
      .then((response)=>{
        if (response.status===200){
          setNews(response.data)
          setIsLoading(false)  
          
        }
        
      })
    }
    getNews()
  }, []);
console.log(News&& News.reverse())
  // const [OpenDept, setOpenDept] = useState("default");
const sortedNews =
  News && News.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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

      {News && News.length === 0 ? (
        <Defaultnews />
      ) : (
        <>
          <div>
            <h1
              data-aos="fade-down"
              data-aos-duration="600" data-aos-easing='ease-out-sine'
              className="text-center h1seo mt-3"
            >
              <i className="fa-sharp fa-solid fa-newspaper me-1"></i> News &
              Updates &#8203; &#8203; &#8203;
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="600" data-aos-easing='ease-out-sine'
              className="  text-decoration-underline mb-4 mx-auto"
            ></div>
          </div>
          <div>
            {isLoading ? (
              <Loader />
            ) : (
              sortedNews.map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                  <NewsItem
                    title={item.title}
                    image={item.imgUrl}
                    description={item.desc}
                    index={index}
                    newsLink={item.link}
                    file={item.file}
                    createdAt={item.createdAt}
                  />
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}
