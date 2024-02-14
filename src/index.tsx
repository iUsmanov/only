import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
// eslint-disable-next-line fsd-paths-guard/relative-path-checker
import { App } from './app/components/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
