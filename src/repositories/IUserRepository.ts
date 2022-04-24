import { IUserDTO } from "../DTO/userDTO";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  save(user: IUserDTO): Promise<IUserDTO>;
}