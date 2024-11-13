import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  iss: {
    type: String,
  },
  nbf: {
    type: String,
  },
  aud: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  email_varified: {
    type: Boolean,
  },
  azp: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
  },
  family_name: {
    type: String,
  },
  iat: {
    type: String,
  },
  exp: {
    type: Number,
  },
  jti: {
    type: String,
  },
});

const UserModel = mongoose.model("user", userSchema);

export { UserModel };
