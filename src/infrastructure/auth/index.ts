import { Request, Response } from "express";

export interface AppContext {}

export function handleGraphQLContext(ctx: {
  connection?: any;
  req: Request;
  res: Response;
}) {
  const { req, connection } = ctx;

  if (connection) return connection.context;

  const token = req.headers.authorization;
  if (!token) return null;
}
