type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]

export type Result = Concat<[1], [2]> // expected to be [1, 2]
