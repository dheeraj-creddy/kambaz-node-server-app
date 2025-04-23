import model from "./model.js"
import { v4 as uuid } from "uuid";

export function findAssignmentsForCourse(courseId) {
  return model.find({course: courseId});
}

export function addAssignment(assignmentInfo) {
  return model.create({_id: uuid(), ...assignmentInfo});
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({_id: assignmentId}, {$set: assignmentUpdates});
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({_id: assignmentId});
}
