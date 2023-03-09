import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/orm/entity/User.entity";
import { serializeUser } from "src/util/serialization";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private user: Repository<User>) {}

  async GetAllUser() {
    const res = await this.user.find();
    const serialized = res.map((user) => serializeUser(user));
    console.log(serialized);
    return serialized;
  }
  async GetUser(id: string) {
    const res: any = await this.user.findOneOrFail({
      where: { id: id },
      relations: ["stories"],
    });
    return serializeUser(res);
  }
}
