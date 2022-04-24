import { Request, Response } from "express";
import { GetAllAssetsByUnitUseCase } from "./getAllAssetsByUnitUseCase";

export class GetAllAssetsByUnitController {
  constructor(
    private getAllAssetsByUnitUseCase: GetAllAssetsByUnitUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const assets = await this.getAllAssetsByUnitUseCase.execute();
      return res.status(200).json(assets)
    } catch (error: any) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}