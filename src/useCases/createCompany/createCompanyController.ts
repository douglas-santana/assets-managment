import { Request, Response } from "express";
import { CreateCompanyUseCase } from "./creatCompanyUseCase";

export class CreateCompanyController {
  constructor(
    private createCompanyUseCase: CreateCompanyUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, employee, unit } = req.body;

    try {
      await this.createCompanyUseCase.execute({ name, employee, unit });
      return res.status(201).json({message: 'Company registred!'})
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}