import { Request, Response } from "express";
import { CreateUnitUseCase } from "./createUnitUseCase";

export class CreateUnitController {
  constructor(
    private createUnitUseCase: CreateUnitUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { userName, userId } = req.body;
    try {
      await this.createUnitUseCase.execute({ userName, userId });
      return res.status(201).json({message: 'Unit registered!'})
    } catch (error: any) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}