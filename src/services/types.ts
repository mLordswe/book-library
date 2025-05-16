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

export type WorksType = {
  key: string;
  title: string;
  description?: string | { type: string; value: string };
  excerpts?: {
    pages?: string;
    excerpt: string;
    comment?: string;
    
  }[];
  
};
