const router = require("express").Router()
const BlogController = require("./../controller/BlogController")

router
    .get("/", BlogController.getallBlog)
    .post("/", BlogController.addBlog)
    .put("/:id", BlogController.updateBlog)
    .delete("/:id", BlogController.deleteBlog)




module.exports = router