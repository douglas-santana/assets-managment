import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { company, name, email, password} = req.body;

    try {
      await this.createUserUseCase.execute({company, name, email, password});
      return res.status(201).json({message: 'User registered!'})
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}