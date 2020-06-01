Pasos para la app de tareas:

1) Vamos a tener que tomar diferentes caminos en base a una acción pedida por el usuario.
	Acción del usuario ->luego:
		- Si pido listar las tareas.
		- Si pido ver 1 tarea en particular. //Opcional.
		- Si pido una acción no definida.
		- Si pido nada.


Presentar las alternativas dentro de un switch.
	- listar: 
	- verUna:
	- undefined:
	- default:

¿Qué problema voy a tener si agrego una tarea o cambio su estado? -> Para resolverlo tenemos que persistir los datos y vamos a usar un archivo json.


## Paso 1: ver como obtenemos datos/ acciones del usuario.
## Paso 2: definamos que hacer con la acción que pidió el usuario.
## Paso 3: definir que va a pasar con cada acción del usuario.
Necesitamos construir funciones que se ocupen de procesar y entregar información por consola para las diferentes situaciones que pida el usuairo y/o que necesite el sistema. Por ejemplo: listar tareas, listar una tarea, leer un archivo json, guardar datos en un archivo json, crear una nueva tarea, cambiar el estado de una tarea, 
