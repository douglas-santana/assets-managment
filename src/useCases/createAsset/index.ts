import { MongoAssetsRepository } from "../../repositories/implementations/MongoAssetsRepository";
import { CreateAssetController } from "./createAssetController";
import { CreateAssetUseCase } from "./createAssetUseCase";

const mongoAssetsRepository = new MongoAssetsRepository();

const createAssetUseCase = new CreateAssetUseCase(mongoAssetsRepository);

const createAssetController = new CreateAssetController(createAssetUseCase);

export { createAssetUseCase, createAssetController };