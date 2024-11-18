export { calculateCarousel,getDiffArr,mergeSameObj,cumNumberFromArrSameItem,translateArray,queueArr } from "./array"
export { getCookie,setCookie,deleteCookie } from "./cookie"
export { objEqual } from "./object"
export { getQueryParam,visitDevice,debounce,throttle,exportFile,downloadFile,preLoadImg,checkFileType,getBase64,amountFormat,deepCopy,randomString,randomNumber } from "./tool"

import * as arrayUtils from './array';
import * as cookieUtils from './cookie';
import * as objectUtils from './object';
import * as toolUtils from './tool';

const jutools = {
  ...arrayUtils,
  ...cookieUtils,
  ...objectUtils,
  ...toolUtils,
}
export default jutools