import { IUserRepository } from "../IUserRepository";
import { IUserDTO } from "../../DTO/userDTO";
import { v4 as uuid } from "uuid";

class UsersRepositoryInMemory implements IUserRepository {
  private users: IUserDTO[] = [];

  async save(user: IUserDTO): Promise<void> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<IUserDTO> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

export { UsersRepositoryInMemory };