import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./createCompanyUseCase";

export class CreateCompanyController {
  constructor(
    private createCompanyUseCase: CreateCompanyUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, userName, userId, unitId } = req.body;

    try {
      await this.createCompanyUseCase.execute({ name, userName, userId, unitId });
      return res.status(201).json({message: 'Company registred!'})
    } catch (error: any) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}