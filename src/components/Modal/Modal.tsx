"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

import { useLocation, useNavigate } from "react-router";

interface ModalProps {
	onClose: () => void;
	open: boolean;
	children?: ReactNode;
}
const handleModalClick = (e: React.MouseEvent) => {
	e.stopPropagation();
};

const Modal = ({ onClose, open, children }: ModalProps) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

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
	function handleOverlayClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
		e.stopPropagation();
		onClose();
	}
	if (!open || !mounted) return null;
	const portalElement = typeof window !== "undefined" ? document.getElementById("portal") : null;
	if (!portalElement) return null;
	return createPortal(
		<>
			<div className="modal-overlay" onClick={handleOverlayClick}>
				<div onClick={handleModalClick} className="modal">
					<button className="modal-button" onClick={onClose}>
						X
					</button>
					{children}
				</div>
			</div>
		</>,
		portalElement
	);
};

export default Modal;
