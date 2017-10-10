import mongoose, { Schema } from "mongoose";
import { hashSync } from "bcrypt-nodejs";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    firstName: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String
  },
  { timestamps: true }
);

UserSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  }
};

export default mongoose.model("User", UserSchema);