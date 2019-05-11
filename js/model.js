
/**
 * 模块
 *
 * js中全局变量是window的属性，node中无window对象，通过global对象查找
 *
 * 全局中创建的变量都会作为global的属性保存
 * 全局中创建的方法都会作为global的方法保存
 *
 * 不使用var声明的变量即为全局变量
 */
a = 100;
var b = 200;

console.log("model");

// 变量，供外部调用
exports.x = 10;
exports.y = 100;

/**
 * 函数，供外部调用
 */
exports.fn = function () {
    console.log("fn")
};

exports.add = function (x, y) {
    return x + y;
};

exports.mut = function (x, y) {
    return x - y;
};



