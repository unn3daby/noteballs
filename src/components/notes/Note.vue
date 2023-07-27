<template>
    <div class="card mb-3">
        <div class="card-content pb-2">
            <div class="content">{{ note.content }}</div>
        </div>
        <div class="has-text-right has-text-grey-light px-5 pb-2">
            <small>{{ noteLength }}</small>
        </div>
        <footer class="card-footer">
            <RouterLink class="card-footer-item" :to="`/edit-note/${note.id}`">
                Edit
            </RouterLink>
            <a class="card-footer-item" @click="notesStore.deleteNote(note.id)">
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
//imports
import { computed } from "vue";
import { useNotesStore } from "@/stores/notesStore.js";

//store
const notesStore = useNotesStore();

//note logic
const props = defineProps({
    note: {
        type: Object,
        default: [],
    },
});

const noteLength = computed(() => {
    const length = props.note.content.length;
    let descr = length > 1 ? "characters" : "character";
    return `${length} ${descr}`;
});
</script>

<style scoped></style>
