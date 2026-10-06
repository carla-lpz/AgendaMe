This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Primer Parcial - Aplicaciones Móviles

Siguiendo las indicaciones de las consignas, tuve varios errores en el camino enumerados desde el más complejo hasta el menos complejo:

1. Error con el SDK 56 y expo-router
```bash
 ERROR  As of SDK 56, expo-router is no longer compatible with react-navigation.
```
2. La solución que me recomienda es actualizar la libreria o cambiar el import a
```bash
  import { Stack } from 'expo-router';
  #o
  import { Drawer } from 'expo-router/drawer';
```
3. Intenté actualizar el SDK de 55 a 56 pero no funcionó. Por lo que intenté desactivar el error de manera manual, pero ya no compilaba. 

## AgendaMe - App para agendar consumo de medicamentos

La estructuración de la app consiste en:

```bash
        |-src
            |-app
                #|-_layout.tsx
                #|-home.tsx
                #|-login.tsx
                #|-profile.tsx
            |-context
                #|-auth-context.tsx
            |hook
                #|-addReminder
                #|-deleteReminder
                #|-modReminder
                #|-dateTime

```