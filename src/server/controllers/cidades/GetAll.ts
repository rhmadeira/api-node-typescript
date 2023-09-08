import { Request, Response } from "express";
import { ICidade } from "../../types/cidades";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { StatusCodes } from "http-status-codes";

interface IQuery {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidate = validation((getSchema) => ({
  query: getSchema<IQuery>(
    yup.object().shape({
      page: yup.number().min(1),
      limit: yup.number().min(1).max(100),
      filter: yup.string().max(100),
    })
  ),
}));

export const getAll = async (
  req: Request<any, any, ICidade>,
  res: Response
) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("não implementado");
};