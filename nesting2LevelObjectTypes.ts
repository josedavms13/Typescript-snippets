interface ObjectInterface {
  item1: {
    a: string,
    b: number,
    c: boolean
  },
  item2: {
    id: string
  }
}

function myFunction<T extends keyof ObjectInterface>(key: T, value: ObjectInterface[T]) {
}
