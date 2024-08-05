import JSZip from 'jszip';
import FileSaver from 'file-saver';
import axios from 'axios';
import { ElMessage } from "element-plus";
// import request from "@/utils/request";

export const downloadFile = (url: string) => {
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
      let fileType = file.url.split('.')
      zip.file(file.name + '.' + fileType[fileType.length - 1], data);
    });
    promises.push(Promise);
  });

  Promise.all(promises).then(() => {
    zip.generateAsync({ type: 'blob' }).then((content) => {
      FileSaver.saveAs(content, 'files.zip');
      ElMessage.success('下载成功');
    });
  }).catch((error) => {
    ElMessage.error(error.message);
  });

};