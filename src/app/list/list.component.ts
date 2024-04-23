import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalService, NzModalRef, NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
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
    NzButtonModule,
    NzModalModule,
    ReactiveFormsModule,
    NzDatePickerModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  providers: [NzModalService],
})
export class ListComponent implements OnInit {
  constructor(private modal: NzModalService, private fb: FormBuilder) {}
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
  isVisible = false;
  isConfirmLoading = false;
  modelTitle: string = '新增';
  readonly: boolean = false;

  ngOnInit(): void {
    // 初始化请求数据
  }
  searchHandle() {
    console.log('name', this.name);
    console.log('storagePlace', this.storagePlace);
  }
  resetHandle(): void {
    this.name = '';
    this.storagePlace = '';
  }

  showDetail(id: string) {
    console.log('add or modify item');
    this.readonly = true
    this.isVisible = true;
    this.modelTitle = '详情'
  }
  addOrModifyHandle(id: string = ''): void {
    this.modelTitle = id ? '编辑' : '新增';
    console.log('add or modify item');
    this.isVisible = true;
  }

  getList(pageSize: number = 10, page: number = 1): void {
    console.log('get list');
  }
  deleteHandle(id: string): void {
    this.modal.confirm({
      nzTitle: '<i>确定删除该项纪录吗?</i>',
      nzOnOk: () => {
        console.log(`id==${id}`);
      },
    });
  }
  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  validateForm: FormGroup<{
    name: FormControl<string | null>;
    quantity: FormControl<string | null>;
    unit: FormControl<string | null>;
    storagePlace: FormControl<string | null>;
    putAwayDate: FormControl<Date | null>;

  }> = this.fb.group({
    name: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    unit: ['', [Validators.required]],
    storagePlace: ['', [Validators.required]],
    putAwayDate: this.fb.control<Date | null>(null),
 

  });

  submitForm(): void {
    console.log(this.validateForm.value);
  }
}
