var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDadosDashboard", function (req, res) {
    dashboardController.buscarDadosDashboard(req, res);
})

router.get("/buscarHistorico", function (req, res) {
    dashboardController.buscarHistorico(req, res);
})

router.get("/buscarDadosDashboardAdmin", function (req, res) {
    dashboardController.buscarDadosDashboardAdmin(req, res);
})


module.exports = router;