import { Request, Response } from "express";
import { CreateAssetUseCase } from "./createAssetUseCase";


export class CreateAssetController {
  constructor(
    private createAssetUseCase: CreateAssetUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { image, name, description, model, owner, status, health } = req.body;
    try {
      await this.createAssetUseCase.execute({ image, name, description, model, owner, status, health });
      return res.status(201).json({message: 'Asset registered!'})
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}