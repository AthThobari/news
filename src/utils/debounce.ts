export function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number,
    immediate = false,
) {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T> ) {
        const context = this;
        const callNow = immediate && !timeout;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if(callNow) func.apply(context, args)
    }
}