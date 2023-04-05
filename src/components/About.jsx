import React from 'react';
import myPhoto from '../assets/me.jpg';
import linkedinIcon from '../assets/linkedin.svg';

const About = () => {
    return (
        <section id="about" className="flex flex-col items-center py-16 space-y-8 px-4 md:px-0">
          <div className="relative">
            <img
              src={myPhoto}
              alt="Ky"
              className="w-48 h-48 object-cover rounded-full border-4 border-white"
            />
            <a
              href="https://www.linkedin.com/in/kyvalm/"
              target="_blank"
              rel="noreferrer"
              className="absolute -bottom-3 right-3"
            >
              <img
                src={linkedinIcon}
                alt="linkedin"
                className="w-12 h-12 object-cover rounded-full border-none"
              />
            </a>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Hey, I'm Ky!</h2>
          <p className="text-center text-sm sm:text-lg max-w-lg">
            Welcome to my <span className="font-bold color-blue text-blue-400">website</span>! I have fell in love with the universe and strive to make learning actually<span className="font-bold text-blue-400"> fun. </span> I want to inspire
            others to learn more about our <span className="font-bold text-blue-400">universe</span>, and to create a better future for the next generations. The site features a
            daily image from NASA, as well as an archive of stunning images and
            information from the past. Connect with me via the linkedin link. I hope you enjoy exploring and discovering
            the beauty of space!
          </p>
        </section>
      );
    };
      

export default About;
