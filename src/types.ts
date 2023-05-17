export type UserType = {
  username: string;
  password: string;
  access_token: string;
  refresh_token: string;
};
export type CardPropsType = {
  title: string;
  description: string;
  redirectTo: string;
  redirectDescription: string;
};

export type Exam = {
  id: number;
  name: string;
  description: string;
  status: string;
  username: number;
};
export type LabType = {
  id: number;
  name: string;
  description: string;
  status: string;
  username: string;
};
