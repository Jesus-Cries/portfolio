<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<div class="flex w-full justify-center pt-6">
    <div
        class="flex w-fit max-w-2xl flex-col gap-6 font-light [&_div]:flex [&_div]:flex-col [&_div]:gap-0.5 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-wide"
    >
        <h1 class="text-2xl font-semibold tracking-wide">{$i18n.t("legalNotice")}</h1>

        <h2 class="text-lg tracking-wide">{$i18n.t("informationAccordingDdg")}</h2>

        <div>
            <h3>{$i18n.t("address")}</h3>
            <p>Leon Obermann</p>
            <p>c/o IP-Management #42638</p>
            <p>Ludwig-Erhard-Str. 18</p>
            <p>20459 Hamburg</p>
            <p>{$i18n.t("germany")}</p>
        </div>

        <div>
            <h3>{$i18n.t("contactInformation")}</h3>
            <p>{$i18n.t("email")}: leon@obrm.de</p>
            <p>{$i18n.t("phone")}: +49 156 79543182</p>
        </div>

        <div>
            <h3>{$i18n.t("euDisputeResolution")}</h3>
            <p>
                {$i18n.t("theEuropeanCommissionProvides")}:
                <a
                    class="underline underline-offset-2 transition-colors hover:text-gray-200"
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ec.europa.eu/consumers/odr
                </a>
            </p>
            <p>{$i18n.t("youCanFindMyEmailAbove")}</p>
        </div>
    </div>
</div>
