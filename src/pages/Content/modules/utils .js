// 找到最大长度字符串
export const findMaxString = (strArr) => {
  let maxLength = 0;
  let maxLengthIndex = 0;
  strArr.forEach((str, index) => {
    if (str.length > maxLength) {
      maxLength = str.length;
      maxLengthIndex = index;
    }
  });
  return strArr[maxLengthIndex];
};

// 匹配最外层花括号字符串
export const extractNestedBrackets = (input) => {
  let result = [];
  let stack = [];
  let current = '';

  for (let char of input) {
    if (char === '{') {
      if (stack.length === 0) {
        current = '';
      }
      stack.push(char);
      current += char;
    } else if (char === '}') {
      if (stack.length > 0) {
        stack.pop();
        current += char;
        if (stack.length === 0) {
          result.push(current);
        }
      }
    } else {
      current += char;
    }
  }

  return result;
};
