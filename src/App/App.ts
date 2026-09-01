import ReactPaginate from 'react-paginate';

const ReactPaginate = (ReactPaginateModule as typeof ReactPaginateModule & {
  default?: typeof ReactPaginateModule;
}).default ?? ReactPaginateModule;

import css from './App.module.css';

import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';

import ReactPaginate from 'react-paginate';

const ReactPaginate = (ReactPaginateModule as typeof ReactPaginateModule & {
  default?: typeof ReactPaginateModule;
}).default ?? ReactPaginateModule;

import SearchBox from '../SearchBox/SearchBox';
//import types;

export default function App () {
    return (<div className={css.app}>
	<header className={css.toolbar}>
		{/* Компонент SearchBox */}
		{/* Пагінація */}
		{/* Кнопка створення нотатки */}
        <button className={css.button}>Create note +</button>
  </header>
  {/* Компонент NoteList */}
</div>);
}