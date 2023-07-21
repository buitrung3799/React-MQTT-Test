const protocol = "ws"
const host = "broker.emqx.io"
export const clientId =
  "emqx_react_" + Math.random().toString(16).substring(2, 8)
const port = 8083

export const username = "emqx_test"
export const password = "emqx_test"
export const url = `${protocol}://${host}:${port}/mqtt`
