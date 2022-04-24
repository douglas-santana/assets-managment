"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUnitUseCase = void 0;
class CreateUnitUseCase {
    constructor(unitRepository) {
        this.unitRepository = unitRepository;
    }
    async execute(data) {
        await this.unitRepository.save(data);
    }
}
exports.CreateUnitUseCase = CreateUnitUseCase;
