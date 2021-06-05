import { User } from "modules/users/model/User";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found!");
    }
    const turnUserIntoAdmin = this.usersRepository.turnAdmin(user);

    return turnUserIntoAdmin;
  }
}

export { TurnUserAdminUseCase };
