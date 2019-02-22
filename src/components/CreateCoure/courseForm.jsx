import React from "react";
const courseForm = () => {
  return (
    <form>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <div>
            <input
              id="title"
              name="title"
              type="text"
              className="input-title course--title--input"
              placeholder="Course title..."
            />
          </div>
          <p>By Joe Smith</p>
        </div>
        <div className="course--description">
          <div>
            <textarea
              id="description"
              name="description"
              className=""
              placeholder="Course description..."
            />
          </div>
        </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <div>
                <input
                  id="estimatedTime"
                  name="estimatedTime"
                  type="text"
                  className="course--time--input"
                  placeholder="Hours"
                />
              </div>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <div>
                <textarea
                  id="materialsNeeded"
                  name="materialsNeeded"
                  className=""
                  placeholder="List materials..."
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid-100 pad-bottom">
        <button className="button" type="submit">
          Create Course
        </button>
        <button
          className="button button-secondary"
          onclick="event.preventDefault(); location.href='index.html';"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default courseForm;
