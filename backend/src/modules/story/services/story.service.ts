import { Injectable, HttpException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Story } from "src/orm/entity/Story.entity";
import { Repository } from "typeorm";
@Injectable()
export class StoryService {
  constructor(@InjectRepository(Story) private story: Repository<Story>) {}

  async createStory(data: any) {
    const newStory = this.story.create({ ...data.data, user: data.jwt.id });

    try {
      const res = await this.story.save(newStory);
      return res;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
  async getAllStories() {
    try {
      const res = await this.story.find({
        select: {
          user: {
            id: true,
            userName: true,
          },
        },
        relations: {
          user: true,
        },
      });
      return res;
    } catch (err) {
      return err;
    }
  }
  async getStory(id:string) {
    try {
      const res = await this.story.findOneOrFail({
        where:{id},
        select: {
          user: {
            userName: true,
          },
        },
        relations: {
          user: true,
        },
      });
      return res;
    } catch (err) {
      return err;
    }
  }
}
