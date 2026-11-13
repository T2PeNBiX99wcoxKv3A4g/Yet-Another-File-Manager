import {type Translate as SharedTranslate, useTranslation as useSharedTranslation} from "@photino-net-utils/bridge";
import type {LocalizationKey} from "./i18n.generated";

export type {LocalizationKey} from "./i18n.generated";

/**
 * The translator, narrowed to the keys the translation files declare. A renamed key or a typo is a
 * build error; a key that has no translation yet still falls back to the English key.
 */
export type Translate = SharedTranslate<LocalizationKey>;

export const useTranslation = useSharedTranslation<LocalizationKey>;

/**
 * A key only known at run time, such as a panel title the user renamed or a label built from a data
 * table. It documents why the call cannot be checked at compile time; the translator still falls
 * back to the value itself when no translation declares it.
 */
export function runtimeKey(value: string): LocalizationKey {
    return value as LocalizationKey;
}
