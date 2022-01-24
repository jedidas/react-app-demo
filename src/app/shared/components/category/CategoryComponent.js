import { checkImage } from "app/core/utils/utils";
import "./category-component.scss";

const CategoryComponent = ({ title = "", options = [] }) => {

  return (
    <div className="app_categories">
      <h2 className="app_categories__title">{title}</h2>
      <ul className="app_categories__list">
        {options.map(({ original_title, backdrop_path }, index) => {
          return (
            <li key={index} className="app_categories__item">
              <img src={checkImage(backdrop_path)} alt={original_title} />
              <h6 className="app_categories__subtitle">{original_title}</h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryComponent;
