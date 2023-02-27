import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Story } from 'src/orm/entity/Story.entity';
import { StoryController } from './controller/story.controller';
import { StoryService } from './services/story.service';

@Module({
    imports: [TypeOrmModule.forFeature([Story])],
    controllers:[StoryController],
    providers:[StoryService]
})
export class StoryModule {}
