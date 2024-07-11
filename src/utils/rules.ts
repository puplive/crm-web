const _rules = {
  positive:[
    { validator: (rule: any, value: any, callback: any) => {
      if (value <= 0) {
        callback(new Error('不能小于0'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ],
}

export default _rules;