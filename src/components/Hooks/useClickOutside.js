import { useCallback } from "react";
import useEventListener from "./useEventListener";

/**
 * @template {HTMLElement} TargetElement
 *
 * Click outside handler hook (returns ref to register click outside).
 *
 * @param {React.RefObject<TargetElement>} ref Reference to element.
 * @param {(event: MouseEvent) => void} onClickOutside Handler for click outside event.
 */
export const useClickOutside = (ref, onClickOutside) => {
	const clickOutsideHandler = useCallback(
		event =>
			ref.current !== null && !ref.current.contains(event.target)
				? onClickOutside(event)
				: undefined,
		[ref, onClickOutside]
	);

	useEventListener("click", clickOutsideHandler);
};

export default useClickOutside;
