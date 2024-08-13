
export const downloadUrl = (url: string, fileName?: string) => {
  let link: any = document.createElement('a');
  link.href = url;
  link.download = fileName || 'download';
  document.body.appendChild(link);
  link.click();
  // link.parentNode.removeChild(link);
}
export const downloadBlob = (data: any, fileName?: string) => {
  const blob = new Blob([data], { type: 'application/octet-stream' });
  const link: any = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

//遍历删除对象中的空值属性
export const delNullProperty = (obj: any) => {
  for (let i in obj) {//遍历对象中的属性
    if (obj[i] === undefined || obj[i] === null || obj[i] === "") {//首先除去常规空数据，用delete关键字
      delete obj[i]
    } else if (obj[i].constructor === Object) {//如果发现该属性的值还是一个对象，再判空后进行迭代调用
      if (Object.keys(obj[i]).length === 0) delete obj[i]//判断对象上是否存在属性，如果为空对象则删除
      delNullProperty(obj[i])
    } else if (obj[i].constructor === Array) {//对象值如果是数组，判断是否为空数组后进入数据遍历判空逻辑
      if (obj[i].length === 0) {//如果数组为空则删除
        delete obj[i]
      } else {
        for (let index = 0; index < obj[i].length; index++) {//遍历数组
          if (obj[i][index] === undefined || obj[i][index] === null || obj[i][index] === "" || JSON.stringify(obj[i][index]) === "{}") {
            obj[i].splice(index, 1)//如果数组值为以上空值则修改数组长度，移除空值下标后续值依次提前
            index--//由于数组当前下标内容已经被替换成下一个值，所以计数器需要自减以抵消之后的自增
          }
          if (obj[i].constructor === Object) {//如果发现数组值中有对象，则再次进入迭代
            delNullProperty(obj[i])
          }
        }
      }
    }
  }
}