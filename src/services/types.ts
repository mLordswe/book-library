export type BookResult = {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: string;
    first_publish_year?: string;
    Size: string
};

export type AuthorResult = {
    key: string;                     
    text?: string[];                
                     
    name: string;                   
    alternate_names?: string[];    
    birth_date?: string;           
    top_work?: string;             
    work_count?: number;           
    top_subjects?: string[];
}


  







export interface FirstSentence {
  type: string
  value: string
}

export type NormalizedBook = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  Size?: string;
  number_of_pages?: number;
  pages?: number;
  page_count?: number;
  details?: {
    number_of_pages?: number;
    pagination?: string;
  };
  description?: string | { value: string };
  publishers?: string[];
  first_sentence?:{type:string; value:string}
};