import { IUserRepository } from "../IUserRepository";
import { IUserDTO } from "../../DTO/userDTO";
import { v4 as uuid } from "uuid";

class UsersRepositoryInMemory implements IUserRepository {
  private users: IUserDTO[] = [];

  async findByEmail(email: string): Promise<IUserDTO | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user
  }

  async save(user: IUserDTO): Promise<IUserDTO> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return user;
  }
}

export { UsersRepositoryInMemory };