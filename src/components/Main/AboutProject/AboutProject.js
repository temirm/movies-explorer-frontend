import '../../Utility/SectionHeading/SectionHeading.css';
import '../../Utility/Timeline/Timeline.css';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="section-heading">О проекте</h2>
      <hr className="section-heading__line" />
      <article className="about-project__article">
        <h3 className="about-project__subheading">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </article>
      <article className="about-project__article">
        <h3 className="about-project__subheading">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </article>
      <div className="timeline about-project__timeline">
        <span class="timeline__block about-project__timeline-block_first" />
        <span class="timeline__block about-project__timeline-block_second" />
      </div>
    </section>
  );
};