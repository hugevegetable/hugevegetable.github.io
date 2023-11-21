/**
 * @description 实现medium的渐进加载背景的效果
 */

class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
        this.smallSrc = smallSrc;
        this.largeSrc = largeSrc;
        this.initTpl();


    }

    /**
     * @description 生成ui模板
     */
    initTpl() {
        this.container = document.createElement('div');
        this.smallStage = document.createElement('div');
        this.largeStage = document.createElement('div');
        this.video = document.createElement('div');
        this.smallImg = new Image();
        this.largeImg = new Image();
        this.container.className = 'pl-container';
        this.smallStage.className = 'pl-img pl-blur';
        this.largeStage.className = 'pl-img';
        this.video.className = 'pl-video';
        this.container.appendChild(this.smallStage);
        this.container.appendChild(this.largeStage);
        this.container.appendChild(this.video);
        this.smallImg.onload = this._onSmallLoaded.bind(this);
        this.largeImg.onload = this._onLargeLoaded.bind(this);
    }

    /**
     * @description 加载背景
     */
    progressiveLoad() {
        this.smallImg.src = this.smallSrc;
        this.largeImg.src = this.largeSrc;
    }

    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
        this.largeStage.classList.add('pl-visible');
        this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }

    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
        this.smallStage.classList.add('pl-visible');
        this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }
}

const executeLoad = (config, target) => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const loader = new ProgressiveLoad(
        isMobile ? config.mobileSmallSrc : config.smallSrc,
        isMobile ? config.mobileLargeSrc : config.largeSrc
    );
    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
        target.insertBefore(loader.container, target.children[0]);
    }
    loader.progressiveLoad();
};

let config = {
    smallSrc: 'https://t.mwm.moe/pc', // 小图链接 尽可能配置小于100k的图片
    largeSrc: 'https://t.mwm.moe/pc', // 大图链接 最终显示的图片
    mobileSmallSrc: 'https://t.mwm.moe/mp', // 手机端小图链接 尽可能配置小于100k的图片
    mobileLargeSrc: 'https://t.mwm.moe/mp', // 手机端大图链接 最终显示的图片

    // smallSrc: '/assets/The-Witch-s-Journey.png', // 小图链接 尽可能配置小于100k的图片
    // largeSrc: '/assets/The-Witch-s-Journey.png', // 大图链接 最终显示的图片
    // mobileSmallSrc: '/assets/The-Witch-s-Journey.png', // 手机端小图链接 尽可能配置小于100k的图片
    // mobileLargeSrc: '/assets/The-Witch-s-Journey.png', // 手机端大图链接 最终显示的图片

    // smallSrc: window.backgroundConfig.imgloadedImg.match(/url\((.*?)\)/)[1],
    // largeSrc: window.backgroundConfig.imgloadedImg.match(/url\((.*?)\)/)[1],
    // mobileSmallSrc: window.backgroundConfig.imgloadedImg.match(/url\((.*?)\)/)[1],
    // mobileLargeSrc: window.backgroundConfig.imgloadedImg.match(/url\((.*?)\)/)[1],
    enableRoutes: ['/'],
};

console.log("imgloaded.js----");



function initProgressiveLoad(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        executeLoad(config, target);
    }
}

function onPJAXComplete(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
        initProgressiveLoad(config);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initProgressiveLoad(config);
});

document.addEventListener("pjax:complete", function () {
    onPJAXComplete(config);
});



//重新设背景，重新改config
// document.addEventListener('randomBackgroundLoaded', function () {
//     // 在 random-background.js 执行完毕后执行的代码
//     // 示例字符串
//     const imgloadedImgString = window.backgroundConfig.imgloadedImg;
//     // 使用正则表达式匹配
//     const matchResult = imgloadedImgString.match(/url\((.*?)\)/);
//     // 获取匹配到的结果
//     const imagePath = matchResult && matchResult[1];

//     console.log("imgloaded.js----" + imagePath); // 输出 "/img/pc.webp"

//     config = {
//         smallSrc: imagePath,
//         largeSrc: imagePath,
//         mobileSmallSrc: imagePath,
//         mobileLargeSrc: imagePath,
//         enableRoutes: ['/'],
//     };
// });
