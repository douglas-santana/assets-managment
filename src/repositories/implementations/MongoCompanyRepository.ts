import { ICompanyRepository } from "../ICompanyRepository";
import { ICompanyDTO } from "../../DTO/companyDTO";
import Company from "../../entities/Company";


export class MongoCompanyRepository implements ICompanyRepository {
async save(company: ICompanyDTO): Promise<void> {
    await Company.create(company);
  }
}