/**
 * マージ処理
 *
 * ソート済みの２つの配列を、ソートされた一つの配列にマージする
 * ソート済みのため、互い配列をpopし続け、小さい順に格納していけば得たい配列が手に入る
 * ソートロジックはいずれも昇順を想定
 * @param arr1
 * @param arr2
 * @returns
 */
export function merge(arr1: number[], arr2: number[]): number[] {
  if (arr1.length === 0) return arr2;
  const result = [];
  let i2 = 0;
  for (let i1 = 0; i1 < arr1.length; i1++) {
    const e1 = arr1[i1];
    for (; arr2[i2] < e1; i2++) {
      const e2 = arr2[i2];
      result.push(e2);
    }
    result.push(e1);
  }
  if (arr2.length > i2) result.push(...arr2.slice(i2));
  return result;
}
/**
 * 一つの配列を真ん中くらいで２つに分ける
 *
 * @param arr
 * @returns 分割後の２つの配列
 */
function slice(arr: number[]): [number[], number[]] {
  const center = Math.floor(arr.length / 2);
  return [arr.slice(0, center), arr.slice(center)];
}

/**
 * マージソート
 *
 * 配列を2つに分割し続け、分割できない単位（要素が0,1個）になったら、マージ処理を施して一つの配列にする
 * @see merge
 * @param arr
 * @returns
 */
export function mergesort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const [arr1, arr2] = slice(arr).map(mergesort);

  return merge(arr1, arr2);
}
