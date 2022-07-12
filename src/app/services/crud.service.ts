import { Injectable } from '@angular/core';
import { Segment, Table } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})

export class Init {
  readonly data = 'alore-data';

  load() {
    if(localStorage.getItem(this.data) === null || localStorage.getItem(this.data) == undefined) {
      let data = [
        {
          id: 1,
          name: 'Meal Prep',
          icon: '😂',
          table: []
        }, 
        {
          id: 2,
          name: 'Hit the gym',
          icon: '😂',
          table: []
        }, 
        {
          id: 3,
          name: 'Write some flawless code',
          icon: '😂',
          table: []
        }
      ];

      localStorage.setItem(this.data, JSON.stringify(data));
      return 
    }
  }
}

export class CrudService extends Init{

  constructor() {
    super();
    this.load();
  }

  get getSegment() {
    let data: Segment[] = JSON.parse(localStorage.getItem(this.data) as string) as Segment[];
    console.log(data);
    return data;
  }

  addSegment(newData: Segment) {
     let data = JSON.parse(localStorage.getItem(this.data) as string);
     data.push(newData);
     localStorage.setItem(this.data, JSON.stringify(data));
  }

  addTable(segmentId: number, newTable: Table) {
    let data: Segment[] = JSON.parse(localStorage.getItem(this.data) as string);
    const newData = data.map(t => {
      if (t.id === segmentId) {
        t.table?.push(newTable);
        return t;
      }
      return t;
    });
    localStorage.setItem(this.data, JSON.stringify(newData));
  }
}
