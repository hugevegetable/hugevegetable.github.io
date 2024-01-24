// //随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var backimg = [
//     "url(/img/bg2.webp)",
//     "url(/img/pc.webp)"

// ];
// //获取背景图片总数，生成随机数
// var bgindex = Math.floor(Math.random() * (backimg.length));
// //重设背景图片
// document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];



// setRandomBackground()
// function setRandomBackground() {
//     // 随机背景图片数组，图片可以换成图床链接，注意最后一条后面不要有逗号
//     var backimg = [
//         "url(/assets/background/bg1.webp)",
//         "url(/assets/The-Witch-s-Journey.png)",
//         "url(/assets/background/bg2.png)",
//         "url(/assets/background/bg3.jpg)",
//         "url(/assets/background/bg4.png)",
//         // "url(/assets/background/bg5.webp)",
//         // "url(/assets/background/bg6.webp)"
//     ];

//     // 获取背景图片总数，生成随机数
//     var bgindex = Math.floor(Math.random() * (backimg.length));
//     // bgindex = Math.floor(2);
//     // 重设背景图片
//     document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];

//     // 设置 window.backgroundConfig 参数
//     window.backgroundConfig = {
//         imgloadedImg: backimg[bgindex],
//         // 其他配置...
//     };

//     console.log(window.backgroundConfig.imgloadedImg);
//     // // 保证banner和background的壁纸一样，用了‘randomBackgroundLoaded’
//     // const customEvent = new Event('randomBackgroundLoaded');
//     // document.dispatchEvent(customEvent);

// }


// document.getElementById("web_bg").style.backgroundImage = "url(https://t.mwm.moe/pc)";

document.getElementById("web_bg").style.backgroundImage = "url(https://api.qjqq.cn/api/Img?sort=acg)";


// //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var bannerimg = [
//     "url(/img/bg1.JPG)",
//     "url(/img/bg2.jpg)",
//     "url(/img/bg3.jpg)",
//     "url(/img/bg4.jpg)"
// ];
// //获取banner图片总数，生成随机数
// var bannerindex = Math.ceil(Math.random() * (bannerimg.length - 1));
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
