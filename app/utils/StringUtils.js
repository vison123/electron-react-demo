/**
 * Created by vison on 17/3/20.
 */
const reg = /\${\w*}/g;
const dic = /^[A-Z_]*$/;

const getKey = key => {
  if (key.length > 2) {
    return key.substring(2, key.length - 1);
  }
  return '';
};

export const firstUpperCase = str => str.replace(/\b(\w)(\w*)/g, ($0, $1, $2) => $1.toUpperCase() + $2.toLowerCase());

const transformValue = value => {
  if (dic.test(value)) {
    return value.split('_').map(str => firstUpperCase(str)).join('');
  }
  return value;
};

export const toLowerFirstCase = str => str && str.replace(/(\w)/, v => v.toLowerCase());

export const convertTemplate = (template = '', params = {}) => (template.match(reg) || []).reduce((temp = '', key) => temp.replace(key, transformValue(params[getKey(key || '')]) || ''), template);

export const isArray = obj => obj instanceof Array;

export const trimStart = (str, chars) => {
  if (str[0] === chars) {
    return str.substring(1);
  }
  return str;
};
