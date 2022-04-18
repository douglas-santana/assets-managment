import { MongoGetAssetsByUnitRepository } from "../../repositories/implementations/MongoGetAssetsByUnitRepository";
import { GetAssetsByUnitController } from "./getAssetsByUnitController";
import { GetAssetsByUnitUseCase } from "./getAssetsByUnitUseCase";

const mongoGetAssetsByUnitRepository = new MongoGetAssetsByUnitRepository();

const getAssetsByUnitUseCase = new GetAssetsByUnitUseCase(mongoGetAssetsByUnitRepository);

const getAssetsByUnitController = new GetAssetsByUnitController(getAssetsByUnitUseCase);

export { getAssetsByUnitUseCase, getAssetsByUnitController };