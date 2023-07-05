let debounce_timeout;
let throttle_timeout;
let throttle_previous = 0;
export default {
  getPageParam (param_key) { // 获取网页的参数
    // param_key:要获取参数的key
    var reg = new RegExp("(^|&)" + param_key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  operatCookie (type, key, value, expir_millisecond) { // 操作cookie
    /**
     * @params {string} *type 操作类型,'get','set,'del'
     * @params {string} *key 操作的cokkie的key
     * @params {string} value 操作的cokkie的值
     * @params {Number} expir_millisecond cookie的过期时间毫秒
     */
    if(type === 'get'){
      return getCookie(key)
    }
    if(type === 'set'){
      // toGMTString: 转换格林威治时间,因为cookie使用的是转换格林威治
      let current_millisecond = new Date().getTime();
      let expir_date = new Date(current_millisecond + expir_millisecond);
      document.cookie = key + "=" + value + "; expires=" + expir_date.toGMTString();
      return getCookie(key)
    }
    if(type === "del"){
      var date = new Date();
      date.setDate(date.getDate()-1);//访问页面的前一天
      document.cookie = `${key}=${key};expires=${date.toGMTString()}`;
      return getCookie(key)
    }
    function getCookie(key) {
      let value = null
      let cookieArr = document.cookie.split('; ')
      for (let i = 0; i < cookieArr.length; i++) {
        let objArr = cookieArr[i].split("=");
        let cookie_name = objArr[0];
        let cookie_value = objArr[1];
        if(key === cookie_name){
          value = cookie_value
        }
      }
      return value
    }
  },
  amountFormat(val){ // 金钱格式化(千分位加,)
    let value = Number(val)
    let num = Number(value.toFixed(8));
    return num.toString().replace(/\d+/, function (n) {
      // 先提取整数部分 
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        // 对整数部分添加分隔符
        return $1 + ",";
      });
    });
  },
  deepCopy(obj){ // 深拷贝
    let copyObj = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        if( obj.hasOwnProperty(key) ){
          copyObj[key] = typeof obj[key] === 'object' ? this.deepCopy(obj[key]) : obj[key] ;
        }
    }
    return copyObj;
  },
  getDiffArr (arr1, arr2) { // 获取两数组中不同的值,并返回新数组
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
      let pass = true;
      for (let ii = 0; ii < arr2.length; ii++) {
        if (arr1[i] === arr2[ii]) {
          pass = false;
          break;
        }
      }
      if (pass) {
        arr3.push(arr1[i]);
      }
    }
    return arr3;
  },
  mergeSameObj (arr, key) { // 获取数组中对象key相同的项,融合为新数组并返回
    let obj = {},
    newArr = [];
    arr.forEach((item, index) => {
      if (!obj[item[key]]) {
        var arr = [];
        arr.push(item);
        newArr.push(arr);
        obj[item[key]] = item;
      } else {
        newArr.forEach(function (value, index) {
          //如果已经存在  就循环新组的值将值插入属性相同的数组里   为了防止重复添加   只要和第一个比较就可以了
          if (value[0][key] == item[key]) {
            value.push(item);
          }
        });
      }
    });
    return newArr;
  },
  cumNumberFromArrSameItem(data_arr,judg_key,number_key){ // 合并数组中对象的key相同的项,并相加数组中需要累加的key
    let key_arr = []; //定义空数组，用于装载去重之后的数组，
    let data_obj = {}; //定义空对象，用于数组转换成对象
    data_arr.forEach(item => { 
      if (key_arr.indexOf(item[judg_key]) === -1) { // 用indexOf()数组去重 如果检索的结果匹配到,则返回 1. 如果检索的结果没有匹配值,则返回 -1.
        key_arr.push(item[judg_key]);
        data_obj[item[judg_key]] = item;
      }else {
        data_obj[item[judg_key]][number_key] = Number(data_obj[item[judg_key]][number_key]) + Number(item[number_key]);
      }
    })
    let end_data = [];
    Object.keys(data_obj).forEach((key) => {
      end_data.push(data_obj[key])
    })
    return end_data;
  },
  calculateCarousel (allData, eachPageNum) {// 计算轮播图每张显示几条数据
    // allData[所有数据]eachPageNum[每页显示几条]
    let eachPageItem = eachPageNum; // 每张轮播图显示几条数据
    let PageNum = Math.ceil(allData.length / eachPageItem); // 共有多少页
    let finshArr = [];
    let arr = []; //每个child的数组
    for (let i = 0; i < PageNum; i++) {
    arr = allData.slice(i * eachPageItem, (i + 1) * eachPageItem);
    finshArr.push(arr);
    }
    return finshArr;
  },
  randomString (num) { // 随机生成由数字和大小写英文字母组成的字符串
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
  },
  randomNumber (minNum, maxNum) {// 随机生成指定范围数字
    // minNum, maxNum[最小数,最大数]
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      default:
        return 0;
    }
  },
  translateArray(array,targetkey) {// 根据一维数组的key将其转化为二维数组
    let map1 = {}
    while(array.length) {
    let current = array.pop() // 会影响原数组
    
    map1[current[targetkey]] = map1[current[targetkey]] || []
    map1[current[targetkey]].push(current)
    }
    return Object.keys(map1).map(key => map1[key])
  },
  visitDevice(should_console_show=false){ // 判断用户登录的设备
    let ua = window.navigator.userAgent;
    let app = window.navigator.appVersion;
    let device_str = '未知';
    if(ua.indexOf('Mac OS X') > -1){
      device_str = 'ios端'
    }
    if(ua.indexOf('Windows')> -1){
      device_str = 'windows端'
    }
    if(ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
      device_str = 'android端'
    }
    if (ua.match(/MicroMessenger/i) == 'MicroMessenger') {
      device_str = device_str + '微信浏览器';
    }
    if(should_console_show){
      console.log('访问设备' + device_str + '\n' + '浏览器版本: ' + app + '\n' + '用户代理: ' + ua);
    }
    return device_str
  },
  debounce (func,wait,immediate = true) {// 防抖：在n秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
    // {func:回调函数,wait:等待时间ms,immediate:是否立即执行}
    return function () {
      let context = this;
      let args = arguments;
      if (debounce_timeout) clearTimeout(debounce_timeout);

      if (immediate) {
        var callNow = !debounce_timeout;
        debounce_timeout = setTimeout(() => {
          debounce_timeout = null;
        }, wait)
        if (callNow) func.apply(context, args)
      } else {
        debounce_timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
      }
    }
  },
  throttle (func, wait ,type = 'timestamp') {// 节流:在 n 秒中只执行一次函数
    // {func:回调函数,wait:等待时间ms,type:时间戳版本或计时器版本}
    return function() {
      let context = this;
      let args = arguments;
      if(type=== 'timestamp' ){
        let now = Date.now();
        if (now - throttle_previous > wait) {
          func.apply(context, args);
          throttle_previous = now;
        }
      }
      if(type=== 'timer'){
        if (!throttle_timeout) {
          throttle_timeout = setTimeout(() => {
            throttle_timeout = null;
            func.apply(context, args)
          }, wait)
        }
      }
    }
  },
  exportFile(file,file_name,file_type = "xlsx"){ // 导出通过接口返回的blob文件流
    const blob = new Blob([file], { type: file_type })
    if ('download' in document.createElement('a')) {  // 非IE下载
      let fileName = `${file_name}.${file_type}`;
      let link = document.createElement('a');
      link.download = fileName;
      link.style.display = 'none';
      link.href = URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href) ; // 释放URL 对象
      document.body.removeChild(link);
    }else {  // IE10+下载
      navigator.msSaveBlob(blob);
    }
  },
  downloadFile(href, file_name,file_type){ // 通过a标签下载后台返回的文件地址
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
  },
  preLoadImg(img_url = [],type='all'){ // 预加载图片
    if(type == "all"){ // 加载所有
      let idx = 0;
      for (let i = 0; i < img_url.length; i++) {
        const img_url_item = img_url[i];
        let img = new Image();
        img.src = img_url_item;
        img.onload = img.onerror = function () {	// 无论加载成功还是失败都会执行
          idx++
          if (idx == img_url.length - 1) {// 已全部加载完毕
            return;
          }
        }
      }
    }
    if(type == "next"){ // 依次加载
      let idx = 0;
      function preLoad(){
        let img = new Image();
        img.src = img_url[idx];
        idx++;
        img.onload = img.onerror = function () {
          if(idx == img_url.length) return
          preLoad()
        }
      }
      preLoad()
    }
  },
  objEqual(a, b){ // 对比两个对象是否一致
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }
    for (let key in a) {
      if (b[key] === undefined) {
          return false
      }
      if (typeof(b[key]) === 'function' || typeof(a[key]) === 'function') {
          throw new Error('type error')
      }
      if (typeof(b[key]) != typeof(a[key])) {
          return false
      }
      if (typeof(a[key]) === 'object') {
          return this.objEqual(a[key], b[key])
      }
      if (a[key] !== b[key]) {
          return false
      }
    }
    return true
  },
  checkFileType(file_extension){ // 判断文件类型
    let file_type; // 文件类型
    const img_format = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff']; // 图片的格式
    const video_format = ['mp4','avi','rmvb','wmv','mpg','mpeg','swf','flv','mov']; // 图片的格式
    const audio_format = ['mp3','wma','wav','ape','flac','ogg','aac']; // 图片的格式
    const book_format = ['epub']; // 图书的格式
    if( img_format.includes( file_extension ) ){ file_type = 'image' } 
    else if(video_format.includes(file_extension)){ file_type = 'video' } 
    else if(audio_format.includes(file_extension)){ file_type = 'audio' }
    else if (book_format.includes(file_extension)){ file_type = 'book'  } 
    else { file_type = 'other' }
    return file_type
  },
  getBase64(file) { // 获取文件的base64格式
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}