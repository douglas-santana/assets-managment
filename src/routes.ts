import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { createAssetController } from "./useCases/createAsset";
import { createCompanyController } from "./useCases/createCompany";
import { createUnitController } from "./useCases/createUnits";
import { getAllAssetsByUnitController } from "./useCases/getAllAssetsByUnit";
import { getAssetByUserIdController } from "./useCases/getAssetByUserId";
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
  return getAllAssetsByUnitController.handle(request, response);
});

router.get('/getAssetByUserId/:id', (request, response) => {
  return getAssetByUserIdController.handle(request, response);
});

router.put('/updateAsset/:id', (request, response) => {
  return updateAssetController.handle(request, response);
});

router.delete('/deleteAsset/:id', (request, response) => {
  return deleteAssetController.handle(request, response);
});

export { router };
