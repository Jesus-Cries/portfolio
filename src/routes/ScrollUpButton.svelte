<script lang="ts">
    import { onMount } from "svelte"
    import { ChevronUp } from "lucide-svelte"
    import { afterNavigate } from "$app/navigation"

    let showButton: boolean = true
    let throttled: boolean = false

    /** Shows scroll button in bottom right corner if scrolled down more than 500px. */
    function handleScroll() {
        if (throttled) return

        throttled = true

        showButton = window.scrollY > 500

        // Blocks multiple calls due to scroll event within 100ms
        setTimeout(() => {
            throttled = false
        }, 100)
    }

    // Hides button after navigation
    afterNavigate(() => {
        setTimeout(() => {
            showButton = false
        }, 100)
    })

    onMount(() => {
        document.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })
</script>

<button
    class="glass-border fixed bottom-4 right-4 z-50 rounded-full bg-gray-400/20 p-2.5 shadow-md backdrop-blur-[5px] transition-all duration-300 hover:bg-gray-600/20 lg:bottom-6 lg:right-6 {!showButton &&
        'opacity-0'}"
    on:click={() => {
        window.scrollTo(0, 0)
    }}
    disabled={!showButton}
    aria-label="Scroll to top"
>
    <ChevronUp color="#fff" size="36" strokeWidth={1.5} />
</button>
