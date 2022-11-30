import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learntocode-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All categories : {categories.length}</h4>
      <Table bordered hover>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div></div>
    </div>
  );
};

export default LeftSideNav;
