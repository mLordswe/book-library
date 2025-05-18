"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
import ModalBookDetails from "./parts/ModalMain/ModalBookDetails";
import ModalMain from "./parts/ModalMain/ModalMain";
import { Outlet, useLocation, useNavigate } from "react-router";

interface ModalProps {
	onClose: () => void;
	open: boolean;
}
const handleModalClick = (e: React.MouseEvent) => {
	e.stopPropagation();
};

const Modal = ({ onClose, open }: ModalProps) => {
	const location = useLocation();
	const navigate = useNavigate();
	const handleClose = () => {
		navigate(location.pathname.split("/book")[0]);
	};
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
		handleClose();
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
					<ModalMain />
				</div>
			</div>
		</>,
		portalElement
	);
};

export default Modal;
