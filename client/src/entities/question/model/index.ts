export interface IQuestion {
  body: string;
  rightAnswer: string;
  cost: number;
  themeId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type QuestionArrayType = IQuestion[]