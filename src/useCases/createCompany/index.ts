import { MongoCompanyRepository } from "../../repositories/implementations/MongoCompanyRepository";
import { CreateCompanyUseCase } from "./createCompanyUseCase";
import { CreateCompanyController } from "./createCompanyController";

const mongoCompanyRepository = new MongoCompanyRepository();

const createCompanyUseCase = new CreateCompanyUseCase(mongoCompanyRepository);

const createCompanyController = new CreateCompanyController(createCompanyUseCase);

export { createCompanyUseCase, createCompanyController };