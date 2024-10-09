<script lang="ts">
    import ContactIntro from "./ContactIntro.svelte"
    import TextInput from "./TextInput.svelte"
    import SuccessPopup from "./SuccessPopup.svelte"
    import { useI18n } from "$lib/useI18n"
    import type { SubmissionState } from "$lib/interfaces"
    import { CircleAlert } from "lucide-svelte"

    const i18n = useI18n()

    let submissionState: SubmissionState = "idle"
    let form: HTMLFormElement

    async function handleSubmit(event: Event) {
        submissionState = "submitting"

        // Prevent default form submission
        event.preventDefault()

        const formData = new FormData(form)

        try {
            const response = await fetch("/", { method: "POST", body: formData })

            console.log(response)

            if (response.status === 200) submissionState = "submitted"
            else submissionState = "error"
        } catch (e: any) {
            console.log(`An error occured while submitting contact form: ${e.stack}`)
        }
    }
</script>

<ContactIntro />

<div class="relative flex w-full justify-center">
    <!-- ======== Scroll destination for links ======== -->
    <span class="absolute -top-20" id="contact" />

    <form
        class="flex w-full max-w-2xl flex-col gap-6 lg:gap-7"
        bind:this={form}
        method="POST"
        on:submit={handleSubmit}
    >
        <!-- ======== Contact ======== -->
        <h3 class="text-3xl font-bold tracking-wider lg:text-4xl lg:tracking-widest">
            {$i18n.t("contact")}
        </h3>

        <!-- ======== Name ======== -->
        <TextInput
            name={"name"}
            label={$i18n.t("yourName")}
            placeholder={$i18n.t("namePlaceholder")}
            {submissionState}
        />

        <!-- ======== Email ======== -->
        <TextInput
            name={"email"}
            label={$i18n.t("yourEmail")}
            placeholder={$i18n.t("emailPlaceholder")}
            isEmail
            {submissionState}
        />

        <!-- ======== Message ======== -->
        <TextInput
            name={"message"}
            label={$i18n.t("yourMessage")}
            placeholder={$i18n.t("messagePlaceholder")}
            isTextarea
            {submissionState}
        />

        <p class="text-sm">
            {$i18n.t("privacyPolicyDisclaimer")}
            <a
                class="underline underline-offset-2 transition-colors hover:text-gray-200"
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer">{$i18n.t("privacyPolicyDisclaimer2")}</a
            >.
        </p>

        <!-- ======== Send ======== -->
        <div class="flex w-full flex-col gap-4 lg:gap-5">
            <button
                class="w-full rounded-xl bg-gray-50 p-3 font-semibold uppercase tracking-wider text-black shadow-image-glow transition-all hover:bg-gray-100 active:scale-95"
                type="submit"
                on:click={() => {
                    submissionState = "verifying"
                }}
            >
                <span class="relative">
                    {#if submissionState === "submitting"}
                        <div class="absolute -left-9 flex h-full items-center">
                            <span class="loading loading-spinner loading-sm bg-gray-500" />
                        </div>
                    {/if}
                    {$i18n.t("sendMessage")}
                </span>
            </button>

            {#if submissionState === "error"}
                <div class="flex justify-center">
                    <div class="flex items-center gap-2 lg:gap-3">
                        <!-- Span prevents resizing of icon when resizing window. -->
                        <span><CircleAlert /></span>
                        <p class="text-sm tracking-wide">
                            {$i18n.t("somethingWentWrong")} leon@obrm.de.
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    </form>
</div>

<SuccessPopup bind:submissionState {form} />
