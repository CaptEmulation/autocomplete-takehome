import { NextApiRequest, NextApiResponse } from 'next'
import { createProxyServer } from 'http-proxy'
import qs from 'querystring'

const proxy = createProxyServer({
  secure: false,
  changeOrigin: true,
  ignorePath: true,
})

const DOMAIN =
  'http://vertauiinterview3zcck5-env.c3jmih47du.us-east-1.elasticbeanstalk.com'
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.u) {
    const path = (req.url as string).replace('/api/proxy', '/')
    proxy.web(req, res, {
      target: `${DOMAIN}/${path}?${qs.stringify(req.query)}`,
    })
  }
}
