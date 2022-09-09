import type { App } from "vue";
import { formatUtcTime } from "@/utils/formatUtcTime";

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcTime(value);
    },
  };
}
