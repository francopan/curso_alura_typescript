export function domInject(selector: string) {
    return function(target: any, key: string) {
        let elemento = jQuery;

        const getter = function() {
            if (!elemento) {
                this.elemento = $(selector);
            }
            return elemento;
        };

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}