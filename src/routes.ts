import { Router } from "express";
import { createUserController } from "./useCases/createUser.ts";
import { createAssetController } from "./useCases/createAsset";
import { createCompanyController } from "./useCases/createCompany";
import { createUnitController } from "./useCases/createUnits";
import { getAssetsByUnitController } from "./useCases/getAllAssetsByUnit";
import { updateAssetController } from "./useCases/updateAsset";
import { deleteAssetController } from "./useCases/deleteAsset";

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

router.get('/getAllAssetsByUnit', (request, response) => {
  return getAssetsByUnitController.handle(request, response);
});

router.get('/getAssetByUnit/:id', (request, response) => {
  return getAssetsByUnitController.handle(request, response);
});

router.put('/updateAsset/:id', (request, response) => {
  return updateAssetController.handle(request, response);
});

router.delete('/deleteAsset/:id', (request, response) => {
  return deleteAssetController.handle(request, response);
});

export { router };
