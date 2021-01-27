/**
 * @class UserAPI runs CRUD operations on User model
 * @constructor userModel
 */
export default class UserAPI {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getUser(filter) {
    return await this.userModel.findOne(filter);
  }

  async getUserWithPwd(filter) {
    return await this.userModel.findOne(filter).select("+password");
  }

  async getUsers() {
    return await this.userModel.find({});
  }

  async addUser(user) {
    const newUser = this.userModel(user);
    await newUser.save();

    return newUser;
  }

  async removeUser(user) {
    return await this.userModel.findByIdAndDelete(user);
  }

  // return the number of users
  countUsers() {
    return this.userModel.countDocuments({});
  }

  async updateUser(userId, data) {
    return await this.userModel.findOneAndUpdate(
      {
        _id: userId,
      },
      { $set: data },
      { new: true }
    );
  }
}
