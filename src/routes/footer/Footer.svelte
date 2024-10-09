<script lang="ts">
    import type { ILink } from "$lib/interfaces"

    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()

    interface ILinkList {
        title: string
        links: ILink[]
    }

    let linkLists: ILinkList[]

    $: linkLists = [
        {
            title: "Portfolio",
            links: [
                {
                    name: $i18n.t("projects"),
                    link: "#projects",
                },
                {
                    name: $i18n.t("skills"),
                    link: "#skills",
                },
                {
                    name: $i18n.t("about"),
                    link: "#about",
                },
            ],
        },
        {
            title: $i18n.t("projects"),
            links: [
                {
                    name: "Paletti",
                    link: "https://paletti.one",
                },
                {
                    name: "Boredom Buster",
                    link: "https://boredom-buster.obrm.de",
                },
            ],
        },
        {
            title: $i18n.t("social"),
            links: [
                {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/leon-obermann-171465208/",
                },
                {
                    name: "GitHub",
                    link: "https://github.com/Jesus-Cries",
                },
                {
                    name: "Email",
                    link: "mailto:leon@obrm.de",
                },
            ],
        },
    ]
</script>

<div
    class="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9 sm:gap-16 sm:pt-12"
>
    <div class="flex w-full max-w-4xl justify-evenly gap-3 text-sm xs:text-base">
        {#each linkLists as linkList}
            <!-- ======== Link List ======== -->
            <div class="flex flex-col gap-4 tracking-wider">
                <!-- ======== Title ======== -->
                <h4 class="font-bold">{linkList.title}</h4>

                <!-- ======== Links ======== -->
                <div class="flex flex-col gap-2">
                    {#each linkList.links as link}
                        <a
                            class="w-fit font-extralight transition-colors hover:text-gray-200"
                            href={link.link}
                            target={link.link.includes("http") ? "_blank" : "_self"}
                            rel={link.link.includes("http") ? "noopener noreferrer" : ""}
                        >
                            {link.name}
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>

    <!-- ======== Legal ======== -->
    <div
        class="flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 text-xs font-light tracking-widest sm:gap-x-7 sm:text-sm"
    >
        <!-- ======== Copyright ======== -->
        <p class="text-center">Copyright © 2024 Leon Obermann</p>

        <div class="flex gap-5 sm:gap-7">
            <!-- ======== Legal Notice ======== -->
            <a class="transition-colors hover:text-gray-200" href="legal-notice">
                {$i18n.t("legalNotice")}
            </a>
            <!-- ======== Privacy Policy ======== -->
            <a class="transition-colors hover:text-gray-200" href="privacy-policy">
                {$i18n.t("privacyPolicy")}
            </a>
        </div>
    </div>

    <!-- ======== Blur Layer ======== -->
    <div class="absolute left-0 top-0 -z-20 h-full w-full backdrop-blur-[50px]" />

    <!-- ======== Blurred White Gradient ======== -->
    <div
        class="absolute -left-1/4 top-[75%] -z-30 h-full w-[150%] rounded-full bg-gradient-to-tr from-[#2D2D2D] to-[#BDBDBD] opacity-15"
    />
</div>

<!-- ======== Blurred Blue Gradient ======== -->
<div
    class="absolute -bottom-44 -left-1/4 -z-50 h-[675px] w-[150%] -rotate-12 rounded-3xl bg-gradient-to-tr from-[#1474BA] to-[#033140] opacity-15"
/>
