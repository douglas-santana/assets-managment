import { MongoGetAssetsByUnitRepository } from "../../repositories/implementations/MongoGetAllAssetsByUnitRepository";
import { GetAssetsByUnitController } from "./getAllAssetsByUnitController";
import { GetAssetsByUnitUseCase } from "./getAllAssetsByUnitUseCase";

const mongoGetAssetsByUnitRepository = new MongoGetAssetsByUnitRepository();

const getAssetsByUnitUseCase = new GetAssetsByUnitUseCase(mongoGetAssetsByUnitRepository);

const getAssetsByUnitController = new GetAssetsByUnitController(getAssetsByUnitUseCase);

export { getAssetsByUnitUseCase, getAssetsByUnitController };