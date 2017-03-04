const should = require('should');
const Celular = require('../src/celular');

describe('teste do celular', function () {
  
  it('testando abc deve ser 222', function () {
    Celular('abc').should.equal('222');
  })

  it('testando def deve ser 333', function(){
    Celular('def').should.equal('333')
  })

  it('testando ghi deve ser 444',function(){
    Celular('ghi').should.equal('444')
 })

  it('testando 1-HOME-SWEET-HOME deve ser 1-4663-79338-4663', function(){
    Celular('1-HOME-SWEET-HOME').should.equal('1-4663-79338-4663');
  })
  it('testando SWEET deve ser 79338', function(){
    Celular('SWEET').should.equal('79338')
  })

})

