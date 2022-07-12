export interface Segment {
    id: number;
    name: string;
    icon?: string;
    description?: string;
    table?: Table[];
  }

  export interface Table {
    id: number;
    name: string;
    icon?: string;
    color?: string;
  }