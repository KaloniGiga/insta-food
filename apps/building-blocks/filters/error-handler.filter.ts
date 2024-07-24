import {
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ProblemDocument } from 'http-problem-details';
import ApplicationException from 'types/exception/application.exception';
import { serializeObject } from 'utils/serialization';
import { Response } from 'express';

export class ErrorHandlerFilter implements ExceptionFilter {
  public catch(err: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (err instanceof ApplicationException) {
      const problem = new ProblemDocument({
        type: ApplicationException.name,
        title: err.message,
        detail: err.stack,
        status: err.statusCode,
      });

      response.status(HttpStatus.BAD_REQUEST).json(problem);
      Logger.error(serializeObject(problem));
      return;
    }

    const problem = new ProblemDocument({
      type: 'INTERNAL_SERVER_ERROR',
      title: err.message,
      detail: err.stack,
      status: err.statusCode || 500,
    });

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(problem);
    Logger.error(serializeObject(problem));
    return;
  }
}
