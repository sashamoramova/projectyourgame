import { IUser } from '@/entities/user';

export interface IRawGameData {
  score: number;
}

export interface IGame extends IRawGameData {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}

export type ArrayGamesType = Array<IGame>;