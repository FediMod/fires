import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * This middleware ensures that any multipart requests do not make it through
 * and are immediately terminated before being parsed or handled in anyway
 */
export default class DisableMultipartRequestsMiddleware {
  async handle({ request, response }: HttpContext, next: NextFn) {
    const type = request.is(['multipart/form-data'])

    if (type === 'multipart/form-data') {
      return response.status(400).json({ error: 'Bad request' })
    }

    return next()
  }
}
