import portfolioData from "../../../utils/portfolio-data.json";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { personal, social, skills, experience, education, achievements } =
    portfolioData;

  return (
    <div className={styles.portfolioContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img
            src={require("@site/static/img/PAWAN.png").default}
            alt={personal.name}
            className={styles.heroAvatar}
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{personal.name}</h1>
            <p className={styles.heroSubtitle}>{personal.title}</p>
            <p className={styles.heroBio}>{personal.bio}</p>
            <div className={styles.heroButtons}>
              <a
                href={personal.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                📄 Download Resume
              </a>
              <a
                href={`mailto:${personal.email}?subject=Let's Connect - Portfolio Inquiry&body=Hi ${personal.name},%0D%0A%0D%0AI came across your portfolio and would love to connect with you.%0D%0A%0D%0ABest regards`}
                className={styles.btnSecondary}
              >
                ✉️ Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        {Object.entries(social).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </a>
        ))}
      </div>

      {/* Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>💻 Skills & Technologies</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skillGroup, idx) => (
            <div key={idx} className={styles.skillCard}>
              <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
              <div className={styles.skillTags}>
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section - Enhanced */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>💼 Experience</h2>
        <div className={styles.experienceTimeline}>
          {experience.map((exp, idx) => (
            <div key={idx} className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div className={styles.experienceHeaderLeft}>
                  <h3 className={styles.experienceTitle}>{exp.title}</h3>
                  <div className={styles.experienceCompanyWrapper}>
                    <span className={styles.experienceCompany}>
                      {exp.company}
                    </span>
                    {exp.location && (
                      <span className={styles.experienceLocation}>
                        📍 {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <span className={styles.experiencePeriod}>{exp.period}</span>
              </div>

              {/* Description as bullet points */}
              <div className={styles.experienceContent}>
                <ul className={styles.experienceList}>
                  {exp.description
                    .split(". ")
                    .filter((point) => point.trim())
                    .map((point, i) => (
                      <li key={i} className={styles.experiencePoint}>
                        {point.trim().endsWith(".")
                          ? point.trim()
                          : point.trim() + "."}
                      </li>
                    ))}
                </ul>

                {/* Tech Stack Tags */}
                {exp.techStack && (
                  <div className={styles.techStackSection}>
                    <span className={styles.techStackLabel}>Tech Stack:</span>
                    <div className={styles.techStackTags}>
                      {exp.techStack.split(", ").map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🎓 Education</h2>
        <div className={styles.educationList}>
          {education.map((edu, idx) => (
            <div key={idx} className={styles.educationCard}>
              <h3 className={styles.educationDegree}>{edu.degree}</h3>
              <p className={styles.educationInstitution}>{edu.institution}</p>
              <p className={styles.educationYear}>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🌟 Achievements</h2>
        <div className={styles.achievementsContainer}>
          <ul className={styles.achievementsList}>
            {achievements.map((achievement, idx) => (
              <li key={idx} className={styles.achievementItem}>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
