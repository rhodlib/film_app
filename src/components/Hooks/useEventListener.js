import { useCallback, useEffect } from "react";

/**
 * @template {HTMLElement} Target
 * @template {keyof DocumentEventMap} EventName
 * @template {DocumentEventMap[EventName]} EventType
 *
 * Hook to add event listeners to the DOM (document by default).
 *
 * @param {EventName} eventName Name of the event to be added.
 * @param {(event: EventType) => void} handler Event handler.
 * @param {Target | Document} [element=document] Target element (document by default).
 */
export const useEventListener = (eventName, handler, element = document) => {
	const savedHandler = useCallback(handler, [handler]);

	useEffect(() => {
		const eventListener = event => savedHandler(event);

		element.addEventListener(eventName, eventListener);

		return () => element.removeEventListener(eventName, eventListener);
	}, [eventName, element, savedHandler]);
};

export default useEventListener;
