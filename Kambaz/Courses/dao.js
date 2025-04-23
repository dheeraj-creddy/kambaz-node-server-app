import model from "./model.js";
import userModel from "../Users/model.js"
import enrollmentModel from "../Enrollments/model.js"

export function findAllCourses() {
  return model.find();
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}

export function createCourse(course) {
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newCourse);
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
}


export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}

export async function findUsersinCourse(courseId) {
  const enrollments = await enrollmentModel.find({ course: courseId }, "user")
  const userIds = [...new Set(enrollments.map(e => e.user))];
  return await userModel.find({
    _id: { $in: userIds }
  })
}