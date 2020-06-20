/**
 * @description util functions
 * @author serberina
 * @date 2020/06/10
 */

/**
 * get url variable
 * @param {String} variable variable name
 */
export function getQueryVariable(variable: string) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return '';
}

/**
 * structure of array convert into tree structure
 * @param {Array} data structure of array
 */
interface arrayToTreeType {
  author: string;
  avatar: string;
  content: string;
  pid: string;
  type: string;
  _id: string;
  date: number;
  [propsName: string]: any;
}
export function arrayToTree(data: arrayToTreeType[]) {
  let result: arrayToTreeType[] = [];
  let map: { [propsName: string]: any } = {};
  data.forEach(item => {
    map[item._id] = item;
  });
  data.forEach(item => {
    let parent = map[item.pid];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
