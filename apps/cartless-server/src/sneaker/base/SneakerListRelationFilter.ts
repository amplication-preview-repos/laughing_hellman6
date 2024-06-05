/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SneakerWhereInput } from "./SneakerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SneakerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SneakerWhereInput,
  })
  @ValidateNested()
  @Type(() => SneakerWhereInput)
  @IsOptional()
  @Field(() => SneakerWhereInput, {
    nullable: true,
  })
  every?: SneakerWhereInput;

  @ApiProperty({
    required: false,
    type: () => SneakerWhereInput,
  })
  @ValidateNested()
  @Type(() => SneakerWhereInput)
  @IsOptional()
  @Field(() => SneakerWhereInput, {
    nullable: true,
  })
  some?: SneakerWhereInput;

  @ApiProperty({
    required: false,
    type: () => SneakerWhereInput,
  })
  @ValidateNested()
  @Type(() => SneakerWhereInput)
  @IsOptional()
  @Field(() => SneakerWhereInput, {
    nullable: true,
  })
  none?: SneakerWhereInput;
}
export { SneakerListRelationFilter as SneakerListRelationFilter };
