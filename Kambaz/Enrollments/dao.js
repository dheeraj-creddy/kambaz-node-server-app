import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function getAllEnrollments() {
    return Database.enrollments;

}

export function createEnrollment(enrollment) {
    const newEnrollment = {...enrollment, _id: Date.now().toString()};
    Database.enrollments = [...Database.enrollments, newEnrollment];
    return newEnrollment;

}

export function removeEnrollment(enrollmentId) {
    const {enrollments} = Database;
    Database.enrollments = enrollments.filter((e) => e._id !== enrollmentId);
}