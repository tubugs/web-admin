const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  no: state => state.user.no,
  account: state => state.user.account,
  phone: state => state.user.phone,
  nick_name: state => state.user.nick_name,
  avatar: state => state.user.avatar,
  email: state => state.user.email,
  sex: state => state.user.sex,
  birthday: state => state.user.birthday,
  permission_routers: state => state.permission.routers
}
export default getters
