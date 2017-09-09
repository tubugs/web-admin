import {login, logout} from '@/api/user'
//1、用户登录
//2、用户注销
//3、用户信息查询
const user = {
  state: {
    no: '',
    account: '',
    phone: '',
    nick_name: '',
    avatar: '',
    email: '',
    sex: 0,
    birthday: '',
    roles: [],
    permissions: []
  },

  mutations: {
    set_no: (state, no) => {
      state.no = no
    },
    set_account: (state, account) => {
      state.account = account
    },
    set_phone: (state, phone) => {
      state.phone = phone
    },
    set_nick_name: (state, nick_name) => {
      state.nick_name = nick_name
    },
    set_avatar: (state, avatar) => {
      state.avatar = avatar
    },
    set_email: (state, email) => {
      state.email = email
    },
    set_sex: (state, sex) => {
      state.sex = sex
    },
    set_roles: (state, roles) => {
      state.roles = roles
    },
    set_permissions: (state, permissions) => {
      state.permissions = permissions
    }
  },

  actions: {
    // 登录
    login({commit}, form) {
      return new Promise((resolve, reject) => {
        login(form.username.trim(), form.password).then(response => {
          const data = response.data;
          //TODO 根据返回码判断是否登录成功
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 注销
    logout({commit}) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
