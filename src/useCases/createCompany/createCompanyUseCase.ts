import { ICompanyRepository } from "../../repositories/ICompanyRepository";
import { ICompanyDTO } from "../../DTO/companyDTO";

export class CreateCompanyUseCase {
  constructor(
    private companyRepository: ICompanyRepository
  ){}

  async execute(company: ICompanyDTO) {
    await this.companyRepository.save(company);
  }
}