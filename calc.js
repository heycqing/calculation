/*
 * Author: cqing
 * Email: SiqingIII@163.com
 * Github: https://github.com/heycqing
 * Crate By cqing
 */
(function(global,factory){
    if(typeof exports === 'object' && typeof module !== 'undefined'){
        module.exports = factory();
    }else if(typeof define === 'function' && defind.amd){
        define(factory);
    }else{
        global.Calculate = factory();
    }
})(this,function(){
    'use strict'
    /* Update V2.1.0
     * 优化 v2.0.0 代码;
     * 限制使用者随便更改重写当前原型对象;
     * 兼容只适用ES5的浏览器;
     */
    function Calculate(){};
    Calculate.prototype={
        numLength: function(num){
            return (num.toString().split('.')[1] || '').length;
        },
        tenPow: function(a,b){
            return Math.pow(10,Math.max(a,b));
        },
        num2String:function(num){
            return num.toString();
        },
        numTurn: function(str){
            try{
                if(str === '0'){
                    return Number(0);
                }else if(str > 0){
                    var temp = this.num2String(str);
                    return  Number(temp.replace('.',''));
                }
            }catch(e){
                console.log('error!')
            }
        },
        add:function(a , b){
            var aLength = this.numLength(a);
            var bLength = this.numLength(b);
            var maxNum = this.tenPow(aLength,bLength);
            return ( a * maxNum + b * maxNum ) / maxNum;
        },
        sub:function(a , b){
            var aLength = this.numLength(a);
            var bLength = this.numLength(b);
            var maxNum = this.tenPow(aLength,bLength);
            return a > b ? ((a * maxNum - b * maxNum) / maxNum) :((b * maxNum - a * maxNum) / maxNum);
        },
        mult:function(a , b){
            var aLength = this.numLength(a);
            var bLength = this.numLength(b);
            var a2num = this.numTurn(a);
            var b2num = this.numTurn(b);
            return (a2num * b2num)  / Math.pow(10,(aLength + bLength));
        },
        divi: function(a , b){
            var aLength = this.numLength(a);
            var bLength = this.numLength(b);
            var a2num = this.numTurn(a);
            var b2num = this.numTurn(b);
            return (a2num / b2num) / Math.pow(10,(aLength - bLength));
        }
    }
    Object.defineProperty(Calculate.prototype,'constructor',{
        enumerable: false,
        value: Calculate
    })
    return Calculate;

})