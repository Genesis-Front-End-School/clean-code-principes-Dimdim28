export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type CourseMeta = {
  slug: string;
  skills?: string[];
  fullCourseProductId?: string;
  fullCourseProductFamily?: string;
  courseVideoPreview?: {
    link: string;
    duration: number;
    previewImageLink: string;
  };
};

export type Course = {
  id: string;
  title: string;
  tags: string[];
  launchDate?: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: CourseMeta;
};
