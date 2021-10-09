/**
 * 3つの数値の中央値を返す
 *
 * @param a
 * @param b
 * @param c
 * @returns
 */
export function median3(a: number, b: number, c: number): number {
  return Math.max(Math.min(a, b), Math.min(Math.max(a, b), c));
}
/**
 * 分割関数
 *
 * 配列をピボット(配列中の任意の値)に基づいて分割する
 * 分割後はピボットより小さい値がピボットの位置より左に、大きい値がピボットの位置より右に配置される
 * @param arr シャローコピーされた配列なので、クライアントの配列もソート済みとなる
 * @param first arrの走査範囲の最初のインデックス
 * @param last arrの走査範囲の最後のインデックス
 * @returns 分割位置(ピボットのインデックス)
 */
function partition(arr: number[], first: number, last: number): number {
  const center = Math.floor(first + (last - first) / 2);
  const pivot = median3(arr[first], arr[center], arr[last]);

  while (true) {
    while (arr[first] < pivot) first++; // pivot以上の数値があるところまでfirstを左から右に動かす
    while (pivot < arr[last]) last--; // pivot未満の数値があるところまでlastを右から左に動かす
    if (first >= last) return last; // firstとlastが入れ替わったらソート済み

    [arr[first], arr[last]] = [arr[last], arr[first]]; // pivot以上が左に、pivot未満が右にあるので入れ替える
    first++;
    last--;
  }
}

/**
 * クイックソート
 *
 * @param arr 走査配列
 * @param first 走査対象の開始インデックス(初期値は0)
 * @param last 捜査対象の終了インデックス(初期値は最後のインデックス)
 * @returns ソートされた配列
 */
export function quicksort(
  arr: number[],
  first: number = 0,
  last: number = arr.length - 1
): number[] {
  while (first < last) {
    const p = partition(arr, first, last);

    if (p - first < last - p) {
      quicksort(arr, first, p - 1);
      first = p + 1;
    } else {
      quicksort(arr, p + 1, last);
      last = p;
    }
  }
  return arr;
}
