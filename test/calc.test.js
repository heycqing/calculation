var Calculate = require('../calc');
var expect = require('chai').expect;
var calc = new Calculate();

describe('测试这个插件的运算',function(){
    it('加法运算，3.0 + 4.1 应该等于 7.1 ', function(){
        expect(calc.add(3.0,4.1)).to.be.equal(7.1);
    });
    it('减法运算，4.5 - 3.2 应该等于 1.3', function(){
        expect(calc.sub(4.5,3.2)).to.be.equal(1.3);
    });
    it('乘法运算，3.2 * 4.2 应该等于 13.44 ', function(){
        expect(calc.mult(3.2,4.2)).to.be.equal(13.44);
    });
    it('除法运算，0.81 / 0.9 应该等于 0.9 ', function(){
        expect(calc.divi(0.81,0.9)).to.be.equal(0.9);
    });
    it('numTurn函数检验',function(){
        expect(calc.numTurn(5)).to.be.equal(5);
    })
    it('numLength 函数检验',function(){
        expect(calc.numLength(5)).to.be.equal(0)
    })
})