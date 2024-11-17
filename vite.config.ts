import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';
import tsconfigPaths from 'vite-tsconfig-paths';
import localtunnel, { Tunnel } from 'localtunnel';

interface LocaltunnelOptions {
  subdomain?: string;
}

export default defineConfig({
  plugins: [vitePluginLocaltunnel({ subdomain: 'cephei-mini-app-af4fdcs44' }), react(), svgr(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [autoprefixer({})]
    }
  }
});

function vitePluginLocaltunnel(options: LocaltunnelOptions): Plugin {
  let tunnel: Tunnel;

  return {
    name: 'vite-plugin-localtunnel',
    configureServer(server) {
      server.httpServer?.on('listening', async () => {
        const port = server.config.server.port || 3000;
        tunnel = await localtunnel({ port, subdomain: options.subdomain });
      });
      server.httpServer?.on('close', () => {
        if (tunnel) {
          tunnel.close();
        }
      });
    }
  };
}
