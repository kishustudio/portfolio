import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";


const projects = [
  {
    title: "Cinematic Edit",
    category: "Cinematic Video Editing",
    tools: "Premiere Pro, After Effects, Color Grading",
    image: `${import.meta.env.BASE_URL}images/reel1.png`,
    link: "https://drive.google.com/drive/folders/1qURtai-nQDzhyAZFXtKJMKqTiO2VwTvI?usp=sharing",
  },
  {
    title: "Instagram Reel",
    category: "Social Media Edit",
    tools: "After Effect, Transitions, Motion Graphics",
    image: `${import.meta.env.BASE_URL}images/reel2.png`,
    link: "https://drive.google.com/drive/folders/1ByfsD_eRNuxJi51lQTXEM6JGTs1J4yH9?usp=sharing",
  },
  {
    title: "Client Project",
    category: "Professional Video Editing",
    tools: "Premiere Pro, Color Correction, Effects",
    image: `${import.meta.env.BASE_URL}images/reel3.png`,
    link: "https://drive.google.com/drive/folders/1XCdXNEpabuP2MBikx0DTRonmDrS8yYtF?usp=sharing",
  },
  {
    title: "YouTube Video Edit",
    category: "YouTube Content Editing",
    tools: "After Effects, Storytelling, Sound Design",
    image: `${import.meta.env.BASE_URL}images/reel4.png`,
    link: "https://drive.google.com/drive/folders/16ta6tlUVTkmR5Bm45vLyaeeghYSpIZ2C?usp=sharing",
  },
];
const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
