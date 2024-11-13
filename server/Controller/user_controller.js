//const express = require("express");

import { UserModel } from "../Modal/user";

const addUser = async (req, res) => {
  try {
    let exist = await UserModel.findOne({ sub: req.body.sub });
    if (exist) {
      res.status(200).json({ msg: "User already exist" });
      return;
    }

    const newUser = new UserModel(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

const getUser = async (res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
module.exports = {
  addUser,
  getUser,
};
