const router = require("express").Router();

const technologycontroller = require("../server/technology/technologycontroller");
const postcontroller = require("../server/post/postcontroller");
const querycontroller = require("../server/query/querycontroller");
const ratingcontroller = require("../server/rating/ratingcontroller");
const bidcontroller = require("../server/Bid/bidcontroller");
const taskcontroller = require("../server/task/taskcontroller");
const customercontroller = require("../server/customer/customercontroller");
const usercontroller = require("../server/user/usercontroller");
const developercontroller = require("../server/developer/developercontroller")

const multer = require("multer");

const technologyStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/technology')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});
const technologyUpload = multer({ storage: technologyStorage });

const developerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/developer')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});
const developerUpload = multer({ storage: developerStorage });

router.post("/technology/add",technologyUpload.single("technologyImage") ,technologycontroller.add);
router.post("/technology/getall", technologycontroller.getall);
router.post("/technology/getsingle", technologycontroller.getsingleData);
router.post("/technology/deleteData", technologycontroller.deleteData);
router.post("/technology/updateData", technologyUpload.single("technologyImage") ,technologycontroller.updateData);

router.post("/post/add", postcontroller.add);
router.post("/post/getall", postcontroller.getall);
router.post("/post/getsingle", postcontroller.getsingleData);
router.post("/post/deleteData",postcontroller.deleteData);
router.post("/post/updateData", postcontroller.updateData);

router.post("/query/add", querycontroller.add);
router.post("/query/getall", querycontroller.getall);
router.post("/query/getsingle", querycontroller.getsingleData);
router.post("/query/deleteData", querycontroller.deleteData);
router.post("/query/updateData", querycontroller.updateData);

router.post("/rating/add", ratingcontroller.add);
router.post("/rating/getall", ratingcontroller.getall);
router.post("/rating/getsingle", ratingcontroller.getsingleData);
router.post("/rating/deleteData",ratingcontroller.deleteData);
router.post("/rating/updateData",ratingcontroller.updateData)

router.post("/bid/add", bidcontroller.add);
router.post("/bid/getall", bidcontroller.getall);
router.post("/bid/getsingle", bidcontroller.getsingleData);
router.post("/bid/deleteData",bidcontroller.deleteData);
router.post("/bid/updateData",bidcontroller.updateData);
router.post("/bid/updateStatus",bidcontroller.updateStatus)


router.post("/task/add",taskcontroller.add);
router.post("/task/getall", taskcontroller.getall);
router.post("/task/getsingle",taskcontroller.getsingleData);
router.post("/task/deleteData",taskcontroller.deleteData);
router.post("/task/updateData",taskcontroller.updateData);


router.post("/customer/register",customercontroller.register);

router.post("/customer/getall",customercontroller.getall);
router.post("/customer/getsingle",customercontroller.getsingleData);

router.post("/customer/updateData",customercontroller.updateData);


router.post("/developer/register", developerUpload.single("developerImage"),developercontroller.register)
router.post("/developer/getall",developercontroller.getall)
router.post("/developer/getsingle",developercontroller.getsingleData)
router.post("/developer/updateData",developercontroller.updateData)

router.post("/user/login",usercontroller.login);



module.exports = router;

