/**
 * 获取当前网页 URL 中的指定查询参数值。
 *
 * @param {string} key - 查询参数的键名，例如 "id" 或 "page"。
 * @returns {string|null} 返回参数值（解码后），如果参数不存在则返回 null。
 *
 */

// 创建 URLSearchParams 实例，解析当前页面 URL 的查询字符串
export function getQueryParam(key) {
  const queryParams = new URLSearchParams(window.location.search);

  // 如果 URL 中存在该参数，则返回解码后的值，否则返回 null
  return queryParams.has(key) ? decodeURIComponent(queryParams.get(key)) : null;
}

// 判断用户登录的设备
export function visitDevice(should_console_show = false) {
  let ua = window.navigator.userAgent;
  let app = window.navigator.appVersion;
  let device_str = "未知";
  if (ua.indexOf("Mac OS X") > -1) {
    device_str = "ios端";
  }
  if (ua.indexOf("Windows") > -1) {
    device_str = "windows端";
  }
  if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
    device_str = "android端";
  }
  if (ua.match(/MicroMessenger/i) == "MicroMessenger") {
    device_str = device_str + "微信浏览器";
  }
  if (should_console_show) {
    console.log(
      "访问设备" +
        device_str +
        "\n" +
        "浏览器版本: " +
        app +
        "\n" +
        "用户代理: " +
        ua
    );
  }
  return device_str;
}

// 防抖：在n秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
export function debounce(func, wait, immediate = true) {
  // {func:回调函数,wait:等待时间ms,immediate:是否立即执行}
  let debounce_timeout = null;
  return function () {
    let context = this;
    let args = arguments;
    if (debounce_timeout) clearTimeout(debounce_timeout);

    if (immediate) {
      var callNow = !debounce_timeout;
      debounce_timeout = setTimeout(() => {
        debounce_timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      debounce_timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
  };
}

// 节流:在 n 秒中只执行一次函数s
export function throttle(func, wait, type = "timestamp") {
  // {func:回调函数,wait:等待时间ms,type:时间戳版本或计时器版本}
  let throttle_timeout = null;
  let throttle_previous = 0;
  return function () {
    let context = this;
    let args = arguments;
    if (type === "timestamp") {
      let now = Date.now();
      if (now - throttle_previous > wait) {
        func.apply(context, args);
        throttle_previous = now;
      }
    }
    if (type === "timer") {
      if (!throttle_timeout) {
        throttle_timeout = setTimeout(() => {
          throttle_timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}

// 导出通过接口返回的blob文件流
export function exportFile(file, file_name, file_type = "xlsx") {
  const blob = new Blob([file], { type: file_type });
  if ("download" in document.createElement("a")) {
    // 非IE下载
    let fileName = `${file_name}.${file_type}`;
    let link = document.createElement("a");
    link.download = fileName;
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href); // 释放URL 对象
    document.body.removeChild(link);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob);
  }
}

// 通过a标签下载后台返回的文件地址
export function downloadFile(href, file_name, file_type) {
  // 获取heads中的filename文件名
  let fileName = `${file_name}.${file_type}`;
  let a = document.createElement("a");
  a.style.display = "none";
  // 给a标签创建下载的链接
  a.href = href;
  // 下载后文件名
  a.download = fileName;
  // 把a标签作为子节点插入当前body下
  document.body.appendChild(a);
  // 点击a标签下载
  a.click();
  // 下载完成移除元素
  document.body.removeChild(a);
}

// 预加载图片
export function preLoadImg(img_url = [], type = "all") {
  if (type == "all") {
    // 加载所有
    let idx = 0;
    for (let i = 0; i < img_url.length; i++) {
      const img_url_item = img_url[i];
      let img = new Image();
      img.src = img_url_item;
      img.onload = img.onerror = function () {
        // 无论加载成功还是失败都会执行
        idx++;
        if (idx == img_url.length - 1) {
          // 已全部加载完毕
          return;
        }
      };
    }
  }
  if (type == "next") {
    // 依次加载
    let idx = 0;
    function preLoad() {
      let img = new Image();
      img.src = img_url[idx];
      idx++;
      img.onload = img.onerror = function () {
        if (idx == img_url.length) return;
        preLoad();
      };
    }
    preLoad();
  }
}

// 判断文件类型
export function checkFileType(file_extension) {
  let file_type; // 文件类型
  const img_format = [
    "png",
    "jpg",
    "jpeg",
    "bmp",
    "gif",
    "webp",
    "psd",
    "svg",
    "tiff",
  ]; // 图片的格式
  const video_format = [
    "mp4",
    "avi",
    "rmvb",
    "wmv",
    "mpg",
    "mpeg",
    "swf",
    "flv",
    "mov",
  ]; // 图片的格式
  const audio_format = ["mp3", "wma", "wav", "ape", "flac", "ogg", "aac"]; // 图片的格式
  const book_format = ["epub"]; // 图书的格式
  if (img_format.includes(file_extension)) {
    file_type = "image";
  } else if (video_format.includes(file_extension)) {
    file_type = "video";
  } else if (audio_format.includes(file_extension)) {
    file_type = "audio";
  } else if (book_format.includes(file_extension)) {
    file_type = "book";
  } else {
    file_type = "other";
  }
  return file_type;
}

// 获取文件的base64格式
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

// 金钱格式化(千分位加,)
export function amountFormat(val) {
  let value = Number(val);
  let num = Number(value.toFixed(8));
  return num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      // 对整数部分添加分隔符
      return $1 + ",";
    });
  });
}

// 深拷贝
export function deepCopy(obj) {
  let copyObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] =
        typeof obj[key] === "object" ? this.deepCopy(obj[key]) : obj[key];
    }
  }
  return copyObj;
}

// 随机生成由数字和大小写英文字母组成的字符串
export function randomString(num) {
  // num生成的数量
  var backArr = new Array();
  var arr = new Array();
  //生成26个英语字母【大写+小写】
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  for (let j = 0; j < 26; j++) {
    arr.push(String.fromCharCode(65 + j));
    arr.push(String.fromCharCode(97 + j));
  }
  for (let k = 0; k < num; k++) {
    var n = Math.floor(Math.random() * arr.length);
    backArr[k] = arr[n];
  }
  let val = backArr.join("");
  return val;
}

// 随机生成指定范围数字
export function randomNumber(minNum, maxNum) {
  // minNum, maxNum[最小数,最大数]
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
