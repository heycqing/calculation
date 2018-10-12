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
    /* update
    * js的浮点数运算会不准确；想要准确地算出浮点数，可以直接把小数变化整数，再运算；
    * 或者直接进行移位运算，这也是解决js浮点数不准确的方法；
    */
    var calculate = {
        numLength: function(num){
            return (num.toString().split('.')[1] || '').length;
        },
        tenPow: function(num_a,num_b){
            return Math.pow(10,Math.max(num_a,num_b));
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
    return calculate;
}))