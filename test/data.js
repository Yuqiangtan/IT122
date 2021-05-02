import { expect } from 'chai';
import * as data from "../data.js";

describe("students", function(){
    it("returns request name", function(){
        let result = data.getItem("tom");
        expect(result).to.deep.equal({ name : "tom", age : 24, classes : ["itc298", "cs110"],gender:"male"});
    });

    it("fails to return an w/ invalid name", function(){
        let result = data.getItem("fake");
        expect(result).to.be.undefined;
    });

    it("adds a new name",function(){
        let result = data.addItem({ name : "king", age : 24, classes : ["itc112", "it122"],gender:"male"});
        expect(result.added).to.be.true;
    });

    it("fails to add an existing name",function(){
        let result = data.addItem({ name : "tom", age : 24, classes : ["itc298", "cs110"],gender:"male"});
        expect(result.added).to.be.false;
    });

    it("deletes an existing name",function(){
        let result = data.deleteItem("tom");
        expect(result.deleted).to.be.true;
    });

    it("fails to delete an invalid name",function(){
        let result = data.deleteItem("fake");
        expect(result.deleted).to.be.false;
    })

});