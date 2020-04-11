import { Response, Request } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Pedro',
    email: 'pedro@pedro',
    password: '1234',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native',
      {
        title: 'Javascript',
        experience: 100,
      },
    ],
  });

  console.log(user.email);

  return response.json({ message: 'hello world' });
}
