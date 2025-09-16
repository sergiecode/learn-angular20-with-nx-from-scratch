export interface Course {
  id: string;
  title: string;
  description: string;
  teacher: string;
}

export interface CreateCourseRequest {
  title: string;
  description: string;
  teacher: string;
}

export type UpdateCourseRequest = Partial<CreateCourseRequest>;
