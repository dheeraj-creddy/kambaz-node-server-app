import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
  app.get("/api/enrollments/current", async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser || !currentUser._id) {
      res.sendStatus(400).send(req.sesion);
      return
    }

    const enrollments = await enrollmentsDao.getUserEnrollments(currentUser._id);
    res.send(enrollments);
  });

  app.post("/api/enrollments/current", async (req, res) => {
    const currentUser = req.session["currentUser"];
    const { courseId } = req.body;
    const enrollments = await enrollmentsDao.toggleUserInCourse(currentUser._id, courseId);
    res.send(enrollments);
  });
}
