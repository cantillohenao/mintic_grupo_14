var assert = require('assert');

describe('Testing array methods', function(){
    describe('#indexOf() method the search index on array', function(){
        it('Should return -1 when the value is not present', function() {
            assert.equal( [1,2,3].indexOf(4), -1 )
        })
    });
    describe('#indexOf() method the search index on array', function(){
        it('Should returnt x when the value is on array', function(){
            assert.equal( [1,2,4].indexOf(1), 0 )
        });
    });
});

describe('String methods', function(){

    describe('#toUpperCase convert text to upper case', function(){
        it('Should conver all characteres to upper case', function(){
            assert.equal( 'hola mundo'.toUpperCase(), 'HOLA MUNDO' )
        });
    });
    describe('#toLowerCase convert text to lower case', function(){
        it('Should conver all characteres to lower case', function(){
            assert.equal( 'Hola Mundo'.toLowerCase(), 'hola mundo' )
        });
    });   
});

var sum = require('./sumExample')
var expect = require('chai').expect

describe('#sum its a custom funtion', function(){
    context('Tets sum wthout arguments', function(){
        it('Should returnt 0', function() {
            expect( sum()).to.equal(0)
        });
    });
    context('With arguments', function(){
        it('Should returnt the sum of arguments', function() {
            expect( sum(1,2,3,4,5)).to.equal(15)
        });
    });
    context('With only one param', function(){
        it('Should returnt the same that part', function() {
            expect( sum(6)).to.equal(6)
        });
    });
    context('With nom number params', function(){
        it('Should returnt the throw error', function() {
            expect( function() {sum(1,2,3,'4',5)}).to.throw(TypeError, 'sum() experts only numbers.')
        });
    });
});

/*var expect = require('chai').expect
var User = require('./userModel');

describe('#userModel test their validations', function(){

    it('Should be invalid if name is empty', function( done ){
        var user1 = new User({
            email: 'prueba@prueba.com',
            password: '123456789',
            age: 20
        });

        user1.validate(function(err){
            expect( err.errors.name ).to.exist;
            done();
        });
    });

    it('Should be a invalid validation ', function( done ){
        var user2 = new User({
            name: 'Juan Jaramillo',
            email: 'prueba@prueba.com',
            password: '123456789',
            age: 15
        });
        
        user2.validate(function(err){
            expect( err.errors.age ).to.exist;
            done();
        });
    });
});*/