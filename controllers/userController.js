
exports.getOnUser = (req, res) => {

    res.json({
        user: req.profile
    })
}