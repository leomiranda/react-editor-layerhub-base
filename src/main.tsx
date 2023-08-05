import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider as LayerhubProvider } from '@layerhub-io/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<LayerhubProvider>
		<App />
	</LayerhubProvider>
);
