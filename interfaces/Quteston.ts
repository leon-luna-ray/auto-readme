export interface Question {
  type: string;
  name: string;
  prompt: string;
  template: string | ((value: any) => string);
  value?: any;
  isActive?: boolean;
}