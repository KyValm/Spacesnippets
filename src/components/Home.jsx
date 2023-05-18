import React, { useState, useEffect} from 'react'
import styles from '../style'
import StarryNight from '../components/StarryNight'
import arrowImg from '../assets/arrow-up.svg'
import '../index.css'

const Home = () => {
    const [apodData, setApodData] = useState(null);
  
    useEffect(() => {
      fetch(
        'https://api.nasa.gov/planetary/apod?api_key=5elH9YhT1oYHhPdBalrAJRtWPNgBCsOrucLoNTDh'
      )
        .then((response) => response.json())
        .then((data) => {
          setApodData(data);
        });
    }, []);
  
    return (
        <section
          className={`relative flex md:flex-row flex-col ${styles.paddingY} pt-16 items-center justify-center bg-cover bg-no-repeat bg-center`}
          style={{
            backgroundImage: apodData ? `url(${apodData.url})` : '',
          }}
        >
          <div className="bg-black bg-opacity-60 text-center p-8 md:p-16 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Journey through the cosmos & explore the vast universe
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white">
              Discover beauty, wonder, and the mysteries of space through stunning images
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">

              <a
                href="#image"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center hover-up-down"
              >
                Begin journey
                <img src={arrowImg} alt="arrow" className="w-4 h-4 ml-2" />
              </a>
            </div>
        
          </div>
        </section>
      );
    };
  
  export default Home;