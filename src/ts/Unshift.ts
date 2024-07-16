type Unshift<T extends unknown[], U> = [U, ...T]

export type Result = Unshift<[1, 2], 0> // [0, 1, 2]
