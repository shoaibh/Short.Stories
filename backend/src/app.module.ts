import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import dbConfig from "./db/db.config";
import { AuthModule } from "./modules/auth/auth.module";
import { StoryModule } from "./modules/story/story.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        ...config.get("database"),
      }),
    }),
    AuthModule,
    StoryModule,
    UserModule,
  ],
})
export class AppModule {}
