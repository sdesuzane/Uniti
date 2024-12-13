export interface FormClassesOptions {
  success: boolean;
  data: ApiData;
}

export interface ApiData {
  teachings: Teaching[];
  shifts: Shift[];
  schoolYears: SchoolYear[];
}

export interface Teaching {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Shift {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface SchoolYear {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
