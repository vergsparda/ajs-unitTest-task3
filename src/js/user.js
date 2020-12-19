import { fetchData } from './http';

export function getLevel(Id) {
  const response = fetchData(`https://server:8080/user/${Id}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}
