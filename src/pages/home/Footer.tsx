import { Anchor, HStack, VStack } from "@hope-ui/solid"
import { useT } from "~/hooks"

export const Footer = () => {
  const t = useT()
  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1">
        <Anchor href="https://www.umbrao.com" external>
          {t("home.footer.moiusite_URL")}
        </Anchor>
        <span>|</span>
        <Anchor href="https://t.me/+yAwNL_m2qkA0Mjg9" external>
          {t("home.footer.moiusite_TG")}
        </Anchor>
        <span>|</span>
        <Anchor href="mailto:Support@umbrao.com" external>
          {t("home.footer.moiusite_MAIL")}
        </Anchor>
      </HStack>
      <HStack spacing="$1">
        <Anchor
          href="https://www.gnu.org/licenses/agpl-3.0-standalone.html"
          external
        >
          {t("home.footer.LICENSE")}
        </Anchor>
        <span>|</span>
        {t("home.footer.powered_by_1")}
        <Anchor href="https://github.com/Moiusite/Moiusite-alist-web" external>
          {t("home.footer.powered_by_2")}
        </Anchor>
        {t("home.footer.powered_by_3")}
      </HStack>
    </VStack>
  )
}
