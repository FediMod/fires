import type { HttpContext } from '@adonisjs/core/http'

export default class AboutController {
  async index({ view }: HttpContext) {
    return view.render('about/index')
  }
}
