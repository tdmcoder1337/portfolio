import './Stats.css';
import { useEffect, useState, useRef } from 'react';

const statsData = [
  { icon: 'bi-emoji-smile', value: 232, label: 'Mamnun mijozlar', desc: 'doimiy hamkorlik' },
  { icon: 'bi-journal-richtext', value: 521, label: 'Loyihalar', desc: 'yakunlangan ishlar' },
  { icon: 'bi-headset', value: 1453, label: "Qo'llab-quvvatlash", desc: 'kecha-yu kunduz' },
  { icon: 'bi-people', value: 32, label: 'Jamoa a\'zolari', desc: 'tajribali mutaxassislar' },
];

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
  return (
    <section id="stats" className="stats section">
      <div className="container">
        <div className="row">
          {statsData.map((stat) => (
            <div key={stat.label} className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className={`bi ${stat.icon}`}></i>
                <Counter end={stat.value} />
                <p><strong>{stat.label}</strong> <span>{stat.desc}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
