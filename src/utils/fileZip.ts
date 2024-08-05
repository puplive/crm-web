import JSZip from 'jszip';
import FileSaver from 'file-saver';
import axios from 'axios';
import { ElMessage } from "element-plus";
// import request from "@/utils/request";

export const downloadFile = (url: string) => {
  // let _this=this;
  // return new Promise((resolve, reject) => {
  //   //通过请求获取文件blob格式
  //   let xmlhttp: XMLHttpRequest = new XMLHttpRequest();
  //   xmlhttp.open("GET", url, true);
  //   xmlhttp.responseType = "blob";
  //   xmlhttp.onload = function () {
  //     if (this.status == 200) {
  //       resolve(this.response);
  //     } else {
  //       reject(this.status);
  //     }
  //   }
  //   xmlhttp.send();
  // });
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer',

    }).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};


export const zipFiles = (files: any[]) => {

  const zip = new JSZip();
  const promises: any[] = [];

  files.forEach((file: any) => {
    const Promise = downloadFile(file.url).then((data: any) => {
      // return response.data;
      zip.file(file.name, data);
    });
    promises.push(Promise);
    // zip.file(file.name, file);
  });

  Promise.all(promises).then(() => {
    zip.generateAsync({ type: 'blob' }).then((content) => {
      FileSaver.saveAs(content, 'files.zip');
    });
  }).catch((error) => {
    ElMessage.error(error.message);
  });

};