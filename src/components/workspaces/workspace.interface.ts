export interface Workspace {
  id: number;
  title: string;
  description: string;
  createDate: string;
  updateDate: string;
  creator: {
    username: string;
    email: string;
  };
}
