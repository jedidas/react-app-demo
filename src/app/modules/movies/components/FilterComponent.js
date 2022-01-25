import React from "react";

const FilterComponent = ({ handleChange, state }) => {
  return (
    <div className="app_filter">
      <div className="row">
        <div className="col">
          <select
            id="sort_by"
            className="form-select"
            value={state.sort_by}
            onChange={handleChange}
            name="sort_by"
          >
            <option value="popularity.desc">Popularity desc</option>
            <option value="popularity.asc">Popularity asc</option>
            <option value="release_date.asc">Release date asc</option>
            <option value="release_date.desc">Release date desc</option>
            <option value="revenue.asc">Revenue asc</option>
            <option value="revenue.desc">Revenue desc</option>
            <option value="primary_release_date.asc">
              Primary release date asc
            </option>
            <option value="primary_release_date.desc">
              Primary release date desc
            </option>
            <option value="original_title.asc">Original title asc</option>
            <option value="original_title.desc">Original title desc</option>
            <option value="vote_average.asc">Vote average asc</option>
            <option value="vote_average.desc">Vote average desc</option>
            <option value="vote_count.asc">Vote count asc</option>
            <option value="vote_count.desc">Vote count desc</option>
          </select>
        </div>

        {/* <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="adult"
                    type="checkbox"
                    checked={stateFilter.include_adult}
                    onChange={handleChange}
                    name="include_adult"
                  />
                  <label className="form-check-label" htmlFor="adult">
                    Include adult
                  </label>
                </div>
              </div> */}
      </div>
    </div>
  );
};

export default React.memo(FilterComponent, (prevProps, nextProps) => {
  return prevProps.state.sort_by === nextProps.state.sort_by;
});
