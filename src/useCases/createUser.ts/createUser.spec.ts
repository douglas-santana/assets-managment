import { IUserDTO } from "../../DTO/userDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";

describe("Create User", () => {

  let usersRepository: IUserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeAll(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepository);
  })

  const userData: IUserDTO = {
    name: "Test 1",
    email: "test1@test.com",
    password: "test123"
  }

  it("Should be able to create a new user", async () => {
    const user = await createUserUseCase.execute(userData);

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("Test 1");
    expect(user.email).toBe("test1@test.com");
    expect(user.password).toBe("test123");
  })

})