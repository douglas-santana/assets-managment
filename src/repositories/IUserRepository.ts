import { IUserDTO } from "../DTO/userDTO";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUserDTO>;
  save(user: IUserDTO): Promise<IUserDTO>;
}