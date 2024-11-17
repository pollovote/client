import { StrictMode } from 'react';
import '@/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import { initTelegramApp } from '@/utils/initTelegramApp';
import { ContextStore, RootStore } from '@/store';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { initI18n } from '@/utils/initI18n';
import { activateAuthToken } from '@/utils';
import 'i18next';

runApp();

async function runApp() {
  initTelegramApp();
  await initI18n();
  await activateAuthToken();
  const store = new RootStore();

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ContextStore.Provider value={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ContextStore.Provider>
    </StrictMode>
  );
}
