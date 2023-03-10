import { Controller, Get, Post, Body, Param, UseGuards } from "@nestjs/common";
import { Query } from "@nestjs/common/decorators";
import { DefaultValuePipe, ParseIntPipe } from "@nestjs/common/pipes";
import { IPaginationOptions } from "nestjs-typeorm-paginate/dist/interfaces";
import { AuthGuard } from "src/guards/auth.guard";
import { JoiValidationPipe } from "src/pipes/joi-validation.pipe";
import { createStorySchema } from "src/Schemas/story.shema";
import { StoryService } from "../services/story.service";

@Controller("story")
@UseGuards(AuthGuard)
export class StoryController {
  constructor(private readonly storyService: StoryService) {}
  @Get("")
  getAllStories(
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query("limit", new DefaultValuePipe(5), ParseIntPipe) limit: number
  ) {
    const options: IPaginationOptions = {
      page,
      limit,
    };
    return this.storyService.getAllStories(options);
    // return this.storyService.getAllStories();
  }

  @Get("/:id")
  getStory(@Param("id") id: string) {
    return this.storyService.getStory(id);
  }

  @Post()
  createStory(@Body(new JoiValidationPipe(createStorySchema)) data: any) {
    return this.storyService.createStory(data);
  }
}
