import { Request, Response } from "express";
import { DeleteAssetUseCase } from "./deleteAssetUseCase";

export class DeleteAssetController {
  constructor(
    private deleteAssetUseCase: DeleteAssetUseCase,
  ){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      await this.deleteAssetUseCase.execute(id);
      return res.status(200).json({ message: 'Asset deleted'})
    } catch (error: any) {
      return res.status(400).json({messsage: error.message || 'Internal Error.'})
    }
  }
}