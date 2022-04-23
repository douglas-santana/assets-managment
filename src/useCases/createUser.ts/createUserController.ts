import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password} = req.body;

    try {
      const userCreated = await this.createUserUseCase.execute({ name, email, password });
      return res.status(201).json(userCreated)
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}