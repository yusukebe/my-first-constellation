import { processImage } from './app'

import { Hono } from 'hono'
import { Bindings } from './types'

const app = new Hono<{ Bindings: Bindings }>()

app.post('/', async (c) => {
  const { file } = await c.req.parseBody()

  if (file instanceof File) {
    const data = await file.arrayBuffer()
    const result = await processImage(c.env, data)
    return c.json(result)
  }

  return c.text('Nothing to see here', 404)
})

export default app
