// 检查权限(判断当前用户是否有权限访问当前页面)

import accessControl from '@/accessControl/accessControl'
// loginUser: 当前登录用户，needAccess: 设置用户需要权限
const accessCheck = (loginUser, needAccess = accessControl.NOT_LOGIN) => {
  // 获取当前用户具有的权限(如果没有loginUser, 则表示未登录)
  const loginUserAccess = loginUser?.role ?? accessControl.NOT_LOGIN
  if (needAccess === accessControl.NOT_LOGIN) {
    return true
  }

  // 如果用户登录才能访问
  if (needAccess === accessControl.USER) {
    // 如果用户没登录，那么表示无权限
    if (loginUserAccess === accessControl.NOT_LOGIN) {
      return false
    }
  }

  // 如果需要管理员权限
  if (needAccess === accessControl.ADMIN) {
    // 如果用户不是管理员，那么表示无权限
    if (loginUserAccess !== accessControl.ADMIN) {
      return false
    }
  }
  return true
}

export default accessCheck
