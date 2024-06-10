const userModel = require("./../models/users")

module.exports = async (req, res, next) => {
    const {id} = req.body;
    const user = await userModel.findOne({_id: id}).lean()
    console.log(user.role)

    if (user) {
        if (user.role === "ADMIN") {
            return next()
        }
        else{
            return res.status(403).json({
                message:"you are not admin!"
            })
        }
    } else {
        return res.status(404).json({
            message: "user notFound"
        })
    }
}