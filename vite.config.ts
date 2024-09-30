import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [sveltekit(), react()]
});
