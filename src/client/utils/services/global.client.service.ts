namespace application {
  'use strict';

  export interface ILayerEle {
    iter: number;
    wid: number;
    value: any[];
  }

  export interface IRecordEle {
    iter: number;
    value: number;
  }

  export interface IDBListEle {
    name: string;            // db name
    wnumber: number;         // number of workstations
    epochIterations: number; // number of iterations of each epoch
  }

  export interface ILayerListEle {
    lid: number;            // layer id
    name: string;
    type: string;
    label: string;
    channels: number;
    kernelNum: number;
    kernelWidth: number;
    kernelHeight: number;
  }

  export interface IGlobalService {
    setDBList(data: IDBListEle[]): void;
    setLayerList(data: ILayerListEle[]): void;
    setRecTypeList(data: string[]): void;
    setAttrList(data: string[]): void;
    getDBList(): IDBListEle[];
    getLayerList(): ILayerListEle[];
    getRecTypeList(): string[];
    getAttrList(): string[];
  }

  export class Global {

    public exports: IGlobalService;
    private recTypeList: string[];
    private dbList: IDBListEle[];
    private layerList: ILayerListEle[];
    private attrList: string[];

    public static factory() {
      let service = () => {
        return new Global().exports;
      };
      service.$inject = [];
      return service;
    }

    constructor() {
      let that = this;
      // initialize
      that.recTypeList = [
        'RecBackwardTime',
        'RecForwardTime',
        'RecSumTime',
        'RecTestError',
        'RecTestLoss',
        'RecTrainError',
        'RecTrainLoss',
        'RecUpdateTime'
      ];

      that.attrList = [
        'GradDistCorrelation',
        'GradDistCosineNorm',
        'GradDistEuclideanNorm',
        'GradDistManhattan',
        'GradStatMax',
        'GradStatMean',
        'GradStatMid',
        'GradStatMin',
        'GradStatNorm0',
        'GradStatNorm1',
        'GradStatNorm2',
        'GradStatQuarter1',
        'GradStatQuarter3',
        'GradStatStd',
        'GradStatSum',
        'GradStatVar',
        'WeightDistCorrelation',
        'WeightDistCosineNorm',
        'WeightDistEuclideanNorm',
        'WeightDistManhattan',
        'WeightStatMax',
        'WeightStatMean',
        'WeightStatMid',
        'WeightStatMin',
        'WeightStatNorm0',
        'WeightStatNorm1',
        'WeightStatNorm2',
        'WeightStatQuarter1',
        'WeightStatQuarter3',
        'WeightStatStd',
        'WeightStatSum',
        'WeightStatVar'
      ];

      this.exports = {
        setDBList: (data: IDBListEle[]) => { that.dbList = data; },
        setLayerList: (data: ILayerListEle[]) => { that.layerList = data; },
        setRecTypeList: (data: string[]) => { that.recTypeList = data; },
        setAttrList: (data: string[]) => { that.attrList = data; },
        getDBList: () => that.dbList,
        getLayerList: () => that.layerList,
        getRecTypeList: () => that.recTypeList,
        getAttrList: () => that.attrList
      };
    }
  }

  angular
    .module('utils')
    .factory('Global', Global.factory());
}
