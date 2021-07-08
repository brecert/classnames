export type Falsy = false | 0 | "" | null | undefined 

/**
 * If a value is truthy, it will get added to the class names,
 * otherwise the value will be left out
 *
 * ```js
 * cls(['a', false, true && 'b', false && 'c', null,])
 // => "a b"
 * ```
 */
export const cls = (names: (string | Falsy)[]) =>
    names.filter(e => e).join(' ');
