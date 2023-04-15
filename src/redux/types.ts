export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Course = {
  id: string;
  title: string;
  tags: string[];
  launchDate?: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: true;
  previewImageLink: string;
  rating: number;
  meta: {
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
};
