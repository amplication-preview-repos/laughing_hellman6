import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SneakerService } from "./sneaker.service";
import { SneakerControllerBase } from "./base/sneaker.controller.base";

@swagger.ApiTags("sneakers")
@common.Controller("sneakers")
export class SneakerController extends SneakerControllerBase {
  constructor(protected readonly service: SneakerService) {
    super(service);
  }
}
