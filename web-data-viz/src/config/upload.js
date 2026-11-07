var multer = require("multer");
var path = require("path");

var armazenamento = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/assets/imgs/uploads"));
    },

    filename: function (req, file, cb) {
        var nomeArquivo = Date.now() + path.extname(file.originalname);
        cb(null, nomeArquivo);
    }
});

var upload = multer({
    storage: armazenamento,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload;