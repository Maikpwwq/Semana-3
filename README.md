# Semana-3-28

## Sprint Semana III

Reto de la semana 3 MisionTic2022 - backend del módulo de inicio de sesión.

## Equipo 28 integrantes:

-	Daniel Alejandro Eslava Avendaño
-	Heywin Hernando Meneses Perez
-	Carlos Eduardo Ruiz Pacheco
-	Michael Arias Fajardo
-   Fabián Tadeo Henao Escalante

## Actividades Semana 3

1. Documentar el proyecto. 
> documento de requerimientos, documento del proyecto, casos de uso e historias de usuario
2. construir un módulo de inicio de sesión
> user: campo nombre de usuario, campo contraseña y botón inicio de sesión
3. Documentar las pruebas del proyecto
> documento de pruebas
4. Ruta backend y su consumo
> '/api/auth/signin'
> exitoso: res.status(200).send({ accessToken: token });
> No existe usuario: res.status(404).send('User Not Found.');
> Contraseña invalida: res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
5. Data base mySQL 
> consultas de sequelize cli, name, email y password de tipo string. 
