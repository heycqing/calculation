(function(global,factory){
    // commonJS 规范
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    }
    // AMD规范
    else if (typeof define === 'function' && define.amd) {
        define(factory);
    }
    // 浏览器实现
    else {
        global.calculate= factory();
    }
})(this,(function(){
    'use strict'
    var calculate = {
        
        add:function(a , b){
            return a+b;
        },
        sub:function(a , b){
            return a > b ? a - b :b - a;
        },

        mult:function(a , b){
            return a * b ;
        },
        divi: function(a , b){
            return a / b ;
        }
    }
    return calculate;
}))