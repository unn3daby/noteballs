<template>
    <MyField
        v-model="noteContent"
        placeholder="Edit your note there"
        label="Editing your note"
        bgColor="grey-darker"
    >
        <template #buttons>
            <button @click="$router.back()" class="button is-danger m-2">
                Cancel
            </button>
            <button @click="updateContent" class="button is-link m-2">
                Save Note
            </button>
        </template>
    </MyField>
    <div>{{ $route.params.id }}</div>
</template>

<script setup>
//imports
import { ref } from "vue";
import MyField from "@/components/fields/MyField.vue";
import { useNotesStore } from "@/stores/notesStore.js";
import { useRoute, useRouter } from "vue-router";

//edit notes logic

const route = useRoute();
const router = useRouter();

const storeNotes = useNotesStore();

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent(route.params.id).content;
const updateContent = () => {
    let payload = {
        id: route.params.id,
        content: noteContent.value,
    };
    storeNotes.updateContent(route.params.id, payload);
    router.push("/");
};
</script>

<style scoped></style>
