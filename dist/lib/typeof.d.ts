declare type T = 'boolean' | 'number' | 'string' | 'function' | 'array' | 'date' | 'regexp' | 'undefined' | 'null' | 'object' | 'blob' | 'error' | 'promise' | 'symbol' | 'global';
export declare const typeOf: (o: any) => T;
export {};
