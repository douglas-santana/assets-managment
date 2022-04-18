import { ICompanyDTO } from "../DTO/companyDTO";


export interface ICompanyRepository {
  save(company: ICompanyDTO): Promise<void>;
}