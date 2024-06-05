import { Module } from "@nestjs/common";
import { SneakerModuleBase } from "./base/sneaker.module.base";
import { SneakerService } from "./sneaker.service";
import { SneakerController } from "./sneaker.controller";
import { SneakerResolver } from "./sneaker.resolver";

@Module({
  imports: [SneakerModuleBase],
  controllers: [SneakerController],
  providers: [SneakerService, SneakerResolver],
  exports: [SneakerService],
})
export class SneakerModule {}
