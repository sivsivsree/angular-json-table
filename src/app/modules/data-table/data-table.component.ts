import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() dataSource: any;
  @Input() headers: any;
  @Input() update: boolean;

  @Output() deleteRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateRow: EventEmitter<any> = new EventEmitter<any>();

  data: any = {};

  displayed = [];
  perpage = 10;
  total: number;
  page = 1;

  checked: any = [];
  checkAll = false;
  dialogue = false;
  dialogeData: any = {};

  constructor() {
  }

  ngOnInit() {
    this.processData();
  }

  selected(e, id) {
    if (e.target.checked) {
      this.checked.push(id);
    }
  }

  deleteSelected() {
    if (this.checked.length > 0) {
      this.deleteRow.emit(this.checked);
      this.dataSource = this.dataSource.filter((value, index, array) => {
        return !this.checked.includes(value.id);
      });
      this.checked = [];
      this.paginate(this.page);
    }
  }

  totalItems() {
    if (this.total > this.perpage) {
      return Math.ceil(this.total / this.perpage);
    } else {
      return 1;
    }
  }

  paginate(page) {
    const start = (this.perpage * page) - this.perpage;
    const end = (this.perpage * page);
    console.log(start, end);
    this.data['data'] = this.dataSource.slice(start, end);
    console.log(this.data);
  }

  pageOnChange(perPage) {
    this.perpage = perPage;
    this.page = 1;
    console.log(perPage);
    this.paginate(this.page);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
    }

    this.paginate(this.page);
  }

  nextPage() {
    if (this.page + 1 <= this.totalItems()) {
      this.page++;
    }

    this.paginate(this.page);
  }

  showUpdate(id: any) {
    this.dialogue = true;
    console.log('Showing the updates');
    this.data.data.forEach((value) => {
      if (value.id === id) {
        this.dialogeData = value;
      }
    });

  }

  closeDialogue() {
    this.dialogue ? this.dialogue = false : this.dialogue = true;
    this.dialogeData = {};
  }

  submitUpdateRow(dialogeData: any) {
    this.updateRow.emit(dialogeData);
  }

  private processData() {
    if (this.dataSource && this.dataSource.length > 0) {
      this.total = this.dataSource.length;

      if (this.headers.thead && this.headers.thead.length > 0) {
        this.data['headers'] = this.headers.thead;
        this.displayed = this.headers.displayed;
      } else {
        console.warn('No headers data for table provided');
      }

      this.paginate(this.page);
    } else {
      console.warn('No data for table provided');
    }


  }
}

