<script lang="ts">
    import { onMount } from "svelte"

    let size: number = 500

    let blob: HTMLSpanElement

    let isThrottled: boolean = false
    const throttleDelay: number = 100

    function updateMousePosition(event: PointerEvent) {
        // Disable mouse follow for mobile devices
        if (event.pointerType === "touch") return

        // Do nothing if throttled
        if (isThrottled) return

        // Activate throttling
        isThrottled = true

        // Deactive throttling after delay
        setTimeout(() => {
            isThrottled = false
        }, throttleDelay)

        blob.animate(
            {
                left: `${event.clientX - size / 2}px`,
                top: `${event.clientY - size / 2}px`,
            },
            { duration: 400, fill: "forwards" }
        )
    }

    onMount(() => {
        window.addEventListener("pointermove", updateMousePosition)

        return () => {
            window.removeEventListener("pointermove", updateMousePosition)
        }
    })
</script>

<span
    bind:this={blob}
    class="spin-slow mouse-follow fixed -z-20 rounded-full bg-white bg-gradient-to-r from-primary-50 to-primary-300 dark:from-primary-500 dark:to-primary-800"
    style="width: {size}px; height: {size}px;"
/>

<span class="fixed -z-10 h-screen w-screen backdrop-blur-[12vmax]" />

<style>
    /* Hides mouse follow on touch devices */
    @media (hover: none) {
        .mouse-follow {
            display: none;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        50% {
            scale: 1 1.5;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spin-slow {
        animation: spin 20s linear infinite;
    }
</style>
