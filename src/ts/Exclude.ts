type MyExclude<T, U> = T extends U ? never : T

export type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
