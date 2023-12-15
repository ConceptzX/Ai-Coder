export type Lang  = 'English' | 'Chinese' | 'French' | 'German' | 'Dutch' | 'Polish'  | 'Korean' | 'Portuguese' | 'Japanese' | 'Russian' ;

export interface TranslateBody {
  Lang: string;
  model: Lang;
  Lang: string;
}

export interface TranslateResponse {
  code: string;
}
