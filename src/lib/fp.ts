interface Binary<A, B, C> {
  (a: A, b: B): C
}
interface Unary<A, B> {
  (a: A): B
}

export function map<A, B>(fn: Unary<A, B>) {
  return function (list: A[]) {
    const result: B[] = []
    for (const item of list) {
      result.push(fn(item))
    }
    return result
  }
}

export function flatten<T>(array: Array<T | T[]>): T[] {
  return array.reduce<T[]>((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flatten(val))
    } else {
      acc.push(val)
    }
    return acc
  }, [])
}

export function box<A>(x: A) {
  function pipe<B>(fn: Unary<A, B>) {
    return box(fn(x))
  }
  function unwrap() {
    return x
  }

  return { pipe, unwrap }
}

export function prop<A, K extends keyof A>(key: K) {
  return function (obj: A) {
    return obj[key]
  }
}

export function reduce<A, B>(fn: Binary<A, B, A>) {
  return function (initial: A) {
    return function (list: B[]) {
      for (const item of list) {
        initial = fn(initial, item)
      }
      return initial
    }
  }
}

function isNotNull<A>(x: A): x is NonNullable<A> {
  return x != null
}

export function maybe<A>(x: A) {
  function pipe<B>(fn: Unary<NonNullable<A>, B>) {
    const y = isNotNull(x) ? fn(x) : (x as unknown as undefined)
    return maybe(y)
  }
  function unwrap() {
    return x
  }
  return { pipe, unwrap }
}
export const applyTo =
  <A, B>(x: A) =>
  (fn: Unary<A, B>) =>
    fn(x)

export const includes = (value: unknown) => (list: unknown[]) =>
  list.includes(value)

export function filter<T>(predicate: Unary<T, boolean>) {
  return function (list: T[]) {
    const result: T[] = []
    for (const item of list) {
      if (predicate(item)) {
        result.push(item)
      }
    }
    return result
  }
}

export function splitEvery(count: number) {
  return function <T>(list: T[]) {
    const result = []
    let idx = 0
    while (idx < list.length) {
      result.push(list.slice(idx, idx + count))
      idx += count
    }
    return result
  }
}
