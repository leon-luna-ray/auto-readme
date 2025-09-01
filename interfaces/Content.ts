import type { FormQuestion } from '@/interfaces/FormQuestion';

export interface Content {
  title: string;
  intro: string;
  ready_text: string;
  download_text: string;
  questions: FormQuestion[];
}
