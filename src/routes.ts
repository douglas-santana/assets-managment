import { Router } from "express";
import { createUserController } from "./useCases/createUser.ts";
import { createAssetController } from "./useCases/createAsset";
import { createCompanyController } from "./useCases/createCompany";
import { createUnitController } from "./useCases/createUnits";
import { getAssetsByUnitController } from "./useCases/getAssetsByUnit";

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/assets', (request, response) => {
  return createAssetController.handle(request, response);
});

router.post('/company', (request, response) => {
  return createCompanyController.handle(request, response);
});

router.post('/units', (request, response) => {
  return createUnitController.handle(request, response);
});

router.get('/getByUnitUser/:id', (request, response) => {
  return getAssetsByUnitController.handle(request, response);
});

export { router };
