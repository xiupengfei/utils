/**
 * @jest-environment jsdom
 */
/*
 * @Descripttion:
 * @Version: v0.1
 * @Author: pengfei.xiu
 * @Date: 2022-01-02 12:56:41
 * @LastEditors: pengfei.xiu
 * @LastEditTime: 2022-01-02 15:54:57
 */

import { typeOf } from '../lib/typeof';

test('undefined is undefined', () => {
  expect(typeOf(void 0)).toBe('undefined');
});

test('true is boolean', () => {
  expect(typeOf(true)).toBe('boolean');
});

test('1 is number', () => {
  expect(typeOf(1)).toBe('number');
});

test('abc is string', () => {
  expect(typeOf('abc')).toBe('string');
});

test('()=> {} is function', () => {
  expect(typeOf(() => {})).toBe('function');
});

test('[] is array', () => {
  expect(typeOf([])).toBe('array');
});

test('Date is date', () => {
  expect(typeOf(new Date())).toBe('date');
});

test('/a/ is regexp', () => {
  expect(typeOf(/a/)).toBe('regexp');
});

test('null is null', () => {
  expect(typeOf(null)).toBe('null');
});

test('{} is object', () => {
  expect(typeOf({})).toBe('object');
});
test('Blob is blob', () => {
  expect(typeOf(new Blob([]))).toBe('blob');
});

test('Error is error', () => {
  expect(typeOf(new Error())).toBe('error');
});

test('Promise is promise', () => {
  expect(
    typeOf(
      new Promise<any>((resolve) => {
        resolve(void 0);
      }),
    ),
  ).toBe('promise');
});

test('Symbol is symbol', () => {
  expect(typeOf(Symbol())).toBe('symbol');
});

test('globalThis is global or window', () => {
  expect(typeOf(globalThis)).toMatch(/window|global/);
});
