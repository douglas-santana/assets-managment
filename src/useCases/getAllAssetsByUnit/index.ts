import { MongoGetAllAssetsByUnitRepository } from "../../repositories/implementations/MongoGetAllAssetsByUnitRepository";
import { GetAllAssetsByUnitController } from "./getAllAssetsByUnitController";
import { GetAllAssetsByUnitUseCase } from "./getAllAssetsByUnitUseCase";

const mongoGetAllAssetsByUnitRepository = new MongoGetAllAssetsByUnitRepository();

const getAllAssetsByUnitUseCase = new GetAllAssetsByUnitUseCase(mongoGetAllAssetsByUnitRepository);

const getAllAssetsByUnitController = new GetAllAssetsByUnitController(getAllAssetsByUnitUseCase);

export { getAllAssetsByUnitUseCase, getAllAssetsByUnitController };