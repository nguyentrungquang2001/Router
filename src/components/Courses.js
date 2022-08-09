import { Link } from "react-router-dom";

const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <h1 className="h2">Khóa học online</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`${course.id}/${course.name}`}>{course.id} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
