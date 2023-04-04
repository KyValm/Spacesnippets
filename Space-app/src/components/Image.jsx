import { useState, useEffect } from "react";

const Image = () => {
  const [data, setData] = useState(null);
  const [inputDate, setInputDate] = useState("");

  const apiKeys = [
    "5elH9YhT1oYHhPdBalrAJRtWPNgBCsOrucLoNTDh",
    "EYb8Lc8jKiMGGc9edAQlfvRPcffbXAOXFCsKrQqv",
  ];

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
    try {
      const result = await fetchWithFallback(
        `https://api.nasa.gov/planetary/apod?api_key=API_KEY${date ? `&date=${date}` :""}`,
        apiKeys
      );
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
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

  if (!data) {
    return <div>Loading...</div>;
  }

  const { title, date, url, explanation } = data;

  return (
    <section className="flex flex-col items-center py-16 space-y-8 px-4">
      <div className="bg-transparent rounded-xl p-4 max-w-3xl w-full">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm">{date}</p>
      </div>
      <div className="bg-transparent rounded-xl p-4 max-w-3xl w-full">
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
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:text-base text-sm"
          onClick={handleRandomImage}
        >
          Random
        </button>
        <input
          type="date"
          className="border bg-blue-500 border-gray-300 p-2 rounded cursor-text md:text-base text-sm"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:text-base text-sm"
          onClick={handleDateImage}
        >
          Search
        </button>
      </div>
      <div className="bg-transparent rounded-xl p-4 max-w-3xl w-full">
        <p className="text-sm">{explanation}</p>
      </div>
    </section>
  );
};


  export default Image;
  