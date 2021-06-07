"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.work = function () {
        console.log('类---' + this.name + ' works');
    };
    Person.run = function () {
        console.log("I'm going");
    };
    return Person;
}());
var p = new Person('John');
p.work();
// 类的继承
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(n) {
        return _super.call(this, n) || this; //super函数将参数传递到子类中
    }
    return Web;
}(Person));
var w = new Web('Jenny');
w.work();
// 直接调用的静态方法
Web.run();
