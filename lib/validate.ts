/*
 * @Descripttion: 验证函数
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-02 14:12:50
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-02 14:19:28
 */
/**
 * @description 当前环境是否是移动端
 * @returns boolean
 */
export const isMobile = () => {
  const flag = navigator?.userAgent?.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  );
  return !!flag;
};

/**
 * @description 是否是数字(字符串数字也为true)
 * @param num
 * @returns boolean
 */
export const isNumber = (num: any) => {
  if (typeof num === 'number') {
    return num - num === 0;
  } else if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};
