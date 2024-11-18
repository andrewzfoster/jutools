// 获取cookie
export function getCookie(key) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [k, v] = cookie.split("=");
    if (k === key) return v;
  }
  return null;
}

// 设置cookie
export function setCookie(key){
  const expires = new Date(Date.now() + expiration).toUTCString();
  document.cookie = `${key}=${value}; expires=${expires}; path=/`;
}

// 删除cookie
export function deleteCookie(key){
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}