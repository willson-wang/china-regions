"use strict";

const chai = require("chai");
const regions = require("../dist/index");
const expect = chai.expect;

describe("列表操作", function() {
    it("获取省级列表", function () {
        expect(regions.getProvinces()).to.have.lengthOf(31);
        expect(regions.getProvinces("13")).to.have.lengthOf(1);
        expect(regions.getProvinces("13")).to.deep.equal([{code: "13", name: "河北省"}]);
        expect(regions.getProvinces("河北省")).to.have.lengthOf(1);
        expect(regions.getProvinces("河北省")).to.deep.equal([{code: "13", name: "河北省"}]);
        expect(regions.getProvinces({name: "河北省", code: "13"})).to.have.lengthOf(1);
        expect(regions.getProvinces({name: "河北省", code: "13"})).to.deep.equal([{code: "13", name: "河北省"}]);
        expect(regions.getProvinces({code: "13"})).to.have.lengthOf(1);
        expect(regions.getProvinces({code: "13"})).to.deep.equal([{code: "13", name: "河北省"}]);
        expect(regions.getProvinces({name: "河北省"})).to.have.lengthOf(1);
        expect(regions.getProvinces({name: "河北省"})).to.deep.equal([{code: "13", name: "河北省"}]);
        expect(regions.getProvinces({names: "河北省"})).to.have.lengthOf(0);
        expect(regions.getProvinces({names: "河北省"})).to.be.an("array").that.is.empty;
    });

    it("获取城市列表", function () {
        expect(regions.getCitys()).to.have.lengthOf(343);
        expect(regions.getCitys("6110")).to.have.lengthOf(1);
        expect(regions.getCitys("6110")).to.deep.equal([{code: "6110", name: "商洛市", provinceCode: "61"}]);
        expect(regions.getCitys("商洛市")).to.have.lengthOf(1);
        expect(regions.getCitys("商洛市")).to.deep.equal([{code: "6110", name: "商洛市", provinceCode: "61"}]);
        expect(regions.getCitys({name: "商洛市", code: "6110"})).to.have.lengthOf(1);
        expect(regions.getCitys({name: "商洛市", code: "6110"})).to.deep.equal([{code: "6110", name: "商洛市", provinceCode: "61"}]);
        expect(regions.getCitys({code: "6110"})).to.have.lengthOf(1);
        expect(regions.getCitys({code: "6110"})).to.deep.equal([{code: "6110", name: "商洛市", provinceCode: "61"}]);
        expect(regions.getCitys({name: "商洛市"})).to.have.lengthOf(1);
        expect(regions.getCitys({name: "商洛市"})).to.deep.equal([{code: "6110", name: "商洛市", provinceCode: "61"}]);
        expect(regions.getCitys({names: "商洛市"})).to.have.lengthOf(0);
        expect(regions.getCitys({names: "商洛市"})).to.be.an("array").that.is.empty;
    });

    it("根据省级code获取城市列表", function () {
        expect(regions.getCitysByProvince()).to.have.lengthOf(343);
        expect(regions.getCitysByProvince("13")).to.have.lengthOf(11);
        expect(regions.getCitysByProvince({provinceCode: '13'})).to.have.lengthOf(11);
        expect(regions.getCitysByProvince({provinceCodes: '13'})).to.be.an("array").that.is.empty;
    });

    it("获取区县列表", function () {
        expect(regions.getAreas()).to.have.lengthOf(3004);
        expect(regions.getAreas("532301")).to.have.lengthOf(1);
        expect(regions.getAreas("532301")).to.deep.equal([{code: "532301", name: "楚雄市", cityCode: "5323",
        provinceCode: "53"}]);
        expect(regions.getAreas("楚雄市")).to.have.lengthOf(1);
        expect(regions.getAreas("楚雄市")).to.deep.equal([{code: "532301", name: "楚雄市", cityCode: "5323",
        provinceCode: "53"}]);
        expect(regions.getAreas({name: "楚雄市", code: "532301"})).to.have.lengthOf(1);
        expect(regions.getAreas({name: "楚雄市", code: "532301"})).to.deep.equal([{code: "532301", name: "楚雄市", cityCode: "5323",
        provinceCode: "53"}]);
        expect(regions.getAreas({code: "532301"})).to.have.lengthOf(1);
        expect(regions.getAreas({code: "532301"})).to.deep.equal([{code: "532301", name: "楚雄市", cityCode: "5323",
        provinceCode: "53"}]);
        expect(regions.getAreas({name: "楚雄市"})).to.have.lengthOf(1);
        expect(regions.getAreas({name: "楚雄市"})).to.deep.equal([{code: "532301", name: "楚雄市", cityCode: "5323",
        provinceCode: "53"}]);
        expect(regions.getAreas({names: "楚雄市"})).to.have.lengthOf(0);
        expect(regions.getAreas({names: "楚雄市"})).to.be.an("array").that.is.empty;
    });

    it("根据市级code获取城市列表", function () {
        expect(regions.getAreasByCity()).to.have.lengthOf(3004);
        expect(regions.getAreasByCity("6110")).to.have.lengthOf(7);
        expect(regions.getAreasByCity("6110000")).to.be.an("array").that.is.empty;
        expect(regions.getAreasByCity({cityCode: "6110"})).to.have.lengthOf(7);
        expect(regions.getAreasByCity({cityCodes: "6110"})).to.be.an("array").that.is.empty;
    });
});
