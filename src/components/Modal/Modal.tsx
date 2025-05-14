"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
//vad är ens skillnaden mellan type och interface?
interface ModalProps {
	onClose: () => void;
	open: boolean;
}
const Modal = ({ onClose, open }: ModalProps) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);
	if (!open || !mounted) return null;
	return createPortal(
		<>
			<div className="modal-overlay" onClick={onClose}>
				<div onClick={handleModalClick} className="modal">
					<button className="modal-button" onClick={onClose}>
						X
					</button>
					<p>Open</p>
				</div>
			</div>
		</>,
		document.getElementById("portal")!
	);
};

export default Modal;
