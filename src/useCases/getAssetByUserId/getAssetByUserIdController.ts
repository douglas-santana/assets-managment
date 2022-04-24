import { Request, Response } from "express";
import { GetAssetByUserIdUseCase } from "./getAssetByUserIdUseCase";

export class GetAssetByUserIdController {
  constructor(
    private getAssetByUserIdUseCase: GetAssetByUserIdUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const assets = await this.getAssetByUserIdUseCase.execute(id);
      return res.status(200).json(assets)
    } catch (error: any) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}