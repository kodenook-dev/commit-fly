<template>
    <main class="flex justify-center py-12">
        <UCard class="border border-gray-300">
            <div class="flex space-x-4">
                <UFormGroup
                    label="type"
                    required
                    class="basis-4/12"
                >
                    <USelect
                        v-model="type"
                        autofocus
                        :options="types"
                    />
                </UFormGroup>
                <UFormGroup
                    label="scope"
                    class="basis-8/12"
                >
                    <UInput />
                </UFormGroup>
            </div>
            <UFormGroup
                label="subject"
                required
                class="mt-2"
            >
                <UInput />
            </UFormGroup>
            <UFormGroup
                label="description"
                class="mt-2"
            >
                <UTextarea
                    :rows="10"
                />
            </UFormGroup>
            <UFormGroup
                label="footer"
                class="mt-2"
            >
                <UTextarea
                    :rows="10"
                />
            </UFormGroup>
        </UCard>
    </main>
</template>

<script lang="ts" setup>
const types = [
    'Build',
    'Ci',
    'Docs',
    'Feat',
    'Fix',
    'Perf',
    'Refactor',
    'Revert',
    'Style',
    'Test',
]

const type = ref(types[3])
</script>
