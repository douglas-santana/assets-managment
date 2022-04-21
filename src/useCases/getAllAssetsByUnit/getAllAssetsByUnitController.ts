import { Request, Response } from "express";
import { GetAssetsByUnitUseCase } from "./getAllAssetsByUnitUseCase";

export class GetAssetsByUnitController {
  constructor(
    private getAssetsByUnitUseCase: GetAssetsByUnitUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const assets = await this.getAssetsByUnitUseCase.execute();
      return res.status(200).json(assets)
    } catch (error) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}