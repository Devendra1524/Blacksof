import React, { useState, useEffect, useRef } from "react";
import "./VehicleShowcase.css";
import body1 from "../../asset/video/1.mp4";
import body2 from "../../asset/video/2.mp4";
import body3 from "../../asset/video/3.mp4";
import body4 from "../../asset/video/4.mp4";
import body5 from "../../asset/video/5.mp4";
import body6 from "../../asset/video/6.mp4";
import { FaPause, FaPlay } from "react-icons/fa";

const vehicleData = [
  {
    category: "Passenger vehicles",
    description: "Revving up innovation from interior to exterior.",
    items: [
      { title: "Complete Body", video: body1 },
      { title: "Front", video: body2 },
      { title: "Cabin", video: body3 },
      { title: "Trunk", video: body4 },
      { title: "Exterior", video: body5 }
    ]
  },
  {
    category: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
    items: [
      { title: "Complete Body", video: body2 },
      { title: "Engine", video: body6 },
      { title: "Cabin", video: body1 }
    ]
  }
];

const VehicleShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(vehicleData[0]); 
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(selectedCategory.items[1].video); 
  const videoRef = useRef(null);

  // Restart video on source change and play if required.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch((error) => console.error("Play error:", error));
      }
    }
  }, [currentVideo, isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => console.error("Play error:", error));
      }
    }
  };

  return (
    <div className="vehicle-showcase">
      <div className="content">
        <h2>
          Evolving the drive with <span className="highlight">360-degree</span>
          <br /> comprehensive solutions
        </h2>
      </div>

      <div className="showcase-container">
        {/* Sidebar: Categories */}
        <div 
          className="categories" 
          role="navigation" 
          aria-label="Vehicle Categories"
        >
          {vehicleData.map((section, index) => (
            <div
              key={index}
              className={`category ${selectedCategory.category === section.category ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(section);
                setCurrentVideo(section.items[0].video);
              }}
              tabIndex="0"
              role="button"
              aria-pressed={selectedCategory.category === section.category}
            >
              <h4>{section.category}</h4>
              <p>{section.description}</p>
            </div>
          ))}
        </div>

        {/* Preview Section */}
        <div className="preview">
          <video
            ref={videoRef}
            key={currentVideo}
            autoPlay
            loop
            muted={!isPlaying}
            playsInline
            className="video"
            aria-label="Vehicle preview video"
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button 
            className="play-button" 
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <div className="video-icons" role="group" aria-label="Video options">
            {selectedCategory.items.map((item, i) => (
              <div 
                key={i} 
                className={`video-icon ${currentVideo === item.video ? "active" : ""}`} 
                onClick={() => setCurrentVideo(item.video)}
                tabIndex="0"
                role="button"
                
                aria-label={`Show ${item.title} view`}
              >
                <span className="icon"></span>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleShowcase;
