/*
 * @Descripttion: 判断数据类型
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-02 12:41:15
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-02 13:11:46
 */
type T =
  | 'boolean'
  | 'number'
  | 'string'
  | 'function'
  | 'array'
  | 'date'
  | 'regexp'
  | 'undefined'
  | 'null'
  | 'object'
  | 'blob'
  | 'error'
  | 'promise'
  | 'symbol'
  | 'global';
export const typeOf = (o: any): T => Object.prototype.toString.call(o).slice(8, -1).toLowerCase() as T;
