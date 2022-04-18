import { IUserRepository } from "../IUserRepository";
import { IUserDTO } from "../../DTO/userDTO";
import User from "../../entities/User";


export class MongoUsersRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUserDTO> {
    const existsEmail = await User.findOne({ email });
    return existsEmail;
  }

  async save(user: IUserDTO): Promise<void> {
    await User.create(user);
  }
}