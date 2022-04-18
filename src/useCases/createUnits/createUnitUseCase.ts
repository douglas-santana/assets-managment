import { IUnitDTO } from "../../DTO/unitDTO";
import { IUnitRepository } from "../../repositories/IUnitRepository";

export class CreateUnitUseCase {
  constructor(
    private unitRepository: IUnitRepository
  ){}

  async execute(email: IUnitDTO) {
    await this.unitRepository.findByEmail(email);
  }
}