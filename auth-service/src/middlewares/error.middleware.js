

export default (err, req, res, next) => {
    res.status(400).json({success: false, messsage: err.message || "Something went wrong"})
}