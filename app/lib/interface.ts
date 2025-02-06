//for datatypes.
export interface Post {
  title: string;
  overview: string;
  content: Array<{
    _type: string;
    _key: string;
    [key: string]: unknown;
  }>;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}