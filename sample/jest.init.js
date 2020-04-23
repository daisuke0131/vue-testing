import { config } from "@vue/test-utils";
import translations from "./src/translations";

const locale = "en";

config.mocks["$t"] = msg => translations[locale][msg];
