"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUser_1 = require("./useCases/createUser");
const createAsset_1 = require("./useCases/createAsset");
const createCompany_1 = require("./useCases/createCompany");
const createUnits_1 = require("./useCases/createUnits");
const getAllAssetsByUnit_1 = require("./useCases/getAllAssetsByUnit");
const getAssetByUserId_1 = require("./useCases/getAssetByUserId");
const updateAsset_1 = require("./useCases/updateAsset");
const deleteAsset_1 = require("./useCases/deleteAsset");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/users', (request, response) => {
    return createUser_1.createUserController.handle(request, response);
});
router.post('/assets', (request, response) => {
    return createAsset_1.createAssetController.handle(request, response);
});
router.post('/company', (request, response) => {
    return createCompany_1.createCompanyController.handle(request, response);
});
router.post('/units', (request, response) => {
    return createUnits_1.createUnitController.handle(request, response);
});
router.get('/getAllAssetsByUnit', (request, response) => {
    return getAllAssetsByUnit_1.getAllAssetsByUnitController.handle(request, response);
});
router.get('/getAssetByUserId/:id', (request, response) => {
    return getAssetByUserId_1.getAssetByUserIdController.handle(request, response);
});
router.put('/updateAsset/:id', (request, response) => {
    return updateAsset_1.updateAssetController.handle(request, response);
});
router.delete('/deleteAsset/:id', (request, response) => {
    return deleteAsset_1.deleteAssetController.handle(request, response);
});
