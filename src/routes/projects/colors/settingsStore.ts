import type { ColorSettings } from "$lib/interfaces"
import { writable, type Writable } from "svelte/store"

export const colorSettings: Writable<ColorSettings> = writable({
    showGap: false,
})