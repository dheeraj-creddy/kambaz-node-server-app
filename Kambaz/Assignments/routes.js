import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/assignments/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const response = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.send(response);
  });

  app.post("/api/assignments", async (req, res) => {
    const { title, course, from, until, description, points, due } = req.body;

    const status = await assignmentsDao.addAssignment({ title, course, from, until, description, points, due })
    res.send(status)
  })

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    console.log('backend assignmentId', assignmentId)
    const status = await assignmentsDao.deleteAssignment(assignmentId)
    res.send(status)
  })

  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const { title, course, from, until, description, points, due } = req.body;

    const status = await assignmentsDao.updateAssignment(assignmentId, { title, course, from, until, description, points, due })
    res.send(status)
  })

}
