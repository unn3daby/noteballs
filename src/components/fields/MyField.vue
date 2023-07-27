<template>
    <div class="card pt-4 px-3 pb-4 mb-5" :class="`has-background-${bgColor}`">
        <label v-if="label" class="label">
            {{ label }}
        </label>
        <div class="field">
            <div class="control">
                <textarea
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea"
                    :placeholder="placeholder"
                    ref="textareaRef"
                ></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
//imports
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
    },
    placeholder: {
        type: String,
        default: "Some text...",
    },
    bgColor: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        default: null,
    },
});

//focus ta

const textareaRef = ref(null);

const focusTextarea = () => {
    textareaRef.value.focus();
};

defineExpose({
    focusTextarea,
});
</script>

<style scoped></style>
