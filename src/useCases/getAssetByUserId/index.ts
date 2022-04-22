import { MongoGetAssetByUserIdRepository } from "../../repositories/implementations/MongoGetAssetByUserIdRepository";
import { GetAssetByUserIdController } from "./getAssetByUserIdController";
import { GetAssetByUserIdUseCase } from "./getAssetByUserIdUseCase";

const mongoGetAssetByUserIdRepository = new MongoGetAssetByUserIdRepository();

const getAssetByUserIdUseCase = new GetAssetByUserIdUseCase(mongoGetAssetByUserIdRepository);

const getAssetByUserIdController = new GetAssetByUserIdController(getAssetByUserIdUseCase);

export { getAssetByUserIdUseCase, getAssetByUserIdController };