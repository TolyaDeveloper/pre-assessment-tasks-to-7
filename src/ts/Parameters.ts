const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T> = T extends (...args: infer U) => unknown ? U : never

// Use the custom MyParameters type
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
