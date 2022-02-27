export function getDateNews(time) {
  if (time) {
    const date = new Date(time * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const formatedDate = `${hours}:${minutes} ${year}.${month}.${day} `;
    return formatedDate;
  }
}