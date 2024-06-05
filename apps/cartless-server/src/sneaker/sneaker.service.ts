import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SneakerServiceBase } from "./base/sneaker.service.base";

@Injectable()
export class SneakerService extends SneakerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
