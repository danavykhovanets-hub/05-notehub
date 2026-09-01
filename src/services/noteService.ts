///Інтерфейси, які описують відповіді http-запитів (FetchNotesResponse і т.д.) та параметри функцій, які виконують http-запити 

import axios from "axios";
import type { Note } from "../types/note.ts";

interface NotesResponse {
  results: Note[];
  total_pages: number;
}

export async function fetchNotes(
  query: string,
  page: number
): Promise<NotesResponse> {
  const response = await axios.get<NotesResponse>(
    "https://api.notehub.com/v1/notes",
    {
      params: {
        query,
        page, 
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data; 
}

export async function createNote(note: Note): Promise<Note> {
  const response = await axios.post<Note>(
    "https://api.notehub.com/v1/notes",
    note,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
}

export async function deleteNote(noteId: string): Promise<void> {
  await axios.delete(`https://api.notehub.com/v1/notes/${noteId}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
}