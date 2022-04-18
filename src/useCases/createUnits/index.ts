import { MongoUnitRepository } from "../../repositories/implementations/MongoUnitRepository";
import { CreateUnitUseCase } from "./createUnitUseCase";
import { CreateUnitController } from "./createUnitController";

const mongoUnitRepository = new MongoUnitRepository();

const createUnitUseCase = new CreateUnitUseCase(mongoUnitRepository);

const createUnitController = new CreateUnitController(createUnitUseCase);

export { createUnitUseCase, createUnitController };