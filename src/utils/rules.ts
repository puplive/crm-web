const _rules = {
  required: [
    { required: true, message: '必填项', trigger: 'blur' }
  ],
  select: [
    { required: true, message: '必填项', trigger: 'change' }
  ],
  phone: [
    { required: true, message: '必填项', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '必填项', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value !== this.form.password) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      }, trigger: 'blur'
    }
  ],
  integer: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value % 1 !== 0) {
          callback(new Error('请输入整数'))
        } else {
          callback()
        }
      }, trigger: 'blur'
    }
  ],
  positive: [
    { pattern: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/, message: '必须大于0', trigger: 'blur' }
    // {
    //   validator: (rule: any, value: any, callback: any) => {
    //     console.log(value)
    //     setTimeout(() => {
    //       if (value <= 0) {
    //         callback(new Error('需大于0'))
    //       } else {
    //         callback()
    //       }
    //     }, 100)
    //   }, trigger: 'blur'
    // }
  ],
  // 非空数组
  notEmptyArray: [
    { required: true, type: 'array', message: '请选择至少一项', trigger: 'change' }
  ],
}

export default _rules;