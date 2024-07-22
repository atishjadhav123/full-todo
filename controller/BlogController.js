const Blog = require("../model/Blog")

exports.getallBlog = async (req, res) => {
    const result = await Blog.find()
    res.json({ message: "blog fetch success", result })
}
exports.addBlog = async (req, res) => {
    await Blog.create(req.body)
    res.json({ message: "blog add success" })
}
exports.updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "blog upadate success" })
}
exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id)
    res.json({ message: "blog delete success" })
}