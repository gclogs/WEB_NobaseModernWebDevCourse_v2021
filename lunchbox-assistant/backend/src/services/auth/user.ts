import { IUserInputDTO, userUniqueSearchInput } from "../../models/interface/IUser";
import User from "../../models/user";

const createUser = (data: IUserInputDTO) => {
    const user = new User(data);
    return user.save();
}

const findEmail = (data: userUniqueSearchInput) => {
    const { email } = data;
    return User.findOne({ email });
}
export default {
    createUser,
    findEmail
};