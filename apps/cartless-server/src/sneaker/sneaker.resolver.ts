import * as graphql from "@nestjs/graphql";
import { SneakerResolverBase } from "./base/sneaker.resolver.base";
import { Sneaker } from "./base/Sneaker";
import { SneakerService } from "./sneaker.service";

@graphql.Resolver(() => Sneaker)
export class SneakerResolver extends SneakerResolverBase {
  constructor(protected readonly service: SneakerService) {
    super(service);
  }
}
