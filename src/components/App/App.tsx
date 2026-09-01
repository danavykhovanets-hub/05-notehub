import ReactPaginate from 'react-paginate';

const ReactPaginate = (ReactPaginateModule as typeof ReactPaginateModule & {
  default?: typeof ReactPaginateModule;
}).default ?? ReactPaginateModule;

import React, { useState } from 'react';
import Formik from 'formik';

import css from './App.module.css';

import Modal from '../components/Modal/Modal';
import NoteForm from '../components/NoteForm/NoteForm';
import NoteList from '../components/NoteList/NoteList';

import ReactPaginate from 'react-paginate';

const ReactPaginate = (ReactPaginateModule as typeof ReactPaginateModule & {
  default?: typeof ReactPaginateModule;
}).default ?? ReactPaginateModule;

import SearchBox from '../components/SearchBox/SearchBox';
//import types;

export default function App () {
    return (<div className={css.app}>
	<header className={css.toolbar}>
		{/* Компонент SearchBox */}
		{/* Пагінація */}
		{/* Кнопка створення нотатки */}
        <button className={css.button}>Create note +</button>
  </header>
  const closeModal = () => setSelectedMovie(null);
  {/* Компонент NoteList */}
</div>);
}