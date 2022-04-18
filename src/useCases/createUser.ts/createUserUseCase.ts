import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserDTO } from "../../DTO/userDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository
  ){}

  async execute(data: IUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User Already Exists.')
    }

    await this.usersRepository.save(data);
  }
}