import { Request, Response } from "express";
import { GetAssetByUnitUseCase } from "./getAssetByUnitUseCase";

export class GetAssetByUnitController {
  constructor(
    private getAssetByUnitUseCase: GetAssetByUnitUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const assets = await this.getAssetByUnitUseCase.execute(id);
      return res.status(200).json(assets)
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}