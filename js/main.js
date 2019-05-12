/**
 * - 在nodejs中，一个js文件就是一个模块，每个js文件内的代码都是运行在一个独立的（自调用）函数里
 *   由nodejs引擎调用，一个文件中的变量和函数在其他模块内不可访问，只有暴露（设置为exports变量的属性）才能访问
 *
 * - nodejs引擎调用模块内隐含的自执行函数时，传入5个参数
 *   - require 函数 用于引入外部模块
 *   - exports 对象 用于将变量或函数暴漏在外部
 *   - module 对象 代表当前模块自身，exports就是module的属性
 *   - __filename 对象 当前模块完整路径
 *   - __dirname 对象 当前模块文件夹路径
 *
 * - require函数用来根据模块标识引用模块，该函数返回对象为引入的模块
 * - 模块分为核心模块和文件模块
 *      - 核心模块标识就是模块名，是nodejs自带的
 *      - 文件模块是自己创建的，node引入文件模块，支持绝对和相对路径，
 *      相对路径上必须.开头(js后缀可省略)
 */

// 引入文件模块
var model = require("./model");
var hello = require("./helloModel");
var math = require("math");

// 引入核心模块
var fs = require("fs");

//
console.log(require);
console.log(exports);
console.log(module);
console.log(__filename);
console.log(__dirname);

console.log(model);
console.log(model.x);

model.fn();
console.log(model.add(1,3));
console.log(model.mut(3,5));

// 获取当前执行函数的参数
console.log(arguments);

// 获取当前执行函数的信息，并转换为字符串
var contents = arguments.callee + '';

console.log(global.a);

hello.fn();


math.add(4, 5);