import { MongoGetAssetByUnitRepository } from "../../repositories/implementations/MongoGetAssetByUnitRepository";
import { GetAssetByUnitController } from "./getAssetByUnitController";
import { GetAssetByUnitUseCase } from "./getAssetByUnitUseCase";

const mongoGetAssetByUnitRepository = new MongoGetAssetByUnitRepository();

const getAssetByUnitUseCase = new GetAssetByUnitUseCase(mongoGetAssetByUnitRepository);

const getAssetByUnitController = new GetAssetByUnitController(getAssetByUnitUseCase);

export { getAssetByUnitUseCase, getAssetByUnitController };