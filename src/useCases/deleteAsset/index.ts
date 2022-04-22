import { MongoDeleteAssetRepository } from "../../repositories/implementations/MongoDeleteAssetRepository";
import {DeleteAssetController } from "./deleteAssetController";
import { DeleteAssetUseCase } from "./deleteAssetUseCase";

const mongoDeleteAssetRepository = new MongoDeleteAssetRepository();

const deleteAssetUseCase = new DeleteAssetUseCase(mongoDeleteAssetRepository);

const deleteAssetController = new DeleteAssetController(deleteAssetUseCase);

export { deleteAssetUseCase, deleteAssetController };