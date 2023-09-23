class keyShortcuts {
	//delete
	isDelete(event: KeyboardEvent) {
		return event.key === 'Delete' || event.key === 'Backspace';
	}

	// save or update template
	isCtrlS(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'KeyS';
	}

	// select all
	isCtrlA(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'KeyA';
	}

	// copy
	isCtrlC(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'KeyC';
	}

	// paste
	isCtrlV(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'KeyV';
	}
	// redo
	isCtrlY(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'KeyY';
	}

	// cut
	isCtrlX(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'KeyX';
	}

	// move
	isArrowUp(event: KeyboardEvent) {
		return event.code === 'ArrowUp';
	}

	// move
	isShiftArrowUp(event: KeyboardEvent) {
		return event.shiftKey && event.code === 'ArrowUp';
	}

	// move
	isArrowDown(event: KeyboardEvent) {
		return event.code === 'ArrowDown';
	}

	// move
	isShiftArrowDown(event: KeyboardEvent) {
		return event.shiftKey && event.code === 'ArrowDown';
	}

	// move
	isArrowLeft(event: KeyboardEvent) {
		return event.code === 'ArrowLeft';
	}

	// move
	isShiftArrowLeft(event: KeyboardEvent) {
		return event.shiftKey && event.code === 'ArrowLeft';
	}

	// move
	isArrowRight(event: KeyboardEvent) {
		return event.code === 'ArrowRight';
	}

	// move
	isShiftArrowRight(event: KeyboardEvent) {
		return event.shiftKey && event.code === 'ArrowRight';
	}

	// modifier
	isShift(event: KeyboardEvent) {
		return event.shiftKey;
	}

	// lineHeight--
	isAltDown(event: KeyboardEvent) {
		return event.altKey && event.code === 'ArrowDown';
	}

	// lineHeight++
	isAltUp(event: KeyboardEvent) {
		return event.altKey && event.code === 'ArrowUp';
	}

	// charSpacing++
	isAltRight(event: KeyboardEvent) {
		return event.altKey && event.code === 'ArrowRight';
	}

	// charSpacing--
	isAltLeft(event: KeyboardEvent) {
		return event.altKey && event.code === 'ArrowLeft';
	}

	// Move down 1px
	isCtrlDown(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'ArrowDown';
	}

	// Move up 1px
	isCtrlUp(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'ArrowUp';
	}

	// Move right 1px
	isCtrlRight(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'ArrowRight';
	}

	// Move left 1px
	isCtrlLeft(event: KeyboardEvent) {
		return event.ctrlKey && event.code === 'ArrowLeft';
	}

	// Move down 10px
	isShiftCtrlDown(event: KeyboardEvent) {
		return event.ctrlKey && event.shiftKey && event.code === 'ArrowDown';
	}

	// Move up 10px
	isShiftCtrlUp(event: KeyboardEvent) {
		return event.ctrlKey && event.shiftKey && event.code === 'ArrowUp';
	}

	// Move right 10px
	isShiftRight(event: KeyboardEvent) {
		return event.ctrlKey && event.shiftKey && event.code === 'ArrowRight';
	}

	// Move left 10px
	isShiftCtrlLeft(event: KeyboardEvent) {
		return event.ctrlKey && event.shiftKey && event.code === 'ArrowLeft';
	}

	// redo
	isCtrlShiftZ(event: KeyboardEvent) {
		return event.ctrlKey && event.shiftKey && event.code === 'KeyZ';
	}

	// undo
	isCtrlZ(event: KeyboardEvent) {
		return event.ctrlKey && !event.shiftKey && event.code === 'KeyZ';
	}

	// zoom reset
	isCtrlOne(event: KeyboardEvent) {
		return event.ctrlKey && event.key === '1';
	}

	// zoom in
	isCtrlMinus(event: KeyboardEvent) {
		return event.ctrlKey && event.key === '-';
	}

	// zoom out
	isCtrlEqual(event: KeyboardEvent) {
		return event.ctrlKey && event.key === '=';
	}

	// zoom to fit
	isCtrlZero(event: KeyboardEvent) {
		return event.ctrlKey && event.key === '0';
	}
}

export default new keyShortcuts();
