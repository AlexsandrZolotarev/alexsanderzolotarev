import { useState } from 'react';

const getTabIndex = (bool: boolean) => {
  return bool ? -1 : 0;
};
let Skills = () => {
  let [stateClassesHard, setStateClassesHard] = useState<'' | 'is-active'>('is-active');
  let [stateClassesSoft, setStateClassesSoft] = useState<'' | 'is-active'>('');
  let updateUISoft = () => {
    setStateClassesSoft('is-active');
    setStateClassesHard('');
  };
  let updateUIHard = () => {
    setStateClassesSoft('');
    setStateClassesHard('is-active');
  };
  const handleKey = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLElement;
    const parent = target.parentElement;
    if (!parent) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      if (target === parent.children[0]) {
        updateUISoft();
        (parent.children[1] as HTMLElement).focus();
      } else {
        updateUIHard();
        (parent.children[0] as HTMLElement).focus();
      }
    }
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      if (target === parent.children[1]) {
        updateUIHard();
        (parent.children[0] as HTMLElement).focus();
      } else {
        updateUISoft();
        (parent.children[1] as HTMLElement).focus();
      }
    }
  };

  return (
    <section className="skills section" aria-labelledby="skills-title" id="Skills">
      <header className="title">
        <div className="title-inner container">
          <div className="title-body">
            <h2 className="title-title" id="skills-title">
              Skills
              <svg
                width="669"
                height="367"
                viewBox="0 0 669 367"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="title-lights"
                aria-hidden="true"
              >
                <g filter="url(#filter0_f_30401_1502)">
                  <path
                    d="M367.984 125.931C478.418 125.931 559 85.6672 559 133.161C559 180.655 269.516 257 159.082 257C48.6476 257 159.082 180.655 159.082 133.161C159.082 85.6672 257.549 125.931 367.984 125.931Z"
                    fill="url(#paint0_linear_30401_1502)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_30401_1502"
                    x="0"
                    y="0"
                    width="669"
                    height="367"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="55" result="effect1_foregroundBlur_30401_1502" />
                  </filter>
                  <linearGradient
                    id="paint0_linear_30401_1502"
                    x1="134.662"
                    y1="257"
                    x2="142.122"
                    y2="105.241"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1CC4F9" />
                    <stop offset="1" stopColor="#FE69FE" />
                  </linearGradient>
                </defs>
              </svg>
            </h2>
          </div>
        </div>
      </header>
      <div className="skills__body container">
        <div className="skills__body tabs">
          <header className="tabs__header">
            <h3 className="visually-hidden">Skills</h3>
            <div
              className="tabs__buttons container"
              role="tablist"
              aria-labelledby="skills-title"
              onKeyDown={handleKey}
            >
              <button
                className="tabs__button link"
                type="button"
                id="tab-1"
                role="tab"
                aria-controls="tabpanel-1"
                aria-selected="false"
                tabIndex={getTabIndex(stateClassesSoft === 'is-active')}
                onClick={() => {
                  if (stateClassesSoft) {
                    setStateClassesSoft('');
                    setStateClassesHard('is-active');
                  }
                }}
              >
                Hard skills
              </button>
              <button
                className="tabs__button link"
                type="button"
                id="tab-2"
                role="tab"
                aria-controls="tabpanel-2"
                aria-selected="true"
                tabIndex={getTabIndex(stateClassesHard === 'is-active')}
                onClick={() => {
                  if (stateClassesHard) {
                    setStateClassesHard('');
                    setStateClassesSoft('is-active');
                  }
                }}
              >
                Soft skills
              </button>
            </div>
          </header>
          <div className="tabs__body">
            <div
              className={`tabs__content ${stateClassesHard}`}
              id="tabpanel-1"
              aria-labelledby="tab-1"
              tabIndex={getTabIndex(stateClassesSoft === 'is-active')}
            >
              <ul className="list">
                <li className="list__item baseline">HTML (HTML5), JSX </li>
                <li className="list__item baseline">CSS (CSS3), SASS (SCSS), Bootstrap,</li>
                <li className="list__item baseline">JavaScript (ES6+, OOP), TypeScript</li>
                <li className="list__item baseline">React</li>
                <li className="list__item baseline">Redux (Redux Toolkit)</li>
                <li className="list__item baseline">Formik, Yup, Axios, React Router</li>
                <li className="list__item baseline">REST API</li>
                <li className="list__item baseline">Git (GitHub, Github Pages)</li>
                <li className="list__item baseline">Figma, Adobe Photoshop, Microsoft Excel</li>
                <li className="list__item baseline">English level - B1</li>
              </ul>
            </div>
            <div
              className={`tabs__content ${stateClassesSoft}`}
              id="tabpanel-2"
              aria-labelledby="tab-2"
              tabIndex={getTabIndex(stateClassesHard === 'is-active')}
            >
              <ul className="list">
                <li className="list__item without baseline">I am responsible about deadlines</li>
                <li className="list__item without baseline">
                  I am attentive to the details of the terms of reference
                </li>
                <li className="list__item without baseline">
                  I am demanding of the quality of my code, I follow the code-style
                </li>
                <li className="list__item without baseline">
                  I welcome constructive criticism and am always happy to find new points of
                  professional and personal growth
                </li>
                <li className="list__item without baseline">
                  I am motivated to improve my skills, constantly studying new technologies in my
                  field of activity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
