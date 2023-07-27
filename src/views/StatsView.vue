<script setup></script>

<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ store.getTotalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters</td>
                    <td>{{ store.getTotalCharacters }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
//imports
import { useNotesStore } from "@/stores/notesStore.js";

// store
const store = useNotesStore();

console.log(store.getTotalNotesCount);
</script>

<style scoped>
.table {
    border-radius: 5px;
}
th {
    font-weight: bold;
}
</style>
