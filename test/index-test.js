var calc = require('../index');
var expect = require('chai').expect;

describe('测试这个插件的运算',function(){
    it('加法运算，3 + 4 应该等于 7 ', function(){
        expect(calc.add(3,4)).to.be.equal(7);
    });
    it('减法运算，4 - 3 应该等于 1 ', function(){
        expect(calc.sub(3,4)).to.be.equal(1);
    });
    it('乘法运算，3 * 4 应该等于 12 ', function(){
        expect(calc.mult(3,4)).to.be.equal(12);
    });
    it('除法运算，3 / 4 应该等于 0.75 ', function(){
        expect(calc.divi(3,4)).to.be.equal(0.75);
    });
})