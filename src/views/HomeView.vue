<script setup></script>

<template>
    <main>
        <MyField v-model="newNote" ref="addEditNote" bgColor="grey">
            <template #buttons>
                <button
                    ref=""
                    @click="addNote"
                    :disabled="!newNote"
                    class="button is-link"
                >
                    Add New Note
                </button>
            </template>
        </MyField>
        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </main>
</template>
<script setup>
//imports
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
import MyField from "@/components/fields/MyField.vue";
import { v4 as uuidv4 } from "uuid";
import { useNotesStore } from "@/stores/notesStore.js";
//store

const storeNotes = useNotesStore();

//notes
const addEditNote = ref(null);
const newNote = ref("");

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = "";
    addEditNote.value.focusTextarea();
};

const deleteNote = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
};
</script>

<style>
.label {
    color: white;
}
</style>
