import fetch from '@/utils/fetch'

export function login(account, password) {
  return fetch({
    url: '/user/login',
    method: 'post',
    auth: {
      username: account,
      password: password
    }
  })
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}
