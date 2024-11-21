# Compose-ITC-ALVARO
>[!Note]
>Este es un proyecto de un ecommerce con crud incluido, realizado en python, cuenta con una api FASTAPI,que realiza las peticiones a la db y un FRONT con FLASK. Tambien cuenta con un logeador de logs ELASTIC SEARCH Y KIBANA para visualizar lo que sucede en tu app y por ultimo cuenta con protocolo mtls que verifica que el cliente(front) y servidor (api) sean quien dicen ser (NADIE QUE NO TENGA LOS CERTIFICADOS PODRA UTILIZAR LA API y biceversa)

>[!Important] 
>Para poder ejecutar el proyecto realizaremos los siguiente pasos:
>
>1-Entrar al directorio donde querramos clonar nuestro proyecto y ejecutamos el siguiente comando "git clone https://github.com/Alvaro-gonzalez05/Compose-ITC-ALVARO.git"
>
>2-Una vez clonado el repo ,nos pararemos adentro del directorio clonado , con el siguiente comando "cd Compose-ITC-ALVARO"
>
>3-Cuando entramos ejecutamos el siguiente comando para empezar a levantar el proyecto , "docker compose up --build"
>
>4- Veremos que se van a empezar a crear/levantar las imagenes de nuestros proyectos, una vez finalizada podremos entrar a nuestro front mediante ls siguiente url "https://0.0.0.0:5000" y nuestra api correra en el puerto 8000


>[!Warning]
>En el caso que no funcione entrar por "https://0.0.0.0:5000" prueba entrando por "https://127.0.0.1:5000" para el front, o "https://127.0.0.1:8000" para la api

>[!Tip]
>Para explorar todas las funcionalidades del proyecto registrarse como "admid" en el register, y despues logearse desde el login 

>[!Caution]
>Recuerda que si queremos entrar a nuestra api ,esta nos rechazara la conexion porque no cumplimos con el certificado que pide. Solo se podria acceder ,a ver la api, agregandole el certificado al navegador.
