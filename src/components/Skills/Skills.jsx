import { useEffect, useRef } from 'react';
import './Skills.css';

const frontendSkills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 95 },
  { name: 'JavaScript', value: 85 },
  { name: 'TYPESCRIPT', value: 80 },
  { name: 'BOOTSTRAP', value: 90 },
  { name: 'SASS', value: 90 },
  { name: 'TAILWIND CSS', value: 80 },
  { name: 'REACT/VITE', value: 85 },
];

const backendSkills = [
  { name: 'NODE JS', value: 85 },
  { name: 'EXPRESS JS', value: 85 },
  { name: 'MYSQL', value: 90 },
  { name: 'MONGODB', value: 85 },
  { name: 'PUG', value: 85 },
];

const otherSkills = [
  { name: 'GIT', value: 85 },
  { name: 'GITHUB', value: 85 },
  { name: 'POSTMAN', value: 80 },
  { name: 'MONGODB ATLAS', value: 80 },
  { name: 'VERCEL', value: 85 },
  { name: 'NETLIFY', value: 80 },
  { name: 'NPM', value: 90 },
  {name: 'Technical SEO', value: 75},
];

function SkillBar({ name, value }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barRef.current.style.width = value + '%';
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="skill-item">
      <span className="skill-name">{name} <i className="skill-val">{value}%</i></span>
      <div className="progress-bar-wrap">
        <div ref={barRef} className="progress-bar-fill" style={{ width: '0%' }}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const halfFront = Math.ceil(frontendSkills.length / 2);
  const frontLeft = frontendSkills.slice(0, halfFront);
  const frontRight = frontendSkills.slice(halfFront);

  const halfBack = Math.ceil(backendSkills.length / 2);
  const backLeft = backendSkills.slice(0, halfBack);
  const backRight = backendSkills.slice(halfBack);

  const halfOther = Math.ceil(otherSkills.length / 2);
  const otherLeft = otherSkills.slice(0, halfOther);
  const otherRight = otherSkills.slice(halfOther);

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title">
        <h2>Ko'nikmalar</h2>
        <p>Men quyidagi texnologiyalar va vositalar bilan ishlayman. Har bir sohada chuqur bilim va tajribaga egaman.</p>
      </div>

      <div className="container">
        <h3 className="skills-category">Front End</h3>
        <div className="row">
          <div className="col-lg-6">
            {frontLeft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
          <div className="col-lg-6">
            {frontRight.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>

        <h3 className="skills-category skills-category--back">Backend</h3>
        <div className="row">
          <div className="col-lg-6">
            {backLeft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
          <div className="col-lg-6">
            {backRight.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>

        <h3 className="skills-category skills-category--other">Qo'shimcha texnologiyalar</h3>
        <div className="row">
          <div className="col-lg-6">
            {otherLeft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
          <div className="col-lg-6">
            {otherRight.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
