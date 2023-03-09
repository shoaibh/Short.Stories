import { Controller, Get, Post, Headers } from "@nestjs/common";
import { Body, UseGuards } from "@nestjs/common/decorators";
import { AuthGuard } from "src/guards/auth.guard";
import Roles, { RoleGuard } from "src/guards/role.guard";
import { JoiValidationPipe } from "src/pipes/joi-validation.pipe";
import { createUserSchema, loginUserSchema } from "src/Schemas/user.schema";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @UseGuards(AuthGuard)
  getuser(@Headers() jwt: any) {
    const token = jwt.authorization.split(" ")[1];
    return this.authService.getloggeduser(token);
  }
  @Post("signin")
  signin(@Body(new JoiValidationPipe(loginUserSchema)) data: any) {
    return this.authService.signin(data);
  }
  @Post("register")
  register(@Body(new JoiValidationPipe(createUserSchema)) data: any) {
    return this.authService.register(data,'regular');
  }
  @Post("/admin/register")
  adminRegister(@Body(new JoiValidationPipe(createUserSchema)) data: any) {
    return this.authService.register(data,'admin');
  }
  // @Post("guestsignin")
}
