import { Canvas, useEditor } from '@layerhub-io/react';
import { useCallback } from 'react';
import Toolbox from './Toolbox/Toolbox';

export default function Editor() {
	const editor = useEditor();

	const handleClickAddText = useCallback(() => {
		if (editor) {
			editor.objects.add({
				type: 'StaticText',
				text: 'Hello World!',
				textAlign: 'center',
				fontSize: 48,
				fontFamily: 'sans-serif',
			});
		}
	}, [editor]);

	return (
		<div className="flex flex-col w-screen h-screen bg-[#ECF0F1]">
			<div className="h-20 flex items-center justify-between p-8 border-b border-white">
				<h1 className="text-3xl font-semmibold text-gray-700">
					<span className="font-bold">React</span>Editor
				</h1>
				<div className="flex items-center justify-center gap-2">
					<button
						onClick={handleClickAddText}
						className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
					>
						Add Text
					</button>
				</div>
			</div>

			<div className="w-full h-full relative flex flex-1 ">
				<div className="flex items-center justify-between w-full h-full">
					<div className="flex felx-1 justify-center w-full h-full">
						<Canvas />
					</div>
					<Toolbox />
				</div>
			</div>
		</div>
	);
}
