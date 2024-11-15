const logindata = async (req, res) => { // Use const instead of import/export
    try {
        res.status(202).send({ msg: "hello world" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = logindata; // Use module.exports instead of export default
