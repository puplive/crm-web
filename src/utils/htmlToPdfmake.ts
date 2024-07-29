// import pdfMake from 'pdfmake/build/pdfmake';
// // import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake/browser.js';
// // PdfMake.vfs = PdfFonts.pdfMake.vfs;


// //引入中文字体，避免转换的PDF中文乱码
// // pdfMake.fonts = {
// //   SIMSUN: {
// //     normal: 'SIMSUN.TTF', // 'https://xx/AlibabaPuHuiTi-3-55-Regular.ttf',
// //     bold: 'SIMSUN.TTF', // 'https://xxx/AlibabaPuHuiTi-3-65-Medium.ttf',
// //     italics: 'SIMSUN.TTF', // 'https://xxx/AlibabaPuHuiTi-3-55-Regular.ttf',
// //     bolditalics: 'SIMSUN.TTF', // 'https://xxx/AlibabaPuHuiTi-3-65-Medium.ttf'
// //   }
// // };
// // pdfFonts.vfs = pdfFonts.pdfMake.vfs;
// pdfMake.fonts = {
//   Courier: {
//     normal: 'Courier',
//     bold: 'Courier-Bold',
//     italics: 'Courier-Oblique',
//     bolditalics: 'Courier-BoldOblique'
//   },
//   Helvetica: {
//     normal: 'Helvetica',
//     bold: 'Helvetica-Bold',
//     italics: 'Helvetica-Oblique',
//     bolditalics: 'Helvetica-BoldOblique'
//   },
//   Times: {
//     normal: 'Times-Roman',
//     bold: 'Times-Bold',
//     italics: 'Times-Italic',
//     bolditalics: 'Times-BoldItalic'
//   },
//   Symbol: {
//     normal: 'Symbol'
//   },
//   ZapfDingbats: {
//     normal: 'ZapfDingbats'
//   }
// };

// //它会返回pdfmake需要的数据结构
// const html = htmlToPdfmake(`<div>
//     <h1>123</h1>
//     <p>
//       This is a sentence with a <strong>bold word</strong>, <em>one in italic</em>,
//       and <u>one with underline</u>. And finally <a href="https://www.somewhere.com">a link</a>.
//     </p>
//   </div>`);
// // console.log(html)
// const dd = {
//   content: html,
//   //设置默认字体
//   // defaultStyle: {
//   //   font: 'SIMSUN'
//   // },
// };
// const pdf = pdfMake.createPdf(dd);
// // pdf.download()

// export default {
//   pdf
// };