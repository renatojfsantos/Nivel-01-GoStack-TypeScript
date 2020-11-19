/**
 * Para criar um usuário: name, email, password
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
  // techs: string[]; CASO FOSSE APENAS UM ARRAY DE STRING
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}