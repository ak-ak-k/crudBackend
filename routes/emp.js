const express = require("express");
const router = express.Router();

const Employees = require("../models/emp");

router.get("/", async (req, res) => {
  try {
    getEmployee = await Employees.find();
    res.send(getEmployee);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/", async (req, res) => {
  try {
    let emp = new Employees({
      name: req.body.name,
      position: req.body.position,
      dept: req.body.dept,
    });
    const emp1 = await emp.save();
    res.status(201).send(emp1);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateData = await Employees.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({ message: "Employee updated successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to update employee." });
  }
});

// get single emp
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Employees.findById({ _id });

    res.status(200).send({
      message: true,
      success: "Success",
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      message: false,
      success: "Unsuccessful",
      error: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await Employees.findByIdAndDelete(req.params.id);

    return res.status(200).send({
      message: true,
      sucess: "Sucess",
      data: deleteData,
    });
  } catch (e) {
    res.status(400).send({
      message: false,
      sucess: "unsucess",
      error: error,
    });
  }
});
module.exports = router;
