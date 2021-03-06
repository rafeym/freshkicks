import cookie from 'js-cookie'
import Router from 'next/router'

export function handleLogin(token) {
  cookie.set('token', token)
  Router.push('/index')
}

// Acceots context object and path to redirect to
export function redirectUser(ctx, location) {
  // Redirect on the server
  if (ctx.req) {
    // Redirecting
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  }
  // Redirect on the client
  else {
    Router.push(location)
  }
}

export function handleLogout(ctx, location) {
  cookie.remove('token')
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}
