/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ArticleService } from "../article.service";
import { Public } from "../../decorators/public.decorator";
import { ArticleCreateInput } from "./ArticleCreateInput";
import { ArticleWhereInput } from "./ArticleWhereInput";
import { ArticleWhereUniqueInput } from "./ArticleWhereUniqueInput";
import { ArticleFindManyArgs } from "./ArticleFindManyArgs";
import { ArticleUpdateInput } from "./ArticleUpdateInput";
import { Article } from "./Article";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ArticleControllerBase {
  constructor(
    protected readonly service: ArticleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Article })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ArticleCreateInput): Promise<Article> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        text: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Article] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ArticleFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Article[]> {
    const args = plainToClass(ArticleFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        text: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Article })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ArticleWhereUniqueInput
  ): Promise<Article | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        text: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Article })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ArticleWhereUniqueInput,
    @common.Body() data: ArticleUpdateInput
  ): Promise<Article | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          text: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Article })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ArticleWhereUniqueInput
  ): Promise<Article | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          text: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
