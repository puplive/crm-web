export type UserLoginType = {
  account: string
  password: string
}

export type UserType = {
  username: string
  password: string
  role: string
  roleId: string
  permissions: string | string[]
}
