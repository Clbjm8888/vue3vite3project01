export {}; //必须写， 否则会履盖原生的

declare module "vue" {
  interface ComponentCustomProperties {
    $filters: {
      formatTime: (str: string) => string;
    };
  }
}
