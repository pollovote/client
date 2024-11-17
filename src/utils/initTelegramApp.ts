import { init, swipeBehavior, isMiniAppMounted } from '@telegram-apps/sdk-react';

export const initTelegramApp = () => {
  init();
  if (isMiniAppMounted()) swipeBehavior.disableVertical();
};
