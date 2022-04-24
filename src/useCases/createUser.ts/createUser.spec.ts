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

  it("Should be able to create a new user", async () => {
    const userData: IUserDTO = {
      name: "Test 1",
      email: "test1@test.com",
      password: "test123"
    }

    const user = await createUserUseCase.execute(userData);

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("Test 1");
    expect(user.email).toBe("test1@test.com");
    expect(user.password).toBe("test123");
  })

  it("Should not be able to create an existing user", async () => {
    const userData: IUserDTO = {
      name: "Test exist",
      email: "testexist@test.com",
      password: "testexist123"
    }

    await createUserUseCase.execute(userData);
    
    await expect(createUserUseCase.execute(userData)).rejects.toEqual(new Error('User Already Exists.'));
  })

})