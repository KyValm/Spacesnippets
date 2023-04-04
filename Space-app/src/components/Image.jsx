import React, { useState, useEffect } from "react";

const Image = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY`
        );
        const result = await response.json();
        setData(result);
      };
  
      fetchData();
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    const { title, date, url, explanation } = data;
  
    return (
      <section className="flex flex-col items-center py-16 space-y-8 px-4">
        <div className="bg-white rounded-xl p-4 max-w-3xl w-full">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm">{date}</p>
        </div>
        <div className="bg-white rounded-xl p-4 max-w-3xl w-full">
          {data.media_type === "image" ? (
            <img src={url} alt={title} className="w-full h-auto" />
          ) : (
            <iframe
              src={url}
              title={title}
              width="100%"
              height="315"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="bg-white rounded-xl p-4 max-w-3xl w-full">
          <p className="text-sm">{explanation}</p>
        </div>
      </section>
    );
  };

  export default Image;
  