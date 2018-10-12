(function(global,factory){
    // commonJS 规范
    if (typeof module === 'object' && module && module.exports) {
        module.exports = factory(calculate);
    }
    // AMD规范
    else if (typeof define === 'function' && define.amd) {
        define([calculate], factory);
    }
    // 浏览器实现
    else {
        global.calculate= factory(global.calculate);
    }
})(this,(function(){
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