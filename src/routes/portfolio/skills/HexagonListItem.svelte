<!--
  @component

  Contains single skill in hexagon form
  @param {SkillProps} skill - Skill to display
-->
<script lang="ts">
    import type { SkillProps } from "$lib/interfaces"
    export let skill: SkillProps

    import OnViewTransition from "$lib/OnViewTransition.svelte"
    import { scale } from "svelte/transition"
</script>

<OnViewTransition>
    <div
        class="tooltip"
        data-tip={skill.name.length > 20 ? skill.abbreviation : skill.name}
        in:scale
    >
        <div class="drop-shadow transition-all hover:drop-shadow-lg">
            <a
                class="image-hex transition-scale btn no-animation flex h-[5.6rem] w-20 content-center items-center justify-center border-0 bg-white duration-300 ease-out hover:scale-110 hover:bg-white md:h-[104px] md:w-24 dark:bg-gradient-to-br dark:from-primary-700 dark:to-primary-800"
                href={`https://${skill.link}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {#if skill.hasLogo}
                    <img
                        src={`logos/${skill.name}.png`}
                        alt={`${skill.name} logo`}
                        class="rounded-md object-contain {skill.name === 'Svelte Kit'
                            ? 'w-full scale-125'
                            : 'max-h-12 w-12 md:max-h-14 md:w-14'}"
                    />
                {:else}
                    <p class="w-full text-center text-3xl font-light text-base-content md:text-4xl">
                        {skill.abbreviation}
                    </p>
                {/if}
            </a>
        </div>
    </div>
</OnViewTransition>

<style>
    .image-hex {
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    }
</style>
