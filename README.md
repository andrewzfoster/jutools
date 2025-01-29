# jutools

A collection of utility functions for JavaScript development.

## Installation

```sh
npm install jutools
```

## Usage

```js
import { objEqual, getCookie, setCookie, deleteCookie, calculateCarousel, getDiffArr, mergeSameObj, cumNumberFromArrSameItem, translateArray, queueArr } from "jutools";
```

## API

### `objEqual(a, b)`
Compares two objects for equality.

**Parameters:**
- `a` (Object): First object.
- `b` (Object): Second object.

**Returns:**
- `boolean`: Whether the objects are equal.

---

### `getCookie(key)`
Retrieves a cookie value by key.

**Parameters:**
- `key` (string): The cookie key.

**Returns:**
- `string | null`: The cookie value, or `null` if not found.

---

### `setCookie(key, value, expiration)`
Sets a cookie.

**Parameters:**
- `key` (string): The cookie key.
- `value` (string): The cookie value.
- `expiration` (number): Expiration time in milliseconds.

---

### `deleteCookie(key)`
Deletes a cookie by setting its expiration to the past.

**Parameters:**
- `key` (string): The cookie key.

---

### `calculateCarousel(allData, eachPageNum)`
Splits a one-dimensional array into a two-dimensional array based on a given page size.

**Parameters:**
- `allData` (Array): The original array.
- `eachPageNum` (number): Number of items per page.

**Returns:**
- `Array<Array<any>>`: The two-dimensional array.

---

### `getDiffArr(arr1, arr2)`
Finds the elements that exist in `arr1` but not in `arr2`.

**Parameters:**
- `arr1` (Array): First array.
- `arr2` (Array): Second array.

**Returns:**
- `Array<any>`: Array of differing elements.

---

### `mergeSameObj(arr, key)`
Merges objects with the same key into sub-arrays.

**Parameters:**
- `arr` (Array<Object>): Array of objects.
- `key` (string): Key to group by.

**Returns:**
- `Array<Array<Object>>`: Grouped objects as a two-dimensional array.

---

### `cumNumberFromArrSameItem(data_arr, judg_key, number_key)`
Merges objects with the same `judg_key` and sums up the `number_key` field.

**Parameters:**
- `data_arr` (Array<Object>): Array of objects.
- `judg_key` (string): Key to merge objects by.
- `number_key` (string): Key whose values should be summed.

**Returns:**
- `Array<Object>`: Array with merged objects.

---

### `translateArray(array, targetkey)`
Converts a one-dimensional array into a two-dimensional array grouped by `targetkey`.

**Parameters:**
- `array` (Array<Object>): Original array.
- `targetkey` (string): Key to group by.

**Returns:**
- `Array<Array<Object>>`: Grouped array.

---

### `queueArr(arr, size)`
Generates unique permutations of an array.

**Parameters:**
- `arr` (Array): The input array.
- `size` (number): The number of elements in each permutation.

**Returns:**
- `Array<Array<any>>`: An array of unique permutations.

