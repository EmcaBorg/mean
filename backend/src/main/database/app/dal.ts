import {UserDal} from "./users/usersDal";
import {RoleDal} from "./users/roleDal";

export class Dal {
    user = new UserDal();
    role = new RoleDal();
}