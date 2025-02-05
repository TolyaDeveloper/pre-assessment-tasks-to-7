type ExampleType = Promise<string>

type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T

export type Result = MyAwaited<ExampleType> // string
