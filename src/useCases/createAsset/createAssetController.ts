import { Request, Response } from "express";
import { CreateAssetUseCase } from "./createAssetUseCase";


export class CreateAssetController {
  constructor(
    private createAssetUseCase: CreateAssetUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, unitId, image, name, description, model, status, health } = req.body;
    try {
      await this.createAssetUseCase.execute({email, unitId, image, name, description, model, status, health});
      return res.status(201).json({message: 'Asset registered!'})
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}