import { useEditor } from '@layerhub-io/react';
import { useCallback } from 'react';

export default function Toolbox() {
	const editor = useEditor();

	const handleClickZoomOut = useCallback(() => {
		if (editor) {
			editor.zoom.zoomOut();
		}
	}, [editor]);

	const handleClickZoomIn = useCallback(() => {
		if (editor) {
			editor.zoom.zoomIn();
		}
	}, [editor]);

	const handleClickZoomToFit = useCallback(() => {
		if (editor) {
			editor.zoom.zoomToFit();
		}
	}, [editor]);

	const handleClickHistoryUndo = useCallback(() => {
		if (editor) {
			editor.history.undo();
		}
	}, [editor]);

	const handleClickHistoryRedo = useCallback(() => {
		if (editor) {
			editor.history.redo();
		}
	}, [editor]);

	return (
		<div className="flex flex-col items-end justify-end gap-4 h-full p-6">
			<div className="flex flex-col ">
				<button
					className="group bg-gray-150 hover:bg-gray-250 border border-gray-250 p-2 rounded-tl rounded-tr"
					onClick={handleClickZoomIn}
					title="Zoom in"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 group-hover:scale-105"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M7 10l6 0" />
						<path d="M10 7l0 6" />
						<path d="M21 21l-6 -6" />
					</svg>
				</button>
				<button
					className="group bg-gray-150 hover:bg-gray-250 border border-gray-250 border-t-0 p-2 "
					onClick={handleClickZoomToFit}
					title="Zoom to fit"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 group-hover:scale-105"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
						<path d="M4 16v2a2 2 0 0 0 2 2h2" />
						<path d="M16 4h2a2 2 0 0 1 2 2v2" />
						<path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
						<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
					</svg>
				</button>
				<button
					className="group bg-gray-150 hover:bg-gray-250 border border-gray-250 border-t-0 p-2 rounded-bl rounded-br"
					onClick={handleClickZoomOut}
					title="Zoom Out"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 group-hover:scale-105"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
						<path d="M7 10l6 0" />
						<path d="M21 21l-6 -6" />
					</svg>
				</button>
			</div>
			<div className="flex flex-col ">
				<button
					className="group bg-gray-150 hover:bg-gray-250 border border-gray-250 p-2 rounded-tl rounded-tr"
					onClick={handleClickHistoryRedo}
					title="Redo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 group-hover:scale-105"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M15 14l4 -4l-4 -4" />
						<path d="M19 10h-11a4 4 0 1 0 0 8h1" />
					</svg>
				</button>
				<button
					className="group bg-gray-150 hover:bg-gray-250 border border-gray-250 border-t-0 p-2 rounded-bl rounded-br"
					onClick={handleClickHistoryUndo}
					title="Undo"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 group-hover:scale-105"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
					</svg>
				</button>
			</div>
		</div>
	);
}
