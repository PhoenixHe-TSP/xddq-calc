import { makeAutoObservable } from "mobx";

export enum HeaderPageEnum {
  BattleSim,
  Profiles,
}

export class HeaderState {
  public currentPage: HeaderPageEnum;

  public constructor() {
    makeAutoObservable(this);
    this.currentPage = HeaderPageEnum.BattleSim;
  }

  public setPage(pageEnum: HeaderPageEnum): void {
    this.currentPage = pageEnum;
  }
}
