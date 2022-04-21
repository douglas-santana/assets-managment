import { MongoUpdateAssetRepository } from "../../repositories/implementations/MongoUpdateAssetRepository";
import {UpdateAssetController } from "./updateAssetController";
import { UpdateAssetUseCase } from "./updateAssetUseCase";

const mongoUpdateAssetRepository = new MongoUpdateAssetRepository();

const updateAssetUseCase = new UpdateAssetUseCase(mongoUpdateAssetRepository);

const updateAssetController = new UpdateAssetController(updateAssetUseCase);

export { updateAssetUseCase, updateAssetController };