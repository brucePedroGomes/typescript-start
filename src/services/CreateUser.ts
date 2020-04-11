interface createUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

interface TechObject {
  title: string;
  experience: number;
}

export default function createUser({
  name,
  email,
  password,
  techs,
}: createUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };
  return user;
}
