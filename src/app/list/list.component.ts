import { Component, OnInit} from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  FormsModule
} from '@angular/forms';
interface ListType {
  id: string;
  name: string;
  storagePlace: string;
  quantity: number;
  unit: string;
  putAwayDate: string;
  remark: string;
}
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzButtonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  providers: [NzModalService],
})
export class ListComponent implements OnInit{
  constructor(private modal: NzModalService) {}

  list: ListType[] = [
    {
      id: '1',
      name: '离心管',
      storagePlace: '四楼4度',
      quantity: 20,
      unit: '支',
      putAwayDate: '2024-04-24',
      remark: '这是备注',
    },
    {
      id: '2',
      name: '离心管',
      storagePlace: '四楼4度',
      quantity: 20,
      unit: '支',
      putAwayDate: '2024-04-24',
      remark: '这是备注',
    },
    {
      id: '3',
      name: '离心管',
      storagePlace: '四楼4度',
      quantity: 20,
      unit: '支',
      putAwayDate: '2024-04-24',
      remark: '这是备注',
    },
    {
      id: '4',
      name: '离心管',
      storagePlace: '四楼4度',
      quantity: 20,
      unit: '支',
      putAwayDate: '2024-04-24',
      remark: '这是备注',
    },
  ];
  name: string = '';
  storagePlace: string = '';

  ngOnInit(): void{
    // 初始化请求数据
  }
  searchHandle() {
     console.log('name',this.name);
     console.log('storagePlace',this.storagePlace);
     
  }
  resetHandle():void{
    this.name = '';
    this.storagePlace = '';
  }

  showDetail(id: string) {
    console.log('add or modify item');
  }
  addOrModifyHandle(id: string = ''): void {
    console.log('add or modify item');
  }

  getList(pageSize: number = 10, page: number = 1): void {
    console.log('get list');
  }
  deleteHandle(id: string): void {
    this.modal.confirm({
      nzTitle: '<i>确定删除该项纪录吗?</i>',
      // nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => {
        console.log(`id==${id}`);
      },
    });
  }
}
