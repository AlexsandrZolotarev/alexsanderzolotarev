import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/Redux/hooks';
import { NavLink } from 'react-router-dom';
import { PROJECTS } from '@/data/projects';
import { ProjectId } from '@/types/project';

const ProjectsPage = () => {
  const isTextVisible = useAppSelector((s) => s.visibilitySlice.isTextVisible);
  const [activeImageId, setActiveImageId] = useState<ProjectId | null>(null);
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
          {PROJECTS.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`projects__preview-image ${activeImageId === item.id ? 'is-visible' : ''}`}
            />
          ))}
        </div>

        <div className="projects__works">
          <header className="projects__works-header" ref={headerRef}>
            <h1 id="projects-title" className="projects__works-title">
              WORK
            </h1>
            <div className="projects__works-counter">{PROJECTS.length}</div>
          </header>

          <ul className="projects__list" ref={listRef}>
            {PROJECTS.map((item, index) => (
              <li
                key={item.id}
                className="projects__item"
                style={{ ['--i' as string]: index }}
                onMouseEnter={() => setActiveImageId(item.id)}
                onMouseLeave={() => setActiveImageId(null)}
                onFocus={() => setActiveImageId(item.id)}
                onBlur={() => setActiveImageId(null)}
              >
                <NavLink to={`/Projects/${item.id}`} className="projects__item-inner">
                  <h3 className="projects__item-arrow">→</h3>
                  <h3 className="projects__item-text">{item.title}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
