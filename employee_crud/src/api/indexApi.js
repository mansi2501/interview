import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.get("/api/employees", () => ({
        employees: [
          {
            id: 1,
            firstName: "Mansi",
            lastName: "Pandya",
            userName: "mansi@pandya",
          },
          {
            id: 2,
            firstName: "Mansi",
            lastName: "Pandya",
            userName: "mansi@pandya",
          },
          {
            id: 3,
            firstName: "Mansi",
            lastName: "Pandya",
            userName: "mansi@pandya",
          },
        ],
      }));
      this.passthrough();

      this.post("/api/employees", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        console.log(attrs);
        //debugger;
      });
    },
  });
}
