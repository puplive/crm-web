const i={required:[{required:!0,message:"必填项",trigger:"blur"}],select:[{required:!0,message:"必填项",trigger:"change"}],phone:[{required:!0,message:"必填项",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"请输入正确的手机号",trigger:"blur"}],email:[{required:!0,message:"必填项",trigger:"blur"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"}],confirmPassword:[{required:!0,message:"请确认密码",trigger:"blur"},{min:6,message:"密码长度不能小于6位",trigger:"blur"},{validator:(g,e,r)=>{e!==(void 0).form.password?r(new Error("两次密码输入不一致")):r()},trigger:"blur"}],integer:[{validator:(g,e,r)=>{e%1!==0?r(new Error("请输入整数")):r()},trigger:"blur"}],positive:[{validator:(g,e,r)=>{e<=0?r(new Error("不能小于0")):r()},trigger:"blur"}],notEmptyArray:[{required:!0,type:"array",message:"请选择至少一项",trigger:"change"}]};export{i as _};
