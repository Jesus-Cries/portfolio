<!--
  @component

  Contains navbar with logo, links to sections and email button
-->
<script lang="ts">
    import MediaQuery from "$lib/MediaQuery.svelte";
    import { Motion } from "svelte-motion";

    interface LinkProps {
        text: string;
        link: string;
    }

    const links: LinkProps[] = [
        { text: "About", link: "/" },
        { text: "Skills", link: "#skills" },
        { text: "Websites", link: "#websites" },
    ];

    let currentIndex: number = -1;
</script>

<div class="sticky z-50 w-full top-0">
    <div class="relative navbar bg-base-100 flex justify-between items-start content-center">
        <a
            class="btn btn-ghost normal-case text-2xl font-bold hover:bg-transparent hover:text-primary-600"
            href="/">obermann</a
        >
        <MediaQuery breakpoint="md">
            <svelte:fragment slot="above">
                <!-- TODO: Mark currently visited section of page -->
                <div class="flex gap-8 lg:gap-20">
                    {#each links as link, i}
                        <a
                            class="relative btn no-animation btn-ghost hover:bg-transparent hover:text-primary"
                            class:text-primary-600={currentIndex === i}
                            href={link.link}
                            on:click={() => (currentIndex = i)}
                        >
                            {link.text}

                            <div
                                class="absolute -bottom-[9px] w-full h-0.5 bg-primary-500 transition-all duration-500"
                                class:w-0={currentIndex !== i}
                                class:w-full={currentIndex === i}
                            />
                        </a>
                    {/each}
                </div>

                <Motion
                    let:motion
                    initial={{ rotate: 0, scale: 1 }}
                    animate={{ rotate: [0, 2.5, -5, 1.25, 0], scale: [1, 1.01, 1.02, 1, 1] }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 10,
                        delay: 5,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 10,
                    }}
                >
                    <div use:motion class="mt-2 mr-5">
                        <a
                            href="mailto:leon.oberm@gmail.com"
                            class="btn btn-primary no-animation btn-sm text-white shadow hover:border-none hover:shadow-lg transition-scale ease-out duration-300 hover:scale-[105%]"
                        >
                            Contact me
                        </a>
                    </div>
                </Motion>
            </svelte:fragment>

            <div slot="below" class="dropdown dropdown-end">
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <label tabindex="0" class="btn btn-ghost m-1" for="Menu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul
                    tabindex="0"
                    class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 border border-gray-200"
                >
                    {#each links as link}
                        <li>
                            <a href={link.link}>
                                {link.text}
                            </a>
                        </li>
                    {/each}

                    <div class="divider mx-3 -my-1" />

                    <li>
                        <a href="mailto:leon.oberm@gmail.com" class="font-semibold"> Contact me </a>
                    </li>
                </ul>
            </div>
        </MediaQuery>
    </div>
    <div class="divider mx-5 -my-2" />
</div>