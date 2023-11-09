export default function storage(item) {
  let arr = [];
  arr.push(item);
  localStorage.setItem('Массив дел', JSON.stringify(arr));
}