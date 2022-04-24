"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyUseCase = void 0;
class CreateCompanyUseCase {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async execute(company) {
        await this.companyRepository.save(company);
    }
}
exports.CreateCompanyUseCase = CreateCompanyUseCase;
