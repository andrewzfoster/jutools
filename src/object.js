// 对比两个对象是否一致
export function objEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (let key in a) {
    if (b[key] === undefined) {
      return false;
    }
    if (typeof b[key] === "function" || typeof a[key] === "function") {
      throw new Error("type error");
    }
    if (typeof b[key] != typeof a[key]) {
      return false;
    }
    if (typeof a[key] === "object") {
      return this.objEqual(a[key], b[key]);
    }
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}