import { Hono } from 'hono';
import { cache } from 'hono/cache';

import ky from 'ky';

const app = new Hono()

app.get(
  '*',
  cache({
    cacheName: 'simple-cors-proxy',
    cacheControl: 'max-age=300',
  })
)

app.get('/connect/serverlist.php', async (c) => {
  const json = await ky.get('https://api.zpw.jp/connect/serverlist.php').json();
  // @ts-ignore
  return c.json(json);
})

app.get('/connect/v2/serverlist.php', async (c) => {
  const json = await ky.get('https://api.zpw.jp/connect/serverlist.php').json();
  // @ts-ignore
  return c.json(json);
})

export default app
