import { Controller, Get } from "@nestjs/common";
import { Body, Param, UseGuards } from "@nestjs/common/decorators";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
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
  getAllUsers() {
    return this.userService.GetAllUser();
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
