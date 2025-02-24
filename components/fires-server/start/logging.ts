import emitter from '@adonisjs/core/services/emitter'

const NS_PER_SEC = 1e9
const MS_PER_SEC = 1e6

emitter.on('http:request_completed', ({ ctx, duration }) => {
  const { request, response } = ctx

  // Don't log request for health checks:
  if (request.url() === '/health') {
    return
  }

  // Don't log request for static assets:
  if (
    request.url().startsWith('/resources') ||
    request.url().startsWith('/node_modules') ||
    request.url().startsWith('/@')
  ) {
    return
  }

  const responseTime = (duration[0] * NS_PER_SEC + duration[1]) / MS_PER_SEC

  ctx.logger.info(
    {
      statusCode: response.getStatus(),
      responseTime,
    },
    `request ${ctx.request.method()} ${ctx.request.url()} status=${ctx.response.getStatus()} rt=${responseTime}`
  )
})
