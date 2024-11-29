import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

export default function Body() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch("/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Fetch error:", error));
    // fetch("/api/employees")
    //   .then((r) => r.json())
    //   .then((employeeData) => setEmployeeData(employeeData));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((emp) => (
            <div>{emp.id}</div>
          ))}

          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Button onClick={() => alert("Update")}>Update</Button>
              <Button onClick={() => alert("Delete")}>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
