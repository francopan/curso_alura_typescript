export function logarTempoExecucao() {
    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        // Metodo Original
        const metodoOriginal = descriptor.value;

        // Altera metodo contendo um medidor de performance
        descriptor.value = function(...args: any[]) {
            console.log(`Running ${propertyKey} with parameters: ${JSON.stringify(args)}`)
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} execution took ${t2 -t1}ms`); 
            return retorno;
        }

        // Retorna descritor do metodo
        return descriptor;
    }
}