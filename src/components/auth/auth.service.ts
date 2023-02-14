import { Injectable } from '@nestjs/common';
import { User, UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { password, ...userInfo } = user;
      return userInfo;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.userId}
    return {
      accessToken : this.jwtService.sign(payload)
    }
  }
}
