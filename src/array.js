// 将一维数组根据数量转换为二维数组
export function calculateCarousel(allData, eachPageNum) {
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
}

// 获取两数组中不同的值,并返回新数组
export function getDiffArr(arr1, arr2) {
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
}

// 获取数组中对象key相同的项,融合为新数组并返回
export function mergeSameObj(arr, key) {
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
}

// 合并数组中对象的key相同的项,并相加数组中需要累加的key
export function cumNumberFromArrSameItem(data_arr, judg_key, number_key) {
  let key_arr = []; //定义空数组，用于装载去重之后的数组，
  let data_obj = {}; //定义空对象，用于数组转换成对象
  data_arr.forEach((item) => {
    if (key_arr.indexOf(item[judg_key]) === -1) {
      // 用indexOf()数组去重 如果检索的结果匹配到,则返回 1. 如果检索的结果没有匹配值,则返回 -1.
      key_arr.push(item[judg_key]);
      data_obj[item[judg_key]] = item;
    } else {
      data_obj[item[judg_key]][number_key] =
        Number(data_obj[item[judg_key]][number_key]) + Number(item[number_key]);
    }
  });
  let end_data = [];
  Object.keys(data_obj).forEach((key) => {
    end_data.push(data_obj[key]);
  });
  return end_data;
}

// 根据一维数组的key将其转化为二维数组
export function translateArray(array, targetkey) {
  let map1 = {};
  while (array.length) {
    let current = array.pop(); // 会影响原数组

    map1[current[targetkey]] = map1[current[targetkey]] || [];
    map1[current[targetkey]].push(current);
  }
  return Object.keys(map1).map((key) => map1[key]);
}

// 根据数组随机排列的算法
export function queueArr(arr, size) {
  // arr 目标数组 size 生成的个数
  if (size > arr.length) {
    return;
  }
  let allResult = [];
  (function fn(arr, size, result) {
    if (result.length == size) {
      // 去重
      let is_repate = false;
      if (allResult.length > 0) {
        allResult.forEach((arr) => {
          if (arr.join() == result.join()) {
            is_repate = true;
          }
        });
        if (is_repate != true) {
          allResult.push(result);
        }
      } else {
        allResult.push(result);
      }
    } else {
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        let newArr = [].concat(arr);
        let curItem = newArr.splice(i, 1);
        fn(newArr, size, [].concat(result, curItem));
      }
    }
  })(arr, size, []);
  return allResult;
}
