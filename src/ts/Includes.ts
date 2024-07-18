type Includes<T extends readonly unknown[], U> = T extends readonly [infer First, ...infer Rest]
  ? First extends U
    ? true
    : Includes<Rest, U>
  : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// Alternative solution

// type Includes<T extends readonly unknown[], U> =
//   T extends [infer First, ...infer Rest]
//     ? Equal<First, U> extends true ? true : Includes<Rest, U>
//     : false;
