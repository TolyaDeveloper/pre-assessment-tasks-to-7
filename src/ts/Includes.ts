type Includes<T extends readonly unknown[], U> = T extends readonly [infer First, ...infer Rest]
  ? First extends U
    ? true
    : Includes<Rest, U>
  : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
