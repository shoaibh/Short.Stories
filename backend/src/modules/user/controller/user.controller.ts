import { Controller, DefaultValuePipe, Get, ParseIntPipe } from "@nestjs/common";
import { Body, Param, Query, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { IPaginationOptions } from "nestjs-typeorm-paginate";
import { AuthGuard } from "src/guards/auth.guard";
import Roles, { RoleGuard } from "src/guards/role.guard";
import { UserService } from "../services/user.service";

@Controller("user")
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  @UseGuards(RoleGuard)
  @Roles(["admin"])
  getAllUsers(
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query("limit", new DefaultValuePipe(5), ParseIntPipe) limit: number
  ) {
    const options: IPaginationOptions = {
      page,
      limit,
    };
    return this.userService.GetAllUsers(options);
  }
  @Get("/:id")
  getUsers(@Param("id") id: string, @Body() { jwt }: any) {
    if (["admin"].includes(jwt.role) || jwt.id === id)
      return this.userService.GetUser(id);

    throw new HttpException(
      "FORBIDDEN: Only ADMIN or RESOURCE OWNER can access this info",
      HttpStatus.FORBIDDEN
    );
  }
}
