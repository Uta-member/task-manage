export type ResponseBase = {
  isSuccess: boolean;
  err?: {
    errMessage: string;
  };
};
