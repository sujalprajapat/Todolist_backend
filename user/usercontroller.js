const emp = require('../model/usermodel');
const task = require('../model/taskmodel');
const bcrypt = require('bcrypt');
const storage = require('node-persist');
storage.init();
exports.empadd = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const data = await emp.create(req.body);
    res.status(200).json(
        data,
    );
}
exports.empview = async (req, res) => {
    const data = await emp.find().populate('emp_id');
    res.status(200).json(
        data,
    );
}
exports.empup = async (req, res) => {
    const id = req.params.id;
    const data = await emp.findByIdAndUpdate(id, req.body);
    res.status(200).json(
        data,
    );
}
exports.empdel = async (req, res) => {
    const id = req.params.id;
    const data = await emp.findByIdAndDelete(id, req.body);
    res.status(200).json(
        data,
    );
}
exports.taskadd = async (req, res) => {
    const data = await task.create(req.body);
    res.status(200).json(
        data,
    );
}
exports.taskview = async (req, res) => {
    const data = await task.find().populate('emp_id');
    res.status(200).json(
        data,
    );
}
exports.taskup = async (req, res) => {
    const id = req.params.id;
    const data = await task.findByIdAndUpdate(id, req.body);
    res.status(200).json(
        data,
    );
}
exports.taskdel = async (req, res) => {
    const id = req.params.id;
    const data = await task.findByIdAndDelete(id, req.body);
    res.status(200).json(
        data,
    );
}
exports.emplogin = async (req, res) => {
    var user = await storage.getItem('name');
    if (user == undefined) {
        var data = await emp.find({ "email": req.body.email }).populate('emp_id');
        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, async function (error, result) {
                if (result== true) {
                    await storage.setItem('name',data[0].id);
                    res.status(200).json(
                        data[0],
                    );
                } else {
                    res.status(200).json(
                        "check password",
                    );
                }
            })
        } else {
            res.status(200).json(
                "check email",
            );
        }
    }
    else {
        res.status(200).json(
            "already login",
        );
    }
}
exports.emplogout = async (req, res) => {
    await storage.clear('name');
    res.status(200).json(
        "logout success",
    );
}
