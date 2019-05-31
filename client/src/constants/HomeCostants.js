const homeTitle = 'Директории и файлы';
const newDirTitle = 'Новая директория';
const newDirBtn = 'Добавить в список';
const table = {
  title: 'Список директорий и файлов',
  filesBtn: 'Файлы',
  tableTitles: [
    'Дата',
    'Базовая директория',
    'Директорий',
    'Файлов',
    'Сумарный размер файлов',
    ''
  ],
};
const modal = {
  files: 'Файлы',
  size: 'Размер',
  closeBtn: 'Закрыть'
};
const errors = {
  path_exist_error: "такая директория уже существует",
  create_error: "не удалось создать директорию",
  get_error: "не удалось получить директорию"
};
export {
  homeTitle,
  newDirTitle,
  newDirBtn,
  table,
  modal,
  errors
}
