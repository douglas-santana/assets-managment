import { Request, Response } from "express";
import { CreateUnitUseCase } from "./createUnitUseCase";

export class CreateUnitController {
  constructor(
    private createUnitUseCase: CreateUnitUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    try {
      await this.createUnitUseCase.execute(email);
      return res.status(201).json({message: 'Unit registered!'})
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}