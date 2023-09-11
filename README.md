# Patrón Singleton

El patrón Singleton es un patrón de diseño de software que garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia desde cualquier parte de la aplicación. Es útil cuando se necesita tener un único punto de control para una cierta funcionalidad o cuando se desea limitar la creación de instancias de una clase a una sola instancia.

## Ventajas del patrón Singleton:

1. **Control de acceso**: Permite un control estricto sobre cómo y cuándo se crea la instancia de la clase Singleton.
2. **Reutilización de la instancia**: Evita la creación de múltiples instancias de la misma clase, lo que puede ser útil cuando se quiere compartir recursos o configuraciones entre partes de una aplicación.
3. **Facilita el acceso global**: Proporciona un punto de acceso global para acceder a la instancia única desde cualquier parte de la aplicación.
4. **Ahorro de recursos**: Puede ahorrar recursos cuando se necesita una única instancia costosa de crear (por ejemplo, una conexión a una base de datos).

## Desventajas del patrón Singleton:

1. **Puede ser difícil de testear**: Debido a su acoplamiento global, puede ser difícil testear unidades de código que dependen de una instancia Singleton.
2. **Puede violar el principio de responsabilidad única**: La instancia Singleton puede acumular múltiples responsabilidades con el tiempo, lo que va en contra del principio de responsabilidad única.
3. **Puede introducir problemas de concurrencia**: Si no se maneja adecuadamente, el Singleton puede causar problemas de concurrencia en aplicaciones multi-hilo.

A continuación, se presenta un ejemplo de implementación de un Singleton en TypeScript:

```typescript
class AppConfig {
  private static instance: AppConfig;
  private apiUrl: string;

  // El constructor es privado para evitar la creación directa de instancias
  private constructor() {
    // Inicializamos la configuración con valores predeterminados
    this.apiUrl = "https://api.example.com";
  }

  // Método estático para obtener la instancia única
  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }
    return AppConfig.instance;
  }

  public getApiUrl(): string {
    return this.apiUrl;
  }

  public setApiUrl(newUrl: string): void {
    this.apiUrl = newUrl;
  }
}

// Uso del Singleton
const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

// Verificamos que ambas instancias sean iguales
console.log(config1 === config2); // Debe imprimir true

// Modificamos la configuración
config1.setApiUrl("https://api.new-example.com");

// Accedemos a la configuración desde otra parte de la aplicación
const config3 = AppConfig.getInstance();
console.log(config3.getApiUrl()); // Debe imprimir "https://api.new-example.com"
```

### Explicación paso a paso:

1. Creamos la clase `AppConfig` que representa la configuración de la aplicación. Tiene un constructor privado para evitar la creación de múltiples instancias.

2. Dentro del constructor, inicializamos la configuración con valores predeterminados. En este caso, establecemos una URL de API predeterminada.

3. Definimos un método estático `getInstance()` para obtener la instancia única de `AppConfig`. Si la instancia aún no existe, la creamos y la almacenamos en la propiedad estática `instance`.

4. Agregamos métodos para obtener y modificar la configuración. En este ejemplo, tenemos `getApiUrl()` para obtener la URL de la API y `setApiUrl()` para cambiarla.

5. En el uso del Singleton, obtenemos dos instancias de `AppConfig` (config1 y config2) llamando a `getInstance()` en dos ocasiones. Ambas instancias son iguales, lo que demuestra que solo hay una instancia de `AppConfig`.

6. Modificamos la URL de la API en `config1` usando `setApiUrl()` y luego accedemos a la configuración desde otra parte de la aplicación en `config3`. La URL de la API se ha actualizado correctamente, lo que demuestra que todos comparten la misma instancia de configuración.

## Prerrequisitos

Asegúrate de tener Node.js y npm instalados en tu sistema.

### Ejecución del código de ejemplo:

1. Clona este repositorio en tu equipo:

```
git clone https://github.com/cpcastells/sprint1-singleton.git
```

2. Instala las dependencias

```
npm install
```

3. Compila el código utilizando el comando:

```
npm run build
```

4. Ejecuta el código utilizando el siguiente comando:

```
npm start
```

---

Este proyecto fue desarrollado como parte del Sprint 1 en IT Academy (Node.js).
