import kuznec from '../../images/Projects/Blacksmith.webp';
import RivoAgency from '../../images/Projects/Rivo.webp';
import futuretech from '../../images/Projects/FutureTech.webp';
import fourHorsesClub from '../../images/Projects/Four-Horses.webp';
import Hydra from '../../images/Projects/HYDRA.webp';
import Celestia from '../../images/Projects/Celestia.webp';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/Redux/hooks';

const items = [
  { id: 1, text: 'Master Blacksmith', image: kuznec },
  { id: 2, text: 'Rivo Agency', image: RivoAgency },
  { id: 3, text: 'Future Tech', image: futuretech },
  { id: 4, text: 'Four Horses Club', image: fourHorsesClub },
  { id: 5, text: 'Hydra', image: Hydra },
  { id: 6, text: 'Celestia', image: Celestia },
];

const ProjectsPage = () => {
  const isTextVisible = useAppSelector((s) => s.heroVisibilitySlice.isTextVisible);
  const [activeImageId, setActiveImageId] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (headerRef.current)
      headerRef.current.setAttribute('data-state', isTextVisible ? 'exit' : 'enter');
    if (listRef.current)
      listRef.current.setAttribute('data-state', isTextVisible ? 'exit' : 'enter');
  }, [isTextVisible]);

  return (
    <section className="projects section" aria-labelledby="projects-title" id="projects">
      <div className="projects__body">
        <div className="projects__preview">
          {items.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.text}
              className={`projects__preview-image ${activeImageId === item.id ? 'is-visible' : ''}`}
            />
          ))}
        </div>

        <div className="projects__works">
          <header className="projects__works-header" ref={headerRef}>
            <h1 id="projects-title" className="projects__works-title">
              WORK
            </h1>
            <div className="projects__works-counter">{items.length}</div>
          </header>

          <ul className="projects__list" ref={listRef}>
            {items.map((item, index) => (
              <li
                key={item.id}
                className="projects__item"
                style={{ ['--i' as string]: index }}
                onMouseEnter={() => setActiveImageId(item.id)}
                onMouseLeave={() => setActiveImageId(null)}
                onFocus={() => setActiveImageId(item.id)}
                onBlur={() => setActiveImageId(null)}
              >
                <h3 className="projects__item-arrow">→</h3>
                <h3 className="projects__item-text">{item.text}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
