import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editing Journey Started</h4>
                <h5>Learning & Practice</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started learning video editing and storytelling.
Practiced editing reels, cinematic edits, and social media videos
using Adobe Premiere Pro. Focused on improving cuts, transitions,
and visual storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>First Job as Video Editor</h4>
                <h5>Freelance / Client Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Started working on real client projects and freelance work.
Edited YouTube videos, Instagram reels, and cinematic edits
for content creators and small brands.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Video Editor</h4>
                <h5>Content Creator & Freelance Editor</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a video editor and content creator.
Creating cinematic edits, reels, and storytelling videos
for social media platforms like YouTube and Instagram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
