/**
 * シンプルソート
 *
 * @param arr 走査配列
 * @returns ソートされた配列
 */
export function simplesort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
