<template>
    <div class="flex flex-col h-screen">
        <HeaderItem class="h-20" />
        <main class="flex-1 bg-neutral-200 text-black">
            <slot />
        </main>
    </div>
</template>
