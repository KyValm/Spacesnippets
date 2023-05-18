import { useState, useEffect } from "react";
import Loading from '../assets/loading.png'

const Image = () => {
  const [data, setData] = useState(null);
  const [inputDate, setInputDate] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKeys = [
    import.meta.env.VITE_API_KEY_1,
    import.meta.env.VITE_API_KEY_2,
];

//IMAGES ss

  const Spinner = () => (
    <div className="w-8 h-8 border-t-2 border-blue-500 border-solid rounded-full animate-spin">
      <img src={Loading}/>
    </div>
  );

  const fetchWithFallback = async (url, apiKeys) => {
    for (const apiKey of apiKeys) {
      try {
        const response = await fetch(url.replace("API_KEY", apiKey));
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(`Error fetching with API key ${apiKey}:`, error);
      }
    }
    throw new Error("All API keys failed");
  };

  const fetchData = async (date = "") => {
    setLoading(true);
    try {
      const result = await fetchWithFallback(
        `https://api.nasa.gov/planetary/apod?api_key=API_KEY${date ? `&date=${date}` : ""}`,
        apiKeys
      );
      
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRandomImage = async () => {
    const randomDate = randomDateGenerator();
    fetchData(randomDate);
  };

  const handleDateImage = async () => {
    if (inputDate) {
      fetchData(inputDate);
    }
  };

  const randomDateGenerator = () => {
    const start = new Date(1995, 5, 16);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split("T")[0];
  };

  if (loading) {
    return (
      <section className="flex flex-col items-center py-16 space-y-8 px-4">
        <Spinner />
      </section>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, date, url, explanation } = data;
  const minDate = "1995-06-16";
  const maxDate = new Date().toISOString().split("T")[0];

  return (
    <section id="image" className="flex flex-col items-center py-16 space-y-8 px-4 hover-up-down">
      <div className="bg-transparent rounded-xl p-4 max-w-3xl w-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm">{date}</p>
      </div>
      <div className="bg-transparent rounded-xl p-4 max-w-3xl w-full hover-up-down">
        {data.media_type === "image" ? (
          <img src={url} alt={title} className="w-full h-auto rounded-xl" />
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
      <div className="flex flex-col md:grid md:grid-cols-1 md:gap-4 items-center space-y-4 md:space-y-0">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRandomImage}
        >
          Random 
        </button>
        <p className="text-xs xs:text-md font-bold text-white">Choose a date between 1995-06-16 and today:</p>
        <input
        type="date"
        className="p-2 rounded cursor-text text-black"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        min={minDate}
        max={maxDate}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDateImage}
        >
          Search
        </button>
      </div>
      <div className="bg-navcolor rounded-xl p-4 max-w-3xl w-full">
        <p className="text-sm font-">{explanation}</p>
      </div>
    </section>
  )
}

  export default Image;
  