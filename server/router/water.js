const express = require("express");
const multiparty = require("connect-multiparty");
const WaterController = require("../controllers/water");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.get("/water/:id", [md_auth.asureAuth], WaterController.getWater);
api.get("/waters", [md_auth.asureAuth], WaterController.getWater);
api.post("/add-water", [md_auth.asureAuth], WaterController.createWater);
api.put("/update-water/:id",[md_auth.asureAuth], WaterController.updateWater);
api.delete("/delete-water/:id", [md_auth.asureAuth], WaterController.deleteWater);
api.get("/waters-exists-site/:site/:period/:year", [md_auth.asureAuth], WaterController.existsWaterFormBySiteAndPeriodAndYear);
api.get("/waters-periods-site-year/:site/:year", [md_auth.asureAuth], WaterController.getPeriodWaterFormsBySiteAndYear);
api.get("/waters-site-year/:site/:year", [md_auth.asureAuth], WaterController.getWaterFormsBySiteAndYear);

module.exports = api;
