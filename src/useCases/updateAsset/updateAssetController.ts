import { Request, Response } from "express";
import { UpdateAssetUseCase } from "./updateAssetUseCase";

export class UpdateAssetController {
  constructor(
    private updateAssetUseCase: UpdateAssetUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { image, name, description, model, owner, status, health } = req.body;
    const data = { image, name, description, model, owner, status, health };
    try {
      await this.updateAssetUseCase.execute(id, data);
      return res.status(200).json({message: 'Asset updated!'})
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}