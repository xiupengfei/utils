/*
 * @Descripttion: Prettier
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-02 12:39:50
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-02 12:40:18
 */
// https://prettier.io/docs/en/options.html
module.exports = {
  tabWidth: 2, // 设定每个缩进为2个空格
  semi: true, // 在语句末尾添加分号
  singleQuote: true, // 使用单引号
  jsxSingleQuote: true,
  bracketSpacing: true, // 在括号间打印空格
  jsxBracketSameLine: true, // 把多行'>'放在最后一行的末尾，而不是另起一行放置
  printWidth: 140, // 行长超过140将会换行
  endOfLine: 'auto',
  proseWrap: 'preserve',
  trailingComma: 'all',
  useTabs: false
};
