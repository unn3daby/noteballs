import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useNotesStore = defineStore("counter", {
    state: () => {
        return {
            notes: [
                {
                    id: "1",
                    content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero laboriosam minima omnis modi, enim, consequatur veritatis vitae quia dicta iure libero saepe pariatur,expedita nihil aliquid distinctio nostrum commodi quas?",
                },
                {
                    id: "2",
                    content: "shorter",
                },
            ],
        };
    },
    actions: {
        addNote(newNote) {
            const note = {
                id: uuidv4(),
                content: newNote,
            };
            this.notes.unshift(note);
        },
        deleteNote(id) {
            this.notes = this.notes.filter((note) => note.id !== id);
        },
        updateContent(id, content) {
            const index = this.notes.findIndex((item) => item.id === id);
            this.notes[index] = content;
        },
    },
    getters: {
        getNoteContent(state) {
            return (id) => {
                return state.notes.find((note) => note.id === id);
            };
        },
        getTotalNotesCount(state) {
            return state.notes.length;
        },
        getTotalCharacters: (state) =>
            state.notes.map((item) => item.content).join("").length,
    },
});
