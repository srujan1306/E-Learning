import { Course } from './app.component';

export type NewCourse = Omit<Course, 'courseId'>;
