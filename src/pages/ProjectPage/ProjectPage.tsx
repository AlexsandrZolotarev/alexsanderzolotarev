import { NavLink, useLocation, useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import { PROJECTS } from '@/data/projects';
import { useLang } from '@/hooks/useLang';
import { useAppReady } from '@/hooks/useAppReady';
import { useAppSelector } from '@/Redux/hooks';
import { ProjectGallery } from './ProjectGallery';
import { useEffect } from 'react';

function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { translate } = useLang();
  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = PROJECTS[projectIndex];
  const { pathname } = useLocation();
  const isTextVisible = useAppSelector((state) => state.visibilitySlice.isTextVisible);
  const { appReady } = useAppReady();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  if (!project) return <ErrorPage />;

  const nextIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProjectId = PROJECTS[nextIndex]!.id;
  const link = project.link ?? '';
  const title = translate(`project.${project.id}.title`);
  const linkTitle = translate(`project.link`);
  const year = translate(`project.${project.id}.year`);
  const category = translate(`project.${project.id}.category`);
  const description = translate(`project.${project.id}.description`);

  return (
    <section className="project" aria-labelledby="project-title" id="Project">
      <div className="project__inner ">
        <div
          className={`project__header ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          <div className="project__image-wrapper">
            <img src={project.image} alt={title} />
          </div>
        </div>

        <div
          className={`project__body ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          <div className="project__title" style={{ color: project.color }}>
            <h1>{title}</h1>
            {link && (
              <a
                className="project__title-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External site (opens in new tab)"
              >
                {linkTitle}
              </a>
            )}
          </div>
          <div
            className={`project__intro ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
          >
            <div className="project__data">
              <table className="project__table">
                <tbody>
                  <tr className="project__row">
                    <td className="project__cell project__cell--category ">
                      <h4 style={{ color: project.color }}>
                        {translate('project.label.category')}
                      </h4>
                    </td>
                    <td className="project__cell">{category}</td>
                  </tr>
                  <tr className="project__row">
                    <td className="project__cell project__cell--year ">
                      <h4 style={{ color: project.color }}>{translate('project.label.year')}</h4>
                    </td>
                    <td className="project__cell">{year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="project__description">
              <p className="project__description-text">{description}</p>
            </div>
          </div>
        </div>
        {!!project.images?.length && (
          <div
            className={`project__images ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
          >
            <ProjectGallery images={project.images} />
          </div>
        )}
        <div
          className={`project__footer ${isTextVisible ? 'is-active' : 'is-lock'} ${appReady ? 'is-animate' : ''}`}
        >
          <NavLink className="project__footer-link" to={`/Projects/${nextProjectId}`}>
            <div className="project__footer-left">
              <h4>
                <span className="project__footer-arrow">→</span>
                <span className="project__footer-text">next project</span>
              </h4>
            </div>

            <div className="project__footer-right">
              <strong>{nextProjectId}</strong>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
