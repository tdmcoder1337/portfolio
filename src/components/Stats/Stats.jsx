import './Stats.css';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const icons = ['bi-emoji-smile', 'bi-journal-richtext', 'bi-headset', 'bi-people'];
const values = [232, 521, 1453, 32];

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref} className="stats-number">{count}</span>;
}

export default function Stats() {
  const { t } = useLanguage();
  const items = t('stats.items');

  return (
    <section id="stats" className="stats section">
      <div className="container">
        <div className="row">
          {items.map((stat, i) => (
            <div key={stat.label} className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className={`bi ${icons[i]}`}></i>
                <Counter end={values[i]} />
                <p><strong>{stat.label}</strong> <span>{stat.desc}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
