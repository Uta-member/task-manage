import { IUserQueryService } from "@/application/user/userApplicationQueryService";
import { User } from "@/domain/entity/user";
import { Email, EmailType } from "@/domain/valueObject/email";
import { UserId, UserIdType } from "@/domain/valueObject/userId";
import { UserNameType } from "@/domain/valueObject/userName";
import { container } from "@/toolkit/inversify/container/mainContainer";
import { TYPES } from "@/toolkit/inversify/types/mainTypes";
import { logger } from "@/toolkit/logger/logging";
import { Request, Response } from "express";

type FetchUserReqDTO = {
  userId?: UserIdType;
  email?: EmailType;
};

type FetchUserResDTO = {
  user: {
    id: UserIdType;
    name: UserNameType;
    email: EmailType;
  };
};

export const fetchUserHttpChannel = "/fetch_user";

export const handleFetchUser = async (req: Request, res: Response) => {
  const params: FetchUserReqDTO = req.body;

  try {
    const userQueryService = container.get<IUserQueryService>(
      TYPES.user.UserQueryService
    );

    let user: User | null = null;

    if (params.userId !== undefined) {
      const userId = new UserId(params.userId);
      user = await userQueryService.fetchUser(userId);
    }

    if (params.email !== undefined) {
      const email = new Email(params.email);
      user = await userQueryService.fetchUser(email);
    }

    if (user === null) {
      res.status(500).send();
      return;
    }

    const resData: FetchUserResDTO = {
      user: {
        id: user.id.value,
        name: user.name.value,
        email: user.email.value,
      },
    };

    res.status(200).send(resData);
  } catch (err) {
    logger.error(err);
    res.status(500).send();
  }
};
