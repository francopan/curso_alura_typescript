export function throttle(milissegundos: number = 500) {
    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        // Metodo Original
        const metodoOriginal = descriptor.value;

        // Altera metodo contendo um medidor de performance
        let timer = 0;
        descriptor.value = function(...args: any[]) {
            clearInterval(timer);
            timer = setTimeout(() => { metodoOriginal.apply(this, args);}, milissegundos);
        }

        // Retorna descritor do metodo
        return descriptor;
    }
}