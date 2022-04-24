import { MongoUsersRepository } from "../../repositories/implementations/MongoUsersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(mongoUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };