import css from './SearchBox.module.css';

export default function SearchBox() {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
    />
  );
}

 ///параметр search із текстовим значенням для пошуку:



/// GET https://notehub-public.goit.study/api/notes?search=mysearchtext



/// Обов’язково зробіть відкладений пошук з use-debounce, щоб не виконувати запит на кожний введений символ. Хук useDebouncedCallback варто використовувати саме в Арр.